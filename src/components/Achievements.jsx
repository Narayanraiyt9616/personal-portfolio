import { Trophy, Briefcase, FolderGit2, GraduationCap } from "lucide-react";
import { achievements } from "../data/misc";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const icons = [Trophy, Briefcase, FolderGit2, GraduationCap];

export default function Achievements() {
  return (
    <section className="py-12 sm:py-16" style={{ backgroundColor: "#FFF8D6" }}>
      <div className="container-max px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            path="achievements"
            title="Key Milestones & Recognition"
            subtitle="Notable accomplishments in competitions, practical coursework, and real-world project deliveries."
          />
        </Reveal>

        <Reveal stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={item.title}
                className="lift-card rounded-2xl border p-6 flex flex-col justify-between"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderColor: "#F3DCCB",
                  boxShadow: "0 4px 20px -2px rgba(106, 46, 217, 0.05)",
                }}
              >
                <div>
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 border shadow-2xs"
                    style={{
                      backgroundColor: "#FFF2D1",
                      borderColor: "#F3DCCB",
                      color: "#6A2ED9",
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <span
                    className="inline-block font-mono text-[11px] font-semibold uppercase tracking-wider mb-2 px-2.5 py-0.5 rounded-md border"
                    style={{
                      backgroundColor: "#FFF2D1",
                      borderColor: "#F3DCCB",
                      color: "#FF6B6B",
                    }}
                  >
                    {item.tag}
                  </span>
                  <h3 className="font-display font-semibold text-lg mb-2" style={{ color: "#1F2937" }}>
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "#64748B" }}>
                    {item.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
