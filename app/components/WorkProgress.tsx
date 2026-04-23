import VisitingCard from "./VisitingCard";

export default function WorkProgress() {
  const listItems = [
    {
      name: "Research",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
    },
    {
      name: "Analysis",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
    },
    {
      name: "Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
    },
    {
      name: "Launch",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
    },
  ];
  return (
    <div>
      <VisitingCard />
      <div className="bg-[#F0F1F3] ">
        <div className="flex flex-col md:flex-row gap-10 md:gap-[126px] mx-auto px-6 md:px-9 max-w-[1440px] pt-[160px] md:pt-[248px] items-center pb-[160px]">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-[var(--color-primary)] mb-6">
              Work Progress
            </h1>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris
              ultrices eget lorem ac vestibulum. Suspendis imperdiet,
            </p>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              purus arcu, varius eget velit non.
            </p>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-6">
            {listItems.map((item, index) => (
              <div
                className="max-w-[312px] p-8 bg-white overflow-hidden rounded-lg shadow-lg"
                key={index}
              >
                <h3>
                  {index + 1}. {item.name}
                </h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
