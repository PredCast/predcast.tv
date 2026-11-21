export interface INetworkConfig {
  readonly rpcUrl: string;
  readonly chainId: number;

  readonly pariMatchFactoryAddress: string;
  readonly streamWalletFactoryAddress: string;
  readonly swapRouterAddress: string;
  readonly leaderboardRewardsAddress: string;
  readonly usdcAddress: string;
  readonly wchzAddress: string;

  readonly adminPrivateKey: string;
  /** Oracle key (RESOLVER_ROLE on matches); must differ from the factory owner and operator. Null when unset. */
  readonly resolverPrivateKey: string | null;
}
