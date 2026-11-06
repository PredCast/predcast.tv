import { MarketState, type MarketPoolSnapshot } from "@/lib/contracts/markets";

export interface FreshPoolStatus {
  /** No stake on any market yet while at least one is Open — drives the opening-line hero. */
  readonly allFresh: boolean;
  readonly openCount: number;
}

export function freshPoolStatus(markets: ReadonlyArray<MarketPoolSnapshot>): FreshPoolStatus {
  const staked = markets.reduce((sum, m) => sum + BigInt(m.totalPool), BigInt(0));
  const openCount = markets.filter((m) => m.state === MarketState.Open).length;
  return { allFresh: staked === BigInt(0) && openCount > 0, openCount };
}
