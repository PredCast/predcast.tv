import { defineChain } from 'viem';

export const chilizSpicy = defineChain({
    id: 88882,
    name: 'Chiliz Spicy Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'CHZ',
        symbol: 'CHZ',
    },
    rpcUrls: {
        default: {
            http: ['https://spicy-rpc.chiliz.com'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Spicy Explorer',
            url: 'https://testnet.chiliscan.com',
        },
    },
    testnet: true,
});

export const chilizMainnet = defineChain({
    id: 88888,
    name: 'Chiliz Chain',
    nativeCurrency: {
        decimals: 18,
        name: 'CHZ',
        symbol: 'CHZ',
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.ankr.com/chiliz'],
        },
    },
    blockExplorers: {
        default: {
            name: 'ChiliScan',
            url: 'https://chiliscan.com',
        },
    },
    testnet: false,
});

export type ChilizNetworkType = 'testnet' | 'mainnet';

export function chainFor(networkType: ChilizNetworkType) {
    return networkType === 'mainnet' ? chilizMainnet : chilizSpicy;
}
