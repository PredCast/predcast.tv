import { injectable } from 'tsyringe';

import type { GamificationProfile } from '@chiliztv/domain/gamification/entities/GamificationProfile';
import type {
  CosmeticsUpdate,
  IGamificationProfileRepository,
  ProfileDrift,
} from '@chiliztv/domain/gamification/repositories/IGamificationProfileRepository';

import { supabaseClient as supabase } from '../../../database/supabase/client';
import { fail as failWith, toProfile, type ProfileRow } from './gamificationRows';

const REPO = 'SupabaseGamificationProfileRepository';
const fail = (action: string, message: string): never => failWith(REPO, action, message);

interface DriftRow {
  drift_account_id: string;
  stored_total: number | string;
  ledger_total: number | string;
  stored_level: number;
  ledger_level: number;
}

@injectable()
export class SupabaseGamificationProfileRepository implements IGamificationProfileRepository {
  async findByAccountId(accountId: string): Promise<GamificationProfile | null> {
    const { data, error } = await supabase
      .from('gamification_profiles')
      .select('*')
      .eq('account_id', accountId)
      .maybeSingle();
    if (error) fail('find profile', error.message);
    return data ? toProfile(data as ProfileRow) : null;
  }

  async findByAccountIds(accountIds: ReadonlyArray<string>): Promise<ReadonlyArray<GamificationProfile>> {
    if (accountIds.length === 0) return [];
    const { data, error } = await supabase.from('gamification_profiles').select('*').in('account_id', [...accountIds]);
    if (error) fail('find profiles', error.message);
    return ((data ?? []) as ProfileRow[]).map(toProfile);
  }

  async updateCosmetics(accountId: string, cosmetics: CosmeticsUpdate, at: Date): Promise<void> {
    await this.ensure(accountId);
    const { error } = await supabase
      .from('gamification_profiles')
      .update({
        selected_title_id: cosmetics.titleId,
        selected_frame_id: cosmetics.frameId,
        showcase: [...cosmetics.showcase],
        updated_at: at.toISOString(),
      })
      .eq('account_id', accountId);
    if (error) fail('update cosmetics', error.message);
  }

  async suspend(accountId: string, reason: string, at: Date): Promise<boolean> {
    await this.ensure(accountId);
    const { data, error } = await supabase
      .from('gamification_profiles')
      .update({ suspended_at: at.toISOString(), suspended_reason: reason, updated_at: at.toISOString() })
      .eq('account_id', accountId)
      .is('suspended_at', null)
      .select('account_id');
    if (error) fail('suspend', error.message);
    return (data ?? []).length > 0;
  }

  async unsuspend(accountId: string, at: Date): Promise<boolean> {
    const { data, error } = await supabase
      .from('gamification_profiles')
      .update({ suspended_at: null, suspended_reason: null, updated_at: at.toISOString() })
      .eq('account_id', accountId)
      .not('suspended_at', 'is', null)
      .select('account_id');
    if (error) fail('unsuspend', error.message);
    return (data ?? []).length > 0;
  }

  async rebuildFromLedger(apply: boolean): Promise<ReadonlyArray<ProfileDrift>> {
    const { data, error } = await supabase.rpc('gamification_rebuild_profiles', { p_apply: apply });
    if (error) fail('rebuild', error.message);
    return ((data ?? []) as DriftRow[]).map((r) => ({
      accountId: r.drift_account_id,
      storedTotal: Number(r.stored_total),
      ledgerTotal: Number(r.ledger_total),
      storedLevel: r.stored_level,
      ledgerLevel: r.ledger_level,
    }));
  }

  /** XP and streak columns keep their defaults: only the SQL credit functions move them. */
  private async ensure(accountId: string): Promise<void> {
    const { error } = await supabase
      .from('gamification_profiles')
      .upsert({ account_id: accountId }, { onConflict: 'account_id', ignoreDuplicates: true });
    if (error) fail('ensure profile', error.message);
  }
}
