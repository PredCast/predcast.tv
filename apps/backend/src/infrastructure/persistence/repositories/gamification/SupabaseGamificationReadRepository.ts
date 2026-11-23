import { injectable } from 'tsyringe';

import type { AchievementId } from '@chiliztv/domain/gamification/catalog/achievements';
import type { GamificationSource } from '@chiliztv/domain/gamification/catalog/sources';
import type { UnlockedAchievement } from '@chiliztv/domain/gamification/entities/Progress';
import type { ParisDay } from '@chiliztv/domain/gamification/policies/parisDay';
import type { CardSource, IGamificationReadRepository } from '@chiliztv/domain/gamification/repositories/IGamificationReadRepository';

import { supabaseClient as supabase } from '../../../database/supabase/client';
import { fail as failWith, toProfile, type ProfileRow } from './gamificationRows';

const REPO = 'SupabaseGamificationReadRepository';
const fail = (action: string, message: string): never => failWith(REPO, action, message);

interface LinkRow { wallet_address: string; account_id: string }
interface AccountRow { id: string; created_at: string }
interface UserRow { wallet_address: string; username: string | null; avatar_url: string | null }
interface AchievementRow { account_id: string; achievement_id: string; tier: number; unlocked_at: string; context: Record<string, string | number> | null }
interface RankRow { account_id: string; cycle_id: number | string; rank: number }
interface ProgressRow { account_id: string; value: number | string }
interface LedgerXpRow { source: string; xp: number }

type Pairs = ReadonlyArray<{ readonly wallet: string; readonly accountId: string }>;

/** Read side of cards, badges and profiles: joins `users` itself (D8), a fixed number of queries per batch. */
@injectable()
export class SupabaseGamificationReadRepository implements IGamificationReadRepository {
  async findCardSources(wallets: ReadonlyArray<string>): Promise<ReadonlyArray<CardSource>> {
    const lower = [...new Set(wallets.map((w) => w.toLowerCase()))];
    if (lower.length === 0) return [];
    const { data, error } = await supabase
      .from('account_wallets')
      .select('wallet_address, account_id')
      .in('wallet_address', lower)
      .is('unlinked_at', null);
    if (error) fail('links', error.message);
    const pairs = ((data ?? []) as LinkRow[]).map((r) => ({ wallet: r.wallet_address, accountId: r.account_id }));
    return this.assemble(pairs);
  }

  async findCardSourceOfAccount(accountId: string, wallet: string): Promise<CardSource | null> {
    const [source] = await this.assemble([{ wallet: wallet.toLowerCase(), accountId }]);
    return source ?? null;
  }

  async sumXpBySourceOnDay(
    accountId: string,
    day: ParisDay,
  ): Promise<Readonly<Partial<Record<GamificationSource, number>>>> {
    const { data, error } = await supabase
      .from('gamification_ledger')
      .select('source, xp')
      .eq('account_id', accountId)
      .eq('day', day);
    if (error) fail('day xp', error.message);
    const sums: Partial<Record<GamificationSource, number>> = {};
    for (const row of (data ?? []) as LedgerXpRow[]) {
      // Sources are written only through the typed credit path.
      const source = row.source as GamificationSource;
      sums[source] = (sums[source] ?? 0) + row.xp;
    }
    return sums;
  }

  private async assemble(pairs: Pairs): Promise<ReadonlyArray<CardSource>> {
    if (pairs.length === 0) return [];
    const accountIds = [...new Set(pairs.map((p) => p.accountId))];
    const wallets = pairs.map((p) => p.wallet);
    const [accounts, users, profiles, achievements, ranks, streams] = await Promise.all([
      this.select<AccountRow>('accounts', 'id, created_at', 'id', accountIds),
      this.select<UserRow>('users', 'wallet_address, username, avatar_url', 'wallet_address', wallets),
      this.select<ProfileRow>('gamification_profiles', '*', 'account_id', accountIds),
      this.select<AchievementRow>('gamification_achievements', '*', 'account_id', accountIds),
      this.select<RankRow>('gamification_cycle_ranks', 'account_id, cycle_id, rank', 'account_id', accountIds),
      this.streamMinutes(accountIds),
    ]);
    const createdAt = new Map(accounts.map((a) => [a.id, new Date(a.created_at)]));
    const userOf = new Map(users.map((u) => [u.wallet_address.toLowerCase(), u]));
    const profileOf = new Map(profiles.map((p) => [p.account_id, toProfile(p)]));

    return pairs.flatMap((pair): CardSource[] => {
      const created = createdAt.get(pair.accountId);
      if (!created) return [];
      const own = ranks.filter((r) => r.account_id === pair.accountId);
      const best = own.reduce<number | null>((acc, r) => (acc === null || r.rank < acc ? r.rank : acc), null);
      const won = own.filter((r) => r.rank === 1).map((r) => Number(r.cycle_id));
      const user = userOf.get(pair.wallet);
      return [{
        wallet: pair.wallet,
        accountId: pair.accountId,
        accountCreatedAt: created,
        displayName: user?.username ?? null,
        avatarUrl: user?.avatar_url ?? null,
        profile: profileOf.get(pair.accountId) ?? null,
        unlocked: achievements.filter((a) => a.account_id === pair.accountId).map(toUnlocked),
        bestCycleRank: best,
        lastWonCycleId: won.length > 0 ? Math.max(...won) : null,
        streamMinutes: streams.get(pair.accountId) ?? 0,
      }];
    });
  }

  private async select<T>(table: string, columns: string, key: string, values: ReadonlyArray<string>): Promise<T[]> {
    const { data, error } = await supabase.from(table).select(columns).in(key, [...values]);
    if (error) fail(table, error.message);
    // Row shapes mirror migrations 043 / 044 and the `users` table.
    return (data ?? []) as unknown as T[];
  }

  private async streamMinutes(accountIds: ReadonlyArray<string>): Promise<Map<string, number>> {
    const { data, error } = await supabase
      .from('gamification_progress')
      .select('account_id, value')
      .eq('metric', 'stream_minutes')
      .in('account_id', [...accountIds]);
    if (error) fail('stream minutes', error.message);
    return new Map(((data ?? []) as ProgressRow[]).map((r) => [r.account_id, Number(r.value)]));
  }
}

const toUnlocked = (r: AchievementRow): UnlockedAchievement => ({
  accountId: r.account_id,
  // Achievement ids are written only from the typed catalog.
  achievementId: r.achievement_id as AchievementId,
  tier: r.tier,
  unlockedAt: new Date(r.unlocked_at),
  context: r.context ?? {},
});
