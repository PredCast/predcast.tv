"use client";

import { useDynamicContext } from "@dynamic-labs/sdk-react-core";

import { ChatMessage, SystemMessageType } from "@/models/chat.model";
import { RemovedMessagePlaceholder } from "@/components/features/moderation/RemovedMessagePlaceholder";
import { ReportButton } from "@/components/features/moderation/ReportButton";

interface ChatMessageItemProps {
  message: ChatMessage;
  userId: string;
  username: string;
}

interface SystemPalette {
  label: string;
  bg: string;
  border: string;
  color: string;
}

const SYSTEM_PALETTES: Partial<Record<SystemMessageType, SystemPalette>> = {
  [SystemMessageType.BET_PLACED]: {
    label: "Prediction",
    bg: "rgba(232,0,29,0.07)",
    border: "rgba(232,0,29,0.4)",
    color: "#FF1737",
  },
  [SystemMessageType.DONATION]: {
    label: "Tip",
    bg: "rgba(245,197,24,0.08)",
    border: "rgba(245,197,24,0.4)",
    color: "#F5C518",
  },
  [SystemMessageType.SUBSCRIPTION]: {
    label: "Sub",
    bg: "rgba(245,197,24,0.06)",
    border: "rgba(245,197,24,0.35)",
    color: "#F5C518",
  },
  [SystemMessageType.MESSAGE_REMOVED]: {
    label: "Moderation",
    bg: "rgba(255,255,255,0.03)",
    border: "rgba(255,255,255,0.12)",
    color: "rgba(255,255,255,0.45)",
  },
  [SystemMessageType.STREAM_STOPPED]: {
    label: "Moderation",
    bg: "rgba(232,0,29,0.07)",
    border: "rgba(232,0,29,0.4)",
    color: "#FF1737",
  },
};

/** Stable hue derived from the username so each chatter gets a consistent color. */
function hueForUser(name: string): string {
  let h = 2166136261;
  for (let i = 0; i < name.length; i++) {
    h ^= name.charCodeAt(i);
    h = (h * 16777619) >>> 0;
  }
  const palette = [
    "#5eebbf",
    "#FF6B9D",
    "#0072CE",
    "#DC052D",
    "#F5C518",
    "#22D3EE",
    "#A855F7",
    "#FB923C",
    "#2dd4a4",
  ];
  return palette[h % palette.length];
}

export function ChatMessageItem({ message, userId, username }: ChatMessageItemProps) {
  const { primaryWallet } = useDynamicContext();
  const viewerWallet = primaryWallet?.address?.toLowerCase();

  if (message.removedAt) {
    return <RemovedMessagePlaceholder />;
  }

  const isSystem =
    message.systemEventType === SystemMessageType.BET_PLACED ||
    message.systemEventType === SystemMessageType.DONATION ||
    message.systemEventType === SystemMessageType.SUBSCRIPTION ||
    message.systemEventType === SystemMessageType.MESSAGE_REMOVED ||
    message.systemEventType === SystemMessageType.STREAM_STOPPED;

  if (isSystem && message.systemEventType && SYSTEM_PALETTES[message.systemEventType]) {
    const palette = SYSTEM_PALETTES[message.systemEventType]!;
    return (
      <div
        className="rounded-md border px-3 py-2 text-[12px]"
        style={{ background: palette.bg, borderColor: palette.border }}
      >
        <div
          className="font-mono-ctv flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em]"
          style={{ color: palette.color }}
        >
          <span aria-hidden className="block h-0.5 w-3" style={{ background: palette.color }} />
          {palette.label}
          <span className="text-white/35">· {message.username}</span>
        </div>
        <div className="mt-1 text-white/85">{message.message}</div>
      </div>
    );
  }

  const isOwnMessage = message.userId === userId || message.username === username;
  const userColor = isOwnMessage
    ? "#E8001D"
    : message.isFeatured
      ? "#F5C518"
      : hueForUser(message.username);

  // Own-wallet messages would 422 server-side (self-report) — hide the flag.
  // Optimistic rows have no DB id yet — nothing to report.
  const isOwnWallet =
    !!viewerWallet && message.walletAddress?.toLowerCase() === viewerWallet;
  const reportable = !isOwnMessage && !isOwnWallet && !message.id.startsWith("optimistic-");

  return (
    <div className="group flex items-start justify-between gap-2 px-2 py-1.5 text-[13px] leading-snug text-white/85">
      <div className="min-w-0">
        <span
          className="font-display mr-2 font-bold uppercase tracking-tight"
          style={{ color: userColor }}
        >
          {message.username}
        </span>
        <span className="break-words">{message.message}</span>
      </div>
      {reportable && (
        <ReportButton
          targetType="message"
          targetId={message.id}
          liveContextMatchId={message.matchId}
          liveContextStreamId={message.streamId ?? undefined}
          iconOnly
          className="opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100"
        />
      )}
    </div>
  );
}
