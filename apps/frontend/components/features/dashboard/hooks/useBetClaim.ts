'use client';

import { useEffect, useRef } from 'react';
import type { Address } from 'viem';
import { useWaitForTransactionReceipt } from 'wagmi';
import { toast } from 'sonner';

import { usePariMatchBaseWriteClaim, usePariMatchBaseWriteClaimRefund } from '@/lib/contracts/generated';
import { chilizConfig } from '@/config/chiliz.config';
import { describeError } from '@/lib/contracts/errors';

import { isAwaitingResolve, isClaimableNow, isLocallyClaimed, isRefundableNow, type MyBet } from '../domain/bets';
import { useInvalidateMyBets } from './useMyBets';
import { useLocallyClaimed } from './useLocallyClaimed';

/**
 * Claim / refund tx for one bet. A confirmed receipt is persisted in the locally-claimed
 * store (24h TTL) so a refetch that lands before the indexer catches up cannot turn the
 * row back into a callable button (which would revert).
 */
export function useBetClaim(bet: MyBet) {
    const { map: claimedOverlay, lookup, mark } = useLocallyClaimed();
    const claimable = isClaimableNow(bet, claimedOverlay);
    const refundable = isRefundableNow(bet, claimedOverlay);

    const { writeContract: writeClaim, data: claimHash, isPending: claimPending, error: claimError } = usePariMatchBaseWriteClaim();
    const { isLoading: claimConfirming, isSuccess: claimSuccess } = useWaitForTransactionReceipt({ hash: claimHash });
    const { writeContract: writeRefund, data: refundHash, isPending: refundPending, error: refundError } = usePariMatchBaseWriteClaimRefund();
    const { isLoading: refundConfirming, isSuccess: refundSuccess } = useWaitForTransactionReceipt({ hash: refundHash });

    const invalidateBets = useInvalidateMyBets();
    const handledTxRef = useRef<`0x${string}` | null>(null);

    useEffect(() => {
        const success = claimSuccess || refundSuccess;
        if (!success) return;
        const txHash = (claimHash ?? refundHash) as `0x${string}` | undefined;
        if (!txHash || handledTxRef.current === txHash) return;
        handledTxRef.current = txHash;
        mark(bet, claimSuccess ? 'claimed' : 'refunded', txHash);
        toast.success(claimSuccess ? 'Payout claimed' : 'Refund collected', {
            description: `${txHash.slice(0, 10)}…${txHash.slice(-8)}`,
        });
        // Reconcile with the indexer's `claimedAt`; the overlay masks the gap until then.
        invalidateBets();
    }, [claimSuccess, refundSuccess, claimHash, refundHash, bet, invalidateBets, mark]);

    useEffect(() => {
        const err = claimError ?? refundError;
        if (!err) return;
        const { decoded } = describeError(err);
        const fn = decoded.severity === 'info' ? toast.info : decoded.severity === 'warning' ? toast.warning : toast.error;
        fn(decoded.title, { description: decoded.description });
    }, [claimError, refundError]);

    const claim = () => {
        const args: readonly [bigint] = [BigInt(bet.marketId)];
        const writeArgs = { address: bet.contractAddress as Address, args, chainId: chilizConfig.chainId } as const;
        if (refundable) writeRefund(writeArgs);
        else writeClaim(writeArgs);
    };

    // Overlay first (the user just acted), indexer second. Status-gated: overlay keys are
    // (contract, marketId), shared by LOST rows of the same market.
    const overlayEntry = lookup(bet);
    return {
        claimable,
        refundable,
        claim,
        isTxPending: claimPending || claimConfirming || refundPending || refundConfirming,
        isResolving: isAwaitingResolve(bet),
        locallyHandled: isLocallyClaimed(bet, claimedOverlay),
        showClaimedPill: (overlayEntry?.kind === 'claimed' && bet.status === 'WON') || (bet.status === 'WON' && bet.claimedAt !== null),
        showRefundedPill:
            (overlayEntry?.kind === 'refunded' && bet.status === 'REFUNDED') || (bet.status === 'REFUNDED' && bet.claimedAt !== null),
    };
}
