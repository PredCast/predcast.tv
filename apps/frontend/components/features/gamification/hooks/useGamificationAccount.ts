'use client';

import { useSyncExternalStore } from 'react';

import { AUTH_TOKEN_CLEARED_EVENT, AUTH_TOKEN_SET_EVENT, storedTokenHasAccount } from '@/lib/api/auth';

function subscribe(onChange: () => void): () => void {
    window.addEventListener(AUTH_TOKEN_SET_EVENT, onChange);
    window.addEventListener(AUTH_TOKEN_CLEARED_EVENT, onChange);
    window.addEventListener('storage', onChange);
    return () => {
        window.removeEventListener(AUTH_TOKEN_SET_EVENT, onChange);
        window.removeEventListener(AUTH_TOKEN_CLEARED_EVENT, onChange);
        window.removeEventListener('storage', onChange);
    };
}

const getSnapshot = (): boolean => storedTokenHasAccount(Date.now());
const getServerSnapshot = (): boolean => false;

/** True when the stored backend JWT carries an `accountId` (owner gamification routes); false on the server. */
export function useGamificationAccount(): boolean {
    return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
