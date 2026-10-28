import { Settings, ArrowUpRight, Send } from "lucide-react";
import Reveal from "./Reveal";

/* ==========================================================================
   DECORATIVE DOTTED GRID COMPONENT
   ========================================================================== */
function DottedGrid({ cols = 4, rows = 3, className = "" }) {
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
   SIX PROCESS STEPS DATA
   ========================================================================== */
const processSteps = [
  {
    step: "01",
    emoji: "💡",
    title: "Understand",
    desc: "Clarify the problem, the users and what success looks like.",
  },
  {
    step: "02",
    emoji: "📝",
    title: "Plan",
    desc: "Break the work into a realistic structure and technical approach.",
  },
  {
    step: "03",
    emoji: "🎨",
    title: "Design",
    desc: "Shape the interface and data model before writing production code.",
  },
  {
    step: "04",
    emoji: "💻",
    title: "Develop",
    desc: "Build in focused, testable increments — frontend, backend, integration.",
  },
  {
    step: "05",
    emoji: "🔍",
    title: "Test",
    desc: "Check functionality, responsiveness and edge cases before shipping.",
  },
  {
    step: "06",
    emoji: "🚀",
    title: "Deploy",
    desc: "Ship the build, monitor for issues and iterate from real feedback.",
  },
];

/* ==========================================================================
   PROCESS SECTION COMPONENT
   ========================================================================== */
export default function Process() {
  return (
    <section
      id="process"
      className="relative py-12 sm:py-16 overflow-hidden"
      style={{ backgroundColor: "#FFF8D6" }}
    >
      {/* Scoped font for upper-right handwritten decorative phrase */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&display=swap');
      `}</style>

      {/* Sunset Dream Decorative Ambient Glows */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-25 blur-3xl -mr-32 -mt-32"
        style={{
          background:
            "radial-gradient(circle, #FFC857 0%, rgba(255, 200, 87, 0) 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-20 blur-3xl -ml-32 -mb-32"
        style={{
          background:
            "radial-gradient(circle, #FF6B6B 0%, rgba(255, 107, 107, 0) 70%)",
        }}
        aria-hidden="true"
      />

      {/* Decorative Dotted Accents */}
      <div className="absolute top-20 left-8 hidden xl:block pointer-events-none opacity-30">
        <DottedGrid cols={4} rows={3} />
      </div>
      <div className="absolute bottom-16 right-10 hidden lg:block pointer-events-none opacity-30">
        <DottedGrid cols={4} rows={3} />
      </div>

      <div className="container-max px-5 sm:px-8 relative z-10">
        {/* ===================================================================
            SECTION HEADING & UPPER-RIGHT DECORATION
           =================================================================== */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-10">
            <div>
              {/* Top-left rounded badge: PROCESS */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono font-bold tracking-wider uppercase mb-2.5 shadow-2xs"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderColor: "#F3DCCB",
                  color: "#6A2ED9",
                }}
              >
                <Settings size={12} style={{ color: "#FF6B6B" }} />
                <span>PROCESS</span>
              </div>

              {/* Main Heading with coral highlight and underline */}
              <div className="flex items-center flex-wrap gap-x-3 gap-y-1.5">
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl tracking-tight leading-tight">
                  <span style={{ color: "#1F2937" }}>How I Build & </span>
                  <span
                    className="relative inline-block"
                    style={{ color: "#FF6B6B" }}
                  >
                    Ship Software
                    <span
                      className="absolute left-0 -bottom-1 sm:-bottom-1.5 w-full h-[3px] rounded-full"
                      style={{ backgroundColor: "#FFC857" }}
                    />
                  </span>
                </h2>

                {/* Decorative strokes near the heading */}
                <div
                  className="flex items-center gap-1.5 self-center -mt-1"
                  aria-hidden="true"
                >
                  <span className="w-5 h-1 rounded-full bg-[#FF6B6B]" />
                  <span className="w-2.5 h-1 rounded-full bg-[#FFC857]" />
                  <span className="w-1.5 h-1 rounded-full bg-[#F3DCCB]" />
                </div>
              </div>

              {/* Description */}
              <p
                className="mt-2 text-sm sm:text-base max-w-2xl leading-relaxed"
                style={{ color: "#64748B" }}
              >
                A structured, testable engineering workflow from requirements to
                production deployment.
              </p>
            </div>

            {/* Upper-right handwritten decorative phrase with paper plane flight path */}
            <div className="hidden md:flex flex-col items-end shrink-0 self-end pb-0.5">
              <span
                className="text-xl sm:text-2xl select-none whitespace-nowrap block -rotate-2 font-bold"
                style={{
                  fontFamily: "'Caveat', cursive, sans-serif",
                  color: "#6A2ED9",
                }}
              >
                Idea / Plan / Build / Ship
              </span>
              <div className="flex items-center gap-1.5 -mt-0.5 text-[#FF6B6B]">
                <svg
                  width="130"
                  height="12"
                  viewBox="0 0 130 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 7 Q 65 1 120 7"
                    stroke="#FF6B6B"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                    fill="none"
                  />
                </svg>
                <Send size={12} className="text-[#FF6B6B] -rotate-12" />
              </div>
            </div>
          </div>
        </Reveal>

        {/* ===================================================================
            SIX PROCESS CARDS (3-COLUMN, 2-ROW GRID ON DESKTOP)
           =================================================================== */}
        <Reveal
          stagger
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          {processSteps.map((item) => (
            <div
              key={item.step}
              className="group relative overflow-hidden rounded-[18px] sm:rounded-[20px] p-5 sm:p-6 lg:p-7 flex flex-col justify-between h-full border transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "#FFFFFF",
                borderColor: "#F3DCCB",
                boxShadow:
                  "0 6px 20px -4px rgba(106, 46, 217, 0.05), 0 2px 6px -1px rgba(106, 46, 217, 0.02)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#FFC857";
                e.currentTarget.style.boxShadow =
                  "0 14px 28px -6px rgba(106, 46, 217, 0.12), 0 4px 10px -2px rgba(106, 46, 217, 0.04)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#F3DCCB";
                e.currentTarget.style.boxShadow =
                  "0 6px 20px -4px rgba(106, 46, 217, 0.05), 0 2px 6px -1px rgba(106, 46, 217, 0.02)";
              }}
            >
              {/* Narrow Coral accent line along the left edge */}
              <span
                className="absolute left-0 top-0 bottom-0 w-[4px] rounded-l-[18px] sm:rounded-l-[20px] transition-all duration-300 group-hover:w-[5px]"
                style={{ backgroundColor: "#FF6B6B" }}
                aria-hidden="true"
              />

              {/* Large pale step number in the upper-right corner */}
              <span
                className="absolute top-5 right-5 sm:top-5 sm:right-6 font-mono font-bold text-3xl sm:text-4xl select-none tracking-tight transition-colors duration-300 pointer-events-none"
                style={{ color: "rgba(106, 46, 217, 0.14)" }}
              >
                {item.step}
              </span>

              {/* Decorative wave along the bottom */}
              <svg
                viewBox="0 0 300 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-0 left-0 right-0 w-full h-10 pointer-events-none opacity-40 transition-opacity duration-300 group-hover:opacity-75"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M0 20C60 8 120 32 180 20C240 8 270 24 300 16V40H0V20Z"
                  fill="#FFF2D1"
                />
                <path
                  d="M0 24C70 14 130 30 190 22C250 14 280 26 300 20"
                  stroke="#F3DCCB"
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>

              {/* Card Top & Body Content */}
              <div className="relative z-10">
                {/* Large emoji inside a rounded-square container */}
                <div
                  className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-4 border transition-all duration-300 group-hover:scale-105 shadow-2xs select-none"
                  style={{
                    backgroundColor: "#FFF2D1",
                    borderColor: "#F3DCCB",
                  }}
                >
                  <span className="text-2xl sm:text-3xl leading-none">
                    {item.emoji}
                  </span>
                </div>

                {/* Small rounded badge showing the step number */}
                <span
                  className="inline-block font-mono text-[11px] font-bold uppercase tracking-wider mb-2 px-2.5 py-0.5 rounded-full border shadow-2xs"
                  style={{
                    backgroundColor: "#FFF8D6",
                    borderColor: "#F3DCCB",
                    color: "#6A2ED9",
                  }}
                >
                  STEP {item.step}
                </span>

                {/* Bold heading */}
                <h3
                  className="font-display font-bold text-lg sm:text-xl leading-snug mb-2 transition-colors duration-200 group-hover:text-[#FF6B6B]"
                  style={{ color: "#1F2937" }}
                >
                  {item.title}
                </h3>

                {/* Short description */}
                <p className="text-xs sm:text-sm leading-relaxed mb-4 text-[#64748B]">
                  {item.desc}
                </p>
              </div>

              {/* Circular arrow button in the lower-right corner */}
              <div className="relative z-10 flex justify-end mt-auto pt-1">
                <div
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center border transition-all duration-300 group-hover:scale-110 shadow-2xs cursor-pointer"
                  style={{
                    backgroundColor: "#FFF2D1",
                    borderColor: "#F3DCCB",
                    color: "#6A2ED9",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#FF6B6B";
                    e.currentTarget.style.borderColor = "#FF6B6B";
                    e.currentTarget.style.color = "#FFFFFF";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#FFF2D1";
                    e.currentTarget.style.borderColor = "#F3DCCB";
                    e.currentTarget.style.color = "#6A2ED9";
                  }}
                >
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
