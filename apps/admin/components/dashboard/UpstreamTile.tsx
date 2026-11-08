import { Badge } from '@/components/common/Badge';
import type { BadgeTone } from '@/lib/ui/badgeTone';

/** Upstream API card: state badge, usage bar (when a limit is known) and a detail line. */
export function UpstreamTile({
  name,
  state,
  tone,
  usedPct,
  detail,
}: Readonly<{ name: string; state: string; tone: BadgeTone; usedPct: number | null; detail: string }>) {
  const bar = tone === 'positive' ? 'bg-positive' : tone === 'warning' ? 'bg-warning' : tone === 'muted' ? 'bg-fg-meta' : 'bg-accent';
  return (
    <div className="flex flex-col gap-2 rounded-panel border border-line-subtle bg-card-2 px-3 py-2.5">
      <div className="flex items-center justify-between gap-2">
        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-white">{name}</span>
        <Badge tone={tone}>{state}</Badge>
      </div>
      <div className="h-1 rounded-full bg-elevated" aria-hidden="true">
        {usedPct !== null && <div className={`h-full rounded-full ${bar}`} style={{ width: `${Math.min(100, usedPct)}%` }} />}
      </div>
      <span className="font-mono text-[10px] tracking-[0.06em] text-fg-meta">{detail}</span>
    </div>
  );
}
