import type { MutableRefObject } from "react";

import { StartStreamSheet, StreamSwitcherSheet } from "@/components/live/sheets";
import type { LiveStream } from "@/models/stream.model";

interface LiveStreamSheetsProps {
  readonly matchId: number;
  readonly userId?: string;
  readonly initialStreamId?: string;
  readonly selectedStreamId?: string;
  readonly switcherOpen: boolean;
  readonly onSwitcherClose: () => void;
  readonly startOpen: boolean;
  readonly onStartClose: () => void;
  readonly onStreamSelect: (stream: LiveStream) => void;
  readonly onOwnStreamDetected: (stream: LiveStream | null) => void;
  readonly onStreamCreated: (stream: LiveStream) => void;
  readonly onStreamEnded: () => void;
  /** Broadcaster preview container; null unless the viewer is streaming. */
  readonly portalTarget: HTMLDivElement | null;
  readonly endStreamRef: MutableRefObject<(() => Promise<void>) | null>;
}

/** Stream switcher + "go live" studio sheets. */
export function LiveStreamSheets(p: LiveStreamSheetsProps) {
  return (
    <>
      <StreamSwitcherSheet
        open={p.switcherOpen}
        onClose={p.onSwitcherClose}
        matchId={p.matchId}
        selectedStreamId={p.selectedStreamId}
        currentUserId={p.userId}
        initialStreamId={p.initialStreamId}
        onStreamSelect={p.onStreamSelect}
        onOwnStreamDetected={p.onOwnStreamDetected}
      />
      <StartStreamSheet
        open={p.startOpen}
        onClose={p.onStartClose}
        matchId={p.matchId}
        onStreamCreated={p.onStreamCreated}
        onStreamEnded={p.onStreamEnded}
        portalTarget={p.portalTarget}
        endStreamRef={p.endStreamRef}
      />
    </>
  );
}
