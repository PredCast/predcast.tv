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
      const msLeft = new Date(kickoffAt).getTime() - now.getTime();
      // Status can stay NS past kickoff until the next sync: never claim the match is still ahead.
      if (msLeft <= 0) return "Kick-off · Predictions closed";
      return `Kicks off in ${Math.max(1, Math.ceil(msLeft / 60_000))}m · Predictions closed`;
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
