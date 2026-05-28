// src/components/Navbar.jsx

import { useState, useEffect, useCallback } from "react";
import "../styles/navbar.css";

const NAV_LINKS = ["About", "Skills", "Projects", "Experience", "Contact"];

/**
 * Smooth-scrolls to a section by matching its id to the lowercased link label.
 * Also closes mobile menu after navigation.
 */
function scrollToSection(id, onDone) {
  const el = document.getElementById(id.toLowerCase());
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
  if (onDone) onDone();
}

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [active, setActive]       = useState("");
  const [menuOpen, setMenuOpen]   = useState(false);

  // ── Scroll detection ───────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 28);

      // Highlight the section currently in view
      const offsets = NAV_LINKS.map((link) => {
        const el = document.getElementById(link.toLowerCase());
        return { link, top: el ? el.getBoundingClientRect().top : Infinity };
      });

      const inView = offsets
        .filter((o) => o.top <= 120)
        .sort((a, b) => b.top - a.top)[0];

      setActive(inView ? inView.link : "");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ── Close mobile menu on outside click ────────────────────
  const closeMobileMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (!menuOpen) return;
    const timer = setTimeout(() => {
      window.addEventListener("click", closeMobileMenu, { once: true });
    }, 0);
    return () => clearTimeout(timer);
  }, [menuOpen, closeMobileMenu]);

  return (
    <>
      {/* ── Floating pill nav ──────────────────────────────── */}
      <div className="nav-wrapper">
        <nav className={`nav-pill${scrolled ? " scrolled" : ""}`} role="navigation" aria-label="Primary navigation">

          {/* Logo */}
          <a className="nav-logo" href="#hero" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
            <span>&lt;</span>dev<span> /&gt;</span>
          </a>

          {/* Desktop links */}
          <ul className="nav-links" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <button
                  className={`nav-link-btn${active === link ? " active" : ""}`}
                  onClick={() => scrollToSection(link)}
                  aria-current={active === link ? "location" : undefined}
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <button
            className="nav-cta"
            onClick={() => scrollToSection("contact")}
            aria-label="Navigate to contact section"
          >
            <span className="nav-cta-dot" aria-hidden="true" />
            Hire me
          </button>

          {/* Mobile hamburger */}
          <button
            className={`nav-hamburger${menuOpen ? " open" : ""}`}
            onClick={(e) => { e.stopPropagation(); setMenuOpen((v) => !v); }}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>

        </nav>
      </div>

      {/* ── Mobile dropdown ─────────────────────────────────── */}
      {menuOpen && (
        <div className="nav-mobile-menu" role="dialog" aria-label="Mobile navigation" onClick={(e) => e.stopPropagation()}>
          <ul role="list">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <button
                  className="nav-mobile-link"
                  onClick={() => scrollToSection(link, () => setMenuOpen(false))}
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>

          <div className="nav-mobile-divider" aria-hidden="true" />

          <button
            className="nav-mobile-cta"
            onClick={() => scrollToSection("contact", () => setMenuOpen(false))}
          >
            <span className="nav-cta-dot" aria-hidden="true" />
            Hire me
          </button>
        </div>
      )}
    </>
  );
}
