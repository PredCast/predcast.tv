'use client';

import { FramedAvatar } from '@/components/features/gamification/components/FramedAvatar';
import { useUserProfile } from '@/hooks/api';
import { displayInitials, displayName } from '@/lib/display/userDisplay';

import { UserAvatar, type UserProfileLike } from './UserAvatar';

export type { UserProfileLike } from './UserAvatar';

interface UserBadgeProps {
    readonly walletAddress: string;
    /**
     * Optionally pre-resolved profile (saves a round-trip when the parent
     * already loaded a batch via `useUserProfilesBatch`).
     */
    readonly profile?: UserProfileLike | null;
    readonly size?: number;
    readonly className?: string;
    /** Render the avatar only (used by lists where the label is shown elsewhere). */
    readonly avatarOnly?: boolean;
    /** Gamification frame worn; with `level`, the avatar is framed and carries the level chip. */
    readonly frameId?: string;
    readonly level?: number;
}

/**
 * Single source of truth for rendering a user across the app:
 * avatar tile (image or initials) + readable display name.
 *
 * Resolves on-demand via `useUserProfile` when no `profile` prop is passed —
 * cached 5 minutes by react-query so list views with many badges stay
 * cheap. Falls back to `truncate(walletAddress)` when no profile exists.
 */
export function UserBadge({
    walletAddress,
    profile: preloaded,
    size = 32,
    className = '',
    avatarOnly = false,
    frameId,
    level,
}: UserBadgeProps) {
    const { data: fetched } = useUserProfile(preloaded ? undefined : walletAddress);
    const profile = preloaded ?? fetched ?? null;
    const name = displayName(profile, walletAddress);

    return (
        <span className={`inline-flex items-center gap-2.5 ${className}`}>
            {frameId && level ? (
                <FramedAvatar walletAddress={walletAddress} profile={profile} frameId={frameId} level={level} size={size} />
            ) : (
                <UserAvatar
                    profile={profile}
                    initials={displayInitials(profile, walletAddress)}
                    size={size}
                    seed={walletAddress}
                />
            )}
            {!avatarOnly && (
                <span
                    className="font-mono-ctv text-[12px] tabular-nums text-white/85"
                    title={walletAddress}
                >
                    {name}
                </span>
            )}
        </span>
    );
}
