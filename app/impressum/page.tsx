import type { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false, follow: false },
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2"
          style={{ fontFamily: "var(--font-display)" }}>
          Impressum
        </h1>
        <p className="text-gray-500 mb-12 text-sm">Angaben gemäß § 5 TMG</p>

        <div className="space-y-10 text-gray-700 dark:text-gray-300">

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Anbieter</h2>
            <p>{siteConfig.companyName}</p>
            <p>{siteConfig.contact?.address}</p>
            <p className="mt-3">
              <strong>Telefon:</strong>{" "}
              <a href={`tel:${siteConfig.contact?.phone}`} className="hover:underline" style={{ color: "var(--color-secondary)" }}>
                {siteConfig.contact?.phoneDisplay}
              </a>
            </p>
            <p>
              <strong>E-Mail:</strong>{" "}
              <a href={`mailto:${siteConfig.contact?.email}`} className="hover:underline" style={{ color: "var(--color-secondary)" }}>
                {siteConfig.contact?.email}
              </a>
            </p>
            {(siteConfig as any).website && (
              <p>
                <strong>Website:</strong>{" "}
                <a href={(siteConfig as any).website ?? ""} className="hover:underline" style={{ color: "var(--color-secondary)" }}>
                  {(siteConfig as any).website ?? ""}
                </a>
              </p>
            )}
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Verantwortlich für den Inhalt</h2>
            <p>{siteConfig.companyName}</p>
            <p>{siteConfig.contact?.address}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Haftungsausschluss</h2>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Haftung für Inhalte</h3>
            <p className="text-sm leading-relaxed mb-4">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
              allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
              zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Haftung für Links</h3>
            <p className="text-sm leading-relaxed">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
              verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Urheberrecht</h2>
            <p className="text-sm leading-relaxed">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>

        </div>

        <div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-800">
          <a href="/" className="text-sm font-medium hover:underline" style={{ color: "var(--color-secondary)" }}>
            ← Zurück zur Startseite
          </a>
        </div>
      </div>
    </main>
  );
}
