// src/sections/Experience.jsx

import { useEffect, useRef } from "react";
import "../styles/experience.css";

/* ─── Data ──────────────────────────────────────────────────── */
const EXPERIENCE = [
  {
    date: "Aug 2022 – Jan 2024",
    role: "Front-End Developer",
    org: "AllignTech Digitals",
    location: "Ibadan, Nigeria",
    bullets: [
      "Developed reusable, component-based React UI components and template-driven frontend views",
      "Implemented scalable frontend architectures with a strong focus on maintainability and clean code",
      "Consumed RESTful APIs to render dynamic, data-driven user interfaces",
      "Managed frontend build and deployment workflows using Git, SSH, and Docker",
      "Optimized user interfaces for performance, accessibility (WCAG), and cross-browser compatibility",
      "Built real-time frontend features using WebSockets to enhance user engagement",
      "Collaborated with designers and stakeholders to deliver projects on tight deadlines",
    ],
  },
  {
    date: "July 2024 – Dec 2024",
    role: "Front-End Developer",
    org: "DiamondSol Enterprises",
    location: "Abuja, Nigeria",
    bullets: [
      "Translated PSD designs into pixel-perfect HTML5 and CSS3 layouts",
      "Built responsive, mobile-first interfaces across multiple devices",
      "Ensured cross-browser compatibility across Chrome, Firefox, Safari, and Edge",
      "Collaborated using Git for version control and deployment workflows",
      "Optimized frontend assets for performance and SEO",
      "Delivered multiple projects under tight deadlines",
    ],
  },
  {
    date: "Jun 2024 – Jan 2025",
    role: "Web Design Intern",
    org: "Freelance",
    location: "Ibadan, Nigeria",
    bullets: [
      "Built responsive websites using HTML, CSS, JavaScript, and React.js",
      "Improved UI/UX for usability and accessibility across client projects",
      "Used Git and GitHub for version control and team collaboration",
      "Debugged and optimized frontend performance across browsers",
      "Delivered projects on schedule with consistent team collaboration",
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

        <div className="experience-grid">

          {/* LEFT — Timeline */}
          <div
            className="experience-timeline exp-reveal"
            ref={timelineRef}
          >
            {EXPERIENCE.map((entry, i) => (
              <div className="exp-entry" key={i}>
                <div className="exp-entry-meta">
                  <span className="exp-date">{entry.date}</span>
                  <span className="exp-location">{entry.location}</span>
                </div>
                <h3 className="exp-role">{entry.role}</h3>
                <p className="exp-org">{entry.org}</p>
                <ul className="exp-bullets">
                  {entry.bullets.map((b, j) => (
                    <li key={j} className="exp-bullet">{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* RIGHT — Achievements wrapped in sticky container */}
          <div
            className="achievements-wrapper exp-reveal"
            ref={achievementsRef}
            style={{ transitionDelay: "100ms" }}
          >
            <span className="achievements-title">Key Achievements</span>
            <div className="achievements-grid">
              {ACHIEVEMENTS.map((text, i) => (
                <div
                  key={i}
                  className="achievement-card"
                  style={{ transitionDelay: `${i * 70}ms` }}
                >
                  <div className="achievement-icon" aria-hidden="true">✓</div>
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
