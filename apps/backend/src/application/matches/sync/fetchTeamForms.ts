import type { IFootballApiService } from '@chiliztv/domain/shared/ports/IFootballApiService';

import { logger } from '../../../infrastructure/logging/logger';

// Cap fan-out of getTeamForm cache-misses to keep axios + the paid
// API-Football quota under control during WC peaks (200+ unique teams/sync).
const FORM_FETCH_CONCURRENCY = 10;

/**
 * Dedup teams across the batch (Premier League weekend = 20 teams across
 * 10 matches → 20 unique calls) and bound concurrency so cache misses don't
 * fan out > FORM_FETCH_CONCURRENCY axios reqs at once. Cache hits return
 * synchronously and are unaffected by the cap. A failed team maps to null.
 */
export async function fetchTeamForms(
    footballApi: IFootballApiService,
    teamIds: Iterable<number>,
): Promise<Map<number, string | null>> {
    const idList = Array.from(new Set(teamIds));
    const result = new Map<number, string | null>();

    // Manual chunking — p-limit is not a project dep.
    for (let i = 0; i < idList.length; i += FORM_FETCH_CONCURRENCY) {
        const chunk = idList.slice(i, i + FORM_FETCH_CONCURRENCY);
        await Promise.all(
            chunk.map(async (teamId) => {
                try {
                    result.set(teamId, await footballApi.getTeamForm(teamId));
                } catch (err) {
                    logger.warn('getTeamForm failed', {
                        teamId,
                        error: err instanceof Error ? err.message : String(err),
                    });
                    result.set(teamId, null);
                }
            }),
        );
    }
    return result;
}
