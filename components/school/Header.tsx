"use client";

import { useEffect, useState } from "react";
import { useEnquiry } from "./enquiry/EnquiryContext";

const navItems = [
  { label: "About KCM", href: "#about", sectionId: "about" },
  { label: "MBA Programs", href: "#grade-explorer", sectionId: "grade-explorer" },
  { label: "Why KCM", href: "#academics", sectionId: "academics" },
  { label: "Campus & Labs", href: "#facilities", sectionId: "facilities" },
  { label: "Placements", href: "#student-life", sectionId: "student-life" },
  { label: "FAQ", href: "#faq", sectionId: "faq" },
];

export default function Header() {
  const { openEnquiry } = useEnquiry();
  const [isCompact, setIsCompact] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const onScroll = () => {
      setIsCompact(window.scrollY > 16);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.sectionId))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: 0.1 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`site-header${isCompact ? " is-compact" : ""}${isMenuOpen ? " menu-open" : ""}`}
      data-header>
      <nav className="navbar" aria-label="Primary navigation">
        <a
          className="brand"
          href="#top"
          aria-label="Karnataka College of Management Bangalore"
          onClick={closeMenu}>
          <img
            src="/assets/kcm/Kcm_Logo.png"
            alt="KCM Bangalore Logo"
            className="brand-crest"
            width={48}
            height={48}
          />
          <div className="brand-text">
            <strong>Karnataka College of Management</strong>
            <small>AICTE Approved • Affiliated to Bengaluru City Univ.</small>
          </div>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((current) => !current)}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className="nav-links" id="primary-navigation">
          {navItems.map((item) => (
            <a
              href={item.href}
              className={activeSection === item.sectionId ? "is-active" : ""}
              aria-current={
                activeSection === item.sectionId ? "page" : undefined
              }
              onClick={closeMenu}
              key={item.sectionId}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <a
            className="phone-pill"
            href="tel:+919606994048"
            aria-label="Call admissions helpline">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              style={{ width: "14px", height: "14px", minWidth: "14px", flexShrink: 0 }}>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>+91 96069 94048</span>
          </a>

          <button
            type="button"
            className="apply-button enquiry-nav-trigger"
            onClick={() => {
              closeMenu();
              openEnquiry();
            }}>
            ENQUIRE NOW
          </button>
        </div>
      </nav>
    </header>
  );
}
