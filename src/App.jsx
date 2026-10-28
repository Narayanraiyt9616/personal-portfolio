import { useEffect } from "react";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import IntroStrip from "./components/IntroStrip";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import TechStack from "./components/TechStack";
import Stats from "./components/Stats";
import Achievements from "./components/Achievements";
import Services from "./components/Services";
import WhyWorkWithMe from "./components/WhyWorkWithMe";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    if (window.location.hash) {
      const hash = window.location.hash;
      const timer = setTimeout(() => {
        try {
          const el = document.querySelector(hash);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        } catch {
          // ignore invalid query selector
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="min-h-screen text-[#64748B]" style={{ backgroundColor: "#FFF8D6" }}>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <IntroStrip />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <TechStack />
        <Stats />
        <Achievements />
        <Services />
        <WhyWorkWithMe />
        <Process />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
