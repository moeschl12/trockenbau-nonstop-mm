import { siteConfig } from "@/config/siteConfig";
import { getServices } from "@/sanity/lib/queries";
import { ArrowRight, Hammer, Wrench, Home, Paintbrush, Building2, ShieldCheck, Award, Clock, MapPin, Zap, Leaf, Truck, Sparkles, Grid3x3 } from "lucide-react";

const iconMap: Record<string, any> = {
  Hammer, Wrench, Home, Paintbrush, Building2, ShieldCheck,
  Award, Clock, MapPin, Zap, Leaf, Truck, Sparkles, Grid3x3,
};

export async function ServicesSection() {
  let services = await getServices().catch(() => []);
  if (!services || services.length === 0) {
    services = (siteConfig as any).services.map((s) => ({
      _id: s.id,
      name: s.name,
      shortDesc: s.shortDesc,
      description: s.description,
      icon: s.icon,
      image: s.image,
    }));
  }

  return (
    <section id="leistungen" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="section-eyebrow mb-4">Was wir anbieten</p>
          <h2 className="section-title mb-6">Unsere Leistungen</h2>
          <p className="section-subtitle mx-auto">
            Professionelle Ausführung, faire Preise und zuverlässiger Service – alles aus einer Hand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service: any) => {
            const Icon = iconMap[service.icon] || Hammer;
            return (
              <article key={service._id} className="card p-8 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: "color-mix(in srgb, var(--color-secondary) 12%, transparent)" }}>
                  <Icon size={24} style={{ color: "var(--color-secondary)" }} className="group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3" style={{ fontFamily: "var(--font-display)" }}>
                  {service.name}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">{service.shortDesc}</p>
                <div className="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all duration-200" style={{ color: "var(--color-secondary)" }}>
                  Mehr erfahren <ArrowRight size={16} />
                </div>
              </article>
            );
          })}
        </div>

        <div className="text-center mt-14">
          <a href="#kontakt" className="btn-primary">Alle Leistungen anfragen</a>
        </div>
      </div>
    </section>
  );
}
