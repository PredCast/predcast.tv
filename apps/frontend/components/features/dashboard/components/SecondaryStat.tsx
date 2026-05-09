'use client';

import { DashEyebrow } from './DashEyebrow';

interface SecondaryStatProps {
    readonly eyebrow: React.ReactNode;
    readonly value: React.ReactNode;
    readonly sub?: React.ReactNode;
    readonly accent?: string;
    readonly children?: React.ReactNode;
}

/** Smaller stat card sitting next to a HeroStat. */
export function SecondaryStat({ eyebrow, value, sub, accent, children }: SecondaryStatProps) {
    return (
        <div className="rounded-xl border border-[#1E1E1E] bg-[#111] p-6 transition-colors hover:border-[#2A2A2A]">
            <DashEyebrow dim accent={accent ?? '#E8001D'}>{eyebrow}</DashEyebrow>
            <div
                className="font-display mt-5 leading-none tracking-[-0.02em] text-white"
                style={{ fontSize: 'clamp(34px, 3vw, 44px)', fontWeight: 800, color: accent ?? '#fff' }}
            >
                {value}
            </div>
            {sub && (
                <div className="font-mono-ctv mt-3 text-[10px] uppercase tracking-[0.18em] text-white/45">{sub}</div>
            )}
            {children && <div className="mt-4">{children}</div>}
        </div>
    );
}
