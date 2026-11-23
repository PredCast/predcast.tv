/** Durable record of a live stream (`gamification_stream_sessions`), outliving `live_streams` purges. */
export interface StreamSession {
    readonly streamId: string;
    /** Null when the streamer wallet has no account. */
    readonly accountId: string | null;
    readonly streamerWallet: string;
    readonly matchId: number;
    readonly wentLiveAt: Date;
    readonly endedAt: Date | null;
    readonly countedMinutes: number;
    readonly lastProcessedMinute: Date | null;
    readonly moderatedAt: Date | null;
}
