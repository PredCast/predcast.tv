import { injectable } from 'tsyringe';

import type { JobRun, JobRunStatus, JobTick, JobTrigger } from '@chiliztv/domain/jobs/types';
import type {
  ClaimWindow,
  IJobRunRepository,
  ManualRequestResult,
  ManualRunRequest,
  RunOutcome,
} from '@chiliztv/domain/jobs/repositories/IJobRunRepository';

import { supabaseClient as supabase } from '../../database/supabase/client';
import { logger } from '../../logging/logger';

const TABLE = 'job_runs';
const UNIQUE_VIOLATION = '23505';
const MAX_ERROR_LENGTH = 2_000;

interface JobRunRow {
  id: string;
  job_name: string;
  trigger: JobTrigger;
  status: JobRunStatus;
  requested_by: string | null;
  requested_at: string;
  started_at: string | null;
  finished_at: string | null;
  duration_ms: number | null;
  error: string | null;
}

const toDate = (iso: string | null): Date | null => (iso ? new Date(iso) : null);

function fromRow(row: JobRunRow): JobRun {
  return {
    id: row.id,
    jobName: row.job_name,
    trigger: row.trigger,
    status: row.status,
    requestedBy: row.requested_by,
    requestedAt: new Date(row.requested_at),
    startedAt: toDate(row.started_at),
    finishedAt: toDate(row.finished_at),
    durationMs: row.duration_ms,
    error: row.error,
  };
}

function clip(error: string | null): string | null {
  return error && error.length > MAX_ERROR_LENGTH ? `${error.slice(0, MAX_ERROR_LENGTH)}…` : error;
}

function fail(action: string, error: { message: string }, context: Record<string, unknown> = {}): never {
  logger.error(`Job run ${action} failed`, { ...context, error: error.message });
  throw new Error(`Failed to ${action} job run`);
}

@injectable()
export class SupabaseJobRunRepository implements IJobRunRepository {
  async requestManual(request: ManualRunRequest): Promise<ManualRequestResult> {
    const { data, error } = await supabase
      .from(TABLE)
      .insert({
        job_name: request.jobName,
        trigger: 'manual',
        status: 'pending',
        requested_by: request.requestedBy.toLowerCase(),
        requested_at: request.requestedAt.toISOString(),
      })
      .select()
      .single();
    if (error?.code === UNIQUE_VIOLATION) return { ok: false, reason: 'ACTIVE_RUN_EXISTS' };
    if (error || !data) fail('request', error ?? { message: 'no row returned' }, { jobName: request.jobName });
    return { ok: true, run: fromRow(data as JobRunRow) };
  }

  async claimNextManual(window: ClaimWindow): Promise<JobRun | null> {
    const { data, error } = await supabase.rpc('claim_job_run', {
      p_now: window.now.toISOString(),
      p_stale_before: window.staleBefore.toISOString(),
      p_pending_before: window.pendingBefore.toISOString(),
    });
    if (error) fail('claim', error);
    const rows = (data ?? []) as JobRunRow[];
    return rows.length > 0 ? fromRow(rows[0]) : null;
  }

  async finish(runId: string, outcome: RunOutcome): Promise<void> {
    const { error } = await supabase
      .from(TABLE)
      .update({
        status: outcome.status,
        finished_at: outcome.finishedAt.toISOString(),
        duration_ms: outcome.durationMs,
        error: clip(outcome.error),
      })
      .eq('id', runId)
      .eq('status', 'running');
    if (error) fail('finish', error, { runId });
  }

  async recordScheduled(tick: JobTick): Promise<void> {
    const { error } = await supabase.from(TABLE).insert({
      job_name: tick.jobName,
      trigger: 'schedule',
      status: tick.status,
      requested_at: tick.startedAt.toISOString(),
      started_at: tick.startedAt.toISOString(),
      finished_at: tick.finishedAt.toISOString(),
      duration_ms: tick.durationMs,
      error: clip(tick.error),
    });
    if (error) fail('record', error, { jobName: tick.jobName });
  }

  async findById(runId: string): Promise<JobRun | null> {
    const { data, error } = await supabase.from(TABLE).select('*').eq('id', runId).maybeSingle();
    if (error) fail('read', error, { runId });
    return data ? fromRow(data as JobRunRow) : null;
  }

  async listRecent(filter: { readonly jobName?: string; readonly limit: number }): Promise<ReadonlyArray<JobRun>> {
    let query = supabase.from(TABLE).select('*').order('requested_at', { ascending: false }).limit(filter.limit);
    if (filter.jobName) query = query.eq('job_name', filter.jobName);
    const { data, error } = await query;
    if (error) fail('list', error, { jobName: filter.jobName });
    return ((data ?? []) as JobRunRow[]).map(fromRow);
  }

  async lastManualRequestAt(jobName: string): Promise<Date | null> {
    const { data, error } = await supabase
      .from(TABLE)
      .select('requested_at')
      .eq('job_name', jobName)
      .eq('trigger', 'manual')
      .order('requested_at', { ascending: false })
      .limit(1)
      .maybeSingle();
    if (error) fail('read', error, { jobName });
    return data ? new Date((data as { requested_at: string }).requested_at) : null;
  }

  async findManualActiveOrSince(since: Date): Promise<ReadonlyArray<JobRun>> {
    const { data, error } = await supabase
      .from(TABLE)
      .select('*')
      .eq('trigger', 'manual')
      .or(`status.in.(pending,running),requested_at.gte.${since.toISOString()}`)
      .order('requested_at', { ascending: false });
    if (error) fail('list', error);
    return ((data ?? []) as JobRunRow[]).map(fromRow);
  }

  async purgeBefore(cutoff: Date): Promise<number> {
    const { data, error } = await supabase
      .from(TABLE)
      .delete()
      .lt('requested_at', cutoff.toISOString())
      .not('status', 'in', '(pending,running)')
      .select('id');
    if (error) fail('purge', error);
    return (data ?? []).length;
  }
}
