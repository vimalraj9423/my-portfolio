export default function Footer() {
  return (
    <footer className="bg-[var(--gray-900)] h-[330px] flex items-center">
      <div className="max-w-[1440px] mx-auto px-9 text-center text-sm text-white ">
        &copy; {new Date().getFullYear()} Vimal Raj. All rights reserved.
      </div>
    </footer>
  );
}
