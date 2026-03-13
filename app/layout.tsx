import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.siteUrl),
  title: {
    default: siteConfig.seo.defaultTitle,
    template: siteConfig.seo.titleTemplate,
  },
  description: siteConfig.seo.defaultDescription,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: siteConfig.companyName }],
  openGraph: {
    type: "website",
    locale: siteConfig.seo.locale,
    url: siteConfig.seo.siteUrl,
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    siteName: siteConfig.companyName,
    images: [{ url: siteConfig.seo.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
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
    "@type": siteConfig.schema.type,
    name: siteConfig.companyName,
    description: siteConfig.description,
    url: siteConfig.seo.siteUrl,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address,
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.region,
      addressCountry: "DE",
    },
    areaServed: siteConfig.schema.areaServed,
    priceRange: siteConfig.schema.priceRange,
    foundingDate: siteConfig.foundingYear,
  };

  return (
    <html lang={siteConfig.language.default} suppressHydrationWarning>
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
      <body className={`min-h-screen ${siteConfig.darkMode ? "dark" : ""}`}>
        {children}
      </body>
    </html>
  );
}
