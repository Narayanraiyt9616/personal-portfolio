import { process } from "../data/misc";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Process() {
  return (
    <section className="py-24 sm:py-32" style={{ background: "var(--surface)" }}>
      <div className="container-max px-5 sm:px-8">
        <Reveal>
          <SectionHeading path="process" title="How I Build" />
        </Reveal>

        <Reveal stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {process.map((p) => (
            <div
              key={p.step}
              className="lift-card rounded-2xl border p-6 relative overflow-hidden"
              style={{ background: "var(--ink)", borderColor: "var(--border)" }}
            >
              <span className="font-mono text-4xl font-semibold absolute -top-1 right-4 opacity-[0.15]" style={{ color: "var(--amber)" }}>
                {p.step}
              </span>
              <p className="font-mono text-xs mb-3" style={{ color: "var(--amber)" }}>Step {p.step}</p>
              <h3 className="font-display font-medium text-lg mb-2" style={{ color: "var(--text)" }}>{p.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{p.desc}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
