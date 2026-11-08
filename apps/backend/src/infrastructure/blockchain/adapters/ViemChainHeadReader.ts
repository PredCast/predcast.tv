import { injectable } from 'tsyringe';
import { createPublicClient, http, type PublicClient } from 'viem';

import { chainFor } from '@chiliztv/blockchain';
import type { IChainHeadReader } from '@chiliztv/domain/blockchain-indexing/ports/IChainHeadReader';

import { chilizConfig, networkType } from '../../config/chiliz.config';

@injectable()
export class ViemChainHeadReader implements IChainHeadReader {
    private readonly client: PublicClient;

    constructor() {
        this.client = createPublicClient({ chain: chainFor(networkType), transport: http(chilizConfig.rpcUrl) }) as PublicClient;
    }

    latestBlock(): Promise<bigint> {
        return this.client.getBlockNumber();
    }
}
