import 'reflect-metadata';
import { describe, expect, it } from 'vitest';

import type { ILockService, WithLockOptions } from '@chiliztv/domain/shared/ports/ILockService';
import type { IJobStateRepository } from '@chiliztv/domain/jobs/repositories/IJobStateRepository';
import type { IJobRunRepository } from '@chiliztv/domain/jobs/repositories/IJobRunRepository';
import type { JobSchedule, JobTick } from '@chiliztv/domain/jobs/types';

import { MockClock } from '../../../testing/clock/MockClock';
import { JobExecutor } from '../JobExecutor';
import type { RegisteredJob } from '../JobRegistry';

type LockMode = 'ran' | 'taken';

function lockService(mode: LockMode): ILockService {
    return {
        async withLock<T>(opts: WithLockOptions<T>) {
            if (mode === 'taken') return { ran: false as const, reason: 'taken' as const };
            return { ran: true as const, result: await opts.onAcquired() };
        },
    } as ILockService;
}

function setup(mode: LockMode, opts: { failRecording?: boolean } = {}) {
    const ticks: JobTick[] = [];
    const scheduled: JobTick[] = [];
    const states = {
        async recordTick(t: JobTick) {
            if (opts.failRecording) throw new Error('supabase down');
            ticks.push(t);
        },
        async findAll() { return []; },
    } as IJobStateRepository;
    const runs = { async recordScheduled(t: JobTick) { scheduled.push(t); } } as unknown as IJobRunRepository;
    const executor = new JobExecutor(lockService(mode), states, runs, new MockClock(new Date('2026-11-08T14:00:00Z')));
    return { executor, ticks, scheduled };
}

function job(schedule: JobSchedule, run: () => Promise<void> = async () => undefined): RegisteredJob {
    return { name: 'Demo', description: '', category: 'safe', schedule, lockTtlSeconds: 60, lock: { key: 'lock:job:demo', ttlSeconds: 60 }, run };
}

const fast: JobSchedule = { kind: 'self_rescheduled', everyMs: 5_000 };
const minutely: JobSchedule = { kind: 'cron', expression: '* * * * *' };
const boom = async () => { throw new Error('upstream 429'); };

describe('JobExecutor', () => {
    it('records a scheduled success in job_state and, for minute-or-slower jobs, in job_runs', async () => {
        const { executor, ticks, scheduled } = setup('ran');
        const tick = await executor.execute(job(minutely), 'schedule');
        expect(tick.status).toBe('succeeded');
        expect(ticks).toHaveLength(1);
        expect(scheduled).toHaveLength(1);
    });

    it('keeps fast-job successes out of job_runs but records their failures', async () => {
        const ok = setup('ran');
        await ok.executor.execute(job(fast), 'schedule');
        expect(ok.scheduled).toHaveLength(0);

        const ko = setup('ran');
        const tick = await ko.executor.execute(job(fast, boom), 'schedule');
        expect(tick).toMatchObject({ status: 'failed', error: 'upstream 429' });
        expect(ko.scheduled).toHaveLength(1);
    });

    it('only counts a tick skipped because another worker holds the lock', async () => {
        const { executor, ticks, scheduled } = setup('taken');
        const tick = await executor.execute(job(minutely), 'schedule');
        expect(tick.status).toBe('skipped_lock');
        expect(ticks.map((t) => t.status)).toEqual(['skipped_lock']);
        expect(scheduled).toHaveLength(0);
    });

    it('leaves manual runs to the runner (no scheduled row)', async () => {
        const { executor, scheduled } = setup('ran');
        await executor.execute(job(minutely, boom), 'manual');
        expect(scheduled).toHaveLength(0);
    });

    it('never fails the job because recording failed', async () => {
        const { executor } = setup('ran', { failRecording: true });
        await expect(executor.execute(job(minutely), 'schedule')).resolves.toMatchObject({ status: 'succeeded' });
    });
});
