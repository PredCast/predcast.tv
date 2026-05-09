'use client';

import { useMemo } from 'react';
import { useFollowedStreamers } from '@/hooks/api';
import { useSubscriberHistory } from '@/hooks/api';

export interface FollowedStreamer {
    readonly id: string;
    readonly streamerId: string;
    readonly name: string;
    readonly league: string | null;
    readonly live: boolean;
}

export interface SubscribedStreamer {
    readonly id: string;
    readonly streamerId: string;
    readonly name: string;
    readonly renewsAt: number;
    readonly monthlyUSDC: number | null;
    readonly active: boolean;
}

export interface UseDashboardStreamersArgs {
    readonly userId: string | undefined;
    readonly wallet: `0x${string}` | undefined;
}

export interface UseDashboardStreamersResult {
    readonly followed: ReadonlyArray<FollowedStreamer>;
    readonly subscribed: ReadonlyArray<SubscribedStreamer>;
    readonly isLoading: boolean;
}

/** Wraps follows + subscriber-history into the shape MainTabs.Streamers needs. */
export function useDashboardStreamers({ userId, wallet }: UseDashboardStreamersArgs): UseDashboardStreamersResult {
    const follows = useFollowedStreamers(userId);
    const subs = useSubscriberHistory(wallet ?? '');

    const followed = useMemo<FollowedStreamer[]>(() => {
        return (follows.data ?? []).map((f) => ({
            id: f.id,
            streamerId: f.streamerId,
            name: f.streamerName,
            league: null, // The follows API doesn't currently expose league — surfaces as "—" in the UI.
            live: false, // Live status would require a join with `live_streams`; out of scope.
        }));
    }, [follows.data]);

    const subscribed = useMemo<SubscribedStreamer[]>(() => {
        return (subs.data?.subscriptions ?? []).map((s) => ({
            id: s.id,
            streamerId: s.streamerAddress,
            name: s.streamerAddress.slice(0, 6) + '…' + s.streamerAddress.slice(-4),
            renewsAt: new Date(s.endDate).getTime(),
            // amount is in raw USDC units; conversion lives in the section so we keep this shape simple.
            monthlyUSDC: null,
            active: s.isActive,
        }));
    }, [subs.data?.subscriptions]);

    return {
        followed,
        subscribed,
        isLoading: follows.isLoading || subs.isLoading,
    };
}
