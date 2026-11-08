import type { DashboardKpisDto, KpiValueDto } from '@chiliztv/shared';

import type { AdminRole } from '@/lib/roles';
import { fmtUsdcCompact } from '@/lib/format/amounts';

export type DeltaTone = 'good' | 'bad' | 'flat';

export interface KpiTile {
  readonly key: string;
  readonly label: string;
  readonly value: string;
  readonly unit?: string;
  readonly delta?: { readonly dir: 'up' | 'down' | 'flat'; readonly text: string; readonly tone: DeltaTone };
  readonly caption?: string;
  readonly hint?: string;
  readonly series?: ReadonlyArray<number>;
  readonly live?: boolean;
}

const fmtCount = (n: number) => n.toLocaleString('en-US');
const fmtCompactCount = (n: number) => (n >= 1000 ? `${(n / 1000).toFixed(1)}K` : String(n));

/** Delta of a KPI: % when the previous period is non-zero, absolute otherwise. Higher is good unless stated. */
function delta(kpi: KpiValueDto, opts: { higherIsGood?: boolean; usdc?: boolean } = {}): KpiTile['delta'] {
  const { dir, absolute, percent } = kpi.trend;
  const higherIsGood = opts.higherIsGood ?? true;
  const tone: DeltaTone = dir === 'flat' ? 'flat' : (dir === 'up') === higherIsGood ? 'good' : 'bad';
  const text = percent !== null ? `${percent}%` : opts.usdc ? fmtUsdcCompact(String(absolute)) : fmtCount(absolute);
  return { dir, text, tone };
}

const usdcSeries = (kpi: KpiValueDto) => kpi.series?.map((v) => Number(v) / 1e6);
const countSeries = (kpi: KpiValueDto) => kpi.series?.map(Number);

/** Builds every tile the payload allows; the role then picks and orders them (design variants). */
function allTiles(k: DashboardKpisDto): Record<string, KpiTile | null> {
  return {
    live: { key: 'live', label: 'Live matches', value: String(k.liveMatches), caption: 'in play now', live: true },
    streams: {
      key: 'streams',
      label: 'Live streams',
      value: String(k.liveStreams.count),
      unit: k.liveStreams.count > 0 ? `${fmtCompactCount(k.liveStreams.viewers)} viewers` : undefined,
      caption: 'broadcasting now',
      live: true,
    },
    events: k.deployments7d && {
      key: 'events', label: 'Events · 7d', value: k.deployments7d.current, unit: 'deployed',
      delta: delta(k.deployments7d), caption: 'vs prev 7d', series: countSeries(k.deployments7d),
    },
    volume: k.volume24h && {
      key: 'volume', label: 'Volume 24h', value: fmtUsdcCompact(k.volume24h.current), unit: 'USDC',
      delta: delta(k.volume24h, { usdc: true }), caption: 'vs prev 24h', series: usdcSeries(k.volume24h),
    },
    fees: k.feesSettled24h && {
      key: 'fees', label: 'Fees settled · 24h (gross)', value: fmtUsdcCompact(k.feesSettled24h.current), unit: 'USDC',
      delta: delta(k.feesSettled24h, { usdc: true }), caption: 'vs prev 24h', series: usdcSeries(k.feesSettled24h),
      hint: 'Fees taken when markets resolve, not on volume staked. Includes the 1% leaderboard share.',
    },
    bettors: k.bettors24h && {
      key: 'bettors', label: 'Active bettors 24h', value: fmtCount(Number(k.bettors24h.current)),
      delta: delta(k.bettors24h), caption: 'vs prev 24h', series: countSeries(k.bettors24h),
    },
    avgPool: k.avgPool30d && {
      key: 'avgPool', label: 'Avg pool / event', value: fmtUsdcCompact(k.avgPool30d.current), unit: 'USDC',
      delta: delta(k.avgPool30d, { usdc: true }), caption: `last 30d · ${k.avgPool30d.events} events`,
    },
    reports: k.openReports && {
      key: 'reports', label: 'Open reports', value: k.openReports.current,
      unit: k.openReports.highSeverity > 0 ? `${k.openReports.highSeverity} S4+` : undefined,
      delta: delta(k.openReports, { higherIsGood: false }), caption: 'vs 24h ago', series: countSeries(k.openReports),
    },
    bans: k.activeBans && {
      key: 'bans', label: 'Active bans', value: k.activeBans.current,
      unit: k.activeBans.permanent > 0 ? `${k.activeBans.permanent} permanent` : undefined,
      delta: delta(k.activeBans, { higherIsGood: false }), caption: 'vs 24h ago', series: countSeries(k.activeBans),
    },
  };
}

const ORDER: Record<'admin' | 'moderator' | 'finance', ReadonlyArray<string>> = {
  admin: ['live', 'events', 'volume', 'fees', 'bettors', 'reports'],
  moderator: ['live', 'streams', 'reports', 'bans'],
  finance: ['live', 'events', 'volume', 'fees', 'bettors', 'avgPool'],
};

export function kpiPersona(role: AdminRole): 'admin' | 'moderator' | 'finance' {
  return role === 'moderator' || role === 'finance' ? role : 'admin';
}

export function kpiTiles(k: DashboardKpisDto, role: AdminRole): KpiTile[] {
  const tiles = allTiles(k);
  return ORDER[kpiPersona(role)].map((key) => tiles[key]).filter((t): t is KpiTile => !!t);
}

/** Tile labels shown as loading / error placeholders before the payload is known. */
export function kpiLabels(role: AdminRole): string[] {
  const labels: Record<string, string> = {
    live: 'Live matches', streams: 'Live streams', events: 'Events · 7d', volume: 'Volume 24h',
    fees: 'Fees settled · 24h (gross)', bettors: 'Active bettors 24h', avgPool: 'Avg pool / event',
    reports: 'Open reports', bans: 'Active bans',
  };
  return ORDER[kpiPersona(role)].map((key) => labels[key]);
}
