import { Briefcase, GraduationCap, Calendar, Sparkles, Building2, BookOpen } from "lucide-react";
import { timeline } from "../data/experience";
import Reveal from "./Reveal";

export default function Experience() {
  // Separate timeline into Professional Experience and Education & Learning
  const experienceItems = timeline.filter(
    (item) => item.type === "Internship" || item.type === "Project" || item.type === "Hackathon"
  );

  const educationItems = timeline.filter(
    (item) => item.type === "Education" || item.type === "Learning"
  );

  return (
    <section
      id="experience"
      className="relative py-12 sm:py-16 overflow-hidden"
      style={{ backgroundColor: "#FFF8D6" }}
    >
      {/* Sunset Dream Ambient Gradient Glows */}
      <div
        className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full pointer-events-none opacity-25 blur-3xl -mr-28 -mt-28"
        style={{
          background: "radial-gradient(circle, #FFC857 0%, rgba(255, 200, 87, 0) 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full pointer-events-none opacity-20 blur-3xl -ml-28 -mb-28"
        style={{
          background: "radial-gradient(circle, #FF6B6B 0%, rgba(255, 107, 107, 0) 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container-max px-5 sm:px-8 relative z-10">
        {/* ===================================================================
            SECTION HEADING
           =================================================================== */}
        <Reveal>
          <div className="mb-8 sm:mb-10">
            {/* Top rounded badge with icon: MY JOURNEY */}
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono font-bold tracking-wider uppercase mb-3 shadow-2xs"
              style={{
                backgroundColor: "#FFFFFF",
                borderColor: "#F3DCCB",
                color: "#6A2ED9",
              }}
            >
              <Sparkles size={13} style={{ color: "#FF6B6B" }} />
              <span>MY JOURNEY</span>
            </div>

            {/* Main Heading with coral emphasis & golden underline */}
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight">
              <span style={{ color: "#1F2937" }}>Experience & </span>
              <span className="relative inline-block" style={{ color: "#FF6B6B" }}>
                Education
                <span
                  className="absolute left-0 -bottom-1 sm:-bottom-1.5 w-full h-[3.5px] rounded-full"
                  style={{ backgroundColor: "#FFC857" }}
                />
              </span>
            </h2>

            {/* Description */}
            <p
              className="mt-3 text-sm sm:text-base max-w-2xl leading-relaxed"
              style={{ color: "#64748B" }}
            >
              Building my technical foundation through education, hands-on experience, and continuous learning.
            </p>
          </div>
        </Reveal>

        {/* ===================================================================
            TWO-COLUMN MODERN TIMELINE LAYOUT
           =================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          {/* =================================================================
              COLUMN 1: PROFESSIONAL EXPERIENCE
             ================================================================= */}
          <Reveal>
            <div className="flex flex-col h-full">
              {/* Category Header */}
              <div className="flex items-center justify-between pb-3.5 mb-6 border-b" style={{ borderColor: "#F3DCCB" }}>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center border shadow-2xs"
                    style={{
                      backgroundColor: "#FFF2D1",
                      borderColor: "#F3DCCB",
                      color: "#6A2ED9",
                    }}
                  >
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-[#1F2937]">
                      Professional Experience
                    </h3>
                    <p className="text-xs font-mono" style={{ color: "#FF6B6B" }}>
                      Internships & Practical Projects
                    </p>
                  </div>
                </div>
                <span
                  className="font-mono text-xs font-semibold px-2.5 py-1 rounded-full border"
                  style={{
                    backgroundColor: "#FFF2D1",
                    borderColor: "#F3DCCB",
                    color: "#6A2ED9",
                  }}
                >
                  Experience
                </span>
              </div>

              {/* Timeline Items */}
              <div className="relative pl-6 sm:pl-7 space-y-5">
                {/* Vertical Timeline Track */}
                <div
                  className="absolute left-[9px] top-3 bottom-3 w-[2px] rounded-full"
                  style={{
                    background:
                      "linear-gradient(180deg, #FF6B6B 0%, #FFC857 65%, #F3DCCB 100%)",
                  }}
                  aria-hidden="true"
                />

                {experienceItems.map((item) => (
                  <div key={item.title} className="relative group">
                    {/* Timeline Milestone Dot */}
                    <div
                      className="absolute -left-[20px] top-5 w-[14px] h-[14px] rounded-full border-2 bg-white flex items-center justify-center shadow-xs transition-transform duration-200 group-hover:scale-125"
                      style={{ borderColor: "#FF6B6B" }}
                      aria-hidden="true"
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: "#FF6B6B" }}
                      />
                    </div>

                    {/* Timeline Card */}
                    <div
                      className="rounded-2xl border p-5 sm:p-6 transition-all duration-200 hover:-translate-y-1 relative overflow-hidden"
                      style={{
                        backgroundColor: "#FFFFFF",
                        borderColor: "#F3DCCB",
                        boxShadow: "0 2px 8px -2px rgba(106, 46, 217, 0.04)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "#FFC857";
                        e.currentTarget.style.boxShadow =
                          "0 12px 24px -8px rgba(106, 46, 217, 0.12), 0 4px 8px -2px rgba(106, 46, 217, 0.04)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "#F3DCCB";
                        e.currentTarget.style.boxShadow =
                          "0 2px 8px -2px rgba(106, 46, 217, 0.04)";
                      }}
                    >
                      {/* Left Subtle Accent Line */}
                      <span
                        className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl transition-opacity duration-200 opacity-0 group-hover:opacity-100"
                        style={{ backgroundColor: "#FF6B6B" }}
                        aria-hidden="true"
                      />

                      {/* Header with Title and Date Badge */}
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-1.5">
                        <h4 className="font-display font-bold text-base sm:text-lg text-[#1F2937] group-hover:text-[#FF6B6B] transition-colors leading-snug">
                          {item.title}
                        </h4>

                        {/* Date badge */}
                        <span
                          className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded-full border shrink-0 inline-flex items-center gap-1.5"
                          style={{
                            backgroundColor: "#FFF2D1",
                            borderColor: "#F3DCCB",
                            color: "#6A2ED9",
                          }}
                        >
                          <Calendar size={11} style={{ color: "#FF6B6B" }} />
                          <span>{item.date}</span>
                        </span>
                      </div>

                      {/* Organization & Category Tag */}
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium" style={{ color: "#FF6B6B" }}>
                          <Building2 size={13} className="shrink-0" />
                          <span>{item.org}</span>
                        </div>
                        <span className="text-gray-300">•</span>
                        <span
                          className="font-mono text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md border"
                          style={{
                            backgroundColor: "#FFF8D6",
                            borderColor: "#F3DCCB",
                            color: "#6A2ED9",
                          }}
                        >
                          {item.type}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm leading-relaxed text-[#64748B] mb-3.5">
                        {item.description}
                      </p>

                      {/* Technology Badges */}
                      <div className="flex flex-wrap gap-1.5">
                        {item.tech.map((t) => (
                          <span
                            key={t}
                            className="font-mono text-[11px] font-medium px-2.5 py-0.5 rounded-md border transition-colors hover:bg-[#FFF2D1]"
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
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* =================================================================
              COLUMN 2: EDUCATION & LEARNING
             ================================================================= */}
          <Reveal>
            <div className="flex flex-col h-full">
              {/* Category Header */}
              <div className="flex items-center justify-between pb-3.5 mb-6 border-b" style={{ borderColor: "#F3DCCB" }}>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center border shadow-2xs"
                    style={{
                      backgroundColor: "#FFF2D1",
                      borderColor: "#F3DCCB",
                      color: "#6A2ED9",
                    }}
                  >
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-[#1F2937]">
                      Education & Training
                    </h3>
                    <p className="text-xs font-mono" style={{ color: "#FF6B6B" }}>
                      Academic Degrees & Core Foundations
                    </p>
                  </div>
                </div>
                <span
                  className="font-mono text-xs font-semibold px-2.5 py-1 rounded-full border"
                  style={{
                    backgroundColor: "#FFF2D1",
                    borderColor: "#F3DCCB",
                    color: "#6A2ED9",
                  }}
                >
                  Education
                </span>
              </div>

              {/* Timeline Items */}
              <div className="relative pl-6 sm:pl-7 space-y-5">
                {/* Vertical Timeline Track */}
                <div
                  className="absolute left-[9px] top-3 bottom-3 w-[2px] rounded-full"
                  style={{
                    background:
                      "linear-gradient(180deg, #FF6B6B 0%, #FFC857 65%, #F3DCCB 100%)",
                  }}
                  aria-hidden="true"
                />

                {educationItems.map((item) => (
                  <div key={item.title} className="relative group">
                    {/* Timeline Milestone Dot */}
                    <div
                      className="absolute -left-[20px] top-5 w-[14px] h-[14px] rounded-full border-2 bg-white flex items-center justify-center shadow-xs transition-transform duration-200 group-hover:scale-125"
                      style={{ borderColor: "#FF6B6B" }}
                      aria-hidden="true"
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: "#FF6B6B" }}
                      />
                    </div>

                    {/* Timeline Card */}
                    <div
                      className="rounded-2xl border p-5 sm:p-6 transition-all duration-200 hover:-translate-y-1 relative overflow-hidden"
                      style={{
                        backgroundColor: "#FFFFFF",
                        borderColor: "#F3DCCB",
                        boxShadow: "0 2px 8px -2px rgba(106, 46, 217, 0.04)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "#FFC857";
                        e.currentTarget.style.boxShadow =
                          "0 12px 24px -8px rgba(106, 46, 217, 0.12), 0 4px 8px -2px rgba(106, 46, 217, 0.04)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "#F3DCCB";
                        e.currentTarget.style.boxShadow =
                          "0 2px 8px -2px rgba(106, 46, 217, 0.04)";
                      }}
                    >
                      {/* Left Subtle Accent Line */}
                      <span
                        className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl transition-opacity duration-200 opacity-0 group-hover:opacity-100"
                        style={{ backgroundColor: "#FF6B6B" }}
                        aria-hidden="true"
                      />

                      {/* Header with Title and Date Badge */}
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-1.5">
                        <h4 className="font-display font-bold text-base sm:text-lg text-[#1F2937] group-hover:text-[#FF6B6B] transition-colors leading-snug">
                          {item.title}
                        </h4>

                        {/* Date badge */}
                        <span
                          className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded-full border shrink-0 inline-flex items-center gap-1.5"
                          style={{
                            backgroundColor: "#FFF2D1",
                            borderColor: "#F3DCCB",
                            color: "#6A2ED9",
                          }}
                        >
                          <Calendar size={11} style={{ color: "#FF6B6B" }} />
                          <span>{item.date}</span>
                        </span>
                      </div>

                      {/* Organization & Category Tag */}
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium" style={{ color: "#FF6B6B" }}>
                          <BookOpen size={13} className="shrink-0" />
                          <span>{item.org}</span>
                        </div>
                        <span className="text-gray-300">•</span>
                        <span
                          className="font-mono text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md border"
                          style={{
                            backgroundColor: "#FFF8D6",
                            borderColor: "#F3DCCB",
                            color: "#6A2ED9",
                          }}
                        >
                          {item.type}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm leading-relaxed text-[#64748B] mb-3.5">
                        {item.description}
                      </p>

                      {/* Technology Badges */}
                      <div className="flex flex-wrap gap-1.5">
                        {item.tech.map((t) => (
                          <span
                            key={t}
                            className="font-mono text-[11px] font-medium px-2.5 py-0.5 rounded-md border transition-colors hover:bg-[#FFF2D1]"
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
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
