import { inject, injectable } from 'tsyringe';

import { SETTLEMENT_OVERLAP_BLOCKS } from '@chiliztv/domain/gamification/catalog/constants';
import { marketKeyOf, refKeys } from '@chiliztv/domain/gamification/catalog/refKeys';
import { gamificationGate } from '@chiliztv/domain/gamification/policies/launchPolicy';
import { isReversibleCredit } from '@chiliztv/domain/gamification/policies/reversalPolicy';
import { betWonXp, isMarketWon } from '@chiliztv/domain/gamification/policies/winPolicy';
import type { IGamificationConfig } from '@chiliztv/domain/gamification/ports/IGamificationConfig';
import type { IStakeTokenDecimals } from '@chiliztv/domain/gamification/ports/IStakeTokenDecimals';
import type { IGamificationCursorRepository } from '@chiliztv/domain/gamification/repositories/IGamificationCursorRepository';
import type {
    ChainPosition,
    IGamificationEventSource,
    SettlementEvent,
} from '@chiliztv/domain/gamification/repositories/IGamificationEventSource';
import type { IGamificationLedgerRepository } from '@chiliztv/domain/gamification/repositories/IGamificationLedgerRepository';
import { TOKENS } from '@chiliztv/domain/shared/tokens';

import { GamificationAfterCredit } from '../../services/GamificationAfterCredit';
import type { ChainMarketReader } from '../../services/ChainMarketReader';
import { CreditXpUseCase } from '../CreditXpUseCase';
import type { ChainStepResult } from './ChainStepResult';

const BATCH_SIZE = 500;
const MAX_BATCHES_PER_RUN = 10;

const isAfter = (a: ChainPosition, b: ChainPosition): boolean =>
    a.block > b.block || (a.block === b.block && a.logIndex > b.logIndex);

/**
 * Market settlements in chain order (§3.3 `bet_won`, §3.8). `MarketResolved`: one `bet_won` per
 * account whose net result on the market is a profit with ≥ 5 USDC on the winner (D10).
 * `MarketCancelled`: every `bet_volume` row of the market is reversed. The cursor is re-read
 * 200 blocks back so late-indexed events are not missed.
 */
@injectable()
export class ProcessMarketSettlementsUseCase {
    constructor(
        @inject(TOKENS.IGamificationConfig) private readonly config: IGamificationConfig,
        @inject(TOKENS.IGamificationCursorRepository) private readonly cursors: IGamificationCursorRepository,
        @inject(TOKENS.IGamificationEventSource) private readonly source: IGamificationEventSource,
        @inject(TOKENS.IGamificationLedgerRepository) private readonly ledger: IGamificationLedgerRepository,
        @inject(TOKENS.IStakeTokenDecimals) private readonly decimals: IStakeTokenDecimals,
        private readonly creditXp: CreditXpUseCase,
        private readonly afterCredit: GamificationAfterCredit,
    ) {}

    async execute(now: Date, reader: ChainMarketReader): Promise<ChainStepResult> {
        const touched = new Set<string>();
        const stored = await this.cursors.get('settlements');
        let after: ChainPosition = { block: Math.max((stored?.block ?? 0) - SETTLEMENT_OVERLAP_BLOCKS, 0), logIndex: -1 };
        let last: ChainPosition | null = stored;
        let processed = 0;
        try {
            for (let batch = 0; batch < MAX_BATCHES_PER_RUN; batch++) {
                const events = await this.source.listSettlementsAfter(after, BATCH_SIZE);
                if (events.length === 0) break;
                await reader.preloadContracts(events.map((e) => e.contract));
                for (const event of events) {
                    const accounts = event.kind === 'resolved' ? await this.resolved(event, reader) : await this.cancelled(event, reader);
                    for (const a of accounts) touched.add(a);
                    after = { block: event.block, logIndex: event.logIndex };
                    if (last === null || isAfter(after, last)) last = after;
                    processed += 1;
                }
                if (events.length < BATCH_SIZE) break;
            }
        } finally {
            if (last !== null && (stored === null || isAfter(last, stored))) await this.cursors.set('settlements', last, now);
        }
        return { processed, touched };
    }

    private async resolved(event: SettlementEvent & { kind: 'resolved' }, reader: ChainMarketReader): Promise<string[]> {
        if (!gamificationGate(this.config.launch, event.blockTimestamp).open) return [];
        const chainId = reader.chainIdOf(event.contract);
        const decimals = await this.decimals.usdcDecimals(chainId);
        const bets = await reader.bets(event.contract, event.marketId);
        const winningPoolRaw = bets.filter((b) => b.outcome === event.result).reduce((sum, b) => sum + b.stakeRaw, BigInt(0));
        const resolution = { result: event.result, winningPoolRaw, resolvedNetPoolRaw: event.resolvedNetPoolRaw, decimals };
        const xp = betWonXp();

        const credited: string[] = [];
        for (const [accountId, accountBets] of await reader.betsByAccount(event.contract, event.marketId)) {
            if (!isMarketWon(accountBets, resolution).won) continue;
            const outcome = await this.creditXp.execute({
                actor: { kind: 'account', accountId },
                source: 'bet_won',
                refKey: refKeys.betWon(chainId, event.contract, event.marketId, accountId),
                occurredAt: event.blockTimestamp,
                requestedXp: xp,
                reason: xp === 0 ? 'source_disabled' : null,
                metadata: {
                    chainId,
                    contract: event.contract,
                    marketId: event.marketId,
                    marketKey: marketKeyOf(chainId, event.contract, event.marketId),
                    txHash: event.txHash,
                },
                progress: [{ metric: 'bets_won', delta: 1 }],
            });
            if (outcome.status === 'credited') credited.push(accountId);
        }
        return credited;
    }

    /** Reversals only: no achievement is evaluated (tiers are never withdrawn). */
    private async cancelled(event: SettlementEvent, reader: ChainMarketReader): Promise<string[]> {
        const chainId = reader.chainIdOf(event.contract);
        const rows = await this.ledger.listVolumeRowsByMarket(marketKeyOf(chainId, event.contract, event.marketId));
        const accounts = new Set<string>();
        for (const row of rows.filter(isReversibleCredit)) {
            const result = await this.ledger.reverse(row.refKey, 'market_cancelled', event.blockTimestamp);
            if (result.reversed) accounts.add(row.accountId);
        }
        for (const accountId of accounts) await this.afterCredit.invalidate(accountId);
        return [];
    }
}
