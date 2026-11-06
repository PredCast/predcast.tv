"use client";

import { useState } from "react";
import type { Address } from "viem";

import { ChatPanel, MobileChatBottomSheet } from "@/components/live/chat";

import { MobileBetSheet } from "../components/mobile/MobileBetSheet";
import { MobilePredictBar } from "../components/mobile/MobilePredictBar";
import type { MatchBettableContext } from "../domain/types";
import { BetTicketPanel } from "./BetTicketPanel";

interface LiveMobileDockProps {
  readonly chat: {
    readonly matchId: string;
    readonly streamId?: string;
    readonly userId: string;
    readonly username: string;
    readonly walletAddress: string;
  };
  readonly betSheetOpen: boolean;
  readonly onBetSheetChange: (open: boolean) => void;
  readonly contractAddress?: Address;
  readonly homeTeam?: string;
  readonly awayTeam?: string;
  readonly match: MatchBettableContext;
}

/** Mobile (< lg) dock: sticky chat + Predict bar, the chat sheet and the bet ticket sheet. */
export function LiveMobileDock({ chat, betSheetOpen, onBetSheetChange, contractAddress, homeTeam, awayTeam, match }: LiveMobileDockProps) {
  const [chatOpen, setChatOpen] = useState(false);
  return (
    <>
      <MobilePredictBar
        hidden={chatOpen || betSheetOpen}
        onOpenChat={() => setChatOpen(true)}
        onPredict={() => onBetSheetChange(true)}
      />
      <MobileChatBottomSheet open={chatOpen} onClose={() => setChatOpen(false)}>
        <ChatPanel {...chat} />
      </MobileChatBottomSheet>
      <MobileBetSheet open={betSheetOpen} onClose={() => onBetSheetChange(false)}>
        <BetTicketPanel
          contractAddress={contractAddress}
          walletAddress={chat.walletAddress || undefined}
          homeTeam={homeTeam}
          awayTeam={awayTeam}
          match={match}
        />
      </MobileBetSheet>
    </>
  );
}
