import { inject, injectable } from 'tsyringe';

import { TOKENS } from '@chiliztv/domain/shared/tokens';
import type { IAccountRepository } from '@chiliztv/domain/identity/repositories/IAccountRepository';
import type { IBanRepository } from '@chiliztv/domain/reporting/repositories/IBanRepository';

/** D17: bans are per wallet; an account is banned while any of its linked wallets is. */
@injectable()
export class IsAccountBannedUseCase {
    constructor(
        @inject(TOKENS.IAccountRepository) private readonly accounts: IAccountRepository,
        @inject(TOKENS.IBanRepository) private readonly bans: IBanRepository,
    ) {}

    async execute(accountId: string, now: Date): Promise<boolean> {
        const links = await this.accounts.findActiveLinksOfAccount(accountId);
        const active = await Promise.all(links.map((l) => this.bans.findActiveBan(l.walletAddress, now)));
        return active.some((ban) => ban !== null);
    }
}
