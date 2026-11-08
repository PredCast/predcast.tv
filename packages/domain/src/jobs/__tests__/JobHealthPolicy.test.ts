import { describe, expect, it } from 'vitest';

import { jobHealth } from '../policies/JobHealthPolicy';
import type { JobDescriptor, JobState } from '../types';

const job: JobDescriptor = { name: 'Demo', description: '', category: 'safe', schedule: { kind: 'interval', everyMs: 60_000 }, lockTtlSeconds: 60 };
const cronJob: JobDescriptor = { ...job, schedule: { kind: 'cron', expression: '*/10 * * * *' } };
const t = (iso: string) => new Date(`2026-11-08T${iso}Z`);

const state = (over: Partial<JobState>): JobState => ({
    jobName: 'Demo', lastStatus: 'succeeded', lastStartedAt: t('14:00:00'), lastFinishedAt: t('14:00:01'), lastDurationMs: 1000,
    lastError: null, lastSuccessAt: t('14:00:01'), consecutiveFailures: 0, runsTotal: 3, failuresTotal: 0, skippedLockTotal: 0,
    ...over,
});

describe('jobHealth', () => {
    it('reads never_ran without a recorded run', () => {
        expect(jobHealth(job, null, t('14:00:00'))).toBe('never_ran');
    });

    it('reads failing when the last real run failed', () => {
        expect(jobHealth(job, state({ lastStatus: 'failed', consecutiveFailures: 3 }), t('14:00:30'))).toBe('failing');
    });

    it('reads ok while ticks arrive on time', () => {
        expect(jobHealth(job, state({}), t('14:01:30'))).toBe('ok');
        expect(jobHealth(cronJob, state({}), t('14:12:00'))).toBe('ok');
    });

    it('reads late once the expected tick is overdue by two periods plus the lock TTL', () => {
        // Next tick due 14:01:00; grace = 2 × 60 s + 60 s.
        expect(jobHealth(job, state({}), t('14:03:59'))).toBe('ok');
        expect(jobHealth(job, state({}), t('14:04:01'))).toBe('late');
        // Cron due 14:10; grace = 2 × 10 min + 60 s.
        expect(jobHealth(cronJob, state({}), t('14:31:01'))).toBe('late');
    });
});
