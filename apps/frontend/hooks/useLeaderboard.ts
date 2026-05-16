'use client';

import { useEffect, useMemo, useState } from 'react';
import { type Address, isAddress } from 'viem';
import { useWatchContractEvent } from 'wagmi';

import {
  useLeaderboardRewardsReadEpochIndex,
  useLeaderboardRewardsReadEpoch,
  useLeaderboardRewardsReadOpenPrizePool,
  useLeaderboardRewardsReadLockedInClosedEpochs,
  useLeaderboardRewardsReadScore,
  useLeaderboardRewardsReadHasClaimed,
  leaderboardRewardsAbi,
} from '@/lib/contracts/generated';
import { chilizConfig } from '@/config/chiliz.config';

// ─── Types mirroring the on-chain Epoch struct ───────────────────────────────

/** PariMatchBase.MarketState parallel — just a thin local enum. */
export const EPOCH_STATE = {
  Open: 'open',           // current epoch — no merkle root yet, accepting recordWin
  Closed: 'closed',       // closed with a merkle root, claims open
  Expired: 'expired',     // claim window ended, anyone can call rolloverEpoch
} as const;
export type EpochState = (typeof EPOCH_STATE)[keyof typeof EPOCH_STATE];

export interface LeaderboardEpoch {
  startTime: number;
  closedAt: number;
  claimExpiry: number;
  closed: boolean;
  prizePool: bigint;
  totalClaimed: bigint;
  merkleRoot: `0x${string}`;
  state: EpochState;
}

/** Single user's running score derived from live WinRecorded events. */
export interface LeaderboardRow {
  user: Address;
  score: bigint;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function isConfigured(): boolean {
  const a = chilizConfig.leaderboardRewards;
  return !!a && isAddress(a) && a !== '0x0000000000000000000000000000000000000000';
}

function epochStateFrom(raw: {
  closed: boolean;
  claimExpiry: number;
  prizePool: bigint;
  totalClaimed: bigint;
}): EpochState {
  if (!raw.closed) return EPOCH_STATE.Open;
  const expired = raw.claimExpiry > 0 && raw.claimExpiry < Math.floor(Date.now() / 1000);
  if (expired && raw.prizePool > raw.totalClaimed) return EPOCH_STATE.Expired;
  return EPOCH_STATE.Closed;
}

// ─── Top-level read hook ─────────────────────────────────────────────────────

/**
 * Aggregated read state for the LeaderboardRewards proxy:
 *   - current epoch index + parsed metadata
 *   - open prize pool (USDC pending allocation to the next close)
 *   - locked-in-closed (USDC reserved across not-yet-rolled epochs)
 *   - the connected wallet's cumulative score
 *
 * Reads poll every 5s so a fresh deposit / recorded win shows up without
 * a page refresh. When the leaderboard is not yet configured
 * (`chilizConfig.leaderboardRewards === 0x0`), every field is undefined and
 * `isConfigured = false` — let the page render a "not deployed yet" state.
 */
export function useLeaderboard(wallet?: Address) {
  const configured = isConfigured();
  const address = configured ? chilizConfig.leaderboardRewards : undefined;
  const chainId = chilizConfig.chainId;

  const { data: indexRaw } = useLeaderboardRewardsReadEpochIndex({
    address,
    chainId,
    query: { enabled: configured, refetchInterval: 5_000 },
  });
  const epochIndex = indexRaw !== undefined ? Number(indexRaw) : undefined;

  const { data: epochRaw } = useLeaderboardRewardsReadEpoch({
    address,
    args: epochIndex !== undefined ? [BigInt(epochIndex)] : undefined,
    chainId,
    query: { enabled: configured && epochIndex !== undefined, refetchInterval: 5_000 },
  });

  // The previous epoch (index - 1) is the most recently CLOSED one — that's
  // the one whose merkle root users can claim against, until it expires.
  const prevEpochIdx =
    epochIndex !== undefined && epochIndex > 0 ? epochIndex - 1 : undefined;
  const { data: prevEpochRaw } = useLeaderboardRewardsReadEpoch({
    address,
    args: prevEpochIdx !== undefined ? [BigInt(prevEpochIdx)] : undefined,
    chainId,
    query: { enabled: configured && prevEpochIdx !== undefined, refetchInterval: 5_000 },
  });

  const { data: openPoolRaw } = useLeaderboardRewardsReadOpenPrizePool({
    address,
    chainId,
    query: { enabled: configured, refetchInterval: 5_000 },
  });

  const { data: lockedRaw } = useLeaderboardRewardsReadLockedInClosedEpochs({
    address,
    chainId,
    query: { enabled: configured, refetchInterval: 5_000 },
  });

  const { data: myScoreRaw } = useLeaderboardRewardsReadScore({
    address,
    args: wallet ? [wallet] : undefined,
    chainId,
    query: { enabled: configured && !!wallet, refetchInterval: 5_000 },
  });

  const currentEpoch = useMemo<LeaderboardEpoch | undefined>(
    () => parseEpoch(epochRaw),
    [epochRaw],
  );
  const lastClosedEpoch = useMemo<LeaderboardEpoch | undefined>(
    () => parseEpoch(prevEpochRaw),
    [prevEpochRaw],
  );

  return {
    isConfigured: configured,
    leaderboardAddress: chilizConfig.leaderboardRewards,
    epochIndex,
    currentEpoch,
    lastClosedEpoch,
    openPrizePool: (openPoolRaw as bigint | undefined) ?? 0n,
    lockedInClosedEpochs: (lockedRaw as bigint | undefined) ?? 0n,
    myScore: (myScoreRaw as bigint | undefined) ?? 0n,
  };
}

function parseEpoch(raw: unknown): LeaderboardEpoch | undefined {
  if (!raw) return undefined;
  const e = raw as {
    startTime: number | bigint;
    closedAt: number | bigint;
    claimExpiry: number | bigint;
    closed: boolean;
    prizePool: bigint;
    totalClaimed: bigint;
    merkleRoot: `0x${string}`;
  };
  const parsed = {
    startTime: Number(e.startTime),
    closedAt: Number(e.closedAt),
    claimExpiry: Number(e.claimExpiry),
    closed: e.closed,
    prizePool: e.prizePool,
    totalClaimed: e.totalClaimed,
    merkleRoot: e.merkleRoot,
  };
  return { ...parsed, state: epochStateFrom(parsed) };
}

// ─── Live top-N from WinRecorded events ──────────────────────────────────────

/**
 * Subscribes to `WinRecorded(match, user, delta, newScore)` events and
 * accumulates a client-side map of `user → newScore`. Because `newScore` is
 * the post-increment total, we can just take the latest value seen per user
 * — no need to sum deltas client-side.
 *
 * For a production "all-time top 10" you'd ideally backfill from logs at
 * mount via `eth_getLogs`. wagmi's `useWatchContractEvent` only watches new
 * blocks; for testnet demo purposes the live feed is enough to populate the
 * board as bets resolve. We expose `seed(rows)` so callers can hydrate the
 * map from an indexer / off-chain backfill when they have one.
 */
export function useLiveLeaderboard(): {
  rows: LeaderboardRow[];
  seed: (rows: LeaderboardRow[]) => void;
} {
  const configured = isConfigured();
  const address = configured ? chilizConfig.leaderboardRewards : undefined;
  const chainId = chilizConfig.chainId;

  // Map<address, score>. Re-render on every event so the table updates live.
  const [scores, setScores] = useState<Record<string, bigint>>({});

  useWatchContractEvent({
    abi: leaderboardRewardsAbi,
    address,
    eventName: 'WinRecorded',
    chainId,
    poll: true,
    onLogs(logs) {
      // Mutate immutably — keep the latest `newScore` per user.
      setScores((prev) => {
        const next = { ...prev };
        for (const log of logs) {
          const a = log.args as { user?: Address; newScore?: bigint };
          if (!a.user || a.newScore === undefined) continue;
          const k = a.user.toLowerCase();
          // The contract guarantees newScore is monotonically non-decreasing
          // per user, so we only need a max() in case events arrive out of
          // order during a reorg window.
          const existing = next[k] ?? 0n;
          next[k] = a.newScore > existing ? a.newScore : existing;
        }
        return next;
      });
    },
  });

  const rows = useMemo<LeaderboardRow[]>(() => {
    const arr = Object.entries(scores).map(([user, score]) => ({
      user: user as Address,
      score,
    }));
    arr.sort((a, b) => (b.score > a.score ? 1 : b.score < a.score ? -1 : 0));
    return arr;
  }, [scores]);

  const seed = (init: LeaderboardRow[]) => {
    setScores((prev) => {
      const next = { ...prev };
      for (const r of init) {
        const k = r.user.toLowerCase();
        const existing = next[k] ?? 0n;
        next[k] = r.score > existing ? r.score : existing;
      }
      return next;
    });
  };

  // No-op if not configured — keep hook order stable.
  useEffect(() => {
    if (!configured) setScores({});
  }, [configured]);

  return { rows, seed };
}

// ─── Per-user, per-epoch claim helpers ───────────────────────────────────────

/**
 * Pull whether `user` has already claimed their slice of `epochId`. Useful
 * for the claim form to disable the submit button after success.
 */
export function useHasClaimedEpoch(epochId: number | undefined, user?: Address) {
  const configured = isConfigured();
  const address = configured ? chilizConfig.leaderboardRewards : undefined;
  const enabled = configured && epochId !== undefined && !!user;

  const { data } = useLeaderboardRewardsReadHasClaimed({
    address,
    args: epochId !== undefined && user ? [BigInt(epochId), user] : undefined,
    chainId: chilizConfig.chainId,
    query: { enabled, refetchInterval: 5_000 },
  });
  return !!data;
}
