"use client";

import { useCallback, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { useAuth } from "@/providers/auth-provider";
import {
    EmptyState,
    FilterBar,
    leagueKey,
    type TabDescriptor,
} from "../components";
import {
    isFinished,
    isLive,
    sortMatches,
    type FlatMatch,
    type LeagueDto,
    type MatchTab,
    type SortMode,
} from "../domain";
import { useMatchesByPoolStatus } from "../hooks";
import { LiveSection } from "./LiveSection";
import { UpcomingSection } from "./UpcomingSection";
import { FinishedSection } from "./FinishedSection";

export function MatchExplorer({
    matches,
    leagues,
    now,
    isLoading = false,
}: {
    matches: FlatMatch[];
    leagues: LeagueDto[];
    /** `null` until the client clock has been initialised post-hydration. */
    now: Date | null;
    isLoading?: boolean;
}) {
    const router = useRouter();
    const { isAuthenticated } = useAuth();
    const { setShowAuthFlow } = useDynamicContext();
    const [tab, setTab] = useState<MatchTab>("all");
    const [league, setLeague] = useState<string | null>(null);
    const [sort, setSort] = useState<SortMode>("time_asc");

    // Pool totals per contract — batched and deduped against the per-card
    // `useMarketPools` reads. Feeds the Pool ↓ sort and the settled-pool meta.
    const { poolByContract } = useMatchesByPoolStatus(matches);
    const poolOf = useCallback(
        (m: FlatMatch): bigint => {
            const addr = m.contractAddress?.toLowerCase();
            return addr ? (poolByContract.get(addr) ?? BigInt(0)) : BigInt(0);
        },
        [poolByContract],
    );

    const byLeague = useCallback(
        (m: FlatMatch) => !league || `${m.leagueId}_${m.leagueName}` === league,
        [league],
    );

    // Status partition. Anything neither live nor finished is "upcoming"
    // (NS / TBD / postponed) so no match is ever dropped from the board.
    const live = useMemo(
        () => sortMatches(matches.filter((m) => isLive(m.status) && byLeague(m)), sort, poolOf),
        [matches, byLeague, sort, poolOf],
    );
    const finished = useMemo(
        () => sortMatches(matches.filter((m) => isFinished(m.status) && byLeague(m)), sort, poolOf),
        [matches, byLeague, sort, poolOf],
    );
    const upcoming = useMemo(
        () =>
            sortMatches(
                matches.filter((m) => !isLive(m.status) && !isFinished(m.status) && byLeague(m)),
                sort,
                poolOf,
            ),
        [matches, byLeague, sort, poolOf],
    );

    const showLive = (tab === "all" || tab === "live") && live.length > 0;
    const showUpcoming = (tab === "all" || tab === "upcoming") && upcoming.length > 0;
    const showFinished = (tab === "all" || tab === "finished") && finished.length > 0;

    // Tab counts reflect the full dataset (league filter doesn't narrow them).
    const tabs: TabDescriptor[] = useMemo(() => {
        const liveN = matches.filter((m) => isLive(m.status)).length;
        const finishedN = matches.filter((m) => isFinished(m.status)).length;
        return [
            { key: "all", label: "All", count: matches.length },
            { key: "live", label: "Live", count: liveN },
            { key: "upcoming", label: "Upcoming", count: matches.length - liveN - finishedN },
            { key: "finished", label: "Finished", count: finishedN },
        ];
    }, [matches]);

    // Visitors see Discover but cannot enter a live room until they connect —
    // clicking a match pops Dynamic's auth flow instead of navigating.
    const goToMatch = useCallback(
        (m: FlatMatch) => {
            if (!isAuthenticated) {
                setShowAuthFlow(true);
                return;
            }
            router.push(`/live/${m.id}`);
        },
        [router, isAuthenticated, setShowAuthFlow],
    );

    const nothing = !showLive && !showUpcoming && !showFinished;

    return (
        <section id="explorer" className="relative z-[4]">
            <FilterBar
                tabs={tabs}
                activeTab={tab}
                onTab={setTab}
                leagues={leagues}
                activeLeague={league}
                onLeague={setLeague}
                sortMode={sort}
                onSort={setSort}
            />

            <div className="mx-auto max-w-[1400px] px-8 pb-20 pt-12 sm:px-14 sm:pb-28 sm:pt-16">
                {nothing ? (
                    isLoading ? (
                        <EmptyState
                            label="Loading matches"
                            hint="Fetching live fixtures from the network…"
                        />
                    ) : matches.length === 0 ? (
                        <EmptyState
                            label="No matches available"
                            hint="Live data is unavailable. Check back at kickoff."
                        />
                    ) : (
                        <EmptyState
                            label={
                                tab === "live"
                                    ? "No live matches right now"
                                    : tab === "finished"
                                        ? "No finished matches yet"
                                        : "Nothing matches that filter"
                            }
                            hint="Try clearing the league filter, or switch tab."
                        />
                    )
                ) : (
                    <>
                        {showLive && <LiveSection matches={live} now={now} onPredict={goToMatch} />}
                        {showUpcoming && (
                            <UpcomingSection matches={upcoming} now={now} onPredict={goToMatch} />
                        )}
                        {showFinished && (
                            <FinishedSection
                                matches={finished}
                                now={now}
                                onPredict={goToMatch}
                                poolOf={poolOf}
                            />
                        )}
                    </>
                )}
            </div>
        </section>
    );
}

// Re-export leagueKey for tests / parents that need to derive a key.
export { leagueKey };
