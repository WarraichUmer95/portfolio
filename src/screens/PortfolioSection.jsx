import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";

function PortfolioSection({ projects }) {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <SectionHeading
          title="My Portfolio"
          subtitle="A collection of live mobile applications built with Flutter, showcasing diverse functionality and industry expertise"
        />

        <div className="portfolio-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
