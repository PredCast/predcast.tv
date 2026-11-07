import type { MatchPhaseTimes } from '../policies/matchPhaseTimes';
import { matchToJSON } from './matchJson';
import type { MatchProps } from './MatchProps';
import { finalScoreOf, penaltyWinnerOf, wentToExtraTime, wentToPenalties } from './matchScore';

export type { MatchProps } from './MatchProps';

export class Match {
  private constructor(private readonly props: MatchProps) {}

  static create(props: Omit<MatchProps, 'createdAt' | 'updatedAt'>): Match {
    const now = new Date();
    return new Match({
      ...props,
      createdAt: now,
      updatedAt: now,
    });
  }

  static reconstitute(props: MatchProps): Match {
    return new Match(props);
  }

  isLive(): boolean {
    return ['1H', '2H', 'HT'].includes(this.props.status);
  }

  isUpcoming(): boolean {
    return this.props.status === 'NS' && this.props.matchDate > new Date();
  }

  isFinished(): boolean {
    // FT (90'), AET (after extra time), PEN (after penalty shootout) — all
    // terminal states where the score is final and markets can be settled.
    return this.props.status === 'FT' || this.props.status === 'AET' || this.props.status === 'PEN';
  }

  /** `true` when the match reached extra time (AET) or penalty shootout (PEN). */
  wentToExtraTime(): boolean {
    return wentToExtraTime(this.props.status);
  }

  /** `true` when the match was decided by a penalty shootout. */
  wentToPenalties(): boolean {
    return wentToPenalties(this.props.status);
  }

  /** Physical final score after extra time; see {@link finalScoreOf} for the display / settlement rules. */
  getFinalScore(): { home: number; away: number } | null {
    return finalScoreOf(this.props);
  }

  /** Shootout winner when decided on penalties; see {@link penaltyWinnerOf}. */
  getPenaltyWinner(): 'home' | 'away' | null {
    return penaltyWinnerOf(this.props);
  }

  /** `true` for matches that can potentially go to AET/PEN (cups + league knockout phases). */
  isKnockout(): boolean {
    return this.props.isKnockout === true;
  }

  updateScore(homeScore: number, awayScore: number): void {
    this.props.homeScore = homeScore;
    this.props.awayScore = awayScore;
    this.props.updatedAt = new Date();
  }

  updateStatus(status: string): void {
    this.props.status = status;
    this.props.updatedAt = new Date();
  }

  getId(): number {
    return this.props.id;
  }

  getLeagueId(): number {
    return this.props.leagueId;
  }

  getStatus(): string {
    return this.props.status;
  }

  getMatchDate(): Date {
    return this.props.matchDate;
  }

  getHomeScore(): number | undefined {
    return this.props.homeScore;
  }

  getAwayScore(): number | undefined {
    return this.props.awayScore;
  }

  getBettingContractAddress(): string | undefined {
    return this.props.bettingContractAddress;
  }

  getHomeForm(): string | null {
    return this.props.homeForm ?? null;
  }

  getAwayForm(): string | null {
    return this.props.awayForm ?? null;
  }

  getElapsed(): number | null {
    return this.props.elapsed ?? null;
  }

  getPhaseTimes(): MatchPhaseTimes {
    return {
      firstHalfStartedAt: this.props.firstHalfStartedAt ?? null,
      halftimeStartedAt: this.props.halftimeStartedAt ?? null,
      secondHalfStartedAt: this.props.secondHalfStartedAt ?? null,
    };
  }

  /**
   * Monotone setter: silently ignores null/undefined to preserve the last
   * known value across HT and post-FT gaps where API-Football clears the
   * field. Use {@link updateScore} for plain score writes.
   */
  setElapsed(elapsed: number | null | undefined): void {
    if (elapsed === null || elapsed === undefined) return;
    this.props.elapsed = elapsed;
    this.props.updatedAt = new Date();
  }

  getHtHomeScore(): number | null {
    return this.props.htHomeScore ?? null;
  }

  getHtAwayScore(): number | null {
    return this.props.htAwayScore ?? null;
  }

  getAetHomeScore(): number | null {
    return this.props.aetHomeScore ?? null;
  }

  getAetAwayScore(): number | null {
    return this.props.aetAwayScore ?? null;
  }

  getPenHomeScore(): number | null {
    return this.props.penHomeScore ?? null;
  }

  getPenAwayScore(): number | null {
    return this.props.penAwayScore ?? null;
  }

  /**
   * Monotone setter for the extra-time aggregate score — same null-guard
   * semantics as {@link setHalftimeScore}. Returns `true` if anything changed.
   */
  setExtratimeScore(homeScore: number | null | undefined, awayScore: number | null | undefined): boolean {
    if (homeScore === null || homeScore === undefined) return false;
    if (awayScore === null || awayScore === undefined) return false;
    if (this.props.aetHomeScore === homeScore && this.props.aetAwayScore === awayScore) return false;
    this.props.aetHomeScore = homeScore;
    this.props.aetAwayScore = awayScore;
    this.props.updatedAt = new Date();
    return true;
  }

  /**
   * Monotone setter for the penalty shootout result — same null-guard
   * semantics as {@link setHalftimeScore}. Returns `true` if anything changed.
   */
  setPenaltyScore(homeScore: number | null | undefined, awayScore: number | null | undefined): boolean {
    if (homeScore === null || homeScore === undefined) return false;
    if (awayScore === null || awayScore === undefined) return false;
    if (this.props.penHomeScore === homeScore && this.props.penAwayScore === awayScore) return false;
    this.props.penHomeScore = homeScore;
    this.props.penAwayScore = awayScore;
    this.props.updatedAt = new Date();
    return true;
  }

  /**
   * Monotone setter for the halftime score — same null-guard semantics as
   * {@link setElapsed}. Only persists when BOTH home AND away are real
   * numbers (a partial HT score is meaningless for the resolveByScore
   * input shape). Returns true if anything actually changed.
   */
  setHalftimeScore(homeScore: number | null | undefined, awayScore: number | null | undefined): boolean {
    if (homeScore === null || homeScore === undefined) return false;
    if (awayScore === null || awayScore === undefined) return false;
    if (this.props.htHomeScore === homeScore && this.props.htAwayScore === awayScore) return false;
    this.props.htHomeScore = homeScore;
    this.props.htAwayScore = awayScore;
    this.props.updatedAt = new Date();
    return true;
  }

  /** Flat snapshot of the internal props. Symmetric with `reconstitute` — meant for cache round-trip, not API responses (use `toJSON` for that). */
  toRaw(): MatchProps {
    return { ...this.props };
  }

  toJSON(): any {
    return matchToJSON(this.props);
  }
}
