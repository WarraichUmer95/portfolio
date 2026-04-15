function HeroSection({ data }) {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>{data.title}</h1>
          <p className="hero-subtitle">{data.subtitle}</p>
          <p className="hero-description">{data.description}</p>

          <div className="hero-stats">
            {data.stats.map((stat) => (
              <div key={stat.label} className="stat-item">
                <span className="stat-number">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="cta-buttons">
            {data.ctas.map((cta) => (
              <a
                key={cta.label}
                href={cta.href}
                className={`btn ${cta.variant}`}
                download={cta.download}
              >
                <i className={cta.iconClass} aria-hidden="true" />
                {cta.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
