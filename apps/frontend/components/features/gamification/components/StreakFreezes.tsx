import { Snowflake } from 'lucide-react';

import { STREAK_MAX_FREEZES } from '@chiliztv/domain/gamification/catalog/constants';

interface StreakFreezesProps {
    readonly freezes: number;
}

/** Freeze stock as icons (filled = available), out of 2. */
export function StreakFreezes({ freezes }: StreakFreezesProps) {
    const slots = Array.from({ length: STREAK_MAX_FREEZES }, (_, i) => i < freezes);
    return (
        <div className="grid grid-cols-[auto_1fr] items-center gap-x-2 py-[11px] pr-3">
            <span className="row-span-2 flex gap-0.5" aria-hidden>
                {slots.map((filled, i) => (
                    <Snowflake key={i} className="h-4 w-4" style={{ color: filled ? '#D8D8DC' : '#3A3A3A' }} strokeWidth={2} />
                ))}
            </span>
            <b className="font-display whitespace-nowrap text-[19px] font-extrabold uppercase leading-none text-white">
                {freezes} / {STREAK_MAX_FREEZES}
            </b>
            <span className="font-mono-ctv whitespace-nowrap text-[8.5px] uppercase tracking-[0.14em] text-white/45">Streak freezes</span>
        </div>
    );
}
