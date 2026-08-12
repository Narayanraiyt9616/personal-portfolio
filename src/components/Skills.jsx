import { skillGroups } from "../data/skills";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const levelWidth = { Comfortable: "90%", Intermediate: "70%", Familiar: "50%", Learning: "30%" };
const levelColor = { Comfortable: "var(--teal)", Intermediate: "var(--amber)", Familiar: "var(--amber-soft)", Learning: "var(--text-faint)" };

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32" style={{ background: "var(--surface)" }}>
      <div className="container-max px-5 sm:px-8">
        <Reveal>
          <SectionHeading path="skills" title="What I Work With" subtitle="Honest levels, not inflated percentages." />
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-10">
          {skillGroups.map((group) => (
            <Reveal key={group.category} className="rounded-2xl border p-6 sm:p-7" style={{ borderColor: "var(--border)", background: "var(--ink)" }}>
              <h3 className="font-display font-medium text-lg mb-5" style={{ color: "var(--text)" }}>
                {group.category}
              </h3>
              <div className="space-y-4">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm" style={{ color: "var(--text)" }}>{skill.name}</span>
                      <span className="font-mono text-[11px]" style={{ color: "var(--text-faint)" }}>{skill.level}</span>
                    </div>
                    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "var(--border)" }}>
                      <div
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ width: levelWidth[skill.level], background: levelColor[skill.level] }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
