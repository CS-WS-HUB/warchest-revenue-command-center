interface StatusIndicatorProps {
  status: 'success' | 'warning' | 'danger' | 'neutral';
  label?: string;
}

export function StatusIndicator({ status, label }: StatusIndicatorProps) {
  const colors = {
    success: 'bg-[var(--success)]',
    warning: 'bg-[var(--gold)]',
    danger: 'bg-[var(--danger)]',
    neutral: 'bg-[var(--muted)]',
  };
  return (
    <div className="flex items-center gap-2">
      <div className={`w-2 h-2 rounded-full ${colors[status]}`} />
      {label && <span className="text-xs text-[var(--muted)]">{label}</span>}
    </div>
  );
}
