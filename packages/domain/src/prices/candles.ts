import type { PricePoint } from './priceHistory';

/** OHLC bucket; `t` is the bucket start (epoch ms). */
export interface Candle {
    readonly t: number;
    readonly o: number;
    readonly h: number;
    readonly l: number;
    readonly c: number;
}

const bucketStart = (t: number, bucketMs: number): number => Math.floor(t / bucketMs) * bucketMs;

/**
 * Candles built from sampled prices (not trades): each bucket opens on the previous close so the
 * candles chain, and its high / low only span the samples it holds. Empty buckets are skipped.
 */
export function toCandles(points: ReadonlyArray<PricePoint>, bucketMs: number): Candle[] {
    if (!(bucketMs > 0)) throw new RangeError('bucketMs must be positive');
    const candles: Candle[] = [];
    for (const { t, p } of points) {
        const start = bucketStart(t, bucketMs);
        const last = candles[candles.length - 1];
        if (last && last.t === start) {
            candles[candles.length - 1] = { ...last, h: Math.max(last.h, p), l: Math.min(last.l, p), c: p };
        } else {
            const open = last ? last.c : p;
            candles.push({ t: start, o: open, h: Math.max(open, p), l: Math.min(open, p), c: p });
        }
    }
    return candles;
}

/** Start of the candle holding `eventMs`, or null when no candle covers it. */
export function candleTimeFor(candles: ReadonlyArray<Candle>, bucketMs: number, eventMs: number): number | null {
    const start = bucketStart(eventMs, bucketMs);
    return candles.some((c) => c.t === start) ? start : null;
}
