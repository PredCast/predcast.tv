import type { ProfileCardDto } from '@chiliztv/shared';

export interface XpBarView {
    readonly left: string;
    readonly right: string;
    /** 0–100. */
    readonly percent: number;
    readonly sub: string;
}

const fmt = (n: number): string => n.toLocaleString('en-US');

/** "LVL 27 · 1,320 / 2,700 XP · 1,380 XP to level 28"; full bar and *Max level* at 60 (§4.1). */
export function xpBarOf(card: Pick<ProfileCardDto, 'level' | 'xp'>): XpBarView {
    const { total, levelStart, nextLevelAt } = card.xp;
    if (nextLevelAt === null) {
        return {
            left: `LVL ${card.level} · Max level`,
            right: `${fmt(total)} XP`,
            percent: 100,
            sub: 'XP keeps counting for future seasons',
        };
    }
    const span = nextLevelAt - levelStart;
    const into = Math.max(0, total - levelStart);
    return {
        left: `LVL ${card.level}`,
        right: `${fmt(into)} / ${fmt(span)} XP`,
        percent: span > 0 ? Math.min(100, Math.round((into / span) * 1000) / 10) : 0,
        sub: `${fmt(nextLevelAt - total)} XP to level ${card.level + 1}`,
    };
}

/** "Dec 2026", in UTC so server and client agree. */
export function memberSinceLabel(iso: string): string {
    return new Date(iso).toLocaleDateString('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' });
}

const MS_PER_DAY = 86_400_000;

/** Day number of a new account ("New · day 5"), counted from day 1. */
export function newPlayerDay(memberSinceIso: string, now: Date): number {
    return Math.max(1, Math.floor((now.getTime() - new Date(memberSinceIso).getTime()) / MS_PER_DAY) + 1);
}
