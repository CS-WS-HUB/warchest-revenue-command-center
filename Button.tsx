interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
}

export function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
  const base = "px-5 py-2.5 rounded-2xl text-sm font-semibold transition-all active:scale-[0.985]";
  const variants = {
    primary: "bg-white text-black hover:bg-zinc-200",
    secondary: "border border-[var(--line)] hover:bg-white/5",
    ghost: "text-[var(--muted)] hover:text-white hover:bg-white/5",
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
