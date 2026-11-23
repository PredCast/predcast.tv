import { injectable } from 'tsyringe';

import type { AchievementId } from '@chiliztv/domain/gamification/catalog/achievements';
import type { ProgressMetric } from '@chiliztv/domain/gamification/catalog/sources';
import type { ProgressSnapshot, ProgressValue, UnlockedAchievement } from '@chiliztv/domain/gamification/entities/Progress';
import type { ParisDay } from '@chiliztv/domain/gamification/policies/parisDay';
import type {
  AchievementUnlockWrite,
  IGamificationProgressRepository,
} from '@chiliztv/domain/gamification/repositories/IGamificationProgressRepository';

import { supabaseClient as supabase } from '../../../database/supabase/client';
import { fail as failWith } from './gamificationRows';

const REPO = 'SupabaseGamificationProgressRepository';
const fail = (action: string, message: string): never => failWith(REPO, action, message);

interface ProgressRow {
  metric: string;
  value: number | string;
  items: string[] | null;
}

interface AchievementRow {
  account_id: string;
  achievement_id: string;
  tier: number;
  unlocked_at: string;
  context: Record<string, string | number> | null;
}

@injectable()
export class SupabaseGamificationProgressRepository implements IGamificationProgressRepository {
  async getSnapshot(accountId: string): Promise<ProgressSnapshot> {
    const { data, error } = await supabase
      .from('gamification_progress')
      .select('metric, value, items')
      .eq('account_id', accountId);
    if (error) fail('snapshot', error.message);
    const snapshot: Partial<Record<ProgressMetric, ProgressValue>> = {};
    for (const row of (data ?? []) as ProgressRow[]) {
      // Metric names are written only from the typed ProgressDelta union.
      snapshot[row.metric as ProgressMetric] = { value: Number(row.value), items: row.items ?? [] };
    }
    return snapshot;
  }

  async getDailyCounter(accountId: string, day: ParisDay, bucket: string): Promise<number> {
    const { data, error } = await supabase
      .from('gamification_daily_counters')
      .select('value')
      .eq('account_id', accountId)
      .eq('day', day)
      .eq('bucket', bucket)
      .maybeSingle();
    if (error) fail('daily counter', error.message);
    return data ? Number((data as { value: number }).value) : 0;
  }

  async listAchievements(accountId: string): Promise<ReadonlyArray<UnlockedAchievement>> {
    const { data, error } = await supabase
      .from('gamification_achievements')
      .select('*')
      .eq('account_id', accountId)
      .order('unlocked_at', { ascending: true });
    if (error) fail('list achievements', error.message);
    return ((data ?? []) as AchievementRow[]).map((r) => ({
      accountId: r.account_id,
      achievementId: r.achievement_id as AchievementId,
      tier: r.tier,
      unlockedAt: new Date(r.unlocked_at),
      context: r.context ?? {},
    }));
  }

  async unlockAchievement(write: AchievementUnlockWrite): Promise<boolean> {
    const { data, error } = await supabase
      .from('gamification_achievements')
      .upsert(
        {
          account_id: write.accountId,
          achievement_id: write.achievementId,
          tier: write.tier,
          unlocked_at: write.unlockedAt.toISOString(),
          context: write.context,
        },
        { onConflict: 'account_id,achievement_id,tier', ignoreDuplicates: true },
      )
      .select('tier');
    if (error) fail('unlock achievement', error.message);
    return (data ?? []).length > 0;
  }
}
