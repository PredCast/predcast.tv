import Link from 'next/link';

import type { DashboardModerationDto } from '@chiliztv/shared';

import { buttonClass } from '@/lib/ui/buttonClass';
import { fmtAgo } from '@/lib/ui/time';
import { SeverityBadge } from '@/components/common/SeverityBadge';

const TARGET_LABELS = { message: 'Chat message', stream: 'Stream', account: 'Player profile' } as const;

export function QueueReportRow({ report, now }: Readonly<{ report: DashboardModerationDto['reports'][number]; now: Date | null }>) {
  const high = report.severity >= 4;
  return (
    <div className={`flex min-h-[52px] items-center gap-3 border-b border-line-subtle px-4 py-2 ${high ? 'bg-accent/5 shadow-[inset_2px_0_0_#E8001D]' : ''}`}>
      <SeverityBadge severity={report.severity} />
      <div className="min-w-0 flex-1">
        <div className="truncate text-[14px] font-medium capitalize text-white">{report.reasonCode.replace(/_/g, ' ')}</div>
        <div className="truncate font-mono text-[10px] uppercase tracking-[0.12em] text-fg-meta">
          {TARGET_LABELS[report.targetType]} · <span className="normal-case">{report.targetLabel}</span>
          {report.matchLabel ? ` · ${report.matchLabel}` : ''}
        </div>
      </div>
      <span className="font-mono text-[11px] text-fg-meta">{now ? fmtAgo(new Date(report.createdAt), now).replace(' ago', '') : ''}</span>
      <Link href={`/moderation/reports/${report.id}`} className={buttonClass('ghost', 'sm')}>
        Review
      </Link>
    </div>
  );
}
