'use client';

import type { DashboardLiveMatchDto } from '@chiliztv/shared';

import { compactCount, headlineMarkets, liveStatusLabel } from '@/lib/dashboard/liveMarkets';
import { fmtUsdcRaw } from '@/lib/format/amounts';
import { Icon } from '@/components/common/Icon';
import { TeamLabel } from '@/components/directory/TeamLabel';

import { LiveMatchActions } from './LiveMatchActions';
import { MarketChip } from './MarketChip';

export function LiveMatchCard({ match, feedStale }: Readonly<{ match: DashboardLiveMatchDto; feedStale: string | null }>) {
  const halftime = match.status === 'HT';
  const homeLead = (match.score?.home ?? 0) >= (match.score?.away ?? 0);
  const awayLead = (match.score?.away ?? 0) >= (match.score?.home ?? 0);

  return (
    <article className="flex flex-col rounded-card border border-line-subtle bg-card">
      <header className="flex items-center gap-2 px-4 pt-3.5 font-mono text-[10px] uppercase tracking-[0.16em]">
        <span className={`font-bold ${halftime ? 'text-warning' : 'text-accent-text'}`}>{liveStatusLabel(match)}</span>
        <span className="text-fg-meta">· {match.league}</span>
        {!match.published && <span className="text-warning">· hidden</span>}
        <span className="ml-auto inline-flex items-center gap-1.5 text-fg-meta" title={`${match.streams.count} streams · ${match.streams.viewers} viewers`}>
          <Icon n="video" s={13} />
          {match.streams.count} · {compactCount(match.streams.viewers)}
        </span>
      </header>
      <div className="flex flex-col gap-1.5 px-4 py-3">
        {[
          { team: match.home, score: match.score?.home, lead: homeLead },
          { team: match.away, score: match.score?.away, lead: awayLead },
        ].map(({ team, score, lead }) => (
          <div key={team.name} className="flex items-center justify-between gap-3">
            <span className={`min-w-0 text-[15px] font-medium ${lead ? 'text-white' : 'text-fg-body'}`}>
              <TeamLabel name={team.name} logo={team.logo} />
            </span>
            <span className={`font-display text-[30px] font-extrabold leading-[30px] ${lead ? 'text-white' : 'text-fg-body'}`}>{score ?? '–'}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-3 border-t border-line-subtle px-4 py-2.5">
        {match.pool && (
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-fg-meta">
            Pool <span className="text-[12px] text-white">{fmtUsdcRaw(match.pool.totalStaked)}</span> USDC · Bets{' '}
            <span className="text-[12px] text-white">{match.pool.betCount}</span>
          </span>
        )}
        <span className="ml-auto flex flex-wrap gap-1.5">
          {headlineMarkets(match).map((m) => (
            <MarketChip key={m.label} label={m.label} state={m.state} />
          ))}
        </span>
      </div>
      <footer className="mt-auto flex flex-wrap items-center gap-2 border-t border-line-subtle px-4 py-2.5">
        <LiveMatchActions match={match} />
        <span className={`ml-auto font-mono text-[10px] uppercase tracking-[0.14em] ${feedStale ? 'text-warning' : 'text-fg-meta'}`}>
          {feedStale ?? 'Feed live'}
        </span>
      </footer>
    </article>
  );
}
