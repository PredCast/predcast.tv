import VideoPlayer from "@/components/live/VideoPlayer";
import { NoStreamPanel, StreamerStrip } from "@/components/live/sections";
import type { LiveStream } from "@/models/stream.model";

import type { StreamerFollow } from "../hooks/useStreamerFollow";

interface LiveMediaSectionProps {
  readonly selectedStream: LiveStream | null;
  readonly isStreamer: boolean;
  readonly isOwnSelectedStream: boolean;
  readonly liveStreamCount: number;
  readonly follow: StreamerFollow;
  readonly onStreamerPreviewRef: (el: HTMLDivElement | null) => void;
  readonly onStreamEnded: () => void;
  readonly onSwitchStreams: () => void;
  readonly onGoLive: () => void;
  /** Undefined when the stream has no on-chain streamer wallet. */
  readonly onTip?: () => void;
  readonly onSubscribe?: () => void;
}

/** Player + streamer strip while something is on screen, otherwise the no-stream panel. */
export function LiveMediaSection({
  selectedStream,
  isStreamer,
  isOwnSelectedStream,
  liveStreamCount,
  follow,
  onStreamerPreviewRef,
  onStreamEnded,
  onSwitchStreams,
  onGoLive,
  onTip,
  onSubscribe,
}: LiveMediaSectionProps) {
  if (!isStreamer && !selectedStream) {
    return <NoStreamPanel streamCount={liveStreamCount} onGoLive={onGoLive} onSwitchStreams={onSwitchStreams} />;
  }
  return (
    <>
      <div className="overflow-hidden rounded-xl border border-[#1E1E1E] bg-[#0d0d0d]">
        {isStreamer ? (
          <div ref={onStreamerPreviewRef} className="relative aspect-video w-full overflow-hidden bg-black" />
        ) : (
          <VideoPlayer
            stream={selectedStream}
            autoplay
            showControls
            onStreamEnded={onStreamEnded}
            onBrowseStreams={onSwitchStreams}
          />
        )}
      </div>
      <StreamerStrip
        stream={selectedStream}
        isOwnStream={isOwnSelectedStream}
        isFollowing={follow.isFollowing}
        followDisabled={!follow.canFollow || follow.isLoading}
        followBusy={follow.isMutating}
        onFollow={follow.toggle}
        onTip={onTip}
        onSubscribe={onSubscribe}
      />
    </>
  );
}
