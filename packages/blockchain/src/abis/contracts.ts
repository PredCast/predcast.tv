import type { Abi } from 'viem';
import LiquidityPoolJson from './json/LiquidityPool.json';
import ChilizSwapRouterJson from './json/ChilizSwapRouter.json';
import StreamWalletJson from './json/StreamWallet.json';
import StreamWalletFactoryJson from './json/StreamWalletFactory.json';
import BettingMatchFactoryJson from './json/BettingMatchFactory.json';
import BettingMatchJson from './json/BettingMatch.json';
import FootballMatchJson from './json/FootballMatch.json';
import BasketballMatchJson from './json/BasketballMatch.json';

// JSON imports lose `as const` literal typing, but viem's runtime calls (readContract,
// writeContract, getLogs with `event:`) accept Abi at the type level. For full literal
// inference (compile-time function-name autocompletion), the frontend uses the wagmi-
// generated hooks instead.
export const LIQUIDITY_POOL_ABI = LiquidityPoolJson.abi as Abi;
export const CHILIZ_SWAP_ROUTER_ABI = ChilizSwapRouterJson.abi as Abi;
export const STREAM_WALLET_ABI = StreamWalletJson.abi as Abi;
export const STREAM_WALLET_FACTORY_ABI = StreamWalletFactoryJson.abi as Abi;
export const BETTING_MATCH_FACTORY_ABI = BettingMatchFactoryJson.abi as Abi;
export const BETTING_MATCH_ABI = BettingMatchJson.abi as Abi;
export const FOOTBALL_MATCH_FULL_ABI = FootballMatchJson.abi as Abi;
export const BASKETBALL_MATCH_ABI = BasketballMatchJson.abi as Abi;
