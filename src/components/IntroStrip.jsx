import { quickInfo } from "../data/misc";

export default function IntroStrip() {
  const items = [...quickInfo, ...quickInfo];
  return (
    <div
      className="relative border-y overflow-hidden"
      style={{ borderColor: "var(--border)", background: "var(--surface)" }}
      aria-label="Quick status"
    >
      <div className="container-max px-5 sm:px-8 py-3 flex items-center gap-3 overflow-hidden">
        <span className="pulse-dot w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--teal)" }} aria-hidden="true" />
        <div className="overflow-hidden flex-1">
          <div className="flex whitespace-nowrap marquee-track font-mono text-xs sm:text-[13px]" style={{ color: "var(--text-muted)" }}>
            {items.map((item, i) => (
              <span key={i} className="inline-flex items-center">
                {item}
                <span className="mx-5" style={{ color: "var(--border-strong)" }}>/</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
