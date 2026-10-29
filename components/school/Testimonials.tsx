"use client";

import { useState, useMemo } from "react";

type TestimonialItem = {
  id: string;
  category: "students" | "alumni" | "recruiters";
  categoryLabel: string;
  name: string;
  role: string;
  gradeBadge: string;
  quote: string;
  metric: string;
  rating: number;
};

const allTestimonials: TestimonialItem[] = [
  {
    id: "alumni-1",
    category: "alumni",
    categoryLabel: "Alumni Reflection",
    name: "Rahul Sharma",
    role: "Senior Business Analyst, Leading MNC",
    gradeBadge: "MBA Class of 2022",
    quote:
      "KCM provided me with the perfect blend of academic rigor and practical exposure. The placements here are outstanding and the faculty mentorship is truly life-changing!",
    metric: "Campus Placed",
    rating: 5,
  },
  {
    id: "alumni-2",
    category: "alumni",
    categoryLabel: "Alumni Reflection",
    name: "Sneha Patil",
    role: "Financial Analyst, FinTech Corp",
    gradeBadge: "MBA Class of 2023",
    quote:
      "The leadership training at KCM is top-notch. I secured a campus placement in a premier financial firm right after graduation thanks to the dedicated career development cell.",
    metric: "Corporate Placement",
    rating: 5,
  },
  {
    id: "student-1",
    category: "students",
    categoryLabel: "Scholar Voice",
    name: "Vikram Singh",
    role: "MBA Scholar & E-Cell Lead",
    gradeBadge: "MBA Batch 2024-26",
    quote:
      "The vibrant campus life, international study tour to Singapore, and continuous CXO interactions make KCM the best choice for aspiring managers in Bangalore.",
    metric: "Global Exposure",
    rating: 5,
  },
  {
    id: "alumni-3",
    category: "alumni",
    categoryLabel: "Alumni Pathway",
    name: "Ananya Das",
    role: "Brand Marketing Lead",
    gradeBadge: "MBA Class of 2021",
    quote:
      "From live FMCG case studies to hands-on brand marketing projects in the digital studio, KCM gave me the conviction to step straight into a managerial role.",
    metric: "Fast-Track Career",
    rating: 5,
  },
  {
    id: "student-2",
    category: "students",
    categoryLabel: "Analytics Scholar",
    name: "Karthik Reddy",
    role: "MBA in Business Analytics",
    gradeBadge: "Batch 2024-26",
    quote:
      "The high-performance computing labs, hands-on Python and Power BI curriculum, and real-time business problem sets set KCM apart from traditional colleges.",
    metric: "AI & Analytics",
    rating: 5,
  },
  {
    id: "recruiter-1",
    category: "recruiters",
    categoryLabel: "Corporate Partner",
    name: "Senior Talent Acquisition Head",
    role: "Global Technology & Consulting MNC",
    gradeBadge: "Recruiter Feedback",
    quote:
      "KCM MBA graduates demonstrate exceptional corporate discipline, quantitative rigor, and articulate communication. They are consistently day-one corporate ready.",
    metric: "Day-One Corporate Ready",
    rating: 5,
  },
];

const categoryTabs = [
  { id: "all", label: "All Voices" },
  { id: "alumni", label: "Alumni" },
  { id: "students", label: "Scholars" },
  { id: "recruiters", label: "Recruiters" },
] as const;

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredTestimonials = useMemo(() => {
    if (activeTab === "all") return allTestimonials;
    return allTestimonials.filter((item) => item.category === activeTab);
  }, [activeTab]);

  return (
    <section className="testimonials-section" id="testimonials" aria-labelledby="testimonials-title">
      <div className="testimonials-inner">
        {/* Section Header */}
        <div className="testimonials-header-block">
          <div className="testimonials-kicker-wrap">
            <span className="testimonials-pill-tag">
              <span className="pill-star">★</span>
              <span>COMMUNITY REFLECTIONS &amp; SUCCESS</span>
            </span>
            <h2 id="testimonials-title">Voices of KCM Bangalore: Alumni &amp; Scholars.</h2>
            <p className="testimonials-intro">
              Hear from our students and alumni who are making waves in the corporate world, leading
              enterprises across Marketing, Finance, HR, and Analytics.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="testimonials-filter-bar" role="tablist" aria-label="Filter testimonials">
            {categoryTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                className={`filter-tab-btn ${activeTab === tab.id ? "is-active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span>{tab.label}</span>
                <span className="tab-count-pill">
                  {tab.id === "all"
                    ? allTestimonials.length
                    : allTestimonials.filter((t) => t.category === tab.id).length}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials Bento Cards Grid */}
        <div className="testimonials-cards-grid">
          {filteredTestimonials.map((item) => (
            <article className={`testimonial-card card-${item.category}`} key={item.id}>
              {/* Card Top: Rating and Category Tag */}
              <div className="card-top-row">
                <div className="card-rating" aria-label="5 out of 5 stars">
                  {[...Array(item.rating)].map((_, i) => (
                    <span key={i} className="star-icon">★</span>
                  ))}
                </div>
                <span className="card-cat-badge">{item.categoryLabel}</span>
              </div>

              {/* Quote Body */}
              <blockquote className="card-quote">
                <span className="quote-glyph" aria-hidden="true">&ldquo;</span>
                <p>{item.quote}</p>
              </blockquote>

              {/* Card Footer: Author Profile & Metric */}
              <div className="card-author-footer">
                <div className="author-meta">
                  <div className="author-avatar-chip" aria-hidden="true">
                    {item.name.charAt(0)}
                  </div>
                  <div className="author-details">
                    <strong className="author-name">{item.name}</strong>
                    <div className="author-role-line">
                      <span>{item.role}</span>
                      <span className="grade-pill">{item.gradeBadge}</span>
                    </div>
                  </div>
                </div>
                <div className="author-metric-tag">
                  <span>{item.metric}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Trust Indicators */}
        <div className="testimonials-trust-ribbon">
          <div className="trust-ribbon-item">
            <span className="trust-number">100%</span>
            <span className="trust-text">Placement Assistance Record</span>
          </div>
          <div className="ribbon-sep" aria-hidden="true"></div>
          <div className="trust-ribbon-item">
            <span className="trust-number">₹12.36 LPA</span>
            <span className="trust-text">Highest Salary Package</span>
          </div>
          <div className="ribbon-sep" aria-hidden="true"></div>
          <div className="trust-ribbon-item">
            <span className="trust-number">15+ Years</span>
            <span className="trust-text">Karnataka Education Trust Legacy</span>
          </div>
          <div className="ribbon-sep" aria-hidden="true"></div>
          <div className="trust-ribbon-item">
            <span className="trust-number">150+</span>
            <span className="trust-text">Corporate Recruiting Partners</span>
          </div>
        </div>
      </div>
    </section>
  );
}
