'use client';

import { useEffect, useRef } from 'react';
import { useDynamicContext } from '@dynamic-labs/sdk-react-core';

import { useCheckIn } from '@/hooks/api';
import { AUTH_TOKEN_SET_EVENT, backendTokenHasAccount, getBackendToken } from '@/lib/api/auth';

import { checkInToastView } from '../domain/toastView';
import { showGamificationToast } from './showGamificationToast';

const RECHECK_INTERVAL_MS = 30 * 60_000;

/**
 * Daily check-in (§3.3): on mount, each time the tab becomes visible, and every 30 min while it
 * stays visible — never while hidden. Only with a backend JWT carrying `accountId`. A credited
 * call shows "+65 XP · Day 4"; any refusal (flag off, not launched, already done) shows nothing.
 */
export function useAutoCheckIn(): void {
    const { primaryWallet } = useDynamicContext();
    const { mutate } = useCheckIn();
    const inFlight = useRef(false);
    const wallet = primaryWallet?.address;

    useEffect(() => {
        if (!wallet) return;

        const run = async (): Promise<void> => {
            if (document.visibilityState !== 'visible' || inFlight.current) return;
            const token = await getBackendToken();
            if (!token || !backendTokenHasAccount(token, Date.now())) return;
            inFlight.current = true;
            mutate(undefined, {
                onSuccess: (result) => {
                    const view = checkInToastView(result);
                    if (view && result.credited) showGamificationToast(view, `gami-check-in-${result.day}`);
                },
                onSettled: () => {
                    inFlight.current = false;
                },
            });
        };
        const onVisibilityChange = (): void => {
            if (document.visibilityState === 'visible') void run();
        };

        void run();
        document.addEventListener('visibilitychange', onVisibilityChange);
        window.addEventListener(AUTH_TOKEN_SET_EVENT, run);
        const interval = window.setInterval(run, RECHECK_INTERVAL_MS);
        return () => {
            document.removeEventListener('visibilitychange', onVisibilityChange);
            window.removeEventListener(AUTH_TOKEN_SET_EVENT, run);
            window.clearInterval(interval);
        };
    }, [wallet, mutate]);
}
