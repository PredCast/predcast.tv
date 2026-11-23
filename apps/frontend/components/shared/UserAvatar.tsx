'use client';

import Image from 'next/image';
import type { UserProfileDto } from '@/lib/api/endpoints/users';

/** Minimum profile surface the avatar needs — full DTOs are accepted too. */
export type UserProfileLike = Pick<UserProfileDto, 'username' | 'avatarUrl'>;

interface UserAvatarProps {
    readonly profile: UserProfileLike | null;
    readonly initials: string;
    readonly size: number;
    readonly seed: string;
}

/**
 * Image when `avatarUrl` is populated, else a deterministic-gradient tile
 * with initials. The gradient palette is keyed off the wallet hex so two
 * tiles with the same `??` never look identical.
 */
export function UserAvatar({ profile, initials, size, seed }: UserAvatarProps) {
    if (profile?.avatarUrl) {
        return (
            <Image
                src={profile.avatarUrl}
                alt=""
                width={size}
                height={size}
                className="rounded-full object-cover"
                style={{ width: size, height: size }}
                // Avatar URLs can come from Supabase Storage with no Next.js
                // image-domain whitelist entry — `unoptimized` skips the
                // remote-image rewriter and avoids 400s.
                unoptimized
            />
        );
    }
    const [bg1, bg2] = paletteFor(seed);
    return (
        <span
            aria-hidden
            className="font-display inline-flex items-center justify-center rounded-full text-[11px] font-extrabold uppercase tracking-tight text-white"
            style={{
                width: size,
                height: size,
                fontSize: Math.max(10, Math.round(size * 0.4)),
                background: `linear-gradient(135deg, ${bg1} 0%, ${bg2} 100%)`,
            }}
        >
            {initials}
        </span>
    );
}

const PALETTES: ReadonlyArray<readonly [string, string]> = [
    ['#E8001D', '#7B0010'],
    ['#0072CE', '#003D6E'],
    ['#F5C518', '#7A6109'],
    ['#2dd4a4', '#0d6f55'],
    ['#A855F7', '#4C1D95'],
    ['#FF6B9D', '#7E2147'],
    ['#FB923C', '#7C2D12'],
];

function paletteFor(seed: string): readonly [string, string] {
    let h = 2166136261;
    for (let i = 0; i < seed.length; i++) {
        h ^= seed.charCodeAt(i);
        h = (h * 16777619) >>> 0;
    }
    return PALETTES[h % PALETTES.length];
}
