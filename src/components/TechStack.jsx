import { techCategories } from "../data/techstack";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function TechStack() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-max px-5 sm:px-8">
        <Reveal>
          <SectionHeading path="stack" title="Tools I Build With" />
        </Reveal>

        <div className="space-y-14">
          {techCategories.map((group) => (
            <Reveal key={group.category}>
              <p className="font-mono text-xs mb-5 uppercase tracking-wide" style={{ color: "var(--text-faint)" }}>
                {group.category}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    tabIndex={0}
                    className="lift-card group rounded-2xl border p-4 sm:p-5"
                    style={{ background: "var(--surface)", borderColor: "var(--border)" }}
                  >
                    <p className="font-display font-medium text-sm sm:text-base mb-1.5 transition-colors" style={{ color: "var(--text)" }}>
                      {item.name}
                    </p>
                    <p className="text-xs leading-snug" style={{ color: "var(--text-faint)" }}>
                      {item.desc}
                    </p>
                    <div
                      className="h-px w-6 mt-4 transition-all duration-300 group-hover:w-10"
                      style={{ background: "var(--amber)" }}
                    />
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
