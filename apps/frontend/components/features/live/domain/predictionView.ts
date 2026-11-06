import { entryShareBps, positionPayoutRaw } from "@chiliztv/domain/markets/positionPayout";

import type { MyBet } from "@/components/features/dashboard/domain/bets";
import { fmtSelection } from "@/components/features/dashboard/domain/bets";
import { fmtSelectionByMarket, MARKET_TYPE_HASHES, type MarketPoolSnapshot } from "@/lib/contracts/markets";

import { marketChipLabel } from "./selectedMarket";

export type PayoutLine =
  | { readonly kind: "paid"; readonly amountRaw: bigint }
  | { readonly kind: "claimable"; readonly amountRaw: bigint }
  | { readonly kind: "if-wins"; readonly amountRaw: bigint }
  | { readonly kind: "refund"; readonly amountRaw: bigint }
  | { readonly kind: "lost" };

export interface PredictionView {
  readonly marketLabel: string;
  readonly selectionLabel: string;
  readonly stakeRaw: bigint;
  /** Outcome share right after this stake (the parimutuel "entry odds"), in %. */
  readonly entrySharePct: number | null;
  readonly payout: PayoutLine;
}

/**
 * Presentation model of one of the viewer's positions on the current match. Payouts of
 * open / unclaimed positions come from the live pool and stay estimates until claimed.
 */
export function buildPredictionView(
  bet: MyBet,
  snapshot: MarketPoolSnapshot | undefined,
  feeBps: number,
  homeTeam?: string,
  awayTeam?: string,
): PredictionView {
  const stakeRaw = BigInt(bet.stakeAmount);
  const hash = bet.marketType ? MARKET_TYPE_HASHES[bet.marketType as keyof typeof MARKET_TYPE_HASHES] : undefined;
  const share = entryShareBps(BigInt(bet.newOutcomePool), BigInt(bet.newTotalPool));
  const livePayout = snapshot
    ? positionPayoutRaw(stakeRaw, BigInt(snapshot.outcomePools[Number(bet.outcome)] ?? "0"), BigInt(snapshot.totalPool), feeBps)
    : BigInt(0);

  return {
    marketLabel: hash ? marketChipLabel({ marketType: hash, line: bet.line ?? 0 }, homeTeam, awayTeam) : "Market",
    // Market is shown separately, so the selection drops fmtSelection's " · market" suffix.
    selectionLabel: hash
      ? fmtSelectionByMarket(Number(bet.outcome), hash, bet.line ?? 0, homeTeam, awayTeam)
      : fmtSelection(bet.outcome, homeTeam, awayTeam, bet.marketType, bet.line),
    stakeRaw,
    entrySharePct: share === null ? null : share / 100,
    payout: payoutLine(bet, livePayout, stakeRaw),
  };
}

function payoutLine(bet: MyBet, livePayout: bigint, stakeRaw: bigint): PayoutLine {
  const paid = bet.payoutAmount ? BigInt(bet.payoutAmount) : null;
  switch (bet.status) {
    case "WON":
      return paid !== null ? { kind: "paid", amountRaw: paid } : { kind: "claimable", amountRaw: livePayout };
    case "REFUNDED":
      return { kind: "refund", amountRaw: paid ?? stakeRaw };
    case "LOST":
      return { kind: "lost" };
    default:
      return { kind: "if-wins", amountRaw: livePayout };
  }
}
