#!/usr/bin/env node
/**
 * Quick on-chain sanity check for the deployed contracts.
 *
 * Reads four things in one go:
 *   - Pool : asset(), decimals(), totalAssets(), freeBalance(), paused()
 *   - SwapRouter : matchFactory(), liquidityPool(), platformFeeBps()
 *   - Match (optional) : matchName(), marketCount(), getMarketInfo(0)
 *   - User (optional) : USDC balance + native CHZ balance + LP shares
 *
 * Useful when:
 *   - A new deploy lands and you want to verify wiring without spinning up the front
 *   - Ops needs a one-liner before flipping a feature flag
 *   - The IDE/back is silent — confirms the chain itself answers
 *
 * Run:
 *   pnpm smoke:contracts                                     # pool + router only
 *   pnpm smoke:contracts -- --match 0xMATCH                   # + match info
 *   pnpm smoke:contracts -- --match 0xMATCH --user 0xUSER     # + balances
 *
 * The script is `.mjs` on purpose: no `tsx` dependency, no compilation step.
 * It reads addresses from `apps/frontend/.env.local` (preferred) or
 * `apps/frontend/.env` via dotenv-style parsing inline.
 */

import { readFileSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
    createPublicClient,
    http,
    formatUnits,
    erc20Abi,
    defineChain,
} from 'viem';

// ─── Setup ───────────────────────────────────────────────────────────────────

const __dirname = dirname(fileURLToPath(import.meta.url));
const FRONTEND_ROOT = resolve(__dirname, '..');

/** Parse a `KEY=VALUE` env file into an object. Quietly skips missing files. */
function loadEnvFile(path) {
    if (!existsSync(path)) return {};
    const out = {};
    for (const line of readFileSync(path, 'utf-8').split('\n')) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) continue;
        const eq = trimmed.indexOf('=');
        if (eq < 0) continue;
        const key = trimmed.slice(0, eq).trim();
        let value = trimmed.slice(eq + 1).trim();
        if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
            value = value.slice(1, -1);
        }
        out[key] = value;
    }
    return out;
}

// `.env.local` overrides `.env` (Next.js convention).
const env = {
    ...loadEnvFile(resolve(FRONTEND_ROOT, '.env')),
    ...loadEnvFile(resolve(FRONTEND_ROOT, '.env.local')),
    ...process.env,
};

const NETWORK = (env.NEXT_PUBLIC_NETWORK || 'testnet').toLowerCase();
const isMainnet = NETWORK === 'mainnet';

const chilizSpicy = defineChain({
    id: 88882,
    name: 'Chiliz Spicy Testnet',
    nativeCurrency: { decimals: 18, name: 'CHZ', symbol: 'CHZ' },
    rpcUrls: { default: { http: ['https://spicy-rpc.chiliz.com'] } },
    blockExplorers: { default: { name: 'Spicy Explorer', url: 'https://testnet.chiliscan.com' } },
    testnet: true,
});

const chilizMainnet = defineChain({
    id: 88888,
    name: 'Chiliz Chain',
    nativeCurrency: { decimals: 18, name: 'CHZ', symbol: 'CHZ' },
    rpcUrls: { default: { http: ['https://rpc.ankr.com/chiliz'] } },
    blockExplorers: { default: { name: 'ChiliScan', url: 'https://chiliscan.com' } },
});

const chain = isMainnet ? chilizMainnet : chilizSpicy;

const pickAddress = (testnetKey, mainnetKey) => {
    const value = isMainnet ? env[mainnetKey] : env[testnetKey];
    if (!value || !/^0x[a-fA-F0-9]{40}$/.test(value)) return null;
    return value;
};

const POOL = pickAddress('NEXT_PUBLIC_LIQUIDITY_POOL_PROXY', 'NEXT_PUBLIC_LIQUIDITY_POOL_PROXY_MAINNET');
const ROUTER = pickAddress('NEXT_PUBLIC_CHILIZ_SWAP_ROUTER_ADDRESS', 'NEXT_PUBLIC_CHILIZ_SWAP_ROUTER_ADDRESS_MAINNET');
const FACTORY = pickAddress('NEXT_PUBLIC_BETTING_MATCH_FACTORY_ADDRESS', 'NEXT_PUBLIC_BETTING_MATCH_FACTORY_ADDRESS_MAINNET');
const USDC = pickAddress('NEXT_PUBLIC_USDC_ADDRESS', 'NEXT_PUBLIC_USDC_ADDRESS_MAINNET');

if (!POOL || !ROUTER || !FACTORY || !USDC) {
    console.error('✖ Missing addresses in .env / .env.local for the active network:');
    console.error(`  NETWORK=${NETWORK}`);
    console.error(`  pool=${POOL ?? 'MISSING'}`);
    console.error(`  router=${ROUTER ?? 'MISSING'}`);
    console.error(`  factory=${FACTORY ?? 'MISSING'}`);
    console.error(`  usdc=${USDC ?? 'MISSING'}`);
    process.exit(1);
}

// ─── CLI args ────────────────────────────────────────────────────────────────

const args = process.argv.slice(2);
function flag(name) {
    const idx = args.indexOf(`--${name}`);
    return idx >= 0 ? args[idx + 1] : undefined;
}

const matchAddress = flag('match');
const userAddress = flag('user');

// ─── Client ──────────────────────────────────────────────────────────────────

const client = createPublicClient({ chain, transport: http() });

const POOL_ABI = [
    { type: 'function', name: 'asset',           inputs: [], outputs: [{ type: 'address' }], stateMutability: 'view' },
    { type: 'function', name: 'decimals',        inputs: [], outputs: [{ type: 'uint8' }],   stateMutability: 'view' },
    { type: 'function', name: 'totalAssets',     inputs: [], outputs: [{ type: 'uint256' }], stateMutability: 'view' },
    { type: 'function', name: 'totalSupply',     inputs: [], outputs: [{ type: 'uint256' }], stateMutability: 'view' },
    { type: 'function', name: 'freeBalance',     inputs: [], outputs: [{ type: 'uint256' }], stateMutability: 'view' },
    { type: 'function', name: 'utilization',     inputs: [], outputs: [{ type: 'uint256' }], stateMutability: 'view' },
    { type: 'function', name: 'paused',          inputs: [], outputs: [{ type: 'bool'   }], stateMutability: 'view' },
    { type: 'function', name: 'balanceOf',       inputs: [{ type: 'address' }], outputs: [{ type: 'uint256' }], stateMutability: 'view' },
];

const ROUTER_ABI = [
    { type: 'function', name: 'bettingMatchFactory', inputs: [], outputs: [{ type: 'address' }], stateMutability: 'view' },
    { type: 'function', name: 'liquidityPool',       inputs: [], outputs: [{ type: 'address' }], stateMutability: 'view' },
    { type: 'function', name: 'platformFeeBps',      inputs: [], outputs: [{ type: 'uint16'  }], stateMutability: 'view' },
];

const MATCH_ABI = [
    { type: 'function', name: 'matchName',     inputs: [], outputs: [{ type: 'string' }], stateMutability: 'view' },
    { type: 'function', name: 'marketCount',   inputs: [], outputs: [{ type: 'uint256' }], stateMutability: 'view' },
    { type: 'function', name: 'paused',        inputs: [], outputs: [{ type: 'bool'   }], stateMutability: 'view' },
    {
        type: 'function',
        name: 'getMarketInfo',
        inputs: [{ type: 'uint256' }],
        outputs: [
            { type: 'bytes32' },
            { type: 'uint8'   },
            { type: 'uint32'  },
            { type: 'uint64'  },
            { type: 'uint256' },
        ],
        stateMutability: 'view',
    },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

const MARKET_STATES = ['Inactive', 'Open', 'Suspended', 'Closed', 'Resolved', 'Cancelled'];

function fmtUnits(value, decimals, digits = 4) {
    if (value === undefined || value === null) return '—';
    return Number(formatUnits(value, decimals)).toLocaleString('en-US', {
        minimumFractionDigits: digits,
        maximumFractionDigits: digits,
    });
}

function row(label, value) {
    console.log(`  ${label.padEnd(30)} ${value}`);
}

// ─── Run ─────────────────────────────────────────────────────────────────────

(async () => {
    console.log(`\n• Smoke check — ${chain.name} (chainId ${chain.id})\n`);

    // Pool reads
    const [
        poolAsset,
        shareDecimals,
        totalAssets,
        totalSupply,
        freeBalance,
        utilization,
        poolPaused,
    ] = await Promise.all([
        client.readContract({ address: POOL, abi: POOL_ABI, functionName: 'asset' }),
        client.readContract({ address: POOL, abi: POOL_ABI, functionName: 'decimals' }),
        client.readContract({ address: POOL, abi: POOL_ABI, functionName: 'totalAssets' }),
        client.readContract({ address: POOL, abi: POOL_ABI, functionName: 'totalSupply' }),
        client.readContract({ address: POOL, abi: POOL_ABI, functionName: 'freeBalance' }),
        client.readContract({ address: POOL, abi: POOL_ABI, functionName: 'utilization' }),
        client.readContract({ address: POOL, abi: POOL_ABI, functionName: 'paused' }),
    ]);

    const assetDecimals = await client.readContract({
        address: poolAsset,
        abi: erc20Abi,
        functionName: 'decimals',
    });
    const assetSymbol = await client
        .readContract({ address: poolAsset, abi: erc20Abi, functionName: 'symbol' })
        .catch(() => '???');

    console.log('LiquidityPool');
    row('address', POOL);
    row('asset', `${poolAsset} (${assetSymbol}, ${assetDecimals} dp)`);
    row('asset matches USDC env', poolAsset.toLowerCase() === USDC.toLowerCase() ? '✓' : `✗ (env says ${USDC})`);
    row('share decimals', String(shareDecimals));
    row('totalAssets', `${fmtUnits(totalAssets, assetDecimals, 2)} ${assetSymbol}`);
    row('totalSupply', fmtUnits(totalSupply, shareDecimals, 2));
    row('freeBalance', `${fmtUnits(freeBalance, assetDecimals, 2)} ${assetSymbol}`);
    row('utilization', `${(Number(utilization) / 1e16).toFixed(2)}%`);
    row('paused', poolPaused ? '⚠ TRUE' : 'false');

    // Router reads
    const [routerFactory, routerPool, routerFeeBps] = await Promise.all([
        client.readContract({ address: ROUTER, abi: ROUTER_ABI, functionName: 'bettingMatchFactory' }),
        client.readContract({ address: ROUTER, abi: ROUTER_ABI, functionName: 'liquidityPool' }),
        client.readContract({ address: ROUTER, abi: ROUTER_ABI, functionName: 'platformFeeBps' }),
    ]);

    console.log('\nChilizSwapRouter');
    row('address', ROUTER);
    row('matchFactory wired', routerFactory.toLowerCase() === FACTORY.toLowerCase() ? '✓' : `✗ (router says ${routerFactory}, env says ${FACTORY})`);
    row('liquidityPool wired', routerPool.toLowerCase() === POOL.toLowerCase() ? '✓' : `✗ (router says ${routerPool})`);
    row('platformFeeBps', `${routerFeeBps} bps (${(Number(routerFeeBps) / 100).toFixed(2)}%)`);

    // Optional match
    if (matchAddress) {
        if (!/^0x[a-fA-F0-9]{40}$/.test(matchAddress)) {
            console.error(`\n✖ Invalid --match address: ${matchAddress}`);
            process.exit(1);
        }
        const [matchName, marketCount, matchPaused] = await Promise.all([
            client.readContract({ address: matchAddress, abi: MATCH_ABI, functionName: 'matchName' }).catch(() => null),
            client.readContract({ address: matchAddress, abi: MATCH_ABI, functionName: 'marketCount' }).catch(() => 0n),
            client.readContract({ address: matchAddress, abi: MATCH_ABI, functionName: 'paused' }).catch(() => false),
        ]);

        console.log('\nMatch');
        row('address', matchAddress);
        row('matchName', matchName ?? '—');
        row('marketCount', String(marketCount));
        row('paused', matchPaused ? '⚠ TRUE' : 'false');

        if (Number(marketCount) > 0) {
            const info = await client.readContract({
                address: matchAddress,
                abi: MATCH_ABI,
                functionName: 'getMarketInfo',
                args: [0n],
            });
            const [, state, currentOdds, result, totalPool] = info;
            row('market #0 state', `${MARKET_STATES[state] ?? state} (${state})`);
            row('market #0 odds', `${(Number(currentOdds) / 10_000).toFixed(2)}x`);
            row('market #0 result', String(result));
            row('market #0 totalPool', `${fmtUnits(totalPool, assetDecimals, 2)} ${assetSymbol}`);
        }
    }

    // Optional user balances
    if (userAddress) {
        if (!/^0x[a-fA-F0-9]{40}$/.test(userAddress)) {
            console.error(`\n✖ Invalid --user address: ${userAddress}`);
            process.exit(1);
        }

        const [usdcBalance, lpShares, nativeBalance] = await Promise.all([
            client.readContract({ address: USDC, abi: erc20Abi, functionName: 'balanceOf', args: [userAddress] }),
            client.readContract({ address: POOL, abi: POOL_ABI, functionName: 'balanceOf', args: [userAddress] }),
            client.getBalance({ address: userAddress }),
        ]);

        console.log('\nUser');
        row('address', userAddress);
        row('CHZ (native)', `${fmtUnits(nativeBalance, 18, 4)} CHZ`);
        row(`${assetSymbol} balance`, `${fmtUnits(usdcBalance, assetDecimals, 2)} ${assetSymbol}`);
        row('LP shares (ctvLP)', fmtUnits(lpShares, shareDecimals, 2));
    }

    console.log('\n✓ Smoke check completed.\n');
})().catch((err) => {
    console.error('\n✖ Smoke check failed:');
    console.error(err);
    process.exit(1);
});
