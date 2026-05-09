'use client';

import { DashEyebrow } from './DashEyebrow';
import { PnlBadge } from './PnlBadge';
import { Sparkline } from './Sparkline';

interface HeroStatProps {
    readonly eyebrow: React.ReactNode;
    readonly value: React.ReactNode;
    readonly sub?: React.ReactNode;
    readonly delta?: number;
    readonly deltaSuffix?: string;
    readonly spark?: ReadonlyArray<number> | null;
    readonly sparkColor?: string;
}

/** Big-number stat card with optional delta badge + sparkline at the bottom. */
export function HeroStat({ eyebrow, value, sub, delta, deltaSuffix = '%', spark, sparkColor = '#2dd4a4' }: HeroStatProps) {
    return (
        <div className="relative flex h-full flex-col justify-between gap-8 overflow-hidden rounded-xl border border-[#1E1E1E] bg-[#111] p-7 transition-colors hover:border-[#2A2A2A]">
            <div
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(232,0,29,0.18), transparent 65%)', filter: 'blur(8px)' }}
            />
            <div className="relative">
                <DashEyebrow dim>{eyebrow}</DashEyebrow>
                <div
                    className="font-display mt-6 leading-[0.92] tracking-[-0.02em] text-white"
                    style={{ fontSize: 'clamp(56px, 6vw, 80px)', fontWeight: 800 }}
                >
                    {value}
                </div>
                {sub && (
                    <div className="font-mono-ctv mt-3 text-[11px] uppercase tracking-[0.18em] text-white/45">{sub}</div>
                )}
            </div>
            {(typeof delta === 'number' || (spark && spark.length >= 2)) && (
                <div className="relative flex items-end justify-between gap-6">
                    {typeof delta === 'number' && (
                        <div className="flex flex-col gap-1.5">
                            <span className="font-mono-ctv text-[10px] uppercase tracking-[0.18em] text-white/45">24h</span>
                            <PnlBadge value={delta} suffix={deltaSuffix} size="lg" />
                        </div>
                    )}
                    {spark && spark.length >= 2 && (
                        <div className="flex-1">
                            <Sparkline data={spark} width={260} height={48} stroke={sparkColor} />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
