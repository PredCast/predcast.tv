"use client";

import Image from "next/image";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { useAdminSession } from "@/providers/AdminSessionProvider";
import { clearAdminToken } from "@/lib/api/auth";

const ROLE_COLORS: Record<string, string> = {
  super_admin: "#E8001D",
  admin: "#F5C518",
  moderator: "#2dd4a4",
  finance: "#0072CE",
};

export function TopBar() {
  const { wallet, role } = useAdminSession();
  const { handleLogOut } = useDynamicContext();
  const color = ROLE_COLORS[role] ?? "#fff";

  // The guard's effect sees the wallet disappear and falls back to the
  // connect screen; the JWT is cleared so the next wallet re-signs.
  const disconnect = () => {
    clearAdminToken();
    void handleLogOut().catch(() => undefined);
  };

  return (
    <header className="flex items-center justify-between border-b border-[#1E1E1E] px-6 py-3">
      <div className="flex items-center gap-2.5">
        <Image src="/predcast-logo-white.svg" alt="PredCast" width={110} height={22} priority />
        <span className="font-mono-ctv rounded border border-[#E8001D]/40 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.16em] text-[#E8001D]">
          Admin
        </span>
      </div>
      <div className="flex items-center gap-3">
        <span
          className="font-mono-ctv rounded-md px-2 py-1 text-[10px] font-bold uppercase tracking-[0.14em]"
          style={{ color, background: `${color}14`, border: `1px solid ${color}40` }}
        >
          {role.replace("_", " ")}
        </span>
        <span className="font-mono-ctv text-[11px] tracking-[0.06em] text-white/55" title={wallet}>
          {wallet.slice(0, 6)}…{wallet.slice(-4)}
        </span>
        <button
          type="button"
          onClick={disconnect}
          className="font-mono-ctv rounded-md border border-[#2A2A2A] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white/65 transition-colors hover:border-[#E8001D]/50 hover:text-white"
        >
          Disconnect
        </button>
      </div>
    </header>
  );
}
