"use client";

import { Mic } from "lucide-react";
import type { ProfileCardDto } from "@chiliztv/shared";

import { titleLabel } from "@/components/features/gamification/domain/labels";

interface StreamerLevelLineProps {
  readonly card: ProfileCardDto;
}

/** "Level 31 · Voice of the Match · 152 h streamed" (mockup 04, StreamerStrip). */
export function StreamerLevelLine({ card }: StreamerLevelLineProps) {
  return (
    <>
      <span>Level {card.level}</span>
      {card.titleId && (
        <>
          <span>·</span>
          <span className="text-[#FF1737]">{titleLabel(card.titleId, card.titleCycleId)}</span>
        </>
      )}
      {card.streamedHours !== null && (
        <>
          <span>·</span>
          <span className="inline-flex items-center gap-1">
            <Mic aria-hidden size={11} /> {card.streamedHours.toLocaleString("en-US")} h streamed
          </span>
        </>
      )}
      <span>·</span>
    </>
  );
}
