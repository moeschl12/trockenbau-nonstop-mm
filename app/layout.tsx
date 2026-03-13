import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  metadataBase: new URL((siteConfig as any).seo.siteUrl),
  title: {
    default: (siteConfig as any).seo.defaultTitle,
    template: (siteConfig as any).seo.titleTemplate,
  },
  description: (siteConfig as any).seo.defaultDescription,
  keywords: (siteConfig as any).seo.keywords,
  authors: [{ name: siteConfig.companyName }],
  openGraph: {
    type: "website",
    locale: (siteConfig as any).seo.locale,
    url: (siteConfig as any).seo.siteUrl,
    title: (siteConfig as any).seo.defaultTitle,
    description: (siteConfig as any).seo.defaultDescription,
    siteName: siteConfig.companyName,
    images: [{ url: (siteConfig as any).seo.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: (siteConfig as any).seo.defaultTitle,
    description: (siteConfig as any).seo.defaultDescription,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { colors, fonts } = siteConfig;

  const cssVars = `
    :root {
      --color-primary: ${colors.primary};
      --color-secondary: ${colors.secondary};
      --color-accent: ${colors.accent};
      --color-primary-text: ${colors.primaryText};
      --color-secondary-text: ${colors.secondaryText};
      --font-display: '${fonts.display}';
      --font-body: '${fonts.body}';
    }
  `;

  const googleFontsUrl = `https://fonts.googleapis.com/css2?family=${fonts.display.replace(/ /g, "+")}:wght@400;500;600;700;800&family=${fonts.body.replace(/ /g, "+")}:wght@400;500;600&display=swap`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": (siteConfig as any).schema.type,
    name: siteConfig.companyName,
    description: (siteConfig as any).description,
    url: (siteConfig as any).seo.siteUrl,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address,
      addressLocality: (siteConfig as any).city,
      addressRegion: (siteConfig as any).region,
      addressCountry: "DE",
    },
    areaServed: (siteConfig as any).schema.areaServed,
    priceRange: (siteConfig as any).schema.priceRange,
    foundingDate: (siteConfig as any).foundingYear,
  };

  return (
    <html lang={(siteConfig as any).language.default} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href={googleFontsUrl} rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: cssVars }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {siteConfig.analytics.googleAnalyticsId && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.analytics.googleAnalyticsId}`} />
            <script dangerouslySetInnerHTML={{
              __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${siteConfig.analytics.googleAnalyticsId}');`
            }} />
          </>
        )}
      </head>
      <body className={`min-h-screen ${(siteConfig as any).darkMode ? "dark" : ""}`}>
        {children}
      </body>
    </html>
  );
}
