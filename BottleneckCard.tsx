interface BottleneckCardProps {
  rank: number;
  title: string;
  operator: string;
  evidence: string;
  confidence: string;
}

export function BottleneckCard({ rank, title, operator, evidence, confidence }: BottleneckCardProps) {
  return (
    <div className="panel p-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="px-4 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-bold tracking-widest">
          #{rank} BOTTLENECK
        </div>
        <div className="text-sm text-[var(--muted)]">{operator}</div>
      </div>
      <h3 className="text-2xl font-semibold tracking-tight leading-tight mb-4">{title}</h3>
      <p className="text-[var(--muted)] mb-6">{evidence}</p>
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs text-[var(--muted)]">CONFIDENCE</span>
          <div className="font-semibold text-lg">{confidence}</div>
        </div>
        <button className="px-6 py-2.5 rounded-2xl bg-white text-black font-semibold text-sm hover:bg-zinc-100 transition-colors">
          Run Targeted Diagnostic
        </button>
      </div>
    </div>
  );
}
