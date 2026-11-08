import { describe, expect, it } from 'vitest';
import { crossRateSeries } from '../crossRate';
import type { PricePoint } from '../priceHistory';

const MIN = 60_000;
const BUCKET = 5 * MIN;
const pts = (pairs: Array<[number, number]>): PricePoint[] => pairs.map(([m, p]) => ({ t: m * MIN, p }));

describe('crossRateSeries', () => {
    it('divides aligned points bucket by bucket', () => {
        const out = crossRateSeries(pts([[0, 2], [5, 3]]), pts([[0, 4], [5, 6]]), BUCKET);
        expect(out).toEqual([{ t: 0, p: 0.5 }, { t: 5 * MIN, p: 0.5 }]);
    });

    it('aligns timestamps that differ inside the same bucket', () => {
        const out = crossRateSeries(pts([[1, 3]]), pts([[4, 2]]), BUCKET);
        expect(out).toEqual([{ t: 0, p: 1.5 }]);
    });

    it('keeps the last price of a bucket when a series has several', () => {
        const out = crossRateSeries(pts([[0, 1], [3, 9]]), pts([[2, 3]]), BUCKET);
        expect(out).toEqual([{ t: 0, p: 3 }]);
    });

    it('forward-fills gaps on either side', () => {
        const out = crossRateSeries(pts([[0, 2], [10, 4]]), pts([[0, 1], [5, 2]]), BUCKET);
        expect(out.map((p) => p.p)).toEqual([2, 1, 2]);
    });

    it('skips buckets before one series has started', () => {
        const out = crossRateSeries(pts([[0, 2], [5, 2], [10, 2]]), pts([[10, 4]]), BUCKET);
        expect(out).toEqual([{ t: 10 * MIN, p: 0.5 }]);
    });

    it('skips a zero quote price instead of dividing by zero', () => {
        const out = crossRateSeries(pts([[0, 2], [5, 2]]), pts([[0, 0], [5, 4]]), BUCKET);
        expect(out).toEqual([{ t: 5 * MIN, p: 0.5 }]);
    });

    it('handles series of different lengths and unsorted input', () => {
        const out = crossRateSeries(pts([[10, 6], [0, 2], [5, 4]]), pts([[0, 2]]), BUCKET);
        expect(out.map((p) => p.p)).toEqual([1, 2, 3]);
    });

    it('returns an empty series when either side is empty', () => {
        expect(crossRateSeries([], pts([[0, 1]]), BUCKET)).toEqual([]);
        expect(crossRateSeries(pts([[0, 1]]), [], BUCKET)).toEqual([]);
    });

    it('rejects a non-positive bucket', () => {
        expect(() => crossRateSeries([], [], 0)).toThrow(RangeError);
    });
});
