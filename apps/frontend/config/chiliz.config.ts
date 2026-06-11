/**
 * Configuration pour les adresses de contrat et RPC selon le réseau (testnet/mainnet)
 */

export interface ChilizToken {
    name: string;
    symbol: string;
    tokenAddress?: string;
    testnetTokenAddress?: string;
}

export interface ChilizNetworkConfig {
    rpcUrl: string;
    chainId: number;
    /** PariMatchFactory — deploys FootballPariMatch / BasketballPariMatch proxies. */
    pariMatchFactory: `0x${string}`;
    streamWalletFactory: `0x${string}`;
    /** Unified swap router (Kayen adapter). Source of multi-asset bets,
     *  donations, and subscriptions. No more LP deposits in parimutuel model. */
    chilizSwapRouter: `0x${string}`;
    /** LeaderboardRewards proxy — epoch-based merkle distribution of the
     *  leaderboard fee split (default 1% of every resolved market). */
    leaderboardRewards: `0x${string}`;
    /** USDC token — settlement currency for stakes, payouts, refunds. */
    usdc: `0x${string}`;
    /** Wrapped CHZ — used by the swap router's native-CHZ swap path. */
    wchz: `0x${string}`;
    tokens: ChilizToken[];
}

const TESTNET_TOKENS: ChilizToken[] = [
    {
        name: 'Paris Saint-Germain',
        symbol: 'PSG',
        testnetTokenAddress: '0x7F73C50748560BD2B286a4c7bF6a805cFb6f735d'
    },
    {
        name: 'Tottenham Hotspur',
        symbol: 'SPURS',
        testnetTokenAddress: '0x9B9C9AAa74678FcF4E1c76eEB1fa969A8E7254f8' 
    },
    {
        name: 'FC Barcelona',
        symbol: 'BAR',
        testnetTokenAddress: '0x7F73C50748560BD2B286a4c7bF6a805cFb6f735d' 
    },
    {
        name: 'AC Milan',
        symbol: 'ACM',
        testnetTokenAddress: '0x641d040dB51398Ba3a4f2d7839532264EcdCc3aE' 
    },
    {
        name: 'OG',
        symbol: 'OG',
        testnetTokenAddress: '0xEc1C46424E20671d9b21b9336353EeBcC8aEc7b5' 
    },
    {
        name: 'Manchester City',
        symbol: 'CITY',
        testnetTokenAddress: '0x66F80ddAf5ccfbb082A0B0Fae3F21eA19f6B88ef' 
    },
    {
        name: 'Arsenal',
        symbol: 'AFC',
        testnetTokenAddress: '0x44B190D30198F2E585De8974999a28f5c68C6E0F' 
    },
    {
        name: 'Flamengo',
        symbol: 'MENGO',
        testnetTokenAddress: '0x1CC71168281dd78fF004ba6098E113bbbCBDc914' 
    },
    {
        name: 'Juventus',
        symbol: 'JUV',
        testnetTokenAddress: '0x945EeD98f5CBada87346028aD0BeE0eA66849A0e' 
    },
    {
        name: 'Napoli',
        symbol: 'NAP',
        testnetTokenAddress: '0x8DBe49c4Dcde110616fafF53b39270E1c48F861a' 
    },
    {
        name: 'Atletico De Madrid',
        symbol: 'ATM',
        testnetTokenAddress: '0xc926130FA2240e16A41c737d54c1d9b1d4d45257'
    }
];

// Mainnet configuration (Chiliz Chain Mainnet).
// Curated to the fan tokens with real Kayen liquidity (docs/FAN_TOKENS_MAINNET.md
// pool depths, 2026-06-11) — offering a shallow-pool token produces brutal
// price impact on every swap. Three families:
//  - underlying CAP-20 (0 dp) — what Socios users hold; router wraps on swap
//  - Kayen-wrapped W* (18 dp, fractionable) — what Kayen UI buyers hold
//  - PSG-L legacy 18-dp PSG (0xFe1d…) — own direct WCHZ pool, still routable
const MAINNET_TOKENS: ChilizToken[] = [
    { name: 'Corinthians',          symbol: 'SCCP',    tokenAddress: '0x20BFeab58f8bE903753d037Ba7e307fc77c97388' },
    { name: 'Paris Saint-Germain',  symbol: 'PSG',     tokenAddress: '0xc2661815C69c2B3924D3dd0c2C1358A1E38A3105' },
    { name: 'Sauber F1 Team',       symbol: 'SAUBER',  tokenAddress: '0xcF6d626203011E5554c82BaBe17DD7CDc4EE86bF' },
    { name: 'FC Barcelona',         symbol: 'BAR',     tokenAddress: '0xFD3C73b3B09D418841dd6Aff341b2d6e3abA433b' },
    { name: 'Leeds United',         symbol: 'LUFC',    tokenAddress: '0xF67A8a4299f7EBF0c58DbFb38941D0867f300C30' },
    { name: 'Manchester City',      symbol: 'CITY',    tokenAddress: '0x6401b29F40a02578Ae44241560625232A01B3F79' },
    { name: 'Wrapped Corinthians',         symbol: 'WSCCP',   tokenAddress: '0x89c2b844Da2B9b12eE704E2b544cEC064a9243a2' },
    { name: 'Wrapped Paris Saint-Germain', symbol: 'WPSG',    tokenAddress: '0x476eF844B3E8318b3bc887a7db07a1A0FEde5557' },
    { name: 'Wrapped Sauber F1 Team',      symbol: 'WSAUBER', tokenAddress: '0x9632E5D03Bb7568b68096AbF34B1367B87295d82' },
    { name: 'Wrapped FC Barcelona',        symbol: 'WBAR',    tokenAddress: '0xbaAAEF59F4A6C11cC87FF75EAa7a386e753b2666' },
    { name: 'Wrapped Leeds United',        symbol: 'WLUFC',   tokenAddress: '0x2D271B3826090872a7A79DD69FFe660367f8579d' },
    { name: 'Wrapped Manchester City',     symbol: 'WCITY',   tokenAddress: '0x368F1EB2E4FA30C1C5957980C576Df6163575416' },
    { name: 'Paris Saint-Germain (Legacy)', symbol: 'PSG-L',  tokenAddress: '0xFe1d4A935df7A4A52F835f6104C97AF9D72217f2' }
];

const NETWORK = (process.env.NEXT_PUBLIC_NETWORK || process.env.NETWORK || 'testnet').toLowerCase();

const ZERO = '0x0000000000000000000000000000000000000000' as const;

const TESTNET_PARI_MATCH_FACTORY = (process.env.NEXT_PUBLIC_PARI_MATCH_FACTORY_ADDRESS || ZERO) as `0x${string}`;
const MAINNET_PARI_MATCH_FACTORY = (process.env.NEXT_PUBLIC_PARI_MATCH_FACTORY_ADDRESS_MAINNET || ZERO) as `0x${string}`;

const TESTNET_STREAM_WALLET_FACTORY = (process.env.NEXT_PUBLIC_STREAM_WALLET_FACTORY_ADDRESS || ZERO) as `0x${string}`;
const MAINNET_STREAM_WALLET_FACTORY = (process.env.NEXT_PUBLIC_STREAM_WALLET_FACTORY_ADDRESS_MAINNET || ZERO) as `0x${string}`;

const TESTNET_SWAP_ROUTER = (process.env.NEXT_PUBLIC_CHILIZ_SWAP_ROUTER_ADDRESS || ZERO) as `0x${string}`;
const MAINNET_SWAP_ROUTER = (process.env.NEXT_PUBLIC_CHILIZ_SWAP_ROUTER_ADDRESS_MAINNET || ZERO) as `0x${string}`;

const TESTNET_LEADERBOARD = (process.env.NEXT_PUBLIC_LEADERBOARD_REWARDS_ADDRESS || ZERO) as `0x${string}`;
const MAINNET_LEADERBOARD = (process.env.NEXT_PUBLIC_LEADERBOARD_REWARDS_ADDRESS_MAINNET || ZERO) as `0x${string}`;

const TESTNET_USDC = (process.env.NEXT_PUBLIC_USDC_ADDRESS || ZERO) as `0x${string}`;
const MAINNET_USDC = (process.env.NEXT_PUBLIC_USDC_ADDRESS_MAINNET || ZERO) as `0x${string}`;

const TESTNET_WCHZ = (process.env.NEXT_PUBLIC_WCHZ_ADDRESS || ZERO) as `0x${string}`;
const MAINNET_WCHZ = (process.env.NEXT_PUBLIC_WCHZ_ADDRESS_MAINNET || ZERO) as `0x${string}`;

const TESTNET_CONFIG: ChilizNetworkConfig = {
    rpcUrl: 'https://spicy-rpc.chiliz.com',
    chainId: 88882,
    pariMatchFactory: TESTNET_PARI_MATCH_FACTORY,
    streamWalletFactory: TESTNET_STREAM_WALLET_FACTORY,
    chilizSwapRouter: TESTNET_SWAP_ROUTER,
    leaderboardRewards: TESTNET_LEADERBOARD,
    usdc: TESTNET_USDC,
    wchz: TESTNET_WCHZ,
    tokens: TESTNET_TOKENS.map(token => ({
        ...token,
        tokenAddress: token.testnetTokenAddress
    }))
};

const MAINNET_CONFIG: ChilizNetworkConfig = {
    // publicnode over rpc.chiliz.com: the official balancer serves nodes up to
    // ~70k blocks stale, which makes balances and pools flicker on reads.
    rpcUrl: 'https://chiliz-rpc.publicnode.com',
    chainId: 88888,
    pariMatchFactory: MAINNET_PARI_MATCH_FACTORY,
    streamWalletFactory: MAINNET_STREAM_WALLET_FACTORY,
    chilizSwapRouter: MAINNET_SWAP_ROUTER,
    leaderboardRewards: MAINNET_LEADERBOARD,
    usdc: MAINNET_USDC,
    wchz: MAINNET_WCHZ,
    tokens: MAINNET_TOKENS
};

export const chilizConfig: ChilizNetworkConfig = NETWORK === 'mainnet' ? MAINNET_CONFIG : TESTNET_CONFIG;

export const networkType: 'testnet' | 'mainnet' = NETWORK === 'mainnet' ? 'mainnet' : 'testnet';

export function getTokenAddress(symbol: string): string | undefined {
    const token = chilizConfig.tokens.find(t => t.symbol.toUpperCase() === symbol.toUpperCase());
    return token?.tokenAddress || token?.testnetTokenAddress;
}

if (typeof window !== 'undefined') {
    // Surface the FULL set of addresses the frontend is reading from env so
    // a stale `.env` (or a missing `.env.local`) is immediately visible — if
    // any of these are 0x0000…, that env var didn't load.
    console.log(`Chiliz Network Configuration: ${networkType.toUpperCase()}`);
    console.log(`   RPC URL                : ${chilizConfig.rpcUrl}`);
    console.log(`   Chain ID               : ${chilizConfig.chainId}`);
    console.log(`   PariMatchFactory       : ${chilizConfig.pariMatchFactory}`);
    console.log(`   StreamWalletFactory    : ${chilizConfig.streamWalletFactory}`);
    console.log(`   ChilizSwapRouter       : ${chilizConfig.chilizSwapRouter}`);
    console.log(`   LeaderboardRewards     : ${chilizConfig.leaderboardRewards}`);
    console.log(`   USDC                   : ${chilizConfig.usdc}`);
    console.log(`   WCHZ                   : ${chilizConfig.wchz}`);
    console.log(`   Fan tokens             : ${chilizConfig.tokens.length}`);
}

