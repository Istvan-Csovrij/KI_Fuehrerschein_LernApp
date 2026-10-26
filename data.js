/**
 * KI-Führerschein Campus - Vollständige Wissensbasis und Kursdaten
 * Enthält alle Module, Kapitel, Lektionen, Interaktionselemente und Prüfungsfragen.
 */

const COURSE_DATA = {
  meta: {
    title: "KI-Führerschein – Zertifizierter Praxislehrgang",
    subtitle: "Vom Einsteiger zum kompetenten KI-Anwender",
    version: "2.1",
    totalModules: 3,
    passingScore: 70
  },

  modules: [
    {
      id: "modul-1",
      number: 1,
      title: "Modul 1: Vom KI-Einsteiger zum KI-Fortgeschrittenen",
      description: "Grundlagen, Funktionsweise großer Sprachmodelle, Bild- & Video-KIs, Risiken (Halluzinationen & Bias) sowie rechtliche Rahmenbedingungen (EU AI Act, Urheberrecht, Datenschutz).",
      icon: "brain-circuit",
      badge: "Vollständig",
      chapters: [
        {
          id: "kap-1",
          number: "1",
          title: "1. Licht und Schatten der KI",
          description: "Einführung in die Ambivalenz von Künstlicher Intelligenz: Gewaltige Produktivitätspotenziale vs. Verlust von Originalität und kognitive Selbstständigkeit.",
          lessons: [
            {
              id: "les-1-1",
              number: "1.1",
              title: "Licht und Schatten der KI",
              readTime: "6 Min.",
              type: "theory-interactive",
              summary: "Die Ambivalenz von Künstlicher Intelligenz: Gewaltige Effizienzgewinne bei gleichzeitigem Risiko des Verlusts kognitiver Selbstständigkeit und Originalität. Wissenschaftliche Evidenz durch die MIT-Studie (2025).",
              sections: [
                {
                  type: "hero",
                  title: "Die Ambivalenz der Technologie",
                  content: "Künstliche Intelligenz revolutioniert unsere Arbeitsweise mit atemberaubender Geschwindigkeit. Sie automatisiert Routineaufgaben, analysiert riesige Datenmengen in Sekundenbruchteilen und hilft bei der Formulierung komplexer Ideen. Doch wo viel Licht ist, fällt auch tiefer Schatten: Ein unkritischer Einsatz kann zu geistiger Bequemlichkeit, dem Verlust von Fachkompetenz und unreflektierter Übernahme fehlerhafter Resultate führen."
                },
                {
                  type: "comparison_cards",
                  title: "Chancen vs. Risiken im direkten Vergleich",
                  cards: [
                    {
                      category: "Licht (Vorteile & Nutzen)",
                      theme: "emerald",
                      icon: "sparkles",
                      points: [
                        "Enorme Zeitersparnis bei Routineaufgaben (Zusammenfassungen, Übersetzungen, Formatierungen)",
                        "Kreativer Sparringspartner für Brainstorming, Code-Entwurf und Strukturierung",
                        "Niederschwelliger Zugang zu Expertenwissen und Datenanalyse für jedermann",
                        "Skalierbarkeit: Individuelle Unterstützung rund um die Uhr ohne Ermüdung"
                      ]
                    },
                    {
                      category: "Schatten (Risiken & Grenzen)",
                      theme: "amber",
                      icon: "alert-triangle",
                      points: [
                        "Verlust von Originalität und Vereinheitlichung kreativer Ausdrucksformen ('Einheitsbrei')",
                        "Kognitive Atrophie: Nachlassen eigener Recherche-, Schreib- und Analysefähigkeiten",
                        "Gefahr von Halluzinationen (überzeugend klingende, aber frei erfundene Falschinformationen)",
                        "Entstehung von 'Workslop': Ungeprüfte KI-Texte, die Kollegen Mehrarbeit bei der Korrektur aufbürden"
                      ]
                    }
                  ]
                },
                {
                  type: "scientific_study",
                  badge: "Wissenschaftliche Studie",
                  title: "MIT-Studie: 'Your Brain on ChatGPT' (Kosmyna et al., 2025)",
                  description: "Forscher des renommierten Massachusetts Institute of Technology (MIT) untersuchten die neuronale Aktivität und Denkprozesse von Probanden beim Lösen kognitiver Aufgaben mit und ohne KI-Unterstützung mittels quantitativer Elektroenzephalografie (EEG).",
                  findings: [
                    {
                      label: "Ohne KI (Eigenständiges Denken)",
                      detail: "Höchste neuronale Konnektivität, intensive Aktivierung der frontalen Hirnareale für kritisches Denken, Problemlösung und tiefes Textverständnis."
                    },
                    {
                      label: "Klassische Hilfsmittel (Suchmaschinen / Bücher)",
                      detail: "Mittlere Konnektivität: Der Mensch wählt aktiv Quellen aus, bewertet Relevanz und synthetisiert Informationen selbstständig."
                    },
                    {
                      label: "Mit ChatGPT / Generativer KI",
                      detail: "Schwächste neuronale Konnektivität im Frontallappen. Die Probanden übernahmen Lösungen passiv, lasen weniger Korrektur und konnten den erstellten Inhalt später deutlich schlechter rekapitulieren."
                    }
                  ],
                  takeaway: "Fazit der Studie: KI ist ein unersetzlicher Beschleuniger, darf aber nicht das eigene kritische Denken ersetzen. Wer das Steuer komplett an die KI übergibt, verlernt das Fahren!"
                },
                {
                  type: "lesson_quiz",
                  id: "quiz-les-1-1",
                  question: "Welche zentrale Beobachtung machte die MIT-Studie (Kosmyna et al. 2025) bei Aufgaben, die Probanden vollständig an ChatGPT delegierten?",
                  options: [
                    "Die Gehirnaktivität im Frontallappen erreichte historische Höchstwerte an neuronaler Vernetzung.",
                    "Es zeigte sich die schwächste neuronale Konnektivität im EEG, da wesentliche kognitive Syntheseprozesse passiv ausgelagert wurden.",
                    "Die Probanden konnten die generierten Inhalte später signifikant besser und detailreicher wiedergeben.",
                    "Die Nutzung von ChatGPT stimulierte vor allem die mathematischen Gehirnareale überdurchschnittlich stark."
                  ],
                  correctIndex: 1,
                  explanation: "Richtig! Die EEG-Messungen wiesen die schwächste neuronale Aktivität bei den ChatGPT-Nutzern nach. Das Gehirn schaltete in einen passiven Konsummodus."
                }
              ]
            }
          ]
        },
        {
          id: "kap-2",
          number: "2",
          title: "2. Grundlagen der Künstlichen Intelligenz",
          description: "Von Alan Turings Vision bis zu modernen neuronalen Netzen: Grundbegriffe sowie Stärken und Grenzen klassischer und generativer KI.",
          lessons: [
            {
              id: "les-2-1",
              number: "2.1",
              title: "Grundbegriffe der KI",
              readTime: "8 Min.",
              type: "interactive-accordion",
              summary: "Von Alan Turings Pionierarbeit in den 1950ern bis zu modernen generativen Modellen: Die 9 fundamentalen Begriffe verständlich aufgeschlüsselt.",
              sections: [
                {
                  type: "hero",
                  title: "Was bedeutet 'Künstlich' und was 'Intelligent'?",
                  content: "Bereits in den 1950er Jahren stellte der britische Mathematiker Alan Turing die fundamentale Frage: 'Können Maschinen denken?'. 'Künstlich' bezeichnet von Menschenhand geschaffene, nicht-biologische Systeme. 'Intelligenz' meint im informatischen Sinne die Fähigkeit, Informationen wahrzunehmen, Muster zu erkennen, Wissen zu repräsentieren und zielorientierte Entscheidungen zu treffen."
                },
                {
                  type: "svg_diagram",
                  title: "Schaubild: Das Schichtenmodell der Künstlichen Intelligenz",
                  caption: "Von der Informatik über Machine Learning und Deep Learning bis hin zur modernen generativen KI.",
                  svg: `<svg viewBox="0 0 700 340" xmlns="http://www.w3.org/2000/svg" style="max-width:100%; height:auto;">
                    <defs>
                      <linearGradient id="sg1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#1e293b"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
                      <linearGradient id="sg2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#0284c7" stop-opacity="0.35"/><stop offset="100%" stop-color="#0369a1" stop-opacity="0.45"/></linearGradient>
                      <linearGradient id="sg3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#3b82f6" stop-opacity="0.35"/><stop offset="100%" stop-color="#1d4ed8" stop-opacity="0.45"/></linearGradient>
                      <linearGradient id="sg4" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.4"/><stop offset="100%" stop-color="#6d28d9" stop-opacity="0.5"/></linearGradient>
                      <linearGradient id="sg5" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#06b6d4"/><stop offset="100%" stop-color="#3b82f6"/></linearGradient>
                    </defs>
                    <rect x="20" y="15" width="660" height="310" rx="16" fill="url(#sg1)" stroke="#38bdf8" stroke-width="2"/>
                    <text x="40" y="48" fill="#38bdf8" font-family="sans-serif" font-size="15" font-weight="bold">1. KÜNSTLICHE INTELLIGENZ (KI)</text>
                    <text x="40" y="68" fill="#94a3b8" font-family="sans-serif" font-size="11.5">Oberbegriff für Systeme, die menschliche Problemlösungskompetenz &amp; Wahrnehmung nachbilden</text>
                    
                    <rect x="50" y="80" width="600" height="230" rx="14" fill="url(#sg2)" stroke="#0ea5e9" stroke-width="1.5"/>
                    <text x="70" y="110" fill="#38bdf8" font-family="sans-serif" font-size="14.5" font-weight="bold">2. MACHINE LEARNING (ML)</text>
                    <text x="70" y="128" fill="#cbd5e1" font-family="sans-serif" font-size="11">Lernen statistischer Regeln &amp; Muster direkt aus Datenbeispielen statt starrer Programmierung</text>
                    
                    <rect x="80" y="140" width="540" height="155" rx="12" fill="url(#sg3)" stroke="#60a5fa" stroke-width="1.5"/>
                    <text x="100" y="165" fill="#93c5fd" font-family="sans-serif" font-size="14" font-weight="bold">3. KÜNSTLICHE NEURONALE NETZE (KNN)</text>
                    <text x="100" y="182" fill="#cbd5e1" font-family="sans-serif" font-size="11">Biologisch inspirierte Schichten aus gewichteten Rechenknoten (Neuronen)</text>
                    
                    <rect x="110" y="195" width="480" height="88" rx="10" fill="url(#sg4)" stroke="#a78bfa" stroke-width="1.5"/>
                    <text x="130" y="218" fill="#c4b5fd" font-family="sans-serif" font-size="13" font-weight="bold">4. DEEP LEARNING (DL)</text>
                    <text x="130" y="233" fill="#e2e8f0" font-family="sans-serif" font-size="10.5">Tiefe Netze mit vielen verborgenen Schichten zur automatischen Abstraktion von Merkmalen</text>
                    
                    <rect x="140" y="242" width="420" height="32" rx="8" fill="url(#sg5)"/>
                    <text x="350" y="263" fill="#ffffff" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle">⚡ 5. GENERATIVE KI (ChatGPT, Gemini, Claude, Midjourney, Veo)</text>
                  </svg>`
                },
                {
                  type: "accordion_group",
                  title: "Die 9 Kernbegriffe der modernen KI (Interaktiv erkunden)",
                  items: [
                    {
                      id: "acc-1",
                      term: "1. Künstliche Intelligenz (KI)",
                      summary: "Der übergreifende Oberbegriff",
                      details: "Ein Teilgebiet der Informatik, das sich mit der Entwicklung von Systemen befasst, die Aufgaben ausführen können, die normalerweise menschliche Intelligenz erfordern (z. B. Sprachverstehen, Bilderkennung, logisches Schließen)."
                    },
                    {
                      id: "acc-2",
                      term: "2. Machine Learning (Maschinelles Lernen / ML)",
                      summary: "Lernen aus Beispielen statt starrer Regeln",
                      details: "Ein Teilbereich der KI. Algorithmen werden nicht manuell Zeile für Zeile programmiert, sondern trainieren anhand großer Datenmengen selbstständig statistische Muster und Regeln, um Vorhersagen zu treffen."
                    },
                    {
                      id: "acc-3",
                      term: "3. Künstliche Neuronale Netze (KNN)",
                      summary: "Vom menschlichen Gehirn inspirierte Rechenarchitektur",
                      details: "Netzwerke aus virtuellen Knoten (Neuronen), die in Schichten (Eingabe-, Versteckte- und Ausgabeschicht) organisiert sind. Sie gewichten und verrechnen Signale über mathematische Aktivierungsfunktionen."
                    },
                    {
                      id: "acc-4",
                      term: "4. Deep Learning (Tiefes Lernen)",
                      summary: "Neuronale Netze mit vielen verborgenen Schichten",
                      details: "Eine Spezialisierung des Machine Learnings mit tief verschachtelten Netzwerken (Dutzende bis Hunderte Schichten). Ermöglicht die automatische Extraktion hochgradig komplexer, abstrakter Merkmale aus rohen Bild-, Ton- oder Textdaten."
                    },
                    {
                      id: "acc-5",
                      term: "5. Modelle (KI-Modell)",
                      summary: "Das fertige Ergebnis des Lernprozesses",
                      details: "Eine mathematische Repräsentation (z. B. eine gigantische Matrix aus Milliarden Formeln und Parametern), die durch ein Lernverfahren aus Trainingsdaten optimiert wurde und nun Eingaben (Prompts) in Ausgaben umwandelt."
                    },
                    {
                      id: "acc-6",
                      term: "6. Training",
                      summary: "Die Lernphase des Modells",
                      details: "Der iterative Rechenprozess, bei dem ein Modell mit Trainingsdaten gefüttert wird. Fehlervorhersagen werden gemessen (Loss-Funktion) und Modellparameter über mathematische Gradientenverfahren angepasst."
                    },
                    {
                      id: "acc-7",
                      term: "7. Algorithmen",
                      summary: "Die mathematische Rezeptur",
                      details: "Endliche, präzise definierte Folgen von Schritten zur Problemlösung oder Datenverarbeitung. Im KI-Kontext steuern Algorithmen das Training, die Gewichtsanpassung und die Inferenz (Antwortgenerierung)."
                    },
                    {
                      id: "acc-8",
                      term: "8. Wahrscheinlichkeiten",
                      summary: "Das Fundament generativer Entscheidungen",
                      details: "Moderne LLMs und Diffusionsmodelle 'wissen' nichts im menschlichen Sinne. Sie berechnen fortlaufend statistische Wahrscheinlichkeitsverteilungen für die plausibelste nächste Information (Next Token Prediction)."
                    },
                    {
                      id: "acc-9",
                      term: "9. Generative KI (GenAI)",
                      summary: "Erschaffen neuer Inhalte",
                      details: "KI-Systeme, die auf Basis von Prompts eigenständig neue, originär erscheinende Inhalte erzeugen – Texte, Bilder, Audio, Videos oder Computercode (Beispiele: GPT-4, Gemini, Claude, Midjourney, Stable Diffusion)."
                    }
                  ]
                },
                {
                  type: "lesson_quiz",
                  id: "quiz-les-2-1",
                  question: "Was unterscheidet ein trainiertes 'KI-Modell' fundamental von einem klassischen Computerprogramm?",
                  options: [
                    "Ein Modell besteht aus handgeschriebenen Wenn-Dann-Bedingungen, die ein Entwickler manuell codiert hat.",
                    "Ein Modell ist eine mathematische Repräsentation, deren Milliarden Parameter in einer Trainingsphase aus Daten optimiert wurden.",
                    "Ein Modell benötigt im laufenden Betrieb keinerlei mathematische Berechnungen.",
                    "Ein Modell führt immer zu exakt identischen Antworten, unabhängig von Wahrscheinlichkeiten."
                  ],
                  correctIndex: 1,
                  explanation: "Exakt! Im Gegensatz zu starr programmierten Regeln optimiert ein KI-Modell während des Trainings seine Formel-Gewichte anhand von Datenbeispielen."
                }
              ]
            },
            {
              id: "les-2-2-1",
              number: "2.2.1",
              title: "KI im Allgemeinen – Stärken & Grenzen",
              readTime: "7 Min.",
              type: "interactive-tabs",
              summary: "Die 5 Dimensionen klassischer KI-Systeme: Effizienz, Mustererkennung, Schein-Objektivität, Skalierbarkeit und Verantwortung.",
              sections: [
                {
                  type: "hero",
                  title: "Die 5 Dimensionen von KI im Allgemeinen",
                  content: "Künstliche Intelligenz besitzt enorme Fähigkeiten zur automatisierten Informationsverarbeitung. Um Systeme jedoch realistisch einzuschätzen und nicht in blinde Technikgläubigkeit zu verfallen, müssen wir die 5 Kern-Dimensionen analysieren."
                },
                {
                  type: "tabbed_content",
                  tabs: [
                    {
                      id: "tab-dim-1",
                      title: "1. Effizienz",
                      badge: "Dimension 1",
                      pros: "Verarbeitet unvorstellbare Datenmengen in Millisekunden. Unermüdlich 24/7 im Einsatz ohne Konzentrationsabfall.",
                      cons: "Extrem hoher Energie- und Ressourcenverbrauch beim Training und der Inferenz großer Modelle (CO2-Fußabdruck)."
                    },
                    {
                      id: "tab-dim-2",
                      title: "2. Mustererkennung",
                      badge: "Dimension 2",
                      pros: "Identifiziert verborgene Korrelationen und komplexe multidimensionale Muster in Bildern, Sprache oder Finanzmärkten, die dem Menschen entgehen.",
                      cons: "Korrelation ist keine Kausalität: Die KI versteht Zusammenhänge nicht kausal, sondern verwechselt Schein-Zusammenhänge mit Ursachen (Spurious Correlations)."
                    },
                    {
                      id: "tab-dim-3",
                      title: "3. Objektivität & Bias",
                      badge: "Dimension 3",
                      pros: "Entscheidet mathematisch nach Gewichtungen, frei von tagesformabhängigen Launen, Hunger oder persönlicher Müdigkeit.",
                      cons: "Schein-Objektivität: Das Modell reproduziert und verstärkt alle historischen Vorurteile (Biases), die in seinen Trainingsdaten enthalten sind."
                    },
                    {
                      id: "tab-dim-4",
                      title: "4. Skalierbarkeit",
                      badge: "Dimension 4",
                      pros: "Kann millionenfach parallel repliziert und weltweit gleichzeitig von Milliarden Nutzern abgefragt werden.",
                      cons: "Abhängigkeit von gigantischer Cloud-Hardware (Rechenzentren, Nvidia-GPUs) und teurer Netzwerkinfrastruktur."
                    },
                    {
                      id: "tab-dim-5",
                      title: "5. Lernfähigkeit & Verantwortung",
                      badge: "Dimension 5",
                      pros: "Kann durch Fine-Tuning und RLHF (Reinforcement Learning from Human Feedback) kontinuierlich an neue Domänen angepasst werden.",
                      cons: "Black-Box-Problem: Mangelnde Nachvollziehbarkeit komplexer Entscheidungen; eine KI kann rechtlich und moralisch keine Verantwortung übernehmen."
                    }
                  ]
                }
              ]
            },
            {
              id: "les-2-2-2",
              number: "2.2.2",
              title: "Generative KI – Stärken & Grenzen",
              readTime: "7 Min.",
              type: "interactive-cards",
              summary: "Kreative Synthese, Sprachgewandtheit vs. Halluzinationen, Personalisierung und Simulationen im Berufsalltag.",
              sections: [
                {
                  type: "hero",
                  title: "Was Generative KI besonders macht",
                  content: "Während traditionelle KI-Modelle Daten klassifizieren oder filtern (z. B. Spam/Kein Spam), erzeugen generative Modelle völlig neue Inhalte. Dies eröffnet ungeahnte kreative Möglichkeiten, birgt jedoch spezifische Fallstricke."
                },
                {
                  type: "card_grid",
                  title: "Stärken & Grenzen Generativer KI im Detail (Klicken zum Wenden)",
                  cards: [
                    {
                      title: "Kreative Synthese",
                      status: "Ambivalent",
                      content: "Verbindet ungleiche Konzepte mühelos (z. B. 'Barockgemälde eines Astronauten'). Grenze: Verlust von individueller Einzigartigkeit, da Modelle zum statistischen Mittelwert tendieren."
                    },
                    {
                      title: "Sprachgewandtheit vs. Wahrheit",
                      status: "Vorsicht!",
                      content: "Formuliert rhetorisch geschliffene Texte mit überzeugendem Tonfall. Grenze: Sprachliche Eleganz korreliert nicht mit faktischer Korrektheit (Halluzinationsgefahr)."
                    },
                    {
                      title: "Personalisierung vs. Filterblasen",
                      status: "Chancen & Risiken",
                      content: "Passt Erklärungen exakt an das Vorwissen des Nutzers an. Grenze: Gefahr von Bestätigungsfehlern und isolierten Informationsblasen."
                    },
                    {
                      title: "Simulation & Prototyping",
                      status: "Praxistipp",
                      content: "Erzeugt sekundenschnell Dummy-Daten, Mockups und Gesprächsszenarien. Grenze: Ergebnisse müssen stets durch Fachexperten validiert werden."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "kap-3",
          number: "3",
          title: "3. Anwendungsbereiche großer Sprachmodelle & Bild-KIs",
          description: "Praxiseinsatz von LLMs und Bild-/Video-KIs: Wie Sprache in Vektoren übersetzt wird, wie Bildbearbeitungsverfahren funktionieren und wie Videogenerierung mit Prompts gelingt.",
          lessons: [
            {
              id: "les-3-1",
              number: "3.1",
              title: "Nutzen aus verschiedenen Perspektiven",
              readTime: "7 Min.",
              type: "interactive-carousel",
              summary: "Vom Alltagsanwender bis zum Großunternehmen: Wie verschiedene Zielgruppen KI nutzen und welche großen Anbieter den Markt prägen.",
              sections: [
                {
                  type: "carousel_stack",
                  title: "5 Anwenderperspektiven im Überblick",
                  slides: [
                    {
                      role: "1. Alltags- & Gelegenheitsnutzer",
                      badge: "Consumer",
                      description: "Nutzt KI als intelligenten Suchmaschinen-Ersatz, für Rezeptvorschläge, private E-Mail-Korrekturen oder Reiseplanungen.",
                      keyTools: "ChatGPT Free, Microsoft Copilot, Google Gemini Free",
                      riskFocus: "Datenschutz (keine privaten Urlaubsfotos oder Passwörter eingeben)."
                    },
                    {
                      role: "2. Power-User & Wissensarbeiter",
                      badge: "Professional",
                      description: "Erhöht die eigene Produktivität massiv durch tiefes Prompt-Engineering, Zusammenfassung langer Studien, Erstellung von Tabellen und Reports.",
                      keyTools: "ChatGPT Plus/Pro, Claude 3.5 Sonnet, Perplexity AI",
                      riskFocus: "Vermeidung von 'Workslop' und rigorose Faktenprüfung."
                    },
                    {
                      role: "3. Fachanwender (HR, Marketing, Recht, Medizin)",
                      badge: "Domain Expert",
                      description: "Setzt spezialisierte KI-Assistenten für Stellenausschreibungen, Kampagnen-Visuals, Vertragsanalysen oder Diagnoseunterstützung ein.",
                      keyTools: "Domain-spezifische Tools, Microsoft 365 Copilot, Adobe Firefly",
                      riskFocus: "Einhaltung beruflicher Sorgfaltspflichten & EU AI Act Hochrisiko-Einstufungen."
                    },
                    {
                      role: "4. Entwickler & Dateningenieure",
                      badge: "Technical",
                      description: "Nutzt KI zur Code-Vervollständigung, Fehlersuche, API-Integration und dem Bau eigener agentischer Workflows.",
                      keyTools: "GitHub Copilot, Cursor, OpenAI API, Anthropic API, Mistral Models",
                      riskFocus: "Code-Sicherheit, Lizenzrecht fremder Codefragmente, API-Tokenkosten."
                    },
                    {
                      role: "5. Enterprise & Organisationen",
                      badge: "Corporate",
                      description: "Führt unternehmensweite KI-Instanzen ein, trainiert firmeninterne RAG-Systeme (Retrieval Augmented Generation) auf eigenen Wissensdatenbanken.",
                      keyTools: "Azure OpenAI Service, AWS Bedrock, Google Vertex AI, Private Cloud",
                      riskFocus: "DSGVO-Compliance, No-Training-Garantien, Zugriffskontrollen, Betriebsvereinbarungen."
                    }
                  ]
                },
                {
                  type: "provider_matrix",
                  title: "Die führenden KI-Anbieter & deren Ökosystem",
                  providers: [
                    { name: "OpenAI", origin: "USA", flagship: "GPT-4o, ChatGPT, Sora, DALL-E 3", specialty: "Marktführer bei Reasoning & LLMs" },
                    { name: "Google", origin: "USA", flagship: "Gemini 1.5 Pro / Flash, Veo, Imagen 3", specialty: "Multimodalität, gigantisches Kontextfenster (1-2 Mio. Tokens)" },
                    { name: "Microsoft", origin: "USA", flagship: "Copilot, Azure AI Services", specialty: "Tiefe Office-Integration & Enterprise-Cloud" },
                    { name: "Anthropic", origin: "USA", flagship: "Claude 3.5 Sonnet / Opus", specialty: "Höchste Code-Qualität, 'Constitutional AI' (Sicherheitsfokus)" },
                    { name: "Mistral AI", origin: "Frankreich (EU)", flagship: "Mistral Large, Codestral, Pixtral", specialty: "Europäischer Champion, Open-Weight-Modelle, DSGVO-Nähe" },
                    { name: "Black Forest Labs", origin: "Deutschland (EU)", flagship: "FLUX.1 (Schnell / Dev / Pro)", specialty: "Weltweit führende Bildgenerierung aus Deutschland" },
                    { name: "Midjourney", origin: "USA", flagship: "Midjourney v6", specialty: "Künstlerisch anspruchsvollste Bild-Ästhetik" }
                  ]
                }
              ]
            },
            {
              id: "les-3-2-1",
              number: "3.2.1",
              title: "Große Sprachmodelle (LLMs) – Funktionsweise",
              readTime: "10 Min.",
              type: "interactive-simulation",
              summary: "Tokens, Embeddings, der latente Raum und der Attention-Mechanismus: Wie Sprachmodelle wirklich funktionieren und warum sie keine Taschenrechner sind.",
              sections: [
                {
                  type: "hero",
                  title: "Unter der Motorhaube eines Sprachmodells",
                  content: "Große Sprachmodelle (Large Language Models, LLMs) 'verstehen' Sprache nicht wie ein menschliches Bewusstsein. Sie verarbeiten Texte als numerische Vektoren und berechnen durch komplexe neuronale Schichten die statistische Wahrscheinlichkeit für jedes folgende Wort."
                },
                {
                  type: "svg_diagram",
                  title: "Schaubild: Die Inferenz-Pipeline von Sprachmodellen (LLMs)",
                  caption: "Vom Text-Prompt über Tokenisierung und semantischen Vektorraum zur probabilistischen Wort-Vorhersage.",
                  svg: `<svg viewBox="0 0 760 190" xmlns="http://www.w3.org/2000/svg" style="max-width:100%; height:auto;">
                    <defs>
                      <linearGradient id="plgrad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#06b6d4"/><stop offset="100%" stop-color="#3b82f6"/></linearGradient>
                    </defs>
                    <!-- Step 1 -->
                    <rect x="10" y="20" width="135" height="145" rx="10" fill="#1e293b" stroke="#0ea5e9" stroke-width="1.5"/>
                    <circle cx="77" cy="52" r="16" fill="rgba(14, 165, 233, 0.2)"/>
                    <text x="77" y="57" fill="#38bdf8" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">1</text>
                    <text x="77" y="90" fill="#f8fafc" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle">Roher Prompt</text>
                    <text x="77" y="110" fill="#94a3b8" font-family="sans-serif" font-size="10" text-anchor="middle">Benutzereingabe</text>
                    <text x="77" y="132" fill="#38bdf8" font-family="monospace" font-size="10" text-anchor="middle">"Paris ist..."</text>
                    
                    <path d="M150 92 L170 92" stroke="#38bdf8" stroke-width="2"/>
                    <!-- Step 2 -->
                    <rect x="175" y="20" width="135" height="145" rx="10" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
                    <circle cx="242" cy="52" r="16" fill="rgba(59, 130, 246, 0.2)"/>
                    <text x="242" y="57" fill="#60a5fa" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">2</text>
                    <text x="242" y="90" fill="#f8fafc" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle">Tokenisierung</text>
                    <text x="242" y="110" fill="#94a3b8" font-family="sans-serif" font-size="10" text-anchor="middle">Zerlegung &amp; IDs</text>
                    <text x="242" y="132" fill="#60a5fa" font-family="monospace" font-size="10" text-anchor="middle">[4821, 312, 14]</text>
                    
                    <path d="M315 92 L335 92" stroke="#38bdf8" stroke-width="2"/>
                    <!-- Step 3 -->
                    <rect x="340" y="20" width="135" height="145" rx="10" fill="#1e293b" stroke="#8b5cf6" stroke-width="1.5"/>
                    <circle cx="407" cy="52" r="16" fill="rgba(139, 92, 246, 0.2)"/>
                    <text x="407" y="57" fill="#a78bfa" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">3</text>
                    <text x="407" y="90" fill="#f8fafc" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle">Latenter Raum</text>
                    <text x="407" y="110" fill="#94a3b8" font-family="sans-serif" font-size="10" text-anchor="middle">Vektordistanzen</text>
                    <text x="407" y="132" fill="#a78bfa" font-family="monospace" font-size="9.5" text-anchor="middle">[0.42, -0.89, ...]</text>
                    
                    <path d="M480 92 L500 92" stroke="#38bdf8" stroke-width="2"/>
                    <!-- Step 4 -->
                    <rect x="505" y="20" width="135" height="145" rx="10" fill="#1e293b" stroke="#ec4899" stroke-width="1.5"/>
                    <circle cx="572" cy="52" r="16" fill="rgba(236, 72, 153, 0.2)"/>
                    <text x="572" y="57" fill="#f472b6" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">4</text>
                    <text x="572" y="90" fill="#f8fafc" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle">Attention-Matrix</text>
                    <text x="572" y="110" fill="#94a3b8" font-family="sans-serif" font-size="10" text-anchor="middle">Kontextbezüge</text>
                    <text x="572" y="132" fill="#f472b6" font-family="sans-serif" font-size="9.5" text-anchor="middle">Wort-Gewichtung</text>
                    
                    <path d="M645 92 L665 92" stroke="#38bdf8" stroke-width="2"/>
                    <!-- Output -->
                    <rect x="670" y="30" width="80" height="125" rx="10" fill="url(#plgrad)"/>
                    <text x="710" y="75" fill="#fff" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle">Nächstes</text>
                    <text x="710" y="93" fill="#fff" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle">Token</text>
                    <text x="710" y="118" fill="#fff" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle">"die" (89%)</text>
                  </svg>`
                },
                {
                  type: "stepper",
                  title: "Die 4 Phasen der Sprachverarbeitung (Schritt für Schritt)",
                  steps: [
                    {
                      step: 1,
                      name: "Tokenisierung",
                      text: "Der eingegebene Rohtext wird in kleine Einheiten (Tokens) zerlegt – das können ganze Wörter, Wortteile oder Satzzeichen sein. Jedes Token erhält eine eindeutige numerische ID (z. B. 'Künst' = 1823, 'liche' = 9412)."
                    },
                    {
                      step: 2,
                      name: "Embeddings & Latenter Raum",
                      text: "Jedes Token wird in einen hochdimensionalen Zahlenvektor umgewandelt. Im 'latenten Raum' stehen Begriffe mit ähnlicher semantischer Bedeutung nahe beieinander (Vektordistanzen). Berühmtes Vektorbeispiel: König - Mann + Frau = Königin."
                    },
                    {
                      step: 3,
                      name: "Transformer & Attention-Mechanismus",
                      text: "Die 2017 von Google erforschte Attention-Technologie erlaubt es dem Modell, Wörter über weite Distanzen im Text miteinander in Beziehung zu setzen. Das Modell erkennt, worauf sich ein Pronomen ('sie', 'es') bezieht."
                    },
                    {
                      step: 4,
                      name: "Autoregressive Vorhersage",
                      text: "Das Modell erzeugt die Antwort Token für Token. Nach jedem generierten Token wird die Wahrscheinlichkeitsverteilung neu berechnet, bis ein Stopp-Token signalisiert, dass die Antwort beendet ist."
                    }
                  ]
                },
                {
                  type: "simulation_token_calculator",
                  title: "Interaktiver Token- & Wahrscheinlichkeits-Simulator",
                  promptExample: "Künstliche Intelligenz berechnet Wahrscheinlichkeiten",
                  explanation: "Teste live, wie Wörter in Tokens zerlegt werden und warum LLMs keine zuverlässigen Taschenrechner ohne Code-Interpreter sind!"
                },
                {
                  type: "lesson_quiz",
                  id: "quiz-les-3-2-1",
                  question: "Warum sind große Sprachmodelle (LLMs) ohne externe Tools oder Code-Interpreter keine zuverlässigen Taschenrechner?",
                  options: [
                    "Sie berechnen Antworten probabilistisch als wahrscheinlichste nächste Tokenfolge statt mathematisch nach arithmetischen Rechenregeln.",
                    "Sprachmodelle besitzen grundsätzlich keine Schnittstelle für Ziffern und Zahlen.",
                    "Modelle runden Zwischenergebnisse stets automatisch auf ganze Hunderter ab.",
                    "Sprachmodelle dürfen aus urheberrechtlichen Gründen keine Rechnungen durchführen."
                  ],
                  correctIndex: 0,
                  explanation: "Vollkommen richtig! LLMs berechnen Wahrscheinlichkeiten (Next-Token-Prediction) auf Textmustern. Sie rechnen nicht Schritt für Schritt nach den mathematischen Gesetzen der Arithmetik."
                }
              ]
            },
            {
              id: "les-3-2-2",
              number: "3.2.2",
              title: "Große Sprachmodelle (LLMs) – Nutzung & Detektion",
              readTime: "8 Min.",
              type: "interactive-check",
              summary: "Die goldene Nutzungsregel, die 5 Praxisfelder im Beruf und wie KI-Detektoren anhand von Perplexität und Burstiness arbeiten.",
              sections: [
                {
                  type: "callout_golden_rule",
                  title: "Die goldene Nutzungsregel für LLMs",
                  rule: "„Alles, was sich in strukturierter oder natürlicher Sprache ausdrücken lässt, kann von einem Sprachmodell verarbeitet, transformiert, zusammengefasst oder vorbereitet werden.“",
                  context: "Egal ob Programmcode, Verträge, Gedichte, Excel-Formeln, medizinische Arztbriefe oder Gesprächsnotizen: Text ist das universelle Interface von LLMs."
                },
                {
                  type: "card_grid",
                  title: "Die 5 wichtigsten Einsatzbereiche",
                  cards: [
                    { title: "1. Bürokommunikation", content: "E-Mails formulieren, Tonfall anpassen (höflich, bestimmt, sachlich), Besprechungsprotokolle verdichten, Formatwandlungen." },
                    { title: "2. Kreatives Schreiben", content: "Marketing-Slogans, Gliederungen für Fachartikel, Brainstorming unkonventioneller Ideen, Perspektivwechsel." },
                    { title: "3. Recherche & Synthese", content: "Zusammenfassung 50-seitiger PDF-Dateien, Gegenüberstellung verschiedener Standpunkte, Extraktion von Kernfakten." },
                    { title: "4. Daten- & Code-Arbeit", content: "Generieren von SQL-Abfragen, Schreiben von Python-Skripten, Bereinigen inkonsistenter CSV-Datensätze." },
                    { title: "5. Persönliches Coaching & Lernen", content: "Didaktische Aufbereitung komplexer Themen (z. B. 'Erkläre mir Quantencomputer wie einem 12-Jährigen')." }
                  ]
                },
                {
                  type: "detection_deepdive",
                  title: "Wie funktionieren KI-Detektoren?",
                  description: "Tools wie Turnitin, GPTZero oder CopyLeaks versuchen zu erkennen, ob ein Text von einer KI geschrieben wurde. Sie stützen sich dabei auf zwei mathematische Maße:",
                  metrics: [
                    {
                      term: "Perplexität (Perplexity)",
                      meaning: "Ein Maß dafür, wie überraschend ein Wort im Kontext ist. LLMs wählen fast immer Wörter mit hoher statistischer Wahrscheinlichkeit (niedrige Perplexität = sehr 'glatter', vorhersehbarer Text). Menschliche Texte haben natürliche Brüche und höhere Perplexität."
                    },
                    {
                      term: "Burstiness (Satzlängen-Varianz)",
                      meaning: "Menschen variieren Satzlängen stark (ein extrem kurzer Satz. Darauf folgt ein verschachtelter, detaillierter Nebensatz). KI-Modelle neigen zu monoton gleichförmigen Satzstrukturen."
                    }
                  ],
                  warning: "Achtung: KI-Detektoren sind extrem unzuverlässig und fehleranfällig! Sie liefern viele 'False Positives' (fälschliche Beschuldigung menschlicher Autoren) und können durch einfaches Umformulieren leicht umgangen werden."
                }
              ]
            },
            {
              id: "les-3-3",
              number: "3.3",
              title: "Bild- & Video-KIs: Multimodalität & Techniken",
              readTime: "9 Min.",
              type: "interactive-video-lab",
              summary: "Von Pixeln zu Prompts: Text-to-Image, Inpainting, Outpainting, Upscaling, Rescaling und die nächste Generation: Text-to-Video mit Google Veo.",
              sections: [
                {
                  type: "hero",
                  title: "Die visuelle Revolution der generativen KI",
                  content: "Moderne Diffusionsmodelle wie FLUX, Midjourney oder DALL-E lernen durch schrittweises Rausch-Entfernen (Denoising), aus Rauschen fotorealistische Bilder oder Grafiken zu synthetisieren. Sie verstehen Bildkomposition, Lichtstimmungen, Objektplatzierungen und Kameralinsen."
                },
                {
                  type: "svg_diagram",
                  title: "Schaubild: Die 4 Bildbearbeitungsverfahren der generativen Bild-KI",
                  caption: "Visuelle Übersicht der Funktionsweisen von Inpainting, Outpainting, Upscaling und Rescaling.",
                  svg: `<svg viewBox="0 0 720 215" xmlns="http://www.w3.org/2000/svg" style="max-width:100%; height:auto;">
                    <!-- Inpainting -->
                    <rect x="10" y="15" width="165" height="185" rx="10" fill="#1e293b" stroke="#0ea5e9" stroke-width="1.5"/>
                    <text x="92" y="42" fill="#38bdf8" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">Inpainting</text>
                    <rect x="35" y="60" width="115" height="80" rx="4" fill="#0f172a" stroke="#475569"/>
                    <circle cx="92" cy="100" r="20" fill="#0284c7" stroke="#38bdf8" stroke-dasharray="3,3"/>
                    <text x="92" y="104" fill="#fff" font-family="sans-serif" font-size="9.5" text-anchor="middle">Maskiert</text>
                    <text x="92" y="168" fill="#94a3b8" font-family="sans-serif" font-size="9.5" text-anchor="middle">Lücke im Bild füllen / ersetzen</text>
                    
                    <!-- Outpainting -->
                    <rect x="190" y="15" width="165" height="185" rx="10" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
                    <text x="272" y="42" fill="#60a5fa" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">Outpainting</text>
                    <rect x="205" y="55" width="135" height="90" rx="4" fill="none" stroke="#60a5fa" stroke-dasharray="4,4"/>
                    <rect x="235" y="70" width="75" height="60" rx="4" fill="#1e3a8a" stroke="#93c5fd"/>
                    <text x="272" y="104" fill="#fff" font-family="sans-serif" font-size="9.5" text-anchor="middle">Original</text>
                    <text x="272" y="168" fill="#94a3b8" font-family="sans-serif" font-size="9.5" text-anchor="middle">Leinwand nach außen erweitern</text>
                    
                    <!-- Upscaling -->
                    <rect x="370" y="15" width="165" height="185" rx="10" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
                    <text x="452" y="42" fill="#34d399" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">Upscaling</text>
                    <rect x="395" y="65" width="45" height="45" rx="2" fill="#064e3b" stroke="#10b981"/>
                    <text x="417" y="92" fill="#a7f3d0" font-family="sans-serif" font-size="9" text-anchor="middle">SD</text>
                    <path d="M448 87 L468 87" stroke="#34d399" stroke-width="2"/>
                    <rect x="475" y="55" width="50" height="65" rx="3" fill="#047857" stroke="#34d399"/>
                    <text x="500" y="92" fill="#fff" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">4K / 8K</text>
                    <text x="452" y="168" fill="#94a3b8" font-family="sans-serif" font-size="9.5" text-anchor="middle">Auflösung &amp; Details erhöhen</text>
                    
                    <!-- Rescaling -->
                    <rect x="550" y="15" width="160" height="185" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
                    <text x="630" y="42" fill="#fbbf24" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">Rescaling</text>
                    <rect x="575" y="62" width="110" height="40" rx="3" fill="#78350f" stroke="#f59e0b"/>
                    <text x="630" y="87" fill="#fde68a" font-family="sans-serif" font-size="9" text-anchor="middle">16:9 Breitbild</text>
                    <rect x="605" y="112" width="50" height="40" rx="3" fill="#b45309" stroke="#fbbf24"/>
                    <text x="630" y="136" fill="#fff" font-family="sans-serif" font-size="9" text-anchor="middle">1:1 Quadrat</text>
                    <text x="630" y="172" fill="#94a3b8" font-family="sans-serif" font-size="9.5" text-anchor="middle">Seitenverhältnis anpassen</text>
                  </svg>`
                },
                {
                  type: "labelled_graphic_tabs",
                  title: "Die 4 zentralen Bildbearbeitungs-Verfahren",
                  tabs: [
                    {
                      name: "Inpainting",
                      action: "Gezieltes Füllen / Ersetzen",
                      definition: "Ein Bereich innerhalb eines bestehenden Bildes wird maskiert und durch die KI anhand eines Prompts neu generiert (z. B. eine Brille entfernen, ein Kleidungsstück ändern)."
                    },
                    {
                      name: "Outpainting",
                      action: "Erweitern nach außen",
                      definition: "Die Leinwand wird über den bisherigen Bildrand hinaus vergrößert. Die KI ergänzt die Umgebung stilistisch nahtlos (z. B. aus einem Porträtfoto ein Ganzkörperbild machen)."
                    },
                    {
                      name: "Upscaling",
                      action: "Auflösung & Details erhöhen",
                      definition: "Die Pixelanzahl und Schärfe wird KI-basiert vervielfacht, indem fehlende Details intelligent hinzugerechnet werden (z. B. von 1080p auf 4K/8K)."
                    },
                    {
                      name: "Rescaling",
                      action: "Seitenverhältnis anpassen",
                      definition: "Ändern des Formats (z. B. 16:9 auf 1:1 oder 9:16) ohne inhaltliche Hinzufügung neuer Elemente, oft durch Neuberechnung oder Zuschnitt."
                    }
                  ]
                },
                {
                  type: "video_demonstration",
                  title: "Video-Generierung mit Google Veo (Praxis-Demo)",
                  description: "Google Veo und OpenAI Sora stellen den Durchbruch bei Text-to-Video und Image-to-Video dar. Schau dir die reale Aufnahme der Prompt-Generierung und des fertigen Videos an:",
                  videoSrc: "assets/videos/veo_demo.mp4",
                  promptAnalysis: {
                    originalPrompt: "Cozy modern apartment living room, sunlight streaming through floor-to-ceiling windows, dust motes dancing in the light, cinematic 4K camera pan...",
                    dialogSupport: "Neu: Moderne Videomodelle können nun lippensynchrone Dialoge, Charaktere und atmosphärische Umgebungsgeräusche direkt aus dem Textprompt erschaffen."
                  }
                },
                {
                  type: "lesson_quiz",
                  id: "quiz-les-3-3",
                  question: "Welches Verfahren beschreibt das gezielte Ersetzen oder Füllen eines maskierten Bereichs innerhalb eines bestehenden Bildes?",
                  options: [
                    "Outpainting (Erweiterung der Leinwand nach außen)",
                    "Upscaling (Künstliche Erhöhung der Auflösung)",
                    "Inpainting (Lücken/Flecken innerhalb eines Bildes gezielt durch Prompt neu generieren)",
                    "Rescaling (Zuschneiden des Seitenverhältnisses)"
                  ],
                  correctIndex: 2,
                  explanation: "Korrekt! Inpainting maskiert ein Areal innerhalb des Bildes (z. B. ein störendes Objekt) und ersetzt es passend zum restlichen Kontext."
                }
              ]
            }
          ]
        },
        {
          id: "kap-4",
          number: "4",
          title: "4. Risiken & Grenzen: Halluzinationen & Bias",
          description: "Täuschungen erkennen und vermeiden: Ursachen von Halluzinationen, das Phänomen 'Workslop', die 8 Gegenmaßnahmen und algorithmischer Bias.",
          lessons: [
            {
              id: "les-4-1-1",
              number: "4.1.1",
              title: "Halluzinationen – Entstehung & Ursachen",
              readTime: "7 Min.",
              type: "interactive-concept",
              summary: "Warum Sprachmodelle falsche Aussagen erfinden und als überzeugende Wahrheiten verkaufen. Das Phänomen 'Workslop' im Büro.",
              sections: [
                {
                  type: "concept_explainer",
                  title: "Was ist eine Halluzination?",
                  definition: "Eine Halluzination bezeichnet die Generierung von inhaltlich falschen, unlogischen oder frei erfundenen Aussagen, die vom Sprachmodell jedoch mit höchster sprachlicher Überzeugungskraft und scheinbarer Autorität präsentiert werden.",
                  cause: "LLMs besitzen kein Weltwissen und kein Bewusstsein. Sie sind mathematische Wahrscheinlichkeitsmaschinen. Bei Wissenslücken im latenten Raum füllt das Modell die Wahrscheinlichkeitskette mit den wahrscheinlichsten Tokens – das Modell wird fürs Weitersprechen belohnt, nicht fürs Nichtwissen!"
                },
                {
                  type: "callout_workslop",
                  badge: "Berufs-Phänomen",
                  title: "Das Phänomen 'Workslop'",
                  text: "Als 'Workslop' bezeichnet man minderwertige, unvollständige oder fehlerhafte KI-Texte, die ungeprüft in Umlauf gebracht werden. Statt Zeit zu sparen, wälzt der Ersteller die Arbeit auf Kollegen oder Kunden ab, die den Text mühsam korrigieren müssen."
                },
                {
                  type: "lesson_quiz",
                  id: "quiz-les-4-1-1",
                  question: "Was bezeichnet der in der Praxis gefürchtete Begriff 'Workslop'?",
                  options: [
                    "Einen Ausfall von Rechenzentren durch zu hohe GPU-Temperaturen.",
                    "Minderwertige, ungeprüfte KI-Ergebnisse, die Kollegen aufgebürdet werden und zeitraubende Korrekturen verursachen.",
                    "Ein spezielles Dateiformat für Vektor-Embeddings im latenten Raum.",
                    "Ein Schutzverfahren gegen Cyberangriffe bei Cloud-LLMs."
                  ],
                  correctIndex: 1,
                  explanation: "Richtig! Als Workslop bezeichnet man das ungeprüfte Weiterleiten fehlerhafter KI-Texte, was für Kollegen oder Kunden mehr Mehrarbeit statt Entlastung bedeutet."
                }
              ]
            },
            {
              id: "les-4-1-2",
              number: "4.1.2",
              title: "Halluzinationen – Die 8 Schutzstrategien",
              readTime: "8 Min.",
              type: "interactive-checklist",
              summary: "Die 8 erprobten Praxisstrategien gegen Halluzinationen: Von Prompt-Schärfe bis zum Multi-Modell-Vergleich.",
              sections: [
                {
                  type: "hero",
                  title: "Wie schütze ich mich vor Halluzinationen?",
                  content: "Niemand muss Halluzinationen hilflos ausgeliefert sein. Durch gezielte Prompting-Techniken, Faktenprüfung und methodisches Vorgehen lässt sich das Risiko drastisch minimieren."
                },
                {
                  type: "interactive_checklist",
                  title: "Die 8 Praxis-Strategien gegen Halluzinationen",
                  strategies: [
                    { id: "strat-1", title: "1. Präzise, kontextsatte Prompts", desc: "Definiere klare Rahmenbedingungen, Zielgruppen, Längen und negative Constraints ('Erfinde keine Daten')." },
                    { id: "strat-2", title: "2. Wissensstichtag beachten (Cut-off)", desc: "Sei dir bewusst, bis zu welchem Datum das Modell trainiert wurde; aktuelle Tagesnachrichten erfordern Websuche." },
                    { id: "strat-3", title: "3. Quellenangaben & Zitate verlangen", desc: "Fordere das Modell auf, Belege, Autoren, Paragraphen oder URLs zu nennen – und prüfe diese stichprobenartig nach." },
                    { id: "strat-4", title: "4. Chain-of-Thought (Schritt-für-Schritt)", desc: "Weise die KI an: 'Denke Schritt für Schritt und begründe jeden Zwischenschritt vor der endgültigen Antwort'." },
                    { id: "strat-5", title: "5. Externe Referenzen & Grounding (RAG)", desc: "Gib verlässliche Quelltexte direkt in den Prompt ein und fordere: 'Nutze ausschließlich den beigefügten Text'." },
                    { id: "strat-6", title: "6. Multi-Modell-Vergleich", desc: "Lass denselben Prompt gegen zwei unabhängige Modelle antreten (z. B. Claude 3.5 vs. GPT-4o)." },
                    { id: "strat-7", title: "7. Kritisches Hinterfragen (Adversarial Prompting)", desc: "Frage das Modell: 'Welche deiner vorherigen Aussagen könnten faktisch ungenau oder unvollständig sein?'." },
                    { id: "strat-8", title: "8. Die Assistenz-Rolle", desc: "Betrachte die KI als hochbegabten Praktikanten: Erledigt Roharbeit brillant, bedarf aber zwingend deiner Endabnahme." }
                  ]
                }
              ]
            },
            {
              id: "les-4-2-1",
              number: "4.2.1",
              title: "Verzerrungen (Bias) & algorithmische Fairness",
              readTime: "8 Min.",
              type: "interactive-case-study",
              summary: "Sprach-Bias, Stereotypen und die wissenschaftliche Studie Xu et al. (2025): Wie KI-Systeme Vorurteile verstärken und wie man gegensteuert.",
              sections: [
                {
                  type: "hero",
                  title: "Woher kommt der Bias in KI-Systemen?",
                  content: "KIs sind Spiegel unserer digitalen Vergangenheit. Da Trainingsdaten überwiegend aus dem offenen Internet stammen, spiegeln sie die dort vorherrschenden Machtverhältnisse, sprachlichen Dominanzen und Stereotypen wider."
                },
                {
                  type: "bias_categories",
                  title: "Die drei Hauptformen von KI-Verzerrungen",
                  items: [
                    {
                      name: "1. Sprachen- & Kultur-Bias",
                      desc: "Über 60% der Trainingsdaten sind auf Englisch verfasst. Kulturelle Normen des angloamerikanischen Raums dominieren daher Antworten und Werturteile auch bei deutschen Anfragen."
                    },
                    {
                      name: "2. Repräsentations- & Stereotypen-Bias",
                      desc: "Berufs- und Rollenbilder werden oft klischeehaft wiedergegeben (z. B. Ärztin vs. Pfleger, CEO vs. Assistenzkraft), wenn der Prompt geschlechtsneutral formuliert ist."
                    },
                    {
                      name: "3. Selektions- & Bestätigungs-Bias",
                      desc: "Algorithmen bevorzugen Daten, die im Netz am lautesten und häufigsten vertreten sind, während Minderheitenmeinungen im latenten Raum marginalisiert werden."
                    }
                  ]
                },
                {
                  type: "scientific_study",
                  badge: "Forschung 2025",
                  title: "Studie: AI Self-preferencing in Algorithmic Hiring (Xu et al., 2025)",
                  description: "Forscher untersuchten den Einsatz von KI-Tools im Bewerbungsprozess (HR-Recruiting).",
                  findings: [
                    {
                      label: "KI bevorzugt KI",
                      detail: "Sprachmodelle bewerteten Bewerbungsanschreiben signifikant besser, die zuvor ebenfalls von KI generiert oder poliert wurden, im Vergleich zu authentisch menschlichen Texten."
                    },
                    {
                      label: "Homogenisierung im Recruiting",
                      detail: "Kandidaten, die denselben Prompt-Stil nutzten, erhielten ähnliche Höchstnoten, was zu mangelnder Diversität in Teams führt."
                    }
                  ],
                  takeaway: "Gegenmaßnahmen: Verwende neutrale Formulierungen, fordere Perspektivwechsel im Prompt ein ('Betrachte dies aus Sicht einer KMU in ländlichen Regionen') und setze auf menschliche Endkontrolle."
                }
              ]
            }
          ]
        },
        {
          id: "kap-5",
          number: "5",
          title: "5. Rechtliche Grundlagen: EU AI Act, Urheberrecht & DSGVO",
          description: "Rechtssicherheit für die berufliche Praxis: Die 4 Risikostufen des EU AI Act, Schöpferprinzip und Gemeinfreiheit im Urheberrecht sowie Datenschutzbestimmungen.",
          lessons: [
            {
              id: "les-5-1",
              number: "5.1",
              title: "Der EU AI Act aus Endnutzerperspektive",
              readTime: "9 Min.",
              type: "interactive-pyramid",
              summary: "Geltung ab August 2024: Die 4 Risikostufen der EU-KI-Verordnung, verbotene Praktiken nach Art. 5 und die Pflichten für Anbieter und Betreiber.",
              sections: [
                {
                  type: "hero",
                  title: "Der erste umfassende Rechtsrahmen weltweit",
                  content: "Mit dem EU Artificial Intelligence Act (AI Act) hat die Europäische Union das weltweit erste ganzheitliche Gesetz zur Regulierung von KI verabschiedet. Es folgt einem risikobasierten Ansatz: Je höher das potenzielle Risiko für Grundrechte und Sicherheit, desto strenger die Vorgaben."
                },
                {
                  type: "svg_diagram",
                  title: "Schaubild: Die offizielle Risikopyramide des EU AI Act",
                  caption: "Von der Europäischen Union definierte 4 Risikostufen mit Beispielen und Rechtsgrundlagen.",
                  svg: `<svg viewBox="0 0 700 270" xmlns="http://www.w3.org/2000/svg" style="max-width:100%; height:auto;">
                    <!-- Tier 1: Verboten -->
                    <polygon points="350,15 450,75 250,75" fill="#f43f5e" stroke="#fda4af" stroke-width="1.5"/>
                    <text x="350" y="55" fill="#ffffff" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle">1. UNANNEHMBAR (VERBOTEN · Art. 5)</text>
                    <text x="560" y="55" fill="#f43f5e" font-family="sans-serif" font-size="11" font-weight="600">Social Scoring, Manipulation</text>
                    <line x1="455" y1="52" x2="550" y2="52" stroke="#f43f5e" stroke-dasharray="2,2"/>
                    
                    <!-- Tier 2: Hochrisiko -->
                    <polygon points="245,82 455,82 515,138 185,138" fill="#f59e0b" stroke="#fde68a" stroke-width="1.5"/>
                    <text x="350" y="115" fill="#000000" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle">2. HOCHRISIKO (STRENG REGULIERT)</text>
                    <text x="580" y="115" fill="#f59e0b" font-family="sans-serif" font-size="11" font-weight="600">HR, Justiz, Kreditprüfung, Netze</text>
                    <line x1="520" y1="112" x2="570" y2="112" stroke="#f59e0b" stroke-dasharray="2,2"/>
                    
                    <!-- Tier 3: Begrenztes Risiko -->
                    <polygon points="180,145 520,145 575,200 125,200" fill="#3b82f6" stroke="#93c5fd" stroke-width="1.5"/>
                    <text x="350" y="177" fill="#ffffff" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle">3. BEGRENZTES RISIKO (TRANSPARENZPFLICHT · Art. 50)</text>
                    <text x="25" y="177" fill="#60a5fa" font-family="sans-serif" font-size="11" font-weight="600">Chatbots, Deepfakes</text>
                    <line x1="120" y1="174" x2="160" y2="174" stroke="#60a5fa" stroke-dasharray="2,2"/>
                    
                    <!-- Tier 4: Minimales Risiko -->
                    <polygon points="120,207 580,207 635,262 65,262" fill="#10b981" stroke="#a7f3d0" stroke-width="1.5"/>
                    <text x="350" y="240" fill="#000000" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle">4. MINIMALES / KEIN RISIKO (FREI NUTZBAR)</text>
                    <text x="25" y="240" fill="#34d399" font-family="sans-serif" font-size="11" font-weight="600">Spamfilter, Videospiele, Übersetzer</text>
                  </svg>`
                },
                {
                  type: "risk_pyramid",
                  title: "Die Risikopyramide des EU AI Act (Interaktiv)",
                  levels: [
                    {
                      level: "1. Unannehmbares Risiko (Art. 5)",
                      badge: "VERBOTEN",
                      color: "red",
                      description: "Praktiken, die eine klare Bedrohung für Menschenrechte darstellen, sind ausnahmslos untersagt.",
                      examples: [
                        "Social Scoring (staatliche oder private soziale Bewertung von Bürgern)",
                        "Kognitive Verhaltensmanipulation vulnerabler Gruppen (z. B. Spielzeug mit manipulativen Sprachbefehlen)",
                        "Biometrische Echtzeit-Fernidentifizierung im öffentlichen Raum zu Strafverfolgungszwecken (mit engen Ausnahmen)",
                        "Emotionserkennung am Arbeitsplatz oder in Bildungseinrichtungen"
                      ]
                    },
                    {
                      level: "2. Hohes Risiko (Hochrisikosysteme)",
                      badge: "STRENG REGULIERT",
                      color: "amber",
                      description: "KI-Systeme mit erheblichem Einfluss auf Lebenswege, Gesundheit oder Sicherheit.",
                      examples: [
                        "HR-Recruiting & Bewerberauswahl-Software",
                        "Kreditwürdigkeitsprüfung (Scoring für Banken und Kredite)",
                        "Kritische Infrastrukturen (Stromnetze, Trinkwasser, Verkehr)",
                        "Justiz und Asylwesen",
                        "Medizinprodukte mit KI-Unterstützung"
                      ],
                      requirements: "Umfassendes Risikomanagementsystem, hohe Datenqualität, lückenlose Protokollierung, menschliche Aufsicht (Human-in-the-Loop) und Cybersicherheit."
                    },
                    {
                      level: "3. Begrenztes Risiko",
                      badge: "TRANSPARENZPFLICHT (Art. 50)",
                      color: "blue",
                      description: "Systeme mit Manipulationsgefahr durch Täuschung über die künstliche Natur.",
                      examples: [
                        "Chatbots (Nutzer müssen wissen, dass sie mit einer Maschine sprechen)",
                        "Deepfakes (Audio/Video-Fälschungen müssen klar gekennzeichnet werden)",
                        "KI-generierte Texte zur Information der Öffentlichkeit"
                      ]
                    },
                    {
                      level: "4. Minimales / Kein Risiko",
                      badge: "FREI NUTZBAR",
                      color: "emerald",
                      description: "Der überwiegende Teil der heutigen KI-Anwendungen.",
                      examples: [
                        "Spam-Filter in E-Mails",
                        "KI-Gegner in Videospielen",
                        "Übersetzungstools für private Texte",
                        "Inventar-Optimierung im Lager"
                      ]
                    }
                  ]
                },
                {
                  type: "lesson_quiz",
                  id: "quiz-les-5-1",
                  question: "Welche der folgenden KI-Anwendungen fällt unter die Stufe 'Unannehmbares Risiko' (VERBOTEN nach Art. 5 EU AI Act)?",
                  options: [
                    "Ein E-Mail-Spamfilter im Büroalltag.",
                    "Staatliches oder privates Social Scoring (soziale Bewertung und Sanktionierung von Bürgern).",
                    "Ein interaktiver Kundenservice-Chatbot auf einer Firmenwebsite.",
                    "Eine Software zur KI-gestützten Rechtschreibkorrektur."
                  ],
                  correctIndex: 1,
                  explanation: "Genau! Social Scoring, manipulative Verhaltensbeeinflussung und kognitive Ausbeutung von Schutzbedürftigen sind nach Art. 5 des EU AI Act ausnahmslos verboten."
                }
              ]
            },
            {
              id: "les-5-2",
              number: "5.2",
              title: "Urheberrecht & geistiges Eigentum",
              readTime: "8 Min.",
              type: "interactive-rights-checker",
              summary: "Deutsches Schöpferprinzip (§ 2 Abs. 2 UrhG): Warum reine KI-Werke gemeinfrei sind, was für Prompts gilt und wann Bild-Stile geschützt sind.",
              sections: [
                {
                  type: "legal_framework",
                  title: "Das Schöpferprinzip im deutschen Urheberrecht",
                  content: "Nach § 2 Abs. 2 UrhG sind Werke nur dann urheberrechtlich geschützt, wenn es sich um persönliche geistige Schöpfungen handelt. Ein Urheber kann ausschließlich ein lebender Mensch sein. Ein Algorithmus kann rechtlich kein Urheber sein!"
                },
                {
                  type: "rules_accordion",
                  title: "Die 4 Säulen des Urheberrechts bei KI-Inhalten",
                  items: [
                    {
                      title: "1. Vollautomatische KI-Erzeugnisse sind GEMEINFREI",
                      desc: "Wird ein Bild, Text oder Musikstück rein durch einen Klick auf 'Generieren' erzeugt, entsteht KEIN Urheberrecht. Jeder darf diese Inhalte frei kopieren, weitergeben und nutzen (vorbehaltlich vertraglicher AGB)."
                    },
                    {
                      title: "2. Prompts als eigenständiges Sprachwerk?",
                      desc: "Sehr einfache Prompts ('Ein schöner Sonnenuntergang') besitzen keine Schöpfungshöhe. Nur extrem komplexe, literarisch oder konzeptionell ausgefeilte Prompts können eventuell als Sprachwerk geschützt sein."
                    },
                    {
                      title: "3. Mischwerke (Mensch + KI)",
                      desc: "Bringt ein Mensch einen erheblichen kreativen Beitrag ein (z. B. manuelles Nachbearbeiten in Photoshop, Collagen, aufwendiges Compositing), entsteht ein Urheberrecht an der Gesamtschöpfung."
                    },
                    {
                      title: "4. Der Schutz von künstlerischem 'Stil'",
                      desc: "Ein reiner Stil ('im Stil von van Gogh', 'Cyberpunk-Look') ist urheberrechtlich und markenrechtlich frei und NICHT geschützt! ABER: Werden konkrete, geschützte Werke eines lebenden Künstlers identifizierbar nachgeahmt, liegt eine unzulässige Urheberrechtsverletzung vor."
                    }
                  ]
                },
                {
                  type: "license_note",
                  title: "Kommerzielle Nutzung & Plattform-AGB",
                  content: "Achtung: Ob Sie KI-Inhalte gewerblich (kommerziell) nutzen dürfen, richtet sich nicht primär nach dem Urheberrecht, sondern nach den Allgemeinen Geschäftsbedingungen (AGB/ToS) der jeweiligen Plattform! Bei Diensten wie Midjourney oder OpenAI ist die kommerzielle Nutzung oft zahlenden Abonnenten vorbehalten."
                },
                {
                  type: "lesson_quiz",
                  id: "quiz-les-5-2",
                  question: "Wer kann nach dem deutschen Urheberrecht (§ 2 Abs. 2 UrhG) rechtlich Urheber eines Werkes sein?",
                  options: [
                    "Ausschließlich ein lebender Mensch (Schöpferprinzip) – eine KI kann niemals Urheber sein.",
                    "Das KI-Modell selbst, sofern es ausreichend viele Parameter besitzt.",
                    "Der Betreiber des Rechenzentrums, in dem die KI gerechnet hat.",
                    "Automatisch jeder, der auf 'Generieren' klickt, unabhängig vom eigenen Aufwand."
                  ],
                  correctIndex: 0,
                  explanation: "Absolut richtig! Urheberrechtlich geschützt sind nur persönliche geistige Schöpfungen von Menschen. Reine KI-Generierungen sind daher gemeinfrei!"
                }
              ]
            },
            {
              id: "les-5-3",
              number: "5.3",
              title: "Datenschutz (DSGVO) aus Endnutzerperspektive",
              readTime: "8 Min.",
              type: "interactive-privacy-guide",
              summary: "Private vs. Enterprise-Lizenzen, Modelltraining mit deinen Daten und die Verhaltensregeln für den Arbeitsalltag.",
              sections: [
                {
                  type: "hero",
                  title: "Datenschutz & Verantwortung im Unternehmen",
                  content: "Die DSGVO gilt uneingeschränkt auch für KI-Systeme. Wenn Sie im Beruf eine KI einsetzen, ist Ihr Arbeitgeber der Verantwortliche im Sinne der DSGVO. Das bedeutet: Rechtsgrundlagen (Einwilligung, Vertrag), Dokumentationspflichten und Betroffenenrechte müssen eingehalten werden."
                },
                {
                  type: "svg_diagram",
                  title: "Schaubild: Datenflüsse im Vergleich (Free vs. Enterprise Lizenzen)",
                  caption: "Gegenüberstellung: Datenabfluss ins globale Modelltraining vs. vertraglich garantierter Datenschutz.",
                  svg: `<svg viewBox="0 0 720 210" xmlns="http://www.w3.org/2000/svg" style="max-width:100%; height:auto;">
                    <!-- Free Side -->
                    <rect x="20" y="15" width="320" height="180" rx="12" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
                    <text x="180" y="44" fill="#f43f5e" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">⚠️ Private / Free Lizenzen</text>
                    <rect x="40" y="60" width="110" height="40" rx="6" fill="#334155"/>
                    <text x="95" y="85" fill="#f8fafc" font-family="sans-serif" font-size="11" text-anchor="middle">Nutzer-Prompt</text>
                    <path d="M155 80 L195 80" stroke="#f43f5e" stroke-width="2"/>
                    <rect x="200" y="60" width="120" height="40" rx="6" fill="#4c0519" stroke="#f43f5e"/>
                    <text x="260" y="80" fill="#fecdd3" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">Modell-Training</text>
                    <text x="260" y="93" fill="#fda4af" font-family="sans-serif" font-size="8.5" text-anchor="middle">(Daten fließen ein!)</text>
                    <text x="180" y="140" fill="#cbd5e1" font-family="sans-serif" font-size="10.5" text-anchor="middle">Verlust von Geheimhaltung &amp; DSGVO-Kontrolle</text>
                    <text x="180" y="160" fill="#94a3b8" font-family="sans-serif" font-size="9.5" text-anchor="middle">Nicht für sensible Firmendaten zulässig</text>
                    
                    <!-- Enterprise Side -->
                    <rect x="380" y="15" width="320" height="180" rx="12" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
                    <text x="540" y="44" fill="#34d399" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">🛡️ Enterprise / Business Lizenzen</text>
                    <rect x="400" y="60" width="110" height="40" rx="6" fill="#334155"/>
                    <text x="455" y="85" fill="#f8fafc" font-family="sans-serif" font-size="11" text-anchor="middle">Nutzer-Prompt</text>
                    <path d="M515 80 L555 80" stroke="#10b981" stroke-width="2"/>
                    <rect x="560" y="60" width="120" height="40" rx="6" fill="#064e3b" stroke="#10b981"/>
                    <text x="620" y="80" fill="#a7f3d0" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">Verarbeitung</text>
                    <text x="620" y="93" fill="#6ee7b7" font-family="sans-serif" font-size="8.5" text-anchor="middle">(KEIN Training!)</text>
                    <text x="540" y="140" fill="#cbd5e1" font-family="sans-serif" font-size="10.5" text-anchor="middle">Vollständige AVV-Garantie gemäß DSGVO</text>
                    <text x="540" y="160" fill="#94a3b8" font-family="sans-serif" font-size="9.5" text-anchor="middle">Sicher für berufliche Unternehmensnutzung</text>
                  </svg>`
                },
                {
                  type: "license_comparison",
                  title: "Kostenlose / Private Lizenzen vs. Enterprise-Lizenzen",
                  cards: [
                    {
                      plan: "Private / Kostenlose Tarife (z. B. ChatGPT Free)",
                      badge: "Kein Datenschutz",
                      color: "red",
                      points: [
                        "Ihre Eingaben, Dokumente und Prompts werden gespeichert",
                        "Daten fließen aktiv in die KI-Trainingsdaten und den latenten Raum ein",
                        "Kontrollverlust: Eingegebene Geheimnisse können in Antworten Dritter auftauchen",
                        "Opt-Out oft nur versteckt oder gar nicht möglich"
                      ]
                    },
                    {
                      plan: "Business- & Enterprise-Lizenzen",
                      badge: "Geschützt & DSGVO-konform",
                      color: "emerald",
                      points: [
                        "Vertragliche Garantie: Nutzerdaten werden NICHT zum Training verwendet",
                        "Eingaben und Ausgaben werden nach Verarbeitung gelöscht oder verschlüsselt",
                        "AVV (Auftragsverarbeitungsvertrag) gemäß Art. 28 DSGVO wird abgeschlossen",
                        "Dieser Schutz ist ein wesentlicher Bestandteil des höheren Abo-Preises"
                      ]
                    }
                  ]
                },
                {
                  type: "employee_rules",
                  title: "Die 4 Goldenen Verhaltensregeln für Mitarbeitende",
                  rules: [
                    "1. Keine personenbezogenen Daten von Kunden, Kollegen oder Bewerbern eingeben.",
                    "2. Keine vertraulichen internen Dokumente (Bilanzen, Strategiepapiere, Passwörter) hochladen.",
                    "3. Nur offiziell von der Organisation freigegebene KI-Tools und Business-Accounts nutzen.",
                    "4. Sensible Datenkategorien (Gesundheit, Religion, Minderjährige) sind absolut tabu!"
                  ]
                },
                {
                  type: "lesson_quiz",
                  id: "quiz-les-5-3",
                  question: "Was gilt bezüglich des Datenschutzes (DSGVO), wenn Mitarbeiter im Unternehmen eine KI für ihre Aufgaben einsetzen?",
                  options: [
                    "Die DSGVO gilt für KI-Systeme generell nicht, da KI-Modelle keine realen Personen sind.",
                    "Der Arbeitgeber ist der 'Verantwortliche' im Sinne der DSGVO; sensible Kundendaten dürfen keinesfalls in ungeschützte Tools eingegeben werden.",
                    "Mitarbeiter haften stets persönlich mit ihrem Privatvermögen für jeden Prompt.",
                    "In kostenlosen Tools wie ChatGPT Free sind alle Daten automatisch vor dem Modelltraining geschützt."
                  ],
                  correctIndex: 1,
                  explanation: "Richtig! Der Arbeitgeber ist die datenverarbeitende Organisation und haftet für Datenschutzkonformität. Deshalb dürfen keine sensiblen Firmen- oder Kundendaten in ungeschützte KI-Dienste fließen."
                }
              ]
            }
          ]
        },
        {
          id: "kap-6",
          number: "6",
          title: "6. Kursabschluss & Offizielles Abschlussquiz",
          description: "Abschlussprüfung mit 15 Fragen zum gesamten Stoffgebiet sowie Verleihung des digitalen Zertifikats.",
          lessons: [
            {
              id: "les-6-1",
              number: "6.1",
              title: "Abschlussprüfung (15 Prüfungsfragen)",
              readTime: "20 Min.",
              type: "exam",
              summary: "Das offizielle Abschlussquiz zum KI-Führerschein: 15 anspruchsvolle Fragen, 70% Bestehensgrenze, Donut-Score-Auswertung und digitales Zertifikat.",
              isExam: true
            },
            {
              id: "les-6-2",
              number: "6.2",
              title: "Kursabschluss & Zertifikats-Verleihung",
              readTime: "3 Min.",
              type: "certificate-view",
              summary: "Herzlichen Glückwunsch! Generiere dein persönliches, verifiziertes Zertifikat für den KI-Führerschein.",
              isCertificate: true
            }
          ]
        }
      ]
    },
    {
      id: "modul-2",
      number: 2,
      title: "Modul 2: Risikomanagement für KI-Systeme",
      description: "Einführung in Hochrisikosysteme, rechtliche Anforderungen gemäß EU AI Act, Risikomanagement in der Praxis (ISO/IEC 42001, ISO/IEC 23894) und Best Practices.",
      icon: "shield-alert",
      badge: "Inhalt verfügbar",
      chapters: [
        {
          id: "m2-kap-1",
          number: "1",
          title: "1. Hochrisiko-Systeme & Compliance",
          description: "Detaillierte Analyse aller 8 Anwendungsbereiche für Hochrisikosysteme, ISO-Normen und IT-Sicherheit.",
          lessons: [
            {
              id: "m2-les-1-1",
              number: "1.1",
              title: "Klassifizierung nach EU AI Act Anhang III",
              readTime: "8 Min.",
              type: "theory-interactive",
              summary: "Detaillierte Analyse aller 8 Anwendungsbereiche für Hochrisikosysteme: Biometrie, kritische Infrastruktur, Bildung, Beschäftigung/HR, wesentliche Dienste, Strafverfolgung, Migration und Rechtspflege.",
              sections: [
                {
                  type: "hero",
                  title: "Wann gilt ein KI-System als 'Hochrisiko'?",
                  content: "Der EU AI Act stuft Systeme in Anhang III als Hochrisikosysteme ein, wenn sie bei Fehlfunktionen fundamentale Grundrechte, Gesundheit oder Sicherheit gefährden können. Hierfür gelten strenge Konformitätsbewertungsverfahren und lückenlose Dokumentationspflichten."
                },
                {
                  type: "card_grid",
                  title: "Die 8 Hochrisiko-Bereiche im Überblick",
                  cards: [
                    { title: "1. Biometrie & Überwachung", content: "Kategorisierung von Personen nach sensiblen Merkmalen oder nachträgliche Fernidentifizierung." },
                    { title: "2. Kritische Infrastruktur", content: "Steuerung von Stromnetzen, Verkehrsleitsystemen, Wasser- oder Gasversorgung." },
                    { title: "3. Bildung & Berufsausbildung", content: "Zulassung zu Universitäten oder KI-gestützte Bewertung von Prüfungsleistungen." },
                    { title: "4. Beschäftigung & HR-Recruiting", content: "Automatisierte Bewerberauswahl, Beförderungsentscheidungen und Arbeitszeiterfassung." },
                    { title: "5. Wesentliche öffentliche & private Dienste", content: "Kreditwürdigkeitsprüfung (Scoring), Notruf-Priorisierung, Risikobewertung von Versicherungen." },
                    { title: "6. Strafverfolgung & Polizei", content: "Vorhersage von Straftaten (Predictive Policing) oder Glaubwürdigkeitsanalysen von Beweisen." },
                    { title: "7. Migration & Grenzkontrolle", content: "Automatisierte Prüfung von Asylanträgen oder Echtheitsprüfung von Reisedokumenten." },
                    { title: "8. Justiz & demokratische Prozesse", content: "KI-Unterstützung bei richterlichen Urteilen oder Beeinflussung von Wahlen." }
                  ]
                }
              ]
            },
            {
              id: "m2-les-1-2",
              number: "1.2",
              title: "Managementsysteme: ISO/IEC 42001 & ISO 23894",
              readTime: "10 Min.",
              type: "theory-interactive",
              summary: "Der weltweit erste Standard für künstliche Intelligenz: Aufbau eines AI Management Systems (AIMS), Risikoanalyse nach ISO 23894 und Auditierung.",
              sections: [
                {
                  type: "hero",
                  title: "Internationale Governance-Standards",
                  content: "Während der EU AI Act das Gesetz vorgibt, liefern ISO/IEC-Standards die technischen und organisatorischen Werkzeuge zur Umsetzung. ISO/IEC 42001 ist der erste weltweit zertifizierbare Standard für KI-Managementsysteme (AIMS)."
                },
                {
                  type: "accordion_group",
                  title: "Die Schlüsselnormen im Detail",
                  items: [
                    {
                      id: "iso-42001",
                      term: "ISO/IEC 42001:2023 – KI-Managementsysteme (AIMS)",
                      summary: "Der übergeordnete Rahmen für KI-Governance",
                      details: "Definiert Anforderungen für die Einrichtung, Umsetzung, Aufrechterhaltung und fortlaufende Verbesserung eines Managementsystems für KI in Unternehmen. Umfasst Verantwortlichkeiten, Risikobewertung und kontinuierliche Audits."
                    },
                    {
                      id: "iso-23894",
                      term: "ISO/IEC 23894:2023 – Risikomanagement für KI",
                      summary: "Praktischer Leitfaden zur Risikoidentifikation",
                      details: "Gibt Organisationen Methoden an die Hand, um Risiken über den gesamten Lebenszyklus eines KI-Systems (Design, Training, Deployment, Betrieb) systematisch zu erfassen, zu bewerten und Gegenmaßnahmen zu ergreifen."
                    },
                    {
                      id: "iso-27001",
                      term: "ISO/IEC 27001 – Informationssicherheit",
                      summary: "Schutz der Daten & IT-Infrastruktur",
                      details: "Gewährleistet Vertraulichkeit, Integrität und Verfügbarkeit von Trainingsdaten, Modellgewichten und Inferenz-Pipelines gegen Cyberangriffe (z. B. Data Poisoning oder Prompt Injection)."
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "modul-3",
      number: 3,
      title: "Modul 3: Grundlagen des Promptens",
      description: "Grundlagen des Prompt-Designs verstehen, KI-Tools produktiv und sicher einsetzen, fortgeschrittene Prompt-Techniken (Few-Shot, Chain-of-Thought) und Prompt-Bibliotheken.",
      icon: "terminal",
      badge: "Inhalt verfügbar",
      chapters: [
        {
          id: "m3-kap-1",
          number: "1",
          title: "1. Professionelles Prompt-Engineering",
          description: "Systematische Prompt-Entwicklung mit dem CREATE-Framework, Few-Shot-Prompting und Chain-of-Thought.",
          lessons: [
            {
              id: "m3-les-1-1",
              number: "1.1",
              title: "Das CREATE-Framework für perfekte Prompts",
              readTime: "7 Min.",
              type: "theory-interactive",
              summary: "Context, Role, Explicit instructions, Adjustments, Target format und Examples – der systematische Weg zu erstklassigen Antworten.",
              sections: [
                {
                  type: "hero",
                  title: "Vom Zufallstreffer zur reproduzierbaren Qualität",
                  content: "Professionelles Prompting ist kein Rätselraten, sondern methodische Kommunikation. Das CREATE-Framework strukturiert Prompts so, dass Sprachmodelle exakt den gewünschten Tonfall, Detaillierungsgrad und Formatvorgaben einhalten."
                },
                {
                  type: "accordion_group",
                  title: "Die 6 Bausteine des CREATE-Frameworks",
                  items: [
                    {
                      id: "create-c",
                      term: "C – Character / Role (Rolle & Persona)",
                      summary: "Wer soll die KI sein?",
                      details: "Beispiel: 'Agiere als erfahrener Senior-Projektmanager im Maschinenbau mit 15 Jahren Erfahrung in agiler Transformation.'"
                    },
                    {
                      id: "create-r",
                      term: "R – Request / Task (Klare Kernaufgabe)",
                      summary: "Was genau soll getan werden?",
                      details: "Beispiel: 'Erstelle eine 5-Punkte-Checkliste zur Risikobeurteilung eines neuen Software-Rollouts.'"
                    },
                    {
                      id: "create-e",
                      term: "E – Examples / Vorlagen (Few-Shot Prompting)",
                      summary: "Wie sieht ein gutes Ergebnis aus?",
                      details: "Gib 1–2 Beispiele für Eingabe und Wunschausgabe mit. Modelle orientieren sich extrem stark an gezeigten Musterschemata."
                    },
                    {
                      id: "create-a",
                      term: "A – Adjustments / Constraints (Einschränkungen)",
                      summary: "Was darf die KI NICHT tun?",
                      details: "Beispiel: 'Verwende keine Fachbegriffe ohne kurze Erklärung. Maximal 300 Wörter. Keine erfundenen Statistiken.'"
                    },
                    {
                      id: "create-t",
                      term: "T – Target Format (Zielstruktur)",
                      summary: "In welcher Form soll die Ausgabe erfolgen?",
                      details: "Beispiel: 'Gib das Ergebnis als strukturierte Markdown-Tabelle mit den Spalten Phase, Risiko, Maßnahme und Verantwortlicher aus.'"
                    },
                    {
                      id: "create-e2",
                      term: "E – Evaluation / Kritisches Nachhaken",
                      summary: "Die Selbstüberprüfung der KI",
                      details: "Beispiel: 'Überprüfe deine Antwort vor Ausgabe auf Vollständigkeit und nenne mir offene Fragen.'"
                    }
                  ]
                }
              ]
            },
            {
              id: "m3-les-1-2",
              number: "1.2",
              title: "Fortgeschrittene Techniken: CoT & Persona",
              readTime: "9 Min.",
              type: "theory-interactive",
              summary: "Chain-of-Thought (Schritt-für-Schritt-Logik), Self-Consistency, Prompt-Chaining und iterative Prompt-Verfeinerung.",
              sections: [
                {
                  type: "hero",
                  title: "Komplexe Denkprozesse steuern",
                  content: "Wenn Aufgaben logisches Schließen, mehrstufige Berechnungen oder Abwägungen erfordern, führt eine einfache direkte Frage oft zu Fehlern. Mit Chain-of-Thought (CoT) zwingen wir das Modell, Denkpfade explizit zu formulieren."
                },
                {
                  type: "callout_golden_rule",
                  title: "Der magische Prompt-Zusatz",
                  rule: "„Denke Schritt für Schritt und begründe jeden Zwischenschritt ausführlich, bevor du das finale Ergebnis nennst.“",
                  context: "Studien zeigen: Allein dieser Satz reduziert Fehler bei logischen Aufgaben um über 50%, da das Modell durch das Verschriften von Zwischengedanken zusätzliche Tokens im Kontext zur Selbstkorrektur nutzen kann!"
                }
              ]
            }
          ]
        }
      ]
    }
  ],

  // Die 15 originalen Fragen des Abschlussquiz
  examQuestions: [
    {
      id: 1,
      number: "01/15",
      type: "multiple-response",
      question: "Welche Aussagen beschreiben ein KI-Modell zutreffend?",
      instruction: "Wähle ALLE zutreffenden Antworten aus (Mehrauswahl möglich).",
      options: [
        { id: "opt-1-1", text: "Eine Ansammlung von Formeln, deren Parameter durch Lernverfahren aus Daten optimiert wurden.", correct: true },
        { id: "opt-1-2", text: "Ein System, das Algorithmen folgt in einer Trainingsphase.", correct: true },
        { id: "opt-1-3", text: "Ein fest codiertes Regelwerk, dass mittels Parametern Aufgaben lösen kann.", correct: false },
        { id: "opt-1-4", text: "Eine grafische Benutzeroberfläche zur Visualisierung von Ergebnissen im latenten Raum.", correct: false },
        { id: "opt-1-5", text: "Ein System, das Eingaben in Ausgaben umwandeln.", correct: true }
      ],
      feedback: "Ein KI-Modell ist kein starres Regelwerk, sondern eine mathematische Repräsentation aus optimierten Parametern, die Algorithmen während des Trainings gelernt hat, um Eingaben in Ausgaben zu transformieren."
    },
    {
      id: 2,
      number: "02/15",
      type: "multiple-response",
      question: "Welche Eigenschaften treffen typischerweise auf Algorithmen zu?",
      instruction: "Wähle ALLE zutreffenden Antworten aus (Mehrauswahl möglich).",
      options: [
        { id: "opt-2-1", text: "Wird in der KI bei Model Training eingesetzt.", correct: true },
        { id: "opt-2-2", text: "Endliche, definierte Folge von Schritten zur Problemlösung.", correct: true },
        { id: "opt-2-3", text: "Sammlung sortierter Datenpunkte durch KI-Training.", correct: false },
        { id: "opt-2-4", text: "Es gibt verschiedene Arten von Algorithmen für verschiedene Aufgaben.", correct: true },
        { id: "opt-2-5", text: "Führt bei jeder Ausführung exakt zu derselben Lösung.", correct: false }
      ],
      feedback: "Es gibt verschiedene Arten von Algorithmen. Sie sind definierte Schrittfolgen und treiben z. B. das KI-Training. Probabilistische Algorithmen führen keineswegs immer zur selben Lösung."
    },
    {
      id: 3,
      number: "03/15",
      type: "multiple-response",
      question: "Welche Aussagen zur Datenweitergabe bei der Nutzung von KI-Diensten sind typischerweise korrekt?",
      instruction: "Wähle ALLE zutreffenden Antworten aus (Mehrauswahl möglich).",
      options: [
        { id: "opt-3-1", text: "Kommerzielle Anbieter dürfen Nutzerdaten weiterverkaufen, auch wenn die Nutzer nicht zugestimmt haben.", correct: false },
        { id: "opt-3-2", text: "Es gibt Tarife/Einstellungen, die Trainingsnutzung der Daten ausschließen. Diese müssen bewusst aktiviert/gewählt werden.", correct: true },
        { id: "opt-3-3", text: "Eine Zustimmung zu Nutzungsbedingungen kann Datenverarbeitungen erlauben, die über die reine Antwortgenerierung hinausgehen.", correct: true },
        { id: "opt-3-4", text: "Unternehmensrichtlinien können die Nutzung regeln (z. B. Nutzung bestimmter KI-Tools).", correct: true },
        { id: "opt-3-5", text: "Je nach Anbieter/Plan können Eingaben (Prompts/Uploads) geloggt und für Qualitätsverbesserung der KI-Modelle genutzt werden.", correct: true }
      ],
      feedback: "AGBs und Einstellungen sind entscheidend; interne Policies gelten zusätzlich. Illegale Datenverkäufe ohne Zustimmung sind unzulässig."
    },
    {
      id: 4,
      number: "04/15",
      type: "multiple-response",
      question: "Welche Effekte können fehlende Satzzeichen/Rechtschreibfehler in Prompts typischerweise haben?",
      instruction: "Wähle ALLE zutreffenden Antworten aus (Mehrauswahl möglich).",
      options: [
        { id: "opt-4-1", text: "Mehrdeutigkeit erhöht Fehlinterpretationen bei Anweisungen/Schritten.", correct: true },
        { id: "opt-4-2", text: "Verringerte Klarheit kann höhere Halluzinationsgefahr bedeuten.", correct: true },
        { id: "opt-4-3", text: "Verbesserte mathematische Genauigkeit durch „kreative Freiheit“.", correct: false },
        { id: "opt-4-4", text: "Meist geringe Auswirkungen, kann aber die Interpretation verändern.", correct: true },
        { id: "opt-4-5", text: "Keine Auswirkung, da Modelle ausschließlich semantisch und nicht tokenbasiert arbeiten.", correct: false }
      ],
      feedback: "Eine erhöhte Eindeutigkeit des Prompts beeinflusst das Ergebnis der Modelle, die tokenbasiert arbeiten, positiv. Geringe Tippfehler werden oft korrigiert, verwaschen aber die Präzision."
    },
    {
      id: 5,
      number: "05/15",
      type: "multiple-response",
      question: "Welche Aussagen zum „latenten Raum“ treffen zu?",
      instruction: "Wähle ALLE zutreffenden Antworten aus (Mehrauswahl möglich).",
      options: [
        { id: "opt-5-1", text: "Er repräsentiert Texte und deren Beziehung zueinander. So kann die Bedeutung von Wörtern abgeleitet werden.", correct: true },
        { id: "opt-5-2", text: "Ähnliche Konzepte bilden im latenten Raum meist Gruppen.", correct: true },
        { id: "opt-5-3", text: "Bei einer Anfrage an ein Sprachmodell interagiert der Prompt mit dem latenten Raum.", correct: true },
        { id: "opt-5-4", text: "Er ist nur in Textmodellen relevant, nicht in Bild/Audio.", correct: false },
        { id: "opt-5-5", text: "Er ist zweidimensional und besteht aus Datenpunkten.", correct: false }
      ],
      feedback: "Latente Räume repräsentieren Daten jeglicher Art in meist mehrdimensionalen Räumen. Bei einer Anfrage interagiert der Prompt mit dieser Repräsentation, um eine Antwort zu generieren."
    },
    {
      id: 6,
      number: "06/15",
      type: "multiple-response",
      question: "Welche Kennzeichen/Trigger von Halluzinationen sind typisch?",
      instruction: "Wähle ALLE zutreffenden Antworten aus (Mehrauswahl möglich).",
      options: [
        { id: "opt-6-1", text: "Entstehen häufig bei unscharfen Prompts oder außerhalb des Wissensstichtags.", correct: true },
        { id: "opt-6-2", text: "Je mehr Anfragen gestellt werden, desto häufigeres Auftreten.", correct: false },
        { id: "opt-6-3", text: "Treten häufiger auf bei unzureichenden Trainingsdaten.", correct: true },
        { id: "opt-6-4", text: "Sehr plausible, aber faktisch falsche Antworten.", correct: true },
        { id: "opt-6-5", text: "Sind nahezu ausgeschlossen bei sehr großen Modellen.", correct: false }
      ],
      feedback: "Halluzinationen sind plausibel, aber gleichzeitig falsche Antworten, die häufig auftreten bei fehlenden Trainingsdaten oder durch eine diffuse Aktivierung der KI durch unscharfe Prompts."
    },
    {
      id: 7,
      number: "07/15",
      type: "multiple-response",
      question: "Ordnen Sie Verfahren korrekten Beschreibungen/Anwendungsfällen zu.",
      instruction: "Wähle ALLE zutreffenden Antworten aus (Mehrauswahl möglich).",
      options: [
        { id: "opt-7-1", text: "Inpainting: Lücken/Flecken innerhalb eines bestehenden Bildes gezielt ergänzen/ersetzen.", correct: true },
        { id: "opt-7-2", text: "Bild-zu-Bild: Aus einem Referenzbild mit Prompt ein neues Bild erstellen.", correct: true },
        { id: "opt-7-3", text: "Upscaling: Bildfarben werden verstärkt dargestellt.", correct: false },
        { id: "opt-7-4", text: "Rescaling: Seitenverhältnis/Größe ändern ohne inhaltliche Ergänzung.", correct: true },
        { id: "opt-7-5", text: "Outpainting: Bestehendes Bild nach außen erweitern.", correct: true }
      ],
      feedback: "Die Methoden sind korrekt beschrieben, mit Ausnahme des Upscalings, bei dem die Auflösung KI-basiert erhöht wird."
    },
    {
      id: 8,
      number: "08/15",
      type: "multiple-response",
      question: "Welche Gründe erklären, warum LLMs ohne Tools oder Programmiercode keine zuverlässigen Taschenrechner sind?",
      instruction: "Wähle ALLE zutreffenden Antworten aus (Mehrauswahl möglich).",
      options: [
        { id: "opt-8-1", text: "Sie berechnen Wahrscheinlichkeiten der Tokenfolgen statt reproduzierbaren Berechnungen.", correct: true },
        { id: "opt-8-2", text: "Training auf Text korreliert mit Mustern, nicht mit exakten Zahlenregeln.", correct: true },
        { id: "opt-8-3", text: "LLMs runden die Ergebnisse ab auf zwei Stellen, was zu Fehlern führt.", correct: false },
        { id: "opt-8-4", text: "Ohne Zugriff auf KI-Mathematik-Hardware können sie diese Grundrechenarten nicht ausführen.", correct: false },
        { id: "opt-8-5", text: "LLMs werden auf Texte ohne Zahlen trainiert und besitzen daher keinerlei Kenntnis von Rechenregeln.", correct: false }
      ],
      feedback: "Sprachmodelle sind keine Taschenrechner, da ihre Antworten wahrscheinlichkeitsbasiert sind: Es wird der wahrscheinlichste nächste Token berechnet. Es erfolgt keine ganzheitliche Berechnung nach Rechenregeln."
    },
    {
      id: 9,
      number: "09/15",
      type: "multiple-response",
      question: "Welche Maßnahmen reduzieren Halluzinationen in der Praxis?",
      instruction: "Wähle ALLE zutreffenden Antworten aus (Mehrauswahl möglich).",
      options: [
        { id: "opt-9-1", text: "Präzise, kontextsatte Prompts mit klaren Grenzen und Definitionen.", correct: true },
        { id: "opt-9-2", text: "Beachten der Wissensgrenze der KI.", correct: true },
        { id: "opt-9-3", text: "Quellenangaben anfordern.", correct: true },
        { id: "opt-9-4", text: "Vage Prompts nutzen, damit das Modell „kreativer“ wird.", correct: false },
        { id: "opt-9-5", text: "Faktencheck gegen externe Referenzen.", correct: true }
      ],
      feedback: "Vage Prompts provozieren Halluzinationen. Die anderen Maßnahmen verringern sie."
    },
    {
      id: 10,
      number: "10/15",
      type: "multiple-response",
      question: "Welche Aussagen treffen typischerweise zu?",
      instruction: "Wähle ALLE zutreffenden Antworten aus (Mehrauswahl möglich).",
      options: [
        { id: "opt-10-1", text: "Ein erheblicher menschlicher kreativer Beitrag kann Urheberschutz begründen.", correct: true },
        { id: "opt-10-2", text: "Spezielle Nutzungsrechte, die z. B. die kommerzielle Nutzung regeln, gibt es nicht, da KI-generierte Inhalte gemeinfrei sind.", correct: false },
        { id: "opt-10-3", text: "Rein KI-generierte Inhalte erhalten unverändert in der Regel keinen urheberrechtlichen Schutz.", correct: true },
        { id: "opt-10-4", text: "Urheberschutz entsteht immer, sobald ein KI-Werk einen menschlichen Beitrag enthält.", correct: false },
        { id: "opt-10-5", text: "Vollautomatisch KI-generierte Inhalte sind urheberrechtlich nicht geschützt.", correct: true }
      ],
      feedback: "Unveränderte KI-generierte Inhalte sind gemeinfrei und urheberrechtlich nicht geschützt. Spezielle Nutzungsrechte bzgl. z. B. kommerzieller Nutzung sind meist in den AGBs der Anbieter definiert."
    },
    {
      id: 11,
      number: "11/15",
      type: "multiple-response",
      question: "Welche Aussagen zum Schutz von „Stil“ sind zutreffend?",
      instruction: "Wähle ALLE zutreffenden Antworten aus (Mehrauswahl möglich).",
      options: [
        { id: "opt-11-1", text: "Ein künstlerischer Stil ist automatisch als Marke geschützt und darf nicht verwendet werden.", correct: false },
        { id: "opt-11-2", text: "Die Nachahmung spezifischer, identifizierbarer Werke/Elemente kann Rechte verletzen.", correct: true },
        { id: "opt-11-3", text: "Ein allgemeiner künstlerischer Stil ist in der Regel nicht urheberrechtlich geschützt.", correct: true },
        { id: "opt-11-4", text: "Stilfragen sind irrelevant, solange das Ergebnis neu ist.", correct: false },
        { id: "opt-11-5", text: "Kombination aus Stil + markanten, wiedererkennbaren Werkteilen kann unzulässige Annäherung sein.", correct: true }
      ],
      feedback: "Der künstlerische Stil selbst ist nicht geschützt, wohl aber konkrete Werke oder wiedererkennbare Gestaltungselemente."
    },
    {
      id: 12,
      number: "12/15",
      type: "multiple-response",
      question: "Was ist für die kommerzielle Nutzung KI-generierter Inhalte zu beachten?",
      instruction: "Wähle ALLE zutreffenden Antworten aus (Mehrauswahl möglich).",
      options: [
        { id: "opt-12-1", text: "KI-Inhalte müssen bei kommerzieller Nutzung als KI-generiert markiert werden.", correct: false },
        { id: "opt-12-2", text: "Rechte an hochgeladenen Bildern müssen bei Ihnen liegen.", correct: true },
        { id: "opt-12-3", text: "Eine kommerzielle Nutzung von KI-generierten Inhalten ist laut dem neuen EU AI Act nicht mehr vorgesehen.", correct: false },
        { id: "opt-12-4", text: "AGB/Lizenzen des Anbieters regeln, ob/wie eine kommerzielle Nutzung erlaubt ist.", correct: true },
        { id: "opt-12-5", text: "Wenn es ein KI-Modell autonom erzeugt hat, ist die Nutzung automatisch für jeden Zweck erlaubt - auch kommerziell.", correct: false }
      ],
      feedback: "Die Nutzung wird typischerweise in den AGB eines Anbieters geregelt. Zur Wahrung der Rechte – insbesondere der urheberrechtlichen – müssen die Rechte an den hochgeladenen Bildern beim Nutzer liegen."
    },
    {
      id: 13,
      number: "13/15",
      type: "multiple-response",
      question: "Welche Aussagen sind typischerweise korrekt?",
      instruction: "Wähle ALLE zutreffenden Antworten aus (Mehrauswahl möglich).",
      options: [
        { id: "opt-13-1", text: "Für täuschende Deepfakes gelten KI-Kennzeichnungspflichten.", correct: true },
        { id: "opt-13-2", text: "Allein aus Transparenzgründen herrscht eine Kennzeichnungspflicht für KI-generierte Inhalte.", correct: false },
        { id: "opt-13-3", text: "In Kontexten „Information der Öffentlichkeit“ gelten KI-Kennzeichnungspflichten.", correct: true },
        { id: "opt-13-4", text: "Für jede KI-Grafik auf Social Media besteht automatisch Kennzeichnungspflicht.", correct: false },
        { id: "opt-13-5", text: "Nur für KI-Output aus Sprachmodellen existiert eine universelle KI-Kennzeichnungspflicht.", correct: false }
      ],
      feedback: "Nach Art. 50 EU AI Act besteht eine Kennzeichnungspflicht vor allem für täuschende Deepfakes und KI-Inhalte, die der Information der Öffentlichkeit (Nachrichten, Kampagnen) dienen."
    },
    {
      id: 14,
      number: "14/15",
      type: "multiple-response",
      question: "Welche Aussagen zu kostenlosen bzw. privaten Lizenzen bei KI-Diensten treffen häufig zu?",
      instruction: "Wähle ALLE zutreffenden Antworten aus (Mehrauswahl möglich).",
      options: [
        { id: "opt-14-1", text: "Sie bieten oft nur geringen Schutz für Nutzende.", correct: true },
        { id: "opt-14-2", text: "Sie verbieten dem Anbieter jede Form der Weiterverarbeitung der Nutzerdaten.", correct: false },
        { id: "opt-14-3", text: "In der Regel gibt es keinen Unterschied zwischen privaten und Unternehmenslizenzen.", correct: false },
        { id: "opt-14-4", text: "Sie gewähren Anbietern oft breite Rechte zur Nutzung/Analyse hochgeladener Inhalte.", correct: true },
        { id: "opt-14-5", text: "Hierbei ist der Schutz vor Datenweitergabe an Dritte durch die DSGVO garantiert.", correct: false }
      ],
      feedback: "Bei kostenlosen Lizenzen besteht meist kein Schutz vor der Weiterverwendung von Eingabe- und Ausgabedaten. Datenschutz wird oft erst mit bezahlten oder Unternehmenslizenzen gewährleistet."
    },
    {
      id: 15,
      number: "15/15",
      type: "multiple-response",
      question: "Du sollst eine vertrauliche Kundenliste analysieren. Welche Maßnahmen sind bei einer KI-Nutzung sinnvoll?",
      instruction: "Wähle ALLE zutreffenden Antworten aus (Mehrauswahl möglich).",
      options: [
        { id: "opt-15-1", text: "Nur Teile der gesamten Liste hochladen, nie die gesamte Liste.", correct: false },
        { id: "opt-15-2", text: "Nur von der Organisation freigegebene KI-Systeme oder Tools verwenden.", correct: true },
        { id: "opt-15-3", text: "Daten vorab anonymisieren und nur notwendige Felder teilen.", correct: true },
        { id: "opt-15-4", text: "Kundendaten ausschließlich per Copy & Paste in den Prompt einfügen – nicht über das Upload-Tool hochladen.", correct: false },
        { id: "opt-15-5", text: "Mit Platzhaltern arbeiten, falls möglich.", correct: true }
      ],
      feedback: "Die Daten sollten anonymisiert und ohne personenbezogene Daten nur mit freigegebenen KI-Systemen analysiert werden."
    }
  ]
};
