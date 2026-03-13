import type { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  robots: { index: false, follow: false },
};

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2"
          style={{ fontFamily: "var(--font-display)" }}>
          Datenschutzerklärung
        </h1>
        <p className="text-gray-500 mb-12 text-sm">Stand: {new Date().getFullYear()}</p>

        <div className="space-y-10 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">1. Verantwortlicher</h2>
            <p>
              Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:<br /><br />
              <strong>{(siteConfig as any).companyName}</strong><br />
              {(siteConfig as any).contact?.address}<br />
              Telefon: {(siteConfig as any).contact?.phoneDisplay}<br />
              E-Mail: {(siteConfig as any).contact?.email}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">2. Erhebung und Verarbeitung personenbezogener Daten</h2>
            <p>
              Wir erheben personenbezogene Daten nur, wenn Sie uns diese im Rahmen der Nutzung unserer Website
              freiwillig mitteilen, z. B. bei der Nutzung des Kontaktformulars. Wir verwenden Ihre Daten
              ausschließlich zur Bearbeitung Ihrer Anfrage.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">3. Kontaktformular</h2>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular
              inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall
              von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">4. Cookies</h2>
            <p>
              Unsere Website verwendet Cookies. Dabei handelt es sich um kleine Textdateien, die Ihr Webbrowser
              auf Ihrem Endgerät speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver
              und sicherer zu machen. Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies
              informiert werden und Cookies nur im Einzelfall erlauben.
            </p>
          </section>

          {(siteConfig as any).analytics?.googleAnalyticsId && (
            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">5. Google Analytics</h2>
              <p>
                Diese Website nutzt Google Analytics, einen Webanalysedienst der Google LLC. Google Analytics
                verwendet Cookies, die eine Analyse der Benutzung der Website ermöglichen. Die durch den Cookie
                erzeugten Informationen werden an einen Server von Google übertragen und dort gespeichert.
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Sie können die Erfassung durch
                Google Analytics verhindern, indem Sie auf den entsprechenden Link im Cookie-Banner klicken.
              </p>
            </section>
          )}

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{(siteConfig as any).analytics?.googleAnalyticsId ? "6." : "5."} Ihre Rechte</h2>
            <p className="mb-3">Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
            </ul>
            <p className="mt-3">
              Bei Fragen wenden Sie sich an:{" "}
              <a href={`mailto:${(siteConfig as any).contact?.email}`} className="hover:underline" style={{ color: "var(--color-secondary)" }}>
                {(siteConfig as any).contact?.email}
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{(siteConfig as any).analytics?.googleAnalyticsId ? "7." : "6."} Beschwerderecht</h2>
            <p>
              Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer
              personenbezogenen Daten durch uns zu beschweren.
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
