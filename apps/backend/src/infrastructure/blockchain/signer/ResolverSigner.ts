import { inject, injectable } from 'tsyringe';
import { createPublicClient, createWalletClient, http, keccak256, toBytes } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';

import { chainFor, FOOTBALL_PARI_MATCH_INLINE_ABI, PARI_MATCH_BASE_INLINE_ABI } from '@chiliztv/blockchain';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import type { FootballScoreInput } from '@chiliztv/domain/shared/ports/IBlockchainService';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import type { ILockService } from '@chiliztv/domain/shared/ports/ILockService';
import type { INetworkConfig } from '@chiliztv/domain/shared/ports/INetworkConfig';

import { logger } from '../../logging/logger';
import { KeyedSignerLock, signerLockKey } from './RedisSignerLock';
import { withSignerLock } from './withSignerLock';

type Hex = `0x${string}`;

export const RESOLVER_ROLE = keccak256(toBytes('RESOLVER_ROLE'));

export interface ResolveByScoreRequest {
    address: Hex;
    abi: typeof FOOTBALL_PARI_MATCH_INLINE_ABI;
    functionName: 'resolveByScore';
    args: readonly [{
        homeGoals: number; awayGoals: number; htHomeGoals: number; htAwayGoals: number;
        firstScorerId: number; aetHomeGoals: number; aetAwayGoals: number; penWinner: number;
    }];
}

/** AET defaults to the 90' score (FULL_TIME_WINNER mirrors WINNER); penWinner 255 = no shootout. */
export function resolveByScoreRequest(address: Hex, score: FootballScoreInput): ResolveByScoreRequest {
    return {
        address,
        abi: FOOTBALL_PARI_MATCH_INLINE_ABI,
        functionName: 'resolveByScore',
        args: [{
            homeGoals: score.homeGoals,
            awayGoals: score.awayGoals,
            htHomeGoals: score.htHomeGoals ?? 0,
            htAwayGoals: score.htAwayGoals ?? 0,
            firstScorerId: score.firstScorerId ?? 0,
            aetHomeGoals: score.aetHomeGoals ?? score.homeGoals,
            aetAwayGoals: score.aetAwayGoals ?? score.awayGoals,
            penWinner: score.penWinner ?? 255,
        }],
    };
}

/**
 * Oracle key (RESOLVER_PRIVATE_KEY), with its own nonce lock. Matches deployed before the factory
 * required a distinct oracle hold RESOLVER_ROLE on the admin key: those resolve with the admin writer.
 */
@injectable()
export class ResolverSigner {
    private readonly account;
    private readonly publicClient;
    private readonly walletClient;

    constructor(
        @inject(TOKENS.INetworkConfig) network: INetworkConfig,
        @inject(TOKENS.ILockService) locks: ILockService,
        @inject(TOKENS.IClock) clock: IClock,
    ) {
        const chain = chainFor(network.chainId === 88888 ? 'mainnet' : 'testnet');
        this.publicClient = createPublicClient({ chain, transport: http(network.rpcUrl) });
        if (!network.resolverPrivateKey) {
            this.account = null;
            this.walletClient = null;
            return;
        }
        this.account = privateKeyToAccount(network.resolverPrivateKey as Hex);
        const raw = createWalletClient({ account: this.account, chain, transport: http(network.rpcUrl) });
        const lock = new KeyedSignerLock(locks, clock, signerLockKey(network.chainId, network.resolverPrivateKey));
        this.walletClient = withSignerLock(raw, this.publicClient, lock);
    }

    address(): Hex | null {
        return this.account?.address ?? null;
    }

    /** Oracle address for a new match; the factory rejects the owner or operator as oracle. */
    requireAddress(): Hex {
        const address = this.address();
        if (!address) throw new Error('RESOLVER_PRIVATE_KEY is required to deploy a match (the oracle must differ from the owner)');
        return address;
    }

    /** Sends resolveByScore with the oracle key when it holds RESOLVER_ROLE on the match, else with `adminWrite`. */
    async resolveByScore(request: ResolveByScoreRequest, adminWrite: (request: ResolveByScoreRequest) => Promise<Hex>): Promise<Hex> {
        if (this.walletClient && (await this.holdsRole(request.address))) {
            return this.walletClient.writeContract(request);
        }
        return adminWrite(request);
    }

    private async holdsRole(match: Hex): Promise<boolean> {
        if (!this.account) return false;
        try {
            return await this.publicClient.readContract({
                address: match,
                abi: PARI_MATCH_BASE_INLINE_ABI,
                functionName: 'hasRole',
                args: [RESOLVER_ROLE, this.account.address],
            });
        } catch (err) {
            logger.warn('RESOLVER_ROLE check failed, resolving with the admin key', {
                contractAddress: match,
                error: err instanceof Error ? err.message : String(err),
            });
            return false;
        }
    }
}
