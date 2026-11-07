import { NotFoundError } from '@chiliztv/domain/shared/errors/NotFoundError';
import type { Match } from '@chiliztv/domain/matches/entities/Match';
import type { IMatchRepository } from '@chiliztv/domain/matches/repositories/IMatchRepository';
import type { IMatchOperationRepository } from '@chiliztv/domain/matches/repositories/IMatchOperationRepository';
import { isOperationActive, type MatchOperation } from '@chiliztv/domain/matches/operations/MatchOperation';

export interface AdminMatchContext {
    readonly match: Match;
    readonly latestOperation: MatchOperation | null;
    readonly hasActiveOperation: boolean;
}

/** Admin routes address matches by their API-Football id (the `matches.id` column is a UUID). */
export async function loadMatchForAdmin(
    matches: IMatchRepository,
    operations: IMatchOperationRepository,
    apiFootballId: number,
): Promise<AdminMatchContext> {
    const match = await matches.findByApiFootballId(apiFootballId);
    if (!match) throw new NotFoundError('Match', String(apiFootballId));
    const latestOperation = (await operations.findLatestByMatchIds([apiFootballId])).get(apiFootballId) ?? null;
    return { match, latestOperation, hasActiveOperation: isOperationActive(latestOperation) };
}
