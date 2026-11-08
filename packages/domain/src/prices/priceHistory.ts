/** A point of a price series: epoch milliseconds, price in the quote currency. */
export interface PricePoint {
    readonly t: number;
    readonly p: number;
}

export const PRICE_HISTORY_RANGES = ['1h', '24h', '7d'] as const;
export type PriceHistoryRange = (typeof PRICE_HISTORY_RANGES)[number];

/** Upstream series actually fetched and cached; `1h` is cut out of the `1d` series. */
export type PriceHistoryWindow = '1d' | '7d';

const HOUR_MS = 60 * 60 * 1000;
const RANGE_SPAN_MS: Record<PriceHistoryRange, number> = { '1h': HOUR_MS, '24h': 24 * HOUR_MS, '7d': 7 * 24 * HOUR_MS };

export function isPriceHistoryRange(value: string): value is PriceHistoryRange {
    return (PRICE_HISTORY_RANGES as ReadonlyArray<string>).includes(value);
}

export function windowForRange(range: PriceHistoryRange): PriceHistoryWindow {
    return range === '7d' ? '7d' : '1d';
}

/** Points of `series` inside [now − range span, now], in time order. */
export function sliceHistory(series: ReadonlyArray<PricePoint>, range: PriceHistoryRange, now: Date): PricePoint[] {
    const from = now.getTime() - RANGE_SPAN_MS[range];
    return series.filter((pt) => pt.t >= from && pt.t <= now.getTime()).sort((a, b) => a.t - b.t);
}
