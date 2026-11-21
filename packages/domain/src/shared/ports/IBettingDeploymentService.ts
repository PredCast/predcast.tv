/**
 * On-chain steps of an admin deployment, split so each one can be recorded and resumed: the
 * deploy tx hash is reported before its receipt is awaited, and market seeding is idempotent.
 */
/** Gas actually paid (gasUsed × effectiveGasPrice), in wei. */
export type GasCostWei = string;

export interface SentDeployTx {
    txHash: string;
    nonce: number;
}

export type DeployTxLookup =
    | { status: 'mined'; contractAddress: string; gasCostWei: GasCostWei }
    | { status: 'pending' }
    | { status: 'dropped' };

export interface MatchMarketSetup {
    isKnockout: boolean;
    /** Betting cutoff of every market; null leaves it unset. */
    closesAt: Date | null;
}

export interface IBettingDeploymentService {
    signerAddress(): string;
    /**
     * Sends `createFootballMatchWithMarkets` (deploy + seed + cutoff + open in one tx) under the signer
     * lock. `onSent` runs with the tx hash and nonce before the receipt is awaited, so a crash after
     * the send can resume from them.
     */
    deployMatchContract(
        matchName: string,
        markets: MatchMarketSetup,
        onSent: (sent: SentDeployTx) => Promise<void>,
    ): Promise<{ contractAddress: string; gasCostWei: GasCostWei; marketsOpened: number }>;
    /**
     * Outcome of an already-sent deploy tx (crash or timeout recovery). `dropped` when the signer's
     * nonce moved past `nonce` without this tx: it can never be mined and a new deploy is safe.
     * Throws when the tx reverted.
     */
    findDeployedContract(txHash: string, nonce: number | undefined): Promise<DeployTxLookup>;
    /**
     * Adds the canonical market lineup when the contract has none yet, then opens every market still
     * Inactive. Safe to call again after a partial failure; a no-op on contracts deployed with markets.
     */
    ensureDefaultMarketsOpen(contractAddress: string, opts: { isKnockout: boolean }): Promise<{ added: boolean; opened: number; gasCostWei: GasCostWei }>;
    signerBalanceWei(): Promise<bigint>;
    /** One full deployment at the current gas price. */
    estimateDeploymentCostWei(): Promise<bigint>;
}
