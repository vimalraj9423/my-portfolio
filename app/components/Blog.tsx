"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";
import { motion, MotionValue, useMotionValue, useScroll, useSpring, useTransform } from "motion/react";
import { articles } from "../data/content";
import { asset } from "../lib/asset";

const SLIDES = 3;

const Dot = ({ index, progress }: { index: number; progress: MotionValue<number> }) => {
  const step = 1 / SLIDES;
  const start = index * step;
  const end = start + step;
  const mid = (start + end) / 2;
  const opacity = useTransform(progress, [start, mid, end], [0.35, 1, 0.35]);
  const scale = useTransform(progress, [start, mid, end], [1, 1.4, 1]);
  return <motion.div style={{ opacity, scale }} className="h-3 w-3 rounded-full bg-[#fff] shadow-lg shadow-white/50" />;
};

const ArticleCard = ({ article }: { article: (typeof articles)[number] }) => (
  <article className="group w-[280px] md:w-[350px] shrink-0 overflow-hidden rounded-xl bg-[var(--surface)] border border-[var(--border)] shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
    <div className="relative h-44 md:h-48 w-full overflow-hidden bg-slate-800">
      <img
        src={asset(article.image)}
        alt={`${article.tag} illustration`}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full bg-white/90 text-[var(--color-primary)]">
        {article.tag}
      </span>
    </div>
    <div className="p-6">
      <div className="mb-2 text-sm text-[var(--gray-400)]">{article.read}</div>
      <h3 className="text-[var(--natural-black)] text-base md:text-lg leading-snug font-semibold group-hover:text-[var(--color-primary)] transition-colors">
        {article.title}
      </h3>
    </div>
  </article>
);

export default function Blog() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const distanceMV = useMotionValue(0);

  // Measure how far the track must move so the last card ends in view.
  useEffect(() => {
    const measure = () => {
      if (!viewportRef.current || !trackRef.current) return;
      const d = Math.max(0, trackRef.current.scrollWidth - viewportRef.current.clientWidth);
      distanceMV.set(d);
      setDistance(d);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (viewportRef.current) ro.observe(viewportRef.current);
    if (trackRef.current) ro.observe(trackRef.current);
    return () => ro.disconnect();
  }, [distanceMV]);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 30, mass: 0.5 });
  const x = useTransform(() => -progress.get() * distanceMV.get());

  return (
    <section
      ref={sectionRef}
      className="relative bg-[var(--band)]"
      style={{ height: `calc(100vh + ${distance}px)` }}
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden py-16">
        <div className="max-w-6xl w-full mx-auto px-4 md:px-12">
          <div className="mb-8 md:mb-12 text-center">
            <span className="eyebrow">Blog</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-3 md:mb-4">Stories & Insights</h2>
            <p className="text-sm md:text-lg text-slate-300 max-w-2xl mx-auto">
              Notes from building with Java, Spring Boot, Node.js, React and Next.js.
            </p>
          </div>

          <div ref={viewportRef} className="overflow-hidden w-full py-4">
            <motion.div ref={trackRef} style={{ x }} className="flex gap-4 md:gap-8 w-max">
              {articles.map((a) => (
                <ArticleCard key={a.title} article={a} />
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center gap-3 mt-8 md:mt-12">
            {Array.from({ length: SLIDES }, (_, i) => (
              <Dot key={i} index={i} progress={progress} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
