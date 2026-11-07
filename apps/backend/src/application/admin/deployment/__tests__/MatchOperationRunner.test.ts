import 'reflect-metadata';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import type { Match } from '@chiliztv/domain/matches/entities/Match';
import type { IMatchRepository } from '@chiliztv/domain/matches/repositories/IMatchRepository';
import type { IMatchDeploymentRepository } from '@chiliztv/domain/matches/repositories/IMatchDeploymentRepository';
import type { IMatchOperationRepository } from '@chiliztv/domain/matches/repositories/IMatchOperationRepository';
import type { MatchOperation } from '@chiliztv/domain/matches/operations/MatchOperation';
import type { IBettingDeploymentService } from '@chiliztv/domain/shared/ports/IBettingDeploymentService';
import type { IBlockchainService } from '@chiliztv/domain/shared/ports/IBlockchainService';
import type { IFootballApiService } from '@chiliztv/domain/shared/ports/IFootballApiService';

import { MockClock } from '../../../../testing/clock/MockClock';
import { __resetTestMatchIdForTesting, matchFixture } from '../../../../testing/fixtures/match.fixtures';
import { MatchOperationRunner } from '../MatchOperationRunner';

const NOW = new Date('2026-11-07T12:00:00Z');
const CONTRACT = '0x00000000000000000000000000000000000000c0';

function operation(over: Partial<MatchOperation> = {}): MatchOperation {
    return {
        id: 'op-1', matchId: 999100, kind: 'deploy', status: 'running', chainId: 88882,
        params: {}, progress: {}, error: null, requestedBy: '0xadmin', attempts: 1,
        createdAt: NOW, startedAt: NOW, heartbeatAt: NOW, finishedAt: null, ...over,
    };
}

function setup(match: Match) {
    const matches = {
        findByApiFootballId: vi.fn(async () => match),
        update: vi.fn(async (m: Match) => m),
    } as unknown as IMatchRepository;
    const deployments = {
        recordContractDeployed: vi.fn(async () => undefined),
        setBettingOpenedAt: vi.fn(async () => undefined),
        setPublishedAt: vi.fn(async () => undefined),
    } as unknown as IMatchDeploymentRepository;
    const operations = { recordProgress: vi.fn(async () => undefined) } as unknown as IMatchOperationRepository;
    const deployer = {
        deployMatchContract: vi.fn(async (_name: string, onSent: (h: string) => Promise<void>) => {
            await onSent('0xhash');
            return { contractAddress: CONTRACT };
        }),
        findDeployedContract: vi.fn(async () => ({ contractAddress: CONTRACT })),
        ensureDefaultMarketsOpen: vi.fn(async () => ({ added: true, opened: 8 })),
    } as unknown as IBettingDeploymentService;
    const blockchain = { cancelOpenMarketsForMatch: vi.fn(async () => ({ cancelled: 3, skipped: 5 })) } as unknown as IBlockchainService;
    const football = { getTeamForm: vi.fn(async () => 'WWDLW') } as unknown as IFootballApiService;
    const runner = new MatchOperationRunner(matches, deployments, operations, deployer, blockchain, football, new MockClock(NOW));
    return { runner, matches, deployments, operations, deployer, blockchain };
}

describe('MatchOperationRunner', () => {
    beforeEach(() => __resetTestMatchIdForTesting());

    it('deploys, records the tx hash before the receipt, seeds, opens and publishes', async () => {
        const t = setup(matchFixture.notDeployed({ apiFootballId: 999100 }));
        await t.runner.run(operation());

        expect(t.operations.recordProgress).toHaveBeenNthCalledWith(1, 'op-1', { deployTxHash: '0xhash' }, NOW);
        expect(t.deployments.recordContractDeployed).toHaveBeenCalledWith(999100, CONTRACT, 88882);
        expect(t.deployer.ensureDefaultMarketsOpen).toHaveBeenCalledWith(CONTRACT, { isKnockout: false });
        expect(t.deployments.setBettingOpenedAt).toHaveBeenCalledWith(999100, NOW);
        expect(t.deployments.setPublishedAt).toHaveBeenCalledWith(999100, NOW);
    });

    it('resumes from a stored tx hash without sending a new deploy', async () => {
        const t = setup(matchFixture.notDeployed({ apiFootballId: 999100 }));
        await t.runner.run(operation({ progress: { deployTxHash: '0xstored' } }));

        expect(t.deployer.findDeployedContract).toHaveBeenCalledWith('0xstored');
        expect(t.deployer.deployMatchContract).not.toHaveBeenCalled();
        expect(t.deployments.recordContractDeployed).toHaveBeenCalledWith(999100, CONTRACT, 88882);
    });

    it('fails instead of redeploying when the stored tx cannot be found', async () => {
        const t = setup(matchFixture.notDeployed({ apiFootballId: 999100 }));
        (t.deployer.findDeployedContract as ReturnType<typeof vi.fn>).mockResolvedValueOnce(null);

        await expect(t.runner.run(operation({ progress: { deployTxHash: '0xlost' } }))).rejects.toThrow(/0xlost/);
        expect(t.deployer.deployMatchContract).not.toHaveBeenCalled();
    });

    it('skips the deploy tx when the contract address is already known', async () => {
        const t = setup(matchFixture.notDeployed({ apiFootballId: 999100 }));
        await t.runner.run(operation({ progress: { contractAddress: CONTRACT } }));

        expect(t.deployer.deployMatchContract).not.toHaveBeenCalled();
        expect(t.deployer.findDeployedContract).not.toHaveBeenCalled();
        expect(t.deployer.ensureDefaultMarketsOpen).toHaveBeenCalled();
    });

    it('keeps an admin-unpublished match hidden when retrying the setup', async () => {
        const t = setup(matchFixture.deployedUnpublished({ apiFootballId: 999100 }));
        await t.runner.run(operation({ kind: 'retry_setup' }));

        expect(t.deployer.ensureDefaultMarketsOpen).toHaveBeenCalled();
        expect(t.deployments.setBettingOpenedAt).not.toHaveBeenCalled();
        expect(t.deployments.setPublishedAt).not.toHaveBeenCalled();
    });

    it('publishes on a retry that completes a deployment whose setup had failed', async () => {
        const t = setup(matchFixture.notDeployed({ apiFootballId: 999100, bettingContractAddress: CONTRACT }));
        await t.runner.run(operation({ kind: 'retry_setup' }));

        expect(t.deployments.setBettingOpenedAt).toHaveBeenCalledWith(999100, NOW);
        expect(t.deployments.setPublishedAt).toHaveBeenCalledWith(999100, NOW);
    });

    it('cancels the open markets with the given reason', async () => {
        const t = setup(matchFixture.deployedUnpublished({ apiFootballId: 999100 }));
        await t.runner.run(operation({ kind: 'cancel_markets', params: { reason: 'Event cancelled' } }));

        expect(t.blockchain.cancelOpenMarketsForMatch).toHaveBeenCalledWith(expect.stringMatching(/^0x/), 'Event cancelled');
        expect(t.operations.recordProgress).toHaveBeenCalledWith('op-1', { marketsCancelled: 3 }, NOW);
    });

    it('does not fail the deployment when the team form refresh fails', async () => {
        const t = setup(matchFixture.notDeployed({ apiFootballId: 999100 }));
        (t.matches.update as ReturnType<typeof vi.fn>).mockRejectedValueOnce(new Error('db down'));

        await expect(t.runner.run(operation())).resolves.toBeDefined();
    });
});
