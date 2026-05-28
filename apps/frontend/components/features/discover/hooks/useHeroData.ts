"use client";

import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { useLeaderboardTop, useMyLeaderboardPosition } from "@/hooks/api";
import { nextCycleEnd } from "@chiliztv/domain/leaderboard/policies/cycleSchedule";
import { usdcRawToWhole } from "../domain";

/** Read-model consumed by `HeroStrip` — flat, ready-to-render. */
export interface HeroData {
    readonly wallet: string | undefined;
    readonly epochId: number | null;
    readonly prizePoolUsdc: number;
    /** SUM(stake_amount) since the last confirmed epoch close, whole USDC. */
    readonly currentEpochVolumeUsdc: number;
    readonly topCount: number;
    readonly myRank: number | null;
    readonly myScoreUsdc: number;
    /** Epoch-end timestamp (ms). Falls back to the client-side policy when the
     *  backend hasn't deployed the `cycleEndsAt` DTO field yet. */
    readonly cycleEndsMs: number;
}

/**
 * Composes the two leaderboard hooks + the connected wallet into one
 * pre-shaped object. Keeps `HeroStrip` and its sub-sections presentational
 * (no data fetching in JSX, per CLAUDE.md §3.2).
 */
export function useHeroData(): HeroData {
    const { primaryWallet } = useDynamicContext();
    const wallet = primaryWallet?.address;

    const { data: top } = useLeaderboardTop(10);
    const { data: me } = useMyLeaderboardPosition(wallet);

    const cycleEndsMs = top?.cycleEndsAt
        ? new Date(top.cycleEndsAt).getTime()
        : nextCycleEnd(new Date()).getTime();

    return {
        wallet,
        epochId: top?.currentEpochId ?? null,
        prizePoolUsdc: usdcRawToWhole(top?.currentPrizePool),
        currentEpochVolumeUsdc: usdcRawToWhole(top?.currentEpochVolume),
        topCount: top?.entries.length ?? 10,
        myRank: me?.rank ?? null,
        myScoreUsdc: usdcRawToWhole(me?.totalScore),
        cycleEndsMs,
    };
}
