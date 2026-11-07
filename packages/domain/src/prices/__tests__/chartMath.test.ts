import { describe, expect, it } from 'vitest';
import { markerTimeFor, priceChange, pricePrecision } from '../chartMath';

describe('priceChange', () => {
    it('computes the change from the first to the last point', () => {
        const change = priceChange([{ t: 0, p: 0.4 }, { t: 1, p: 0.5 }, { t: 2, p: 0.3 }]);
        expect(change?.first).toBe(0.4);
        expect(change?.last).toBe(0.3);
        expect(change?.pct).toBeCloseTo(-25);
    });

    it('is null with fewer than two points', () => {
        expect(priceChange([])).toBeNull();
        expect(priceChange([{ t: 0, p: 1 }])).toBeNull();
    });

    it('has a null percentage when the first price is zero', () => {
        expect(priceChange([{ t: 0, p: 0 }, { t: 1, p: 1 }])?.pct).toBeNull();
    });
});

describe('pricePrecision', () => {
    it('shows ~4 significant digits on small prices', () => {
        expect(pricePrecision(0.3544)).toBe(4);
        expect(pricePrecision(0.0123)).toBe(5);
        expect(pricePrecision(1.21)).toBe(3);
        expect(pricePrecision(12.5)).toBe(2);
    });

    it('caps very small and large values and handles zero', () => {
        expect(pricePrecision(0.000000012)).toBe(8);
        expect(pricePrecision(1234)).toBe(2);
        expect(pricePrecision(0)).toBe(2);
        expect(pricePrecision(Number.NaN)).toBe(2);
    });
});

describe('markerTimeFor', () => {
    const points = [0, 5, 10, 15].map((t) => ({ t, p: 1 }));

    it('snaps to the first point at or after the event', () => {
        expect(markerTimeFor(points, 5)).toBe(5);
        expect(markerTimeFor(points, 7)).toBe(10);
    });

    it('is null outside the series or for an empty series', () => {
        expect(markerTimeFor(points, -1)).toBeNull();
        expect(markerTimeFor(points, 16)).toBeNull();
        expect(markerTimeFor([], 5)).toBeNull();
    });
});
