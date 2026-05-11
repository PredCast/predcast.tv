'use client';

import { useEffect, useRef } from 'react';
import { useWaitForTransactionReceipt } from 'wagmi';
import type { Address } from 'viem';
import { parseUnits } from 'viem';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { useStreamWallet } from '@/hooks/useStreamWallet';
import { usePoolDecimals } from '@/hooks/usePoolDecimals';
import { useStreamerDonations, useUserProfilesBatch } from '@/hooks/api';
import { useStreamWalletWriteWithdrawRevenue } from '@/lib/contracts/generated';
import { chilizConfig } from '@/config/chiliz.config';
import { describeError } from '@/lib/contracts/errors';
import { DashEyebrow } from '../../components/DashEyebrow';
import { UserBadge } from '@/components/shared/UserBadge';
import { Pagination } from '../../components/Pagination';
import { usePagination } from '../../hooks/usePagination';
import { fmtUsd, timeAgo } from '../../domain/formatters';

interface StreamerStudioRevenuePanelProps {
    readonly wallet: `0x${string}` | undefined;
}

/**
 * Revenue + donations grid for an existing streamer. Donations are paginated
 * (server-side, 5/10/25 rows) so the panel can show the full history without
 * pulling every row on every render.
 */
export function StreamerStudioRevenuePanel({ wallet }: StreamerStudioRevenuePanelProps) {
    const sw = useStreamWallet({ streamerAddress: wallet });
    const { assetDecimals } = usePoolDecimals();
    const pagination = usePagination({ resetKey: wallet });
    const donations = useStreamerDonations(wallet ?? '', {
        limit: pagination.pageSize,
        offset: pagination.offset,
    });

    const rows = donations.data?.donations ?? [];
    const total = donations.data?.total ?? 0;
    const donorWallets = rows.map((d) => d.donorAddress);
    const { data: donorProfiles } = useUserProfilesBatch(donorWallets);

    const totalRevenue = Number(sw.statistics.totalRevenue);
    const totalWithdrawn = Number(sw.statistics.totalWithdrawn);
    const available = Number(sw.statistics.availableBalance);
    const pending = Math.max(0, totalRevenue - totalWithdrawn - available);
    const followers = sw.statistics.totalSubscribers;

    const { writeContract, data: txHash, isPending, error } = useStreamWalletWriteWithdrawRevenue();
    const { isLoading: confirming, isSuccess } = useWaitForTransactionReceipt({ hash: txHash });
    const handledTxRef = useRef<`0x${string}` | null>(null);

    useEffect(() => {
        if (!isSuccess || !txHash || handledTxRef.current === txHash) return;
        handledTxRef.current = txHash;
        toast.success('Revenue withdrawn', {
            description: `${txHash.slice(0, 10)}…${txHash.slice(-8)}`,
        });
    }, [isSuccess, txHash]);

    useEffect(() => {
        if (!error) return;
        const { decoded } = describeError(error);
        const fn = decoded.severity === 'info' ? toast.info : decoded.severity === 'warning' ? toast.warning : toast.error;
        fn(decoded.title, { description: decoded.description });
    }, [error]);

    const handleWithdraw = () => {
        if (!sw.streamWalletAddress || available <= 0 || assetDecimals === undefined) return;
        const amount = parseUnits(available.toString(), assetDecimals);
        writeContract({
            address: sw.streamWalletAddress as Address,
            args: [amount],
            chainId: chilizConfig.chainId,
        });
    };

    const txInFlight = isPending || confirming;
    const withdrawDisabled = txInFlight || available <= 0;

    return (
        <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr_1fr]">
            <div className="rounded-xl border border-[#1E1E1E] bg-[#111] p-7">
                <div className="flex items-start justify-between gap-4">
                    <DashEyebrow dim>Lifetime revenue</DashEyebrow>
                    <button
                        type="button"
                        onClick={handleWithdraw}
                        disabled={withdrawDisabled}
                        className="font-mono-ctv inline-flex items-center gap-2 rounded-md bg-[#E8001D] px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white transition-all hover:-translate-y-px hover:bg-[#FF1737] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8001D] disabled:cursor-not-allowed disabled:bg-[#3A3A3A] disabled:hover:translate-y-0"
                        style={{ boxShadow: withdrawDisabled ? 'none' : '0 8px 24px rgba(232,0,29,0.25)' }}
                    >
                        {txInFlight && <Loader2 size={12} className="animate-spin" />}
                        {txInFlight
                            ? 'Confirming…'
                            : available > 0
                                ? <>Withdraw {fmtUsd(available, { dp: 0 })}<span aria-hidden> →</span></>
                                : 'Nothing to withdraw'}
                    </button>
                </div>
                <div
                    className="font-display mt-5 leading-none tracking-[-0.02em] text-white"
                    style={{ fontSize: 'clamp(48px, 5vw, 68px)', fontWeight: 800 }}
                >
                    {fmtUsd(totalRevenue, { dp: 2 })}
                </div>
                <div className="mt-6 grid grid-cols-3 gap-4 border-t border-[#1E1E1E] pt-6">
                    <div>
                        <div className="font-mono-ctv text-[9px] uppercase tracking-[0.18em] text-white/45">Available</div>
                        <div
                            className="font-display mt-2 text-[20px] font-bold leading-none tracking-[-0.01em]"
                            style={{ color: '#2dd4a4' }}
                        >
                            {fmtUsd(available)}
                        </div>
                    </div>
                    <div>
                        <div className="font-mono-ctv text-[9px] uppercase tracking-[0.18em] text-white/45">Pending</div>
                        <div className="font-display mt-2 text-[20px] font-bold leading-none tracking-[-0.01em] text-white/65">
                            {fmtUsd(pending)}
                        </div>
                    </div>
                    <div>
                        <div className="font-mono-ctv text-[9px] uppercase tracking-[0.18em] text-white/45">Subscribers</div>
                        <div className="font-display mt-2 text-[20px] font-bold leading-none tracking-[-0.01em] text-white">
                            {followers}
                        </div>
                    </div>
                </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-[#1E1E1E] bg-[#111] lg:col-span-2">
                <div className="flex items-center justify-between gap-3 border-b border-[#1E1E1E] px-6 py-5">
                    <DashEyebrow dim>Donations · {total}</DashEyebrow>
                </div>
                {total === 0 ? (
                    <div className="font-mono-ctv px-6 py-12 text-center text-[11px] uppercase tracking-[0.16em] text-white/45">
                        No donations yet
                    </div>
                ) : (
                    <>
                        <div className="flex flex-col px-6">
                            {rows.map((d) => {
                                // Indexer pre-divides by 10**decimals before persisting,
                                // so `d.amount` is already in USDC.
                                const amount = Number(d.amount ?? 0);
                                const profile = donorProfiles?.get(d.donorAddress.toLowerCase()) ?? null;
                                return (
                                    <div
                                        key={d.transactionHash}
                                        className="flex items-center justify-between gap-4 border-b border-[#1E1E1E] py-3 last:border-0"
                                    >
                                        <div className="flex min-w-0 items-center gap-3">
                                            <UserBadge
                                                walletAddress={d.donorAddress}
                                                profile={profile}
                                                size={32}
                                            />
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="font-mono-ctv text-[10px] uppercase tracking-[0.16em] text-white/35">
                                                {timeAgo(new Date(d.timestamp).getTime())}
                                            </div>
                                            <div
                                                className="font-display text-[18px] font-extrabold leading-none tracking-[-0.01em]"
                                                style={{ color: '#2dd4a4' }}
                                            >
                                                +{fmtUsd(amount, { dp: amount > 0 && amount < 1 ? 4 : 2 })}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <Pagination
                            page={pagination.page}
                            pageSize={pagination.pageSize}
                            total={total}
                            onPrev={pagination.prevPage}
                            onNext={pagination.nextPage}
                            onPageSizeChange={pagination.setPageSize}
                        />
                    </>
                )}
            </div>
        </div>
    );
}
