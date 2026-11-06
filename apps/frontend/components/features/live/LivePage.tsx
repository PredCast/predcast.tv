"use client";

import { useCallback, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import type { Address } from "viem";

import { useActiveStreams, useMyBan } from "@/hooks/api";
import { BannedBanner } from "@/components/features/moderation/BannedBanner";
import { StreamInterruptedBanner } from "@/components/features/streaming/StreamInterruptedBanner";
import { WinCardAutoTrigger } from "@/components/features/win-card/components/WinCardAutoTrigger";
import { WinCardModalProvider } from "@/components/features/win-card/components/WinCardModalProvider";
import { chilizConfig } from "@/config/chiliz.config";

import { CenterStatus } from "./components/CenterStatus";
import { MatchNotFound } from "./components/MatchNotFound";
import { BetSelectionProvider } from "./context/BetSelectionProvider";
import { useLiveMatchData } from "./hooks/useLiveMatchData";
import { useLiveStreamSession } from "./hooks/useLiveStreamSession";
import { useMatchMarketWatchers } from "./hooks/useMatchMarketWatchers";
import { usePredictShortcut } from "./hooks/usePredictShortcut";
import { useStreamerFollow } from "./hooks/useStreamerFollow";
import { LiveMatchHeader } from "./sections/LiveMatchHeader";
import { LiveMediaSection } from "./sections/LiveMediaSection";
import { LiveMobileDock } from "./sections/LiveMobileDock";
import { LiveSidebar } from "./sections/LiveSidebar";
import { LiveStreamControls } from "./sections/LiveStreamControls";
import { LiveStreamerDialogs } from "./sections/LiveStreamerDialogs";
import { LiveStreamSheets } from "./sections/LiveStreamSheets";
import { SidebarChat } from "./sections/SidebarChat";
import { SidebarTabs } from "./sections/SidebarTabs";

interface LivePageProps {
  readonly id: string;
}

export function LivePage({ id }: LivePageProps) {
  const router = useRouter();
  const initialStreamId = useSearchParams().get("streamId") ?? undefined;
  const { primaryWallet, user } = useDynamicContext();
  const walletAddress = primaryWallet?.address ?? "";
  const userId = user?.userId;

  const { match, loading, notFound } = useLiveMatchData(id);
  const contractAddress = match?.contractAddress as Address | undefined;
  // Single mount per page: every extra watcher set costs RPC on the throttled Spicy endpoint.
  useMatchMarketWatchers(contractAddress, chilizConfig.chainId);
  const { data: myBanData } = useMyBan();
  const session = useLiveStreamSession(userId);
  const { selectedStream, myStream } = session;
  const follow = useStreamerFollow(userId, selectedStream);

  const [showSwitcher, setShowSwitcher] = useState(false);
  const [showStart, setShowStart] = useState(false);
  const [showDonation, setShowDonation] = useState(false);
  const [showSubscription, setShowSubscription] = useState(false);
  const [showBetSheet, setShowBetSheet] = useState(false);
  const [streamerPreviewEl, setStreamerPreviewEl] = useState<HTMLDivElement | null>(null);
  const openBetSheet = useCallback(() => setShowBetSheet(true), []);
  const onPredict = usePredictShortcut(openBetSheet);

  const isStreamer = !!myStream && !!userId;
  const matchIdNum = Number(id);
  // Stream count only matters for the no-stream panel, so the poll pauses while something plays.
  const hasLiveContent = isStreamer || !!selectedStream;
  const { data: activeStreams } = useActiveStreams(hasLiveContent || Number.isNaN(matchIdNum) ? undefined : matchIdNum);
  const isOwnSelectedStream =
    !!selectedStream && selectedStream.streamerWalletAddress?.toLowerCase() === walletAddress.toLowerCase();
  const streamForDialogs = selectedStream?.streamerWalletAddress ? selectedStream : null;

  if (!id) return null;
  if (loading) return <CenterStatus message="Loading match…" />;
  // Cosmetic gate — enforcement is server-side (requireNotBanned + RLS).
  if (myBanData?.ban?.status === "active") return <BannedBanner ban={myBanData.ban} />;
  if (notFound || !match) return <MatchNotFound onBack={() => router.push("/browse")} />;

  const chatProps = { matchId: id, userId: userId ?? "", username: String(user?.username ?? ""), walletAddress };
  const bettable = {
    status: match.status,
    kickoffAt: match.startTime,
    htHomeScore: match.htHomeScore,
    htAwayScore: match.htAwayScore,
  };
  const marketProps = { contractAddress, homeTeam: match.homeTeam, awayTeam: match.awayTeam, match: bettable };

  return (
    <BetSelectionProvider>
      <WinCardModalProvider>
        <div className="relative min-h-full bg-[#0A0A0A] text-white">
          {contractAddress ? (
            <WinCardAutoTrigger wallet={walletAddress || undefined} scope={{ kind: "match", contractAddress }} />
          ) : null}
          <LiveMatchHeader match={match} onBack={() => router.push("/live")} />

          {/* Bottom padding on mobile keeps content clear of the sticky Predict dock. */}
          <main className="mx-auto max-w-[1600px] px-3 pb-28 pt-4 sm:px-10 sm:pt-8 lg:pb-8">
            {session.interruptedBanner && (
              <div className="mb-5">
                <StreamInterruptedBanner
                  onRestart={() => {
                    session.dismissInterrupted();
                    setShowStart(true);
                  }}
                  onDismiss={session.dismissInterrupted}
                />
              </div>
            )}

            <LiveStreamControls
              activeStream={selectedStream}
              isOwnStream={isOwnSelectedStream}
              isStreamer={isStreamer}
              onSwitchStreams={() => setShowSwitcher(true)}
              onPredict={onPredict}
              onGoLive={() => setShowStart(true)}
              onEndStream={() => session.endStreamRef.current?.()}
            />

            {/* Row 1: stream | chat (chat follows the stream height). Row 2: free space (fan-token charts) | ticket + pools. */}
            <div className="grid gap-4 lg:grid-cols-[1fr_360px] lg:gap-x-6 xl:grid-cols-[1fr_400px]">
              <div className="flex min-w-0 flex-col gap-3 lg:gap-5">
                <LiveMediaSection
                  selectedStream={selectedStream}
                  isStreamer={isStreamer}
                  isOwnSelectedStream={isOwnSelectedStream}
                  liveStreamCount={activeStreams?.count ?? 0}
                  follow={follow}
                  onStreamerPreviewRef={setStreamerPreviewEl}
                  onStreamEnded={session.onStreamEnded}
                  onSwitchStreams={() => setShowSwitcher(true)}
                  onGoLive={() => setShowStart(true)}
                  onTip={streamForDialogs ? () => setShowDonation(true) : undefined}
                  onSubscribe={streamForDialogs ? () => setShowSubscription(true) : undefined}
                />
              </div>

              <SidebarChat {...chatProps} streamId={selectedStream?.id} />

              {/* Mobile: same markets table + My predictions as the sidebar; a pick opens the bet sheet. */}
              <div className="min-w-0 lg:hidden">
                <SidebarTabs {...marketProps} walletAddress={walletAddress || undefined} onMarketPicked={openBetSheet} />
              </div>

              <LiveSidebar walletAddress={walletAddress} {...marketProps} />
            </div>

            <footer className="mt-12 border-t border-[#1E1E1E] pt-6 text-center">
              <div className="font-mono-ctv text-[10px] uppercase tracking-[0.18em] text-white/35">
                PredCast · self-hosted livestreams · settle on Chiliz
              </div>
            </footer>
          </main>

          <LiveStreamSheets
            matchId={parseInt(id)}
            userId={userId}
            initialStreamId={initialStreamId}
            selectedStreamId={selectedStream?.id}
            switcherOpen={showSwitcher}
            onSwitcherClose={() => setShowSwitcher(false)}
            startOpen={showStart}
            onStartClose={() => setShowStart(false)}
            onStreamSelect={session.selectStream}
            onOwnStreamDetected={session.onOwnStreamDetected}
            onStreamCreated={session.onStreamCreated}
            onStreamEnded={session.onStreamEnded}
            portalTarget={isStreamer ? streamerPreviewEl : null}
            endStreamRef={session.endStreamRef}
          />
          <LiveStreamerDialogs
            stream={streamForDialogs}
            walletAddress={walletAddress}
            donationOpen={showDonation}
            onDonationOpenChange={setShowDonation}
            subscriptionOpen={showSubscription}
            onSubscriptionOpenChange={setShowSubscription}
          />
          <LiveMobileDock
            chat={{ ...chatProps, streamId: myStream?.id ?? selectedStream?.id }}
            betSheetOpen={showBetSheet}
            onBetSheetChange={setShowBetSheet}
            {...marketProps}
          />
        </div>
      </WinCardModalProvider>
    </BetSelectionProvider>
  );
}
