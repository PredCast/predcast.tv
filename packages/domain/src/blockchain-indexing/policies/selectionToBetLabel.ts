/**
 * Maps an on-chain `(marketType, selection, line)` triplet to a stable subType
 * (for `predictions.predictionValue` mirrors) and a human-readable label
 * (for chat messages, dashboard rows). Pure — depends only on inputs.
 *
 * Selection conventions match the on-chain resolver:
 *   WINNER / HALFTIME : 0=Home, 1=Draw, 2=Away
 *   GOALS_TOTAL       : 0=Under, 1=Over     (line = tenths of goals — 25 → 2.5)
 *   BOTH_SCORE        : 0=No,    1=Yes
 *   FIRST_SCORER      : 0=Home,  1=Away,    2=None
 *
 * When `marketType` is null/unknown, falls back to WINNER semantics — preserves
 * the legacy behaviour for events indexed before `market_events.payload.line`
 * was enriched.
 */
export interface BetLabelArgs {
    readonly marketType: string | null;
    readonly selection: number;
    /** Tenths of goals — 25 → 2.5. Null when not yet backfilled. */
    readonly line: number | null;
    readonly homeTeam: string;
    readonly awayTeam: string;
}

export interface BetLabel {
    /** Stable enum-ish key, safe to persist in `predictions.predictionValue`. */
    readonly subType: string;
    /** Human label for chat messages, dashboard rows, etc. */
    readonly display: string;
}

const DEFAULT_GOALS_LINE_TENTHS = 25;

export function selectionToBetLabel(args: BetLabelArgs): BetLabel {
    const market = (args.marketType ?? 'WINNER').toUpperCase();
    const sel = args.selection;

    if (market === 'WINNER' || market === 'HALFTIME') {
        if (sel === 0) return { subType: 'home', display: args.homeTeam };
        if (sel === 1) return { subType: 'draw', display: 'Draw' };
        if (sel === 2) return { subType: 'away', display: args.awayTeam };
        return outOfRange(sel);
    }

    if (market === 'GOALS_TOTAL') {
        const lineTenths = args.line && args.line > 0 ? args.line : DEFAULT_GOALS_LINE_TENTHS;
        const lineLabel = (lineTenths / 10).toFixed(1);
        if (sel === 0) return { subType: 'under', display: `Under ${lineLabel}` };
        if (sel === 1) return { subType: 'over',  display: `Over ${lineLabel}` };
        return outOfRange(sel);
    }

    if (market === 'BOTH_SCORE') {
        if (sel === 0) return { subType: 'btts_no',  display: 'No' };
        if (sel === 1) return { subType: 'btts_yes', display: 'Yes' };
        return outOfRange(sel);
    }

    if (market === 'FIRST_SCORER') {
        if (sel === 0) return { subType: 'home', display: args.homeTeam };
        if (sel === 1) return { subType: 'away', display: args.awayTeam };
        if (sel === 2) return { subType: 'none', display: 'No goal' };
        return outOfRange(sel);
    }

    // Unknown market type — fall back to WINNER semantics so the chat label
    // is at least somewhat informative.
    return selectionToBetLabel({ ...args, marketType: 'WINNER' });
}

function outOfRange(selection: number): BetLabel {
    return { subType: `selection-${selection}`, display: `Selection #${selection}` };
}
