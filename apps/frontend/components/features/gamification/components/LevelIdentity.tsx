import type { MyGamificationDto } from '@chiliztv/shared';

import { rankLabel, titleLabel } from '../domain/labels';
import type { RankStyle } from '../domain/rankStyle';
import { FramedAvatar } from './FramedAvatar';

interface LevelIdentityProps {
    readonly me: MyGamificationDto;
    readonly rank: RankStyle;
    readonly avatarSize: number;
    /** Font size of the level number, in px. */
    readonly levelSize: number;
}

/** Framed avatar, level number, rank and equipped title of the owner. */
export function LevelIdentity({ me, rank, avatarSize, levelSize }: LevelIdentityProps) {
    return (
        <div className="flex min-w-0 items-center gap-5">
            <FramedAvatar
                walletAddress={me.wallet}
                profile={{ username: me.displayName, avatarUrl: me.avatarUrl }}
                frameId={me.frameId}
                level={me.level}
                size={avatarSize}
            />
            <div className="min-w-0">
                <div className="font-mono-ctv text-[10px] font-bold uppercase tracking-[0.16em] text-white/45">Level</div>
                <div
                    className="font-display font-extrabold leading-[0.9] text-white tabular-nums"
                    style={{ fontSize: levelSize }}
                >
                    {me.level}
                </div>
                <div className="font-mono-ctv mt-1.5 flex flex-wrap gap-x-2 text-[10px] font-bold uppercase tracking-[0.16em]">
                    <span style={{ color: rank.accent }}>{rankLabel(me.rankTier)} rank</span>
                    {me.titleId && (
                        <>
                            <span aria-hidden className="text-white/30">·</span>
                            <span className="text-white">{titleLabel(me.titleId, me.titleCycleId)}</span>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
