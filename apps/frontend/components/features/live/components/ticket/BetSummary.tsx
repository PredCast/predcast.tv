import { formatUnits } from "viem";

import { PRICE_IMPACT_WARN_PCT } from "../../domain/betTicket";
import { BetSummaryRow } from "./BetSummaryRow";

interface BetSummaryProps {
  readonly stakeUsdcRaw: bigint;
  readonly payoutUsdcRaw: bigint;
  readonly usdcDecimals: number;
  readonly feeBps: number;
  readonly leaderboardFeeBps: number;
  readonly priceImpactPct: number | null;
  readonly isSwap: boolean;
}

const pct = (bps: number) => `${(bps / 100).toLocaleString("en-US", { maximumFractionDigits: 2 })}%`;
const usdc = (raw: bigint, decimals: number) =>
  `${Number(formatUnits(raw, decimals)).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USDC`;

export function BetSummary({
  stakeUsdcRaw,
  payoutUsdcRaw,
  usdcDecimals,
  feeBps,
  leaderboardFeeBps,
  priceImpactPct,
  isSwap,
}: BetSummaryProps) {
  const treasuryBps = Math.max(0, feeBps - leaderboardFeeBps);
  const impactWarn = priceImpactPct !== null && priceImpactPct >= PRICE_IMPACT_WARN_PCT;
  return (
    <dl className="flex flex-col gap-1.5 rounded-lg border border-[#1E1E1E] bg-[#0d0d0d] px-3 py-2.5">
      <BetSummaryRow label={isSwap ? "Net stake (min.)" : "Net stake"} value={usdc(stakeUsdcRaw, usdcDecimals)} />
      <BetSummaryRow
        label={`Fee ${pct(feeBps)}`}
        hint={`${pct(treasuryBps)} treasury + ${pct(leaderboardFeeBps)} leaderboard, on the winning pool`}
        value={pct(feeBps)}
        tone="gold"
      />
      {isSwap && priceImpactPct !== null && (
        <BetSummaryRow
          label="Price impact"
          value={`${priceImpactPct.toFixed(2)}%`}
          tone={impactWarn ? "red" : "default"}
          hint={impactWarn ? "Shallow pool — part of your stake is lost to the swap." : undefined}
        />
      )}
      <BetSummaryRow
        label="Est. payout if it wins"
        hint="Estimate — moves with the pool until kickoff"
        value={payoutUsdcRaw > BigInt(0) ? usdc(payoutUsdcRaw, usdcDecimals) : "—"}
        tone="green"
      />
    </dl>
  );
}
