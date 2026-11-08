import { injectable } from 'tsyringe';

import type {
  MatchOperation,
  MatchOperationKind,
  MatchOperationParams,
  MatchOperationProgress,
  MatchOperationStatus,
} from '@chiliztv/domain/matches/operations/MatchOperation';
import type {
  EnqueueResult,
  IMatchOperationRepository,
  NewMatchOperation,
} from '@chiliztv/domain/matches/repositories/IMatchOperationRepository';

import { supabaseClient as supabase } from '../../database/supabase/client';
import { logger } from '../../logging/logger';

const TABLE = 'match_admin_operations';
const UNIQUE_VIOLATION = '23505';

interface OperationRow {
  id: string;
  match_id: number;
  kind: MatchOperationKind;
  status: MatchOperationStatus;
  chain_id: number;
  params: MatchOperationParams | null;
  progress: MatchOperationProgress | null;
  error: string | null;
  requested_by: string;
  attempts: number;
  created_at: string;
  started_at: string | null;
  heartbeat_at: string | null;
  finished_at: string | null;
}

const toDate = (iso: string | null): Date | null => (iso ? new Date(iso) : null);

function fromRow(row: OperationRow): MatchOperation {
  return {
    id: row.id,
    matchId: row.match_id,
    kind: row.kind,
    status: row.status,
    chainId: row.chain_id,
    params: row.params ?? {},
    progress: row.progress ?? {},
    error: row.error,
    requestedBy: row.requested_by,
    attempts: row.attempts,
    createdAt: new Date(row.created_at),
    startedAt: toDate(row.started_at),
    heartbeatAt: toDate(row.heartbeat_at),
    finishedAt: toDate(row.finished_at),
  };
}

function throwRepoError(action: string, error: { message: string }, context: Record<string, unknown> = {}): never {
  logger.error(`Match operation ${action} failed`, { ...context, error: error.message });
  throw new Error(`Failed to ${action} match operation`);
}

@injectable()
export class SupabaseMatchOperationRepository implements IMatchOperationRepository {
  async enqueue(input: NewMatchOperation): Promise<EnqueueResult> {
    const { data, error } = await supabase
      .from(TABLE)
      .insert({
        match_id: input.matchId,
        kind: input.kind,
        chain_id: input.chainId,
        params: input.params,
        requested_by: input.requestedBy,
        created_at: input.createdAt.toISOString(),
      })
      .select()
      .single();
    if (error?.code === UNIQUE_VIOLATION) return { ok: false, reason: 'ACTIVE_OPERATION_EXISTS' };
    if (error || !data) throwRepoError('enqueue', error ?? { message: 'no row returned' }, { matchId: input.matchId });
    return { ok: true, operation: fromRow(data as OperationRow) };
  }

  async claimNext(now: Date, staleBefore: Date): Promise<MatchOperation | null> {
    const { data, error } = await supabase.rpc('claim_match_admin_operation', {
      p_now: now.toISOString(),
      p_stale_before: staleBefore.toISOString(),
    });
    if (error) throwRepoError('claim', error);
    const rows = (data ?? []) as OperationRow[];
    return rows.length > 0 ? fromRow(rows[0]) : null;
  }

  async recordProgress(id: string, progress: MatchOperationProgress, now: Date): Promise<void> {
    const current = await this.findById(id);
    if (!current) throwRepoError('record progress on', { message: 'operation not found' }, { id });
    const { error } = await supabase
      .from(TABLE)
      .update({ progress: { ...current.progress, ...progress }, heartbeat_at: now.toISOString() })
      .eq('id', id);
    if (error) throwRepoError('record progress on', error, { id });
  }

  async complete(id: string, now: Date): Promise<void> {
    await this.finish(id, { status: 'succeeded', error: null, finished_at: now.toISOString() });
  }

  async fail(id: string, error: string, now: Date): Promise<void> {
    await this.finish(id, { status: 'failed', error, finished_at: now.toISOString() });
  }

  async findById(id: string): Promise<MatchOperation | null> {
    const { data, error } = await supabase.from(TABLE).select('*').eq('id', id).maybeSingle();
    if (error) throwRepoError('read', error, { id });
    return data ? fromRow(data as OperationRow) : null;
  }

  async findLatestByMatchIds(matchIds: ReadonlyArray<number>): Promise<ReadonlyMap<number, MatchOperation>> {
    const latest = new Map<number, MatchOperation>();
    if (matchIds.length === 0) return latest;
    const { data, error } = await supabase
      .from(TABLE)
      .select('*')
      .in('match_id', [...matchIds])
      .order('created_at', { ascending: false });
    if (error) throwRepoError('list', error);
    for (const row of (data ?? []) as OperationRow[]) {
      if (!latest.has(row.match_id)) latest.set(row.match_id, fromRow(row));
    }
    return latest;
  }

  async findActiveOrSince(since: Date, limit: number): Promise<ReadonlyArray<MatchOperation>> {
    const { data, error } = await supabase
      .from(TABLE)
      .select('*')
      .or(`status.in.(pending,running),created_at.gte.${since.toISOString()}`)
      .order('created_at', { ascending: false })
      .limit(limit);
    if (error) throwRepoError('list', error);
    return ((data ?? []) as OperationRow[]).map(fromRow);
  }

  async cancelPending(id: string, cancelledBy: string, now: Date): Promise<boolean> {
    const { data, error } = await supabase
      .from(TABLE)
      .update({
        status: 'failed',
        error: 'Cancelled before a worker picked it up',
        progress: { cancelledBy: cancelledBy.toLowerCase() },
        finished_at: now.toISOString(),
      })
      .eq('id', id)
      .eq('status', 'pending')
      .select('id');
    if (error) throwRepoError('cancel', error, { id });
    return (data ?? []).length > 0;
  }

  private async finish(id: string, columns: Record<string, unknown>): Promise<void> {
    const { error } = await supabase.from(TABLE).update(columns).eq('id', id);
    if (error) throwRepoError('finish', error, { id });
  }
}
