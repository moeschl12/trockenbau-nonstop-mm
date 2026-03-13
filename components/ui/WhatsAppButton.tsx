"use client";

import { siteConfig } from "@/config/siteConfig";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${siteConfig.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="WhatsApp"
    >
      <MessageCircle size={26} />
    </a>
  );
}
