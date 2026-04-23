/* eslint-disable @next/next/no-img-element */
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
    <div className="relative">
      <img
        src="/bg.png"
        alt="Background"
        className="absolute top-0 left-0 w-full h-full bottom-0 -z-10 overflow-hidden"
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
