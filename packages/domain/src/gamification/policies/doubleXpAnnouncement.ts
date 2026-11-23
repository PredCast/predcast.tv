import type { DoubleXpWindow } from './doubleXpPolicy';

/** Public banner horizon: an event is announced up to this long before it starts (§9.1). */
export const DOUBLE_XP_ANNOUNCE_DAYS = 7;
const MS_PER_DAY = 86_400_000;

export type AnnouncedDoubleXp<T extends DoubleXpWindow> = { readonly event: T; readonly isActive: boolean };

/** Event running at `now` (cancellation honoured), else the next one starting within 7 days. */
export function announcedDoubleXp<T extends DoubleXpWindow>(
    events: ReadonlyArray<T>,
    now: Date,
): AnnouncedDoubleXp<T> | null {
    const t = now.getTime();
    const live = events.filter((e) => e.cancelledAt === null || e.cancelledAt.getTime() > t);
    const active = live.find((e) => e.startsAt.getTime() <= t && t < e.endsAt.getTime());
    if (active) return { event: active, isActive: true };
    const next = live
        .filter((e) => e.startsAt.getTime() > t && e.startsAt.getTime() - t <= DOUBLE_XP_ANNOUNCE_DAYS * MS_PER_DAY)
        .sort((a, b) => a.startsAt.getTime() - b.startsAt.getTime())[0];
    return next ? { event: next, isActive: false } : null;
}
