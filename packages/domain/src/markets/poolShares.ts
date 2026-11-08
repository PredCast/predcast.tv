/** Basis-points denominator used for pool shares (10_000 = 100%). */
export const SHARE_BPS_DENOM = 10_000;

/**
 * Share of the market pool held by each outcome, in basis points (floor division).
 * All zeros when the pool is empty.
 */
export function outcomeSharesBps(outcomePools: ReadonlyArray<bigint>): number[] {
    const total = outcomePools.reduce((sum, p) => sum + p, BigInt(0));
    if (total === BigInt(0)) return outcomePools.map(() => 0);
    return outcomePools.map((p) => Number((p * BigInt(SHARE_BPS_DENOM)) / total));
}

/**
 * Outcome index holding the largest stake — the crowd favourite. Ties keep the lowest
 * index; returns -1 when the pool is empty.
 */
export function leadingOutcome(outcomePools: ReadonlyArray<bigint>): number {
    let best = -1;
    let bestPool = BigInt(0);
    outcomePools.forEach((pool, idx) => {
        if (pool > bestPool) {
            best = idx;
            bestPool = pool;
        }
    });
    return best;
}

/** Sum of every market pool on a match. */
export function totalStaked(totalPools: ReadonlyArray<bigint>): bigint {
    return totalPools.reduce((sum, p) => sum + p, BigInt(0));
}
