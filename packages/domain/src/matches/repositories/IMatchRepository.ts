import { Match } from '../entities/Match';

export interface MatchStats {
  totalMatches: number;
  liveMatches: number;
  upcomingMatches: number;
  finishedMatches: number;
}

export interface IMatchRepository {
  findAll(): Promise<Match[]>;
  findByDateRange(from: Date, to: Date): Promise<Match[]>;
  /**
   * App-visible matches (deployed + published, filtered in SQL) with `matchDate >= from`, no upper
   * bound: every future event is surfaced however far out its kickoff sits.
   */
  findVisibleFromDate(from: Date): Promise<Match[]>;
  findById(id: number): Promise<Match | null>;
  findByApiFootballId(apiId: number): Promise<Match | null>;
  /** Batch lookup for labels in admin lists; unknown ids are absent. */
  findByApiFootballIds(apiIds: ReadonlyArray<number>): Promise<Match[]>;
  /** App endpoints: the next three return app-visible matches only (deployed + published). */
  findByLeagueId(leagueId: number): Promise<Match[]>;
  findLive(): Promise<Match[]>;
  findUpcoming(limit?: number): Promise<Match[]>;
  /**
   * Candidates for `CloseLiveMarketsJob` — matches with a deployed contract
   * whose status is live/blocked OR are within `kickoffBufferSeconds` of
   * kickoff. The implementation MUST filter `betting_contract_address IS NOT
   * NULL` to match the partial index `idx_matches_status_date`; any other
   * predicate (e.g. `LENGTH(...) > 0`) defeats the planner.
   *
   * @param now Current clock — passed in so MockClock can drive tests.
   * @param kickoffBufferSeconds Seconds before kickoff to include upcoming matches.
   */
  findOpenContractsCandidates(now: Date, kickoffBufferSeconds: number): Promise<Match[]>;
  /**
   * Whether a deployed match may be in play: a live status, or a kickoff in [from, to] and not
   * finished / cancelled. Gates the paid live poll.
   */
  hasDeployedMatchInPlay(from: Date, to: Date): Promise<boolean>;
  save(match: Match): Promise<Match>;
  saveMany(matches: Match[]): Promise<Match[]>;
  update(match: Match): Promise<Match>;
  /**
   * Delete matches older than `before`, optionally skipping any match whose
   * `bettingContractAddress` (lowercased) is in
   * `exclusions.contractAddresses` or whose `apiFootballId` is in
   * `exclusions.apiFootballIds`. Used by the cleanup use case to preserve
   * matches still referenced by bets / predictions so the dashboard never
   * shows "Unknown match" for a position the user actually placed.
   *
   * Without `exclusions`, behaves like the original 24h cleanup.
   */
  deleteOldMatches(
    before: Date,
    exclusions?: {
      contractAddresses?: ReadonlySet<string>;
      apiFootballIds?: ReadonlySet<number>;
    },
  ): Promise<number>;
  getStats(): Promise<MatchStats>;
}
