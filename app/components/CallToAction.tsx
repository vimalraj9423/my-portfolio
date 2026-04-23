/* eslint-disable @next/next/no-img-element */
export default function CallToAction() {
  return (
    <div className="bg-[var(--gray-900)]  py-[100px] ">
      <div className="max-w-[619px] text-center  mx-auto flex flex-col gap-6">
        <h1 className="text-white text-5xl font-semibold leading-[56px]">
          {"Do you have Project Idia? Let's discuss your project!"}
        </h1>
        <p className="text-[var(--gray-300)]">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
        <div>
          <button className="px-6 py-3 bg-[var(--color-primary)] text-white font-medium rounded hover:bg-[var(--color-primary-dark)] transition duration-300">
            Let’s work Together
            <img
              src="/icons/arrow-right.svg"
              alt="Arrow Right"
              className="ml-2 w-4 h-4 inline-block"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
