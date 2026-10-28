import { useEffect, useRef } from "react";
import { X, ExternalLink, Code2, Check } from "lucide-react";
import { GithubIcon } from "./BrandIcons";

export default function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!project) return null;

  const isGithubPlaceholder = !project.github || project.github.includes("PLACEHOLDER");
  const isDemoPlaceholder = !project.liveDemo || project.liveDemo.includes("PLACEHOLDER");

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      style={{
        backgroundColor: "rgba(106, 46, 217, 0.65)",
        backdropFilter: "blur(6px)",
      }}
    >
      <div
        className="relative w-full max-w-3xl rounded-3xl border overflow-hidden animate-[modalIn_0.3s_ease] my-8"
        style={{
          backgroundColor: "#FFFFFF",
          borderColor: "#F3DCCB",
          boxShadow: "0 25px 50px -12px rgba(106, 46, 217, 0.35)",
        }}
      >
        {/* CLOSE BUTTON */}
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close project details"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200 cursor-pointer shadow-xs"
          style={{
            backgroundColor: "#FFFFFF",
            borderColor: "#F3DCCB",
            color: "#6A2ED9",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#FFF8D6";
            e.currentTarget.style.color = "#FF6B6B";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#FFFFFF";
            e.currentTarget.style.color = "#6A2ED9";
          }}
        >
          <X size={17} />
        </button>

        {/* IMAGE / BANNER AREA */}
        <div
          className="aspect-video sm:aspect-[21/9] border-b relative overflow-hidden"
          style={{
            backgroundColor: "#FFF8D6",
            borderColor: "#F3DCCB",
          }}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-2 p-6 text-center">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center border shadow-xs"
                style={{
                  backgroundColor: "#FFF2D1",
                  borderColor: "#F3DCCB",
                  color: "#6A2ED9",
                }}
              >
                <Code2 size={24} />
              </div>
              <h4 className="font-display font-bold text-lg" style={{ color: "#1F2937" }}>
                {project.title}
              </h4>
              <span className="font-mono text-xs uppercase" style={{ color: "#64748B" }}>
                {project.type}
              </span>
            </div>
          )}
        </div>

        {/* MODAL BODY */}
        <div className="p-6 sm:p-8 max-h-[72vh] overflow-y-auto">
          <div className="flex items-center gap-2 mb-3">
            <span
              className="font-mono text-xs font-semibold px-2.5 py-1 rounded-full uppercase border"
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
            id="project-modal-title"
            className="font-display font-bold text-2xl sm:text-3xl mb-4 tracking-tight"
            style={{ color: "#1F2937" }}
          >
            {project.title}
          </h3>

          <p className="text-sm sm:text-base leading-relaxed mb-6" style={{ color: "#64748B" }}>
            {project.longDescription || project.description}
          </p>

          {/* PROBLEM & SOLUTION */}
          {(project.problem || project.solution) && (
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {project.problem && (
                <div
                  className="rounded-xl border p-4.5"
                  style={{ backgroundColor: "#FFFBF0", borderColor: "#F3DCCB" }}
                >
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-wider mb-1.5" style={{ color: "#FF6B6B" }}>
                    The Challenge
                  </p>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "#64748B" }}>
                    {project.problem}
                  </p>
                </div>
              )}
              {project.solution && (
                <div
                  className="rounded-xl border p-4.5"
                  style={{ backgroundColor: "#FFFBF0", borderColor: "#F3DCCB" }}
                >
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-wider mb-1.5" style={{ color: "#6A2ED9" }}>
                    The Solution
                  </p>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "#64748B" }}>
                    {project.solution}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* FEATURES */}
          {project.features && project.features.length > 0 && (
            <div className="mb-6">
              <p className="font-mono text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "#1F2937" }}>
                Key Capabilities
              </p>
              <ul className="grid sm:grid-cols-2 gap-2.5">
                {project.features.map((f) => (
                  <li
                    key={f}
                    className="text-xs sm:text-sm flex items-start gap-2.5 p-2 rounded-lg border"
                    style={{
                      backgroundColor: "#FFFBF0",
                      borderColor: "#F3DCCB",
                      color: "#64748B",
                    }}
                  >
                    <Check size={14} className="mt-0.5 shrink-0" style={{ color: "#FF6B6B" }} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CHALLENGES & LEARNED */}
          {(project.challenges || project.learned) && (
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {project.challenges && (
                <div
                  className="rounded-xl border p-4.5"
                  style={{ backgroundColor: "#FFFBF0", borderColor: "#F3DCCB" }}
                >
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-wider mb-1.5" style={{ color: "#FF6B6B" }}>
                    Technical Obstacles
                  </p>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "#64748B" }}>
                    {project.challenges}
                  </p>
                </div>
              )}
              {project.learned && (
                <div
                  className="rounded-xl border p-4.5"
                  style={{ backgroundColor: "#FFFBF0", borderColor: "#F3DCCB" }}
                >
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-wider mb-1.5" style={{ color: "#6A2ED9" }}>
                    Key Takeaways
                  </p>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "#64748B" }}>
                    {project.learned}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* TECH STACK */}
          <div className="mb-8">
            <p className="font-mono text-xs font-semibold uppercase tracking-wider mb-2.5" style={{ color: "#1F2937" }}>
              Built With
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="font-mono text-xs font-medium px-3 py-1 rounded-md border"
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
          </div>

          {/* ACTIONS */}
          <div
            className="pt-6 border-t flex flex-wrap items-center justify-between gap-4"
            style={{ borderColor: "#F3DCCB" }}
          >
            <a
              href={isGithubPlaceholder ? "https://github.com/Narayanraiyt9616" : project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-xs border transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              style={{
                backgroundColor: "#FFFFFF",
                borderColor: "#F3DCCB",
                color: "#6A2ED9",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#FFF8D6";
                e.currentTarget.style.borderColor = "#FF6B6B";
                e.currentTarget.style.color = "#FF6B6B";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#FFFFFF";
                e.currentTarget.style.borderColor = "#F3DCCB";
                e.currentTarget.style.color = "#6A2ED9";
              }}
            >
              <GithubIcon size={15} />
              <span>Source Repository</span>
            </a>

            {!isDemoPlaceholder && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-medium text-xs text-white transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                style={{
                  backgroundColor: "#FF6B6B",
                  boxShadow: "0 4px 14px 0 rgba(255, 107, 107, 0.35)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#E05353")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FF6B6B")}
              >
                <span>Launch Live Demo</span>
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
