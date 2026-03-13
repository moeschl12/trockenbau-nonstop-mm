import { siteConfig } from "@/config/siteConfig";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Footer() {
  const { footerStyle } = (siteConfig as any).layout;

  if (footerStyle === "simple") {
    return (
      <footer className="bg-gray-950 text-gray-400 py-8">
        <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">© {new Date().getFullYear()} {(siteConfig as any).companyName}. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <a href="/impressum" className="text-sm hover:text-white transition-colors">Impressum</a>
            <a href="/datenschutz" className="text-sm hover:text-white transition-colors">Datenschutz</a>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="section-container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center font-bold flex-shrink-0"
                style={{ backgroundColor: "var(--color-secondary)", color: "var(--color-secondary-text)" }}
              >
                {(siteConfig as any).logo.text}
              </div>
              <span className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-display)" }}>
                {(siteConfig as any).companyName}
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">{(siteConfig as any).description}</p>
          </div>

          {(siteConfig as any).sections.services && (
            <div>
              <h3 className="text-white font-semibold mb-6 text-sm tracking-widest uppercase">Leistungen</h3>
              <ul className="space-y-3">
                {(siteConfig as any).services.slice(0, 5).map((service: any) => (
                  <li key={service.title}>
                    <a href="#leistungen" className="text-sm text-gray-500 hover:text-white transition-colors">
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h3 className="text-white font-semibold mb-6 text-sm tracking-widest uppercase">Kontakt</h3>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${(siteConfig as any).phone}`} className="flex items-start gap-3 text-sm text-gray-500 hover:text-white transition-colors">
                  <Phone size={16} className="mt-0.5 flex-shrink-0" style={{ color: "var(--color-secondary)" }} />
                  {(siteConfig as any).phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${(siteConfig as any).email}`} className="flex items-start gap-3 text-sm text-gray-500 hover:text-white transition-colors">
                  <Mail size={16} className="mt-0.5 flex-shrink-0" style={{ color: "var(--color-secondary)" }} />
                  {(siteConfig as any).email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-500">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" style={{ color: "var(--color-secondary)" }} />
                {(siteConfig as any).address}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 text-sm tracking-widest uppercase">Öffnungszeiten</h3>
            <ul className="space-y-3">
              {(siteConfig as any).openingHours.map((oh: any) => (
                <li key={oh.day} className="flex items-start gap-2">
                  <Clock size={14} className="mt-1 flex-shrink-0" style={{ color: "var(--color-secondary)" }} />
                  <div>
                    <span className="text-xs text-gray-500 block">{oh.day}</span>
                    <span className="text-sm text-white">{oh.hours}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="section-container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">© {new Date().getFullYear()} {(siteConfig as any).companyName}. Alle Rechte vorbehalten.</p>
          <div className="flex items-center gap-6">
            <a href="/impressum" className="text-xs text-gray-600 hover:text-white transition-colors">Impressum</a>
            <a href="/datenschutz" className="text-xs text-gray-600 hover:text-white transition-colors">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
