interface AgentCardProps {
  name: string;
  focus: string;
  quality: number;
  state: string;
}

export function AgentCard({ name, focus, quality, state }: AgentCardProps) {
  return (
    <div className="agent-card p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-semibold text-xl tracking-tight">{name}</h3>
        <span className="text-xs px-3 py-1 rounded-full border border-[var(--line)] text-[var(--muted)]">{state}</span>
      </div>
      <p className="text-[var(--muted)] text-sm leading-relaxed mb-6">{focus}</p>
      <div>
        <div className="flex justify-between text-xs mb-2 text-[var(--muted)]">
          <span>OUTPUT QUALITY</span>
          <span>{quality}/100</span>
        </div>
        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] rounded-full" style={{ width: `${quality}%` }} />
        </div>
      </div>
    </div>
  );
}
