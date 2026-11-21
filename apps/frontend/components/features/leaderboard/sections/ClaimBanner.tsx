'use client';

import type { Address } from 'viem';

import { useMyClaimableEpochs } from '@/hooks/api';

import { ClaimRow } from './ClaimRow';

interface ClaimBannerProps {
    readonly wallet: string | undefined;
}

/**
 * Sticky banner at the top of `/leaderboard` when the connected wallet has
 * ≥1 claimable epoch. Each row is its own claim button with a `useSimulate`
 * pre-flight — disabled state surfaces the exact reason.
 */
export function ClaimBanner({ wallet }: ClaimBannerProps) {
    const { data } = useMyClaimableEpochs(wallet);
    const epochs = data?.epochs ?? [];
    const open = epochs.filter((e) => !e.alreadyClaimed);
    if (!wallet || open.length === 0) return null;

    return (
        <section className="mx-auto max-w-5xl px-4 pt-6">
            <div
                className="rounded-xl border p-5"
                style={{
                    borderColor: 'rgba(45,212,164,0.4)',
                    background: 'linear-gradient(180deg, rgba(45,212,164,0.08), rgba(45,212,164,0.02))',
                }}
            >
                <div className="font-mono-ctv inline-flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#2dd4a4]">
                    <span aria-hidden className="block h-0.5 w-4 bg-[#2dd4a4]" />
                    Prizes ready
                </div>
                <div className="font-display mt-2 text-[20px] font-extrabold uppercase tracking-tight text-white">
                    You have {open.length} {open.length === 1 ? 'reward' : 'rewards'} to claim
                </div>

                <div className="mt-4 grid gap-3">
                    {open.map((entry) => (
                        <ClaimRow
                            key={entry.epochId}
                            wallet={wallet as Address}
                            epochId={entry.epochId}
                            amount={BigInt(entry.amount)}
                            claimExpiry={entry.claimExpiry}
                            alreadyClaimed={entry.alreadyClaimed}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
