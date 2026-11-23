import type { TodayXpRow } from '../domain/progressionDisplay';

interface TodayXpListProps {
    readonly rows: ReadonlyArray<TodayXpRow>;
    readonly checkedInToday: boolean;
}

/** XP earned today (Paris day), by source. */
export function TodayXpList({ rows, checkedInToday }: TodayXpListProps) {
    const total = rows.reduce((sum, r) => sum + r.xp, 0);
    return (
        <div className="rounded-xl border border-[#1E1E1E] bg-[#111] p-5">
            <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-mono-ctv m-0 text-[10px] font-bold uppercase tracking-[0.16em] text-white/45">Today · Paris time</h3>
                <span className="font-display text-[24px] font-extrabold leading-none text-white tabular-nums">
                    +{total.toLocaleString('en-US')} XP
                </span>
            </div>
            {rows.length === 0 ? (
                <p className="mt-3 text-[12.5px] font-light leading-snug text-white/45">
                    {checkedInToday ? 'Check-in counted. Watch, chat or stream to earn more today.' : 'No XP yet today. Opening the app counts as your daily check-in.'}
                </p>
            ) : (
                <ul className="mt-3 space-y-1.5">
                    {rows.map((r) => (
                        <li key={r.source} className="flex items-center justify-between text-[12.5px]">
                            <span className="text-white/65">{r.label}</span>
                            <span className="font-mono-ctv text-[11px] font-bold tabular-nums text-white">
                                {r.xp > 0 ? '+' : ''}
                                {r.xp.toLocaleString('en-US')}
                            </span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
