export function NavSectionLabel({ className = "", children }: Readonly<{ className?: string; children: React.ReactNode }>) {
  return (
    <div className={`px-2.5 pb-1.5 pt-2 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-fg-meta ${className}`}>
      {children}
    </div>
  );
}
