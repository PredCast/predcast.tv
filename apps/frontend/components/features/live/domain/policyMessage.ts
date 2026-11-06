import type { BettableResult } from "@chiliztv/domain/matches/policies/BettablePolicy";

/** Pill copy shown when an on-chain market is Open but the match policy blocks betting. */
export function policyMessageFor(verdict: BettableResult, kickoffAt: string, now: Date): string {
  if (verdict.ok) return "";
  switch (verdict.reason) {
    case "LIVE":
      return "Live · Predictions closed";
    case "HALFTIME":
      return "Halftime · Predictions closed";
    case "KICKOFF_BUFFER": {
      const mins = Math.max(1, Math.ceil((new Date(kickoffAt).getTime() - now.getTime()) / 60_000));
      return `Kicks off in ${mins}m · Predictions closed`;
    }
    case "FINISHED":
      return "Awaiting resolution";
    case "POSTPONED":
      return "Postponed";
    case "UNKNOWN":
    default:
      return "Predictions unavailable";
  }
}
