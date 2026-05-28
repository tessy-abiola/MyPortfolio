// src/sections/About.jsx

import { useEffect, useRef } from "react";
import "../styles/About.css";

/* ─── Data ──────────────────────────────────────────────────── */
const PHILOSOPHY_CARDS = [
  {
    icon: "⬡",
    title: "Simplicity first",
    desc: "Clean, purposeful interfaces over visual noise.",
  },
  {
    icon: "◎",
    title: "Performance minded",
    desc: "Every decision considers speed and responsiveness.",
  },
  {
    icon: "⊹",
    title: "Detail oriented",
    desc: "Typography, spacing, and micro-interactions matter.",
  },
  {
    icon: "↗",
    title: "Always learning",
    desc: "Expanding into fullstack with Node.js and Express.",
  },
];

const PARAGRAPHS = [
  {
    text: (
      <>
        I am a frontend developer focused on building{" "}
        <strong>modern, responsive, and high-performance</strong> web applications
        using React and contemporary UI technologies.
      </>
    ),
    featured: true,
  },
  {
    text: "I enjoy turning ideas into clean, functional, and visually refined digital experiences, with strong attention to detail in layout, typography, and user interaction.",
    featured: false,
  },
  {
    text: "My approach to development is centered around simplicity, usability, and performance — ensuring that every interface I build is both aesthetically pleasing and highly functional across all devices.",
    featured: false,
  },
  {
    text: "I have hands-on experience with React, JavaScript, and Tailwind CSS to build scalable frontend applications, and I am continuously improving my skills in backend development with Node.js and Express.",
    featured: false,
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

/* ─── Component ─────────────────────────────────────────────── */
export default function About() {
  const leftRef   = useReveal();
  const rightRef  = useReveal();
  const statusRef = useReveal();

  return (
    <section id="about" className="about">
      <div className="about-inner">

        {/* ── LEFT COLUMN ─────────────────────────────────── */}
        <div
          className="about-left about-reveal"
          ref={leftRef}
        >
          {/* Watermark */}
          <span className="about-watermark" aria-hidden="true">01</span>

          {/* Label */}
          <span className="about-label">01 — About me</span>

          {/* Statement headline */}
          <h2 className="about-headline">
            Building digital<br />
            experiences <em>that</em><br />
            actually matter.
          </h2>

          {/* Philosophy cards */}
          <div className="about-cards">
            {PHILOSOPHY_CARDS.map((card, i) => (
              <div
                className="about-card"
                key={card.title}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="about-card-icon" aria-hidden="true">
                  {card.icon}
                </div>
                <div className="about-card-body">
                  <span className="about-card-title">{card.title}</span>
                  <span className="about-card-desc">{card.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT COLUMN ────────────────────────────────── */}
        <div className="about-right">

          {/* Paragraphs */}
          <div
            className="about-paragraphs about-reveal"
            ref={rightRef}
          >
            {PARAGRAPHS.map((p, i) => (
              <p
                key={i}
                className={`about-para${p.featured ? " featured" : ""}`}
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                {p.text}
              </p>
            ))}
          </div>

          <hr className="about-rule" />

          {/* Status card */}
          <div
            className="about-status about-reveal"
            ref={statusRef}
          >
            <div className="about-status-left">
              <span className="about-status-dot" aria-hidden="true" />
              <div className="about-status-text">
                <span className="about-status-title">Currently building</span>
                <span className="about-status-sub">FRONTEND · FULLSTACK TRANSITION</span>
              </div>
            </div>
            <span className="about-status-badge">Open to work</span>
          </div>

        </div>
      </div>
    </section>
  );
}
