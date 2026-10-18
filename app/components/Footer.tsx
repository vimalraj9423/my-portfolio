import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-[var(--band)] pt-[180px] pb-12">
      <div className="max-w-[1440px] mx-auto px-6 md:px-9 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-[var(--gray-300)]">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 bg-[var(--color-primary)] text-white font-medium text-lg rounded-full flex items-center justify-center">
            {profile.initial}
          </div>
          <span className="text-white font-semibold">{profile.name}</span>
          <span className="hidden sm:inline">· {profile.title}</span>
        </div>
        <p>
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <a href="#top" className="text-white hover:text-[var(--color-primary)] transition-colors">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
