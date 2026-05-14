"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chilizMainnet = exports.chilizSpicy = void 0;
exports.chainFor = chainFor;
const viem_1 = require("viem");
exports.chilizSpicy = (0, viem_1.defineChain)({
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
exports.chilizMainnet = (0, viem_1.defineChain)({
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
function chainFor(networkType) {
    return networkType === 'mainnet' ? exports.chilizMainnet : exports.chilizSpicy;
}
