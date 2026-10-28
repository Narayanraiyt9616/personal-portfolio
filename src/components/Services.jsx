import { Layout, Layers, Plug, LayoutDashboard, Smartphone, PenTool } from "lucide-react";
import { services } from "../data/misc";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const icons = [Layout, Layers, Plug, LayoutDashboard, Smartphone, PenTool];

export default function Services() {
  return (
    <section id="services" className="py-12 sm:py-16" style={{ backgroundColor: "#FFF8D6" }}>
      <div className="container-max px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            path="services"
            title="What I Can Build For You"
            subtitle="Specialized capabilities in modern web engineering, API design, and user-centric frontend development."
          />
        </Reveal>

        <Reveal stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={s.title}
                id={s.id}
                className="lift-card rounded-2xl border p-6 sm:p-7 flex flex-col justify-between scroll-mt-24"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderColor: "#F3DCCB",
                  boxShadow: "0 4px 20px -2px rgba(106, 46, 217, 0.05)",
                }}
              >
                <div>
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 border shadow-2xs"
                    style={{
                      backgroundColor: "#FFF2D1",
                      borderColor: "#F3DCCB",
                      color: "#FF6B6B",
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2" style={{ color: "#1F2937" }}>
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>
                    {s.desc}
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
