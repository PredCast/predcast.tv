import type { DashboardActivityDto } from '@chiliztv/shared';

import { operatorName, roleLabel } from '@/lib/ui/operator';
import { fmtHourMinute } from '@/lib/ui/time';
import { Badge } from '@/components/common/Badge';
import { TRow } from '@/components/common/TRow';
import type { BadgeTone } from '@/lib/ui/badgeTone';

export const ACTIVITY_COLUMNS = '56px minmax(0,1.2fr) minmax(0,1fr) minmax(0,1.6fr) 90px';

const ROLE_TONES: Record<string, BadgeTone> = { super_admin: 'warning', admin: 'warning', moderator: 'strong', finance: 'positive' };

export function ActivityRow({ entry }: Readonly<{ entry: DashboardActivityDto['entries'][number] }>) {
  const failed = entry.action.endsWith('.failed') || entry.action === 'deny';
  return (
    <TRow cols={ACTIVITY_COLUMNS} density="compact">
      <span className="font-mono text-[11px] text-fg-meta">{fmtHourMinute(new Date(entry.at))}</span>
      <span className="flex min-w-0 items-center gap-2">
        <span className="truncate text-[13px] font-medium text-white" title={entry.actorWallet}>
          {operatorName(entry.actorWallet, entry.actorLabel)}
        </span>
        <Badge tone={ROLE_TONES[entry.actorRole] ?? 'muted'}>{roleLabel(entry.actorRole)}</Badge>
      </span>
      <span className={`truncate font-mono text-[12px] ${failed ? 'text-accent-text' : 'text-fg-strong'}`}>{entry.action}</span>
      <span className="truncate text-[13px] text-fg-body" title={entry.targetId}>
        {entry.targetLabel ?? `${entry.targetType} ${entry.targetId}`}
      </span>
      <span className="truncate text-right font-mono text-[11px] text-fg-meta">{entry.targetType === 'match' ? `#${entry.targetId}` : entry.targetType}</span>
    </TRow>
  );
}
