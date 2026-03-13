"use client";

import { useState } from "react";
import { siteConfig } from "@/config/siteConfig";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="kontakt" className="section-padding bg-white dark:bg-gray-950">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="section-eyebrow mb-4">Kontakt</p>
          <h2 className="section-title mb-6">Jetzt anfragen</h2>
          <p className="section-subtitle mx-auto">
            Kontaktieren Sie uns – wir melden uns innerhalb von 24 Stunden bei Ihnen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
                style={{ fontFamily: "var(--font-display)" }}>
                Wir sind für Sie da
              </h3>

              <div className="space-y-5">
                <a href={`tel:${(siteConfig as any).phone}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-gray-900 hover:shadow-md transition-all duration-200 group">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "color-mix(in srgb, var(--color-secondary) 12%, transparent)" }}>
                    <Phone size={20} style={{ color: "var(--color-secondary)" }} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Telefon</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{(siteConfig as any).phoneDisplay}</p>
                  </div>
                </a>

                {(siteConfig as any).whatsapp && (
                  <a href={`https://wa.me/${(siteConfig as any).whatsapp}`} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-gray-900 hover:shadow-md transition-all duration-200 group">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-green-100 dark:bg-green-900/30">
                      <MessageCircle size={20} className="text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">WhatsApp</p>
                      <p className="font-semibold text-gray-900 dark:text-white">Jetzt schreiben</p>
                    </div>
                  </a>
                )}

                <a href={`mailto:${(siteConfig as any).email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-gray-900 hover:shadow-md transition-all duration-200">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "color-mix(in srgb, var(--color-secondary) 12%, transparent)" }}>
                    <Mail size={20} style={{ color: "var(--color-secondary)" }} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">E-Mail</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{(siteConfig as any).email}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-gray-900">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "color-mix(in srgb, var(--color-secondary) 12%, transparent)" }}>
                    <MapPin size={20} style={{ color: "var(--color-secondary)" }} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Adresse</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{(siteConfig as any).address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900">
              <div className="flex items-center gap-2 mb-4">
                <Clock size={16} style={{ color: "var(--color-secondary)" }} />
                <h4 className="font-semibold text-gray-900 dark:text-white text-sm uppercase tracking-wide">Öffnungszeiten</h4>
              </div>
              <ul className="space-y-2">
                {(siteConfig as any).openingHours.map((oh) => (
                  <li key={oh.day} className="flex justify-between text-sm">
                    <span className="text-gray-500">{oh.day}</span>
                    <span className="font-medium text-gray-900 dark:text-white">{oh.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="card p-8">
            {status === "success" ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "color-mix(in srgb, var(--color-secondary) 15%, transparent)" }}>
                  <Send size={24} style={{ color: "var(--color-secondary)" }} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Nachricht gesendet!</h3>
                <p className="text-gray-500">Wir melden uns so schnell wie möglich bei Ihnen.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name *</label>
                    <input
                      type="text" required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 transition-all"
                      style={{ "--tw-ring-color": "var(--color-secondary)" } as any}
                      placeholder="Max Mustermann"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Telefon</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 transition-all"
                      placeholder="+49 123 456789"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">E-Mail *</label>
                  <input
                    type="email" required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 transition-all"
                    placeholder="max@beispiel.de"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nachricht *</label>
                  <textarea
                    required rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 transition-all resize-none"
                    placeholder="Beschreiben Sie Ihr Anliegen..."
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-500 text-sm">Fehler beim Senden. Bitte versuchen Sie es erneut.</p>
                )}

                <button type="submit" disabled={status === "loading"} className="btn-primary w-full justify-center">
                  {status === "loading" ? "Wird gesendet..." : (
                    <><Send size={16} /> Nachricht senden</>
                  )}
                </button>

                <p className="text-xs text-gray-400 text-center">
                  Mit dem Absenden stimmen Sie unserer{" "}
                  <a href="/datenschutz" className="underline hover:text-gray-600">Datenschutzerklärung</a> zu.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
