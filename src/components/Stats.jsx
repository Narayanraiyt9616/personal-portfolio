import { useEffect, useRef, useState, useMemo } from "react";
import { projects } from "../data/projects";
import { techCategories } from "../data/techstack";
import { getPortfolioStats } from "../data/stats";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import Reveal from "./Reveal";

/* ==========================================================================
   SMOOTH NUMBER COUNTER WITH EASE-OUT
   ========================================================================== */
function Counter({ value, suffix, isVisible }) {
  const [count, setCount] = useState(0);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!isVisible) return;

    // If animation has already completed once, update immediately on data changes
    if (hasAnimatedRef.current) {
      setCount(value);
      return;
    }

    // Respect reduced-motion preferences
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(value);
      hasAnimatedRef.current = true;
      return;
    }

    const duration = 1000; // Between 800-1200ms range
    const start = performance.now();
    let frameId;

    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Smooth cubic ease-out curve
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      } else {
        setCount(value); // Guarantee exact final number
        hasAnimatedRef.current = true;
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => {
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [isVisible, value]);

  return (
    <div className="flex items-baseline font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-none">
      <span style={{ color: "#6A2ED9" }}>{count}</span>
      {suffix && (
        <span
          className="text-2xl sm:text-3xl lg:text-4xl font-bold ml-0.5 select-none"
          style={{ color: "#FF6B6B" }}
        >
          {suffix}
        </span>
      )}
    </div>
  );
}

/* ==========================================================================
   STATISTIC CARD COMPONENT
   ========================================================================== */
function StatCard({ stat, isVisible }) {
  return (
    <div
      className="group relative overflow-hidden rounded-[18px] sm:rounded-2xl p-5 sm:p-6 lg:p-7 flex flex-col justify-between h-full border transition-all duration-300 hover:-translate-y-1"
      style={{
        backgroundColor: "#FFFFFF",
        borderColor: "#F3DCCB",
        boxShadow:
          "0 4px 20px -2px rgba(106, 46, 217, 0.05), 0 2px 6px -1px rgba(106, 46, 217, 0.02)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "#FFC857";
        e.currentTarget.style.boxShadow =
          "0 14px 28px -6px rgba(106, 46, 217, 0.12), 0 4px 10px -2px rgba(106, 46, 217, 0.04)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "#F3DCCB";
        e.currentTarget.style.boxShadow =
          "0 4px 20px -2px rgba(106, 46, 217, 0.05), 0 2px 6px -1px rgba(106, 46, 217, 0.02)";
      }}
    >
      {/* Top subtle coral indicator line on hover */}
      <span
        className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundColor: "#FF6B6B" }}
        aria-hidden="true"
      />

      {/* Top Area: Emoji container + subtle light badge */}
      <div className="flex items-center justify-between gap-3 mb-4 sm:mb-5">
        <div
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center border shadow-2xs transition-transform duration-300 group-hover:scale-105 select-none"
          style={{
            backgroundColor: "#FFF2D1",
            borderColor: "#F3DCCB",
          }}
        >
          <span className="text-xl sm:text-2xl leading-none">{stat.emoji}</span>
        </div>

        {/* Small rounded status indicator badge */}
        <span
          className="font-mono text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full border shadow-2xs"
          style={{
            backgroundColor: "#FFF8D6",
            borderColor: "#F3DCCB",
            color: "#6A2ED9",
          }}
        >
          LIVE DATA
        </span>
      </div>

      {/* Metric Value & Label */}
      <div className="mt-auto">
        <Counter value={stat.value} suffix={stat.suffix} isVisible={isVisible} />

        <h3
          className="font-display font-bold text-sm sm:text-base mt-2 tracking-tight transition-colors duration-200 group-hover:text-[#FF6B6B]"
          style={{ color: "#1F2937" }}
        >
          {stat.label}
        </h3>

        <p className="text-xs leading-relaxed mt-0.5 line-clamp-1" style={{ color: "#64748B" }}>
          {stat.subtext}
        </p>

        {/* Bottom subtle accent bar */}
        <div
          className="h-1 w-6 group-hover:w-12 rounded-full transition-all duration-300 mt-3"
          style={{ backgroundColor: "#FFC857" }}
        />
      </div>
    </div>
  );
}

/* ==========================================================================
   STATS SECTION COMPONENT
   ========================================================================== */
export default function Stats() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  // Dynamically calculate stats reflecting real project & tech stack data
  const dynamicStats = useMemo(() => {
    return getPortfolioStats(projects, techCategories);
  }, []);

  return (
    <section
      id="stats"
      className="py-10 sm:py-12 relative overflow-hidden"
      style={{ backgroundColor: "#FFF8D6" }}
      ref={ref}
    >
      <div className="container-max px-5 sm:px-8 relative z-10">
        <Reveal>
          <div className="grid grid-cols-1 min-[380px]:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {dynamicStats.map((item) => (
              <StatCard key={item.id} stat={item} isVisible={isVisible} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
