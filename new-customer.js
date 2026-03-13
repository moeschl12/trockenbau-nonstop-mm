#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function ask(q) { return new Promise(r => rl.question(q, r)); }
function opt(q) { return new Promise(r => rl.question(q + " (Enter = überspringen): ", r)); }
function hash(str) { let h = 0; for (let i = 0; i < str.length; i++) { h = (h << 5) - h + str.charCodeAt(i); h |= 0; } return Math.abs(h); }
function fill(t, inp) { return t.replace(/\{city\}/g, inp.city).replace(/\{phone\}/g, inp.phone).replace(/\{company\}/g, inp.companyName); }

const branches = {"1":"maler","2":"elektriker","3":"sanitaer","4":"dachdecker","5":"schreiner","6":"fliesenleger","7":"trockenbau","8":"bauunternehmen"};
const colorMap = {"1":{primary:"#1a1a2e",secondary:"#C9A84C"},"2":{primary:"#0a1628",secondary:"#1d6fa4"},"3":{primary:"#1a1a2e",secondary:"#e63946"},"4":{primary:"#f8f9fa",secondary:"#2d6a4f"},"5":{primary:"#0a1628",secondary:"#f59e0b"}};
const heroMap = {"1":"fullscreen","2":"split","3":"minimal"};

async function main() {
  console.log("\n🔨 HANDWERK V2 – NEUER KUNDE\n");
  console.log("Branche: 1)Maler 2)Elektriker 3)Sanitär 4)Dachdecker 5)Schreiner 6)Fliesenleger 7)Trockenbau 8)Bauunternehmen");
  const branch = branches[await ask("Branche (1-8): ")] || "maler";
  const companyName = await ask("Firmenname: ");
  const city = await ask("Stadt: ");
  const phone = await ask("Telefon (z.B. +49 341 123456): ");
  const phoneDisplay = await ask("Telefon Anzeige (z.B. 0341 / 123456): ");
  const whatsapp = await opt("WhatsApp (z.B. +4934112345678)");
  const email = await ask("E-Mail: ");
  const address = await ask("Adresse: ");
  const foundingYear = await opt("Gründungsjahr (z.B. 2010)");

  // Öffnungszeiten
  console.log("\n🕐 Öffnungszeiten (Enter = Standard übernehmen)");
  const moFrRaw = await opt("Mo–Fr (z.B. 07:00 – 18:00 Uhr)");
  const moFr = moFrRaw || "07:00 – 18:00 Uhr";
  const saRaw = await opt("Samstag (z.B. 08:00 – 13:00 Uhr, oder 'Geschlossen')");
  const sa = saRaw || "08:00 – 13:00 Uhr";
  const soRaw = await opt("Sonntag (z.B. 'Geschlossen' oder '10:00 – 14:00 Uhr')");
  const so = soRaw || "Geschlossen";

  const openingHours = [
    { day: "Montag – Freitag", hours: moFr },
    { day: "Samstag", hours: sa },
    { day: "Sonntag", hours: so },
  ];

  console.log("\nFarben: 1)Dunkel+Gold 2)Dunkel+Blau 3)Dunkel+Rot 4)Weiß+Grün 5)Dunkel+Amber");
  const colors = colorMap[await ask("Farbe (1-5): ")] || colorMap["1"];
  console.log("\nHero: 1)fullscreen 2)split 3)minimal");
  const heroStyle = heroMap[await ask("Stil (1-3): ")] || "fullscreen";
  console.log("\nOptionale Sections:");
  const showReviews = (await opt("Reviews anzeigen? (j/n)")).toLowerCase() !== "n";
  const showFaq = (await opt("FAQ anzeigen? (j/n)")).toLowerCase() !== "n";
  rl.close();

  const tmplPath = path.join(__dirname, "lib", "branchTemplates.json");
  const templates = JSON.parse(fs.readFileSync(tmplPath, "utf8"));
  const t = templates[branch];
  const inp = { companyName, city, phone };
  const h = hash(companyName);

  const tagline = fill(t.taglines[h % t.taglines.length], inp);
  const description = fill(t.descriptions[h % t.descriptions.length], inp);
  const heroImage = t.heroImages[h % t.heroImages.length];
  const keywords = t.seoKeywords.map(k => fill(k, inp)).join(", ");
  const yearsExp = foundingYear ? new Date().getFullYear() - parseInt(foundingYear) : 10;

  const services = t.services.map((s,i) => ({ id:`s${i+1}`, name:s.name, shortDesc:fill(s.shortDesc,inp), description:fill(s.description,inp), icon:s.icon, image:"" }));
  const projects = t.projects.map((p,i) => ({ id:`p${i+1}`, title:fill(p.title,inp), description:fill(p.description,inp), image:p.image, category:p.category }));
  const reviews = showReviews ? t.reviews.map(r => ({ name:r.name, rating:5, text:r.text, date:"2024-12" })) : [];
  const faqs = showFaq ? t.faqs.map(f => ({ question:fill(f.question,inp), answer:fill(f.answer,inp) })) : [];
  const benefits = t.benefits.map(b => ({ title:b.title, description:fill(b.description,inp), icon:b.icon }));
  const customerName = companyName.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");

  const config = `export const siteConfig = {
  companyName: "${companyName}",
  tagline: "${tagline}",
  industry: "${t.industry}",
  description: "${description}",
  foundingYear: "${foundingYear || ""}",
  phone: "${phone}",
  phoneDisplay: "${phoneDisplay}",
  whatsapp: "${whatsapp}",
  email: "${email}",
  website: "",
  address: "${address}",
  city: "${city}",
  region: "${city}",
  serviceArea: "${city} und Umgebung",
  openingHours: ${JSON.stringify(openingHours, null, 4)},
  colors: { primary: "${colors.primary}", secondary: "${colors.secondary}", accent: "${colors.primary}", primaryText: "#ffffff", secondaryText: "#ffffff" },
  fonts: { display: "Plus Jakarta Sans", body: "Inter" },
  darkMode: true,
  logo: { type: "text" as "text" | "image", text: "${companyName[0]}", imageUrl: "", icon: "${t.icon}" },
  sections: {
    hero: true,
    services: true,
    about: true,
    projects: true,
    reviews: ${showReviews},
    stats: true,
    benefits: true,
    pricing: false,
    faq: ${showFaq},
    contact: true,
  },
  layout: {
    heroStyle: "${heroStyle}" as "fullscreen" | "split" | "minimal",
    navStyle: "transparent" as "transparent" | "solid" | "minimal",
    footerStyle: "full" as "full" | "simple",
  },
  language: { default: "de" as "de" | "en", available: ["de"] as ("de" | "en")[] },
  services: ${JSON.stringify(services, null, 2)},
  about: {
    title: "Über ${companyName}",
    description: "${description}",
    image: "${heroImage}",
    highlights: [
      { label: "Jahre Erfahrung", value: "${yearsExp}+" },
      { label: "Projekte", value: "100+" },
      { label: "Zufriedene Kunden", value: "98%" },
    ],
  },
  projects: ${JSON.stringify(projects, null, 2)},
  stats: ${JSON.stringify(t.stats, null, 2)},
  benefits: ${JSON.stringify(benefits, null, 2)},
  reviews: ${JSON.stringify(reviews, null, 2)},
  pricing: [],
  faqItems: ${JSON.stringify(faqs, null, 2)},
  socialMedia: { facebook: "", instagram: "", linkedin: "", youtube: "", tiktok: "" },
  analytics: { googleAnalyticsId: "" },
  seo: {
    titleTemplate: "%s | ${companyName}",
    defaultTitle: "${companyName} – ${tagline}",
    defaultDescription: "${description}",
    keywords: "${keywords}",
    ogImage: "/og-image.jpg",
    twitterCard: "summary_large_image",
    locale: "de_DE",
    siteUrl: "",
  },
  schema: { type: "${t.schema}", priceRange: "${t.priceRange}", areaServed: "${city}" },
  sanity: { projectId: "8dczusjp", dataset: "production" },
};

export type SiteConfig = typeof siteConfig;
export type SectionKey = keyof typeof siteConfig.sections;
export type HeroStyle = typeof siteConfig.layout.heroStyle;
export type NavStyle = typeof siteConfig.layout.navStyle;
export type FooterStyle = typeof siteConfig.layout.footerStyle;
`;

  const configDir = `/storage/emulated/0/handwerk/handwerk-v2-configs/${customerName}`;
  fs.mkdirSync(configDir, { recursive: true });
  fs.writeFileSync(path.join(configDir, "siteConfig.ts"), config);

  console.log(`\n✅ Config erstellt: ${companyName}`);
  console.log(`📁 ${configDir}/siteConfig.ts`);
  console.log(`\n🚀 Jetzt deployen:`);
  console.log(`bash /storage/emulated/0/handwerk/handwerk-v2/deploy.sh ${customerName}\n`);
}

main().catch(console.error);
