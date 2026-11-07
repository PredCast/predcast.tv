import { describe, expect, it } from 'vitest';

import { candleTimeFor, toCandles } from '../candles';

const pts = (pairs: ReadonlyArray<[number, number]>) => pairs.map(([t, p]) => ({ t, p }));

describe('toCandles', () => {
    it('opens the first candle on its first sample', () => {
        expect(toCandles(pts([[0, 10], [3, 12], [6, 9], [9, 11]]), 10)).toEqual([{ t: 0, o: 10, h: 12, l: 9, c: 11 }]);
    });

    it('opens each next candle on the previous close and widens its range to that open', () => {
        const candles = toCandles(pts([[0, 10], [5, 11], [10, 13], [15, 14]]), 10);
        expect(candles[1]).toEqual({ t: 10, o: 11, h: 14, l: 11, c: 14 });
    });

    it('aligns buckets on multiples of the bucket size and skips empty ones', () => {
        const candles = toCandles(pts([[7, 1], [12, 2], [41, 3]]), 10);
        expect(candles.map((c) => c.t)).toEqual([0, 10, 40]);
        expect(candles[2].o).toBe(2);
    });

    it('is empty for no samples and rejects a non-positive bucket', () => {
        expect(toCandles([], 10)).toEqual([]);
        expect(() => toCandles(pts([[0, 1]]), 0)).toThrow(RangeError);
    });
});

describe('candleTimeFor', () => {
    const candles = toCandles(pts([[0, 1], [10, 2], [40, 3]]), 10);

    it('returns the start of the candle holding the event', () => {
        expect(candleTimeFor(candles, 10, 14)).toBe(10);
        expect(candleTimeFor(candles, 10, 40)).toBe(40);
    });

    it('is null when no candle covers the event', () => {
        expect(candleTimeFor(candles, 10, 25)).toBeNull();
        expect(candleTimeFor(candles, 10, 55)).toBeNull();
    });
});
