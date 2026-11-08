import { injectable } from 'tsyringe';

import type { JobState, JobTick } from '@chiliztv/domain/jobs/types';
import type { IJobStateRepository } from '@chiliztv/domain/jobs/repositories/IJobStateRepository';

import { supabaseClient as supabase } from '../../database/supabase/client';
import { logger } from '../../logging/logger';

const MAX_ERROR_LENGTH = 2_000;

interface JobStateRow {
  job_name: string;
  last_status: 'succeeded' | 'failed' | null;
  last_started_at: string | null;
  last_finished_at: string | null;
  last_duration_ms: number | null;
  last_error: string | null;
  last_success_at: string | null;
  consecutive_failures: number;
  runs_total: number | string;
  failures_total: number | string;
  skipped_lock_total: number | string;
}

const toDate = (iso: string | null): Date | null => (iso ? new Date(iso) : null);

function fromRow(row: JobStateRow): JobState {
  return {
    jobName: row.job_name,
    lastStatus: row.last_status,
    lastStartedAt: toDate(row.last_started_at),
    lastFinishedAt: toDate(row.last_finished_at),
    lastDurationMs: row.last_duration_ms,
    lastError: row.last_error,
    lastSuccessAt: toDate(row.last_success_at),
    consecutiveFailures: row.consecutive_failures,
    // BIGINT columns come back as strings when they exceed 2^53; counters never will.
    runsTotal: Number(row.runs_total),
    failuresTotal: Number(row.failures_total),
    skippedLockTotal: Number(row.skipped_lock_total),
  };
}

@injectable()
export class SupabaseJobStateRepository implements IJobStateRepository {
  async recordTick(tick: JobTick): Promise<void> {
    const error = tick.error && tick.error.length > MAX_ERROR_LENGTH ? `${tick.error.slice(0, MAX_ERROR_LENGTH)}…` : tick.error;
    const { error: rpcError } = await supabase.rpc('record_job_tick', {
      p_job_name: tick.jobName,
      p_status: tick.status,
      p_started_at: tick.startedAt.toISOString(),
      p_finished_at: tick.finishedAt.toISOString(),
      p_duration_ms: tick.durationMs,
      p_error: error,
    });
    if (rpcError) {
      logger.error('record_job_tick failed', { jobName: tick.jobName, error: rpcError.message });
      throw new Error('Failed to record job tick');
    }
  }

  async findAll(): Promise<ReadonlyArray<JobState>> {
    const { data, error } = await supabase.from('job_state').select('*');
    if (error) {
      logger.error('job_state read failed', { error: error.message });
      throw new Error('Failed to read job state');
    }
    return ((data ?? []) as JobStateRow[]).map(fromRow);
  }
}
