import Link from 'next/link';
import type { ProfileBadgeDto } from '@chiliztv/shared';

import { rankLabel, titleLabel } from '@/components/features/gamification/domain/labels';
import { rankStyleOf } from '@/components/features/gamification/domain/rankStyle';

export type HeroProgress = Pick<ProfileBadgeDto, 'wallet' | 'level' | 'rankTier' | 'frameId' | 'titleId' | 'titleCycleId'>;

interface HeroProgressLineProps {
    readonly progress: HeroProgress;
}

/** Worn title in the rank colour, level and rank, link to the public profile. */
export function HeroProgressLine({ progress }: HeroProgressLineProps) {
    const rank = rankStyleOf(progress.rankTier);
    return (
        <div className="font-mono-ctv mt-3 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[11px] font-bold uppercase tracking-[0.16em]">
            {progress.titleId && <span style={{ color: rank.accent }}>{titleLabel(progress.titleId, progress.titleCycleId)}</span>}
            {progress.titleId && <span aria-hidden className="text-white/30">·</span>}
            <span className="text-white/65">
                Level {progress.level} · {rankLabel(progress.rankTier)} rank
            </span>
            <Link
                href={`/u/${progress.wallet}`}
                className="text-white/45 underline decoration-dotted underline-offset-4 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8001D]"
            >
                Public profile
            </Link>
        </div>
    );
}
