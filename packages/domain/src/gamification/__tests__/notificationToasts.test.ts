import { describe, expect, it } from 'vitest';

import {
    MIN_TOASTED_XP_GAIN,
    parseNotificationPayload,
    planNotificationToasts,
    xpGainToasts,
    type WireNotification,
} from '../policies/notificationToasts';

const levelUp = (id: number, level: number): WireNotification => ({ id, kind: 'level_up', payload: { kind: 'level_up', level } });
const achievement = (id: number, achievementId: string, tier: number): WireNotification => ({
    id,
    kind: 'achievement',
    payload: { kind: 'achievement', achievementId, tier },
});
const NONE: ReadonlySet<number> = new Set();

describe('parseNotificationPayload', () => {
    it('reads the four kinds written by the backend', () => {
        expect(parseNotificationPayload(levelUp(1, 5))).toEqual({ kind: 'level_up', level: 5 });
        expect(parseNotificationPayload(achievement(2, 'winning_bets', 2))).toEqual({
            kind: 'achievement',
            achievementId: 'winning_bets',
            tier: 2,
        });
        expect(parseNotificationPayload({ id: 3, kind: 'streak_freeze_used', payload: { freezesUsed: 1 } })).toEqual({
            kind: 'streak_freeze_used',
            freezesUsed: 1,
        });
        expect(parseNotificationPayload({ id: 4, kind: 'streak_freeze_earned', payload: { freezes: 2 } })).toEqual({
            kind: 'streak_freeze_earned',
            freezes: 2,
        });
    });

    it('rejects malformed payloads', () => {
        expect(parseNotificationPayload(levelUp(1, 1))).toBeNull();
        expect(parseNotificationPayload(levelUp(1, 61))).toBeNull();
        expect(parseNotificationPayload({ id: 1, kind: 'level_up', payload: { level: '5' } })).toBeNull();
        expect(parseNotificationPayload(achievement(2, 'unknown', 1))).toBeNull();
        expect(parseNotificationPayload(achievement(2, 'first_steps', 2))).toBeNull();
        expect(parseNotificationPayload({ id: 3, kind: 'streak_freeze_used', payload: { freezesUsed: 3 } })).toBeNull();
        expect(parseNotificationPayload({ id: 5, kind: 'bet_volume', payload: {} })).toBeNull();
    });
});

describe('planNotificationToasts (CA17)', () => {
    it('gives exactly one toast per notification, oldest first, and acks every unseen id', () => {
        const plan = planNotificationToasts([achievement(9, 'daily_streak', 1), levelUp(7, 5), levelUp(7, 5)], NONE, 5);
        expect(plan.toasts.map((t) => t.notificationId)).toEqual([7, 9]);
        expect(plan.toasts[0]).toEqual({ notificationId: 7, kind: 'level_up', level: 5 });
        expect(plan.ackIds).toEqual([7, 9]);
    });

    it('shows nothing again for a notification already shown (refetch before the ack lands)', () => {
        const first = planNotificationToasts([levelUp(7, 5)], NONE, 5);
        const shown = new Set(first.toasts.map((t) => t.notificationId));
        const again = planNotificationToasts([levelUp(7, 5)], shown, 5);
        expect(again.toasts).toEqual([]);
        expect(again.ackIds).toEqual([7]);
    });

    it('shows nothing once acknowledged (no unseen notification left)', () => {
        expect(planNotificationToasts([], new Set([7]), 5)).toEqual({ toasts: [], ackIds: [] });
    });

    it('never toasts a level drop: a level-up overtaken by a reversal is acked silently', () => {
        const plan = planNotificationToasts([levelUp(7, 12)], NONE, 11);
        expect(plan.toasts).toEqual([]);
        expect(plan.ackIds).toEqual([7]);
    });

    it('acks malformed notifications without a toast', () => {
        const plan = planNotificationToasts([{ id: 4, kind: 'level_up', payload: {} }, levelUp(5, 3)], NONE, 3);
        expect(plan.toasts.map((t) => t.notificationId)).toEqual([5]);
        expect(plan.ackIds).toEqual([4, 5]);
    });
});

describe('xpGainToasts', () => {
    it('takes the first snapshot as a baseline', () => {
        expect(xpGainToasts(null, { bet_volume: 40 })).toEqual([]);
    });

    it('aggregates the bet volume XP gained between two snapshots', () => {
        expect(xpGainToasts({ bet_volume: 15, chat_message: 2 }, { bet_volume: 40, chat_message: 4 })).toEqual([
            { source: 'bet_volume', xp: 25 },
        ]);
        expect(xpGainToasts({}, { bet_volume: 25 })).toEqual([{ source: 'bet_volume', xp: 25 }]);
    });

    it('shows nothing for +1 XP, other sources, a reversal or a new day', () => {
        expect(MIN_TOASTED_XP_GAIN).toBe(2);
        expect(xpGainToasts({ bet_volume: 10 }, { bet_volume: 11 })).toEqual([]);
        expect(xpGainToasts({ watch: 1 }, { watch: 9, chat_message: 5 })).toEqual([]);
        expect(xpGainToasts({ bet_volume: 30 }, { bet_volume: 0 })).toEqual([]);
        expect(xpGainToasts({ bet_volume: 30 }, { bet_volume: 30 })).toEqual([]);
    });
});
