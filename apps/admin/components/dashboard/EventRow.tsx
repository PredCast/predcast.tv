import type { AdminMatchRowDto, DashboardEventDto } from '@chiliztv/shared';

import { fmtUsdcCompact } from '@/lib/format/amounts';
import { shortWallet } from '@/lib/ui/operator';
import { TRow } from '@/components/common/TRow';

import { EventRowAction } from './EventRowAction';
import { EventVisibilityBadge } from './EventVisibilityBadge';
import { KickoffCell } from './KickoffCell';

export function EventRow({
  event,
  cols,
  showMoney,
  onHide,
}: Readonly<{ event: DashboardEventDto; cols: string; showMoney: boolean; onHide: (row: AdminMatchRowDto) => void }>) {
  return (
    <TRow cols={cols} density="rich" critical={event.visibility === 'setup_failed'}>
      <KickoffCell at={event.kickoffAt} />
      <div className="min-w-0">
        <div className="truncate text-[14px] font-medium text-white">
          {event.home} vs {event.away}
        </div>
        <div className="truncate font-mono text-[10px] uppercase tracking-[0.12em] text-fg-meta">
          {event.league} · {event.contractAddress ? shortWallet(event.contractAddress) : 'pending'}
        </div>
      </div>
      <EventVisibilityBadge visibility={event.visibility} />
      {showMoney && (
        <>
          <span className="text-right font-mono text-[12px] text-fg-strong">{event.pool ? fmtUsdcCompact(event.pool.totalStaked) : '—'}</span>
          <span className="text-right font-mono text-[12px] text-fg-strong">{event.pool ? event.pool.betCount : '—'}</span>
        </>
      )}
      {event.row && (
        <div className="flex justify-end">
          <EventRowAction row={event.row} visibility={event.visibility} onHide={onHide} />
        </div>
      )}
    </TRow>
  );
}
