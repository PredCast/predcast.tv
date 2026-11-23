import { injectable } from 'tsyringe';

import type { CycleScore } from '@chiliztv/domain/gamification/policies/cycleSnapshotPolicy';
import type { ClosedCycle, ILeaderboardCycleSource } from '@chiliztv/domain/gamification/repositories/ILeaderboardCycleSource';

import { supabaseClient as supabase } from '../../../database/supabase/client';
import { fail as failWith } from './gamificationRows';

const REPO = 'SupabaseLeaderboardCycleSource';
const fail = (action: string, message: string): never => failWith(REPO, action, message);

@injectable()
export class SupabaseLeaderboardCycleSource implements ILeaderboardCycleSource {
  async listClosedCyclesAfter(afterCycleId: number | null, closedFrom: Date, limit: number): Promise<ReadonlyArray<ClosedCycle>> {
    let query = supabase
      .from('leaderboard_epochs')
      .select('epoch_id, closed_at')
      .in('status', ['confirmed', 'rolled_over'])
      .not('epoch_id', 'is', null)
      .gte('closed_at', closedFrom.toISOString())
      .order('epoch_id', { ascending: true })
      .limit(limit);
    if (afterCycleId !== null) query = query.gt('epoch_id', afterCycleId);
    const { data, error } = await query;
    if (error) fail('list closed cycles', error.message);
    return ((data ?? []) as Array<{ epoch_id: number | string; closed_at: string }>).map((r) => ({
      cycleId: Number(r.epoch_id),
      closedAt: new Date(r.closed_at),
    }));
  }

  async listTopScores(cycleId: number, limit: number): Promise<ReadonlyArray<CycleScore>> {
    // numeric(78,0) is read as text: a JSON number would lose precision.
    const { data, error } = await supabase
      .from('leaderboard_cycle_scores')
      .select('user_address, score::text')
      .eq('cycle_id', cycleId)
      .gt('score', 0)
      .order('score', { ascending: false })
      .order('user_address', { ascending: true })
      .limit(limit);
    if (error) fail('list top scores', error.message);
    return ((data ?? []) as Array<{ user_address: string; score: string }>).map((r) => ({
      wallet: r.user_address.toLowerCase(),
      score: BigInt(r.score),
    }));
  }
}
