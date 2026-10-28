import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  MapPin,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  Clock,
  Sparkles,
  MessageSquare,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile, socials } from "../data/socials";
import Reveal from "./Reveal";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* ==========================================================================
   DECORATIVE DOTTED GRID COMPONENT
   ========================================================================== */
function DottedGrid({ cols = 4, rows = 3, className = "" }) {
  return (
    <div
      className={`grid gap-2.5 ${className}`}
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
      aria-hidden="true"
    >
      {Array.from({ length: cols * rows }).map((_, i) => (
        <span
          key={i}
          className="w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: "#FFC857" }}
        />
      ))}
    </div>
  );
}

/* ==========================================================================
   CONTACT SECTION COMPONENT
   ========================================================================== */
export default function Contact() {
  const formRef = useRef(null);
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const validate = () => {
    const next = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) {
      next.email = "Please enter your email address.";
    } else if (!emailPattern.test(values.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!values.subject.trim()) next.subject = "Please enter a subject.";
    if (!values.message.trim()) next.message = "Please enter your message.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      setStatus("success");
      setValues({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const contactItems = [
    {
      title: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: Mail,
      external: false,
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/narayan-rai",
      href: "https://linkedin.com",
      icon: LinkedinIcon,
      external: true,
    },
    {
      title: "GitHub",
      value: "github.com/Narayanraiyt9616",
      href: socials.github || "https://github.com/Narayanraiyt9616",
      icon: GithubIcon,
      external: true,
    },
    {
      title: "Location",
      value: profile.location,
      icon: MapPin,
      external: false,
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-12 sm:py-16 overflow-hidden"
      style={{ backgroundColor: "#FFF8D6" }}
    >
      {/* Subtle Warm Decorative Ambient Glows */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-40 blur-3xl -mr-32 -mt-32"
        style={{
          background:
            "radial-gradient(circle, #FFC857 0%, rgba(255, 200, 87, 0) 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-30 blur-3xl -ml-32 -mb-32"
        style={{
          background:
            "radial-gradient(circle, #FF6B6B 0%, rgba(255, 107, 107, 0) 70%)",
        }}
        aria-hidden="true"
      />

      {/* Decorative Dotted Accents */}
      <div className="absolute top-20 left-8 hidden xl:block pointer-events-none opacity-30">
        <DottedGrid cols={4} rows={3} />
      </div>
      <div className="absolute bottom-16 right-10 hidden lg:block pointer-events-none opacity-30">
        <DottedGrid cols={4} rows={3} />
      </div>

      <div className="container-max px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.18fr] gap-8 lg:gap-12 items-start">
          {/* =================================================================
              LEFT COLUMN — GET IN TOUCH
             ================================================================= */}
          <Reveal>
            <div className="flex flex-col justify-between h-full">
              <div>
                {/* Top Rounded Badge */}
                <div
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono font-bold tracking-wider uppercase mb-3.5 shadow-2xs"
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderColor: "#F3DCCB",
                    color: "#6A2ED9",
                  }}
                >
                  <Mail size={13} style={{ color: "#FF6B6B" }} />
                  <span>GET IN TOUCH</span>
                </div>

                {/* Main Heading with Coral Red Highlight & Golden Underline */}
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[40px] tracking-tight leading-[1.15] mb-4">
                  <span style={{ color: "#1F2937" }}>
                    Let's Build Something{" "}
                  </span>
                  <span
                    className="relative inline-block"
                    style={{ color: "#FF6B6B" }}
                  >
                    Great Together
                    <span
                      className="absolute left-0 -bottom-1 sm:-bottom-1.5 w-full h-[3.5px] rounded-full"
                      style={{ backgroundColor: "#FFC857" }}
                    />
                  </span>
                </h2>

                {/* Description */}
                <p
                  className="text-sm sm:text-base leading-relaxed mb-7 max-w-xl"
                  style={{ color: "#64748B" }}
                >
                  I'm always open to discussing new opportunities, interesting
                  projects, or just a friendly chat about technology.
                </p>

                {/* Four Contact Information Items */}
                <div className="space-y-4">
                  {contactItems.map((item) => {
                    const Icon = item.icon;
                    const ContentWrapper = item.href ? "a" : "div";

                    return (
                      <ContentWrapper
                        key={item.title}
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={
                          item.external ? "noopener noreferrer" : undefined
                        }
                        className={`flex items-center gap-3.5 group p-2.5 -mx-2.5 rounded-2xl transition-all duration-200 ${
                          item.href ? "hover:bg-[#FFF2D1] cursor-pointer" : ""
                        }`}
                      >
                        {/* Rounded Icon Container */}
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-200 group-hover:scale-105 shadow-2xs"
                          style={{
                            backgroundColor: "#FFF2D1",
                            borderColor: "#F3DCCB",
                            color: "#6A2ED9",
                          }}
                        >
                          <Icon size={18} />
                        </div>

                        <div>
                          <span
                            className="block font-display font-bold text-xs uppercase tracking-wider text-[#1F2937]"
                          >
                            {item.title}
                          </span>
                          <span
                            className="text-xs sm:text-sm transition-colors text-[#64748B] group-hover:text-[#FF6B6B] font-medium"
                          >
                            {item.value}
                          </span>
                        </div>
                      </ContentWrapper>
                    );
                  })}
                </div>
              </div>

              {/* Elegant Availability Card at the Bottom */}
              <div
                className="mt-8 p-4 sm:p-5 rounded-2xl border flex items-center justify-between gap-3 shadow-2xs"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderColor: "#F3DCCB",
                }}
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFC857] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF6B6B]" />
                    </span>
                    <h4
                      className="font-display font-bold text-sm"
                      style={{ color: "#1F2937" }}
                    >
                      Open to Opportunities
                    </h4>
                  </div>
                  <p className="text-xs sm:text-[13px] text-[#64748B]">
                    Let's connect and create something amazing!
                  </p>
                </div>

                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center border shrink-0"
                  style={{
                    backgroundColor: "#FFF2D1",
                    borderColor: "#F3DCCB",
                    color: "#6A2ED9",
                  }}
                >
                  <Send size={16} />
                </div>
              </div>
            </div>
          </Reveal>

          {/* =================================================================
              RIGHT COLUMN — CONTACT FORM CARD
             ================================================================= */}
          <Reveal>
            <div
              className="rounded-2xl sm:rounded-[22px] border p-6 sm:p-8 lg:p-9 relative"
              style={{
                backgroundColor: "#FFFFFF",
                borderColor: "#F3DCCB",
                boxShadow:
                  "0 10px 30px -5px rgba(106, 46, 217, 0.08), 0 4px 10px -2px rgba(106, 46, 217, 0.04)",
              }}
            >
              {/* Form Card Header */}
              <div className="flex items-start justify-between gap-3 pb-5 mb-6 border-b border-[#F3DCCB]">
                <div>
                  <h3
                    className="font-display font-bold text-xl sm:text-2xl mb-1.5"
                    style={{ color: "#1F2937" }}
                  >
                    Send Me a Message
                  </h3>
                  <div
                    className="w-12 h-1 rounded-full mb-2"
                    style={{ backgroundColor: "#FF6B6B" }}
                  />
                  <p className="text-xs sm:text-sm text-[#64748B]">
                    Fill out the form below and I'll get back to you as soon as
                    possible.
                  </p>
                </div>

                {/* Circular Chat Icon in Upper-Right Corner */}
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 border shadow-2xs"
                  style={{
                    backgroundColor: "#FFF2D1",
                    borderColor: "#F3DCCB",
                    color: "#6A2ED9",
                  }}
                  aria-hidden="true"
                >
                  <MessageSquare size={19} />
                </div>
              </div>

              {/* Contact Form */}
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                noValidate
                className="space-y-4 sm:space-y-5"
              >
                {/* Name & Email (Side-by-side on desktop) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <Field
                    label="Your Name"
                    name="name"
                    placeholder="e.g. John Doe"
                    value={values.name}
                    onChange={handleChange}
                    error={errors.name}
                  />
                  <Field
                    label="Your Email"
                    name="email"
                    type="email"
                    placeholder="e.g. john@example.com"
                    value={values.email}
                    onChange={handleChange}
                    error={errors.email}
                  />
                </div>

                {/* Subject */}
                <Field
                  label="Subject"
                  name="subject"
                  placeholder="e.g. Project inquiry or opportunity"
                  value={values.subject}
                  onChange={handleChange}
                  error={errors.subject}
                />

                {/* Message */}
                <Field
                  label="Message"
                  name="message"
                  as="textarea"
                  rows={4}
                  placeholder="Tell me about your idea, timeline, or position details..."
                  value={values.message}
                  onChange={handleChange}
                  error={errors.message}
                />

                {/* Send Message Button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-3.5 sm:py-4 px-6 rounded-full font-semibold text-sm sm:text-base text-white transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 shadow-md hover:shadow-lg disabled:hover:translate-y-0 flex items-center justify-between group cursor-pointer"
                  style={{
                    backgroundColor: "#FF6B6B",
                    boxShadow: "0 8px 20px -4px rgba(255, 107, 107, 0.35)",
                  }}
                  onMouseEnter={(e) => {
                    if (status !== "loading") {
                      e.currentTarget.style.backgroundColor = "#E05353";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (status !== "loading") {
                      e.currentTarget.style.backgroundColor = "#FF6B6B";
                    }
                  }}
                >
                  <Send
                    size={17}
                    className="transition-transform group-hover:scale-110"
                  />
                  <span>
                    {status === "loading"
                      ? "Sending Message..."
                      : "Send Message"}
                  </span>
                  {status === "loading" ? (
                    <Loader2 size={17} className="animate-spin text-white" />
                  ) : (
                    <ArrowRight
                      size={17}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  )}
                </button>

                {/* Success Message Banner */}
                {status === "success" && (
                  <div
                    className="p-4 rounded-xl border flex items-center gap-3 text-xs sm:text-sm font-medium mt-3"
                    style={{
                      backgroundColor: "#FFFBF0",
                      borderColor: "#FFC857",
                      color: "#6A2ED9",
                    }}
                    role="status"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-[#FF6B6B] shrink-0"
                    />
                    <span>
                      Message sent successfully! I will get back to you within
                      24 hours.
                    </span>
                  </div>
                )}

                {/* Error Message Banner */}
                {status === "error" && (
                  <div
                    className="p-4 rounded-xl border flex items-start gap-3 text-xs sm:text-sm mt-3"
                    style={{
                      backgroundColor: "#FEF2F2",
                      borderColor: "#FECACA",
                      color: "#991B1B",
                    }}
                    role="alert"
                  >
                    <AlertCircle
                      size={18}
                      className="shrink-0 mt-0.5 text-red-600"
                    />
                    <div>
                      <p className="font-semibold">
                        Unable to send message directly.
                      </p>
                      <p className="mt-0.5 text-red-700">
                        Please email me directly at{" "}
                        <a
                          href={`mailto:${profile.email}`}
                          className="font-bold underline hover:text-red-900"
                        >
                          {profile.email}
                        </a>
                      </p>
                    </div>
                  </div>
                )}

                {/* Trust Indicators */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-5 mt-4 border-t border-[#F3DCCB] text-center">
                  <div className="flex items-center justify-center gap-1.5 text-xs text-[#64748B]">
                    <ShieldCheck size={14} style={{ color: "#FF6B6B" }} />
                    <span>Your info is safe</span>
                  </div>
                  <div className="flex items-center justify-center gap-1.5 text-xs text-[#64748B]">
                    <Clock size={14} style={{ color: "#FF6B6B" }} />
                    <span>Reply within 24h</span>
                  </div>
                  <div className="flex items-center justify-center gap-1.5 text-xs text-[#64748B]">
                    <Sparkles size={14} style={{ color: "#FF6B6B" }} />
                    <span>Build something great</span>
                  </div>
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   FORM FIELD REUSABLE COMPONENT
   ========================================================================== */
function Field({
  label,
  name,
  type = "text",
  as = "input",
  rows,
  placeholder,
  value,
  onChange,
  error,
}) {
  const Tag = as;
  return (
    <div className={as === "textarea" ? "sm:col-span-2" : ""}>
      <label
        htmlFor={name}
        className="font-display font-medium text-xs sm:text-sm mb-1.5 block"
        style={{ color: "#1F2937" }}
      >
        {label}
      </label>
      <Tag
        id={name}
        name={name}
        type={as === "input" ? type : undefined}
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className="w-full rounded-xl border px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-[#1F2937] placeholder:text-gray-400 outline-none transition-all duration-200"
        style={{
          backgroundColor: "#FFFFFF",
          borderColor: error ? "#EF4444" : "#F3DCCB",
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = "#FF6B6B";
          e.currentTarget.style.boxShadow =
            "0 0 0 3px rgba(255, 107, 107, 0.2)";
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = error ? "#EF4444" : "#F3DCCB";
          e.currentTarget.style.boxShadow = "none";
        }}
      />
      {error && (
        <p
          id={`${name}-error`}
          className="text-xs text-red-500 mt-1 flex items-center gap-1"
        >
          <AlertCircle size={12} />
          <span>{error}</span>
        </p>
      )}
    </div>
  );
}
