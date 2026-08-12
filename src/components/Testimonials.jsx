import { Quote } from "lucide-react";
import { testimonials } from "../data/misc";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-max px-5 sm:px-8">
        <Reveal>
          <SectionHeading path="testimonials" title="What People Say" align="center" />
        </Reveal>

        <Reveal className="max-w-xl mx-auto text-center rounded-2xl border p-10 sm:p-12" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
          <Quote size={26} className="mx-auto mb-5" style={{ color: "var(--amber)" }} />
          {testimonials
            .filter((t) => t.placeholder)
            .map((t) => (
              <p key={t.name} className="font-display text-lg sm:text-xl" style={{ color: "var(--text-muted)" }}>
                {t.name}
              </p>
            ))}
          <p className="font-mono text-xs mt-4" style={{ color: "var(--text-faint)" }}>
            Reach out after we work together and I'll add it here.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
