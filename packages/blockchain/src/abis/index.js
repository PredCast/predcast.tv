"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BET_PLACED_EVENT = exports.FOOTBALL_MATCH_ABI = exports.FACTORY_ABI = exports.ERC20_ABI = exports.BASKETBALL_MATCH_ABI = exports.FOOTBALL_MATCH_FULL_ABI = exports.BETTING_MATCH_ABI = exports.BETTING_MATCH_FACTORY_ABI = exports.STREAM_WALLET_FACTORY_ABI = exports.STREAM_WALLET_ABI = exports.CHILIZ_SWAP_ROUTER_ABI = exports.LIQUIDITY_POOL_ABI = void 0;
const viem_1 = require("viem");
// Full ABIs sourced from the Foundry build artifacts (kept in sync via
// `pnpm artifacts:sync` at the repo root).
var contracts_1 = require("./contracts");
Object.defineProperty(exports, "LIQUIDITY_POOL_ABI", { enumerable: true, get: function () { return contracts_1.LIQUIDITY_POOL_ABI; } });
Object.defineProperty(exports, "CHILIZ_SWAP_ROUTER_ABI", { enumerable: true, get: function () { return contracts_1.CHILIZ_SWAP_ROUTER_ABI; } });
Object.defineProperty(exports, "STREAM_WALLET_ABI", { enumerable: true, get: function () { return contracts_1.STREAM_WALLET_ABI; } });
Object.defineProperty(exports, "STREAM_WALLET_FACTORY_ABI", { enumerable: true, get: function () { return contracts_1.STREAM_WALLET_FACTORY_ABI; } });
Object.defineProperty(exports, "BETTING_MATCH_FACTORY_ABI", { enumerable: true, get: function () { return contracts_1.BETTING_MATCH_FACTORY_ABI; } });
Object.defineProperty(exports, "BETTING_MATCH_ABI", { enumerable: true, get: function () { return contracts_1.BETTING_MATCH_ABI; } });
Object.defineProperty(exports, "FOOTBALL_MATCH_FULL_ABI", { enumerable: true, get: function () { return contracts_1.FOOTBALL_MATCH_FULL_ABI; } });
Object.defineProperty(exports, "BASKETBALL_MATCH_ABI", { enumerable: true, get: function () { return contracts_1.BASKETBALL_MATCH_ABI; } });
// ERC20 ABI for reading token balances
exports.ERC20_ABI = [
    {
        type: 'function',
        name: 'balanceOf',
        inputs: [{ name: 'account', type: 'address' }],
        outputs: [{ name: '', type: 'uint256' }],
        stateMutability: 'view'
    }
];
// Minimal ABI for BettingMatchFactory — must mirror the deployed signature
// `createFootballMatch(string, address owner, address oracle)`.
exports.FACTORY_ABI = [
    {
        "type": "function",
        "name": "createFootballMatch",
        "inputs": [
            { "name": "_matchName", "type": "string" },
            { "name": "_owner", "type": "address" },
            { "name": "_oracle", "type": "address" }
        ],
        "outputs": [
            { "name": "proxy", "type": "address" }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "createBasketballMatch",
        "inputs": [
            { "name": "_matchName", "type": "string" },
            { "name": "_owner", "type": "address" },
            { "name": "_oracle", "type": "address" }
        ],
        "outputs": [
            { "name": "proxy", "type": "address" }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "event",
        "name": "MatchCreated",
        "inputs": [
            { "name": "proxy", "type": "address", "indexed": true },
            { "name": "sportType", "type": "uint8", "indexed": false },
            { "name": "owner", "type": "address", "indexed": true }
        ]
    }
];
// FootballMatch ABI for market management and resolution
exports.FOOTBALL_MATCH_ABI = [
    // Errors (for proper decoding of on-chain reverts)
    { type: 'error', name: 'InvalidMarketId', inputs: [{ name: 'marketId', type: 'uint256' }] },
    { type: 'error', name: 'InvalidMarketState', inputs: [{ name: 'marketId', type: 'uint256' }, { name: 'current', type: 'uint8' }, { name: 'required', type: 'uint8' }] },
    { type: 'error', name: 'InvalidMarketType', inputs: [{ name: 'marketType', type: 'bytes32' }] },
    { type: 'error', name: 'InvalidOddsValue', inputs: [{ name: 'odds', type: 'uint32' }, { name: 'min', type: 'uint32' }, { name: 'max', type: 'uint32' }] },
    { type: 'error', name: 'InvalidSelection', inputs: [{ name: 'marketId', type: 'uint256' }, { name: 'selection', type: 'uint64' }, { name: 'maxAllowed', type: 'uint8' }] },
    { type: 'error', name: 'OddsNotSet', inputs: [{ name: 'marketId', type: 'uint256' }] },
    { type: 'error', name: 'AccessControlUnauthorizedAccount', inputs: [{ name: 'account', type: 'address' }, { name: 'neededRole', type: 'bytes32' }] },
    // Note: the deployed FootballMatch only exposes `addMarketWithLine(bytes32, uint32, int16)`
    // and `addMarketsBatch(...)` — no plain `addMarket`. Always pass `line=0` for line-less markets.
    {
        type: 'function',
        name: 'addMarketWithLine',
        inputs: [
            { name: 'marketType', type: 'bytes32' },
            { name: 'initialOdds', type: 'uint32' },
            { name: 'line', type: 'int16' }
        ],
        outputs: [],
        stateMutability: 'nonpayable'
    },
    {
        type: 'function',
        name: 'openMarket',
        inputs: [{ name: 'marketId', type: 'uint256' }],
        outputs: [],
        stateMutability: 'nonpayable'
    },
    {
        type: 'function',
        name: 'closeMarket',
        inputs: [{ name: 'marketId', type: 'uint256' }],
        outputs: [],
        stateMutability: 'nonpayable'
    },
    {
        type: 'function',
        name: 'marketCount',
        inputs: [],
        outputs: [{ name: '', type: 'uint256' }],
        stateMutability: 'view'
    },
    {
        type: 'function',
        name: 'getMarketCore',
        inputs: [{ name: 'marketId', type: 'uint256' }],
        outputs: [
            { name: 'state', type: 'uint8', internalType: 'enum BettingMatch.MarketState' },
            { name: 'result', type: 'uint64', internalType: 'uint64' },
            { name: 'createdAt', type: 'uint40', internalType: 'uint40' },
            { name: 'resolvedAt', type: 'uint40', internalType: 'uint40' },
            { name: 'totalPool', type: 'uint256', internalType: 'uint256' }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        name: 'resolveMarket',
        inputs: [
            { name: 'marketId', type: 'uint256' },
            { name: 'result', type: 'uint64' }
        ],
        outputs: [],
        stateMutability: 'nonpayable'
    },
    {
        type: 'function',
        name: 'setMarketOdds',
        inputs: [
            { name: 'marketId', type: 'uint256' },
            { name: 'newOdds', type: 'uint32' }
        ],
        outputs: [],
        stateMutability: 'nonpayable'
    },
    {
        type: 'function',
        name: 'getCurrentOdds',
        inputs: [{ name: 'marketId', type: 'uint256' }],
        outputs: [{ name: '', type: 'uint32' }],
        stateMutability: 'view'
    }
];
exports.BET_PLACED_EVENT = (0, viem_1.parseAbiItem)('event BetPlaced(uint256 indexed marketId, address indexed user, uint256 betIndex, uint256 amount, uint64 selection, uint32 odds, uint16 oddsIndex)');
