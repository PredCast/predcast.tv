"use client";

import { StreamerModalHeader, StreamerModalShell, StreamerSuccessStep } from "../shared";

export interface DonationSnapshot {
  amountUsd: number | null;
  tokenAmount: number;
  tokenSymbol: string;
  message: string;
  txHash?: `0x${string}`;
}

interface DonationSuccessProps {
  open: boolean;
  streamerName: string;
  snapshot: DonationSnapshot;
  onAnother: () => void;
  onClose: () => void;
}

const fmtUsd = (n: number) =>
  "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const fmtTok = (n: number, dp: number) =>
  n.toLocaleString("en-US", { minimumFractionDigits: dp, maximumFractionDigits: dp });

/** Confirmed-tip view, frozen on the snapshot taken at tx confirmation. */
export function DonationSuccess({ open, streamerName, snapshot, onAnother, onClose }: DonationSuccessProps) {
  return (
    <StreamerModalShell open={open} onClose={onClose} ariaTitle="Tip sent">
      <StreamerModalHeader
        eyebrow="On-chain · Settled"
        title={
          <>
            Thanks for the <span className="text-[#E8001D]">tip.</span>
          </>
        }
        onClose={onClose}
      />
      <StreamerSuccessStep
        title="Tip sent."
        lead={
          <>
            {streamerName} just received your support.
            <br />
            The amount lands in their StreamWallet within seconds.
          </>
        }
        txHash={snapshot.txHash}
        summary={[
          {
            label: "Amount",
            value:
              snapshot.amountUsd !== null
                ? fmtUsd(snapshot.amountUsd)
                : `${fmtTok(snapshot.tokenAmount, snapshot.tokenSymbol === "CHZ" ? 0 : 2)} $${snapshot.tokenSymbol}`,
          },
          { label: "Token", value: `$${snapshot.tokenSymbol}` },
          {
            label: "Note",
            value: snapshot.message
              ? `“${snapshot.message.slice(0, 24)}${snapshot.message.length > 24 ? "…" : ""}”`
              : "—",
          },
        ]}
        onAnother={onAnother}
        onClose={onClose}
        anotherLabel="Send another"
      />
    </StreamerModalShell>
  );
}
