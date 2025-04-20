import Image from "next/image";

interface ServiceCardProps {
  children: React.ReactNode;
  iconName: string;
}

function ServiceCard({ children, iconName }: ServiceCardProps) {
  return (
    <div className=" w-full  h-56 px-3 py-5 hover:bg-[var(--hover-grey)] bg-teal-500 inline-flex flex-col justify-end items-start gap-2.5 overflow-hidden">
      <div className="w-14 h-11">
        <Image src={iconName} alt="service name" width={57} height="46" />
      </div>
      <div className="justify-start text-white text-2xl font-bold font-['Raleway'] leading-loose tracking-wide">
        {children}
      </div>
    </div>
  );
}
export default ServiceCard;
