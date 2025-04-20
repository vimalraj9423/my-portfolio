import Link from "next/link";

const Header = () => {
  return (
    <header className="text-white py-4 px-6 sticky top-0 bg-white dark:bg-(--background) z-10">
      <nav className="flex justify-between items-center">
        <h1 className="text-xl font-bold bg-gradient-to-r from-[#59A8A8] to-[#00FF51] bg-clip-text text-transparent font-[Satisfy] md:pl-13">
          Vimal Raj V
        </h1>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="text-[var(--primary-2)]">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-[var(--primary-2)]">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-[var(--primary-2)]">
              contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
