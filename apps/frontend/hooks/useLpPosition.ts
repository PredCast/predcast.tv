'use client';

import { useEffect, useMemo, useState } from 'react';
import type { Address } from 'viem';
import { useLiquidityPool } from './useLiquidityPool';
import { chilizConfig } from '@/config/chiliz.config';

export interface LpPosition {
  /** ERC4626 share balance — display via shareDecimals from `usePoolDecimals`. */
  readonly shares: bigint | undefined;
  /** USDC value of the holder's shares at the current price-per-share. */
  readonly assetsValue: bigint | undefined;
  /** Sum of USDC the holder has deposited, less proportional withdrawals.
   *  Read from the pool itself; the contract maintains this for fee accrual. */
  readonly costBasis: bigint | undefined;
  /** `max(0, assetsValue - costBasis)`. Drives the "unrealized gain" display. */
  readonly unrealizedGain: bigint | undefined;
  /** Estimated `lpWithdrawalFeeBps × unrealizedGain / 10_000` deducted on exit
   *  while the position is in profit. Zero on a flat or losing position. */
  readonly withdrawalFeePreview: bigint | undefined;
  /** Unix seconds when the holder last received shares (Deposit). */
  readonly lastDepositAtSec: number | undefined;
  /** Seconds until the cooldown lapses. 0 once `canWithdraw` flips true. */
  readonly cooldownRemainingSec: number;
  /** True iff the cooldown has elapsed AND the holder owns shares. */
  readonly canWithdraw: boolean;
  /** True while any of the underlying reads are still loading. */
  readonly isLoading: boolean;
}

/**
 * Aggregates everything a user-facing "Your LP position" panel needs.
 *
 * Cost-basis is read on-chain (the pool exposes `costBasis(holder)` and
 * decrements it proportionally on Withdraw/Redeem inside its `_update`).
 * `lastDepositAt(holder)` drives the cooldown countdown.
 *
 * Implementation note: the cooldown ticker uses a 1s `setInterval` that's
 * only armed while a positive cooldown remains, so positions with no
 * cooldown impose zero render cost.
 */
export function useLpPosition(userAddress?: Address): LpPosition {
  const poolAddress = chilizConfig.liquidityPool;
  const { stats, sharesOf, costBasisOf, lastDepositAtOf, convertToAssets } = useLiquidityPool(
    poolAddress,
    userAddress,
  );

  const shares = userAddress ? sharesOf(userAddress) : undefined;
  const costBasis = userAddress ? costBasisOf(userAddress) : undefined;
  const lastDepositAtSec = userAddress ? lastDepositAtOf(userAddress) : undefined;
  // `convertToAssets` is curried inside the hook against the user's current
  // shares, so the argument is unused at the call-site.
  const assetsValue = convertToAssets(BigInt(0));

  const unrealizedGain = useMemo(() => {
    if (assetsValue === undefined || costBasis === undefined) return undefined;
    return assetsValue > costBasis ? assetsValue - costBasis : BigInt(0);
  }, [assetsValue, costBasis]);

  const withdrawalFeePreview = useMemo(() => {
    if (unrealizedGain === undefined || stats.lpWithdrawalFeeBps === undefined) return undefined;
    return (unrealizedGain * BigInt(stats.lpWithdrawalFeeBps)) / BigInt(10_000);
  }, [unrealizedGain, stats.lpWithdrawalFeeBps]);

  // Cooldown ticker. We refresh every second only when a non-zero cooldown
  // is in effect — a position past its cooldown stays still.
  const [now, setNow] = useState(() => Math.floor(Date.now() / 1000));
  const cooldownEndsAt = useMemo(() => {
    if (lastDepositAtSec === undefined || stats.depositCooldownSeconds === undefined) return undefined;
    return lastDepositAtSec + stats.depositCooldownSeconds;
  }, [lastDepositAtSec, stats.depositCooldownSeconds]);

  const cooldownRemainingSec = useMemo(() => {
    if (cooldownEndsAt === undefined) return 0;
    const remaining = cooldownEndsAt - now;
    return remaining > 0 ? remaining : 0;
  }, [cooldownEndsAt, now]);

  useEffect(() => {
    if (cooldownEndsAt === undefined || cooldownEndsAt <= now) return;
    const id = setInterval(() => setNow(Math.floor(Date.now() / 1000)), 1_000);
    return () => clearInterval(id);
  }, [cooldownEndsAt, now]);

  const canWithdraw = !!(shares && shares > BigInt(0) && cooldownRemainingSec === 0);

  return {
    shares,
    assetsValue,
    costBasis,
    unrealizedGain,
    withdrawalFeePreview,
    lastDepositAtSec,
    cooldownRemainingSec,
    canWithdraw,
    isLoading:
      shares === undefined ||
      costBasis === undefined ||
      stats.depositCooldownSeconds === undefined ||
      stats.lpWithdrawalFeeBps === undefined,
  };
}

/** Format `seconds` as `1h 23m 45s` / `23m 04s` / `45s`. Returns "" at 0. */
export function formatCooldown(seconds: number): string {
  if (seconds <= 0) return '';
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  if (h > 0) return `${h}h ${m.toString().padStart(2, '0')}m ${s.toString().padStart(2, '0')}s`;
  if (m > 0) return `${m}m ${s.toString().padStart(2, '0')}s`;
  return `${s}s`;
}
