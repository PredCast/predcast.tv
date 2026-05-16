'use client';

import { useEffect, useMemo, useState } from 'react';
import { formatUnits, isAddress, parseUnits, type Address } from 'viem';
import { useWaitForTransactionReceipt } from 'wagmi';
import { motion } from 'framer-motion';
import { Gift, ExternalLink, CheckCircle2, AlertTriangle } from 'lucide-react';

import {
  useLeaderboardRewardsWriteClaim,
} from '@/lib/contracts/generated';
import { chilizConfig } from '@/config/chiliz.config';
import { explorerTx } from '@/lib/explorer';
import { useHasClaimedEpoch, type LeaderboardEpoch } from '@/hooks/useLeaderboard';

interface ClaimPrizePanelProps {
  /** Epoch index that has a merkle root posted (typically `epochIndex - 1`). */
  epochId?: number;
  /** Parsed last-closed epoch from `useLeaderboard`. */
  epoch?: LeaderboardEpoch;
  walletAddress?: Address;
  /** USDC decimals. */
  decimals: number | undefined;
}

/**
 * Claim panel for the most recently closed epoch.
 *
 * The oracle generates a merkle tree of `(user, prizeAmount)` leaves
 * off-chain and posts the root on-chain. Top-N winners are notified
 * out-of-band (e.g. via the oracle's UI / API) of:
 *   1. their `prizeAmount` (in USDC atomic units)
 *   2. the `proof` (an array of bytes32 sibling hashes)
 *
 * This panel takes both as user input — pasted JSON for the proof. Once the
 * user submits, the contract verifies the leaf
 * `keccak256(bytes.concat(keccak256(abi.encode(msg.sender, prizeAmount))))`
 * against the stored root and transfers USDC on success.
 *
 * Auto-disables when:
 *   - leaderboard contract is not configured
 *   - the user has already claimed this epoch
 *   - the epoch's claim window expired
 *   - the epoch was never closed / has no merkle root
 */
export function ClaimPrizePanel({ epochId, epoch, walletAddress, decimals }: ClaimPrizePanelProps) {
  const [amountInput, setAmountInput] = useState('');
  const [proofInput, setProofInput] = useState('');

  const alreadyClaimed = useHasClaimedEpoch(epochId, walletAddress);

  const claim = useLeaderboardRewardsWriteClaim();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
    hash: claim.data,
  });

  // ── Parse inputs ─────────────────────────────────────────────────────────
  const parsedAmount: bigint = useMemo(() => {
    if (!amountInput || decimals === undefined) return 0n;
    try {
      return parseUnits(amountInput, decimals);
    } catch {
      return 0n;
    }
  }, [amountInput, decimals]);

  const parsedProof: `0x${string}`[] = useMemo(() => {
    const trimmed = proofInput.trim();
    if (!trimmed) return [];
    try {
      const parsed = JSON.parse(trimmed);
      if (!Array.isArray(parsed)) return [];
      return parsed
        .filter((s): s is string => typeof s === 'string' && s.startsWith('0x'))
        .map((s) => s as `0x${string}`);
    } catch {
      // Fall back to comma-separated paste
      return trimmed
        .split(/[\s,]+/)
        .filter((s) => s.startsWith('0x'))
        .map((s) => s as `0x${string}`);
    }
  }, [proofInput]);

  useEffect(() => {
    if (isSuccess) {
      setAmountInput('');
      setProofInput('');
    }
  }, [isSuccess]);

  // ── Render-time gating ───────────────────────────────────────────────────
  const noEpochYet = !epoch || epochId === undefined;
  const noRoot = epoch && epoch.merkleRoot === '0x0000000000000000000000000000000000000000000000000000000000000000';
  const expired = epoch?.state === 'expired';
  const closed = epoch?.state === 'closed';

  // The contract can ONLY accept a claim while state is 'closed'.
  const canSubmit =
    !!walletAddress &&
    closed &&
    !alreadyClaimed &&
    !claim.isPending &&
    !isConfirming &&
    parsedAmount > 0n &&
    parsedProof.length >= 0; // empty proof = single-leaf tree, valid

  const submit = () => {
    if (!canSubmit || epochId === undefined) return;
    claim.writeContract({
      address: chilizConfig.leaderboardRewards,
      args: [BigInt(epochId), parsedAmount, parsedProof],
      chainId: chilizConfig.chainId,
    });
  };

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
      <div className="h-[2px]" style={{ background: 'linear-gradient(90deg, #00C853 0%, transparent 70%)' }} />

      <div className="flex items-center gap-2 px-5 py-3" style={{ borderBottom: '1px solid #1E1E1E' }}>
        <Gift size={14} style={{ color: '#00C853' }} />
        <h2
          className="text-[13px] font-bold uppercase tracking-[0.12em]"
          style={{ color: '#fff', fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Claim your prize
        </h2>
        {epochId !== undefined && (
          <span
            className="rounded px-1.5 py-0.5 text-[10px] uppercase tracking-[0.1em]"
            style={{
              background: '#1A1A1A',
              color: '#888',
              border: '1px solid #2A2A2A',
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            Epoch #{epochId}
          </span>
        )}
      </div>

      <div className="space-y-3 px-5 py-4">
        {noEpochYet && <InfoBanner tone="amber" text="No epoch has been closed yet. Once the oracle posts a merkle root, winners can claim here." />}
        {!noEpochYet && noRoot && <InfoBanner tone="amber" text="This epoch was closed but has no merkle root. Skip — wait for the next close." />}
        {expired && <InfoBanner tone="grey" text="The claim window for this epoch has expired. Unclaimed funds roll into the next pool." />}
        {!walletAddress && <InfoBanner tone="amber" text="Connect a wallet to claim." />}
        {alreadyClaimed && (
          <div
            className="flex items-center gap-2 rounded-md px-3 py-2 text-[11px]"
            style={{
              background: 'rgba(0,200,83,0.10)',
              border: '1px solid rgba(0,200,83,0.35)',
              color: '#00C853',
              fontFamily: "'Barlow', sans-serif",
            }}
          >
            <CheckCircle2 size={13} /> You already claimed this epoch.
          </div>
        )}

        <Field label="Prize amount (USDC)">
          <input
            type="number"
            value={amountInput}
            onChange={(e) => setAmountInput(e.target.value)}
            placeholder="e.g. 12.50"
            min={0}
            step="0.01"
            disabled={!closed || alreadyClaimed}
            className="w-full rounded-md px-3 py-2 text-[13px] focus:outline-none"
            style={{
              background: '#0F0F0F',
              border: '1px solid #2A2A2A',
              color: '#fff',
              fontFamily: "'JetBrains Mono', monospace",
              opacity: !closed || alreadyClaimed ? 0.5 : 1,
            }}
          />
          <Hint>From the oracle: your share of the epoch&apos;s prize pool.</Hint>
        </Field>

        <Field label="Merkle proof (JSON array of 0x… hashes, or comma-separated)">
          <textarea
            value={proofInput}
            onChange={(e) => setProofInput(e.target.value)}
            placeholder='["0xabc…", "0xdef…"]'
            disabled={!closed || alreadyClaimed}
            rows={3}
            className="w-full resize-y rounded-md px-3 py-2 text-[11px] focus:outline-none"
            style={{
              background: '#0F0F0F',
              border: '1px solid #2A2A2A',
              color: '#fff',
              fontFamily: "'JetBrains Mono', monospace",
              opacity: !closed || alreadyClaimed ? 0.5 : 1,
            }}
          />
          <Hint>
            Empty array is valid for single-leaf trees. The oracle&apos;s claim
            page or API hands you both values.
          </Hint>
        </Field>

        {claim.error && (
          <div
            className="rounded px-3 py-2 text-[11px]"
            style={{
              background: 'rgba(232,0,29,0.10)',
              border: '1px solid rgba(232,0,29,0.35)',
              color: '#E8001D',
              fontFamily: "'Barlow', sans-serif",
            }}
          >
            {claim.error.message ?? 'Claim failed'}
          </div>
        )}

        <motion.button
          onClick={submit}
          disabled={!canSubmit}
          whileHover={canSubmit ? { scale: 1.01 } : undefined}
          whileTap={canSubmit ? { scale: 0.99 } : undefined}
          className="w-full rounded py-2.5 text-[12px] font-bold uppercase tracking-[0.1em]"
          style={{
            background: canSubmit
              ? 'linear-gradient(90deg, #00C853 0%, #00A847 100%)'
              : '#1E1E1E',
            color: canSubmit ? '#0F0F0F' : '#666',
            border: `1px solid ${canSubmit ? '#00C853' : '#2A2A2A'}`,
            cursor: canSubmit ? 'pointer' : 'not-allowed',
            fontFamily: "'Barlow', sans-serif",
            boxShadow: canSubmit ? '0 6px 24px -8px #00C853' : 'none',
          }}
        >
          {claim.isPending
            ? 'Confirm in wallet…'
            : isConfirming
              ? 'Claiming…'
              : alreadyClaimed
                ? 'Already claimed'
                : !closed
                  ? 'Claim not open'
                  : !walletAddress
                    ? 'Connect wallet'
                    : parsedAmount === 0n
                      ? 'Enter prize amount'
                      : 'Claim prize'}
        </motion.button>

        {isSuccess && claim.data && (
          <a
            href={explorerTx(claim.data)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 text-[11px]"
            style={{ color: '#00C853', fontFamily: "'JetBrains Mono', monospace" }}
          >
            <CheckCircle2 size={12} />
            Claimed — tx {claim.data.slice(0, 8)}…{claim.data.slice(-6)}
            <ExternalLink size={11} />
          </a>
        )}

        {epoch && epoch.closed && (
          <div
            className="rounded px-2.5 py-1.5 text-[10px]"
            style={{
              background: '#0F0F0F',
              border: '1px solid #1E1E1E',
              color: '#888',
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            <div className="flex justify-between">
              <span>Pool</span>
              <span>{formatPool(epoch.prizePool, decimals)} USDC</span>
            </div>
            <div className="flex justify-between">
              <span>Already claimed</span>
              <span>{formatPool(epoch.totalClaimed, decimals)} USDC</span>
            </div>
            <div className="flex justify-between">
              <span>Window ends</span>
              <span>{new Date(epoch.claimExpiry * 1000).toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Merkle root</span>
              <span>{shortenHash(epoch.merkleRoot)}</span>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <div
        className="text-[10px] uppercase tracking-[0.12em]"
        style={{ color: '#666', fontFamily: "'Barlow', sans-serif" }}
      >
        {label}
      </div>
      {children}
    </div>
  );
}

function Hint({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[10px]" style={{ color: '#555', fontFamily: "'Barlow', sans-serif" }}>
      {children}
    </div>
  );
}

function InfoBanner({ tone, text }: { tone: 'amber' | 'grey'; text: string }) {
  const cfg = tone === 'amber'
    ? { bg: 'rgba(245,197,24,0.10)', border: 'rgba(245,197,24,0.4)', fg: '#F5C518' }
    : { bg: '#0F0F0F', border: '#2A2A2A', fg: '#888' };
  return (
    <div
      className="flex items-start gap-2 rounded-md px-3 py-2 text-[11px]"
      style={{
        background: cfg.bg,
        border: `1px solid ${cfg.border}`,
        color: cfg.fg,
        fontFamily: "'Barlow', sans-serif",
      }}
    >
      <AlertTriangle size={13} className="mt-0.5 flex-shrink-0" />
      <span>{text}</span>
    </div>
  );
}

function formatPool(v: bigint, decimals: number | undefined): string {
  if (decimals === undefined) return '—';
  return Number(formatUnits(v, decimals)).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function shortenHash(h: string): string {
  return `${h.slice(0, 8)}…${h.slice(-6)}`;
}

// silence isAddress unused import warning (kept for typing parity with consumers)
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
isAddress;
