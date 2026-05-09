/**
 * Stable identifier of an on-chain event log entry.
 * `(transactionHash, logIndex)` is the canonical dedup key for indexers —
 * a single transaction can emit several logs with the same `transactionHash`,
 * so the (deprecated) `transactionHash`-only uniqueness was incorrect.
 */
export interface EventCoordinates {
    readonly transactionHash: `0x${string}`;
    readonly logIndex: number;
    readonly blockNumber: bigint;
    readonly blockTimestamp: Date;
}
