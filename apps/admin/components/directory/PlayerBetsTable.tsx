import type { AdminPlayerBetDto } from '@/lib/api/endpoints/directory';
import { fmtUsdcRaw } from '@/lib/format/amounts';
import { Card } from '@/components/common/Card';
import { CardHead } from '@/components/common/CardHead';
import { THead } from '@/components/common/THead';
import { TRow } from '@/components/common/TRow';
import { EmptyState } from '@/components/common/EmptyState';
import { BetStatusBadge } from './BetStatusBadge';

const COLS = 'minmax(0,1.5fr) minmax(0,1fr) 100px 100px 90px 130px';

function fmtMarket(bet: AdminPlayerBetDto): string {
  if (!bet.marketContext) return `Market #${bet.marketId}`;
  const { marketType, line } = bet.marketContext;
  return line !== null ? `${marketType} ${line / 10}` : marketType;
}

export function PlayerBetsTable({ bets }: Readonly<{ bets: AdminPlayerBetDto[] }>) {
  return (
    <Card className="mt-5 overflow-hidden">
      <CardHead
        title="Recent bets"
        count={bets.length}
        right={<span className="font-mono text-[9px] uppercase tracking-[0.12em] text-fg-meta">Last 25 · newest first</span>}
      />
      <THead cols={COLS}>
        <span>Match</span>
        <span>Market</span>
        <span className="text-right">Stake</span>
        <span className="text-right">Payout</span>
        <span>Status</span>
        <span className="text-right">Placed</span>
      </THead>

      {bets.length === 0 && (
        <EmptyState icon="chart" title="No bets recorded" hint="On-chain positions indexed for this wallet appear here." />
      )}
      {bets.map((bet) => (
        <TRow key={`${bet.contractAddress}-${bet.marketId}-${bet.placedAt}-${bet.outcome}`} cols={COLS}>
          <span className="min-w-0 truncate text-fg-strong">
            {bet.match ? `${bet.match.homeTeamName} vs ${bet.match.awayTeamName}` : bet.contractAddress}
          </span>
          <span className="font-mono min-w-0 truncate text-[11px] uppercase tracking-[0.08em] text-fg-meta">
            {fmtMarket(bet)}
          </span>
          <span className="text-right tabular-nums text-fg-strong">{fmtUsdcRaw(bet.stakeAmount)}</span>
          <span className="text-right tabular-nums text-positive">
            {bet.payoutAmount ? fmtUsdcRaw(bet.payoutAmount) : '—'}
          </span>
          <BetStatusBadge status={bet.status} />
          <span className="font-mono text-right text-[11px] tabular-nums text-fg-meta">
            {new Date(bet.placedAt).toLocaleString('en-GB', { dateStyle: 'short', timeStyle: 'short' })}
          </span>
        </TRow>
      ))}
    </Card>
  );
}
