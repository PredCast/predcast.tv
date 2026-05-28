import {
    MARKET_TYPE_HASHES,
    type MarketPoolSnapshot,
} from "@/lib/contracts/markets";
import type { MarketPoolsDto } from "@chiliztv/shared";

const WINNER_HASH = MARKET_TYPE_HASHES.WINNER.toLowerCase();

/**
 * Pick the WINNER market snapshot from a per-contract pools DTO. Kept for
 * code that specifically needs the 1X2 reference.
 */
export function pickWinnerSnapshot(
    pools: MarketPoolsDto | undefined,
): MarketPoolSnapshot | null {
    if (!pools) return null;
    return (
        pools.markets.find((m) => m.marketType.toLowerCase() === WINNER_HASH) ?? null
    );
}

/**
 * Pick the snapshot we want to feature on the browse card: WINNER when it
 * has liquidity, otherwise the first market with a non-zero total pool.
 * Returns the WINNER row (possibly empty) when nothing has activity yet,
 * so the caller renders the "empty pool" affordance.
 */
export function pickRichestMarketSnapshot(
    pools: MarketPoolsDto | undefined,
): MarketPoolSnapshot | null {
    if (!pools) return null;
    const winner = pools.markets.find((m) => m.marketType.toLowerCase() === WINNER_HASH);
    if (winner && BigInt(winner.totalPool) > BigInt(0)) return winner;
    const richest = pools.markets.find((m) => BigInt(m.totalPool) > BigInt(0));
    if (richest) return richest;
    return winner ?? null;
}

export interface PoolShares {
    /** One share per outcome — length matches the market's outcome count. */
    readonly shares: readonly number[];
    readonly favIdx: number;
}

/**
 * Turn the backend's `impliedProbBps` (basis points) into normalised shares
 * summing to ≤ 1. Returns `null` when the pool has no liquidity yet so the
 * caller renders the "empty" state. Variable length: 3 for WINNER /
 * HALFTIME, 2 for GOALS_TOTAL / BOTH_SCORE, etc.
 */
export function sharesFromSnapshot(
    snapshot: MarketPoolSnapshot,
): PoolShares | null {
    if (!snapshot.totalPool || BigInt(snapshot.totalPool) === BigInt(0)) return null;
    const bps = snapshot.impliedProbBps;
    if (bps.length === 0) return null;
    const shares = bps.map((b) => b / 10_000);
    let favIdx = 0;
    for (let i = 1; i < shares.length; i++) {
        if (shares[i] > shares[favIdx]) favIdx = i;
    }
    return { shares, favIdx };
}
