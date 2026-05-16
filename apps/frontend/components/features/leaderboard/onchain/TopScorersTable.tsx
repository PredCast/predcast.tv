'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { formatUnits, type Address } from 'viem';
import { Trophy, Medal, Award } from 'lucide-react';

import type { LeaderboardRow } from '@/hooks/useLeaderboard';
import { explorerAddress } from '@/lib/explorer';

interface TopScorersTableProps {
  rows: LeaderboardRow[];
  /** Wallet to highlight in the list (the connected user). */
  highlight?: Address;
  /** USDC decimals (6 on Spicy / mainnet). */
  decimals: number | undefined;
  /** Hard cap on rendered rows. Default 10. */
  limit?: number;
}

/**
 * Top-N scorers — sorted by cumulative USDC won (the contract's `score`
 * metric, accumulated client-side from `WinRecorded` events).
 *
 * Rank 1–3 get coloured medal icons (Polymarket-style podium). The connected
 * wallet's row is outlined in red if it appears in the list.
 *
 * Note: this view is event-sourced, so it only reflects wins captured since
 * the page mounted (plus anything seeded via `useLiveLeaderboard().seed`).
 * A production deployment should add an indexer / backend backfill — but
 * for the testnet demo, the live tail is enough.
 */
export function TopScorersTable({
  rows,
  highlight,
  decimals,
  limit = 10,
}: TopScorersTableProps) {
  const visible = rows.slice(0, limit);

  return (
    <div
      className="overflow-hidden rounded-2xl"
      style={{
        background: 'linear-gradient(180deg, #141414 0%, #0F0F0F 100%)',
        border: '1px solid #2A2A2A',
      }}
    >
      <div
        className="h-[2px]"
        style={{ background: 'linear-gradient(90deg, #E8001D 0%, transparent 70%)' }}
      />

      <div className="flex items-center gap-2 px-5 py-3" style={{ borderBottom: '1px solid #1E1E1E' }}>
        <Trophy size={14} style={{ color: '#E8001D' }} />
        <h2
          className="text-[13px] font-bold uppercase tracking-[0.12em]"
          style={{ color: '#fff', fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Top scorers
        </h2>
        <span
          className="rounded px-1.5 py-0.5 text-[10px] uppercase tracking-[0.1em]"
          style={{
            background: '#1A1A1A',
            color: '#888',
            border: '1px solid #2A2A2A',
            fontFamily: "'Barlow', sans-serif",
          }}
        >
          live
        </span>
        <div className="flex-1" />
        <span
          className="text-[10px] uppercase tracking-[0.1em]"
          style={{ color: '#555', fontFamily: "'Barlow', sans-serif" }}
        >
          {rows.length === 0 ? 'Waiting for wins…' : `${rows.length} tracked`}
        </span>
      </div>

      {visible.length === 0 ? (
        <div
          className="px-5 py-10 text-center text-[12px]"
          style={{ color: '#555', fontFamily: "'Barlow', sans-serif" }}
        >
          No wins recorded yet. Resolve a match and claim — your address will appear here within seconds.
        </div>
      ) : (
        <div>
          {/* column header */}
          <div
            className="grid items-center gap-3 px-5 py-2 text-[10px] uppercase tracking-[0.12em]"
            style={{
              gridTemplateColumns: '40px 1fr auto',
              color: '#555',
              fontFamily: "'Barlow', sans-serif",
              borderBottom: '1px solid #1E1E1E',
            }}
          >
            <span>Rank</span>
            <span>Wallet</span>
            <span>Cumulative USDC</span>
          </div>

          <AnimatePresence initial={false}>
            {visible.map((row, idx) => {
              const isMe =
                !!highlight && row.user.toLowerCase() === highlight.toLowerCase();
              return (
                <Row
                  key={row.user}
                  rank={idx + 1}
                  row={row}
                  isMe={isMe}
                  decimals={decimals}
                />
              );
            })}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}

function Row({
  rank,
  row,
  isMe,
  decimals,
}: {
  rank: number;
  row: LeaderboardRow;
  isMe: boolean;
  decimals: number | undefined;
}) {
  const formatted =
    decimals !== undefined
      ? Number(formatUnits(row.score, decimals)).toLocaleString('en-US', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })
      : '—';
  const short = `${row.user.slice(0, 8)}…${row.user.slice(-6)}`;

  return (
    <motion.a
      layout
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      href={explorerAddress(row.user)}
      target="_blank"
      rel="noopener noreferrer"
      className="grid items-center gap-3 px-5 py-2.5"
      style={{
        gridTemplateColumns: '40px 1fr auto',
        background: isMe ? 'rgba(232,0,29,0.10)' : 'transparent',
        borderTop: '1px solid #1E1E1E',
        borderLeft: isMe ? '2px solid #E8001D' : '2px solid transparent',
      }}
    >
      <RankBadge rank={rank} />
      <div className="min-w-0">
        <div
          className="flex items-center gap-2 truncate text-[12px]"
          style={{ color: isMe ? '#fff' : '#ccc', fontFamily: "'JetBrains Mono', monospace" }}
        >
          {short}
          {isMe && (
            <span
              className="rounded-sm px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.12em]"
              style={{
                background: 'rgba(232,0,29,0.16)',
                color: '#E8001D',
                border: '1px solid rgba(232,0,29,0.4)',
                fontFamily: "'Barlow', sans-serif",
              }}
            >
              You
            </span>
          )}
        </div>
      </div>
      <div
        className="text-right text-[13px] font-bold tabular-nums"
        style={{ color: '#fff', fontFamily: "'JetBrains Mono', monospace" }}
      >
        {formatted}
      </div>
    </motion.a>
  );
}

function RankBadge({ rank }: { rank: number }) {
  if (rank === 1) {
    return <Medal size={18} style={{ color: '#FFD700' }} />;
  }
  if (rank === 2) {
    return <Medal size={18} style={{ color: '#C0C0C0' }} />;
  }
  if (rank === 3) {
    return <Award size={18} style={{ color: '#CD7F32' }} />;
  }
  return (
    <span
      className="text-[11px] font-bold tabular-nums"
      style={{ color: '#666', fontFamily: "'JetBrains Mono', monospace" }}
    >
      #{rank}
    </span>
  );
}
