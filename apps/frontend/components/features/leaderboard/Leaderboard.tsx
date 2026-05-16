"use client";

import { useMemo } from 'react';
import { useDynamicContext } from '@dynamic-labs/sdk-react-core';
import type { Address } from 'viem';

import { LeaderboardHeader } from './components';
import {
  PrizePoolHero,
  TopScorersTable,
  YourStatsCard,
  ClaimPrizePanel,
} from './onchain';
import { useLeaderboard, useLiveLeaderboard, type LeaderboardRow } from '@/hooks/useLeaderboard';
import { usePariMatchFactory } from '@/hooks/usePariMatchFactory';
import { usePoolDecimals } from '@/hooks/usePoolDecimals';

/**
 * On-chain Leaderboard page.
 *
 * Wires four panels against `LeaderboardRewards`:
 *   1. PrizePoolHero    — open + locked pool, current epoch state
 *   2. YourStatsCard    — connected wallet's cumulative score + approx rank
 *   3. TopScorersTable  — live tail of `WinRecorded` events, sorted
 *   4. ClaimPrizePanel  — merkle-proof claim against the last closed epoch
 *
 * Renders a graceful "not configured" state when
 * `NEXT_PUBLIC_LEADERBOARD_REWARDS_ADDRESS` is empty, so the page is always
 * reachable even before the contract is deployed.
 */
export function Leaderboard() {
  const { primaryWallet } = useDynamicContext();
  const walletAddress = primaryWallet?.address as Address | undefined;

  const {
    isConfigured,
    leaderboardAddress,
    epochIndex,
    currentEpoch,
    lastClosedEpoch,
    openPrizePool,
    lockedInClosedEpochs,
    myScore,
  } = useLeaderboard(walletAddress);

  const { rows: liveRows } = useLiveLeaderboard();
  const { allMatches } = usePariMatchFactory({ enabled: true });
  const { assetDecimals } = usePoolDecimals();

  // Merge the connected wallet's confirmed `score` (from the contract read)
  // into the live event list. Without this, a user whose wins predate the
  // page load wouldn't appear in the top-N until they win again this session.
  const mergedRows = useMemo<LeaderboardRow[]>(() => {
    if (!walletAddress) return liveRows;
    const lower = walletAddress.toLowerCase();
    const without = liveRows.filter((r) => r.user.toLowerCase() !== lower);
    if (myScore === 0n) return without;
    const mine: LeaderboardRow = { user: walletAddress, score: myScore };
    return [...without, mine].sort((a, b) =>
      b.score > a.score ? 1 : b.score < a.score ? -1 : 0,
    );
  }, [walletAddress, liveRows, myScore]);

  const myApproximateRank = useMemo(() => {
    if (!walletAddress) return undefined;
    const idx = mergedRows.findIndex(
      (r) => r.user.toLowerCase() === walletAddress.toLowerCase(),
    );
    return idx === -1 ? undefined : idx + 1;
  }, [mergedRows, walletAddress]);

  const lastClosedId =
    epochIndex !== undefined && epochIndex > 0 ? epochIndex - 1 : undefined;

  return (
    <div className="min-h-screen" style={{ background: '#0A0A0A' }}>
      <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-4 py-10 sm:px-6 sm:py-14">
        <LeaderboardHeader />

        {!isConfigured ? (
          <NotConfiguredCard />
        ) : (
          <>
            <PrizePoolHero
              leaderboardAddress={leaderboardAddress}
              openPrizePool={openPrizePool}
              lockedInClosedEpochs={lockedInClosedEpochs}
              currentEpoch={currentEpoch}
              decimals={assetDecimals}
              matchCount={allMatches?.length}
            />

            <div className="grid gap-4 md:grid-cols-2">
              <YourStatsCard
                walletAddress={walletAddress}
                cumulativeScore={myScore}
                decimals={assetDecimals}
                approximateRank={myApproximateRank}
              />
              <ClaimPrizePanel
                epochId={lastClosedId}
                epoch={lastClosedEpoch}
                walletAddress={walletAddress}
                decimals={assetDecimals}
              />
            </div>

            <TopScorersTable
              rows={mergedRows}
              highlight={walletAddress}
              decimals={assetDecimals}
            />
          </>
        )}
      </div>
    </div>
  );
}

function NotConfiguredCard() {
  return (
    <div
      className="rounded-2xl px-6 py-8"
      style={{
        background: '#0F0F0F',
        border: '1px dashed #2A2A2A',
        color: '#aaa',
        fontFamily: "'Barlow', sans-serif",
      }}
    >
      <p
        className="text-[11px] uppercase tracking-[0.14em]"
        style={{ color: '#E8001D' }}
      >
        Leaderboard not yet deployed
      </p>
      <p className="mt-2 text-[14px] leading-relaxed">
        Run <code>./deploy.sh --network chilizTestnet --all</code> to deploy
        the LeaderboardRewards proxy (it&apos;s now part of the bundle).
        After deployment, set <code>NEXT_PUBLIC_LEADERBOARD_REWARDS_ADDRESS</code>
        in your <code>.env</code> to the printed address and reload this page.
      </p>
      <p className="mt-3 text-[12px]" style={{ color: '#666' }}>
        Until then, the protocol fee defaults to 100% company / 0% leaderboard
        and no on-chain score is accumulated.
      </p>
    </div>
  );
}
