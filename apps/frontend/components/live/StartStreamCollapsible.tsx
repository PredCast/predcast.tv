"use client";

import { useRef, useState } from "react";
import { ChevronDown, Square, Video } from "lucide-react";
import StreamManager from "./StreamManager";
import { motion, AnimatePresence } from "framer-motion";
import { LiveStream } from "@/models/stream.model";

interface StartStreamCollapsibleProps {
  matchId: number;
  onStreamCreated: (stream: LiveStream) => void;
  onStreamEnded: () => void;
  portalTarget?: HTMLDivElement | null;
}

export function StartStreamCollapsible({
  matchId,
  onStreamCreated,
  onStreamEnded,
  portalTarget,
}: StartStreamCollapsibleProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const endStreamRef = useRef<(() => Promise<void>) | null>(null);

  // Keep StreamManager mounted while open OR streaming so the WebRTC connection persists
  const isManagerMounted = isOpen || isStreaming;

  return (
    <div className="w-full">
      {isStreaming ? (
        <button
          onClick={() => endStreamRef.current?.()}
          className="flex items-center gap-2 h-9 px-3 rounded text-[11px] font-bold tracking-[0.08em] uppercase transition-colors duration-150"
          style={{
            background: "rgba(232,0,29,0.12)",
            border: "1px solid #E8001D",
            color: "#E8001D",
            fontFamily: "'Barlow', sans-serif",
          }}
        >
          <Square size={12} />
          <span>End stream</span>
        </button>
      ) : (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 h-9 px-3 rounded text-[11px] font-bold tracking-[0.08em] uppercase transition-colors duration-150"
          style={{
            background: "#E8001D",
            border: "1px solid #E8001D",
            color: "#fff",
            fontFamily: "'Barlow', sans-serif",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "#B0001A";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "#E8001D";
          }}
        >
          <Video size={12} />
          <span>Go live</span>
          <ChevronDown
            size={12}
            style={{
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 150ms",
            }}
          />
        </button>
      )}

      <AnimatePresence>
        {isManagerMounted && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: isStreaming ? 0 : "auto",
              opacity: isStreaming ? 0 : 1,
            }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="mt-3">
              <StreamManager
                matchId={matchId}
                portalTarget={portalTarget}
                endStreamRef={endStreamRef}
                onStreamCreated={(stream) => {
                  setIsStreaming(true);
                  setIsOpen(false);
                  onStreamCreated(stream);
                }}
                onStreamEnded={() => {
                  setIsStreaming(false);
                  onStreamEnded();
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
