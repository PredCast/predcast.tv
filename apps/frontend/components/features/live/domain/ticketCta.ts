import type { BlockReason } from "@chiliztv/domain/matches/policies/BettablePolicy";

import type { QuoteStatus } from "../hooks/bet-ticket/useTicketQuote";

/** CTA state of the bet ticket, as a code; the view owns the copy. */
export type TicketCta =
  | { readonly kind: "connect" }
  | { readonly kind: "switch-network" }
  | { readonly kind: "closed"; readonly reason: BlockReason | "MARKET_NOT_OPEN" }
  | { readonly kind: "pick-outcome" }
  | { readonly kind: "enter-amount" }
  | { readonly kind: "insufficient-balance" }
  | { readonly kind: "quote-loading" }
  | { readonly kind: "quote-unavailable" }
  | { readonly kind: "below-minimum" }
  | { readonly kind: "simulation-failed" }
  | { readonly kind: "approving" }
  | { readonly kind: "confirming" }
  | { readonly kind: "approve" }
  | { readonly kind: "place" };

export interface TicketCtaInput {
  readonly walletConnected: boolean;
  readonly wrongNetwork: boolean;
  readonly policyBlock: BlockReason | null;
  readonly marketOpen: boolean;
  readonly outcomeSelected: boolean;
  readonly amountValid: boolean;
  readonly insufficientBalance: boolean;
  readonly quoteStatus: QuoteStatus;
  readonly belowMinimum: boolean;
  readonly simulationFailed: boolean;
  readonly approving: boolean;
  readonly txInFlight: boolean;
  readonly needsApproval: boolean;
}

/** First blocking condition wins; order mirrors what the user must fix first. */
export function resolveTicketCta(i: TicketCtaInput): TicketCta {
  if (i.policyBlock) return { kind: "closed", reason: i.policyBlock };
  if (!i.marketOpen) return { kind: "closed", reason: "MARKET_NOT_OPEN" };
  if (!i.walletConnected) return { kind: "connect" };
  if (i.wrongNetwork) return { kind: "switch-network" };
  if (i.approving) return { kind: "approving" };
  if (i.txInFlight) return { kind: "confirming" };
  if (!i.outcomeSelected) return { kind: "pick-outcome" };
  if (!i.amountValid) return { kind: "enter-amount" };
  if (i.insufficientBalance) return { kind: "insufficient-balance" };
  if (i.quoteStatus === "unavailable") return { kind: "quote-unavailable" };
  if (i.quoteStatus === "loading") return { kind: "quote-loading" };
  if (i.belowMinimum) return { kind: "below-minimum" };
  if (i.needsApproval) return { kind: "approve" };
  if (i.simulationFailed) return { kind: "simulation-failed" };
  return { kind: "place" };
}

/** True when the CTA triggers a write (approve or placeBet). */
export function isActionableCta(cta: TicketCta): boolean {
  return cta.kind === "approve" || cta.kind === "place";
}
