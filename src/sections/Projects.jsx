// src/sections/Projects.jsx

import { useEffect, useRef } from "react";
import "../styles/projects.css";

/* ─── Project data ──────────────────────────────────────────── */
const PROJECTS = [
  {
    id: "01",
    title: "Frontend Portfolio",
    description:
      "A personal portfolio website built to showcase frontend projects and skills. Features smooth scroll animations, a dark premium UI, responsive layout, and modular React component architecture.",
    tags: ["React", "Vite", "CSS3", "Framer Motion"],
    accentColor: "#6366f1",
    image: null, // placeholder — replace with "/images/portfolio.png" when ready
    live: "https://deluxe-cobbler-d8ce8d.netlify.app/",
    github: "https://github.com/tessy-abiola/MyPortfolio.git",
  },
  {
    id: "02",
    title: "Weather App",
    description:
      "A weather application that fetches real-time data from a public API based on user-entered city names. Displays temperature, conditions, humidity, wind speed, and popular city shortcuts.",
    tags: ["React", "REST API", "JavaScript", "CSS3"],
    accentColor: "#0ea5e9",
    image: "/images/weather-app.png",
    live: "https://weather-app-wheat-two-9gxa0mgj7p.vercel.app",
    github: "https://github.com/tessy-abiola/weather-app.git",
  },
  {
    id: "03",
    title: "React MUI Data Grid",
    description:
      "A data grid implementation built with React and Material UI. Demonstrates enterprise-level tabular data display with filtering, search, export, and column management using MUI's DataGrid component.",
    tags: ["React", "Material UI", "JavaScript", "CSS3"],
    accentColor: "#10b981",
    image: "/images/mui-data-grid.png",
    live: "https://react-material-ui-data-grid.vercel.app",
    github: "https://github.com/tessy-abiola/React-MaterialUI-Data-Grid.git",
  },
  {
    id: "04",
    title: "Bankist App",
    description:
      "A simulated banking UI featuring account login, transaction history, fund transfers, and loan requests. Built to practice DOM manipulation, array methods, and core JavaScript logic.",
    tags: ["JavaScript", "HTML5", "CSS3", "DOM API"],
    accentColor: "#f59e0b",
    image: "/images/bankist.png",
    live: "https://bankist-tutorial.vercel.app/",
    github: "https://github.com/tessy-abiola/Bankist---Tutorial.git",
  },
  {
    id: "05",
    title: "Toast Notification System",
    description:
      "A reusable toast notification component built in React. Supports success, error, and warning types with auto-dismiss functionality and smooth entrance and exit animations.",
    tags: ["React", "JavaScript", "CSS3", "Animations"],
    accentColor: "#ef4444",
    image: "/images/toast-notification.png",
    live: "https://toast-notification-bar.vercel.app",
    github: "https://github.com/tessy-abiola/Toast-Notification-Bar.git",
  },
  {
    id: "06",
    title: "To-Do App",
    description:
      "A task management application built with React. Users can add, complete, and delete tasks with state managed via React hooks. Focuses on clean component structure and practical state management.",
    tags: ["React", "useState", "JavaScript", "CSS3"],
    accentColor: "#8b5cf6",
    image: "/images/todo-app.png",
    live: "https://to-do-app-five-gilt.vercel.app",
    github: "https://github.com/tessy-abiola/To-Do-App.git",
  },
  {
    id: "07",
    title: "YouTube Page Clone",
    description:
      "A static frontend clone of the YouTube homepage layout. Recreates the navigation bar, video grid, sidebar, and responsive behaviour using only HTML and CSS — focused on layout precision.",
    tags: ["HTML5", "CSS3", "Responsive Design", "Flexbox"],
    accentColor: "#eab308",
    image: "/images/youtube-clone.png",
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

/* ─── Portfolio placeholder image ──────────────────────────── */
function PortfolioPlaceholder() {
  return (
    <div className="project-img-placeholder">
      <div className="placeholder-grid" aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="placeholder-block" style={{ animationDelay: `${i * 0.15}s` }} />
        ))}
      </div>
      <div className="placeholder-center">
        <span className="placeholder-logo">&lt;dev /&gt;</span>
        <span className="placeholder-label">Portfolio Website</span>
      </div>
    </div>
  );
}

/* ─── Single project card ───────────────────────────────────── */
function ProjectCard({ project, delay = 0 }) {
  const ref = useReveal();

  return (
    <div
      ref={ref}
      className="project-card projects-reveal"
      style={{
        "--card-accent": project.accentColor,
        transitionDelay: `${delay}ms`,
      }}
      role="article"
      aria-label={`Project: ${project.title}`}
    >
      {/* Image area */}
      <div className="project-img-wrapper">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="project-img"
            loading="lazy"
          />
        ) : (
          <PortfolioPlaceholder />
        )}

        {/* Number badge */}
        <span className="project-card-num" aria-hidden="true">{project.id}</span>

        {/* Hover overlay with links */}
        <div className="project-img-overlay">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="project-overlay-btn"
          >
            Live ↗
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-overlay-btn project-overlay-btn--ghost"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Card body */}
      <div className="project-card-body">
        {/* Tags */}
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">{tag}</span>
          ))}
        </div>

        {/* Title */}
        <h3 className="project-card-title">{project.title}</h3>

        {/* Description */}
        <p className="project-card-desc">{project.description}</p>

        {/* Footer links */}
        <div className="project-card-footer">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link project-link--live"
          >
            Live demo ↗
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link project-link--github"
          >
            GitHub
          </a>
        </div>
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

        {/* Card grid */}
        <div className="projects-grid">
          {PROJECTS.map((project, i) => (
            <ProjectCard
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
