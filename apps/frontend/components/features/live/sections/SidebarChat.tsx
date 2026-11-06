"use client";

import { ChevronDown, ChevronUp } from "lucide-react";

import { ChatPanel } from "@/components/live/chat";

import { useChatCollapsed } from "../hooks/useChatCollapsed";

interface SidebarChatProps {
  readonly matchId: string;
  readonly streamId?: string;
  readonly userId: string;
  readonly username: string;
  readonly walletAddress: string;
}

/** Live chat at the top of the sidebar, ~40% of its height (400px floor keeps the composer visible), collapsible. */
export function SidebarChat(props: SidebarChatProps) {
  const [collapsed, setCollapsed] = useChatCollapsed();
  return (
    <section
      className={`flex shrink-0 flex-col overflow-hidden rounded-xl border border-[#1E1E1E] bg-[#0d0d0d] ${
        collapsed ? "" : "h-[40%] min-h-[400px]"
      }`}
    >
      <button
        type="button"
        onClick={() => setCollapsed(!collapsed)}
        aria-expanded={!collapsed}
        aria-controls="sidebar-chat-body"
        className="font-mono-ctv flex items-center justify-between border-b border-[#1E1E1E] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white/55 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#E8001D]"
      >
        <span>{collapsed ? "Show live chat" : "Hide live chat"}</span>
        {collapsed ? <ChevronDown size={13} aria-hidden /> : <ChevronUp size={13} aria-hidden />}
      </button>
      <div id="sidebar-chat-body" hidden={collapsed} className="flex min-h-0 flex-1 flex-col">
        {!collapsed && <ChatPanel {...props} />}
      </div>
    </section>
  );
}
