import type { MyGamificationDto } from '@chiliztv/shared';

import { rankLabel, titleLabel } from '../domain/labels';
import { xpBarOf } from '../domain/levelDisplay';
import { rankStyleOf } from '../domain/rankStyle';
import { streakStatsOf } from '../domain/streakDisplay';
import { FramedAvatar } from './FramedAvatar';
import { StreakFreezes } from './StreakFreezes';
import { StreakStat } from './StreakStat';
import { XpBar } from './XpBar';

interface ProgressionOverviewProps {
    readonly me: MyGamificationDto;
}

/** Level, rank, title, XP bar, streak, best streak and freezes of the owner. */
export function ProgressionOverview({ me }: ProgressionOverviewProps) {
    const rank = rankStyleOf(me.rankTier);
    const [current, best] = streakStatsOf({ streak: me.streak, streamedHours: null });
    return (
        <div className="overflow-hidden rounded-xl border border-[#1E1E1E] bg-[#111]">
            <div
                className="flex items-center gap-5 border-b border-[#1E1E1E] p-6"
                style={{ background: `radial-gradient(130% 150% at 100% 0%, ${rank.tint} 0%, transparent 60%), #111` }}
            >
                <FramedAvatar
                    walletAddress={me.wallet}
                    profile={{ username: me.displayName, avatarUrl: me.avatarUrl }}
                    frameId={me.frameId}
                    level={me.level}
                    size={76}
                />
                <div className="min-w-0">
                    <div className="font-mono-ctv text-[10px] font-bold uppercase tracking-[0.16em] text-white/45">Level</div>
                    <div className="font-display text-[56px] font-extrabold leading-[0.9] text-white tabular-nums">{me.level}</div>
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
            <div className="border-b border-[#1E1E1E] px-6 py-4">
                <XpBar view={xpBarOf(me)} fill={rank.bar} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3">
                <StreakStat stat={current} className="pl-6" />
                <StreakStat stat={best} className="border-t border-[#1E1E1E] pl-6 sm:border-l sm:border-t-0" />
                <div className="border-t border-[#1E1E1E] pl-6 sm:border-l sm:border-t-0">
                    <StreakFreezes freezes={me.streakFreezes} />
                </div>
            </div>
        </div>
    );
}
