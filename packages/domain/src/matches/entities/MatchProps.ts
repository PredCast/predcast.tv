export interface MatchProps {
  id: number;
  apiFootballId: number;
  homeTeamId: number;
  homeTeamName: string;
  homeTeamLogo?: string;
  awayTeamId: number;
  awayTeamName: string;
  awayTeamLogo?: string;
  leagueId: number;
  leagueName: string;
  leagueLogo?: string;
  leagueCountry?: string;
  season: number;
  status: string;
  matchDate: Date;
  venue?: string;
  homeScore?: number;
  awayScore?: number;
  /** Last 5 results from the home team's perspective (oldest → newest). NULL when no API data. */
  homeForm?: string | null;
  /** Last 5 results from the away team's perspective. */
  awayForm?: string | null;
  /**
   * In-game minute persisted from the latest API-Football snapshot. NEVER
   * overwritten with null — once a non-null value is captured we keep it
   * across HT / post-FT so the UI minute counter doesn't reset visually.
   */
  elapsed?: number | null;
  /**
   * Score at halftime (45'). Monotone — once captured, never reset to null
   * (HT pause briefly clears the upstream field). Required to resolve the
   * HALFTIME market early via {@link ResolveHalftimeMarketUseCase}.
   */
  htHomeScore?: number | null;
  htAwayScore?: number | null;
  /**
   * Aggregate score after extra time (90' + ET). NULL for FT matches that
   * never reached AET. Used by display layer ("3 — 2 a.e.t.") and by
   * FULL_TIME_WINNER market resolution (knockout-only).
   */
  aetHomeScore?: number | null;
  aetAwayScore?: number | null;
  /**
   * Penalty shootout result (e.g. 5-4). NULL when the fixture didn't reach
   * a shootout. The score reflects the shootout itself, NOT an aggregate.
   * Used by display ("5 — 4 pen (1 — 1)") and to derive FULL_TIME_WINNER
   * when the match went all the way to penalties.
   */
  penHomeScore?: number | null;
  penAwayScore?: number | null;
  /**
   * `true` when the fixture can potentially go to extra time / penalties
   * (cup competitions, knockout phases of league formats). Computed ONCE at
   * match create via the `KnockoutMatchPolicy` and never updated on
   * subsequent re-syncs — see migration 035 and SyncMatchesUseCase for the
   * rationale (proxy is deployed at create time with or without the
   * FULL_TIME_WINNER market; flipping the flag post-deploy would create
   * entity↔contract drift).
   */
  isKnockout?: boolean;
  /** Phase starts (migration 040); merged monotonically via `nextPhaseTimes`. */
  firstHalfStartedAt?: Date | null;
  halftimeStartedAt?: Date | null;
  secondHalfStartedAt?: Date | null;
  bettingContractAddress?: string;
  createdAt: Date;
  updatedAt: Date;
}
