import { quickInfo } from "../data/misc";

export default function IntroStrip() {
  const items = [...quickInfo, ...quickInfo, ...quickInfo];
  return (
    <div
      className="relative border-y overflow-hidden"
      style={{
        backgroundColor: "#FFFFFF",
        borderColor: "#F3DCCB",
      }}
      aria-label="Quick status"
    >
      <div className="container-max px-5 sm:px-8 py-3.5 flex items-center gap-3 overflow-hidden">
        <span
          className="pulse-dot w-2 h-2 rounded-full shrink-0"
          style={{ backgroundColor: "#FF6B6B" }}
          aria-hidden="true"
        />
        <div className="overflow-hidden flex-1">
          <div
            className="flex whitespace-nowrap marquee-track font-mono text-xs sm:text-[13px] font-medium"
            style={{ color: "#6A2ED9" }}
          >
            {items.map((item, i) => (
              <span key={i} className="inline-flex items-center">
                <span>{item}</span>
                <span className="mx-6 font-semibold" style={{ color: "#FFC857" }}>
                  /
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
