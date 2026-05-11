import { scrollToSection } from "../utils/scrollToSection";
import { hero } from "../data";

function TitleSection() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>{hero.title}</h1>
          <p className="hero-subtitle">{hero.subtitle}</p>
          <p className="hero-description">{hero.description}</p>

          <div className="hero-stats">
            {hero.stats.map((stat) => (
              <div key={stat.label} className="stat-item">
                <span className="stat-number">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="cta-buttons">
            {hero.ctas.map((cta) => (
              <a
                key={cta.label}
                href={cta.href}
                className={`btn ${cta.variant}`}
                download={cta.download}
                onClick={(event) => {
                  if (scrollToSection(cta.href)) {
                    event.preventDefault();
                  }
                }}
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

export default TitleSection;
