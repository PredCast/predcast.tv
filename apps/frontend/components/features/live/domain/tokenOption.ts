/** One stake currency row in the token picker. */
export interface BetTokenOption {
  readonly key: string;
  readonly sym: string;
  readonly name: string;
  readonly balance: number;
  readonly decimals: number;
  readonly needsSwap: boolean;
  readonly logoUrl?: string;
  readonly logoBg?: string;
  readonly logoTxt?: string;
  readonly usdRate?: number;
  /** Set when the token cannot be used right now (no swap quote, route still being checked). */
  readonly unavailableReason?: string;
}

export function formatTokenBalance(n: number, dp = 2): string {
  return n.toFixed(dp).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function formatUsdValue(n: number, dp = 2): string {
  return "$" + formatTokenBalance(n, dp);
}
