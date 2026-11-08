import { Eye, Square, Target, Video } from "lucide-react";

import { StreamShelf } from "@/components/live/sections";
import { GhostBtn, PrimaryBtn } from "@/components/live/primitives";
import type { LiveStream } from "@/models/stream.model";

interface LiveStreamControlsProps {
  readonly activeStream: LiveStream | null;
  readonly isOwnStream: boolean;
  readonly isStreamer: boolean;
  readonly onSwitchStreams: () => void;
  readonly onPredict: () => void;
  readonly onGoLive: () => void;
  readonly onEndStream: () => void;
}

export function LiveStreamControls({
  activeStream,
  isOwnStream,
  isStreamer,
  onSwitchStreams,
  onPredict,
  onGoLive,
  onEndStream,
}: LiveStreamControlsProps) {
  return (
    <StreamShelf
      activeStream={activeStream}
      isOwnStream={isOwnStream}
      browseSlot={
        <>
          <GhostBtn onClick={onSwitchStreams} leading={<Eye size={13} />}>
            Switch streams
          </GhostBtn>
          <GhostBtn onClick={onPredict} active color="#E8001D" leading={<Target size={13} />}>
            Predict
          </GhostBtn>
        </>
      }
      startSlot={
        isStreamer ? (
          <GhostBtn onClick={onEndStream} active color="#E8001D" leading={<Square size={13} />}>
            End stream
          </GhostBtn>
        ) : (
          <PrimaryBtn onClick={onGoLive} leading={<Video size={13} />}>
            Go live
          </PrimaryBtn>
        )
      }
    />
  );
}
