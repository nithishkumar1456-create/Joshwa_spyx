import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Loader from "./components/Loader";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ShowreelSection from "./components/ShowreelSection";
import PortfolioSection from "./components/PortfolioSection";
import SkillsAndTimeline from "./components/SkillsAndTimeline";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [unmutedState, setUnmutedState] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track scroll context to synchronize Navbar indicator states
  useEffect(() => {
    if (isLoading) return;

    const sections = ["home", "about", "services", "portfolio", "specs-skills", "contact"];
    const observers: IntersectionObserver[] = [];

    const observerOptions = {
      root: null,
      rootMargin: "-45% 0px -45% 0px", // Trigger when section captures the visual middle of screen
      threshold: 0
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          // Synchronize specs-skills section back to portfolio or about links representing active navigation anchors
          if (id === "specs-skills") {
            setActiveSection("portfolio");
          } else {
            setActiveSection(id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [isLoading]);

  const handleLoaderComplete = (unmuteRequired: boolean) => {
    setUnmutedState(unmuteRequired);
    setIsLoading(false);
  };

  const handleToggleSound = () => {
    setUnmutedState((prev) => !prev);
  };

  const handleNavigate = (href: string) => {
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader onComplete={handleLoaderComplete} />
      ) : (
        <div className="relative bg-[#050505] text-white selection:bg-brand selection:text-black">
          
          {/* Aesthetic High-End Interactive Cursor (Desktop Only) */}
          <CustomCursor />

          {/* Locked Premium Fixed Header Grid */}
          <Navbar
            unmutedState={unmutedState}
            onToggleSound={handleToggleSound}
            activeSection={activeSection}
            onNavigate={handleNavigate}
          />

          {/* Main Structural Layout Nodes */}
          <main>
            <AnimatePresence mode="wait">
              <motion.div
                key="home"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* SECTION 1 - HERO */}
                <Hero
                  unmutedState={unmutedState}
                  onToggleSound={handleToggleSound}
                />

                {/* SECTION 2 - ABOUT */}
                <AboutSection />

                {/* SECTION 3 - SERVICES */}
                <ServicesSection />

                {/* SECTION 4 - FEATURED SHOWREEL */}
                <ShowreelSection
                  unmutedState={unmutedState}
                  onToggleSound={handleToggleSound}
                />

                {/* SECTION 5 - RECENT WORK */}
                <PortfolioSection />

                {/* SECTION 6 & 7 - SKILLS & EXPERIENCE CHRONOLOGY */}
                <SkillsAndTimeline />

                {/* SECTION 8 - CONTACT */}
                <ContactSection />
              </motion.div>
            </AnimatePresence>
          </main>

          {/* SECTION 9 - FOOTER SUMMARY */}
          <Footer />

        </div>
      )}
    </>
  );
}
