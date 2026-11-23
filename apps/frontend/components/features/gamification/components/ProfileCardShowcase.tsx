import type { ShowcaseItemDto } from '@chiliztv/shared';

import { showcaseHeading, showcaseTileOf } from '../domain/showcaseDisplay';
import { ShowcaseTile } from './ShowcaseTile';

interface ProfileCardShowcaseProps {
    readonly items: ReadonlyArray<ShowcaseItemDto>;
    readonly slots: number;
}

const COLUMNS: Readonly<Record<number, string>> = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
};

/** 1 to 3 public achievement tiles; nothing when the player has none yet. */
export function ProfileCardShowcase({ items, slots }: ProfileCardShowcaseProps) {
    if (items.length === 0) return null;
    const tiles = items.map(showcaseTileOf);
    return (
        <div className="border-b border-[#1E1E1E] pb-3.5 pl-[18px] pr-4 pt-3">
            <div className="font-mono-ctv text-[9px] font-bold uppercase tracking-[0.18em] text-white/45">
                {showcaseHeading(slots)}
            </div>
            <div className={`mt-[9px] grid gap-2 ${COLUMNS[tiles.length] ?? 'grid-cols-3'}`}>
                {tiles.map((tile) => (
                    <ShowcaseTile key={tile.key} tile={tile} wide={tiles.length === 1} />
                ))}
            </div>
        </div>
    );
}
