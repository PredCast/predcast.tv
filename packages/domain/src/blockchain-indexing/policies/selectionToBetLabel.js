"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectionToBetLabel = selectionToBetLabel;
const DEFAULT_GOALS_LINE_TENTHS = 25;
function selectionToBetLabel(args) {
    const market = (args.marketType ?? 'WINNER').toUpperCase();
    const sel = args.selection;
    if (market === 'WINNER' || market === 'HALFTIME') {
        if (sel === 0)
            return { subType: 'home', display: args.homeTeam };
        if (sel === 1)
            return { subType: 'draw', display: 'Draw' };
        if (sel === 2)
            return { subType: 'away', display: args.awayTeam };
        return outOfRange(sel);
    }
    if (market === 'GOALS_TOTAL') {
        const lineTenths = args.line && args.line > 0 ? args.line : DEFAULT_GOALS_LINE_TENTHS;
        const lineLabel = (lineTenths / 10).toFixed(1);
        if (sel === 0)
            return { subType: 'under', display: `Under ${lineLabel}` };
        if (sel === 1)
            return { subType: 'over', display: `Over ${lineLabel}` };
        return outOfRange(sel);
    }
    if (market === 'BOTH_SCORE') {
        if (sel === 0)
            return { subType: 'btts_no', display: 'No' };
        if (sel === 1)
            return { subType: 'btts_yes', display: 'Yes' };
        return outOfRange(sel);
    }
    if (market === 'FIRST_SCORER') {
        if (sel === 0)
            return { subType: 'home', display: args.homeTeam };
        if (sel === 1)
            return { subType: 'away', display: args.awayTeam };
        if (sel === 2)
            return { subType: 'none', display: 'No goal' };
        return outOfRange(sel);
    }
    // Unknown market type — fall back to WINNER semantics so the chat label
    // is at least somewhat informative.
    return selectionToBetLabel({ ...args, marketType: 'WINNER' });
}
function outOfRange(selection) {
    return { subType: `selection-${selection}`, display: `Selection #${selection}` };
}
