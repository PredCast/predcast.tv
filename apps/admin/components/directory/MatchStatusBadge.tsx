import { LiveDot } from '@/components/common/LiveDot';

const LIVE = new Set(['1H', 'HT', '2H', 'ET', 'BT', 'P', 'LIVE', 'SUSP', 'INT']);
const FINISHED = new Set(['FT', 'AET', 'PEN']);

function tone(status: string): string {
  if (LIVE.has(status)) return 'border-accent/50 text-accent-text';
  if (FINISHED.has(status)) return 'border-positive/40 text-positive';
  if (status === 'NS' || status === 'TBD') return 'border-line text-fg-body';
  return 'border-warning/40 text-warning';
}

export function MatchStatusBadge({ status }: Readonly<{ status: string }>) {
  return (
    <span
      className={`font-mono inline-flex w-fit items-center gap-1.5 rounded border px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.12em] ${tone(status)}`}
    >
      {LIVE.has(status) && <LiveDot s={4} />}
      {status}
    </span>
  );
}
