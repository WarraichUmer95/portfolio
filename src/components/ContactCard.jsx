function ContactCard({ item }) {
  const external = item.href.startsWith("http");

  return (
    <a
      className="contact-method"
      href={item.href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      <i className={item.iconClass} aria-hidden="true" />
      <div>
        <strong>{item.label}</strong>
        <p>{item.value}</p>
      </div>
    </a>
  );
}

export default ContactCard;
