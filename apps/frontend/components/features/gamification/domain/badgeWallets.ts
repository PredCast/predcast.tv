import { MAX_BADGE_WALLETS } from '@chiliztv/shared';

const WALLET = /^0x[0-9a-f]{40}$/;

/**
 * Distinct lowercase wallets of a visible list, the most recent `MAX_BADGE_WALLETS` kept, sorted so
 * the same set always maps to the same query key (one batched request per list).
 */
export function badgeWalletsOf(wallets: ReadonlyArray<string | null | undefined>): ReadonlyArray<string> {
    const seen = new Set<string>();
    for (let i = wallets.length - 1; i >= 0 && seen.size < MAX_BADGE_WALLETS; i--) {
        const w = wallets[i]?.toLowerCase();
        if (w && WALLET.test(w)) seen.add(w);
    }
    return [...seen].sort();
}
