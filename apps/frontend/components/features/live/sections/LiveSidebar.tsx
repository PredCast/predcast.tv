import type { Address } from "viem";

import type { MatchBettableContext } from "../domain/types";
import { BetTicketPanel } from "./BetTicketPanel";
import { PoolInfo } from "./PoolInfo";
import { PoolStats } from "./PoolStats";
import { SidebarTabs } from "./SidebarTabs";

interface LiveSidebarProps {
  readonly walletAddress: string;
  readonly contractAddress?: Address;
  readonly homeTeam?: string;
  readonly awayTeam?: string;
  readonly match: MatchBettableContext;
}

/** Desktop right column under the chat: inline bet ticket and pool panels (pump.fun-style). */
export function LiveSidebar({ walletAddress, contractAddress, homeTeam, awayTeam, match }: LiveSidebarProps) {
  const teams = { homeTeam, awayTeam };
  const wallet = walletAddress || undefined;
  return (
    <aside aria-label="Predictions" className="hidden min-w-0 flex-col gap-3 lg:col-start-2 lg:flex">
      <BetTicketPanel contractAddress={contractAddress} walletAddress={wallet} match={match} {...teams} />
      <SidebarTabs contractAddress={contractAddress} walletAddress={wallet} match={match} {...teams} />
      <PoolStats contractAddress={contractAddress} {...teams} />
      <PoolInfo contractAddress={contractAddress} kickoffAt={match.kickoffAt} />
    </aside>
  );
}
