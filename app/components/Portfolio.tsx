"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Reveal from "./Reveal";
import { projects } from "../data/content";

type Project = (typeof projects)[number];

const gradients = [
  "from-violet-500 to-fuchsia-500",
  "from-indigo-500 to-sky-500",
  "from-emerald-500 to-teal-500",
  "from-amber-500 to-orange-500",
  "from-pink-500 to-rose-500",
  "from-slate-700 to-slate-900",
];

const ArrowIcon = () => (
  <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const href = project.link || project.repo;
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-xl bg-[var(--surface)] shadow-[0_36px_105px_rgba(43,56,76,0.1)] flex flex-col"
    >
      {/* Code-style preview banner */}
      <div className={`relative h-44 w-full bg-gradient-to-br ${gradients[index % gradients.length]} p-5 overflow-hidden`}>
        <div className="flex gap-1.5 mb-4">
          <span className="h-2.5 w-2.5 rounded-full bg-white/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
        </div>
        <div className="font-mono text-xs leading-6 text-white/85 transition-transform duration-500 group-hover:-translate-y-2">
          <div>
            <span className="text-white/60">const</span> project = {"{"}
          </div>
          <div className="pl-4 truncate">name: &quot;{project.title}&quot;,</div>
          <div className="pl-4 truncate">stack: [{project.tech.slice(0, 3).map((t) => `"${t}"`).join(", ")}],</div>
          <div>{"}"};</div>
        </div>
        <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-white/10 transition-transform duration-700 group-hover:scale-150" />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex gap-2 mb-3">
          <span className="px-3 py-1 text-xs font-semibold text-[var(--color-primary)] bg-[var(--light-primay-background)]/60 rounded-full">
            {project.category}
          </span>
          <span className="px-3 py-1 text-xs font-semibold text-[var(--gray-600)] bg-[var(--gray-50)] rounded-full">{project.year}</span>
        </div>
        <h3 className="text-xl font-bold text-[var(--gray-900)] mb-2">{project.title}</h3>
        <p className="text-[var(--gray-600)] text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded bg-[var(--gray-50)] text-[var(--gray-700)]">
              {t}
            </span>
          ))}
        </div>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center text-sm font-bold text-[var(--color-primary)] hover:text-[var(--chip-text)]"
          >
            {project.link ? "View Live" : "View Code"}
            <ArrowIcon />
          </a>
        ) : (
          <span className="text-sm text-[var(--gray-400)]">Details on request</span>
        )}
      </div>
    </motion.article>
  );
}

export default function Portfolio() {
  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
  const [active, setActive] = useState("All");
  const visible = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="bg-[var(--gray-50)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-9 py-[100px] md:py-[140px]">
        <Reveal className="text-center max-w-[680px] mx-auto flex flex-col gap-4 mb-10">
          <span className="eyebrow">Portfolio</span>
          <h2 className="heading2">Selected projects</h2>
          <p className="paragraph">
            A mix of backend services, full stack products and frontends — built with Spring Boot,
            Node.js, React and Next.js.
          </p>
        </Reveal>

        <Reveal className="flex flex-wrap justify-center gap-2 mb-12" delay={0.1}>
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                active === c ? "text-white" : "text-[var(--gray-700)] hover:text-[var(--color-primary)]"
              }`}
            >
              {active === c && (
                <motion.span
                  layoutId="project-filter"
                  className="absolute inset-0 rounded-full bg-[var(--color-primary)]"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative">{c}</span>
            </button>
          ))}
        </Reveal>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {visible.map((p) => (
              <ProjectCard key={p.title} project={p} index={projects.indexOf(p)} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
