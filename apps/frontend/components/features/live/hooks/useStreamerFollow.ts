"use client";

import { useFollowMutation, useIsFollowing, useUnfollowMutation } from "@/hooks/api";
import type { LiveStream } from "@/models/stream.model";

export interface StreamerFollow {
  readonly canFollow: boolean;
  readonly isFollowing: boolean;
  readonly isLoading: boolean;
  readonly isMutating: boolean;
  readonly toggle: () => void;
}

export function useStreamerFollow(userId: string | undefined, stream: LiveStream | null): StreamerFollow {
  const streamerId = stream?.streamerId;
  const canFollow = !!userId && !!streamerId && userId !== streamerId;
  const { data: isFollowing, isLoading } = useIsFollowing(
    canFollow ? userId : undefined,
    canFollow ? streamerId : undefined,
  );
  const followMutation = useFollowMutation(userId);
  const unfollowMutation = useUnfollowMutation(userId);

  const toggle = () => {
    if (!canFollow || !streamerId || !stream) return;
    if (isFollowing) {
      unfollowMutation.mutate({ streamerId });
    } else {
      followMutation.mutate({ streamerId, streamerName: stream.streamerName });
    }
  };

  return {
    canFollow,
    isFollowing: !!isFollowing,
    isLoading,
    isMutating: followMutation.isPending || unfollowMutation.isPending,
    toggle,
  };
}
