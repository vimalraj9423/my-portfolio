import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import Providers from "./components/Providers";

const workSans = Work_Sans({
  variable: "--font-work-sans-next",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vimal Raj — Full Stack Developer (Java, Spring Boot, Node.js, React, Next.js)",
  description:
    "Portfolio of Vimal Raj, a full stack developer building scalable web apps with Java Spring Boot, Node.js, React and Next.js.",
  keywords: [
    "Vimal Raj",
    "Full Stack Developer",
    "Java",
    "Spring Boot",
    "Node.js",
    "React",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Vimal Raj" }],
  openGraph: {
    title: "Vimal Raj — Full Stack Developer",
    description:
      "Java Spring Boot, Node.js, React and Next.js developer. View projects and get in touch.",
    type: "website",
  },
};

const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(t==="dark")document.documentElement.classList.add("dark")}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Set the theme before first paint to avoid a light/dark flash */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${workSans.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
