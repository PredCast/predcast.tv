/** A Dynamic user (`sub`). Gamification and identity aggregate per account, across its wallets. */
export interface Account {
    readonly id: string;
    readonly dynamicUserId: string;
    readonly primaryWallet: string | null;
    readonly createdAt: Date;
    readonly lastSeenAt: Date;
}

/** Wallet ↔ account link. Never deleted: `unlinkedAt` closes it, so past ownership stays readable. */
export interface WalletLink {
    readonly walletAddress: string;
    readonly accountId: string;
    readonly linkedAt: Date;
    readonly unlinkedAt: Date | null;
}
