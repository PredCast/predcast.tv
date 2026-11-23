import type { AdminDoubleXpMonthUsageDto, AdminDoubleXpRulesDto } from '@chiliztv/shared';

import { bannerPreview, DOUBLE_XP_SOURCE_LABELS, fmtMonth, fmtMultiplier } from '@/lib/gamification/doubleXpDisplay';
import { Badge } from '@/components/common/Badge';
import { Card } from '@/components/common/Card';
import { CardHead } from '@/components/common/CardHead';
import { DoubleXpBannerPreview } from './DoubleXpBannerPreview';

/** §3.6 guards, as enforced by the backend, and the quota left per Paris month. */
export function DoubleXpRulesCard({
  rules,
  usage,
}: Readonly<{ rules: AdminDoubleXpRulesDto; usage: ReadonlyArray<AdminDoubleXpMonthUsageDto> }>) {
  const multipliers = rules.multipliers.map(fmtMultiplier).join(' · ');
  const guards = [
    ['Sources', rules.eligibleSources.map((s) => DOUBLE_XP_SOURCE_LABELS[s]).join(', ')],
    ['Never boosted', 'Bets, wins, support, follows, first steps, achievements'],
    ['Multiplier', multipliers],
    ['Duration', `${rules.maxDurationHours} h at most`],
    ['Notice', `Start ≥ ${rules.minNoticeHours} h after creation`],
    ['Frequency', `${rules.maxPerMonth} per calendar month (Paris)`],
    ['Overlap', 'None — refused with 409'],
    ['Cancel', 'Any time before the end · no effect on XP already credited'],
  ] as const;

  return (
    <Card as="section" label="Double XP rules" className="flex flex-col">
      <CardHead title="Rules" icon="info" meta="§3.6 · checked by the API" />
      <div className="flex flex-col gap-4 p-4">
        {!rules.enabled && (
          <Badge tone="danger" glyph="✕">
            Legal switch off · creation refused
          </Badge>
        )}
        <dl className="grid grid-cols-[96px_minmax(0,1fr)] gap-x-3 gap-y-2 text-[12px] leading-4">
          {guards.map(([term, value]) => (
            <div key={term} className="contents">
              <dt className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-fg-meta">{term}</dt>
              <dd className="text-fg-strong">{value}</dd>
            </div>
          ))}
        </dl>
        <div>
          <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-fg-meta">Monthly quota</div>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {usage.map((u) => (
              <Badge key={u.month} tone={u.used >= u.limit ? 'danger' : u.used > 0 ? 'warning' : 'muted'}>
                {fmtMonth(u.month)} · {u.used}/{u.limit}
              </Badge>
            ))}
          </div>
        </div>
        <DoubleXpBannerPreview text={bannerPreview(rules.eligibleSources, 2)} />
        <p className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.1em] text-fg-meta">
          XP has no monetary value. The banner shows from {rules.announceDays} days before the start.
        </p>
      </div>
    </Card>
  );
}
