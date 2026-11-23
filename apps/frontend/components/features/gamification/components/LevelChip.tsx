import { rankStyleForLevel } from '../domain/rankStyle';

interface LevelChipProps {
    readonly level: number;
    /** Diameter of the framed avatar it sits under. */
    readonly size: number;
}

/** Level chip centred under a framed avatar, in the rank colour (§4.2). */
export function LevelChip({ level, size }: LevelChipProps) {
    const rank = rankStyleForLevel(level);
    const small = size < 44;
    return (
        <span
            className={`font-mono-ctv absolute left-1/2 z-[3] -translate-x-1/2 whitespace-nowrap rounded font-bold leading-none tabular-nums ${
                small ? 'px-1 py-0.5 text-[8px]' : size >= 100 ? 'px-2 py-1 text-[12px]' : 'px-1.5 py-[3px] text-[10px]'
            }`}
            style={{ bottom: -Math.round(size * 0.1), background: '#0A0A0A', border: `1px solid ${rank.chip}`, color: rank.chipText }}
        >
            <span className="sr-only">Level </span>
            {level}
        </span>
    );
}
