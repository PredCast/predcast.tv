import { SUPPORT_MIN_AMOUNT_USDC } from '../catalog/constants';

export interface SupportCandidate {
    readonly amountUsdc: number;
    readonly supporterWallet: string;
    readonly streamerWallet: string;
    /** Accounts owning each wallet at the time of the action; null without account. */
    readonly supporterAccountId: string | null;
    readonly streamerAccountId: string | null;
}

export type SupportEvaluation =
    | { readonly eligible: true; readonly accountId: string }
    | { readonly eligible: false; readonly reason: 'below_minimum' | 'no_account' | 'self_support' };

/**
 * A donation or a subscription earns `support` XP (§3.3): ≥ 1 USDC, supporter linked to an
 * account other than the streamer's. The one-per-streamer-per-day rule is the `ref_key`.
 */
export function evaluateSupport(candidate: SupportCandidate): SupportEvaluation {
    if (!(candidate.amountUsdc >= SUPPORT_MIN_AMOUNT_USDC)) return { eligible: false, reason: 'below_minimum' };
    if (candidate.supporterWallet.toLowerCase() === candidate.streamerWallet.toLowerCase()) {
        return { eligible: false, reason: 'self_support' };
    }
    if (candidate.supporterAccountId === null) return { eligible: false, reason: 'no_account' };
    if (candidate.supporterAccountId === candidate.streamerAccountId) return { eligible: false, reason: 'self_support' };
    return { eligible: true, accountId: candidate.supporterAccountId };
}
