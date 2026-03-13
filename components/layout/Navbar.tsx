"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Leistungen", href: "#leistungen", show: (siteConfig as any).sections.services },
  { label: "Über uns", href: "#ueber-uns", show: (siteConfig as any).sections.about },
  { label: "Projekte", href: "#projekte", show: (siteConfig as any).sections.projects },
  { label: "Kontakt", href: "#kontakt", show: (siteConfig as any).sections.contact },
].filter((l) => l.show);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-950/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="section-container flex items-center justify-between h-16 lg:h-20">
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm transition-transform duration-300 group-hover:scale-110"
            style={{ backgroundColor: "var(--color-secondary)", color: "var(--color-secondary-text)" }}
          >
            {(siteConfig as any).logo.text}
          </div>
          <span className={`font-bold text-lg transition-colors duration-300 ${scrolled ? "text-gray-900 dark:text-white" : "text-white"}`}
            style={{ fontFamily: "var(--font-display)" }}>
            {(siteConfig as any).companyName}
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link: any) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link ${!scrolled ? "!text-white/80 hover:!text-white" : ""}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a href={`tel:${(siteConfig as any).phone}`} className="btn-primary text-sm px-6 py-3">
            <Phone size={16} />
            {(siteConfig as any).phoneDisplay}
          </a>
        </div>

        <button
          className={`lg:hidden p-2 rounded-full transition-colors ${scrolled ? "text-gray-900 dark:text-white" : "text-white"}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 px-4 py-6 space-y-4">
          {navLinks.map((link: any) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-gray-700 dark:text-gray-300 font-medium py-2"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href={`tel:${(siteConfig as any).phone}`} className="btn-primary w-full justify-center mt-4">
            <Phone size={16} />
            {(siteConfig as any).phoneDisplay}
          </a>
        </div>
      )}
    </header>
  );
}
