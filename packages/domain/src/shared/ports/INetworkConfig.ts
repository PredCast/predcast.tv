export interface INetworkConfig {
  readonly rpcUrl: string;
  readonly chainId: number;

  readonly bettingFactoryAddress: string;
  readonly streamWalletFactoryAddress: string;
  readonly liquidityPoolAddress: string;
  readonly swapRouterAddress: string;
  readonly usdcAddress: string;
  readonly wchzAddress: string;

  readonly adminPrivateKey: string;
}
