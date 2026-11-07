import 'reflect-metadata';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { BusinessRuleError } from '@chiliztv/domain/shared/errors/BusinessRuleError';
import { ConflictError } from '@chiliztv/domain/shared/errors/ConflictError';
import type { Match } from '@chiliztv/domain/matches/entities/Match';
import type { IMatchRepository } from '@chiliztv/domain/matches/repositories/IMatchRepository';
import type { IMatchDeploymentRepository } from '@chiliztv/domain/matches/repositories/IMatchDeploymentRepository';
import type { IMatchOperationRepository } from '@chiliztv/domain/matches/repositories/IMatchOperationRepository';
import type { MatchOperation } from '@chiliztv/domain/matches/operations/MatchOperation';
import type { IAuditTrail } from '@chiliztv/domain/admin/ports/IAuditTrail';
import type { IBettingChainRegistry } from '@chiliztv/domain/shared/ports/IBettingChainRegistry';

import { InMemoryCache } from '../../../../testing/cache/InMemoryCache';
import { MockClock } from '../../../../testing/clock/MockClock';
import { __resetTestMatchIdForTesting, matchFixture } from '../../../../testing/fixtures/match.fixtures';
import { DeployMatchContractUseCase } from '../DeployMatchContractUseCase';
import { ProcessMatchOperationsUseCase } from '../ProcessMatchOperationsUseCase';
import { UnpublishMatchUseCase } from '../UnpublishMatchUseCase';
import type { MatchOperationRunner } from '../../deployment/MatchOperationRunner';

const NOW = new Date('2026-11-07T12:00:00Z');
const CTX = { actorWallet: '0xadmin', actorRole: 'admin' };
const CHAIN = { chainId: 88882, name: 'Chiliz Spicy', nativeSymbol: 'CHZ', explorerUrl: 'https://testnet.chiliscan.com' };

const chains = { get: (id: number) => (id === 88882 ? CHAIN : null), list: () => [CHAIN], defaultChain: () => CHAIN } as IBettingChainRegistry;

function op(over: Partial<MatchOperation> = {}): MatchOperation {
    return {
        id: 'op-1', matchId: 999100, kind: 'deploy', status: 'pending', chainId: 88882, params: {}, progress: {},
        error: null, requestedBy: '0xadmin', attempts: 0, createdAt: NOW, startedAt: null, heartbeatAt: null, finishedAt: null, ...over,
    };
}

function deps(match: Match, latest: MatchOperation | null = null) {
    const matches = { findByApiFootballId: vi.fn(async () => match) } as unknown as IMatchRepository;
    const operations = {
        findLatestByMatchIds: vi.fn(async () => new Map(latest ? [[999100, latest]] : [])),
        enqueue: vi.fn(async (input: { kind: MatchOperation['kind'] }) => ({ ok: true as const, operation: op({ kind: input.kind }) })),
        claimNext: vi.fn(),
        complete: vi.fn(async () => undefined),
        fail: vi.fn(async () => undefined),
    } as unknown as IMatchOperationRepository;
    const deployments = { setPublishedAt: vi.fn(async () => undefined) } as unknown as IMatchDeploymentRepository;
    const audit = { record: vi.fn(async () => undefined) } as unknown as IAuditTrail;
    return { matches, operations, deployments, audit, clock: new MockClock(NOW), cache: new InMemoryCache() };
}

describe('DeployMatchContractUseCase', () => {
    beforeEach(() => __resetTestMatchIdForTesting());

    it('queues a deploy operation and audits it', async () => {
        const d = deps(matchFixture.notDeployed({ apiFootballId: 999100, kickoffAt: new Date(NOW.getTime() + 3_600_000) }));
        const uc = new DeployMatchContractUseCase(d.matches, d.operations, chains, d.clock, d.audit);

        const queued = await uc.execute(999100, 88882, CTX);

        expect(queued.kind).toBe('deploy');
        expect(d.audit.record).toHaveBeenCalledWith(expect.objectContaining({ action: 'markets.contract.deploy', targetId: '999100' }));
    });

    it('refuses a match inside the kickoff buffer with the policy reason', async () => {
        const d = deps(matchFixture.notDeployed({ apiFootballId: 999100, kickoffAt: new Date(NOW.getTime() + 60_000) }));
        const uc = new DeployMatchContractUseCase(d.matches, d.operations, chains, d.clock, d.audit);

        await expect(uc.execute(999100, 88882, CTX)).rejects.toMatchObject({ details: { reason: 'KICKOFF_BUFFER' } });
        expect(d.operations.enqueue).not.toHaveBeenCalled();
    });

    it('refuses while another operation is running on the match', async () => {
        const d = deps(matchFixture.notDeployed({ apiFootballId: 999100 }), op({ status: 'running' }));
        const uc = new DeployMatchContractUseCase(d.matches, d.operations, chains, d.clock, d.audit);

        await expect(uc.execute(999100, 88882, CTX)).rejects.toBeInstanceOf(BusinessRuleError);
    });

    it('rejects a chain outside the registry', async () => {
        const d = deps(matchFixture.notDeployed({ apiFootballId: 999100 }));
        const uc = new DeployMatchContractUseCase(d.matches, d.operations, chains, d.clock, d.audit);

        await expect(uc.execute(999100, 8453, CTX)).rejects.toThrow(/Unsupported chain/);
    });
});

describe('UnpublishMatchUseCase', () => {
    beforeEach(() => __resetTestMatchIdForTesting());

    it('hides the match and queues the cancellation when asked', async () => {
        const d = deps(matchFixture.deployedPublished({ apiFootballId: 999100 }));
        const uc = new UnpublishMatchUseCase(d.matches, d.operations, d.deployments, chains, d.cache, d.clock, d.audit);

        const { cancelOperation } = await uc.execute(999100, { cancelMarkets: true, reason: 'Event cancelled' }, CTX);

        expect(d.deployments.setPublishedAt).toHaveBeenCalledWith(999100, null);
        expect(cancelOperation?.kind).toBe('cancel_markets');
        expect(d.operations.enqueue).toHaveBeenCalledWith(expect.objectContaining({ params: { reason: 'Event cancelled' } }));
    });

    it('leaves the match visible when a cancellation cannot be queued', async () => {
        const d = deps(matchFixture.deployedPublished({ apiFootballId: 999100 }), op({ status: 'pending' }));
        const uc = new UnpublishMatchUseCase(d.matches, d.operations, d.deployments, chains, d.cache, d.clock, d.audit);

        await expect(uc.execute(999100, { cancelMarkets: true, reason: 'Event cancelled' }, CTX)).rejects.toBeInstanceOf(ConflictError);
        expect(d.deployments.setPublishedAt).not.toHaveBeenCalled();
    });

    it('hides only, without touching the markets', async () => {
        const d = deps(matchFixture.deployedPublished({ apiFootballId: 999100 }));
        const uc = new UnpublishMatchUseCase(d.matches, d.operations, d.deployments, chains, d.cache, d.clock, d.audit);

        expect(await uc.execute(999100, { cancelMarkets: false }, CTX)).toEqual({ cancelOperation: null });
        expect(d.operations.enqueue).not.toHaveBeenCalled();
    });
});

describe('ProcessMatchOperationsUseCase', () => {
    beforeEach(() => __resetTestMatchIdForTesting());

    it('marks the operation failed with the short (revert) message', async () => {
        const d = deps(matchFixture.notDeployed({ apiFootballId: 999100 }));
        (d.operations.claimNext as ReturnType<typeof vi.fn>).mockResolvedValue(op({ status: 'running' }));
        const failing = Object.assign(new Error('long viem dump'), { shortMessage: 'execution reverted: OwnableUnauthorizedAccount' });
        const runner = { run: vi.fn(async () => { throw failing; }) } as unknown as MatchOperationRunner;
        const uc = new ProcessMatchOperationsUseCase(d.operations, d.cache, d.clock, runner);

        expect(await uc.execute()).toEqual({ processed: true, operationId: 'op-1', ok: false });
        expect(d.operations.fail).toHaveBeenCalledWith('op-1', 'execution reverted: OwnableUnauthorizedAccount', NOW);
    });

    it('claims stale running operations older than 10 minutes', async () => {
        const d = deps(matchFixture.notDeployed({ apiFootballId: 999100 }));
        (d.operations.claimNext as ReturnType<typeof vi.fn>).mockResolvedValue(null);
        const uc = new ProcessMatchOperationsUseCase(d.operations, d.cache, d.clock, {} as MatchOperationRunner);

        expect(await uc.execute()).toEqual({ processed: false });
        expect(d.operations.claimNext).toHaveBeenCalledWith(NOW, new Date(NOW.getTime() - 600_000));
    });
});
