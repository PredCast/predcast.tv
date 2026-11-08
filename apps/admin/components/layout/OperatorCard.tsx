"use client";

import { useAdminSession } from "@/providers/AdminSessionProvider";
import { operatorInitials, operatorName } from "@/lib/ui/operator";

export function OperatorCard() {
  const { wallet, label, role } = useAdminSession();
  return (
    <div className="flex items-center gap-2.5 px-1 py-1.5">
      <span
        aria-hidden="true"
        className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line bg-elevated font-mono text-[10px] font-bold"
      >
        {operatorInitials(wallet, label)}
      </span>
      <div className="flex min-w-0 flex-col">
        <span className="truncate text-[13px] leading-4" title={wallet}>
          {operatorName(wallet, label)}
        </span>
        <span className="font-mono text-[10px] tracking-[0.1em] text-fg-meta">{role}</span>
      </div>
    </div>
  );
}
