import Blog from "./components/Blog";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import LetsConnects from "./components/LetsConnects";
import Portfolio from "./components/Portfolio";
import WhatIDo from "./components/WhatIDo";
import WorkProgress from "./components/WorkProgress";

export default function Home() {
  return (
    <div>
      <img
        src="/bg.png"
        alt="Background"
        className="fixed top-0 left-0 w-full h-[8368px]  -z-10 overflow-hidden"
      />
      <Header />
      <HeroSection />
      <WorkProgress />
      <Portfolio />
      <CallToAction />
      <Blog />
      <WhatIDo />
      <LetsConnects />
      <Footer />
    </div>
  );
}
