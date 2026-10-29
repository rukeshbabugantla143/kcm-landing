const facultyMembers = [
  {
    className: "teacher-science",
    name: "Dr. K. P. Venkataswamy",
    subject: "Director – MBA Department",
    experience: "20+ Years Exp",
    quote: "Ph.D. from VTU Belagavi, specialized in HR & Marketing with IPR certification from IISc Bengaluru.",
  },
  {
    className: "teacher-math",
    name: "Dr. Thejasvi Sheshadri",
    subject: "HOD – MBA Department",
    experience: "18+ Years Exp",
    quote: "Dedicated to developing rigorous academic pedagogy and case-based management learning.",
  },
  {
    className: "teacher-humanities",
    name: "Prof. Someshwari Raja",
    subject: "Admission Director & Faculty",
    experience: "15+ Years Exp",
    quote: "Guides management scholars in aligning personal career aspirations with industry specializations.",
  },
  {
    className: "teacher-early",
    name: "Prof. H. Prabhakar",
    subject: "Director – Finishing School",
    experience: "22+ Years Exp",
    quote: "Prepares MBA students through executive grooming, mock boardroom simulations, and CXO bootcamps.",
  },
];

export default function Faculty() {
  return (
    <section className="faculty-section" id="faculty" aria-labelledby="faculty-title">
      <div className="faculty-inner">
        <div className="section-kicker">ACADEMIC LEADERSHIP</div>
        <h2 id="faculty-title">Distinguished Faculty &amp; Industry Mentors.</h2>

        <div className="faculty-grid">
          {facultyMembers.map((member) => (
            <article className={`teacher-card ${member.className}`} key={member.name}>
              <div className="teacher-portrait" aria-hidden="true"></div>
              <div className="teacher-info">
                <span>{member.subject}</span>
                <h3>{member.name}</h3>
                <p>{member.experience}</p>
                <blockquote>{member.quote}</blockquote>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
