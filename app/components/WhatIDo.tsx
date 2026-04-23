import Button from "./Button";

export default function WhatIDo() {
  const services = [
    {
      title: "User Experience (UX)",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet,",
    },
    {
      title: "User Interface (UI) Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet,",
    },
    {
      title: "Web Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet,",
    },
  ];
  return (
    <div className="bg-[var(--gray-50)] py-10 md:py-[100px]  ">
      <div className="flex flex-col md:flex-row gap-6 justify-center mx-auto px-9 max-w-[1440px]">
        <div className="flex-1 flex flex-col gap-6 md:gap-12 justify-center">
          <div className="flex flex-col gap-4 md:gap-6 max-w-[529px]">
            <h1 className="heading1">What I do?</h1>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris
              ultrices eget lorem ac vestibulum. Suspendis imperdiet,
            </p>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              purus arcu, varius eget velit non.
            </p>
          </div>
          <div>
            <Button className="px-6 py-3 bg-[var(--color-primary)] text-white font-medium rounded hover:bg-[var(--color-primary-dark)] transition duration-300">
              Say Hello!
            </Button>
          </div>
        </div>
        <div className="flex-1 group">
          {services.map((service, index) => (
            <div
              key={index}
              className={`mb-8 p-6 bg-white rounded-md shadow-lg border-l-5   ${index === 0 ? `border-[var(--color-primary)] group-hover:border-transparent hover:!border-[var(--color-primary)]` : "border-transparent hover:border-[var(--color-primary)]"}`}
            >
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
