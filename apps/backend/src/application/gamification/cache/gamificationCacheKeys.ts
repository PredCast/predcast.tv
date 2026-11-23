/** Redis keys of the gamification read models (`gami:*`, read routes arrive with step 06). */
export const gamificationCacheKeys = {
    me: (accountId: string) => `gami:me:${accountId}`,
    card: (wallet: string) => `gami:card:${wallet.toLowerCase()}`,
    badge: (wallet: string) => `gami:badge:${wallet.toLowerCase()}`,
    profile: (wallet: string) => `gami:profile:${wallet.toLowerCase()}`,
} as const;
