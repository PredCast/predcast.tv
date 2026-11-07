import type { Match } from '@chiliztv/domain/matches/entities/Match';
import { resolveMatchFanTokens } from '@chiliztv/domain/fan-tokens/policies/resolveMatchFanTokens';
import { TEAM_FAN_TOKENS, type MatchResponseDto } from '@chiliztv/shared';

/** Explicit mapping so the wire shape is checked against the shared schema (`Match.toJSON` is untyped). */
export function toMatchResponseDto(match: Match, dataStale: boolean, defaultChainId: number): MatchResponseDto {
  const p = match.toRaw();
  const tokens = resolveMatchFanTokens(p.homeTeamId, p.awayTeamId, TEAM_FAN_TOKENS);
  return {
    // MatchProps.id is typed number but holds the `matches.id` UUID at runtime.
    id: String(p.id),
    apiFootballId: p.apiFootballId,
    homeTeam: { id: p.homeTeamId, name: p.homeTeamName, logo: p.homeTeamLogo },
    awayTeam: { id: p.awayTeamId, name: p.awayTeamName, logo: p.awayTeamLogo },
    league: { id: p.leagueId, name: p.leagueName, logo: p.leagueLogo, country: p.leagueCountry },
    season: p.season,
    status: p.status,
    matchDate: p.matchDate.toISOString(),
    venue: p.venue,
    score: p.homeScore !== undefined && p.awayScore !== undefined ? { home: p.homeScore, away: p.awayScore } : null,
    homeForm: p.homeForm ?? null,
    awayForm: p.awayForm ?? null,
    elapsed: p.elapsed ?? null,
    htHomeScore: p.htHomeScore ?? null,
    htAwayScore: p.htAwayScore ?? null,
    aetHomeScore: p.aetHomeScore ?? null,
    aetAwayScore: p.aetAwayScore ?? null,
    penHomeScore: p.penHomeScore ?? null,
    penAwayScore: p.penAwayScore ?? null,
    isKnockout: p.isKnockout === true,
    finalScore: match.getFinalScore(),
    penaltyWinner: match.getPenaltyWinner(),
    firstHalfStartedAt: p.firstHalfStartedAt?.toISOString() ?? null,
    halftimeStartedAt: p.halftimeStartedAt?.toISOString() ?? null,
    secondHalfStartedAt: p.secondHalfStartedAt?.toISOString() ?? null,
    bettingContractAddress: p.bettingContractAddress,
    bettingChainId: p.bettingContractAddress ? p.bettingChainId ?? defaultChainId : null,
    bettingOpenedAt: p.bettingOpenedAt?.toISOString() ?? null,
    dataStale,
    homeFanToken: tokens.home,
    awayFanToken: tokens.away,
    createdAt: p.createdAt.toISOString(),
    updatedAt: p.updatedAt.toISOString(),
  };
}
