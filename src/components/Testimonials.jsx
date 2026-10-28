import { Quote } from "lucide-react";
import { testimonials } from "../data/misc";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  return (
    <section className="py-12 sm:py-16" style={{ backgroundColor: "#FFF8D6" }}>
      <div className="container-max px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            path="testimonials"
            title="Recommendations & Feedback"
            subtitle="Thoughts and endorsements from team members, project partners, and mentors."
            align="center"
          />
        </Reveal>

        <Reveal className="max-w-2xl mx-auto">
          <div
            className="text-center rounded-2xl border p-6 sm:p-8"
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "#F3DCCB",
              boxShadow: "0 4px 20px -2px rgba(106, 46, 217, 0.05)",
            }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-6 border"
              style={{
                backgroundColor: "#FFF2D1",
                borderColor: "#F3DCCB",
                color: "#6A2ED9",
              }}
            >
              <Quote size={22} />
            </div>

            {testimonials
              .filter((t) => t.placeholder)
              .map((t) => (
                <p key={t.name} className="font-display text-lg sm:text-xl font-medium mb-3" style={{ color: "#1F2937" }}>
                  "{t.name}"
                </p>
              ))}

            <p className="font-mono text-xs sm:text-sm" style={{ color: "#64748B" }}>
              Interested in collaborating? Let's connect and build exceptional software together.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
