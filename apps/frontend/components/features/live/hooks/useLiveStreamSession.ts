"use client";

import { useRef, useState, type MutableRefObject } from "react";

import { StreamStatus, wasInterrupted } from "@chiliztv/domain";

import type { LiveStream } from "@/models/stream.model";

export interface LiveStreamSession {
  readonly selectedStream: LiveStream | null;
  readonly myStream: LiveStream | null;
  readonly interruptedBanner: boolean;
  readonly endStreamRef: MutableRefObject<(() => Promise<void>) | null>;
  readonly selectStream: (stream: LiveStream) => void;
  readonly onStreamCreated: (stream: LiveStream) => void;
  readonly onStreamEnded: () => void;
  readonly onOwnStreamDetected: (stream: LiveStream | null) => void;
  readonly dismissInterrupted: () => void;
}

/** Viewer / broadcaster stream state, including silent-drop detection for the user's own stream. */
export function useLiveStreamSession(userId: string | undefined): LiveStreamSession {
  const [selectedStream, setSelectedStream] = useState<LiveStream | null>(null);
  const [myStream, setMyStream] = useState<LiveStream | null>(null);
  const [interruptedBanner, setInterruptedBanner] = useState(false);
  const endStreamRef = useRef<(() => Promise<void>) | null>(null);
  // Set by explicit End clicks; wasInterrupted() consumes it so user-initiated stops show no banner.
  const userInitiatedEndRef = useRef(false);
  const lastMyStreamRef = useRef<LiveStream | null>(null);

  const onStreamCreated = (stream: LiveStream) => {
    userInitiatedEndRef.current = false;
    setInterruptedBanner(false);
    lastMyStreamRef.current = stream;
    setSelectedStream(stream);
    setMyStream(stream);
  };

  const onStreamEnded = () => {
    userInitiatedEndRef.current = true;
    lastMyStreamRef.current = null;
    setSelectedStream(null);
    setMyStream(null);
    setInterruptedBanner(false);
  };

  const onOwnStreamDetected = (stream: LiveStream | null) => {
    const prev = lastMyStreamRef.current;
    if (userInitiatedEndRef.current) {
      if (stream === null) {
        userInitiatedEndRef.current = false;
        lastMyStreamRef.current = null;
      }
      return;
    }
    lastMyStreamRef.current = stream;
    if (stream === null && prev) {
      const interrupted = wasInterrupted({
        previousStatus: StreamStatus.LIVE,
        nextStatus: StreamStatus.ENDED,
        sourceType: prev.sourceType,
        userInitiated: userInitiatedEndRef.current,
      });
      if (interrupted) setInterruptedBanner(true);
      // Server-side end (moderation, provider webhook): tear down the local broadcast as if End was pressed.
      endStreamRef.current?.().catch(() => undefined);
    }
    setMyStream(stream);
    setSelectedStream((current) => {
      if (stream && current === null) return stream;
      if (!stream && current?.streamerId === userId) return null;
      return current;
    });
  };

  return {
    selectedStream,
    myStream,
    interruptedBanner,
    endStreamRef,
    selectStream: setSelectedStream,
    onStreamCreated,
    onStreamEnded,
    onOwnStreamDetected,
    dismissInterrupted: () => setInterruptedBanner(false),
  };
}
