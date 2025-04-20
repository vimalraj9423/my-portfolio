interface InputProps {
  isTextArea?: boolean;
  placeHolder: string;
}
function Input({ isTextArea, placeHolder }: InputProps) {
  const classNames = [
    "max-w-[388px] py-1 px-2",
    "bg-[var(--input-background)]",
    "w-full",
  ];
  if (isTextArea) {
    classNames.push("104px");
    return (
      <textarea
        className={classNames.join(" ")}
        placeholder={placeHolder}
      ></textarea>
    );
  }
  return <input className={classNames.join(" ")} placeholder={placeHolder} />;
}
export default Input;
