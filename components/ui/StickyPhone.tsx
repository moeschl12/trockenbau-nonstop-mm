"use client";

import { siteConfig } from "@/config/siteConfig";
import { Phone } from "lucide-react";

export function StickyPhone() {
  return (
    <a
      href={`tel:${siteConfig.phone}`}
      className="fixed bottom-6 left-6 z-50 flex items-center gap-3 rounded-full px-5 py-3 text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
      style={{ backgroundColor: "var(--color-secondary)", color: "var(--color-secondary-text)" }}
      aria-label="Anrufen"
    >
      <Phone size={18} />
      <span className="hidden sm:inline">{siteConfig.phoneDisplay}</span>
    </a>
  );
}
