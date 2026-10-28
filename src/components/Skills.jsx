import {
  Code2,
  Layout,
  Server,
  Database,
  Terminal,
  Wrench,
  Palette,
  FileCode,
  Globe,
  Layers,
  Cpu,
  Shield,
  Box,
  Monitor,
  CheckCircle,
} from "lucide-react";
import { skillGroups } from "../data/skills";
import Reveal from "./Reveal";

/* ==========================================================================
   DECORATIVE DOTTED GRID COMPONENT
   ========================================================================== */
function DottedGrid({ cols = 5, rows = 3, className = "" }) {
  return (
    <div
      className={`grid gap-2.5 ${className}`}
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
      aria-hidden="true"
    >
      {Array.from({ length: cols * rows }).map((_, i) => (
        <span
          key={i}
          className="w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: "#FFC857" }}
        />
      ))}
    </div>
  );
}

/* ==========================================================================
   CATEGORY & SKILL ICON MAPPINGS
   ========================================================================== */
const categoryIcons = {
  "Frontend Development": Layout,
  "Backend Development": Server,
  Database: Database,
  "API Development": Globe,
  "Tools & Workflow": Wrench,
  "UI/UX Awareness": Palette,
};

const skillIcons = {
  "React.js": FileCode,
  "JavaScript (ES6+)": Terminal,
  "Tailwind CSS": Palette,
  "HTML5 & CSS3": Globe,
  "Node.js": Server,
  "Express.js": Cpu,
  "Authentication & Middleware": Shield,
  MongoDB: Database,
  MySQL: Database,
  "REST API Design": Layers,
  "Postman Testing": Box,
  "Git & GitHub": Code2,
  "VS Code": Monitor,
  "npm / Vite": Terminal,
  "Responsive Design": Layout,
  "Accessibility Basics": CheckCircle,
  "Design Systems": Palette,
};

const levelWidth = {
  Comfortable: "92%",
  Intermediate: "75%",
  Familiar: "58%",
  Learning: "42%",
};

/* ==========================================================================
   SKILLS SECTION COMPONENT
   ========================================================================== */
export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-12 sm:py-16 overflow-hidden"
      style={{ backgroundColor: "#FFF8D6" }}
    >
      {/* SCOPED FONT FOR UPPER-RIGHT HANDWRITTEN ACCENT */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&display=swap');
      `}</style>

      {/* SUNSET DREAM AMBIENT GRADIENTS */}
      <div
        className="absolute top-0 right-0 w-[550px] h-[550px] rounded-full pointer-events-none opacity-25 blur-3xl -mr-32 -mt-32"
        style={{
          background: "radial-gradient(circle, #FFC857 0%, rgba(255, 200, 87, 0) 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none opacity-20 blur-3xl -ml-36 -mb-36"
        style={{
          background: "radial-gradient(circle, #FF6B6B 0%, rgba(255, 107, 107, 0) 70%)",
        }}
        aria-hidden="true"
      />

      {/* DECORATIVE DOTTED PATTERNS */}
      <div className="absolute top-24 left-8 hidden xl:block pointer-events-none opacity-30">
        <DottedGrid cols={4} rows={3} />
      </div>
      <div className="absolute bottom-16 right-10 hidden lg:block pointer-events-none opacity-30">
        <DottedGrid cols={5} rows={3} />
      </div>

      <div className="container-max px-5 sm:px-8 relative z-10">
        {/* SECTION HEADING & UPPER-RIGHT HANDWRITTEN ACCENT */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-10">
            <div>
              {/* Top-left rounded badge with icon: SKILLS */}
              <div
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono font-bold tracking-wider uppercase mb-3.5 shadow-2xs"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderColor: "#F3DCCB",
                  color: "#6A2ED9",
                }}
              >
                <Code2 size={13} style={{ color: "#FF6B6B" }} />
                <span>SKILLS</span>
              </div>

              {/* Main Heading */}
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight">
                <span style={{ color: "#1F2937" }}>Technical Skills & </span>
                <span className="relative inline-block" style={{ color: "#FF6B6B" }}>
                  Proficiencies
                  <span
                    className="absolute left-0 -bottom-1 sm:-bottom-1.5 w-full h-[3.5px] rounded-full"
                    style={{ backgroundColor: "#FFC857" }}
                  />
                </span>
              </h2>

              {/* Description */}
              <p
                className="mt-3.5 text-base sm:text-lg max-w-2xl leading-relaxed"
                style={{ color: "#64748B" }}
              >
                Hands-on experience with modern frontend, backend, database, and software
                development tooling.
              </p>
            </div>

            {/* Handwritten text in the upper-right area */}
            <div className="hidden md:block shrink-0 text-right self-end pb-1">
              <span
                className="text-2xl sm:text-3xl select-none whitespace-nowrap block -rotate-6 font-bold"
                style={{
                  fontFamily: "'Caveat', cursive, sans-serif",
                  color: "#6A2ED9",
                }}
              >
                Skills Build Better Solutions
              </span>
              {/* Hand-drawn underline flourish */}
              <svg
                width="170"
                height="18"
                viewBox="0 0 170 18"
                fill="none"
                className="ml-auto mt-0.5 opacity-80"
                style={{ color: "#FF6B6B" }}
              >
                <path
                  d="M4 12 C 45 4, 115 3, 166 10"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </Reveal>

        {/* SKILLS CARDS: 3-COLUMN, 2-ROW GRID ON DESKTOP */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {skillGroups.map((group) => {
            const CategoryIcon = categoryIcons[group.category] || Layout;

            return (
              <Reveal key={group.category} className="h-full">
                <div
                  className="group rounded-[20px] border overflow-hidden flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-1.5 cursor-default"
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderColor: "#F3DCCB",
                    boxShadow:
                      "0 10px 30px -8px rgba(106, 46, 217, 0.06), 0 4px 6px -2px rgba(0, 0, 0, 0.02)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#FFC857";
                    e.currentTarget.style.boxShadow =
                      "0 20px 40px -12px rgba(106, 46, 217, 0.12), 0 6px 12px -3px rgba(106, 46, 217, 0.04)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#F3DCCB";
                    e.currentTarget.style.boxShadow =
                      "0 10px 30px -8px rgba(106, 46, 217, 0.06), 0 4px 6px -2px rgba(0, 0, 0, 0.02)";
                  }}
                >
                  <div>
                    {/* SOFT CREAM CARD HEADER */}
                    <div
                      className="p-5 sm:p-6 border-b flex items-center justify-between"
                      style={{
                        backgroundColor: "#FFFBF0",
                        borderColor: "#F3DCCB",
                      }}
                    >
                      <div className="flex items-center gap-3.5">
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center border shadow-2xs transition-transform duration-300 group-hover:scale-105"
                          style={{
                            backgroundColor: "#FFF2D1",
                            borderColor: "#F3DCCB",
                            color: "#6A2ED9",
                          }}
                        >
                          <CategoryIcon size={21} />
                        </div>

                        <h3
                          className="font-display font-bold text-lg sm:text-xl tracking-tight transition-colors duration-200 group-hover:text-[#FF6B6B]"
                          style={{ color: "#1F2937" }}
                        >
                          {group.category}
                        </h3>
                      </div>

                      {/* BADGE SHOWING NUMBER OF SKILLS */}
                      <span
                        className="font-mono text-xs font-semibold px-2.5 py-1 rounded-full border shadow-2xs shrink-0"
                        style={{
                          backgroundColor: "#FFF2D1",
                          borderColor: "#F3DCCB",
                          color: "#6A2ED9",
                        }}
                      >
                        {group.skills.length} skills
                      </span>
                    </div>

                    {/* CARD BODY WITH SKILL ROWS & PROGRESS BARS */}
                    <div className="p-5 sm:p-6 space-y-5">
                      {group.skills.map((skill) => {
                        const SkillIcon = skillIcons[skill.name] || Code2;

                        return (
                          <div key={skill.name} className="space-y-2">
                            {/* Technology Icon, Skill Name & Proficiency Label */}
                            <div className="flex items-center justify-between gap-2">
                              <div className="flex items-center gap-2.5 min-w-0">
                                <div
                                  className="w-7 h-7 rounded-lg flex items-center justify-center border shrink-0 transition-colors"
                                  style={{
                                    backgroundColor: "#FFF8D6",
                                    borderColor: "#F3DCCB",
                                    color: "#6A2ED9",
                                  }}
                                >
                                  <SkillIcon size={14} />
                                </div>
                                <span
                                  className="text-sm font-semibold truncate"
                                  style={{ color: "#1F2937" }}
                                >
                                  {skill.name}
                                </span>
                              </div>

                              <span
                                className="font-mono text-xs font-semibold shrink-0"
                                style={{ color: "#FF6B6B" }}
                              >
                                {skill.level}
                              </span>
                            </div>

                            {/* Progress Bar (Soft peach track + Coral to Gold gradient fill) */}
                            <div
                              className="h-2 rounded-full overflow-hidden"
                              style={{ backgroundColor: "#F3DCCB" }}
                            >
                              <div
                                className="h-full rounded-full transition-all duration-1000 ease-out"
                                style={{
                                  width: levelWidth[skill.level] || "60%",
                                  background: "linear-gradient(90deg, #FF6B6B 0%, #FFC857 100%)",
                                }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
