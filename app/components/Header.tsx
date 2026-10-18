"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { profile } from "../data/content";
import ThemeToggle from "./ThemeToggle";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[var(--bg)]/85 backdrop-blur-md shadow-sm dark:shadow-black/40" : "bg-[var(--bg)]"
      }`}
    >
      <div className="flex items-center justify-between py-4 max-w-[1440px] mx-auto px-6 md:px-9">
        <a href="#top" className="flex gap-3 items-center group" onClick={() => setOpen(false)}>
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="h-12 w-12 bg-[var(--color-primary)] text-white font-medium text-2xl rounded-full flex items-center justify-center"
          >
            {profile.initial}
          </motion.div>
          <span className="text-2xl font-semibold text-[var(--gray-900)]">{profile.name}</span>
        </a>

        <nav aria-label="Main">
          <ul className="hidden md:flex items-center gap-2">
            {links.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="relative px-4 py-2 font-medium text-[var(--natural-black)] hover:text-[var(--color-primary)] transition-colors duration-300 group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 origin-left scale-x-0 bg-[var(--color-primary)] transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
            <li className="ml-2">
              <ThemeToggle />
            </li>
          </ul>
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
        <button
          type="button"
          className="p-2 -mr-2 text-[var(--gray-900)]"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <div className="w-6 h-5 relative">
            <span className={`absolute left-0 h-0.5 w-6 bg-current transition-all duration-300 ${open ? "top-2 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-2 h-0.5 w-6 bg-current transition-opacity duration-300 ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute left-0 h-0.5 w-6 bg-current transition-all duration-300 ${open ? "top-2 -rotate-45" : "top-4"}`} />
          </div>
        </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t border-[var(--border)] bg-[var(--surface)]"
          >
            <ul className="flex flex-col px-6 py-2">
              {links.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ x: -16, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 font-medium text-[var(--natural-black)] hover:text-[var(--color-primary)]"
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX: progress }}
        className="absolute bottom-0 left-0 right-0 h-0.5 origin-left bg-[var(--color-primary)]"
      />
    </motion.header>
  );
}
