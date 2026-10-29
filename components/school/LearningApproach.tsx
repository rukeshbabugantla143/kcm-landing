const supportingStrengths = [
  {
    className: "support-tech",
    badge: "ENTERPRISE TOOLS",
    title: "ERP & SAP Enterprise Training",
    copy: "Hands-on certified training in SAP ERP modules, corporate workflow automation, and financial management systems.",
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
    badge: "GROOMING",
    title: "Finishing School & Soft Skills",
    copy: "Comprehensive corporate grooming covering boardroom etiquette, executive presence, mock interviews, and negotiation.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a5 5 0 0 1 5 5v3a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5z" />
        <path d="M19 11v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="20" x2="12" y2="22" />
      </svg>
    ),
  },
  {
    className: "support-sports",
    badge: "INTELLIGENCE",
    title: "Business Analytics & Power BI",
    copy: "Training in Python, Power BI dashboards, Tableau, and predictive analytics to solve complex business problems.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10" />
        <path d="M12 20V4" />
        <path d="M6 20v-6" />
      </svg>
    ),
  },
  {
    className: "support-character",
    badge: "GOVERNANCE",
    title: "Leadership & Ethical Governance",
    copy: "Inculcating high ethical standards, environmental sustainability, and sound corporate governance into future CXOs.",
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
          <div className="section-kicker">PEDAGOGICAL INNOVATION</div>
          <h2 id="learning-title">Transformative Pedagogy: Classroom Theory to Boardroom Reality.</h2>
          <p className="learning-intro-sub">
            Our participatory MBA pedagogy combines rigorous academic foundations with Harvard and IIM case
            studies, semester-wise corporate immersions, and executive mentorship.
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
              <h3>Case-Based Business Learning</h3>
              <p>
                Students analyze real-world corporate challenges from Harvard Business Publishing and top IIM repositories,
                developing high-conviction decision-making capabilities in fast-changing markets.
              </p>

              <ul className="feature-checkpoints">
                <li>
                  <span className="check-dot">✓</span>
                  <span>Harvard &amp; IIM business dilemma case simulations</span>
                </li>
                <li>
                  <span className="check-dot">✓</span>
                  <span>Mock boardroom strategy debates &amp; financial valuations</span>
                </li>
                <li>
                  <span className="check-dot">✓</span>
                  <span>Live client consulting &amp; industry summer internships</span>
                </li>
              </ul>
            </div>
          </article>

          <div className="learning-right-col">
            <article className="learning-image-card">
              <img
                src="/assets/kcm/Interactive_Smart_Classroom.jpeg"
                alt="Interactive Smart Classroom at Karnataka College of Management"
              />
              <div className="image-card-overlay">
                <span className="image-card-tag">PRACTICAL LEARNING</span>
                <strong>Semester-Wise Corporate Plant &amp; Field Immersions</strong>
                <p>Scheduled industrial visits to leading manufacturing hubs, technology parks, and banking headquarters across India.</p>
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
