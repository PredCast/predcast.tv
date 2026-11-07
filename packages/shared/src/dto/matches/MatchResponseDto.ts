import { z } from 'zod';

export const TeamDtoSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  logo: z.string().optional(),
});
export type TeamDto = z.infer<typeof TeamDtoSchema>;

export const LeagueDtoSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  logo: z.string().optional(),
  country: z.string().optional(),
});
export type LeagueDto = z.infer<typeof LeagueDtoSchema>;

export const ScoreDtoSchema = z.object({
  home: z.number().int().nullable(),
  away: z.number().int().nullable(),
});
export type ScoreDto = z.infer<typeof ScoreDtoSchema>;

const nullableGoals = z.number().int().nullable();

/** Shape served by `GET /matches*`. Built by the backend `toMatchResponseDto` presenter. */
export const MatchResponseDtoSchema = z.object({
  /** Row UUID; clients key matches on `apiFootballId`. */
  id: z.string(),
  apiFootballId: z.number().int(),
  homeTeam: TeamDtoSchema,
  awayTeam: TeamDtoSchema,
  league: LeagueDtoSchema,
  season: z.number().int(),
  /** Raw API-Football short status (`NS`, `1H`, `HT`, `FT`…); classified by `BettablePolicy`. */
  status: z.string(),
  matchDate: z.string().datetime(),
  venue: z.string().optional(),
  /** Null until the upstream reports a score. */
  score: ScoreDtoSchema.nullable(),
  /** Latest W/D/L results (oldest → newest, up to 5 chars). */
  homeForm: z.string().nullable(),
  awayForm: z.string().nullable(),
  /** Last persisted in-game minute; never reset to null once seen. */
  elapsed: z.number().int().nullable(),
  /** Halftime score; survives the HT pause when the upstream clears it. */
  htHomeScore: nullableGoals,
  htAwayScore: nullableGoals,
  /** Aggregate after extra time (90' + ET); null when the match never reached AET. */
  aetHomeScore: nullableGoals,
  aetAwayScore: nullableGoals,
  /** Shootout result itself, not an aggregate. */
  penHomeScore: nullableGoals,
  penAwayScore: nullableGoals,
  /** Can go to AET / penalties; drives the FULL_TIME_WINNER market. */
  isKnockout: z.boolean(),
  /** Score after extra time when played, else the 90' score. */
  finalScore: z.object({ home: z.number().int(), away: z.number().int() }).nullable(),
  penaltyWinner: z.enum(['home', 'away']).nullable(),
  /** Actual phase starts (ISO); null until observed. HT is stamped by the sync, ±1 poll. */
  firstHalfStartedAt: z.string().datetime().nullable(),
  halftimeStartedAt: z.string().datetime().nullable(),
  secondHalfStartedAt: z.string().datetime().nullable(),
  bettingContractAddress: z.string().optional(),
  /** Chain of the betting contract; legacy rows resolve to the current NETWORK chain. Null without a contract. */
  bettingChainId: z.number().int().nullable(),
  /** When the markets opened (ISO); null when unknown (legacy rows) or not deployed. */
  bettingOpenedAt: z.string().datetime().nullable(),
  /** Upstream in degraded mode (circuit open or quota exhausted): scores may be stale. */
  dataStale: z.boolean(),
  /** Fan-token base symbol of each side (`PSG`, `OM`…); null when the club has none. */
  homeFanToken: z.string().nullable(),
  awayFanToken: z.string().nullable(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});
export type MatchResponseDto = z.infer<typeof MatchResponseDtoSchema>;

export const MatchListResponseDtoSchema = z.object({
  matches: z.array(MatchResponseDtoSchema),
  count: z.number().int(),
});
export type MatchListResponseDto = z.infer<typeof MatchListResponseDtoSchema>;

export const MatchStatsResponseDtoSchema = z.object({
  total: z.number().int(),
  live: z.number().int(),
  upcoming: z.number().int(),
  finished: z.number().int(),
});
export type MatchStatsResponseDto = z.infer<typeof MatchStatsResponseDtoSchema>;
