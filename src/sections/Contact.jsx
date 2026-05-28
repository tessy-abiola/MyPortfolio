// src/sections/Contact.jsx

import { useEffect, useRef, useState } from "react";
import "../styles/contact.css";

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

/* ── UPDATED contact details — Twitter removed ── */
const DETAILS = [
  { label: "Email",    value: "abiolatestimony110@gmail.com" },
  { label: "GitHub",   value: "github.com/tessy-abiola" },
  { label: "Location", value: "Available Remotely" },
];

/* ── UPDATED socials — Twitter removed, LinkedIn + Instagram added ── */
const SOCIALS = [
  { label: "GitHub",    href: "https://github.com/tessy-abiola" },
  { label: "LinkedIn",  href: "https://www.linkedin.com/in/testimony-abiola-187799380" },
  { label: "Instagram", href: "https://www.instagram.com/tessy_abiola?igsh=MWJwMm01MzJ5Ym1sZg==" },
];

/* ─── Component ─────────────────────────────────────────────── */
export default function Contact() {
  const [sent, setSent] = useState(false);

  const headerRef = useReveal();
  const leftRef   = useReveal();
  const rightRef  = useReveal();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-inner">

        {/* Header */}
        <div className="contact-header contact-reveal" ref={headerRef}>
          <span className="contact-label">05 — Contact</span>
          <h2 className="contact-headline">
            Let's build{" "}
            <span>something</span>
            <br />great together.
          </h2>
        </div>

        {/* Two column grid */}
        <div className="contact-grid">

          {/* LEFT */}
          <div
            className="contact-reveal"
            ref={leftRef}
            style={{ transitionDelay: "80ms" }}
          >
            <p className="contact-info-text">
              I'm open to frontend roles, freelance projects, and
              collaborations. If you have an opportunity or an idea,
              I'd love to hear from you.
            </p>

            <div className="contact-details">
              {DETAILS.map(({ label, value }) => (
                <div key={label} className="contact-detail-row">
                  <span className="contact-detail-label">{label}</span>
                  <span className="contact-detail-value">{value}</span>
                </div>
              ))}
            </div>

            <div className="contact-socials">
              {SOCIALS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-link"
                  aria-label={label}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT — Form */}
          <div
            className="contact-reveal"
            ref={rightRef}
            style={{ transitionDelay: "160ms" }}
          >
            {sent ? (
              <div className="contact-success">
                <div className="contact-success-icon" aria-hidden="true">✓</div>
                <p className="contact-success-title">Message sent!</p>
                <p className="contact-success-sub">
                  Thanks for reaching out — I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>

                <div className="contact-form-row">
                  <div className="contact-field">
                    <label className="contact-field-label" htmlFor="name">Name</label>
                    <input
                      id="name"
                      type="text"
                      className="contact-input"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="contact-field">
                    <label className="contact-field-label" htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      className="contact-input"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="contact-field">
                  <label className="contact-field-label" htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    className="contact-input"
                    placeholder="What's this about?"
                  />
                </div>

                <div className="contact-field">
                  <label className="contact-field-label" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    className="contact-textarea"
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    required
                  />
                </div>

                <button type="submit" className="contact-submit">
                  Send Message →
                </button>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
