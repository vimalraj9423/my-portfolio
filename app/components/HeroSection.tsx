/* eslint-disable @next/next/no-img-element */
import React from "react";

export const HeroSection: React.FC = () => {
  const stats = [
    { label: "Experience", value: "8 Y." },
    { label: "Projects", value: "20+" },
    { label: "Clients", value: "10" },
  ];
  return (
    <section className="">
      <div className="max-w-[1440px] mx-auto h-[100vh - 96px] flex flex-col md:flex-row px-6 md:px-9 mt-[100px] gap-45">
        <div className="flex-1 flex flex-col items-center">
          <div className="flex flex-col items-start gap-6 mt-20">
            <h1 className="text-5xl font-bold text-[var(--gray-900)]">
              Hello, I’m Vimal Raj
            </h1>
            <h2 className="text-base font-medium text-[var(--grey-1)] ">
              Im a Freelance UI/UX Designer and Developer based in London,
              England. I strives to build immersive and beautiful web
              applications through carefully crafted code and user-centric
              design.
            </h2>
            <button className="mt-8 px-6 py-3 bg-[var(--color-primary)] text-white font-medium rounded hover:bg-[var(--color-primary-dark)] transition duration-300">
              Say Hello
            </button>
            <div className="mt-10 flex space-x-1 w-full gap-2">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-[var(--light-primay-background)]/50 flex-1 py-5 rounded-lg flex flex-col items-center justify-center"
                >
                  <div className="heading3">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1 hidden md:block">
          <div className=" z-1000  max-w-[400px]  bg-white overflow-hidden rounded-lg shadow-lg">
            <img
              src="/hero.png"
              alt="Hero Image"
              className="w-[500px] h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
