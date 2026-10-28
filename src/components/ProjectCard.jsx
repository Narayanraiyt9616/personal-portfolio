import { ExternalLink, ArrowUpRight, Code2 } from "lucide-react";
import { GithubIcon } from "./BrandIcons";

function ImageBlock({ project }) {
  return (
    <div
      className="relative overflow-hidden aspect-video border-b"
      style={{
        backgroundColor: "#FFF8D6",
        borderColor: "#F3DCCB",
      }}
    >
      {project.image ? (
        <img
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="w-full h-full flex flex-col justify-between p-4 relative">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#F3DCCB" }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#F3DCCB" }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#F3DCCB" }} />
          </div>

          <div className="flex flex-col items-center justify-center my-auto text-center">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-2 border shadow-xs"
              style={{
                backgroundColor: "#FFF2D1",
                borderColor: "#F3DCCB",
                color: "#6A2ED9",
              }}
            >
              <Code2 size={24} />
            </div>
            <span className="font-display font-semibold text-sm" style={{ color: "#1F2937" }}>
              {project.title}
            </span>
            <span className="font-mono text-[11px]" style={{ color: "#64748B" }}>
              {project.type}
            </span>
          </div>

          <div className="flex justify-between items-center text-[11px] font-mono" style={{ color: "#64748B" }}>
            <span>src/projects</span>
            <span className="uppercase font-semibold" style={{ color: "#FF6B6B" }}>{project.category}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ProjectCard({ project, onViewDetails }) {
  const isGithubPlaceholder = !project.github || project.github.includes("PLACEHOLDER");
  const isDemoPlaceholder = !project.liveDemo || project.liveDemo.includes("PLACEHOLDER");

  return (
    <article
      className="lift-card group rounded-2xl border overflow-hidden flex flex-col h-full"
      style={{
        backgroundColor: "#FFFFFF",
        borderColor: "#F3DCCB",
        boxShadow: "0 4px 20px -2px rgba(106, 46, 217, 0.05)",
      }}
    >
      <ImageBlock project={project} />

      <div className="flex flex-col flex-1 p-5 sm:p-6">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span
            className="font-mono text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider border"
            style={{
              backgroundColor: "#FFF2D1",
              borderColor: "#F3DCCB",
              color: "#6A2ED9",
            }}
          >
            {project.category}
          </span>
          <span className="text-xs font-mono" style={{ color: "#64748B" }}>
            {project.type}
          </span>
        </div>

        <h3
          className="font-display font-bold text-xl sm:text-2xl mb-2.5 tracking-tight group-hover:text-[#FF6B6B] transition-colors"
          style={{ color: "#1F2937" }}
        >
          {project.title}
        </h3>

        <p className="text-sm leading-relaxed mb-5 line-clamp-3" style={{ color: "#64748B" }}>
          {project.description}
        </p>

        {/* TECH TAGS */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.map((t) => (
            <span
              key={t}
              className="font-mono text-[11px] font-medium px-2.5 py-1 rounded-md border"
              style={{
                backgroundColor: "#FFF8D6",
                borderColor: "#F3DCCB",
                color: "#6A2ED9",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* FOOTER ACTIONS */}
        <div
          className="mt-auto pt-4 border-t flex flex-wrap items-center justify-between gap-3"
          style={{ borderColor: "#F3DCCB" }}
        >
          <div className="flex items-center gap-3">
            <a
              href={isGithubPlaceholder ? "https://github.com/Narayanraiyt9616" : project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub source for ${project.title}`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors link-underline"
              style={{ color: "#6A2ED9" }}
            >
              <GithubIcon size={14} />
              <span>GitHub</span>
            </a>

            <a
              href={isDemoPlaceholder ? "#" : project.liveDemo}
              target={isDemoPlaceholder ? "_self" : "_blank"}
              rel="noopener noreferrer"
              onClick={isDemoPlaceholder ? (e) => { e.preventDefault(); onViewDetails(project); } : undefined}
              aria-label={`Live demo for ${project.title}`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors link-underline"
              style={{ color: "#6A2ED9" }}
            >
              <ExternalLink size={14} />
              <span>Live Demo</span>
            </a>
          </div>

          <button
            onClick={() => onViewDetails(project)}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-white transition-all duration-200 cursor-pointer"
            style={{
              backgroundColor: "#FF6B6B",
              boxShadow: "0 2px 8px rgba(255, 107, 107, 0.3)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#E05353")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FF6B6B")}
          >
            <span>Details</span>
            <ArrowUpRight size={13} />
          </button>
        </div>
      </div>
    </article>
  );
}
