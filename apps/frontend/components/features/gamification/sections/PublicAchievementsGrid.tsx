'use client';

import { useMemo } from 'react';
import type { PublicAchievementDto } from '@chiliztv/shared';

import { publicAchievementViews } from '../domain/publicProfileDisplay';
import { ShowcaseTile } from '../components/ShowcaseTile';

interface PublicAchievementsGridProps {
    readonly achievements: ReadonlyArray<PublicAchievementDto>;
}

/** Highest public tier of each family; private achievements never reach this page. */
export function PublicAchievementsGrid({ achievements }: PublicAchievementsGridProps) {
    const views = useMemo(() => publicAchievementViews(achievements), [achievements]);
    return (
        <section aria-labelledby="public-achievements" className="mt-10">
            <h2 id="public-achievements" className="font-display m-0 text-[30px] font-extrabold uppercase leading-none text-white">
                Achievements <span className="text-white/45">· {views.length}</span>
            </h2>
            {views.length === 0 ? (
                <p className="mt-4 text-[14px] font-light text-white/45">No public achievement yet.</p>
            ) : (
                <ul className="m-0 mt-5 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2 lg:grid-cols-3">
                    {views.map((v) => (
                        <li key={v.tile.key} className="flex flex-col gap-1.5">
                            <ShowcaseTile tile={v.tile} wide />
                            <span className="font-mono-ctv pl-1 text-[9px] uppercase tracking-[0.14em] text-white/45">{v.unlocked}</span>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}
