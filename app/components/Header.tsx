import Link from "next/link";

const Header = () => {
  return (
    <header className="text-white py-4 px-6 sticky top-0 bg-linear-[310deg,[#45867e]_70%,[#e4e4e4]_12%] dark:bg-(--header-background) z-10">
      <nav className="flex justify-between items-center gap-7">
        <h1 className="text-xl font-bold bg-gradient-to-r from-[#59A8A8] to-[#00FF51] bg-clip-text text-transparent font-[Satisfy] md:pl-13">
          Vimal Raj V
        </h1>
        <ul className="flex space-x-6 flex-1 justify-center">
          <li>
            <Link
              href="/"
              className="bg-linear-[135deg,#9fb9ee,#e1e1e1] text-transparent bg-clip-text uppercase text-bold text-base md:text-2xl"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="bg-linear-[135deg,#9fb9ee,#e1e1e1] text-transparent bg-clip-text uppercase text-bold text-base md:text-2xl"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/skills"
              className="bg-linear-[135deg,#9fb9ee,#e1e1e1] text-transparent bg-clip-text uppercase text-bold text-base md:text-2xl"
            >
              skills
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="bg-linear-[135deg,#9fb9ee,#e1e1e1] text-transparent bg-clip-text uppercase text-bold text-base md:text-2xl"
            >
              contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
