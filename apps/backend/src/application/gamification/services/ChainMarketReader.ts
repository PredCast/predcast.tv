import { marketKindOf } from '@chiliztv/domain/gamification/catalog/refKeys';
import { groupByOwningAccount } from '@chiliztv/domain/gamification/policies/accountGrouping';
import type {
    ContractMatch,
    IGamificationEventSource,
    IndexedBet,
} from '@chiliztv/domain/gamification/repositories/IGamificationEventSource';
import type { IAccountRepository } from '@chiliztv/domain/identity/repositories/IAccountRepository';

const marketKey = (contract: string, marketId: number): string => `${contract.toLowerCase()}:${marketId}`;

/**
 * Per-run read cache of the chain processor: contract → match, market bets grouped by the account
 * owning each wallet at bet time, market kind and cancellation. One instance per run, never shared.
 */
export class ChainMarketReader {
    private readonly matches = new Map<string, ContractMatch | null>();
    private readonly marketBets = new Map<string, ReadonlyArray<IndexedBet>>();
    private readonly byAccount = new Map<string, Map<string, IndexedBet[]>>();
    private readonly kinds = new Map<string, string | null>();
    private readonly cancelled = new Map<string, boolean>();

    constructor(
        private readonly source: IGamificationEventSource,
        private readonly accounts: IAccountRepository,
        private readonly defaultChainId: number,
    ) {}

    async preloadContracts(contracts: ReadonlyArray<string>): Promise<void> {
        const missing = [...new Set(contracts.map((c) => c.toLowerCase()))].filter((c) => !this.matches.has(c));
        if (missing.length === 0) return;
        const found = await this.source.findContractMatches(missing);
        for (const c of missing) this.matches.set(c, found.find((m) => m.contract === c) ?? null);
    }

    contractMatch(contract: string): ContractMatch | null {
        return this.matches.get(contract.toLowerCase()) ?? null;
    }

    /** D7: `COALESCE(matches.betting_chain_id, default)` until `bets` carries its chain. */
    chainIdOf(contract: string): number {
        return this.contractMatch(contract)?.bettingChainId ?? this.defaultChainId;
    }

    /** Drops the market's cached bets (a bet indexed after they were read). */
    forgetBets(contract: string, marketId: number): void {
        const key = marketKey(contract, marketId);
        this.marketBets.delete(key);
        this.byAccount.delete(key);
    }

    async bets(contract: string, marketId: number): Promise<ReadonlyArray<IndexedBet>> {
        const key = marketKey(contract, marketId);
        const cached = this.marketBets.get(key);
        if (cached) return cached;
        const loaded = await this.source.listMarketBets(contract, marketId);
        this.marketBets.set(key, loaded);
        return loaded;
    }

    /** Bets of the market per account (§3.10: linked wallets merge), wallets linked at bet time only. */
    async betsByAccount(contract: string, marketId: number): Promise<Map<string, IndexedBet[]>> {
        const key = marketKey(contract, marketId);
        const cached = this.byAccount.get(key);
        if (cached) return cached;
        const bets = await this.bets(contract, marketId);
        const links = await this.accounts.findLinks([...new Set(bets.map((b) => b.wallet))]);
        const groups = groupByOwningAccount(bets, links, (b) => b.wallet, (b) => b.blockTimestamp);
        this.byAccount.set(key, groups);
        return groups;
    }

    /** `{marketType}:{line}` from `MarketCreated`; null when not indexed. */
    async marketKind(contract: string, marketId: number): Promise<string | null> {
        const key = marketKey(contract, marketId);
        if (this.kinds.has(key)) return this.kinds.get(key) ?? null;
        const kind = await this.source.findMarketKind(contract, marketId);
        const value = kind ? marketKindOf(kind.marketType, kind.line) : null;
        this.kinds.set(key, value);
        return value;
    }

    async isCancelled(contract: string, marketId: number): Promise<boolean> {
        const key = marketKey(contract, marketId);
        const cached = this.cancelled.get(key);
        if (cached !== undefined) return cached;
        const value = await this.source.isMarketCancelled(contract, marketId);
        this.cancelled.set(key, value);
        return value;
    }
}
