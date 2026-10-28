export default function SectionHeading({ path, title, subtitle, align = "left" }) {
  return (
    <div className={`mb-8 sm:mb-10 ${align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-3xl"}`}>
      {path && (
        <div
          className="font-mono text-xs font-semibold tracking-wider uppercase mb-3.5 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border shadow-2xs"
          style={{
            backgroundColor: "#FFFFFF",
            borderColor: "#F3DCCB",
            color: "#6A2ED9",
          }}
        >
          <span aria-hidden="true" style={{ color: "#FF6B6B" }}>~/</span>
          <span>{path}</span>
        </div>
      )}
      <h2
        className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight"
        style={{ color: "#1F2937" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="mt-3.5 text-base sm:text-lg leading-relaxed"
          style={{ color: "#64748B" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
