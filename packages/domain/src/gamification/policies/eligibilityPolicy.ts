export type AccountEligibility = 'eligible' | 'banned' | 'suspended';

export interface EligibilityInput {
    /** True when at least one linked wallet has an active ban (§3.1 rule 7, D17). */
    readonly anyLinkedWalletBanned: boolean;
    readonly suspendedAt: Date | null;
}

/** Banned or suspended accounts earn nothing; auto credits are written at 0 with this reason. */
export function accountEligibility(input: EligibilityInput): AccountEligibility {
    if (input.anyLinkedWalletBanned) return 'banned';
    if (input.suspendedAt !== null) return 'suspended';
    return 'eligible';
}

export interface WalletLink {
    readonly walletAddress: string;
    readonly accountId: string;
    readonly linkedAt: Date;
    readonly unlinkedAt: Date | null;
}

/** Account owning `wallet` at `at`: linkedAt ≤ at < unlinkedAt (§3.1 rule 5). Null = nothing credited. */
export function accountOwningWalletAt(links: ReadonlyArray<WalletLink>, wallet: string, at: Date): string | null {
    const address = wallet.toLowerCase();
    const t = at.getTime();
    const link = links.find(
        (l) =>
            l.walletAddress.toLowerCase() === address &&
            l.linkedAt.getTime() <= t &&
            (l.unlinkedAt === null || t < l.unlinkedAt.getTime()),
    );
    return link?.accountId ?? null;
}
