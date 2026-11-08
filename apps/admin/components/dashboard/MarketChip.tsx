import type { MarketStateDto } from '@chiliztv/shared';

const TONES: Record<MarketStateDto, string> = {
  open: 'border-positive/35 text-positive',
  suspended: 'border-warning/40 text-warning',
  closed: 'border-warning/40 text-warning',
  resolved: 'border-line text-fg-body',
  cancelled: 'border-line text-fg-meta',
  inactive: 'border-line text-fg-meta',
};

/** "● 1X2 · OPEN" — dot + word, never colour alone. */
export function MarketChip({ label, state }: Readonly<{ label: string; state: MarketStateDto }>) {
  return (
    <span className={`inline-flex h-5 items-center gap-1.5 rounded-badge border px-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.12em] ${TONES[state]}`}>
      <span aria-hidden="true" className="h-[5px] w-[5px] rounded-full bg-current" />
      {label} · {state}
    </span>
  );
}
