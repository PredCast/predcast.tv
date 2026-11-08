import { createContext } from "react";

export interface BetSelectionValue {
  /** Explicitly chosen market; `null` means "default" (1X2), resolved against the live market list. */
  readonly marketId: number | null;
  /** Outcome pushed from outside the ticket (market table); `nonce` remounts the ticket to apply it. */
  readonly requestedOutcome: { readonly outcome: number; readonly nonce: number } | null;
  readonly selectMarket: (marketId: number, outcome?: number) => void;
}

export const BetSelectionContext = createContext<BetSelectionValue | null>(null);
