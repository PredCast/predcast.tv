import type { OnboardingStep } from './sources';

/** Idempotency keys of §3.2 (`gamification_ledger.ref_key`, UNIQUE). Addresses are lower-cased. */
export const refKeys = {
    checkIn: (accountId: string, day: string) => `check_in:${accountId}:${day}`,
    betVolume: (chainId: number, txHash: string, logIndex: number) =>
        `bet_volume:${chainId}:${txHash.toLowerCase()}:${logIndex}`,
    betWon: (chainId: number, contract: string, marketId: number, accountId: string) =>
        `bet_won:${chainId}:${contract.toLowerCase()}:${marketId}:${accountId}`,
    watch: (accountId: string, day: string, tranche: number) => `watch:${accountId}:${day}:${tranche}`,
    chat: (messageId: string) => `chat:${messageId}`,
    follow: (accountId: string, streamerId: string) => `follow:${accountId}:${streamerId}`,
    support: (accountId: string, streamerWallet: string, day: string) =>
        `support:${accountId}:${streamerWallet.toLowerCase()}:${day}`,
    streamTime: (streamId: string, tranche: number) => `stream_time:${streamId}:${tranche}`,
    onboarding: (accountId: string, step: OnboardingStep) => `onboarding:${accountId}:${step}`,
    achievement: (accountId: string, achievementId: string, tier: number) =>
        `achievement:${accountId}:${achievementId}:${tier}`,
    admin: (auditLogId: string) => `admin:${auditLogId}`,
    reversal: (refKey: string) => `rev:${refKey}`,
} as const;

/** `{chainId}:{contract}:{marketId}` — groups the `bet_volume` rows of one market. */
export function marketKeyOf(chainId: number, contract: string, marketId: number): string {
    return `${chainId}:${contract.toLowerCase()}:${marketId}`;
}

/** `{marketType}:{line}` — one Versatility item. */
export function marketKindOf(marketType: string, line: number): string {
    return `${marketType}:${line}`;
}
