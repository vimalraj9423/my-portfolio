type Props = {
  id: string;
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
  multiline?: boolean;
};

const fieldClass =
  "w-full bg-transparent border-b-2 border-[var(--gray-200)] py-2 outline-none transition-colors duration-300 focus:border-[var(--color-primary)] placeholder:text-[var(--gray-400)] text-[var(--gray-900)]";

export default function Input({ id, name, label, type = "text", placeholder, required, autoComplete, multiline = false }: Props) {
  return (
    <div className="group flex flex-col">
      <label
        htmlFor={id}
        className="block text-xs font-bold text-[var(--gray-600)] uppercase tracking-wider mb-1 transition-colors group-focus-within:text-[var(--color-primary)]"
      >
        {label}
        {required && <span className="text-[var(--color-primary)]"> *</span>}
      </label>
      {multiline ? (
        <textarea id={id} name={name} rows={4} placeholder={placeholder} required={required} className={`${fieldClass} resize-none`} />
      ) : (
        <input id={id} name={name} type={type} placeholder={placeholder} required={required} autoComplete={autoComplete} className={fieldClass} />
      )}
    </div>
  );
}
