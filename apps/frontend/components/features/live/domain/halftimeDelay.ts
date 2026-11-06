import type { MarketKey } from "@/lib/contracts/markets";

import type { MatchBettableContext } from "./types";

const POST_HT_STATUSES: ReadonlySet<string> = new Set(["HT", "2H", "ET", "BT", "P", "LIVE"]);

/** True when the Open HALFTIME market is past HT while the upstream has not reported the HT score. */
export function isHalftimeDelayed(
  marketKey: MarketKey | undefined,
  isMarketOpen: boolean,
  match: MatchBettableContext | undefined,
): boolean {
  if (marketKey !== "halftime" || !isMarketOpen || !match) return false;
  if (!POST_HT_STATUSES.has(match.status)) return false;
  return match.htHomeScore == null || match.htAwayScore == null;
}
