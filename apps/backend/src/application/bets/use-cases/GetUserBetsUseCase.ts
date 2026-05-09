import { injectable, inject } from 'tsyringe';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import { IBetRepository } from '@chiliztv/domain/blockchain-indexing/repositories/IBetRepository';
import { BetWithMatchInfo } from '@chiliztv/domain/blockchain-indexing/entities/BetWithMatchInfo';
import { BetStatus } from '@chiliztv/domain/blockchain-indexing/entities/Bet';

export interface GetUserBetsQuery {
    readonly userAddress: string;
    readonly limit: number;
    readonly offset: number;
    readonly status?: BetStatus;
}

@injectable()
export class GetUserBetsUseCase {
    constructor(
        @inject(TOKENS.IBetRepository)
        private readonly bets: IBetRepository,
    ) {}

    async execute(query: GetUserBetsQuery): Promise<BetWithMatchInfo[]> {
        return this.bets.findByUserWithMatchInfo(query.userAddress, {
            limit: query.limit,
            offset: query.offset,
            status: query.status,
        });
    }
}
