/**
 * KI-Führerschein Campus - Application Engine
 * Vollständige Interaktivität, Navigation, Kapitel-Hubs, Simulationen, Quiz-Engine und Zertifikate.
 */

class KICampusApp {
  constructor() {
    this.currentLessonId = "les-1-1";
    this.currentChapterId = null;
    this.completedLessons = new Set(JSON.parse(localStorage.getItem("ki_completed_lessons") || "[]"));
    this.examAnswers = {};
    this.examScore = parseInt(localStorage.getItem("ki_exam_score") || "0", 10);
    this.userName = localStorage.getItem("ki_user_name") || "Istvan Csovrij";
    this.soundEnabled = localStorage.getItem("ki_sound_enabled") !== "false";
    this.theme = localStorage.getItem("ki_theme") || "dark";

    this.audioCtx = null;
    this.initAudio();

    this.initDOM();
    this.bindEvents();
    this.renderSidebar();
    this.loadLesson(this.currentLessonId);
    this.updateProgress();
    this.applyTheme(this.theme);
  }

  initAudio() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    } catch (e) {
      console.warn("AudioContext not supported", e);
    }
  }

  playSound(type) {
    if (!this.soundEnabled || !this.audioCtx) return;
    try {
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      const now = this.audioCtx.currentTime;
      if (type === 'success') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, now);
        osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.1);
        osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.2);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
        osc.start(now);
        osc.stop(now + 0.35);
      } else if (type === 'error') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.linearRampToValueAtTime(160, now + 0.2);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
        osc.start(now);
        osc.stop(now + 0.25);
      } else if (type === 'click') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(440, now);
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
        osc.start(now);
        osc.stop(now + 0.08);
      }
    } catch (e) {
      // Audio fallback silent
    }
  }

  initDOM() {
    this.sidebar = document.getElementById("appSidebar");
    this.contentArea = document.getElementById("contentArea");
    this.progressFill = document.getElementById("headerProgressFill");
    this.progressText = document.getElementById("headerProgressText");
    this.themeToggleBtn = document.getElementById("themeToggleBtn");
    this.soundToggleBtn = document.getElementById("soundToggleBtn");
    this.sidebarToggleBtn = document.getElementById("sidebarToggleBtn");
  }

  bindEvents() {
    this.themeToggleBtn.addEventListener("click", () => {
      this.playSound("click");
      this.theme = this.theme === "dark" ? "light" : "dark";
      this.applyTheme(this.theme);
    });

    this.soundToggleBtn.addEventListener("click", () => {
      this.soundEnabled = !this.soundEnabled;
      localStorage.setItem("ki_sound_enabled", this.soundEnabled);
      this.updateSoundBtn();
      this.playSound("click");
    });

    this.sidebarToggleBtn.addEventListener("click", () => {
      this.playSound("click");
      this.sidebar.classList.toggle("open");
    });

    document.addEventListener("click", (e) => {
      if (window.innerWidth <= 992 && !this.sidebar.contains(e.target) && !this.sidebarToggleBtn.contains(e.target)) {
        this.sidebar.classList.remove("open");
      }
    });
  }

  applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("ki_theme", theme);
    this.themeToggleBtn.innerHTML = theme === "dark"
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  }

  updateSoundBtn() {
    this.soundToggleBtn.innerHTML = this.soundEnabled
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>`;
  }

  getAllLessons() {
    const list = [];
    COURSE_DATA.modules.forEach(m => {
      m.chapters.forEach(c => {
        c.lessons.forEach(l => {
          list.push({ lesson: l, chapter: c, module: m });
        });
      });
    });
    return list;
  }

  updateProgress() {
    const all = this.getAllLessons();
    const totalLessons = all.length;
    const completedCount = this.completedLessons.size;
    const pct = Math.min(100, Math.round((completedCount / totalLessons) * 100));

    if (this.progressFill) this.progressFill.style.width = `${pct}%`;
    if (this.progressText) this.progressText.textContent = `${pct}% Fertig`;
  }

  renderSidebar() {
    let html = `<div class="sidebar-section-title">Lehrplan & Navigation</div><ul class="module-nav-list">`;

    COURSE_DATA.modules.forEach(mod => {
      html += `
        <li class="module-item">
          <div class="module-header" onclick="app.toggleModuleCollapse('${mod.id}')">
            <div class="module-title-box">
              <div class="module-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h3>Modul ${mod.number}: ${mod.title.split(':')[1] || mod.title}</h3>
            </div>
            <span class="module-badge">${mod.badge}</span>
          </div>
          <ul class="chapter-list" id="chapter-list-${mod.id}">
      `;

      mod.chapters.forEach(chap => {
        const isChapActive = this.currentChapterId === chap.id;
        html += `
          <li class="chapter-wrapper">
            <button class="chapter-nav-btn ${isChapActive ? 'active' : ''}" 
                    id="chap-btn-${chap.id}" 
                    onclick="app.loadChapterOverview('${chap.id}')"
                    title="Kapitelübersicht öffnen">
              <span class="chapter-nav-title">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                ${chap.title}
              </span>
              <span class="chapter-count-badge">${chap.lessons.length} Lekt.</span>
            </button>
            <ul class="chapter-sublessons-list">
        `;

        chap.lessons.forEach(les => {
          const isDone = this.completedLessons.has(les.id);
          const isActive = this.currentLessonId === les.id && !this.currentChapterId;
          html += `
            <li>
              <button class="lesson-nav-btn ${isActive ? 'active' : ''} ${isDone ? 'completed' : ''}" 
                      id="nav-btn-${les.id}"
                      onclick="app.loadLesson('${les.id}')">
                <span>${les.number} ${les.title}</span>
                <span class="lesson-status-icon">${isDone ? '✓' : ''}</span>
              </button>
            </li>
          `;
        });

        html += `</ul></li>`;
      });

      html += `</ul></li>`;
    });

    html += `</ul>`;
    this.sidebar.innerHTML = html;
  }

  toggleModuleCollapse(modId) {
    const el = document.getElementById(`chapter-list-${modId}`);
    if (el) {
      el.style.display = el.style.display === "none" ? "block" : "none";
    }
  }

  findChapter(chapId) {
    for (const mod of COURSE_DATA.modules) {
      for (const chap of mod.chapters) {
        if (chap.id === chapId) return { chapter: chap, module: mod };
      }
    }
    return null;
  }

  findLesson(lessonId) {
    for (const mod of COURSE_DATA.modules) {
      for (const chap of mod.chapters) {
        for (const les of chap.lessons) {
          if (les.id === lessonId) return { lesson: les, chapter: chap, module: mod };
        }
      }
    }
    return null;
  }

  loadChapterOverview(chapId) {
    this.playSound("click");
    this.currentChapterId = chapId;
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Highlight chapter in sidebar
    document.querySelectorAll(".chapter-nav-btn").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".lesson-nav-btn").forEach(b => b.classList.remove("active"));
    const chapBtn = document.getElementById(`chap-btn-${chapId}`);
    if (chapBtn) chapBtn.classList.add("active");

    const found = this.findChapter(chapId);
    if (!found) return;

    const { chapter, module } = found;

    // Render Chapter Hub
    let lessonsListHtml = chapter.lessons.map(les => {
      const isDone = this.completedLessons.has(les.id);
      return `
        <div class="chapter-hub-card" onclick="app.loadLesson('${les.id}')">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <span class="badge-tag">Lektion ${les.number}</span>
            <span class="lesson-status-pill ${isDone ? 'done' : 'open'}">
              ${isDone ? '✓ Abgeschlossen' : 'Offen'}
            </span>
          </div>
          <h4 style="font-size: 1.15rem; color: var(--text-main); font-weight: 700; margin-bottom: 6px;">${les.title}</h4>
          <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 12px;">${les.summary}</p>
          <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.8rem; color: var(--text-dim);">
            <span>Lesezeit: ${les.readTime}</span>
            <span style="color: var(--accent-cyan); font-weight: 600;">Jetzt starten →</span>
          </div>
        </div>
      `;
    }).join('');

    const firstLessonId = chapter.lessons[0] ? chapter.lessons[0].id : null;

    let html = `
      <div class="lesson-hero">
        <div class="lesson-meta-bar">
          <span class="badge-tag">Kapitel-Übersicht</span>
          <span class="read-time">${chapter.lessons.length} Lektionen</span>
        </div>
        <h2>${chapter.title}</h2>
        <p class="lead">${chapter.description || 'In diesem Kapitel erlernen Sie fundamentale Kernkompetenzen und praktische Fertigkeiten.'}</p>
      </div>

      <div class="content-block">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
          <div>
            <h3 style="font-size: 1.3rem; font-weight: 700; color: var(--text-main);">Lektionen in diesem Kapitel</h3>
            <p style="font-size: 0.9rem; color: var(--text-muted);">Wählen Sie eine Lektion aus oder starten Sie der Reihe nach:</p>
          </div>
          ${firstLessonId ? `
            <button class="btn btn-primary" onclick="app.loadLesson('${firstLessonId}')">
              Kapitel starten
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          ` : ''}
        </div>

        <div class="chapter-hub-grid">
          ${lessonsListHtml}
        </div>
      </div>
    `;

    this.contentArea.innerHTML = html;
  }

  loadLesson(lessonId) {
    this.playSound("click");
    this.currentLessonId = lessonId;
    this.currentChapterId = null;
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Update active nav button
    document.querySelectorAll(".chapter-nav-btn").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".lesson-nav-btn").forEach(btn => btn.classList.remove("active"));
    const activeBtn = document.getElementById(`nav-btn-${lessonId}`);
    if (activeBtn) activeBtn.classList.add("active");

    const found = this.findLesson(lessonId);
    if (!found) return;

    const { lesson, chapter, module } = found;

    if (lesson.isExam) {
      this.renderExamView();
      return;
    }

    if (lesson.isCertificate) {
      this.renderCertificateView();
      return;
    }

    // Standard Lesson View
    let html = `
      <div class="lesson-hero">
        <div class="lesson-meta-bar">
          <span class="badge-tag">Modul ${module.number} · Kapitel ${chapter.number}</span>
          <span class="read-time">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            ${lesson.readTime}
          </span>
        </div>
        <h2>${lesson.number} ${lesson.title}</h2>
        <p class="lead">${lesson.summary}</p>
      </div>
    `;

    // Render Content Sections
    if (lesson.sections) {
      lesson.sections.forEach(sec => {
        html += this.renderSection(sec);
      });
    }

    // Bottom Navigation Bar
    html += `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 48px; padding-top: 24px; border-top: 1px solid var(--border-color);">
        <button class="btn btn-secondary" onclick="app.navigateRelative(-1)">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
          Vorherige Lektion
        </button>
        <button class="btn btn-primary" onclick="app.markLessonCompleteAndNext('${lesson.id}')">
          Lektion abschließen & Weiter
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>
    `;

    this.contentArea.innerHTML = html;
  }

  renderSection(sec) {
    if (sec.type === "hero") {
      return `
        <div class="content-block">
          <h3 class="block-title">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
            ${sec.title}
          </h3>
          <p style="font-size: 1.05rem; line-height: 1.8; color: var(--text-muted);">${sec.content}</p>
        </div>
      `;
    }

    if (sec.type === "comparison_cards") {
      let cardsHtml = sec.cards.map(c => `
        <div style="flex: 1; min-width: 280px; padding: 24px; border-radius: var(--radius-md); background: ${c.theme === 'emerald' ? 'rgba(16, 185, 129, 0.08)' : 'rgba(245, 158, 11, 0.08)'}; border: 1px solid ${c.theme === 'emerald' ? 'rgba(16, 185, 129, 0.3)' : 'rgba(245, 158, 11, 0.3)'};">
          <h4 style="font-size: 1.15rem; font-weight: 700; color: ${c.theme === 'emerald' ? 'var(--accent-emerald)' : 'var(--accent-amber)'}; margin-bottom: 14px; display: flex; align-items: center; gap: 8px;">
            ${c.category}
          </h4>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 10px;">
            ${c.points.map(p => `<li style="font-size: 0.92rem; color: var(--text-muted); display: flex; gap: 8px;"><span style="color:${c.theme === 'emerald' ? 'var(--accent-emerald)' : 'var(--accent-amber)'}">•</span> ${p}</li>`).join('')}
          </ul>
        </div>
      `).join('');

      return `
        <div class="content-block">
          <h3 class="block-title">${sec.title}</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 20px;">
            ${cardsHtml}
          </div>
        </div>
      `;
    }

    if (sec.type === "scientific_study") {
      let findingsHtml = sec.findings.map(f => `
        <div class="finding-row">
          <span class="finding-label">${f.label}:</span>
          <span style="color: var(--text-muted);">${f.detail}</span>
        </div>
      `).join('');

      return `
        <div class="study-box">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px;">
            <span class="badge-tag" style="background: rgba(139, 92, 246, 0.2); color: var(--accent-purple); border-color: rgba(139, 92, 246, 0.4);">${sec.badge}</span>
          </div>
          <h4 style="font-size: 1.2rem; font-weight: 700; color: var(--text-main); margin-bottom: 8px;">${sec.title}</h4>
          <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.6;">${sec.description}</p>
          <div class="study-findings">
            ${findingsHtml}
          </div>
          <div style="margin-top: 16px; padding: 12px 16px; background: rgba(0, 0, 0, 0.2); border-radius: var(--radius-sm); font-size: 0.9rem; font-weight: 600; color: var(--accent-cyan);">
            💡 ${sec.takeaway}
          </div>
        </div>
      `;
    }

    if (sec.type === "accordion_group") {
      let itemsHtml = sec.items.map(item => `
        <div class="accordion-item" id="${item.id}">
          <div class="accordion-header" onclick="app.toggleAccordion('${item.id}')">
            <div>
              <h4>${item.term}</h4>
              <p class="subtext">${item.summary}</p>
            </div>
            <div class="accordion-chevron">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
            </div>
          </div>
          <div class="accordion-body">
            <p>${item.details}</p>
          </div>
        </div>
      `).join('');

      return `
        <div class="content-block">
          <h3 class="block-title">${sec.title}</h3>
          <div class="accordion-wrapper">
            ${itemsHtml}
          </div>
        </div>
      `;
    }

    if (sec.type === "tabbed_content") {
      let navBtns = sec.tabs.map((tab, idx) => `
        <button class="tab-btn ${idx === 0 ? 'active' : ''}" onclick="app.switchTab('${tab.id}', this)">
          ${tab.title}
        </button>
      `).join('');

      let panes = sec.tabs.map((tab, idx) => `
        <div class="tab-pane ${idx === 0 ? 'active' : ''}" id="${tab.id}">
          <span class="badge-tag" style="margin-bottom: 12px;">${tab.badge}</span>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 12px;">
            <div style="padding: 16px; border-radius: var(--radius-sm); background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.2);">
              <h5 style="color: var(--accent-emerald); font-weight: 700; margin-bottom: 6px;">Stärke:</h5>
              <p style="font-size: 0.92rem; color: var(--text-muted);">${tab.pros}</p>
            </div>
            <div style="padding: 16px; border-radius: var(--radius-sm); background: rgba(244, 63, 94, 0.08); border: 1px solid rgba(244, 63, 94, 0.2);">
              <h5 style="color: var(--accent-rose); font-weight: 700; margin-bottom: 6px;">Grenze & Risiko:</h5>
              <p style="font-size: 0.92rem; color: var(--text-muted);">${tab.cons}</p>
            </div>
          </div>
        </div>
      `).join('');

      return `
        <div class="content-block">
          <div class="tabs-container">
            <div class="tabs-nav">${navBtns}</div>
            <div class="tabs-content">${panes}</div>
          </div>
        </div>
      `;
    }

    if (sec.type === "card_grid") {
      let cards = sec.cards.map(c => `
        <div class="flip-card" onclick="this.classList.toggle('flipped')">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <div>
                <h4>${c.title}</h4>
                <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6;">${c.content}</p>
              </div>
              <div class="flip-hint">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
                Klicken zum Wenden
              </div>
            </div>
            <div class="flip-card-back">
              <div>
                <h4 style="color: var(--accent-cyan);">${c.title}</h4>
                <p style="font-size: 0.92rem; color: #cbd5e1; margin-top: 10px; line-height: 1.6;">
                  Tipp: Achten Sie bei der täglichen Nutzung genau auf diese Nuance.
                </p>
              </div>
              <span class="badge-tag">${c.status || 'Praxistipp'}</span>
            </div>
          </div>
        </div>
      `).join('');

      return `
        <div class="content-block">
          <h3 class="block-title">${sec.title}</h3>
          <div class="cards-grid">${cards}</div>
        </div>
      `;
    }

    if (sec.type === "carousel_stack") {
      let slides = sec.slides.map(s => `
        <div style="padding: 24px; border-radius: var(--radius-md); background: var(--bg-secondary); border: 1px solid var(--border-color); margin-bottom: 14px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <h4 style="font-size: 1.1rem; color: var(--accent-cyan); font-weight: 700;">${s.role}</h4>
            <span class="badge-tag">${s.badge}</span>
          </div>
          <p style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 12px; line-height: 1.6;">${s.description}</p>
          <div style="display: flex; flex-wrap: wrap; gap: 16px; font-size: 0.88rem;">
            <div><strong style="color: var(--text-main);">Typische Tools:</strong> <span style="color: var(--accent-blue);">${s.keyTools}</span></div>
            <div><strong style="color: var(--text-main);">Risiko-Fokus:</strong> <span style="color: var(--accent-amber);">${s.riskFocus}</span></div>
          </div>
        </div>
      `).join('');

      return `
        <div class="content-block">
          <h3 class="block-title">${sec.title}</h3>
          <div>${slides}</div>
        </div>
      `;
    }

    if (sec.type === "provider_matrix") {
      let rows = sec.providers.map(p => `
        <tr style="border-bottom: 1px solid var(--border-color);">
          <td style="padding: 12px 16px; font-weight: 700; color: var(--accent-cyan);">${p.name}</td>
          <td style="padding: 12px 16px; color: var(--text-dim); font-size: 0.85rem;">${p.origin}</td>
          <td style="padding: 12px 16px; color: var(--text-muted); font-size: 0.9rem;">${p.flagship}</td>
          <td style="padding: 12px 16px; color: var(--text-main); font-size: 0.88rem;">${p.specialty}</td>
        </tr>
      `).join('');

      return `
        <div class="content-block">
          <h3 class="block-title">${sec.title}</h3>
          <div style="overflow-x: auto;">
            <table style="width: 100%; border-collapse: collapse; text-align: left;">
              <thead>
                <tr style="border-bottom: 2px solid var(--border-color); color: var(--text-dim); font-size: 0.8rem; text-transform: uppercase;">
                  <th style="padding: 12px 16px;">Anbieter</th>
                  <th style="padding: 12px 16px;">Herkunft</th>
                  <th style="padding: 12px 16px;">Hauptmodelle</th>
                  <th style="padding: 12px 16px;">Besonderheit / Stärke</th>
                </tr>
              </thead>
              <tbody>${rows}</tbody>
            </table>
          </div>
        </div>
      `;
    }

    if (sec.type === "stepper") {
      let stepIndicators = sec.steps.map((st, i) => `
        <div class="step-bubble ${i === 0 ? 'active' : ''}" id="stepper-bubble-${i}">${st.step}</div>
      `).join('');

      let stepCards = sec.steps.map((st, i) => `
        <div class="stepper-step-card" id="stepper-card-${i}" style="${i === 0 ? 'display:block;' : 'display:none;'}">
          <span class="badge-tag" style="margin-bottom: 10px;">Schritt ${st.step} von ${sec.steps.length}</span>
          <h4 style="font-size: 1.25rem; font-weight: 700; color: var(--text-main); margin-bottom: 8px;">${st.name}</h4>
          <p style="font-size: 1rem; color: var(--text-muted); line-height: 1.7;">${st.text}</p>
        </div>
      `).join('');

      return `
        <div class="content-block">
          <h3 class="block-title">${sec.title}</h3>
          <div class="stepper-container">
            <div class="stepper-header">
              <div class="stepper-step-indicator">${stepIndicators}</div>
            </div>
            <div class="stepper-body">
              ${stepCards}
              <div class="stepper-controls">
                <button class="btn btn-secondary" onclick="app.prevStepper(${sec.steps.length})">Zurück</button>
                <button class="btn btn-primary" onclick="app.nextStepper(${sec.steps.length})">Nächster Schritt</button>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    if (sec.type === "simulation_token_calculator") {
      return `
        <div class="content-block">
          <h3 class="block-title">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/></svg>
            ${sec.title}
          </h3>
          <p style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 16px;">${sec.explanation}</p>
          <div class="tokenizer-lab">
            <label style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: var(--text-dim); margin-bottom: 8px; display: block;">Eingabetext zum Tokenisieren:</label>
            <input type="text" class="tokenizer-input" id="tokenizerInput" value="${sec.promptExample}" oninput="app.runTokenizerSim()">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <span style="font-size: 0.85rem; color: var(--text-muted);">Generierte Tokens & Token-IDs:</span>
              <span id="tokenCountBadge" class="badge-tag">6 Tokens</span>
            </div>
            <div class="tokens-output-area" id="tokensOutput"></div>
          </div>
        </div>
      `;
    }

    if (sec.type === "callout_golden_rule") {
      return `
        <div class="content-block" style="background: linear-gradient(135deg, rgba(6, 182, 212, 0.12) 0%, rgba(59, 130, 246, 0.12) 100%); border-color: rgba(6, 182, 212, 0.4);">
          <span class="badge-tag" style="margin-bottom: 12px;">Merksatz</span>
          <h3 style="font-size: 1.4rem; font-weight: 800; color: var(--text-main); margin-bottom: 12px;">${sec.title}</h3>
          <blockquote style="font-size: 1.2rem; font-style: italic; color: var(--accent-cyan); line-height: 1.6; margin-bottom: 14px;">
            ${sec.rule}
          </blockquote>
          <p style="font-size: 0.95rem; color: var(--text-muted);">${sec.context}</p>
        </div>
      `;
    }

    if (sec.type === "detection_deepdive") {
      let metrics = sec.metrics.map(m => `
        <div style="padding: 16px; border-radius: var(--radius-sm); background: var(--bg-secondary); border: 1px solid var(--border-color); margin-bottom: 12px;">
          <h5 style="color: var(--accent-cyan); font-weight: 700; margin-bottom: 4px;">${m.term}</h5>
          <p style="font-size: 0.92rem; color: var(--text-muted); line-height: 1.6;">${m.meaning}</p>
        </div>
      `).join('');

      return `
        <div class="content-block">
          <h3 class="block-title">${sec.title}</h3>
          <p style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 16px;">${sec.description}</p>
          ${metrics}
          <div style="margin-top: 16px; padding: 14px 18px; border-radius: var(--radius-sm); background: rgba(244, 63, 94, 0.1); border-left: 4px solid var(--accent-rose); font-size: 0.9rem; color: #fecdd3;">
            ⚠️ ${sec.warning}
          </div>
        </div>
      `;
    }

    if (sec.type === "video_demonstration") {
      return `
        <div class="content-block">
          <h3 class="block-title">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
            ${sec.title}
          </h3>
          <p style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 16px;">${sec.description}</p>
          <div class="video-player-card">
            <video controls poster="" preload="metadata">
              <source src="${sec.videoSrc}" type="video/mp4">
              Ihr Browser unterstützt das Video-Element nicht.
            </video>
            <div class="video-caption">
              <strong>Eingegebener Prompt:</strong> <em>"${sec.promptAnalysis.originalPrompt}"</em><br>
              <span style="color: var(--accent-cyan); margin-top: 6px; display: inline-block;">✨ ${sec.promptAnalysis.dialogSupport}</span>
            </div>
          </div>
        </div>
      `;
    }

    if (sec.type === "labelled_graphic_tabs") {
      let items = sec.tabs.map(t => `
        <div style="flex: 1; min-width: 220px; padding: 20px; border-radius: var(--radius-md); background: var(--bg-secondary); border: 1px solid var(--border-color);">
          <span class="badge-tag" style="margin-bottom: 8px;">${t.action}</span>
          <h4 style="font-size: 1.15rem; font-weight: 700; color: var(--accent-cyan); margin-bottom: 6px;">${t.name}</h4>
          <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6;">${t.definition}</p>
        </div>
      `).join('');

      return `
        <div class="content-block">
          <h3 class="block-title">${sec.title}</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 16px;">${items}</div>
        </div>
      `;
    }

    if (sec.type === "risk_pyramid") {
      let levels = sec.levels.map(l => `
        <div class="pyramid-level ${l.color}">
          <div class="level-header">
            <h4 style="font-size: 1.15rem; font-weight: 700;">${l.level}</h4>
            <span class="level-badge">${l.badge}</span>
          </div>
          <p style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 10px;">${l.description}</p>
          <div style="font-size: 0.88rem; color: var(--text-main);">
            <strong>Typische Beispiele:</strong>
            <ul style="margin-left: 20px; margin-top: 4px; color: var(--text-muted);">
              ${l.examples.map(ex => `<li>${ex}</li>`).join('')}
            </ul>
          </div>
          ${l.requirements ? `<div style="margin-top: 8px; font-size: 0.85rem; color: var(--accent-amber);"><strong>Auflagen:</strong> ${l.requirements}</div>` : ''}
        </div>
      `).join('');

      return `
        <div class="content-block">
          <h3 class="block-title">${sec.title}</h3>
          <div class="pyramid-container">${levels}</div>
        </div>
      `;
    }

    if (sec.type === "concept_explainer") {
      return `
        <div class="content-block">
          <h3 class="block-title">${sec.title}</h3>
          <div style="padding: 20px; border-radius: var(--radius-md); background: rgba(244, 63, 94, 0.08); border-left: 4px solid var(--accent-rose); margin-bottom: 16px;">
            <p style="font-size: 1rem; color: var(--text-main); font-weight: 600; line-height: 1.7;">${sec.definition}</p>
          </div>
          <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.7;"><strong>Ursache:</strong> ${sec.cause}</p>
        </div>
      `;
    }

    if (sec.type === "callout_workslop") {
      return `
        <div class="content-block" style="background: rgba(245, 158, 11, 0.08); border-color: rgba(245, 158, 11, 0.3);">
          <span class="badge-tag" style="background: var(--accent-amber); color: #000; margin-bottom: 10px;">${sec.badge}</span>
          <h4 style="font-size: 1.25rem; font-weight: 700; color: var(--text-main); margin-bottom: 8px;">${sec.title}</h4>
          <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.7;">${sec.text}</p>
        </div>
      `;
    }

    if (sec.type === "bias_categories") {
      let items = sec.items.map(it => `
        <div style="padding: 18px; border-radius: var(--radius-md); background: var(--bg-secondary); border: 1px solid var(--border-color); margin-bottom: 12px;">
          <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--accent-cyan); margin-bottom: 6px;">${it.name}</h4>
          <p style="font-size: 0.92rem; color: var(--text-muted); line-height: 1.6;">${it.desc}</p>
        </div>
      `).join('');

      return `
        <div class="content-block">
          <h3 class="block-title">${sec.title}</h3>
          <div>${items}</div>
        </div>
      `;
    }

    if (sec.type === "legal_framework") {
      return `
        <div class="content-block" style="border-left: 4px solid var(--accent-cyan);">
          <h3 class="block-title">${sec.title}</h3>
          <p style="font-size: 1.05rem; line-height: 1.8; color: var(--text-main);">${sec.content}</p>
        </div>
      `;
    }

    if (sec.type === "interactive_checklist") {
      let items = sec.strategies.map(st => `
        <div style="display: flex; align-items: flex-start; gap: 12px; padding: 14px 18px; border-radius: var(--radius-sm); background: var(--bg-secondary); border: 1px solid var(--border-color); margin-bottom: 10px;">
          <input type="checkbox" style="width: 20px; height: 20px; margin-top: 2px; accent-color: var(--accent-cyan); cursor: pointer;">
          <div>
            <h5 style="font-size: 0.98rem; font-weight: 700; color: var(--text-main);">${st.title}</h5>
            <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.5;">${st.desc}</p>
          </div>
        </div>
      `).join('');

      return `
        <div class="content-block">
          <h3 class="block-title">${sec.title}</h3>
          <div>${items}</div>
        </div>
      `;
    }

    if (sec.type === "rules_accordion") {
      let items = sec.items.map(it => `
        <div style="padding: 18px; border-radius: var(--radius-md); background: var(--bg-secondary); border: 1px solid var(--border-color); margin-bottom: 12px;">
          <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--accent-cyan); margin-bottom: 6px;">${it.title}</h4>
          <p style="font-size: 0.92rem; color: var(--text-muted); line-height: 1.6;">${it.desc}</p>
        </div>
      `).join('');

      return `
        <div class="content-block">
          <h3 class="block-title">${sec.title}</h3>
          <div>${items}</div>
        </div>
      `;
    }

    if (sec.type === "license_comparison") {
      let cards = sec.cards.map(c => `
        <div style="flex: 1; min-width: 280px; padding: 24px; border-radius: var(--radius-md); background: ${c.color === 'emerald' ? 'rgba(16, 185, 129, 0.08)' : 'rgba(244, 63, 94, 0.08)'}; border: 1px solid ${c.color === 'emerald' ? 'rgba(16, 185, 129, 0.3)' : 'rgba(244, 63, 94, 0.3)'};">
          <span class="badge-tag" style="background: ${c.color === 'emerald' ? 'var(--accent-emerald)' : 'var(--accent-rose)'}; color: #000; margin-bottom: 12px;">${c.badge}</span>
          <h4 style="font-size: 1.15rem; font-weight: 700; color: var(--text-main); margin-bottom: 14px;">${c.plan}</h4>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 10px;">
            ${c.points.map(p => `<li style="font-size: 0.9rem; color: var(--text-muted); display: flex; gap: 8px;"><span>${c.color === 'emerald' ? '🛡️' : '⚠️'}</span> ${p}</li>`).join('')}
          </ul>
        </div>
      `).join('');

      return `
        <div class="content-block">
          <h3 class="block-title">${sec.title}</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 20px;">${cards}</div>
        </div>
      `;
    }

    if (sec.type === "employee_rules") {
      let rules = sec.rules.map(r => `
        <div style="padding: 14px 18px; border-radius: var(--radius-sm); background: var(--bg-secondary); border-left: 4px solid var(--accent-cyan); margin-bottom: 10px; font-weight: 600; font-size: 0.95rem; color: var(--text-main);">
          ${r}
        </div>
      `).join('');

      return `
        <div class="content-block">
          <h3 class="block-title">${sec.title}</h3>
          <div>${rules}</div>
        </div>
      `;
    }

    return '';
  }

  // Interactive Helpers
  toggleAccordion(id) {
    this.playSound("click");
    const item = document.getElementById(id);
    if (item) item.classList.toggle("open");
  }

  switchTab(tabId, btn) {
    this.playSound("click");
    const container = btn.closest(".tabs-container");
    container.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    container.querySelectorAll(".tab-pane").forEach(p => p.classList.remove("active"));
    btn.classList.add("active");
    const pane = container.querySelector(`#${tabId}`);
    if (pane) pane.classList.add("active");
  }

  runTokenizerSim() {
    const input = document.getElementById("tokenizerInput");
    const output = document.getElementById("tokensOutput");
    const countBadge = document.getElementById("tokenCountBadge");
    if (!input || !output) return;

    const text = input.value.trim();
    if (!text) {
      output.innerHTML = `<span style="color:var(--text-dim); font-size:0.85rem;">Bitte Text eingeben...</span>`;
      if (countBadge) countBadge.textContent = "0 Tokens";
      return;
    }

    const tokens = text.match(/[A-Za-zÄÖÜäöüß]+|[0-9]+|[^\s\w]/g) || [text];
    const colors = ["#3b82f6", "#06b6d4", "#8b5cf6", "#ec4899", "#10b981", "#f59e0b"];

    output.innerHTML = tokens.map((tok, i) => {
      const color = colors[i % colors.length];
      const fakeId = 1000 + Math.abs(this.hashCode(tok) % 8999);
      return `<span class="token-pill" style="background:${color}">${tok} <small>#${fakeId}</small></span>`;
    }).join('');

    if (countBadge) countBadge.textContent = `${tokens.length} Tokens`;
  }

  hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i);
      hash |= 0;
    }
    return hash;
  }

  nextStepper(total) {
    this.playSound("click");
    let cur = 0;
    for (let i = 0; i < total; i++) {
      if (document.getElementById(`stepper-card-${i}`).style.display === "block") {
        cur = i;
        break;
      }
    }
    if (cur < total - 1) {
      document.getElementById(`stepper-card-${cur}`).style.display = "none";
      document.getElementById(`stepper-card-${cur + 1}`).style.display = "block";
      document.getElementById(`stepper-bubble-${cur}`).classList.remove("active");
      document.getElementById(`stepper-bubble-${cur}`).classList.add("completed");
      document.getElementById(`stepper-bubble-${cur + 1}`).classList.add("active");
    }
  }

  prevStepper(total) {
    this.playSound("click");
    let cur = 0;
    for (let i = 0; i < total; i++) {
      if (document.getElementById(`stepper-card-${i}`).style.display === "block") {
        cur = i;
        break;
      }
    }
    if (cur > 0) {
      document.getElementById(`stepper-card-${cur}`).style.display = "none";
      document.getElementById(`stepper-card-${cur - 1}`).style.display = "block";
      document.getElementById(`stepper-bubble-${cur}`).classList.remove("active");
      document.getElementById(`stepper-bubble-${cur - 1}`).classList.add("active");
      document.getElementById(`stepper-bubble-${cur - 1}`).classList.remove("completed");
    }
  }

  markLessonCompleteAndNext(lessonId) {
    this.playSound("success");
    this.completedLessons.add(lessonId);
    localStorage.setItem("ki_completed_lessons", JSON.stringify([...this.completedLessons]));
    this.updateProgress();
    this.renderSidebar();
    this.navigateRelative(1);
  }

  navigateRelative(delta) {
    const all = this.getAllLessons();
    const idx = all.findIndex(item => item.lesson.id === this.currentLessonId);
    if (idx !== -1) {
      const nextIdx = idx + delta;
      if (nextIdx >= 0 && nextIdx < all.length) {
        this.loadLesson(all[nextIdx].lesson.id);
      }
    }
  }

  // ==========================================
  // EXAM ENGINE (15 Prüfungsfragen)
  // ==========================================
  renderExamView() {
    this.currentExamIndex = 0;
    this.examSelected = {};
    this.examEvaluated = {};
    this.examScoreCount = 0;
    this.showExamQuestion(0);
  }

  showExamQuestion(index) {
    this.currentExamIndex = index;
    const q = COURSE_DATA.examQuestions[index];
    if (!q) {
      this.showScoreScreen();
      return;
    }

    if (!this.examSelected[q.id]) {
      this.examSelected[q.id] = new Set();
    }

    const isDone = this.examEvaluated[q.id];

    let optionsHtml = q.options.map(opt => {
      const isSelected = this.examSelected[q.id].has(opt.id);
      let extraClass = '';
      if (isDone) {
        if (opt.correct) extraClass = 'correct-highlight';
        else if (isSelected && !opt.correct) extraClass = 'incorrect-highlight';
      }

      return `
        <div class="option-card ${isSelected ? 'selected' : ''} ${extraClass}" 
             id="opt-card-${opt.id}" 
             onclick="app.toggleExamOption(${q.id}, '${opt.id}')">
          <div class="option-checkbox">
            ${isSelected ? '✓' : ''}
          </div>
          <span style="font-size: 0.98rem; line-height: 1.5; color: var(--text-main);">${opt.text}</span>
        </div>
      `;
    }).join('');

    let html = `
      <div class="lesson-hero">
        <div class="lesson-meta-bar">
          <span class="badge-tag">Offizielle Abschlussprüfung</span>
          <span class="read-time">70% Bestehensgrenze</span>
        </div>
        <h2>6.1 Abschlussquiz (15 Fragen)</h2>
        <p class="lead">Überprüfen Sie Ihr fundiertes Wissen über Sprachmodelle, Bild-KIs, Risiken, EU AI Act, Urheberrecht und Datenschutz.</p>
      </div>

      <div class="content-block">
        <div class="exam-header">
          <span class="exam-question-badge">Frage ${q.number}</span>
          <span style="font-size: 0.85rem; color: var(--text-dim);">Schritt ${index + 1} von ${COURSE_DATA.examQuestions.length}</span>
        </div>
        <h3 class="exam-question-text">${q.question}</h3>
        <p class="exam-instruction">${q.instruction}</p>

        <div class="options-container">${optionsHtml}</div>

        <div class="exam-feedback-box" id="examFeedbackBox">
          <h5 id="feedbackTitle" style="font-size: 1.05rem; font-weight: 700; margin-bottom: 6px;"></h5>
          <p id="feedbackText" style="font-size: 0.95rem; line-height: 1.6;"></p>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 24px;">
          <button class="btn btn-secondary" onclick="app.showExamQuestion(${index - 1})" ${index === 0 ? 'disabled style="opacity:0.5; cursor:not-allowed;"' : ''}>
            Vorherige Frage
          </button>
          ${!isDone ? `
            <button class="btn btn-primary" id="btnSubmitExam" onclick="app.evaluateCurrentExamQuestion(${q.id})">
              Antwort Bestätigen
            </button>
          ` : `
            <button class="btn btn-primary" onclick="app.showExamQuestion(${index + 1})">
              ${index + 1 < COURSE_DATA.examQuestions.length ? 'Nächste Frage' : 'Zum Gesamtergebnis'}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          `}
        </div>
      </div>
    `;

    this.contentArea.innerHTML = html;

    if (isDone) {
      this.displayCachedFeedback(q);
    }
  }

  toggleExamOption(qId, optId) {
    if (this.examEvaluated[qId]) return;
    this.playSound("click");
    const set = this.examSelected[qId];
    if (set.has(optId)) set.delete(optId);
    else set.add(optId);

    const card = document.getElementById(`opt-card-${optId}`);
    if (card) {
      card.classList.toggle("selected");
      card.querySelector(".option-checkbox").textContent = set.has(optId) ? '✓' : '';
    }
  }

  evaluateCurrentExamQuestion(qId) {
    const q = COURSE_DATA.examQuestions.find(item => item.id === qId);
    if (!q) return;

    const selectedSet = this.examSelected[qId];
    if (selectedSet.size === 0) {
      alert("Bitte wählen Sie mindestens eine Option aus!");
      return;
    }

    this.examEvaluated[qId] = true;

    const correctOptions = q.options.filter(o => o.correct).map(o => o.id);
    const userSelected = Array.from(selectedSet);

    const isAllCorrect = correctOptions.length === userSelected.length &&
      correctOptions.every(id => selectedSet.has(id));

    if (isAllCorrect) {
      this.playSound("success");
      this.examScoreCount++;
    } else {
      this.playSound("error");
    }

    this.showExamQuestion(this.currentExamIndex);
  }

  displayCachedFeedback(q) {
    const box = document.getElementById("examFeedbackBox");
    const title = document.getElementById("feedbackTitle");
    const text = document.getElementById("feedbackText");
    if (!box || !title || !text) return;

    const selectedSet = this.examSelected[q.id];
    const correctOptions = q.options.filter(o => o.correct).map(o => o.id);
    const isAllCorrect = correctOptions.length === selectedSet.size &&
      correctOptions.every(id => selectedSet.has(id));

    box.className = `exam-feedback-box show ${isAllCorrect ? 'correct' : 'incorrect'}`;
    title.innerHTML = isAllCorrect ? '✓ Richtig!' : '✗ Nicht vollständig korrekt';
    text.textContent = q.feedback;
  }

  showScoreScreen() {
    this.playSound("success");
    const total = COURSE_DATA.examQuestions.length;
    const pct = Math.round((this.examScoreCount / total) * 100);
    this.examScore = pct;
    localStorage.setItem("ki_exam_score", pct);

    const passed = pct >= COURSE_DATA.meta.passingScore;

    this.completedLessons.add("les-6-1");
    localStorage.setItem("ki_completed_lessons", JSON.stringify([...this.completedLessons]));
    this.updateProgress();
    this.renderSidebar();

    const circumference = 2 * Math.PI * 100;
    const offset = circumference - (pct / 100) * circumference;

    let html = `
      <div class="content-block score-screen">
        <h2 style="font-size: 2rem; font-weight: 800; margin-bottom: 10px;">Quizergebnisse</h2>
        <p style="color: var(--text-muted); margin-bottom: 30px;">
          ${passed ? 'Herzlichen Glückwunsch! Sie haben das offizielle Abschlussquiz erfolgreich bestanden.' : 'Das geforderte Quorum wurde knapp verfehlt. Sie können das Quiz jederzeit wiederholen.'}
        </p>

        <div class="donut-chart-wrapper">
          <svg class="donut-svg" viewBox="0 0 240 240">
            <circle class="donut-circle-bg" cx="120" cy="120" r="100"></circle>
            <circle class="donut-circle-bar" id="scoreCircleBar" cx="120" cy="120" r="100" style="stroke-dasharray: ${circumference}; stroke-dashoffset: ${circumference};"></circle>
          </svg>
          <div class="donut-inner-text">
            <span class="score-number">${pct}%</span>
            <span class="score-req">Erforderlich: 70%</span>
          </div>
        </div>

        <div style="display: inline-block; padding: 12px 24px; border-radius: var(--radius-full); font-weight: 700; font-size: 1.1rem; margin-bottom: 32px; background: ${passed ? 'rgba(16, 185, 129, 0.2)' : 'rgba(244, 63, 94, 0.2)'}; color: ${passed ? 'var(--accent-emerald)' : 'var(--accent-rose)'}; border: 1px solid ${passed ? 'var(--accent-emerald)' : 'var(--accent-rose)'};">
          ${passed ? '✓ Prüfung Bestanden' : '✗ Nicht Bestanden'}
        </div>

        <div style="display: flex; justify-content: center; gap: 16px;">
          <button class="btn btn-secondary" onclick="app.renderExamView()">Quiz wiederholen</button>
          ${passed ? `
            <button class="btn btn-primary" onclick="app.loadLesson('les-6-2')">
              Weiter zum Zertifikat
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          ` : ''}
        </div>
      </div>
    `;

    this.contentArea.innerHTML = html;

    setTimeout(() => {
      const bar = document.getElementById("scoreCircleBar");
      if (bar) bar.style.strokeDashoffset = offset;
    }, 100);
  }

  // ==========================================
  // CERTIFICATE VIEW
  // ==========================================
  renderCertificateView() {
    this.completedLessons.add("les-6-2");
    localStorage.setItem("ki_completed_lessons", JSON.stringify([...this.completedLessons]));
    this.updateProgress();
    this.renderSidebar();

    const today = new Date().toLocaleDateString('de-DE', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    let html = `
      <div class="lesson-hero">
        <div class="lesson-meta-bar">
          <span class="badge-tag" style="background: rgba(16, 185, 129, 0.2); color: var(--accent-emerald);">Zertifizierung abgeschlossen</span>
        </div>
        <h2>6.2 Kursabschluss & Zertifikat</h2>
        <p class="lead">Sie haben alle Inhalte des Lehrgangs erfolgreich absolviert. Hier können Sie Ihr persönliches Zertifikat einsehen, anpassen und drucken.</p>
      </div>

      <div style="display: flex; gap: 12px; align-items: center; margin-bottom: 24px;">
        <label style="font-weight: 600; color: var(--text-main);">Teilnehmername:</label>
        <input type="text" id="certNameInput" value="${this.userName}" oninput="app.updateCertName(this.value)" 
               style="background: var(--bg-secondary); border: 1px solid var(--border-color); color: var(--text-main); padding: 8px 14px; border-radius: var(--radius-sm); font-size: 1rem; width: 280px;">
        <button class="btn btn-primary" onclick="window.print()">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
          Zertifikat Drucken / Als PDF speichern
        </button>
      </div>

      <div class="certificate-preview-box" id="certBox">
        <div class="cert-header">
          <div class="cert-logo-title">AI DRIVER'S LICENSE ACADEMY</div>
          <div style="font-size: 0.9rem; color: #64748b; letter-spacing: 0.1em; text-transform: uppercase; margin-top: 4px;">Akademie für Angewandte Künstliche Intelligenz</div>
        </div>

        <div style="text-align: center;">
          <p style="font-size: 1.15rem; color: #475569;">Hiermit wird bescheinigt, dass</p>
          <div class="cert-recipient-name" id="certDisplayName">${this.userName}</div>
          <p style="font-size: 1.15rem; color: #475569;">den offiziellen Lehrgang erfolgreich abgeschlossen und den</p>
          
          <div class="cert-title-big">KI-FÜHRERSCHEIN</div>
          <p style="font-size: 1rem; font-weight: 600; color: #0284c7; letter-spacing: 0.05em; text-transform: uppercase;">Zertifizierter Kompetenznachweis (Stufe Fortgeschritten)</p>
        </div>

        <div class="cert-modules-list">
          <p style="font-style: italic; color: #475569; margin-bottom: 12px; text-align: center;">erworben hat, durch den erfolgreichen Abschluss der nachfolgenden Inhalte:</p>
          
          <h5>• Modul 1: Vom KI-Einsteiger zum KI-Fortgeschrittenen</h5>
          <ul style="margin-left: 20px; color: #475569; font-size: 0.88rem;">
            <li>Grundlagen, Funktion und Anwendungsbereiche von generativer KI verstehen</li>
            <li>Nutzen, Gefahren, Halluzinationen und Grenzen von KI erkennen & bewerten</li>
            <li>Rechtliche Grundlagen: EU AI Act, Urheberrecht und DSGVO im Arbeitsalltag</li>
          </ul>

          <h5>• Modul 2: Risikomanagement für KI-Systeme</h5>
          <ul style="margin-left: 20px; color: #475569; font-size: 0.88rem;">
            <li>Einführung in Hochrisikosysteme gemäß EU AI Act Anhang III</li>
            <li>Internationale Standards für Managementsysteme (ISO/IEC 42001 & ISO 23894)</li>
          </ul>

          <h5>• Modul 3: Grundlagen des professionellen Promptens</h5>
          <ul style="margin-left: 20px; color: #475569; font-size: 0.88rem;">
            <li>Prompt-Architektur (CREATE-Framework), Few-Shot & Chain-of-Thought</li>
            <li>Sichere und produktive Werkzeugnutzung im beruflichen Umfeld</li>
          </ul>
        </div>

        <div class="cert-footer-row">
          <div>
            <strong>Ausgestellt am:</strong> ${today}<br>
            <strong>Zertifikats-ID:</strong> AI-LIC-2026-${Math.floor(100000 + Math.random() * 900000)}<br>
            <strong>Prüfungsnote:</strong> ${this.examScore || 93}% (Erfolgreich bestanden)
          </div>

          <div class="cert-seal">
            VERIFIED<br>
            CAMPUS<br>
            ★ ★ ★
          </div>

          <div style="text-align: right;">
            <div style="border-bottom: 1px solid #94a3b8; width: 180px; margin-bottom: 4px; padding-bottom: 20px; font-family: cursive; font-size: 1.2rem; color: #0f172a;">I. Csovrij</div>
            <strong>Lehrgangsleitung</strong><br>
            Akademieprüfungsausschuss
          </div>
        </div>
      </div>
    `;

    this.contentArea.innerHTML = html;
  }

  updateCertName(name) {
    this.userName = name;
    localStorage.setItem("ki_user_name", name);
    const el = document.getElementById("certDisplayName");
    if (el) el.textContent = name;
  }
}

// Global instance initialization on load
let app = null;
document.addEventListener("DOMContentLoaded", () => {
  app = new KICampusApp();
  setTimeout(() => {
    if (app) app.runTokenizerSim();
  }, 200);
});
