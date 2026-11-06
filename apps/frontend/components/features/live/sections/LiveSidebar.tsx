import type { Address } from "viem";

import type { MatchBettableContext } from "../domain/types";
import { BetTicketPanel } from "./BetTicketPanel";
import { PoolInfo } from "./PoolInfo";
import { PoolStats } from "./PoolStats";
import { SidebarChat } from "./SidebarChat";
import { SidebarTabs } from "./SidebarTabs";

interface LiveSidebarProps {
  readonly matchId: string;
  readonly streamId?: string;
  readonly userId: string;
  readonly username: string;
  readonly walletAddress: string;
  readonly contractAddress?: Address;
  readonly homeTeam?: string;
  readonly awayTeam?: string;
  readonly match: MatchBettableContext;
}

/** Desktop right column: chat, then the inline bet ticket and the pool panels (pump.fun-style). */
export function LiveSidebar({ matchId, streamId, userId, username, walletAddress, contractAddress, homeTeam, awayTeam, match }: LiveSidebarProps) {
  const teams = { homeTeam, awayTeam };
  return (
    <aside
      aria-label="Live chat and predictions"
      className="sticky top-[calc(var(--app-header-h)+16px)] hidden h-[calc(100dvh-var(--app-header-h)-32px)] flex-col gap-3 self-start overflow-y-auto overscroll-contain pr-1 lg:flex"
    >
      <SidebarChat matchId={matchId} streamId={streamId} userId={userId} username={username} walletAddress={walletAddress} />
      <BetTicketPanel contractAddress={contractAddress} walletAddress={walletAddress || undefined} match={match} {...teams} />
      <SidebarTabs contractAddress={contractAddress} walletAddress={walletAddress || undefined} match={match} {...teams} />
      <PoolStats contractAddress={contractAddress} {...teams} />
      <PoolInfo contractAddress={contractAddress} kickoffAt={match.kickoffAt} />
    </aside>
  );
}
