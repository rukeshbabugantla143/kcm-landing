"use client";

import EnquiryTrigger from "./enquiry/EnquiryTrigger";

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-glow-ambient" aria-hidden="true"></div>

      <div className="hero-inner">
        <div className="hero-copy">
          <div className="admission-badge reveal">
            <span></span>
            MBA ADMISSIONS OPEN 2026-27 • AICTE APPROVED
          </div>

          <h1 id="hero-title" className="reveal">
            <span>LEAD.</span>
            <span>INNOVATE.</span>
            <span>EXCEL.</span>
          </h1>

          <div className="hero-subtag reveal">
            Exclusive MBA Excellence in Bangalore
          </div>

          <p className="hero-text reveal">
            Karnataka College of Management (KCM) under Karnataka Education Trust (Estd. 2003) is
            dedicated exclusively to MBA education — featuring 100% placement support, industry expert
            faculty, free laptop program, and global study tours to Singapore &amp; Dubai.
          </p>

          <div className="hero-actions reveal">
            <EnquiryTrigger className="primary-cta">ENQUIRE NOW</EnquiryTrigger>
            <a className="secondary-cta" href="#grade-explorer">
              EXPLORE PROGRAMS
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Karnataka College of Management Campus">
          <div className="photo-shell">
            <img
              src="/assets/kcm/home-aboutus.webp"
              alt="Karnataka College of Management Campus & Scholars"
            />
            <div className="photo-glow" aria-hidden="true"></div>
          </div>

          <div className="glass-card card-cbse">
            <strong>100% Placement</strong>
            <span>₹12.36 LPA Highest Package</span>
          </div>

          <div className="glass-card card-classes">
            <strong>AICTE Approved</strong>
            <span>Bengaluru City University</span>
          </div>

          <div className="glass-card card-campus">
            <strong>Global Exposure</strong>
            <span>Singapore &amp; Dubai Study Tours</span>
          </div>

          <div className="glass-card card-learning">
            <strong>Free Laptop</strong>
            <span>For every MBA scholar</span>
          </div>
        </div>
      </div>
    </section>
  );
}
