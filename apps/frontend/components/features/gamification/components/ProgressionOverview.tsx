import type { MyGamificationDto } from '@chiliztv/shared';

import { xpBarOf } from '../domain/levelDisplay';
import { rankStyleOf } from '../domain/rankStyle';
import { streakStatsOf } from '../domain/streakDisplay';
import { LevelIdentity } from './LevelIdentity';
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
                className="border-b border-[#1E1E1E] p-6"
                style={{ background: `radial-gradient(130% 150% at 100% 0%, ${rank.tint} 0%, transparent 60%), #111` }}
            >
                <LevelIdentity me={me} rank={rank} avatarSize={76} levelSize={56} />
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
