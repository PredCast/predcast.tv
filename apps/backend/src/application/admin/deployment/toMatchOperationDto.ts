import type { MatchOperation } from '@chiliztv/domain/matches/operations/MatchOperation';
import type { MatchOperationDto } from '@chiliztv/shared';

export function toMatchOperationDto(op: MatchOperation): MatchOperationDto {
    return {
        id: op.id,
        matchId: op.matchId,
        kind: op.kind,
        status: op.status,
        chainId: op.chainId,
        error: op.error,
        contractAddress: op.progress.contractAddress ?? null,
        deployTxHash: op.progress.deployTxHash ?? null,
        marketsOpened: op.progress.marketsOpened ?? null,
        marketsCancelled: op.progress.marketsCancelled ?? null,
        attempts: op.attempts,
        createdAt: op.createdAt.toISOString(),
        finishedAt: op.finishedAt?.toISOString() ?? null,
    };
}
