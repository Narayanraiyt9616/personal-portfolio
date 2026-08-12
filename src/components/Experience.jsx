import { timeline } from "../data/experience";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="container-max px-5 sm:px-8">
        <Reveal>
          <SectionHeading path="journey" title="My Journey" />
        </Reveal>

        <div className="relative">
          <div
            className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px"
            style={{ background: "var(--border)" }}
            aria-hidden="true"
          />
          <ol className="space-y-10">
            {timeline.map((item) => (
              <Reveal as="li" key={item.title} className="relative pl-8 sm:pl-10">
                <span
                  className="absolute left-0 top-1.5 w-[15px] h-[15px] sm:w-[19px] sm:h-[19px] rounded-full border-2"
                  style={{ background: "var(--ink)", borderColor: "var(--amber)" }}
                  aria-hidden="true"
                />
                <div
                  className="lift-card rounded-2xl border p-5 sm:p-6"
                  style={{ background: "var(--surface)", borderColor: "var(--border)" }}
                >
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="font-mono text-xs px-2.5 py-1 rounded-full border" style={{ color: "var(--teal)", borderColor: "var(--border)" }}>
                      {item.type}
                    </span>
                    <span className="font-mono text-xs" style={{ color: "var(--text-faint)" }}>{item.date}</span>
                  </div>
                  <h3 className="font-display font-medium text-lg sm:text-xl mb-1" style={{ color: "var(--text)" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm mb-3" style={{ color: "var(--text-faint)" }}>{item.org}</p>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((t) => (
                      <span key={t} className="font-mono text-[11px] px-2 py-1 rounded-md" style={{ background: "var(--surface-2)", color: "var(--text-muted)" }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
