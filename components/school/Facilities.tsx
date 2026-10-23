"use client";

import { useState } from "react";
import { useEnquiry } from "./enquiry/EnquiryContext";

type FacilityGroup = "All" | "Academics" | "Sports" | "Arts" | "Safety";

interface FacilityItem {
  id: string;
  index: number;
  pos: string;
  category: string;
  group: FacilityGroup;
  label: string;
  tagline: string;
  description: string;
  stat: string;
  spec: string;
  highlights: string[];
  icon: React.ReactNode;
}

const FACILITIES_DATA: FacilityItem[] = [
  {
    id: "smart",
    index: 1,
    pos: "0% 50%",
    category: "ACADEMICS",
    group: "Academics",
    label: "Smart Classrooms",
    tagline: "Multimedia-enabled, ergonomic learning spaces",
    description:
      "Interactive smart touch panels and flexible ergonomic seating support focused, multimedia-enabled conceptual learning from Pre-KG to Class 10 with natural daylighting and sound-insulated layouts.",
    stat: "100% Digitally Enabled",
    spec: "Pre-KG to Class 10 • Smart Interactive Touch Panels",
    highlights: ["Interactive Touch Panels", "Ergonomic Student Seating", "Natural Daylighting", "Audio-Visual Teaching"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    id: "science",
    index: 2,
    pos: "11.11% 50%",
    category: "DISCOVERY",
    group: "Academics",
    label: "Science Labs",
    tagline: "Hands-on experiential discovery stations",
    description:
      "Fully equipped Physics, Chemistry, and Biology experimental stations where students test scientific hypotheses safely under certified teacher supervision with individual apparatus stations.",
    stat: "Individual Stations",
    spec: "Class 1 to 10 • Guided Laboratory Supervision",
    highlights: ["Safety Compliant Layout", "Modern Lab Apparatus", "Guided Teacher Supervision", "Individual Experiment Stations"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 2v7.31L4.1 18.2A2 2 0 0 0 5.8 21h12.4a2 2 0 0 0 1.7-2.8L14 9.31V2" />
        <line x1="8.5" y1="2" x2="15.5" y2="2" />
        <line x1="7" y1="14" x2="17" y2="14" />
      </svg>
    ),
  },
  {
    id: "computer",
    index: 3,
    pos: "22.22% 50%",
    category: "TECHNOLOGY",
    group: "Academics",
    label: "Computer Lab",
    tagline: "Coding, algorithmic thinking & digital skills",
    description:
      "Modern high-speed computer labs develop coding fundamentals, algorithmic thinking, research capabilities, and responsible digital citizenship with cyber-filtered high-speed internet.",
    stat: "1:1 Student Workstations",
    spec: "Class 1 to 10 • High-Speed Cyber-Safe Access",
    highlights: ["1:1 Workstation Ratio", "High-Speed Internet", "Cyber-Filtered Access", "Coding & Logic Curriculum"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="2" y1="17" x2="22" y2="17" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    id: "robotics",
    index: 4,
    pos: "33.33% 50%",
    category: "INNOVATION",
    group: "Academics",
    label: "Robotics & STEM Lab",
    tagline: "Tinkering, robotics sets & prototype challenges",
    description:
      "Makerspace environments introduce robotics kits, Arduino microcontrollers, basic electronics, and collaborative engineering challenges where classroom principles evolve into real working inventions.",
    stat: "Maker Toolkits & Sets",
    spec: "Class 3 to 10 • Electronics & Robotics Sets",
    highlights: ["STEM Maker Toolkits", "Modular Robotics Sets", "Hands-on Circuitry", "Team Project Challenges"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <circle cx="12" cy="5" r="2" />
        <path d="M12 7v4" />
        <line x1="8" y1="16" x2="8" y2="16" />
        <line x1="16" y1="16" x2="16" y2="16" />
      </svg>
    ),
  },
  {
    id: "library",
    index: 5,
    pos: "44.44% 50%",
    category: "KNOWLEDGE",
    group: "Arts",
    label: "Central Library",
    tagline: "5,000+ volumes, reading lounges & research journals",
    description:
      "Quiet, sunlit reading lounges and a curated multi-genre collection of fiction, non-fiction, encyclopaedias, and academic journals nurture a lifelong reading habit and deep scholarly curiosity.",
    stat: "5,000+ Curated Books",
    spec: "Pre-KG to Class 10 • Quiet Reading Lounges",
    highlights: ["5,000+ Curated Books", "Quiet Study Lounges", "Periodicals & Journals", "Age-Wise Literature"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
        <path d="M6 2v20" />
      </svg>
    ),
  },
  {
    id: "sports",
    index: 6,
    pos: "55.55% 50%",
    category: "WELLNESS",
    group: "Sports",
    label: "Sports & Athletics",
    tagline: "Spacious multi-courts, football turf & cricket nets",
    description:
      "Spacious outdoor sports grounds, dedicated cricket practice nets, basketball courts, badminton arenas, and child-safe play areas foster endurance, teamwork, sportsmanship, and physical fitness.",
    stat: "Multi-Sport Infrastructure",
    spec: "Pre-KG to Class 10 • Certified Physical Coaches",
    highlights: ["Spacious Playfields", "Basketball & Badminton", "Professional PE Coaches", "Daily Athletic Routines"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="m4.93 4.93 4.24 4.24M14.83 9.17l4.24-4.24M14.83 14.83l4.24 4.24M9.17 14.83l-4.24 4.24" />
      </svg>
    ),
  },
  {
    id: "music-art",
    index: 7,
    pos: "66.66% 50%",
    category: "CREATIVITY",
    group: "Arts",
    label: "Music & Fine Arts",
    tagline: "Acoustic music studio & visual art workshop",
    description:
      "Acoustically treated music studios and visual art workshops give students the space for vocal practice, keyboards, guitars, painting, pottery, and creative expression under expert mentors.",
    stat: "Acoustic Art Studios",
    spec: "Pre-KG to Class 10 • Vocal & Instrumental Mentorship",
    highlights: ["Acoustic Music Studio", "Art & Craft Easels", "Vocal & Instrument Training", "Student Art Galleries"],
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
    id: "auditorium",
    index: 8,
    pos: "77.77% 50%",
    category: "COMMUNITY",
    group: "Safety",
    label: "Auditorium & Stage",
    tagline: "500+ seat multi-purpose performance venue",
    description:
      "A state-of-the-art auditorium equipped with professional acoustics, stage lighting, and audio-visual setups hosts daily morning assemblies, theatre plays, cultural fests, and guest lectures.",
    stat: "500+ Seating Capacity",
    spec: "All Grades • Stage Lighting & Acoustic Audio",
    highlights: ["Clear Acoustic Sound", "Stage Lighting Setup", "500+ Seating Capacity", "All-School Assemblies"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 10h18M3 14h18M3 6h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
      </svg>
    ),
  },
  {
    id: "transport",
    index: 9,
    pos: "88.88% 50%",
    category: "SAFETY",
    group: "Safety",
    label: "Safe Transport Fleet",
    tagline: "GPS-tracked fleet with female bus attendants",
    description:
      "Our expansive fleet of school buses features live GPS telemetry, speed governors, CCTV cameras, first-aid kits, and trained female attendants on every run ensuring safe, reliable daily commutes across Bengaluru.",
    stat: "GPS Live Tracking",
    spec: "Bengaluru Arterial Routes • Female Attendants on Board",
    highlights: ["GPS Live Tracking", "Female Bus Attendants", "Speed Governed Buses", "Clear Route Tracking"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="17" cy="18" r="2" />
        <path d="M19 16H5M9 8h6" />
      </svg>
    ),
  },
  {
    id: "security",
    index: 10,
    pos: "100% 50%",
    category: "SECURITY",
    group: "Safety",
    label: "24/7 Campus Security",
    tagline: "Gated entry, verified visitor passes & full CCTV",
    description:
      "Comprehensive multi-tier safety including round-the-clock trained security guards, electronic visitor verification gates, perimeter fencing, and full high-definition CCTV coverage across all campus zones.",
    stat: "24/7 Monitored Campus",
    spec: "Gated Perimeter • HD CCTV Coverage",
    highlights: ["Comprehensive CCTV", "Visitor Verification Gates", "Campus Boundary Safety", "Trained Security Personnel"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
];

const CATEGORIES: { label: string; value: FacilityGroup; count: number }[] = [
  { label: "All Spaces", value: "All", count: 10 },
  { label: "Academics & Labs", value: "Academics", count: 4 },
  { label: "Sports & Fitness", value: "Sports", count: 1 },
  { label: "Arts & Library", value: "Arts", count: 2 },
  { label: "Safety & Fleet", value: "Safety", count: 3 },
];

const CAMPUS_PILLARS = [
  {
    icon: "🌿",
    title: "5-Acre Green Campus",
    desc: "Spacious, pedestrian-first grounds designed for outdoor exploration and sports in Yelahanka Hobli.",
  },
  {
    icon: "🔬",
    title: "Experiential STEM Labs",
    desc: "Composite science, robotics maker kits, and high-speed computer labs aligned with NEP 2020.",
  },
  {
    icon: "🛡️",
    title: "Zero-Compromise Safety",
    desc: "24/7 security personnel, gated visitor verification, and comprehensive high-definition CCTV coverage.",
  },
  {
    icon: "🚌",
    title: "Safe GPS Transport",
    desc: "Speed-governed buses with live GPS tracking and dedicated female attendants across Bengaluru.",
  },
];

export default function Facilities() {
  const { openEnquiry } = useEnquiry();
  const [activeCategory, setActiveCategory] = useState<FacilityGroup>("All");
  const [activeId, setActiveId] = useState<string>("smart");

  const filteredFacilities =
    activeCategory === "All"
      ? FACILITIES_DATA
      : FACILITIES_DATA.filter((item) => item.group === activeCategory);

  const activeIndex = filteredFacilities.findIndex((item) => item.id === activeId);
  const current =
    activeIndex !== -1
      ? filteredFacilities[activeIndex]
      : filteredFacilities[0] || FACILITIES_DATA[0];

  const handleCategoryChange = (cat: FacilityGroup) => {
    setActiveCategory(cat);
    const newFiltered =
      cat === "All"
        ? FACILITIES_DATA
        : FACILITIES_DATA.filter((item) => item.group === cat);
    if (!newFiltered.some((item) => item.id === activeId)) {
      setActiveId(newFiltered[0].id);
    }
  };

  const handlePrev = () => {
    const currentIdx = filteredFacilities.findIndex((item) => item.id === current.id);
    const nextIdx = currentIdx <= 0 ? filteredFacilities.length - 1 : currentIdx - 1;
    setActiveId(filteredFacilities[nextIdx].id);
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
              CAMPUS &amp; 5-ACRE INFRASTRUCTURE
            </div>
            <h2 id="facilities-title">Spaces designed for discovery, safety and school life.</h2>
            <p>
              Explore modern, safe and well-equipped environments that inspire academic excellence,
              active wellbeing and creative confidence from Pre-KG to Class 10.
            </p>
          </div>

          <div className="facilities-top-actions">
            <div className="facilities-nav-controls" aria-label="Facility slider controls">
              <span className="facility-counter">
                <strong>{String(current.index).padStart(2, "0")}</strong> / 10
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
              style={{ "--facility-bg-pos": current.pos } as React.CSSProperties}
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
                <span className="caption-tag">YELAHANKA HOBLI CAMPUS</span>
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

                <a href="tel:+919071887788" className="stage-call-direct" title="Call Admissions Helpline">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>Helpline: +91 90718 87788</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Facility Cards Rail */}
        <div className="facilities-cards-selector">
          <div className="selector-header">
            <span className="selector-title">SELECT CAMPUS SPACE TO EXPLORE ({filteredFacilities.length})</span>
            <span className="selector-hint">Click any facility card to view details</span>
          </div>

          <div className="facility-cards-grid">
            {filteredFacilities.map((item) => {
              const isActive = item.id === current.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`facility-card-item ${isActive ? "is-active" : ""}`}
                  onClick={() => setActiveId(item.id)}
                >
                  <div className="card-top-row">
                    <div className="card-icon-bubble" aria-hidden="true">
                      {item.icon}
                    </div>
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

        {/* Bottom Campus Infrastructure Trust Pillars */}
        <div className="campus-pillars-grid">
          {CAMPUS_PILLARS.map((pillar) => (
            <div className="campus-pillar-card" key={pillar.title}>
              <span className="pillar-emoji" aria-hidden="true">{pillar.icon}</span>
              <div className="pillar-content">
                <h4 className="pillar-title">{pillar.title}</h4>
                <p className="pillar-desc">{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
