'use client';

import type { ReactNode } from 'react';
import { ActionPill } from './ActionPill';

interface EmptyContentProps {
    readonly icon?: ReactNode;
    readonly title: ReactNode;
    readonly lead?: ReactNode;
    readonly cta?: string;
    readonly onCta?: () => void;
    readonly secondary?: string;
    readonly onSecondary?: () => void;
    readonly tip?: ReactNode;
    readonly compact?: boolean;
}

/** Stateless empty body — no card chrome. Drop inside an existing card. */
export function InlineEmpty({ icon, title, lead, cta, onCta, secondary, onSecondary, tip, compact = false }: EmptyContentProps) {
    return (
        <div className={`flex flex-col items-center justify-center text-center ${compact ? 'gap-3 px-6 py-10' : 'gap-5 px-8 py-14'}`}>
            {icon && (
                <div
                    className="relative flex items-center justify-center rounded-full"
                    style={{
                        width: compact ? 56 : 76,
                        height: compact ? 56 : 76,
                        background: 'rgba(232,0,29,0.06)',
                        border: '1px solid rgba(232,0,29,0.25)',
                    }}
                >
                    <span
                        aria-hidden
                        className="absolute inset-0 rounded-full"
                        style={{ background: 'radial-gradient(circle at 30% 30%, rgba(232,0,29,0.18), transparent 65%)' }}
                    />
                    <span className="relative text-[#E8001D]">{icon}</span>
                </div>
            )}
            <div
                className="font-display max-w-md text-white"
                style={{
                    fontSize: compact ? 22 : 28,
                    fontWeight: 800,
                    letterSpacing: '-0.01em',
                    textTransform: 'uppercase',
                    lineHeight: 1,
                }}
            >
                {title}
            </div>
            {lead && (
                <div className="max-w-md text-[14px] font-light leading-[1.55] text-white/55">
                    {lead}
                </div>
            )}
            {(cta || secondary) && (
                <div className="mt-1 flex flex-wrap items-center justify-center gap-2">
                    {cta && (
                        <ActionPill primary onClick={onCta}>
                            {cta}
                        </ActionPill>
                    )}
                    {secondary && <ActionPill onClick={onSecondary}>{secondary}</ActionPill>}
                </div>
            )}
            {tip && (
                <div className="font-mono-ctv mt-1 max-w-md text-[10px] uppercase tracking-[0.16em] text-white/35">
                    {tip}
                </div>
            )}
        </div>
    );
}

/** Section-level empty: dashed-bordered card wrapping the inline body. */
export function EmptyCard(props: EmptyContentProps) {
    return (
        <div className="overflow-hidden rounded-xl border border-dashed border-[#2A2A2A] bg-[#0d0d0d]">
            <InlineEmpty {...props} />
        </div>
    );
}

/** Backward-compatible name. Same as EmptyCard. */
export const EmptyState = EmptyCard;
