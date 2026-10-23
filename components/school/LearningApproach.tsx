const supportingStrengths = [
  {
    className: "support-tech",
    badge: "DIGITAL",
    title: "Technology & Digital Tools",
    copy: "Smart interactive classrooms, computer labs and responsible digital citizenship integrated into daily learning.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    className: "support-creativity",
    badge: "ARTS",
    title: "Creativity & Fine Arts",
    copy: "Visual art, craft, music and dramatic expression woven into everyday experiences to spark original thinking.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
        <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
        <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
        <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.7-.8 1.7-1.8 0-.5-.2-.9-.5-1.3-.3-.4-.5-.9-.5-1.4 0-1 .8-1.9 1.8-1.9H16c3.3 0 6-2.7 6-6 0-5.5-4.5-9.6-10-9.6z" />
      </svg>
    ),
  },
  {
    className: "support-sports",
    badge: "WELLNESS",
    title: "Sports & Physical Fitness",
    copy: "Structured athletics, team games, yoga and motor skills training building discipline, health and resilience.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="m4.93 4.93 4.24 4.24M14.83 9.17l4.24-4.24M14.83 14.83l4.24 4.24M9.17 14.83l-4.24 4.24" />
      </svg>
    ),
  },
  {
    className: "support-character",
    badge: "VALUES",
    title: "Character & Leadership",
    copy: "Core ethical values, empathy, mutual respect and collaborative leadership habits cultivated across school life.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
];

export default function LearningApproach() {
  return (
    <section className="learning-approach" id="learning-approach" aria-labelledby="learning-title">
      <div className="learning-shape learning-shape-one" aria-hidden="true"></div>
      <div className="learning-shape learning-shape-two" aria-hidden="true"></div>

      <div className="learning-inner">
        <div className="learning-heading">
          <div className="section-kicker">LEARNING APPROACH</div>
          <h2 id="learning-title">Learning that moves from concept to confidence.</h2>
          <p className="learning-intro-sub">
            Our student-centric model combines strong foundational understanding with practical discovery,
            modern tools and holistic character building.
          </p>
        </div>

        <div className="learning-grid">
          <article className="learning-feature">
            <div className="learning-feature-glow" aria-hidden="true"></div>
            <div className="learning-feature-top">
              <span className="feature-badge">CORE METHODOLOGY</span>
              <div className="feature-icon-badge" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </div>
            </div>

            <div className="learning-feature-copy">
              <h3>Concept-based Learning</h3>
              <p>
                Students build deep, lasting understanding by connecting fundamental ideas across subjects,
                asking meaningful questions and applying concepts to real challenges.
              </p>

              <ul className="feature-checkpoints">
                <li>
                  <span className="check-dot">✓</span>
                  <span>Cross-disciplinary inquiry &amp; reasoning</span>
                </li>
                <li>
                  <span className="check-dot">✓</span>
                  <span>Diagnostic-guided understanding</span>
                </li>
                <li>
                  <span className="check-dot">✓</span>
                  <span>Practical application beyond textbooks</span>
                </li>
              </ul>
            </div>
          </article>

          <div className="learning-right-col">
            <article className="learning-image-card">
              <img
                src="/assets/grade-stage-strip.png"
                alt="Students collaborating in modern experiential learning activities"
              />
              <div className="image-card-overlay">
                <span className="image-card-tag">PRACTICAL LEARNING</span>
                <strong>Experiential &amp; Hands-on Discovery</strong>
                <p>Interactive STEM labs, science experiments and creative projects turn lessons into lived, confident understanding.</p>
              </div>
            </article>

            <div className="learning-supports">
              {supportingStrengths.map((item) => (
                <article className={`learning-support ${item.className}`} key={item.title}>
                  <div className="support-header">
                    <div className="support-mark">{item.icon}</div>
                    <span className="support-badge">{item.badge}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
