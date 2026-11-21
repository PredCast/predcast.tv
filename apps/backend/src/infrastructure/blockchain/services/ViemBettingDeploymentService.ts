import { inject, injectable } from 'tsyringe';
import {
    createPublicClient,
    createWalletClient,
    http,
    keccak256,
    toBytes,
    TransactionReceiptNotFoundError,
    WaitForTransactionReceiptTimeoutError,
} from 'viem';
import { privateKeyToAccount } from 'viem/accounts';

import { PARI_MATCH_BASE_INLINE_ABI, PARI_MATCH_FACTORY_INLINE_ABI, chainFor } from '@chiliztv/blockchain';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import type { DeployTxLookup, IBettingDeploymentService, MatchMarketSetup, SentDeployTx } from '@chiliztv/domain/shared/ports/IBettingDeploymentService';
import type { INetworkConfig } from '@chiliztv/domain/shared/ports/INetworkConfig';
import type { ISignerLock } from '@chiliztv/domain/shared/ports/ISignerLock';

import { logger } from '../../logging/logger';
import { getFootballSeedingPayload } from '../markets/seedingPayload';
import { ResolverSigner } from '../signer/ResolverSigner';
import { withSignerLock } from '../signer/withSignerLock';

const MATCH_CREATED_TOPIC = keccak256(toBytes('MatchCreated(address,uint8,address)'));
const DEPLOY_RECEIPT_TIMEOUT_MS = 120_000;
const SETUP_RECEIPT_TIMEOUT_MS = 90_000;
/** Spacing between two txs of the same flow, as in ViemBlockchainService (RPC nonce propagation). */
const TX_SPACING_MS = 4_000;
/** Gas of one `createFootballMatchWithMarkets` (knockout lineup), rounded up; times the live gas price. */
const DEPLOYMENT_GAS = 2_000_000n;
const INACTIVE = 0;

const sleep = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));
type Hex = `0x${string}`;

@injectable()
export class ViemBettingDeploymentService implements IBettingDeploymentService {
    private readonly publicClient;
    /** Unwrapped: the deploy step holds the signer lock itself to report the hash before the receipt. */
    private readonly rawWalletClient;
    private readonly walletClient;
    private readonly account;
    private readonly factoryAddress: Hex;

    constructor(
        @inject(TOKENS.INetworkConfig) private readonly network: INetworkConfig,
        @inject(TOKENS.ISignerLock) private readonly signerLock: ISignerLock,
        @inject(ResolverSigner) private readonly resolver: ResolverSigner,
    ) {
        if (!network.adminPrivateKey) throw new Error('INetworkConfig.adminPrivateKey is required');
        const chain = chainFor(network.chainId === 88888 ? 'mainnet' : 'testnet');
        this.account = privateKeyToAccount(network.adminPrivateKey as Hex);
        this.publicClient = createPublicClient({ chain, transport: http(network.rpcUrl) });
        this.rawWalletClient = createWalletClient({ account: this.account, chain, transport: http(network.rpcUrl) });
        this.walletClient = withSignerLock(this.rawWalletClient, this.publicClient, signerLock);
        this.factoryAddress = network.pariMatchFactoryAddress as Hex;
    }

    signerAddress(): string {
        return this.account.address;
    }

    async deployMatchContract(
        matchName: string,
        markets: MatchMarketSetup,
        onSent: (sent: SentDeployTx) => Promise<void>,
    ): Promise<{ contractAddress: string; gasCostWei: string; marketsOpened: number }> {
        const owner = this.account.address;
        const oracle = this.resolver.requireAddress();
        const { hashes, lines } = getFootballSeedingPayload({ isKnockout: markets.isKnockout });
        const setup = {
            marketTypes: hashes,
            lines,
            extras: hashes.map(() => 0),
            groupIds: hashes.map(() => 0),
            closesAt: markets.closesAt ? Math.floor(markets.closesAt.getTime() / 1000) : 0,
            open: true,
        };
        return this.signerLock.run(async () => {
            // Read under the lock so the nonce stored with the hash is the one the tx carries.
            const nonce = await this.publicClient.getTransactionCount({ address: owner, blockTag: 'pending' });
            const hash = await this.rawWalletClient.writeContract({
                address: this.factoryAddress,
                abi: PARI_MATCH_FACTORY_INLINE_ABI,
                functionName: 'createFootballMatchWithMarkets',
                args: [matchName, owner, oracle, setup],
                nonce,
            });
            logger.info('Deploy tx sent', { matchName, txHash: hash, nonce, markets: hashes.length, closesAt: setup.closesAt });
            await onSent({ txHash: hash, nonce });
            return { ...(await this.readDeployReceipt(hash)), marketsOpened: hashes.length };
        });
    }

    async findDeployedContract(txHash: string, nonce: number | undefined): Promise<DeployTxLookup> {
        try {
            return { status: 'mined', ...(await this.readDeployReceipt(txHash as Hex)) };
        } catch (err) {
            if (!(err instanceof TransactionReceiptNotFoundError || err instanceof WaitForTransactionReceiptTimeoutError)) throw err;
        }
        if (nonce === undefined) return { status: 'pending' };
        const confirmed = await this.publicClient.getTransactionCount({ address: this.account.address, blockTag: 'latest' });
        return confirmed > nonce ? { status: 'dropped' } : { status: 'pending' };
    }

    async ensureDefaultMarketsOpen(contractAddress: string, opts: { isKnockout: boolean }): Promise<{ added: boolean; opened: number; gasCostWei: string }> {
        const address = contractAddress as Hex;
        let added = false;
        let gas = BigInt(0);
        if ((await this.marketCount(address)) === 0) {
            const { hashes, lines } = getFootballSeedingPayload(opts);
            gas += await this.sendAndConfirm(() => this.walletClient.writeContract({
                address,
                abi: PARI_MATCH_BASE_INLINE_ABI,
                functionName: 'addMarketsBatch',
                args: [hashes, lines],
                // Knockout matches carry the extra FULL_TIME_WINNER market.
                gas: opts.isKnockout ? 3_400_000n : 3_000_000n,
            }));
            added = true;
        }

        const inactive = await this.inactiveMarketIds(address);
        if (inactive.length > 0) {
            gas += await this.sendAndConfirm(() => this.walletClient.writeContract({
                address,
                abi: PARI_MATCH_BASE_INLINE_ABI,
                functionName: 'openMarketsBatch',
                args: [inactive],
                gas: opts.isKnockout ? 1_600_000n : 1_400_000n,
            }));
        }
        logger.info('Markets seeded and opened', { contractAddress, added, opened: inactive.length });
        return { added, opened: inactive.length, gasCostWei: gas.toString() };
    }

    signerBalanceWei(): Promise<bigint> {
        return this.publicClient.getBalance({ address: this.account.address });
    }

    async estimateDeploymentCostWei(): Promise<bigint> {
        return DEPLOYMENT_GAS * (await this.publicClient.getGasPrice());
    }

    private async readDeployReceipt(hash: Hex): Promise<{ contractAddress: string; gasCostWei: string }> {
        const receipt = await this.publicClient.waitForTransactionReceipt({ hash, timeout: DEPLOY_RECEIPT_TIMEOUT_MS });
        if (receipt.status === 'reverted') throw new Error(`Deploy transaction reverted (${hash})`);
        const created = receipt.logs.find((log) => log.topics[0] === MATCH_CREATED_TOPIC);
        if (!created?.topics[1]) throw new Error(`MatchCreated event missing from deploy receipt (${hash})`);
        return { contractAddress: `0x${created.topics[1].slice(26)}`, gasCostWei: (receipt.gasUsed * receipt.effectiveGasPrice).toString() };
    }

    /** Returns the gas paid, in wei. */
    private async sendAndConfirm(send: () => Promise<Hex>): Promise<bigint> {
        const hash = await send();
        const receipt = await this.publicClient.waitForTransactionReceipt({ hash, timeout: SETUP_RECEIPT_TIMEOUT_MS });
        if (receipt.status === 'reverted') throw new Error(`Transaction reverted on-chain (${hash})`);
        await sleep(TX_SPACING_MS);
        return receipt.gasUsed * receipt.effectiveGasPrice;
    }

    private async marketCount(address: Hex): Promise<number> {
        return Number(await this.publicClient.readContract({ address, abi: PARI_MATCH_BASE_INLINE_ABI, functionName: 'marketCount' }));
    }

    private async inactiveMarketIds(address: Hex): Promise<bigint[]> {
        const count = await this.marketCount(address);
        const ids: bigint[] = [];
        for (let id = 0; id < count; id++) {
            // Cast: the inline ABI types getMarketCore as a tuple; only `state` is read here.
            const core = (await this.publicClient.readContract({
                address,
                abi: PARI_MATCH_BASE_INLINE_ABI,
                functionName: 'getMarketCore',
                args: [BigInt(id)],
            })) as { state: number };
            if (core.state === INACTIVE) ids.push(BigInt(id));
        }
        return ids;
    }
}
