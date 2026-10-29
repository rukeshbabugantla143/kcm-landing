"use client";

interface AcademicStage {
  key: string;
  stageBadge: string;
  gradeBadge: string;
  title: string;
  summary: string;
  accentColor: string;
  highlights: string[];
  icon: React.ReactNode;
}

const stages: AcademicStage[] = [
  {
    key: "placements",
    stageBadge: "CAREER CELL",
    gradeBadge: "150+ Recruiters",
    title: "100% Placement Support",
    summary:
      "A dedicated corporate relations hub ensuring every MBA student receives intensive grooming, mock interviews, and guaranteed placement drives.",
    accentColor: "#F7961E",
    highlights: [
      "100% placement support with top MNCs & tech giants",
      "Highest salary package of ₹12.36 LPA (Avg ₹7.5 LPA)",
      "Minimum 10 campus interview opportunities guaranteed",
      "Paid corporate internships at Fortune 500 enterprises",
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    key: "faculty",
    stageBadge: "MENTORSHIP",
    gradeBadge: "PhD & Ex-CXOs",
    title: "Industry Expert Faculty",
    summary:
      "Learn directly from distinguished PhD academicians, ex-corporate directors, and seasoned management consultants with over 20 years experience.",
    accentColor: "#C63A87",
    highlights: [
      "70%+ PhD qualified professors and research scholars",
      "Mentorship from corporate CXOs and senior directors",
      "Harvard Business Publishing & IIM case studies",
      "One-on-one executive coaching and career guidance",
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    key: "global",
    stageBadge: "GLOBAL IMMERSION",
    gradeBadge: "Singapore & Dubai",
    title: "International Study Tours",
    summary:
      "Expand your worldview with curated international academic tours to Singapore and Dubai, connecting with multinational corporations and foreign universities.",
    accentColor: "#8A1A72",
    highlights: [
      "Educational study tours to Singapore & Dubai business hubs",
      "Cross-border industry visits & financial exchange tours",
      "Global business networking and cultural diversity exposure",
      "International management certificates and seminars",
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    key: "tech",
    stageBadge: "DIGITAL EDGE",
    gradeBadge: "Free Laptop",
    title: "Free Laptop & AI Labs",
    summary:
      "Every admitted MBA scholar receives a complimentary high-performance laptop pre-configured with industry analytics, ERP, and BI tools.",
    accentColor: "#6A0030",
    highlights: [
      "Brand-new high-end laptop for every enrolled scholar",
      "Hands-on AI & Business Analytics computing lab",
      "ERP & SAP training with practical industry modules",
      "Tableau, Power BI, Python, and advanced Excel mastery",
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
];

const academicStats = [
  { label: "Placement Support", value: "100%" },
  { label: "Highest Package", value: "₹12.36 LPA" },
  { label: "Average Package", value: "₹7.5 LPA" },
  { label: "Corporate Partners", value: "150+ MNCs" },
];

export default function Academics() {
  return (
    <section className="academics-section" id="academics" aria-labelledby="academics-title">
      <div className="academics-ambient-glow" aria-hidden="true"></div>

      <div className="academics-inner">
        {/* Section Header */}
        <div className="academics-header-block">
          <div className="academics-title-wrap">
            <div className="section-kicker">
              <span className="kicker-sparkle" aria-hidden="true">✦</span>
              THE KCM ADVANTAGE
            </div>
            <h2 id="academics-title">
              Why Choose Karnataka College of Management?
            </h2>
            <p className="academics-lead">
              At KCM Bangalore, our entire ecosystem—from infrastructure to faculty—is 100% focused on
              the Master of Business Administration. We provide a holistic environment that bridges
              classroom theory and boardroom execution.
            </p>
          </div>

          {/* Quick Metrics Strip */}
          <div className="academics-stats-bar">
            {academicStats.map((stat, i) => (
              <div className="academics-stat-item" key={i}>
                <strong className="stat-value">{stat.value}</strong>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Core Stages Bento Grid */}
        <div className="academics-stages-grid">
          {stages.map((stage) => (
            <article className={`stage-card card-${stage.key}`} key={stage.key}>
              <div className="stage-card-top">
                <div className="stage-badges">
                  <span className="stage-cat-badge">{stage.stageBadge}</span>
                  <span className="stage-grade-badge">{stage.gradeBadge}</span>
                </div>
                <div className="stage-icon-circle" aria-hidden="true" style={{ color: stage.accentColor }}>
                  {stage.icon}
                </div>
              </div>

              <h3 className="stage-card-title">{stage.title}</h3>
              <p className="stage-card-summary">{stage.summary}</p>

              <div className="stage-divider" aria-hidden="true"></div>

              <ul className="stage-feature-list">
                {stage.highlights.map((point, index) => (
                  <li key={index}>
                    <span className="feature-check-icon" aria-hidden="true">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="stage-card-footer">
                <a href="#grade-explorer" className="stage-explore-link">
                  <span>Explore Specialization</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14m-6-6 6 6-6 6" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Unified Pedagogical Banner */}
        <div className="academics-pillars-banner">
          <div className="pillars-intro">
            <span className="pillars-tag">OUR ACADEMIC PROMISE</span>
            <h4>Continuous Development &amp; Industry Exposure Across All 4 Semesters.</h4>
            <p>Every MBA scholar benefits from personalized mentor attention, industrial visits, and corporate readiness bootcamps.</p>
          </div>

          <div className="pillars-list">
            <div className="pillar-item">
              <span className="pillar-num">01</span>
              <div>
                <strong>Industrial Visits Every Semester</strong>
                <p>Hands-on exposure to manufacturing plants, corporate tech headquarters, and financial hubs.</p>
              </div>
            </div>
            <div className="pillar-item">
              <span className="pillar-num">02</span>
              <div>
                <strong>Minimum 10 Placement Interviews</strong>
                <p>Guaranteed corporate interview drives until every student secures their desired placement role.</p>
              </div>
            </div>
            <div className="pillar-item">
              <span className="pillar-num">03</span>
              <div>
                <strong>Corporate CXO Mentorship</strong>
                <p>Interactive sessions, guest masterclasses, and project reviews with industry leaders.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
