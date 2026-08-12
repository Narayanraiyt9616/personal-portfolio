export default function SectionHeading({ path, title, subtitle, align = "left" }) {
  return (
    <div className={`mb-14 ${align === "center" ? "text-center mx-auto max-w-2xl" : ""}`}>
      {path && (
        <div
          className="font-mono text-xs tracking-wide mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full border"
          style={{ color: "var(--amber)", borderColor: "var(--border)" }}
        >
          <span aria-hidden="true">~/</span>{path}
        </div>
      )}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight" style={{ color: "var(--text)" }}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg" style={{ color: "var(--text-muted)" }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
