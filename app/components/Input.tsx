export default function Input(
  props: React.InputHTMLAttributes<HTMLInputElement>,
) {
  return (
    <>
      <label
        htmlFor={props.id}
        className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1"
      ></label>
      <input
        type="text"
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        className="w-full bg-transparent border-b-2 border-slate-200 py-2 outline-none transition-colors duration-300 focus:border-[var(--color-primary)] placeholder:text-slate-300 text-slate-800"
      />
    </>
  );
}
