import { Sparkles, Blocks, MonitorSmartphone, Gauge, Heart, Puzzle } from "lucide-react";
import { whyWorkWithMe } from "../data/misc";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const icons = [Sparkles, Blocks, MonitorSmartphone, Gauge, Heart, Puzzle];

export default function WhyWorkWithMe() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-max px-5 sm:px-8">
        <Reveal>
          <SectionHeading path="why-me" title="Why Work With Me?" />
        </Reveal>

        <Reveal stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {whyWorkWithMe.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={item.title} className="group flex gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 border transition-transform duration-300 group-hover:-translate-y-1"
                  style={{ borderColor: "var(--border-strong)", color: "var(--teal)" }}
                >
                  <Icon size={17} />
                </div>
                <div>
                  <h3 className="font-display font-medium text-base mb-1.5" style={{ color: "var(--text)" }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
