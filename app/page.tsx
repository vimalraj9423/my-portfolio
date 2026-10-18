import Blog from "./components/Blog";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import LetsConnects from "./components/LetsConnects";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import WhatIDo from "./components/WhatIDo";
import WorkProgress from "./components/WorkProgress";

export default function Home() {
  return (
    <div className="relative overflow-x-clip">
      <Header />
      <main>
        <HeroSection />
        <WorkProgress />
        <Skills />
        <Portfolio />
        <CallToAction />
        <WhatIDo />
        <Blog />
        <LetsConnects />
      </main>
      <Footer />
    </div>
  );
}
