"use client";

import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";
import { CheckCircle2 } from "lucide-react";

export function AboutSection() {
  return (
    <section id="ueber-uns" className="section-padding bg-white dark:bg-gray-950">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
              <Image src={(siteConfig as any).about.image} alt={(siteConfig as any).companyName} fill className="object-cover" />
            </div>
            <div
              className="absolute -bottom-6 -right-6 rounded-2xl p-6 shadow-xl"
              style={{ backgroundColor: "var(--color-secondary)" }}
            >
              <p className="text-3xl font-bold" style={{ color: "var(--color-secondary-text)", fontFamily: "var(--font-display)" }}>
                {(siteConfig as any).foundingYear}
              </p>
              <p className="text-xs font-medium tracking-wide uppercase" style={{ color: "var(--color-secondary-text)", opacity: 0.8 }}>
                Gegründet
              </p>
            </div>
          </div>

          <div>
            <p className="section-eyebrow mb-4">Über uns</p>
            <h2 className="section-title mb-6">{(siteConfig as any).about.title}</h2>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">{(siteConfig as any).about.description}</p>

            <div className="grid grid-cols-3 gap-6 mb-8">
              {(siteConfig as any).about.highlights.map((h: any) => (
                <div key={h.label} className="text-center">
                  <p className="text-3xl font-bold mb-1" style={{ color: "var(--color-secondary)", fontFamily: "var(--font-display)" }}>
                    {h.value}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 tracking-wide uppercase">{h.label}</p>
                </div>
              ))}
            </div>

            <ul className="space-y-3 mb-10">
              {(siteConfig as any).benefits.slice(0, 4).map((b: any) => (
                <li key={b.title} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="flex-shrink-0" style={{ color: "var(--color-secondary)" }} />
                  <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                    {b.title} – {b.description}
                  </span>
                </li>
              ))}
            </ul>

            <a href="#kontakt" className="btn-primary">Jetzt anfragen</a>
          </div>
        </div>
      </div>
    </section>
  );
}
