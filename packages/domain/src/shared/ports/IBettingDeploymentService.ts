/**
 * On-chain steps of an admin deployment, split so each one can be recorded and resumed: the
 * deploy tx hash is reported before its receipt is awaited, and market seeding is idempotent.
 */
export interface IBettingDeploymentService {
    signerAddress(): string;
    /**
     * Sends `createFootballMatch` under the signer lock. `onSent` runs with the tx hash before the
     * receipt is awaited, so a crash after the send can resume from the stored hash.
     */
    deployMatchContract(matchName: string, onSent: (txHash: string) => Promise<void>): Promise<{ contractAddress: string }>;
    /**
     * Contract created by an already-sent deploy tx (crash recovery). Null when the tx is unknown or
     * still not mined after the wait; throws when it reverted.
     */
    findDeployedContract(txHash: string): Promise<{ contractAddress: string } | null>;
    /**
     * Adds the canonical market lineup when the contract has none yet, then opens every market still
     * Inactive. Safe to call again after a partial failure.
     */
    ensureDefaultMarketsOpen(contractAddress: string, opts: { isKnockout: boolean }): Promise<{ added: boolean; opened: number }>;
    signerBalanceWei(): Promise<bigint>;
    /** One full deployment (deploy + seed + open) at the current gas price. */
    estimateDeploymentCostWei(): Promise<bigint>;
}
