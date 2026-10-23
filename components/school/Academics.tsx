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
    key: "pre-primary",
    stageBadge: "FOUNDATIONAL STAGE",
    gradeBadge: "Pre-KG – UKG",
    title: "Pre-Primary School",
    summary:
      "Play-led discovery, language readiness, phonics and early numeracy in a warm, expressive learning space.",
    accentColor: "#F7961E",
    highlights: [
      "Activity-based sensory & play discovery",
      "Early literacy, phonics & storytelling",
      "Basic numeracy and spatial awareness",
      "Fine motor skills & artistic exploration",
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="8" width="7" height="7" rx="1.5" />
        <rect x="14" y="8" width="7" height="7" rx="1.5" />
        <rect x="8.5" y="2.5" width="7" height="7" rx="1.5" />
        <circle cx="6.5" cy="11.5" r="1" fill="currentColor" />
        <circle cx="17.5" cy="11.5" r="1" fill="currentColor" />
        <circle cx="12" cy="6" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    key: "primary",
    stageBadge: "PREPARATORY STAGE",
    gradeBadge: "Classes 1 – 5",
    title: "Primary School",
    summary:
      "Deep foundational understanding through guided inquiry, reading habits, arithmetic and expressive confidence.",
    accentColor: "#C63A87",
    highlights: [
      "Structured English & regional language fluency",
      "Conceptual mathematics & logical puzzles",
      "Environmental discovery & simple projects",
      "Creative expression through arts & physical play",
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
        <path d="M6 2v20" />
      </svg>
    ),
  },
  {
    key: "middle",
    stageBadge: "MIDDLE STAGE",
    gradeBadge: "Classes 6 – 8",
    title: "Middle School",
    summary:
      "Transitioning from concrete knowledge to analytical reasoning, scientific experimentation and collaborative thinking.",
    accentColor: "#8A1A72",
    highlights: [
      "Integrated Science & Mathematics lab work",
      "Introductory computer science & digital tools",
      "Social science inquiry & collaborative debates",
      "Organized athletics, fitness & leadership duties",
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 2v7.31L4.1 18.2A2 2 0 0 0 5.8 21h12.4a2 2 0 0 0 1.7-2.8L14 9.31V2" />
        <line x1="8.5" y1="2" x2="15.5" y2="2" />
        <line x1="7" y1="14" x2="17" y2="14" />
      </svg>
    ),
  },
  {
    key: "secondary",
    stageBadge: "SECONDARY STAGE",
    gradeBadge: "Classes 9 – 10",
    title: "Secondary School",
    summary:
      "Rigorous CBSE curriculum preparation with diagnostic tests, specialized science labs and focused mentoring.",
    accentColor: "#6A0030",
    highlights: [
      "Targeted CBSE board syllabus mastery",
      "Regular diagnostic evaluations & personal feedback",
      "Dedicated Science & Computer lab practicals",
      "Exam strategy, career orientation & resilience",
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 8 9-5 9 5-9 5z" />
        <path d="M6 11v6l6 3 6-3v-6" />
        <path d="M21 8v6" />
      </svg>
    ),
  },
];

const academicStats = [
  { label: "CBSE Curriculum", value: "Pre-KG to 10th" },
  { label: "Board Results", value: "100% Success" },
  { label: "Lab Workstations", value: "1:1 Student Access" },
  { label: "Assessment", value: "Continuous & Holistic" },
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
              LEARNING PATHWAYS
            </div>
            <h2 id="academics-title">
              Learning pathways with room to explore, focus and lead.
            </h2>
            <p className="academics-lead">
              From early foundational years to Class 10 CBSE preparation, our structured curriculum
              nurtures curiosity, conceptual depth and confident character at every stage of the student journey.
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
                  <span>Explore Stage Details</span>
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
            <span className="pillars-tag">OUR ACADEMIC STANDARD</span>
            <h4>Continuous care across every learning milestone.</h4>
            <p>Every student benefits from individualized teacher attention, diagnostic feedback and high CBSE academic standards.</p>
          </div>

          <div className="pillars-list">
            <div className="pillar-item">
              <span className="pillar-num">01</span>
              <div>
                <strong>Concept Over Cramming</strong>
                <p>In-depth understanding of fundamentals rather than rote memorization.</p>
              </div>
            </div>
            <div className="pillar-item">
              <span className="pillar-num">02</span>
              <div>
                <strong>Diagnostic Feedback</strong>
                <p>Frequent formative checks to identify and support learning gaps early.</p>
              </div>
            </div>
            <div className="pillar-item">
              <span className="pillar-num">03</span>
              <div>
                <strong>Integrated Values</strong>
                <p>Ethics, teamwork and communication built into daily school routines.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
