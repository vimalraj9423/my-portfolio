export default function VisitingCard() {
  return (
    <div className="max-w-[1440px] mx-auto px-9 mt-[100px]">
      <div className="p-[112px] gap-[126px] flex bg-white rounded-lg shadow-[0_36px_105px_rgba(43,56,76,0.1)] p-6 w-full  mx-auto transform translate-y-[100px]">
        <div className="flex-1">
          <div className="max-w-[424px] max-h-[468px] overflow-hidden rounded-lg shadow-lg bg-[#F0F1F3]">
            <img src="/hero.png" alt="Vimal Raj" className="w-full h-full  " />
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center gap-6">
          <h1 className="text-3xl font-semibold  text-black leading-[50px]">
            I am Professional User Experience Designer
          </h1>
          <div className="flex flex-col gap-4">
            <p className="text-[18px]  text-[var(--gray-600)]">
              I design and develop services for customers specializing creating
              stylish, modern websites, web services and online stores. My
              passion is to design digital user experiences.
            </p>
            <p className="text-[18px] text-[var(--gray-600)]">
              I design and develop services for customers specializing creating
              stylish, modern websites, web services.
            </p>
          </div>
          <div>
            <button className="mr-4 px-6 py-3 bg-[var(--color-primary)] text-white font-medium rounded hover:bg-[var(--color-primary-dark)] transition duration-300">
              My Project
            </button>
            <button className="px-6 py-3 bg-[var(--color-primary)] text-white font-medium rounded hover:bg-[var(--color-primary-dark)] transition duration-300">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
