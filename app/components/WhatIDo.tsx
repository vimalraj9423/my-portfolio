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
    <div className="bg-[var(--gray-50)] py-[100px]  ">
      <div className="flex justify-center mx-auto px-9 max-w-[1440px]">
        <div className="flex-1 flex flex-col justify-center items-center">
          <div className="flex flex-col gap-6 max-w-[529px]">
            <h1>What I do?</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris
              ultrices eget lorem ac vestibulum. Suspendis imperdiet,
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              purus arcu, varius eget velit non.
            </p>
          </div>
          <div>
            <button className="mt-12 px-6 py-3 bg-[var(--color-primary)] text-white font-medium rounded hover:bg-[var(--color-primary-dark)] transition duration-300">
              Say Hello!
            </button>
          </div>
        </div>
        <div className="flex-1">
          {services.map((service, index) => (
            <div
              key={index}
              className="mb-8 p-6 bg-white rounded-md shadow-lg border-l-5 border-[var(--color-primary)]"
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
