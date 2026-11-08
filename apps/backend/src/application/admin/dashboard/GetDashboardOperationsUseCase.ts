import { inject, injectable } from 'tsyringe';

import type { DashboardOperationDto, DashboardOperationsDto } from '@chiliztv/shared';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import type { ICacheService } from '@chiliztv/domain/shared/ports/ICacheService';
import type { IAdminWalletRepository } from '@chiliztv/domain/admin/repositories/IAdminWalletRepository';
import type { IMatchOperationRepository } from '@chiliztv/domain/matches/repositories/IMatchOperationRepository';
import type { IMatchRepository } from '@chiliztv/domain/matches/repositories/IMatchRepository';
import type { MatchOperation } from '@chiliztv/domain/matches/operations/MatchOperation';

import { cached, matchLabelOf } from './dashboardScope';

const TTL_SECONDS = 5;
const SHOWN = 6;
const LIST_WINDOW_MS = 24 * 60 * 60 * 1000;
const SPEND_WINDOW_MS = 7 * 24 * 60 * 60 * 1000;
const SCAN_LIMIT = 500;

const isActive = (op: MatchOperation) => op.status === 'pending' || op.status === 'running';
const gasOf = (op: MatchOperation): bigint => BigInt(op.progress.deployGasWei ?? '0') + BigInt(op.progress.setupGasWei ?? '0');

/** Admin operations of the last 24 h (active first) and the deploy gas really paid over 7 days. */
@injectable()
export class GetDashboardOperationsUseCase {
    constructor(
        @inject(TOKENS.IMatchOperationRepository) private readonly operations: IMatchOperationRepository,
        @inject(TOKENS.IMatchRepository) private readonly matches: IMatchRepository,
        @inject(TOKENS.IAdminWalletRepository) private readonly wallets: IAdminWalletRepository,
        @inject(TOKENS.ICacheService) private readonly cache: ICacheService,
        @inject(TOKENS.IClock) private readonly clock: IClock,
    ) {}

    execute(): Promise<DashboardOperationsDto> {
        return cached(this.cache, 'admin:dashboard:operations', TTL_SECONDS, () => this.load());
    }

    private async load(): Promise<DashboardOperationsDto> {
        const now = this.clock.now();
        const ops = await this.operations.findActiveOrSince(new Date(now.getTime() - SPEND_WINDOW_MS), SCAN_LIMIT);
        const listSince = now.getTime() - LIST_WINDOW_MS;
        const shown = [...ops.filter(isActive), ...ops.filter((o) => !isActive(o) && o.createdAt.getTime() >= listSince)].slice(0, SHOWN);

        const [matches, labels] = await Promise.all([
            this.matches.findByApiFootballIds(shown.map((o) => o.matchId)),
            this.wallets.findLabels(shown.map((o) => o.requestedBy)),
        ]);
        const byId = new Map(matches.map((m) => [m.toRaw().apiFootballId, m.toRaw()]));
        const spent = ops.reduce((sum, op) => sum + gasOf(op), BigInt(0));

        return {
            operations: shown.map((op): DashboardOperationDto => {
                const raw = byId.get(op.matchId);
                return {
                    id: op.id,
                    kind: op.kind,
                    status: op.progress.cancelledBy ? 'cancelled' : op.status,
                    matchId: op.matchId,
                    matchLabel: raw ? matchLabelOf(raw) : `#${op.matchId}`,
                    league: raw?.leagueName ?? null,
                    deployTxHash: op.progress.deployTxHash ?? null,
                    contractAddress: op.progress.contractAddress ?? null,
                    marketsOpened: op.progress.marketsOpened ?? null,
                    marketsCancelled: op.progress.marketsCancelled ?? null,
                    gasWei: op.progress.deployGasWei || op.progress.setupGasWei ? gasOf(op).toString() : null,
                    error: op.error,
                    requestedBy: op.requestedBy,
                    requestedByLabel: labels.get(op.requestedBy.toLowerCase()) ?? null,
                    createdAt: op.createdAt.toISOString(),
                    finishedAt: op.finishedAt?.toISOString() ?? null,
                };
            }),
            spent7d: { gasWei: spent.toString(), deployments: ops.filter((o) => o.progress.deployGasWei).length },
            generatedAt: now.toISOString(),
        };
    }
}
