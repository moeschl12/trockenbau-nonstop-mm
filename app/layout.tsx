import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/siteConfig";

const cfg = siteConfig as any;
const primaryColor = cfg.design?.primaryColor ?? cfg.colors?.primary ?? "#1a1a2e";
const accentColor = cfg.design?.accentColor ?? cfg.colors?.secondary ?? "#C9A84C";
const displayFont = cfg.design?.font ?? cfg.fonts?.display ?? "DM Sans";
const bodyFont = cfg.fonts?.body ?? "DM Sans";
const siteUrl = cfg.meta?.siteUrl ?? cfg.seo?.siteUrl ?? "https://example.de";
const siteTitle = cfg.meta?.title ?? cfg.seo?.defaultTitle ?? cfg.companyName;
const siteDesc = cfg.meta?.description ?? cfg.seo?.defaultDescription ?? "";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: siteTitle, template: `%s | ${cfg.companyName}` },
  description: siteDesc,
  authors: [{ name: cfg.companyName }],
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteUrl,
    title: siteTitle,
    description: siteDesc,
    siteName: cfg.companyName,
  },
  twitter: { card: "summary_large_image", title: siteTitle, description: siteDesc },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const cssVars = `
    :root {
      --color-primary: ${primaryColor};
      --color-secondary: ${accentColor};
      --color-accent: ${accentColor};
      --color-primary-text: #ffffff;
      --color-secondary-text: #8a8a9a;
      --font-display: '${displayFont}';
      --font-body: '${bodyFont}';
    }
  `;

  const googleFontsUrl = `https://fonts.googleapis.com/css2?family=${displayFont.replace(/ /g, "+")}:wght@400;500;600;700;800&family=${bodyFont.replace(/ /g, "+")}:wght@400;500;600&display=swap`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: cfg.companyName,
    description: siteDesc,
    url: siteUrl,
    telephone: cfg.contact?.phone,
    email: cfg.contact?.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: cfg.contact?.address,
      addressLocality: cfg.contact?.city,
      postalCode: cfg.contact?.zip,
      addressCountry: "DE",
    },
  };

  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href={googleFontsUrl} rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: cssVars }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {cfg.analytics?.googleAnalyticsId && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${cfg.analytics.googleAnalyticsId}`} />
            <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${cfg.analytics.googleAnalyticsId}');` }} />
          </>
        )}
      </head>
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
}
