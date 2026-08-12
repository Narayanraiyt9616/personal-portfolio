import { useTheme } from "./hooks/useTheme";
import ScrollProgress from "./components/ScrollProgress";
import AnimatedCursor from "./components/AnimatedCursor";
import BackToTop from "./components/BackToTop";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import IntroStrip from "./components/IntroStrip";
import About from "./components/About";
import Stats from "./components/Stats";
import TechStack from "./components/TechStack";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import GithubSection from "./components/GithubSection";
import Achievements from "./components/Achievements";
import Services from "./components/Services";
import WhyWorkWithMe from "./components/WhyWorkWithMe";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{ background: "var(--ink)" }}>
      <ScrollProgress />
      <AnimatedCursor />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <IntroStrip />
        <About />
        <Stats />
        <TechStack />
        <Skills />
        <Experience />

        <GithubSection />
        <Achievements />
        <Services />
        <WhyWorkWithMe />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
