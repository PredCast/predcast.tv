import { classifyStatus } from './BettablePolicy';

export interface VisibilityFacts {
    readonly contractAddress: string | null | undefined;
    readonly publishedAt: Date | string | null | undefined;
}

/**
 * App users only see matches the team deployed and kept published. Bets, claims and refunds never
 * depend on this: they read the bets, not the match listing.
 */
export function isVisibleInApp(match: VisibilityFacts): boolean {
    return Boolean(match.contractAddress) && match.publishedAt != null;
}

export type StreamBlockReason = 'NOT_VISIBLE' | 'FINISHED';

export function canStartStream(
    match: VisibilityFacts & { readonly status: string },
): { readonly ok: true } | { readonly ok: false; readonly reason: StreamBlockReason } {
    if (!isVisibleInApp(match)) return { ok: false, reason: 'NOT_VISIBLE' };
    if (classifyStatus(match.status) === 'finished') return { ok: false, reason: 'FINISHED' };
    return { ok: true };
}

export type PublicationBlockReason = 'NOT_DEPLOYED' | 'ALREADY_PUBLISHED' | 'ALREADY_UNPUBLISHED';

export function canPublish(
    match: VisibilityFacts,
): { readonly ok: true } | { readonly ok: false; readonly reason: PublicationBlockReason } {
    if (!match.contractAddress) return { ok: false, reason: 'NOT_DEPLOYED' };
    if (match.publishedAt != null) return { ok: false, reason: 'ALREADY_PUBLISHED' };
    return { ok: true };
}

export function canUnpublish(
    match: VisibilityFacts,
): { readonly ok: true } | { readonly ok: false; readonly reason: PublicationBlockReason } {
    if (!match.contractAddress) return { ok: false, reason: 'NOT_DEPLOYED' };
    if (match.publishedAt == null) return { ok: false, reason: 'ALREADY_UNPUBLISHED' };
    return { ok: true };
}
