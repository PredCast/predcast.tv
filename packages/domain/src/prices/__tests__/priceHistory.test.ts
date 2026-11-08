import { describe, expect, it } from 'vitest';
import { isPriceHistoryRange, sliceHistory, windowForRange, type PricePoint } from '../priceHistory';

const NOW = new Date('2026-11-08T20:00:00Z');
const MIN = 60_000;
const at = (minutesAgo: number, p: number): PricePoint => ({ t: NOW.getTime() - minutesAgo * MIN, p });

describe('windowForRange', () => {
    it('serves 1h and 24h from the 1-day series, 7d from the 7-day series', () => {
        expect(windowForRange('1h')).toBe('1d');
        expect(windowForRange('24h')).toBe('1d');
        expect(windowForRange('7d')).toBe('7d');
    });
});

describe('isPriceHistoryRange', () => {
    it('accepts only the supported ranges', () => {
        expect(isPriceHistoryRange('1h')).toBe(true);
        expect(isPriceHistoryRange('7d')).toBe(true);
        expect(isPriceHistoryRange('30d')).toBe(false);
        expect(isPriceHistoryRange('')).toBe(false);
    });
});

describe('sliceHistory', () => {
    const series = [at(1500, 1), at(90, 2), at(60, 3), at(30, 4), at(5, 5)];

    it('cuts the last hour out of a longer series', () => {
        expect(sliceHistory(series, '1h', NOW).map((p) => p.p)).toEqual([3, 4, 5]);
    });

    it('keeps the whole day for 24h', () => {
        expect(sliceHistory(series, '24h', NOW).map((p) => p.p)).toEqual([2, 3, 4, 5]);
    });

    it('drops points in the future and sorts by time', () => {
        const unordered = [at(5, 5), at(-10, 99), at(30, 4)];
        expect(sliceHistory(unordered, '1h', NOW).map((p) => p.p)).toEqual([4, 5]);
    });

    it('returns an empty array for an empty series', () => {
        expect(sliceHistory([], '7d', NOW)).toEqual([]);
    });
});
