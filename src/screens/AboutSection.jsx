import profilePortrait from "../assets/profile-placeholder.svg";
import SectionHeading from "../components/SectionHeading";
import SkillCard from "../components/SkillCard";

function AboutSection({ data }) {
  return (
    <section id="about" className="about">
      <div className="container">
        <SectionHeading title={data.title} subtitle={data.subtitle} />

        <div className="about-content">
          <div className="about-image-container">
            <img src={profilePortrait} alt={data.imageAlt} className="profile-picture" />
          </div>

          <div className="about-text">
            <h3>{data.heading}</h3>
            {data.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="skills-section">
          <h3 className="skills-title">Core Competencies</h3>
          <div className="skills-grid">
            {data.competencies.map((item) => (
              <SkillCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
