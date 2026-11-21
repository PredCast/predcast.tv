"use client";

import { StreamerModalHeader, StreamerModalShell, StreamerSuccessStep } from "../shared";

export interface SubscriptionSnapshot {
  months: number;
  totalUsd: number | null;
  tokenSymbol: string;
  txHash?: `0x${string}`;
}

interface SubscriptionSuccessProps {
  open: boolean;
  streamerName: string;
  snapshot: SubscriptionSnapshot;
  onAnother: () => void;
  onClose: () => void;
}

const fmtUsd = (n: number) =>
  "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

/** Confirmed-subscription view, frozen on the snapshot taken at tx confirmation. */
export function SubscriptionSuccess({ open, streamerName, snapshot, onAnother, onClose }: SubscriptionSuccessProps) {
  return (
    <StreamerModalShell open={open} onClose={onClose} ariaTitle="Subscribed">
      <StreamerModalHeader
        eyebrow="On-chain · Settled"
        title={
          <>
            You&apos;re <span className="text-[#E8001D]">subscribed.</span>
          </>
        }
        onClose={onClose}
      />
      <StreamerSuccessStep
        title="Subscribed."
        lead={
          <>
            You now have access to {streamerName}&apos;s perks for {snapshot.months}{" "}
            {snapshot.months === 1 ? "month" : "months"}.
            <br />
            No auto-renew — you keep control.
          </>
        }
        txHash={snapshot.txHash}
        summary={[
          { label: "Duration", value: `${snapshot.months} mo` },
          { label: "Total", value: snapshot.totalUsd !== null ? fmtUsd(snapshot.totalUsd) : "—" },
          { label: "Token", value: `$${snapshot.tokenSymbol}` },
        ]}
        onAnother={onAnother}
        onClose={onClose}
        anotherLabel="Subscribe again"
      />
    </StreamerModalShell>
  );
}
