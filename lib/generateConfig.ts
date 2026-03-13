// ============================================================
// CONFIG GENERATOR
// Erstellt eine fertige siteConfig aus Branch + Kundendaten
// ============================================================

import { branchTemplates, Branch } from "./branchTemplates";

export interface CustomerInput {
  branch: Branch;
  companyName: string;
  city: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  email: string;
  address: string;
  foundingYear?: string;
  colors?: {
    primary: string;
    secondary: string;
  };
  heroStyle?: "fullscreen" | "split" | "minimal";
  darkMode?: boolean;
}

// Deterministischer Hash für Varianten-Auswahl
function hashCode(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

// Platzhalter ersetzen
function fill(text: string, input: CustomerInput): string {
  return text
    .replace(/\{city\}/g, input.city)
    .replace(/\{phone\}/g, input.phone)
    .replace(/\{company\}/g, input.companyName);
}

export function generateConfig(input: CustomerInput): string {
  const template = branchTemplates[input.branch];
  const hash = hashCode(input.companyName);

  // Varianten deterministisch auswählen
  const tagline = fill(template.taglines[hash % template.taglines.length], input);
  const description = fill(template.descriptions[hash % template.descriptions.length], input);
  const heroImage = template.heroImages[hash % template.heroImages.length];

  // Farben
  const primary = input.colors?.primary || "#1a1a2e";
  const secondary = input.colors?.secondary || "#C9A84C";

  // customerSlug aus Firmenname
  const customerSlug = input.companyName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  // Services mit Platzhaltern füllen
  const services = template.services.map((s, i) => ({
    id: `s${i + 1}`,
    name: s.name,
    shortDesc: fill(s.shortDesc, input),
    description: fill(s.description, input),
    icon: s.icon,
    image: "",
  }));

  // Projects mit Platzhaltern füllen
  const projects = template.projects.map((p, i) => ({
    id: `p${i + 1}`,
    title: fill(p.title, input),
    description: fill(p.description, input),
    image: p.image,
    category: p.category,
  }));

  // Reviews
  const reviews = template.reviews.map((r) => ({
    name: r.name,
    rating: 5,
    text: r.text,
    date: "2024-12",
  }));

  // FAQs mit Platzhaltern füllen
  const faqs = template.faqs.map((f) => ({
    question: fill(f.question, input),
    answer: fill(f.answer, input),
  }));

  // Benefits mit Platzhaltern füllen
  const benefits = template.benefits.map((b) => ({
    title: b.title,
    description: fill(b.description, input),
    icon: b.icon,
  }));

  // SEO Keywords mit Platzhaltern füllen
  const keywords = template.seoKeywords.map((k) => fill(k, input)).join(", ");

  // siteConfig als TypeScript String generieren
  return `export const siteConfig = {
  companyName: "${input.companyName}",
  tagline: "${tagline}",
  industry: "${template.industry}",
  description: "${description}",
  foundingYear: "${input.foundingYear || "2010"}",
  phone: "${input.phone}",
  phoneDisplay: "${input.phoneDisplay}",
  whatsapp: "${input.whatsapp}",
  email: "${input.email}",
  website: "",
  address: "${input.address}",
  city: "${input.city}",
  region: "${input.city}",
  serviceArea: "${input.city} und Umgebung",
  openingHours: [
    { day: "Montag – Freitag", hours: "07:00 – 18:00 Uhr" },
    { day: "Samstag", hours: "08:00 – 13:00 Uhr" },
    { day: "Sonntag", hours: "Geschlossen" },
  ],
  colors: {
    primary: "${primary}",
    secondary: "${secondary}",
    accent: "${primary}",
    primaryText: "#ffffff",
    secondaryText: "#ffffff",
  },
  fonts: { display: "Plus Jakarta Sans", body: "Inter" },
  darkMode: ${input.darkMode ?? true},
  logo: { type: "text" as "text" | "image", text: "${input.companyName[0]}", imageUrl: "", icon: "${template.icon}" },
  sections: {
    hero: true,
    services: true,
    about: true,
    projects: true,
    reviews: true,
    stats: true,
    benefits: true,
    pricing: false,
    faq: true,
    contact: true,
  },
  layout: {
    heroStyle: "${input.heroStyle || "fullscreen"}" as "fullscreen" | "split" | "minimal",
    navStyle: "transparent" as "transparent" | "solid" | "minimal",
    footerStyle: "full" as "full" | "simple",
  },
  language: { default: "de" as "de" | "en", available: ["de"] as ("de" | "en")[] },
  services: ${JSON.stringify(services, null, 2)},
  about: {
    title: "Über ${input.companyName}",
    description: "${description}",
    image: "${heroImage}",
    highlights: [
      { label: "Jahre Erfahrung", value: "${new Date().getFullYear() - parseInt(input.foundingYear || "2010")}+" },
      { label: "Projekte", value: "100+" },
      { label: "Zufriedene Kunden", value: "98%" },
    ],
  },
  projects: ${JSON.stringify(projects, null, 2)},
  stats: ${JSON.stringify(template.stats, null, 2)},
  benefits: ${JSON.stringify(benefits, null, 2)},
  reviews: ${JSON.stringify(reviews, null, 2)},
  pricing: [],
  faqItems: ${JSON.stringify(faqs, null, 2)},
  socialMedia: { facebook: "", instagram: "", linkedin: "", youtube: "", tiktok: "" },
  analytics: { googleAnalyticsId: "" },
  seo: {
    titleTemplate: "%s | ${input.companyName}",
    defaultTitle: "${input.companyName} – ${tagline}",
    defaultDescription: "${description}",
    keywords: "${keywords}",
    ogImage: "/og-image.jpg",
    twitterCard: "summary_large_image",
    locale: "de_DE",
    siteUrl: "",
  },
  schema: { type: "${template.schema}", priceRange: "${template.priceRange}", areaServed: "${input.city}" },
  sanity: { projectId: "8dczusjp", dataset: "production" },
};

export type SiteConfig = typeof siteConfig;
export type SectionKey = keyof typeof siteConfig.sections;
export type HeroStyle = typeof siteConfig.layout.heroStyle;
export type NavStyle = typeof siteConfig.layout.navStyle;
export type FooterStyle = typeof siteConfig.layout.footerStyle;
`;
}
