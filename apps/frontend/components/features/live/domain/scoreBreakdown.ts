import type { Match } from "@/types/api.types";

import type { ScoreBreakdown } from "./types";

/** AET / PEN breakdown under the 90' headline score; null when neither was played. */
export function buildScoreBreakdown(match: Match): ScoreBreakdown | null {
  const { homeScore, awayScore, aetHomeScore, aetAwayScore, penHomeScore, penAwayScore } = match;
  if (homeScore == null || awayScore == null) return null;
  const aet = aetHomeScore != null && aetAwayScore != null ? { home: aetHomeScore, away: aetAwayScore } : undefined;
  const pen = penHomeScore != null && penAwayScore != null ? { home: penHomeScore, away: penAwayScore } : undefined;
  if (!aet && !pen) return null;
  return {
    ninety: { home: homeScore, away: awayScore },
    ...(aet && { aet }),
    ...(pen && { pen }),
  };
}
