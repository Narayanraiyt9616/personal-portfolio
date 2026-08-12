import { ArrowRight } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { socials } from "../data/socials";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function GithubSection() {
  const cols = 26;
  const rows = 0;
  const cells = Array.from({ length: cols * rows }, (_, i) => i);

  return (
    <section className="py-0 sm:py-0" style={{ background: "var(--surface)" }}>
      {/* <div className="container-max px-5 sm:px-8"> */}
        {/* <Reveal>
          <SectionHeading path="github" title="Code, Contributions & Experiments" />
        </Reveal> */}

        {/* <Reveal
          className="rounded-2xl border p-6 sm:p-8"
          style={{ background: "var(--ink)", borderColor: "var(--border)" }}
        >
          <p className="font-mono text-xs mb-5" style={{ color: "var(--text-faint)" }}>
            [GITHUB CONTRIBUTION GRAPH PLACEHOLDER]
          </p>
          <div
            className="grid gap-[3px] overflow-x-auto pb-2"
            style={{ gridTemplateColumns: `repeat(${cols}, minmax(10px, 1fr))` }}
            aria-hidden="true"
          >
            {cells.map((i) => {
              const level = (i * 37) % 5;
              const shades = ["var(--surface-2)", "color-mix(in srgb, var(--teal) 25%, var(--surface-2))", "color-mix(in srgb, var(--teal) 45%, var(--surface-2))", "color-mix(in srgb, var(--teal) 70%, var(--surface-2))", "var(--teal)"];
              return <div key={i} className="w-full aspect-square rounded-[2px]" style={{ background: shades[level] }} />;
            })}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-6 mt-8">
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              Connect the GitHub API for live contribution data — this placeholder keeps the layout intact until then.
            </p>
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-xs shrink-0"
              style={{ background: "var(--amber)", color: "var(--ink)" }}
            >
              <GithubIcon size={14} /> View GitHub Profile <ArrowRight size={13} />
            </a>
          </div>
        </Reveal> */}
      {/* </div> */}
    </section>
  );
}
