# S&O Beauty Salon: Website Copy

> Complete source-language copy inventory for redesign. The detailed sections are kept in their structured content-data format so headings, paragraphs, lists, FAQs, and article hierarchy stay intact.

## Design constraint: retain the existing colors

Redesign the layout and presentation, but keep the current S&O Beauty Salon color system. Do not replace it with a new palette.

| Token | Color | Intended role |
| --- | --- | --- |
| Rose bone | `#f5f0ea` | Warm base background |
| Rose paper | `#fffdfa` | Light surface/background |
| Rose blush | `#e3c4c0` | Soft accent field |
| Rose accent | `#c98f91` | Primary rosy accent |
| Rose wine | `#713746` | Brand dark / prominent controls |
| Rose wine dark | `#4b222e` | Deep contrast / hover state |
| Rose ink | `#21191c` | Primary text |
| Rose muted | `#766b6d` | Secondary text |
| Sage | `#c8cabb` | Supporting accent |
| Sage deep | `#737867` | Dark supporting accent |
| Gold | `#b99a6c` | Small highlight accent |

## Reference design structure to adapt

Use the supplied beauty-editorial reference as the structural and art-direction cue for the redesign. Translate its composition to S&O Beauty Salon; do not copy its ecommerce copy, product pricing, product controls, logos, or imagery.

### Overall feel

- Refined, warm, editorial beauty experience with a calm luxury feel.
- Large high-contrast serif headlines paired with a restrained, compact sans-serif for navigation, labels, metadata, and utility text.
- Generous white/rose-bone space, thin dividers, soft paper-like cards, and dark rose-wine pill buttons.
- Use full-bleed, real beauty-treatment imagery in a calm, natural style. Images should feel tactile and human, never overly retouched or stock-template-like.
- Keep the existing S&O color system exactly as specified above.

### Homepage composition

1. **Overlay navigation on the hero**
   - A slim, rounded, light navigation bar sits over the top edge of the hero image.
   - Brand mark on the left; concise navigation in the center; a dark rose-wine WhatsApp booking pill on the right.
   - Keep the floating DE/EN language switcher visible and separate from this header.

2. **Full-width hero with asymmetric copy**
   - Use a cinematic beauty image as the full-bleed backdrop.
   - Place the eyebrow, large hero headline, concise consultation-led body copy, and WhatsApp CTA in the lower-left area.
   - Preserve high legibility through framing and subtle tonal treatment; avoid adding a heavy opaque panel over the image.

3. **Trust / partner strip**
   - Directly below the hero, add a restrained horizontal strip for qualified technology, treatment standards, or recognitions.
   - Use text marks rather than inventing partner logos. Suitable items include: `Soprano ICE Platinum`, `NiSV-Fachkunde`, `Persönliche Beratung`, and `Mannheim Q1`.

4. **Centered value-proposition section**
   - Center a strong editorial headline and a short supporting paragraph.
   - Follow with a two-by-two grid of compact feature cards, each using a small circular icon or number marker.
   - Adapt the reference’s feature-card rhythm to the salon’s real strengths: personal consultation, qualified treatment, tailored planning, and calm aftercare.

5. **Treatment collection**
   - Use a left-aligned section headline and short introduction, with a secondary action aligned on the right.
   - Present treatments as a three-column image-led card grid on desktop and a single-column stack or horizontal scroll on mobile.
   - Each card should show: treatment image/video still, service name, short description, and one clear action such as `Zur Behandlung` or `Termin anfragen`.
   - Do not use product prices, “add to cart,” “buy now,” or product commerce mechanics.

6. **Editorial image-and-copy break**
   - Use a calm two-column block: a portrait or treatment-detail image on one side and a large serif statement with one CTA on the other.
   - Map this to either the Soprano ICE Platinum technology story or the personal-consultation message.

7. **Proof and testimonials**
   - Keep the reference’s trust-section rhythm: a strong heading, brief explanation, and compact quote cards.
   - Only display testimonials if approved real customer quotes and names are supplied. Otherwise, replace this section with factual proof points, process milestones, or a compact “What to expect” strip.

8. **Structured footer**
   - Use a clear multi-column footer for brand statement, treatments, useful links, contact details, and the WhatsApp booking CTA.
   - Keep the existing legal links, address, phone number, and email. Do not add newsletter collection unless it is explicitly requested.

### Responsive behavior

- Maintain the reference’s editorial hierarchy on mobile: hero copy remains readable, cards stack cleanly, and buttons keep a minimum touch target of 44px.
- Reduce navigation to a menu button on small screens while keeping the booking CTA and language switcher easy to reach.
- Preserve breathing room around serif headlines; do not simply shrink desktop sections into dense mobile blocks.

## Shared, homepage, and legal copy

```json
{
  "homepage": [
    "S&O Beauty Salon · Mannheim Q1",
    "Laser & Hautpflege in Mannheim.",
    "Wir nehmen uns Zeit für eine persönliche Beratung und wählen gemeinsam die Behandlung, die zu Ihnen passt.",
    "Ein Termin, der mit Zuhören beginnt.",
    "Persönliche Beratung bedeutet für uns: Wir schauen zuerst auf Ihr Ziel, Ihre Haut und das, was sich für Sie richtig anfühlt. Danach empfehlen wir den passenden nächsten Schritt.",
    "Wählen Sie, was Sie interessiert.",
    "Einblicke in ausgewählte Anwendungen. Alle Details finden Sie auf der jeweiligen Behandlungsseite.",
    "Noch nicht sicher, was passt?",
    "Schreiben Sie uns kurz, was Sie sich wünschen. Wir klären gemeinsam, welche Behandlung sinnvoll ist und wie der Termin abläuft.",
    "Kontrollierte Wärme. Kontinuierliche Kühlung.",
    "Der Applikator wird gleichmäßig über die Haut geführt. Die integrierte Kühlung unterstützt ein möglichst angenehmes Behandlungsgefühl. Das persönliche Empfinden kann variieren.",
    "Von der Nachricht bis zur Nachpflege.",
    "Ihr Termin beginnt in Q1.",
    "Zentral in den Quadraten und bequem erreichbar. Termine vereinbaren wir persönlich per WhatsApp."
  ],
  "navigation": [
    "Behandlungen",
    "Technologie",
    "Ablauf",
    "Ratgeber",
    "Kontakt",
    "Termin anfragen",
    "Termin über WhatsApp"
  ],
  "languageSwitcher": [
    "EN",
    "English",
    "DE",
    "Deutsch",
    "Switch website language to English",
    "Website auf Deutsch umstellen"
  ],
  "legal": [
    "Impressum",
    "Datenschutz",
    "Rechtliche Angaben",
    "Entwurf für die Vorschau: Vor Veröffentlichung müssen der vollständige Name der Inhaberin und gegebenenfalls weitere Pflichtangaben ergänzt und geprüft werden.",
    "Entwurf für die Vorschau: Die verantwortliche Person und die Angaben des späteren Vercel-Hostings müssen vor Veröffentlichung vollständig ergänzt und rechtlich geprüft werden.",
    "Die Website ist als datensparsame Landingpage angelegt. Sie verwendet derzeit keine Analyse- oder Marketing-Cookies und bindet das Hero-Video sowie Schriften lokal ein. Beim Aufruf können technisch notwendige Server-Protokolldaten durch den Hostinganbieter verarbeitet werden.",
    "Wenn Sie den WhatsApp-Link öffnen, verlassen Sie diese Website. Für die anschließende Verarbeitung gelten zusätzlich die Datenschutzbestimmungen des von Ihnen genutzten WhatsApp-Dienstes. Der Kontakt erfolgt freiwillig."
  ]
}
```

## Treatment copy

```ts
const treatments = [
  {
    name: "Laser-Haarentfernung",
    number: "01",
    slug: "laser-haarentfernung",
    href: "/behandlungen/laser-haarentfernung",
    shortDescription:
      "Individuell auf Haut und Haar abgestimmte Behandlungen mit moderner Soprano-Technologie.",
    seoTitle: "Laser-Haarentfernung Mannheim",
    seoDescription:
      "Laser-Haarentfernung in Mannheim mit Soprano ICE Platinum, NiSV-Fachkunde und persönlicher Beratung bei S&O Beauty Salon in Q1.",
    intro:
      "Für glatte Haut mit ruhigem, professionellem Ablauf: Bei S&O Beauty Salon wird die Laser-Haarentfernung individuell auf Hauttyp, Haarstruktur und Behandlungsbereich abgestimmt.",
    promise:
      "Soprano ICE Platinum arbeitet mit drei Wellenlängen und kontinuierlicher Kühlung. Dadurch fühlt sich die Behandlung besonders komfortabel an und kann Schritt für Schritt gleichmäßig durchgeführt werden.",
    overviewTitle: "Weniger Rasur im Alltag – mit einem Plan, der zu Ihnen passt.",
    overview:
      "Laser-Haarentfernung ist keine Behandlung nach Schablone. Haarfarbe, Hauttyp, Körperregion und Wachstumsphasen beeinflussen, welche Einstellungen sinnvoll sind und wie sich eine Behandlungsserie entwickelt.",
    proofTitle: "Drei Wellenlängen, kontinuierliche Kühlung und NiSV-Fachkunde.",
    proof:
      "Der Soprano ICE Platinum kombiniert drei Laserwellenlängen in einem Applikator. Vor der Anwendung werden Haut, Haare, Behandlungsbereich und mögliche Ausschlussgründe persönlich besprochen.",
    highlights: ["Soprano ICE Platinum", "NiSV-Fachkunde", "Nahezu schmerzfreie Anwendung*"],
    video: {
      src: "/media/services/client-laser-leg.mp4",
      poster: "/media/services/client-laser-leg-poster.jpg",
      objectPosition: "48% 52%",
      mobileObjectPosition: "52% 50%",
      label: "Laser-Haarentfernung im Studio",
    },
    benefits: [
      "Persönliche Einschätzung vor der ersten Anwendung",
      "Geeignet für verschiedene Behandlungsbereiche",
      "SHR In-Motion-Technik für gleichmäßige Wärme",
      "ICE Kühlung für mehr Hautkomfort",
    ],
    processSteps: [
      {
        title: "Beratung & Hautcheck",
        text: "Vor dem ersten Termin schauen wir uns Hauttyp, Haarstruktur, Behandlungsbereich und wichtige Hinweise in Ruhe an.",
      },
      {
        title: "Vorbereitung",
        text: "Der Bereich wird vorbereitet, Schmuck oder Pflegeprodukte werden vermieden und die passenden Einstellungen werden gewählt.",
      },
      {
        title: "Laser-Anwendung",
        text: "Der Applikator wird gleichmäßig über die Haut geführt. Die Kühlung unterstützt den Komfort während der Behandlung.",
      },
      {
        title: "Nachpflege & Plan",
        text: "Zum Abschluss besprechen wir Pflege, Sonnenschutz und den sinnvollen Abstand bis zum nächsten Termin.",
      },
    ],
    preparation: [
      "Den Rasurzeitpunkt vor dem ersten Termin kurz mit uns abstimmen; häufig wird am Vortag rasiert.",
      "Die Haare in den Wochen davor nicht wachsen, epilieren oder zupfen.",
      "Intensive Sonne, Solarium und Selbstbräuner vor dem Termin vermeiden.",
      "Die Behandlungsfläche sauber und frei von Deo, Öl oder Creme lassen.",
    ],
    aftercare: [
      "Die Haut am Behandlungstag ruhig halten und starke Wärme oder Reibung vermeiden.",
      "Konsequenten Sonnenschutz verwenden und direkte Sonne meiden.",
      "Bei Rötung nur die individuell empfohlene, milde Pflege nutzen.",
      "Ungewöhnliche oder anhaltende Reaktionen zeitnah mit dem Studio oder ärztlich klären.",
    ],
    suitability: [
      "Sie möchten Rasur oder andere kurzfristige Haarentfernung reduzieren.",
      "Sie sind bereit für mehrere, auf den Haarzyklus abgestimmte Termine.",
      "Sie wünschen eine persönliche Einschätzung statt eines Standardprogramms.",
    ],
    askFirst: [
      "Bei Schwangerschaft, Stillzeit oder photosensibilisierenden Medikamenten.",
      "Bei frischer Bräune, Sonnenbrand, aktiver Hautreizung oder Infektion im Bereich.",
      "Bei sehr hellen, roten oder weißen Haaren, weil die Eignung eingeschränkt sein kann.",
    ],
    relatedGuides: [
      { href: "/ratgeber/laser-haarentfernung-vorbereitung", title: "Vorbereitung und Rasur vor dem Lasertermin" },
      { href: "/ratgeber/laser-haarentfernung-wie-viele-sitzungen", title: "Warum mehrere Lasersitzungen notwendig sind" },
      { href: "/ratgeber/laser-haarentfernung-kosten-mannheim", title: "Wovon die Kosten in Mannheim abhängen" },
    ],
    steps: [
      "Kurze WhatsApp-Anfrage mit gewünschtem Bereich senden.",
      "Hauttyp, Haare und mögliche Hinweise persönlich besprechen.",
      "Behandlung ruhig durchführen und den weiteren Plan abstimmen.",
    ],
    faq: [
      {
        question: "Ist die Laser-Haarentfernung schmerzfrei?",
        answer:
          "Der Hersteller beschreibt die Soprano-Technologie als virtually painless. Wir formulieren bewusst vorsichtig: Das Empfinden ist individuell, die integrierte Kühlung sorgt aber für deutlich mehr Komfort.",
      },
      {
        question: "Wie viele Termine brauche ich?",
        answer:
          "Das hängt von Behandlungsbereich, Haarstruktur und Hauttyp ab. Beim ersten Termin besprechen wir realistisch, welcher Rhythmus sinnvoll ist.",
      },
      {
        question: "Muss ich mich vor der Laser-Haarentfernung rasieren?",
        answer:
          "In vielen Fällen ja. Den genauen Zeitpunkt stimmen wir vor dem ersten Termin mit Ihnen ab. Wachsen, Epilieren und Zupfen sollten vorher vermieden werden, weil die Haarwurzel für die Anwendung erhalten bleiben muss.",
      },
      {
        question: "Kann Laser-Haarentfernung im Sommer stattfinden?",
        answer:
          "Das hängt vom Hautzustand, der aktuellen Bräune und dem behandelten Bereich ab. Intensive Sonne und Solarium müssen rund um den Termin vermieden werden; wir beurteilen die Situation individuell.",
      },
      {
        question: "Wann fallen behandelte Haare aus?",
        answer:
          "Die Haare verschwinden nicht unmittelbar beim Termin. Ein Teil löst sich in den darauffolgenden Tagen oder Wochen. Wie sichtbar dieser Prozess ist, variiert nach Region und Haarzyklus.",
      },
      {
        question: "Für welche Haarfarben eignet sich die Behandlung?",
        answer:
          "Laserenergie benötigt Pigment im Haar. Sehr helle, weiße oder rote Haare sprechen deshalb häufig deutlich schlechter an. Eine persönliche Einschätzung vorab ist wichtig.",
      },
    ],
  },
  {
    name: "AquaFacial",
    number: "02",
    slug: "aquafacial",
    href: "/behandlungen/aquafacial",
    shortDescription:
      "Intensive Reinigung, Pflege und Feuchtigkeit für ein frisches, gepflegtes Hautgefühl.",
    seoTitle: "AquaFacial Mannheim",
    seoDescription:
      "AquaFacial in Mannheim bei S&O Beauty Salon: Reinigung, Feuchtigkeit und Pflege für ein frisches Hautgefühl.",
    intro:
      "AquaFacial ist ideal, wenn die Haut frischer, klarer und gepflegter wirken soll, ohne dass der Termin schwer oder kompliziert wird.",
    promise:
      "Die Behandlung verbindet Reinigung, Pflege und Feuchtigkeit in einem ruhigen Ablauf, der sich gut in den Alltag integrieren lässt.",
    overviewTitle: "Reinigung und Feuchtigkeit für ein klar gepflegtes Hautgefühl.",
    overview:
      "AquaFacial verbindet mehrere Pflegeschritte in einem Termin. Welche Intensität und welche Produkte passen, richtet sich nach Hautzustand, Empfindlichkeit und Ihrem persönlichen Ziel.",
    proofTitle: "Erst ansehen, dann behandeln.",
    proof:
      "Vor dem Start wird die Haut in Ruhe betrachtet. Bei aktiver Reizung oder anderen Auffälligkeiten wird die Anwendung angepasst, verschoben oder eine fachliche Abklärung empfohlen.",
    highlights: ["Frisches Hautgefühl", "Feuchtigkeit", "Sanfte Pflege"],
    video: {
      src: "/media/services/aquafacial-cleaning.mp4",
      objectPosition: "50% 48%",
      mobileObjectPosition: "50% 46%",
      label: "Gesichtsreinigung mit einem professionellen Pflegegerät",
      caption: "Einblick in einen Reinigungsschritt",
    },
    benefits: [
      "Für müde oder trockene Haut geeignet",
      "Ruhiger Pflegeablauf ohne lange Erklärung",
      "Individuell auf das Hautgefühl abgestimmt",
      "Schöne Option vor besonderen Anlässen",
    ],
    processSteps: [
      {
        title: "Hautgefühl klären",
        text: "Wir besprechen kurz, ob die Haut eher trocken, müde, empfindlich oder unrein wirkt und was Sie sich wünschen.",
      },
      {
        title: "Reinigung",
        text: "Die Haut wird vorbereitet und sanft gereinigt, damit die Pflege gleichmäßig und angenehm durchgeführt werden kann.",
      },
      {
        title: "Pflege & Feuchtigkeit",
        text: "Die Behandlung konzentriert sich auf ein frisches, gepflegtes Hautgefühl und eine schöne Feuchtigkeitsversorgung.",
      },
      {
        title: "Abschlusspflege",
        text: "Am Ende stimmen wir die passende Pflege für danach ab, damit die Haut ruhig in den Alltag zurückkommt.",
      },
    ],
    preparation: [
      "Am Behandlungstag möglichst ohne stark deckendes Make-up kommen.",
      "Aggressive Peelings oder stark reizende Wirkstoffe vorher pausieren, wenn die Haut empfindlich reagiert.",
      "Aktuelle Hautreaktionen und kürzlich erfolgte Behandlungen offen ansprechen.",
    ],
    aftercare: [
      "Die Haut mit milder Pflege und Sonnenschutz unterstützen.",
      "Am selben Tag keine zusätzlichen intensiven Peelings verwenden.",
      "Bei ungewohnt starker Reaktion Rücksprache halten.",
    ],
    suitability: [
      "Ihre Haut wirkt trocken, müde oder pflegebedürftig.",
      "Sie wünschen Reinigung und Feuchtigkeit in einem Termin.",
      "Sie möchten eine Behandlung, die sich meist gut in den Alltag integrieren lässt.",
    ],
    askFirst: [
      "Bei offenen Stellen, frischem Sonnenbrand oder aktiver Hautinfektion.",
      "Bei stark entzündeter Akne oder einem akuten Rosazea-Schub.",
      "Wenn kürzlich Laser, intensives Peeling oder Microneedling durchgeführt wurde.",
    ],
    relatedGuides: [
      { href: "/ratgeber/aquafacial-oder-microneedling", title: "AquaFacial oder Microneedling vergleichen" },
      { href: "/behandlungen/professionelle-hautpflege", title: "Professionelle Hautpflege kennenlernen" },
    ],
    steps: [
      "Hautgefühl und Ziel kurz besprechen.",
      "Reinigung und Pflege ruhig durchführen.",
      "Abschlusspflege und Empfehlungen für danach abstimmen.",
    ],
    faq: [
      {
        question: "Wann passt AquaFacial besonders gut?",
        answer:
          "Wenn die Haut frisch, gepflegt und gut durchfeuchtet wirken soll. Besonders beliebt ist es vor Events oder als regelmäßige Pflege.",
      },
      {
        question: "Kann ich danach direkt weiter in den Alltag?",
        answer:
          "In der Regel ja. Wir geben Ihnen nach der Behandlung passende Hinweise für Ihre Haut und den restlichen Tag.",
      },
      {
        question: "Wie läuft ein AquaFacial ab?",
        answer:
          "Der genaue Ablauf wird auf die Haut abgestimmt und verbindet vorbereitende Reinigung, Pflege- und Feuchtigkeitsschritte sowie eine passende Abschlusspflege.",
      },
      {
        question: "Ist AquaFacial auch für empfindliche Haut geeignet?",
        answer:
          "Das kann möglich sein, muss aber individuell eingeschätzt und sanft angepasst werden. Bei akuter Reizung oder einem entzündlichen Schub sollte der Termin verschoben oder fachlich abgeklärt werden.",
      },
      {
        question: "Was sollte ich nach AquaFacial beachten?",
        answer:
          "Milde Pflege, Sonnenschutz und eine Pause von aggressiven Peelings sind eine gute Basis. Die konkreten Hinweise richten sich nach Ihrem Hautzustand.",
      },
      {
        question: "Wie häufig ist AquaFacial sinnvoll?",
        answer:
          "Das hängt von Hautzustand, Ziel und Pflegeroutine ab. Wir empfehlen keine starre Serie, sondern besprechen nach dem Termin, ob und wann eine Wiederholung sinnvoll ist.",
      },
    ],
  },
  {
    name: "Microneedling",
    number: "03",
    slug: "microneedling",
    href: "/behandlungen/microneedling",
    shortDescription:
      "Eine gezielte Anwendung zur Unterstützung eines ebenmäßiger wirkenden Hautbildes.",
    seoTitle: "Microneedling Mannheim",
    seoDescription:
      "Microneedling in Mannheim bei S&O Beauty Salon: persönliche Beratung und gezielte Anwendung für ein ebenmäßiger wirkendes Hautbild.",
    intro:
      "Microneedling richtet sich an Kundinnen und Kunden, die ihr Hautbild gezielt unterstützen und die Hautstruktur feiner wirken lassen möchten.",
    promise:
      "Vor der Anwendung schauen wir genau auf Hautzustand und Ziel. So bleibt der Termin persönlich, ruhig und passend dosiert.",
    overviewTitle: "Eine gezielte Anwendung für Hautstruktur und ein ebenmäßigeres Erscheinungsbild.",
    overview:
      "Beim kosmetischen Microneedling wird die Haut kontrolliert mit sehr feinen Nadeln behandelt. Entscheidend sind ein geeigneter Hautzustand, eine saubere Durchführung und konsequente Nachpflege.",
    proofTitle: "Hautcheck und Nachpflege gehören zur Behandlung.",
    proof:
      "Microneedling passt nicht zu jeder Haut und nicht zu jedem Zeitpunkt. Deshalb werden Hautzustand, Ziel, aktuelle Pflege und mögliche Gründe zum Verschieben vorab besprochen.",
    highlights: ["Hautbild", "Struktur", "Persönliche Planung"],
    video: {
      src: "/media/services/microneedling.m4v",
      objectPosition: "54% 50%",
      mobileObjectPosition: "58% 50%",
      label: "Gezielte Hautbehandlung im Studio",
    },
    benefits: [
      "Gezielte Anwendung statt Standardprogramm",
      "Für ein ebenmäßiger wirkendes Hautbild",
      "Ruhige Beratung vor dem Start",
      "Klare Pflegehinweise für danach",
    ],
    processSteps: [
      {
        title: "Hautbild ansehen",
        text: "Wir klären, welche Hautbereiche im Fokus stehen und ob die Behandlung gerade sinnvoll für Ihre Haut ist.",
      },
      {
        title: "Vorbereiten",
        text: "Die Haut wird gereinigt und vorbereitet, damit die Anwendung sauber, ruhig und passend dosiert starten kann.",
      },
      {
        title: "Gezielte Anwendung",
        text: "Die Behandlung erfolgt kontrolliert und Schritt für Schritt, abgestimmt auf Hautzustand und Ziel.",
      },
      {
        title: "Beruhigen & Hinweise",
        text: "Nach der Anwendung bekommt die Haut Ruhe, passende Pflegehinweise und klare Empfehlungen für die nächsten Tage.",
      },
    ],
    preparation: [
      "Stark reizende Wirkstoffe und intensive Peelings vorher pausieren.",
      "Sonnenbrand, aktive Entzündungen oder offene Stellen vorab mitteilen.",
      "Am Termin möglichst ohne Make-up kommen und aktuelle Medikamente ansprechen.",
    ],
    aftercare: [
      "Die Haut nicht unnötig berühren und nur die empfohlene milde Pflege verwenden.",
      "Make-up, intensive Wirkstoffe, Sport, Sauna und Schwimmbad zunächst pausieren.",
      "Direkte Sonne vermeiden und konsequenten Sonnenschutz nutzen.",
      "Bei ungewöhnlicher, zunehmender oder lang anhaltender Reaktion ärztlichen Rat einholen.",
    ],
    suitability: [
      "Sie möchten Hautstruktur oder ein unruhig wirkendes Hautbild gezielt unterstützen.",
      "Sie können der Haut nach dem Termin einige ruhige Tage geben.",
      "Sie wünschen eine individuell dosierte kosmetische Anwendung.",
    ],
    askFirst: [
      "Bei aktiver Akne, Herpes, Hautinfektion, offenen Stellen oder frischer Bräune.",
      "Bei Neigung zu Keloiden, schlechter Wundheilung oder beeinträchtigtem Immunsystem.",
      "Bei Schwangerschaft, Blutverdünnern oder kürzlich eingenommenem Isotretinoin.",
    ],
    relatedGuides: [
      { href: "/ratgeber/microneedling-nachsorge", title: "Microneedling-Nachsorge verständlich erklärt" },
      { href: "/ratgeber/aquafacial-oder-microneedling", title: "AquaFacial oder Microneedling vergleichen" },
      { href: "/behandlungen/aquafacial", title: "AquaFacial als sanftere Pflegeoption ansehen" },
    ],
    steps: [
      "Hautzustand und Ziel gemeinsam ansehen.",
      "Anwendung passend zum Hautbild durchführen.",
      "Nachpflege und Abstand zum nächsten Termin besprechen.",
    ],
    faq: [
      {
        question: "Für wen ist Microneedling gedacht?",
        answer:
          "Für Menschen, die Hautstruktur und Hautbild gezielt unterstützen möchten. Ob es passt, klären wir vorab persönlich.",
      },
      {
        question: "Was muss ich danach beachten?",
        answer:
          "Wir erklären Ihnen direkt im Studio, welche Pflege und welche Pausen für Ihre Haut nach dem Termin sinnvoll sind.",
      },
      {
        question: "Wie lange ist die Haut nach Microneedling gerötet?",
        answer:
          "Rötung, Wärmegefühl oder leichte Schwellung können auftreten und klingen häufig innerhalb weniger Tage ab. Stärke und Dauer hängen von Haut und Intensität ab.",
      },
      {
        question: "Wann darf ich nach Microneedling wieder Make-up tragen?",
        answer:
          "Die frisch behandelte Haut sollte zunächst sauber und frei von Make-up bleiben. Den passenden Zeitpunkt erklären wir abhängig von Hautreaktion und Behandlungstiefe.",
      },
      {
        question: "Darf ich nach Microneedling Sport machen?",
        answer:
          "Intensiver Sport, Sauna und starkes Schwitzen sollten zunächst pausieren, weil Wärme, Schweiß und Reibung die Haut zusätzlich reizen können.",
      },
      {
        question: "Wann sollte Microneedling nicht durchgeführt werden?",
        answer:
          "Unter anderem bei aktiven Infektionen, offenen Stellen, entzündeter Haut oder frischem Sonnenbrand. Weitere persönliche Faktoren klären wir vorab; bei Unsicherheit ist ärztlicher Rat sinnvoll.",
      },
    ],
  },
  {
    name: "Wimpernlifting",
    number: "04",
    slug: "wimpernlifting",
    href: "/behandlungen/wimpernlifting",
    shortDescription:
      "Natürlich geschwungene, ausdrucksstarke Wimpern - gepflegt und alltagstauglich.",
    seoTitle: "Wimpernlifting Mannheim",
    seoDescription:
      "Wimpernlifting in Mannheim bei S&O Beauty Salon: natürlicher Schwung, gepflegter Look und Termin per WhatsApp.",
    intro:
      "Wimpernlifting ist die dezente Lösung, wenn die eigenen Wimpern sichtbarer, geschwungener und gepflegt wirken sollen.",
    promise:
      "Der Look bleibt natürlich und alltagstauglich. Wir stimmen den Ablauf auf Ihre Wimpern und Ihren gewünschten Ausdruck ab.",
    overviewTitle: "Mehr Schwung aus den eigenen Wimpern – ohne Extensions.",
    overview:
      "Beim Wimpernlifting werden die Naturwimpern geformt und aufgerichtet. Die Form wird so gewählt, dass sie zu Wimpernlänge, Augenpartie und dem gewünschten Ausdruck passt.",
    proofTitle: "Sorgfalt zeigt sich in der Vorbereitung.",
    proof:
      "Die Augenpartie wird vor dem Termin betrachtet und die Wimpern werden sauber getrennt und positioniert. Bei Reizung oder auffälliger Empfindlichkeit wird nicht einfach weiterbehandelt.",
    highlights: ["Natürlicher Schwung", "Ausdruck", "Gepflegter Look"],
    video: {
      src: "/media/services/wimpern-elegant.m4v",
      objectPosition: "52% 46%",
      mobileObjectPosition: "56% 48%",
      label: "Wimpernbehandlung im Beauty Salon",
    },
    benefits: [
      "Mehr Ausdruck ohne künstlichen Effekt",
      "Alltagstauglicher, gepflegter Look",
      "Passend zur natürlichen Wimpernform",
      "Ideal für einen frischen Blick",
    ],
    processSteps: [
      {
        title: "Wunschlook besprechen",
        text: "Wir schauen, welcher Schwung natürlich wirkt und zu Augenform, Wimpernlänge und Alltag passt.",
      },
      {
        title: "Wimpern vorbereiten",
        text: "Die Wimpern werden sauber vorbereitet und sorgfältig positioniert, damit das Ergebnis gleichmäßig wirkt.",
      },
      {
        title: "Lifting durchführen",
        text: "Der Schwung wird Schritt für Schritt aufgebaut, ohne einen künstlichen oder überladenen Look zu erzeugen.",
      },
      {
        title: "Pflegehinweise",
        text: "Zum Schluss erklären wir, worauf Sie danach achten sollten, damit der Look schön erhalten bleibt.",
      },
    ],
    preparation: [
      "Ohne Mascara, Augen-Make-up und ölhaltige Pflege zur Behandlung kommen.",
      "Kontaktlinsen nach Möglichkeit vor dem Termin herausnehmen.",
      "Aktuelle Reizungen, Allergien oder sehr empfindliche Augen vorher ansprechen.",
    ],
    aftercare: [
      "Die Wimpern in der ersten Zeit trocken halten und nicht stark reiben.",
      "Ölige Produkte direkt an den Wimpern zunächst vermeiden.",
      "Die Wimpern vorsichtig behandeln und Pflegehinweise aus dem Studio beachten.",
    ],
    suitability: [
      "Sie möchten Ihre Naturwimpern sichtbarer und geschwungener wirken lassen.",
      "Sie bevorzugen einen natürlichen Look ohne Extensions.",
      "Sie möchten morgens weniger mit Wimpernzange und Mascara arbeiten.",
    ],
    askFirst: [
      "Bei gereizten, entzündeten oder frisch operierten Augen.",
      "Bei bekannten Allergien gegen Lifting- oder Färbeprodukte.",
      "Wenn die Naturwimpern aktuell sehr geschädigt oder brüchig sind.",
    ],
    relatedGuides: [
      { href: "/ratgeber", title: "Weitere Beauty- und Pflegehinweise" },
      { href: "/behandlungen/professionelle-hautpflege", title: "Professionelle Hautpflege entdecken" },
    ],
    steps: [
      "Wunschlook und Wimpernform kurz besprechen.",
      "Lifting sorgfältig durchführen.",
      "Pflegehinweise für die Haltbarkeit mitgeben.",
    ],
    faq: [
      {
        question: "Sieht Wimpernlifting natürlich aus?",
        answer:
          "Ja, genau das ist der Vorteil. Der Effekt kommt aus den eigenen Wimpern und wirkt gepflegt, nicht überladen.",
      },
      {
        question: "Wie buche ich einen Termin?",
        answer:
          "Am einfachsten per WhatsApp. Schreiben Sie kurz Wimpernlifting und Ihre Wunschzeit, dann stimmen wir den Termin ab.",
      },
      {
        question: "Wie lange hält ein Wimpernlifting?",
        answer:
          "Der Schwung wächst mit dem natürlichen Wimpernzyklus heraus. Häufig wird mit mehreren Wochen gerechnet; die genaue Haltbarkeit variiert nach Wimpernstruktur und Pflege.",
      },
      {
        question: "Darf ich nach dem Wimpernlifting Mascara benutzen?",
        answer:
          "Nach der ersten Schonzeit ist Mascara meist wieder möglich. Wir erklären Ihnen beim Termin, wann es für das verwendete System sinnvoll ist.",
      },
      {
        question: "Was muss ich vor dem Wimpernlifting beachten?",
        answer:
          "Kommen Sie möglichst ohne Mascara, Augen-Make-up und ölhaltige Produkte. Kontaktlinsen sollten nach Möglichkeit vorher herausgenommen werden.",
      },
      {
        question: "Kann ein Wimpernlifting wiederholt werden?",
        answer:
          "Ja, wenn die Wimpern gesund wirken und ausreichend herausgewachsen sind. Den passenden Abstand bestimmen wir anhand des aktuellen Wimpernzustands.",
      },
    ],
  },
  {
    name: "Professionelle Hautpflege",
    number: "05",
    slug: "professionelle-hautpflege",
    href: "/behandlungen/professionelle-hautpflege",
    shortDescription:
      "Ruhige, persönliche Pflege, abgestimmt auf Ihren Hauttyp und Ihre individuellen Ziele.",
    seoTitle: "Professionelle Hautpflege Mannheim",
    seoDescription:
      "Professionelle Hautpflege in Mannheim bei S&O Beauty Salon: individuelle Pflege, persönliche Beratung und ruhige Atmosphäre.",
    intro:
      "Professionelle Hautpflege bei S&O Beauty Salon bedeutet: nicht einfach irgendeine Anwendung, sondern eine ruhige Pflege, die zu Ihrer Haut passt.",
    promise:
      "Wir schauen auf Hautgefühl, Wünsche und Alltag. Daraus entsteht ein Termin, der gepflegt, persönlich und angenehm bleibt.",
    overviewTitle: "Pflege, die nicht mit einem Produkt, sondern mit Ihrer Haut beginnt.",
    overview:
      "Professionelle Hautpflege ist der passende Einstieg, wenn Sie noch keine konkrete Gerätebehandlung suchen. Hautgefühl, Alltag und Pflegeroutine bestimmen, welche Schritte sinnvoll sind.",
    proofTitle: "Keine starre Behandlungsliste – eine verständliche Empfehlung.",
    proof:
      "Wir wählen Reinigung, Pflege und Abschluss nicht nach einem Standardpaket, sondern nach dem sichtbaren und beschriebenen Hautzustand. Bei auffälligen Veränderungen empfehlen wir eine ärztliche Abklärung.",
    highlights: ["Individuell", "Ruhig", "Gepflegt"],
    video: {
      src: "/media/services/hautpflege-clinic.mp4",
      objectPosition: "57% 48%",
      mobileObjectPosition: "78% 48%",
      label: "Professionelle Hautpflege mit einem Kosmetikgerät",
      caption: "Einblick in apparative Hautpflege",
    },
    benefits: [
      "Persönliche Pflege statt Massenprogramm",
      "Abgestimmt auf Hauttyp und Ziel",
      "Ruhige Atmosphäre im Studio",
      "Gute Basis für regelmäßige Hautpflege",
    ],
    processSteps: [
      {
        title: "Haut & Alltag verstehen",
        text: "Wir sprechen kurz darüber, wie sich Ihre Haut anfühlt, was sie belastet und welches Ergebnis Sie sich wünschen.",
      },
      {
        title: "Pflege auswählen",
        text: "Die Anwendung wird passend zum Hauttyp und zum Terminziel zusammengestellt, ohne starres Standardprogramm.",
      },
      {
        title: "Behandlung in Ruhe",
        text: "Die Pflege wird ruhig durchgeführt, damit die Haut und auch Sie selbst wirklich ankommen können.",
      },
      {
        title: "Empfehlung danach",
        text: "Sie bekommen eine klare, einfache Empfehlung für die Pflege zu Hause oder den nächsten sinnvollen Termin.",
      },
    ],
    preparation: [
      "Wenn möglich ohne stark deckendes Make-up zum Termin kommen.",
      "Aktuelle Produkte, Unverträglichkeiten und Hautreaktionen nennen.",
      "Bei neuen oder auffälligen Hautveränderungen vorab ärztlich abklären lassen.",
    ],
    aftercare: [
      "Die empfohlene Pflege zunächst einfach und mild halten.",
      "Neue aktive Wirkstoffe nicht gleichzeitig auf eigene Faust ergänzen.",
      "Sonnenschutz als festen Teil der Routine einplanen.",
    ],
    suitability: [
      "Sie wünschen eine persönliche Einschätzung Ihrer aktuellen Pflegeroutine.",
      "Ihre Haut fühlt sich trocken, gestresst oder unausgeglichen an.",
      "Sie möchten einen ruhigen Pflege-Termin ohne festgelegte Gerätebehandlung.",
    ],
    askFirst: [
      "Bei akuten Entzündungen, offenen Stellen oder ansteckenden Hautveränderungen.",
      "Bei plötzlich auftretenden oder medizinisch ungeklärten Beschwerden.",
      "Wenn kurz zuvor eine intensive dermatologische oder kosmetische Behandlung stattfand.",
    ],
    relatedGuides: [
      { href: "/ratgeber", title: "Ratgeber zu Haut und Behandlungsvorbereitung" },
      { href: "/behandlungen/aquafacial", title: "AquaFacial als ergänzende Behandlung ansehen" },
    ],
    steps: [
      "Hautgefühl und Wunsch besprechen.",
      "Pflege passend zum Hauttyp durchführen.",
      "Empfehlung für Routine oder nächsten Termin geben.",
    ],
    faq: [
      {
        question: "Welche Hautpflege passt zu mir?",
        answer:
          "Das entscheiden wir nicht pauschal. Beim Termin schauen wir gemeinsam, was Ihre Haut gerade braucht.",
      },
      {
        question: "Kann ich ohne genaue Wunschbehandlung anfragen?",
        answer:
          "Ja. Schreiben Sie einfach, was Sie stört oder was Sie sich wünschen. Wir empfehlen dann die passende Richtung.",
      },
      {
        question: "Was passiert beim ersten Hautpflege-Termin?",
        answer:
          "Wir sprechen über Hautgefühl, aktuelle Pflege und Wünsche, betrachten die Haut und wählen daraus einen nachvollziehbaren Ablauf für den Termin.",
      },
      {
        question: "Muss ich meine Produkte mitbringen?",
        answer:
          "Das ist nicht zwingend nötig. Eine kurze Liste oder Fotos der regelmäßig verwendeten Produkte können aber helfen, die Routine besser zu verstehen.",
      },
      {
        question: "Kann professionelle Hautpflege Hautkrankheiten behandeln?",
        answer:
          "Nein. Kosmetische Pflege ersetzt keine Diagnose oder medizinische Therapie. Bei auffälligen, schmerzhaften oder anhaltenden Beschwerden empfehlen wir eine dermatologische Abklärung.",
      },
      {
        question: "Wie oft sollte ich eine Gesichtsbehandlung buchen?",
        answer:
          "Das hängt von Hautzustand, Ziel und Ihrer Pflege zu Hause ab. Wir empfehlen einen weiteren Termin nur, wenn er für Ihre Situation sinnvoll erscheint.",
      },
    ],
  },
] as const;
```

## Guide article copy

```ts
const articles: GuideArticle[] = [
  {
    slug: "laser-haarentfernung-vorbereitung",
    title: "Vor der Laser-Haarentfernung: richtig vorbereiten und rasieren.",
    shortTitle: "Lasertermin richtig vorbereiten",
    description:
      "Vor der Laser-Haarentfernung rasieren, Sonne meiden und Pflege abstimmen: die wichtigsten Vorbereitungsschritte verständlich erklärt.",
    intro:
      "Eine gute Vorbereitung macht den Lasertermin nicht komplizierter, sondern ruhiger. Wichtig ist vor allem, dass die Haarwurzel erhalten bleibt, die Haut nicht unnötig gereizt ist und das Studio alle relevanten Informationen kennt.",
    category: "Laser-Haarentfernung",
    readingTime: "6 Minuten",
    updated: "16. August 2026",
    updatedIso: "2026-08-16",
    primaryService: {
      href: "/behandlungen/laser-haarentfernung",
      label: "Laser-Haarentfernung in Mannheim",
    },
    sections: [
      {
        id: "rasieren",
        title: "Wann sollte man vor der Laser-Haarentfernung rasieren?",
        paragraphs: [
          "Viele Studios empfehlen eine gründliche Rasur am Tag vor dem Termin. Der passende Zeitpunkt hängt aber auch von Hautempfindlichkeit, Körperregion und dem geplanten Hautcheck ab. Deshalb gilt die konkrete Anweisung des behandelnden Studios.",
          "Die Haut sollte beim Termin glatt genug sein, damit oberhalb der Haut möglichst wenig Haar durch die Energie erwärmt wird. Gleichzeitig sollte die Rasur nicht so knapp erfolgen, dass frische Schnitte oder starke Reizungen entstehen.",
        ],
        bullets: [
          "Einen sauberen, scharfen Rasierer verwenden.",
          "Ohne starken Druck rasieren und kleine Verletzungen vermeiden.",
          "Bei Rasurbrand oder offenen Stellen das Studio vor dem Termin informieren.",
        ],
      },
      {
        id: "nicht-zupfen",
        title: "Warum Wachsen, Epilieren und Zupfen vorher nicht passen",
        paragraphs: [
          "Laser-Haarentfernung zielt auf Pigment im Haar und auf Strukturen im Haarfollikel. Beim Wachsen, Epilieren oder Zupfen wird das Haar mitsamt der Wurzel aus der Haut gezogen. Dann fehlt genau die Struktur, über die die Lichtenergie aufgenommen werden soll.",
          "Rasieren kürzt das Haar nur an der Oberfläche. Die Haarwurzel bleibt erhalten. Zwischen den Sitzungen ist Rasur deshalb in der Regel die passende Methode – sofern das Studio nichts anderes empfiehlt.",
        ],
      },
      {
        id: "sonne",
        title: "Sonne, Solarium und Selbstbräuner",
        paragraphs: [
          "Frische Bräune verändert den Pigmentgehalt der Haut. Das kann die Auswahl der Behandlungsparameter beeinflussen und das Risiko unerwünschter Hautreaktionen erhöhen. Intensive Sonne, Solarium und Selbstbräuner sollten rund um den Termin vermieden werden.",
          "Wie lang die Pause sein sollte, lässt sich nicht für jede Person gleich beantworten. Hauttyp, Region, Jahreszeit und verwendete Technik spielen eine Rolle. Bei sichtbarer Bräune oder Sonnenbrand sollte der Termin vorab neu beurteilt werden.",
        ],
      },
      {
        id: "pflege",
        title: "Was am Behandlungstag auf die Haut gehört – und was nicht",
        paragraphs: [
          "Die Behandlungsfläche sollte sauber und frei von Deo, Öl, Parfum, Selbstbräuner oder stark aktiver Pflege sein. So kann die Haut unverfälscht betrachtet und vorbereitet werden.",
          "Medikamente, bekannte Hautreaktionen und neue Pflegeprodukte sollten nicht verschwiegen werden. Bestimmte Wirkstoffe oder Medikamente können die Lichtempfindlichkeit verändern. Im Zweifel wird erst geklärt und danach behandelt.",
        ],
      },
      {
        id: "checkliste",
        title: "Kurze Checkliste für Ihren Termin",
        paragraphs: [
          "Diese Liste ersetzt nicht die persönlichen Hinweise aus dem Studio. Sie hilft aber dabei, vor dem Termin nichts Offensichtliches zu vergessen.",
        ],
        bullets: [
          "Rasurzeitpunkt mit dem Studio abgestimmt.",
          "In den Wochen davor nicht gewachst, epiliert oder gezupft.",
          "Keine frische intensive Bräune und kein Selbstbräuner.",
          "Haut am Termin sauber, produktfrei und möglichst reizfrei.",
          "Medikamente, Hautveränderungen und besondere Umstände angesprochen.",
        ],
      },
      {
        id: "beratung",
        title: "Warum die persönliche Beratung dazugehört",
        paragraphs: [
          "Die NiSV verlangt bei Anwendungen mit nichtionisierender Strahlung unter anderem Beratung, Aufklärung und einen individuellen Behandlungsplan. Das ist keine Formalität: Haut, Haare und gesundheitliche Faktoren entscheiden darüber, ob eine Behandlung sinnvoll durchgeführt werden kann.",
          "Bei S&O Beauty Salon wird die Vorbereitung deshalb nicht nur per allgemeiner Checkliste abgewickelt. Offene Fragen werden vor dem ersten Termin persönlich geklärt.",
        ],
      },
    ],
    sources: [
      {
        label: "NiSV – Anforderungen an Beratung und individuelle Anwendungsplanung",
        href: "https://www.gesetze-im-internet.de/nisv/BJNR218700018.html",
      },
      {
        label: "Alma Lasers – Soprano ICE Platinum",
        href: "https://almalasers.com/product/soprano-ice-platinum/",
      },
    ],
    related: [
      {
        href: "/ratgeber/laser-haarentfernung-wie-viele-sitzungen",
        label: "Warum mehrere Lasersitzungen notwendig sind",
      },
      {
        href: "/behandlungen/laser-haarentfernung",
        label: "Laser-Haarentfernung bei S&O ansehen",
      },
    ],
  },
  {
    slug: "laser-haarentfernung-wie-viele-sitzungen",
    title: "Wie viele Sitzungen braucht eine Laser-Haarentfernung?",
    shortTitle: "Wie viele Lasersitzungen sind nötig?",
    description:
      "Warum Laser-Haarentfernung mehrere Sitzungen braucht, welche Faktoren die Anzahl beeinflussen und woran ein sinnvoller Behandlungsplan erkennbar ist.",
    intro:
      "Eine pauschale Zahl klingt bequem, ist aber selten ehrlich. Haare wachsen nicht gleichzeitig, Körperregionen reagieren unterschiedlich und auch Haarfarbe, Haardicke, Hauttyp und hormonelle Einflüsse verändern den Verlauf.",
    category: "Laser-Haarentfernung",
    readingTime: "7 Minuten",
    updated: "16. August 2026",
    updatedIso: "2026-08-16",
    primaryService: {
      href: "/behandlungen/laser-haarentfernung",
      label: "Laser-Haarentfernung in Mannheim",
    },
    sections: [
      {
        id: "keine-feste-zahl",
        title: "Warum es keine seriöse feste Sitzungszahl gibt",
        paragraphs: [
          "Laserenergie kann nur Haare erreichen, die genügend Pigment besitzen und sich in einer geeigneten Wachstumsphase befinden. Da nicht alle Haare einer Region gleichzeitig aktiv wachsen, wird bei einem Termin immer nur ein Teil der Haarfollikel passend erreicht.",
          "Deshalb entsteht eine sichtbare Reduktion Schritt für Schritt. Wer schon vor dem Haut- und Haarcheck ein identisches Ergebnis nach einer festen Zahl verspricht, ignoriert die wichtigsten individuellen Unterschiede.",
        ],
      },
      {
        id: "haarzyklus",
        title: "Der Haarzyklus bestimmt den Abstand",
        paragraphs: [
          "Haare wechseln zwischen Wachstums-, Übergangs- und Ruhephasen. Für die Lichtaufnahme ist vor allem die aktive Wachstumsphase relevant. Zwischen zwei Terminen braucht es daher ausreichend Zeit, damit weitere Haare in diese Phase wechseln.",
          "Der sinnvolle Abstand ist nicht an jeder Körperregion gleich. Gesicht, Achseln, Beine und Rücken haben unterschiedliche Wachstumsrhythmen. Ein guter Plan wird im Verlauf angepasst statt starr wiederholt.",
        ],
      },
      {
        id: "faktoren",
        title: "Diese Faktoren beeinflussen die Anzahl der Termine",
        paragraphs: [
          "Mehrere Merkmale wirken gleichzeitig. Manche lassen sich beim ersten Termin gut einschätzen, andere zeigen sich erst im Verlauf.",
        ],
        bullets: [
          "Haarfarbe und Pigmentgehalt.",
          "Haardicke und Haardichte.",
          "Hauttyp und aktuelle Bräune.",
          "Körperregion und dortiger Haarzyklus.",
          "Hormonelle Einflüsse und bestimmte Medikamente.",
          "Regelmäßigkeit der Termine und Verhalten zwischen den Sitzungen.",
        ],
      },
      {
        id: "verlauf",
        title: "Woran lässt sich ein sinnvoller Verlauf erkennen?",
        paragraphs: [
          "Nach dem Termin fallen behandelte Haare nicht sofort aus. Ein Teil löst sich erst in den folgenden Tagen oder Wochen. Gleichzeitig wachsen Haare nach, die beim vorherigen Termin noch nicht in der geeigneten Phase waren.",
          "Beurteilt wird deshalb nicht nur, ob die Haut kurzfristig glatt wirkt. Aussagekräftiger sind Veränderungen bei Dichte, Wachstumsgeschwindigkeit und Haardicke über mehrere Termine hinweg. Fotos oder eine knappe Dokumentation können helfen, den Verlauf nüchtern zu betrachten.",
        ],
      },
      {
        id: "auffrischung",
        title: "Sind später Auffrischungen möglich?",
        paragraphs: [
          "Auch nach einer abgeschlossenen Serie können einzelne Haare wieder sichtbar werden. Hormonelle Veränderungen, Alter, Medikamente oder lange Ruhephasen einzelner Follikel können dabei eine Rolle spielen.",
          "Ob eine Auffrischung sinnvoll ist, wird anhand des tatsächlichen Haarwuchses entschieden. Regelmäßige Termine ohne sichtbaren Bedarf sind kein Qualitätsmerkmal.",
        ],
      },
      {
        id: "beratung",
        title: "Was Sie beim Beratungsgespräch fragen können",
        paragraphs: [
          "Eine verständliche Beratung sollte erklären, welches Gerät verwendet wird, warum die Behandlung zu Haut und Haaren passt, welche Reaktionen möglich sind und wie der Verlauf kontrolliert wird.",
        ],
        bullets: [
          "Welche Haar- und Hautmerkmale wurden bei mir berücksichtigt?",
          "Warum ist dieser Abstand für meine Körperregion sinnvoll?",
          "Woran erkennen wir gemeinsam, ob der Verlauf passt?",
          "Welche Vorbereitung und Nachpflege gilt konkret für mich?",
        ],
      },
    ],
    sources: [
      {
        label: "Alma Lasers – Technologie des Soprano ICE Platinum",
        href: "https://almalasers.com/product/soprano-ice-platinum/",
      },
      {
        label: "NiSV – Beratung, Risiken und individueller Behandlungsplan",
        href: "https://www.gesetze-im-internet.de/nisv/BJNR218700018.html",
      },
    ],
    related: [
      {
        href: "/ratgeber/laser-haarentfernung-vorbereitung",
        label: "So bereiten Sie den Lasertermin vor",
      },
      {
        href: "/behandlungen/laser-haarentfernung",
        label: "Laser-Haarentfernung bei S&O ansehen",
      },
    ],
  },
  {
    slug: "microneedling-nachsorge",
    title: "Microneedling danach: Was Ihre Haut jetzt braucht.",
    shortTitle: "Microneedling-Nachsorge",
    description:
      "Microneedling-Nachsorge verständlich erklärt: Haut beruhigen, Make-up und Sport pausieren, Sonne vermeiden und Reaktionen richtig einordnen.",
    intro:
      "Nach dem Microneedling ist die Haut bewusst gereizt worden und braucht zunächst wenig statt viel: saubere Hände, milde Pflege, Schutz vor Sonne und eine Pause von Wärme, Reibung und aktiven Wirkstoffen.",
    category: "Microneedling",
    readingTime: "7 Minuten",
    updated: "16. August 2026",
    updatedIso: "2026-08-16",
    primaryService: {
      href: "/behandlungen/microneedling",
      label: "Microneedling in Mannheim",
    },
    sections: [
      {
        id: "erste-stunden",
        title: "Die ersten Stunden nach dem Microneedling",
        paragraphs: [
          "Rötung, Wärmegefühl, leichte Schwellung oder ein sonnenbrandähnliches Empfinden können nach der Anwendung auftreten. Wie stark und wie lange, hängt unter anderem von Hautzustand, behandelter Region und Intensität ab.",
          "Die Haut sollte möglichst wenig berührt werden. Verwenden Sie nur die Produkte, die für die unmittelbare Nachpflege empfohlen wurden. Mehrere neue Seren gleichzeitig helfen nicht dabei, eine Reaktion besser einzuordnen.",
        ],
      },
      {
        id: "pflege",
        title: "Milde Pflege statt Wirkstoffprogramm",
        paragraphs: [
          "In den ersten Tagen stehen Beruhigung und Schutz im Vordergrund. Säuren, Retinoide, mechanische Peelings, alkoholreiche Produkte oder stark parfümierte Pflege können die Haut zusätzlich reizen.",
          "Wann die gewohnte Routine wieder aufgenommen werden kann, richtet sich nach der sichtbaren Hautreaktion und der durchgeführten Anwendung. Die individuellen Hinweise aus dem Studio haben Vorrang vor allgemeinen Internetlisten.",
        ],
      },
      {
        id: "make-up",
        title: "Wann darf Make-up wieder auf die Haut?",
        paragraphs: [
          "Direkt nach Microneedling sollte auf Make-up verzichtet werden. Die American Academy of Dermatology empfiehlt mindestens 24 Stunden Pause. Bei stärkerer Rötung oder intensiverer Anwendung kann eine längere Pause sinnvoll sein.",
          "Wenn Make-up wieder verwendet wird, sollten Pinsel, Schwämmchen und Hände sauber sein. Stark deckende oder reizende Produkte sind für den ersten Tag zurück in die Routine keine gute Wahl.",
        ],
      },
      {
        id: "sport",
        title: "Sport, Sauna und Schwimmbad",
        paragraphs: [
          "Intensiver Sport erzeugt Wärme, Schweiß und Reibung. Sauna und heiße Bäder verstärken die Wärmebelastung; Schwimmbadwasser bringt zusätzliche Stoffe und Keime an die Haut. Diese Belastungen sollten zunächst pausieren.",
          "Wie lang die Pause dauert, hängt vom Hautbild ab. Wenn die Haut noch deutlich gerötet, warm oder empfindlich ist, braucht sie weiter Ruhe.",
        ],
      },
      {
        id: "sonne",
        title: "Sonne und Sonnenschutz",
        paragraphs: [
          "Frisch behandelte Haut reagiert empfindlicher auf UV-Strahlung. Direkte Sonne und Solarium sollten vermieden werden. Ein geeigneter, konsequent verwendeter Sonnenschutz gehört zur Nachpflege.",
          "Ein Termin unmittelbar vor intensivem Sonnenurlaub ist deshalb ungünstig. Wer viel draußen arbeitet oder Sport treibt, sollte das bei der Terminplanung offen ansprechen.",
        ],
      },
      {
        id: "warnzeichen",
        title: "Wann sollte eine Reaktion abgeklärt werden?",
        paragraphs: [
          "Normale Rötung sollte sich im Verlauf beruhigen. Zunehmende Schmerzen, starke Schwellung, Bläschen, Eiter, Fieber, anhaltende nässende Stellen oder eine Reaktion, die statt besser deutlich schlechter wird, gehören nicht einfach ausgesessen.",
          "Kontaktieren Sie in diesem Fall das Studio und holen Sie bei stärkeren oder anhaltenden Beschwerden medizinischen Rat ein. Dieser Ratgeber ersetzt keine Diagnose.",
        ],
      },
      {
        id: "checkliste",
        title: "Nachsorge auf einen Blick",
        paragraphs: [
          "Die kurze Version für die ersten Tage lautet:",
        ],
        bullets: [
          "Haut sauber halten und nicht unnötig berühren.",
          "Nur milde, empfohlene Pflege verwenden.",
          "Make-up zunächst pausieren.",
          "Sport, Sauna, Schwimmbad und starke Wärme pausieren.",
          "Direkte Sonne vermeiden und Sonnenschutz nutzen.",
          "Ungewöhnliche oder zunehmende Reaktionen abklären lassen.",
        ],
      },
    ],
    sources: [
      {
        label: "American Academy of Dermatology – Microneedling: recovery and safety",
        href: "https://www.aad.org/public/cosmetic/scars-stretch-marks/microneedling-fade-scars",
      },
      {
        label: "Chelsea and Westminster Hospital – Microneedling information",
        href: "https://www.chelwest.nhs.uk/your-visit/patient-leaflets/microneedling",
      },
    ],
    related: [
      {
        href: "/behandlungen/microneedling",
        label: "Microneedling bei S&O ansehen",
      },
      {
        href: "/behandlungen/professionelle-hautpflege",
        label: "Professionelle Hautpflege entdecken",
      },
    ],
  },
  {
    slug: "laser-haarentfernung-kosten-mannheim",
    title: "Laser-Haarentfernung Kosten in Mannheim: Wovon hängt der Preis ab?",
    shortTitle: "Kosten der Laser-Haarentfernung in Mannheim",
    description:
      "Was Laser-Haarentfernung in Mannheim kostet, welche Faktoren den Preis bestimmen und woran Sie ein nachvollziehbares Angebot erkennen.",
    intro:
      "Wer nach den Kosten einer Laser-Haarentfernung sucht, möchte meist eine klare Zahl. Seriös lässt sie sich aber erst nennen, wenn Körperregion, Haarwuchs, Hauttyp und der geplante Behandlungsumfang bekannt sind. Dieser Ratgeber erklärt, welche Punkte ein Angebot nachvollziehbar machen, ohne mit Lockpreisen zu arbeiten.",
    category: "Laser-Haarentfernung",
    readingTime: "7 Minuten",
    updated: "17. August 2026",
    updatedIso: "2026-08-17",
    primaryService: {
      href: "/behandlungen/laser-haarentfernung",
      label: "Laser-Haarentfernung in Mannheim",
    },
    sections: [
      {
        id: "preisfaktoren",
        title: "Welche Faktoren bestimmen den Preis?",
        paragraphs: [
          "Der wichtigste Faktor ist die Größe und Lage der Körperregion. Eine kleine, klar begrenzte Zone benötigt weniger Zeit als Beine, Rücken oder eine Kombination mehrerer Bereiche. Auch die Haardichte kann beeinflussen, wie sorgfältig eine Fläche bearbeitet werden muss.",
          "Hinzu kommen Hauttyp, Haarfarbe und Haarstärke. Sie entscheiden nicht nur über die Eignung, sondern auch darüber, welche Einstellungen und welcher Behandlungsplan sinnvoll sind. Ein Preis ohne vorherige Einschätzung sagt deshalb wenig über den tatsächlichen Gesamtaufwand aus.",
        ],
        bullets: [
          "Größe und Anzahl der gewünschten Zonen.",
          "Haardichte, Haarstärke und Pigmentierung.",
          "Hauttyp und aktueller Hautzustand.",
          "Zeitaufwand pro Termin.",
          "Voraussichtlicher Behandlungsrhythmus.",
        ],
      },
      {
        id: "einzeltermin-gesamtplan",
        title: "Einzeltermin und Gesamtplan sind nicht dasselbe",
        paragraphs: [
          "Der Preis eines einzelnen Termins ist leicht zu vergleichen, beantwortet aber nicht automatisch die wichtigere Frage: Welcher Gesamtplan ist für die gewünschte Region realistisch? Haare befinden sich in unterschiedlichen Wachstumsphasen. Deshalb wird Laser-Haarentfernung normalerweise als Serie geplant und im Verlauf neu beurteilt.",
          "Ein günstiger Einzeltermin kann am Ende wenig aussagekräftig sein, wenn Beratung, Dokumentation oder eine sinnvolle Verlaufskontrolle fehlen. Umgekehrt sollte auch niemand vor dem Haut- und Haarcheck eine feste Anzahl an Sitzungen garantieren.",
        ],
      },
      {
        id: "angebot",
        title: "Was sollte ein gutes Angebot erklären?",
        paragraphs: [
          "Ein verständliches Angebot benennt die behandelten Zonen eindeutig. Es erklärt außerdem, ob Beratung und Hautcheck dazugehören, welche Technik eingesetzt wird und wie mit Veränderungen im Verlauf umgegangen wird.",
          "Fragen Sie nach, wenn eine Bezeichnung unklar ist. Begriffe wie Ganzkörper, Intimbereich oder Gesicht können je nach Studio unterschiedliche Flächen umfassen. Eine kurze persönliche Abstimmung verhindert, dass zwei scheinbar gleiche Angebote tatsächlich etwas anderes enthalten.",
        ],
        bullets: [
          "Welche genaue Fläche ist enthalten?",
          "Ist der Haut- und Haarcheck Teil des Termins?",
          "Welches Gerät wird verwendet?",
          "Wie werden Abstände und Fortschritt festgelegt?",
          "Was passiert, wenn die Haut am Termin nicht behandelt werden sollte?",
        ],
      },
      {
        id: "technik-fachkunde",
        title: "Warum Technik und Fachkunde zum Preisvergleich gehören",
        paragraphs: [
          "Gerätename und Werbeversprechen allein machen noch keine gute Behandlung. Entscheidend ist, dass die Anwendung fachkundig, hygienisch und passend zu Haut und Haar durchgeführt wird. Bei S&O kommt der Soprano ICE Platinum zum Einsatz; vor dem Start werden Behandlungsbereich und mögliche Ausschlussgründe besprochen.",
          "Die NiSV regelt unter anderem Beratung, Aufklärung, Dokumentation und individuelle Anwendungsplanung bei entsprechenden Anwendungen. Diese Arbeit ist Teil einer verantwortungsvollen Behandlung, auch wenn sie auf einer Preistafel nicht sichtbar wäre.",
        ],
      },
      {
        id: "mannheim-vergleichen",
        title: "Laser-Studios in Mannheim sinnvoll vergleichen",
        paragraphs: [
          "Vergleichen Sie nicht nur die erste Zahl im Suchergebnis. Achten Sie auf eine vollständige Adresse, nachvollziehbare Qualifikation, echte Kontaktmöglichkeiten und darauf, ob Fragen zu Haut, Haaren und Medikamenten ernst genommen werden.",
          "Ein persönliches Angebot ist besonders sinnvoll, wenn mehrere Zonen kombiniert werden sollen. Senden Sie dafür die gewünschten Bereiche per WhatsApp. Nach einer kurzen Abstimmung kann das Studio den Umfang deutlich genauer einordnen als über eine allgemeine Liste.",
        ],
      },
      {
        id: "fazit",
        title: "Kurz gesagt: Ein guter Preis ist verständlich, nicht nur niedrig",
        paragraphs: [
          "Der Preis hängt vor allem von Fläche, Zeitaufwand und Ihrem individuellen Behandlungsplan ab. Ein seriöser Vergleich berücksichtigt außerdem Beratung, Technik, Fachkunde und Verlaufskontrolle.",
          "Wenn Sie wissen möchten, was Ihre gewünschten Zonen bei S&O kosten, schreiben Sie uns kurz über WhatsApp. Sie erhalten eine persönliche Einordnung, ohne dass wir Ihnen vorher einen Standardplan versprechen.",
        ],
      },
    ],
    sources: [
      {
        label: "NiSV – Beratung, Dokumentation und individuelle Anwendungsplanung",
        href: "https://www.gesetze-im-internet.de/nisv/BJNR218700018.html",
      },
      {
        label: "Alma Lasers – Soprano ICE Platinum",
        href: "https://almalasers.com/product/soprano-ice-platinum/",
      },
    ],
    related: [
      {
        href: "/ratgeber/laser-haarentfernung-wie-viele-sitzungen",
        label: "Wie viele Lasersitzungen sind nötig?",
      },
      {
        href: "/ratgeber/laser-haarentfernung-vorbereitung",
        label: "So bereiten Sie den Lasertermin vor",
      },
    ],
  },
  {
    slug: "aquafacial-oder-microneedling",
    title: "AquaFacial oder Microneedling: Welche Behandlung passt zu meiner Haut?",
    shortTitle: "AquaFacial oder Microneedling?",
    description:
      "AquaFacial und Microneedling im Vergleich: Ziele, Ablauf, Hautgefühl danach und die wichtigsten Fragen für Ihre persönliche Entscheidung.",
    intro:
      "Beide Behandlungen gehören zur professionellen Hautpflege, verfolgen aber unterschiedliche Ziele. AquaFacial konzentriert sich auf Reinigung, Pflege und Feuchtigkeit. Kosmetisches Microneedling setzt gezielte feine Reize und verlangt mehr Aufmerksamkeit bei Hautcheck und Nachpflege. Die bessere Wahl hängt deshalb nicht vom Trend ab, sondern von Ihrer Haut und Ihrem Alltag.",
    category: "Hautpflege",
    readingTime: "8 Minuten",
    updated: "17. August 2026",
    updatedIso: "2026-08-17",
    primaryService: {
      href: "/behandlungen/aquafacial",
      label: "AquaFacial in Mannheim",
    },
    sections: [
      {
        id: "unterschied",
        title: "Der wichtigste Unterschied in einem Satz",
        paragraphs: [
          "AquaFacial ist vor allem eine reinigende und pflegende Behandlung. Sie passt häufig zu Menschen, die sich ein frisches, gut durchfeuchtetes Hautgefühl wünschen und den Termin unkompliziert in den Alltag einbauen möchten.",
          "Beim kosmetischen Microneedling wird die Haut kontrolliert mit sehr feinen Nadeln behandelt. Das Ziel ist eher, das Erscheinungsbild von Hautstruktur und Unebenheiten zu unterstützen. Weil die Haut bewusst gereizt wird, sind Vorbereitung, Hygiene und Nachpflege besonders wichtig.",
        ],
      },
      {
        id: "aquafacial",
        title: "Wann spricht mehr für AquaFacial?",
        paragraphs: [
          "AquaFacial kann passen, wenn die Haut müde, trocken oder pflegebedürftig wirkt und Reinigung sowie Feuchtigkeit im Vordergrund stehen. Der Ablauf wird an Hautzustand und Empfindlichkeit angepasst.",
          "Auch vor einem Anlass kann eine sanfte Pflegebehandlung interessant sein. Ein Termin unmittelbar vor einem wichtigen Tag sollte trotzdem nicht zum ersten Experiment mit einer unbekannten Hautreaktion werden. Planen Sie bei empfindlicher Haut etwas Abstand ein.",
        ],
        bullets: [
          "Sie wünschen Reinigung und Feuchtigkeit in einem Termin.",
          "Die Haut soll frisch und gepflegt wirken.",
          "Eine kurze Erholungszeit ist Ihnen wichtig.",
          "Sie möchten mit einer eher sanften Pflegebehandlung beginnen.",
        ],
      },
      {
        id: "microneedling",
        title: "Wann spricht mehr für Microneedling?",
        paragraphs: [
          "Microneedling wird eher gewählt, wenn Hautstruktur, Porenbild oder das Erscheinungsbild bestimmter Unebenheiten im Mittelpunkt stehen. Ob die Behandlung geeignet ist, muss vorab anhand des aktuellen Hautzustands beurteilt werden.",
          "Nach der Anwendung können Rötung, Wärmegefühl oder leichte Schwellung auftreten. Wie deutlich die Haut reagiert und welche Pause sinnvoll ist, hängt auch von Gerät, Nadeltiefe und Intensität ab. Wer direkt danach Sonne, Sport, Sauna oder einen wichtigen Termin plant, sollte den Zeitpunkt neu überlegen.",
        ],
        bullets: [
          "Sie möchten gezielt am Erscheinungsbild der Hautstruktur arbeiten.",
          "Sie können konsequente Nachpflege einplanen.",
          "Ein Hautcheck hat keine Gründe zum Verschieben ergeben.",
          "Sie akzeptieren, dass die Haut vorübergehend sichtbar reagieren kann.",
        ],
      },
      {
        id: "nicht-behandeln",
        title: "Wann sollte nicht einfach behandelt werden?",
        paragraphs: [
          "Offene Stellen, aktive Infektionen, frischer Sonnenbrand oder stark entzündete Haut gehören zuerst abgeklärt. Bei Microneedling sind außerdem bestimmte Hauterkrankungen, Medikamente und eine Neigung zu auffälliger Narbenbildung relevante Themen für das Vorgespräch.",
          "Auch bei AquaFacial gilt: Sanft bedeutet nicht automatisch passend für jede Haut in jedem Zustand. Bei einem akuten Rosazea-Schub, starker Reizung oder kurz nach einer intensiven Behandlung kann Verschieben die bessere Entscheidung sein.",
        ],
      },
      {
        id: "kombination",
        title: "Kann man beide Behandlungen kombinieren?",
        paragraphs: [
          "Grundsätzlich können unterschiedliche Behandlungen Teil eines längerfristigen Pflegeplans sein. Sie sollten aber nicht spontan dicht aufeinandergelegt werden. Entscheidend sind Hautreaktion, verwendete Produkte, Intensität und ausreichende Erholung.",
          "Eine gute Planung beantwortet zuerst, welches Ziel gerade Priorität hat. Danach lässt sich entscheiden, ob eine einzelne Behandlung genügt oder ob verschiedene Termine mit sinnvollem Abstand besser passen.",
        ],
      },
      {
        id: "entscheidung",
        title: "Vier Fragen für die Entscheidung",
        paragraphs: [
          "Sie müssen die Behandlung nicht allein anhand von Bildern oder Social-Media-Trends auswählen. Diese Fragen geben dem Beratungsgespräch eine klare Richtung.",
        ],
        bullets: [
          "Geht es mir eher um Reinigung und Feuchtigkeit oder um Hautstruktur?",
          "Wie empfindlich oder gereizt ist meine Haut aktuell?",
          "Kann ich nach dem Termin Sonne, Sport und aktive Pflege pausieren?",
          "Gibt es Medikamente, Hauterkrankungen oder kürzliche Behandlungen, die ich ansprechen muss?",
        ],
      },
      {
        id: "beratung",
        title: "Persönlich entscheiden statt Behandlung raten",
        paragraphs: [
          "Viele öffentlich zugängliche Fachquellen beschreiben dermatologisches Microneedling, das in Tiefe und Ziel von einer kosmetischen Anwendung abweichen kann. Wir nutzen diese Quellen deshalb nur als Hintergrund zu Reaktionen und Vorsicht. Für den Termin gelten die Hinweise zur tatsächlich eingesetzten Methode und zum individuellen Hautzustand.",
          "Bei S&O wird zuerst auf Hautgefühl, Ziel und Alltag geschaut. Wenn AquaFacial besser passt, planen wir Reinigung und Pflege. Wenn Microneedling sinnvoll erscheint, gehören Hautcheck und Nachpflege zur Entscheidung.",
          "Schreiben Sie uns gern über WhatsApp, was Sie an Ihrer Haut beschäftigt und wann der Termin in Ihren Alltag passen soll. Das ersetzt keinen Hautcheck, macht die erste Empfehlung aber deutlich konkreter.",
        ],
      },
    ],
    sources: [
      {
        label: "American Academy of Dermatology – dermatologischer Hintergrund zu Microneedling",
        href: "https://www.aad.org/public/cosmetic/scars-stretch-marks/microneedling-fade-scars",
      },
      {
        label: "Chelsea and Westminster Hospital – klinischer Hintergrund zu Microneedling",
        href: "https://www.chelwest.nhs.uk/your-visit/patient-leaflets/microneedling",
      },
    ],
    related: [
      {
        href: "/behandlungen/aquafacial",
        label: "AquaFacial bei S&O ansehen",
      },
      {
        href: "/behandlungen/microneedling",
        label: "Microneedling bei S&O ansehen",
      },
      {
        href: "/ratgeber/microneedling-nachsorge",
        label: "Nachsorge nach Microneedling",
      },
    ],
  },
];
```
