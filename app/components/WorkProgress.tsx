import VisitingCard from "./VisitingCard";

export default function WorkProgress() {
  return (
    <div>
      <VisitingCard />
      <div className="bg-[#F0F1F3] ">
        <div className="flex gap-[126px] mx-auto px-9 max-w-[1440px] pt-[248px] items-center pb-[160px]">
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
            <div className="max-w-[312px] p-8 bg-white overflow-hidden rounded-lg shadow-lg">
              <h3>1. Research</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                purus arcu.
              </p>
            </div>

            <div className="max-w-[312px] p-8 bg-white overflow-hidden rounded-lg shadow-lg">
              <h3>2. Analysis</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                purus arcu.
              </p>
            </div>
            <div className="max-w-[312px] p-8 bg-white overflow-hidden rounded-lg shadow-lg">
              <h3>3. Design</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                purus arcu.
              </p>
            </div>
            <div className="max-w-[312px] p-8 bg-white overflow-hidden rounded-lg shadow-lg">
              <h3>4. Launch</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                purus arcu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
