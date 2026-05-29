interface MemoryCardProps {
  type: string;
  count: number | string;
  note: string;
  health: string;
}

export function MemoryCard({ type, count, note, health }: MemoryCardProps) {
  return (
    <div className="memory-card p-6 relative">
      <div className="text-xs font-semibold tracking-[1.5px] text-[var(--muted)] uppercase">{type}</div>
      <div className="text-5xl font-semibold tracking-[-2.5px] mt-3 mb-1">{count}</div>
      <p className="text-sm text-[var(--muted)] leading-snug pr-8">{note}</p>
      <div className="absolute bottom-5 right-6 text-xs font-bold text-[var(--accent)] tracking-wider">{health}</div>
    </div>
  );
}
