export function Navigation() {
  const navItems = [
    { label: 'Dashboard', href: '#operators' },
    { label: 'Revenue Diagnostic', href: '#diagnostic' },
    { label: 'Agent Dispatch', href: '#agents' },
    { label: 'Approvals', href: '#approvals' },
    { label: 'Client Memory', href: '#memory' },
    { label: 'Workflows', href: '#workflows' },
    { label: 'Settings', href: '#settings' },
  ];

  return (
    <nav className="side-nav p-6">
      <div className="brand-mark w-12 h-12 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] text-black font-black text-3xl mb-8">W</div>
      <div className="flex flex-col gap-1">
        {navItems.map((item) => (
          <a key={item.label} href={item.href} className="px-4 py-3 text-sm rounded-2xl text-[var(--muted)] hover:text-white hover:bg-white/5 transition-colors">
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
