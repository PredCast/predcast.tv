'use client';

import { useEffect, useRef } from 'react';

import { planNotificationToasts, xpGainToasts } from '@chiliztv/domain/gamification/policies/notificationToasts';

import { useAckNotifications, useMyGamification } from '@/hooks/api';

import { notificationToastView, xpGainToastView } from '../domain/toastView';
import { showGamificationToast } from './showGamificationToast';
import { useGamificationAccount } from './useGamificationAccount';

/** Notification ids already toasted in this page session: a refetch before the ack lands shows nothing (CA17). */
const shownIds = new Set<number>();

interface XpSnapshot {
    readonly wallet: string;
    readonly bySource: Readonly<Record<string, number>>;
}

/**
 * Owner notifications → one sonner toast each, then ack (§9.3): level up, tier unlocked, freeze
 * earned or used, plus the aggregated bet volume XP of the day. Nothing when the flag is off
 * (`/me` 404), nothing for +1 XP, nothing on a level drop.
 */
export function useGamificationToasts(): void {
    const hasAccount = useGamificationAccount();
    const { data: me } = useMyGamification(hasAccount);
    const { mutate: ack } = useAckNotifications();
    const previous = useRef<XpSnapshot | null>(null);

    useEffect(() => {
        if (!me) return;
        const plan = planNotificationToasts(me.unseenNotifications, shownIds, me.level);
        const ctx = { streak: me.streak.current, freezes: me.streakFreezes };
        for (const t of plan.toasts) {
            shownIds.add(t.notificationId);
            showGamificationToast(notificationToastView(t, ctx), `gami-notif-${t.notificationId}`);
        }
        if (plan.ackIds.length > 0) ack(plan.ackIds);

        const baseline = previous.current?.wallet === me.wallet ? previous.current.bySource : null;
        for (const gain of xpGainToasts(baseline, me.todayXpBySource)) {
            showGamificationToast(xpGainToastView(gain), `gami-xp-${gain.source}-${me.todayXpBySource[gain.source]}`);
        }
        previous.current = { wallet: me.wallet, bySource: me.todayXpBySource };
    }, [me, ack]);
}
