'use client';

import { motion } from 'framer-motion';
import { formatUnits } from 'viem';
import { Trophy, Flame, Clock3, ExternalLink } from 'lucide-react';

import type { LeaderboardEpoch } from '@/hooks/useLeaderboard';
import { explorerAddress } from '@/lib/explorer';

interface PrizePoolHeroProps {
  /** Contract address — short-formatted for display + linked to chiliscan. */
  leaderboardAddress: `0x${string}`;
  /** USDC currently funding the next-to-be-closed epoch's pool. */
  openPrizePool: bigint;
  /** USDC locked across closed-but-not-yet-rolled epochs. */
  lockedInClosedEpochs: bigint;
  /** Open epoch metadata from the contract (the one currently accumulating). */
  currentEpoch?: LeaderboardEpoch;
  /** USDC decimals (6 on Spicy / mainnet). */
  decimals: number | undefined;
  /** Match-list count from the factory — used for the "across N matches" hint. */
  matchCount?: number;
}

/**
 * Hero strip at the top of /leaderboard. Shows the current open prize pool
 * in big monospaced digits with a flame icon, plus the current epoch index
 * + locked-pool subline.
 *
 * Both numbers spring-tween from their previous value via framer-motion's
 * `motion.span key=...` re-mount trick — every refetch that changes the
 * pool size pulses the new digits in.
 */
export function PrizePoolHero({
  leaderboardAddress,
  openPrizePool,
  lockedInClosedEpochs,
  currentEpoch,
  decimals,
  matchCount,
}: PrizePoolHeroProps) {
  const formatUsdc = (v: bigint) =>
    decimals !== undefined
      ? Number(formatUnits(v, decimals)).toLocaleString('en-US', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })
      : '—';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 24 }}
      className="overflow-hidden rounded-2xl"
      style={{
        background: 'linear-gradient(135deg, #1B0005 0%, #100002 60%, #0A0A0A 100%)',
        border: '1px solid #2A2A2A',
        boxShadow: '0 12px 60px -24px rgba(232,0,29,0.5)',
      }}
    >
      <div
        className="h-[3px]"
        style={{ background: 'linear-gradient(90deg, #E8001D 0%, #7C4DFF 60%, transparent 100%)' }}
      />

      <div className="grid gap-6 px-6 py-8 md:grid-cols-[1fr_auto] md:items-end">
        {/* Prize-pool number */}
        <div>
          <div
            className="mb-1 flex items-center gap-2 text-[10px] uppercase tracking-[0.18em]"
            style={{ color: '#E8001D', fontFamily: "'Barlow', sans-serif" }}
          >
            <Flame size={11} /> Open prize pool
          </div>
          <motion.div
            key={openPrizePool.toString()}
            initial={{ scale: 1.04, color: '#E8001D' }}
            animate={{ scale: 1, color: '#ffffff' }}
            transition={{ duration: 0.5 }}
            className="text-[56px] font-black leading-none tabular-nums"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              textShadow: '0 0 32px rgba(232,0,29,0.45)',
            }}
          >
            {formatUsdc(openPrizePool)}
            <span
              className="ml-2 text-[18px] font-bold"
              style={{ color: '#E8001D', fontFamily: "'Barlow', sans-serif" }}
            >
              USDC
            </span>
          </motion.div>

          <div
            className="mt-2 text-[11px]"
            style={{ color: '#888', fontFamily: "'Barlow', sans-serif" }}
          >
            1% of every market pool flows into this pot
            {matchCount !== undefined && ` from ${matchCount} match${matchCount === 1 ? '' : 'es'}`}.
            At the end of each epoch, the oracle posts a merkle root and top scorers claim their slice.
          </div>
        </div>

        {/* Right rail */}
        <div className="flex flex-col items-start gap-2 md:items-end">
          <a
            href={explorerAddress(leaderboardAddress)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 rounded-md px-2 py-1 text-[10px] uppercase tracking-[0.12em]"
            style={{
              background: '#141414',
              border: '1px solid #2A2A2A',
              color: '#888',
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            {leaderboardAddress.slice(0, 6)}…{leaderboardAddress.slice(-4)}
            <ExternalLink size={10} />
          </a>

          <EpochChip epoch={currentEpoch} />

          {lockedInClosedEpochs > 0n && (
            <div
              className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.12em]"
              style={{ color: '#888', fontFamily: "'Barlow', sans-serif" }}
            >
              <Clock3 size={11} /> Locked in closed epochs:&nbsp;
              <span style={{ color: '#fff', fontFamily: "'JetBrains Mono', monospace" }}>
                {formatUsdc(lockedInClosedEpochs)} USDC
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function EpochChip({ epoch }: { epoch?: LeaderboardEpoch }) {
  if (!epoch) return null;
  return (
    <div
      className="flex items-center gap-1.5 rounded-md px-2 py-1 text-[10px] uppercase tracking-[0.12em]"
      style={{
        background: 'rgba(124,77,255,0.10)',
        border: '1px solid rgba(124,77,255,0.35)',
        color: '#7C4DFF',
        fontFamily: "'Barlow', sans-serif",
      }}
    >
      <Trophy size={11} /> Current epoch · {epoch.state.toUpperCase()}
    </div>
  );
}
