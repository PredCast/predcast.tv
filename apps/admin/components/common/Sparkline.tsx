import { sparklineGeometry } from '@/lib/ui/sparkline';

/** 72×28 trend line; red on live tiles. Decorative: the value and delta carry the meaning. */
export function Sparkline({ values, live = false }: Readonly<{ values: ReadonlyArray<number>; live?: boolean }>) {
  const g = sparklineGeometry(values);
  if (!g) return null;
  const stroke = live ? '#E8001D' : 'rgba(255,255,255,0.6)';
  return (
    <svg width={72} height={28} viewBox="0 0 72 28" aria-hidden="true" className="shrink-0">
      <path d={g.area} fill={live ? 'rgba(232,0,29,0.12)' : 'rgba(255,255,255,0.05)'} />
      <path d={g.line} fill="none" stroke={stroke} strokeWidth={1.5} strokeLinejoin="round" strokeLinecap="round" />
      <circle cx={g.end.x} cy={g.end.y} r={2.25} fill={stroke} />
    </svg>
  );
}
