// src/components/Footer.jsx

import "../styles/footer.css";

const NAV_LINKS = ["About", "Skills", "Projects", "Experience", "Contact"];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-inner">

        {/* ── Left — logo + tagline ──────────────────────── */}
        <div className="footer-brand">
          <span
            className="footer-logo"
            onClick={scrollToTop}
            role="button"
            tabIndex={0}
            aria-label="Scroll to top"
            onKeyDown={(e) => e.key === "Enter" && scrollToTop()}
          >
            <span>&lt;</span>dev<span> /&gt;</span>
          </span>
          <div className="footer-divider" aria-hidden="true" />
          <span className="footer-tagline">
            Designed &amp; built with care
          </span>
        </div>

        {/* ── Center — nav links ─────────────────────────── */}
        <ul className="footer-nav" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <button
                className="footer-nav-link"
                onClick={() => scrollTo(link)}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        {/* ── Right — copyright + back to top ───────────── */}
        <div className="footer-right">
          <span className="footer-copy">
            © {new Date().getFullYear()}
          </span>
          <button
            className="footer-top-btn"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            ↑
          </button>
        </div>

      </div>
    </footer>
  );
}
