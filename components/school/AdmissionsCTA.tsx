"use client";

import EnquiryTrigger from "./enquiry/EnquiryTrigger";

const admissionSteps = [
  {
    num: "01",
    title: "Online Application",
    desc: "Submit your digital admission enquiry form with undergraduate degree details.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Document Screening",
    desc: "Upload graduation transcripts, 10th/12th mark sheets, and entrance test scores.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Career Counseling",
    desc: "Interactive session with senior faculty mentors to align career goals with the right specialization.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Provisional Admission Offer",
    desc: "Receive formal admission letter and complete course registration and fee formalities.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Orientation & Laptop Distribution",
    desc: "Join the academic induction program, receive complimentary laptop, and begin MBA coursework.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
];

const admissionHighlights = [
  { label: "Degree Program", value: "MBA (2 Years Full-Time)" },
  { label: "Approvals", value: "AICTE & Bengaluru City Univ." },
  { label: "Placement", value: "100% Support (₹12.36 LPA)" },
  { label: "Academic Batch", value: "Admissions 2026–2028" },
];

export default function AdmissionsCTA() {
  return (
    <section className="admissions-cta" id="admissions" aria-labelledby="admissions-title">
      <div className="admissions-inner">
        {/* Left Column: Context, Value Proposition & CTAs */}
        <div className="admissions-content">
          <div className="admissions-badge">
            <span className="badge-pulse-dot"></span>
            <span>ACADEMIC BATCH 2026–28 ADMISSIONS OPEN</span>
          </div>

          <h2 id="admissions-title">
            <span className="lead-line">Launch Your Global Career With</span>
            <span className="focus-line">Bangalore's Leading MBA.</span>
          </h2>

          <p className="admissions-summary">
            Join Karnataka College of Management (KCM) — an exclusive MBA ecosystem with 100% placement support,
            PhD mentors, SAP &amp; Python certifications, and international study tours to Singapore &amp; Dubai.
          </p>

          <div className="admissions-stats-grid">
            {admissionHighlights.map((stat) => (
              <div className="adm-stat-card" key={stat.label}>
                <span className="adm-stat-label">{stat.label}</span>
                <strong className="adm-stat-val">{stat.value}</strong>
              </div>
            ))}
          </div>

          <div className="admissions-actions">
            <EnquiryTrigger className="admissions-primary">
              APPLY ONLINE FOR 2026
            </EnquiryTrigger>
            <a className="admissions-secondary" href="tel:+919606994048">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>CALL COUNSELOR: +91 96069 94048</span>
            </a>
          </div>

          <div className="admissions-trust-pill">
            <span className="trust-check">✓</span>
            <span>AICTE Approved &bull; Bengaluru City University &bull; Free Laptop &bull; 100% Placement Support</span>
          </div>
        </div>

        {/* Right Column: 5-Step Admission Journey Flow */}
        <div className="admissions-journey-card">
          <div className="journey-card-header">
            <div>
              <span className="journey-sub">FAST-TRACK ENROLLMENT</span>
              <h3 className="journey-card-title">5-Step Admission Pathway</h3>
            </div>
            <span className="journey-status-tag">OPEN</span>
          </div>

          <div className="journey-timeline">
            {admissionSteps.map((step) => (
              <div className="timeline-step" key={step.num}>
                <div className="timeline-step-indicator">
                  <span className="step-num-badge">{step.num}</span>
                  <span className="step-icon-badge">{step.icon}</span>
                </div>
                <div className="timeline-step-content">
                  <h4 className="step-title">{step.title}</h4>
                  <p className="step-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Help Channels */}
          <div className="journey-contact-strip">
            <span className="contact-strip-label">Direct Admissions Help:</span>
            <div className="contact-buttons-cluster">
              <a
                href="https://wa.me/919606994048"
                target="_blank"
                rel="noopener noreferrer"
                className="channel-btn btn-wa"
              >
                <span>WhatsApp Desk</span>
              </a>
              <a
                href="tel:+919606994048"
                className="channel-btn btn-call"
              >
                <span>+91 96069 94048</span>
              </a>
              <a
                href="tel:+917349635914"
                className="channel-btn btn-call"
                title="Alternative Helpline"
              >
                <span>+91 73496 35914</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
