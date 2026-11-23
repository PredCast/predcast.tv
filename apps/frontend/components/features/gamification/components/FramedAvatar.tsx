'use client';

import { UserAvatar, type UserProfileLike } from '@/components/shared/UserAvatar';
import { displayInitials } from '@/lib/display/userDisplay';

import { frameRingOf } from '../domain/frameStyle';
import { FrameRing } from './FrameRing';
import { LevelChip } from './LevelChip';

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
    const inner = size - 2 * frameRingOf(frameId).width;

    return (
        <span className="relative inline-grid shrink-0 place-items-center rounded-full" style={{ width: size, height: size }}>
            <FrameRing frameId={frameId} size={size} />
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
            {live && (
                <span className="font-mono-ctv absolute -top-[7px] left-1/2 z-[3] -translate-x-1/2 rounded-[3px] bg-[#E8001D] px-[5px] py-0.5 text-[8px] font-bold leading-none tracking-[0.16em] text-white">
                    LIVE
                </span>
            )}
            {showLevel && <LevelChip level={level} size={size} />}
        </span>
    );
}
