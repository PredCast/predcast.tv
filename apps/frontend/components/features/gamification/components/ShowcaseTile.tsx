import type { ShowcaseTileView } from '../domain/showcaseDisplay';
import { AchievementIcon } from './AchievementIcon';

interface ShowcaseTileProps {
    readonly tile: ShowcaseTileView;
    /** Single-slot showcase: icon and text side by side. */
    readonly wide?: boolean;
}

const HEXAGON = 'polygon(25% 4%, 75% 4%, 100% 50%, 75% 96%, 25% 96%, 0 50%)';

/** Achievement tile in the tier colour (I bronze … VI+ icon), hexagonal badge (mockup 04). */
export function ShowcaseTile({ tile, wide = false }: ShowcaseTileProps) {
    const { palette } = tile;
    return (
        <div
            className={`flex min-w-0 rounded-lg border ${
                wide ? 'flex-row items-center gap-2.5 py-[9px] pl-2.5 pr-2 text-left' : 'flex-col items-center gap-[5px] px-1 pb-2 pt-[9px] text-center'
            }`}
            style={{ borderColor: palette.border, background: palette.background }}
        >
            <span
                className="grid h-[30px] w-[30px] shrink-0 place-items-center border"
                style={{ color: palette.fg, borderColor: palette.border, background: 'rgba(10,10,10,0.6)', clipPath: HEXAGON }}
            >
                <AchievementIcon icon={tile.icon} className="h-[15px] w-[15px]" />
            </span>
            <span className="flex min-w-0 flex-col">
                <b className="font-mono-ctv text-[8.5px] font-bold uppercase leading-[1.25] tracking-[0.08em]" style={{ color: palette.fg }}>
                    {tile.name}
                </b>
                {tile.detail && <i className="mt-0.5 text-[10.5px] not-italic leading-[1.25] text-white/65">{tile.detail}</i>}
            </span>
        </div>
    );
}
