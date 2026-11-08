export type MatchOperationKind = 'deploy' | 'retry_setup' | 'cancel_markets';
export type MatchOperationStatus = 'pending' | 'running' | 'succeeded' | 'failed';

export interface MatchOperationParams {
    /** Required for `cancel_markets`: shown on-chain with the cancellation. */
    readonly reason?: string;
}

/**
 * Steps reached so far. Each tx hash is stored before its receipt is awaited, so a run resumed
 * after a crash looks the receipt up instead of sending the transaction again.
 */
export interface MatchOperationProgress {
    readonly deployTxHash?: string;
    readonly contractAddress?: string;
    readonly marketsOpened?: number;
    readonly marketsCancelled?: number;
    /** Gas paid by the deploy tx, in wei. */
    readonly deployGasWei?: string;
    /** Gas paid by the seeding / opening txs of this operation, in wei. */
    readonly setupGasWei?: string;
    /** Set when an admin cancelled the operation before a worker picked it up. */
    readonly cancelledBy?: string;
}

export interface MatchOperation {
    readonly id: string;
    readonly matchId: number;
    readonly kind: MatchOperationKind;
    readonly status: MatchOperationStatus;
    readonly chainId: number;
    readonly params: MatchOperationParams;
    readonly progress: MatchOperationProgress;
    readonly error: string | null;
    readonly requestedBy: string;
    readonly attempts: number;
    readonly createdAt: Date;
    readonly startedAt: Date | null;
    readonly heartbeatAt: Date | null;
    readonly finishedAt: Date | null;
}

export const ACTIVE_OPERATION_STATUSES: ReadonlyArray<MatchOperationStatus> = ['pending', 'running'];

export function isOperationActive(op: Pick<MatchOperation, 'status'> | null | undefined): boolean {
    return op != null && ACTIVE_OPERATION_STATUSES.includes(op.status);
}
