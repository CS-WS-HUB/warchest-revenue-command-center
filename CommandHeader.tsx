interface CommandHeaderProps {
  title: string;
  subtitle?: string;
}

export function CommandHeader({ title, subtitle }: CommandHeaderProps) {
  return (
    <div className="mb-10 flex justify-between items-end">
      <div>
        <h1 className="text-6xl font-semibold tracking-[-3.5px] leading-none">{title}</h1>
        {subtitle && <p className="mt-4 text-xl text-[var(--muted)] max-w-[620px]">{subtitle}</p>}
      </div>
      <div className="flex gap-3">
        <button className="px-5 py-2.5 rounded-2xl border border-[var(--line)] text-sm font-medium hover:bg-white/5">Refresh Data</button>
        <button className="px-6 py-2.5 rounded-2xl bg-white text-black font-semibold text-sm hover:bg-zinc-200">Run Full Diagnostic</button>
      </div>
    </div>
  );
}
