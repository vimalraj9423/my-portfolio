// All editable portfolio content lives here.
// Update text, links, and projects in this file — components read from it.

export const profile = {
  name: "Vimal Raj",
  initial: "V",
  title: "Full Stack Developer",
  roles: [
    "Full Stack Developer",
    "Java & Spring Boot Engineer",
    "Node.js Backend Developer",
    "React & Next.js Developer",
  ],
  intro:
    "I build fast, secure and scalable web applications end to end — from robust REST APIs and microservices in Java Spring Boot and Node.js to polished, responsive frontends in React and Next.js.",
  location: "Suthamalli, Tirunelveli, India",
  email: "vimalrajvelraj@gmail.com",
  phone: "+91 9976327676",
  socials: {
    github: "https://github.com/vimalraj9423",
    linkedin: "", // e.g. "https://www.linkedin.com/in/your-handle"
    instagram: "",
    facebook: "",
  },
};

export const stats = [
  { label: "Years Experience", value: 8, suffix: "+" },
  { label: "Projects Delivered", value: 20, suffix: "+" },
  { label: "Happy Clients", value: 10, suffix: "" },
];

export const about = {
  heading: "Full Stack Developer who ships from database to UI",
  paragraphs: [
    "I design and build complete products — clean domain models, secure APIs, and fast interfaces. On the backend I work with Java, Spring Boot, Spring Security, JPA/Hibernate, and Node.js with Express. On the frontend I build with React, Next.js, TypeScript, and Tailwind CSS.",
    "I care about maintainable code, good test coverage, and deployments that just work — using Docker, CI/CD pipelines, and cloud hosting to take ideas from a whiteboard to production.",
  ],
};

export const skillGroups = [
  {
    title: "Backend",
    items: ["Java", "Spring Boot", "Spring Security", "JPA / Hibernate", "Node.js", "Express", "REST APIs", "Microservices"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Redux", "HTML5", "CSS3"],
  },
  {
    title: "Database",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    title: "DevOps & Tools",
    items: ["Docker", "Git", "GitHub Actions", "AWS", "Maven", "Postman", "JUnit", "Jest"],
  },
];

export const workSteps = [
  {
    name: "Plan",
    description: "Understand the requirements, define the data model and API contracts before writing code.",
  },
  {
    name: "Build APIs",
    description: "Develop secure, tested REST services with Spring Boot or Node.js and a well-structured database.",
  },
  {
    name: "Build UI",
    description: "Craft responsive, accessible interfaces in React and Next.js wired to the APIs.",
  },
  {
    name: "Ship",
    description: "Containerise with Docker, automate with CI/CD, deploy, monitor and iterate.",
  },
];

// Replace these with your real projects (add `link` / `repo` URLs when available).
export const projects = [
  {
    title: "E-Commerce Platform",
    category: "Full Stack",
    year: "2025",
    description:
      "Spring Boot microservices for catalog, cart and orders with JWT auth, paired with a Next.js storefront using server-side rendering.",
    tech: ["Spring Boot", "Next.js", "MySQL", "Docker"],
    link: "",
    repo: "",
  },
  {
    title: "Real-time Chat App",
    category: "Node.js",
    year: "2024",
    description:
      "Node.js + Socket.IO messaging service with rooms, typing indicators and message history, with a React client.",
    tech: ["Node.js", "Socket.IO", "React", "MongoDB"],
    link: "",
    repo: "",
  },
  {
    title: "Employee Management API",
    category: "Backend",
    year: "2024",
    description:
      "Secure REST API with Spring Security, role-based access, pagination, validation and full JUnit test coverage.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "JUnit"],
    link: "",
    repo: "",
  },
  {
    title: "Task Management SaaS",
    category: "Full Stack",
    year: "2023",
    description:
      "Kanban-style project tracker built with Next.js and an Express API, featuring drag-and-drop boards and team workspaces.",
    tech: ["Next.js", "Express", "TypeScript", "Redis"],
    link: "",
    repo: "",
  },
  {
    title: "Developer Portfolio",
    category: "Frontend",
    year: "2026",
    description:
      "This site — a statically exported Next.js app with Motion animations, deployed to GitHub Pages via GitHub Actions.",
    tech: ["Next.js", "Tailwind CSS", "Motion"],
    link: "",
    repo: "https://github.com/vimalraj9423/my-portfolio",
  },
  {
    title: "Admin Analytics Dashboard",
    category: "Frontend",
    year: "2023",
    description:
      "React dashboard with charts, filters and role-based views consuming a Node.js reporting API.",
    tech: ["React", "Node.js", "Chart.js"],
    link: "",
    repo: "",
  },
];

export const services = [
  {
    title: "Backend Development",
    description:
      "Scalable REST APIs and microservices with Java Spring Boot — authentication, validation, caching and clean architecture.",
  },
  {
    title: "Node.js APIs & Real-time",
    description:
      "Fast Node.js / Express services, WebSockets, third-party integrations and background jobs.",
  },
  {
    title: "Frontend with React & Next.js",
    description:
      "Responsive, SEO-friendly interfaces with Next.js, React and TypeScript that feel fast on every device.",
  },
];

export const articles = [
  { title: "Securing Spring Boot APIs with JWT and Spring Security", tag: "Spring Boot", read: "8 min read", image: "/blog/spring-security-jwt.svg" },
  { title: "Structuring a Node.js + Express project that scales", tag: "Node.js", read: "6 min read", image: "/blog/node-express-structure.svg" },
  { title: "Next.js App Router: server vs client components", tag: "Next.js", read: "7 min read", image: "/blog/nextjs-server-client.svg" },
  { title: "JPA performance: fixing the N+1 query problem", tag: "Java", read: "5 min read", image: "/blog/jpa-n-plus-one.svg" },
  { title: "Dockerising a full stack app for production", tag: "DevOps", read: "6 min read", image: "/blog/docker-full-stack.svg" },
  { title: "React state management without the headache", tag: "React", read: "5 min read", image: "/blog/react-state.svg" },
];
