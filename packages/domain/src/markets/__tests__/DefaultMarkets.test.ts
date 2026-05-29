import { describe, it, expect } from 'vitest';
import {
    DEFAULT_FOOTBALL_MARKETS,
    HALFTIME_MARKET_ID,
    SUPPORTED_MARKET_TYPE_NAMES,
    findDefaultMarketSpec,
    type DefaultMarketTypeName,
} from '../DefaultMarkets';

describe('DEFAULT_FOOTBALL_MARKETS — invariants', () => {
    it('seeds exactly 8 markets (6 product types, 2 GOALS_TOTAL lines, 3 DOUBLE_CHANCE variants)', () => {
        expect(DEFAULT_FOOTBALL_MARKETS).toHaveLength(8);
    });

    it('marketIds are sequential 0..7 (must match addMarketsBatch index)', () => {
        DEFAULT_FOOTBALL_MARKETS.forEach((spec, i) => {
            expect(spec.marketId).toBe(i);
        });
    });

    it('exposes exactly the 5 product type names allowed', () => {
        const expected: Set<DefaultMarketTypeName> = new Set([
            'WINNER',
            'HALFTIME',
            'GOALS_TOTAL',
            'BOTH_SCORE',
            'DOUBLE_CHANCE',
        ]);
        expect(SUPPORTED_MARKET_TYPE_NAMES).toEqual(expected);
    });

    it('GOALS_TOTAL has exactly 2 entries with lines 15 and 25', () => {
        const goalsTotalLines = DEFAULT_FOOTBALL_MARKETS
            .filter(s => s.marketTypeName === 'GOALS_TOTAL')
            .map(s => s.line)
            .sort((a, b) => a - b);
        expect(goalsTotalLines).toEqual([15, 25]);
    });

    it('DOUBLE_CHANCE has exactly 3 entries with variant lines 0, 1, 2', () => {
        const dcLines = DEFAULT_FOOTBALL_MARKETS
            .filter(s => s.marketTypeName === 'DOUBLE_CHANCE')
            .map(s => s.line)
            .sort((a, b) => a - b);
        expect(dcLines).toEqual([0, 1, 2]);
    });

    it('binary markets (DC, BTTS, O/U) have maxOutcome === 2', () => {
        const binary = DEFAULT_FOOTBALL_MARKETS.filter(s =>
            s.marketTypeName === 'DOUBLE_CHANCE'
            || s.marketTypeName === 'BOTH_SCORE'
            || s.marketTypeName === 'GOALS_TOTAL',
        );
        binary.forEach(s => expect(s.maxOutcome).toBe(2));
    });

    it('1X2-shaped markets (WINNER, HALFTIME) have maxOutcome === 3', () => {
        const tripoles = DEFAULT_FOOTBALL_MARKETS.filter(s =>
            s.marketTypeName === 'WINNER' || s.marketTypeName === 'HALFTIME',
        );
        tripoles.forEach(s => expect(s.maxOutcome).toBe(3));
    });

    it('HALFTIME_MARKET_ID points to the HALFTIME market', () => {
        const spec = DEFAULT_FOOTBALL_MARKETS[HALFTIME_MARKET_ID];
        expect(spec).toBeDefined();
        expect(spec?.marketTypeName).toBe('HALFTIME');
    });

    it('displayLabels are non-empty and unique', () => {
        const labels = DEFAULT_FOOTBALL_MARKETS.map(s => s.displayLabel);
        labels.forEach(l => expect(l.length).toBeGreaterThan(0));
        expect(new Set(labels).size).toBe(labels.length);
    });
});

describe('findDefaultMarketSpec', () => {
    it('returns the matching spec when name + line both hit', () => {
        const spec = findDefaultMarketSpec('GOALS_TOTAL', 25);
        expect(spec?.marketId).toBe(3);
        expect(spec?.displayLabel).toBe('O/U 2.5 Goals');
    });

    it('distinguishes GOALS_TOTAL by line', () => {
        expect(findDefaultMarketSpec('GOALS_TOTAL', 15)?.marketId).toBe(2);
        expect(findDefaultMarketSpec('GOALS_TOTAL', 25)?.marketId).toBe(3);
    });

    it('distinguishes DOUBLE_CHANCE variants by line', () => {
        expect(findDefaultMarketSpec('DOUBLE_CHANCE', 0)?.marketId).toBe(5);
        expect(findDefaultMarketSpec('DOUBLE_CHANCE', 1)?.marketId).toBe(6);
        expect(findDefaultMarketSpec('DOUBLE_CHANCE', 2)?.marketId).toBe(7);
    });

    it('returns null for unknown name (legacy market types we no longer seed)', () => {
        expect(findDefaultMarketSpec('FIRST_SCORER', 0)).toBeNull();
        expect(findDefaultMarketSpec('CORRECT_SCORE', 0)).toBeNull();
        expect(findDefaultMarketSpec('GOALS_EXACT', 0)).toBeNull();
    });

    it('returns null for known name but unknown line (e.g. GOALS_TOTAL line=35 not in manifest)', () => {
        expect(findDefaultMarketSpec('GOALS_TOTAL', 35)).toBeNull();
        expect(findDefaultMarketSpec('DOUBLE_CHANCE', 3)).toBeNull();
    });
});
