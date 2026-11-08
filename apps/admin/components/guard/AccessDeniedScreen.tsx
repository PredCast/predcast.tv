"use client";

import { Icon } from "@/components/common/Icon";
import { GuardFrame } from "./GuardFrame";
import { GuardCard } from "./GuardCard";

/** Terminal state — connected wallet has no active admin grant. */
export function AccessDeniedScreen({
  wallet,
  onSwitchWallet,
}: Readonly<{ wallet: string; onSwitchWallet: () => void }>) {
  return (
    <GuardFrame>
      <GuardCard className="border-accent/30 text-center">
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-accent/40 bg-accent/10">
          <Icon n="shieldX" s={20} className="text-accent-text" />
        </div>
        <h1 className="font-display mt-5 text-[28px] font-extrabold uppercase leading-none text-accent-text">
          Access denied
        </h1>
        <div className="mx-auto mt-4 flex w-fit items-center gap-2 rounded-md border border-line bg-sidebar px-3 py-1.5">
          <span className="font-mono text-[11px] tracking-[0.06em] text-fg-body" title={wallet}>
            {wallet.slice(0, 6)}…{wallet.slice(-4)}
          </span>
          <span className="font-mono rounded border border-accent/40 px-1.5 py-px text-[8px] font-bold uppercase tracking-[0.12em] text-accent-text">
            No grant
          </span>
        </div>
        <p className="mx-auto mt-3 max-w-[290px] text-[12px] font-light leading-relaxed text-fg-body">
          This wallet has no active admin grant. Grants are issued by a super admin.
        </p>
        <button
          type="button"
          onClick={onSwitchWallet}
          className="font-mono mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md border border-line px-6 py-3 text-[12px] font-bold uppercase tracking-[0.1em] text-fg-body transition-colors hover:border-line-hover hover:text-white"
        >
          <Icon n="arrowLeft" s={13} />
          <span>Use another wallet</span>
        </button>
      </GuardCard>
    </GuardFrame>
  );
}
