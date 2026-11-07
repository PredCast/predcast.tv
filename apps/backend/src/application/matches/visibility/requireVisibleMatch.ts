import { NotFoundError } from '@chiliztv/domain/shared/errors/NotFoundError';
import type { Match } from '@chiliztv/domain/matches/entities/Match';
import { isVisibleInApp } from '@chiliztv/domain/matches/policies/MatchVisibilityPolicy';

import type { GetMatchByIdUseCase } from '../use-cases/GetMatchByIdUseCase';

/**
 * Loads a match app users may interact with (deployed + published), through the cached single-match
 * read. Anything else is reported as not found, like `GET /matches/:id`.
 */
export async function requireVisibleMatch(getMatch: GetMatchByIdUseCase, apiFootballId: number): Promise<Match> {
    const match = await getMatch.execute(apiFootballId);
    if (!isVisibleInApp({ contractAddress: match.getBettingContractAddress(), publishedAt: match.getPublishedAt() })) {
        throw new NotFoundError('Match', String(apiFootballId));
    }
    return match;
}
