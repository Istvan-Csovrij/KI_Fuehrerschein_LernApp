# ⚡ KI-Führerschein Campus – Interaktive Lernplattform

Eine moderne, didaktisch aufbereitete E-Learning-Webanwendung zur Vermittlung fundierter Kompetenzen im Bereich Künstliche Intelligenz. Entwickelt auf Basis des praxisorientierten Curriculums des **KI-Führerscheins** (Stufe Fortgeschritten).

---

## 🌟 Highlights & Features

### 1. Rechtssicherheit & Eigenständiges Design
- **Urheberrechtskonform & Eigenständig**: Komplett individuelles High-Tech UI/UX-Design (Dark- und Light-Mode) – keine Markenrechts- oder Urheberrechtsverletzungen.
- **Neutrale Bildungsmarke**: Neutrale Bezeichnung (*KI-Führerschein Campus / AI Driver's License Academy*).

### 2. Vollständiges Curriculum (Modul 1 + Modul 2 & 3 Roadmap)
- **1. Licht & Schatten der KI**: Ambivalenz, Produktivität vs. Verlust kognitiver Eigenständigkeit, MIT-Studie (*Your Brain on ChatGPT*, Kosmyna et al. 2025 mit EEG-Ergebnissen).
- **2. Grundbegriffe der KI**: Alan Turing (1950er), Definition von künstlich vs. intelligent, die 9 Kernbegriffe (Machine Learning, KNN, Deep Learning, Modelle, Training, Algorithmen, Wahrscheinlichkeiten, Generative KI).
- **3. Stärken & Grenzen von KI-Systemen**: Die 5 Dimensionen (Effizienz, Mustererkennung, Schein-Objektivität, Skalierbarkeit, Lernfähigkeit/Verantwortung).
- **4. Anwendungsbereiche von LLMs & Bild-KIs**:
  - 5 Anwenderperspektiven (Alltag bis Enterprise) und Marktübersicht (OpenAI, Google, Anthropic, Mistral AI, Black Forest Labs FLUX, Midjourney).
  - Funktionsweise von LLMs (Tokenisierung, Embeddings, Latenter Raum, Attention-Mechanismus, Autoregressive Next-Token-Prediction).
  - Goldene Nutzungsregel & Funktionsweise von KI-Detektoren (Perplexität & Burstiness).
  - Bild- und Videoverfahren: Inpainting, Outpainting, Upscaling, Rescaling sowie integrierte Video-Demonstration mit **Google Veo**.
- **5. Risiken & Verzerrungen**:
  - Halluzinationen, Wissensgrenzen, das Phänomen „Workslop“ und die 8 Gegenmaßnahmen.
  - Bias (Sprach-Bias, Stereotypen, Selektionsbias) und die Recruiting-Studie von Xu et al. (2025).
- **6. Rechtliche Rahmenbedingungen**:
  - **EU AI Act**: Geltung ab August 2024, die 4 Risikostufen (Unannehmbar verboten Art. 5, Hochrisiko, Begrenzt/Transparenz Art. 50, Minimal).
  - **Urheberrecht**: Schöpferprinzip (§ 2 Abs. 2 UrhG), Gemeinfreiheit reiner KI-Werke, Prompts als Sprachwerk, Schutz von künstlerischem Stil vs. Nachahmung (§ 23 UrhG), Plattform-AGB.
  - **Datenschutz (DSGVO)**: Free-Lizenzen (Eingaben fließen ins Training) vs. Enterprise-Lizenzen (No-Training Klauseln, AVV), Verhaltensregeln für den Arbeitsalltag.

### 3. Interaktive Lernelemente & Simulationen
- **Interaktiver Tokenizer-Simulator**: Live-Eingabe von Texten mit Zerlegung in Subword-Tokens, Farbhervorhebung und Token-IDs.
- **Interaktive Akkordeons & Reiter (Tabs)**: Didaktische Tiefenbohrung per Klick.
- **3D-Flip-Lernkarten (Flashcards)**: Wende-Karten zum intuitiven Wiederholen.
- **Interaktiver Prozess-Stepper**: Schrittweise Veranschaulichung der Transformer-Architektur.
- **Eingebettetes Video-Labor**: Originalaufnahme der Google Veo Video-Generierung aus Prompts.
- **Sound-Synthesizer**: Dezente akustische Rückmeldungen via moderner Web Audio API (jederzeit stummschaltbar).

### 4. Offizielles Abschlussquiz (15 Prüfungsfragen)
- Alle 15 Original-Prüfungsfragen mit Mehrfachauswahl (*Multiple Response*), dynamischer Validierung, farblichen Auswertungen und didaktischen Erklärungen.
- Animierter Donut-Score-Screen mit 70%-Bestehensgrenze.
- **Digitaler Zertifikats-Generator**: Generiert ein hochwertiges, druckbares und als PDF speicherbares Zertifikat auf den eigenen Namen.

---

## 🚀 Schnellstart

### Option A: Per Doppelklick (Empfohlen)
Einfach die Datei **`start_app.bat`** im Projektordner doppelklicken. Die Anwendung startet automatisch im Standard-Webbrowser unter `http://localhost:8000`.

### Option B: Über das Terminal / PowerShell
```powershell
python server.py
```
Der Browser öffnet sich automatisch.

---

## 📁 Projektstruktur

```
├── index.html          # Hauptseite & Anwendungs-Shell
├── styles.css          # Eigenständiges High-Tech Design (Dark/Light Mode)
├── data.js             # Vollständige Wissensdatenbank, Lektionen & 15 Quizfragen
├── app.js              # Interaktive Engine, Navigation, Audio-Synthesizer & Zertifikat
├── server.py           # Lokaler Python-Webserver mit Video-Streaming-Support
├── start_app.bat       # 1-Klick Starter für Windows
├── assets/
│   └── videos/
│       └── veo_demo.mp4 # Videoaufnahme der Google Veo Demo
└── README.md           # Projektdokumentation
```
