"use client";

interface SubscriptionsClosedNoticeProps {
  streamerName: string;
}

/** The streamer has not set a subscription price on their StreamWallet: subscribing would revert. */
export function SubscriptionsClosedNotice({ streamerName }: SubscriptionsClosedNoticeProps) {
  return (
    <div className="mt-4 rounded-xl border border-[#F5C518]/30 bg-[#F5C518]/10 px-4 py-3">
      <div className="font-display text-[14px] font-bold uppercase tracking-tight text-white">
        Subscriptions not open yet
      </div>
      <p className="mt-1 text-[12px] text-white/65">
        {streamerName} hasn&apos;t set a subscription price. Tips are still open.
      </p>
    </div>
  );
}
