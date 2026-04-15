import ExperienceCard from "../components/ExperienceCard";
import SectionHeading from "../components/SectionHeading";

function ExperienceSection({ items }) {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <SectionHeading
          title="Work Experience"
          subtitle="My professional journey as a mobile application developer"
        />

        <div className="timeline">
          {items.map((item) => (
            <ExperienceCard key={`${item.years}-${item.role}-${item.company}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
