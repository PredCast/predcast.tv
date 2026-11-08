"use client";

import { useAdminSession } from "@/providers/AdminSessionProvider";
import { environmentDisplay } from "@/lib/ui/environment";

/** Where the backend runs and which chain it signs on — from /admin/me, never a build flag. */
export function EnvCard() {
  const { environment } = useAdminSession();
  const env = environmentDisplay(environment);
  return (
    <div className="flex flex-col gap-1 rounded-panel border border-line-subtle bg-card px-3 py-2.5 font-mono uppercase">
      <div className={`flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] ${env.tierText}`}>
        <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${env.dot}`} />
        {env.tier}
      </div>
      <div className="text-[10px] tracking-[0.12em] text-fg-body">{env.network}</div>
      <div className="text-[10px] tracking-[0.12em] text-fg-meta">Chain ID {environment.chainId}</div>
    </div>
  );
}
