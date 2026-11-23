'use client';

import { useEffect, useRef } from 'react';

import { useWatchHeartbeatMutation } from '@/hooks/api';
import { backendTokenHasAccount, getBackendToken } from '@/lib/api/auth';

import { shouldSendWatchHeartbeat } from '../domain/watchHeartbeat';

const HEARTBEAT_INTERVAL_MS = 60_000;

/** True when a `<video>` of the page plays (not paused, not ended, with data). */
function isAnyVideoPlaying(root: ParentNode): boolean {
    return Array.from(root.querySelectorAll('video')).some(
        (video) => !video.paused && !video.ended && video.readyState >= 2,
    );
}

interface WatchHeartbeatOptions {
    /** API-Football id of the match on screen; null while it loads or is not found. */
    readonly matchId: number | null;
    readonly streamId: string | null;
}

/**
 * Watch minutes (§3.3 `watch`): a heartbeat every 60 s while the tab is visible, the player plays
 * (or no stream is selected) and 60 s have passed on the page. Needs a JWT with `accountId`;
 * refusals (flag off, not live, already counted) are silent.
 */
export function useWatchHeartbeat({ matchId, streamId }: WatchHeartbeatOptions): void {
    const { mutate } = useWatchHeartbeatMutation();
    const streamRef = useRef(streamId);
    const inFlight = useRef(false);

    useEffect(() => {
        streamRef.current = streamId;
    }, [streamId]);

    useEffect(() => {
        if (matchId === null) return;
        const arrivedAt = Date.now();

        const beat = async (): Promise<void> => {
            const now = Date.now();
            const send = shouldSendWatchHeartbeat({
                visible: document.visibilityState === 'visible',
                dwellMs: now - arrivedAt,
                streamSelected: streamRef.current !== null,
                playerPlaying: isAnyVideoPlaying(document),
            });
            if (!send || inFlight.current) return;
            const token = await getBackendToken();
            if (!token || !backendTokenHasAccount(token, now)) return;
            inFlight.current = true;
            mutate({ matchId, streamId: streamRef.current }, { onSettled: () => { inFlight.current = false; } });
        };

        const interval = window.setInterval(() => void beat(), HEARTBEAT_INTERVAL_MS);
        return () => window.clearInterval(interval);
    }, [matchId, mutate]);
}
