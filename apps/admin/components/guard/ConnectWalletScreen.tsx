"use client";

import { DynamicConnectButton } from "@dynamic-labs/sdk-react-core";

import { Icon } from "@/components/common/Icon";
import { GuardFrame } from "./GuardFrame";
import { GuardCard } from "./GuardCard";

/** Step 1 — wallet connection, only reachable after the gate. */
export function ConnectWalletScreen() {
  return (
    <GuardFrame step={1}>
      <GuardCard className="text-center">
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-accent/30 bg-accent/10">
          <Icon n="wallet" s={20} className="text-accent-text" />
        </div>
        <h1 className="font-display mt-5 text-[28px] font-extrabold uppercase leading-none text-white">
          Connect wallet
        </h1>
        <p className="mx-auto mt-3 max-w-[300px] text-[12px] font-light leading-relaxed text-fg-body">
          Sign-in requires a granted admin wallet. You&apos;ll sign a one-time message to prove ownership.
        </p>
        <DynamicConnectButton>
          <span className="font-mono mt-6 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-[12px] font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-accent-hover">
            <Icon n="wallet" s={13} />
            <span>Connect wallet</span>
          </span>
        </DynamicConnectButton>
        <p className="font-mono mt-4 text-[9px] uppercase tracking-[0.14em] text-fg-meta">
          No transaction · no gas · just a signature
        </p>
      </GuardCard>
    </GuardFrame>
  );
}
