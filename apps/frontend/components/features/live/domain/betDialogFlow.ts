import type { MarketKey } from "@/lib/contracts/markets";

import type { EditableStep } from "./betTicket";

const STEP_TITLES: Partial<Record<MarketKey, string>> = {
  winner: "Pick the winner",
  halftime: "Pick the halftime winner",
  firstscorer: "Who scores first?",
  goalstotal: "Over or Under?",
};

export function stepTitleFor(key: MarketKey): string {
  return STEP_TITLES[key] ?? "Will both teams score?";
}

export function stepIndexOf(step: EditableStep | "success" | "failure"): number {
  if (step === "pick") return 0;
  if (step === "stake") return 1;
  if (step === "review") return 2;
  return 3;
}

export function previousStep(step: EditableStep): EditableStep | null {
  if (step === "stake") return "pick";
  if (step === "review") return "stake";
  return null;
}

export function formatUsd(n: number | null, dp = 2): string {
  if (n === null || Number.isNaN(n)) return "—";
  const sign = n < 0 ? "-" : "";
  return sign + "$" + Math.abs(n).toFixed(dp).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
