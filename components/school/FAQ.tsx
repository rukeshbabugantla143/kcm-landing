"use client";

import { useState } from "react";
import { useEnquiry } from "./enquiry/EnquiryContext";

type FAQItem = {
  id: string;
  category: "Admissions" | "Curriculum" | "Placements" | "Campus";
  categoryLabel: string;
  question: string;
  answer: string;
  highlight: string;
};

const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-why-kcm",
    category: "Curriculum",
    categoryLabel: "Academic Focus",
    question: "What makes KCM the premier destination for MBA studies in Bangalore?",
    answer:
      "KCM is an exclusively management-focused institution. Unlike multi-disciplinary universities, our entire campus ecosystem—from smart classrooms and AI labs to corporate faculty—is dedicated 100% to MBA scholars, ensuring an immersive, executive learning environment.",
    highlight: "100% MBA Focused",
  },
  {
    id: "faq-corporate-immersion",
    category: "Curriculum",
    categoryLabel: "Pedagogy",
    question: "How does KCM bridge the gap between classroom theory and corporate reality?",
    answer:
      "We integrate rigorous academic pedagogy with continuous industry immersion. Our curriculum features Harvard and IIM business case studies, semester-wise industrial visits, live corporate consulting projects, and regular interactive masterclasses with visiting CXOs.",
    highlight: "Harvard Case Studies",
  },
  {
    id: "faq-specializations",
    category: "Curriculum",
    categoryLabel: "Specializations",
    question: "What specializations are offered under the KCM MBA program?",
    answer:
      "We offer high-demand specializations in Marketing Management, Finance Management, Human Resource Management, and Business Analytics. Each stream includes cutting-edge certifications in SAP ERP, Power BI, Python, and Digital Marketing.",
    highlight: "4 Core Specializations",
  },
  {
    id: "faq-admission-eligibility",
    category: "Admissions",
    categoryLabel: "Eligibility",
    question: "What is the eligibility criteria for MBA admissions 2026?",
    answer:
      "Candidates must hold a recognized Bachelor's degree (such as BBA, B.Com, BCA, B.Tech/B.E, B.Sc, or B.A) with a minimum aggregate of 50% marks (45% for reserved category candidates). Valid scores in management entrance examinations such as KMAT, PGCET, MAT, or CAT are also evaluated.",
    highlight: "Min 50% in Graduation",
  },
  {
    id: "faq-placement-records",
    category: "Placements",
    categoryLabel: "Placements",
    question: "What are KCM's placement statistics and recruiter records?",
    answer:
      "Our dedicated Career Advancement Cell guarantees 100% placement support with minimum 10 campus interview opportunities. Our graduates have secured highest packages up to ₹12.36 LPA and average packages of ₹7.5 LPA across 150+ multinational hiring partners including TCS, Toyota, Axis Bank, and Qualcomm.",
    highlight: "₹12.36 LPA Highest CTC",
  },
  {
    id: "faq-hostel-and-tours",
    category: "Campus",
    categoryLabel: "Campus Life",
    question: "Does KCM provide hostel accommodation and international study tours?",
    answer:
      "Yes. KCM provides modern, separate residential hostels for male and female scholars with high-speed Wi-Fi, hygienic multi-cuisine dining, and 24/7 security. Additionally, students participate in curated international academic tours to business hubs in Singapore and Dubai.",
    highlight: "Hostels & Study Tours",
  },
  {
    id: "faq-approvals-affiliation",
    category: "Admissions",
    categoryLabel: "Affiliation",
    question: "Is Karnataka College of Management approved by AICTE and government bodies?",
    answer:
      "Yes. KCM is approved by the All India Council for Technical Education (AICTE), Ministry of Education, Government of India, and is permanently affiliated with Bengaluru City University, operating under the renowned Karnataka Education Trust (KET Estd. 2003).",
    highlight: "AICTE & BCU Approved",
  },
  {
    id: "faq-free-laptop",
    category: "Campus",
    categoryLabel: "Student Benefits",
    question: "Is the complimentary laptop program provided to all MBA students?",
    answer:
      "Yes. Every admitted student in our full-time MBA batch receives a complimentary high-performance laptop loaded with essential analytics suites, business modeling tools, and database software to support their coursework from Day 1.",
    highlight: "Free Laptop Program",
  },
];

type CategoryFilter = "All" | "Admissions" | "Curriculum" | "Placements" | "Campus";

const CATEGORIES: { label: string; value: CategoryFilter }[] = [
  { label: "All Questions", value: "All" },
  { label: "Admissions & Eligibility", value: "Admissions" },
  { label: "MBA Curriculum & Focus", value: "Curriculum" },
  { label: "Placements & Internships", value: "Placements" },
  { label: "Hostels & Campus Life", value: "Campus" },
];

export default function FAQ() {
  const { openEnquiry } = useEnquiry();
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");
  const [openId, setOpenId] = useState<string>("faq-why-kcm");

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
              Everything You Need to Know About <span className="faq-accent">MBA Admissions &amp; KCM.</span>
            </h2>

            <p className="faq-sidebar-desc">
              Have questions regarding AICTE approval, eligibility criteria, MBA specializations, placement assistance, or hostel facilities? Find direct answers below or connect with our Bengaluru admissions desk.
            </p>

            {/* Quick Highlights / Trust Pills */}
            <div className="faq-trust-tags">
              <span className="faq-trust-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                AICTE Approved • BCU Affiliated
              </span>
              <span className="faq-trust-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                100% Placement Support
              </span>
              <span className="faq-trust-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                ₹12.36 LPA Highest CTC
              </span>
              <span className="faq-trust-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                Free Laptop Included
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
                  <p className="faq-help-sub">Our MBA admissions counselors are here to help.</p>
                </div>
              </div>

              <p className="faq-help-timing">
                Admissions desk open Monday to Saturday (9:00 AM – 6:00 PM). Campus walkthroughs and personalized counseling welcome.
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
                  <span>Enquire Online (Admissions 2026)</span>
                </button>

                <a href="tel:+919606994048" className="faq-call-btn" title="Call Admissions Desk">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>+91 96069 94048</span>
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
                  <span>{cat.label}</span>
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
                      <span className="faq-index-badge">0{index + 1}</span>
                      <div className="faq-question-wrap">
                        <div className="faq-meta-pill-row">
                          <span className="faq-category-badge">{faq.categoryLabel}</span>
                          <span className="faq-highlight-pill">{faq.highlight}</span>
                        </div>
                        <h3 className="faq-question-text">{faq.question}</h3>
                      </div>
                    </div>

                    <div className="faq-icon-wrapper" aria-hidden="true">
                      <svg
                        className="faq-chevron-icon"
                        width="18"
                        height="18"
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
                  >
                    <div className="faq-answer-inner">
                      <div className="faq-answer-content">
                        <p className="faq-answer-p">{faq.answer}</p>
                        <div className="faq-answer-footer">
                          <span className="faq-verified-pill">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                              <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                            Verified by KCM Admissions Desk • MBA Batch 2026-27
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Guidance Box */}
          <div className="faq-bottom-banner">
            <div className="faq-bottom-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </div>
            <div className="faq-bottom-text">
              <strong>Have a specific question regarding entrance exams, fees, or scholarships?</strong>
              <p>Connect directly with our Bengaluru Admissions Office for personalized 1-on-1 counseling.</p>
            </div>
            <button
              type="button"
              className="faq-bottom-action-btn"
              onClick={openEnquiry}
              data-open-enquiry
            >
              Connect with Counselor →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
