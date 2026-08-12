// import { useMemo, useState } from "react";
// import { projects, filterCategories } from "../data/projects";
// import ProjectCard from "./ProjectCard";
// import ProjectModal from "./ProjectModal";
// import Reveal from "./Reveal";
// import SectionHeading from "./SectionHeading";

// const layoutSpan = {
//   large: "lg:col-span-12",
//   wide: "lg:col-span-12",
//   half: "lg:col-span-6",
//   grid: "lg:col-span-6",
// };

// const variantMap = { large: "large", wide: "wide", half: "default", grid: "default" };

// export default function Projects() {
//   const [active, setActive] = useState("All");
//   const [selected, setSelected] = useState(null);

//   const filtered = useMemo(
//     () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
//     [active]
//   );

//   return (
//     <section id="projects" className="py-24 sm:py-32">
//       <div className="container-max px-5 sm:px-8">
//         <Reveal>
//           <SectionHeading path="projects" title="Things I've Built" subtitle="Real projects, practical solutions, and plenty of late-night debugging." />
//         </Reveal>

//         <Reveal className="flex flex-wrap gap-2 mb-12">
//           {filterCategories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setActive(cat)}
//               className="font-mono text-xs px-4 py-2 rounded-full border transition-all duration-300"
//               style={
//                 active === cat
//                   ? { background: "var(--amber)", borderColor: "var(--amber)", color: "var(--ink)" }
//                   : { borderColor: "var(--border)", color: "var(--text-muted)" }
//               }
//             >
//               {cat}
//             </button>
//           ))}
//         </Reveal>

//         {filtered.length === 0 ? (
//           <p className="font-mono text-sm" style={{ color: "var(--text-faint)" }}>
//             No projects in this category yet — check back soon.
//           </p>
//         ) : (
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 transition-all duration-500">
//             {filtered.map((project) => (
//               <div key={project.id} className={`${layoutSpan[project.layout] || "lg:col-span-6"} col-span-1`}>
//                 <Reveal className="h-full">
//                   <ProjectCard project={project} variant={variantMap[project.layout]} onViewDetails={setSelected} />
//                 </Reveal>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
//     </section>
//   );
// }
