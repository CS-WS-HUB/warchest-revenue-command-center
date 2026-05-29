interface MetricCardProps {
  label: string;
  value: string | number;
  change: string;
  trend: 'up' | 'down' | 'neutral';
  operator: string;
}

export function MetricCard({ label, value, change, trend, operator }: MetricCardProps) {
  const trendColor = trend === 'up' ? 'text-[var(--success)]' : trend === 'down' ? 'text-[var(--danger)]' : 'text-[var(--muted)]';

  return (
    <div className="metric-card p-6">
      <div className="flex justify-between items-start">
        <div>
          <div className="text-sm font-medium text-[var(--muted)]">{label}</div>
          <div className="text-4xl font-semibold tracking-tighter mt-3">{value}</div>
        </div>
        <div className={`text-sm font-semibold ${trendColor} mt-1`}>{change}</div>
      </div>
      <div className="text-xs text-[var(--muted)] mt-6 tracking-wide">{operator}</div>
    </div>
  );
}
