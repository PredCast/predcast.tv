import type { Address } from "viem";

import StreamSubscriptionButton from "@/components/live/StreamSubscriptionButton";
import StreamWalletButton from "@/components/live/StreamWalletButton";
import type { LiveStream } from "@/models/stream.model";

interface LiveStreamerDialogsProps {
  /** Stream with an on-chain streamer wallet; null hides both dialogs. */
  readonly stream: LiveStream | null;
  readonly walletAddress: string;
  readonly donationOpen: boolean;
  readonly onDonationOpenChange: (open: boolean) => void;
  readonly subscriptionOpen: boolean;
  readonly onSubscriptionOpenChange: (open: boolean) => void;
}

export function LiveStreamerDialogs({
  stream,
  walletAddress,
  donationOpen,
  onDonationOpenChange,
  subscriptionOpen,
  onSubscriptionOpenChange,
}: LiveStreamerDialogsProps) {
  if (!stream?.streamerWalletAddress) return null;
  const streamerAddress = stream.streamerWalletAddress as Address;
  const isStreamer = walletAddress.toLowerCase() === stream.streamerWalletAddress.toLowerCase();
  return (
    <>
      <StreamWalletButton
        streamerAddress={streamerAddress}
        isStreamer={isStreamer}
        open={donationOpen}
        onOpenChange={onDonationOpenChange}
        streamerName={stream.streamerName}
        streamerHandle={stream.streamerName}
      />
      <StreamSubscriptionButton
        streamerAddress={streamerAddress}
        isStreamer={isStreamer}
        open={subscriptionOpen}
        onOpenChange={onSubscriptionOpenChange}
        streamerName={stream.streamerName}
        streamerHandle={stream.streamerName}
      />
    </>
  );
}
