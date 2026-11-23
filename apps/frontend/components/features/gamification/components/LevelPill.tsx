import { rankStyleForLevel } from '../domain/rankStyle';

interface LevelPillProps {
    readonly level: number;
    readonly className?: string;
}

/** Level chip before a username, in the rank colour (§4.2). A separate element from the name (CA22). */
export function LevelPill({ level, className = '' }: LevelPillProps) {
    const rank = rankStyleForLevel(level);
    return (
        <span
            className={`font-mono-ctv inline-block min-w-[22px] rounded-[3px] border px-1 py-0.5 text-center align-[1px] text-[9px] font-bold leading-none tabular-nums ${className}`}
            style={
                rank.pillBackground
                    ? { borderColor: 'transparent', background: rank.pillBackground, color: '#FFFFFF' }
                    : { borderColor: rank.chip, color: rank.chipText }
            }
        >
            <span className="sr-only">Level </span>
            {level}
        </span>
    );
}
