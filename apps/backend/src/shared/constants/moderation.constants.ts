/**
 * Redis keys shared between the moderation pipeline and the future admin
 * panel — both sides MUST use these constants so cache invalidation stays
 * coherent (lifting a ban from the panel purges the same key the chat
 * middleware reads).
 */

export const REPORT_CONFIG_CACHE_KEY = 'moderation:report_config';
export const REPORT_CONFIG_CACHE_TTL_SECONDS = 30;

export const BAN_ACTIVE_CACHE_TTL_SECONDS = 30;

export function banActiveKey(walletAddress: string): string {
    return `ban:active:${walletAddress.toLowerCase()}`;
}

/** Realtime channel carrying banned/lifted events for one wallet. */
export function banChannelName(walletAddress: string): string {
    return `bans:${walletAddress.toLowerCase()}`;
}

export function moderationEvalLockKey(
    targetType: string,
    targetId: string,
    liveContextMatchId: number | null,
): string {
    return `moderation:eval:${targetType}:${targetId}:${liveContextMatchId ?? 'global'}`;
}
