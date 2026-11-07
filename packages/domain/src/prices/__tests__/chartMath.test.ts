import { describe, expect, it } from 'vitest';
import { markerTimeFor, priceChange, pricePrecision, snapEventMarkers } from '../chartMath';

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
        expect(markerTimeFor(points, 21)).toBeNull();
        expect(markerTimeFor([], 5)).toBeNull();
    });

    it('snaps an event less than one step past the last point onto it', () => {
        expect(markerTimeFor(points, 16)).toBe(15);
        expect(markerTimeFor(points, 20)).toBe(15);
    });
});

describe('snapEventMarkers', () => {
    // Span 3000 ms → events closer than 100 ms share a marker.
    const points = Array.from({ length: 31 }, (_, i) => ({ t: i * 100, p: 1 }));

    it('drops events that have not happened or fall outside the series', () => {
        const events = [{ atMs: null, label: 'HT' }, { atMs: 5000, label: '2H' }, { atMs: 1010, label: 'KO' }];
        expect(snapEventMarkers(points, events)).toEqual([{ t: 1100, label: 'KO' }]);
    });

    it('keeps events apart when they are far enough on screen, in time order', () => {
        const events = [{ atMs: 2000, label: '2H' }, { atMs: 1000, label: 'KO' }];
        expect(snapEventMarkers(points, events)).toEqual([{ t: 1000, label: 'KO' }, { t: 2000, label: '2H' }]);
    });

    it('groups events that would overlap at the first one of the group', () => {
        const events = [{ atMs: 1000, label: 'KO' }, { atMs: 1050, label: 'HT' }, { atMs: 1300, label: '2H' }];
        expect(snapEventMarkers(points, events)).toEqual([{ t: 1000, label: 'KO · HT' }, { t: 1300, label: '2H' }]);
    });

    it('is empty for an empty series', () => {
        expect(snapEventMarkers([], [{ atMs: 0, label: 'KO' }])).toEqual([]);
    });
});
