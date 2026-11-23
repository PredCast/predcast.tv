import type { XpBarView } from '../domain/levelDisplay';

interface XpBarProps {
    readonly view: XpBarView;
    /** Fill: rank colour, or the red → gold gradient for Legend and Icon. */
    readonly fill: string;
}

/** "LVL 27 · 1,320 / 2,700 XP" row, progress bar and remaining XP. */
export function XpBar({ view, fill }: XpBarProps) {
    return (
        <div>
            <div className="font-mono-ctv flex items-baseline justify-between text-[10px] uppercase tracking-[0.14em] text-white/45">
                <b className="font-bold text-white">{view.left}</b>
                <span className="tabular-nums">{view.right}</span>
            </div>
            <div
                className="mt-2 h-1.5 overflow-hidden rounded-full border border-[#1E1E1E] bg-[#1A1A1A]"
                role="progressbar"
                aria-label="Progress to the next level"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={view.percent}
            >
                <i className="block h-full rounded-full" style={{ width: `${view.percent}%`, background: fill }} />
            </div>
            <div className="font-mono-ctv mt-1.5 text-[9px] uppercase tracking-[0.12em] text-white/45">{view.sub}</div>
        </div>
    );
}
