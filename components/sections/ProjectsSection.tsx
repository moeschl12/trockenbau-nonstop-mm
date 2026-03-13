import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";
import { getProjects } from "@/sanity/lib/queries";
import { ArrowRight } from "lucide-react";

export async function ProjectsSection() {
  let projects = await getProjects().catch(() => []);
  if (!projects || projects.length === 0) {
    projects = (siteConfig as any).projects.map((p) => ({
      _id: p.id,
      title: p.title,
      description: p.description,
      category: p.category,
      image: p.image,
    }));
  }

  return (
    <section id="projekte" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="section-eyebrow mb-4">Unsere Arbeit</p>
          <h2 className="section-title mb-6">Ausgewählte Projekte</h2>
          <p className="section-subtitle mx-auto">
            Überzeugen Sie sich von unserer Qualität – hier sind einige unserer abgeschlossenen Projekte.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project: any) => (
            <article key={project._id} className="group rounded-2xl overflow-hidden bg-white dark:bg-gray-900 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              {project.image && (
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              )}
              <div className="p-6">
                {project.category && (
                  <span className="text-xs font-semibold tracking-widest uppercase mb-3 block" style={{ color: "var(--color-secondary)" }}>
                    {project.category}
                  </span>
                )}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2" style={{ fontFamily: "var(--font-display)" }}>
                  {project.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all duration-200" style={{ color: "var(--color-secondary)" }}>
                  Details ansehen <ArrowRight size={16} />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-14">
          <a href="#kontakt" className="btn-primary">Ihr Projekt anfragen</a>
        </div>
      </div>
    </section>
  );
}
