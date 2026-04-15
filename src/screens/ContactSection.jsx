import ContactCard from "../components/ContactCard";
import SectionHeading from "../components/SectionHeading";

function ContactSection({ data }) {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <SectionHeading title={data.title} subtitle={data.subtitle} />

        <div className="contact-content">
          <div className="contact-info">
            <h3>{data.heading}</h3>
            <p>{data.description}</p>

            <div className="contact-methods">
              {data.methods.map((method) => (
                <ContactCard key={method.label} item={method} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
