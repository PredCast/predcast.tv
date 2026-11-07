import type { PricePoint } from './priceHistory';

export interface PriceChange {
    readonly first: number;
    readonly last: number;
    /** Relative change in percent; null when the first price is 0. */
    readonly pct: number | null;
}

/** Change between the first and the last point of a series; null for fewer than 2 points. */
export function priceChange(points: ReadonlyArray<PricePoint>): PriceChange | null {
    if (points.length < 2) return null;
    const first = points[0].p;
    const last = points[points.length - 1].p;
    return { first, last, pct: first === 0 ? null : ((last - first) / first) * 100 };
}

/**
 * Decimals needed to show a price with ~4 significant digits: fan tokens trade around
 * $0.01-$5, cross pairs can be well below 1.
 */
export function pricePrecision(price: number): number {
    const abs = Math.abs(price);
    if (!Number.isFinite(abs) || abs === 0) return 2;
    if (abs >= 100) return 2;
    const magnitude = Math.floor(Math.log10(abs));
    return Math.min(8, Math.max(2, 3 - magnitude));
}

/**
 * Time of the first point at or after `eventMs` (a marker must sit on an existing point),
 * or null when the event is outside the series.
 */
export function markerTimeFor(points: ReadonlyArray<PricePoint>, eventMs: number): number | null {
    if (points.length === 0) return null;
    if (eventMs < points[0].t || eventMs > points[points.length - 1].t) return null;
    return points.find((pt) => pt.t >= eventMs)?.t ?? null;
}
