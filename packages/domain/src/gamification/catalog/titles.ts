/** §4.4. Achievement titles are attached to their tier in `achievements.ts`. */
export const TITLE_IDS = [
    'new_recruit',
    'regular',
    'faithful',
    'unbreakable',
    'full_season',
    'striker',
    'finisher',
    'fox_in_the_box',
    'goleador',
    'winning_machine',
    'prediction_legend',
    'curious',
    'versatile',
    'swiss_army_knife',
    'encyclopedia',
    'traveller',
    'globetrotter',
    'citizen_of_the_world',
    'contender',
    'podium',
    'cycle_champion',
    'spectator',
    'in_the_stands',
    'kop',
    'ultra',
    'season_ticket',
    'club_memory',
    'cheerleader',
    'voice_of_the_kop',
    'stadium_announcer',
    'studio_regular',
    'patron',
    'benefactor',
    'mic_on',
    'pundit',
    'commentator',
    'voice_of_the_match',
    'live_legend',
    'monument',
    'founder',
    'club_stalwart',
    'dressing_room_legend',
    'club_icon',
] as const;

export type TitleId = (typeof TITLE_IDS)[number];

export interface LevelTitle {
    readonly level: number;
    readonly titleId: TitleId;
}

export const LEVEL_TITLES: ReadonlyArray<LevelTitle> = [
    { level: 30, titleId: 'club_stalwart' },
    { level: 50, titleId: 'dressing_room_legend' },
    { level: 60, titleId: 'club_icon' },
];

export function titleTranslationKey(titleId: TitleId): string {
    return `gamification.title.${titleId}`;
}

export function isTitleId(value: string): value is TitleId {
    return (TITLE_IDS as ReadonlyArray<string>).includes(value);
}
