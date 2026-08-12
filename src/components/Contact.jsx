import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, XCircle } from "lucide-react";
import { profile } from "../data/socials";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

// EmailJS setup:
// 1. Create a free account at https://www.emailjs.com
// 2. Add these to a .env file in the project root (never commit real keys):
//    VITE_EMAILJS_SERVICE_ID=your_service_id
//    VITE_EMAILJS_TEMPLATE_ID=your_template_id
//    VITE_EMAILJS_PUBLIC_KEY=your_public_key
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const formRef = useRef(null);
  const [values, setValues] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const validate = () => {
    const next = {};
    if (!values.name.trim()) next.name = "Name is required.";
    if (!values.email.trim()) next.email = "Email is required.";
    else if (!emailPattern.test(values.email)) next.email = "Enter a valid email address.";
    if (!values.subject.trim()) next.subject = "Subject is required.";
    if (!values.message.trim()) next.message = "Message can't be empty.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
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
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY });
      setStatus("success");
      setValues({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container-max px-5 sm:px-8">
        <Reveal>
          <SectionHeading path="contact" title="Have an idea? Let's build it." subtitle="Whether it's a project, internship opportunity, collaboration or just a conversation about technology, I'd love to hear from you." />
        </Reveal>

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12">
          <Reveal className="space-y-6">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-4 group">
              <span className="w-11 h-11 rounded-full flex items-center justify-center border shrink-0" style={{ borderColor: "var(--border-strong)", color: "var(--amber)" }}>
                <Mail size={17} />
              </span>
              <span className="text-sm sm:text-base link-underline" style={{ color: "var(--text)" }}>{profile.email}</span>
            </a>
            <a href={`tel:${profile.phone.replace(/\s+/g, "")}`} className="flex items-center gap-4 group">
              <span className="w-11 h-11 rounded-full flex items-center justify-center border shrink-0" style={{ borderColor: "var(--border-strong)", color: "var(--amber)" }}>
                <Phone size={17} />
              </span>
              <span className="text-sm sm:text-base link-underline" style={{ color: "var(--text)" }}>{profile.phone}</span>
            </a>
            <div className="flex items-center gap-4">
              <span className="w-11 h-11 rounded-full flex items-center justify-center border shrink-0" style={{ borderColor: "var(--border-strong)", color: "var(--amber)" }}>
                <MapPin size={17} />
              </span>
              <span className="text-sm sm:text-base" style={{ color: "var(--text)" }}>{profile.location}</span>
            </div>
          </Reveal>

          <Reveal>
            <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Name" name="name" value={values.name} onChange={handleChange} error={errors.name} />
                <Field label="Email" name="email" type="email" value={values.email} onChange={handleChange} error={errors.email} />
              </div>
              <Field label="Subject" name="subject" value={values.subject} onChange={handleChange} error={errors.subject} />
              <Field label="Message" name="message" as="textarea" rows={5} value={values.message} onChange={handleChange} error={errors.message} />

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium text-sm transition-transform hover:-translate-y-0.5 disabled:opacity-70"
                style={{ background: "var(--amber)", color: "var(--ink)" }}
              >
                {status === "loading" ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="flex items-center gap-2 text-sm" style={{ color: "var(--teal)" }} role="status">
                  <CheckCircle2 size={16} /> Message sent — thanks for reaching out.
                </p>
              )}
              {status === "error" && (
                <p className="flex items-center gap-2 text-sm" style={{ color: "#e0715f" }} role="alert">
                  <XCircle size={16} /> Something went wrong. Add your EmailJS keys to .env, or email me directly.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", as = "input", rows, value, onChange, error }) {
  const Tag = as;
  return (
    <div className={as === "textarea" ? "sm:col-span-2" : ""}>
      <label htmlFor={name} className="font-mono text-xs mb-2 block" style={{ color: "var(--text-faint)" }}>
        {label}
      </label>
      <Tag
        id={name}
        name={name}
        type={as === "input" ? type : undefined}
        rows={rows}
        value={value}
        onChange={onChange}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors"
        style={{ background: "var(--surface)", borderColor: error ? "#e0715f" : "var(--border)", color: "var(--text)" }}
      />
      {error && (
        <p id={`${name}-error`} className="text-xs mt-1.5" style={{ color: "#e0715f" }}>
          {error}
        </p>
      )}
    </div>
  );
}
