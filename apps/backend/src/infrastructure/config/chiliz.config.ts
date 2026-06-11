import { config } from 'dotenv';
import { logger } from '../logging/logger';

config();

export interface ChilizToken {
    name: string;
    symbol: string;
    address: string;
}

export interface ChilizNetworkConfig {
    rpcUrl: string;
    tokens: ChilizToken[];
}

// Spicy testnet — only these 11 fan tokens have on-chain contracts.
// Symbols mirror frontend `FAN_TOKEN_ASSETS` so logo/gradient lookups hit.
const TESTNET_TOKENS: ChilizToken[] = [
    { name: 'Paris Saint-Germain', symbol: 'PSG',   address: '0xb0Fa395a3386800658B9617F90e834E2CeC76Dd3' },
    { name: 'Tottenham Hotspur',   symbol: 'SPURS', address: '0x9B9C9AAa74678FcF4E1c76eEB1fa969A8E7254f8' },
    { name: 'FC Barcelona',        symbol: 'BAR',   address: '0x7F73C50748560BD2B286a4c7bF6a805cFb6f735d' },
    { name: 'AC Milan',            symbol: 'ACM',   address: '0x641d040dB51398Ba3a4f2d7839532264EcdCc3aE' },
    { name: 'OG',                  symbol: 'OG',    address: '0xEc1C46424E20671d9b21b9336353EeBcC8aEc7b5' },
    { name: 'Manchester City',     symbol: 'CITY',  address: '0x66F80ddAf5ccfbb082A0B0Fae3F21eA19f6B88ef' },
    { name: 'Arsenal',             symbol: 'AFC',   address: '0x44B190D30198F2E585De8974999a28f5c68C6E0F' },
    { name: 'Flamengo',            symbol: 'MENGO', address: '0x1CC71168281dd78fF004ba6098E113bbbCBDc914' },
    { name: 'Juventus',            symbol: 'JUV',   address: '0x945EeD98f5CBada87346028aD0BeE0eA66849A0e' },
    { name: 'Napoli',              symbol: 'NAP',   address: '0x8DBe49c4Dcde110616fafF53b39270E1c48F861a' },
    { name: 'Atlético Madrid',     symbol: 'ATM',   address: '0xc926130FA2240e16A41c737d54c1d9b1d4d45257' },
];

// Mainnet — curated to the fan tokens with real Kayen liquidity
// (apps/smart-contracts/chiliz-tv/docs/FAN_TOKENS_MAINNET.md, 2026-06-11).
// Symbols mirror frontend `chiliz.config.ts` so balances/prices stay aligned.
const MAINNET_TOKENS: ChilizToken[] = [
    { name: 'Corinthians',         symbol: 'SCCP',   address: '0x20BFeab58f8bE903753d037Ba7e307fc77c97388' },
    { name: 'Paris Saint-Germain', symbol: 'PSG',    address: '0xc2661815C69c2B3924D3dd0c2C1358A1E38A3105' },
    { name: 'Sauber F1 Team',      symbol: 'SAUBER', address: '0xcF6d626203011E5554c82BaBe17DD7CDc4EE86bF' },
    { name: 'FC Barcelona',        symbol: 'BAR',    address: '0xFD3C73b3B09D418841dd6Aff341b2d6e3abA433b' },
    { name: 'Leeds United',        symbol: 'LUFC',   address: '0xF67A8a4299f7EBF0c58DbFb38941D0867f300C30' },
    { name: 'Manchester City',     symbol: 'CITY',   address: '0x6401b29F40a02578Ae44241560625232A01B3F79' },
];

const TESTNET_CONFIG: ChilizNetworkConfig = {
    rpcUrl: process.env.CHILIZ_RPC_URL ?? 'https://spicy-rpc.chiliz.com',
    tokens: TESTNET_TOKENS
};

const MAINNET_CONFIG: ChilizNetworkConfig = {
    // Ankr default (1000-block getLogs cap, handled by chunked indexers).
    // CHILIZ_RPC_URL overrides for ops flexibility, mirroring testnet.
    rpcUrl: process.env.CHILIZ_RPC_URL ?? 'https://rpc.ankr.com/chiliz',
    tokens: MAINNET_TOKENS
};

const NETWORK = (process.env.NETWORK || 'testnet').toLowerCase();

export const chilizConfig: ChilizNetworkConfig = NETWORK === 'mainnet' ? MAINNET_CONFIG : TESTNET_CONFIG;

export const networkType: 'testnet' | 'mainnet' = NETWORK === 'mainnet' ? 'mainnet' : 'testnet';

logger.info('Chiliz Network Configuration', {
    network: networkType.toUpperCase(),
    rpcUrl: chilizConfig.rpcUrl,
    supportedTokens: chilizConfig.tokens.length
});
