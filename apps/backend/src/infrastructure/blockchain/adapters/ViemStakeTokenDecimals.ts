import { inject, injectable } from 'tsyringe';
import { createPublicClient, http, type PublicClient } from 'viem';

import { chainFor } from '@chiliztv/blockchain';
import type { IStakeTokenDecimals } from '@chiliztv/domain/gamification/ports/IStakeTokenDecimals';
import type { INetworkConfig } from '@chiliztv/domain/shared/ports/INetworkConfig';
import { TOKENS } from '@chiliztv/domain/shared/tokens';

import { networkType } from '../../config/chiliz.config';
import { getTokenDecimals } from '../utils/getTokenDecimals';

/** USDC decimals of the current network's chain, read once on-chain (`getTokenDecimals` caches them). */
@injectable()
export class ViemStakeTokenDecimals implements IStakeTokenDecimals {
    private readonly client: PublicClient;

    constructor(@inject(TOKENS.INetworkConfig) private readonly network: INetworkConfig) {
        this.client = createPublicClient({ chain: chainFor(networkType), transport: http(network.rpcUrl) }) as PublicClient;
    }

    async usdcDecimals(chainId: number): Promise<number> {
        // Only the current network's chain is wired; another chain id must fail rather than guess.
        if (chainId !== this.network.chainId) {
            throw new Error(`ViemStakeTokenDecimals: chain ${chainId} is not configured (current ${this.network.chainId})`);
        }
        if (!this.network.usdcAddress) throw new Error('ViemStakeTokenDecimals: USDC address is not configured');
        return getTokenDecimals(this.client, this.network.usdcAddress as `0x${string}`);
    }
}
