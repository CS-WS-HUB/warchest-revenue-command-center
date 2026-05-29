interface ApprovalRowProps {
  item: string;
  className: string;
  status: 'Allowed' | 'Blocked' | 'Pending';
  reason: string;
}

export function ApprovalRow({ item, className, status, reason }: ApprovalRowProps) {
  const statusColor = status === 'Allowed' ? 'text-[var(--success)]' : status === 'Blocked' ? 'text-[var(--danger)]' : 'text-[var(--gold)]';

  return (
    <div className="grid grid-cols-12 items-center px-6 py-4 border-b border-[var(--line)] last:border-b-0 hover:bg-white/5 transition-colors text-sm">
      <div className="col-span-5 font-medium">{item}</div>
      <div className="col-span-2 text-[var(--muted)]">{className}</div>
      <div className={`col-span-2 font-semibold ${statusColor}`}>{status}</div>
      <div className="col-span-3 text-[var(--muted)] pr-4">{reason}</div>
    </div>
  );
}
