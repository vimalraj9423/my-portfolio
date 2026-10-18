"use client";
/* eslint-disable @next/next/no-img-element */
import { motion } from "motion/react";
import { LinkButton } from "./Button";
import CountUp from "./CountUp";
import Typewriter from "./Typewriter";
import { profile, stats } from "../data/content";
import { asset } from "../lib/asset";

const badges = [
  { label: "Java", className: "top-6 -left-6", delay: 0 },
  { label: "Spring Boot", className: "top-1/3 -right-8", delay: 0.6 },
  { label: "Node.js", className: "bottom-1/3 -left-10", delay: 1.2 },
  { label: "React", className: "bottom-10 -right-4", delay: 0.3 },
  { label: "Next.js", className: "-bottom-4 left-1/4", delay: 0.9 },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Soft animated background blobs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-[var(--light-primay-background)] blur-3xl opacity-60"
        animate={{ scale: [1, 1.15, 1], x: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-0 -left-40 h-[360px] w-[360px] rounded-full bg-[var(--light-primay-background)] blur-3xl opacity-40"
        animate={{ scale: [1, 1.2, 1], y: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-[1440px] mx-auto min-h-[calc(100vh-80px)] flex flex-col md:flex-row items-center px-6 md:px-9 py-16 md:py-20 gap-12 lg:gap-24">
        <motion.div
          className="flex-1 flex flex-col items-start gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.span variants={item} className="eyebrow">
            Hello, I’m {profile.name} 👋
          </motion.span>
          <motion.h1 variants={item} className="heading1 min-h-[2.4em] md:min-h-[2.3em]">
            <span className="sr-only">{profile.name} — {profile.title}</span>
            <span aria-hidden className="block">I’m a</span>
            <span aria-hidden>
              <Typewriter words={profile.roles} />
            </span>
          </motion.h1>
          <motion.p variants={item} className="paragraph max-w-[560px]">
            {profile.intro}
          </motion.p>
          <motion.div variants={item} className="flex flex-wrap gap-4 mt-2">
            <LinkButton href="#contact">Hire Me</LinkButton>
            <LinkButton href="#projects" variant="outline">
              View Projects
            </LinkButton>
          </motion.div>
          <motion.div variants={item} className="mt-6 grid grid-cols-3 w-full max-w-[560px] gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-[var(--light-primay-background)]/50 py-5 px-2 rounded-lg flex flex-col items-center justify-center text-center transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="heading3">
                  <CountUp to={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs sm:text-sm text-[var(--gray-600)]">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="flex-1 hidden md:flex justify-center"
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative w-full max-w-[420px]">
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="bg-[var(--surface)] overflow-hidden rounded-2xl shadow-[0_36px_105px_rgba(43,56,76,0.15)]"
            >
              <img src={asset("/hero.png")} alt={profile.name} className="w-full h-auto object-cover" />
            </motion.div>
            {badges.map((b) => (
              <motion.span
                key={b.label}
                className={`absolute ${b.className} px-4 py-2 rounded-full bg-[var(--surface)] text-sm font-semibold text-[var(--gray-900)] shadow-lg border border-[var(--border)]`}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                transition={{
                  opacity: { delay: 0.8 + b.delay * 0.5 },
                  scale: { delay: 0.8 + b.delay * 0.5, type: "spring" },
                  y: { duration: 3 + b.delay, repeat: Infinity, ease: "easeInOut", delay: b.delay },
                }}
              >
                <span className="inline-block h-2 w-2 rounded-full bg-[var(--color-primary)] mr-2 align-middle" />
                {b.label}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
