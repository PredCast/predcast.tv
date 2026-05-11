import { injectable, inject } from 'tsyringe';
import {
    createWalletClient,
    createPublicClient,
    http,
    keccak256,
    toBytes,
} from 'viem';
import { privateKeyToAccount, nonceManager } from 'viem/accounts';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import { INetworkConfig } from '@chiliztv/domain/shared/ports/INetworkConfig';
import {
    IBlockchainService,
    DeployContractResult,
    CloseMarketsResult,
    CancelMarketsResult,
    FootballMarketView,
} from '@chiliztv/domain/shared/ports/IBlockchainService';
import { ExtendedOdds } from '@chiliztv/domain/shared/ports/IFootballApiService';
// Full Foundry artifact — minimal `FOOTBALL_MATCH_ABI` lacks the batch fns.
import { FACTORY_ABI, FOOTBALL_MATCH_FULL_ABI as FOOTBALL_MATCH_ABI, chainFor } from '@chiliztv/blockchain';
import { logger } from '../../logging/logger';

/* eslint-disable @typescript-eslint/no-explicit-any */

const MARKET_STATE_RESOLVED = 4;
const MATCH_CREATED_TOPIC   = '0x5969a2068f5fa459c1b0f8d90549ffd48273691f337cf3200090f8c4ded08d16';
const MARKET_WINNER         = keccak256(toBytes('WINNER'));
const MARKET_GOALS_TOTAL    = keccak256(toBytes('GOALS_TOTAL'));
const MARKET_BOTH_SCORE     = keccak256(toBytes('BOTH_SCORE'));
const TX_DELAY_MS           = 4000;

function delay(ms = TX_DELAY_MS): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function toOddsX10000(decimal: number): number {
    return Math.round(decimal * 10000);
}

/**
 * ViemBlockchainService
 * Implements IBlockchainService port.
 * Fuses BettingContractDeploymentAdapter + MarketOddsAdapter + MatchResolutionAdapter.
 * Receives all config via INetworkConfig — never reads process.env directly.
 */
@injectable()
export class ViemBlockchainService implements IBlockchainService {
    private readonly walletClient: any;
    private readonly publicClient: any;
    private readonly account: ReturnType<typeof privateKeyToAccount>;

    constructor(
        @inject(TOKENS.INetworkConfig)
        private readonly config: INetworkConfig
    ) {
        if (!config.adminPrivateKey) {
            throw new Error('INetworkConfig.adminPrivateKey is required');
        }

        const chain   = chainFor(config.chainId === 88888 ? 'mainnet' : 'testnet');
        this.account  = privateKeyToAccount(config.adminPrivateKey as `0x${string}`, { nonceManager });

        this.walletClient = createWalletClient({
            account: this.account,
            chain,
            transport: http(config.rpcUrl),
        });

        this.publicClient = createPublicClient({
            chain,
            transport: http(config.rpcUrl),
        });

        logger.info('ViemBlockchainService initialized', {
            network:         config.chainId === 88888 ? 'mainnet' : 'testnet',
            rpcUrl:          config.rpcUrl,
            factoryAddress:  config.bettingFactoryAddress,
            adminAddress:    this.account.address,
        });
    }

    // ─── IBlockchainService ───────────────────────────────────────────────────

    async deployBettingContract(
        matchName: string,
        ownerAddress: string,
        oracleAddress?: string,
    ): Promise<DeployContractResult> {
        const oracle = (oracleAddress ?? process.env.RESOLVER_ADDRESS ?? ownerAddress) as `0x${string}`;
        logger.info('Deploying FootballMatch contract', { matchName, ownerAddress, oracle });

        const hash = await this.walletClient.writeContract({
            address:      this.config.bettingFactoryAddress as `0x${string}`,
            abi:          FACTORY_ABI,
            functionName: 'createFootballMatch',
            args:         [matchName, ownerAddress as `0x${string}`, oracle],
        });

        const receipt = await this.publicClient.waitForTransactionReceipt({ hash, timeout: 120_000 });

        const matchCreatedLog = receipt.logs.find(
            (log: any) => log.topics[0] === MATCH_CREATED_TOPIC
        );
        if (!matchCreatedLog?.topics[1]) {
            throw new Error('MatchCreated event not found in transaction logs');
        }

        const contractAddress = `0x${matchCreatedLog.topics[1].slice(26)}`;
        logger.info('FootballMatch contract deployed', { contractAddress, hash });
        return { contractAddress };
    }

    async setupMarkets(contractAddress: string, odds: ExtendedOdds): Promise<void> {
        const addr     = contractAddress as `0x${string}`;
        const oddsHome  = toOddsX10000(odds.homeWin);
        const oddsOver  = odds.over25  ? toOddsX10000(odds.over25)  : 18500;
        const oddsBtts  = odds.bttsYes ? toOddsX10000(odds.bttsYes) : 17000;

        const sendAndWait = async (fn: () => Promise<`0x${string}`>) => {
            const hash = await fn();
            const receipt = await this.publicClient.waitForTransactionReceipt({ hash, timeout: 90_000 });
            if (receipt.status === 'reverted') {
                throw new Error(`Transaction reverted on-chain (hash: ${hash})`);
            }
            await delay();
        };

        // FootballMatch only exposes `addMarketWithLine` — pass `line=0` for
        // markets without a numeric line (WINNER, BTTS).
        logger.info('Adding WINNER market', { contractAddress });
        await sendAndWait(() => this.walletClient.writeContract({
            address: addr, abi: FOOTBALL_MATCH_ABI,
            functionName: 'addMarketWithLine', args: [MARKET_WINNER, oddsHome, 0],
            gas: 500_000n,
        }));

        logger.info('Adding GOALS_TOTAL market', { contractAddress });
        await sendAndWait(() => this.walletClient.writeContract({
            address: addr, abi: FOOTBALL_MATCH_ABI,
            functionName: 'addMarketWithLine', args: [MARKET_GOALS_TOTAL, oddsOver, 25],
            gas: 500_000n,
        }));

        logger.info('Adding BOTH_SCORE market', { contractAddress });
        await sendAndWait(() => this.walletClient.writeContract({
            address: addr, abi: FOOTBALL_MATCH_ABI,
            functionName: 'addMarketWithLine', args: [MARKET_BOTH_SCORE, oddsBtts, 0],
            gas: 500_000n,
        }));

        logger.info('Opening markets', { contractAddress });
        for (let id = 0; id < 3; id++) {
            await sendAndWait(() => this.walletClient.writeContract({
                chain: undefined,
                address: addr, abi: FOOTBALL_MATCH_ABI,
                functionName: 'openMarket', args: [BigInt(id)],
                gas: 200_000n,
            }));
        }

        logger.info('Markets created and opened', { contractAddress, count: 3 });
    }

    async resolveMarkets(
        contractAddress: string,
        homeScore: number,
        awayScore: number
    ): Promise<number> {
        const addr = contractAddress as `0x${string}`;

        let count: number;
        try {
            count = Number(await this.publicClient.readContract({
                address: addr, abi: FOOTBALL_MATCH_ABI, functionName: 'marketCount',
            }));
        } catch (err: any) {
            logger.error('resolveMarkets: failed to read marketCount', { contractAddress, error: err?.message ?? err });
            return 0;
        }
        if (count === 0) return 0;

        // Lifecycle: Inactive(0) → Open(1) → Closed(3) → Resolved(4).
        // Batch path: closeMarketsBatch (atomic across all Open markets),
        // then resolveMarketsBatch (atomic across all Closed markets).
        // Eliminates the race with concurrent ResolveMarketsJob /
        // SyncMatchesJob ticks that previously left this method warning
        // "Market not in Closed state" with state=Resolved.
        const MARKET_STATE_OPEN = 1;
        const MARKET_STATE_CLOSED = 3;

        const readStates = async (): Promise<{ id: number; state: number }[]> =>
            Promise.all(
                Array.from({ length: count }, async (_, id) => {
                    try {
                        const core = await this.publicClient.readContract({
                            address: addr, abi: FOOTBALL_MATCH_ABI,
                            functionName: 'getMarketCore', args: [BigInt(id)],
                        }) as { state: number };
                        return { id, state: core.state };
                    } catch (err: any) {
                        logger.warn('resolveMarkets: getMarketCore failed', { contractAddress, id, error: err?.message ?? err });
                        return { id, state: -1 };
                    }
                })
            );

        let states = await readStates();

        const openIds = states.filter(s => s.state === MARKET_STATE_OPEN).map(s => BigInt(s.id));
        if (openIds.length > 0) {
            try {
                const hash = await this.walletClient.writeContract({
                    chain: undefined,
                    address: addr, abi: FOOTBALL_MATCH_ABI,
                    functionName: 'closeMarketsBatch', args: [openIds],
                });
                const receipt = await this.publicClient.waitForTransactionReceipt({ hash, timeout: 90_000 });
                if (receipt.status === 'reverted') {
                    throw new Error(`closeMarketsBatch reverted (hash: ${hash})`);
                }
                await delay();
                logger.info('Markets closed (batch) for resolution', {
                    contractAddress: contractAddress.slice(0, 10) + '…',
                    closed: openIds.length, ids: openIds.map(Number), txHash: hash,
                });
                states = await readStates();
            } catch (err: any) {
                logger.error('resolveMarkets: closeMarketsBatch failed', {
                    contractAddress, ids: openIds.map(Number), error: err?.message ?? err,
                });
                // Continue: maybe some markets are already Closed and can still be resolved.
            }
        }

        const toResolve = states.filter(s => s.state === MARKET_STATE_CLOSED);
        if (toResolve.length === 0) {
            const alreadyResolved = states.filter(s => s.state === MARKET_STATE_RESOLVED).length;
            logger.debug('resolveMarkets: no Closed markets to resolve', {
                contractAddress, count, alreadyResolved,
            });
            return 0;
        }

        const ids = toResolve.map(s => BigInt(s.id));
        const results = toResolve.map(s => BigInt(this.computeResult(s.id, homeScore, awayScore)));

        try {
            const hash = await this.walletClient.writeContract({
                chain: undefined,
                address: addr, abi: FOOTBALL_MATCH_ABI,
                functionName: 'resolveMarketsBatch', args: [ids, results],
            });
            const receipt = await this.publicClient.waitForTransactionReceipt({ hash, timeout: 90_000 });
            if (receipt.status === 'reverted') {
                throw new Error(`resolveMarketsBatch reverted (hash: ${hash})`);
            }
            await delay();
            logger.info('Markets resolved (batch)', {
                contractAddress: contractAddress.slice(0, 10) + '…',
                resolved: toResolve.length,
                ids: ids.map(Number),
                results: results.map(Number),
                txHash: hash,
            });
            return toResolve.length;
        } catch (err: any) {
            logger.error('resolveMarkets: resolveMarketsBatch failed', {
                contractAddress, ids: ids.map(Number), error: err?.message ?? err,
            });
            return 0;
        }
    }

    async syncOdds(contractAddress: string, odds: ExtendedOdds): Promise<void> {
        const addr = contractAddress as `0x${string}`;
        const reps: { id: number; decimal: number }[] = [
            { id: 0, decimal: odds.homeWin },
            ...(odds.over25  != null ? [{ id: 1, decimal: odds.over25  }] : []),
            ...(odds.bttsYes != null ? [{ id: 2, decimal: odds.bttsYes }] : []),
        ];

        let marketCount: number;
        try {
            marketCount = Number(await this.publicClient.readContract({
                address: addr, abi: FOOTBALL_MATCH_ABI, functionName: 'marketCount',
            }));
        } catch {
            return;
        }

        for (const { id, decimal } of reps) {
            if (id >= marketCount) continue;
            const newOdds = toOddsX10000(decimal);
            try {
                const current = Number(await this.publicClient.readContract({
                    address: addr, abi: FOOTBALL_MATCH_ABI,
                    functionName: 'getCurrentOdds', args: [BigInt(id)],
                }));
                if (current === newOdds) continue;

                await this.walletClient.writeContract({
                    chain: undefined,
                    address: addr, abi: FOOTBALL_MATCH_ABI,
                    functionName: 'setMarketOdds', args: [BigInt(id), newOdds],
                });
                await delay();
            } catch (err: any) {
                logger.warn('setMarketOdds failed', { contractAddress, id, error: err?.message ?? err });
            }
        }
    }

    async closeOpenMarketsForMatch(contractAddress: string): Promise<CloseMarketsResult> {
        const addr = contractAddress as `0x${string}`;
        const MARKET_STATE_OPEN = 1;

        let count: number;
        try {
            count = Number(await this.publicClient.readContract({
                address: addr, abi: FOOTBALL_MATCH_ABI, functionName: 'marketCount',
            }));
        } catch (err: any) {
            logger.error('closeOpenMarketsForMatch: failed to read marketCount', { contractAddress, error: err?.message ?? err });
            return { closed: 0, skipped: 0 };
        }
        if (count === 0) return { closed: 0, skipped: 0 };

        const openIds: bigint[] = [];
        for (let id = 0; id < count; id++) {
            try {
                const core = await this.publicClient.readContract({
                    address: addr, abi: FOOTBALL_MATCH_ABI,
                    functionName: 'getMarketCore', args: [BigInt(id)],
                }) as { state: number };
                if (core.state === MARKET_STATE_OPEN) openIds.push(BigInt(id));
            } catch (err: any) {
                logger.warn('closeOpenMarketsForMatch: getMarketCore failed', { contractAddress, id, error: err?.message ?? err });
            }
        }

        const skipped = count - openIds.length;
        if (openIds.length === 0) {
            logger.debug('closeOpenMarketsForMatch: no Open markets', { contractAddress, skipped });
            return { closed: 0, skipped };
        }

        try {
            const hash = await this.walletClient.writeContract({
                chain: undefined,
                address: addr, abi: FOOTBALL_MATCH_ABI,
                functionName: 'closeMarketsBatch', args: [openIds],
            });
            await this.publicClient.waitForTransactionReceipt({ hash, timeout: 90_000 });
            await delay();
            logger.info('Markets closed (batch)', {
                contractAddress: contractAddress.slice(0, 10) + '…',
                closed: openIds.length,
                ids: openIds.map(Number),
                txHash: hash,
            });
            return { closed: openIds.length, skipped };
        } catch (err: any) {
            logger.error('closeOpenMarketsForMatch: closeMarketsBatch failed', {
                contractAddress, ids: openIds.map(Number), error: err?.message ?? err,
            });
            return { closed: 0, skipped };
        }
    }

    async cancelOpenMarketsForMatch(contractAddress: string, reason: string): Promise<CancelMarketsResult> {
        const addr = contractAddress as `0x${string}`;
        const MARKET_STATE_RESOLVED_OR_CANCELLED = new Set([4, 5]);

        let count: number;
        try {
            count = Number(await this.publicClient.readContract({
                address: addr, abi: FOOTBALL_MATCH_ABI, functionName: 'marketCount',
            }));
        } catch (err: any) {
            logger.error('cancelOpenMarketsForMatch: failed to read marketCount', { contractAddress, error: err?.message ?? err });
            return { cancelled: 0, skipped: 0 };
        }
        if (count === 0) return { cancelled: 0, skipped: 0 };

        let cancelled = 0;
        let skipped = 0;
        for (let id = 0; id < count; id++) {
            try {
                const core = await this.publicClient.readContract({
                    address: addr, abi: FOOTBALL_MATCH_ABI,
                    functionName: 'getMarketCore', args: [BigInt(id)],
                }) as { state: number };
                if (MARKET_STATE_RESOLVED_OR_CANCELLED.has(core.state)) {
                    skipped++;
                    continue;
                }
                const hash = await this.walletClient.writeContract({
                    chain: undefined,
                    address: addr, abi: FOOTBALL_MATCH_ABI,
                    functionName: 'cancelMarket', args: [BigInt(id), reason],
                });
                await this.publicClient.waitForTransactionReceipt({ hash, timeout: 90_000 });
                await delay();
                cancelled++;
                logger.info('Market cancelled', {
                    contractAddress: contractAddress.slice(0, 10) + '…',
                    id, reason, txHash: hash,
                });
            } catch (err: any) {
                logger.error('cancelOpenMarketsForMatch: cancelMarket failed', {
                    contractAddress, id, reason, error: err?.message ?? err,
                });
            }
        }
        return { cancelled, skipped };
    }

    async readFootballMarket(contractAddress: string, marketId: bigint): Promise<FootballMarketView> {
        const addr = contractAddress as `0x${string}`;
        // Tuple shape per FootballMatch.sol:184 —
        // [marketTypeStr, line, maxSelections, state, currentOdds, result, totalPool].
        const raw = await this.publicClient.readContract({
            address: addr,
            abi: FOOTBALL_MATCH_ABI,
            functionName: 'getFootballMarket',
            args: [marketId],
        }) as readonly [string, number, number, number, number, bigint, bigint];
        const marketType = typeof raw[0] === 'string' ? raw[0] : '';
        const line = Number(raw[1] ?? 0);
        const maxSelections = Number(raw[2] ?? 0);
        return {
            marketType,
            line: Number.isFinite(line) ? line : 0,
            maxSelections: Number.isFinite(maxSelections) ? maxSelections : 0,
        };
    }

    getAdminAddress(): string {
        return this.account.address;
    }

    // ─── Private ─────────────────────────────────────────────────────────────

    private computeResult(marketId: number, home: number, away: number): number {
        if (marketId === 0) {
            if (home > away) return 0;
            if (away > home) return 2;
            return 1;
        }
        if (marketId === 1) return home + away > 2 ? 1 : 0;
        if (marketId === 2) return home > 0 && away > 0 ? 1 : 0;
        return 0;
    }
}
