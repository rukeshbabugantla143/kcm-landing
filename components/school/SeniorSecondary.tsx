const specializations = [
  {
    className: "stream-science",
    title: "BUSINESS ANALYTICS",
    subjects: "Python for Business, Machine Learning, Power BI, Big Data, SQL",
    resources: "High-Performance Computing Cluster, AI & Visualization Labs",
    direction: "Business Analyst, Data Strategy Consultant, Analytics Manager",
  },
  {
    className: "stream-commerce",
    title: "FINANCIAL MANAGEMENT",
    subjects: "Corporate Valuation, Investment Banking, FinTech, Risk Analysis, M&A",
    resources: "Real-Time Trading Hub, Financial Modeling Workstations, SAP ERP",
    direction: "Investment Banker, Equity Analyst, Wealth Manager, CFO Track",
  },
  {
    className: "stream-humanities",
    title: "MARKETING & HR",
    subjects: "Digital Branding, Talent Acquisition, Consumer Insights, Strategic HRM",
    resources: "Digital Studio, Consumer Behavior Lab, Boardroom Role-Play",
    direction: "Brand Manager, Digital Strategy Lead, HR Business Partner",
  },
];

export default function SeniorSecondary() {
  return (
    <section className="senior-secondary" id="senior-secondary" aria-labelledby="senior-title">
      <div className="senior-inner">
        <div className="senior-header">
          <div className="section-kicker">ADVANCED MBA TRACKS</div>
          <h2 id="senior-title">Specialized Pathways for Executive Leadership.</h2>
          <p>
            An intensive postgraduate management environment combining functional depth, live corporate
            consulting, and personalized mentorship across all 4 semesters.
          </p>
        </div>

        <div className="stream-board" aria-hidden="true">
          <span></span>
          <i></i>
          <b></b>
        </div>

        <div className="stream-grid">
          {specializations.map((spec) => (
            <article className={`stream-card ${spec.className}`} key={spec.title}>
              <div className="stream-line" aria-hidden="true"></div>
              <h3>{spec.title}</h3>
              <dl>
                <div>
                  <dt>Core Modules</dt>
                  <dd>{spec.subjects}</dd>
                </div>
                <div>
                  <dt>Labs &amp; Certifications</dt>
                  <dd>{spec.resources}</dd>
                </div>
                <div>
                  <dt>Corporate Roles</dt>
                  <dd>{spec.direction}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
