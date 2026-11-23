"use client";

import type { ProfileBadgeDto } from "@chiliztv/shared";

import { LevelPill } from "@/components/features/gamification/components/LevelPill";
import { ProfileHoverTrigger } from "@/components/features/gamification/components/ProfileHoverTrigger";
import { ProfileTag } from "@/components/features/gamification/components/ProfileTag";

interface ChatAuthorProps {
  readonly username: string;
  readonly walletAddress: string;
  /** Own red, active subscriber gold (`isFeatured`), else the legacy hue. */
  readonly color: string;
  /** Null: gamification off or no profile — the name renders exactly as before. */
  readonly badge: ProfileBadgeDto | null;
  readonly isOwn: boolean;
}

const NAME_CLASS = "font-display mr-2 font-bold uppercase tracking-tight";
const CHAT_TAGS = new Set(["new", "streamer"]);

/** Level pill, New / Streamer tag, then the name opening the profile card (mockup 04, CA22). */
export function ChatAuthor({ username, walletAddress, color, badge, isOwn }: ChatAuthorProps) {
  if (!badge) {
    return (
      <span className={NAME_CLASS} style={{ color }}>
        {username}
      </span>
    );
  }
  return (
    <>
      <LevelPill level={badge.level} className="mr-1.5" />
      {badge.tags
        .filter((tag) => CHAT_TAGS.has(tag))
        .map((tag) => (
          <ProfileTag key={tag} tag={tag} className="mr-1.5 align-[2px]" />
        ))}
      <ProfileHoverTrigger
        wallet={walletAddress}
        reportable={!isOwn}
        className={`${NAME_CLASS} text-[15px] tracking-[-0.005em]`}
        style={{ color }}
      >
        {username}
      </ProfileHoverTrigger>
    </>
  );
}
