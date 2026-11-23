import { inject, injectable } from 'tsyringe';

import { accountOwningWalletAt } from '@chiliztv/domain/gamification/policies/eligibilityPolicy';
import type { IAccountRepository } from '@chiliztv/domain/identity/repositories/IAccountRepository';
import { NotFoundError } from '@chiliztv/domain/shared/errors/NotFoundError';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import { TOKENS } from '@chiliztv/domain/shared/tokens';

/** Admin pages address players by wallet; gamification state lives on the account owning it now. */
@injectable()
export class AdminAccountLookup {
    constructor(
        @inject(TOKENS.IAccountRepository) private readonly accounts: IAccountRepository,
        @inject(TOKENS.IClock) private readonly clock: IClock,
    ) {}

    async findAccountId(wallet: string): Promise<string | null> {
        const address = wallet.toLowerCase();
        return accountOwningWalletAt(await this.accounts.findLinks([address]), address, this.clock.now());
    }

    /** 404 `NO_ACCOUNT` when the wallet never signed in with Dynamic. */
    async requireAccountId(wallet: string): Promise<string> {
        const accountId = await this.findAccountId(wallet);
        if (accountId === null) {
            throw new NotFoundError('Gamification account', wallet.toLowerCase());
        }
        return accountId;
    }
}
