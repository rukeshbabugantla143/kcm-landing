"use client";

import { useState } from "react";
import { useEnquiry } from "./enquiry/EnquiryContext";

type CategoryFilter = "All" | "Placements" | "Clubs" | "Global" | "Cultural";

interface LifeActivity {
  id: string;
  category: "Placements" | "Clubs" | "Global" | "Cultural";
  categoryLabel: string;
  badge: string;
  title: string;
  description: string;
  tag: string;
  imgSrc: string;
  scopeSpan: string;
}

const ACTIVITIES: LifeActivity[] = [
  {
    id: "placements-cell",
    category: "Placements",
    categoryLabel: "Career Acceleration",
    badge: "100% Support",
    title: "Dedicated Corporate Placement Cell",
    description:
      "Bridging the gap between academia and corporate leadership. Organizing resume clinics, aptitude bootcamps, and guaranteed 10+ interview opportunities.",
    tag: "Highest: ₹12.36 LPA",
    imgSrc: "/assets/kcm/Main_Campus_Auditorium.jpeg",
    scopeSpan: "All MBA Scholars",
  },
  {
    id: "coding-ai",
    category: "Clubs",
    categoryLabel: "Tech & Innovation",
    badge: "AI & Computing",
    title: "KCM Coding Cell & AI Research Lab",
    description:
      "Hands-on Python analytics, data visualization hackathons, and machine learning research applied to strategic corporate decision-making.",
    tag: "Weekly AI Hackathons",
    imgSrc: "/assets/kcm/Advanced_Computer_Laboratory.jpeg",
    scopeSpan: "Analytics & Tech Clubs",
  },
  {
    id: "fintech-hub",
    category: "Clubs",
    categoryLabel: "Finance & Markets",
    badge: "FinTech Society",
    title: "FinTech Society & Investment Club",
    description:
      "Real-time stock market simulations, equity valuation workshops, algorithmic trading analyses, and portfolio management competitions.",
    tag: "Trading Simulations",
    imgSrc: "/assets/kcm/Fully_Automated_Central_Library.jpeg",
    scopeSpan: "Finance Specialization",
  },
  {
    id: "kalasangama",
    category: "Cultural",
    categoryLabel: "Campus Celebrations",
    badge: "Annual Fest",
    title: "Kalasangama: National Management Fest",
    description:
      "KCM's flagship annual cultural and management fest uniting top B-school scholars across India for business simulation games, debate, and music.",
    tag: "Flagship Annual Mega Fest",
    imgSrc: "/assets/kcm/Interactive_Smart_Classroom.jpeg",
    scopeSpan: "Inter-College Fest",
  },
  {
    id: "global-tours",
    category: "Global",
    categoryLabel: "Global Exposure",
    badge: "International",
    title: "Singapore & Dubai International Study Tours",
    description:
      "Comprehensive global business immersion visits to multinational headquarters, international ports, financial centers, and partner campuses.",
    tag: "Singapore & Dubai",
    imgSrc: "/assets/kcm/college.png",
    scopeSpan: "Global MBA Batch",
  },
  {
    id: "ecell",
    category: "Clubs",
    categoryLabel: "Entrepreneurship",
    badge: "E-Cell Hub",
    title: "Entrepreneurship & Incubation Hub",
    description:
      "Mentoring student founders through business plan formulation, pitch deck reviews with angel investors, and patent filing support.",
    tag: "Venture Ideation & Funding",
    imgSrc: "/assets/kcm/home-aboutus.webp",
    scopeSpan: "Startup Founders",
  },
  {
    id: "social-impact",
    category: "Cultural",
    categoryLabel: "Social Initiatives",
    badge: "CSR Wing",
    title: "Rotaract & Social Community Initiatives",
    description:
      "Instilling social responsibility through blood donation drives, NGO partnerships, rural education mentoring, and environmental campaigns.",
    tag: "Community Outreach",
    imgSrc: "/assets/kcm/Cafeteria_&_Student_Lounge.jpeg",
    scopeSpan: "Social Leadership",
  },
  {
    id: "sports-arena",
    category: "Cultural",
    categoryLabel: "Sports & Fitness",
    badge: "Athletics",
    title: "KCM Corporate Sports League",
    description:
      "Inter-collegiate basketball championships, cricket tournaments, badminton leagues, and daily fitness routines fostering sportsmanship.",
    tag: "Annual Sports Trophy",
    imgSrc: "/assets/kcm/Outdoor_Sports_&_Athletics_Arena.jpeg",
    scopeSpan: "Sports & Gymnasium",
  },
];

const CATEGORIES: { label: string; value: CategoryFilter }[] = [
  { label: "All Activities", value: "All" },
  { label: "Placements & Internships", value: "Placements" },
  { label: "Academic Clubs", value: "Clubs" },
  { label: "Global Immersion", value: "Global" },
  { label: "Fests & Culture", value: "Cultural" },
];

const RECRUITERS = [
  { name: "TCS", src: "/assets/kcm/TCS.webp" },
  { name: "Toyota", src: "/assets/kcm/Toyota.png" },
  { name: "Axis Bank", src: "/assets/kcm/Axis_Bank.png" },
  { name: "Qualcomm", src: "/assets/kcm/Qualcomm.png" },
  { name: "LTIMindtree", src: "/assets/kcm/LTIMindtree.png" },
  { name: "Muthoot Finance", src: "/assets/kcm/Muthoot_Finance.png" },
  { name: "GlobalLogic", src: "/assets/kcm/GlobalLogic.jpg" },
  { name: "Alorica", src: "/assets/kcm/Alorica.png" },
  { name: "Bajaj Allianz", src: "/assets/kcm/Bajaj_Allianz.png" },
  { name: "TripFactory", src: "/assets/kcm/TripFactory.png" },
  { name: "Media Assist", src: "/assets/kcm/Media_Assist.png" },
  { name: "Adecco", src: "/assets/kcm/Adeccor.png" },
];

export default function StudentLife() {
  const { openEnquiry } = useEnquiry();
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");
  const [selectedActivity, setSelectedActivity] = useState<LifeActivity | null>(null);

  const filteredActivities =
    activeCategory === "All"
      ? ACTIVITIES
      : ACTIVITIES.filter((act) => act.category === activeCategory);

  return (
    <section className="student-life-section" id="student-life" aria-labelledby="student-life-title">
      <div className="student-life-inner">
        {/* HEADER SECTION */}
        <div className="student-life-header-block">
          <div className="student-life-titles">
            <div className="student-life-pill-tag">
              <span className="student-life-pill-dot" />
              <span>CAREERS &amp; CAMPUS CULTURE</span>
            </div>
            <h2 id="student-life-title" className="student-life-main-heading">
              A Vibrant Corporate Ecosystem <span className="student-life-accent">Forging Industry Leaders.</span>
            </h2>
          </div>

          <div className="student-life-lead">
            <p>
              At Karnataka College of Management, education transcends textbooks. From high-stakes placement bootcamps
              and international corporate tours to student clubs and our flagship fest Kalasangama, KCM prepares
              scholars for both professional triumph and lifelong leadership.
            </p>
          </div>
        </div>

        {/* 4 CORE PILLARS STATS RIBBON */}
        <div className="student-life-pillars-bar">
          <div className="life-pillar-item">
            <div className="life-pillar-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="8" r="7" />
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
              </svg>
            </div>
            <div className="life-pillar-info">
              <strong>₹12.36 LPA</strong>
              <span>Highest Salary Package</span>
            </div>
          </div>

          <div className="life-pillar-sep" />

          <div className="life-pillar-item">
            <div className="life-pillar-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div className="life-pillar-info">
              <strong>150+ Recruiters</strong>
              <span>Fortune 500 &amp; Global MNCs</span>
            </div>
          </div>

          <div className="life-pillar-sep" />

          <div className="life-pillar-item">
            <div className="life-pillar-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                <path d="M4 22h16" />
                <path d="M10 14.66V17c0 .55-.45 1-1 1H7" />
                <path d="M14 14.66V17c0 .55.45 1 1 1h2" />
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
              </svg>
            </div>
            <div className="life-pillar-info">
              <strong>100% Placement</strong>
              <span>Guaranteed 10+ Drives</span>
            </div>
          </div>

          <div className="life-pillar-sep" />

          <div className="life-pillar-item">
            <div className="life-pillar-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <div className="life-pillar-info">
              <strong>Singapore &amp; Dubai</strong>
              <span>International Immersion Tours</span>
            </div>
          </div>
        </div>

        {/* CORPORATE RECRUITERS STRIP */}
        <div style={{ margin: "40px 0 20px" }}>
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <span style={{ fontSize: "11px", letterSpacing: "2px", fontWeight: 800, textTransform: "uppercase", color: "var(--deep-navy)", opacity: 0.7 }}>
              Top Hiring Partners &amp; Corporate Network
            </span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "20px" }}>
            {RECRUITERS.map((recruiter) => (
              <div
                key={recruiter.name}
                style={{
                  background: "#fff",
                  padding: "12px 24px",
                  borderRadius: "16px",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
                  border: "1px solid rgba(0,0,0,0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: "120px",
                  height: "58px",
                }}
              >
                <img
                  src={recruiter.src}
                  alt={recruiter.name}
                  style={{ maxHeight: "32px", maxWidth: "90px", objectFit: "contain" }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* CATEGORY FILTER TABS */}
        <div className="student-life-filter-bar" role="tablist" aria-label="Campus life categories">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.value;
            const count =
              cat.value === "All"
                ? ACTIVITIES.length
                : ACTIVITIES.filter((a) => a.category === cat.value).length;

            return (
              <button
                key={cat.value}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`life-filter-btn ${isActive ? "is-active" : ""}`}
                onClick={() => setActiveCategory(cat.value)}
              >
                {cat.label}
                <span className="life-tab-count">{count}</span>
              </button>
            );
          })}
        </div>

        {/* PROFESSIONAL BENTO GRID */}
        <div className="student-life-grid">
          {filteredActivities.map((act) => (
            <article
              key={act.id}
              className="life-card"
              onClick={() => setSelectedActivity(act)}
            >
              <div className="life-card-media">
                <div
                  className="life-card-img"
                  style={{
                    backgroundImage: `url('${act.imgSrc}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  aria-hidden="true"
                />
                <div className="life-card-gradient-overlay" />

                <div className="life-card-top-row">
                  <span className="life-card-category-badge">{act.badge}</span>
                  <span className="life-card-grade-badge">{act.scopeSpan}</span>
                </div>

                <div className="life-card-tag-pill">
                  <span className="tag-pulse" />
                  <span>{act.tag}</span>
                </div>
              </div>

              <div className="life-card-content">
                <h3 className="life-card-title">{act.title}</h3>
                <p className="life-card-desc">{act.description}</p>
                <div className="life-card-action">
                  <span className="life-explore-link">
                    Explore Details
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* BOTTOM CO-CURRICULAR ENQUIRY BANNER */}
        <div className="student-life-bottom-banner">
          <div className="life-bottom-content">
            <span className="life-bottom-badge">CAREER ADVANCEMENT &amp; PLACEMENTS</span>
            <h3 className="life-bottom-title">
              Ready to Accelerate Your Corporate Management Career?
            </h3>
            <p className="life-bottom-desc">
              Schedule a personalized career counseling session, view our complete placement records, and meet our senior faculty mentors.
            </p>
          </div>
          <div className="life-bottom-actions">
            <button
              type="button"
              className="life-bottom-enquire-btn"
              onClick={openEnquiry}
              data-open-enquiry
            >
              Enquire About Admissions →
            </button>
          </div>
        </div>

        {/* QUICK DETAIL MODAL */}
        {selectedActivity && (
          <div
            className="life-modal-backdrop"
            onClick={() => setSelectedActivity(null)}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="life-modal-dialog"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="life-modal-close"
                onClick={() => setSelectedActivity(null)}
                aria-label="Close modal"
              >
                ×
              </button>
              <div className="life-modal-header">
                <span className="life-modal-badge">{selectedActivity.badge}</span>
                <span className="life-modal-grade">{selectedActivity.scopeSpan}</span>
              </div>
              <h3 className="life-modal-title">{selectedActivity.title}</h3>
              <p className="life-modal-tagline">{selectedActivity.tag}</p>
              <p className="life-modal-desc">{selectedActivity.description}</p>
              <div className="life-modal-actions">
                <button
                  type="button"
                  className="life-modal-btn"
                  onClick={() => {
                    setSelectedActivity(null);
                    openEnquiry();
                  }}
                >
                  Apply for Admission
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
