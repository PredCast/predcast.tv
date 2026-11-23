import type { ProfileCardDto } from '@chiliztv/shared';

export type StatIcon = 'flame' | 'award' | 'mic';

export interface StreakStatView {
    readonly icon: StatIcon;
    /** Icon colour: red for activity, gold for records. */
    readonly tone: 'red' | 'gold';
    readonly value: string;
    readonly label: string;
}

const days = (n: number): string => `${n.toLocaleString('en-US')} ${n === 1 ? 'day' : 'days'}`;

/** Two cells of the card: streak + best, or streamed hours + streak for a streamer (mockup 04). */
export function streakStatsOf(card: Pick<ProfileCardDto, 'streak' | 'streamedHours'>): readonly [StreakStatView, StreakStatView] {
    const current: StreakStatView = { icon: 'flame', tone: 'red', value: days(card.streak.current), label: 'Daily streak' };
    if (card.streamedHours !== null) {
        return [
            { icon: 'mic', tone: 'red', value: `${card.streamedHours.toLocaleString('en-US')} h`, label: 'Streamed' },
            current,
        ];
    }
    return [current, { icon: 'award', tone: 'gold', value: days(card.streak.best), label: 'Best streak' }];
}
