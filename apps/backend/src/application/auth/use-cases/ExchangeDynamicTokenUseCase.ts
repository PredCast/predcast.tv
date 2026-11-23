import { inject, injectable } from 'tsyringe';

import { TOKENS } from '@chiliztv/domain/shared/tokens';
import { UnauthorizedError } from '@chiliztv/domain/shared/errors/UnauthorizedError';
import type { IAccountRepository } from '@chiliztv/domain/identity/repositories/IAccountRepository';
import type { IIdentityTokenVerifier } from '@chiliztv/domain/identity/ports/IIdentityTokenVerifier';
import { planWalletLinks } from '@chiliztv/domain/identity/policies/walletLinkPlan';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';

import { logger } from '../../../infrastructure/logging/logger';

export interface TokenExchangeInput {
    readonly walletAddress: string;
    readonly dynamicJwt?: string;
}

/** Account part of the backend JWT; absent when the request carried no Dynamic proof (legacy flow). */
export type ExchangedIdentity =
    | { readonly proven: true; readonly walletAddress: string; readonly accountId: string; readonly dynamicUserId: string }
    | { readonly proven: false; readonly walletAddress: string };

export interface ExchangeOptions {
    /** AUTH_REQUIRE_DYNAMIC_JWT: refuse requests without a Dynamic JWT. */
    readonly requireDynamicJwt: boolean;
}

/**
 * POST /auth/token: proves the wallet with the Dynamic JWT, upserts the account and syncs its
 * wallets (§8.6). A wallet active on another account is never moved: logged for manual review.
 */
@injectable()
export class ExchangeDynamicTokenUseCase {
    constructor(
        @inject(TOKENS.IIdentityTokenVerifier) private readonly verifier: IIdentityTokenVerifier,
        @inject(TOKENS.IAccountRepository) private readonly accounts: IAccountRepository,
        @inject(TOKENS.IClock) private readonly clock: IClock,
    ) {}

    async execute(input: TokenExchangeInput, options: ExchangeOptions): Promise<ExchangedIdentity> {
        const walletAddress = input.walletAddress.toLowerCase();
        if (!input.dynamicJwt) {
            if (options.requireDynamicJwt) throw new UnauthorizedError('A Dynamic session token is required');
            return { proven: false, walletAddress };
        }

        const result = await this.verifier.verify(input.dynamicJwt);
        if (!result.ok) {
            logger.warn('Dynamic token rejected', { walletAddress, reason: result.reason });
            throw new UnauthorizedError(`Dynamic token rejected (${result.reason})`);
        }
        const { identity } = result;
        if (!identity.wallets.includes(walletAddress)) {
            logger.warn('Wallet not in the Dynamic verified credentials', { walletAddress });
            throw new UnauthorizedError('Wallet not verified by this session');
        }

        const now = this.clock.now();
        const account = await this.accounts.upsertByDynamicUserId(identity.subject, walletAddress, now);
        await this.syncWallets(account.id, identity.wallets, now);
        return { proven: true, walletAddress, accountId: account.id, dynamicUserId: identity.subject };
    }

    private async syncWallets(accountId: string, wallets: ReadonlyArray<string>, now: Date): Promise<void> {
        const [existing, accountLinks] = await Promise.all([
            this.accounts.findLinks(wallets),
            this.accounts.findActiveLinksOfAccount(accountId),
        ]);
        const plan = planWalletLinks(accountId, wallets, existing, accountLinks);

        const conflicts = [...plan.conflicts];
        for (const wallet of plan.link) if (!(await this.accounts.link(wallet, accountId, now))) conflicts.push(wallet);
        for (const wallet of plan.relink) if (!(await this.accounts.relink(wallet, accountId, now))) conflicts.push(wallet);
        for (const wallet of plan.unlink) await this.accounts.unlink(wallet, accountId, now);

        for (const wallet of conflicts) logger.warn('Wallet link conflict', { accountId, walletAddress: wallet });
        if (plan.link.length + plan.relink.length + plan.unlink.length > 0) {
            logger.info('Account wallets synced', { accountId, linked: plan.link.length, relinked: plan.relink.length, unlinked: plan.unlink.length });
        }
    }
}
