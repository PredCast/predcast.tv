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
                const contractAddress = await this.ensureContract(op, match);
                await this.openMarketsAndPublish(op, match, contractAddress);
                await this.refreshForms(match);
                return match;
            }
            case 'retry_setup':
                await this.openMarketsAndPublish(op, match, this.requireContract(match));
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
    private async ensureContract(op: MatchOperation, match: Match): Promise<string> {
        let address = op.progress.contractAddress ?? match.getBettingContractAddress() ?? null;

        if (!address && op.progress.deployTxHash) {
            const found = await this.deployer.findDeployedContract(op.progress.deployTxHash);
            if (!found) {
                throw new Error(
                    `Deploy tx ${op.progress.deployTxHash} is not mined or unknown; check it on the explorer before retrying`,
                );
            }
            address = found.contractAddress;
        }

        if (!address) {
            const raw = match.toRaw();
            const deployed = await this.deployer.deployMatchContract(
                `${raw.homeTeamName} vs ${raw.awayTeamName}`,
                (txHash) => this.operations.recordProgress(op.id, { deployTxHash: txHash }, this.clock.now()),
            );
            address = deployed.contractAddress;
        }

        await this.operations.recordProgress(op.id, { contractAddress: address }, this.clock.now());
        if (!match.getBettingContractAddress()) {
            await this.deployments.recordContractDeployed(op.matchId, address, op.chainId);
        }
        return address;
    }

    /** Seeds / opens the markets; the first successful opening also publishes the match. */
    private async openMarketsAndPublish(op: MatchOperation, match: Match, contractAddress: string): Promise<void> {
        const { opened } = await this.deployer.ensureDefaultMarketsOpen(contractAddress, { isKnockout: match.isKnockout() });
        const now = this.clock.now();
        await this.operations.recordProgress(op.id, { marketsOpened: opened }, now);

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
