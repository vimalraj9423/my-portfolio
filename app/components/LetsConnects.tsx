"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import FbIcon from "../icons/FbIcon";
import GithubIcon from "../icons/GithubIcon";
import InstagramIcon from "../icons/InstagramIcon";
import LinkedInIcon from "../icons/LinkedInIcon";
import LocationIcon from "../icons/LocationIcon";
import Button from "./Button";
import Input from "./Input";
import Reveal from "./Reveal";
import { profile } from "../data/content";

const MailIcon = () => (
  <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
const PhoneIcon = () => (
  <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const contacts = [
  { title: "Address", value: profile.location, href: undefined, icon: <LocationIcon /> },
  { title: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: <MailIcon /> },
  { title: "Call Me", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}`, icon: <PhoneIcon /> },
];

const socials = [
  { name: "GitHub", href: profile.socials.github, Icon: GithubIcon },
  { name: "LinkedIn", href: profile.socials.linkedin, Icon: LinkedInIcon },
  { name: "Instagram", href: profile.socials.instagram, Icon: InstagramIcon },
  { name: "Facebook", href: profile.socials.facebook, Icon: FbIcon },
].filter((s) => s.href);

export default function LetsConnects() {
  const [sent, setSent] = useState(false);

  // Static site (GitHub Pages) has no backend, so the form opens the visitor's mail app.
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const subject = get("subject") || `Project enquiry from ${get("name")}`;
    const lines = [`Name: ${get("name")}`, `Email: ${get("email")}`];
    if (get("location")) lines.push(`Location: ${get("location")}`);
    lines.push("", get("message"));
    const body = lines.join("\n");
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative z-10 bg-[var(--bg)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-9">
        <Reveal>
          <div className="flex flex-col lg:flex-row mx-auto p-6 sm:p-10 lg:p-[88px] rounded-2xl shadow-[0_59px_124px_rgba(0,0,0,0.12)] bg-[var(--surface)] translate-y-[100px] gap-12 lg:gap-[100px]">
            <div className="flex-1 flex flex-col gap-9">
              <div className="flex flex-col gap-4">
                <span className="eyebrow">Contact</span>
                <h2 className="heading2">Let’s discuss your project</h2>
                <p className="paragraph">
                  Looking for a full stack developer for a Spring Boot backend, a Node.js API or a
                  React / Next.js app? Send me a message — I usually reply within a day.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                {contacts.map((c, i) => {
                  const inner = (
                    <>
                      <div className="p-3.5 rounded-lg bg-[var(--light-primay-background)] text-[var(--color-primary)] transition-colors duration-300 group-hover:bg-[var(--color-primary)] group-hover:text-white">
                        {c.icon}
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm text-[var(--gray-600)]">{c.title}</div>
                        <div className="font-medium text-[var(--gray-900)] break-words">{c.value}</div>
                      </div>
                    </>
                  );
                  const cls =
                    "group flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-[var(--surface)] hover:shadow-[0_12px_64px_rgba(28,25,25,0.12)]";
                  return (
                    <motion.div
                      key={c.title}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.12 }}
                    >
                      {c.href ? (
                        <a href={c.href} className={cls}>
                          {inner}
                        </a>
                      ) : (
                        <div className={cls}>{inner}</div>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {socials.length > 0 && (
                <div className="flex gap-3">
                  {socials.map(({ name, href, Icon }) => (
                    <motion.a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={name}
                      whileHover={{ y: -4 }}
                      className="group p-[15px] rounded-md border border-[var(--light-primay-background)] transition-colors duration-300 hover:bg-[var(--color-primary)]"
                    >
                      <Icon className="w-[18px] h-[18px] text-[var(--color-primary)] transition-colors duration-300 group-hover:text-white" />
                    </motion.a>
                  ))}
                </div>
              )}
            </div>

            <div className="flex-1 flex flex-col gap-8">
              <form onSubmit={onSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Input id="name" name="name" label="Name" placeholder="Your name" autoComplete="name" required />
                  <Input id="email" name="email" type="email" label="Email" placeholder="you@example.com" autoComplete="email" required />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Input id="location" name="location" label="Location" placeholder="City, Country" />
                  <Input id="subject" name="subject" label="Subject" placeholder="Project enquiry" />
                </div>
                <Input id="message" name="message" label="Message" placeholder="Tell me about your project…" multiline required />
                <div className="flex items-center gap-4 flex-wrap">
                  <Button type="submit">Send Message</Button>
                  <AnimatePresence>
                    {sent && (
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-sm text-emerald-600 dark:text-emerald-400"
                        role="status"
                      >
                        Opening your email app…
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
