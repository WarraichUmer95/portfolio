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
import HeroSection from "./screens/HeroSection";
import PortfolioSection from "./screens/PortfolioSection";

function App() {
  return (
    <>
      <Header links={navigation} />
      <main>
        <HeroSection data={hero} />
        <AboutSection data={about} />
        <ExperienceSection items={experience} />
        <PortfolioSection projects={portfolioProjects} />
        <ContactSection data={contact} />
      </main>
      <Footer />
    </>
  );
}

export default App;
