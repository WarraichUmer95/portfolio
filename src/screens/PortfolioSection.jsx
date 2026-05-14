import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";
import { portfolioProjects } from "../data";

function PortfolioSection() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <SectionHeading
          title="My Portfolio"
          subtitle="A collection of live mobile applications built with React-Native, showcasing diverse functionality and industry expertise"
        />

        <div className="portfolio-grid">
          {portfolioProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
