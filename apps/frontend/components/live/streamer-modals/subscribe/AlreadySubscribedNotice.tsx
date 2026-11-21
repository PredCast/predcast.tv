"use client";

interface AlreadySubscribedNoticeProps {
  expiryLabel: string | undefined;
}

/** Shown instead of the form when the viewer already holds an active subscription. */
export function AlreadySubscribedNotice({ expiryLabel }: AlreadySubscribedNoticeProps) {
  return (
    <div className="px-7 pb-6">
      <div className="rounded-xl border border-[#2dd4a4]/30 bg-[#2dd4a4]/10 p-4">
        <div className="flex items-center gap-2">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2dd4a4"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span className="font-display text-[14px] font-bold uppercase tracking-tight text-white">
            You&apos;re subscribed
          </span>
        </div>
        <p className="mt-2 text-[12px] text-white/65">
          Active until <span className="font-mono-ctv text-white">{expiryLabel ?? "—"}</span>. No auto-renew.
        </p>
      </div>
    </div>
  );
}
