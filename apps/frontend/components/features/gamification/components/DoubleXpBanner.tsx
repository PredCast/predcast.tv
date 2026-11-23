'use client';

import type { DoubleXpBannerView } from '@chiliztv/domain/gamification/policies/doubleXpBanner';

import { HowXpWorksButton } from './HowXpWorksButton';

interface DoubleXpBannerProps {
    readonly view: DoubleXpBannerView;
    readonly className?: string;
}

/** Double XP announcement (§3.6, mockup 04 `.banner`). */
export function DoubleXpBanner({ view, className = '' }: DoubleXpBannerProps) {
    return (
        <div
            role="note"
            aria-label={view.isActive ? 'Double XP event in progress' : 'Double XP event announcement'}
            className={`flex flex-wrap items-center gap-x-5 gap-y-3 rounded-[10px] border border-[rgba(245,197,24,0.4)] px-[18px] py-3.5 ${className}`}
            style={{ background: 'linear-gradient(90deg, rgba(245,197,24,0.08), rgba(232,0,29,0.06)), #0A0A0A' }}
        >
            <span className="font-display text-[30px] font-extrabold leading-none text-[#F5C518]">{view.multiplierLabel}</span>
            <div className="min-w-[220px] flex-1">
                <div className="font-mono-ctv flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                    {view.isActive && <span aria-hidden className="block h-1.5 w-1.5 rounded-full bg-[#E8001D] motion-safe:animate-pulse" />}
                    {view.heading}
                </div>
                <div className="mt-0.5 text-[12.5px] font-light text-white/65">
                    {view.boosted} <b className="font-semibold text-white">{view.notice}</b>
                </div>
            </div>
            <HowXpWorksButton />
        </div>
    );
}
