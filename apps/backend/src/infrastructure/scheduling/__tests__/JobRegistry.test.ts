import 'reflect-metadata';
import { describe, expect, it } from 'vitest';

import { parseCron } from '@chiliztv/domain/jobs/policies/cron';
import { MANUAL_RUN_PENDING_TIMEOUT_MS, MANUAL_RUN_STALE_AFTER_MS } from '@chiliztv/domain/jobs/policies/ManualRunPolicy';

import { JobLocks } from '../JobLockConfig';
import { JobRegistry } from '../JobRegistry';

/** Any job class: only the schedule getters and execute() are read by the registry. */
const stubJob = { getSchedule: () => '*/5 * * * *', getIntervalMs: () => 60_000, execute: async () => undefined };
type RegistryArgs = ConstructorParameters<typeof JobRegistry>;
// Stubs stand in for the 16 job classes; the registry never touches anything else on them.
const registry = new JobRegistry(...(Array.from({ length: 16 }, () => stubJob) as unknown as RegistryArgs));

describe('JobRegistry', () => {
    it('registers every job once, with a lock of its own', () => {
        const names = registry.list().map((j) => j.name);
        expect(new Set(names).size).toBe(names.length);
        expect(names).toHaveLength(16);
        const keys = registry.registered().map((j) => j.lock.key);
        expect(new Set(keys).size).toBe(keys.length);
    });

    it('only uses cron syntax the next-run reader supports', () => {
        for (const job of registry.list()) {
            if (job.schedule.kind === 'cron') expect(() => parseCron(job.schedule.expression), job.name).not.toThrow();
        }
    });

    it('classifies the jobs that are safe to run locally as safe', () => {
        for (const name of ['LiftExpiredBans', 'ViewerReconcile', 'StaleStreamCleanup', 'PurgeJobRuns']) {
            expect(registry.get(name)?.category, name).toBe('safe');
        }
        for (const name of ['SyncMatches', 'SyncLiveMatches', 'ProcessMatchOperations', 'ResolveMarkets', 'CloseLiveMarkets', 'AdvanceEpoch']) {
            expect(registry.get(name)?.category, name).toBe('on_chain');
        }
        expect(registry.get('RefreshTokenPrices')?.category).toBe('quota');
    });
});

describe('manual run thresholds', () => {
    it('declares a run dead only after the longest lock TTL has expired', () => {
        const maxTtlMs = Math.max(...Object.values(JobLocks).map((l) => l.ttlSeconds)) * 1_000;
        expect(MANUAL_RUN_STALE_AFTER_MS).toBeGreaterThan(maxTtlMs);
    });

    it('gives workers several polling ticks before failing an unclaimed request', () => {
        expect(MANUAL_RUN_PENDING_TIMEOUT_MS).toBeGreaterThanOrEqual(60_000);
    });
});
