import { inject, injectable } from 'tsyringe';

import type { AdminContextDto } from '@chiliztv/shared';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import type { AdminRole } from '@chiliztv/domain/admin/types';
import type { IAdminWalletRepository } from '@chiliztv/domain/admin/repositories/IAdminWalletRepository';
import type { IBettingChainRegistry } from '@chiliztv/domain/shared/ports/IBettingChainRegistry';
import type { IRuntimeEnvironment } from '@chiliztv/domain/shared/ports/IRuntimeEnvironment';

@injectable()
export class GetAdminContextUseCase {
    constructor(
        @inject(TOKENS.IAdminWalletRepository) private readonly wallets: IAdminWalletRepository,
        @inject(TOKENS.IBettingChainRegistry) private readonly chains: IBettingChainRegistry,
        @inject(TOKENS.IRuntimeEnvironment) private readonly runtime: IRuntimeEnvironment,
    ) {}

    async execute(wallet: string, role: AdminRole): Promise<AdminContextDto> {
        const labels = await this.wallets.findLabels([wallet]);
        const { tier, network } = this.runtime.current();
        const chain = this.chains.defaultChain();
        return {
            wallet,
            role,
            label: labels.get(wallet.toLowerCase()) ?? null,
            environment: {
                tier,
                network,
                chainId: chain.chainId,
                chainName: chain.name,
                explorerUrl: chain.explorerUrl,
            },
        };
    }
}
