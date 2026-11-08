export function DetailField({ label, children }: Readonly<{ label: string; children: React.ReactNode }>) {
  return (
    <div>
      <div className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-fg-meta">{label}</div>
      <div className="mt-1.5 text-[13px] leading-relaxed text-fg-strong">{children}</div>
    </div>
  );
}
