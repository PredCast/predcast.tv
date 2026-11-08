import 'reflect-metadata';
import { describe, expect, it } from 'vitest';

import type { AuditEntry, IAuditTrail } from '@chiliztv/domain/admin/ports/IAuditTrail';
import type { IJobCatalog } from '@chiliztv/domain/jobs/ports/IJobCatalog';
import type { IJobRunSignal } from '@chiliztv/domain/jobs/ports/IJobRunSignal';
import type { IJobRunRepository, ManualRequestResult, ManualRunRequest } from '@chiliztv/domain/jobs/repositories/IJobRunRepository';
import type { IRateLimitService, RateLimitDecision } from '@chiliztv/domain/shared/ports/IRateLimitService';
import type { JobDescriptor } from '@chiliztv/domain/jobs/types';

import { MockClock } from '../../../testing/clock/MockClock';
import { RequestJobRunUseCase } from '../use-cases/RequestJobRunUseCase';

const NOW = new Date('2026-11-08T14:00:00Z');
const jobs: JobDescriptor[] = [
    { name: 'LiftExpiredBans', description: '', category: 'safe', schedule: { kind: 'interval', everyMs: 60_000 }, lockTtlSeconds: 60 },
    { name: 'ResolveMarkets', description: '', category: 'on_chain', schedule: { kind: 'interval', everyMs: 3_600_000 }, lockTtlSeconds: 600 },
];

interface Options {
    lastRequestAt?: Date | null;
    active?: boolean;
    rateLimited?: boolean;
    signalDown?: boolean;
}

function setup(opts: Options = {}) {
    const requests: ManualRunRequest[] = [];
    const audits: AuditEntry[] = [];
    const notified: string[] = [];
    const catalog: IJobCatalog = { list: () => jobs, get: (n) => jobs.find((j) => j.name === n) ?? null };
    const runs = {
        async lastManualRequestAt() { return opts.lastRequestAt ?? null; },
        async requestManual(r: ManualRunRequest): Promise<ManualRequestResult> {
            requests.push(r);
            if (opts.active) return { ok: false, reason: 'ACTIVE_RUN_EXISTS' };
            return {
                ok: true,
                run: { id: 'run-1', jobName: r.jobName, trigger: 'manual', status: 'pending', requestedBy: r.requestedBy, requestedAt: r.requestedAt, startedAt: null, finishedAt: null, durationMs: null, error: null },
            };
        },
    } as unknown as IJobRunRepository;
    const signal: IJobRunSignal = {
        async notify(id) {
            if (opts.signalDown) throw new Error('redis down');
            notified.push(id);
        },
        subscribe: () => () => undefined,
    };
    const rateLimit: IRateLimitService = {
        async check(): Promise<RateLimitDecision> {
            return opts.rateLimited ? { allowed: false, retryAfterSeconds: 30 } : { allowed: true, remaining: 9, resetAt: NOW };
        },
    };
    const audit: IAuditTrail = { async record(e) { audits.push(e); } };
    const useCase = new RequestJobRunUseCase(catalog, runs, signal, rateLimit, audit, new MockClock(NOW));
    return { useCase, requests, audits, notified };
}

const ctx = (role: string) => ({ actorWallet: '0xAbC', actorRole: role });

describe('RequestJobRunUseCase', () => {
    it('queues a safe job for an admin, audits it and wakes the workers', async () => {
        const { useCase, audits, notified } = setup();
        await expect(useCase.execute({ jobName: 'LiftExpiredBans', confirm: false }, ctx('admin'))).resolves.toEqual({ runId: 'run-1', status: 'pending' });
        expect(audits).toMatchObject([{ action: 'jobs.run', targetType: 'job', targetId: 'LiftExpiredBans' }]);
        expect(notified).toEqual(['run-1']);
    });

    it('rejects an unknown job with 404', async () => {
        await expect(setup().useCase.execute({ jobName: 'Nope', confirm: true }, ctx('super_admin'))).rejects.toMatchObject({ statusCode: 404 });
    });

    it('keeps on-chain jobs to super_admin (403 for admin)', async () => {
        const { useCase, requests } = setup();
        await expect(useCase.execute({ jobName: 'ResolveMarkets', confirm: true }, ctx('admin'))).rejects.toMatchObject({ statusCode: 403 });
        expect(requests).toHaveLength(0);
    });

    it('requires confirm: true for on-chain jobs, even for super_admin', async () => {
        const { useCase, requests } = setup();
        await expect(useCase.execute({ jobName: 'ResolveMarkets', confirm: false }, ctx('super_admin'))).rejects.toMatchObject({ statusCode: 400 });
        expect(requests).toHaveLength(0);
        await expect(useCase.execute({ jobName: 'ResolveMarkets', confirm: true }, ctx('super_admin'))).resolves.toMatchObject({ status: 'pending' });
    });

    it('enforces the 60 s cooldown with 429 and the time left', async () => {
        const { useCase } = setup({ lastRequestAt: new Date('2026-11-08T13:59:30Z') });
        await expect(useCase.execute({ jobName: 'LiftExpiredBans', confirm: false }, ctx('admin'))).rejects.toMatchObject({
            statusCode: 429,
            details: { retryAfterMs: 30_000 },
        });
    });

    it('applies the per-admin rate limit', async () => {
        const { useCase } = setup({ rateLimited: true });
        await expect(useCase.execute({ jobName: 'LiftExpiredBans', confirm: false }, ctx('admin'))).rejects.toMatchObject({ statusCode: 429 });
    });

    it('answers 409 when the job already has an active manual run, without auditing', async () => {
        const { useCase, audits } = setup({ active: true });
        await expect(useCase.execute({ jobName: 'LiftExpiredBans', confirm: false }, ctx('admin'))).rejects.toMatchObject({ statusCode: 409 });
        expect(audits).toHaveLength(0);
    });

    it('still accepts the run when the wake-up signal fails (workers poll)', async () => {
        const { useCase } = setup({ signalDown: true });
        await expect(useCase.execute({ jobName: 'LiftExpiredBans', confirm: false }, ctx('admin'))).resolves.toMatchObject({ runId: 'run-1' });
    });
});
