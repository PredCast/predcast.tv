'use client';

import { motion } from 'framer-motion';
import { formatUnits, type Address } from 'viem';
import { Sparkles, Wallet } from 'lucide-react';

interface YourStatsCardProps {
  walletAddress?: Address;
  /** Cumulative USDC won across all matches (from contract). */
  cumulativeScore: bigint;
  /** USDC decimals. */
  decimals: number | undefined;
  /** Optional approximate rank from the live event list. May be undefined
   *  when the user's wins haven't been observed in the live stream yet. */
  approximateRank?: number;
}

/**
 * Personal stats card. Always renders — when no wallet is connected, the
 * card prompts the user to connect. When a wallet is connected but the user
 * has no recorded wins yet, the score shows 0 USDC.
 */
export function YourStatsCard({
  walletAddress,
  cumulativeScore,
  decimals,
  approximateRank,
}: YourStatsCardProps) {
  const formatted =
    decimals !== undefined
      ? Number(formatUnits(cumulativeScore, decimals)).toLocaleString('en-US', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })
      : '—';

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl"
      style={{
        background: 'linear-gradient(180deg, #141414 0%, #0F0F0F 100%)',
        border: '1px solid #2A2A2A',
      }}
    >
      <div className="h-[2px]" style={{ background: 'linear-gradient(90deg, #7C4DFF 0%, transparent 70%)' }} />

      <div className="flex items-center gap-2 px-5 py-3" style={{ borderBottom: '1px solid #1E1E1E' }}>
        <Sparkles size={14} style={{ color: '#7C4DFF' }} />
        <h2
          className="text-[13px] font-bold uppercase tracking-[0.12em]"
          style={{ color: '#fff', fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Your stats
        </h2>
      </div>

      <div className="px-5 py-5">
        {!walletAddress ? (
          <div
            className="flex items-center gap-2 rounded-md px-3 py-2 text-[11px]"
            style={{
              background: '#0F0F0F',
              border: '1px dashed #2A2A2A',
              color: '#888',
              fontFamily: "'Barlow', sans-serif",
            }}
          >
            <Wallet size={14} />
            Connect a wallet to see your cumulative leaderboard score.
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            <Stat
              label="Cumulative USDC won"
              value={formatted}
              unit="USDC"
              tone="#fff"
            />
            <Stat
              label="Approx rank (live)"
              value={approximateRank ? `#${approximateRank}` : '—'}
              hint="from live wins observed this session"
              tone="#7C4DFF"
            />
          </div>
        )}
      </div>
    </motion.div>
  );
}

function Stat({
  label,
  value,
  unit,
  hint,
  tone,
}: {
  label: string;
  value: string;
  unit?: string;
  hint?: string;
  tone: string;
}) {
  return (
    <div
      className="rounded px-3 py-3"
      style={{ background: '#0F0F0F', border: '1px solid #1E1E1E' }}
    >
      <div className="text-[9px] uppercase tracking-[0.1em]" style={{ color: '#555' }}>
        {label}
      </div>
      <div
        className="mt-1 flex items-baseline gap-1.5"
        style={{ color: tone, fontFamily: "'JetBrains Mono', monospace" }}
      >
        <span className="text-[24px] font-bold tabular-nums">{value}</span>
        {unit && (
          <span className="text-[11px] uppercase" style={{ color: '#888' }}>
            {unit}
          </span>
        )}
      </div>
      {hint && (
        <div className="mt-1 text-[10px]" style={{ color: '#555' }}>
          {hint}
        </div>
      )}
    </div>
  );
}
