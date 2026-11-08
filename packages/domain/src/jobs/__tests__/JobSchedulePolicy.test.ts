import { describe, expect, it } from 'vitest';

import { nextRunAt, shouldRecordScheduledRun } from '../policies/JobSchedulePolicy';
import type { JobSchedule, JobState } from '../types';

const every5s: JobSchedule = { kind: 'self_rescheduled', everyMs: 5_000 };
const every1m: JobSchedule = { kind: 'interval', everyMs: 60_000 };
const cron10m: JobSchedule = { kind: 'cron', expression: '*/10 * * * *' };

const state = (over: Partial<JobState>): JobState => ({
    jobName: 'Demo', lastStatus: 'succeeded', lastStartedAt: null, lastFinishedAt: null, lastDurationMs: null,
    lastError: null, lastSuccessAt: null, consecutiveFailures: 0, runsTotal: 1, failuresTotal: 0, skippedLockTotal: 0,
    ...over,
});

describe('shouldRecordScheduledRun', () => {
    it('records every failure, even of fast jobs', () => {
        expect(shouldRecordScheduledRun(every5s, 'failed')).toBe(true);
    });

    it('records successes only for jobs ticking every minute or slower', () => {
        expect(shouldRecordScheduledRun(every5s, 'succeeded')).toBe(false);
        expect(shouldRecordScheduledRun(every1m, 'succeeded')).toBe(true);
        expect(shouldRecordScheduledRun(cron10m, 'succeeded')).toBe(true);
    });

    it('never records a skipped tick', () => {
        expect(shouldRecordScheduledRun(cron10m, 'skipped_lock')).toBe(false);
    });
});

describe('nextRunAt', () => {
    const now = new Date(Date.UTC(2026, 10, 8, 14, 15, 2));

    it('reads cron jobs from the expression', () => {
        expect(nextRunAt(cron10m, null, now)).toEqual(new Date(Date.UTC(2026, 10, 8, 14, 20)));
    });

    it('anchors interval jobs on the last start and self-rescheduled jobs on the last finish', () => {
        const s = state({ lastStartedAt: new Date(2026, 10, 8, 14, 15, 0), lastFinishedAt: new Date(2026, 10, 8, 14, 15, 1) });
        expect(nextRunAt(every1m, s, now)).toEqual(new Date(2026, 10, 8, 14, 16, 0));
        expect(nextRunAt(every5s, s, now)).toEqual(new Date(2026, 10, 8, 14, 15, 6));
    });

    it('is unknown before the first reported run', () => {
        expect(nextRunAt(every1m, null, now)).toBeNull();
    });
});
