import { formatUnits } from "viem";

/**
 * The BettingMatch pools are denominated in the same token as the LiquidityPool
 * collateral (USDC, 6 decimals). All `totalPool` / bet amount displays should go
 * through these helpers so labels and decimal handling stay in sync.
 */
export const BET_TOKEN_SYMBOL = "USDC";
export const BET_TOKEN_DECIMALS = 6;

export function formatBetAmount(value: bigint | undefined): string {
  if (value === undefined) return "—";
  const n = Number(formatUnits(value, BET_TOKEN_DECIMALS));
  if (n === 0) return "0";
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  if (n >= 1) return n.toFixed(2);
  return n.toFixed(4);
}
