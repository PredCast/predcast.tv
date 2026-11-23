import { inject, injectable } from 'tsyringe';

import { CYCLE_SNAPSHOT_TOP } from '@chiliztv/domain/gamification/catalog/constants';
import type { CycleRank } from '@chiliztv/domain/gamification/entities/CycleRank';
import { rankCycle } from '@chiliztv/domain/gamification/policies/cycleSnapshotPolicy';
import { accountEligibility, accountOwningWalletAt } from '@chiliztv/domain/gamification/policies/eligibilityPolicy';
import { gamificationGate } from '@chiliztv/domain/gamification/policies/launchPolicy';
import type { IGamificationConfig } from '@chiliztv/domain/gamification/ports/IGamificationConfig';
import type { ICycleRankRepository } from '@chiliztv/domain/gamification/repositories/ICycleRankRepository';
import type { IGamificationCursorRepository } from '@chiliztv/domain/gamification/repositories/IGamificationCursorRepository';
import type { IGamificationProfileRepository } from '@chiliztv/domain/gamification/repositories/IGamificationProfileRepository';
import type { ClosedCycle, ILeaderboardCycleSource } from '@chiliztv/domain/gamification/repositories/ILeaderboardCycleSource';
import type { IAccountRepository } from '@chiliztv/domain/identity/repositories/IAccountRepository';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import { TOKENS } from '@chiliztv/domain/shared/tokens';

import { IsAccountBannedUseCase } from '../../../identity/use-cases/IsAccountBannedUseCase';
import { AchievementRefresh } from '../../services/AchievementRefresh';

const MAX_CYCLES_PER_RUN = 12;

export type CycleSnapshotReport =
    | { readonly status: 'skipped'; readonly reason: 'disabled' | 'not_launched' }
    | { readonly status: 'done'; readonly cycles: ReadonlyArray<number>; readonly ranks: number; readonly accountsEvaluated: number };

/**
 * Freezes the top 100 of every leaderboard cycle closed since the launch (§8.3, `cycles` cursor).
 * The rank freezes once `EpochAdvanced` is indexed (D15): a closed epoch credits no more profit.
 * Each wallet goes to the account owning it at the close; a banned or suspended account keeps the
 * wallet's rank but no account (nothing is earned, no Crown). The Leaderboard tiers of the ranked
 * accounts are then evaluated: tier XP once for life, Podium and Crown follow the snapshots.
 */
@injectable()
export class SnapshotCycleRanksUseCase {
    constructor(
        @inject(TOKENS.IGamificationConfig) private readonly config: IGamificationConfig,
        @inject(TOKENS.IClock) private readonly clock: IClock,
        @inject(TOKENS.ILeaderboardCycleSource) private readonly cycles: ILeaderboardCycleSource,
        @inject(TOKENS.ICycleRankRepository) private readonly ranks: ICycleRankRepository,
        @inject(TOKENS.IGamificationCursorRepository) private readonly cursors: IGamificationCursorRepository,
        @inject(TOKENS.IAccountRepository) private readonly accounts: IAccountRepository,
        @inject(TOKENS.IGamificationProfileRepository) private readonly profiles: IGamificationProfileRepository,
        private readonly isAccountBanned: IsAccountBannedUseCase,
        private readonly achievements: AchievementRefresh,
    ) {}

    async execute(): Promise<CycleSnapshotReport> {
        const now = this.clock.now();
        const { launch } = this.config;
        const gate = gamificationGate(launch, now);
        if (!gate.open) return { status: 'skipped', reason: gate.reason };
        if (launch.launchAt === null) return { status: 'skipped', reason: 'not_launched' };

        const cursor = await this.cursors.get('cycles');
        const closed = await this.cycles.listClosedCyclesAfter(cursor?.lastEpochId ?? null, launch.launchAt, MAX_CYCLES_PER_RUN);
        const done: number[] = [];
        const touched = new Set<string>();
        let ranks = 0;
        for (const cycle of closed) {
            const frozen = await this.freeze(cycle, now);
            await this.ranks.saveSnapshot(frozen);
            await this.cursors.set('cycles', { lastEpochId: cycle.cycleId }, now);
            for (const r of frozen) if (r.accountId !== null) touched.add(r.accountId);
            ranks += frozen.length;
            done.push(cycle.cycleId);
        }
        for (const accountId of touched) await this.achievements.run(accountId, now, 'cycle_snapshot');
        return { status: 'done', cycles: done, ranks, accountsEvaluated: touched.size };
    }

    private async freeze(cycle: ClosedCycle, now: Date): Promise<ReadonlyArray<CycleRank>> {
        const ranked = rankCycle(await this.cycles.listTopScores(cycle.cycleId, CYCLE_SNAPSHOT_TOP), CYCLE_SNAPSHOT_TOP);
        const links = await this.accounts.findLinks(ranked.map((r) => r.wallet));
        const frozen: CycleRank[] = [];
        for (const r of ranked) {
            const owner = accountOwningWalletAt(links, r.wallet, cycle.closedAt);
            const accountId = owner !== null && (await this.isEligible(owner, cycle.closedAt)) ? owner : null;
            frozen.push({ cycleId: cycle.cycleId, wallet: r.wallet, accountId, rank: r.rank, score: r.score, frozenAt: now });
        }
        return frozen;
    }

    private async isEligible(accountId: string, at: Date): Promise<boolean> {
        const [banned, profile] = await Promise.all([
            this.isAccountBanned.execute(accountId, at),
            this.profiles.findByAccountId(accountId),
        ]);
        return accountEligibility({ anyLinkedWalletBanned: banned, suspendedAt: profile?.suspendedAt ?? null }) === 'eligible';
    }
}
