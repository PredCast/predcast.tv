import type { AchievementProgressView } from '../domain/progressionDisplay';
import { AchievementTile } from './AchievementTile';

interface AchievementsGridProps {
    readonly items: ReadonlyArray<AchievementProgressView>;
    readonly unlockedCount: number;
}

/** Every achievement family with its progress, private ones flagged. */
export function AchievementsGrid({ items, unlockedCount }: AchievementsGridProps) {
    return (
        <div>
            <h3 className="font-mono-ctv m-0 mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-white/45">
                Achievements · {unlockedCount} / {items.length} started
            </h3>
            <ul className="m-0 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2 lg:grid-cols-4">
                {items.map((view) => (
                    <AchievementTile key={view.key} view={view} />
                ))}
            </ul>
        </div>
    );
}
