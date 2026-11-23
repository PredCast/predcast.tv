/** Redis keys of the gamification read models (`gami:*`). */
export const gamificationCacheKeys = {
    me: (accountId: string) => `gami:me:${accountId}`,
    card: (wallet: string) => `gami:card:${wallet.toLowerCase()}`,
    badge: (wallet: string) => `gami:badge:${wallet.toLowerCase()}`,
    profile: (wallet: string) => `gami:profile:${wallet.toLowerCase()}`,
    doubleXp: () => 'gami:double-xp:current',
} as const;

/** TTLs of §9.1, in seconds. */
export const GAMIFICATION_CACHE_TTL = {
    card: 60,
    badge: 60,
    profile: 60,
    me: 15,
    doubleXp: 30,
} as const;
