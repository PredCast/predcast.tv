const BPS = BigInt(10_000);

/**
 * Payout of an existing position if its outcome wins with the pool as it stands:
 * `stake × totalPool × (1 − fee) / outcomePool` (PariMatchBase claim formula). An estimate
 * until the market resolves — every new stake moves it. 0 when the outcome pool is empty.
 */
export function positionPayoutRaw(stake: bigint, outcomePool: bigint, totalPool: bigint, feeBps: number): bigint {
    if (stake <= BigInt(0) || outcomePool <= BigInt(0)) return BigInt(0);
    const fee = BigInt(Math.max(0, Math.min(10_000, Math.trunc(feeBps))));
    const netPool = (totalPool * (BPS - fee)) / BPS;
    return (stake * netPool) / outcomePool;
}

/** Share of the market held by the picked outcome right after the stake, in basis points. */
export function entryShareBps(outcomePoolAfter: bigint, totalPoolAfter: bigint): number | null {
    if (totalPoolAfter <= BigInt(0) || outcomePoolAfter < BigInt(0)) return null;
    return Number((outcomePoolAfter * BPS) / totalPoolAfter);
}
