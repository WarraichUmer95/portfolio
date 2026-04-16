import profilePortrait from "../assets/profile-portrait.jpg";
import SectionHeading from "../components/SectionHeading";
import SkillCard from "../components/SkillCard";

function AboutSection({ data }) {
  return (
    <section id="about" className="about">
      <div className="container">
        <SectionHeading title={data.title} subtitle={data.subtitle} />

        <div className="about-content">
          <div className="about-image-container">
            <img
              src={profilePortrait}
              alt={data.imageAlt}
              className="profile-picture"
            />
          </div>

          <div className="about-text">
            <h3>{data.heading}</h3>
            {data.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="skills-section">
          <h3 className="skills-title">Skills</h3>
          <div className="skills-grid">
            {data.competencies.map((item) => (
              <SkillCard key={item.name} item={item} />
            ))}
          </div>
        </div>

        <div className="resume-facts">
          <div className="fact-block">
            <h3>Education</h3>
            {data.education.map((item) => (
              <article key={item.degree} className="fact-card">
                <strong>{item.degree}</strong>
                <p>
                  {item.schoolUrl ? (
                    <a
                      href={item.schoolUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fact-link"
                    >
                      {item.school}
                    </a>
                  ) : (
                    item.school
                  )}
                </p>
                <span>{item.years}</span>
                <small>{item.detail}</small>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
