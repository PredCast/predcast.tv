import type { ICacheService } from '@chiliztv/domain/shared/ports/ICacheService';

import { FIXED_LIST_KEYS, MatchCacheKeys } from '../../matches/MatchCacheKeys';
import { ADMIN_MATCHES_CACHE_KEY } from '../use-cases/ListAdminMatchesUseCase';
import { DASHBOARD_MATCH_CACHE_KEYS } from '../dashboard/dashboardCacheKeys';

/**
 * Drops every read cache a deployment or a (un)publication changes: app lists (Discover, live,
 * upcoming), the match itself, its league bucket, the admin overview and the dashboard cards. Without it the change
 * only shows once the TTLs expire.
 */
export async function invalidateMatchReadCaches(
    cache: ICacheService,
    match: { readonly apiFootballId: number; readonly leagueId: number },
): Promise<void> {
    await Promise.allSettled([
        ...FIXED_LIST_KEYS.map((key) => cache.delete(key)),
        cache.delete(MatchCacheKeys.single(match.apiFootballId)),
        cache.delete(MatchCacheKeys.league(match.leagueId)),
        cache.delete(ADMIN_MATCHES_CACHE_KEY),
        ...DASHBOARD_MATCH_CACHE_KEYS.map((key) => cache.delete(key)),
    ]);
}
