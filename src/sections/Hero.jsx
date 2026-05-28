// src/sections/Hero.jsx

import "../styles/hero.css";

function AnimatedHeadline({ text, baseDelay = 0.25, className = "" }) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          className="hero-word"
          style={{ animationDelay: `${baseDelay + i * 0.09}s` }}
        >
          {word}
          {i < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </span>
  );
}

const STACK_TAGS = ["React", "JavaScript", "Tailwind CSS", "Framer Motion", "Node.js"];

export default function Hero() {
  const scrollToProjects = () =>
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });

  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="hero">

      {/* Background */}
      <div className="hero-grid"         aria-hidden="true" />
      <div className="hero-orb hero-orb-1" aria-hidden="true" />
      <div className="hero-orb hero-orb-2" aria-hidden="true" />
      <div className="hero-orb hero-orb-3" aria-hidden="true" />

      <div className="hero-content">

        {/* ── UPDATED badge text ── */}
        <div className="hero-badge" aria-label="You should work with me">
          <span className="hero-badge-dot" aria-hidden="true" />
          <span className="hero-badge-text">You should work with me</span>
        </div>

        {/* Headline */}
        <h1 className="hero-headline" aria-label="Frontend Developer">
          <AnimatedHeadline text="Frontend" baseDelay={0.28} />
          <br />
          <span className="hero-headline-accent">
            <AnimatedHeadline text="Developer." baseDelay={0.42} />
          </span>
        </h1>

        {/* Divider */}
        <div className="hero-divider" aria-hidden="true">
          <span className="hero-divider-line" />
          <span className="hero-divider-label">Based on the web · Open to remote</span>
          <span className="hero-divider-line" />
        </div>

        {/* ── UPDATED subtitle ── */}
        <p className="hero-subtitle">
          Focused on building <strong>modern, responsive, and high-performance</strong> web
          applications using React. Currently expanding into fullstack development
          with Node.js and Express.
        </p>

        {/* CTAs */}
        <div className="hero-actions">
          <button
            className="hero-btn-primary"
            onClick={scrollToProjects}
            aria-label="View my projects"
          >
            View my work
            <span aria-hidden="true">→</span>
          </button>
          <button
            className="hero-btn-secondary"
            onClick={scrollToContact}
            aria-label="Get in touch"
          >
            Get in touch
            <span aria-hidden="true">↗</span>
          </button>
        </div>

        {/* Stack tags */}
        <div className="hero-stack" aria-label="Core technologies">
          <span className="hero-stack-label">Stack</span>
          {STACK_TAGS.map((tag) => (
            <span key={tag} className="hero-tag">{tag}</span>
          ))}
        </div>

      </div>

      {/* Scroll cue */}
      <div className="hero-scroll-cue" aria-hidden="true">
        <span className="hero-scroll-label">Scroll</span>
        <div className="hero-scroll-track">
          <div className="hero-scroll-thumb" />
        </div>
      </div>

    </section>
  );
}
