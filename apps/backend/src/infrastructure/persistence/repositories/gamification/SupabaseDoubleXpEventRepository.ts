import { injectable } from 'tsyringe';

import type { DoubleXpEvent } from '@chiliztv/domain/gamification/entities/DoubleXpEvent';
import type {
  DoubleXpEventCreate,
  IDoubleXpEventRepository,
} from '@chiliztv/domain/gamification/repositories/IDoubleXpEventRepository';
import { ConflictError } from '@chiliztv/domain/shared/errors/ConflictError';

import { supabaseClient as supabase } from '../../../database/supabase/client';
import { EXCLUSION_VIOLATION, fail as failWith, toDoubleXpEvent, type DoubleXpRow } from './gamificationRows';

const REPO = 'SupabaseDoubleXpEventRepository';
const fail = (action: string, message: string): never => failWith(REPO, action, message);
const TABLE = 'gamification_double_xp_events';

@injectable()
export class SupabaseDoubleXpEventRepository implements IDoubleXpEventRepository {
  async create(event: DoubleXpEventCreate): Promise<DoubleXpEvent> {
    const { data, error } = await supabase
      .from(TABLE)
      .insert({
        name: event.name,
        multiplier: event.multiplier,
        sources: [...event.sources],
        starts_at: event.startsAt.toISOString(),
        ends_at: event.endsAt.toISOString(),
        created_by_wallet: event.createdByWallet.toLowerCase(),
        created_at: event.createdAt.toISOString(),
      })
      .select()
      .single();
    if (error?.code === EXCLUSION_VIOLATION) throw new ConflictError('Double XP event overlaps another one', { code: 'DOUBLE_XP_OVERLAP' });
    if (error || !data) return fail('create', error?.message ?? 'no row');
    return toDoubleXpEvent(data as DoubleXpRow);
  }

  async cancel(id: string, byWallet: string, at: Date): Promise<DoubleXpEvent | null> {
    const { data, error } = await supabase
      .from(TABLE)
      .update({ cancelled_at: at.toISOString(), cancelled_by_wallet: byWallet.toLowerCase() })
      .eq('id', id)
      .is('cancelled_at', null)
      .select()
      .maybeSingle();
    if (error) fail('cancel', error.message);
    return data ? toDoubleXpEvent(data as DoubleXpRow) : null;
  }

  async findById(id: string): Promise<DoubleXpEvent | null> {
    const { data, error } = await supabase.from(TABLE).select('*').eq('id', id).maybeSingle();
    if (error) fail('find', error.message);
    return data ? toDoubleXpEvent(data as DoubleXpRow) : null;
  }

  async listIntersecting(from: Date, to: Date): Promise<ReadonlyArray<DoubleXpEvent>> {
    const { data, error } = await supabase
      .from(TABLE)
      .select('*')
      .lt('starts_at', to.toISOString())
      .gt('ends_at', from.toISOString())
      .order('starts_at', { ascending: true });
    if (error) fail('list intersecting', error.message);
    return ((data ?? []) as DoubleXpRow[]).map(toDoubleXpEvent);
  }

  async listForAdmin(limit: number, beforeStartsAt: Date | null): Promise<ReadonlyArray<DoubleXpEvent>> {
    let query = supabase.from(TABLE).select('*').order('starts_at', { ascending: false }).limit(limit);
    if (beforeStartsAt) query = query.lt('starts_at', beforeStartsAt.toISOString());
    const { data, error } = await query;
    if (error) fail('list for admin', error.message);
    return ((data ?? []) as DoubleXpRow[]).map(toDoubleXpEvent);
  }
}
