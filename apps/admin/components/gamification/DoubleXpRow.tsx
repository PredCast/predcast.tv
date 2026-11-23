import type { AdminDoubleXpEventDto } from '@chiliztv/shared';

import {
  DOUBLE_XP_SOURCE_LABELS,
  DOUBLE_XP_STATUS,
  durationHours,
  fmtDateTime,
  fmtMultiplier,
} from '@/lib/gamification/doubleXpDisplay';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { TRow } from '@/components/common/TRow';
import { WalletLabel } from '@/components/moderation/WalletLabel';

export const DOUBLE_XP_COLS = 'minmax(0,1.5fr) minmax(0,1.4fr) 56px minmax(0,1.3fr) 112px 88px';

const EDGES: Partial<Record<AdminDoubleXpEventDto['status'], string>> = { running: '#2dd4a4', upcoming: '#F5C518' };

export function DoubleXpRow({
  event,
  canManage,
  onCancel,
}: Readonly<{ event: AdminDoubleXpEventDto; canManage: boolean; onCancel: (event: AdminDoubleXpEventDto) => void }>) {
  const status = DOUBLE_XP_STATUS[event.status];
  const cancellable = event.status === 'running' || event.status === 'upcoming';
  return (
    <TRow cols={DOUBLE_XP_COLS} accent={EDGES[event.status]} density="rich">
      <div className="min-w-0">
        <div className="truncate font-semibold text-white">{event.name}</div>
        <div className="mt-0.5 flex items-center gap-1 text-[11px] text-fg-meta">
          by <WalletLabel wallet={event.createdByWallet} />
        </div>
      </div>
      <div className="min-w-0 font-mono text-[11px] leading-4 text-fg-body">
        <div>{fmtDateTime(event.startsAt)}</div>
        <div className="text-fg-meta">
          → {fmtDateTime(event.endsAt)} · {durationHours(event.startsAt, event.endsAt)} h
        </div>
      </div>
      <span className="font-display text-[22px] font-extrabold leading-none text-white">{fmtMultiplier(event.multiplier)}</span>
      <div className="flex flex-wrap gap-1">
        {event.sources.map((s) => (
          <Badge key={s} tone="neutral">
            {DOUBLE_XP_SOURCE_LABELS[s]}
          </Badge>
        ))}
      </div>
      <Badge tone={status.tone} glyph={status.glyph}>
        {status.label}
      </Badge>
      <span className="text-right">
        {canManage && cancellable && (
          <Button size="xs" variant="danger" icon="x" onClick={() => onCancel(event)}>
            Cancel
          </Button>
        )}
      </span>
    </TRow>
  );
}
