export function JobFact({ label, value }: Readonly<{ label: string; value: string }>) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-fg-meta">{label}</span>
      <span className="font-mono text-[12px] text-fg-strong">{value}</span>
    </div>
  );
}
