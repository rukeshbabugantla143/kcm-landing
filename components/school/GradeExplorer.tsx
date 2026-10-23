"use client";

import { useState } from "react";
import { useEnquiry } from "./enquiry/EnquiryContext";

type StageKey = "pre-primary" | "primary" | "middle" | "secondary";

interface StageData {
  key: StageKey;
  label: string;
  sublabel: string;
  badge: string;
  age: string;
  title: string;
  description: string;
  imagePosition: string;
  highlights: {
    title: string;
    desc: string;
  }[];
  curriculumFocus: string;
}

const STAGES: Record<StageKey, StageData> = {
  "pre-primary": {
    key: "pre-primary",
    label: "Pre-Primary",
    sublabel: "Pre-KG, LKG & UKG",
    badge: "FOUNDATIONAL STAGE (NEP 2020)",
    age: "Age 3 – 6 Years | Nursery to UKG",
    title: "Joyful Foundations Through Play & Wonder",
    description:
      "Gentle daily routines, language-rich classrooms, and tactile sensory activities help young children develop expressive confidence, foundational motor skills, and a natural excitement for school.",
    imagePosition: "0% 50%",
    curriculumFocus: "Play-based Montessori & Early Phonics",
    highlights: [
      {
        title: "Phonics & Early Numeracy",
        desc: "Interactive storytelling, alphabet phonics, and concrete number sense through play materials.",
      },
      {
        title: "Art, Music & Motor Skills",
        desc: "Color exploration, rhythmic movement, sand play, and gross-motor obstacle courses.",
      },
      {
        title: "Warm Transition Care",
        desc: "Child-safe classrooms, patient mentor support, and structured routines for effortless emotional settling.",
      },
    ],
  },
  primary: {
    key: "primary",
    label: "Primary School",
    sublabel: "Class 1 to Class 5",
    badge: "PREPARATORY STAGE",
    age: "Class 1 – 5 | Ages 6 – 10 Years",
    title: "Curious Minds & Confident Foundations",
    description:
      "Children transition from guided play into structured concept mastery. Reading fluency, mathematical inquiry, and experiential projects build strong study habits while keeping every school day joyful.",
    imagePosition: "25% 50%",
    curriculumFocus: "Core CBSE Concepts & Experiential STEM",
    highlights: [
      {
        title: "Conceptual Literacy & Math",
        desc: "Reading fluency, bilingual expression, and visual mathematical problem solving.",
      },
      {
        title: "Activity-Based Projects",
        desc: "Hands-on science experiments, environmental discovery, and group presentations.",
      },
      {
        title: "Communication & Values",
        desc: "Daily reading corners, expressive public speaking, and ethical character building.",
      },
    ],
  },
  middle: {
    key: "middle",
    label: "Middle School",
    sublabel: "Class 6 to Class 8",
    badge: "MIDDLE STAGE",
    age: "Class 6 – 8 | Ages 11 – 13 Years",
    title: "Inquiry, Collaboration & Emerging Independence",
    description:
      "Students progress from guided lessons to deeper independent investigation. Modern science laboratories, computer coding, and collaborative assignments nurture critical thinking and leadership skills.",
    imagePosition: "50% 50%",
    curriculumFocus: "Inquiry-Based CBSE & Coding Foundations",
    highlights: [
      {
        title: "Lab-Led Science & Robotics",
        desc: "Real laboratory experiments, robotics tinkering, and fundamental programming concepts.",
      },
      {
        title: "Analytical Research & Teamwork",
        desc: "Structured research papers, inter-disciplinary projects, and collaborative debates.",
      },
      {
        title: "Leadership & Club Culture",
        desc: "Student council opportunities, sports leagues, and public speaking forums.",
      },
    ],
  },
  secondary: {
    key: "secondary",
    label: "Secondary School",
    sublabel: "Class 9 & Class 10",
    badge: "SECONDARY BOARD STAGE",
    age: "Class 9 – 10 | Ages 14 – 16 Years",
    title: "Focused Board Preparation with Balance",
    description:
      "Rigorous CBSE Board examination readiness is paired with structured diagnostics, individualized remediation, lab practicals, and holistic sports to ensure students excel without undue stress.",
    imagePosition: "75% 50%",
    curriculumFocus: "CBSE Board Syllabus & Exam Excellence",
    highlights: [
      {
        title: "Board Exam Strategy & Diagnostics",
        desc: "Regular mock evaluations, past-paper workshops, and structured time management.",
      },
      {
        title: "Advanced Composite Labs",
        desc: "Hands-on Physics, Chemistry, and Biology practicals following strict CBSE criteria.",
      },
      {
        title: "One-on-One Mentoring",
        desc: "Continuous progress monitoring, remedial doubt-clearing, and guidance for future streams.",
      },
    ],
  },
};

const STAGE_KEYS: StageKey[] = ["pre-primary", "primary", "middle", "secondary"];

export default function GradeExplorer() {
  const { openEnquiry } = useEnquiry();
  const [activeStage, setActiveStage] = useState<StageKey>("pre-primary");
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
            <span>LEARNING PATHWAYS & STAGES</span>
          </div>

          <h2 id="grade-explorer-title" className="grade-main-heading">
            A Thoughtful Learning Journey from <span className="grade-accent">Early Years to Class 10.</span>
          </h2>

          <p className="grade-header-desc">
            Karnataka Public School offers a developmentally coherent CBSE educational pathway. Explore each stage below to understand how concept mastery, mentor guidance, and independent thinking evolve across the school journey.
          </p>
        </div>

        {/* STAGE TABS BAR */}
        <div className="grade-stage-nav" role="tablist" aria-label="Learning stages">
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
              style={{ backgroundPosition: stage.imagePosition }}
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
                <span>Enquire for {stage.label}</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>

              <a href="#academics" className="grade-secondary-link">
                <span>View Full Curriculum</span>
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
