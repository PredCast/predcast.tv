import { injectable } from 'tsyringe';

import type {
  GamificationNotification,
  GamificationNotificationPayload,
} from '@chiliztv/domain/gamification/entities/GamificationNotification';
import type { IGamificationNotificationRepository } from '@chiliztv/domain/gamification/repositories/IGamificationNotificationRepository';

import { supabaseClient as supabase } from '../../../database/supabase/client';
import { fail as failWith } from './gamificationRows';

const REPO = 'SupabaseGamificationNotificationRepository';
const fail = (action: string, message: string): never => failWith(REPO, action, message);

interface NotificationRow {
  id: number | string;
  account_id: string;
  kind: string;
  payload: Record<string, unknown>;
  created_at: string;
  seen_at: string | null;
}

const toNotification = (r: NotificationRow): GamificationNotification => ({
  id: Number(r.id),
  accountId: r.account_id,
  // `kind` is duplicated into the payload at write time; the payload is the typed union.
  payload: { ...r.payload, kind: r.kind } as GamificationNotificationPayload,
  createdAt: new Date(r.created_at),
  seenAt: r.seen_at ? new Date(r.seen_at) : null,
});

@injectable()
export class SupabaseGamificationNotificationRepository implements IGamificationNotificationRepository {
  async create(accountId: string, payload: GamificationNotificationPayload, at: Date): Promise<GamificationNotification> {
    const { data, error } = await supabase
      .from('gamification_notifications')
      .insert({ account_id: accountId, kind: payload.kind, payload, created_at: at.toISOString() })
      .select()
      .single();
    if (error || !data) return fail('create', error?.message ?? 'no row');
    return toNotification(data as NotificationRow);
  }

  async listUnseen(accountId: string, limit: number): Promise<ReadonlyArray<GamificationNotification>> {
    const { data, error } = await supabase
      .from('gamification_notifications')
      .select('*')
      .eq('account_id', accountId)
      .is('seen_at', null)
      .order('id', { ascending: false })
      .limit(limit);
    if (error) fail('list unseen', error.message);
    return ((data ?? []) as NotificationRow[]).map(toNotification);
  }

  async markSeen(accountId: string, ids: ReadonlyArray<number>, at: Date): Promise<number> {
    if (ids.length === 0) return 0;
    const { data, error } = await supabase
      .from('gamification_notifications')
      .update({ seen_at: at.toISOString() })
      .eq('account_id', accountId)
      .in('id', [...ids])
      .is('seen_at', null)
      .select('id');
    if (error) fail('mark seen', error.message);
    return (data ?? []).length;
  }

  async purgeSeenBefore(cutoff: Date): Promise<number> {
    const { data, error } = await supabase
      .from('gamification_notifications')
      .delete()
      .lt('seen_at', cutoff.toISOString())
      .select('id');
    if (error) fail('purge', error.message);
    return (data ?? []).length;
  }
}
