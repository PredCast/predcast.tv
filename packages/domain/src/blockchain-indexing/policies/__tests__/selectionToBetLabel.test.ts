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
