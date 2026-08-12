import { useEffect, useState } from "react";
import { ArrowRight, ArrowDown, Code2, Braces } from "lucide-react";
import { profile } from "../data/socials";
import profileImage from "../assets/awass.png";
import Reveal from "./Reveal";

function RotatingRole() {
  const roles = profile.roles;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % roles.length),
      2400
    );

    return () => clearInterval(id);
  }, [roles.length]);

  return (
    <span
      className="font-mono type-cursor"
      style={{ color: "var(--amber)" }}
    >
      {roles[index]}
    </span>
  );
}

export default function Hero() {
  return (
    <section>
      <div
        className="
          container-max
          px-5 sm:px-8
          pt-28 sm:pt-32 lg:pt-36
          relative
          grid
          lg:grid-cols-[1.1fr_0.9fr]
          gap-16
          items-center
        "
      >
        {/* LEFT CONTENT */}
        <div>
          <Reveal>
            <span
              className="font-mono text-xs sm:text-sm tracking-wide inline-block mb-6 px-3 py-1 rounded-full border"
              style={{
                color: "var(--teal)",
                borderColor: "var(--border)",
              }}
            >
              HELLO, I'M NARAYAN
            </span>
          </Reveal>

          <Reveal>
            <h1
              className="font-display font-semibold text-4xl sm:text-5xl md:text-6xl leading-[1.08] tracking-tight mb-6"
              style={{ color: "var(--text)" }}
            >
              Building Digital Experiences That Actually Matter.
            </h1>
          </Reveal>

          <Reveal>
            <p
              className="text-base sm:text-lg max-w-xl mb-3"
              style={{ color: "var(--text-muted)" }}
            >
              Computer Science Engineering student and Full-Stack Developer
              focused on building modern, scalable and user-friendly web
              applications.
            </p>
          </Reveal>

          <Reveal>
            <p
              className="font-mono text-sm mb-10"
              style={{ color: "var(--text-faint)" }}
            >
              currently working as a <RotatingRole />
            </p>
          </Reveal>

          <Reveal className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-medium text-sm transition-transform hover:-translate-y-0.5"
              style={{
                background: "var(--amber)",
                color: "var(--ink)",
              }}
            >
              View My Work <ArrowRight size={16} />
            </a>

            <a
              href="#contact"
              className="link-underline font-mono text-sm ml-1"
              style={{ color: "var(--text-muted)" }}
            >
              Let's Connect →
            </a>
          </Reveal>
        </div>

        {/* RIGHT IMAGE */}
        <Reveal className="relative mx-auto w-full max-w-[280px] lg:max-w-[340px]">
          <div
            className="relative rounded-[28px] border overflow-hidden w-full aspect-[4/5]"
            style={{
              borderColor: "var(--border-strong)",
              background:
                "linear-gradient(160deg, var(--surface), var(--surface-2))",
              boxShadow: "var(--shadow)",
            }}
          >
            {profileImage ? (
              <img
                src={profileImage}
                alt="Portrait of Narayan Rai"
                className="w-full h-full object-cover"
              />
            ) : (
              <div
                className="w-full h-full flex flex-col items-center justify-center gap-3 font-mono text-xs"
                style={{ color: "var(--text-faint)" }}
              >
                <Code2
                  size={20}
                  style={{ color: "var(--amber)" }}
                />
                <span>[USER PROVIDED IMAGE]</span>
              </div>
            )}

            {/* IMAGE OVERLAY */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                boxShadow: "inset 0 0 0 1px var(--border)",
                background:
                  "radial-gradient(circle at 70% 20%, color-mix(in srgb, var(--amber) 10%, transparent), transparent 60%)",
              }}
            />
          </div>

          {/* OPEN TO WORK */}
          <div
            className="hidden sm:flex absolute -bottom-6 -left-6 items-center gap-2 px-4 py-3 rounded-2xl border font-mono text-xs"
            style={{
              background: "var(--surface)",
              borderColor: "var(--border-strong)",
              color: "var(--text)",
              boxShadow: "var(--shadow)",
            }}
          >
            <span
              className="pulse-dot w-2 h-2 rounded-full inline-block"
              style={{ background: "var(--teal)" }}
            />
            open to work
          </div>

          {/* TECH STACK */}
          <div
            className="hidden sm:flex absolute -top-5 -right-5 items-center gap-2 px-3 py-2 rounded-xl border font-mono text-xs"
            style={{
              background: "var(--surface)",
              borderColor: "var(--border-strong)",
              color: "var(--amber)",
              boxShadow: "var(--shadow)",
            }}
          >
            <Braces size={13} />
            React · Node · Mongo
          </div>
        </Reveal>
      </div>

      {/* SCROLL DOWN */}
      <div className="hidden sm:flex justify-center mt-16">
        <a
          href="#about"
          aria-label="Scroll to About section"
          className="animate-bounce"
          style={{ color: "var(--text-faint)" }}
        >
          <ArrowDown size={18} />
        </a>
      </div>
    </section>
  );
}