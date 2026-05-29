import { describe, expect, it } from 'vitest';
import { selectionToBetLabel } from '../selectionToBetLabel';

const HOME = 'PSG';
const AWAY = 'Marseille';

describe('selectionToBetLabel — WINNER', () => {
    it.each([
        [0, { subType: 'home', display: 'PSG' }],
        [1, { subType: 'draw', display: 'Draw' }],
        [2, { subType: 'away', display: 'Marseille' }],
    ])('selection=%i maps to %o', (selection, expected) => {
        expect(selectionToBetLabel({ marketType: 'WINNER', selection, line: null, homeTeam: HOME, awayTeam: AWAY })).toEqual(expected);
    });
});

describe('selectionToBetLabel — HALFTIME', () => {
    it.each([
        [0, { subType: 'home', display: 'PSG' }],
        [1, { subType: 'draw', display: 'Draw' }],
        [2, { subType: 'away', display: 'Marseille' }],
    ])('selection=%i maps to %o', (selection, expected) => {
        expect(selectionToBetLabel({ marketType: 'HALFTIME', selection, line: null, homeTeam: HOME, awayTeam: AWAY })).toEqual(expected);
    });
});

describe('selectionToBetLabel — GOALS_TOTAL', () => {
    it('Under with line = 25 → "Under 2.5"', () => {
        expect(selectionToBetLabel({ marketType: 'GOALS_TOTAL', selection: 0, line: 25, homeTeam: HOME, awayTeam: AWAY }))
            .toEqual({ subType: 'under', display: 'Under 2.5' });
    });

    it('Over with line = 35 → "Over 3.5"', () => {
        expect(selectionToBetLabel({ marketType: 'GOALS_TOTAL', selection: 1, line: 35, homeTeam: HOME, awayTeam: AWAY }))
            .toEqual({ subType: 'over', display: 'Over 3.5' });
    });

    it('Under with line = null falls back to 2.5', () => {
        expect(selectionToBetLabel({ marketType: 'GOALS_TOTAL', selection: 0, line: null, homeTeam: HOME, awayTeam: AWAY }))
            .toEqual({ subType: 'under', display: 'Under 2.5' });
    });

    it('Under with line = 0 falls back to 2.5 (defensive)', () => {
        expect(selectionToBetLabel({ marketType: 'GOALS_TOTAL', selection: 0, line: 0, homeTeam: HOME, awayTeam: AWAY }))
            .toEqual({ subType: 'under', display: 'Under 2.5' });
    });

    it('selection=2 (out of range for GOALS_TOTAL)', () => {
        expect(selectionToBetLabel({ marketType: 'GOALS_TOTAL', selection: 2, line: 25, homeTeam: HOME, awayTeam: AWAY }))
            .toEqual({ subType: 'selection-2', display: 'Selection #2' });
    });
});

describe('selectionToBetLabel — BOTH_SCORE', () => {
    it('selection=0 → "No"', () => {
        expect(selectionToBetLabel({ marketType: 'BOTH_SCORE', selection: 0, line: null, homeTeam: HOME, awayTeam: AWAY }))
            .toEqual({ subType: 'btts_no', display: 'No' });
    });

    it('selection=1 → "Yes"', () => {
        expect(selectionToBetLabel({ marketType: 'BOTH_SCORE', selection: 1, line: null, homeTeam: HOME, awayTeam: AWAY }))
            .toEqual({ subType: 'btts_yes', display: 'Yes' });
    });
});

describe('selectionToBetLabel — DOUBLE_CHANCE', () => {
    it.each([
        // line=0 → 1X (Home or Draw)
        [0, 0, { subType: 'dc_1X_no',  display: 'PSG or Draw: No' }],
        [0, 1, { subType: 'dc_1X_yes', display: 'PSG or Draw: Yes' }],
        // line=1 → 12 (Home or Away)
        [1, 0, { subType: 'dc_12_no',  display: 'PSG or Marseille: No' }],
        [1, 1, { subType: 'dc_12_yes', display: 'PSG or Marseille: Yes' }],
        // line=2 → 2X (Draw or Away)
        [2, 0, { subType: 'dc_2X_no',  display: 'Draw or Marseille: No' }],
        [2, 1, { subType: 'dc_2X_yes', display: 'Draw or Marseille: Yes' }],
    ])('variant line=%i selection=%i → %o', (line, selection, expected) => {
        expect(selectionToBetLabel({ marketType: 'DOUBLE_CHANCE', selection, line, homeTeam: HOME, awayTeam: AWAY })).toEqual(expected);
    });

    it('unknown variant (line=99) renders a defensive label', () => {
        const out = selectionToBetLabel({ marketType: 'DOUBLE_CHANCE', selection: 1, line: 99, homeTeam: HOME, awayTeam: AWAY });
        expect(out.subType).toBe('dc_?_yes');
        expect(out.display).toBe('Double Chance: Yes');
    });

    it('selection=2 is out of range (DC is binary No/Yes)', () => {
        expect(selectionToBetLabel({ marketType: 'DOUBLE_CHANCE', selection: 2, line: 0, homeTeam: HOME, awayTeam: AWAY }))
            .toEqual({ subType: 'selection-2', display: 'Selection #2' });
    });
});

describe('selectionToBetLabel — subType collision check', () => {
    // The subType field is persisted in `predictions.predictionValue` and used
    // by analytics queries. Adding a new market must NEVER collide with
    // existing subTypes (would silently re-attribute historical rows).
    it('all known subTypes are unique across markets', () => {
        const variants = [
            ...[0, 1, 2].map(s => selectionToBetLabel({ marketType: 'WINNER',        selection: s, line: null, homeTeam: HOME, awayTeam: AWAY }).subType),
            ...[0, 1, 2].map(s => selectionToBetLabel({ marketType: 'HALFTIME',      selection: s, line: null, homeTeam: HOME, awayTeam: AWAY }).subType),
            ...[0, 1].map(s    => selectionToBetLabel({ marketType: 'GOALS_TOTAL',   selection: s, line: 25,   homeTeam: HOME, awayTeam: AWAY }).subType),
            ...[0, 1].map(s    => selectionToBetLabel({ marketType: 'BOTH_SCORE',    selection: s, line: null, homeTeam: HOME, awayTeam: AWAY }).subType),
            ...[0, 1, 2].flatMap(line =>
                [0, 1].map(s => selectionToBetLabel({ marketType: 'DOUBLE_CHANCE', selection: s, line, homeTeam: HOME, awayTeam: AWAY }).subType),
            ),
        ];
        // WINNER and HALFTIME intentionally share `home`/`draw`/`away` subTypes
        // (the market field discriminates them in queries). DOUBLE_CHANCE must
        // never collide with anything — assert all DC subTypes are unique AND
        // distinct from non-DC ones.
        const dcSubtypes = variants.filter(s => s.startsWith('dc_'));
        const nonDcSubtypes = variants.filter(s => !s.startsWith('dc_'));
        expect(new Set(dcSubtypes).size).toBe(dcSubtypes.length);
        for (const dc of dcSubtypes) {
            expect(nonDcSubtypes).not.toContain(dc);
        }
    });
});

describe('selectionToBetLabel — FIRST_SCORER', () => {
    it.each([
        [0, { subType: 'home', display: 'PSG' }],
        [1, { subType: 'away', display: 'Marseille' }],
        [2, { subType: 'none', display: 'No goal' }],
    ])('selection=%i maps to %o', (selection, expected) => {
        expect(selectionToBetLabel({ marketType: 'FIRST_SCORER', selection, line: null, homeTeam: HOME, awayTeam: AWAY })).toEqual(expected);
    });
});

describe('selectionToBetLabel — fallbacks', () => {
    it('marketType=null falls back to WINNER', () => {
        expect(selectionToBetLabel({ marketType: null, selection: 0, line: null, homeTeam: HOME, awayTeam: AWAY }))
            .toEqual({ subType: 'home', display: 'PSG' });
    });

    it('marketType="UNKNOWN_MARKET" falls back to WINNER', () => {
        expect(selectionToBetLabel({ marketType: 'UNKNOWN_MARKET', selection: 1, line: null, homeTeam: HOME, awayTeam: AWAY }))
            .toEqual({ subType: 'draw', display: 'Draw' });
    });

    it('marketType lowercase is normalised', () => {
        expect(selectionToBetLabel({ marketType: 'goals_total', selection: 0, line: 25, homeTeam: HOME, awayTeam: AWAY }))
            .toEqual({ subType: 'under', display: 'Under 2.5' });
    });

    it('selection out of range on WINNER', () => {
        expect(selectionToBetLabel({ marketType: 'WINNER', selection: 7, line: null, homeTeam: HOME, awayTeam: AWAY }))
            .toEqual({ subType: 'selection-7', display: 'Selection #7' });
    });
});
