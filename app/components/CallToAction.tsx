"use client";
/* eslint-disable @next/next/no-img-element */
import { motion } from "motion/react";
import { LinkButton } from "./Button";
import Reveal from "./Reveal";
import { asset } from "../lib/asset";

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-[var(--band)] py-[100px] px-6">
      <motion.div
        aria-hidden
        className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-[var(--color-primary)]/30 blur-3xl"
        animate={{ x: [0, 80, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <Reveal className="relative max-w-[640px] text-center mx-auto flex flex-col gap-6">
        <h2 className="text-white text-3xl md:text-5xl font-semibold leading-tight">
          Have a project idea? Let’s build it together!
        </h2>
        <p className="text-[var(--gray-300)] text-lg">
          Whether you need a Spring Boot backend, a Node.js API, or a complete Next.js product,
          I can help you design, build and ship it.
        </p>
        <div>
          <LinkButton href="#contact" className="group">
            Let’s Work Together
            <img
              src={asset("/icons/arrow-right.svg")}
              alt=""
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            />
          </LinkButton>
        </div>
      </Reveal>
    </section>
  );
}
