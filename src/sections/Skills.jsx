// src/sections/Skills.jsx

import { useEffect, useRef } from "react";
import "../styles/Skills.css";

/* ─── Bento card data ───────────────────────────────────────── */
const CARDS = [
  {
    id: "frontend",
    size: "wide",        // spans 2 columns
    icon: "⬡",
    category: "Core",
    title: "Frontend",
    accent: "linear-gradient(90deg, #6366f1, #8b5cf6)",
    tags: ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"],
    stats: [
      { value: "1+",  label: "Year" },
      { value: "10+", label: "Projects" },
      { value: "100%", label: "Passion" },
    ],
  },
  {
    id: "animation",
    size: "normal",
    icon: "◎",
    category: "Motion",
    title: "UI & Animation",
    accent: "linear-gradient(90deg, #8b5cf6, #ec4899)",
    tags: ["Framer Motion", "GSAP", "Lenis"],
  },
  {
    id: "tools",
    size: "normal",
    icon: "⊹",
    category: "Workflow",
    title: "Tools",
    accent: "linear-gradient(90deg, #0ea5e9, #06b6d4)",
    tags: ["Git", "GitHub", "VS Code"],
  },
  {
    id: "backend",
    size: "wide",        // spans 2 columns
    icon: "↗",
    category: "Learning",
    title: "Backend",
    accent: "linear-gradient(90deg, #f59e0b, #f97316)",
    tags: ["Node.js", "Express.js"],
    learning: true,
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

/* ─── Single bento card ─────────────────────────────────────── */
function SkillCard({ card, delay = 0 }) {
  const ref = useReveal();

  return (
    <div
      ref={ref}
      className={`skills-card skills-reveal${card.size === "wide" ? " skills-card--wide" : ""}`}
      style={{
        "--card-accent": card.accent,
        transitionDelay: `${delay}ms`,
      }}
    >
      {/* Header */}
      <div className="skills-card-header">
        <div className="skills-card-meta">
          <span className="skills-card-category">{card.category}</span>
          <span className="skills-card-title">{card.title}</span>
        </div>
        <div className="skills-card-icon" aria-hidden="true">
          {card.icon}
        </div>
      </div>

      {/* Learning badge */}
      {card.learning && (
        <span className="skills-learning-badge">Currently learning</span>
      )}

      {/* Skill tags */}
      <div className="skills-tags">
        {card.tags.map((tag) => (
          <span key={tag} className="skills-tag">{tag}</span>
        ))}
      </div>

      {/* Stat row (Frontend card only) */}
      {card.stats && (
        <div className="skills-stat-row">
          {card.stats.map((s) => (
            <div key={s.label} className="skills-stat">
              <span className="skills-stat-value">{s.value}</span>
              <span className="skills-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Section ───────────────────────────────────────────────── */
export default function Skills() {
  const headerRef = useReveal();

  return (
    <section id="skills" className="skills">
      <div className="skills-inner">

        {/* Header */}
        <div
          className="skills-header skills-reveal"
          ref={headerRef}
        >
          <span className="skills-label">02 — Skills</span>
          <h2 className="skills-headline">
            Tech Stack<br />
            <span>& Tooling</span>
          </h2>
        </div>

        {/* Bento grid */}
        <div className="skills-grid">
          {CARDS.map((card, i) => (
            <SkillCard
              key={card.id}
              card={card}
              delay={i * 90}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
