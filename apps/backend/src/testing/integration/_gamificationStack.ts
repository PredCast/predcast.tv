import type { IGamificationCursorRepository } from '@chiliztv/domain/gamification/repositories/IGamificationCursorRepository';
import type {
    ChainPosition,
    IGamificationEventSource,
} from '@chiliztv/domain/gamification/repositories/IGamificationEventSource';
import type { IIndexerCheckpointRepository } from '@chiliztv/domain/blockchain-indexing/repositories/IIndexerCheckpointRepository';
import type { IChatRepository } from '@chiliztv/domain/chat/repositories/IChatRepository';
import type { ChatMessage } from '@chiliztv/domain/chat/entities/ChatMessage';
import type { IBettingChainRegistry } from '@chiliztv/domain/shared/ports/IBettingChainRegistry';
import type { INetworkConfig } from '@chiliztv/domain/shared/ports/INetworkConfig';

import { AchievementRefresh } from '../../application/gamification/services/AchievementRefresh';
import { GamificationAfterCredit } from '../../application/gamification/services/GamificationAfterCredit';
import { ProcessBetVolumeUseCase } from '../../application/gamification/use-cases/chain/ProcessBetVolumeUseCase';
import { ProcessGamificationChainUseCase } from '../../application/gamification/use-cases/chain/ProcessGamificationChainUseCase';
import { ProcessMarketSettlementsUseCase } from '../../application/gamification/use-cases/chain/ProcessMarketSettlementsUseCase';
import { ProcessModerationReversalsUseCase } from '../../application/gamification/use-cases/chain/ProcessModerationReversalsUseCase';
import { ProcessSupportEventsUseCase } from '../../application/gamification/use-cases/chain/ProcessSupportEventsUseCase';
import { CreditXpUseCase } from '../../application/gamification/use-cases/CreditXpUseCase';
import { EvaluateAchievementsUseCase } from '../../application/gamification/use-cases/EvaluateAchievementsUseCase';
import { RecordChatXpUseCase } from '../../application/gamification/use-cases/RecordChatXpUseCase';
import { RecordProfileStepUseCase } from '../../application/gamification/use-cases/RecordProfileStepUseCase';
import { IsAccountBannedUseCase } from '../../application/identity/use-cases/IsAccountBannedUseCase';
import { NodeTextHasher } from '../../infrastructure/crypto/NodeTextHasher';
import { InMemoryCache } from '../cache/InMemoryCache';
import type { MockClock } from '../clock/MockClock';
import { FIXTURE_CHAIN_ID, FIXTURE_USDC_DECIMALS } from '../fixtures/gamification.fixtures';
import { silentLogger } from '../gamification/gamificationHarness';

/**
 * Real event source limited to one contract and to chain rows: the local database is shared with
 * the dev stack, whose bets, donations and chat removals must not be credited by a test run.
 */
export class ContractScopedEventSource implements IGamificationEventSource {
    constructor(private readonly inner: IGamificationEventSource, private readonly contract: string) {}

    async listBetsAfter(afterId: number, limit: number) {
        return (await this.inner.listBetsAfter(afterId, limit)).filter((b) => b.contract === this.contract);
    }
    listMarketBets(contract: string, marketId: number) { return this.inner.listMarketBets(contract, marketId); }
    findContractMatches(contracts: ReadonlyArray<string>) { return this.inner.findContractMatches(contracts); }
    findMarketKind(contract: string, marketId: number) { return this.inner.findMarketKind(contract, marketId); }
    isMarketCancelled(contract: string, marketId: number) { return this.inner.isMarketCancelled(contract, marketId); }
    async listSettlementsAfter(after: ChainPosition, limit: number) {
        return (await this.inner.listSettlementsAfter(after, limit)).filter((s) => s.contract === this.contract);
    }
    async listSupportAfter() { return []; }
    async listChatRemovalsAfter() { return []; }
    async listStopStreamActionsAfter() { return []; }
}

export class InMemoryCheckpoints implements IIndexerCheckpointRepository {
    lastBlock = BigInt(0);
    async listAll() { return []; }
    async getLastBlock() { return this.lastBlock; }
    async setLastBlock(_name: string, block: bigint) { this.lastBlock = block; }
}

const chains: IBettingChainRegistry = {
    list: () => [],
    get: () => null,
    defaultChain: () => ({ chainId: FIXTURE_CHAIN_ID, name: 'Chiliz Spicy', nativeSymbol: 'CHZ', explorerUrl: '' }),
};

/**
 * Gamification use cases on the app's Supabase adapters (local stack only). The adapters load
 * lazily: `pointSupabaseClientAt` must run before the client module is first imported.
 */
export async function buildLocalGamificationStack(clock: MockClock, launchAt: Date) {
    const [
        { SupabaseAccountRepository }, { SupabaseBanRepository }, { SupabaseGamificationLedgerRepository },
        { SupabaseGamificationProfileRepository }, { SupabaseGamificationProgressRepository },
        { SupabaseGamificationNotificationRepository }, { SupabaseDoubleXpEventRepository }, { SupabaseCycleRankRepository },
        { SupabaseGamificationEventSource }, { SupabaseStreamSessionRepository },
    ] = await Promise.all([
        import('../../infrastructure/persistence/repositories/SupabaseAccountRepository'),
        import('../../infrastructure/persistence/repositories/SupabaseBanRepository'),
        import('../../infrastructure/persistence/repositories/gamification/SupabaseGamificationLedgerRepository'),
        import('../../infrastructure/persistence/repositories/gamification/SupabaseGamificationProfileRepository'),
        import('../../infrastructure/persistence/repositories/gamification/SupabaseGamificationProgressRepository'),
        import('../../infrastructure/persistence/repositories/gamification/SupabaseGamificationNotificationRepository'),
        import('../../infrastructure/persistence/repositories/gamification/SupabaseDoubleXpEventRepository'),
        import('../../infrastructure/persistence/repositories/gamification/SupabaseCycleRankRepository'),
        import('../../infrastructure/persistence/repositories/gamification/SupabaseGamificationEventSource'),
        import('../../infrastructure/persistence/repositories/gamification/SupabaseStreamSessionRepository'),
    ]);

    const config = { launch: { enabled: true, launchAt } };
    const accounts = new SupabaseAccountRepository();
    const ledger = new SupabaseGamificationLedgerRepository();
    const profiles = new SupabaseGamificationProfileRepository();
    const notifications = new SupabaseGamificationNotificationRepository();
    const isBanned = new IsAccountBannedUseCase(accounts, new SupabaseBanRepository());
    const afterCredit = new GamificationAfterCredit(notifications, accounts, new InMemoryCache(), silentLogger);
    const creditXp = new CreditXpUseCase(config, accounts, profiles, ledger, new SupabaseDoubleXpEventRepository(), isBanned, afterCredit);
    const evaluate = new EvaluateAchievementsUseCase(
        config, profiles, new SupabaseGamificationProgressRepository(), new SupabaseCycleRankRepository(), notifications, creditXp,
    );
    const achievements = new AchievementRefresh(evaluate, silentLogger);
    const profileSteps = new RecordProfileStepUseCase(config, ledger, creditXp, achievements);
    const chatXp = new RecordChatXpUseCase(config, clock, ledger, new NodeTextHasher(), creditXp, profileSteps, achievements);

    /** Chain processor reading the contract's rows through the real event source. */
    function chainProcessor(contract: string, cursors: IGamificationCursorRepository) {
        const source = new ContractScopedEventSource(new SupabaseGamificationEventSource(), contract.toLowerCase());
        const decimals = { usdcDecimals: async () => FIXTURE_USDC_DECIMALS };
        return new ProcessGamificationChainUseCase(
            config, clock, silentLogger, source, accounts, chains,
            new ProcessBetVolumeUseCase(config, cursors, source, decimals, creditXp),
            new ProcessMarketSettlementsUseCase(config, cursors, source, ledger, decimals, creditXp, afterCredit),
            new ProcessSupportEventsUseCase(config, cursors, source, accounts, creditXp),
            new ProcessModerationReversalsUseCase(config, cursors, source, ledger, new SupabaseStreamSessionRepository(), afterCredit),
            achievements,
        );
    }

    return { creditXp, chatXp, chainProcessor };
}

/** The app's PariMatch indexer on a local RPC, with in-memory checkpoints and no chat writes. */
export async function buildLocalPariMatchIndexer(rpcUrl: string, clock: MockClock) {
    const [{ PariMatchEventIndexer }, { SupabaseBetRepository }, { SupabaseMarketEventRepository }, { NoopLockService }] =
        await Promise.all([
            import('../../infrastructure/blockchain/indexers/PariMatchEventIndexer'),
            import('../../infrastructure/persistence/repositories/SupabaseBetRepository'),
            import('../../infrastructure/persistence/repositories/SupabaseMarketEventRepository'),
            import('../../infrastructure/cache/NoopLockService'),
        ]);
    const network: INetworkConfig = {
        rpcUrl, chainId: 31_337, pariMatchFactoryAddress: '', streamWalletFactoryAddress: '', swapRouterAddress: '',
        leaderboardRewardsAddress: '', usdcAddress: '', wchzAddress: '', adminPrivateKey: '', resolverPrivateKey: null,
    };
    // Only saveMessage is reached (bet system messages); nothing is written to the shared chat.
    const chat = { saveMessage: async (m: ChatMessage) => m } as unknown as IChatRepository;
    const checkpoints = new InMemoryCheckpoints();
    const indexer = new PariMatchEventIndexer(
        checkpoints, new SupabaseBetRepository(), new SupabaseMarketEventRepository(), chat, network,
        { reportLiveBetIncident: async () => undefined }, clock, new InMemoryCache(), new NoopLockService(clock),
    );
    /** One indexer tick: head − 6, chunked, checkpoint persisted (BaseIndexer). */
    async function tick(): Promise<void> {
        // viem caches eth_blockNumber for the client's polling interval (4 s): a quicker tick sees an old head.
        await new Promise((res) => setTimeout(res, 4_100));
        await indexer.start();
        indexer.stop();
    }
    return { tick, checkpoints };
}
