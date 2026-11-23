import { inject, injectable } from 'tsyringe';

import { marketKeyOf, refKeys } from '@chiliztv/domain/gamification/catalog/refKeys';
import { gamificationGate } from '@chiliztv/domain/gamification/policies/launchPolicy';
import { progressUndo } from '@chiliztv/domain/gamification/policies/reversalPolicy';
import { isQualifyingStake, volumeDelta, type ChainBet } from '@chiliztv/domain/gamification/policies/volumeCredit';
import type { IGamificationConfig } from '@chiliztv/domain/gamification/ports/IGamificationConfig';
import type { IStakeTokenDecimals } from '@chiliztv/domain/gamification/ports/IStakeTokenDecimals';
import type { IGamificationCursorRepository } from '@chiliztv/domain/gamification/repositories/IGamificationCursorRepository';
import type { IndexedBet, IGamificationEventSource } from '@chiliztv/domain/gamification/repositories/IGamificationEventSource';
import type { ProgressDelta } from '@chiliztv/domain/gamification/repositories/IGamificationLedgerRepository';
import { TOKENS } from '@chiliztv/domain/shared/tokens';

import type { ChainMarketReader } from '../../services/ChainMarketReader';
import { CreditXpUseCase } from '../CreditXpUseCase';
import type { ChainStepResult } from './ChainStepResult';

const BATCH_SIZE = 500;
const MAX_BATCHES_PER_RUN = 10;

const toChainBet = (bet: IndexedBet, decimals: number): ChainBet => ({
    outcome: bet.outcome,
    stakeRaw: bet.stakeRaw,
    decimals,
    blockNumber: bet.blockNumber,
    logIndex: bet.logIndex,
});

/**
 * `bet_volume` (§3.3, §3.7, §3.9): new `bets` rows by id, lots of 500. Each qualifying bet (≥ 5
 * USDC, decimals read on-chain) of a linked wallet is credited with its counted-volume delta,
 * computed in chain order against the account's earlier bets on the market (hedges at 0 XP).
 * Bets of a cancelled market are skipped. Replaying from cursor 0 adds nothing (`ref_key`).
 */
@injectable()
export class ProcessBetVolumeUseCase {
    constructor(
        @inject(TOKENS.IGamificationConfig) private readonly config: IGamificationConfig,
        @inject(TOKENS.IGamificationCursorRepository) private readonly cursors: IGamificationCursorRepository,
        @inject(TOKENS.IGamificationEventSource) private readonly source: IGamificationEventSource,
        @inject(TOKENS.IStakeTokenDecimals) private readonly decimals: IStakeTokenDecimals,
        private readonly creditXp: CreditXpUseCase,
    ) {}

    async execute(now: Date, reader: ChainMarketReader): Promise<ChainStepResult> {
        const touched = new Set<string>();
        let lastId = (await this.cursors.get('bets'))?.lastId ?? 0;
        let processed = 0;
        try {
            for (let batch = 0; batch < MAX_BATCHES_PER_RUN; batch++) {
                const bets = await this.source.listBetsAfter(lastId, BATCH_SIZE);
                if (bets.length === 0) break;
                await reader.preloadContracts(bets.map((b) => b.contract));
                for (const bet of bets) {
                    const accountId = await this.process(bet, reader);
                    if (accountId) touched.add(accountId);
                    lastId = bet.id;
                    processed += 1;
                }
                await this.cursors.set('bets', { lastId }, now);
                if (bets.length < BATCH_SIZE) break;
            }
        } catch (error) {
            // Keep what was done: the failed bet is retried on the next run.
            if (processed > 0) await this.cursors.set('bets', { lastId }, now);
            throw error;
        }
        return { processed, touched };
    }

    /** Account credited, or null when the bet earns nothing. */
    private async process(bet: IndexedBet, reader: ChainMarketReader): Promise<string | null> {
        if (!gamificationGate(this.config.launch, bet.blockTimestamp).open) return null;
        const chainId = reader.chainIdOf(bet.contract);
        const decimals = await this.decimals.usdcDecimals(chainId);
        if (!isQualifyingStake(bet.stakeRaw, decimals)) return null;

        const known = await reader.bets(bet.contract, bet.marketId);
        if (!known.some((b) => b.id === bet.id)) reader.forgetBets(bet.contract, bet.marketId);
        const groups = await reader.betsByAccount(bet.contract, bet.marketId);
        const owner = [...groups.entries()].find(([, bets]) => bets.some((b) => b.id === bet.id));
        if (!owner) return null;
        if (await reader.isCancelled(bet.contract, bet.marketId)) return null;

        const [accountId, accountBets] = owner;
        const credit = volumeDelta(accountBets.map((b) => toChainBet(b, decimals)), toChainBet(bet, decimals));
        if (!credit.qualifying) return null;

        const marketKind = await reader.marketKind(bet.contract, bet.marketId);
        const leagueId = reader.contractMatch(bet.contract)?.leagueId ?? null;
        const progress: ProgressDelta[] = [];
        if (credit.deltaUsdc > 0) progress.push({ metric: 'bet_volume_usdc', delta: credit.deltaUsdc });
        if (marketKind) progress.push({ metric: 'market_kinds', item: marketKind });
        if (leagueId !== null) progress.push({ metric: 'leagues', item: String(leagueId) });

        const outcome = await this.creditXp.execute({
            actor: { kind: 'account', accountId },
            source: 'bet_volume',
            refKey: refKeys.betVolume(chainId, bet.txHash, bet.logIndex),
            occurredAt: bet.blockTimestamp,
            requestedXp: credit.requestedXp,
            reason: credit.reason,
            metadata: {
                chainId,
                contract: bet.contract,
                marketId: bet.marketId,
                marketKey: marketKeyOf(chainId, bet.contract, bet.marketId),
                txHash: bet.txHash,
                logIndex: bet.logIndex,
                deltaUsdc: credit.deltaUsdc,
                marketKind,
                leagueId,
                progressUndo: progressUndo('bet_volume_usdc', credit.deltaUsdc),
            },
            progress,
        });
        return outcome.status === 'credited' ? accountId : null;
    }
}
