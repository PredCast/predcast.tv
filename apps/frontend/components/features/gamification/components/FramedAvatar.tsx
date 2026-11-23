'use client';

import { Crown } from 'lucide-react';

import { UserAvatar, type UserProfileLike } from '@/components/shared/UserAvatar';
import { displayInitials } from '@/lib/display/userDisplay';

import { frameRingOf, scaledGlow } from '../domain/frameStyle';
import { rankStyleForLevel } from '../domain/rankStyle';

interface FramedAvatarProps {
    readonly walletAddress: string;
    readonly profile: UserProfileLike | null;
    readonly frameId: string;
    readonly level: number;
    /** Outer diameter, ring included. */
    readonly size?: number;
    readonly showLevel?: boolean;
    /** Red "LIVE" tab above the avatar (streamer strip). */
    readonly live?: boolean;
}

/** Legend and Icon rings rotate; `motion-reduce` stops them (CA23). */
const SPIN_CLASS: Readonly<Record<number, string>> = {
    12: 'animate-[spin_12s_linear_infinite] motion-reduce:animate-none',
    18: 'animate-[spin_18s_linear_infinite] motion-reduce:animate-none',
};

/** `UserBadge` avatar inside the worn frame, with the level chip in the rank colour (D11, §4.2–4.3). */
export function FramedAvatar({
    walletAddress,
    profile,
    frameId,
    level,
    size = 60,
    showLevel = true,
    live = false,
}: FramedAvatarProps) {
    const frame = frameRingOf(frameId);
    const rank = rankStyleForLevel(level);
    const inner = size - 2 * frame.width;
    const small = size < 44;
    const crownSize = Math.round(size * 0.42);

    return (
        <span className="relative inline-grid shrink-0 place-items-center rounded-full" style={{ width: size, height: size }}>
            {frame.outer && (
                <span
                    aria-hidden
                    className="pointer-events-none absolute rounded-full"
                    style={{ inset: -frame.outer.inset, border: frame.outer.border }}
                />
            )}
            <span
                aria-hidden
                className={`absolute inset-0 rounded-full ${frame.spinSeconds ? SPIN_CLASS[frame.spinSeconds] ?? '' : ''}`}
                style={{ background: frame.ring, boxShadow: scaledGlow(frame.glow, size) }}
            />
            <span
                className="relative z-[1] grid place-items-center overflow-hidden rounded-full"
                style={{ width: inner, height: inner, border: '2px solid #0A0A0A' }}
            >
                <UserAvatar
                    profile={profile}
                    initials={displayInitials(profile, walletAddress)}
                    size={inner - 4}
                    seed={walletAddress}
                />
            </span>
            {frame.crown && (
                <Crown
                    aria-hidden
                    className="absolute left-1/2 z-[3] -translate-x-1/2 text-[#F5C518]"
                    style={{
                        top: -Math.round(size * 0.3),
                        width: crownSize,
                        height: crownSize,
                        fill: 'rgba(245,197,24,0.18)',
                        filter: 'drop-shadow(0 0 6px rgba(245,197,24,0.5))',
                    }}
                    strokeWidth={2.2}
                />
            )}
            {live && (
                <span className="font-mono-ctv absolute -top-[7px] left-1/2 z-[3] -translate-x-1/2 rounded-[3px] bg-[#E8001D] px-[5px] py-0.5 text-[8px] font-bold leading-none tracking-[0.16em] text-white">
                    LIVE
                </span>
            )}
            {showLevel && (
                <span
                    className={`font-mono-ctv absolute left-1/2 z-[3] -translate-x-1/2 whitespace-nowrap rounded font-bold leading-none tabular-nums ${
                        small ? 'px-1 py-0.5 text-[8px]' : 'px-1.5 py-[3px] text-[10px]'
                    }`}
                    style={{
                        bottom: -Math.round(size * 0.1),
                        background: '#0A0A0A',
                        border: `1px solid ${rank.chip}`,
                        color: rank.chipText,
                    }}
                >
                    <span className="sr-only">Level </span>
                    {level}
                </span>
            )}
        </span>
    );
}
