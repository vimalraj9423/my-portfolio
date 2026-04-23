export default function Button(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>,
) {
  return (
    <button
      {...props}
      className="bg-[var(--color-primary)] text-white px-6 py-3 rounded-md active:bg-[var(--light-primay-background)] text-white active:text-[var(--color-primary)] transition-colors duration-300"
    >
      {props.children}
    </button>
  );
}
