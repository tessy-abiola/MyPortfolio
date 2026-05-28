// src/sections/Projects.jsx

import { useEffect, useRef } from "react";
import "../styles/projects.css";

/* ─── Projects data ─────────────────────────────────────────── */
const PROJECTS = [
  {
    id: "01",
    title: "Frontend Portfolio",
    description:
      "A portfolio website built to showcase frontend projects and skills. Features smooth scroll animations, a dark premium UI, responsive layout across all devices, and modular React component architecture.",
    tags: ["React", "Vite", "CSS3", "Framer Motion"],
    accentColor: "rgba(99, 102, 241, 0.6)",
    accentWash: "linear-gradient(90deg, rgba(99,102,241,0.07) 0%, transparent 60%)",
    live: "https://deluxe-cobbler-d8ce8d.netlify.app/",
    github: "https://github.com/tessy-abiola/MyPortfolio.git",
  },
  {
    id: "02",
    title: "Weather App",
    description:
      "A weather application that fetches real-time weather data from a public API based on user-entered city names. Displays current temperature, weather conditions, and location details with a clean responsive interface.",
    tags: ["React", "REST API", "JavaScript", "CSS3"],
    accentColor: "rgba(14, 165, 233, 0.6)",
    accentWash: "linear-gradient(90deg, rgba(14,165,233,0.07) 0%, transparent 60%)",
    live: "https://weather-app-wheat-two-9gxa0mgj7p.vercel.app",
    github: "https://github.com/tessy-abiola/weather-app.git",
  },
  {
    id: "03",
    title: "React Material UI Data Grid",
    description:
      "A data grid implementation built with React and Material UI. Demonstrates how to display, structure, and manage tabular data using MUI's DataGrid component with a professional enterprise-style layout.",
    tags: ["React", "Material UI", "JavaScript", "CSS3"],
    accentColor: "rgba(16, 185, 129, 0.6)",
    accentWash: "linear-gradient(90deg, rgba(16,185,129,0.07) 0%, transparent 60%)",
    live: "https://react-material-ui-data-grid.vercel.app",
    github: "https://github.com/tessy-abiola/React-MaterialUI-Data-Grid.git",
  },
  {
    id: "04",
    title: "Bankist App",
    description:
      "A simulated banking UI tutorial project featuring account login, transaction history display, fund transfers, and loan requests. Built to practice DOM manipulation, array methods, and JavaScript logic.",
    tags: ["JavaScript", "HTML5", "CSS3", "DOM API"],
    accentColor: "rgba(251, 191, 36, 0.6)",
    accentWash: "linear-gradient(90deg, rgba(251,191,36,0.07) 0%, transparent 60%)",
    live: "https://bankist-tutorial.vercel.app/",
    github: "https://github.com/tessy-abiola/Bankist---Tutorial.git",
  },
  {
    id: "05",
    title: "Toast Notification System",
    description:
      "A reusable toast notification component built in React. Supports multiple notification types (success, error, info, warning) with auto-dismiss functionality and smooth entrance and exit animations.",
    tags: ["React", "JavaScript", "CSS3", "Animations"],
    accentColor: "rgba(239, 68, 68, 0.6)",
    accentWash: "linear-gradient(90deg, rgba(239,68,68,0.07) 0%, transparent 60%)",
    live: "https://toast-notification-bar.vercel.app",
    github: "https://github.com/tessy-abiola/Toast-Notification-Bar.git",
  },
  {
    id: "06",
    title: "To-Do App",
    description:
      "A task management application built with React. Users can add, complete, and delete tasks with state managed via React hooks. Focuses on clean component structure and practical state management patterns.",
    tags: ["React", "useState", "JavaScript", "CSS3"],
    accentColor: "rgba(139, 92, 246, 0.6)",
    accentWash: "linear-gradient(90deg, rgba(139,92,246,0.07) 0%, transparent 60%)",
    live: "https://to-do-app-five-gilt.vercel.app",
    github: "https://github.com/tessy-abiola/To-Do-App.git",
  },
  {
    id: "07",
    title: "YouTube Page Clone",
    description:
      "A static frontend clone of the YouTube homepage layout. Recreates the navigation bar, video grid, sidebar, and responsive behaviour using only HTML and CSS — focused on layout precision and responsiveness.",
    tags: ["HTML5", "CSS3", "Responsive Design", "Flexbox"],
    accentColor: "rgba(234, 179, 8, 0.6)",
    accentWash: "linear-gradient(90deg, rgba(234,179,8,0.07) 0%, transparent 60%)",
    live: "https://tessy-abiola.github.io/my-youtube-webpage/",
    github: "https://github.com/tessy-abiola/my-youtube-webpage.git",
  },
];

/* ─── Scroll reveal hook ────────────────────────────────────── */
function useReveal(rootMargin = "-60px") {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return ref;
}

/* ─── Single project row ────────────────────────────────────── */
function ProjectRow({ project, delay = 0 }) {
  const ref = useReveal();

  return (
    <div
      ref={ref}
      className="project-row projects-reveal"
      style={{
        "--row-accent-wash": project.accentWash,
        "--row-accent-color": project.accentColor,
        transitionDelay: `${delay}ms`,
      }}
      role="article"
      aria-label={`Project: ${project.title}`}
    >
      {/* Number */}
      <span className="project-num" aria-hidden="true">
        {project.id}
      </span>

      {/* Body */}
      <div className="project-body">
        <div className="project-title-row">
          <h3 className="project-title">{project.title}</h3>
          <div className="project-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="project-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <p className="project-desc">{project.description}</p>

        {/* Links */}
        <div className="project-links">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link project-link--live"
            aria-label={`View ${project.title} live`}
          >
            Live ↗
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link project-link--github"
            aria-label={`View ${project.title} on GitHub`}
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Arrow */}
      <div className="project-arrow" aria-hidden="true">
        ↗
      </div>
    </div>
  );
}

/* ─── Section ───────────────────────────────────────────────── */
export default function Projects() {
  const headerRef = useReveal();

  return (
    <section id="projects" className="projects">
      <div className="projects-inner">

        {/* Header */}
        <div className="projects-header projects-reveal" ref={headerRef}>
          <div className="projects-header-left">
            <span className="projects-label">03 — Projects</span>
            <h2 className="projects-headline">
              Featured <span>Work</span>
            </h2>
          </div>
          <span className="projects-count">{PROJECTS.length} projects</span>
        </div>

        {/* Project rows */}
        <div className="projects-list" role="list">
          {PROJECTS.map((project, i) => (
            <ProjectRow
              key={project.id}
              project={project}
              delay={i * 80}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
