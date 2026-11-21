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
        deployMatchContract: vi.fn(async (_name: string, _markets: unknown, onSent: (sent: { txHash: string; nonce: number }) => Promise<void>) => {
            await onSent({ txHash: '0xhash', nonce: 15 });
            return { contractAddress: CONTRACT, gasCostWei: '3000', marketsOpened: 9 };
        }),
        findDeployedContract: vi.fn(async () => ({ status: 'mined', contractAddress: CONTRACT, gasCostWei: '2500' })),
        ensureDefaultMarketsOpen: vi.fn(async () => ({ added: true, opened: 8, gasCostWei: '700' })),
    } as unknown as IBettingDeploymentService;
    const blockchain = { cancelOpenMarketsForMatch: vi.fn(async () => ({ cancelled: 3, skipped: 5 })) } as unknown as IBlockchainService;
    const football = { getTeamForm: vi.fn(async () => 'WWDLW') } as unknown as IFootballApiService;
    const runner = new MatchOperationRunner(matches, deployments, operations, deployer, blockchain, football, new MockClock(NOW));
    return { runner, matches, deployments, operations, deployer, blockchain };
}

describe('MatchOperationRunner', () => {
    beforeEach(() => __resetTestMatchIdForTesting());

    it('deploys, records the tx hash before the receipt, seeds, opens and publishes', async () => {
        const kickoffAt = new Date(NOW.getTime() + 2 * 3_600_000);
        const t = setup(matchFixture.notDeployed({ apiFootballId: 999100, kickoffAt }));
        await t.runner.run(operation());

        expect(t.deployer.deployMatchContract).toHaveBeenCalledWith(
            expect.any(String), { isKnockout: false, closesAt: kickoffAt }, expect.any(Function),
        );
        expect(t.operations.recordProgress).toHaveBeenNthCalledWith(1, 'op-1', { deployTxHash: '0xhash', deployNonce: 15 }, NOW);
        expect(t.deployments.recordContractDeployed).toHaveBeenCalledWith(999100, CONTRACT, 88882);
        expect(t.deployer.ensureDefaultMarketsOpen).toHaveBeenCalledWith(CONTRACT, { isKnockout: false });
        expect(t.deployments.setBettingOpenedAt).toHaveBeenCalledWith(999100, NOW);
        expect(t.deployments.setPublishedAt).toHaveBeenCalledWith(999100, NOW);
    });

    it('records the gas paid by the deploy and by the setup', async () => {
        const t = setup(matchFixture.notDeployed({ apiFootballId: 999100 }));
        await t.runner.run(operation());

        expect(t.operations.recordProgress).toHaveBeenCalledWith('op-1', { contractAddress: CONTRACT, deployGasWei: '3000', marketsOpened: 9 }, NOW);
        expect(t.operations.recordProgress).toHaveBeenCalledWith('op-1', { marketsOpened: 8, setupGasWei: '700' }, NOW);
    });

    it('keeps the deploy market count when the markets came already open', async () => {
        const t = setup(matchFixture.notDeployed({ apiFootballId: 999100 }));
        (t.deployer.ensureDefaultMarketsOpen as ReturnType<typeof vi.fn>).mockResolvedValueOnce({ added: false, opened: 0, gasCostWei: '0' });
        await t.runner.run(operation());

        expect(t.operations.recordProgress).toHaveBeenLastCalledWith('op-1', { setupGasWei: '0' }, NOW);
    });

    it('sets no betting cutoff when kickoff is too close for the tx to land before it', async () => {
        const t = setup(matchFixture.notDeployed({ apiFootballId: 999100, kickoffAt: new Date(NOW.getTime() + 60_000) }));
        await t.runner.run(operation());

        expect(t.deployer.deployMatchContract).toHaveBeenCalledWith(
            expect.any(String), { isKnockout: false, closesAt: null }, expect.any(Function),
        );
    });

    it('adds a resumed setup to the gas its first attempt already paid', async () => {
        const t = setup(matchFixture.notDeployed({ apiFootballId: 999100 }));
        await t.runner.run(operation({ progress: { deployTxHash: '0xstored', setupGasWei: '300' } }));

        expect(t.operations.recordProgress).toHaveBeenCalledWith('op-1', { contractAddress: CONTRACT, deployGasWei: '2500' }, NOW);
        expect(t.operations.recordProgress).toHaveBeenCalledWith('op-1', { marketsOpened: 8, setupGasWei: '1000' }, NOW);
    });

    it('resumes from a stored tx hash without sending a new deploy', async () => {
        const t = setup(matchFixture.notDeployed({ apiFootballId: 999100 }));
        await t.runner.run(operation({ progress: { deployTxHash: '0xstored', deployNonce: 16 } }));

        expect(t.deployer.findDeployedContract).toHaveBeenCalledWith('0xstored', 16);
        expect(t.deployer.deployMatchContract).not.toHaveBeenCalled();
        expect(t.deployments.recordContractDeployed).toHaveBeenCalledWith(999100, CONTRACT, 88882);
    });

    it('fails instead of redeploying while the stored tx may still be mined', async () => {
        const t = setup(matchFixture.notDeployed({ apiFootballId: 999100 }));
        (t.deployer.findDeployedContract as ReturnType<typeof vi.fn>).mockResolvedValueOnce({ status: 'pending' });

        await expect(t.runner.run(operation({ progress: { deployTxHash: '0xlost' } }))).rejects.toThrow(/0xlost/);
        expect(t.deployer.deployMatchContract).not.toHaveBeenCalled();
    });

    it('deploys again once the stored tx was dropped (its nonce went to another tx)', async () => {
        const t = setup(matchFixture.notDeployed({ apiFootballId: 999100 }));
        (t.deployer.findDeployedContract as ReturnType<typeof vi.fn>).mockResolvedValueOnce({ status: 'dropped' });
        await t.runner.run(operation({ progress: { deployTxHash: '0xdropped', deployNonce: 16 } }));

        expect(t.deployer.deployMatchContract).toHaveBeenCalledTimes(1);
        expect(t.operations.recordProgress).toHaveBeenCalledWith('op-1', { deployTxHash: '0xhash', deployNonce: 15 }, NOW);
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
