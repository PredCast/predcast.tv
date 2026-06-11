import { injectable } from 'tsyringe';
import { createPublicClient, formatUnits, http } from 'viem';
import { chilizConfig, networkType } from '../../config/chiliz.config';
import { ERC20_ABI, chainFor } from '@chiliztv/blockchain';
import { logger } from '../../logging';
import { IFanTokenRepository, UserTokenBalance } from '@chiliztv/domain/fan-tokens/repositories/IFanTokenRepository';

const FEATURED_THRESHOLD = 100;

/**
 * @notice Blockchain adapter for fan token operations
 * @dev Implements IFanTokenRepository using viem to read from blockchain
 */
@injectable()
export class FanTokenAdapter implements IFanTokenRepository {
  private publicClient;
  // decimals are immutable per contract — cached for the process lifetime.
  private readonly decimalsCache = new Map<string, number>();

  constructor() {
    const chain = chainFor(networkType);
    this.publicClient = createPublicClient({
      chain,
      transport: http(chilizConfig.rpcUrl)
    });
    logger.info('FanTokenAdapter initialized', { network: networkType, chain: chain.name });
  }

  private async getTokenDecimals(tokenAddress: string): Promise<number> {
    const key = tokenAddress.toLowerCase();
    const cached = this.decimalsCache.get(key);
    if (cached !== undefined) return cached;
    const decimals = Number(await this.publicClient.readContract({
      address: tokenAddress as `0x${string}`,
      abi: ERC20_ABI,
      functionName: 'decimals',
    }));
    this.decimalsCache.set(key, decimals);
    return decimals;
  }

  /**
   * @notice Get token balance for a specific token, scaled by the
   * contract-reported decimals (mainnet fan tokens are 0-dp, wrapped
   * variants and Spicy mocks are 18-dp — raw units are never comparable).
   * @return Human-readable token balance
   */
  private async getTokenBalance(walletAddress: string, tokenAddress: string): Promise<number> {
    try {
      logger.debug('Reading token balance from blockchain', { walletAddress, tokenAddress });

      const [balance, decimals] = await Promise.all([
        this.publicClient.readContract({
          address: tokenAddress as `0x${string}`,
          abi: ERC20_ABI,
          functionName: 'balanceOf',
          args: [walletAddress as `0x${string}`],
        }),
        this.getTokenDecimals(tokenAddress),
      ]);

      const balanceNumber = Number(formatUnits(balance as bigint, decimals));
      logger.debug('Token balance read successfully', { tokenAddress, balance: balanceNumber });
      return balanceNumber;
    } catch (error) {
      logger.error('Error reading token balance from blockchain', {
        tokenAddress,
        walletAddress,
        error: error instanceof Error ? error.message : 'Unknown error'
      });
      return 0;
    }
  }

  /**
   * @notice Get all fan token balances for a user
   * @param walletAddress User's wallet address
   * @return Promise resolving to user token balance aggregate
   */
  async getUserBalances(walletAddress: string): Promise<UserTokenBalance> {
    logger.info('Fetching fan token balances from blockchain', { walletAddress });

    const tokenBalances = [];
    let totalBalance = 0;

    // Fetch balances for all supported tokens from blockchain
    for (const token of chilizConfig.tokens) {
      const balance = await this.getTokenBalance(walletAddress, token.address);

      tokenBalances.push({
        token: {
          name: token.name,
          symbol: token.symbol,
          address: token.address
        },
        balance
      });

      if (balance > 0) {
        totalBalance += balance;
      }
    }

    const isFeatured = totalBalance >= FEATURED_THRESHOLD;

    logger.info('Fan token balances fetched successfully from blockchain', {
      walletAddress,
      totalBalance,
      isFeatured,
      tokensWithBalance: tokenBalances.filter(tb => tb.balance > 0).length
    });

    return {
      walletAddress,
      totalBalance,
      tokenBalances,
      isFeatured
    };
  }
}
