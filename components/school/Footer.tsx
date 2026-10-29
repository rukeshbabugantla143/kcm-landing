"use client";

const quickLinks = [
  { label: "About KCM Bangalore", href: "#about" },
  { label: "MBA Specializations", href: "#grade-explorer" },
  { label: "The KCM Advantage", href: "#academics" },
  { label: "Campus & Labs", href: "#facilities" },
  { label: "Placements & Recruiters", href: "#student-life" },
  { label: "Admissions 2026", href: "#admissions" },
];

const studentResources = [
  { label: "MBA Brochure 2026", href: "#admissions" },
  { label: "Placement Report", href: "#student-life" },
  { label: "AICTE Mandatory Disclosure", href: "#about" },
  { label: "Anti-Ragging Squad", href: "#faq" },
  { label: "Internal Quality Cell (IQAC)", href: "#about" },
  { label: "Hostel & Transport Desk", href: "#facilities" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/kcmedu/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61567119833724",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/karnataka-college-of-management/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="site-footer" id="contact" aria-labelledby="footer-title">
      {/* Main Footer Container */}
      <div className="footer-main-container">
        <div className="footer-columns-grid">
          {/* Column 1: Institution Identity */}
          <div className="footer-col col-brand">
            <a className="footer-school-brand" href="#top" aria-label="Karnataka College of Management Home">
              <img
                src="/assets/kcm/Kcm_Logo.png"
                alt="Karnataka College of Management Logo"
                className="footer-crest"
                width={54}
                height={54}
                style={{ objectFit: "contain" }}
              />
              <div className="brand-text">
                <span className="school-name">KARNATAKA COLLEGE OF MANAGEMENT</span>
                <span className="school-motto">KARNATAKA EDUCATION TRUST (ESTD. 2003)</span>
              </div>
            </a>

            <p className="school-mission">
              A premier postgraduate management institution affiliated to Bengaluru City University
              and approved by AICTE. Dedicated 100% to delivering industry-integrated MBA education,
              transformative leadership, and guaranteed placement opportunities.
            </p>

            <div className="cbse-credential-box">
              <div className="cbse-crest-tag">AICTE &amp; BCU APPROVED</div>
              <div className="cbse-meta-line">
                <span>Affiliated: <strong>Bengaluru City Univ.</strong></span>
                <span>Placement: <strong>100% Record</strong></span>
              </div>
              <p className="cbse-sub">Approved by All India Council for Technical Education, New Delhi</p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col col-links">
            <h4 className="footer-col-title">Quick Navigation</h4>
            <ul className="footer-links-list">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Student Resources & Governance */}
          <div className="footer-col col-resources">
            <h4 className="footer-col-title">MBA Resources</h4>
            <ul className="footer-links-list">
              {studentResources.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="footer-col col-contact">
            <h4 className="footer-col-title">Campus &amp; Admissions</h4>

            <address className="footer-contact-details">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <strong>Campus Address</strong>
                  <p>#33/2, Thirumenahalli, Hegde Nagar Main Rd,<br />Yelahanka, Bengaluru, Karnataka – 560064</p>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <strong>Admissions Helpline</strong>
                  <p>
                    <a href="tel:+919606994048">+91 96069 94048</a> / <a href="tel:+917349635914">+91 73496 35914</a>
                  </p>
                  <p style={{ marginTop: "4px", fontSize: "12px", opacity: 0.85 }}>
                    Office Desk: <a href="tel:08061567119">080 61567119</a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <div>
                  <strong>Official Email</strong>
                  <p>
                    <a href="mailto:admissions@kcmcollege.com">admissions@kcmcollege.com</a>
                  </p>
                  <p style={{ marginTop: "4px", fontSize: "12px", opacity: 0.85 }}>
                    General Info: <a href="mailto:info@kcmcollege.com">info@kcmcollege.com</a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">⏰</span>
                <div>
                  <strong>Counseling Hours</strong>
                  <p>Monday – Saturday: 9:00 AM – 6:00 PM<br />Sunday: By Appointment</p>
                </div>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Socials, Legal */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © 2026 Karnataka College of Management (KCM), Karnataka Education Trust. All Rights Reserved.
          </p>

          <div className="footer-social-cluster" aria-label="KCM Social Media">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
              >
                {item.icon}
              </a>
            ))}
          </div>

          <div className="footer-legal-links">
            <a href="#about">AICTE Mandatory Disclosure</a>
            <span className="legal-sep">•</span>
            <a href="#faq">Anti-Ragging Policy</a>
            <span className="legal-sep">•</span>
            <a href="#contact">Privacy Policy</a>
            <span className="legal-sep">•</span>
            <a href="#contact">Terms of Admission</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
