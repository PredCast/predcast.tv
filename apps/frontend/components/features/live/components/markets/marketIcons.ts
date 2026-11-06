import { Clock3, Flag, Hash, Shuffle, Target, Trophy, Users, type LucideIcon } from "lucide-react";

import type { MarketKey } from "@/lib/contracts/markets";

const MARKET_ICONS: Record<MarketKey, LucideIcon> = {
  winner: Trophy,
  fulltimewinner: Trophy,
  goalstotal: Target,
  bothscore: Users,
  halftime: Clock3,
  doublechance: Shuffle,
  firstscorer: Flag,
  goalsexact: Hash,
  "bb-winner": Trophy,
  totalpoints: Target,
  spread: Target,
  pointsexact: Hash,
};

export function marketIconFor(key: MarketKey | undefined): LucideIcon {
  return key ? MARKET_ICONS[key] ?? Hash : Hash;
}
