import { useEffect, useState } from "react";
import { Menu, X, FileDown } from "lucide-react";
import { navLinks } from "../utils/constants";
import { socials, profile } from "../data/socials";
import ThemeToggle from "./ThemeToggle";

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "color-mix(in srgb, var(--ink) 78%, transparent)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        boxShadow: scrolled ? "var(--shadow)" : "none",
      }}
    >
      <nav className="container-max flex items-center justify-between px-5 sm:px-8 py-4">
        <a href="#home" className="font-display font-semibold text-lg tracking-tight flex items-center gap-2" style={{ color: "var(--text)" }}>
          <span
            className="w-9 h-9 rounded-lg flex items-center justify-center font-mono text-sm border"
            style={{ borderColor: "var(--border-strong)", color: "var(--amber)" }}
          >
            {profile.initials}
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 font-mono text-[13px]" style={{ color: "var(--text-muted)" }}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="link-underline hover:text-[var(--text)] transition-colors" style={{ color: "inherit" }}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="w-10 h-10 rounded-full flex items-center justify-center border"
            style={{ borderColor: "var(--border)", color: "var(--text)" }}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: open ? "420px" : "0px",
          background: "var(--ink)",
          borderBottom: open ? "1px solid var(--border)" : "none",
        }}
      >
        <ul className="flex flex-col px-6 py-4 gap-1 font-mono text-sm">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 border-b"
                style={{ color: "var(--text)", borderColor: "var(--border)" }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
