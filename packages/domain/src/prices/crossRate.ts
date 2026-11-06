import type { PricePoint } from './priceHistory';

/** Last price of each bucket, keyed by bucket start. */
function bucketize(series: ReadonlyArray<PricePoint>, bucketMs: number): Map<number, number> {
    const out = new Map<number, number>();
    [...series].sort((a, b) => a.t - b.t).forEach((pt) => out.set(Math.floor(pt.t / bucketMs) * bucketMs, pt.p));
    return out;
}

/**
 * `base / quote` price series (e.g. PSG/OM from two USD series), aligned on `bucketMs` buckets.
 * Each side is forward-filled across its own gaps; buckets before either side has a price,
 * or where the quote price is 0, are skipped.
 */
export function crossRateSeries(
    base: ReadonlyArray<PricePoint>,
    quote: ReadonlyArray<PricePoint>,
    bucketMs: number,
): PricePoint[] {
    if (bucketMs <= 0) throw new RangeError('bucketMs must be positive');
    const b = bucketize(base, bucketMs);
    const q = bucketize(quote, bucketMs);
    const buckets = [...new Set([...b.keys(), ...q.keys()])].sort((x, y) => x - y);

    const out: PricePoint[] = [];
    let lastBase: number | null = null;
    let lastQuote: number | null = null;
    for (const t of buckets) {
        lastBase = b.get(t) ?? lastBase;
        lastQuote = q.get(t) ?? lastQuote;
        if (lastBase === null || lastQuote === null || lastQuote === 0) continue;
        out.push({ t, p: lastBase / lastQuote });
    }
    return out;
}
