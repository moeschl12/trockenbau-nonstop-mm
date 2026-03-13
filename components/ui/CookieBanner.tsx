"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookies-accepted");
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookies-accepted", "true");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookies-accepted", "false");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Wir verwenden Cookies, um Ihre Erfahrung zu verbessern.{" "}
            <a href="/datenschutz" className="underline hover:text-gray-900 dark:hover:text-white">
              Datenschutz
            </a>
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button onClick={decline} className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors px-4 py-2">
            Ablehnen
          </button>
          <button onClick={accept} className="btn-primary text-sm px-6 py-2">
            Akzeptieren
          </button>
          <button onClick={decline} className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
