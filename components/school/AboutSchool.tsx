export default function AboutSchool() {
  return (
    <section className="about-school" id="about" aria-labelledby="about-title">
      <div className="about-shape about-shape-one" aria-hidden="true"></div>
      <div className="about-shape about-shape-two" aria-hidden="true"></div>

      <div className="about-inner">
        <div className="about-media">
          <img
            src="/assets/kcm/college.png"
            alt="Karnataka College of Management Campus"
          />
          <div className="about-media-card">
            <strong>15+ Years Legacy</strong>
            <span>Karnataka Education Trust (Estd. 2003)</span>
          </div>
          <div className="about-3d-mark" aria-hidden="true">
            <span></span>
            <i></i>
          </div>
        </div>

        <div className="about-copy">
          <div className="section-kicker">ABOUT KCM BANGALORE</div>
          <h2 id="about-title">
            Exclusive MBA Excellence Under Karnataka Education Trust.
          </h2>
          <p>
            Karnataka College of Management is exclusively dedicated to molding future business leaders
            through our premier MBA program. Approved by AICTE, Ministry of Education, Govt. of India,
            and affiliated with Bengaluru City University, KCM provides an immersive, 100% MBA-focused
            atmosphere with experiential learning and corporate mentorship.
          </p>

          <div className="about-values">
            <article className="about-value vision-value">
              <div className="about-value-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6Z" />
                  <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                </svg>
              </div>
              <div>
                <h3>Our Vision</h3>
                <p>
                  To be a premier global center for business education and managerial excellence,
                  nurturing ethical corporate leaders who create sustainable impact.
                </p>
              </div>
            </article>

            <article className="about-value mission-value">
              <div className="about-value-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M12 3v18M5 8l7-5 7 5M5 16l7 5 7-5" />
                  <path d="M5 8v8M19 8v8" />
                </svg>
              </div>
              <div>
                <h3>Our Mission</h3>
                <p>
                  To deliver rigorous, industry-integrated management education through innovative
                  pedagogy, corporate exposure, and continuous professional development.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
