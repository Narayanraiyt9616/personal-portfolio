import { ArrowRight, GitBranch, GitCommit, GitPullRequest } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { socials } from "../data/socials";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function GithubSection() {
  const cols = 28;
  const rows = 4;
  const cells = Array.from({ length: cols * rows }, (_, i) => i);

  // Sunset Dream shades for contribution visualization
  const shades = ["#FFF8D6", "#FFF2D1", "#F3DCCB", "#FFC857", "#FF6B6B", "#6A2ED9"];

  return (
    <section className="py-20 sm:py-28" style={{ backgroundColor: "#FFF8D6" }}>
      <div className="container-max px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            path="open-source"
            title="Open Source & GitHub Activity"
            subtitle="Explore my repository codebases, active experiments, and development workflow."
          />
        </Reveal>

        <Reveal>
          <div
            className="rounded-2xl border p-7 sm:p-9"
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "#F3DCCB",
              boxShadow: "0 4px 20px -2px rgba(106, 46, 217, 0.05)",
            }}
          >
            {/* GITHUB HEADER */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b" style={{ borderColor: "#F3DCCB" }}>
              <div className="flex items-center gap-3.5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center border shadow-xs"
                  style={{
                    backgroundColor: "#6A2ED9",
                    borderColor: "#F3DCCB",
                    color: "#FFFFFF",
                  }}
                >
                  <GithubIcon size={22} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg" style={{ color: "#1F2937" }}>
                    Narayanraiyt9616
                  </h3>
                  <p className="font-mono text-xs" style={{ color: "#64748B" }}>
                    github.com/Narayanraiyt9616
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#FF6B6B" }} />
                <span style={{ color: "#64748B" }}>Actively Pushing Code</span>
              </div>
            </div>

            {/* CONTRIBUTION GRAPH PREVIEW */}
            <div className="mb-6">
              <div className="flex items-center justify-between text-xs font-mono mb-2" style={{ color: "#64748B" }}>
                <span>Contribution Matrix</span>
                <span className="flex items-center gap-1">
                  <span>Less</span>
                  <span className="inline-block w-2.5 h-2.5 rounded-xs" style={{ backgroundColor: "#FFF8D6", border: "1px solid #F3DCCB" }} />
                  <span className="inline-block w-2.5 h-2.5 rounded-xs" style={{ backgroundColor: "#FFC857" }} />
                  <span className="inline-block w-2.5 h-2.5 rounded-xs" style={{ backgroundColor: "#FF6B6B" }} />
                  <span className="inline-block w-2.5 h-2.5 rounded-xs" style={{ backgroundColor: "#6A2ED9" }} />
                  <span>More</span>
                </span>
              </div>

              <div
                className="grid gap-1 overflow-x-auto p-3 rounded-xl border"
                style={{
                  gridTemplateColumns: `repeat(${cols}, minmax(12px, 1fr))`,
                  backgroundColor: "#FFF8D6",
                  borderColor: "#F3DCCB",
                }}
                aria-hidden="true"
              >
                {cells.map((i) => {
                  const level = ((i * 17 + 5) % shades.length);
                  return (
                    <div
                      key={i}
                      className="w-full aspect-square rounded-[2px] transition-transform hover:scale-125"
                      style={{ backgroundColor: shades[level] }}
                    />
                  );
                })}
              </div>
            </div>

            {/* BOTTOM STATS & BUTTON */}
            <div className="flex flex-wrap items-center justify-between gap-6 pt-2">
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono" style={{ color: "#64748B" }}>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border" style={{ backgroundColor: "#FFFFFF", borderColor: "#F3DCCB" }}>
                  <GitCommit size={14} style={{ color: "#FF6B6B" }} /> Regular Commits
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border" style={{ backgroundColor: "#FFFFFF", borderColor: "#F3DCCB" }}>
                  <GitBranch size={14} style={{ color: "#FF6B6B" }} /> Feature Branches
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border" style={{ backgroundColor: "#FFFFFF", borderColor: "#F3DCCB" }}>
                  <GitPullRequest size={14} style={{ color: "#FF6B6B" }} /> Full-Stack Repos
                </span>
              </div>

              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-xs uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
                style={{
                  backgroundColor: "#FF6B6B",
                  color: "#FFFFFF",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#E05353")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FF6B6B")}
              >
                <GithubIcon size={15} />
                <span>View GitHub Profile</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
