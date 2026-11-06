"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import type { Address } from "viem";

import { useActiveStreams, useMyBan } from "@/hooks/api";
import { ChatPanel, MobileChatBottomSheet, MobileChatFab } from "@/components/live/chat";
import { LiveHero } from "@/components/live/sections";
import { StartStreamSheet, StreamSwitcherSheet } from "@/components/live/sheets";
import { BannedBanner } from "@/components/features/moderation/BannedBanner";
import { StreamInterruptedBanner } from "@/components/features/streaming/StreamInterruptedBanner";
import { WinCardAutoTrigger } from "@/components/features/win-card/components/WinCardAutoTrigger";
import { WinCardModalProvider } from "@/components/features/win-card/components/WinCardModalProvider";
import { chilizConfig } from "@/config/chiliz.config";

import { CenterStatus } from "./components/CenterStatus";
import { MatchNotFound } from "./components/MatchNotFound";
import { BetSelectionProvider } from "./context/BetSelectionProvider";
import { buildScoreBreakdown } from "./domain/scoreBreakdown";
import { useLiveMatchData } from "./hooks/useLiveMatchData";
import { useLiveStreamSession } from "./hooks/useLiveStreamSession";
import { useMatchMarketWatchers } from "./hooks/useMatchMarketWatchers";
import { useStreamerFollow } from "./hooks/useStreamerFollow";
import { AboutLiveTabs } from "./sections/AboutLiveTabs";
import { LiveMediaSection } from "./sections/LiveMediaSection";
import { LiveSidebar } from "./sections/LiveSidebar";
import { SidebarChat } from "./sections/SidebarChat";
import { LiveStreamControls } from "./sections/LiveStreamControls";
import { LiveStreamerDialogs } from "./sections/LiveStreamerDialogs";

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
  const [showMobileChat, setShowMobileChat] = useState(false);
  const [streamerPreviewEl, setStreamerPreviewEl] = useState<HTMLDivElement | null>(null);

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

  return (
    <BetSelectionProvider>
    <WinCardModalProvider>
      <div className="relative min-h-full bg-[#0A0A0A] text-white">
        {contractAddress ? (
          <WinCardAutoTrigger wallet={walletAddress || undefined} scope={{ kind: "match", contractAddress }} />
        ) : null}
        <LiveHero
          homeTeam={match.homeTeam}
          awayTeam={match.awayTeam}
          homeScore={match.homeScore}
          awayScore={match.awayScore}
          scoreBreakdown={buildScoreBreakdown(match)}
          homeLogo={match.homeTeamLogo}
          awayLogo={match.awayTeamLogo}
          homeForm={match.homeForm}
          awayForm={match.awayForm}
          status={match.status}
          elapsed={match.elapsed ?? undefined}
          kickoffAt={match.startTime}
          league={match.league}
          onChainMatch={!!contractAddress}
          dataStale={match.dataStale}
          onBack={() => router.push("/live")}
        />

        <main className="mx-auto max-w-[1600px] px-3 py-4 sm:px-10 sm:py-8">
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

            {/* Mobile only until the bottom sheet lands; desktop markets live in the sidebar. */}
            <div className="min-w-0 lg:hidden">
              <AboutLiveTabs
                bettingContractAddress={contractAddress}
                walletAddress={walletAddress || undefined}
                homeTeam={match.homeTeam}
                awayTeam={match.awayTeam}
                homeLogo={match.homeTeamLogo}
                awayLogo={match.awayTeamLogo}
                match={bettable}
              />
            </div>

            <LiveSidebar
              walletAddress={walletAddress}
              contractAddress={contractAddress}
              homeTeam={match.homeTeam}
              awayTeam={match.awayTeam}
              match={bettable}
            />
          </div>

          <footer className="mt-12 border-t border-[#1E1E1E] pt-6 text-center">
            <div className="font-mono-ctv text-[10px] uppercase tracking-[0.18em] text-white/35">
              PredCast · self-hosted livestreams · settle on Chiliz
            </div>
          </footer>
        </main>

        <StreamSwitcherSheet
          open={showSwitcher}
          onClose={() => setShowSwitcher(false)}
          matchId={parseInt(id)}
          selectedStreamId={selectedStream?.id}
          currentUserId={userId}
          initialStreamId={initialStreamId}
          onStreamSelect={session.selectStream}
          onOwnStreamDetected={session.onOwnStreamDetected}
        />
        <StartStreamSheet
          open={showStart}
          onClose={() => setShowStart(false)}
          matchId={parseInt(id)}
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

        <MobileChatFab onClick={() => setShowMobileChat(true)} hidden={showMobileChat} />
        <MobileChatBottomSheet open={showMobileChat} onClose={() => setShowMobileChat(false)}>
          <ChatPanel {...chatProps} streamId={myStream?.id ?? selectedStream?.id} />
        </MobileChatBottomSheet>
      </div>
    </WinCardModalProvider>
    </BetSelectionProvider>
  );
}
