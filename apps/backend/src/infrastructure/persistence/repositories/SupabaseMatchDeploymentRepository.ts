import { injectable } from 'tsyringe';

import type {
  AdminMatchQuery,
  IMatchDeploymentRepository,
  MatchPage,
} from '@chiliztv/domain/matches/repositories/IMatchDeploymentRepository';
import {
  BLOCKED_STATUSES,
  FINISHED_STATUSES,
  LIVE_STATUSES,
  UPCOMING_STATUSES,
} from '@chiliztv/domain/matches/policies/BettablePolicy';

import { supabaseClient as supabase } from '../../database/supabase/client';
import { logger } from '../../logging/logger';
import { matchFromRow } from './matchRowMapper';

const STATUSES_BY_KIND: Record<NonNullable<AdminMatchQuery['statusKind']>, ReadonlyArray<string>> = {
  upcoming: UPCOMING_STATUSES,
  live: LIVE_STATUSES,
  finished: FINISHED_STATUSES,
  blocked: BLOCKED_STATUSES,
};

/** PostgREST `or()` filters are comma / parenthesis delimited, and `*` is its wildcard. */
const sanitizeSearch = (raw: string): string => raw.replace(/[^\p{L}\p{N}\s.'-]/gu, ' ').trim().replace(/\s+/g, ' ');

@injectable()
export class SupabaseMatchDeploymentRepository implements IMatchDeploymentRepository {
  async recordContractDeployed(apiFootballId: number, contractAddress: string, chainId: number): Promise<void> {
    // Lowercased like matchToRow so it keeps joining against bets.contract_address.
    await this.patch(apiFootballId, {
      betting_contract_address: contractAddress.toLowerCase(),
      betting_chain_id: chainId,
    });
  }

  async setBettingOpenedAt(apiFootballId: number, at: Date): Promise<void> {
    await this.patch(apiFootballId, { betting_opened_at: at.toISOString() });
  }

  async setPublishedAt(apiFootballId: number, at: Date | null): Promise<void> {
    await this.patch(apiFootballId, { published_at: at ? at.toISOString() : null });
  }

  async searchForAdmin(q: AdminMatchQuery): Promise<MatchPage> {
    let query = supabase.from('matches').select('*', { count: 'exact' });

    const term = q.search ? sanitizeSearch(q.search) : '';
    if (term) {
      query = query.or(
        ['home_team', 'away_team', 'league'].map((col) => `${col}->>name.ilike.*${term}*`).join(','),
      );
    }
    if (q.leagueId !== undefined) query = query.eq('league->>id', String(q.leagueId));
    if (q.from) query = query.gte('match_date', q.from.toISOString());
    if (q.to) query = query.lte('match_date', q.to.toISOString());
    if (q.statusKind) query = query.in('status', [...STATUSES_BY_KIND[q.statusKind]]);
    if (q.deployed !== undefined) {
      query = q.deployed
        ? query.not('betting_contract_address', 'is', null)
        : query.is('betting_contract_address', null);
    }
    if (q.published !== undefined) {
      query = q.published ? query.not('published_at', 'is', null) : query.is('published_at', null);
    }

    const { data, error, count } = await query
      .order('match_date', { ascending: q.sort === 'kickoff_asc' })
      .range(q.offset, q.offset + q.limit - 1);

    if (error) {
      logger.error('Failed to search matches for admin', { error: error.message });
      throw new Error('Failed to search matches');
    }
    return { items: (data ?? []).map((row) => matchFromRow(row)), total: count ?? 0 };
  }

  private async patch(apiFootballId: number, columns: Record<string, unknown>): Promise<void> {
    const { error } = await supabase.from('matches').update(columns).eq('api_football_id', apiFootballId);
    if (error) {
      logger.error('Failed to update match deployment columns', { apiFootballId, error: error.message });
      throw new Error('Failed to update match');
    }
  }
}
