import type { TicketCta } from "./ticketCta";

export interface CtaCopy {
  readonly label: string;
  /** Clickable states: connect, switch network, approve, place. */
  readonly enabled: boolean;
}

/** View copy for a CTA code. `policyMessage` is the BettablePolicy pill text when the match blocks predictions. */
export function ticketCtaCopy(cta: TicketCta, tokenSymbol: string, policyMessage: string): CtaCopy {
  switch (cta.kind) {
    case "connect":
      return { label: "Connect wallet to predict", enabled: true };
    case "switch-network":
      return { label: "Switch network", enabled: true };
    case "settled":
      return {
        label: cta.outcome === "resolved" ? "Resolved · claim in My predictions" : "Cancelled · refund in My predictions",
        enabled: false,
      };
    case "closed":
      return { label: cta.reason === "MARKET_NOT_OPEN" ? "Market closed" : policyMessage || "Predictions closed", enabled: false };
    case "pick-outcome":
      return { label: "Pick an outcome", enabled: false };
    case "enter-amount":
      return { label: "Enter an amount", enabled: false };
    case "insufficient-balance":
      return { label: `Insufficient ${tokenSymbol}`, enabled: false };
    case "quote-loading":
      return { label: "Fetching quote…", enabled: false };
    case "quote-unavailable":
      return { label: "Quote unavailable", enabled: false };
    case "below-minimum":
      return { label: "Below 0.01 USDC minimum", enabled: false };
    case "simulation-failed":
      return { label: "Prediction would revert", enabled: false };
    case "approving":
      return { label: `Approving ${tokenSymbol}…`, enabled: false };
    case "confirming":
      return { label: "Confirm in wallet…", enabled: false };
    case "approve":
      return { label: `Approve ${tokenSymbol}`, enabled: true };
    case "place":
      return { label: "Place prediction", enabled: true };
  }
}
