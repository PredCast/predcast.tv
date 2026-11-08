/** A chain on which betting contracts can be deployed. */
export interface BettingChain {
    readonly chainId: number;
    readonly name: string;
    readonly nativeSymbol: string;
    /** Base URL of the block explorer, without a trailing slash. */
    readonly explorerUrl: string;
}

/**
 * Chains the backend can deploy betting contracts on. Today only the Chiliz chain of the current
 * `NETWORK`; Base joins with the multichain work.
 */
export interface IBettingChainRegistry {
    list(): ReadonlyArray<BettingChain>;
    get(chainId: number): BettingChain | null;
    /** Chain used when a caller does not pick one (and for legacy rows with no chain stored). */
    defaultChain(): BettingChain;
}
