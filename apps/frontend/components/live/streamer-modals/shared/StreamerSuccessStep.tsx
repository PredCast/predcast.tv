'use client';

import type { ReactNode } from 'react';

interface SummaryItem {
    readonly label: string;
    readonly value: ReactNode;
    readonly accent?: boolean;
}

interface StreamerSuccessStepProps {
    readonly title: string;
    readonly lead: ReactNode;
    readonly txHash?: `0x${string}`;
    readonly summary: ReadonlyArray<SummaryItem>;
    readonly onAnother: () => void;
    readonly onClose: () => void;
    readonly anotherLabel?: string;
}

function fmtTx(hash: `0x${string}`): string {
    return `${hash.slice(0, 10)}…${hash.slice(-8)}`;
}

/** Success body shared by donation + subscription modals — mirrors `BetSuccessStep`. */
export function StreamerSuccessStep({
    title,
    lead,
    txHash,
    summary,
    onAnother,
    onClose,
    anotherLabel = 'Send another',
}: StreamerSuccessStepProps) {
    return (
        <div className="px-7 pb-2 pt-2 text-center">
            <div
                className="mx-auto flex h-20 w-20 items-center justify-center rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(45,212,164,0.20), rgba(45,212,164,0.02) 70%)',
                    border: '1px solid rgba(45,212,164,0.45)',
                }}
            >
                <svg
                    width={40}
                    height={40}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2dd4a4"
                    strokeWidth={2.4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                >
                    <path d="M5 13l4 4L19 7">
                        <animate
                            attributeName="stroke-dasharray"
                            from="0,40"
                            to="40,0"
                            dur="0.4s"
                            fill="freeze"
                        />
                    </path>
                </svg>
            </div>

            <div
                className="font-display mt-6 leading-[0.92] tracking-[-0.02em] text-white"
                style={{ fontSize: 44, fontWeight: 800 }}
            >
                {title}
            </div>
            <div className="mt-3 text-[14px] font-light leading-[1.55] text-white/65">
                {lead}
            </div>

            {/* Summary card */}
            {summary.length > 0 && (
                <div className="mt-6 rounded-xl border border-[#1E1E1E] bg-[#111] p-5 text-left">
                    <div
                        className="grid gap-4"
                        style={{
                            gridTemplateColumns: `repeat(${summary.length}, minmax(0, 1fr))`,
                        }}
                    >
                        {summary.map((item) => (
                            <div key={item.label}>
                                <div className="font-mono-ctv text-[9px] uppercase tracking-[0.16em] text-white/40">
                                    {item.label}
                                </div>
                                <div
                                    className="font-display mt-1 tabular-nums"
                                    style={{
                                        fontSize: 16,
                                        fontWeight: 700,
                                        color: item.accent ? '#2dd4a4' : '#fff',
                                    }}
                                >
                                    {item.value}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Tx hash card */}
            {txHash && (
                <div className="mt-4 flex items-center justify-between rounded-xl border border-[#1E1E1E] bg-[#0d0d0d] px-4 py-3">
                    <div className="min-w-0 flex-1 text-left">
                        <div className="font-mono-ctv text-[9px] font-bold uppercase tracking-[0.18em] text-white/40">
                            Tx hash
                        </div>
                        <div className="font-mono-ctv mt-0.5 truncate text-[11px] tabular-nums text-white">
                            {fmtTx(txHash)}
                        </div>
                    </div>
                    <a
                        href={`https://scan.chiliz.com/tx/${txHash}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono-ctv ml-3 flex flex-shrink-0 items-center gap-1.5 rounded-md border border-[#2A2A2A] px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white/65 hover:border-[#E8001D] hover:text-white"
                    >
                        Scan ↗
                    </a>
                </div>
            )}

            <div className="mt-5 grid grid-cols-2 gap-2 pb-6">
                <button
                    type="button"
                    onClick={onAnother}
                    className="font-display rounded-md border border-[#2A2A2A] px-5 py-3 text-[13px] font-bold uppercase tracking-[0.06em] text-white/85 hover:border-[#E8001D]"
                >
                    {anotherLabel}
                </button>
                <button
                    type="button"
                    onClick={onClose}
                    className="font-display rounded-md bg-[#E8001D] px-5 py-3 text-[13px] font-bold uppercase tracking-[0.06em] text-white hover:bg-[#FF1737]"
                    style={{ boxShadow: '0 8px 32px rgba(232,0,29,0.25)' }}
                >
                    Done →
                </button>
            </div>
        </div>
    );
}
