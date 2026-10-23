"use client";

import { useState } from "react";
import { useEnquiry } from "./enquiry/EnquiryContext";

type CategoryFilter = "All" | "Sports" | "Arts" | "STEM" | "Leadership";

interface LifeActivity {
  id: string;
  category: "Sports" | "Arts" | "STEM" | "Leadership";
  categoryLabel: string;
  badge: string;
  title: string;
  description: string;
  tag: string;
  imagePosition: string;
  gradeSpan: string;
}

const ACTIVITIES: LifeActivity[] = [
  {
    id: "sports",
    category: "Sports",
    categoryLabel: "Sports & Athletics",
    badge: "Athletics & Fitness",
    title: "Championship Sports & Physical Training",
    description:
      "Dedicated coaching in cricket nets, basketball, football turf, badminton, and athletics with annual inter-school leagues.",
    tag: "Daily Coaching & State Meets",
    imagePosition: "0% 50%",
    gradeSpan: "Grade 1 – Class 10",
  },
  {
    id: "robotics",
    category: "STEM",
    categoryLabel: "STEM & Innovation",
    badge: "STEM & Prototyping",
    title: "Robotics & Innovation Tinkering Lab",
    description:
      "Hands-on Arduino electronics, Lego mechanics, and early Python coding where classroom science evolves into real innovations.",
    tag: "Hands-on Tinkering & Hackathons",
    imagePosition: "50% 50%",
    gradeSpan: "Grade 3 – Class 10",
  },
  {
    id: "music",
    category: "Arts",
    categoryLabel: "Performing Arts",
    badge: "Vocal & Instrumental",
    title: "Classical & Western Music Studio",
    description:
      "Carnatic, Hindustani, and Western instrumental mastery across keyboard, acoustic guitar, violin, and multi-part choral ensembles.",
    tag: "Annual Concert & Recitals",
    imagePosition: "12.5% 50%",
    gradeSpan: "Pre-KG – Class 10",
  },
  {
    id: "dance",
    category: "Arts",
    categoryLabel: "Performing Arts",
    badge: "Classical & Folk",
    title: "Classical & Contemporary Dance Academy",
    description:
      "Disciplined training in Bharatanatyam, regional folk dance, and expressive contemporary choreography building poise and stage presence.",
    tag: "State Festival Honours",
    imagePosition: "25% 50%",
    gradeSpan: "Pre-KG – Class 10",
  },
  {
    id: "art",
    category: "Arts",
    categoryLabel: "Visual Arts",
    badge: "Visual & Studio Arts",
    title: "Fine Arts, Sketching & Pottery Studio",
    description:
      "Watercolour canvases, charcoal sketching, ceramics, and mixed-media design where students express boundless visual creativity.",
    tag: "Annual Student Art Expo",
    imagePosition: "37.5% 50%",
    gradeSpan: "Pre-KG – Class 10",
  },
  {
    id: "debate",
    category: "Leadership",
    categoryLabel: "Leadership & Oratory",
    badge: "Oratory & MUN",
    title: "Model UN & Parliamentary Debate Society",
    description:
      "Fostering articulate public speaking, diplomatic elocution, policy drafting, and competitive debate in prestigious inter-school forums.",
    tag: "Citywide Debate Laurels",
    imagePosition: "62.5% 50%",
    gradeSpan: "Grade 5 – Class 10",
  },
  {
    id: "clubs",
    category: "STEM",
    categoryLabel: "Clubs & Community",
    badge: "Environment & Science",
    title: "Eco-Warriors & Science Society",
    description:
      "Student-directed campus biodiversity conservation, botanical gardens, paper recycling drives, and environmental sustainability audits.",
    tag: "Green Campus Initiatives",
    imagePosition: "75% 50%",
    gradeSpan: "Grade 3 – Class 10",
  },
  {
    id: "trips",
    category: "Leadership",
    categoryLabel: "Experiential Learning",
    badge: "Field Expeditions",
    title: "Heritage Expeditions & Nature Camps",
    description:
      "Outbound learning journeys visiting Karnataka's historic monuments, science planetariums, biosphere reserves, and leadership adventure camps.",
    tag: "Term-Wise Expeditions",
    imagePosition: "87.5% 50%",
    gradeSpan: "Grade 1 – Class 10",
  },
  {
    id: "events",
    category: "Leadership",
    categoryLabel: "Campus Celebrations",
    badge: "Annual Milestone",
    title: "Tarang: Annual Cultural & Sports Fiesta",
    description:
      "A flagship multi-day celebration highlighting theatrical plays, music recitals, athletic championships, and vibrant community pride.",
    tag: "Grand School Celebration",
    imagePosition: "100% 50%",
    gradeSpan: "All Students (Pre-KG – 10)",
  },
];

const CATEGORIES: { label: string; value: CategoryFilter }[] = [
  { label: "All Activities", value: "All" },
  { label: "Sports & Athletics", value: "Sports" },
  { label: "Performing & Fine Arts", value: "Arts" },
  { label: "STEM & Innovation", value: "STEM" },
  { label: "Leadership & Culture", value: "Leadership" },
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
              <span>BEYOND THE CLASSROOM</span>
            </div>
            <h2 id="student-life-title" className="student-life-main-heading">
              A Vibrant Campus Rhythm <span className="student-life-accent">Nurturing Passion & Character.</span>
            </h2>
          </div>

          <div className="student-life-lead">
            <p>
              At Karnataka Public School, co-curricular learning is an essential pillar of holistic growth. From competitive athletics and fine arts academies to robotics labs and elocution forums, our Pre-KG to Class 10 students build lifelong confidence and friendships.
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
              <strong>20+ Active Clubs</strong>
              <span>Arts, Tech, Sports & Debating</span>
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
              <strong>100% Student Inclusion</strong>
              <span>Pre-KG to Class 10 Participation</span>
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
              <strong>State & District Trophies</strong>
              <span>Athletics & Cultural Laurels</span>
            </div>
          </div>

          <div className="life-pillar-sep" />

          <div className="life-pillar-item">
            <div className="life-pillar-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <div className="life-pillar-info">
              <strong>Annual Fiesta: Tarang</strong>
              <span>Week-Long Creative Showcase</span>
            </div>
          </div>
        </div>

        {/* CATEGORY FILTER TABS */}
        <div className="student-life-filter-bar" role="tablist" aria-label="Student life categories">
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
              {/* IMAGE WRAPPER WITH PRECISE CROP */}
              <div className="life-card-media">
                <div
                  className="life-card-img"
                  style={{
                    backgroundPosition: act.imagePosition,
                  }}
                  aria-hidden="true"
                />
                <div className="life-card-gradient-overlay" />

                {/* TOP META ROW */}
                <div className="life-card-top-row">
                  <span className="life-card-category-badge">{act.badge}</span>
                  <span className="life-card-grade-badge">{act.gradeSpan}</span>
                </div>

                {/* BOTTOM FLOATING TAG */}
                <div className="life-card-tag-pill">
                  <span className="tag-pulse" />
                  <span>{act.tag}</span>
                </div>
              </div>

              {/* CARD BODY CONTENT */}
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
            <span className="life-bottom-badge">HOLISTIC STUDENT DEVELOPMENT</span>
            <h3 className="life-bottom-title">
              Want your child to discover their creative & athletic talents?
            </h3>
            <p className="life-bottom-desc">
              Schedule a campus tour to explore our state-of-the-art sports facilities, fine arts studios, robotics labs, and talk with our passionate mentors.
            </p>
          </div>
          <div className="life-bottom-actions">
            <button
              type="button"
              className="life-bottom-enquire-btn"
              onClick={openEnquiry}
              data-open-enquiry
            >
              Enquire About Student Life →
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
                ✕
              </button>

              <div className="life-modal-media">
                <div
                  className="life-modal-img"
                  style={{ backgroundPosition: selectedActivity.imagePosition }}
                />
                <div className="life-modal-media-overlay" />
                <div className="life-modal-badge-row">
                  <span className="life-modal-badge">{selectedActivity.badge}</span>
                  <span className="life-modal-grade">{selectedActivity.gradeSpan}</span>
                </div>
              </div>

              <div className="life-modal-body">
                <span className="life-modal-category">{selectedActivity.categoryLabel}</span>
                <h3 className="life-modal-title">{selectedActivity.title}</h3>
                <p className="life-modal-desc">{selectedActivity.description}</p>

                <div className="life-modal-features">
                  <div className="life-modal-feat">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Guided by experienced certified instructors</span>
                  </div>
                  <div className="life-modal-feat">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Integrated into weekly school timetable & clubs</span>
                  </div>
                  <div className="life-modal-feat">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Regular inter-school & state tournament exposure</span>
                  </div>
                </div>

                <div className="life-modal-footer">
                  <button
                    type="button"
                    className="life-modal-cta"
                    onClick={() => {
                      setSelectedActivity(null);
                      openEnquiry();
                    }}
                    data-open-enquiry
                  >
                    Enquire for 2027-28 Admissions
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
