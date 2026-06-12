'use client';

import { useAdminMatches } from '@/hooks/api/useAdminMatches';
import { fmtUsdcRaw } from '@/lib/format/amounts';
import { CopyButton } from '@/components/common/CopyButton';
import { MatchStatusBadge } from './MatchStatusBadge';
import { MatchRowActions } from './MatchRowActions';
import { TeamLabel } from './TeamLabel';

const COLS = 'minmax(0,1.9fr) minmax(0,0.9fr) 60px 80px 130px 60px 110px 110px 130px';

export function MatchesTable() {
  const { data, isLoading } = useAdminMatches();

  return (
    <div className="mt-5">
      <div className="rounded-lg border border-[#1E1E1E] bg-[#111]">
        <div
          className="font-mono-ctv grid gap-3 border-b border-[#1E1E1E] px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white/45"
          style={{ gridTemplateColumns: COLS }}
        >
          <span>Match</span>
          <span>League</span>
          <span>Score</span>
          <span>Status</span>
          <span>Contract</span>
          <span className="text-right">Bets</span>
          <span className="text-right">Volume</span>
          <span className="text-right">Kickoff</span>
          <span className="text-right">Actions</span>
        </div>

        {isLoading && (
          <p className="font-mono-ctv px-4 py-6 text-[11px] uppercase tracking-[0.14em] text-white/35">Loading…</p>
        )}
        {!isLoading && (data?.length ?? 0) === 0 && (
          <p className="font-mono-ctv px-4 py-6 text-[11px] uppercase tracking-[0.14em] text-white/35">
            No matches synced.
          </p>
        )}
        {data?.map((match) => (
          <div
            key={match.id}
            className="grid items-center gap-3 border-b border-[#1A1A1A] px-4 py-3 text-[13px] last:border-b-0"
            style={{ gridTemplateColumns: COLS }}
          >
            <span className="flex min-w-0 items-center gap-1.5 truncate text-white/85">
              <TeamLabel name={match.homeTeamName} logo={match.homeTeamLogo} />
              <span className="text-white/35">vs</span>
              <TeamLabel name={match.awayTeamName} logo={match.awayTeamLogo} />
            </span>
            <span className="min-w-0 truncate text-white/55">{match.leagueName}</span>
            <span className="tabular-nums text-white/85">
              {match.score ? `${match.score.home}–${match.score.away}` : '—'}
            </span>
            <MatchStatusBadge status={match.status} />
            {match.bettingContractAddress ? (
              <span className="flex items-center gap-1">
                <span
                  className="font-mono-ctv text-[11px] tracking-[0.04em] text-white/70"
                  title={match.bettingContractAddress}
                >
                  {match.bettingContractAddress.slice(0, 6)}…{match.bettingContractAddress.slice(-4)}
                </span>
                <CopyButton value={match.bettingContractAddress} label="Copy contract address" />
              </span>
            ) : (
              <span className="font-mono-ctv text-[10px] font-bold uppercase tracking-[0.12em] text-[#E8001D]">
                Missing
              </span>
            )}
            <span className="text-right tabular-nums text-white/85">{match.betCount}</span>
            <span className="text-right tabular-nums text-white/85">{fmtUsdcRaw(match.totalStaked)}</span>
            <span className="font-mono-ctv text-right text-[11px] tabular-nums text-white/55">
              {new Date(match.matchDate).toLocaleString('en-GB', { dateStyle: 'short', timeStyle: 'short' })}
            </span>
            <span className="text-right">
              <MatchRowActions match={match} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
