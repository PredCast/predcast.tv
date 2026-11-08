export type RowDensity = 'compact' | 'default' | 'rich';

const DENSITY: Record<RowDensity, string> = { compact: 'min-h-9', default: 'min-h-12', rich: 'min-h-[52px]' };

/** Grid table row; `accent` paints a 2px left edge, `critical` adds the red wash. */
export function TRow({
  cols,
  accent,
  critical = false,
  density = 'default',
  className = '',
  children,
}: Readonly<{
  cols: string;
  accent?: string;
  critical?: boolean;
  density?: RowDensity;
  className?: string;
  children: React.ReactNode;
}>) {
  const edge = critical ? '#E8001D' : accent;
  return (
    <div
      className={`relative grid items-center gap-3 border-b border-line-subtle px-4 py-1.5 text-[13px] transition-colors duration-[120ms] last:border-b-0 ${DENSITY[density]} ${
        critical ? 'bg-accent/5' : 'hover:bg-row-hover'
      } ${className}`}
      style={{ gridTemplateColumns: cols }}
    >
      {edge && <span aria-hidden="true" className="absolute bottom-0 left-0 top-0 w-[2px]" style={{ background: edge }} />}
      {children}
    </div>
  );
}
