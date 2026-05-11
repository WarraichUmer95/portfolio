import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
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
      <Header />
      <main>
        <TitleSection />
        <AboutSection />
        <ExperienceSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
