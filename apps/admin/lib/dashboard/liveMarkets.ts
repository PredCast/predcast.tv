import type { DashboardLiveMatchDto, MarketStateDto } from '@chiliztv/shared';

/** The three markets the live card shows, in this order (design: 1X2, O/U 2.5, BTTS). */
const HEADLINE: ReadonlyArray<{ type: string; line: number; label: string }> = [
  { type: 'WINNER', line: 0, label: '1X2' },
  { type: 'GOALS_TOTAL', line: 25, label: 'O/U 2.5' },
  { type: 'BOTH_SCORE', line: 0, label: 'BTTS' },
];

export function headlineMarkets(match: DashboardLiveMatchDto): Array<{ label: string; state: MarketStateDto }> {
  return HEADLINE.flatMap((h) => {
    const m = match.markets.find((x) => x.type === h.type && x.line === h.line);
    return m ? [{ label: h.label, state: m.state }] : [];
  });
}

export const hasOpenMarket = (match: DashboardLiveMatchDto) => match.markets.some((m) => m.state === 'open');

const IN_PLAY: Record<string, string> = { '1H': 'Live', '2H': 'Live', ET: 'Extra time', P: 'Penalties', BT: 'Break', LIVE: 'Live', SUSP: 'Suspended', INT: 'Interrupted' };

/** "LIVE · 67′" / "HALF-TIME". */
export function liveStatusLabel(match: DashboardLiveMatchDto): string {
  if (match.status === 'HT') return 'Half-time';
  const word = IN_PLAY[match.status] ?? match.status;
  return match.elapsed != null && word !== 'Suspended' && word !== 'Interrupted' ? `${word} · ${match.elapsed}′` : word;
}

export const compactCount = (n: number) => (n >= 1000 ? `${(n / 1000).toFixed(1)}K` : String(n));
