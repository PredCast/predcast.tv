import type { WalletLink } from '../entities/Account';

export interface WalletLinkPlan {
    /** Wallets with no link yet. */
    readonly link: ReadonlyArray<string>;
    /** Wallets whose closed link moves to this account. */
    readonly relink: ReadonlyArray<string>;
    /** Wallets actively linked to another account: never moved automatically (§8.6). */
    readonly conflicts: ReadonlyArray<string>;
    /** Active wallets of this account that left the verified credentials. */
    readonly unlink: ReadonlyArray<string>;
}

/**
 * Sync of an account's wallets with the credentials of its latest verified token (spec §8.6).
 * `existing` holds the links of the credential wallets; `accountLinks` the account's active links.
 */
export function planWalletLinks(
    accountId: string,
    credentialWallets: ReadonlyArray<string>,
    existing: ReadonlyArray<WalletLink>,
    accountLinks: ReadonlyArray<WalletLink>,
): WalletLinkPlan {
    const wanted = new Set(credentialWallets.map((w) => w.toLowerCase()));
    const byWallet = new Map(existing.map((l) => [l.walletAddress, l]));
    const link: string[] = [];
    const relink: string[] = [];
    const conflicts: string[] = [];

    for (const wallet of wanted) {
        const current = byWallet.get(wallet);
        if (!current) link.push(wallet);
        else if (current.unlinkedAt !== null) relink.push(wallet);
        else if (current.accountId !== accountId) conflicts.push(wallet);
    }
    const unlink = accountLinks
        .filter((l) => l.unlinkedAt === null && !wanted.has(l.walletAddress))
        .map((l) => l.walletAddress);
    return { link, relink, conflicts, unlink };
}

/** Owner of a wallet at instant t (§3.1 rule 5): `linked_at ≤ t < unlinked_at`. */
export function ownerAt(links: ReadonlyArray<WalletLink>, wallet: string, at: Date): string | null {
    const t = at.getTime();
    const hit = links.find(
        (l) => l.walletAddress === wallet.toLowerCase()
            && l.linkedAt.getTime() <= t
            && (l.unlinkedAt === null || t < l.unlinkedAt.getTime()),
    );
    return hit?.accountId ?? null;
}
