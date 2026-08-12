// import { useEffect, useRef } from "react";
// import { X, ExternalLink, Code2 } from "lucide-react";
// import { GithubIcon } from "./BrandIcons";

// export default function ProjectModal({ project, onClose }) {
//   const closeRef = useRef(null);

//   useEffect(() => {
//     const onKey = (e) => e.key === "Escape" && onClose();
//     document.addEventListener("keydown", onKey);
//     document.body.style.overflow = "hidden";
//     closeRef.current?.focus();
//     return () => {
//       document.removeEventListener("keydown", onKey);
//       document.body.style.overflow = "";
//     };
//   }, [onClose]);

//   if (!project) return null;

//   return (
//     <div
//       className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center p-0 sm:p-6 overflow-y-auto"
//       role="dialog"
//       aria-modal="true"
//       aria-labelledby="project-modal-title"
//       onClick={(e) => e.target === e.currentTarget && onClose()}
//       style={{ background: "color-mix(in srgb, var(--ink) 75%, black)" }}
//     >
//       <div
//         className="relative w-full sm:max-w-3xl sm:rounded-3xl border overflow-hidden animate-[modalIn_0.3s_ease]"
//         style={{ background: "var(--surface)", borderColor: "var(--border-strong)", boxShadow: "var(--shadow)" }}
//       >
//         <button
//           ref={closeRef}
//           onClick={onClose}
//           aria-label="Close project details"
//           className="absolute top-4 right-4 sm:top-5 sm:right-5 z-10 w-9 h-9 rounded-full flex items-center justify-center border"
//           style={{ background: "var(--ink)", borderColor: "var(--border-strong)", color: "var(--text)" }}
//         >
//           <X size={16} />
//         </button>

//         <div className="aspect-video" style={{ background: "linear-gradient(150deg, var(--surface-2), var(--surface))" }}>
//           {project.image ? (
//             <img src={project.image} alt={`${project.title} preview`} className="w-full h-full object-cover" />
//           ) : (
//             <div className="w-full h-full flex flex-col items-center justify-center gap-2 font-mono text-xs" style={{ color: "var(--text-faint)" }}>
//               <Code2 size={30} style={{ color: "var(--amber)" }} />
//               [PROJECT IMAGE]
//             </div>
//           )}
//         </div>

//         <div className="p-6 sm:p-9 max-h-[70vh] overflow-y-auto">
//           <p className="font-mono text-xs mb-2" style={{ color: "var(--amber)" }}>{project.type}</p>
//           <h3 id="project-modal-title" className="font-display font-semibold text-2xl sm:text-3xl mb-5" style={{ color: "var(--text)" }}>
//             {project.title}
//           </h3>

//           <p className="text-sm sm:text-base leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
//             {project.longDescription}
//           </p>

//           <div className="grid sm:grid-cols-2 gap-6 mb-6">
//             <div>
//               <p className="font-mono text-xs mb-2" style={{ color: "var(--text-faint)" }}>PROBLEM</p>
//               <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{project.problem}</p>
//             </div>
//             <div>
//               <p className="font-mono text-xs mb-2" style={{ color: "var(--text-faint)" }}>SOLUTION</p>
//               <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{project.solution}</p>
//             </div>
//           </div>

//           <div className="mb-6">
//             <p className="font-mono text-xs mb-3" style={{ color: "var(--text-faint)" }}>FEATURES</p>
//             <ul className="grid sm:grid-cols-2 gap-2">
//               {project.features.map((f) => (
//                 <li key={f} className="text-sm flex items-start gap-2" style={{ color: "var(--text-muted)" }}>
//                   <span className="mt-2 w-1 h-1 rounded-full shrink-0" style={{ background: "var(--amber)" }} />
//                   {f}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="grid sm:grid-cols-2 gap-6 mb-6">
//             <div>
//               <p className="font-mono text-xs mb-2" style={{ color: "var(--text-faint)" }}>CHALLENGES</p>
//               <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{project.challenges}</p>
//             </div>
//             <div>
//               <p className="font-mono text-xs mb-2" style={{ color: "var(--text-faint)" }}>WHAT I LEARNED</p>
//               <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{project.learned}</p>
//             </div>
//           </div>

//           <div className="mb-7">
//             <p className="font-mono text-xs mb-3" style={{ color: "var(--text-faint)" }}>TECH STACK</p>
//             <div className="flex flex-wrap gap-2">
//               {project.technologies.map((t) => (
//                 <span key={t} className="font-mono text-[11px] px-2.5 py-1 rounded-md" style={{ background: "var(--surface-2)", color: "var(--text-muted)" }}>
//                   {t}
//                 </span>
//               ))}
//             </div>
//           </div>

//           <div className="flex flex-wrap gap-4">
//             <a
//               href={project.github}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-xs border"
//               style={{ borderColor: "var(--border-strong)", color: "var(--text)" }}
//             >
//               <GithubIcon size={14} /> GitHub
//             </a>
//             <a
//               href={project.liveDemo}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-xs"
//               style={{ background: "var(--amber)", color: "var(--ink)" }}
//             >
//               <ExternalLink size={14} /> Live Demo
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
