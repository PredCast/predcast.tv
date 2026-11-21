import { inject, injectable } from 'tsyringe';

import { TOKENS } from '@chiliztv/domain/shared/tokens';
import { Match } from '@chiliztv/domain/matches/entities/Match';
import type { IMatchRepository } from '@chiliztv/domain/matches/repositories/IMatchRepository';
import type { IMatchDeploymentRepository } from '@chiliztv/domain/matches/repositories/IMatchDeploymentRepository';
import type { IMatchOperationRepository } from '@chiliztv/domain/matches/repositories/IMatchOperationRepository';
import type { MatchOperation } from '@chiliztv/domain/matches/operations/MatchOperation';
import type { IBettingDeploymentService } from '@chiliztv/domain/shared/ports/IBettingDeploymentService';
import type { IBlockchainService } from '@chiliztv/domain/shared/ports/IBlockchainService';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import type { IFootballApiService } from '@chiliztv/domain/shared/ports/IFootballApiService';

import { logger } from '../../../infrastructure/logging/logger';
import { fetchTeamForms } from '../../matches/sync/fetchTeamForms';

/** Markets stop taking stakes at kickoff; too close to it the tx could land after, so no cutoff is set. */
const CUTOFF_MIN_LEAD_MS = 5 * 60_000;

function bettingCutoff(kickoff: Date, now: Date): Date | null {
    return kickoff.getTime() - now.getTime() > CUTOFF_MIN_LEAD_MS ? kickoff : null;
}

/** Executes one claimed admin operation. Every step is resumable: a re-run never sends a tx twice. */
@injectable()
export class MatchOperationRunner {
    constructor(
        @inject(TOKENS.IMatchRepository) private readonly matches: IMatchRepository,
        @inject(TOKENS.IMatchDeploymentRepository) private readonly deployments: IMatchDeploymentRepository,
        @inject(TOKENS.IMatchOperationRepository) private readonly operations: IMatchOperationRepository,
        @inject(TOKENS.IBettingDeploymentService) private readonly deployer: IBettingDeploymentService,
        @inject(TOKENS.IBlockchainService) private readonly blockchain: IBlockchainService,
        @inject(TOKENS.IFootballApiService) private readonly footballApi: IFootballApiService,
        @inject(TOKENS.IClock) private readonly clock: IClock,
    ) {}

    async run(op: MatchOperation): Promise<Match> {
        const match = await this.matches.findByApiFootballId(op.matchId);
        if (!match) throw new Error(`Match ${op.matchId} no longer exists`);

        switch (op.kind) {
            case 'deploy': {
                const deployed = await this.ensureContract(op, match);
                await this.openMarketsAndPublish(op, match, deployed.address, deployed.marketsOpened ?? op.progress.marketsOpened);
                await this.refreshForms(match);
                return match;
            }
            case 'retry_setup':
                await this.openMarketsAndPublish(op, match, this.requireContract(match), op.progress.marketsOpened);
                return match;
            case 'cancel_markets': {
                const reason = op.params.reason ?? 'Cancelled by PredCast';
                const result = await this.blockchain.cancelOpenMarketsForMatch(this.requireContract(match), reason);
                await this.operations.recordProgress(op.id, { marketsCancelled: result.cancelled }, this.clock.now());
                return match;
            }
        }
    }

    /** Deploy step: reuses the stored address, then the stored tx hash, and only then sends a new tx. */
    private async ensureContract(op: MatchOperation, match: Match): Promise<{ address: string; marketsOpened: number | undefined }> {
        let address = op.progress.contractAddress ?? match.getBettingContractAddress() ?? null;
        let deployGasWei = op.progress.deployGasWei;

        if (!address && op.progress.deployTxHash) {
            const found = await this.deployer.findDeployedContract(op.progress.deployTxHash, op.progress.deployNonce);
            if (found.status === 'pending') {
                throw new Error(
                    `Deploy tx ${op.progress.deployTxHash} is not mined yet and may still be; retry once it is mined or replaced`,
                );
            }
            if (found.status === 'mined') {
                address = found.contractAddress;
                deployGasWei = found.gasCostWei;
            } else {
                logger.warn('Deploy tx dropped, sending a new one', { operationId: op.id, txHash: op.progress.deployTxHash, nonce: op.progress.deployNonce });
            }
        }

        let marketsOpened: number | undefined;
        if (!address) {
            const raw = match.toRaw();
            const deployed = await this.deployer.deployMatchContract(
                `${raw.homeTeamName} vs ${raw.awayTeamName}`,
                { isKnockout: match.isKnockout(), closesAt: bettingCutoff(match.getMatchDate(), this.clock.now()) },
                (sent) => this.operations.recordProgress(op.id, { deployTxHash: sent.txHash, deployNonce: sent.nonce }, this.clock.now()),
            );
            address = deployed.contractAddress;
            deployGasWei = deployed.gasCostWei;
            marketsOpened = deployed.marketsOpened;
        }

        await this.operations.recordProgress(
            op.id,
            marketsOpened === undefined ? { contractAddress: address, deployGasWei } : { contractAddress: address, deployGasWei, marketsOpened },
            this.clock.now(),
        );
        if (!match.getBettingContractAddress()) {
            await this.deployments.recordContractDeployed(op.matchId, address, op.chainId);
        }
        return { address, marketsOpened };
    }

    /** Seeds / opens the markets; the first successful opening also publishes the match. */
    private async openMarketsAndPublish(op: MatchOperation, match: Match, contractAddress: string, knownOpened: number | undefined): Promise<void> {
        const { opened, gasCostWei } = await this.deployer.ensureDefaultMarketsOpen(contractAddress, { isKnockout: match.isKnockout() });
        const now = this.clock.now();
        // A resumed operation adds to what its first attempt already paid.
        const setupGasWei = (BigInt(op.progress.setupGasWei ?? '0') + BigInt(gasCostWei)).toString();
        // Contracts deployed with their markets come back with nothing to open: keep the deploy's count.
        const alreadyCounted = opened === 0 && knownOpened !== undefined;
        await this.operations.recordProgress(op.id, alreadyCounted ? { setupGasWei } : { marketsOpened: opened, setupGasWei }, now);

        // Retries after an admin unpublish keep the match hidden: only the first opening publishes.
        if (!match.getBettingOpenedAt()) {
            await this.deployments.setBettingOpenedAt(op.matchId, now);
            if (!match.getPublishedAt()) await this.deployments.setPublishedAt(op.matchId, now);
        }
    }

    /** Best effort: team form is display data, a failure must not fail the deployment. */
    private async refreshForms(match: Match): Promise<void> {
        try {
            const raw = match.toRaw();
            const forms = await fetchTeamForms(this.footballApi, [raw.homeTeamId, raw.awayTeamId]);
            const fresh = await this.matches.findByApiFootballId(raw.apiFootballId);
            if (!fresh) return;
            await this.matches.update(Match.reconstitute({
                ...fresh.toRaw(),
                homeForm: forms.get(raw.homeTeamId) ?? fresh.getHomeForm(),
                awayForm: forms.get(raw.awayTeamId) ?? fresh.getAwayForm(),
                updatedAt: this.clock.now(),
            }));
        } catch (err) {
            logger.warn('Team form refresh after deploy failed', {
                apiFootballId: match.toRaw().apiFootballId,
                error: err instanceof Error ? err.message : String(err),
            });
        }
    }

    private requireContract(match: Match): string {
        const address = match.getBettingContractAddress();
        if (!address) throw new Error('Match has no betting contract');
        return address;
    }
}
