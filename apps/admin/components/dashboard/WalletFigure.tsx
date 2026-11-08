export function WalletFigure({ value, label }: Readonly<{ value: string; label: string }>) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="font-display text-[22px] font-bold leading-6 text-white">{value}</span>
      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-fg-meta">{label}</span>
    </div>
  );
}
