export default function Header() {
  const listItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];
  return (
    <header className="bg-[var(--gray-white)]">
      <div className="w-full flex flex-col md:flex-row items-center justify-between py-5  max-w-[1440px] mx-auto px-6 md:px-9">
        <div className="flex gap-4 items-center w-full md:w-auto">
          <div className="h-[56px] w-[56px] bg-[var(--color-primary)] text-white font-[var(--font-poppins)] font-medium text-2xl rounded-full flex items-center justify-center">
            V
          </div>
          <h1 className="heading3">Vimal Raj</h1>
        </div>
        <nav>
          <ul className="hidden md:flex space-x-4 ">
            {listItems.map((item) => (
              <li key={item.href} className="py-3 px-6">
                <a
                  href={item.href}
                  className=" font-[var(--font-work-sans)] font-medium text-base text-[var(--natural-black)] group relative transition-all duration-300"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--color-primary)] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
