import type { AdminDoubleXpEventDto } from '@chiliztv/shared';

import { groupDoubleXp } from '@/lib/gamification/doubleXpDisplay';
import { apiErrorMessage, apiRequestId } from '@/lib/api/errors';
import { Button } from '@/components/common/Button';
import { Card } from '@/components/common/Card';
import { CardError } from '@/components/common/CardError';
import { CardHead } from '@/components/common/CardHead';
import { EmptyState } from '@/components/common/EmptyState';
import { Skeleton } from '@/components/common/Skeleton';
import { THead } from '@/components/common/THead';
import { DOUBLE_XP_COLS, DoubleXpRow } from './DoubleXpRow';

interface DoubleXpEventsCardProps {
  readonly items: ReadonlyArray<AdminDoubleXpEventDto> | undefined;
  readonly isLoading: boolean;
  readonly error: unknown;
  readonly retrying: boolean;
  readonly onRetry: () => void;
  readonly canManage: boolean;
  /** Absent when the role or the legal switch forbids creation. */
  readonly onCreate?: () => void;
  readonly onCancel: (event: AdminDoubleXpEventDto) => void;
}

const SECTIONS = [
  { key: 'running', label: 'Running' },
  { key: 'upcoming', label: 'Upcoming' },
  { key: 'past', label: 'Past' },
] as const;

export function DoubleXpEventsCard({ items, isLoading, error, retrying, onRetry, canManage, onCreate, onCancel }: Readonly<DoubleXpEventsCardProps>) {
  const groups = items ? groupDoubleXp(items) : null;
  return (
    <Card as="section" label="Double XP events" className="flex flex-col">
      <CardHead
        title="Double XP events"
        icon="zap"
        count={items?.length}
        meta="Manual · admin only"
        right={
          onCreate && (
            <Button size="sm" variant="primary" icon="zap" onClick={onCreate}>
              New event
            </Button>
          )
        }
      />
      {isLoading && <Skeleton className="m-4 h-48" />}
      {Boolean(error) && (
        <CardError title="Couldn't load events" detail={apiErrorMessage(error)} requestId={apiRequestId(error)} onRetry={onRetry} retrying={retrying} />
      )}
      {groups && items?.length === 0 && (
        <EmptyState icon="zap" title="No double XP event yet" hint="Schedule one at least 24 h ahead: players see the banner up to 7 days before it starts." />
      )}
      {groups && items && items.length > 0 && (
        <div className="overflow-x-auto">
          <div className="min-w-190">
            <THead cols={DOUBLE_XP_COLS}>
              <span>Event</span>
              <span>Window</span>
              <span>Mult.</span>
              <span>Sources</span>
              <span>Status</span>
              <span />
            </THead>
            {SECTIONS.map(({ key, label }) =>
              groups[key].length === 0 ? null : (
                <div key={key}>
                  <div className="border-b border-line-subtle bg-card-2 px-4 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-fg-meta">
                    {label} · {groups[key].length}
                  </div>
                  {groups[key].map((event) => (
                    <DoubleXpRow key={event.id} event={event} canManage={canManage} onCancel={onCancel} />
                  ))}
                </div>
              ),
            )}
          </div>
        </div>
      )}
    </Card>
  );
}
