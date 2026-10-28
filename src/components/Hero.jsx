import { useState } from "react";
import { ArrowRight, Send, Terminal, Copy, Check, Mail } from "lucide-react";
import { profile, socials } from "../data/socials";
import profileImage from "../assets/awass.png";
import Reveal from "./Reveal";

/* ==========================================================================
   DECORATIVE DOTTED GRID COMPONENT
   ========================================================================== */
function DottedGrid({ cols = 5, rows = 5, className = "" }) {
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
   BRAND SVG ICONS (GitHub, LinkedIn, X / Twitter)
   ========================================================================== */
function GithubSvg({ className = "w-4 h-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
    </svg>
  );
}

function LinkedinSvg({ className = "w-4 h-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V8h4v1.5A6 6 0 0 1 16 8Z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterXSvg({ className = "w-4 h-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  );
}

/* ==========================================================================
   HERO SECTION COMPONENT
   ========================================================================== */
export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyFocus = () => {
    navigator.clipboard.writeText("Full-Stack Developer");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    {
      label: "GitHub",
      href: socials.github || "https://github.com/Narayanraiyt9616",
      icon: GithubSvg,
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com",
      icon: LinkedinSvg,
    },
    {
      label: "Twitter",
      href: "https://x.com",
      icon: TwitterXSvg,
    },
    {
      label: "Email",
      href: `mailto:${profile.email}`,
      icon: ({ className }) => <Mail className={className} size={16} />,
    },
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16"
      style={{ backgroundColor: "#FFF8D6" }}
    >
      {/* SCOPED FONT FOR HANDWRITTEN LABEL */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&display=swap');
      `}</style>

      {/* SUNSET DREAM AMBIENT GRADIENT SHAPES */}
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-30 blur-3xl -ml-32 -mt-32"
        style={{
          background: "radial-gradient(circle, #FFC857 0%, rgba(255, 200, 87, 0) 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-[550px] h-[550px] rounded-full pointer-events-none opacity-25 blur-3xl -mr-32 -mb-32"
        style={{
          background: "radial-gradient(circle, #FF6B6B 0%, rgba(255, 107, 107, 0) 70%)",
        }}
        aria-hidden="true"
      />

      {/* DECORATIVE DOTS AROUND EDGES */}
      <div className="absolute top-24 left-10 hidden xl:block pointer-events-none opacity-30">
        <DottedGrid cols={4} rows={3} />
      </div>
      <div className="absolute bottom-16 left-16 hidden lg:block pointer-events-none opacity-30">
        <DottedGrid cols={3} rows={4} />
      </div>

      {/* CENTERED CONTENT CONTAINER */}
      <div className="container-max px-5 sm:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1.18fr_0.82fr] gap-8 lg:gap-12 items-center">
          {/* =================================================================
              LEFT SIDE: INTRODUCTION
             ================================================================= */}
          <div>
            {/* Top rounded badge with coral dot */}
            <Reveal>
              <div
                className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border text-xs font-mono font-bold tracking-wider uppercase mb-4 sm:mb-5 shadow-2xs"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderColor: "#F3DCCB",
                  color: "#6A2ED9",
                }}
              >
                <span
                  className="w-2 h-2 rounded-full inline-block animate-pulse"
                  style={{ backgroundColor: "#FF6B6B" }}
                />
                <span>HELLO, I'M NARAYAN</span>
              </div>
            </Reveal>

            {/* 3-line Main Heading with highlighted 'Actually Matter.' */}
            <Reveal>
              <h1
                className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[60px] tracking-tight leading-[1.08] mb-4"
                style={{ color: "#1F2937" }}
              >
                Building Digital
                <br />
                Experiences That
                <br />
                <span className="relative inline-block" style={{ color: "#FF6B6B" }}>
                  Actually Matter.
                  <span
                    className="absolute left-0 -bottom-1 sm:-bottom-2 w-full h-[3.5px] sm:h-[4px] rounded-full"
                    style={{ backgroundColor: "#FFC857" }}
                  />
                </span>
              </h1>
            </Reveal>

            {/* Description Text */}
            <Reveal>
              <p
                className="text-base sm:text-lg max-w-xl leading-relaxed mb-4 sm:mb-5"
                style={{ color: "#64748B" }}
              >
                Computer Science Engineering student and Full-Stack Developer focused on building
                modern, scalable, and user-friendly web applications.
              </p>
            </Reveal>

            {/* Developer Focus Badge */}
            <Reveal>
              <div
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl border shadow-xs max-w-fit mb-5 sm:mb-6 transition-all hover:border-[#FFC857]"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderColor: "#F3DCCB",
                }}
              >
                <Terminal size={15} style={{ color: "#6A2ED9" }} className="shrink-0" />
                <span className="font-mono text-xs sm:text-sm" style={{ color: "#64748B" }}>
                  currently focused on:{" "}
                  <strong className="font-semibold" style={{ color: "#6A2ED9" }}>
                    Full-Stack Developer
                  </strong>
                </span>

                <button
                  type="button"
                  onClick={handleCopyFocus}
                  aria-label="Copy focus role"
                  className="ml-2 text-[#64748B] hover:text-[#FF6B6B] transition-colors cursor-pointer"
                  title={copied ? "Copied!" : "Copy"}
                >
                  {copied ? (
                    <Check size={14} style={{ color: "#FF6B6B" }} />
                  ) : (
                    <Copy size={14} />
                  )}
                </button>
              </div>
            </Reveal>

            {/* Action Buttons: View My Work & Contact Me */}
            <Reveal className="flex flex-wrap items-center gap-4 sm:gap-5 mb-5 sm:mb-6">
              {/* Button 1: View My Work (Primary Button: Coral Red) */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-sm sm:text-base text-white transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                style={{
                  backgroundColor: "#FF6B6B",
                  boxShadow:
                    "0 10px 25px -5px rgba(255, 107, 107, 0.4), 0 4px 6px -2px rgba(255, 107, 107, 0.2)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#E05353")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FF6B6B")}
              >
                <span>View My Work</span>
                <ArrowRight size={18} />
              </a>

              {/* Button 2: Contact Me (White Card Button with Peach Border) */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-sm sm:text-base border-2 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderColor: "#F3DCCB",
                  color: "#6A2ED9",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#FFFBF0";
                  e.currentTarget.style.borderColor = "#FF6B6B";
                  e.currentTarget.style.color = "#FF6B6B";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#FFFFFF";
                  e.currentTarget.style.borderColor = "#F3DCCB";
                  e.currentTarget.style.color = "#6A2ED9";
                }}
              >
                <Send size={16} />
                <span>Contact Me</span>
              </a>
            </Reveal>

            {/* Social Media Circular Icons */}
            <Reveal className="flex items-center gap-3.5">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-200 hover:-translate-y-0.5 shadow-2xs cursor-pointer"
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderColor: "#F3DCCB",
                    color: "#6A2ED9",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#FF6B6B";
                    e.currentTarget.style.color = "#FFFFFF";
                    e.currentTarget.style.borderColor = "#FF6B6B";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#FFFFFF";
                    e.currentTarget.style.color = "#6A2ED9";
                    e.currentTarget.style.borderColor = "#F3DCCB";
                  }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </Reveal>
          </div>

          {/* =================================================================
              RIGHT SIDE: PORTRAIT FRAME
             ================================================================= */}
          <Reveal className="relative mx-auto w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[450px]">
            {/* HANDWRITTEN TEXT TO THE LEFT OF THE PORTRAIT FRAME */}
            <div className="hidden md:block absolute -left-20 lg:-left-28 top-1/3 -translate-y-1/2 z-20 pointer-events-none text-right">
              <span
                className="text-2xl sm:text-3xl select-none whitespace-nowrap block -rotate-12 font-bold"
                style={{
                  fontFamily: "'Caveat', cursive, sans-serif",
                  color: "#6A2ED9",
                }}
              >
                Full Stack Developer
              </span>
              {/* Playful curved arrow pointing to the portrait frame */}
              <svg
                width="48"
                height="36"
                viewBox="0 0 48 36"
                fill="none"
                className="ml-auto mt-1 -rotate-6 opacity-85"
                style={{ color: "#FF6B6B" }}
              >
                <path
                  d="M6 6 C 18 2, 32 8, 42 22 M 42 22 L 33 18 M 42 22 L 37 29"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* GOLDEN-YELLOW CIRCLE NEAR UPPER-LEFT */}
            <div
              className="w-4 h-4 sm:w-5 sm:h-5 rounded-full absolute -top-3 -left-3 sm:-top-4 sm:-left-4 z-20 shadow-xs"
              style={{ backgroundColor: "#FFC857" }}
              aria-hidden="true"
            />

            {/* DEEP ROYAL PURPLE GEOMETRIC RECTANGULAR SHAPE OFFSET TO UPPER-RIGHT */}
            <div
              className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-full h-full rounded-[36px] sm:rounded-[44px] -z-10 shadow-lg"
              style={{
                backgroundColor: "#6A2ED9",
              }}
              aria-hidden="true"
            />

            {/* DOTTED PATTERN NEAR LOWER-RIGHT */}
            <div className="absolute -bottom-8 -right-8 sm:-bottom-10 sm:-right-10 -z-20 pointer-events-none opacity-30">
              <DottedGrid cols={5} rows={5} />
            </div>

            {/* WHITE OUTER RECTANGULAR FRAME WITH THICK ROUNDED CORNERS */}
            <div
              className="relative rounded-[36px] sm:rounded-[44px] p-3.5 sm:p-5 border transition-transform duration-500"
              style={{
                backgroundColor: "#FFFFFF",
                borderColor: "#F3DCCB",
                boxShadow:
                  "0 25px 60px -15px rgba(106, 46, 217, 0.18), 0 10px 20px -5px rgba(106, 46, 217, 0.08)",
                transform: "rotate(2.5deg)",
              }}
            >
              {/* INNER CROPPED CONTAINER KEEPING PORTRAIT STRAIGHT */}
              <div
                className="rounded-[26px] sm:rounded-[34px] overflow-hidden aspect-[3.7/5] relative"
                style={{ backgroundColor: "#FFF8D6" }}
              >
                <img
                  src={profileImage}
                  alt="Portrait of Narayan Rai"
                  className="w-full h-full object-cover object-top sm:object-center transition-transform duration-700"
                  style={{
                    transform: "rotate(-2.5deg) scale(1.08)",
                  }}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}