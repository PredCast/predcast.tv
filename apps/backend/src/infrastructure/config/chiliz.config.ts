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

// Mainnet — landing-page FAN_TOKEN_ASSETS ∩ live Socios contracts on Chiliz Chain.
const MAINNET_TOKENS: ChilizToken[] = [
    { name: 'Paris Saint-Germain',     symbol: 'PSG',     address: '0xfe1d4a935df7a4a52f835f6104c97af9d72217f2' },
    { name: 'FC Barcelona',            symbol: 'BAR',     address: '0x1589248b4b61ed472cc21ca1f2114d93ab6910d5' },
    { name: 'AC Milan',                symbol: 'ACM',     address: '0x062f6004fd0bf204d272ff115e5b84f7a01489d1' },
    { name: 'Juventus',                symbol: 'JUV',     address: '0xeaf368dadc22524def47e8a1c26bfc17ac16e6f5' },
    { name: 'Manchester City',         symbol: 'CITY',    address: '0x7bd6242d775faef1d50b2aa18c2fbf329bddf295' },
    { name: 'Arsenal',                 symbol: 'AFC',     address: '0x76088F3eD5dC655De9295D93868ec1EeC654A615' },
    { name: 'Napoli',                  symbol: 'NAP',     address: '0x90593E9602b38A0D5b63d9f34AC3560798cEE7d4' },
    { name: 'Atlético Madrid',         symbol: 'ATM',     address: '0x7da0eb973d982ffca095e80437f5e37459a95c67' },
    { name: 'Flamengo',                symbol: 'MENGO',   address: '0xBfF8FaBb04f6494fe393EB7416A698869569A310' },
    { name: 'OG',                      symbol: 'OG',      address: '0xb3f2e39acc68f98229b2587361a8ce30acdf0442' },
    { name: 'Tottenham Hotspur',       symbol: 'SPURS',   address: '0xd699ACD21011c20381E5138A430bb0d7b6E9BC7F' },
    { name: 'Inter Milan',             symbol: 'INTER',   address: '0x1b3385A26214057bB7e27c173ee2D14201752e73' },
    { name: 'AS Roma',                 symbol: 'ASR',     address: '0x0ac7bf9783ca1dcd86a39b5a2607160d29256eb0' },
    { name: 'Portugal National Team',  symbol: 'POR',     address: '0x013F2407c6eF765F1199f8818B805121F269F5b8' },
    { name: 'Galatasaray',             symbol: 'GAL',     address: '0x770da1e5dDB22f3Ccc2482493BD9B10A7A8A38Ae' },
    { name: 'Trabzonspor',             symbol: 'TRA',     address: '0xEff432433Dd57AdFA37004af00DB148F9407e7bD' },
    { name: 'Valencia',                symbol: 'VCF',     address: '0x83d7d1df01c698b4379077af4bceb2d4af113bff' },
    { name: 'Palmeiras',               symbol: 'VERDAO',  address: '0xb46357d8ed050d35d3a24154c39d7236dae86187' },
    { name: 'São Paulo FC',            symbol: 'SPFC',    address: '0x6345c0ECcA1B9007a9043CB5da8150aE07adD498' },
    { name: 'Corinthians',             symbol: 'SCCP',    address: '0x25fb4ff916faFb88d78918c54C1d14B57586046b' },
    { name: 'Everton',                 symbol: 'EFC',     address: '0xa84E55C2464563441cb4114372DF8D5aca49Fc83' },
    { name: 'AS Monaco',               symbol: 'ASM',     address: '0x57F3D2382025cF5d6c3B126dcE0360D9Cf3AfF49' },
    { name: 'Leeds United',            symbol: 'LUFC',    address: '0xE3ECD48f7653e6da693B544d50caB0BCdCd35C13' },
    { name: 'Aston Villa',             symbol: 'AVL',     address: '0x4f3a607bb2717683108865fc785badfa90094431' },
    { name: 'Benfica',                 symbol: 'BENFICA', address: '0xf4c653b74929953b29b966aba99b681fb5ab69cf' },
    { name: 'Sevilla',                 symbol: 'SEVILLA', address: '0xa584cca6a5c46ead6ff8ef3beb8fac76364c36cb' },
    { name: 'Atlético Mineiro',        symbol: 'GALO',    address: '0x558Cc7Ac99793B10c1C142a1C7e5AdF6657DeA9c' },
    { name: 'Vasco da Gama',           symbol: 'VASCO',   address: '0xd5f1b2454db115967bfac73bfea21da5e2543c8e' },
    { name: 'Fluminense',              symbol: 'FLU',     address: '0x9840dc03032f4f35d7dbdc8db832acfaf6ff3e77' },
    { name: 'Udinese',                 symbol: 'UDI',     address: '0x94772c3381a83308376d65e100d06c2bc5a86ed9' },
    { name: 'Crystal Palace',          symbol: 'CPFC',    address: '0x58613484D9683d52899e13d42BB3fb9eEB0749da' },
];

const TESTNET_CONFIG: ChilizNetworkConfig = {
    rpcUrl: process.env.CHILIZ_RPC_URL ?? 'https://spicy-rpc.chiliz.com',
    tokens: TESTNET_TOKENS
};

const MAINNET_CONFIG: ChilizNetworkConfig = {
    rpcUrl: 'https://rpc.ankr.com/chiliz',
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
