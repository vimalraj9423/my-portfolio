/* eslint-disable @next/next/no-img-element */
import { LinkButton } from "./Button";
import Reveal from "./Reveal";
import { about, profile } from "../data/content";
import { asset } from "../lib/asset";

export default function VisitingCard() {
  return (
    <section id="about" className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-9">
      <Reveal>
        <div className="p-6 sm:p-10 lg:p-[88px] gap-10 lg:gap-[100px] flex flex-col md:flex-row items-center bg-[var(--surface)] rounded-2xl shadow-[0_36px_105px_rgba(43,56,76,0.1)] w-full mx-auto translate-y-[80px] md:translate-y-[100px]">
          <div className="flex-1 w-full flex justify-center">
            <div className="group w-full max-w-[424px] overflow-hidden rounded-xl shadow-lg bg-[var(--gray-50)]">
              <img
                src={asset("/hero.png")}
                alt={profile.name}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center gap-6">
            <span className="eyebrow">About me</span>
            <h2 className="heading2">{about.heading}</h2>
            <div className="flex flex-col gap-4">
              {about.paragraphs.map((p) => (
                <p key={p.slice(0, 20)} className="paragraph">
                  {p}
                </p>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <LinkButton href="#projects">My Projects</LinkButton>
              <LinkButton href="#contact" variant="outline">
                Get in Touch
              </LinkButton>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
