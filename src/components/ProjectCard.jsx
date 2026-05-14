function ProjectCard({ project }) {
  const renderStoreIcon = (link, isGooglePlay) => {
    if (isGooglePlay) {
      return (
        <svg
          className="store-icon-svg"
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M3 2.5l11.2 9.2L3 21.5z" fill="#00d7ff" />
          <path d="M3 2.5l7.3 11.1L3 21.5l15-8.9z" fill="#00c853" opacity="0.92" />
          <path d="M18 9.3l2.8 2.3c.3.3.3.8 0 1L18 15l-3.8-3.2z" fill="#ffd600" />
          <path d="M10.3 13.6L14.2 11.7 18 15l-7.7 4.5L3 21.5z" fill="#ff3d00" />
        </svg>
      );
    }

    return <i className={link.iconClass} aria-hidden="true" />;
  };

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
            {project.links.map((link) => {
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
                  {renderStoreIcon(link, isGooglePlay)}
                  {link.label}
                </a>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default ProjectCard;
