import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { HomePage } from "./components/HomePage";
import { AboutMe } from "./components/AboutMe";
import { Works } from "./components/Works";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

type Section = 'home' | 'about' | 'works' | 'projects' | 'contact';

export default function App() {
  const [currentSection, setCurrentSection] = useState<Section>('home');

  const handleNavigate = (section: string) => {
    setCurrentSection(section as Section);
  };

  const handleBack = () => {
    setCurrentSection('home');
  };

  return (
    <div className="size-full">
      <AnimatePresence mode="wait">
        {currentSection === 'home' && (
          <HomePage key="home" onNavigate={handleNavigate} />
        )}
        {currentSection === 'about' && (
          <AboutMe key="about" onBack={handleBack} />
        )}
        {currentSection === 'works' && (
          <Works key="works" onBack={handleBack} />
        )}
        {currentSection === 'projects' && (
          <Projects key="projects" onBack={handleBack} />
        )}
        {currentSection === 'contact' && (
          <Contact key="contact" onBack={handleBack} />
        )}
      </AnimatePresence>
    </div>
  );
}
