"use client";

import { useState } from "react";
import { ChevronDown, Eye } from "lucide-react";
import StreamSelector from "./StreamSelector";
import type { LiveStream } from "@/models/stream.model";

interface BrowseLivesCollapsibleProps {
  matchId: number;
  selectedStreamId?: string;
  onStreamSelect: (stream: LiveStream) => void;
  onOwnStreamDetected?: (stream: LiveStream | null) => void;
  currentUserId?: string;
  initialStreamId?: string;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function BrowseLivesCollapsible({
  matchId,
  selectedStreamId,
  onStreamSelect,
  onOwnStreamDetected,
  currentUserId,
  initialStreamId,
  isOpen: controlledIsOpen,
  onOpenChange,
}: BrowseLivesCollapsibleProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;
  const setIsOpen = (v: boolean) => {
    setInternalIsOpen(v);
    onOpenChange?.(v);
  };

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 h-9 px-3 rounded text-[11px] font-bold tracking-[0.08em] uppercase transition-colors duration-150"
        style={{
          background: isOpen ? "#1E1E1E" : "transparent",
          border: "1px solid #2A2A2A",
          color: "#fff",
          fontFamily: "'Barlow', sans-serif",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.borderColor = "#3A3A3A";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.borderColor = "#2A2A2A";
        }}
      >
        <Eye size={12} />
        <span>Browse streams</span>
        <ChevronDown
          size={12}
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 150ms",
          }}
        />
      </button>

      {/*
        StreamSelector is always mounted so auto-selection runs on page load.
        Its visual output is hidden until the user opens the collapsible.
      */}
      <div className={isOpen ? "mt-3" : "hidden"}>
        <StreamSelector
          matchId={matchId}
          selectedStreamId={selectedStreamId}
          currentUserId={currentUserId}
          initialStreamId={initialStreamId}
          onOwnStreamDetected={onOwnStreamDetected}
          onStreamSelect={(stream) => {
            onStreamSelect(stream);
            setIsOpen(false);
          }}
        />
      </div>
    </div>
  );
}
