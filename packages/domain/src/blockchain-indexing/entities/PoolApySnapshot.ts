export type ApyWindow = '7d' | '30d';

/**
 * Snapshot of the LP pool's APY computed by the ComputeApyJob.
 *
 *  - `apyBps`        : raw APY using the price-per-share delta over the window.
 *  - `apyPostFeeBps` : same minus an estimate of LP withdrawal fees accrued
 *                       inside the window — exposed for transparency in the UI.
 *  - `noisy`         : TRUE when a large Deposit/Withdraw landed inside the
 *                       window. PPS is invariant to deposits in theory, but the
 *                       inflation-attack offset can introduce small drift on
 *                       low-TVL pools — flag it so the UI can footnote the value.
 *
 * The block boundaries are persisted so the UI can show "computed on block X
 * — Y minutes ago" without needing extra reads.
 */
export interface PoolApySnapshot {
    readonly id: string;
    readonly windowLabel: ApyWindow;
    readonly ppsStart: bigint;
    readonly ppsEnd: bigint;
    readonly apyBps: number;
    readonly apyPostFeeBps: number | null;
    readonly periodDays: number;
    readonly noisy: boolean;
    readonly blockStart: bigint;
    readonly blockEnd: bigint;
    readonly computedAt: Date;
}
