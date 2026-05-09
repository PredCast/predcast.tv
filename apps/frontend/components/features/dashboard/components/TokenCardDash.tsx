'use client';

import { useState } from 'react';
import { fmtNum, fmtUsd } from '../domain/formatters';
import { PnlBadge } from './PnlBadge';
import { Sparkline } from './Sparkline';

export interface TokenCardData {
    readonly sym: string;
    readonly name: string;
    readonly logo: string | null;
    readonly qty: number;
    readonly priceUSD: number | null;
    readonly change24h: number | null;
    readonly spark: ReadonlyArray<number> | null;
}

interface TokenCardDashProps {
    readonly token: TokenCardData;
}

/** Fan-token holding card. No "bet with X" CTA — fan tokens can't be wagered directly. */
export function TokenCardDash({ token }: TokenCardDashProps) {
    const [imgErr, setImgErr] = useState(false);
    const value = token.priceUSD != null ? token.qty * token.priceUSD : null;
    const sparkColor = token.change24h != null && token.change24h >= 0 ? '#2dd4a4' : '#FF1737';

    return (
        <div className="group flex flex-col gap-4 rounded-xl border border-[#1E1E1E] bg-[#111] p-5 transition-all hover:-translate-y-px hover:border-[#2A2A2A]">
            <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-[#2A2A2A] bg-[#1A1A1A]">
                        {!token.logo || imgErr ? (
                            <span className="font-display text-[12px] font-extrabold uppercase text-[#E8001D]">
                                {token.sym.slice(0, 3)}
                            </span>
                        ) : (
                            /* eslint-disable-next-line @next/next/no-img-element */
                            <img
                                src={token.logo}
                                alt={token.sym}
                                className="h-7 w-7 object-contain"
                                onError={() => setImgErr(true)}
                            />
                        )}
                    </div>
                    <div>
                        <div className="font-display text-[15px] font-bold uppercase leading-none tracking-[-0.005em] text-white">
                            ${token.sym}
                        </div>
                        <div className="font-mono-ctv mt-1 text-[10px] uppercase tracking-[0.14em] text-white/45">
                            {token.name}
                        </div>
                    </div>
                </div>
                {token.change24h != null && <PnlBadge value={token.change24h} />}
            </div>

            {token.spark && <Sparkline data={token.spark} width={240} height={36} stroke={sparkColor} />}

            <div className="grid grid-cols-3 gap-2">
                <div>
                    <div className="font-mono-ctv text-[9px] uppercase tracking-[0.18em] text-white/45">Qty</div>
                    <div className="font-mono-ctv mt-1 text-[13px] font-semibold tabular-nums text-white">
                        {fmtNum(token.qty)}
                    </div>
                </div>
                <div>
                    <div className="font-mono-ctv text-[9px] uppercase tracking-[0.18em] text-white/45">Price</div>
                    <div className="font-mono-ctv mt-1 text-[13px] font-semibold tabular-nums text-white">
                        {token.priceUSD != null ? `$${token.priceUSD.toFixed(2)}` : '—'}
                    </div>
                </div>
                <div className="text-right">
                    <div className="font-mono-ctv text-[9px] uppercase tracking-[0.18em] text-white/45">Value</div>
                    <div className="font-display mt-1 text-[16px] font-bold leading-none tracking-[-0.01em] text-white">
                        {value != null ? fmtUsd(value) : '—'}
                    </div>
                </div>
            </div>
        </div>
    );
}
