// import { ExternalLink, ArrowUpRight, Code2 } from "lucide-react";
// import { GithubIcon } from "./BrandIcons";

// function ImageBlock({ project, className = "" }) {
//   return (
//     <div
//       className={`relative overflow-hidden ${className}`}
//       style={{ background: "linear-gradient(150deg, var(--surface-2), var(--surface))" }}
//     >
//       {project.image ? (
//         <img
//           src={project.image}
//           alt={`${project.title} preview`}
//           loading="lazy"
//           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//         />
//       ) : (
//         <div className="w-full h-full flex flex-col items-center justify-center gap-2 font-mono text-[11px]" style={{ color: "var(--text-faint)" }}>
//           <Code2 size={26} style={{ color: "var(--amber)" }} />
//           [PROJECT IMAGE]
//         </div>
//       )}
//     </div>
//   );
// }

// export default function ProjectCard({ project, variant = "default", onViewDetails }) {
//   const isLarge = variant === "large";
//   const isWide = variant === "wide";

//   return (
//     <article
//       className={`lift-card group rounded-2xl border overflow-hidden flex ${
//         isWide ? "flex-col sm:flex-row" : "flex-col"
//       } h-full`}
//       style={{ background: "var(--surface)", borderColor: "var(--border)" }}
//     >
//       <ImageBlock
//         project={project}
//         className={isLarge ? "aspect-[16/9]" : isWide ? "sm:w-2/5 aspect-video sm:aspect-auto" : "aspect-video"}
//       />

//       <div className={`flex flex-col flex-1 p-5 sm:p-6 ${isLarge ? "sm:p-8" : ""}`}>
//         <div className="flex items-center gap-2 mb-3">
//           <span className="font-mono text-[11px] px-2 py-0.5 rounded-full border" style={{ color: "var(--amber)", borderColor: "var(--border)" }}>
//             {project.category}
//           </span>
//         </div>

//         <h3 className={`font-display font-semibold mb-2 ${isLarge ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"}`} style={{ color: "var(--text)" }}>
//           {project.title}
//         </h3>

//         <p className={`leading-relaxed mb-4 ${isLarge ? "text-base" : "text-sm"}`} style={{ color: "var(--text-muted)" }}>
//           {project.description}
//         </p>

//         <div className="flex flex-wrap gap-2 mb-5">
//           {project.technologies.slice(0, isLarge ? 6 : 4).map((t) => (
//             <span key={t} className="font-mono text-[11px] px-2 py-1 rounded-md" style={{ background: "var(--surface-2)", color: "var(--text-muted)" }}>
//               {t}
//             </span>
//           ))}
//         </div>

//         <div className="mt-auto flex flex-wrap items-center gap-4 pt-2">
//           <a
//             href={project.github}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-1.5 text-sm link-underline"
//             style={{ color: "var(--text)" }}
//           >
//             <GithubIcon size={15} /> GitHub
//           </a>
//           <a
//             href={project.liveDemo}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-1.5 text-sm link-underline"
//             style={{ color: "var(--text)" }}
//           >
//             <ExternalLink size={15} /> Live Demo
//           </a>
//           <button
//             onClick={() => onViewDetails(project)}
//             className="inline-flex items-center gap-1.5 text-sm font-medium ml-auto"
//             style={{ color: "var(--amber)" }}
//           >
//             View Details <ArrowUpRight size={15} />
//           </button>
//         </div>
//       </div>
//     </article>
//   );
// }
