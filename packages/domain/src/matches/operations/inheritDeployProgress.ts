import type { MatchOperation, MatchOperationProgress } from './MatchOperation';

/**
 * Progress a new deploy inherits from the previous operation of the match: a failed deploy that sent
 * its tx but never saw the contract hands over the tx, so the new run checks it before sending another.
 */
export function inheritDeployProgress(previous: MatchOperation | undefined, chainId: number): MatchOperationProgress {
    if (!previous || previous.kind !== 'deploy' || previous.status !== 'failed' || previous.chainId !== chainId) return {};
    const { deployTxHash, deployNonce, contractAddress } = previous.progress;
    if (!deployTxHash || contractAddress) return {};
    return deployNonce === undefined ? { deployTxHash } : { deployTxHash, deployNonce };
}
