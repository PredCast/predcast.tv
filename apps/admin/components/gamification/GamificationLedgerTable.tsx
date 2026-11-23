import type { AdminLedgerEntryDto } from '@chiliztv/shared';

import { fmtDateTime, fmtMultiplier } from '@/lib/gamification/doubleXpDisplay';
import { fmtSignedXp, ledgerDetail, ledgerSourceLabel } from '@/lib/gamification/ledgerDisplay';
import { EmptyState } from '@/components/common/EmptyState';
import { THead } from '@/components/common/THead';
import { TRow } from '@/components/common/TRow';

const COLS = '150px minmax(0,1fr) 80px 96px minmax(0,1.4fr)';

/** Latest ledger lines with their XP amounts (admin only, never shown in public). */
export function GamificationLedgerTable({ entries }: Readonly<{ entries: ReadonlyArray<AdminLedgerEntryDto> }>) {
  if (entries.length === 0) {
    return <EmptyState icon="activity" title="No ledger line yet" hint="Credits appear here from the first check-in or action." py="py-8" />;
  }
  return (
    <div className="overflow-x-auto">
      <div className="min-w-160">
        <THead cols={COLS}>
          <span>When</span>
          <span>Source</span>
          <span className="text-right">XP</span>
          <span className="text-right">Base · mult.</span>
          <span>Detail</span>
        </THead>
        {entries.map((entry) => {
          const detail = ledgerDetail(entry);
          return (
            <TRow key={entry.id} cols={COLS} density="compact">
              <span className="font-mono text-[11px] text-fg-meta">{fmtDateTime(entry.occurredAt)}</span>
              <span className="truncate text-fg-strong">{ledgerSourceLabel(entry.source)}</span>
              <span
                className={`text-right font-mono text-[12px] font-semibold ${entry.xp > 0 ? 'text-positive' : entry.xp < 0 ? 'text-accent-text' : 'text-fg-meta'}`}
              >
                {fmtSignedXp(entry.xp)}
              </span>
              <span className="text-right font-mono text-[11px] text-fg-meta">
                {entry.baseXp} · {fmtMultiplier(entry.multiplier)}
              </span>
              <span className="truncate text-[12px] text-fg-body" title={`${entry.refKey}${detail ? ` · ${detail}` : ''}`}>
                {detail ?? <span className="font-mono text-[11px] text-fg-meta">{entry.refKey}</span>}
              </span>
            </TRow>
          );
        })}
      </div>
    </div>
  );
}
