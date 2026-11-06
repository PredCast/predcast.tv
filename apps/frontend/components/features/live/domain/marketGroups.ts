import { MARKET_TYPE_HASHES, MarketState, type MarketPoolSnapshot } from "@/lib/contracts/markets";

export interface MarketGroups {
  readonly main: ReadonlyArray<MarketPoolSnapshot>;
  /** The 3 Double Chance variants — independent on-chain markets, grouped under one heading. */
  readonly doubleChance: ReadonlyArray<MarketPoolSnapshot>;
  /** No stake on any market yet while at least one is Open — drives the opening-line hero. */
  readonly allFresh: boolean;
  readonly openCount: number;
}

/** Expects manifest order: the DC trio must stay contiguous for the grouped heading to make sense. */
export function groupMarkets(markets: ReadonlyArray<MarketPoolSnapshot>): MarketGroups {
  const dcHash = MARKET_TYPE_HASHES.DOUBLE_CHANCE.toLowerCase();
  const isDc = (m: MarketPoolSnapshot) => m.marketType.toLowerCase() === dcHash;
  const totalStaked = markets.reduce((sum, m) => sum + BigInt(m.totalPool), BigInt(0));
  const openCount = markets.filter((m) => m.state === MarketState.Open).length;
  return {
    main: markets.filter((m) => !isDc(m)),
    doubleChance: markets.filter(isDc),
    allFresh: totalStaked === BigInt(0) && openCount > 0,
    openCount,
  };
}
