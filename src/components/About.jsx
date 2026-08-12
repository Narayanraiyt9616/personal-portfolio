import { GraduationCap, MapPin, Target, Rocket } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const cards = [
  { icon: GraduationCap, label: "Education", value: "Computer Science Engineering" },
  { icon: MapPin, label: "Location", value: "Sant Kabir Nagar, Uttar Pradesh, India" },
  { icon: Target, label: "Focus", value: "Full-Stack Development" },
  { icon: Rocket, label: "Current Goal", value: "Building production-ready applications" },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container-max px-5 sm:px-8">
        <Reveal>
          <SectionHeading path="about" title="More Than Just Code." />
        </Reveal>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-start">
          <Reveal className="space-y-5 text-base sm:text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
            <p>
              I'm a Computer Science Engineering student who spends most of his time turning ideas into
              working software — not just interfaces that look good, but applications that hold up once
              real data and real users hit them.
            </p>
            <p>
              My work sits across the full stack: React on the frontend, Node.js and Express on the
              backend, and MongoDB or MySQL underneath. I care as much about how an API is structured
              and how a database is modeled as I do about how a button feels when you hover it.
            </p>
            <p>
              Most of what I know comes from building — shipping small projects, breaking them, and
              fixing them properly instead of patching around the problem. I'm still early in my career,
              but I approach every project with the same standard: clean UI, thoughtful UX, and code
              that someone else could actually read.
            </p>
          </Reveal>

          <Reveal stagger className="grid sm:grid-cols-2 gap-4">
            {cards.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="lift-card rounded-2xl border p-5"
                style={{ background: "var(--surface)", borderColor: "var(--border)" }}
              >
                <Icon size={20} style={{ color: "var(--amber)" }} />
                <p className="font-mono text-xs mt-4 mb-1.5" style={{ color: "var(--text-faint)" }}>
                  {label}
                </p>
                <p className="font-display font-medium text-sm leading-snug" style={{ color: "var(--text)" }}>
                  {value}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
