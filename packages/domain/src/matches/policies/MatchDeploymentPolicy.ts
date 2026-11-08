import { DEFAULT_KICKOFF_BUFFER_SEC, classifyStatus, isBettable, type BlockReason } from './BettablePolicy';

export type DeployBlockReason =
    | 'ALREADY_DEPLOYED'
    | 'OPERATION_IN_PROGRESS'
    | 'LIVE'
    | 'KICKOFF_BUFFER'
    | 'FINISHED'
    | 'BLOCKED'
    | 'UNKNOWN_STATUS';

export type DeploymentDecision<R extends string> = { readonly ok: true } | { readonly ok: false; readonly reason: R };

export interface DeployableMatch {
    readonly status: string;
    readonly kickoffAt: string | Date;
    readonly contractAddress: string | null | undefined;
    /** An admin operation (deploy / retry / cancel) is pending or running for this match. */
    readonly hasActiveOperation: boolean;
}

const FROM_BETTABLE: Record<BlockReason, DeployBlockReason> = {
    LIVE: 'LIVE',
    HALFTIME: 'LIVE',
    KICKOFF_BUFFER: 'KICKOFF_BUFFER',
    FINISHED: 'FINISHED',
    POSTPONED: 'BLOCKED',
    UNKNOWN: 'UNKNOWN_STATUS',
};

/**
 * A match can be deployed only while bets could still open on it: upcoming and outside the
 * kickoff buffer (same rule as {@link isBettable}), with no contract and no operation in flight.
 */
export function canDeployMatch(
    match: DeployableMatch,
    now: Date,
    kickoffBufferSec: number = DEFAULT_KICKOFF_BUFFER_SEC,
): DeploymentDecision<DeployBlockReason> {
    if (match.contractAddress) return { ok: false, reason: 'ALREADY_DEPLOYED' };
    if (match.hasActiveOperation) return { ok: false, reason: 'OPERATION_IN_PROGRESS' };
    const bettable = isBettable(match, now, { kickoffBufferSec });
    return bettable.ok ? { ok: true } : { ok: false, reason: FROM_BETTABLE[bettable.reason] };
}

export type RetrySetupBlockReason = 'NOT_DEPLOYED' | 'OPERATION_IN_PROGRESS' | 'FINISHED';

/** Re-seeding / re-opening markets is safe on any deployed match that has not finished. */
export function canRetryMarketsSetup(
    match: Omit<DeployableMatch, 'kickoffAt'>,
): DeploymentDecision<RetrySetupBlockReason> {
    if (!match.contractAddress) return { ok: false, reason: 'NOT_DEPLOYED' };
    if (match.hasActiveOperation) return { ok: false, reason: 'OPERATION_IN_PROGRESS' };
    if (classifyStatus(match.status) === 'finished') return { ok: false, reason: 'FINISHED' };
    return { ok: true };
}
