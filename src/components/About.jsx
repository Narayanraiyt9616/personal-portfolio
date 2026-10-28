import { GraduationCap, MapPin, Target, Rocket, Code2, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const cards = [
  {
    icon: GraduationCap,
    label: "Education",
    title: "B.Tech in Computer Science",
    detail: "Engineering curriculum covering algorithms, data structures, and software architecture.",
  },
  {
    icon: MapPin,
    label: "Location",
    title: "Uttar Pradesh, India",
    detail: "Available for on-site, hybrid, and remote development opportunities worldwide.",
  },
  {
    icon: Target,
    label: "Core Specialization",
    title: "Full-Stack Web Development",
    detail: "Building end-to-end applications with React, Node.js, Express, and MongoDB.",
  },
  {
    icon: Rocket,
    label: "Current Pursuit",
    title: "Production-Grade Engineering",
    detail: "Designing performant, maintainable software and shipping real user solutions.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16" style={{ backgroundColor: "#FFF8D6" }}>
      <div className="container-max px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            path="about"
            title="More Than Just Code."
            subtitle="I build thoughtful, scalable applications where reliable engineering meets intuitive user experience."
          />
        </Reveal>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6 sm:gap-8 items-start">
          {/* MAIN BIO CARD */}
          <Reveal>
            <div
              className="rounded-2xl border p-6 sm:p-8 h-full flex flex-col justify-between"
              style={{
                backgroundColor: "#FFFFFF",
                borderColor: "#F3DCCB",
                boxShadow: "0 4px 20px -2px rgba(106, 46, 217, 0.05)",
              }}
            >
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: "#FFF2D1", color: "#6A2ED9" }}
                  >
                    <Code2 size={18} />
                  </span>
                  <h3 className="font-display font-semibold text-xl" style={{ color: "#1F2937" }}>
                    Engineering With Purpose
                  </h3>
                </div>

                <div className="space-y-4 text-base leading-relaxed" style={{ color: "#64748B" }}>
                  <p>
                    I am a Computer Science Engineering student and developer dedicated to crafting software that is resilient, accessible, and enjoyable to use. My passion lies in transforming conceptual challenges into high-performing digital solutions.
                  </p>
                  <p>
                    My technical stack spans the full web lifecycle: designing component-based responsive interfaces with React and modern CSS, architecting secure RESTful endpoints with Node.js and Express, and engineering normalized or document database models with MongoDB and MySQL.
                  </p>
                  <p>
                    I believe true craftsmanship is about clarity and consistency — writing clean, readable code, structuring maintainable APIs, and ensuring every interactive state feels natural to the user.
                  </p>
                </div>
              </div>

              <div
                className="mt-8 pt-6 border-t flex flex-wrap items-center justify-between gap-4 font-mono text-xs"
                style={{ borderColor: "#F3DCCB", color: "#64748B" }}
              >
                <span className="flex items-center gap-2">
                  <Sparkles size={14} style={{ color: "#FFC857" }} />
                  Continuous Learner & Problem Solver
                </span>
                <span className="font-semibold" style={{ color: "#FF6B6B" }}>
                  Ready to collaborate
                </span>
              </div>
            </div>
          </Reveal>

          {/* HIGHLIGHT CARDS GRID */}
          <Reveal stagger className="grid sm:grid-cols-2 gap-4">
            {cards.map(({ icon: Icon, label, title, detail }) => (
              <div
                key={label}
                className="lift-card rounded-2xl border p-5 flex flex-col justify-between"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderColor: "#F3DCCB",
                  boxShadow: "0 4px 20px -2px rgba(106, 46, 217, 0.04)",
                }}
              >
                <div>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 border"
                    style={{
                      backgroundColor: "#FFF2D1",
                      borderColor: "#F3DCCB",
                      color: "#6A2ED9",
                    }}
                  >
                    <Icon size={19} />
                  </div>
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-wider mb-1" style={{ color: "#FF6B6B" }}>
                    {label}
                  </p>
                  <h4 className="font-display font-semibold text-sm sm:text-base mb-2" style={{ color: "#1F2937" }}>
                    {title}
                  </h4>
                  <p className="text-xs leading-relaxed" style={{ color: "#64748B" }}>
                    {detail}
                  </p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
