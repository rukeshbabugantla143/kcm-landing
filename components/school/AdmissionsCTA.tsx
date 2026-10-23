"use client";

import EnquiryTrigger from "./enquiry/EnquiryTrigger";

const admissionSteps = [
  {
    num: "01",
    title: "Online Enquiry",
    desc: "Register online or contact our admissions counsellor for details.",
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
    title: "Campus Tour",
    desc: "Walk through classrooms, labs, sports grounds & meet educators.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="10" r="3" />
        <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Application Form",
    desc: "Submit enrollment details along with student identity & academic records.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Friendly Interaction",
    desc: "Warm informal student connect assessing age readiness with zero stress.",
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
    num: "05",
    title: "Seat Confirmation",
    desc: "Formal admission, welcome orientation kit and academic onboarding.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

const admissionHighlights = [
  { label: "Grade Levels", value: "Pre-KG to Class 10" },
  { label: "Affiliation", value: "CBSE New Delhi" },
  { label: "Campus Ratio", value: "Optimal 1:15" },
  { label: "Academic Year", value: "2027–2028" },
];

export default function AdmissionsCTA() {
  return (
    <section className="admissions-cta" id="admissions" aria-labelledby="admissions-title">
      <div className="admissions-inner">
        {/* Left Column: Context, Value Proposition & CTAs */}
        <div className="admissions-content">
          <div className="admissions-badge">
            <span className="badge-pulse-dot"></span>
            <span>ACADEMIC YEAR 2027–28 ADMISSIONS</span>
          </div>

          <h2 id="admissions-title">
            <span className="lead-line">Give Your Child A Future Of</span>
            <span className="focus-line">Purpose &amp; Distinction.</span>
          </h2>

          <p className="admissions-summary">
            Join Karnataka Public School — where deep academic rigor meets values, character,
            and future-ready capability. Limited seats available across Pre-KG through Class 10.
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
              APPLY / ENQUIRE NOW
            </EnquiryTrigger>
            <a className="admissions-secondary" href="tel:+919071887788">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>CALL COUNSELLOR: 90718 87788</span>
            </a>
          </div>

          <div className="admissions-trust-pill">
            <span className="trust-check">✓</span>
            <span>Transparent Fee Structure &bull; Zero Capitation Fees &bull; CBSE Affiliated #830385</span>
          </div>
        </div>

        {/* Right Column: 5-Step Admission Journey Flow */}
        <div className="admissions-journey-card">
          <div className="journey-card-header">
            <div>
              <span className="journey-sub">SEAMLESS ONBOARDING</span>
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
                href="https://wa.me/919071887788"
                target="_blank"
                rel="noopener noreferrer"
                className="channel-btn btn-wa"
              >
                <span>WhatsApp Desk</span>
              </a>
              <a
                href="tel:+919071887788"
                className="channel-btn btn-call"
              >
                <span>+91 90718 87788</span>
              </a>
              <a
                href="tel:+918310663628"
                className="channel-btn btn-call"
                title="Alternative Helpline"
              >
                <span>+91 83106 63628</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
