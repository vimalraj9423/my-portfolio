import Image from "next/image";

interface ButtonPropss extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isPrimary?: boolean;
  isOutLine?: boolean;
  className?: string;
  iconName?: string;
}
function Button({
  children,
  className,
  isOutLine,
  isPrimary,
  iconName,
  ...rest
}: ButtonPropss) {
  const classNames = [
    "rounded",
    "py-[10px] px-1",
    "text-sm",
    "font-medium",
    "flex justify-center gap-1",
    "text-white",
  ];
  if (isPrimary) {
    classNames.push("bg-[var(--color-primary)]");
  }
  if (isOutLine) {
    classNames.push("border-1 border-white");
  }
  if (className) classNames.push(className);

  return (
    <button className={`${classNames.join(" ")}`} {...rest}>
      {children}
      {iconName && (
        <div>
          {" "}
          <Image src={iconName} alt={iconName} width={20} height={20} />
        </div>
      )}
    </button>
  );
}
export default Button;
