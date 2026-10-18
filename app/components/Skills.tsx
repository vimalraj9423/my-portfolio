"use client";
import { motion } from "motion/react";
import Reveal from "./Reveal";
import { skillGroups } from "../data/content";

const allSkills = skillGroups.flatMap((g) => g.items);

function Marquee({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className={`flex w-max gap-4 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {doubled.map((s, i) => (
          <span
            key={`${s}-${i}`}
            aria-hidden={i >= items.length}
            className="whitespace-nowrap px-5 py-2.5 rounded-full border border-[var(--gray-200)] bg-[var(--surface)] text-[var(--gray-700)] font-medium"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const half = Math.ceil(allSkills.length / 2);
  return (
    <section id="skills" className="bg-[var(--surface)] py-[100px] md:py-[140px]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-9">
        <Reveal className="text-center max-w-[680px] mx-auto flex flex-col gap-4 mb-12">
          <span className="eyebrow">Tech Stack</span>
          <h2 className="heading2">Tools I use to build full stack apps</h2>
          <p className="paragraph">
            Java and Spring Boot for rock-solid backends, Node.js for fast APIs, and React with
            Next.js for modern, SEO-friendly frontends.
          </p>
        </Reveal>

        <div className="marquee-group flex flex-col gap-4 mb-16">
          <Marquee items={allSkills.slice(0, half)} />
          <Marquee items={allSkills.slice(half)} reverse />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              whileHover={{ y: -6 }}
              className="p-6 rounded-xl bg-[var(--gray-50)] border border-transparent hover:border-[var(--color-primary)]/40 hover:bg-[var(--surface)] hover:shadow-xl transition-colors duration-300"
            >
              <h3 className="text-lg font-semibold text-[var(--gray-900)] mb-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((s, i) => (
                  <motion.li
                    key={s}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.1 + i * 0.04 }}
                    className="text-sm px-3 py-1 rounded-full bg-[var(--light-primay-background)]/60 text-[var(--chip-text)]"
                  >
                    {s}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
