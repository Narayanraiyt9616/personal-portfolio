import { useEffect, useState } from "react";
import { stats } from "../data/stats";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

function Counter({ value, suffix, isVisible }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(value);
      return;
    }
    const duration = 1400;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isVisible, value]);

  return (
    <span className="font-display font-semibold text-4xl sm:text-5xl" style={{ color: "var(--text)" }}>
      {count}
      <span style={{ color: "var(--amber)" }}>{suffix}</span>
    </span>
  );
}

export default function Stats() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section className="py-20 border-y" style={{ borderColor: "var(--border)" }} ref={ref}>
      <div className="container-max px-5 sm:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
        {stats.map((s) => (
          <div key={s.label} className="text-center sm:text-left">
            <Counter value={s.value} suffix={s.suffix} isVisible={isVisible} />
            <p className="font-mono text-xs sm:text-sm mt-2" style={{ color: "var(--text-muted)" }}>
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
