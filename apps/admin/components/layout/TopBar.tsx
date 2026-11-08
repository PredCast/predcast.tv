"use client";

import { usePathname } from "next/navigation";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";

import { useAdminSession } from "@/providers/AdminSessionProvider";
import { clearAdminToken } from "@/lib/api/auth";
import { breadcrumbFor } from "@/lib/breadcrumb";
import { roleLabel, roleTone, shortWallet } from "@/lib/ui/operator";
import { useOverview } from "@/hooks/api/useOverview";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { CopyButton } from "@/components/common/CopyButton";
import { LiveDot } from "@/components/common/LiveDot";

export function TopBar() {
  const { wallet, role } = useAdminSession();
  const { handleLogOut } = useDynamicContext();
  const pathname = usePathname();
  const { data: overview } = useOverview();

  const { section, page } = breadcrumbFor(pathname);
  const live = overview?.liveCount ?? 0;

  // The guard's effect sees the wallet disappear and falls back to the
  // connect screen; the JWT is cleared so the next wallet re-signs.
  const disconnect = () => {
    clearAdminToken();
    void handleLogOut().catch(() => undefined);
  };

  return (
    <header className="flex min-h-14 flex-wrap items-center gap-3 border-b border-line-subtle px-7 py-2">
      <div className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-fg-meta">
        {section}
        <span aria-hidden="true" className="px-1.5">›</span>
        <span className="text-white">{page}</span>
      </div>
      <div className="ml-auto flex flex-wrap items-center gap-2.5">
        <span className="inline-flex h-7 items-center gap-2 rounded-control border border-accent/50 bg-accent/8 px-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-accent-text">
          <LiveDot s={8} />
          {live} live
        </span>
        <Badge tone={roleTone(role)} className="h-7 rounded-control px-2.5 text-[11px] tracking-[0.14em]">
          {roleLabel(role)}
        </Badge>
        <span className="font-mono text-[12px] text-fg-body" title={wallet}>
          {shortWallet(wallet)}
        </span>
        <CopyButton value={wallet} label="Copy wallet address" size="md" />
        <span aria-hidden="true" className="h-5 w-px bg-line" />
        <Button icon="logOut" onClick={disconnect}>
          Disconnect
        </Button>
      </div>
    </header>
  );
}
