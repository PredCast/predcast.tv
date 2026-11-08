import type {
    MatchOperation,
    MatchOperationKind,
    MatchOperationParams,
    MatchOperationProgress,
} from '../operations/MatchOperation';

export interface NewMatchOperation {
    readonly matchId: number;
    readonly kind: MatchOperationKind;
    readonly chainId: number;
    readonly params: MatchOperationParams;
    readonly requestedBy: string;
    readonly createdAt: Date;
}

export type EnqueueResult =
    | { readonly ok: true; readonly operation: MatchOperation }
    | { readonly ok: false; readonly reason: 'ACTIVE_OPERATION_EXISTS' };

/** Queue of admin operations on a match; at most one pending or running per match. */
export interface IMatchOperationRepository {
    enqueue(input: NewMatchOperation): Promise<EnqueueResult>;
    /**
     * Atomically moves the oldest pending operation (or a running one whose heartbeat is older than
     * `staleBefore`) to running. Two workers never get the same operation.
     */
    claimNext(now: Date, staleBefore: Date): Promise<MatchOperation | null>;
    /** Merges `progress` and refreshes the heartbeat. */
    recordProgress(id: string, progress: MatchOperationProgress, now: Date): Promise<void>;
    complete(id: string, now: Date): Promise<void>;
    fail(id: string, error: string, now: Date): Promise<void>;
    findById(id: string): Promise<MatchOperation | null>;
    /** Most recent operation of each given match. */
    findLatestByMatchIds(matchIds: ReadonlyArray<number>): Promise<ReadonlyMap<number, MatchOperation>>;
    /** Operations still pending / running, plus every operation created since `since`; newest first. */
    findActiveOrSince(since: Date, limit: number): Promise<ReadonlyArray<MatchOperation>>;
    /**
     * Cancels an operation no worker has claimed yet (stored as failed, with `cancelledBy` in its
     * progress). False when it was already claimed or finished.
     */
    cancelPending(id: string, cancelledBy: string, now: Date): Promise<boolean>;
}
