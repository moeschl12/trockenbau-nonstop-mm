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

const { sections } = siteConfig;

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {sections.hero && <HeroSection />}
        {sections.services && <ServicesSection />}
        {sections.about && <AboutSection />}
        {sections.projects && <ProjectsSection />}
        {sections.contact && <ContactSection />}
      </main>
      <Footer />
      {siteConfig.whatsapp && <WhatsAppButton />}
      <StickyPhone />
      <CookieBanner />
    </>
  );
}
