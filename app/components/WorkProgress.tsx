"use client";
import { motion } from "motion/react";
import VisitingCard from "./VisitingCard";
import Reveal from "./Reveal";
import { workSteps } from "../data/content";

export default function WorkProgress() {
  return (
    <div>
      <VisitingCard />
      <section className="bg-[var(--gray-50)]">
        <div className="flex flex-col md:flex-row gap-10 lg:gap-[126px] mx-auto px-6 md:px-9 max-w-[1440px] pt-[160px] md:pt-[220px] items-center pb-[100px] md:pb-[140px]">
          <Reveal className="flex-1 flex flex-col gap-4" x={-30} y={0}>
            <span className="eyebrow">Work Process</span>
            <h2 className="heading2">How I take an idea to production</h2>
            <p className="paragraph">
              A clear, repeatable process keeps projects predictable — from designing the
              API and database to shipping a tested, containerised release.
            </p>
            <p className="paragraph">
              Every step is backed by version control, code reviews and automated
              pipelines, so features land quickly without breaking what already works.
            </p>
          </Reveal>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {workSteps.map((step, index) => (
              <motion.div
                key={step.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{ y: -6 }}
                className={`p-8 bg-[var(--surface)] rounded-xl shadow-lg flex flex-col gap-3 group ${
                  index % 2 === 1 ? "sm:mt-8 sm:-mb-8" : ""
                }`}
              >
                <div className="h-11 w-11 rounded-lg bg-[var(--light-primay-background)] text-[var(--color-primary)] font-bold flex items-center justify-center transition-colors duration-300 group-hover:bg-[var(--color-primary)] group-hover:text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-semibold text-[var(--gray-900)]">{step.name}</h3>
                <p className="text-[var(--gray-600)] leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
