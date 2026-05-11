import { Follow } from '../entities/Follow';

export interface FindFollowsOptions {
  readonly limit: number;
  readonly offset: number;
}

export interface IFollowRepository {
  follow(props: { followerId: string; streamerId: string; streamerName: string }): Promise<Follow>;
  unfollow(followerId: string, streamerId: string): Promise<void>;
  isFollowing(followerId: string, streamerId: string): Promise<boolean>;
  getFollowerCount(streamerId: string): Promise<number>;
  /** Page of followed streamers — newest first. */
  getFollowedStreamers(followerId: string, options: FindFollowsOptions): Promise<Follow[]>;
  /** Total rows for the same query — independent of limit/offset. */
  countFollowedStreamers(followerId: string): Promise<number>;
  /** Lightweight projection — just the streamerIds. Used when the full Follow row is overkill (auto-pick streams, etc.). */
  getFollowedStreamerIds(followerId: string): Promise<ReadonlySet<string>>;
}
