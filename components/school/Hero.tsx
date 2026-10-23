import EnquiryTrigger from "./enquiry/EnquiryTrigger";

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-glow-ambient" aria-hidden="true"></div>

      <div className="hero-inner">
        <div className="hero-copy">
          <div className="admission-badge reveal">
            <span></span>
            ADMISSIONS OPEN 2027-28
          </div>
          <h1 id="hero-title" className="reveal">
            <span>LEARN.</span>
            <span>DISCOVER.</span>
            <span>GROW.</span>
          </h1>
          <p className="hero-text reveal">
            From the first day of school to future-ready learning, we help every student grow with
            curiosity, confidence and purpose.
          </p>
          <div className="hero-actions reveal">
            <EnquiryTrigger className="primary-cta">ENQUIRE NOW</EnquiryTrigger>
            <a className="secondary-cta" href="#admissions">
              BOOK CAMPUS VISIT
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Students at a modern Indian school campus">
          <div className="photo-shell">
            <img
              src="/assets/hero-students.png"
              alt="Indian students from primary to secondary classes standing together on a modern school campus"
            />
            <div className="photo-glow" aria-hidden="true"></div>
          </div>

          <div className="glass-card card-cbse">
            <strong>CBSE</strong>
            <span>Affiliated curriculum</span>
          </div>
          <div className="glass-card card-classes">
            <strong>Pre-KG to Class 10</strong>
            <span>Foundational &amp; secondary education</span>
          </div>
          <div className="glass-card card-campus">
            <strong>Safe Campus</strong>
            <span>Secure and caring</span>
          </div>
          <div className="glass-card card-learning">
            <strong>Future-ready Learning</strong>
            <span>STEM, arts and leadership</span>
          </div>
        </div>
      </div>
    </section>
  );
}
