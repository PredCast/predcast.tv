import type { MatchProps } from './MatchProps';
import { finalScoreOf, penaltyWinnerOf } from './matchScore';

/** Nested JSON view of a match (teams / league grouped). Untyped, as `Match.toJSON` always was. */
export function matchToJSON(props: MatchProps): any {
  return {
    id: props.id,
    apiFootballId: props.apiFootballId,
    homeTeam: {
      id: props.homeTeamId,
      name: props.homeTeamName,
      logo: props.homeTeamLogo,
    },
    awayTeam: {
      id: props.awayTeamId,
      name: props.awayTeamName,
      logo: props.awayTeamLogo,
    },
    league: {
      id: props.leagueId,
      name: props.leagueName,
      logo: props.leagueLogo,
    },
    season: props.season,
    status: props.status,
    matchDate: props.matchDate,
    venue: props.venue,
    score: props.homeScore !== undefined && props.awayScore !== undefined
      ? { home: props.homeScore, away: props.awayScore }
      : null,
    homeForm: props.homeForm ?? null,
    awayForm: props.awayForm ?? null,
    elapsed: props.elapsed ?? null,
    htHomeScore: props.htHomeScore ?? null,
    htAwayScore: props.htAwayScore ?? null,
    aetHomeScore: props.aetHomeScore ?? null,
    aetAwayScore: props.aetAwayScore ?? null,
    penHomeScore: props.penHomeScore ?? null,
    penAwayScore: props.penAwayScore ?? null,
    isKnockout: props.isKnockout === true,
    finalScore: finalScoreOf(props),
    penaltyWinner: penaltyWinnerOf(props),
    firstHalfStartedAt: props.firstHalfStartedAt ?? null,
    halftimeStartedAt: props.halftimeStartedAt ?? null,
    secondHalfStartedAt: props.secondHalfStartedAt ?? null,
    bettingContractAddress: props.bettingContractAddress,
    bettingChainId: props.bettingChainId ?? null,
    bettingOpenedAt: props.bettingOpenedAt ?? null,
    publishedAt: props.publishedAt ?? null,
    createdAt: props.createdAt,
    updatedAt: props.updatedAt,
  };
}
