import { siteConfig } from "@/config/siteConfig";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { StickyPhone } from "@/components/ui/StickyPhone";
import { CookieBanner } from "@/components/ui/CookieBanner";

const cfg = siteConfig as any;
const sections = cfg.sections ?? { hero: true, services: true, about: true, projects: true, contact: true };

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {sections.hero !== false && <HeroSection />}
        {sections.services !== false && <ServicesSection />}
        {sections.about !== false && <AboutSection />}
        {sections.projects !== false && <ProjectsSection />}
        {sections.contact !== false && <ContactSection />}
      </main>
      <Footer />
      {cfg.contact?.whatsapp && <WhatsAppButton />}
      <StickyPhone />
      <CookieBanner />
    </>
  );
}
