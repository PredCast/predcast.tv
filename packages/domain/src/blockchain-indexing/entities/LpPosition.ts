/**
 * Materialised view of an LP holder's position. Maintained by the
 * LiquidityPoolIndexer from Deposit/Withdraw events: cost basis is
 * derived (no on-chain `costBasis(holder)` view exists today, so the
 * indexer is the source of truth).
 *
 * Cost basis policy (mirrored from the contract's accounting):
 *  - Deposit(assets, shares): cost_basis += assets, last_deposit_at = now
 *  - Withdraw(assets, shares): cost_basis -= cost_basis * (shares_burned / shares_before)
 *
 * `unrealizedGain` is computed at read time as
 * `convertToAssets(shares) - cost_basis` (clamped at zero).
 */
export interface LpPosition {
    readonly holder: string;
    readonly shares: bigint;
    readonly costBasis: bigint;
    readonly lastDepositAt: Date | null;
    readonly updatedAt: Date;
}

export interface LpPositionDelta {
    readonly holder: string;
    /** Signed delta in shares: positive on deposit, negative on withdrawal. */
    readonly sharesDelta: bigint;
    /** Signed delta in cost basis (USDC), positive on deposit, negative on withdrawal. */
    readonly costBasisDelta: bigint;
    readonly bumpLastDepositAt?: Date;
    readonly updatedAt: Date;
}
