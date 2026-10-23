"use client";

const quickLinks = [
  { label: "About KPSC", href: "#about" },
  { label: "Academic Pathways", href: "#academics" },
  { label: "Campus & Facilities", href: "#facilities" },
  { label: "Student Life & Sports", href: "#student-life" },
  { label: "Admissions 2027–28", href: "#admissions" },
];

const parentResources = [
  { label: "CBSE Mandatory Disclosure", href: "#mandatory-disclosure" },
  { label: "Fee Structure & Guidelines", href: "#admissions" },
  { label: "Academic Calendar", href: "#academics" },
  { label: "Safe Transport Routes", href: "#facilities" },
  { label: "Parent Portal Login", href: "#contact" },
  { label: "Uniform & Book Guidelines", href: "#contact" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/kpscbse?igsh=ZnB5cm4ya2p6bXBt",
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
    href: "https://www.facebook.com/share/1Hj2pKYsVa/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@kps_cbse?si=-KFwPAut3yTHvs1a",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/karnataka-public-school-kps/",
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
          {/* Column 1: School Identity */}
          <div className="footer-col col-brand">
            <a className="footer-school-brand" href="#top" aria-label="Karnataka Public School Home">
              <img
                src="/kps-crest.png"
                alt="Karnataka Public School Crest"
                className="footer-crest"
                width={54}
                height={54}
              />
              <div className="brand-text">
                <span className="school-name">KARNATAKA PUBLIC SCHOOL</span>
                <span className="school-motto">COMMITTED TO KNOWLEDGE &amp; GROWTH</span>
              </div>
            </a>

            <p className="school-mission">
              A premier co-educational CBSE institution managed by Karnataka Educational Trust (KET), dedicated to experiential learning,
              strong ethical character and academic distinction from Pre-KG through Class 10.
            </p>

            <div className="cbse-credential-box">
              <div className="cbse-crest-tag">CBSE AFFILIATED</div>
              <div className="cbse-meta-line">
                <span>Affiliation No: <strong>830385</strong></span>
                <span>School Code: <strong>45312</strong></span>
              </div>
              <p className="cbse-sub">Affiliated to Central Board of Secondary Education, New Delhi</p>
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

          {/* Column 3: Parent & Statutory */}
          <div className="footer-col col-resources">
            <h4 className="footer-col-title">Parents &amp; Governance</h4>
            <ul className="footer-links-list">
              {parentResources.map((link) => (
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
                  <p>22/1, Chokkanahalli, Hegde Nagar Main Road,<br />Yelahanka Hobli, Bengaluru, Karnataka – 560064</p>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <strong>Admissions Helpline</strong>
                  <p>
                    <a href="tel:+919071887788">+91 90718 87788</a> / <a href="tel:+918310663628">+91 83106 63628</a>
                  </p>
                  <p style={{ marginTop: "4px", fontSize: "12px", opacity: 0.85 }}>
                    Landline: <a href="tel:08029736819">080 29736819</a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <div>
                  <strong>Official Email</strong>
                  <p>
                    <a href="mailto:Info@kpscbse.edu.in">Info@kpscbse.edu.in</a> / <a href="mailto:ketkps@gmail.com">ketkps@gmail.com</a>
                  </p>
                  <p style={{ marginTop: "4px", fontSize: "12px", opacity: 0.85 }}>
                    Principal: <a href="mailto:principal@kpscbse.edu.in">principal@kpscbse.edu.in</a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">⏰</span>
                <div>
                  <strong>Visiting Hours</strong>
                  <p>Mon – Fri: 8:30 AM – 4:30 PM<br />Saturday: 8:30 AM – 1:30 PM</p>
                </div>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Socials, Legal */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © 2026 Karnataka Public School, Bengaluru. All Rights Reserved.
          </p>

          <div className="footer-social-cluster" aria-label="School Social Media">
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
            <a href="#mandatory-disclosure">Mandatory Disclosure</a>
            <span className="legal-sep">•</span>
            <a href="#contact">Privacy Policy</a>
            <span className="legal-sep">•</span>
            <a href="#contact">Terms of Service</a>
            <span className="legal-sep">•</span>
            <a href="#contact">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
