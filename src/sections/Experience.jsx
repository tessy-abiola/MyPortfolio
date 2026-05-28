// src/sections/Experience.jsx

import { useEffect, useRef } from "react";
import "../styles/experience.css";

/* ─── Data ──────────────────────────────────────────────────── */
const EXPERIENCE = [
  {
    date: "2023 — Present",
    role: "Frontend Developer",
    org: "Personal Projects & Self-directed Learning",
    bullets: [
      "Built responsive web applications using React and modern frontend tools",
      "Developed reusable UI components with Tailwind CSS",
      "Focused on smooth animations and responsive design",
      "Improved understanding of component-based architecture and state management",
    ],
  },
];

const ACHIEVEMENTS = [
  "Built multiple responsive web applications using React",
  "Designed and developed a modern personal portfolio website",
  "Improved frontend skills through hands-on, real-world projects",
  "Practiced UI/UX principles to deliver polished interfaces",
  "Developed strong command of reusable component architecture",
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

/* ─── Component ─────────────────────────────────────────────── */
export default function Experience() {
  const headerRef       = useReveal();
  const timelineRef     = useReveal();
  const achievementsRef = useReveal();

  return (
    <section id="experience" className="experience">
      <div className="experience-inner">

        {/* Header */}
        <div className="exp-reveal" ref={headerRef}>
          <span className="experience-label">04 — Experience</span>
          <h2 className="experience-headline">
            Journey <span>So Far</span>
          </h2>
        </div>

        {/* Two column grid */}
        <div className="experience-grid">

          {/* LEFT — Timeline */}
          <div
            className="experience-timeline exp-reveal"
            ref={timelineRef}
          >
            {EXPERIENCE.map((entry, i) => (
              <div className="exp-entry" key={i}>
                <span className="exp-date">{entry.date}</span>
                <h3 className="exp-role">{entry.role}</h3>
                <p className="exp-org">{entry.org}</p>
                <ul className="exp-bullets">
                  {entry.bullets.map((b, j) => (
                    <li
                      key={j}
                      className="exp-bullet"
                      style={{ transitionDelay: `${j * 60}ms` }}
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* RIGHT — Achievements */}
          <div
            className="exp-reveal"
            ref={achievementsRef}
            style={{ transitionDelay: "100ms" }}
          >
            <span className="achievements-title">Achievements</span>
            <div className="achievements-grid">
              {ACHIEVEMENTS.map((text, i) => (
                <div
                  key={i}
                  className="achievement-card"
                  style={{ transitionDelay: `${i * 70}ms` }}
                >
                  <div className="achievement-icon" aria-hidden="true">
                    ✓
                  </div>
                  <span className="achievement-text">{text}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
