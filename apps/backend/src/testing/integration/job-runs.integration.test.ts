import { spawnSync } from 'child_process';
import { describe, expect, it } from 'vitest';

import { resolveSupabaseDbUrl } from './_setup';

/**
 * SQL behaviour of migration 042 (job_runs / job_state). Each case runs in a transaction that is
 * rolled back, so it needs a migrated local database but leaves it untouched.
 */
function databaseUrl(): string | null {
    try {
        return resolveSupabaseDbUrl();
    } catch {
        return null;
    }
}

const dbUrl = databaseUrl();
const reachable = dbUrl !== null && spawnSync('psql', [dbUrl, '-At', '-c', 'SELECT 1'], { stdio: 'pipe' }).status === 0;

/** Runs `body` between BEGIN and ROLLBACK and returns the non-empty output lines. */
function inRolledBackTx(body: string): string[] {
    const r = spawnSync('psql', [dbUrl as string, '-v', 'ON_ERROR_STOP=1', '-At', '-q'], {
        input: `BEGIN;\n${body}\nROLLBACK;\n`,
        stdio: 'pipe',
    });
    if (r.status !== 0) throw new Error(r.stderr.toString());
    return r.stdout.toString().split('\n').filter((line) => line.length > 0);
}

const CLAIM = `claim_job_run(now(), now() - interval '30 minutes', now() - interval '10 minutes')`;

describe.skipIf(!reachable)('integration · job runs (migration 042)', () => {
    it('fails a manual request no worker picked up, which frees the job for a new Run now', () => {
        const out = inRolledBackTx(`
            INSERT INTO job_runs (job_name, trigger, status, requested_by, requested_at)
            VALUES ('Demo', 'manual', 'pending', '0xabc', now() - interval '11 minutes');
            SELECT count(*) FROM ${CLAIM};
            SELECT status || '|' || error FROM job_runs WHERE job_name = 'Demo';
            INSERT INTO job_runs (job_name, trigger, status, requested_by) VALUES ('Demo', 'manual', 'pending', '0xabc');
            SELECT count(*) FROM job_runs WHERE job_name = 'Demo' AND status = 'pending';
        `);
        // The expired request is failed first, so the claim then has nothing left to take.
        expect(out).toEqual(['0', 'failed|No worker picked up the run', '1']);
    });

    it('fails a manual run whose worker died instead of running it again', () => {
        const out = inRolledBackTx(`
            INSERT INTO job_runs (job_name, trigger, status, requested_by, requested_at, started_at)
            VALUES ('Demo', 'manual', 'running', '0xabc', now() - interval '40 minutes', now() - interval '31 minutes');
            SELECT count(*) FROM ${CLAIM};
            SELECT status || '|' || error FROM job_runs WHERE job_name = 'Demo';
        `);
        expect(out).toEqual(['0', 'failed|Worker stopped before the run finished']);
    });

    it('claims a recent request and refuses a second active one on the same job', () => {
        const out = inRolledBackTx(`
            INSERT INTO job_runs (job_name, trigger, status, requested_by) VALUES ('Demo', 'manual', 'pending', '0xabc');
            SELECT status FROM ${CLAIM};
            DO $$
            BEGIN
                INSERT INTO job_runs (job_name, trigger, status, requested_by) VALUES ('Demo', 'manual', 'pending', '0xdef');
                RAISE NOTICE 'inserted';
            EXCEPTION WHEN unique_violation THEN
                PERFORM 1;
            END $$;
            SELECT count(*) FROM job_runs WHERE job_name = 'Demo';
        `);
        expect(out).toEqual(['running', '1']);
    });

    it('counts skipped ticks without replacing the last real run', () => {
        const out = inRolledBackTx(`
            SELECT record_job_tick('Demo', 'failed', now(), now(), 5, 'boom');
            SELECT record_job_tick('Demo', 'skipped_lock', now(), now(), 0, NULL);
            SELECT record_job_tick('Demo', 'skipped_lock', now(), now(), 0, NULL);
            SELECT last_status || '|' || consecutive_failures || '|' || runs_total || '|' || skipped_lock_total
              FROM job_state WHERE job_name = 'Demo';
            SELECT record_job_tick('Demo', 'succeeded', now(), now(), 7, NULL);
            SELECT last_status || '|' || consecutive_failures || '|' || coalesce(last_error, '-')
              FROM job_state WHERE job_name = 'Demo';
        `);
        expect(out).toEqual(['failed|1|1|2', 'succeeded|0|-']);
    });
});
