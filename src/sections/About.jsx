// src/sections/About.jsx

import { useEffect, useRef } from "react";
import "../styles/about.css";

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

/* ── UPDATED paragraphs ── */
const PARAGRAPHS = [
  {
    text: (
      <>
        I am a frontend developer focused on building{" "}
        <strong>modern, responsive, and high-performance</strong> web applications
        with React and contemporary UI technologies.
      </>
    ),
    featured: true,
  },
  {
    text: "I solve real user problems by creating clean, intuitive, and accessible interfaces that improve usability and overall user experience.",
    featured: false,
  },
  {
    text: "My approach is centered on simplicity, performance, and scalability, ensuring every product is visually refined and works seamlessly across all devices.",
    featured: false,
  },
  {
    text: "I have hands-on experience with React, JavaScript, and Tailwind CSS to build scalable frontend applications, and I am expanding my backend skills with Node.js and Express to develop more complete solutions.",
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

        {/* LEFT */}
        <div className="about-left about-reveal" ref={leftRef}>
          <span className="about-watermark" aria-hidden="true">01</span>
          <span className="about-label">01 — About me</span>

          {/* ── UPDATED headline ── */}
          <h2 className="about-headline">
            Building digital<br />
            experiences <em>that</em><br />
            solve real problems.
          </h2>

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

        {/* RIGHT */}
        <div className="about-right">
          <div className="about-paragraphs about-reveal" ref={rightRef}>
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

          {/* ── UPDATED status card ── */}
          <div className="about-status about-reveal" ref={statusRef}>
            <div className="about-status-left">
              <span className="about-status-dot" aria-hidden="true" />
              <div className="about-status-text">
                <span className="about-status-title">Currently building</span>
                <span className="about-status-sub">
                  Frontend Developer specializing in React, currently open to work
                  and expanding into Full-Stack development with Node.js
                </span>
              </div>
            </div>
            <span className="about-status-badge">Open to work</span>
          </div>
        </div>

      </div>
    </section>
  );
}
