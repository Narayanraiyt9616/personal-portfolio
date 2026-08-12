import { Trophy, Briefcase, FolderGit2, GraduationCap } from "lucide-react";
import { achievements } from "../data/misc";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const icons = [Trophy, Briefcase, FolderGit2, GraduationCap];

export default function Achievements() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-max px-5 sm:px-8">
        <Reveal>
          <SectionHeading path="achievements" title="Milestones So Far" />
        </Reveal>

        <Reveal stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={item.title}
                className="lift-card rounded-2xl border p-6"
                style={{ background: "var(--surface)", borderColor: "var(--border)" }}
              >
                <Icon size={22} style={{ color: "var(--amber)" }} />
                <p className="font-mono text-[11px] mt-4 mb-1" style={{ color: "var(--teal)" }}>{item.tag}</p>
                <h3 className="font-display font-medium text-lg mb-2" style={{ color: "var(--text)" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{item.detail}</p>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
