import type { Account, WalletLink } from '../entities/Account';

export interface IAccountRepository {
    /** Creates the account on first sight, otherwise refreshes `last_seen_at` and the primary wallet. */
    upsertByDynamicUserId(dynamicUserId: string, primaryWallet: string, now: Date): Promise<Account>;
    findById(accountId: string): Promise<Account | null>;
    /** Links of these wallets, whatever their account or state. */
    findLinks(wallets: ReadonlyArray<string>): Promise<ReadonlyArray<WalletLink>>;
    findActiveLinksOfAccount(accountId: string): Promise<ReadonlyArray<WalletLink>>;
    /** Inserts a new link; false when the wallet already has one (lost race). */
    link(wallet: string, accountId: string, now: Date): Promise<boolean>;
    /** Moves a closed link to this account; false when it was reopened meanwhile. */
    relink(wallet: string, accountId: string, now: Date): Promise<boolean>;
    unlink(wallet: string, accountId: string, now: Date): Promise<void>;
}
