function ExperienceCard({ item }) {
  return (
    <div className="timeline-item">
      <div className="timeline-dot" />
      <div className="timeline-content">
        <span className="timeline-date">{item.years}</span>
        <h3 className="timeline-title">{item.role}</h3>
        <p className="timeline-company">{item.company}</p>
        {item.location ? <p className="timeline-company">{item.location}</p> : null}
        <p className="timeline-description">{item.description}</p>
        {item.highlights?.length ? (
          <ul className="timeline-highlights">
            {item.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

export default ExperienceCard;
