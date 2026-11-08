"use client";

import { Icon } from "@/components/common/Icon";
import { GuardFrame } from "./GuardFrame";

/** Step 2 — signature / RBAC verification in flight. */
export function AdminLoadingScreen({ label }: Readonly<{ label: string }>) {
  return (
    <GuardFrame step={2}>
      <div className="flex flex-col items-center">
        <div className="relative grid h-20 w-20 place-items-center">
          <span aria-hidden="true" className="pc-ping absolute inset-0 rounded-full border border-accent/50" />
          <span aria-hidden="true" className="absolute inset-2.5 rounded-full border border-accent/25" />
          <Icon n="pen" s={22} className="text-accent-text" />
        </div>
        <p className="font-mono mt-7 text-[11px] font-bold uppercase tracking-[0.2em] text-fg-body">{label}…</p>
        <p className="mt-2.5 text-[12px] font-light text-fg-meta">Check your wallet — sign the one-time message.</p>
      </div>
    </GuardFrame>
  );
}
