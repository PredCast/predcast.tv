import { inject, injectable } from 'tsyringe';

import { TOKENS } from '@chiliztv/domain/shared/tokens';
import type { BettingChain, IBettingChainRegistry } from '@chiliztv/domain/shared/ports/IBettingChainRegistry';
import type { INetworkConfig } from '@chiliztv/domain/shared/ports/INetworkConfig';

const CHILIZ_MAINNET: BettingChain = {
    chainId: 88888,
    name: 'Chiliz',
    nativeSymbol: 'CHZ',
    explorerUrl: 'https://chiliscan.com',
};

const CHILIZ_SPICY: BettingChain = {
    chainId: 88882,
    name: 'Chiliz Spicy',
    nativeSymbol: 'CHZ',
    explorerUrl: 'https://testnet.chiliscan.com',
};

/** Only the Chiliz chain of the current NETWORK, the one the backend signer and factory live on. */
@injectable()
export class NetworkBettingChainRegistry implements IBettingChainRegistry {
    private readonly chain: BettingChain;

    constructor(@inject(TOKENS.INetworkConfig) network: INetworkConfig) {
        this.chain = network.chainId === CHILIZ_MAINNET.chainId ? CHILIZ_MAINNET : CHILIZ_SPICY;
    }

    list(): ReadonlyArray<BettingChain> {
        return [this.chain];
    }

    get(chainId: number): BettingChain | null {
        return chainId === this.chain.chainId ? this.chain : null;
    }

    defaultChain(): BettingChain {
        return this.chain;
    }
}
