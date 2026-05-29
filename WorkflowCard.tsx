interface WorkflowCardProps {
  title: string;
  artifact: string;
  agent: string;
  metric: string;
  gate: string;
}

export function WorkflowCard({ title, artifact, agent, metric, gate }: WorkflowCardProps) {
  return (
    <div className="workflow-card p-6 flex flex-col">
      <h3 className="font-semibold text-lg tracking-tight mb-3">{title}</h3>
      <div className="text-sm text-[var(--muted)] mb-6 flex-1">{artifact}</div>
      <div className="pt-4 border-t border-[var(--line)] text-xs space-y-1 text-[var(--muted)]">
        <div><span className="font-medium text-[var(--text)]">Agent:</span> {agent}</div>
        <div><span className="font-medium text-[var(--text)]">Metric:</span> {metric}</div>
        <div><span className="font-medium text-[var(--text)]">Gate:</span> {gate}</div>
      </div>
    </div>
  );
}
