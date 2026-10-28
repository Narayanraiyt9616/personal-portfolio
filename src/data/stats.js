import { projects } from "./projects.js";
import { techCategories } from "./techstack.js";

/**
 * Normalizes technology strings to avoid duplicate counts (e.g. "REST API" vs "REST APIs")
 */
export function normalizeTechName(name) {
  if (!name || typeof name !== "string") return "";
  const trimmed = name.trim();
  if (/^rest\s*apis?$/i.test(trimmed)) return "REST API";
  return trimmed.toLowerCase();
}

/**
 * Counts unique technologies actually used across the tech stack and all projects
 */
export function getUniqueTechnologiesCount(techList = techCategories, projectList = projects) {
  const techSet = new Set();

  if (Array.isArray(techList)) {
    techList.forEach((cat) => {
      cat.items?.forEach((item) => {
        if (item?.name) {
          techSet.add(normalizeTechName(item.name));
        }
      });
    });
  }

  if (Array.isArray(projectList)) {
    projectList.forEach((proj) => {
      proj.technologies?.forEach((tech) => {
        if (tech) {
          techSet.add(normalizeTechName(tech));
        }
      });
    });
  }

  return techSet.size;
}

/**
 * Counts projects genuinely marked as major or featured in the project data
 */
export function getMajorProjectsCount(projectList = projects) {
  if (!Array.isArray(projectList)) return 0;
  return projectList.filter((p) => Boolean(p.featured || p.major || p.isMajor)).length;
}

/**
 * Generates dynamic portfolio statistics reflecting real project and tech data
 */
export function getPortfolioStats(projectList = projects, techList = techCategories) {
  const totalProjects = Array.isArray(projectList) ? projectList.length : 0;
  const majorProjects = getMajorProjectsCount(projectList);
  const uniqueTech = getUniqueTechnologiesCount(techList, projectList);

  return [
    {
      id: "projects",
      emoji: "🚀",
      value: totalProjects,
      suffix: totalProjects >= 10 ? "+" : "",
      label: "Projects Built",
      subtext: "Live & documented builds",
    },
    {
      id: "technologies",
      emoji: "💻",
      value: uniqueTech,
      suffix: uniqueTech >= 10 ? "+" : "",
      label: "Technologies",
      subtext: "Languages, tools & stacks",
    },
    {
      id: "major-projects",
      emoji: "🏆",
      value: majorProjects,
      suffix: majorProjects >= 10 ? "+" : "",
      label: "Major Projects",
      subtext: "Featured full-stack systems",
    },
    {
      id: "passion",
      emoji: "❤️",
      value: 100,
      suffix: "%",
      label: "Passion for Development",
      subtext: "Dedicated engineering craft",
    },
  ];
}

export const stats = getPortfolioStats();
