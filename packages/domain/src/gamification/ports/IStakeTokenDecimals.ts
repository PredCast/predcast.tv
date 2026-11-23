/** Decimals of the stake token (USDC) of a betting chain, read on-chain and cached; never hard-coded. */
export interface IStakeTokenDecimals {
    usdcDecimals(chainId: number): Promise<number>;
}
