"use client";

import { useState } from "react";
import { useEnquiry } from "./enquiry/EnquiryContext";

type FacilityGroup = "All" | "Academics" | "Sports" | "Safety";

interface FacilityItem {
  id: string;
  index: number;
  category: string;
  group: FacilityGroup;
  label: string;
  tagline: string;
  description: string;
  stat: string;
  spec: string;
  highlights: string[];
  imgSrc: string;
  icon: React.ReactNode;
}

const FACILITIES_DATA: FacilityItem[] = [
  {
    id: "library",
    index: 1,
    category: "RESEARCH",
    group: "Academics",
    label: "Fully Automated Central Library",
    tagline: "50,000+ MBA volumes, Harvard Business Review archives & digital journals",
    description:
      "An automated knowledge hub specifically designed to cater to the academic needs of MBA scholars. It houses 50,000+ volumes, rare management classics, Harvard Business Review archives, and subscriptions to global financial dailies.",
    stat: "50,000+ Volumes",
    spec: "Automated RFID • EBSCO Digital Database",
    highlights: ["50,000+ Curated Books", "Harvard Business Review Archives", "Quiet Study & Research Lounges", "EBSCO & Digital Database Terminals"],
    imgSrc: "/assets/kcm/Fully_Automated_Central_Library.jpeg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
        <path d="M6 2v20" />
      </svg>
    ),
  },
  {
    id: "smart",
    index: 2,
    category: "LEARNING",
    group: "Academics",
    label: "Interactive Smart Classrooms",
    tagline: "4K interactive touch panels, tiered executive seating & hybrid audio",
    description:
      "Interactive 4K smart touch panels and flexible tiered executive seating support focused case discussions, corporate presentations, and international guest webinars with natural daylighting and sound insulation.",
    stat: "100% 4K Smart Enabled",
    spec: "Tiered Executive Seating • Lecture Capture",
    highlights: ["4K Interactive Touch Panels", "Tiered Executive Seating", "Lecture Recording System", "Hybrid Webinar Infrastructure"],
    imgSrc: "/assets/kcm/Interactive_Smart_Classroom.jpeg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    id: "computer",
    index: 3,
    category: "TECHNOLOGY",
    group: "Academics",
    label: "Advanced Computing & AI Lab",
    tagline: "High-performance cluster for Python, R, Power BI & SAP ERP",
    description:
      "Equipped with modern high-speed computing workstations, dedicated business analytics clusters, and certified tools for Python, R, Tableau, and enterprise SAP modules.",
    stat: "1:1 Student Terminals",
    spec: "Dual-Band High-Speed Wi-Fi • Big Data Tools",
    highlights: ["Python & R Workstations", "Tableau & Power BI Dashboards", "SAP ERP Enterprise Modules", "High-Speed Dedicated Fiber"],
    imgSrc: "/assets/kcm/Advanced_Computer_Laboratory.jpeg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="2" y1="17" x2="22" y2="17" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    id: "auditorium",
    index: 4,
    category: "CONVENTIONS",
    group: "Academics",
    label: "Main Campus Auditorium",
    tagline: "500+ seat acoustic hall for corporate conclaves & guest lectures",
    description:
      "A state-of-the-art auditorium equipped with professional acoustics, presentation lighting, and high-definition projection systems hosting national management symposiums and corporate pre-placement drives.",
    stat: "500+ Seating Capacity",
    spec: "Acoustic Audio • Corporate Symposiums",
    highlights: ["Clear Acoustic Sound", "Dual Presentation Displays", "500+ Seating Capacity", "Corporate Conclaves Venue"],
    imgSrc: "/assets/kcm/Main_Campus_Auditorium.jpeg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 10h18M3 14h18M3 6h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
      </svg>
    ),
  },
  {
    id: "cafeteria",
    index: 5,
    category: "LIFESTYLE",
    group: "Safety",
    label: "Cafeteria & Student Lounge",
    tagline: "Hygienic multi-cuisine dining & vibrant breakout space",
    description:
      "A welcoming dining and informal discussion lounge serving wholesome North and South Indian cuisine, fresh juices, and espresso in an immaculate, hygienic environment.",
    stat: "Multi-Cuisine Dining",
    spec: "Hygienic Mess • Indoor & Outdoor Seating",
    highlights: ["Wholesome Multi-Cuisine", "Hygienic Kitchen Standards", "Breakout Discussion Spaces", "Fresh Refreshments All Day"],
    imgSrc: "/assets/kcm/Cafeteria_&_Student_Lounge.jpeg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
  },
  {
    id: "hostel",
    index: 6,
    category: "RESIDENCE",
    group: "Safety",
    label: "Premium Residential Hostel Block",
    tagline: "Separate furnished hostels for men & women with 24/7 security",
    description:
      "Comfortable on-campus accommodation with furnished rooms, dedicated study tables, high-speed Wi-Fi, laundry facilities, and round-the-clock security and resident warden supervision.",
    stat: "24/7 Monitored Residence",
    spec: "Separate Hostels • High-Speed Wi-Fi",
    highlights: ["24/7 Warden Supervision", "Biometric Access Control", "Dedicated Study Lounges", "Hygienic Mess Facilities"],
    imgSrc: "/assets/kcm/Premium_Hostel_Residential_Block.jpeg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    id: "sports",
    index: 7,
    category: "WELLNESS",
    group: "Sports",
    label: "Outdoor Sports & Athletics Arena",
    tagline: "Basketball courts, cricket nets, badminton & fitness gym",
    description:
      "Encouraging physical fitness, endurance, and teamwork with outdoor basketball and volleyball courts, cricket nets, indoor table tennis, and a dedicated gymnasium.",
    stat: "Multi-Sport Arena",
    spec: "Outdoor Courts • Indoor Gymnasium",
    highlights: ["Basketball & Volleyball Courts", "Cricket Practice Nets", "Badminton & Table Tennis", "Modern Fitness Equipment"],
    imgSrc: "/assets/kcm/Outdoor_Sports_&_Athletics_Arena.jpeg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="m4.93 4.93 4.24 4.24M14.83 9.17l4.24-4.24M14.83 14.83l4.24 4.24M9.17 14.83l-4.24 4.24" />
      </svg>
    ),
  },
  {
    id: "security",
    index: 8,
    category: "SECURITY",
    group: "Safety",
    label: "24/7 Campus Security & Anti-Ragging Cell",
    tagline: "Gated entry, verified visitor logs & complete CCTV coverage",
    description:
      "Comprehensive multi-tier safety including trained security personnel, electronic visitor verification gates, perimeter fencing, full HD CCTV coverage, and a zero-tolerance Anti-Ragging committee.",
    stat: "100% Monitored Campus",
    spec: "Gated Perimeter • Anti-Ragging Compliance",
    highlights: ["Comprehensive CCTV", "Visitor Verification System", "Zero-Tolerance Anti-Ragging", "Trained Security Personnel"],
    imgSrc: "/assets/kcm/college.png",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
];

const CATEGORIES: { label: string; value: FacilityGroup; count: number }[] = [
  { label: "All Spaces", value: "All", count: 8 },
  { label: "Academics & Labs", value: "Academics", count: 4 },
  { label: "Sports & Wellness", value: "Sports", count: 1 },
  { label: "Campus & Hostels", value: "Safety", count: 3 },
];

const CAMPUS_PILLARS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    tag: "STRATEGIC LOCATION",
    title: "Yelahanka Bengaluru Campus",
    desc: "Conveniently located on Hegde Nagar Main Road, Yelahanka, with fast connectivity to tech parks, airport, and metro.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    tag: "ACCREDITED EXCELLENCE",
    title: "AICTE & BCU Approved",
    desc: "Approved by AICTE and affiliated to Bengaluru City University, maintaining premier academic rigor and industry compliance.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="2" y1="20" x2="22" y2="20" />
      </svg>
    ),
    tag: "FREE LAPTOP PROGRAM",
    title: "Tech-Enabled MBA Hub",
    desc: "Complimentary laptop for every MBA scholar, 100% 4K smart classrooms, and dedicated data analytics cluster.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    tag: "PLACEMENT ADVANTAGE",
    title: "100% Placement Assurance",
    desc: "Dedicated Corporate Relations Hub connecting students to 150+ multinational hiring partners with ₹12.36 LPA peak CTC.",
  },
];

export default function Facilities() {
  const { openEnquiry } = useEnquiry();
  const [activeCategory, setActiveCategory] = useState<FacilityGroup>("All");
  const [activeId, setActiveId] = useState<string>("cafeteria");

  const filteredFacilities =
    activeCategory === "All"
      ? FACILITIES_DATA
      : FACILITIES_DATA.filter((item) => item.group === activeCategory);

  const current =
    filteredFacilities.find((item) => item.id === activeId) ??
    filteredFacilities[0] ??
    FACILITIES_DATA[0];

  const handleCategoryChange = (group: FacilityGroup) => {
    setActiveCategory(group);
    const matched =
      group === "All"
        ? FACILITIES_DATA[0]
        : FACILITIES_DATA.find((item) => item.group === group);
    if (matched) {
      setActiveId(matched.id);
    }
  };

  const handlePrev = () => {
    const currentIdx = filteredFacilities.findIndex((item) => item.id === current.id);
    const prevIdx = currentIdx <= 0 ? filteredFacilities.length - 1 : currentIdx - 1;
    setActiveId(filteredFacilities[prevIdx].id);
  };

  const handleNext = () => {
    const currentIdx = filteredFacilities.findIndex((item) => item.id === current.id);
    const nextIdx = currentIdx >= filteredFacilities.length - 1 ? 0 : currentIdx + 1;
    setActiveId(filteredFacilities[nextIdx].id);
  };

  return (
    <section className="facilities-section" id="facilities" aria-labelledby="facilities-title">
      <div className="facilities-glow" aria-hidden="true"></div>

      <div className="facilities-inner">
        {/* Section Header */}
        <div className="facilities-header-row">
          <div className="facilities-header-copy">
            <div className="section-kicker">
              <span className="kicker-pulse-dot" aria-hidden="true"></span>
              CAMPUS &amp; INFRASTRUCTURE
            </div>
            <h2 id="facilities-title">World-Class Infrastructure for MBA Scholars.</h2>
            <p>
              Explore modern, tech-enabled environments that inspire business acumen,
              collaborative research, and corporate readiness at Karnataka College of Management.
            </p>
          </div>

          <div className="facilities-top-actions">
            <div className="facilities-nav-controls" aria-label="Facility slider controls">
              <span className="facility-counter">
                <strong>{String(current.index).padStart(2, "0")}</strong> / 08
              </span>
              <div className="nav-btn-group">
                <button
                  type="button"
                  className="facility-nav-btn prev"
                  onClick={handlePrev}
                  aria-label="Previous facility"
                  title="Previous Facility"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="facility-nav-btn next"
                  onClick={handleNext}
                  aria-label="Next facility"
                  title="Next Facility"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Category Navigation Pills */}
        <div className="facilities-category-tabs" role="tablist" aria-label="Campus facility categories">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.value;
            return (
              <button
                key={cat.value}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`facility-tab-btn ${isActive ? "is-active" : ""}`}
                onClick={() => handleCategoryChange(cat.value)}
              >
                <span>{cat.label}</span>
                <span className="tab-count-badge">{cat.count}</span>
              </button>
            );
          })}
        </div>

        {/* Heroic Grand Showcase Stage */}
        <div className="facilities-heroic-stage">
          {/* Left: Cinematic Photo Viewport */}
          <div className="stage-photo-column">
            <div
              className="facility-photo-viewport"
              style={{
                backgroundImage: `url('${current.imgSrc}')`,
              }}
              role="img"
              aria-label={current.label}
            >
              <div className="photo-top-bar">
                <span className="live-facility-pill">
                  <span className="live-dot" aria-hidden="true"></span>
                  {current.category}
                </span>
                <span className="photo-index-badge">
                  {current.stat}
                </span>
              </div>

              <div className="photo-bottom-caption">
                <span className="caption-tag">KCM BANGALORE CAMPUS</span>
                <h3 className="caption-title">{current.label}</h3>
              </div>
            </div>
          </div>

          {/* Right: Comprehensive Details & Action Panel */}
          <div className="stage-details-column">
            <div className="facility-stage-content">
              <div className="stage-heading-block">
                <div className="stage-meta-row">
                  <span className="stage-category-kicker">{current.category} HIGHLIGHT</span>
                  <span className="stage-scope-tag">{current.spec}</span>
                </div>
                <h3 className="stage-title">{current.label}</h3>
                <p className="stage-tagline">{current.tagline}</p>
              </div>

              <p className="stage-description">{current.description}</p>

              {/* Highlights 4-Grid */}
              <div className="stage-highlights-grid">
                {current.highlights.map((highlight, idx) => (
                  <div className="stage-chip" key={idx}>
                    <span className="chip-check" aria-hidden="true">✓</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Action Strip */}
              <div className="stage-actions-strip">
                <button
                  type="button"
                  className="stage-walkthrough-btn"
                  onClick={openEnquiry}
                  data-open-enquiry
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span>Book Campus Walkthrough</span>
                </button>

                <a href="tel:+919606994048" className="stage-call-direct" title="Call Admissions Helpline">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>Helpline: +91 96069 94048</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Facility Cards Selector Rail */}
        <div className="facilities-cards-selector">
          <div className="selector-header">
            <div>
              <span className="selector-title">EXPLORE ALL 8 CAMPUS SPACES</span>
              <span className="selector-hint">Click any facility to view high-resolution photos &amp; specifications</span>
            </div>
            <span className="selector-count-badge">8 Spaces Available</span>
          </div>

          <div className="facility-cards-grid">
            {filteredFacilities.map((item) => {
              const isSelected = item.id === current.id;
              return (
                <button
                  type="button"
                  key={item.id}
                  className={`facility-card-item ${isSelected ? "is-active" : ""}`}
                  onClick={() => setActiveId(item.id)}
                  aria-label={`View ${item.label}`}
                >
                  <div className="card-top-row">
                    <span className="card-icon-bubble">{item.icon}</span>
                    <span className="card-num-badge">0{item.index}</span>
                  </div>
                  <div className="card-text-block">
                    <span className="card-category">{item.category}</span>
                    <strong className="card-title">{item.label}</strong>
                    <p className="card-tagline">{item.tagline}</p>
                  </div>
                  <div className="card-footer-strip">
                    <span className="card-stat-pill">{item.stat}</span>
                    <span className="card-arrow-icon" aria-hidden="true">→</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 4 Infrastructure Trust Pillars */}
        <div className="campus-pillars-grid">
          {CAMPUS_PILLARS.map((pillar, idx) => (
            <div className="campus-pillar-card" key={idx}>
              <div className="pillar-top-row">
                <span className="pillar-icon-bubble">{pillar.icon}</span>
                <span className="pillar-tag">{pillar.tag}</span>
              </div>
              <h4 className="pillar-title">{pillar.title}</h4>
              <p className="pillar-desc">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
