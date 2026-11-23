import type { ReactNode } from 'react';

import type { MyGamificationDto } from '@chiliztv/shared';

import { xpBarOf } from '../domain/levelDisplay';
import { rankStyleOf } from '../domain/rankStyle';
import { streakStatsOf } from '../domain/streakDisplay';
import { LevelIdentity } from './LevelIdentity';
import { StreakFreezes } from './StreakFreezes';
import { StreakStat } from './StreakStat';
import { XpBar } from './XpBar';

interface ProgressionStripProps {
    readonly me: MyGamificationDto;
    /** Expand button, placed at the end of the strip. */
    readonly action: ReactNode;
}

/** Collapsed Progression: identity, XP bar and streak stats on one full-width row. */
export function ProgressionStrip({ me, action }: ProgressionStripProps) {
    const rank = rankStyleOf(me.rankTier);
    const [current, best] = streakStatsOf({ streak: me.streak, streamedHours: null });
    return (
        <div
            className="grid items-center gap-x-8 gap-y-4 rounded-xl border border-[#1E1E1E] p-5 sm:px-6 lg:grid-cols-[auto_minmax(220px,1fr)_auto_auto]"
            style={{ background: `radial-gradient(90% 220% at 0% 0%, ${rank.tint} 0%, transparent 55%), #111` }}
        >
            <LevelIdentity me={me} rank={rank} avatarSize={56} levelSize={40} />
            <XpBar view={xpBarOf(me)} fill={rank.bar} />
            <div className="flex flex-wrap gap-x-6 border-[#1E1E1E] lg:border-l lg:pl-6">
                <StreakStat stat={current} />
                <StreakStat stat={best} className="border-[#1E1E1E] sm:border-l sm:pl-6" />
                <div className="border-[#1E1E1E] sm:border-l sm:pl-6">
                    <StreakFreezes freezes={me.streakFreezes} />
                </div>
            </div>
            <div className="justify-self-start lg:justify-self-end">{action}</div>
        </div>
    );
}
