import { Match } from '@chiliztv/domain/matches/entities/Match';

import { logger } from '../../logging/logger';

export interface MatchRow {
  id: number;
  api_football_id: number;
  home_team: any;
  away_team: any;
  home_score: number | null;
  away_score: number | null;
  match_date: string;
  status: string;
  league: any;
  season: number;
  venue: string | null;
  home_form: string | null;
  away_form: string | null;
  elapsed_minutes: number | null;
  ht_home_score: number | null;
  ht_away_score: number | null;
  // Migration 035 — optional on the read side to tolerate pre-migration rows
  // and Supabase's "missing column → undefined" REST behaviour.
  aet_home_score?: number | null;
  aet_away_score?: number | null;
  pen_home_score?: number | null;
  pen_away_score?: number | null;
  is_knockout?: boolean | null;
  first_half_started_at?: string | null;
  halftime_started_at?: string | null;
  second_half_started_at?: string | null;
  betting_contract_address?: string | null;
  betting_chain_id?: number | null;
  betting_opened_at?: string | null;
  published_at?: string | null;
  created_at: string;
  updated_at: string;
}

/**
 * Columns only `SupabaseMatchDeploymentRepository` writes. Whole-row writes (`update`, upserts)
 * leave them out so a row read before a deployment or a publication cannot undo it.
 */
export const ADMIN_OWNED_COLUMNS = ['betting_chain_id', 'betting_opened_at', 'published_at'] as const;

const toDateOrNull = (iso: string | null | undefined): Date | null => (iso ? new Date(iso) : null);

export function matchFromRow(row: MatchRow): Match {
  const homeTeam = typeof row.home_team === 'string' ? JSON.parse(row.home_team) : row.home_team;
  const awayTeam = typeof row.away_team === 'string' ? JSON.parse(row.away_team) : row.away_team;
  const league = typeof row.league === 'string' ? JSON.parse(row.league) : row.league;

  return Match.reconstitute({
    id: row.id,
    apiFootballId: row.api_football_id,
    homeTeamId: homeTeam?.id || 0,
    homeTeamName: homeTeam?.name || 'Unknown',
    homeTeamLogo: homeTeam?.logo,
    awayTeamId: awayTeam?.id || 0,
    awayTeamName: awayTeam?.name || 'Unknown',
    awayTeamLogo: awayTeam?.logo,
    leagueId: league?.id || 0,
    leagueName: league?.name || 'Unknown',
    leagueLogo: league?.logo,
    leagueCountry: league?.country,
    season: row.season,
    status: row.status,
    matchDate: new Date(row.match_date),
    venue: row.venue || undefined,
    homeScore: row.home_score ?? undefined,
    awayScore: row.away_score ?? undefined,
    homeForm: row.home_form,
    awayForm: row.away_form,
    elapsed: row.elapsed_minutes,
    htHomeScore: row.ht_home_score,
    htAwayScore: row.ht_away_score,
    aetHomeScore: row.aet_home_score ?? null,
    aetAwayScore: row.aet_away_score ?? null,
    penHomeScore: row.pen_home_score ?? null,
    penAwayScore: row.pen_away_score ?? null,
    isKnockout: row.is_knockout === true,
    firstHalfStartedAt: toDateOrNull(row.first_half_started_at),
    halftimeStartedAt: toDateOrNull(row.halftime_started_at),
    secondHalfStartedAt: toDateOrNull(row.second_half_started_at),
    bettingContractAddress: row.betting_contract_address || undefined,
    bettingChainId: row.betting_chain_id ?? null,
    bettingOpenedAt: toDateOrNull(row.betting_opened_at),
    publishedAt: toDateOrNull(row.published_at),
    createdAt: new Date(row.created_at),
    updatedAt: new Date(row.updated_at),
  });
}

/** Full row, used for inserts. */
export function matchToRow(match: Match): Record<string, unknown> {
  const json = match.toJSON();

  logger.info('toRow - Converting to database format', {
    homeTeam: json.homeTeam,
    awayTeam: json.awayTeam,
    league: json.league
  });

  return {
    id: json.id,
    api_football_id: json.apiFootballId,
    home_team: json.homeTeam,
    away_team: json.awayTeam,
    league: json.league,
    season: json.season,
    status: json.status,
    match_date: json.matchDate,
    venue: json.venue,
    home_score: json.score?.home,
    away_score: json.score?.away,
    home_form: json.homeForm ?? null,
    away_form: json.awayForm ?? null,
    elapsed_minutes: json.elapsed ?? null,
    ht_home_score: json.htHomeScore ?? null,
    ht_away_score: json.htAwayScore ?? null,
    aet_home_score: json.aetHomeScore ?? null,
    aet_away_score: json.aetAwayScore ?? null,
    pen_home_score: json.penHomeScore ?? null,
    pen_away_score: json.penAwayScore ?? null,
    is_knockout: json.isKnockout === true,
    first_half_started_at: json.firstHalfStartedAt ?? null,
    halftime_started_at: json.halftimeStartedAt ?? null,
    second_half_started_at: json.secondHalfStartedAt ?? null,
    // Normalize to lowercase so it joins against `bets.contract_address`
    // (which the indexer always writes lowercased). Mixed-case rows that
    // predate this fix break the join and surface as "Unknown match".
    betting_contract_address: json.bettingContractAddress?.toLowerCase(),
    betting_chain_id: json.bettingChainId ?? null,
    betting_opened_at: json.bettingOpenedAt ?? null,
    published_at: json.publishedAt ?? null,
    created_at: json.createdAt,
    updated_at: json.updatedAt,
  };
}

/** Row for whole-row updates: without the id and the admin-owned columns. */
export function matchToUpdateRow(match: Match): Record<string, unknown> {
  const { id: _id, ...row } = matchToRow(match);
  for (const column of ADMIN_OWNED_COLUMNS) delete row[column];
  return row;
}
