import type { QuoteStatus } from "../hooks/bet-ticket/useTicketQuote";

export interface TicketBannerInput {
  readonly submitError: string | null;
  readonly approveError: string | null;
  readonly simulationError: string | null;
  readonly tokenSymbol: string;
  readonly isUsdc: boolean;
  readonly amount: string;
  readonly belowMinimum: boolean;
  /** Formatted USDC the swap yields, for the below-minimum hint. */
  readonly expectedUsdcLabel: string;
  readonly quoteStatus: QuoteStatus;
  readonly usdcZeroBalance: boolean;
  readonly usdcAddressShort: string;
  /** The zero-USDC hint only shows once the user starts typing a stake. */
  readonly amountEntered: boolean;
}

/** Most relevant error or hint for the ticket banner; `null` when nothing needs attention. */
export function ticketBanner(i: TicketBannerInput): string | null {
  if (i.submitError) return i.submitError;
  if (i.approveError) return `Approval failed — ${i.approveError}`;
  if (i.simulationError) return i.simulationError;
  if (i.belowMinimum && !i.isUsdc) {
    return `${i.amount} ${i.tokenSymbol} swaps to ≈ ${i.expectedUsdcLabel} USDC after Kayen — below the 0.01 USDC contract minimum. Predict a larger amount or switch to USDC.`;
  }
  if (i.belowMinimum) return "Stake below the contract minimum (0.01 USDC). Increase your amount.";
  if (i.quoteStatus === "loading") return "Loading the FanX/Kayen quote — checking the swap output is above the 0.01 USDC minimum.";
  if (i.quoteStatus === "unavailable") return `No swap quote for ${i.tokenSymbol} → USDC right now. Pick another token.`;
  if (i.usdcZeroBalance && i.amountEntered) {
    return `You hold 0 USDC at ${i.usdcAddressShort}. Acquire test USDC before predicting.`;
  }
  return null;
}
