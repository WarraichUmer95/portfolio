import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  about,
  contact,
  experience,
  hero,
  navigation,
  portfolioProjects,
} from "./data/portfolioData";
import AboutSection from "./screens/AboutSection";
import ContactSection from "./screens/ContactSection";
import ExperienceSection from "./screens/ExperienceSection";
import TitleSection from "./screens/TitleSection";
import PortfolioSection from "./screens/PortfolioSection";

function App() {
  useEffect(() => {
    if (window.location.hash) {
      const cleanUrl = `${window.location.pathname}${window.location.search}`;
      window.history.replaceState(null, "", cleanUrl);
    }
  }, []);

  return (
    <>
      <Header links={navigation} />
      <main>
        <TitleSection data={hero} />
        <AboutSection data={about} />
        <ExperienceSection items={experience} />
        <PortfolioSection projects={portfolioProjects} />
        <ContactSection data={contact} />
      </main>
      <Footer message={contact.closing} />
    </>
  );
}

export default App;
