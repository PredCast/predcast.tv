import type { AdminRole } from '@chiliztv/domain/admin/types';
import type { ICacheService } from '@chiliztv/domain/shared/ports/ICacheService';
import { isAllowed } from '@chiliztv/domain/admin/policies/AdminRolePolicy';

/** Pools, volumes and fees: admins and finance (not moderators). */
export const canSeeMoney = (role: AdminRole): boolean => isAllowed(role, ['finance']);
/** Reports and bans: admins and moderators (not finance). */
export const canSeeModeration = (role: AdminRole): boolean => isAllowed(role, ['moderator']);

/** Short shared cache: every admin polling the dashboard hits Supabase once per TTL. */
export async function cached<T>(cache: ICacheService, key: string, ttlSeconds: number, loader: () => Promise<T>): Promise<T> {
    return (await cache.getOrLoad<T>({ key, ttlSeconds, loader })) ?? loader();
}

export const shortAddress = (address: string): string =>
    address.length > 12 ? `${address.slice(0, 6)}…${address.slice(-4)}` : address;

export const matchLabelOf = (raw: { homeTeamName: string; awayTeamName: string }): string =>
    `${raw.homeTeamName} vs ${raw.awayTeamName}`;
