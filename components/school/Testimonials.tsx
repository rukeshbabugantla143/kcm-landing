"use client";

import { useState, useMemo } from "react";

type TestimonialItem = {
  id: string;
  category: "parents" | "students" | "alumni";
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
    id: "parent-1",
    category: "parents",
    categoryLabel: "Parent Reflection",
    name: "Priya & Rohit Mehra",
    role: "Parents of Siddharth",
    gradeBadge: "Class 6",
    quote:
      "The school brings academic structure and genuine warmth together. We see our child becoming more curious, articulate and responsible every month.",
    metric: "Holistic Growth",
    rating: 5,
  },
  {
    id: "student-1",
    category: "students",
    categoryLabel: "Student Voice",
    name: "Aarav Sharma",
    role: "Student President",
    gradeBadge: "Class 10",
    quote:
      "Teachers help us think far beyond textbooks. Hands-on science labs, robotics club, and sports practice keep learning active while giving us complete confidence for Board exams.",
    metric: "Board Readiness",
    rating: 5,
  },
  {
    id: "alumni-1",
    category: "alumni",
    categoryLabel: "Alumni Pathway",
    name: "Ananya Iyer",
    role: "Alumna, Class of 2023",
    gradeBadge: "Class 10 (96.4%)",
    quote:
      "Karnataka Public School gave me the discipline, study habits, and strong foundation in mathematics and sciences that made higher secondary learning seamless.",
    metric: "Academic Foundation",
    rating: 5,
  },
  {
    id: "parent-2",
    category: "parents",
    categoryLabel: "Parent Reflection",
    name: "Dr. Sandeep & Shalini Kulkarni",
    role: "Parents of Diya",
    gradeBadge: "Class 3 (Primary)",
    quote:
      "Choosing KPSC for our daughter was the best decision. The faculty are exceptionally caring, attentive to every child, and nurture natural curiosity without stress.",
    metric: "Nurturing Environment",
    rating: 5,
  },
  {
    id: "student-2",
    category: "students",
    categoryLabel: "Student Voice",
    name: "Meera Nair",
    role: "Debate & Arts Prefect",
    gradeBadge: "Class 8",
    quote:
      "The debate society, computer labs, and annual cultural showcase make every school term memorable. Our teachers always encourage us to ask deep questions.",
    metric: "Confidence & Expression",
    rating: 5,
  },
  {
    id: "alumni-2",
    category: "alumni",
    categoryLabel: "Alumni Pathway",
    name: "Vikramaditya Rao",
    role: "State-level Athlete & Scholar",
    gradeBadge: "Class of 2022",
    quote:
      "The sports coaches and academic mentors worked together to help me excel in athletics while never compromising my Board syllabus scores. Truly a balanced school.",
    metric: "Sports & Academics",
    rating: 5,
  },
];

const categoryTabs = [
  { id: "all", label: "All Voices" },
  { id: "parents", label: "Parents" },
  { id: "students", label: "Students" },
  { id: "alumni", label: "Alumni" },
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
              <span>COMMUNITY VOICES &amp; REFLECTIONS</span>
            </span>
            <h2 id="testimonials-title">Trusted by Bengaluru Families. Cherished by Students.</h2>
            <p className="testimonials-intro">
              Authentic reflections from our vibrant community of parents, high-achieving students,
              and alumni celebrating academic rigor and character from Pre-KG to Class 10.
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
            <span className="trust-number">4.9 / 5.0</span>
            <span className="trust-text">Parent Satisfaction Score</span>
          </div>
          <div className="ribbon-sep" aria-hidden="true"></div>
          <div className="trust-ribbon-item">
            <span className="trust-number">100%</span>
            <span className="trust-text">Class 10 CBSE Board Pass Rate</span>
          </div>
          <div className="ribbon-sep" aria-hidden="true"></div>
          <div className="trust-ribbon-item">
            <span className="trust-number">15+ Years</span>
            <span className="trust-text">Excellence in Bengaluru</span>
          </div>
          <div className="ribbon-sep" aria-hidden="true"></div>
          <div className="trust-ribbon-item">
            <span className="trust-number">1:15</span>
            <span className="trust-text">Teacher-to-Student Mentorship</span>
          </div>
        </div>
      </div>
    </section>
  );
}
