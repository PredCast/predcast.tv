import type { AchievementProgressView } from '../domain/progressionDisplay';
import { AchievementIcon } from './AchievementIcon';

interface NextTiersListProps {
    readonly items: ReadonlyArray<AchievementProgressView>;
}

/** The three families closest to their next tier. */
export function NextTiersList({ items }: NextTiersListProps) {
    return (
        <div className="rounded-xl border border-[#1E1E1E] bg-[#111] p-5">
            <h3 className="font-mono-ctv m-0 text-[10px] font-bold uppercase tracking-[0.16em] text-white/45">Almost there</h3>
            {items.length === 0 ? (
                <p className="mt-3 text-[12.5px] font-light text-white/45">Every tier in reach is unlocked.</p>
            ) : (
                <ul className="mt-3 space-y-3">
                    {items.map((item) => (
                        <li key={item.key} className="flex items-center gap-3">
                            <AchievementIcon icon={item.icon} className="h-4 w-4 shrink-0 text-white/65" />
                            <div className="min-w-0 flex-1">
                                <div className="flex items-baseline justify-between gap-2">
                                    <span className="truncate text-[12.5px] text-white">{item.goal}</span>
                                    <span className="font-mono-ctv text-[10px] tabular-nums text-white/45">{item.percent}%</span>
                                </div>
                                <div className="mt-1 h-1 overflow-hidden rounded-full bg-[#1A1A1A]">
                                    <i className="block h-full rounded-full bg-[#E8001D]" style={{ width: `${item.percent}%` }} />
                                </div>
                                <div className="mt-1 text-[11px] font-light text-white/45">{item.progress}</div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
