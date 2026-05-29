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
  bettingContractAddress?: string;
  createdAt: Date;
  updatedAt: Date;
}

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
    return this.props.status === 'FT';
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

  /** Flat snapshot of the internal props. Symmetric with `reconstitute` — meant for cache round-trip, not API responses (use `toJSON` for that). */
  toRaw(): MatchProps {
    return { ...this.props };
  }

  toJSON(): any {
    return {
      id: this.props.id,
      apiFootballId: this.props.apiFootballId,
      homeTeam: {
        id: this.props.homeTeamId,
        name: this.props.homeTeamName,
        logo: this.props.homeTeamLogo,
      },
      awayTeam: {
        id: this.props.awayTeamId,
        name: this.props.awayTeamName,
        logo: this.props.awayTeamLogo,
      },
      league: {
        id: this.props.leagueId,
        name: this.props.leagueName,
        logo: this.props.leagueLogo,
      },
      season: this.props.season,
      status: this.props.status,
      matchDate: this.props.matchDate,
      venue: this.props.venue,
      score: this.props.homeScore !== undefined && this.props.awayScore !== undefined
        ? { home: this.props.homeScore, away: this.props.awayScore }
        : null,
      homeForm: this.props.homeForm ?? null,
      awayForm: this.props.awayForm ?? null,
      elapsed: this.props.elapsed ?? null,
      bettingContractAddress: this.props.bettingContractAddress,
      createdAt: this.props.createdAt,
      updatedAt: this.props.updatedAt,
    };
  }
}
