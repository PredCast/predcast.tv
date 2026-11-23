import { injectable } from 'tsyringe';

import type { CycleRank } from '@chiliztv/domain/gamification/entities/CycleRank';
import type { ICycleRankRepository } from '@chiliztv/domain/gamification/repositories/ICycleRankRepository';

import { supabaseClient as supabase } from '../../../database/supabase/client';
import { fail as failWith } from './gamificationRows';

const REPO = 'SupabaseCycleRankRepository';
const fail = (action: string, message: string): never => failWith(REPO, action, message);
const TABLE = 'gamification_cycle_ranks';

interface RankRow {
  cycle_id: number | string;
  rank: number;
  account_id: string | null;
}

@injectable()
export class SupabaseCycleRankRepository implements ICycleRankRepository {
  async saveSnapshot(ranks: ReadonlyArray<CycleRank>): Promise<void> {
    if (ranks.length === 0) return;
    const { error } = await supabase.from(TABLE).upsert(
      ranks.map((r) => ({
        cycle_id: r.cycleId,
        wallet: r.wallet.toLowerCase(),
        account_id: r.accountId,
        rank: r.rank,
        score: r.score.toString(),
        frozen_at: r.frozenAt.toISOString(),
      })),
      { onConflict: 'cycle_id,wallet', ignoreDuplicates: true },
    );
    if (error) fail('save snapshot', error.message);
  }

  async findLastSnapshottedCycleId(): Promise<number | null> {
    const { data, error } = await supabase.from(TABLE).select('cycle_id').order('cycle_id', { ascending: false }).limit(1);
    if (error) fail('last cycle', error.message);
    const row = (data ?? [])[0] as RankRow | undefined;
    return row ? Number(row.cycle_id) : null;
  }

  async findBestRankForAccount(accountId: string): Promise<{ readonly cycleId: number; readonly rank: number } | null> {
    const { data, error } = await supabase
      .from(TABLE)
      .select('cycle_id, rank')
      .eq('account_id', accountId)
      .order('rank', { ascending: true })
      .order('cycle_id', { ascending: true })
      .limit(1);
    if (error) fail('best rank', error.message);
    const row = (data ?? [])[0] as RankRow | undefined;
    return row ? { cycleId: Number(row.cycle_id), rank: row.rank } : null;
  }

  async findCrownHolder(): Promise<{ readonly cycleId: number; readonly accountId: string | null } | null> {
    const last = await this.findLastSnapshottedCycleId();
    if (last === null) return null;
    const { data, error } = await supabase.from(TABLE).select('account_id').eq('cycle_id', last).eq('rank', 1).limit(1);
    if (error) fail('crown holder', error.message);
    const row = (data ?? [])[0] as RankRow | undefined;
    return { cycleId: last, accountId: row?.account_id ?? null };
  }

  async listWonCycles(accountId: string): Promise<ReadonlyArray<number>> {
    const { data, error } = await supabase
      .from(TABLE)
      .select('cycle_id')
      .eq('account_id', accountId)
      .eq('rank', 1)
      .order('cycle_id', { ascending: false });
    if (error) fail('won cycles', error.message);
    return ((data ?? []) as RankRow[]).map((r) => Number(r.cycle_id));
  }
}
