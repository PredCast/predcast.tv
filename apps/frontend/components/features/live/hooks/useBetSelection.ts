"use client";

import { useContext } from "react";

import { BetSelectionContext, type BetSelectionValue } from "../context/betSelectionContext";

export function useBetSelection(): BetSelectionValue {
  const value = useContext(BetSelectionContext);
  if (!value) throw new Error("useBetSelection must be used inside <BetSelectionProvider>");
  return value;
}
