"use client";

import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";
import { Phone, ArrowDown, MessageCircle } from "lucide-react";

export function HeroSection() {
  const { heroStyle } = (siteConfig as any).layout;

  if (heroStyle === "minimal") {
    return (
      <section className="pt-32 pb-20 bg-white dark:bg-gray-950">
        <div className="section-container text-center">
          <p className="section-eyebrow mb-4">{(siteConfig as any).industry}</p>
          <h1 className="section-title mb-6">{(siteConfig as any).tagline}</h1>
          <p className="section-subtitle mx-auto mb-10">{(siteConfig as any).description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#kontakt" className="btn-primary">Kostenlos anfragen</a>
            <a href={`tel:${(siteConfig as any).phone}`} className="btn-secondary">
              <Phone size={18} />{(siteConfig as any).phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    );
  }

  if (heroStyle === "split") {
    return (
      <section className="min-h-screen flex items-center pt-20 bg-white dark:bg-gray-950">
        <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-eyebrow mb-4">{(siteConfig as any).industry} · {(siteConfig as any).city}</p>
            <h1 className="section-title mb-6">{(siteConfig as any).tagline}</h1>
            <p className="section-subtitle mb-10">{(siteConfig as any).description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#kontakt" className="btn-primary">Kostenlos anfragen</a>
              <a href={`tel:${(siteConfig as any).phone}`} className="btn-secondary">
                <Phone size={18} />{(siteConfig as any).phoneDisplay}
              </a>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden aspect-square">
            <Image src={(siteConfig as any).about.image} alt={(siteConfig as any).companyName} fill className="object-cover" priority />
          </div>
        </div>
      </section>
    );
  }

  // Default: fullscreen
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src={(siteConfig as any).about.image} alt={(siteConfig as any).companyName} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-950/75 to-gray-950/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 section-container w-full pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-3xl">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8"
            style={{ backgroundColor: "color-mix(in srgb, var(--color-secondary) 15%, transparent)", border: "1px solid color-mix(in srgb, var(--color-secondary) 30%, transparent)" }}
          >
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "var(--color-secondary)" }} />
            <span className="text-sm font-medium tracking-wide" style={{ color: "var(--color-secondary)" }}>
              {(siteConfig as any).industry} · {(siteConfig as any).city}
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "var(--font-display)" }}>
            {(siteConfig as any).tagline.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-gradient">{(siteConfig as any).tagline.split(" ").slice(-1)}</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl mb-10">
            {(siteConfig as any).description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a href="#kontakt" className="btn-primary text-base px-10 py-4">Kostenlos anfragen</a>
            {(siteConfig as any).whatsapp && (
              <a
                href={`https://wa.me/${(siteConfig as any).whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-base px-10 py-4 !text-white !border-white/30 hover:!border-white"
              >
                <MessageCircle size={18} />WhatsApp
              </a>
            )}
          </div>

          <div className="flex flex-wrap gap-8">
            {(siteConfig as any).about.highlights.map((h: any) => (
              <div key={h.label} className="flex flex-col">
                <span className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>{h.value}</span>
                <span className="text-xs text-gray-400 tracking-wide uppercase">{h.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a href="#leistungen" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors">
        <span className="text-xs tracking-widest uppercase">Entdecken</span>
        <ArrowDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
}
