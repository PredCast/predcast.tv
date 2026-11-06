import type { Address } from "viem";

import type { Match } from "@/types/api.types";

/** `/live/999999` binds to `factory.getAllMatches().at(-1)` instead of the backend API. */
export const TEST_MATCH_ID = "999999";

/** Fallback proxy (archi-off-mica factory) used while the current factory has no match deployed. */
const FALLBACK_TEST_PROXY = "0xe43a99cb7dd0787ce47e5ba0d838d9faca6bec7a" as Address;

/** Kickoff 24h ahead keeps `isBettable` (status NS + future kickoff) from locking every market. */
export function testMatchKickoffIso(now: Date): string {
  return new Date(now.getTime() + 24 * 60 * 60 * 1000).toISOString();
}

export function splitTeamNames(name: string): { home: string; away: string } {
  const trimmed = name.trim();
  for (const sep of [" vs ", " VS ", " v ", " - ", " — "]) {
    const idx = trimmed.indexOf(sep);
    if (idx > 0) {
      return { home: trimmed.slice(0, idx).trim(), away: trimmed.slice(idx + sep.length).trim() };
    }
  }
  return { home: trimmed, away: "—" };
}

export function sportLabel(sportType: unknown): string {
  const n = typeof sportType === "bigint" ? Number(sportType) : sportType;
  if (n === 0) return "FOOTBALL (test)";
  if (n === 1) return "BASKETBALL (test)";
  return "TEST";
}

interface OnChainTestMatchInput {
  readonly proxy: Address | undefined;
  readonly matchName: string | undefined;
  readonly sportType: unknown;
  readonly kickoffIso: string;
}

/** On-chain reads when available, otherwise the hardcoded fallback match. */
export function buildTestMatch({ proxy, matchName, sportType, kickoffIso }: OnChainTestMatchInput): Match {
  const base = {
    id: 999999,
    status: "NS",
    startTime: kickoffIso,
    homeForm: null,
    awayForm: null,
    elapsed: null,
    htHomeScore: null,
    htAwayScore: null,
    // On-chain test matches carry no API-Football team ids, hence no fan-token mapping.
    homeFanToken: null,
    awayFanToken: null,
  };
  if (proxy && matchName) {
    const { home, away } = splitTeamNames(matchName);
    return { ...base, homeTeam: home, awayTeam: away, league: sportLabel(sportType), contractAddress: proxy };
  }
  return { ...base, homeTeam: "Bayern", awayTeam: "Dortmund", league: "Football · Test", contractAddress: FALLBACK_TEST_PROXY };
}
