import { Lock } from 'lucide-react';

import type { AchievementProgressView } from '../domain/progressionDisplay';
import { AchievementIcon } from './AchievementIcon';

interface AchievementTileProps {
    readonly view: AchievementProgressView;
}

const HEXAGON = 'polygon(25% 4%, 75% 4%, 100% 50%, 75% 96%, 25% 96%, 0 50%)';

/** One achievement family with its progress towards the next tier (owner view). */
export function AchievementTile({ view }: AchievementTileProps) {
    const { palette } = view;
    return (
        <li
            className="flex min-w-0 flex-col gap-3 rounded-xl border p-4"
            style={{ borderColor: view.unlocked ? palette.border : '#1E1E1E', background: view.unlocked ? palette.background : '#111' }}
        >
            <div className="flex items-center gap-3">
                <span
                    className="grid h-[34px] w-[34px] shrink-0 place-items-center border"
                    style={{ color: palette.fg, borderColor: palette.border, background: 'rgba(10,10,10,0.6)', clipPath: HEXAGON }}
                >
                    <AchievementIcon icon={view.icon} className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                    <div className="font-mono-ctv truncate text-[10px] font-bold uppercase tracking-[0.1em]" style={{ color: view.unlocked ? palette.fg : 'rgba(255,255,255,0.65)' }}>
                        {view.name}
                    </div>
                    {view.isPrivate && (
                        <div className="font-mono-ctv mt-0.5 inline-flex items-center gap-1 text-[8.5px] font-bold uppercase tracking-[0.14em] text-[#F5C518]">
                            <Lock aria-hidden className="h-2.5 w-2.5" />
                            Only visible to you
                        </div>
                    )}
                </div>
            </div>
            <div>
                <div className="flex items-baseline justify-between gap-2 text-[11.5px]">
                    <span className="text-white/65">{view.progress}</span>
                    <span className="font-mono-ctv text-[10px] tabular-nums text-white/45">{view.percent}%</span>
                </div>
                <div
                    className="mt-1.5 h-1 overflow-hidden rounded-full bg-[#1A1A1A]"
                    role="progressbar"
                    aria-label={`${view.name} progress`}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={view.percent}
                >
                    <i className="block h-full rounded-full" style={{ width: `${view.percent}%`, background: view.unlocked ? palette.fg : '#3A3A3A' }} />
                </div>
                <div className="font-mono-ctv mt-1.5 min-h-[14px] text-[9px] uppercase tracking-[0.12em] text-white/45">
                    {view.next ?? (view.unlocked ? 'All tiers unlocked' : '')}
                </div>
            </div>
        </li>
    );
}
