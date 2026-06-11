import { inject, injectable } from 'tsyringe';

import type { IBetHistoryService } from '@chiliztv/domain/reporting/ports/IBetHistoryService';
import type { IBetRepository } from '@chiliztv/domain/blockchain-indexing/repositories/IBetRepository';
import { TOKENS } from '@chiliztv/domain/shared/tokens';

/**
 * Thin wrap over the indexer-fed bets table — eligibility only needs "has
 * ever bet", independent of the current match (bets carry no match_id).
 */
@injectable()
export class BetHistoryService implements IBetHistoryService {
  constructor(
    @inject(TOKENS.IBetRepository)
    private readonly bets: IBetRepository,
  ) {}

  async hasEverBet(walletAddress: string): Promise<boolean> {
    const count = await this.bets.countByUser(walletAddress.toLowerCase());
    return count > 0;
  }
}
