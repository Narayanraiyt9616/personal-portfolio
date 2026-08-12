import { Layout, Layers, Plug, LayoutDashboard, Smartphone, PenTool } from "lucide-react";
import { services } from "../data/misc";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const icons = [Layout, Layers, Plug, LayoutDashboard, Smartphone, PenTool];

export default function Services() {
  return (
    <section className="py-24 sm:py-32" style={{ background: "var(--surface)" }}>
      <div className="container-max px-5 sm:px-8">
        <Reveal>
          <SectionHeading path="services" title="What I Can Build" />
        </Reveal>

        <Reveal stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={s.title}
                className="lift-card rounded-2xl border p-6 sm:p-7"
                style={{ background: "var(--ink)", borderColor: "var(--border)" }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "color-mix(in srgb, var(--amber) 12%, transparent)", color: "var(--amber)" }}
                >
                  <Icon size={19} />
                </div>
                <h3 className="font-display font-medium text-lg mb-2" style={{ color: "var(--text)" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{s.desc}</p>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
