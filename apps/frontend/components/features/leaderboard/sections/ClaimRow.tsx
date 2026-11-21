'use client';

import { formatUnits, type Address } from 'viem';
import { Loader2 } from 'lucide-react';

import { useLeaderboardClaim } from '@/hooks/useLeaderboardClaim';

const USDC_DECIMALS = 6;

function fmtUsdc(raw: string): string {
    return Number(formatUnits(BigInt(raw), USDC_DECIMALS)).toLocaleString(undefined, {
        maximumFractionDigits: 2,
    });
}

interface ClaimRowProps {
    readonly wallet: Address;
    readonly epochId: number;
    readonly amount: bigint;
    /** DB `claimExpiry`, used until the on-chain `claimDeadline` loads. */
    readonly claimExpiry: string;
    readonly alreadyClaimed: boolean;
}

/** One claimable epoch with its pre-flighted claim button. */
export function ClaimRow({ wallet, epochId, amount, claimExpiry, alreadyClaimed }: ClaimRowProps) {
    const { canClaim, reason, claim, isConfirming } = useLeaderboardClaim({
        wallet,
        epochId,
        claimExpiry,
        alreadyClaimed,
    });

    const label = (() => {
        if (isConfirming) return 'Confirming…';
        if (reason === 'expired') return 'Expired';
        if (reason === 'already-claimed') return 'Claimed';
        if (reason === 'not-eligible') return 'Not eligible';
        if (reason === 'simulating') return 'Checking…';
        if (reason === 'pending') return 'Submitting…';
        if (reason === 'no-wallet') return 'Connect wallet';
        return 'Claim';
    })();

    return (
        <div className="flex items-center justify-between gap-3 rounded-lg border border-[#1E1E1E] bg-[#0d0d0d] px-4 py-3">
            <div>
                <div className="font-mono-ctv text-[10px] font-bold uppercase tracking-[0.14em] text-white/45">
                    Epoch #{epochId}
                </div>
                <div className="font-display mt-1 text-[18px] font-extrabold uppercase tracking-tight text-white">
                    {fmtUsdc(amount.toString())} USDC
                </div>
            </div>
            <button
                type="button"
                onClick={claim}
                disabled={!canClaim}
                className="font-mono-ctv inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-all"
                style={{
                    background: canClaim ? '#E8001D' : '#3A3A3A',
                    cursor: canClaim ? 'pointer' : 'not-allowed',
                    boxShadow: canClaim ? '0 6px 20px rgba(232,0,29,0.25)' : 'none',
                }}
            >
                {isConfirming && <Loader2 size={12} className="animate-spin" />}
                {label}
            </button>
        </div>
    );
}
