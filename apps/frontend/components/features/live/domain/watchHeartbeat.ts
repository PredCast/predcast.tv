/** Time on the page before the first heartbeat: a quick pass earns nothing. */
export const WATCH_HEARTBEAT_MIN_DWELL_MS = 60_000;

export interface WatchHeartbeatConditions {
    readonly visible: boolean;
    readonly dwellMs: number;
    readonly streamSelected: boolean;
    readonly playerPlaying: boolean;
}

/** §3.3 `watch`: tab visible, 60 s on the page, and the player playing unless no stream is selected. */
export function shouldSendWatchHeartbeat(c: WatchHeartbeatConditions): boolean {
    if (!c.visible || c.dwellMs < WATCH_HEARTBEAT_MIN_DWELL_MS) return false;
    return !c.streamSelected || c.playerPlaying;
}
