"use client";

import { useCallback, useMemo, useState, type ReactNode } from "react";

import { BetSelectionContext, type BetSelectionValue } from "./betSelectionContext";

interface BetSelectionProviderProps {
  readonly children: ReactNode;
}

/** Market / outcome shared between the markets table and the bet ticket (desktop sidebar + mobile sheet). */
export function BetSelectionProvider({ children }: BetSelectionProviderProps) {
  const [marketId, setMarketId] = useState<number | null>(null);
  const [requestedOutcome, setRequestedOutcome] = useState<BetSelectionValue["requestedOutcome"]>(null);

  const selectMarket = useCallback((id: number, outcome?: number) => {
    setMarketId(id);
    setRequestedOutcome((prev) => (outcome === undefined ? null : { outcome, nonce: (prev?.nonce ?? 0) + 1 }));
  }, []);

  const value = useMemo(() => ({ marketId, requestedOutcome, selectMarket }), [marketId, requestedOutcome, selectMarket]);
  return <BetSelectionContext.Provider value={value}>{children}</BetSelectionContext.Provider>;
}
