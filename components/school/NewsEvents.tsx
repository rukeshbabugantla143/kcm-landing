const events = [
  {
    className: "event-featured event-science",
    date: "14 Aug",
    category: "Academic",
    title: "Orientation Day & Induction Bootcamp for New MBA Batch",
  },
  {
    className: "event-sports",
    date: "25 Sep",
    category: "Corporate",
    title: "Annual Corporate CXO Conclave & Pre-Placement Drives",
  },
  {
    className: "event-arts",
    date: "18 Oct",
    category: "Cultural",
    title: "Kalasangama: National Inter-College Management & Cultural Fest",
  },
  {
    className: "event-career",
    date: "12 Nov",
    category: "International",
    title: "Global Business Immersion Study Tour to Singapore & Dubai",
  },
];

export default function NewsEvents() {
  return (
    <section className="news-events" id="news-events" aria-labelledby="events-title">
      <div className="events-inner">
        <div className="events-header">
          <div>
            <div className="section-kicker">CAMPUS HIGHLIGHTS</div>
            <h2 id="events-title">What is happening at KCM Bangalore.</h2>
          </div>
          <a href="#student-life">
            View All
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </a>
        </div>

        <div className="events-grid">
          {events.map((event) => (
            <article className={`event-card ${event.className}`} key={event.title}>
              <div className="event-image" aria-hidden="true"></div>
              <div className="event-content">
                <time>{event.date}</time>
                <span>{event.category}</span>
                <h3>{event.title}</h3>
                <a href="#student-life">Read More</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
