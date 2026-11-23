'use client';

import { UserBadge } from '@/components/shared/UserBadge';
import { rankLabel, titleLabel } from '@/components/features/gamification/domain/labels';
import { rankStyleOf } from '@/components/features/gamification/domain/rankStyle';
import { useListBadges } from '@/components/features/gamification/hooks/useListBadges';

interface MyPositionIdentityProps {
    readonly wallet: string;
}

/** Framed avatar, level and title of the connected player; nothing without a gamification profile. */
export function MyPositionIdentity({ wallet }: MyPositionIdentityProps) {
    const badge = useListBadges([wallet]).get(wallet.toLowerCase());
    if (!badge) return null;
    const accent = rankStyleOf(badge.rankTier).accent;
    return (
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
            <UserBadge walletAddress={wallet} size={44} frameId={badge.frameId} level={badge.level} />
            <span className="font-mono-ctv text-[10px] font-bold uppercase tracking-[0.14em] text-white/45">
                Level {badge.level} ·{' '}
                <span style={{ color: accent }}>
                    {badge.titleId ? titleLabel(badge.titleId, badge.titleCycleId) : `${rankLabel(badge.rankTier)} rank`}
                </span>
            </span>
        </div>
    );
}
