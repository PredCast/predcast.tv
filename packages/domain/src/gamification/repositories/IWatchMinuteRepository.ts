import type { ParisDay } from '../policies/parisDay';
import type { StreamViewer } from '../policies/streamMinutePolicy';

export interface WatchMinuteWrite {
    readonly accountId: string;
    /** Truncated to the minute (`watchMinuteOf`). */
    readonly minute: Date;
    readonly day: ParisDay;
    readonly matchId: number;
    readonly streamId: string | null;
    readonly leagueId: number | null;
}

export type WatchMinuteResult =
    | { readonly inserted: false; readonly minutesToday: number }
    | {
          readonly inserted: true;
          readonly minutesToday: number;
          /** Daily counter of the league after the insert; null without league. */
          readonly leagueMinutesToday: number | null;
          /** `watch_minutes` progress after the insert (240 counted per day at most). */
          readonly totalWatchMinutes: number;
          /** False once the daily progress cap is reached. */
          readonly progressMoved: boolean;
          /** The league joined the `leagues` set with this minute. */
          readonly leagueAdded: boolean;
      };

/** `gamification_watch_minutes` (one row per account and minute, purged after 35 days). */
export interface IWatchMinuteRepository {
    /** `gamification_record_watch_minute`: insert, daily counters and progress, atomically. */
    record(write: WatchMinuteWrite): Promise<WatchMinuteResult>;
    /** Viewers of a stream at a minute, with account age and active-ban flag. */
    listViewersAt(streamId: string, minute: Date): Promise<ReadonlyArray<StreamViewer>>;
    purgeBefore(cutoff: Date): Promise<number>;
}
