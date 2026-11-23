import { accountOwningWalletAt, type WalletLink } from './eligibilityPolicy';

/**
 * Groups wallet actions by the account owning each wallet at the time of the action (§3.1 rule 5,
 * §3.10): bets of two linked wallets on one market belong to the same account. Unowned actions are dropped.
 */
export function groupByOwningAccount<T>(
    items: ReadonlyArray<T>,
    links: ReadonlyArray<WalletLink>,
    walletOf: (item: T) => string,
    atOf: (item: T) => Date,
): Map<string, T[]> {
    const groups = new Map<string, T[]>();
    for (const item of items) {
        const accountId = accountOwningWalletAt(links, walletOf(item), atOf(item));
        if (accountId === null) continue;
        const group = groups.get(accountId);
        if (group) group.push(item);
        else groups.set(accountId, [item]);
    }
    return groups;
}
