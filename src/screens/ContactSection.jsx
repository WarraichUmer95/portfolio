import ContactCard from "../components/ContactCard";
import SectionHeading from "../components/SectionHeading";
import { contact } from "../data";

function ContactSection() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <SectionHeading title={contact.title} subtitle={contact.subtitle} />

        <div className="contact-content">
          <div className="contact-info">
            <h3>{contact.heading}</h3>
            <p>{contact.description}</p>

            <div className="contact-methods">
              {contact.methods.map((method) => (
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
