import { useEffect, useState } from "react";
import { scrollToSection } from "../utils/scrollToSection";

function Header({ links }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section[id]");
      let current = "#home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          current = `#${section.id}`;
        }
      });

      setActiveHref(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavigate = (event, href) => {
    setIsOpen(false);

    if (scrollToSection(href)) {
      event.preventDefault();
    }
  };

  return (
    <nav className={`navbar${isScrolled ? " scrolled" : ""}`} id="navbar">
      <div className="nav-container">
        <a
          href="#home"
          className="logo"
          onClick={(event) => handleNavigate(event, "#home")}
        >
          Umer Nawaz
        </a>

        <ul className={`nav-menu${isOpen ? " active" : ""}`} id="nav-menu">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`nav-link${activeHref === link.href ? " active" : ""}`}
                onClick={(event) => handleNavigate(event, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={`mobile-menu-toggle${isOpen ? " active" : ""}`}
          id="mobile-menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}

export default Header;
