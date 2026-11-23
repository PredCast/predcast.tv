import { Award, Flame, Mic } from 'lucide-react';

import type { StatIcon, StreakStatView } from '../domain/streakDisplay';

const ICONS: Readonly<Record<StatIcon, typeof Flame>> = { flame: Flame, award: Award, mic: Mic };
const TONES = { red: '#E8001D', gold: '#F5C518' } as const;

interface StreakStatProps {
    readonly stat: StreakStatView;
    readonly className?: string;
}

/** One cell of the streak row: icon, big value, mono label. */
export function StreakStat({ stat, className = '' }: StreakStatProps) {
    const Icon = ICONS[stat.icon];
    return (
        <div className={`grid grid-cols-[auto_1fr] items-center gap-x-2 py-[11px] pr-3 ${className}`}>
            <Icon aria-hidden className="row-span-2 h-4 w-4" style={{ color: TONES[stat.tone] }} strokeWidth={2} />
            <b className="font-display text-[19px] font-extrabold uppercase leading-none text-white">{stat.value}</b>
            <span className="font-mono-ctv text-[8.5px] uppercase tracking-[0.14em] text-white/45">{stat.label}</span>
        </div>
    );
}
