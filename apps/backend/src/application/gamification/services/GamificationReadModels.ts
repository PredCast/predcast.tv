import { inject, injectable } from 'tsyringe';

import type { GamificationProfile } from '@chiliztv/domain/gamification/entities/GamificationProfile';
import { gamificationGate } from '@chiliztv/domain/gamification/policies/launchPolicy';
import type { ReadModelContext } from '@chiliztv/domain/gamification/policies/profileCard';
import type { IGamificationConfig } from '@chiliztv/domain/gamification/ports/IGamificationConfig';
import type { ICycleRankRepository } from '@chiliztv/domain/gamification/repositories/ICycleRankRepository';
import type { CardSource, IGamificationReadRepository } from '@chiliztv/domain/gamification/repositories/IGamificationReadRepository';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import { TOKENS } from '@chiliztv/domain/shared/tokens';

/** A card source with a stored profile: only those get a pill or a card in public. */
export interface PublicCardSource {
    readonly source: CardSource;
    readonly profile: GamificationProfile;
}

/** Shared loading of the public read models: launch gate, Crown holder and card sources. */
@injectable()
export class GamificationReadModels {
    constructor(
        @inject(TOKENS.IGamificationConfig) private readonly config: IGamificationConfig,
        @inject(TOKENS.IClock) private readonly clock: IClock,
        @inject(TOKENS.IGamificationReadRepository) private readonly reads: IGamificationReadRepository,
        @inject(TOKENS.ICycleRankRepository) private readonly cycleRanks: ICycleRankRepository,
    ) {}

    /** Flag off or before launch: every gamification surface stays silent. */
    isOpen(): boolean {
        return gamificationGate(this.config.launch, this.clock.now()).open;
    }

    async context(): Promise<ReadModelContext> {
        const crown = await this.cycleRanks.findCrownHolder();
        return { now: this.clock.now(), crownAccountId: crown?.accountId ?? null };
    }

    async publicSources(wallets: ReadonlyArray<string>): Promise<ReadonlyArray<PublicCardSource>> {
        const sources = await this.reads.findCardSources(wallets);
        return sources.flatMap((source) => (source.profile ? [{ source, profile: source.profile }] : []));
    }
}
