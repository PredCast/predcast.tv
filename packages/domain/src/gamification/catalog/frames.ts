import { RANKS, type RankTier } from './ranks';

export type PodiumColor = 'gold' | 'silver' | 'bronze';
export type AntennaColor = 'bronze' | 'silver' | 'red' | 'legend' | 'icon';

export type FrameId =
    | `frame.rank.${RankTier}`
    | `frame.podium.${PodiumColor}`
    | 'frame.crown'
    | `frame.antenna.${AntennaColor}`
    | 'frame.founder';

export type FrameKind = 'rank' | 'podium' | 'crown' | 'antenna' | 'founder';

export interface FrameDefinition {
    readonly id: FrameId;
    readonly kind: FrameKind;
    /** `until_next_cycle`: lost when the next leaderboard cycle is snapshotted (Crown). */
    readonly duration: 'permanent' | 'until_next_cycle';
    /** Ring colour stops (§4.2, §4.3); the renderer owns widths, halos and animation. */
    readonly colors: ReadonlyArray<string>;
    readonly translationKey: string;
}

const frame = (
    id: FrameId,
    kind: FrameKind,
    colors: ReadonlyArray<string>,
    duration: FrameDefinition['duration'] = 'permanent',
): FrameDefinition => ({ id, kind, colors, duration, translationKey: `gamification.${id}` });

const RANK_FRAME_COLORS: Readonly<Record<RankTier, ReadonlyArray<string>>> = {
    rookie: ['#3A3A3A'],
    starter: ['#C8794B'],
    seasoned: ['#D8D8DC', 'rgba(216,216,220,0.55)'],
    captain: ['#F5C518'],
    international: ['#E8001D'],
    legend: ['#E8001D', '#F5C518', '#E8001D', '#B0001A'],
    icon: ['#E8001D', '#F5C518', '#FFFFFF'],
};

export const PODIUM_COLORS: Readonly<Record<PodiumColor, string>> = {
    gold: '#F5C518',
    silver: '#D8D8DC',
    bronze: '#C8794B',
};

export const FRAMES: ReadonlyArray<FrameDefinition> = [
    ...RANKS.map((r) => frame(r.frameId, 'rank', RANK_FRAME_COLORS[r.tier])),
    frame('frame.podium.gold', 'podium', [PODIUM_COLORS.gold]),
    frame('frame.podium.silver', 'podium', [PODIUM_COLORS.silver]),
    frame('frame.podium.bronze', 'podium', [PODIUM_COLORS.bronze]),
    frame('frame.crown', 'crown', ['#F5C518'], 'until_next_cycle'),
    frame('frame.antenna.bronze', 'antenna', ['#C8794B']),
    frame('frame.antenna.silver', 'antenna', ['#D8D8DC']),
    frame('frame.antenna.red', 'antenna', ['#FF1737']),
    frame('frame.antenna.legend', 'antenna', ['#E8001D', '#F5C518']),
    frame('frame.antenna.icon', 'antenna', ['#E8001D', '#F5C518', '#FFFFFF']),
    frame('frame.founder', 'founder', ['#E8001D', '#FFFFFF']),
];

/** Best placement of a cycle → podium frame colour (§4.3). */
export function podiumFrameFor(bestRank: number): FrameId | null {
    if (bestRank === 1) return 'frame.podium.gold';
    if (bestRank === 2) return 'frame.podium.silver';
    if (bestRank === 3) return 'frame.podium.bronze';
    return null;
}

export function isFrameId(value: string): value is FrameId {
    return FRAMES.some((f) => f.id === value);
}
