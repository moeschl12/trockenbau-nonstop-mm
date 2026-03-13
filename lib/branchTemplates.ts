// ============================================================
// BRANCHEN CONTENT ENGINE
// Automatische Inhalte für verschiedene Handwerksbranchen
// ============================================================

export type Branch =
  | "maler"
  | "elektriker"
  | "sanitaer"
  | "dachdecker"
  | "schreiner"
  | "fliesenleger"
  | "trockenbau"
  | "bauunternehmen";

export interface BranchTemplate {
  industry: string;
  icon: string;
  taglines: string[];
  descriptions: string[];
  heroImages: string[];
  services: {
    name: string;
    shortDesc: string;
    description: string;
    icon: string;
  }[];
  projects: {
    title: string;
    description: string;
    category: string;
    image: string;
  }[];
  reviews: {
    name: string;
    text: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  stats: {
    value: string;
    label: string;
  }[];
  benefits: {
    title: string;
    description: string;
    icon: string;
  }[];
  seoKeywords: string[];
  schema: string;
  priceRange: string;
}

export const branchTemplates: Record<Branch, BranchTemplate> = {
  // ── MALER ────────────────────────────────────────────────────
  maler: {
    industry: "Malerbetrieb",
    icon: "Paintbrush",
    taglines: [
      "Ihr Maler in {city}",
      "Farbe & Qualität in {city}",
      "Malerarbeiten in {city}",
      "Ihr Profi für Farbe in {city}",
    ],
    descriptions: [
      "Professionelle Malerarbeiten in {city} und Umgebung. Innen- und Außenanstriche, Tapezierarbeiten und Fassadensanierung – alles aus einer Hand.",
      "Ihr zuverlässiger Malerbetrieb in {city}. Von der Wandgestaltung bis zur Fassadenrenovierung – wir bringen Farbe in Ihr Zuhause.",
      "Malermeisterbetrieb in {city}. Hochwertige Anstriche, kreative Wandgestaltung und professionelle Tapezierarbeiten seit Jahren.",
    ],
    heroImages: [
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1200&q=85",
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1200&q=85",
    ],
    services: [
      { name: "Innenrenovierung", shortDesc: "Wände, Decken, Tapeten – alles aus einer Hand.", description: "Komplette Innenrenovierung Ihrer Räume – sauber, schnell und professionell.", icon: "Paintbrush" },
      { name: "Fassadenarbeiten", shortDesc: "Außenanstrich und Fassadensanierung.", description: "Professioneller Außenanstrich für ein gepflegtes Erscheinungsbild.", icon: "Building2" },
      { name: "Tapezierarbeiten", shortDesc: "Alle Arten von Tapeten fachgerecht verlegt.", description: "Von klassisch bis modern – wir tapezieren nach Ihren Wünschen.", icon: "Grid3x3" },
      { name: "Lackierarbeiten", shortDesc: "Türen, Fenster, Heizkörper – streichen & lackieren.", description: "Fachgerechtes Lackieren aller Oberflächen im Innen- und Außenbereich.", icon: "Brush" },
      { name: "Schimmelbeseitigung", shortDesc: "Fachgerechte Schimmelentfernung und Prävention.", description: "Nachhaltige Schimmelbeseitigung mit professionellen Produkten.", icon: "ShieldCheck" },
      { name: "Bodenbeläge", shortDesc: "Laminat, Vinyl und Teppich fachgerecht verlegt.", description: "Wir verlegen alle gängigen Bodenbeläge schnell und sauber.", icon: "Layers" },
    ],
    projects: [
      { title: "Altbausanierung {city}", description: "Komplette Renovierung eines Altbaus – Wände, Decken und Fassade.", image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&q=85", category: "Innenrenovierung" },
      { title: "Fassade Mehrfamilienhaus", description: "Fassadenerneuerung inkl. Dämmung und neuem Anstrich.", image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=85", category: "Fassade" },
      { title: "Bürorenovierung", description: "Komplette Renovierung eines Bürokomplexes in {city}.", image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&q=85", category: "Gewerbe" },
    ],
    reviews: [
      { name: "Klaus M.", text: "Super Arbeit! Pünktlich, sauber und das Ergebnis ist top. Sehr empfehlenswert." },
      { name: "Sandra K.", text: "Wir sind sehr zufrieden. Die Wohnung sieht aus wie neu. Gerne wieder!" },
      { name: "Thomas W.", text: "Professionelle Arbeit zu fairen Preisen. Klare Empfehlung!" },
    ],
    faqs: [
      { question: "Wie lange dauert eine Zimmerrenovierung?", answer: "Ein Zimmer dauert in der Regel 1–2 Tage. Eine komplette Wohnung ca. 3–5 Tage, je nach Größe." },
      { question: "Streichen Sie auch außen?", answer: "Ja, wir übernehmen Fassadenarbeiten aller Art – vom einfachen Anstrich bis zur kompletten Fassadensanierung." },
      { question: "Geben Sie Garantie auf Ihre Arbeit?", answer: "Ja, wir gewähren 5 Jahre Garantie auf alle unsere Malerarbeiten." },
      { question: "Kann ich die Farbe selbst aussuchen?", answer: "Natürlich! Wir beraten Sie gerne bei der Farbauswahl und können Muster vorab zeigen." },
    ],
    stats: [
      { value: "500+", label: "Projekte" },
      { value: "15+", label: "Jahre Erfahrung" },
      { value: "98%", label: "Zufriedene Kunden" },
      { value: "24h", label: "Antwortzeit" },
    ],
    benefits: [
      { title: "Meisterbetrieb", description: "Zertifizierter Malermeister mit jahrelanger Erfahrung.", icon: "Award" },
      { title: "Festpreisgarantie", description: "Keine versteckten Kosten – Preis ist Preis.", icon: "ShieldCheck" },
      { title: "Termintreu", description: "Wir halten unsere Deadlines – immer.", icon: "Clock" },
      { title: "Lokal in {city}", description: "Schnell vor Ort, persönlicher Service.", icon: "MapPin" },
    ],
    seoKeywords: ["Maler {city}", "Malerarbeiten {city}", "Malerbetrieb {city}", "Fassade {city}", "Tapezieren {city}", "Renovierung {city}"],
    schema: "HomeAndConstructionBusiness",
    priceRange: "€€",
  },

  // ── ELEKTRIKER ───────────────────────────────────────────────
  elektriker: {
    industry: "Elektrotechnik",
    icon: "Zap",
    taglines: [
      "Ihr Elektriker in {city}",
      "Elektrotechnik in {city}",
      "Strom & Sicherheit in {city}",
      "Ihr Profi für Elektro in {city}",
    ],
    descriptions: [
      "Professionelle Elektroinstallationen in {city} und Umgebung. Von der einfachen Reparatur bis zur kompletten Hausinstallation – zuverlässig und sicher.",
      "Ihr Elektriker in {city}. Neuinstallationen, Reparaturen, Smart Home und Sicherheitstechnik – alles aus einer Hand.",
      "Elektrotechnik vom Fachmann in {city}. Schnell, sicher und zu fairen Preisen.",
    ],
    heroImages: [
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&q=85",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=85",
    ],
    services: [
      { name: "Elektroinstallation", shortDesc: "Neu- und Umbauten fachgerecht installiert.", description: "Komplette Elektroinstallation für Neu- und Umbauten.", icon: "Zap" },
      { name: "Smart Home", shortDesc: "Intelligente Haustechnik für Ihr Zuhause.", description: "Moderne Smart Home Lösungen – Licht, Heizung, Sicherheit.", icon: "Home" },
      { name: "Sicherheitstechnik", shortDesc: "Alarm- und Überwachungssysteme.", description: "Professionelle Sicherheitssysteme für Haus und Gewerbe.", icon: "ShieldCheck" },
      { name: "Photovoltaik", shortDesc: "Solaranlagen professionell installiert.", description: "Planung und Installation von Photovoltaikanlagen.", icon: "Sun" },
      { name: "E-Mobilität", shortDesc: "Wallbox Installation für Ihr E-Auto.", description: "Fachgerechte Installation von Ladestationen.", icon: "Car" },
      { name: "Notdienst", shortDesc: "24/7 erreichbar bei Stromausfall.", description: "Schnelle Hilfe bei Stromausfall und Kurzschluss.", icon: "AlertTriangle" },
    ],
    projects: [
      { title: "Neubau {city}", description: "Komplette Elektroinstallation eines Einfamilienhauses.", image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=85", category: "Neubau" },
      { title: "Smart Home Projekt", description: "Vollständige Smart Home Installation inkl. Beleuchtung und Sicherheit.", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85", category: "Smart Home" },
      { title: "Gewerbeobjekt {city}", description: "Elektroinstallation eines Bürokomplexes.", image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=85", category: "Gewerbe" },
    ],
    reviews: [
      { name: "Michael B.", text: "Schnelle und zuverlässige Arbeit. Notdienst war innerhalb von 30 Minuten da. Top!" },
      { name: "Anna S.", text: "Smart Home Installation perfekt umgesetzt. Sehr freundlich und kompetent." },
      { name: "Peter K.", text: "Faire Preise, pünktlich und saubere Arbeit. Gerne wieder!" },
    ],
    faqs: [
      { question: "Haben Sie einen Notdienst?", answer: "Ja, wir sind 24/7 erreichbar. Rufen Sie uns an unter {phone}." },
      { question: "Wie lange dauert eine Elektroinstallation?", answer: "Eine Standardinstallation dauert 1–3 Tage. Größere Projekte besprechen wir individuell." },
      { question: "Installieren Sie auch Photovoltaikanlagen?", answer: "Ja, wir planen und installieren Solaranlagen inklusive Einspeisemanagement." },
      { question: "Können Sie auch Smart Home nachrüsten?", answer: "Ja, wir rüsten bestehende Häuser mit Smart Home Technik nach – ohne große Umbauarbeiten." },
    ],
    stats: [
      { value: "800+", label: "Projekte" },
      { value: "12+", label: "Jahre Erfahrung" },
      { value: "24/7", label: "Notdienst" },
      { value: "99%", label: "Zufriedene Kunden" },
    ],
    benefits: [
      { title: "Meisterbetrieb", description: "Zertifizierter Elektromeister.", icon: "Award" },
      { title: "24/7 Notdienst", description: "Immer erreichbar bei Stromausfall.", icon: "AlertTriangle" },
      { title: "Festpreis", description: "Transparente Preise ohne Überraschungen.", icon: "ShieldCheck" },
      { title: "Lokal in {city}", description: "Schnell vor Ort, persönlicher Service.", icon: "MapPin" },
    ],
    seoKeywords: ["Elektriker {city}", "Elektroinstallation {city}", "Smart Home {city}", "Photovoltaik {city}", "Notdienst Elektriker {city}"],
    schema: "Electrician",
    priceRange: "€€",
  },

  // ── SANITÄR ──────────────────────────────────────────────────
  sanitaer: {
    industry: "Sanitär & Heizung",
    icon: "Droplets",
    taglines: [
      "Ihr Sanitärbetrieb in {city}",
      "Sanitär & Heizung in {city}",
      "Klempner in {city}",
      "Ihr Profi für Bad & Heizung in {city}",
    ],
    descriptions: [
      "Sanitär und Heizungstechnik in {city}. Badsanierung, Heizungsinstallation und Rohrreparaturen – schnell und zuverlässig.",
      "Ihr Klempner in {city}. Von der Rohrinstallation bis zur Badsanierung – kompetent und fair.",
      "Sanitär vom Fachmann in {city}. Notdienst, Badsanierung und Heizungsservice aus einer Hand.",
    ],
    heroImages: [
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1200&q=85",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=85",
    ],
    services: [
      { name: "Badsanierung", shortDesc: "Komplette Badsanierung nach Ihren Wünschen.", description: "Planung und Umsetzung Ihres Traumbades.", icon: "Bath" },
      { name: "Heizungsinstallation", shortDesc: "Moderne Heizsysteme effizient installiert.", description: "Installation und Wartung aller Heizsysteme.", icon: "Flame" },
      { name: "Rohrreparatur", shortDesc: "Rohrbruch? Wir sind schnell vor Ort.", description: "Schnelle Reparatur bei Rohrbruch und Verstopfung.", icon: "Wrench" },
      { name: "Notdienst", shortDesc: "24/7 bei Rohrbruch und Wasserausfall.", description: "Sofortige Hilfe bei Wassernotfällen.", icon: "AlertTriangle" },
      { name: "Wärmepumpe", shortDesc: "Zukunftssichere Wärmepumpen Installtion.", description: "Planung und Installation von Wärmepumpen.", icon: "Wind" },
      { name: "Wartung & Service", shortDesc: "Regelmäßige Wartung Ihrer Heizungsanlage.", description: "Professionelle Heizungswartung für optimale Effizienz.", icon: "Settings" },
    ],
    projects: [
      { title: "Badsanierung {city}", description: "Komplette Badsanierung mit modernen Armaturen.", image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=85", category: "Badsanierung" },
      { title: "Heizungsmodernisierung", description: "Austausch einer alten Ölheizung durch Wärmepumpe.", image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=85", category: "Heizung" },
      { title: "Neubau Sanitär", description: "Komplette Sanitärinstallation eines Neubaus.", image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=85", category: "Neubau" },
    ],
    reviews: [
      { name: "Bernd H.", text: "Rohrbruch am Wochenende – innerhalb einer Stunde war der Techniker da. Lebensretter!" },
      { name: "Monika L.", text: "Traumhaftes Bad, perfekt umgesetzt. Sehr professionell und freundlich." },
      { name: "Frank S.", text: "Heizung im Winter ausgefallen – schnelle Hilfe, faire Preise. Top!" },
    ],
    faqs: [
      { question: "Haben Sie einen Notdienst?", answer: "Ja, wir sind 24/7 erreichbar bei Rohrbruch und Heizungsausfall." },
      { question: "Wie lange dauert eine Badsanierung?", answer: "Eine komplette Badsanierung dauert ca. 1–2 Wochen, je nach Umfang." },
      { question: "Installieren Sie auch Wärmepumpen?", answer: "Ja, wir planen und installieren Wärmepumpen inklusive Förderantrag." },
      { question: "Bieten Sie Wartungsverträge an?", answer: "Ja, mit unserem Wartungsvertrag bleibt Ihre Heizung immer fit." },
    ],
    stats: [
      { value: "600+", label: "Projekte" },
      { value: "20+", label: "Jahre Erfahrung" },
      { value: "24/7", label: "Notdienst" },
      { value: "98%", label: "Zufriedene Kunden" },
    ],
    benefits: [
      { title: "Meisterbetrieb", description: "Zertifizierter Sanitärmeister.", icon: "Award" },
      { title: "24/7 Notdienst", description: "Immer erreichbar bei Notfällen.", icon: "AlertTriangle" },
      { title: "Festpreis", description: "Transparente Preise ohne Überraschungen.", icon: "ShieldCheck" },
      { title: "Lokal in {city}", description: "Schnell vor Ort, persönlicher Service.", icon: "MapPin" },
    ],
    seoKeywords: ["Sanitär {city}", "Klempner {city}", "Badsanierung {city}", "Heizung {city}", "Rohrbruch {city}", "Notdienst Sanitär {city}"],
    schema: "Plumber",
    priceRange: "€€",
  },

  // ── DACHDECKER ───────────────────────────────────────────────
  dachdecker: {
    industry: "Dachdeckerei",
    icon: "Home",
    taglines: [
      "Ihr Dachdecker in {city}",
      "Dacharbeiten in {city}",
      "Dachdeckerei in {city}",
      "Ihr Profi für das Dach in {city}",
    ],
    descriptions: [
      "Professionelle Dacharbeiten in {city}. Neueindeckung, Reparatur und Dachdämmung – schnell und wasserdicht.",
      "Ihr Dachdecker in {city}. Vom Dachfenster bis zur kompletten Neueindeckung – zuverlässig und fair.",
      "Dachdeckermeisterbetrieb in {city}. Alle Dacharbeiten aus einer Hand.",
    ],
    heroImages: [
      "https://images.unsplash.com/photo-1635424710928-0544e8512eae?w=1200&q=85",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=85",
    ],
    services: [
      { name: "Dacheindeckung", shortDesc: "Neueindeckung mit Ziegel, Schiefer oder Blech.", description: "Komplette Neueindeckung aller Dacharten.", icon: "Home" },
      { name: "Dachreparatur", shortDesc: "Schnelle Hilfe bei undichtem Dach.", description: "Zuverlässige Reparatur bei Sturmschäden und Leckagen.", icon: "Wrench" },
      { name: "Dachdämmung", shortDesc: "Energiesparen durch professionelle Dämmung.", description: "Effiziente Dachdämmung für niedrigere Heizkosten.", icon: "Layers" },
      { name: "Dachfenster", shortDesc: "Velux und andere Hersteller fachgerecht eingebaut.", description: "Einbau und Reparatur von Dachfenstern.", icon: "Sun" },
      { name: "Flachdach", shortDesc: "Flachdach neu abdichten und sanieren.", description: "Professionelle Flachdachsanierung und Neubau.", icon: "Minus" },
      { name: "Notdienst", shortDesc: "Sofortige Hilfe nach Sturm oder Unwetter.", description: "Schnelle Notreparatur bei Sturmschäden.", icon: "AlertTriangle" },
    ],
    projects: [
      { title: "Neueindeckung {city}", description: "Komplette Dacheindeckung mit Tonziegeln.", image: "https://images.unsplash.com/photo-1635424710928-0544e8512eae?w=800&q=85", category: "Neueindeckung" },
      { title: "Flachdachsanierung", description: "Sanierung eines undichten Flachdachs.", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=85", category: "Flachdach" },
      { title: "Dachgaube einbauen", description: "Einbau einer Dachgaube inkl. Dämmung.", image: "https://images.unsplash.com/photo-1635424710928-0544e8512eae?w=800&q=85", category: "Umbau" },
    ],
    reviews: [
      { name: "Rainer M.", text: "Nach dem Sturm schnell geholfen. Professionelle Arbeit, faire Preise." },
      { name: "Elisabeth K.", text: "Neues Dach top eingedeckt. Sauber gearbeitet, pünktlich fertig." },
      { name: "Günter S.", text: "Sehr zufrieden mit der Dämmung. Heizkosten deutlich gesunken." },
    ],
    faqs: [
      { question: "Wie lange hält ein neues Dach?", answer: "Ein professionell eingedecktes Dach hält 30–50 Jahre, je nach Material." },
      { question: "Haben Sie Notdienst nach Sturm?", answer: "Ja, wir sind 24/7 erreichbar bei akuten Sturmschäden." },
      { question: "Übernehmen Sie die Versicherungsabwicklung?", answer: "Ja, wir helfen bei der Dokumentation für Ihre Versicherung." },
      { question: "Welche Dachziegel empfehlen Sie?", answer: "Das hängt vom Gebäude ab. Wir beraten Sie gerne vor Ort." },
    ],
    stats: [
      { value: "400+", label: "Dächer" },
      { value: "25+", label: "Jahre Erfahrung" },
      { value: "24/7", label: "Notdienst" },
      { value: "99%", label: "Zufriedene Kunden" },
    ],
    benefits: [
      { title: "Meisterbetrieb", description: "Zertifizierter Dachdeckermeister.", icon: "Award" },
      { title: "Sturmschaden", description: "Sofortige Hilfe nach Unwetter.", icon: "AlertTriangle" },
      { title: "Garantie", description: "10 Jahre Garantie auf alle Arbeiten.", icon: "ShieldCheck" },
      { title: "Lokal in {city}", description: "Schnell vor Ort, persönlicher Service.", icon: "MapPin" },
    ],
    seoKeywords: ["Dachdecker {city}", "Dacheindeckung {city}", "Dachreparatur {city}", "Dachdämmung {city}", "Sturmschaden {city}"],
    schema: "HomeAndConstructionBusiness",
    priceRange: "€€€",
  },

  // ── SCHREINER ────────────────────────────────────────────────
  schreiner: {
    industry: "Schreinerei",
    icon: "Hammer",
    taglines: [
      "Ihr Schreiner in {city}",
      "Holzhandwerk in {city}",
      "Schreinerei in {city}",
      "Ihr Tischler in {city}",
    ],
    descriptions: [
      "Schreinerei in {city}. Maßmöbel, Türen, Fenster und Innenausbau nach Ihren Wünschen – handwerkliche Qualität aus der Region.",
      "Ihr Schreiner in {city}. Individuelle Möbel, professioneller Innenausbau und Fensterbau – alles aus einer Hand.",
      "Holzhandwerk vom Fachmann in {city}. Von der Einbauküche bis zum Dachstuhl – Qualität die hält.",
    ],
    heroImages: [
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=1200&q=85",
      "https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?w=1200&q=85",
    ],
    services: [
      { name: "Maßmöbel", shortDesc: "Individuelle Möbel nach Ihren Wünschen.", description: "Maßgefertigte Möbel für jeden Raum.", icon: "Hammer" },
      { name: "Türen & Fenster", shortDesc: "Einbau und Reparatur von Türen und Fenstern.", description: "Professioneller Einbau und Reparatur.", icon: "DoorOpen" },
      { name: "Innenausbau", shortDesc: "Tresen, Regale, Einbauschränke.", description: "Hochwertiger Innenausbau für Privat und Gewerbe.", icon: "Home" },
      { name: "Küchenbau", shortDesc: "Einbauküchen nach Maß.", description: "Individuelle Einbauküchen perfekt angepasst.", icon: "UtensilsCrossed" },
      { name: "Restaurierung", shortDesc: "Alte Möbel fachgerecht restauriert.", description: "Liebevolle Restaurierung von Antiquitäten und alten Möbeln.", icon: "RefreshCw" },
      { name: "Dachstuhl", shortDesc: "Dachstuhlbau und Reparatur.", description: "Professioneller Dachstuhlbau in Holzrahmenbauweise.", icon: "Triangle" },
    ],
    projects: [
      { title: "Einbauschrank {city}", description: "Maßgefertigter Einbauschrank vom Boden bis zur Decke.", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=85", category: "Maßmöbel" },
      { title: "Küche nach Maß", description: "Individuelle Einbauküche mit Insel.", image: "https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?w=800&q=85", category: "Küche" },
      { title: "Ladenausbau {city}", description: "Kompletter Innenausbau eines Ladengeschäfts.", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=85", category: "Gewerbe" },
    ],
    reviews: [
      { name: "Sabine M.", text: "Der Einbauschrank ist ein Traum! Perfekt geplant und makellos umgesetzt." },
      { name: "Jürgen K.", text: "Tolle Arbeit, sehr detailverliebt. Unsere Küche ist ein Hingucker." },
      { name: "Petra S.", text: "Alte Möbel wunderschön restauriert. Vielen Dank für die tolle Arbeit!" },
    ],
    faqs: [
      { question: "Wie lange dauert ein Maßmöbel?", answer: "Je nach Komplexität 2–6 Wochen von der Planung bis zur Fertigstellung." },
      { question: "Kommen Sie zur Beratung nach Hause?", answer: "Ja, wir bieten kostenlose Aufmaß und Beratungstermine bei Ihnen zu Hause an." },
      { question: "Welche Hölzer verwenden Sie?", answer: "Wir arbeiten mit regionalen und zertifizierten Hölzern – von Eiche bis Fichte." },
      { question: "Reparieren Sie auch alte Möbel?", answer: "Ja, wir restaurieren und reparieren Möbel aller Art." },
    ],
    stats: [
      { value: "300+", label: "Projekte" },
      { value: "20+", label: "Jahre Erfahrung" },
      { value: "100%", label: "Handarbeit" },
      { value: "98%", label: "Zufriedene Kunden" },
    ],
    benefits: [
      { title: "Meisterbetrieb", description: "Zertifizierter Schreinermeister.", icon: "Award" },
      { title: "Regional", description: "Holz aus der Region, kurze Wege.", icon: "Leaf" },
      { title: "Maßarbeit", description: "Jedes Stück individuell gefertigt.", icon: "Ruler" },
      { title: "Lokal in {city}", description: "Persönlicher Service vor Ort.", icon: "MapPin" },
    ],
    seoKeywords: ["Schreiner {city}", "Tischler {city}", "Maßmöbel {city}", "Einbauschrank {city}", "Küche nach Maß {city}", "Innenausbau {city}"],
    schema: "HomeAndConstructionBusiness",
    priceRange: "€€€",
  },

  // ── FLIESENLEGER ─────────────────────────────────────────────
  fliesenleger: {
    industry: "Fliesenlegerei",
    icon: "Grid3x3",
    taglines: [
      "Ihr Fliesenleger in {city}",
      "Fliesen & Naturstein in {city}",
      "Fliesenlegerei in {city}",
      "Ihr Profi für Fliesen in {city}",
    ],
    descriptions: [
      "Professionelles Fliesenlegen in {city}. Bad, Küche, Terrasse – wir verlegen alle Materialien sauber und präzise.",
      "Ihr Fliesenleger in {city}. Von der Beratung bis zur Fertigstellung – Qualität die begeistert.",
      "Fliesenlegerei vom Fachmann in {city}. Bäder, Böden und Außenbereiche – alles aus einer Hand.",
    ],
    heroImages: [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&q=85",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=85",
    ],
    services: [
      { name: "Badsanierung", shortDesc: "Komplette Badsanierung mit neuen Fliesen.", description: "Wir gestalten Ihr Traumbad – Planung und Umsetzung.", icon: "Bath" },
      { name: "Bodenfliesen", shortDesc: "Alle Fliesen- und Natursteinböden.", description: "Präzises Verlegen von Boden- und Wandfliesen.", icon: "Grid3x3" },
      { name: "Terrasse & Außen", shortDesc: "Frost- und rutschfeste Außenfliesen.", description: "Langlebige Außenfliesen für Terrasse und Einfahrt.", icon: "Sun" },
      { name: "Naturstein", shortDesc: "Marmor, Travertin und Granit verlegt.", description: "Hochwertige Natursteinarbeiten für exklusives Ambiente.", icon: "Gem" },
      { name: "Reparaturen", shortDesc: "Einzelne Fliesen austauschen und reparieren.", description: "Schnelle Reparatur von gebrochenen oder losen Fliesen.", icon: "Wrench" },
      { name: "Verfugung", shortDesc: "Fugen erneuern und versiegeln.", description: "Professionelle Fugensanierung und Versiegelung.", icon: "PenTool" },
    ],
    projects: [
      { title: "Badsanierung {city}", description: "Komplette Badsanierung mit großformatigen Fliesen.", image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=85", category: "Bad" },
      { title: "Terrasse Naturstein", description: "Terrassengestaltung mit Travertin-Platten.", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=85", category: "Außen" },
      { title: "Gewerbeboden {city}", description: "Großflächige Bodenverlegung in Bürogebäude.", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=85", category: "Gewerbe" },
    ],
    reviews: [
      { name: "Claudia M.", text: "Bad sieht fantastisch aus! Präzise Arbeit, sehr sauber. Absolute Empfehlung." },
      { name: "Norbert K.", text: "Terrasse perfekt verlegt. Sehr zufrieden mit Material und Ausführung." },
      { name: "Ingrid S.", text: "Alte Fliesen raus, neue rein – und das in nur 3 Tagen. Super Arbeit!" },
    ],
    faqs: [
      { question: "Wie lange dauert eine Badsanierung?", answer: "Eine komplette Badsanierung dauert ca. 5–10 Tage, je nach Größe." },
      { question: "Helfen Sie bei der Fliesenauswahl?", answer: "Ja, wir beraten Sie und können Muster vorlegen." },
      { question: "Verlegen Sie auch großformatige Fliesen?", answer: "Ja, wir sind spezialisiert auf Großformate bis 120x120 cm." },
      { question: "Können Sie auch alte Fliesen entfernen?", answer: "Ja, wir übernehmen den kompletten Rückbau und die Entsorgung." },
    ],
    stats: [
      { value: "400+", label: "Projekte" },
      { value: "15+", label: "Jahre Erfahrung" },
      { value: "5★", label: "Bewertung" },
      { value: "98%", label: "Zufriedene Kunden" },
    ],
    benefits: [
      { title: "Meisterbetrieb", description: "Zertifizierter Fliesenlegermeister.", icon: "Award" },
      { title: "Präzision", description: "Millimetergenaues Arbeiten.", icon: "Ruler" },
      { title: "Materialberatung", description: "Wir finden die richtigen Fliesen.", icon: "ShieldCheck" },
      { title: "Lokal in {city}", description: "Persönlicher Service vor Ort.", icon: "MapPin" },
    ],
    seoKeywords: ["Fliesenleger {city}", "Fliesen {city}", "Badsanierung {city}", "Naturstein {city}", "Terrassenfliesen {city}"],
    schema: "HomeAndConstructionBusiness",
    priceRange: "€€",
  },

  // ── TROCKENBAU ───────────────────────────────────────────────
  trockenbau: {
    industry: "Trockenbau",
    icon: "Layers",
    taglines: [
      "Ihr Trockenbauer in {city}",
      "Trockenbau & Innenausbau in {city}",
      "Trockenbau in {city}",
      "Ihr Profi für Innenausbau in {city}",
    ],
    descriptions: [
      "Professioneller Trockenbau in {city}. Wände, Decken, Akustik und Brandschutz – schnell und sauber.",
      "Ihr Trockenbauer in {city}. Vom einfachen Stellwand bis zum kompletten Innenausbau – zuverlässig und fair.",
      "Trockenbau vom Fachmann in {city}. Wohnräume, Büros und Gewerbe – alles aus einer Hand.",
    ],
    heroImages: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=85",
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1200&q=85",
    ],
    services: [
      { name: "Ständerwände", shortDesc: "Schnelle Raumteilung mit Trockenbau.", description: "Flexible Raumgestaltung mit Gipskartonwänden.", icon: "Layers" },
      { name: "Abgehängte Decken", shortDesc: "Design- und Akustikdecken.", description: "Moderne Deckengestaltung für alle Räume.", icon: "ArrowDown" },
      { name: "Akustiklösungen", shortDesc: "Schallschutz für Büro und Wohnen.", description: "Professionelle Akustiklösungen für mehr Ruhe.", icon: "Volume2" },
      { name: "Brandschutz", shortDesc: "Brandschutzwände und -decken.", description: "Zertifizierter Brandschutz nach DIN-Norm.", icon: "ShieldCheck" },
      { name: "Dämmung", shortDesc: "Wärme- und Schallschutz integriert.", description: "Effiziente Dämmung in Wand und Decke.", icon: "Wind" },
      { name: "Innenausbau", shortDesc: "Kompletter Innenausbau für Gewerbe.", description: "Kompletter Innenausbau für Büros und Ladengeschäfte.", icon: "Building2" },
    ],
    projects: [
      { title: "Büroausbau {city}", description: "Kompletter Innenausbau eines Bürokomplexes.", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=85", category: "Gewerbe" },
      { title: "Dachausbau {city}", description: "Dachboden zu Wohnraum ausgebaut.", image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=85", category: "Wohnbau" },
      { title: "Akustikdecke Konferenzraum", description: "Akustikdecke für optimale Raumakustik.", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=85", category: "Akustik" },
    ],
    reviews: [
      { name: "Dirk M.", text: "Büroausbau perfekt und pünktlich fertig. Sehr professionelles Team." },
      { name: "Karin L.", text: "Dachausbau super umgesetzt. Sauber gearbeitet, faire Preise." },
      { name: "Holger S.", text: "Akustik im Konferenzraum deutlich besser. Sehr zufrieden!" },
    ],
    faqs: [
      { question: "Wie schnell können Sie starten?", answer: "In der Regel können wir innerhalb von 1–2 Wochen mit dem Projekt beginnen." },
      { question: "Arbeiten Sie auch im laufenden Betrieb?", answer: "Ja, wir koordinieren die Arbeiten so, dass der Betrieb weiterlaufen kann." },
      { question: "Bieten Sie auch Brandschutzlösungen an?", answer: "Ja, wir planen und bauen zertifizierte Brandschutzwände nach DIN-Norm." },
      { question: "Welche Materialien verwenden Sie?", answer: "Wir arbeiten mit führenden Herstellern wie Knauf und Rigips." },
    ],
    stats: [
      { value: "350+", label: "Projekte" },
      { value: "10+", label: "Jahre Erfahrung" },
      { value: "50k+", label: "m² verbaut" },
      { value: "99%", label: "Zufriedene Kunden" },
    ],
    benefits: [
      { title: "Fachbetrieb", description: "Zertifizierter Trockenbaufachbetrieb.", icon: "Award" },
      { title: "Schnell", description: "Kurze Bauzeiten durch effiziente Methoden.", icon: "Clock" },
      { title: "Sauber", description: "Minimaler Schmutz, maximale Effizienz.", icon: "ShieldCheck" },
      { title: "Lokal in {city}", description: "Persönlicher Service vor Ort.", icon: "MapPin" },
    ],
    seoKeywords: ["Trockenbau {city}", "Innenausbau {city}", "Trockenbauer {city}", "Gipskarton {city}", "Schallschutz {city}", "Büroausbau {city}"],
    schema: "HomeAndConstructionBusiness",
    priceRange: "€€",
  },

  // ── BAUUNTERNEHMEN ───────────────────────────────────────────
  bauunternehmen: {
    industry: "Bauunternehmen",
    icon: "Building2",
    taglines: [
      "Ihr Bauunternehmen in {city}",
      "Bauen in {city}",
      "Hochbau & Tiefbau in {city}",
      "Ihr Baupartner in {city}",
    ],
    descriptions: [
      "Professioneller Hoch- und Tiefbau in {city}. Von der Planung bis zur Schlüsselübergabe – alles aus einer Hand.",
      "Ihr Bauunternehmen in {city}. Neubau, Sanierung und Schlüsselfertigbau – zuverlässig und termintreu.",
      "Bauunternehmen in {city}. Wir realisieren Ihr Bauprojekt – egal ob Einfamilienhaus oder Gewerbehalle.",
    ],
    heroImages: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=85",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=85",
    ],
    services: [
      { name: "Hochbau", shortDesc: "Neubau von Wohn- und Gewerbegebäuden.", description: "Wir realisieren Ihr Bauvorhaben termingerecht.", icon: "Building2" },
      { name: "Tiefbau", shortDesc: "Erdarbeiten, Kanalbau und Fundamente.", description: "Professionelle Tiefbauarbeiten aller Art.", icon: "Shovel" },
      { name: "Sanierung", shortDesc: "Modernisierung von Altbauten.", description: "Fachgerechte Sanierung für mehr Wert.", icon: "Wrench" },
      { name: "Schlüsselfertig", shortDesc: "Komplett aus einer Hand.", description: "Von der Planung bis zum Einzug.", icon: "Key" },
      { name: "Außenanlagen", shortDesc: "Pflasterarbeiten und Gartengestaltung.", description: "Professionelle Außenanlagen rund ums Haus.", icon: "Leaf" },
      { name: "Abriss", shortDesc: "Fachgerechter Rückbau und Entsorgung.", description: "Schneller und sicherer Abriss.", icon: "Hammer" },
    ],
    projects: [
      { title: "Mehrfamilienhaus {city}", description: "Neubau eines Mehrfamilienhauses mit 8 Einheiten.", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=85", category: "Hochbau" },
      { title: "Gewerbehalle {city}", description: "Schlüsselfertiger Neubau einer Gewerbehalle.", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=85", category: "Gewerbe" },
      { title: "Altbausanierung {city}", description: "Kernsanierung eines Gründerzeithauses.", image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=85", category: "Sanierung" },
    ],
    reviews: [
      { name: "Thomas K.", text: "Mehrfamilienhaus pünktlich und in top Qualität fertiggestellt. Absolute Empfehlung!" },
      { name: "Sandra M.", text: "Schlüsselfertiges Haus – alles perfekt. Sehr professionelles Team." },
      { name: "Markus W.", text: "Sanierung super umgesetzt. Transparent und fair in der Kommunikation." },
    ],
    faqs: [
      { question: "Wie lange dauert ein Einfamilienhaus?", answer: "Ein schlüsselfertiges Einfamilienhaus dauert ca. 8–12 Monate." },
      { question: "Bieten Sie auch Finanzierungsberatung an?", answer: "Wir vermitteln gerne kompetente Finanzierungspartner." },
      { question: "Welche Garantie geben Sie?", answer: "Wir gewähren die gesetzliche Gewährleistung von 5 Jahren." },
      { question: "Führen Sie auch kleinere Arbeiten durch?", answer: "Ja, wir haben ein Serviceteam für kleinere Reparaturen ab 500€." },
    ],
    stats: [
      { value: "200+", label: "Projekte" },
      { value: "20+", label: "Jahre Erfahrung" },
      { value: "50+", label: "Mitarbeiter" },
      { value: "98%", label: "Zufriedene Kunden" },
    ],
    benefits: [
      { title: "Erfahrung", description: "20 Jahre Expertise im Hoch- und Tiefbau.", icon: "Award" },
      { title: "Alles aus einer Hand", description: "Ein Ansprechpartner für alles.", icon: "Layers" },
      { title: "Termintreu", description: "Wir halten unsere Deadlines.", icon: "Clock" },
      { title: "Lokal in {city}", description: "Ihr Partner aus {city}.", icon: "MapPin" },
    ],
    seoKeywords: ["Bauunternehmen {city}", "Hochbau {city}", "Tiefbau {city}", "Sanierung {city}", "Schlüsselfertig {city}", "Neubau {city}"],
    schema: "HomeAndConstructionBusiness",
    priceRange: "€€€",
  },
};
