"use client";

import EnquiryTrigger from "./enquiry/EnquiryTrigger";

export default function QuickAccess() {
  return (
    <section className="quick-access" id="quick-access" aria-label="Quick access for MBA applicants">
      <div className="quick-access-inner">
        <EnquiryTrigger className="quick-tile tile-orange enquiry-quick-trigger">
          <span className="quick-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M7 11.5 10.2 15 17 8" />
              <path d="M5 4h14v16H5z" />
            </svg>
          </span>
          <span>Apply Online 2026</span>
        </EnquiryTrigger>
        <a className="quick-tile tile-indigo" href="#grade-explorer">
          <span className="quick-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M7 7h10M7 12h10M7 17h6" />
              <path d="M5 3h14v18H5z" />
            </svg>
          </span>
          <span>MBA Programs</span>
        </a>
        <a className="quick-tile tile-yellow" href="#student-life">
          <span className="quick-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </span>
          <span>Placements (12.36 LPA)</span>
        </a>
        <a className="quick-tile tile-teal" href="#facilities">
          <span className="quick-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
              <path d="M6 2v20" />
            </svg>
          </span>
          <span>Central Library</span>
        </a>
        <a className="quick-tile tile-coral" href="#academics">
          <span className="quick-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </span>
          <span>Global Study Tours</span>
        </a>
        <a className="quick-tile tile-navy" href="#about">
          <span className="quick-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </span>
          <span>AICTE &amp; BCU Approvals</span>
        </a>
      </div>
    </section>
  );
}
