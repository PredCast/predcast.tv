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
 * Time of the first point at or after `eventMs` (a marker must sit on an existing point), or null
 * when the event is outside the series. An event up to one step past the last point (the series
 * lags the live match) snaps onto that last point.
 */
export function markerTimeFor(points: ReadonlyArray<PricePoint>, eventMs: number): number | null {
    if (points.length === 0 || eventMs < points[0].t) return null;
    const last = points[points.length - 1].t;
    if (eventMs > last) {
        const step = points.length > 1 ? last - points[points.length - 2].t : 0;
        return eventMs - last <= step ? last : null;
    }
    return points.find((pt) => pt.t >= eventMs)?.t ?? null;
}

export interface ChartEvent {
    /** Epoch ms; null when the event has not happened. */
    readonly atMs: number | null;
    readonly label: string;
}

export interface SnappedMarker {
    readonly t: number;
    readonly label: string;
}

export interface SnapEventOptions {
    /** Defaults to the first point at or after the event. */
    readonly snap?: (eventMs: number) => number | null;
    /** Share of the visible span under which two events would overlap on screen (default 1/30). */
    readonly minGapRatio?: number;
}

/**
 * Snaps each event onto the series, dropping unknown or out-of-range ones. Events closer than
 * `minGapRatio` of the span to the first one of a group share its marker.
 */
export function snapEventMarkers(
    points: ReadonlyArray<PricePoint>,
    events: ReadonlyArray<ChartEvent>,
    { snap = (eventMs) => markerTimeFor(points, eventMs), minGapRatio = 1 / 30 }: SnapEventOptions = {},
): SnappedMarker[] {
    if (points.length === 0) return [];
    const minGapMs = (points[points.length - 1].t - points[0].t) * minGapRatio;
    const known = events
        .filter((e): e is { atMs: number; label: string } => e.atMs !== null && Number.isFinite(e.atMs))
        .sort((a, b) => a.atMs - b.atMs);

    const groups: { startMs: number; t: number; labels: string[] }[] = [];
    for (const event of known) {
        const t = snap(event.atMs);
        if (t === null) continue;
        const last = groups[groups.length - 1];
        if (last && (t === last.t || event.atMs - last.startMs < minGapMs)) last.labels.push(event.label);
        else groups.push({ startMs: event.atMs, t, labels: [event.label] });
    }
    return groups.map((g) => ({ t: g.t, label: g.labels.join(' · ') }));
}
