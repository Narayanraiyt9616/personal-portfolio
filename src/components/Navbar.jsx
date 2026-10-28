import { useEffect, useState } from "react";
import { Search, Moon, MessageSquare, Menu, X, ArrowRight } from "lucide-react";
import { navLinks } from "../utils/constants";
import { profile } from "../data/socials";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMoonActive, setIsMoonActive] = useState(false);

  // Active section tracking on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((l) => document.querySelector(l.href));
      const scrollPos = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].href);
          return;
        }
      }
      setActiveSection("#home");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  // Handle Search submit: jump to section if it matches or scroll to projects
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    const term = searchQuery.toLowerCase().trim();
    const match = navLinks.find(
      (l) => l.label.toLowerCase().includes(term) || l.href.toLowerCase().includes(term)
    );

    if (match) {
      const target = document.querySelector(match.href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        setActiveSection(match.href);
      }
    } else {
      const projects = document.querySelector("#projects") || document.querySelector("#stack");
      if (projects) {
        projects.scrollIntoView({ behavior: "smooth" });
      }
    }
    setSearchOpen(false);
    setSearchQuery("");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-3 sm:px-6 pt-3 sm:pt-4">
      {/* FLOATING NAVBAR CONTAINER - DEEP ROYAL PURPLE (#6A2ED9) */}
      <div
        className="container-max rounded-2xl sm:rounded-full border transition-all duration-300 relative"
        style={{
          background: "linear-gradient(135deg, #6A2ED9 0%, #5320B0 50%, #3F158C 100%)",
          borderColor: "rgba(243, 220, 203, 0.35)",
          boxShadow: "0 10px 25px -5px rgba(106, 46, 217, 0.35), 0 8px 10px -6px rgba(106, 46, 217, 0.2)",
          backdropFilter: "blur(12px)",
        }}
      >
        <nav className="flex items-center justify-between px-3.5 sm:px-6 py-2.5 sm:py-3">
          {/* =================================================================
              LEFT: LOGO & NAME
             ================================================================= */}
          <a
            href="#home"
            onClick={() => setActiveSection("#home")}
            className="group flex items-center gap-3 transition-opacity hover:opacity-90 shrink-0"
          >
            {/* Monogram Badge */}
            <span
              className="w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-sm tracking-wider shadow-sm transition-transform duration-200 group-hover:scale-105"
              style={{
                backgroundColor: "#FF6B6B",
                color: "#FFFFFF",
                border: "1px solid rgba(255, 255, 255, 0.35)",
              }}
            >
              {profile.initials}
            </span>

            {/* Brand Typography */}
            <div className="flex flex-col">
              <span
                className="font-display font-bold text-base sm:text-lg tracking-tight leading-none text-white"
              >
                {profile.name}
              </span>
              <span
                className="text-[11px] font-mono tracking-wide mt-1 leading-none font-medium"
                style={{ color: "#FFC857" }}
              >
                Full-Stack Developer
              </span>
            </div>
          </a>

          {/* =================================================================
              CENTER: TRANSLUCENT PILL-SHAPED NAVIGATION CONTAINER
             ================================================================= */}
          <div className="hidden lg:flex items-center justify-center">
            <ul
              className="flex items-center gap-1 p-1.5 rounded-full border shadow-xs"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.12)",
                borderColor: "rgba(243, 220, 203, 0.25)",
                backdropFilter: "blur(8px)",
              }}
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;

                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setActiveSection(link.href)}
                      className="inline-block transition-all duration-200 font-medium text-xs sm:text-[13px] rounded-full"
                      style={
                        isActive
                          ? {
                              backgroundColor: "#FF6B6B",
                              color: "#FFFFFF",
                              padding: "6px 16px",
                              boxShadow: "0 2px 8px rgba(255, 107, 107, 0.4)",
                            }
                          : {
                              color: "#FFF8D6",
                              padding: "6px 14px",
                            }
                      }
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.16)";
                          e.currentTarget.style.color = "#FFC857";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.backgroundColor = "transparent";
                          e.currentTarget.style.color = "#FFF8D6";
                        }
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* =================================================================
              RIGHT: CIRCULAR ACTION BUTTONS & CONTACT ME
             ================================================================= */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Circular Search Button */}
            <button
              onClick={() => setSearchOpen((prev) => !prev)}
              aria-label="Search portfolio"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border transition-all duration-200 hover:scale-105 active:scale-95 shadow-xs cursor-pointer"
              style={{
                backgroundColor: searchOpen ? "#FF6B6B" : "rgba(255, 255, 255, 0.14)",
                borderColor: "rgba(243, 220, 203, 0.3)",
                color: searchOpen ? "#FFFFFF" : "#FFF8D6",
              }}
              title="Search"
            >
              <Search size={16} />
            </button>

            {/* Circular Moon Button */}
            <button
              onClick={() => setIsMoonActive((m) => !m)}
              aria-label="Toggle theme appearance"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border transition-all duration-200 hover:scale-105 active:scale-95 shadow-xs cursor-pointer"
              style={{
                backgroundColor: isMoonActive ? "#FF6B6B" : "rgba(255, 255, 255, 0.14)",
                borderColor: "rgba(243, 220, 203, 0.3)",
                color: isMoonActive ? "#FFFFFF" : "#FFF8D6",
              }}
              title="Theme mode"
            >
              <Moon size={16} />
            </button>

            {/* Coral-Red Contact Me Button */}
            <a
              href="#contact"
              onClick={() => setActiveSection("#contact")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm hover:shadow-md cursor-pointer ml-1 text-white"
              style={{
                backgroundColor: "#FF6B6B",
                border: "1px solid rgba(255, 255, 255, 0.25)",
                boxShadow: "0 4px 14px 0 rgba(255, 107, 107, 0.35)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#E05353")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FF6B6B")}
            >
              <MessageSquare size={14} className="fill-current" />
              <span>CONTACT ME</span>
            </a>
          </div>

          {/* =================================================================
              MOBILE ACTIONS (Menu Toggle + Search)
             ================================================================= */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={() => setSearchOpen((prev) => !prev)}
              aria-label="Search"
              className="w-9 h-9 rounded-full flex items-center justify-center border shadow-xs"
              style={{
                backgroundColor: searchOpen ? "#FF6B6B" : "rgba(255, 255, 255, 0.15)",
                borderColor: "rgba(243, 220, 203, 0.3)",
                color: searchOpen ? "#FFFFFF" : "#FFF8D6",
              }}
            >
              <Search size={15} />
            </button>

            <button
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
              className="w-9 h-9 rounded-full flex items-center justify-center border shadow-xs transition-colors"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                borderColor: "rgba(243, 220, 203, 0.3)",
                color: "#FFF8D6",
              }}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {/* =================================================================
            INLINE SEARCH OVERLAY (Expands smoothly when Search is clicked)
           ================================================================= */}
        {searchOpen && (
          <div
            className="px-4 pb-3 sm:px-6 sm:pb-3.5 pt-1 border-t"
            style={{ borderColor: "rgba(243, 220, 203, 0.3)" }}
          >
            <form onSubmit={handleSearchSubmit} className="relative max-w-md mx-auto flex items-center gap-2">
              <input
                type="text"
                autoFocus
                placeholder="Search sections (e.g. Projects, Skills, Contact)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full py-2 pl-4 pr-10 text-xs sm:text-sm outline-none border transition-all"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderColor: "#F3DCCB",
                  color: "#1F2937",
                }}
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-full text-xs font-semibold shrink-0 cursor-pointer text-white"
                style={{
                  backgroundColor: "#FF6B6B",
                }}
              >
                Go
              </button>
            </form>
          </div>
        )}
      </div>

      {/* =================================================================
          MOBILE DRAWER
         ================================================================= */}
      <div
        className="lg:hidden overflow-hidden transition-all duration-300 ease-in-out mt-2"
        style={{
          maxHeight: open ? "460px" : "0px",
          opacity: open ? 1 : 0,
        }}
      >
        <div
          className="container-max rounded-2xl border p-4 sm:p-5 shadow-xl"
          style={{
            background: "linear-gradient(135deg, #6A2ED9 0%, #5320B0 100%)",
            borderColor: "rgba(243, 220, 203, 0.35)",
            boxShadow: "0 15px 30px -8px rgba(106, 46, 217, 0.45)",
          }}
        >
          {/* Inner Navigation Container */}
          <div
            className="rounded-2xl p-2 border shadow-xs mb-3"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              borderColor: "rgba(243, 220, 203, 0.2)",
            }}
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;

                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => {
                        setActiveSection(link.href);
                        setOpen(false);
                      }}
                      className="flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all"
                      style={
                        isActive
                          ? {
                              backgroundColor: "#FF6B6B",
                              color: "#FFFFFF",
                            }
                          : {
                              color: "#FFF8D6",
                            }
                      }
                    >
                      <span>{link.label}</span>
                      <ArrowRight size={14} style={{ color: isActive ? "#FFFFFF" : "#FFC857" }} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Quick Actions & Contact Button */}
          <div className="flex items-center gap-2 pt-1">
            <button
              onClick={() => setIsMoonActive((m) => !m)}
              aria-label="Toggle theme appearance"
              className="w-10 h-10 rounded-xl flex items-center justify-center border shadow-xs shrink-0 cursor-pointer"
              style={{
                backgroundColor: isMoonActive ? "#FF6B6B" : "rgba(255, 255, 255, 0.15)",
                borderColor: "rgba(243, 220, 203, 0.3)",
                color: isMoonActive ? "#FFFFFF" : "#FFF8D6",
              }}
            >
              <Moon size={16} />
            </button>

            <a
              href="#contact"
              onClick={() => {
                setActiveSection("#contact");
                setOpen(false);
              }}
              className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-center text-white shadow-sm"
              style={{
                backgroundColor: "#FF6B6B",
                border: "1px solid rgba(255, 255, 255, 0.25)",
              }}
            >
              <MessageSquare size={14} className="fill-current" />
              <span>CONTACT ME</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
