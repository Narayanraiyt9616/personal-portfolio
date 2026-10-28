import { ArrowUpRight, Layout, Server, Database, Wrench } from "lucide-react";
import Reveal from "./Reveal";

/* ==========================================================================
   AUTHENTIC TECHNOLOGY ICONS (Optimized SVG Vectors)
   ========================================================================== */

function ReactIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="-11.5 -10.23174 23 20.46348" className={className} fill="none">
      <circle cx="0" cy="0" r="2.05" fill="#6A2ED9" />
      <g stroke="#6A2ED9" strokeWidth="1.1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

function JavaScriptIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <rect width="22" height="22" x="1" y="1" rx="4" fill="#6A2ED9" />
      <path
        d="M8.5 17.5c-.8 0-1.4-.4-1.7-1l1.3-.8c.2.3.4.5.7.5.4 0 .7-.2.7-.8V10h1.7v5.5c0 1.3-.8 2-2 2Zm7-1.1c.4.3.9.5 1.5.5.8 0 1.3-.4 1.3-1 0-.6-.4-.9-1.3-1.3l-.6-.2c-1.3-.5-2.1-1.2-2.1-2.4 0-1.2 1-2.2 2.5-2.2.9 0 1.6.3 2.1.7l-1 1.2c-.3-.3-.7-.5-1.1-.5-.5 0-.9.3-.9.7 0 .5.3.8 1.1 1.1l.6.3c1.5.6 2.3 1.3 2.3 2.5 0 1.4-1.1 2.3-2.8 2.3-1.1 0-2-.3-2.6-.9l1-1.3Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

function Html5Icon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path d="M4 2.5l1.6 18 6.4 1.8 6.4-1.8 1.6-18H4Z" fill="#6A2ED9" />
      <path d="M12 4.1v16.3l4.9-1.4 1.3-14.9H12Z" fill="#6A2ED9" />
      <path
        d="M7.7 7.2h8.6l-.3 3.1H12v2.1h3.7l-.4 4.5-3.3.9v2.1l5.4-1.5.7-8.1H7.7v-3.1Zm0 0"
        fill="#FFFFFF"
        opacity="0.95"
      />
      <path
        d="M12 7.2H7.7l.2 2.1h4.1V7.2Zm0 5.2H8.1l.2 2.1h3.7v-2.1Zm0 4.7l-2.6-.7-.2-1.9H7.3l.3 3.3 4.4 1.2v-1.9Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

function Css3Icon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path d="M4 2.5l1.6 18 6.4 1.8 6.4-1.8 1.6-18H4Z" fill="#6A2ED9" />
      <path d="M12 4.1v16.3l4.9-1.4 1.3-14.9H12Z" fill="#6A2ED9" />
      <path
        d="M16.3 7.2H7.7l.2 2.1h4.1v.1H8.1l.2 2.1h3.7v.1H8.5l.2 2.1h3.3v.1l-2.5.7-.2-1.2H7.4l.4 2.6 4.2 1.2v-2l.1-.1 3.4-.9.5-6.2H12V7.2h4.3Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

function TailwindIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8Zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12Z"
        fill="#6A2ED9"
      />
    </svg>
  );
}

function BootstrapIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <rect width="22" height="22" x="1" y="1" rx="5" fill="#6A2ED9" />
      <path
        d="M7.8 6.5h4.4c1.8 0 2.9.9 2.9 2.2 0 1-.6 1.7-1.5 2 1.2.3 1.9 1.1 1.9 2.3 0 1.5-1.2 2.5-3.1 2.5H7.8V6.5Zm2.3 3.6h1.9c.7 0 1.2-.4 1.2-1 0-.6-.5-1-1.2-1h-1.9v2Zm0 3.8h2.1c.8 0 1.3-.4 1.3-1.1 0-.7-.5-1.1-1.3-1.1h-2.1v2.2Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

function NodeIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M12 2l9 5.2v10.4l-9 5.2-9-5.2V7.2L12 2Z"
        fill="#FFF2D1"
        stroke="#6A2ED9"
        strokeWidth="1.5"
      />
      <path
        d="M12 6.2a1 1 0 0 0-.5.14l-4.5 2.6a1 1 0 0 0-.5.86v5.2a1 1 0 0 0 .5.86l4.5 2.6a1 1 0 0 0 1 0l4.5-2.6a1 1 0 0 0 .5-.86V9.8a1 1 0 0 0-.5-.86l-4.5-2.6a1 1 0 0 0-.5-.14Zm-2.5 4.8h1.8v3.5h-1.8V11Zm3.2 0h1.8v1.6c.3-.5.8-.8 1.5-.8.9 0 1.5.6 1.5 1.7v2.2h-1.8v-2c0-.5-.3-.7-.7-.7s-.8.3-.8.8v1.9h-1.5V11Z"
        fill="#6A2ED9"
      />
    </svg>
  );
}

function ExpressIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <rect width="22" height="22" x="1" y="1" rx="5" fill="#FFF8D6" stroke="#6A2ED9" strokeWidth="1.5" />
      <text
        x="12"
        y="15.5"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontWeight="800"
        fontSize="10"
        fill="#6A2ED9"
      >
        ex
      </text>
    </svg>
  );
}

function RestApiIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#6A2ED9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="6" rx="2" fill="#FFF2D1" />
      <rect x="2" y="15" width="20" height="6" rx="2" fill="#FFF2D1" />
      <path d="M6 9v6" />
      <path d="M18 9v6" />
      <path d="M12 9v6" />
      <circle cx="6" cy="6" r="1" fill="#6A2ED9" />
      <circle cx="12" cy="6" r="1" fill="#6A2ED9" />
      <circle cx="18" cy="6" r="1" fill="#6A2ED9" />
      <circle cx="6" cy="18" r="1" fill="#6A2ED9" />
      <circle cx="12" cy="18" r="1" fill="#6A2ED9" />
      <circle cx="18" cy="18" r="1" fill="#6A2ED9" />
    </svg>
  );
}

function MongoIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M12 2C11.5 4 6 8.5 6 13.5c0 3.5 2.5 6.5 6 7.5 3.5-1 6-4 6-7.5C18 8.5 12.5 4 12 2Z"
        fill="#FFF2D1"
        stroke="#6A2ED9"
        strokeWidth="1.5"
      />
      <path d="M12 2.5v18.5" stroke="#6A2ED9" strokeWidth="1.5" />
    </svg>
  );
}

function MySqlIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#6A2ED9" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="8" ry="3" fill="#FFF2D1" />
      <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
      <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
    </svg>
  );
}

function GitIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#6A2ED9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2.5" y="2.5" width="19" height="19" rx="3" transform="rotate(45 12 12)" fill="#FFF2D1" />
      <circle cx="8" cy="12" r="2" fill="#6A2ED9" />
      <circle cx="16" cy="8" r="2" fill="#6A2ED9" />
      <circle cx="16" cy="16" r="2" fill="#6A2ED9" />
      <path d="M8 12h5a3 3 0 0 0 3-3V8" />
      <path d="M13 12a3 3 0 0 1 3 3v1" />
    </svg>
  );
}

function GitHubIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#6A2ED9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" fill="#FFF2D1" />
    </svg>
  );
}

function VsCodeIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#6A2ED9" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.5 2.5L7 11.5l-3.5-3L2 10l3.5 2L2 14l1.5 1.5 3.5-3 10.5 9 4.5-2V4.5L17.5 2.5Z" fill="#FFF2D1" />
      <path d="M17.5 6.5v11L10 12l7.5-5.5Z" fill="#6A2ED9" />
    </svg>
  );
}

function PostmanIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#6A2ED9" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9.5" fill="#FFF2D1" />
      <path d="M12 7l4 5-4 5M8 12h8" />
    </svg>
  );
}

function NpmIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <rect width="22" height="22" x="1" y="1" rx="4" fill="#FFF2D1" stroke="#6A2ED9" strokeWidth="1.5" />
      <path d="M4 6.5h16v11H12v-8h-3v8H4v-11Z" fill="#6A2ED9" />
    </svg>
  );
}

/* ==========================================================================
   CATEGORY DATA STRUCTURE (Scoped to Tech Stack requirements)
   ========================================================================== */

const frontendItems = [
  { name: "React.js", desc: "Component-driven UIs & reactive state", icon: ReactIcon },
  { name: "JavaScript", desc: "ES6+ syntax & asynchronous logic", icon: JavaScriptIcon },
  { name: "HTML5", desc: "Semantic structure & web standards", icon: Html5Icon },
  { name: "CSS3", desc: "Modern flex/grid layouts & animations", icon: Css3Icon },
  { name: "Tailwind CSS", desc: "Utility-first rapid design system", icon: TailwindIcon },
  { name: "Bootstrap", desc: "Responsive grid & prototyping components", icon: BootstrapIcon },
];

const backendItems = [
  {
    name: "Node.js",
    tag: "Runtime",
    desc: "Asynchronous event-driven runtime powering scalable network applications and microservices.",
    icon: NodeIcon,
    highlights: ["Non-blocking I/O", "V8 Engine", "NPM Ecosystem"],
  },
  {
    name: "Express.js",
    tag: "Framework",
    desc: "Fast, unopinionated minimalist framework for structuring RESTful routing and middleware pipelines.",
    icon: ExpressIcon,
    highlights: ["Middleware Pipeline", "REST Routing", "Error Handling"],
  },
  {
    name: "REST APIs",
    tag: "Architecture",
    desc: "Standardized client-server API architecture with stateless endpoints, CRUD verbs, and JSON payloads.",
    icon: RestApiIcon,
    highlights: ["JSON Contracts", "Stateless Verbs", "HTTP Status"],
  },
];

const databaseItems = [
  {
    name: "MongoDB",
    tag: "NoSQL Database",
    desc: "Document-oriented NoSQL database with flexible BSON schemas, powerful aggregation pipelines, and rapid query response.",
    icon: MongoIcon,
    highlights: ["Document Schema", "Aggregation Pipeline", "Mongoose ODM", "Dynamic Indexing"],
  },
  {
    name: "MySQL",
    tag: "Relational Database",
    desc: "Industry-standard relational database management system delivering ACID compliance, table relations, and structured query integrity.",
    icon: MySqlIcon,
    highlights: ["Relational Integrity", "ACID Compliance", "Foreign Keys", "Complex Joins"],
  },
];

const toolsItems = [
  { name: "Git", desc: "Distributed version control & branch tracking", icon: GitIcon },
  { name: "GitHub", desc: "Cloud hosting, collaboration & CI/CD", icon: GitHubIcon },
  { name: "VS Code", desc: "Modern IDE with rich developer tooling", icon: VsCodeIcon },
  { name: "Postman", desc: "Comprehensive API design & endpoint testing", icon: PostmanIcon },
  { name: "npm", desc: "Package management & dependency handling", icon: NpmIcon },
];

/* ==========================================================================
   TECH STACK SECTION COMPONENT
   ========================================================================== */

export default function TechStack() {
  return (
    <section
      id="stack"
      className="relative py-12 sm:py-16 overflow-hidden"
      style={{ backgroundColor: "#FFF8D6" }}
    >
      {/* SUBTLE MINT-GREEN DECORATIVE GRADIENTS & SHAPES */}
      <div
        className="absolute top-0 right-0 w-[550px] h-[550px] rounded-full pointer-events-none opacity-40 blur-3xl -mr-32 -mt-32"
        style={{ background: "radial-gradient(circle, #FFF2D1 0%, rgba(209, 250, 229, 0) 70%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none opacity-45 blur-3xl -ml-40 -mb-40"
        style={{ background: "radial-gradient(circle, #FFF8D6 0%, rgba(240, 253, 244, 0) 70%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] rounded-full pointer-events-none opacity-20 blur-3xl"
        style={{ background: "radial-gradient(ellipse, #FFF2D1 0%, rgba(209, 250, 229, 0) 75%)" }}
        aria-hidden="true"
      />

      <div className="container-max px-5 sm:px-8 relative z-10">
        {/* CENTERED HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <Reveal>
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-mono font-bold tracking-widest uppercase mb-4 shadow-xs"
              style={{
                backgroundColor: "#FFF2D1",
                borderColor: "#F3DCCB",
                color: "#6A2ED9",
              }}
            >
              <span
                className="w-2 h-2 rounded-full inline-block animate-pulse"
                style={{ backgroundColor: "#FF6B6B" }}
              />
              <span>MY TECH STACK</span>
            </div>
          </Reveal>

          <Reveal>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight">
              <span style={{ color: "#1F2937" }}>Technologies I </span>
              <span style={{ color: "#FF6B6B" }}>Work With</span>
            </h2>
          </Reveal>

          <Reveal>
            <p
              className="mt-3.5 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ color: "#64748B" }}
            >
              Tools and technologies I use to build modern, scalable web experiences.
            </p>
            <div
              className="w-16 h-1 rounded-full mx-auto mt-4"
              style={{ backgroundColor: "#FF6B6B" }}
            />
          </Reveal>
        </div>

        {/* ===================================================================
            CATEGORY 1: FRONTEND (6 CARDS IN ONE ROW ON DESKTOP)
           =================================================================== */}
        <div className="mb-8 sm:mb-10">
          <Reveal>
            <div
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-6 border-b"
              style={{ borderColor: "#F3DCCB" }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border"
                  style={{
                    backgroundColor: "#FFF2D1",
                    borderColor: "#F3DCCB",
                    color: "#6A2ED9",
                  }}
                >
                  <Layout size={20} />
                </div>
                <div>
                  <div className="flex items-center gap-2.5">
                    <h3 className="font-display font-bold text-lg sm:text-xl" style={{ color: "#1F2937" }}>
                      Frontend Development
                    </h3>
                    <span
                      className="font-mono text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md"
                      style={{ backgroundColor: "#FFF2D1", color: "#6A2ED9" }}
                    >
                      Client-Side
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm mt-0.5" style={{ color: "#64748B" }}>
                    Modern component libraries, responsive styling tools, and reactive interfaces.
                  </p>
                </div>
              </div>
              <span className="font-mono text-xs font-semibold self-start sm:self-auto" style={{ color: "#6A2ED9" }}>
                6 Technologies
              </span>
            </div>
          </Reveal>

          {/* 6 CARDS IN ONE ROW ON DESKTOP */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
            {frontendItems.map((item) => (
              <Reveal key={item.name} className="h-full">
                <div
                  className="group relative rounded-2xl border p-4 sm:p-5 h-full flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 cursor-default"
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderColor: "#F3DCCB",
                    boxShadow: "0 4px 20px -2px rgba(4, 120, 87, 0.04), 0 2px 6px -1px rgba(0, 0, 0, 0.02)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(4, 120, 87, 0.45)";
                    e.currentTarget.style.boxShadow =
                      "0 16px 32px -8px rgba(4, 120, 87, 0.12), 0 4px 12px -2px rgba(4, 120, 87, 0.04)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#F3DCCB";
                    e.currentTarget.style.boxShadow =
                      "0 4px 20px -2px rgba(4, 120, 87, 0.04), 0 2px 6px -1px rgba(0, 0, 0, 0.02)";
                  }}
                >
                  <div>
                    {/* TOP ICON & CIRCULAR ARROW */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-105"
                        style={{
                          backgroundColor: "#FFF8D6",
                          borderColor: "#FFF2D1",
                        }}
                      >
                        <item.icon className="w-6 h-6" />
                      </div>

                      <div
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-[#6A2ED9] group-hover:text-white"
                        style={{
                          backgroundColor: "#FFF2D1",
                          color: "#6A2ED9",
                        }}
                      >
                        <ArrowUpRight
                          size={14}
                          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </div>
                    </div>

                    <h4
                      className="font-display font-bold text-sm sm:text-base tracking-tight transition-colors duration-200 group-hover:text-[#6A2ED9]"
                      style={{ color: "#1F2937" }}
                    >
                      {item.name}
                    </h4>

                    <p className="text-xs leading-relaxed mt-1" style={{ color: "#64748B" }}>
                      {item.desc}
                    </p>
                  </div>

                  {/* BOTTOM HOVER ACCENT LINE */}
                  <div
                    className="h-1 w-6 mt-4 rounded-full transition-all duration-300 group-hover:w-full"
                    style={{ backgroundColor: "#FF6B6B" }}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ===================================================================
            CATEGORY 2: BACKEND (3 WIDE CARDS IN ONE ROW ON DESKTOP)
           =================================================================== */}
        <div className="mb-8 sm:mb-10">
          <Reveal>
            <div
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-6 border-b"
              style={{ borderColor: "#F3DCCB" }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border"
                  style={{
                    backgroundColor: "#FFF2D1",
                    borderColor: "#F3DCCB",
                    color: "#6A2ED9",
                  }}
                >
                  <Server size={20} />
                </div>
                <div>
                  <div className="flex items-center gap-2.5">
                    <h3 className="font-display font-bold text-lg sm:text-xl" style={{ color: "#1F2937" }}>
                      Backend Development
                    </h3>
                    <span
                      className="font-mono text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md"
                      style={{ backgroundColor: "#FFF2D1", color: "#6A2ED9" }}
                    >
                      Server-Side
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm mt-0.5" style={{ color: "#64748B" }}>
                    Server-side runtimes, scalable REST API services, and robust middleware architectures.
                  </p>
                </div>
              </div>
              <span className="font-mono text-xs font-semibold self-start sm:self-auto" style={{ color: "#6A2ED9" }}>
                3 Technologies
              </span>
            </div>
          </Reveal>

          {/* 3 WIDE CARDS IN ONE ROW ON DESKTOP */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {backendItems.map((item) => (
              <Reveal key={item.name} className="h-full">
                <div
                  className="group relative rounded-2xl border p-6 sm:p-7 h-full flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 cursor-default"
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderColor: "#F3DCCB",
                    boxShadow: "0 4px 20px -2px rgba(4, 120, 87, 0.04)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(4, 120, 87, 0.45)";
                    e.currentTarget.style.boxShadow =
                      "0 16px 32px -8px rgba(4, 120, 87, 0.12), 0 4px 12px -2px rgba(4, 120, 87, 0.04)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#F3DCCB";
                    e.currentTarget.style.boxShadow = "0 4px 20px -2px rgba(4, 120, 87, 0.04)";
                  }}
                >
                  <div>
                    {/* TOP ICON & CIRCULAR ARROW */}
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className="w-13 h-13 rounded-2xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-105"
                        style={{
                          backgroundColor: "#FFF8D6",
                          borderColor: "#FFF2D1",
                        }}
                      >
                        <item.icon className="w-7 h-7" />
                      </div>

                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-[#6A2ED9] group-hover:text-white"
                        style={{
                          backgroundColor: "#FFF2D1",
                          color: "#6A2ED9",
                        }}
                      >
                        <ArrowUpRight
                          size={15}
                          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </div>
                    </div>

                    <span
                      className="inline-block font-mono text-[10px] font-bold uppercase tracking-wider mb-2 px-2.5 py-0.5 rounded-md border"
                      style={{
                        backgroundColor: "#FFF8D6",
                        borderColor: "#FFF2D1",
                        color: "#6A2ED9",
                      }}
                    >
                      {item.tag}
                    </span>

                    <h4
                      className="font-display font-bold text-lg sm:text-xl tracking-tight transition-colors duration-200 group-hover:text-[#6A2ED9] mb-2"
                      style={{ color: "#1F2937" }}
                    >
                      {item.name}
                    </h4>

                    <p className="text-xs sm:text-sm leading-relaxed mb-5" style={{ color: "#64748B" }}>
                      {item.desc}
                    </p>

                    {/* HIGHLIGHT PILLS */}
                    <div className="flex flex-wrap gap-1.5">
                      {item.highlights.map((h) => (
                        <span
                          key={h}
                          className="font-mono text-[11px] font-medium px-2.5 py-1 rounded-md border"
                          style={{
                            backgroundColor: "#FFF8D6",
                            borderColor: "#FFF2D1",
                            color: "#6A2ED9",
                          }}
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* BOTTOM ACCENT LINE */}
                  <div
                    className="h-1 w-8 mt-6 rounded-full transition-all duration-300 group-hover:w-full"
                    style={{ backgroundColor: "#FF6B6B" }}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ===================================================================
            CATEGORY 3: DATABASE (2 WIDE CARDS IN ONE ROW ON DESKTOP)
           =================================================================== */}
        <div className="mb-8 sm:mb-10">
          <Reveal>
            <div
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-6 border-b"
              style={{ borderColor: "#F3DCCB" }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border"
                  style={{
                    backgroundColor: "#FFF2D1",
                    borderColor: "#F3DCCB",
                    color: "#6A2ED9",
                  }}
                >
                  <Database size={20} />
                </div>
                <div>
                  <div className="flex items-center gap-2.5">
                    <h3 className="font-display font-bold text-lg sm:text-xl" style={{ color: "#1F2937" }}>
                      Database Systems
                    </h3>
                    <span
                      className="font-mono text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md"
                      style={{ backgroundColor: "#FFF2D1", color: "#6A2ED9" }}
                    >
                      Data Persistence
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm mt-0.5" style={{ color: "#64748B" }}>
                    Document-oriented NoSQL storage and relational SQL engines for reliable data modeling.
                  </p>
                </div>
              </div>
              <span className="font-mono text-xs font-semibold self-start sm:self-auto" style={{ color: "#6A2ED9" }}>
                2 Technologies
              </span>
            </div>
          </Reveal>

          {/* 2 WIDE CARDS IN ONE ROW ON DESKTOP */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {databaseItems.map((item) => (
              <Reveal key={item.name} className="h-full">
                <div
                  className="group relative rounded-2xl border p-7 sm:p-8 h-full flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 cursor-default"
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderColor: "#F3DCCB",
                    boxShadow: "0 4px 20px -2px rgba(4, 120, 87, 0.04)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(4, 120, 87, 0.45)";
                    e.currentTarget.style.boxShadow =
                      "0 16px 32px -8px rgba(4, 120, 87, 0.12), 0 4px 12px -2px rgba(4, 120, 87, 0.04)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#F3DCCB";
                    e.currentTarget.style.boxShadow = "0 4px 20px -2px rgba(4, 120, 87, 0.04)";
                  }}
                >
                  <div>
                    {/* TOP ICON & CIRCULAR ARROW */}
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-105"
                        style={{
                          backgroundColor: "#FFF8D6",
                          borderColor: "#FFF2D1",
                        }}
                      >
                        <item.icon className="w-8 h-8" />
                      </div>

                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-[#6A2ED9] group-hover:text-white"
                        style={{
                          backgroundColor: "#FFF2D1",
                          color: "#6A2ED9",
                        }}
                      >
                        <ArrowUpRight
                          size={15}
                          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </div>
                    </div>

                    <span
                      className="inline-block font-mono text-[10px] font-bold uppercase tracking-wider mb-2 px-2.5 py-0.5 rounded-md border"
                      style={{
                        backgroundColor: "#FFF8D6",
                        borderColor: "#FFF2D1",
                        color: "#6A2ED9",
                      }}
                    >
                      {item.tag}
                    </span>

                    <h4
                      className="font-display font-bold text-xl sm:text-2xl tracking-tight transition-colors duration-200 group-hover:text-[#6A2ED9] mb-2"
                      style={{ color: "#1F2937" }}
                    >
                      {item.name}
                    </h4>

                    <p className="text-sm leading-relaxed mb-6" style={{ color: "#64748B" }}>
                      {item.desc}
                    </p>

                    {/* HIGHLIGHT PILLS */}
                    <div className="flex flex-wrap gap-2">
                      {item.highlights.map((h) => (
                        <span
                          key={h}
                          className="font-mono text-xs font-medium px-3 py-1 rounded-md border"
                          style={{
                            backgroundColor: "#FFF8D6",
                            borderColor: "#FFF2D1",
                            color: "#6A2ED9",
                          }}
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* BOTTOM ACCENT LINE */}
                  <div
                    className="h-1 w-10 mt-6 rounded-full transition-all duration-300 group-hover:w-full"
                    style={{ backgroundColor: "#FF6B6B" }}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ===================================================================
            CATEGORY 4: TOOLS & WORKFLOW (5 CARDS IN ONE ROW ON DESKTOP)
           =================================================================== */}
        <div>
          <Reveal>
            <div
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-6 border-b"
              style={{ borderColor: "#F3DCCB" }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border"
                  style={{
                    backgroundColor: "#FFF2D1",
                    borderColor: "#F3DCCB",
                    color: "#6A2ED9",
                  }}
                >
                  <Wrench size={20} />
                </div>
                <div>
                  <div className="flex items-center gap-2.5">
                    <h3 className="font-display font-bold text-lg sm:text-xl" style={{ color: "#1F2937" }}>
                      Tools & Workflow
                    </h3>
                    <span
                      className="font-mono text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md"
                      style={{ backgroundColor: "#FFF2D1", color: "#6A2ED9" }}
                    >
                      DevOps & Tooling
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm mt-0.5" style={{ color: "#64748B" }}>
                    Version control, developer environments, testing suites, and package management.
                  </p>
                </div>
              </div>
              <span className="font-mono text-xs font-semibold self-start sm:self-auto" style={{ color: "#6A2ED9" }}>
                5 Technologies
              </span>
            </div>
          </Reveal>

          {/* 5 CARDS IN ONE ROW ON DESKTOP */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
            {toolsItems.map((item) => (
              <Reveal key={item.name} className="h-full">
                <div
                  className="group relative rounded-2xl border p-4 sm:p-5 h-full flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 cursor-default"
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderColor: "#F3DCCB",
                    boxShadow: "0 4px 20px -2px rgba(4, 120, 87, 0.04), 0 2px 6px -1px rgba(0, 0, 0, 0.02)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(4, 120, 87, 0.45)";
                    e.currentTarget.style.boxShadow =
                      "0 16px 32px -8px rgba(4, 120, 87, 0.12), 0 4px 12px -2px rgba(4, 120, 87, 0.04)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#F3DCCB";
                    e.currentTarget.style.boxShadow =
                      "0 4px 20px -2px rgba(4, 120, 87, 0.04), 0 2px 6px -1px rgba(0, 0, 0, 0.02)";
                  }}
                >
                  <div>
                    {/* TOP ICON & CIRCULAR ARROW */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-105"
                        style={{
                          backgroundColor: "#FFF8D6",
                          borderColor: "#FFF2D1",
                        }}
                      >
                        <item.icon className="w-6 h-6" />
                      </div>

                      <div
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-[#6A2ED9] group-hover:text-white"
                        style={{
                          backgroundColor: "#FFF2D1",
                          color: "#6A2ED9",
                        }}
                      >
                        <ArrowUpRight
                          size={14}
                          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </div>
                    </div>

                    <h4
                      className="font-display font-bold text-sm sm:text-base tracking-tight transition-colors duration-200 group-hover:text-[#6A2ED9]"
                      style={{ color: "#1F2937" }}
                    >
                      {item.name}
                    </h4>

                    <p className="text-xs leading-relaxed mt-1" style={{ color: "#64748B" }}>
                      {item.desc}
                    </p>
                  </div>

                  {/* BOTTOM HOVER ACCENT LINE */}
                  <div
                    className="h-1 w-6 mt-4 rounded-full transition-all duration-300 group-hover:w-full"
                    style={{ backgroundColor: "#FF6B6B" }}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
