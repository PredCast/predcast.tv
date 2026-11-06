'use client';

import { Loader2 } from 'lucide-react';
import { usePoolDecimals } from '@/hooks/usePoolDecimals';
import { fmtUsd, timeAgo } from '../domain/formatters';
import { fmtSelection, type MyBet } from '../domain/bets';
import { useBetClaim } from '../hooks/useBetClaim';
import { StatusPill } from './StatusPill';
import { WinCardRowButton } from '@/components/features/win-card/components/WinCardRowButton';

interface BetRowProps {
    readonly bet: MyBet;
}

/** Single row in the dashboard My Bets table; claim / refund state lives in `useBetClaim`. */
export function BetRow({ bet }: BetRowProps) {
    const { assetDecimals } = usePoolDecimals();
    const { claimable, refundable, claim: onClaim, isTxPending, isResolving, locallyHandled, showClaimedPill, showRefundedPill } =
        useBetClaim(bet);
    const isWon = bet.status === 'WON';
    const isLost = bet.status === 'LOST';
    const isPending = bet.status === 'PENDING';
    const decimals = assetDecimals ?? 6;
    const stake = Number(bet.stakeAmount) / 10 ** decimals;
    // Pari-mutuel: no fixed odds → no client-side "potential" computable
    // without the live pool snapshot. Display the actual payoutAmount when
    // the indexer has filled it (PositionClaimed/StakeRefunded), otherwise
    // the column shows "—" / "Pending" for un-settled rows.
    const claimedPayout = bet.payoutAmount ? Number(bet.payoutAmount) / 10 ** decimals : null;
    // Implied probability AT placement time — recorded on-chain via
    // newOutcomePool / newTotalPool. Useful historical info on the row.
    const placementProbPct = (() => {
        const total = Number(bet.newTotalPool);
        const outcome = Number(bet.newOutcomePool);
        if (!Number.isFinite(total) || total <= 0) return null;
        if (!Number.isFinite(outcome) || outcome < 0) return null;
        return (outcome / total) * 100;
    })();

    const matchLabel = bet.match ? `${bet.match.homeTeamName} vs ${bet.match.awayTeamName}` : 'Unknown match';
    const sel = fmtSelection(
        bet.outcome,
        bet.match?.homeTeamName,
        bet.match?.awayTeamName,
        bet.marketType,
        bet.line,
    );

    return (
        <div
            className="grid items-center gap-4 border-b border-[#1E1E1E] px-6 py-4 transition-colors hover:bg-white/[0.015]"
            style={{ gridTemplateColumns: 'minmax(0,2fr) minmax(0,1fr) minmax(0,1fr) minmax(0,1fr) auto' }}
        >
            <div className="min-w-0">
                <div className="font-display truncate text-[15px] font-bold uppercase leading-tight tracking-[-0.005em] text-white">
                    {matchLabel}
                </div>
                <div className="font-mono-ctv mt-1 truncate text-[10px] uppercase tracking-[0.14em] text-white/45">
                    {bet.match?.leagueName ?? 'Market'} · <span className="text-white/65">{sel}</span>
                </div>
            </div>

            <div>
                <div className="font-mono-ctv text-[13px] font-semibold tabular-nums text-white">
                    {fmtUsd(stake)}
                </div>
            </div>

            <div>
                <div className="font-mono-ctv text-[13px] font-semibold tabular-nums text-white">
                    {placementProbPct !== null ? `${placementProbPct.toFixed(1)}%` : '—'}
                </div>
                <div className="font-mono-ctv mt-0.5 text-[10px] uppercase tracking-[0.14em] text-white/45">
                    {timeAgo(new Date(bet.placedAt).getTime())}
                </div>
            </div>

            <div>
                {(bet.status === 'WON' || bet.status === 'REFUNDED') && claimedPayout !== null ? (
                    <div
                        className="font-mono-ctv text-[13px] font-semibold tabular-nums"
                        style={{ color: isWon ? '#2dd4a4' : 'rgba(255,255,255,0.65)' }}
                    >
                        {fmtUsd(claimedPayout)}
                    </div>
                ) : isLost ? (
                    <div className="font-mono-ctv text-[13px] font-semibold tabular-nums text-white/35">—</div>
                ) : (
                    <div className="font-mono-ctv text-[13px] font-semibold tabular-nums text-white/65">
                        —
                    </div>
                )}
                <div className="font-mono-ctv mt-0.5 text-[10px] uppercase tracking-[0.14em] text-white/45">
                    {isResolving ? 'Resolving' : isPending ? 'Pending settle' : isWon ? 'Won' : isLost ? 'Lost' : 'Refund'}
                </div>
            </div>

            <div className="flex items-center justify-end gap-2">
                {isWon ? (
                    <WinCardRowButton walletAddress={bet.userAddress} contractAddress={bet.contractAddress} />
                ) : null}
                {claimable || refundable ? (
                    <button
                        type="button"
                        onClick={onClaim}
                        disabled={isTxPending}
                        className="font-mono-ctv inline-flex items-center gap-1.5 rounded-md px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white transition-all"
                        style={{
                            background: isTxPending ? '#3A3A3A' : '#E8001D',
                            border: refundable ? '1px solid #2A2A2A' : '1px solid transparent',
                            cursor: isTxPending ? 'not-allowed' : 'pointer',
                            boxShadow: claimable && !isTxPending ? '0 6px 20px rgba(232,0,29,0.25)' : 'none',
                        }}
                    >
                        {isTxPending && <Loader2 size={11} className="animate-spin" />}
                        {isTxPending ? 'Confirming…' : refundable ? 'Refund' : 'Claim'}
                    </button>
                ) : showClaimedPill ? (
                    <StatusPill status="claimed" />
                ) : showRefundedPill ? (
                    <StatusPill status="refunded" />
                ) : (
                    <StatusPill
                        status={
                            locallyHandled
                                ? 'claimed'
                                : isResolving
                                  ? 'resolving'
                                  : (bet.status.toLowerCase() as 'pending' | 'won' | 'lost' | 'refunded')
                        }
                    />
                )}
            </div>
        </div>
    );
}
