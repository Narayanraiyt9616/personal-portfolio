import {
  Code2,
  Layers,
  Zap,
  ShieldCheck,
  Sparkles,
  ArrowUpRight,
  Send,
} from "lucide-react";
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
   FOUR VALUE PILLARS DATA
   ========================================================================== */
const valuePillars = [
  {
    num: "01",
    icon: Code2,
    badge: "CLEAN CODE",
    title: "Clean, Maintainable Code",
    desc: "Writing readable, well-structured, and reusable code following industry best practices and standard patterns.",
  },
  {
    num: "02",
    icon: Layers,
    badge: "FULL-STACK",
    title: "Full-Stack Capability",
    desc: "Bridging frontend interfaces and backend architectures seamlessly with modern full-stack workflows.",
  },
  {
    num: "03",
    icon: Zap,
    badge: "PERFORMANCE",
    title: "Fast & Responsive Design",
    desc: "Creating high-performing, accessible, and responsive user experiences optimized for all device sizes.",
  },
  {
    num: "04",
    icon: ShieldCheck,
    badge: "RELIABILITY",
    title: "Reliable & Growth-Minded",
    desc: "Disciplined problem solver, continuous learner, proactive communicator, and dependable engineering team partner.",
  },
];

/* ==========================================================================
   WHY WORK WITH ME SECTION COMPONENT
   ========================================================================== */
export default function WhyWorkWithMe() {
  return (
    <section
      id="why-me"
      className="relative py-12 sm:py-16 overflow-hidden"
      style={{ backgroundColor: "#FFF8D6" }}
    >
      {/* Scoped font for upper-right handwritten text */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&display=swap');
      `}</style>

      {/* Subtle Sunset Dream decorative ambient gradients */}
      <div
        className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full pointer-events-none opacity-25 blur-3xl -mr-28 -mt-28"
        style={{
          background: "radial-gradient(circle, #FFC857 0%, rgba(255, 200, 87, 0) 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-20 blur-3xl -ml-28 -mb-28"
        style={{
          background: "radial-gradient(circle, #FF6B6B 0%, rgba(255, 107, 107, 0) 70%)",
        }}
        aria-hidden="true"
      />

      {/* Decorative dotted patterns along section edges */}
      <div className="absolute top-16 left-6 hidden xl:block pointer-events-none opacity-30">
        <DottedGrid cols={4} rows={3} />
      </div>
      <div className="absolute bottom-12 right-8 hidden lg:block pointer-events-none opacity-30">
        <DottedGrid cols={5} rows={3} />
      </div>

      <div className="container-max px-5 sm:px-8 relative z-10">
        {/* ===================================================================
            SECTION HEADING & UPPER-RIGHT HANDWRITTEN ACCENT
           =================================================================== */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-10">
            <div>
              {/* Top-left rounded badge with icon: WHY-ME */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono font-bold tracking-wider uppercase mb-2.5 shadow-2xs"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderColor: "#F3DCCB",
                  color: "#6A2ED9",
                }}
              >
                <Sparkles size={12} style={{ color: "#FF6B6B" }} />
                <span>WHY-ME</span>
              </div>

              {/* Main Heading with coral highlight and decorative lines */}
              <div className="flex items-center flex-wrap gap-x-3 gap-y-1.5">
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl tracking-tight leading-tight">
                  <span style={{ color: "#1F2937" }}>Why Work </span>
                  <span className="relative inline-block" style={{ color: "#FF6B6B" }}>
                    With Me?
                    <span
                      className="absolute left-0 -bottom-1 sm:-bottom-1.5 w-full h-[3px] rounded-full"
                      style={{ backgroundColor: "#FFC857" }}
                    />
                  </span>
                </h2>

                {/* Decorative strokes near the heading */}
                <div className="flex items-center gap-1.5 self-center -mt-1" aria-hidden="true">
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
                What I bring to your team: solid fundamentals, attention to
                detail, and a commitment to shipping reliable software.
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
                Let's Build Something Great
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
            FOUR VALUE PILLARS CARDS (4-COLUMN GRID ON DESKTOP)
           =================================================================== */}
        <Reveal
          stagger
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
        >
          {valuePillars.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.num}
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
                  {item.num}
                </span>

                {/* Subtle decorative wave along the bottom */}
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
                  {/* Icon inside a rounded-square soft golden container */}
                  <div
                    className="w-12 h-12 sm:w-13 sm:h-13 rounded-2xl flex items-center justify-center mb-4 border transition-all duration-300 group-hover:scale-105 shadow-2xs"
                    style={{
                      backgroundColor: "#FFF2D1",
                      borderColor: "#F3DCCB",
                      color: "#6A2ED9",
                    }}
                  >
                    <Icon size={22} />
                  </div>

                  {/* Small rounded badge showing the category/pillar */}
                  <span
                    className="inline-block font-mono text-[11px] font-bold uppercase tracking-wider mb-2 px-2.5 py-0.5 rounded-full border shadow-2xs"
                    style={{
                      backgroundColor: "#FFF8D6",
                      borderColor: "#F3DCCB",
                      color: "#6A2ED9",
                    }}
                  >
                    {item.badge}
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
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
