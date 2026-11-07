'use client';

import type { AdminMatchRowDto } from '@chiliztv/shared';

import { fmtUsdcRaw } from '@/lib/format/amounts';
import { publicationOf } from '@/lib/markets/labels';
import type { MarketsTab } from '@/lib/markets/listParams';
import { Card } from '@/components/common/Card';
import { CopyButton } from '@/components/common/CopyButton';
import { EmptyState } from '@/components/common/EmptyState';
import { THead } from '@/components/common/THead';
import { TRow } from '@/components/common/TRow';
import { PublicationBadge } from '@/components/markets/PublicationBadge';
import { WalletLabel } from '@/components/moderation/WalletLabel';
import { MatchRowActions } from './MatchRowActions';
import { MatchStatusBadge } from './MatchStatusBadge';
import { TeamLabel } from './TeamLabel';

const COLS = 'minmax(0,1.9fr) minmax(0,0.9fr) 110px 76px 170px 52px 86px minmax(190px,1.1fr)';
const LIVE = new Set(['1H', 'HT', '2H', 'ET', 'BT', 'P', 'LIVE', 'SUSP', 'INT']);

interface MatchesTableProps {
  readonly rows: ReadonlyArray<AdminMatchRowDto>;
  readonly isLoading: boolean;
  readonly tab: MarketsTab;
  readonly onDeploy: (match: AdminMatchRowDto) => void;
  readonly onUnpublish: (match: AdminMatchRowDto) => void;
}

export function MatchesTable({ rows, isLoading, tab, onDeploy, onUnpublish }: Readonly<MatchesTableProps>) {
  return (
    <Card className="mt-4 overflow-hidden">
      <THead cols={COLS}>
        <span>Match</span>
        <span>League</span>
        <span>Kickoff</span>
        <span>Status</span>
        <span>Contract</span>
        <span className="text-right">Bets</span>
        <span className="text-right">Volume</span>
        <span className="text-right">Actions</span>
      </THead>

      {isLoading && rows.length === 0 && (
        <p className="font-mono-ctv px-4 py-6 text-[11px] uppercase tracking-[0.14em] text-white/35">Loading…</p>
      )}
      {!isLoading && rows.length === 0 && (
        <EmptyState
          icon="activity"
          title={tab === 'to_deploy' ? 'No match to deploy' : 'No deployed match'}
          hint={tab === 'to_deploy' ? 'Synced upcoming fixtures without a contract show up here.' : 'Try another filter or date range.'}
        />
      )}
      {rows.map((match) => (
        <TRow key={match.apiFootballId} cols={COLS} accent={LIVE.has(match.status) ? '#E8001D' : undefined}>
          <span className="flex min-w-0 items-center gap-1.5">
            <TeamLabel name={match.homeTeamName} logo={match.homeTeamLogo} />
            <span className="shrink-0 text-white/30">vs</span>
            <TeamLabel name={match.awayTeamName} logo={match.awayTeamLogo} />
          </span>
          <span className="font-mono-ctv min-w-0 truncate text-[10px] uppercase tracking-[0.08em] text-white/45">{match.leagueName}</span>
          <span className="font-mono-ctv text-[11px] tabular-nums text-white/60">
            {new Date(match.matchDate).toLocaleString('en-GB', { dateStyle: 'short', timeStyle: 'short' })}
          </span>
          <MatchStatusBadge status={match.status} />
          <span className="flex min-w-0 flex-col gap-1">
            <PublicationBadge publication={publicationOf(match)} />
            {match.bettingContractAddress && (
              <span className="flex items-center gap-1">
                <WalletLabel wallet={match.bettingContractAddress} />
                <CopyButton value={match.bettingContractAddress} label="Copy contract address" />
              </span>
            )}
          </span>
          <span className="text-right tabular-nums text-white/85">{match.betCount || '—'}</span>
          <span className="text-right tabular-nums text-white/85">{match.totalStaked === '0' ? '—' : fmtUsdcRaw(match.totalStaked)}</span>
          <span className="flex justify-end">
            <MatchRowActions match={match} onDeploy={onDeploy} onUnpublish={onUnpublish} />
          </span>
        </TRow>
      ))}
    </Card>
  );
}
