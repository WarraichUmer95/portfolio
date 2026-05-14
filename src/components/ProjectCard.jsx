function ProjectCard({ project }) {
  return (
    <div className="portfolio-card">
      <div className="card-header">
        <div className="card-title">
          {project.badge ? (
            <div className={`app-icon app-icon-badge ${project.accent || ""}`}>{project.badge}</div>
          ) : (
            <div className="app-icon">
              <i className={project.iconClass} aria-hidden="true" />
            </div>
          )}

          <div>
            <h3>{project.title}</h3>
            <span className="card-category">{project.category}</span>
          </div>
        </div>
      </div>

      <div className="card-content">
        <p className="card-description">{project.description}</p>

        <div className="card-features">
          {project.tags.map((tag) => (
            <span key={tag} className="feature-tag">
              {tag}
            </span>
          ))}
        </div>

        {project.links?.length ? (
          <div className="card-links">
            {project.links.map((link) => (
              (() => {
                const isApple = /app store/i.test(link.label);
                const isGooglePlay = /play store/i.test(link.label);
                const storeClass = isApple
                  ? "store-btn store-btn--apple"
                  : isGooglePlay
                    ? "store-btn store-btn--google-play"
                    : "store-btn";

                return (
              <a
                key={`${project.title}-${link.label}`}
                href={link.href}
                className={storeClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={link.iconClass} aria-hidden="true" />
                {link.label}
              </a>
                );
              })()
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default ProjectCard;
