'use client';

import { useMemo, useSyncExternalStore } from 'react';

const MINUTE_MS = 60_000;

function subscribe(onChange: () => void): () => void {
    const id = window.setInterval(onChange, MINUTE_MS / 4);
    return () => window.clearInterval(id);
}

const getSnapshot = (): number => Math.floor(Date.now() / MINUTE_MS);
const getServerSnapshot = (): number | null => null;

/** Current time at minute precision; null during the server render and hydration (no mismatch). */
export function useMinuteNow(): Date | null {
    const minute = useSyncExternalStore<number | null>(subscribe, getSnapshot, getServerSnapshot);
    return useMemo(() => (minute === null ? null : new Date(minute * MINUTE_MS)), [minute]);
}
