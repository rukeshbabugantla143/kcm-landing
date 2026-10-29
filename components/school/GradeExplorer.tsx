"use client";

import { useState } from "react";
import { useEnquiry } from "./enquiry/EnquiryContext";

type StageKey = "marketing" | "finance" | "hr" | "analytics";

interface StageData {
  key: StageKey;
  label: string;
  sublabel: string;
  badge: string;
  age: string;
  title: string;
  description: string;
  imageSrc: string;
  curriculumFocus: string;
  highlights: {
    title: string;
    desc: string;
  }[];
}

const STAGES: Record<StageKey, StageData> = {
  marketing: {
    key: "marketing",
    label: "Marketing",
    sublabel: "MBA in Marketing Management",
    badge: "AICTE APPROVED • 2 YEARS FULL TIME",
    age: "Postgraduate Degree | 4 Semesters",
    title: "Strategic Branding, Consumer Insights & Digital Strategy",
    description:
      "The MBA in Marketing at KCM focuses on modern market positioning, digital transformation, and brand leadership. Students master the dynamic consumer landscape through live campaigns, CXO interactions, and creative execution.",
    imageSrc: "/assets/kcm/Interactive_Smart_Classroom.jpeg",
    curriculumFocus: "Digital Branding, Social Media & Omnichannel Sales",
    highlights: [
      {
        title: "Digital Marketing Studio",
        desc: "Hands-on training in search engine optimization, performance advertising, and content growth strategies.",
      },
      {
        title: "Consumer Behavior & Market Research",
        desc: "Research space and Harvard/IIM case studies for analyzing emerging trends and consumer psychology.",
      },
      {
        title: "Strategic Brand Management",
        desc: "Product lifecycle planning, omnichannel distribution, and global brand positioning.",
      },
    ],
  },
  finance: {
    key: "finance",
    label: "Finance",
    sublabel: "MBA in Finance Management",
    badge: "AICTE APPROVED • 2 YEARS FULL TIME",
    age: "Postgraduate Degree | 4 Semesters",
    title: "Investment Banking, FinTech & Corporate Valuation",
    description:
      "Designed for students aiming to master global capital markets, investment banking, and corporate financial health. Students receive intensive hands-on training on financial modeling, risk analysis, and corporate restructuring.",
    imageSrc: "/assets/kcm/Fully_Automated_Central_Library.jpeg",
    curriculumFocus: "Financial Modeling, Equity Research & FinTech",
    highlights: [
      {
        title: "FinTech & Investment Hub",
        desc: "Real-time market simulations, portfolio management workshops, and advanced financial modeling.",
      },
      {
        title: "Corporate Finance & M&A",
        desc: "Valuation methodologies, mergers & acquisitions, and global capital market dynamics.",
      },
      {
        title: "Risk Analysis & Compliance",
        desc: "Credit appraisal, treasury management, and corporate risk mitigation frameworks.",
      },
    ],
  },
  hr: {
    key: "hr",
    label: "Human Resource",
    sublabel: "MBA in HR Management",
    badge: "AICTE APPROVED • 2 YEARS FULL TIME",
    age: "Postgraduate Degree | 4 Semesters",
    title: "Strategic Talent Leadership, Culture & People Analytics",
    description:
      "The HR MBA program at KCM focuses on cultivating people-centric leadership and strategic talent management. We prepare graduates to resolve organizational challenges and lead corporate talent growth in modern enterprises.",
    imageSrc: "/assets/kcm/Main_Campus_Auditorium.jpeg",
    curriculumFocus: "Strategic HRM, Talent Acquisition & Leadership",
    highlights: [
      {
        title: "Leadership Development Lab",
        desc: "Interactive space for boardroom simulations, executive role-play, and mock corporate negotiations.",
      },
      {
        title: "HR Analytics & Digital HRIS",
        desc: "Practical training on modern enterprise HR software, metric-driven hiring, and workforce planning.",
      },
      {
        title: "Labor Law & Organizational Culture",
        desc: "Comprehensive understanding of labor jurisprudence, employee relations, and organizational psychology.",
      },
    ],
  },
  analytics: {
    key: "analytics",
    label: "Business Analytics",
    sublabel: "MBA in Business Analytics",
    badge: "AICTE APPROVED • 2 YEARS FULL TIME",
    age: "Postgraduate Degree | 4 Semesters",
    title: "Big Data, Predictive Intelligence & AI for Business",
    description:
      "Bridges the gap between strategic decision-making and data science. Students master Python, Power BI, SQL, and predictive machine learning models to solve high-stakes business challenges and forecast industry trends.",
    imageSrc: "/assets/kcm/Advanced_Computer_Laboratory.jpeg",
    curriculumFocus: "Python, Power BI, Machine Learning & AI",
    highlights: [
      {
        title: "AI & Data Science Computing Lab",
        desc: "High-performance computing cluster for big data processing, Python scripting, and machine learning models.",
      },
      {
        title: "Visualization & BI Studio",
        desc: "Advanced executive dashboards and predictive modeling utilizing Power BI, Tableau, and Excel.",
      },
      {
        title: "Data-Driven Strategic Consulting",
        desc: "Applying statistical insights to supply chain optimization, customer churn prediction, and revenue strategy.",
      },
    ],
  },
};

const STAGE_KEYS: StageKey[] = ["marketing", "finance", "hr", "analytics"];

export default function GradeExplorer() {
  const { openEnquiry } = useEnquiry();
  const [activeStage, setActiveStage] = useState<StageKey>("marketing");
  const stage = STAGES[activeStage];

  return (
    <section
      className="grade-explorer-section"
      id="grade-explorer"
      aria-labelledby="grade-explorer-title"
    >
      <div className="grade-explorer-inner">
        {/* HEADER BLOCK */}
        <div className="grade-header-block">
          <div className="grade-pill-tag">
            <span className="grade-pill-dot" />
            <span>MBA PROGRAMS &amp; SPECIALIZATIONS</span>
          </div>

          <h2 id="grade-explorer-title" className="grade-main-heading">
            Industry-Aligned MBA Specializations for <span className="grade-accent">Global Leadership.</span>
          </h2>

          <p className="grade-header-desc">
            Karnataka College of Management offers future-proof MBA specializations affiliated to Bengaluru City University and approved by AICTE. Explore our high-demand management streams designed to launch your corporate career.
          </p>
        </div>

        {/* STAGE TABS BAR */}
        <div className="grade-stage-nav" role="tablist" aria-label="MBA Specializations">
          {STAGE_KEYS.map((key) => {
            const item = STAGES[key];
            const isActive = activeStage === key;

            return (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`grade-stage-btn ${isActive ? "is-active" : ""}`}
                onClick={() => setActiveStage(key)}
              >
                <div className="stage-btn-indicator" />
                <div className="stage-btn-text">
                  <strong className="stage-btn-label">{item.label}</strong>
                  <span className="stage-btn-sub">{item.sublabel}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* ACTIVE STAGE SHOWCASE CARD */}
        <div className="grade-showcase-card">
          {/* LEFT: Cinematic Photo Frame */}
          <div className="grade-showcase-media">
            <div
              className="grade-showcase-img"
              style={{
                backgroundImage: `url('${stage.imageSrc}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              role="img"
              aria-label={stage.title}
            />
            <div className="grade-showcase-overlay" />

            {/* Floating Info Badges on Image */}
            <div className="grade-media-badge-top">
              <span className="grade-badge-chip">{stage.badge}</span>
            </div>

            <div className="grade-media-badge-bottom">
              <span className="grade-focus-chip">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                {stage.curriculumFocus}
              </span>
            </div>
          </div>

          {/* RIGHT: Structured Pedagogical Details */}
          <div className="grade-showcase-content">
            <div className="grade-content-meta">
              <span className="grade-age-pill">{stage.age}</span>
            </div>

            <h3 className="grade-content-title">{stage.title}</h3>
            <p className="grade-content-desc">{stage.description}</p>

            {/* 3 Structured Highlights Cards */}
            <div className="grade-highlights-stack">
              {stage.highlights.map((highlight, index) => (
                <div key={highlight.title} className="grade-highlight-row">
                  <div className="grade-hl-icon-box">
                    <span className="grade-hl-num">0{index + 1}</span>
                  </div>
                  <div className="grade-hl-body">
                    <strong className="grade-hl-title">{highlight.title}</strong>
                    <p className="grade-hl-desc">{highlight.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Actions Row */}
            <div className="grade-content-actions">
              <button
                type="button"
                className="grade-enquire-action-btn"
                onClick={openEnquiry}
                data-open-enquiry
              >
                <span>Apply for {stage.label}</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>

              <a href="#student-life" className="grade-secondary-link">
                <span>View Placement Record</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
