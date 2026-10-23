"use client";

import { useState } from "react";
import { useEnquiry } from "./enquiry/EnquiryContext";

type FAQItem = {
  id: string;
  category: "Admissions" | "Curriculum" | "Facilities" | "Transport";
  categoryLabel: string;
  question: string;
  answer: string;
  highlight: string;
};

const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-admission-process",
    category: "Admissions",
    categoryLabel: "Admissions",
    question: "How do we begin the admission process for the 2027-28 academic year?",
    answer:
      "Parents can initiate the admission process by submitting our online enquiry form, calling our admissions office, or scheduling a personalized campus walkthrough. Following the interaction, parents submit the child's birth certificate and previous academic records (for Class 1 to 10) to complete provisional enrollment.",
    highlight: "Pre-KG to Class 10 Open",
  },
  {
    id: "faq-curriculum-board",
    category: "Curriculum",
    categoryLabel: "Curriculum",
    question: "Which curriculum framework does Karnataka Public School follow?",
    answer:
      "KPS is strictly affiliated with the Central Board of Secondary Education (CBSE Affiliation #830385, School Code: 45312), New Delhi. Our academic curriculum implements NEP 2020 standards, blending experiential STEM learning, bilingual language proficiency, digital literacy, and continuous conceptual evaluation up to the Class 10 Board Examinations.",
    highlight: "CBSE Affiliated #830385",
  },
  {
    id: "faq-age-criteria",
    category: "Admissions",
    categoryLabel: "Admissions",
    question: "What are the age eligibility criteria for Pre-KG and Grade 1 admissions?",
    answer:
      "In accordance with Karnataka State Education Department and NEP mandates as of June 1st of the academic entry year: Pre-KG requires a minimum of 3 years, LKG requires 4+ years, UKG requires 5+ years, and Grade 1 entry requires completion of 6 years. Age relaxation is not permitted per regulatory norms.",
    highlight: "NEP 2020 Compliant",
  },
  {
    id: "faq-school-timings",
    category: "Curriculum",
    categoryLabel: "Timings",
    question: "What are the regular school timings for different learning stages?",
    answer:
      "Pre-Primary (Pre-KG to UKG) operates from 8:30 AM to 12:30 PM. Primary & Middle School (Classes 1 to 7) runs from 8:30 AM to 3:15 PM. Secondary School (Classes 8 to 10) operates from 8:30 AM to 3:45 PM, including dedicated periods for laboratory work, sports practice, and remedial academic mentoring.",
    highlight: "Stage-Wise Schedules",
  },
  {
    id: "faq-transport-safety",
    category: "Transport",
    categoryLabel: "Transport",
    question: "Is safe and GPS-monitored school transport available across Bengaluru?",
    answer:
      "Yes. KPS operates an extensive fleet of GPS-tracked buses covering key residential zones and arterial routes across Bengaluru. Each bus is equipped with speed governors, CCTV cameras, a first-aid station, background-verified drivers, and a trained female attendant on every trip for complete student safety.",
    highlight: "GPS Tracking & CCTV",
  },
  {
    id: "faq-fee-structure",
    category: "Admissions",
    categoryLabel: "Fee Transparency",
    question: "Where can parents review the detailed fee structure and payment terms?",
    answer:
      "Karnataka Public School adheres to 100% transparent fee policies with zero hidden capitation charges or building donations. Detailed fee schedules for each grade (Pre-KG to Class 10) are shared transparently during the campus visit and accessible through the parent portal with flexible term-wise installments.",
    highlight: "Zero Capitation Fees",
  },
  {
    id: "faq-campus-facilities",
    category: "Facilities",
    categoryLabel: "Facilities",
    question: "What laboratory, sports, and digital infrastructure are available on campus?",
    answer:
      "Our 5-acre Bengaluru campus features interactive smart classrooms, composite Science and advanced Computer labs, a robotics and tinkering zone, a multi-genre library, and full outdoor sporting infrastructure including cricket practice nets, basketball court, badminton facilities, and child-safe pre-primary play zones.",
    highlight: "5-Acre Modern Campus",
  },
  {
    id: "faq-teacher-ratio",
    category: "Curriculum",
    categoryLabel: "Academics",
    question: "What is the teacher-to-student ratio and classroom learning environment?",
    answer:
      "We maintain an optimal 1:25 teacher-to-student ratio across all classrooms. This ensures personalized attention, active participation, differentiated support for students needing remediation, and continuous parent-teacher communication through regular developmental reviews.",
    highlight: "1:25 Individual Attention",
  },
];

type CategoryFilter = "All" | "Admissions" | "Curriculum" | "Transport" | "Facilities";

const CATEGORIES: { label: string; value: CategoryFilter }[] = [
  { label: "All Questions", value: "All" },
  { label: "Admissions & Age", value: "Admissions" },
  { label: "Curriculum & Timings", value: "Curriculum" },
  { label: "Transport & Safety", value: "Transport" },
  { label: "Campus Facilities", value: "Facilities" },
];

export default function FAQ() {
  const { openEnquiry } = useEnquiry();
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");
  const [openId, setOpenId] = useState<string>("faq-admission-process");

  const filteredFaqs =
    activeCategory === "All"
      ? FAQ_DATA
      : FAQ_DATA.filter((item) => item.category === activeCategory);

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? "" : id));
  };

  return (
    <section className="faq-section" id="faq" aria-labelledby="faq-title">
      <div className="faq-inner">
        {/* LEFT COLUMN: Sticky Info & Help Card */}
        <div className="faq-sidebar">
          <div className="faq-sticky-content">
            <div className="faq-pill-tag">
              <span className="faq-pill-dot" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>

            <h2 id="faq-title" className="faq-main-heading">
              Everything You Need to Know About <span className="faq-accent">Admissions & School Life.</span>
            </h2>

            <p className="faq-sidebar-desc">
              Have questions regarding CBSE affiliation, age eligibility, fee transparency, transport, or campus facilities? Find direct answers below or connect with our Bengaluru admissions desk.
            </p>

            {/* Quick Highlights / Trust Pills */}
            <div className="faq-trust-tags">
              <span className="faq-trust-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                CBSE Affiliation #830385
              </span>
              <span className="faq-trust-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                Pre-KG to Class 10
              </span>
              <span className="faq-trust-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                Transparent Fee Policy
              </span>
              <span className="faq-trust-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                Bengaluru GPS Fleet
              </span>
            </div>

            {/* Dedicated Help Desk Card */}
            <div className="faq-help-card">
              <div className="faq-help-header">
                <div className="faq-help-avatar-ring">
                  <div className="faq-help-avatar">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                  <span className="faq-help-online-indicator" title="Admissions Desk Active" />
                </div>
                <div className="faq-help-titles">
                  <h3 className="faq-help-title">Still have questions?</h3>
                  <p className="faq-help-sub">Our admissions team is here to assist.</p>
                </div>
              </div>

              <p className="faq-help-timing">
                Desk open Monday to Friday (8:30 AM – 4:30 PM), Saturday (8:30 AM – 1:30 PM). Walk-ins and phone consultations welcome.
              </p>

              <div className="faq-help-actions">
                <button
                  type="button"
                  className="faq-enquire-btn"
                  onClick={openEnquiry}
                  data-open-enquiry
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span>Enquire Online (2027-28)</span>
                </button>

                <a href="tel:+919071887788" className="faq-call-btn" title="Call Admissions Desk">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>+91 90718 87788</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive Tabs & Accordion Items */}
        <div className="faq-main-content">
          {/* Category Filter Pills */}
          <div className="faq-filter-bar" role="tablist" aria-label="FAQ categories">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`faq-filter-btn ${isActive ? "is-active" : ""}`}
                  onClick={() => setActiveCategory(cat.value)}
                >
                  {cat.label}
                  {cat.value !== "All" && (
                    <span className="faq-tab-count">
                      {FAQ_DATA.filter((f) => f.category === cat.value).length}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Accordion List */}
          <div className="faq-accordion-list">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`faq-card ${isOpen ? "is-open" : ""}`}
                >
                  <button
                    type="button"
                    className="faq-trigger-btn"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                    onClick={() => toggleFAQ(faq.id)}
                  >
                    <div className="faq-trigger-left">
                      <div className="faq-badge-row">
                        <span className={`faq-category-badge cat-${faq.category.toLowerCase()}`}>
                          {faq.categoryLabel}
                        </span>
                        <span className="faq-highlight-pill">{faq.highlight}</span>
                      </div>
                      <h3 className="faq-question-text">{faq.question}</h3>
                    </div>

                    <div className="faq-icon-wrapper" aria-hidden="true">
                      <svg
                        className="faq-chevron-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </button>

                  <div
                    id={`faq-answer-${faq.id}`}
                    className="faq-answer-container"
                    role="region"
                    aria-labelledby={`faq-question-${faq.id}`}
                  >
                    <div className="faq-answer-inner">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Guidance Box */}
          <div className="faq-bottom-banner">
            <div className="faq-bottom-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
            </div>
            <div className="faq-bottom-text">
              <strong>Need a customized prospectus or class-specific fee breakup?</strong>
              <p>Download our official curriculum booklet or schedule a 1-on-1 campus tour with our academic coordinators.</p>
            </div>
            <button
              type="button"
              className="faq-bottom-action-btn"
              onClick={openEnquiry}
              data-open-enquiry
            >
              Book Campus Tour →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
