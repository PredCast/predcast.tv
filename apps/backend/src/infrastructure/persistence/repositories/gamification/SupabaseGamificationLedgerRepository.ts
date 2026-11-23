import { injectable } from 'tsyringe';

import type { GamificationSource, LedgerReason } from '@chiliztv/domain/gamification/catalog/sources';
import type { LedgerEntry } from '@chiliztv/domain/gamification/entities/LedgerEntry';
import type { ParisDay } from '@chiliztv/domain/gamification/policies/parisDay';
import type {
  CheckInWrite,
  CheckInWriteResult,
  CreditRequest,
  CreditResult,
  IGamificationLedgerRepository,
  ReverseResult,
} from '@chiliztv/domain/gamification/repositories/IGamificationLedgerRepository';

import { supabaseClient as supabase } from '../../../database/supabase/client';
import { fail as failWith, toLedgerEntry, type LedgerRow } from './gamificationRows';

const REPO = 'SupabaseGamificationLedgerRepository';
const fail = (action: string, message: string): never => failWith(REPO, action, message);

interface CreditRow {
  inserted: boolean;
  ledger_id: number | null;
  credited_xp: number;
  new_total: number | string;
  old_level: number;
  new_level: number;
  old_level_peak: number;
}

interface CheckInRow {
  applied: boolean;
  credited_xp: number;
  new_total: number | string | null;
  old_level: number | null;
  new_level: number | null;
  old_level_peak: number | null;
}

interface ReverseRow {
  reversed: boolean;
  reversed_xp: number;
  new_total: number | string | null;
}

function firstRow<T>(data: unknown, action: string): T {
  const row = Array.isArray(data) ? (data[0] as T | undefined) : undefined;
  if (!row) return fail(action, 'no row returned');
  return row;
}

@injectable()
export class SupabaseGamificationLedgerRepository implements IGamificationLedgerRepository {
  async credit(request: CreditRequest): Promise<CreditResult> {
    const { data, error } = await supabase.rpc('gamification_credit', {
      p_account_id: request.accountId,
      p_source: request.source,
      p_ref_key: request.refKey,
      p_day: request.day,
      p_occurred_at: request.occurredAt.toISOString(),
      p_requested_xp: request.requestedXp,
      p_daily_cap: request.dailyCap,
      p_multiplier: request.multiplier,
      p_double_xp_id: request.doubleXpEventId,
      p_reason: request.reason,
      p_metadata: request.metadata,
      p_progress: request.progress,
    });
    if (error) fail('credit', error.message);
    const row = firstRow<CreditRow>(data, 'credit');
    if (!row.inserted) return { inserted: false, newTotal: Number(row.new_total), level: row.new_level };
    return {
      inserted: true,
      ledgerId: Number(row.ledger_id),
      creditedXp: row.credited_xp,
      newTotal: Number(row.new_total),
      oldLevel: row.old_level,
      newLevel: row.new_level,
      previousPeak: row.old_level_peak,
    };
  }

  async reverse(refKey: string, reason: LedgerReason, occurredAt: Date): Promise<ReverseResult> {
    const { data, error } = await supabase.rpc('gamification_reverse', {
      p_ref_key: refKey,
      p_reason: reason,
      p_occurred_at: occurredAt.toISOString(),
    });
    if (error) fail('reverse', error.message);
    const row = firstRow<ReverseRow>(data, 'reverse');
    if (!row.reversed) return { reversed: false };
    return { reversed: true, reversedXp: row.reversed_xp, newTotal: Number(row.new_total) };
  }

  async checkIn(write: CheckInWrite): Promise<CheckInWriteResult> {
    const { data, error } = await supabase.rpc('gamification_check_in', {
      p_account_id: write.accountId,
      p_day: write.day,
      p_now: write.now.toISOString(),
      p_expected_last: write.expectedLastDay,
      p_streak_current: write.streak.current,
      p_streak_best: write.streak.best,
      p_streak_freezes: write.streak.freezes,
      p_xp: write.xp,
      p_multiplier: write.multiplier,
      p_double_xp_id: write.doubleXpEventId,
    });
    if (error) fail('check-in', error.message);
    const row = firstRow<CheckInRow>(data, 'check-in');
    if (!row.applied) return { applied: false };
    return {
      applied: true,
      creditedXp: row.credited_xp,
      newTotal: Number(row.new_total),
      oldLevel: Number(row.old_level),
      newLevel: Number(row.new_level),
      previousPeak: Number(row.old_level_peak),
    };
  }

  async findByRefKey(refKey: string): Promise<LedgerEntry | null> {
    const { data, error } = await supabase.from('gamification_ledger').select('*').eq('ref_key', refKey).maybeSingle();
    if (error) fail('find by ref_key', error.message);
    return data ? toLedgerEntry(data as LedgerRow) : null;
  }

  async findLastCredited(accountId: string, source: GamificationSource): Promise<LedgerEntry | null> {
    const { data, error } = await supabase
      .from('gamification_ledger')
      .select('*')
      .eq('account_id', accountId)
      .eq('source', source)
      .is('reverses_id', null)
      .or('reason.is.null,reason.eq.daily_cap')
      .order('id', { ascending: false })
      .limit(10);
    if (error) fail('find last credited', error.message);
    const rows = ((data ?? []) as LedgerRow[]).map(toLedgerEntry);
    const reversed = await this.reversedRefKeys(rows.map((r) => r.refKey));
    return rows.find((r) => !reversed.has(r.refKey)) ?? null;
  }

  async listVolumeRowsByMarket(marketKey: string): Promise<ReadonlyArray<LedgerEntry>> {
    const { data, error } = await supabase
      .from('gamification_ledger')
      .select('*')
      .eq('source', 'bet_volume')
      .eq('metadata->>marketKey', marketKey)
      .is('reverses_id', null);
    if (error) fail('list volume rows', error.message);
    const rows = ((data ?? []) as LedgerRow[]).map(toLedgerEntry);
    const reversed = await this.reversedRefKeys(rows.map((r) => r.refKey));
    return rows.filter((r) => !reversed.has(r.refKey));
  }

  listReversibleByStream(streamId: string): Promise<ReadonlyArray<string>> {
    return this.listReversible('stream_time', 'streamId', streamId);
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
    if (error) fail('sum by source', error.message);
    const sums: Partial<Record<GamificationSource, number>> = {};
    for (const row of (data ?? []) as Array<{ source: GamificationSource; xp: number }>) {
      sums[row.source] = (sums[row.source] ?? 0) + row.xp;
    }
    return sums;
  }

  async listForAccount(accountId: string, beforeId: number | null, limit: number): Promise<ReadonlyArray<LedgerEntry>> {
    let query = supabase
      .from('gamification_ledger')
      .select('*')
      .eq('account_id', accountId)
      .order('id', { ascending: false })
      .limit(limit);
    if (beforeId !== null) query = query.lt('id', beforeId);
    const { data, error } = await query;
    if (error) fail('list for account', error.message);
    return ((data ?? []) as LedgerRow[]).map(toLedgerEntry);
  }

  private async listReversible(source: GamificationSource, metadataKey: string, value: string): Promise<ReadonlyArray<string>> {
    const { data, error } = await supabase
      .from('gamification_ledger')
      .select('ref_key')
      .eq('source', source)
      .eq(`metadata->>${metadataKey}`, value)
      .gt('xp', 0)
      .is('reverses_id', null);
    if (error) fail('list reversible', error.message);
    const keys = ((data ?? []) as Array<{ ref_key: string }>).map((r) => r.ref_key);
    const reversed = await this.reversedRefKeys(keys);
    return keys.filter((k) => !reversed.has(k));
  }

  /** Original ref_keys among `refKeys` that already have a `rev:` row. */
  private async reversedRefKeys(refKeys: ReadonlyArray<string>): Promise<Set<string>> {
    if (refKeys.length === 0) return new Set();
    const { data, error } = await supabase
      .from('gamification_ledger')
      .select('ref_key')
      .in('ref_key', refKeys.map((k) => `rev:${k}`));
    if (error) fail('find reversals', error.message);
    return new Set(((data ?? []) as Array<{ ref_key: string }>).map((r) => r.ref_key.slice('rev:'.length)));
  }
}
