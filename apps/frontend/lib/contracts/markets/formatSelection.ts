import { getMarketSpec } from './marketTypes';

/** Human-readable label for one bet's `selection` given its market context. */
export function fmtSelectionByMarket(
    selection: number,
    marketTypeHash: string | undefined,
    line: number,
    homeTeamName?: string,
    awayTeamName?: string,
): string {
    const spec = getMarketSpec(marketTypeHash);
    if (!spec) return `Selection #${selection}`;

    const outcomes = spec.getOutcomes(line, homeTeamName, awayTeamName);
    const match = outcomes.find((o) => o.selection === selection);
    if (!match) {
        // Out-of-range selection — happens for FIRST_SCORER bets posted with
        // player IDs > 2 before the simplified UX (D2). Surface the raw index.
        return `Selection #${selection}`;
    }
    return match.label;
}

/**
 * Short market tag per spec key. Several markets share identical outcome
 * labels (WINNER / HALFTIME / FULL_TIME_WINNER are all team names, BTTS and
 * DOUBLE_CHANCE are Yes/No) — bet rows must carry the tag to stay
 * distinguishable.
 */
const MARKET_TAGS: Readonly<Record<string, string>> = {
    winner: "90'",
    halftime: 'Half-time',
    fulltimewinner: 'Final (AET/PEN)',
    goalstotal: 'Goals',
    bothscore: 'BTTS',
    doublechance: 'Double chance',
    firstscorer: 'First goal',
    goalsexact: 'Exact goals',
    correctscore: 'Correct score',
    'bb-winner': 'Winner',
    totalpoints: 'Points',
    spread: 'Spread',
};

/**
 * Selection label qualified with its market tag — the format used on bet
 * rows (dashboard + live page) where bets from different markets on the
 * same match sit side by side: "Mexico · Half-time" vs "South Africa · 90'".
 * Falls back to the bare selection label when the market is unknown.
 */
export function fmtSelectionWithMarket(
    selection: number,
    marketTypeHash: string | undefined,
    line: number,
    homeTeamName?: string,
    awayTeamName?: string,
): string {
    const base = fmtSelectionByMarket(selection, marketTypeHash, line, homeTeamName, awayTeamName);
    const spec = getMarketSpec(marketTypeHash);
    if (!spec) return base;
    const tag = MARKET_TAGS[spec.key] ?? spec.label;
    return `${base} · ${tag}`;
}
