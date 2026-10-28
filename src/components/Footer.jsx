import { ArrowUp, ArrowUpRight, Mail, Send, ChevronRight, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterXIcon } from "./BrandIcons";
import { profile, socials } from "../data/socials";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
    { label: "Skills", href: "/#skills" },
    { label: "Projects", href: "/#projects" },
    { label: "Experience", href: "/#experience" },
    { label: "Contact", href: "/#contact" },
  ];

  const serviceLinks = [
    { label: "Frontend Development", href: "/#frontend-development" },
    { label: "Backend Development", href: "/#backend-development" },
    { label: "Full-Stack Development", href: "/#fullstack-development" },
    { label: "Responsive Web Design", href: "/#responsive-web-design" },
    { label: "API Development", href: "/#api-development" },
  ];

  const socialLinks = [
    {
      label: "GitHub",
      href: socials.github || "https://github.com/Narayanraiyt9616",
      icon: GithubIcon,
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com",
      icon: LinkedinIcon,
    },
    {
      label: "Twitter / X",
      href: "https://x.com",
      icon: TwitterXIcon,
    },
    {
      label: "Email",
      href: `mailto:${profile.email}`,
      icon: Mail,
    },
  ];

  return (
    <footer
      className="relative overflow-hidden text-white pt-12 sm:pt-14 pb-8 sm:pb-9 border-t"
      style={{
        background: "linear-gradient(180deg, #6A2ED9 0%, #5320B0 50%, #38127D 100%)",
        borderColor: "rgba(243, 220, 203, 0.2)",
      }}
    >
      {/* Subtle Ambient Decorative Glows */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 rounded-full pointer-events-none blur-3xl opacity-20"
        style={{ backgroundColor: "#FFC857" }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-10 -left-10 w-80 h-80 rounded-full pointer-events-none blur-3xl opacity-15"
        style={{ backgroundColor: "#FF6B6B" }}
        aria-hidden="true"
      />

      <div className="container-max px-5 sm:px-8 relative z-10">
        {/* FOUR COLUMN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 pb-8 sm:pb-10 border-b border-[rgba(243,220,203,0.2)]">
          {/* =================================================================
              COLUMN 1 — PERSONAL BRANDING
             ================================================================= */}
          <div className="flex flex-col justify-between">
            <div>
              {/* Brand Logo & Name */}
              <div className="flex items-center gap-3.5 mb-4">
                <span
                  className="w-11 h-11 rounded-xl flex items-center justify-center font-mono font-bold text-sm tracking-wider shadow-sm transition-transform duration-200 hover:scale-105"
                  style={{
                    backgroundColor: "#FFC857",
                    color: "#6A2ED9",
                    border: "1.5px solid #F3DCCB",
                  }}
                >
                  {profile.initials}
                </span>
                <div>
                  <h3 className="font-display font-bold text-xl leading-tight text-white">
                    {profile.name}
                  </h3>
                  <p className="font-mono text-xs font-medium tracking-wide uppercase text-[#FFC857]">
                    Full-Stack Developer
                  </p>
                </div>
              </div>

              {/* Short description */}
              <p className="text-sm leading-relaxed max-w-sm mb-6 text-[#FFF8D6]/85">
                Building modern, scalable, and user-friendly web experiences.
              </p>
            </div>

            {/* Social media icons */}
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-[#FFC857]/80 mb-3">
                Connect With Me
              </p>
              <div className="flex items-center gap-2.5">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-200 hover:-translate-y-1 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#FF6B6B] cursor-pointer"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.08)",
                      borderColor: "rgba(243, 220, 203, 0.25)",
                      color: "#FFF8D6",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#FF6B6B";
                      e.currentTarget.style.borderColor = "#FF8E8E";
                      e.currentTarget.style.color = "#FFFFFF";
                      e.currentTarget.style.boxShadow = "0 6px 16px -2px rgba(255, 107, 107, 0.5)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
                      e.currentTarget.style.borderColor = "rgba(243, 220, 203, 0.25)";
                      e.currentTarget.style.color = "#FFF8D6";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* =================================================================
              COLUMN 2 — QUICK LINKS
             ================================================================= */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-3.5 rounded-full bg-[#FFC857]" />
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#FFC857]">
                Quick Links
              </h4>
            </div>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 py-0.5 text-[#FFF8D6]/85 hover:text-white transition-all duration-150 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#FF6B6B] rounded-sm"
                  >
                    <ChevronRight
                      size={14}
                      className="text-[#FFC857] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-150"
                    />
                    <span className="group-hover:translate-x-0.5 transition-transform duration-150">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* =================================================================
              COLUMN 3 — SERVICES
             ================================================================= */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-3.5 rounded-full bg-[#FFC857]" />
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#FFC857]">
                Services
              </h4>
            </div>
            <ul className="space-y-2.5 text-sm">
              {serviceLinks.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 py-0.5 text-[#FFF8D6]/85 hover:text-white transition-all duration-150 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#FF6B6B] rounded-sm"
                  >
                    <ChevronRight
                      size={14}
                      className="text-[#FFC857] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-150"
                    />
                    <span className="group-hover:translate-x-0.5 transition-transform duration-150">
                      {service.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* =================================================================
              COLUMN 4 — GET IN TOUCH
             ================================================================= */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-3.5 rounded-full bg-[#FFC857]" />
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#FFC857]">
                  Get in Touch
                </h4>
              </div>

              {/* Availability Message Badge */}
              <div
                className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border mb-4 text-xs font-medium"
                style={{
                  backgroundColor: "rgba(255, 200, 87, 0.15)",
                  borderColor: "rgba(255, 200, 87, 0.3)",
                  color: "#FFF8D6",
                }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFC857] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6B6B]" />
                </span>
                <span>Open to opportunities</span>
              </div>

              {/* Direct Contact Links */}
              <div className="space-y-2.5 text-xs sm:text-sm mb-5">
                {/* Email */}
                <a
                  href={`mailto:${profile.email}`}
                  className="group flex items-center gap-2.5 text-[#FFF8D6]/85 hover:text-white transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#FF6B6B] rounded-sm"
                >
                  <span className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 bg-[rgba(255,255,255,0.08)] border border-[rgba(243,220,203,0.25)] text-[#FFC857] group-hover:bg-[#FF6B6B] group-hover:text-white transition-colors">
                    <Mail size={13} />
                  </span>
                  <span className="truncate">{profile.email}</span>
                </a>

                {/* GitHub */}
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 text-[#FFF8D6]/85 hover:text-white transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#FF6B6B] rounded-sm"
                >
                  <span className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 bg-[rgba(255,255,255,0.08)] border border-[rgba(243,220,203,0.25)] text-[#FFC857] group-hover:bg-[#FF6B6B] group-hover:text-white transition-colors">
                    <GithubIcon size={13} />
                  </span>
                  <span className="truncate">Narayanraiyt9616</span>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 text-[#FFF8D6]/85 hover:text-white transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#FF6B6B] rounded-sm"
                >
                  <span className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 bg-[rgba(255,255,255,0.08)] border border-[rgba(243,220,203,0.25)] text-[#FFC857] group-hover:bg-[#FF6B6B] group-hover:text-white transition-colors">
                    <LinkedinIcon size={13} />
                  </span>
                  <span className="truncate">LinkedIn / Narayan Rai</span>
                </a>
              </div>
            </div>

            {/* Contact Me Button */}
            <div>
              <a
                href="/#contact"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm text-white border transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-xs focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#FFC857] cursor-pointer"
                style={{
                  backgroundColor: "#FF6B6B",
                  borderColor: "#FF8E8E",
                  boxShadow: "0 4px 14px 0 rgba(255, 107, 107, 0.35)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#E05353";
                  e.currentTarget.style.borderColor = "#FFC857";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#FF6B6B";
                  e.currentTarget.style.borderColor = "#FF8E8E";
                }}
              >
                <Send size={14} className="text-white" />
                <span>Contact Me</span>
                <ArrowUpRight size={14} className="text-white/80" />
              </a>
            </div>
          </div>
        </div>

        {/* =================================================================
            BOTTOM BAR — COPYRIGHT & BACK TO TOP
           ================================================================= */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-xs font-mono text-[#FFF8D6]/75">
          {/* Copyright & Credit */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-4 text-center sm:text-left">
            <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
            <span className="hidden sm:inline opacity-40">•</span>
            <p className="inline-flex items-center gap-1.5 text-[#FFF8D6]">
              <Sparkles size={12} className="text-[#FFC857]" />
              <span>Designed & Developed by {profile.name}</span>
            </p>
          </div>

          {/* Smooth Back to Top Button */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 text-xs font-mono cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#FF6B6B]"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              borderColor: "rgba(243, 220, 203, 0.25)",
              color: "#FFF8D6",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#FF6B6B";
              e.currentTarget.style.borderColor = "#FF8E8E";
              e.currentTarget.style.color = "#FFFFFF";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(255, 107, 107, 0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
              e.currentTarget.style.borderColor = "rgba(243, 220, 203, 0.25)";
              e.currentTarget.style.color = "#FFF8D6";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <span>Back to top</span>
            <ArrowUp size={13} className="transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
