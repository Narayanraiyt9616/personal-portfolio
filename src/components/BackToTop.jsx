import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-40 w-11 h-11 rounded-full flex items-center justify-center border transition-all duration-300 hover:-translate-y-1"
      style={{ background: "var(--surface)", borderColor: "var(--border-strong)", color: "var(--text)", boxShadow: "var(--shadow)" }}
    >
      <ArrowUp size={18} />
    </button>
  );
}
