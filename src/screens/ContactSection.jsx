import ContactCard from "../components/ContactCard";
import SectionHeading from "../components/SectionHeading";

function ContactSection({ data }) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

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

          <form className="contact-form" id="contact-form" method="POST" onSubmit={handleSubmit}>
            {data.form.fields.map((field) => (
              <div key={field.name} className="form-group">
                <label htmlFor={field.name}>{field.label}</label>
                <input id={field.name} name={field.name} type={field.type} required />
              </div>
            ))}

            <div className="form-group">
              <label htmlFor={data.form.messageField.name}>{data.form.messageField.label}</label>
              <textarea
                id={data.form.messageField.name}
                name={data.form.messageField.name}
                placeholder={data.form.messageField.placeholder}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">
              <i className={data.form.submitIconClass} aria-hidden="true" />
              {data.form.submitLabel}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
