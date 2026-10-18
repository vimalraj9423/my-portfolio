"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { LinkButton } from "./Button";
import { services } from "../data/content";

const icons = [
  // server
  <path key="s" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />,
  // bolt
  <path key="b" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />,
  // code
  <path key="c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />,
];

export default function WhatIDo() {
  const ref = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(1);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Progress 0 → 1 while the sticky panel is pinned
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const toCount = (p: number) => Math.min(services.length, Math.floor(p * services.length) + 1);

  useEffect(() => {
    setVisibleCount(toCount(scrollYProgress.get()));
  }, [scrollYProgress]);

  useMotionValueEvent(scrollYProgress, "change", (p) => setVisibleCount(toCount(p)));

  const shown = isDesktop ? visibleCount : services.length;

  return (
    <section
      id="services"
      ref={ref}
      className="relative bg-[var(--gray-50)] md:h-[var(--section-h)]"
      style={{ "--section-h": `${services.length * 100}vh` } as React.CSSProperties}
    >
      <div className="md:sticky md:top-0 md:h-screen w-full flex items-center overflow-hidden py-[100px] md:py-0">
        <div className="flex flex-col md:flex-row gap-10 justify-center mx-auto px-6 md:px-9 max-w-[1440px] w-full">
          <div className="flex-1 flex flex-col gap-6 md:gap-10 justify-center">
            <div className="flex flex-col gap-4 md:gap-6 max-w-[529px]">
              <span className="eyebrow">Services</span>
              <h2 className="heading1">What I do?</h2>
              <p className="paragraph">
                I help startups and businesses turn ideas into reliable software — owning the
                full stack from database design and secure APIs to fast, accessible user interfaces.
              </p>
            </div>

            {isDesktop && (
              <div className="flex gap-2 items-center" aria-hidden>
                {services.map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      width: i < shown ? 28 : 8,
                      backgroundColor: i < shown ? "#a53dff" : "#a5acb5",
                      opacity: i < shown ? 1 : 0.5,
                    }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="h-2 rounded-full"
                  />
                ))}
                <span className="ml-2 text-sm text-[var(--gray-400)] font-medium tabular-nums">
                  {shown}/{services.length}
                </span>
              </div>
            )}

            <div>
              <LinkButton href="#contact">Say Hello!</LinkButton>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center gap-5">
            {services.map((service, index) => {
              const on = index < shown;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isDesktop ? { opacity: on ? 1 : 0, y: on ? 0 : 40, scale: on ? 1 : 0.97 } : undefined}
                  whileInView={isDesktop ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                  className="group p-6 bg-[var(--surface)] rounded-xl shadow-lg border-l-4 border-transparent hover:border-[var(--color-primary)] transition-colors duration-300 flex gap-4"
                >
                  <div className="shrink-0 h-12 w-12 rounded-lg bg-[var(--light-primay-background)] text-[var(--color-primary)] flex items-center justify-center transition-colors duration-300 group-hover:bg-[var(--color-primary)] group-hover:text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      {icons[index % icons.length]}
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-[var(--gray-900)]">{service.title}</h3>
                    <p className="text-[var(--gray-600)] leading-relaxed">{service.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
