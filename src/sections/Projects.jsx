// src/sections/Projects.jsx

import { useEffect, useRef } from "react";
import "../styles/Projects.css";

/* ─── Project data ──────────────────────────────────────────── */
const PROJECTS = [
  {
    id: "01",
    title: "Portfolio Website",
    desc: "A modern personal portfolio built using React and Tailwind CSS with smooth animations and responsive design. Focused on clean UI, performance, and modern developer aesthetics.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    accentColor: "rgba(99, 102, 241, 0.6)",
    accentWash: "linear-gradient(90deg, rgba(99,102,241,0.07) 0%, transparent 60%)",
  },
  {
    id: "02",
    title: "React Web App",
    desc: "A responsive React-based application demonstrating component reusability, state management, and modern UI structure built for real-world scalability.",
    tags: ["React", "JavaScript", "State Management"],
    accentColor: "rgba(14, 165, 233, 0.6)",
    accentWash: "linear-gradient(90deg, rgba(14,165,233,0.07) 0%, transparent 60%)",
  },
  {
    id: "03",
    title: "Landing Page UI",
    desc: "A modern SaaS-style landing page with clean typography, structured layout, and subtle animations inspired by real product websites.",
    tags: ["HTML5", "CSS3", "GSAP"],
    accentColor: "rgba(16, 185, 129, 0.6)",
    accentWash: "linear-gradient(90deg, rgba(16,185,129,0.07) 0%, transparent 60%)",
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
        "--row-accent-wash":  project.accentWash,
        "--row-accent-color": project.accentColor,
        transitionDelay: `${delay}ms`,
      }}
      role="article"
      aria-label={`Project: ${project.title}`}
    >
      <span className="project-num" aria-hidden="true">{project.id}</span>

      <div className="project-body">
        <div className="project-title-row">
          <h3 className="project-title">{project.title}</h3>
          <div className="project-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="project-tag">{tag}</span>
            ))}
          </div>
        </div>
        <p className="project-desc">{project.desc}</p>
      </div>

      <div className="project-arrow" aria-hidden="true">↗</div>
    </div>
  );
}

/* ─── Section ───────────────────────────────────────────────── */
export default function Projects() {
  const headerRef = useReveal();

  return (
    <section id="projects" className="projects">
      <div className="projects-inner">

        <div className="projects-header projects-reveal" ref={headerRef}>
          <div className="projects-header-left">
            <span className="projects-label">03 — Projects</span>
            <h2 className="projects-headline">
              Featured <span>Work</span>
            </h2>
          </div>
          <span className="projects-count">{PROJECTS.length} projects</span>
        </div>

        <div className="projects-list" role="list">
          {PROJECTS.map((project, i) => (
            <ProjectRow key={project.id} project={project} delay={i * 100} />
          ))}
        </div>

      </div>
    </section>
  );
}
