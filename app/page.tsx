import AboutMe from "./components/AboutMe";
import ContactSection from "./components/ContactSection";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";

export default function Home() {
  return (<>
   <HeroSection/>
   <AboutMe/>
   <Skills/>
   <ContactSection/>
   </>
  );
}
