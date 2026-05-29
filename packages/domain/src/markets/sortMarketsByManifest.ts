import { DEFAULT_FOOTBALL_MARKETS } from './DefaultMarkets';

/**
 * Stable display order = manifest order (`marketId 0..7`). The contract
 * returns markets unordered (or in `addMarket` call order, which equals
 * manifest order ONLY for freshly-seeded proxies — legacy contracts
 * deployed before the 8-market lineup return a different shape).
 * Centralising the sort here means any future market re-ordering happens
 * in ONE place — the manifest.
 *
 * Unknown marketIds (legacy market types not in the manifest) sort to the
 * end in their original relative order so they're still visible to the
 * indexer / dashboard without crashing the UI.
 *
 * Accepts `marketId` as number, bigint, OR string (numeric) because the
 * frontend consumes a JSON snapshot from the API where bigint becomes a
 * decimal string. We coerce via `Number(...)` which is safe up to
 * 2^53 — marketIds are tiny uint values.
 */
export function sortMarketsByManifest<T extends { marketId: number | bigint | string }>(
    markets: ReadonlyArray<T>,
): T[] {
    const orderById = new Map<number, number>(
        DEFAULT_FOOTBALL_MARKETS.map((s, idx) => [s.marketId, idx]),
    );
    return [...markets].sort((a, b) => {
        const aIdx = orderById.get(Number(a.marketId)) ?? Number.POSITIVE_INFINITY;
        const bIdx = orderById.get(Number(b.marketId)) ?? Number.POSITIVE_INFINITY;
        return aIdx - bIdx;
    });
}
