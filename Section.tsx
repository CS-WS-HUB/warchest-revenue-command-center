interface SectionProps {
  id: string;
  kicker?: string;
  title: string;
  children: React.ReactNode;
}

export function Section({ id, kicker, title, children }: SectionProps) {
  return (
    <section id={id} className="mb-16">
      <div className="mb-6">
        {kicker && (
          <div className="text-xs font-semibold tracking-[3px] text-[var(--accent)] uppercase mb-2">
            {kicker}
          </div>
        )}
        <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
      </div>
      {children}
    </section>
  );
}
