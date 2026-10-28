import { useMemo, useState } from "react";
import { projects, filterCategories } from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section id="projects" className="py-12 sm:py-16" style={{ backgroundColor: "#FFF8D6" }}>
      <div className="container-max px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            path="projects"
            title="Featured Projects"
            subtitle="Full-stack web applications, interactive frontend interfaces, and scalable backend services."
          />
        </Reveal>

        {/* CATEGORY FILTER TABS */}
        <Reveal className="flex flex-wrap items-center gap-2 mb-6 sm:mb-8">
          {filterCategories.map((cat) => {
            const count = cat === "All" ? projects.length : projects.filter((p) => p.category === cat).length;
            const isActive = active === cat;

            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="font-mono text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-200 flex items-center gap-2 shadow-2xs hover:-translate-y-0.5 cursor-pointer"
                style={
                  isActive
                    ? {
                        backgroundColor: "#FF6B6B",
                        borderColor: "#FF6B6B",
                        color: "#FFFFFF",
                        boxShadow: "0 4px 12px rgba(255, 107, 107, 0.3)",
                      }
                    : {
                        backgroundColor: "#FFFFFF",
                        borderColor: "#F3DCCB",
                        color: "#6A2ED9",
                      }
                }
              >
                <span>{cat}</span>
                <span
                  className="w-4 h-4 rounded-full flex items-center justify-center text-[10px]"
                  style={
                    isActive
                      ? { backgroundColor: "#FFFFFF", color: "#FF6B6B" }
                      : { backgroundColor: "#FFF2D1", color: "#6A2ED9" }
                  }
                >
                  {count}
                </span>
              </button>
            );
          })}
        </Reveal>

        {/* PROJECTS GRID */}
        {filtered.length === 0 ? (
          <div
            className="rounded-2xl border p-12 text-center"
            style={{ backgroundColor: "#FFFFFF", borderColor: "#F3DCCB" }}
          >
            <p className="font-mono text-sm" style={{ color: "#64748B" }}>
              No projects in this category yet — check back soon.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <div key={project.id} className="h-full">
                <Reveal className="h-full">
                  <ProjectCard
                    project={project}
                    onViewDetails={setSelected}
                  />
                </Reveal>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* DETAIL MODAL */}
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
