// RawMatch is the domain-level representation returned by IFootballApiService.
// Transformation from API-Football-specific types happens inside FootballApiAdapterImpl (infrastructure).
export interface RawMatch {
  apiFootballId: number;
  homeTeamId: number;
  homeTeamName: string;
  homeTeamLogo: string;
  awayTeamId: number;
  awayTeamName: string;
  awayTeamLogo: string;
  leagueId: number;
  leagueName: string;
  leagueLogo: string;
  leagueCountry: string;
  season: number;
  status: string;
  matchDate: Date;
  venue?: string;
  homeScore: number | null;
  awayScore: number | null;
  /**
   * In-game minute as reported by API-Football. `null` outside the live
   * window (NS, HT pause, post-FT). Callers MUST preserve the previous
   * value in DB instead of overwriting with null during HT so the UI
   * displays a coherent minute counter across the break.
   */
  elapsed: number | null;
}

export interface IFootballApiService {
  /**
   * Window-bounded fetch (now-1d → now+daysAhead). Suitable for the
   * pre-match sync that runs every 10 min and needs to ingest new fixtures
   * + W/D/L form. NOT suitable for live score polling — see
   * {@link fetchLiveMatches}.
   */
  fetchMatches(daysAhead: number): Promise<RawMatch[]>;
  /**
   * Subset of currently in-play fixtures across all allowed leagues. Uses
   * `/fixtures?live=all` — one HTTP call regardless of how many matches are
   * concurrently live (Premier League weekend = ~10 fixtures, single req).
   * Quota-efficient enough to run every 30s. Returns `[]` (not stale) when
   * no live match is in the allowed leagues.
   */
  fetchLiveMatches(): Promise<RawMatch[]>;
  /**
   * Latest 5 W/D/L results for the team, all competitions combined.
   * Returns null when API-Football has no finished fixtures for this team.
   */
  getTeamForm(teamId: number): Promise<string | null>;
  /**
   * `true` when the adapter is currently serving cached/stale data because
   * the upstream is unreachable (circuit open) or the daily quota is
   * exhausted. Consumers should surface this on response DTOs so the UI can
   * render a "Stale data" badge instead of pretending the score is current.
   */
  isDataStale(): boolean;
}
