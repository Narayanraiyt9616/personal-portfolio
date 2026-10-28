import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-40 w-11 h-11 rounded-full flex items-center justify-center border transition-all duration-200 hover:-translate-y-1 shadow-md cursor-pointer"
      style={{
        backgroundColor: "#FF6B6B",
        borderColor: "#FF8E8E",
        color: "#FFFFFF",
        boxShadow: "0 6px 18px -2px rgba(255, 107, 107, 0.45)",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#E05353")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FF6B6B")}
    >
      <ArrowUp size={18} />
    </button>
  );
}
