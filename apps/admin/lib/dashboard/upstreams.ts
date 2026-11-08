import type { DashboardHealthDto } from '@chiliztv/shared';

import type { BadgeTone } from '@/lib/ui/badgeTone';
import { fmtAgo } from '@/lib/ui/time';

export interface UpstreamTileData {
  readonly name: string;
  readonly state: string;
  readonly tone: BadgeTone;
  readonly usedPct: number | null;
  readonly detail: string;
}

const fmt = (n: number) => n.toLocaleString('en-US');

export function upstreamTiles(health: DashboardHealthDto, now: Date | null): UpstreamTileData[] {
  const af = health.upstreams.apiFootball;
  const cg = health.upstreams.coingecko;
  const afPct = af.usedToday !== null && af.dailyLimit ? (af.usedToday / af.dailyLimit) * 100 : null;
  const cgPct = cg.usedThisMonth !== null ? (cg.usedThisMonth / cg.monthlyBudget) * 100 : null;
  const lastOk = af.lastSuccessAt && now ? `last sync ${fmtAgo(new Date(af.lastSuccessAt), now)}` : 'no sync yet';
  const afQuota = af.usedToday === null ? 'quota unknown' : af.dailyLimit ? `${fmt(af.usedToday)} / ${fmt(af.dailyLimit)} today` : `${fmt(af.usedToday)} calls today`;
  return [
    {
      name: 'API-Football',
      state: af.state === 'down' ? '✕ Down' : af.state === 'ok' ? '✓ OK' : 'Unknown',
      tone: af.state === 'down' ? 'critical' : af.state === 'ok' ? 'positive' : 'muted',
      usedPct: afPct,
      detail: af.state === 'down' ? `${af.consecutiveFailures} failed runs · ${lastOk}` : `${lastOk} · ${afQuota}`,
    },
    {
      name: 'CoinGecko',
      state: cgPct === null ? 'Unknown' : `${cgPct >= 80 ? '▲' : '✓'} ${Math.round(cgPct)}% budget`,
      tone: cg.state === 'exhausted' ? 'critical' : cg.state === 'warning' ? 'warning' : cg.state === 'ok' ? 'positive' : 'muted',
      usedPct: cgPct,
      detail: cg.usedThisMonth === null ? 'usage unknown' : `${fmt(cg.usedThisMonth)} / ${fmt(cg.monthlyBudget)} calls this month`,
    },
  ];
}
