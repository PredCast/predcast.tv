const STYLES: Record<string, string> = {
  WON: 'border-positive/40 text-positive',
  LOST: 'border-line text-fg-meta',
  PENDING: 'border-warning/40 text-warning',
  REFUNDED: 'border-line text-fg-body',
};

export function BetStatusBadge({ status }: Readonly<{ status: string }>) {
  return (
    <span
      className={`font-mono inline-flex w-fit rounded border px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.12em] ${STYLES[status] ?? STYLES.LOST}`}
    >
      {status}
    </span>
  );
}
