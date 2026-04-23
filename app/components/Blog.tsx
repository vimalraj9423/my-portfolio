/* eslint-disable @next/next/no-img-element */
const BlogCard = () => {
  return (
    <div className="overflow-hidden rounded-lg bg-white transition-all duration-300 hover:-translate-y-2 shadow-[0_36px_105px_rgba(43,56,76,0.1)]">
      <div className="h-48 w-full bg-slate-200">
        <img
          src="project-preview.jpg"
          alt="Case Study"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-6">
        <div className="flex gap-2 mb-3">
          <span className="px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 rounded-full">
            UI/UX Design
          </span>
          <span className="px-3 py-1 text-xs font-semibold text-slate-500 bg-slate-100 rounded-full">
            2024
          </span>
        </div>

        <h3 className="text-xl font-bold text-slate-800 mb-2">
          FinTech App Redesign
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          Optimizing the digital banking experience for Gen Z users through
          research-driven interaction design.
        </p>

        <a
          href="#"
          className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-700"
        >
          View Case Study
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default function Blog() {
  return (
    <div className="bg-white">
      <div className="mx-auto px-9 max-w-[1440px] py-[100px]">
        <div className="text-center">
          <h1>Blog</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
        </div>
        <div className="flex">
          <BlogCard />
          <BlogCard /> <BlogCard /> <BlogCard />
        </div>
      </div>
    </div>
  );
}
