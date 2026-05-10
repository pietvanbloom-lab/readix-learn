# visualizations-overview.md

**Project:** B2B Research & Analytics On-Demand Platform
**Stand:** 2026-05-06
**Methodik:** Top 3 Visualisierungen pro Site (Reuters, Pudding, Stripe je 5 wegen Daten-Fokus). Jede Visualisierung mit Funktionsweise, Quelle und Stilkategorie.

---

## Lese-Anleitung

Jede Visualisierung ist nach folgender Logik aufgebaut:

| Feld | Bedeutung |
|---|---|
| **Typ** | Static Chart / Interactive / Editorial Hero / Motion |
| **Was es macht** | Funktionsweise in 1-2 Sätzen |
| **Warum es stark ist** | Mechanik, die wir mitnehmen können |
| **Anwendung bei uns** | Konkreter Use Case im Research-Projekt |
| **Original** | Direkt-URL (wo verifizierbar) |
| **Visual** | Search-Hint zum Wiederfinden des Original-Screenshots |

---

# 1. Linear (linear.app)

## 1.1 The Issue Stack — Cycle Visualization
**Typ:** Editorial Hero / Animated Mockup
**Was es macht:** Ein interaktives Hero-Element, das eine echte Linear-Issue-Liste mit Status-Lanes (Backlog, Todo, In Progress, Done) zeigt, inklusive animiertem Avatar-Update und Codex-AI-Agent-Activity-Stream.
**Warum es stark ist:** Statt eines abstrakten Marketing-Visuals zeigt Linear sich selbst beim Arbeiten. Maximales Showing statt Telling. Echte Issues, echte Avatare, echte Aktivität.
**Anwendung bei uns:** Hero zeigt einen echten Brief in Bearbeitung — Researcher arbeiten live an Quellen, Charts werden gerendert, Annotations laufen ein.
**Original:** linear.app (Hero-Section)
**Visual:** "Linear · Dark Themed Websites" — Saaspo-Galerie zeigt das Hero perfekt.

## 1.2 Cycle Time by Agent — Bar Chart
**Typ:** Static Chart (in dunkler Section eingebettet)
**Was es macht:** Vergleich der Cycle-Time zwischen menschlichen Devs, Cursor und Codex als Stacked Bar Chart. Klare Mono-Achsen, Kupfer-Akzent für Highlights, dunkler Hintergrund.
**Warum es stark ist:** Ein Chart, der eine kontroverse These visuell beweist (Agents sind schneller). Subtiles Storytelling durch Farbcodierung.
**Anwendung bei uns:** "Brief Turnaround by Tier" Chart, der zeigt: 48h (The Brief) vs. 2 Wochen (The Engine) vs. Custom (The Foundry).
**Original:** linear.app (Section "Understand progress at scale")
**Visual:** "Linear dashboards | Geckoboard" zeigt die Insights-UI.

## 1.3 Roadmap Timeline (Gantt-Hybrid)
**Typ:** Interactive Chart
**Was es macht:** Eine horizontale Zeitachse mit überlappenden Initiative-Bars, farbcodiert nach Team. Hover zeigt Owner und Sub-Issues. Monate als gestrichelte Vertikalen.
**Warum es stark ist:** Macht aus einem Gantt-Chart kein Excel-Gefühl. Alles atmet, alles ist hover-able, Typo bleibt klein und präzise.
**Anwendung bei uns:** "Research Pipeline View" für Enterprise-Kunden, die mehrere Briefs parallel laufen haben.
**Original:** linear.app/changelog (Roadmap Timeline)
**Visual:** "Linear Preview: Roadmap Timeline – Changelog"

---

# 2. Vercel (vercel.com)

## 2.1 AI Gateway Live Models Leaderboard
**Typ:** Live Data / Static Chart
**Was es macht:** Top 10 AI-Modelle nach Live-Marktanteil mit Prozent-Bars und Modell-Namen. Updates regelmäßig. Position 1 hat akzentuierte Typo-Größe.
**Warum es stark ist:** Selbst-deklassierende Transparenz. Vercel zeigt fremde Konkurrenz-Modelle. Das ist Vertrauen durch Offenheit.
**Anwendung bei uns:** "Most-Requested Brief Topics This Quarter" Live-Leaderboard auf der Landing — schafft sofort Aktualität.
**Original:** vercel.com (Section "AI Gateway")
**Visual:** "Live model performance metrics accessible via AI Gateway - Vercel"

## 2.2 The Globe — Global Edge Network
**Typ:** Motion / 3D Animation
**Was es macht:** Ein rotierender Globus mit pulsierenden Knoten, die Edge-Locations zeigen. Linien fliegen zwischen Knoten als Datenpaket-Animation. Dunkel, mit subtilen Cyan-Akzenten.
**Warum es stark ist:** Beweist Infrastructure ohne ein Wort zu schreiben. Die Animation alleine erzählt "global, fast, distributed".
**Anwendung bei uns:** Globus mit Quellen-Standorten, die für einen Brief abgegrast werden — visualisiert die Recherche-Reichweite.
**Original:** vercel.com (Section "Deploy once, deliver everywhere")
**Visual:** Search "vercel globe network animation"

## 2.3 Code-Snippet als Hero-Visual
**Typ:** Editorial Hero (Code-as-Art)
**Was es macht:** Ein echter Code-Snippet (streamText-Funktion) mit Tab-Switcher zwischen "AI SDK / Python / OpenAI HTTP" als Hero-Visual. Mono Font, syntax highlighting, Zeilennummerierung.
**Warum es stark ist:** Vercel zeigt Code als Schönheit, nicht als Beilage. Direkte Sprache der Zielgruppe (Devs).
**Anwendung bei uns:** Statt Code: ein **echter Brief-Snippet** (Auszug aus einem Sample) als Hero — nicht Lorem Ipsum, sondern ein echter Absatz mit Fußnote, der die Qualität sofort beweist.
**Original:** vercel.com (AI Gateway Section)
**Visual:** Search "vercel ai gateway code snippet"

---

# 3. Anthropic (anthropic.com)

## 3.1 Economic Index Report — Choropleth Map + Bar Charts
**Typ:** Static Chart (mehrschichtig)
**Was es macht:** US-Karte mit Bundesstaaten farbcodiert nach AI-Adoptionsrate, daneben sortierte Bar-Lists nach Industrie. Sehr ruhige Farbpalette, nur Sepia-Töne und ein Akzent.
**Warum es stark ist:** Akademische Anmutung trotz Marketing-Site. Keine Effekte, nur Daten. Genau das richtige Maß an Tiefe.
**Anwendung bei uns:** "Brief Activity by Industry" als Heatmap auf der Landing — beweist Branchenkompetenz auf einen Blick.
**Original:** anthropic.com/economic-index
**Visual:** "Anthropic Economic Index report on uneven AI adoption"

## 3.2 Interpretability Feature Activations — Network Graph
**Typ:** Interactive / Research Hero
**Was es macht:** Eine Force-Directed Graph-Visualisierung von neuronalen Aktivierungen, mit hover-fähigen Knoten, die Features beleuchten. Schwarzer Hintergrund, präzise Annotations.
**Warum es stark ist:** Nimmt ein hochabstraktes Forschungsfeld und macht es greifbar. Das Visual *ist* das Argument.
**Anwendung bei uns:** "Source Network View" — zeigt, wie Quellen für einen Brief miteinander zitiert werden, als interaktiver Graph.
**Original:** anthropic.com/research (Interpretability papers)
**Visual:** "Anthropic's AI Interpretability Research Shines A Light Into The Black Box"

## 3.3 Model Card / Capability Comparison
**Typ:** Static Chart / Editorial
**Was es macht:** Vergleichstabelle zwischen Claude-Modellen (Opus, Sonnet, Haiku) mit Capability-Bars und ruhiger, paper-warmer Hintergrundfarbe. Keine Logos, nur Typografie und Daten.
**Warum es stark ist:** Tabellen können langweilig sein. Hier sind sie schön. Die Stille der Komposition macht den Unterschied.
**Anwendung bei uns:** "Service Tier Comparison Matrix" — Brief vs. Engine vs. Foundry mit ruhigem Look statt typischer Pricing-Card-Hektik.
**Original:** anthropic.com/claude
**Visual:** Search "anthropic claude model card comparison"

---

# 4. Stripe (stripe.com) — 5 Slots

## 4.1 The Annual Letter — Statistics Mosaic
**Typ:** Editorial Hero / Static Charts
**Was es macht:** Stripe's jährliches Letter ist eine Long-Read Visual Essay mit eingebetteten Statistik-Cards (z.B. "$1.9T payments processed"), Bar-Charts zu Markttrends, und einer Wave-Animation als Übergang.
**Warum es stark ist:** Statistik als Storytelling. Stripe macht aus einem Geschäftsbericht ein Lese-Erlebnis. Die Zahlen sind die Headlines.
**Anwendung bei uns:** "State of Research" — unser jährliches Visual Essay mit den 10 wichtigsten Themen, die unsere Kunden 2026 gebrieft haben.
**Original:** stripe.com/annual-updates/2025
**Visual:** "Stripe’s 2024 annual letter from Stripe - Desktop Email View"

## 4.2 Bento Solution Grid (Anti-Pattern, aber lehrreich)
**Typ:** Static Layout
**Was es macht:** Trotz Bento-Grid (das wir vermeiden) macht Stripe es richtig: jede Card hat einen anderen Visual-Stil — Code, Diagramm, UI-Mockup, Wave-Hintergrund. Keine Card sieht aus wie die andere.
**Warum es stark ist:** Wenn man Bento doch nutzt: jede Zelle muss einen anderen Visual-Anker haben. Sonst wirds Lego.
**Anwendung bei uns:** Wir nutzen das *Variations*-Prinzip, aber **nicht in Grid-Form**, sondern in einer asymmetrischen Sektions-Folge. Jede Service-Sektion bekommt ein einzigartiges Visual.
**Original:** stripe.com (Section "Flexible solutions")
**Visual:** "Modern Bento Grid Layout | Figma" zeigt das Genre.

## 4.3 The Wave — Animated Hero Gradient
**Typ:** Motion / Hero Animation
**Was es macht:** Stripe's berühmter animierter Hero-Gradient. Sanfte Wellen aus Tintenblau, Violett, Rosa, ständig in Bewegung. WebGL-rendered, 60fps, niemals störend.
**Warum es stark ist:** Hat das ganze Genre "Linear-Style" überhaupt erst geboren. Aber: das funktioniert nur bei Stripe, weil die Marke schon stark ist. Bei uns Anti-Pattern.
**Anwendung bei uns:** **Wir verzichten darauf.** Stattdessen: subtile Pergament-Reißlinien-Animation als Section-Übergang.
**Original:** stripe.com (Hero)
**Visual:** "How To: Create the Stripe Website Gradient Effect - Kevin Hufnagl"

## 4.4 Customer-Story Architecture Diagrams
**Typ:** Editorial Hero (Custom-Illustration)
**Was es macht:** Bei jeder Customer Story (Hertz, URBN, Instacart) gibt es eine custom-illustrierte Hero-Image, die das Stripe-Parallelogramm in der echten Welt verbergt (Crosswalk in Hertz-Story, Window Frame bei URBN). Spielerisch, aber strategisch.
**Warum es stark ist:** Die Marke wird Teil der Welt, nicht aufgesetzt. Das ist Logo-Design auf Storyteller-Niveau.
**Anwendung bei uns:** Bei jedem Sample Brief eine custom-illustrierte Hero — der Codex-Apparat baut sich aus dem Industriekontext des Kunden auf (Logistik-Pipeline für Logistikkunden, Steamengine für Industrie, etc.).
**Original:** stripe.com/customers
**Visual:** Search "stripe customer story hero illustration"

## 4.5 Sessions Conference Speaker Grid
**Typ:** Static Layout / Editorial
**Was es macht:** Sprecher-Grid mit warm-grauem einheitlichen Hintergrund hinter jedem Speaker-Photo. Konsistent, ruhig, hochwertig. Name + Firma + Rolle als Mini-Bio.
**Warum es stark ist:** Photo-Treatment als Bindeglied. Jedes Photo wird in dieselbe visuelle Sprache übersetzt. Kein Promi-Gefälle.
**Anwendung bei uns:** Analyst-Team-Page mit identischem Photo-Treatment (Sepia-Look, gleicher Hintergrund). Plus: jeder Sample-Brief-Author bekommt das gleiche Treatment.
**Original:** stripe.com/sessions/2026
**Visual:** "Stripe Sessions 2025: Transformative New Products"

---

# 5. Pitch (pitch.com)

## 5.1 Hero "Don't just present. Pitch." — 4-Modus Switcher
**Typ:** Interactive Hero
**Was es macht:** Vier Tabs (Design / Collaborate / Pitch / Analyze), jeder mit autoplay-Video-Mockup, die nahtlos wechseln. Klick auf einen Tab fadet zum entsprechenden Use Case.
**Warum es stark ist:** Maximale Information ohne Scrollen. Vier Use Cases gleichzeitig sichtbar, ohne Card-Stacking.
**Anwendung bei uns:** Hero-Switcher mit den 4 Brief-Phasen (Scoping / Sourcing / Synthesis / Delivery), jeder mit Mini-Video-Mockup.
**Original:** pitch.com (Hero)
**Visual:** "Free AI presentation maker – Generate beautiful presentations"

## 5.2 Engagement Analytics Dashboard
**Typ:** Static Chart / Mockup
**Was es macht:** Zeigt Slide-by-Slide-Engagement als Heatmap-Streifen, Zeit-pro-Slide als Bar Chart, und einen Activity-Timeline für jeden Viewer. Rosa/Lila Akzentfarben.
**Warum es stark ist:** Macht aus Tracking keine Spy-Optik. Das Dashboard ist sales-friendly designed, nicht techy.
**Anwendung bei uns:** "Brief Engagement Report" — wer hat den Brief gelesen, welche Sektion am intensivsten, welche Charts wurden vergrößert. Premium-Feature für Enterprise.
**Original:** pitch.com (Analytics Section)
**Visual:** "Engagement analytics: Turn data into winning presentations | Pitch"

## 5.3 Numbered Process Steps (1—Start, 2—Edit, 3—Share, 4—Measure)
**Typ:** Static Layout / Editorial
**Was es macht:** Jeder Schritt bekommt eine eigene Section mit großem Mono "1 — Start", einer Headline, drei Bullets und einem 1:1 Animation-Thumbnail.
**Warum es stark ist:** Klassisches Prozess-Storytelling im richtigen Rhythmus. Nichts überladen, alles atmet.
**Anwendung bei uns:** Methodology-Page als nummerierte Schritte: 1—Brief, 2—Source, 3—Verify, 4—Synthesize, 5—Deliver. Jeder mit eigenem Codex-Apparat.
**Original:** pitch.com (Section "How Pitch works")
**Visual:** Search "pitch.com how it works numbered steps"

---

# 6. Sequoia Capital (sequoiacap.com)

## 6.1 Article Card Grid mit "Ink" Treatment
**Typ:** Static Layout / Editorial
**Was es macht:** Jeder Artikel hat ein 1:1 Square-Image im einheitlichen "Ink-Style" (sepia, hand-drawn, oft mit Tier-Symbol), Kategorie-Tag (Perspective/News/Spotlight) und Verb-CTA (Read/Watch/Listen).
**Warum es stark ist:** Die einheitliche Bildsprache macht aus einer Linkliste ein Magazin. Jedes Stück fühlt sich kuratiert an.
**Anwendung bei uns:** "Sample Library" Card-Grid mit konsistentem Codex-Style für jedes Sample. Kategorie-Tags: Brief/Perspective/Field Note/Spotlight.
**Original:** sequoiacap.com
**Visual:** "Venture Capital Website Design - 50 Outstanding Examples" zeigt es in Galerie.

## 6.2 The Arc PMF Framework — Editorial Diagram
**Typ:** Editorial Hero / Diagram
**Was es macht:** Ein hand-illustriertes Framework-Diagramm mit Quadranten und Pfeilen, das das "Product-Market Fit"-Modell von Sequoia visualisiert. Im Codex-Stil. Plus Video-Version oben drauf.
**Warum es stark ist:** Genau die Mechanik, die wir auch wollen — ein Frame-Bild als shareable IP. Das Diagramm wird zum Synonym für Sequoia's Methodologie.
**Anwendung bei uns:** Unser eigenes "Brief Quality Framework" oder "Source Triangulation Diagram" als shareable Editorial-Asset.
**Original:** sequoiacap.com/article/pmf-framework
**Visual:** "The Arc Product-Market Fit Framework | Sequoia Capital"

## 6.3 Footer Motion Toggle
**Typ:** Motion-Control / Accessibility
**Was es macht:** Im Footer ein einfacher Toggle: "Motion: On / Off". Respektiert `prefers-reduced-motion`, gibt aber dem Nutzer manuelle Kontrolle.
**Warum es stark ist:** Klein, aber stark. Signalisiert Respekt vor dem User. Eine Mini-Geste mit großer Wirkung für Accessibility-bewusste Audiences.
**Anwendung bei uns:** Direkt übernehmen. Plus: "Theme: Dark / Paper" Toggle für Tageslicht-Lesemodus.
**Original:** sequoiacap.com (Footer)
**Visual:** Site direkt scrollen.

---

# 7. Reuters Graphics (reuters.com/graphics) — 5 Slots

## 7.1 Iran Oil Tanker Sankey — Ship-to-Ship Transfers
**Typ:** Interactive / Static Sankey-Hybrid
**Was es macht:** Sankey-style Visualisierung mit dunklem Hintergrund. Goldene Linien fließen vom Tanker "Dune" zu 11 anderen Schiffen, Linien-Dicke entspricht Transfervolumen. Insgesamt 33 Transfers, 5M Barrel Öl visualisiert.
**Warum es stark ist:** Klares Storytelling durch Topologie. Eine komplexe Geldwäsche-Operation wird durch Datenform sofort verständlich.
**Anwendung bei uns:** "Source Triangulation Sankey" — wie Behauptungen durch unsere Quellen gewichtet werden, von Primärquelle über Verifikation zu finaler Aussage im Brief.
**Original:** reuters.com/graphics (Iran oil investigation)
**Visual:** "Iranian Economy Buoyed By 'Dark Fleet' Oil Shipments To China"

## 7.2 Israel Air Defense Capabilities — Interactive Layered Diagram
**Typ:** Interactive Editorial
**Was es macht:** Ein vertikales Layer-Diagramm der Verteidigungssysteme (Iron Dome, David's Sling, Arrow), mit hover-fähigen Höhenangaben und Reichweiten. Sehr techy, sehr ruhig.
**Warum es stark ist:** Macht Militärtechnik verständlich, ohne Spektakel. Das Visual erklärt, was Worte schwer könnten.
**Anwendung bei uns:** "Verification Layers Diagram" — wie ein Brief durch unsere 4 Verifikationsschichten geht (Source / Cross-Reference / Expert Review / Editorial QA).
**Original:** reuters.com/graphics (Iran-Israel defense piece)
**Visual:** Search "reuters Israel air defense interactive"

## 7.3 US Imports & Tariffs Map
**Typ:** Interactive Choropleth
**Was es macht:** Welt-Karte mit Bundesstaaten/Ländern farbcodiert nach Tarif-Höhe, Hover zeigt Detail-Bars. Klar und neutral, ohne politische Färbung.
**Warum es stark ist:** Datenjournalismus auf höchstem Niveau. Politisch heikles Thema, völlig neutral aufbereitet.
**Anwendung bei uns:** "Brief Activity Heatmap" — globale Karte mit Briefs pro Land, hover zeigt Top-Themen pro Region.
**Original:** reuters.com/graphics (US Tariffs feature)
**Visual:** "U.S. Tariff Map 2025 | Global Distribution of Import Rates"

## 7.4 Climate Change Generations — Scrollytelling
**Typ:** Scrollytelling / Motion
**Was es macht:** Vertikales Scrollytelling mit fixierten Charts, die sich beim Scrollen verändern. Zeigt, wie unterschiedliche Generationen unterschiedliche Klima-Zukünfte erleben werden.
**Warum es stark ist:** Daten + Empathie. Macht abstrakte Zahlen zu persönlicher Erfahrung.
**Anwendung bei uns:** "How a Brief is Built" Scrollytelling auf der Methodology-Page — der Nutzer scrollt durch die Bauanleitung eines Briefs in Echtzeit.
**Original:** reuters.com/graphics (Climate generations)
**Visual:** Search "Reuters climate change generations interactive"

## 7.5 Annotation-First Static Charts
**Typ:** Static Chart Pattern
**Was es macht:** Reuters' charakteristischer Stil: Charts mit aggressiven Annotations direkt im Chart (Pfeile, Hand-drawn-Kreise, Mono-Captions), die die Story aktiv erzählen, nicht nur Daten zeigen.
**Warum es stark ist:** Daten allein erzählen keine Story. Annotations machen aus einem Chart eine Headline.
**Anwendung bei uns:** Jeder Chart in einem Brief bekommt mindestens eine Annotation mit Pfeil + Mono-Caption. Standard-Pattern, nicht Ausnahme.
**Original:** reuters.com/graphics (durchgängig)
**Visual:** Search "Reuters Graphics annotated charts"

---

# 8. The Pudding (pudding.cool) — 5 Slots

## 8.1 Birthday Effect — Probability Visualization
**Typ:** Interactive Static Chart
**Was es macht:** Ein dichter Punkte-Chart mit jedem Datenpunkt = ein Tod. Hervorhebung der Geburtstage. Klare Story: man stirbt häufiger am eigenen Geburtstag.
**Warum es stark ist:** Provokante Frage + dichte Daten + klare Antwort. Story-First Visualisierung.
**Anwendung bei uns:** "Brief Quality Effect" — zeigt mit dichten Datenpunkten, wie ein gut recherchierter Brief Entscheidungen verändert.
**Original:** pudding.cool/2025/04/birthday-effect
**Visual:** "the Birthday Paradox"

## 8.2 Pockets — Women's Clothing Inequality
**Typ:** Interactive Static / Editorial
**Was es macht:** Vergleicht Taschen-Größen zwischen Männer- und Frauen-Hosen mit echten Photo-Overlays + Bar-Charts. Thema: was passt rein? Lippenstift? iPhone? Geldbörse?
**Warum es stark ist:** Macht aus einem statistischen Befund (Frauen haben kleinere Taschen) eine emotional verständliche Geschichte. Photo + Daten + Witz.
**Anwendung bei uns:** "What fits in a 48h Brief?" — Visual Vergleich, was in unsere Tier-Pakete passt: Welche Fragen lassen sich in 48h beantworten, welche brauchen 2 Wochen?
**Original:** pudding.cool/2018/08/pockets
**Visual:** "Women's Pockets Really Suck - Core77"

## 8.3 Top 10 Songs Since 1958 — Streaming Timeline
**Typ:** Interactive / Audio
**Was es macht:** Ein interaktiver Time-Slider durch die Billboard #1-Songs seit 1958, jeder Song spielt für Sekunden proportional zur Länge an Position 1. Audio + Visual + Time.
**Warum es stark ist:** Macht aus Listen-Daten eine erfahrbare Erzählung. Audio-Daten sind selten gut visualisiert.
**Anwendung bei uns:** "Brief Topics Timeline" — interaktiver Slider durch die Top-Themen unserer Briefs der letzten 24 Monate. Klick auf einen Topic startet einen Audio-Quote eines Analysten dazu.
**Original:** pudding.cool (Top songs piece)
**Visual:** "Tendencies in love songs, as illustrated by The Pudding"

## 8.4 Happy Map — 100,000 Moments of Happiness
**Typ:** Interactive Map / Heatmap
**Was es macht:** Welt-Karte mit 100.000 Datenpunkten zu Glücksmomenten, Hover zeigt das Zitat des Moments. Punkte sind farbcodiert nach Kategorie.
**Warum es stark ist:** Big-Data + Personal Stories. Jeder Punkt ist nicht abstrakt, sondern eine echte Person.
**Anwendung bei uns:** "Brief Outcomes Map" — Karte mit anonymisierten Outcome-Stories ("Verhinderte Fehlentscheidung", "Identifizierte Marktchance"), klick auf einen Punkt zeigt Mini-Case-Study.
**Original:** pudding.cool/2026/02/happy-map
**Visual:** "Human Terrain"

## 8.5 Walkachusetts — Walking Diary Visualization
**Typ:** Editorial / Scrollytelling
**Was es macht:** Visueller Tagebuch-Eintrag eines langen Walks, GPS-Tracks + Photo-Drops + Emotion-Annotations + Wetter-Ticker. Hand-drawn-Charme + Daten.
**Warum es stark ist:** Persönlich + Daten-Reich. Eine Form, die zwischen Reisetagebuch und wissenschaftlicher Studie sitzt.
**Anwendung bei uns:** "A Brief in 48h" — der Tagebuch-Stil Walkthrough eines echten Briefs aus Sicht des Researchers, mit Zeitstempeln, Quellen, Sackgassen, Insights.
**Original:** pudding.cool/2025/10/walk
**Visual:** Search "pudding cool walkachusetts"

---

# 9. Atoll Digital (atolldigital.com)

## 9.1 Big-Type Hero mit Scroll-Stacking
**Typ:** Motion / Editorial Hero
**Was es macht:** Riesige Display-Typografie als Hero, beim Scrollen schichten sich darunter die Case-Study-Cards übereinander, jede teilweise sichtbar. Smooth Scroll mit Lenis.
**Warum es stark ist:** Ultra-reduzierte Palette (`#091423` + `#E6E8EA`), aber maximaler Effekt durch Scale + Motion.
**Anwendung bei uns:** Sample-Library-Page mit Scroll-Stacking — jede Sample-Card stapelt sich beim Scrollen, bleibt aber teilweise sichtbar.
**Original:** atolldigital.com (Hero)
**Visual:** "Atoll Digital - CSS Winner"

## 9.2 Industrial-Futuristic Case Study Mockups
**Typ:** Editorial Hero / Custom Photography
**Was es macht:** Jede Case Study hat eine custom-illustrierte oder photographierte Hero-Image im "Industrial-Futuristic"-Stil — Maschinen, technische Apparate, Workshop-Photos.
**Warum es stark ist:** Genau die Bildsprache, die wir wollen. Kein Stock, alles custom.
**Anwendung bei uns:** Direkt-Inspiration für unsere Codex-Apparate. Jede Service-Sektion bekommt ein eigenes "Apparat-Hero".
**Original:** atolldigital.com (Case Studies)
**Visual:** "Founder Case Study - A complete website revamp by Atoll Digital"

## 9.3 Mouse-Interaction-Trails
**Typ:** Motion / Cursor
**Was es macht:** Custom Cursor mit Trail-Effekt, der dezent dem Mausverlauf folgt. Subtile Akzentfarbe, niemals störend.
**Warum es stark ist:** Mikro-Detail mit Charakter. Macht die Site sofort wiedererkennbar.
**Anwendung bei uns:** Optionaler Custom Cursor (Kupfer-Pfeil im Codex-Stil), abschaltbar via Motion-Toggle.
**Original:** atolldigital.com (durchgängig)
**Visual:** Search "atoll digital mouse cursor effect"

---

# 10. Brian Lovin (brianlovin.com)

## 10.1 Single-Column Long-Read Layout
**Typ:** Static Editorial / Long-Read
**Was es macht:** Brutal einfaches Layout. Eine Spalte, max ~64ch Breite, perfekte Typografie, Inline-Code-Snippets, gelegentlich ein einzelnes Bild oder Diagramm. Keine Sidebar, kein TOC, keine "related posts".
**Warum es stark ist:** Maximaler Fokus auf Inhalt. Beweist, dass weniger besser ist.
**Anwendung bei uns:** Field Notes (Blog) und Brief-Sample-Pages folgen exakt diesem Layout. Single Column, alles andere ist Ablenkung.
**Original:** brianlovin.com/writing/*
**Visual:** "10 minimal portfolio examples for web developers who aren’t good at design"

## 10.2 Personal Changelog
**Typ:** Static List / Editorial
**Was es macht:** Eine chronologische Liste von "Activities" — was er gemacht hat, gelernt, gelesen, gebaut. Jede Zeile mit Datum, Mini-Icon, ein Satz Beschreibung.
**Warum es stark ist:** Transparenz auf Person-Niveau. Macht aus einer Persönlichkeit ein lebendes Dokument.
**Anwendung bei uns:** Public Changelog der Plattform: was haben wir an der Methodik geändert, welche neuen Quellen sind hinzugekommen, welche Briefs liefen besonders gut. Wöchentliche Updates.
**Original:** brianlovin.com/changelog (heute auf Polywork)
**Visual:** Search "brian lovin changelog"

## 10.3 "How Terminals Work" — Interactive Visual Guide
**Typ:** Interactive / Educational
**Was es macht:** Step-by-step interaktiver Guide, wie ein Terminal funktioniert. Jeder Schritt mit Animation, Code-Snippet, kurzer Erklärung. Built mit Next.js + Framer Motion.
**Warum es stark ist:** Verbindet Storytelling mit echter technischer Tiefe. Lehr-Format auf Designer-Niveau.
**Anwendung bei uns:** "How a Brief is Built" — interaktiver Guide für Erstkunden. Step-by-Step durch die Brief-Erstellung mit Mini-Animationen.
**Original:** github.com/brianlovin/how-terminals-work
**Visual:** Search "brian lovin how terminals work visual"

---

# Cross-Site Synthesis: Die wichtigsten 7 übergreifenden Patterns

Wenn ich aus allen 35+ Visualisierungen die wirklich entscheidenden Mechaniken ziehe, bleiben sieben Pattern übrig, die wir definitiv übernehmen:

| # | Pattern | Quelle | Warum |
|---|---|---|---|
| 1 | **Annotation-First Charts** (Arrows + Mono-Captions) | Reuters | Charts erzählen Stories, nicht Daten |
| 2 | **Square 1:1 Article Cards mit einheitlichem Bild-Treatment** | Sequoia, Pudding | Macht Listen zu Magazinen |
| 3 | **Numbered Process Steps in Section-Form** | Pitch, Linear | Methodologie wird verdaubar |
| 4 | **Live-Statistik-Mosaic** (Stripe-Style) | Stripe | Beweist Skala in Sekunden |
| 5 | **Single-Column Long-Read mit ~64ch Width** | Brian Lovin, Anthropic | Maximaler Lesefluss |
| 6 | **Custom Editorial Hero pro Sektion** (statt Stock) | Atoll, Stripe Customers | Identität entsteht durch Originale |
| 7 | **Motion Toggle im Footer** | Sequoia | Respekt vor User |

---

# Empfehlung: Mit welchen drei Patterns wir starten

Wenn du nur drei umsetzt, dann diese:

1. **Annotation-First Charts** (Reuters-Mechanik) — wird das Look-Defining-Element jedes Briefs
2. **Square 1:1 Article Cards** (Sequoia-Mechanik) — sofortige Editorial-Anmutung der Sample Library
3. **Stats-Mosaic im Hero** (Stripe-Mechanik) — Vertrauen in 5 Sekunden

Diese drei zusammen bringen dich von "weitere SaaS-Site" zu "Editorial Research Platform" — exakt der Brand-Move, den wir wollen.

---

*Visuals werden iterativ ergänzt. Wenn dir eine Mechanik besonders wichtig ist, baue ich dazu einen Prototyp im Codex-Stil als nächsten Schritt.*
