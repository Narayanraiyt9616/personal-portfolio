import { Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./BrandIcons";
import { profile, socials } from "../data/socials";
import { navLinks } from "../utils/constants";

const socialLinks = [
  { icon: GithubIcon, href: socials.github, label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="border-t pt-16 pb-8" style={{ borderColor: "var(--border)" }}>
      <div className="container-max px-5 sm:px-8">
        <div className="grid sm:grid-cols-3 gap-10 pb-12">
          <div>
            <p className="font-display font-semibold text-xl mb-2" style={{ color: "var(--text)" }}>{profile.name}</p>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>Building thoughtful digital experiences with code.</p>
          </div>

          <div>
            <p className="font-mono text-xs mb-4" style={{ color: "var(--text-faint)" }}>NAVIGATE</p>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm link-underline" style={{ color: "var(--text-muted)" }}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs mb-4" style={{ color: "var(--text-faint)" }}>SOCIAL</p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full flex items-center justify-center border transition-transform hover:-translate-y-1"
                  style={{ borderColor: "var(--border-strong)", color: "var(--text)" }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8 border-t font-mono text-xs"
          style={{ borderColor: "var(--border)", color: "var(--text-faint)" }}
        >
          <p className="flex items-center gap-1.5">
            Made with <Heart size={12} style={{ color: "var(--amber)" }} fill="var(--amber)" /> by {profile.name}
          </p>
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
