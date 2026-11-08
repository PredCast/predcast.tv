import type { MatchOperationDto } from '@chiliztv/shared';

import { OPERATION_LABELS } from '@/lib/markets/labels';
import { LiveDot } from '@/components/common/LiveDot';

/** Latest admin operation of a row when it still matters: in flight, or failed. */
export function OperationBadge({ operation }: Readonly<{ operation: MatchOperationDto | null }>) {
  if (!operation || operation.status === 'succeeded') return null;
  const label = OPERATION_LABELS[operation.kind];

  if (operation.status === 'failed') {
    return (
      <span
        title={operation.error ?? undefined}
        className="font-mono inline-flex w-fit rounded border border-accent/50 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.12em] text-accent-text"
      >
        {label} failed
      </span>
    );
  }
  return (
    <span className="font-mono inline-flex w-fit items-center gap-1.5 rounded border border-warning/40 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.12em] text-warning">
      <LiveDot s={4} />
      {label} {operation.status === 'pending' ? 'queued' : 'running'}
    </span>
  );
}
