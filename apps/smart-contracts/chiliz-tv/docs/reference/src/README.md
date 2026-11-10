# PredCast smart contracts

Pari-mutuel sports betting and streaming payments, for Chiliz and Base.

Foundry project: Solidity 0.8.24, OpenZeppelin 5, `via_ir`, EVM `shanghai` (required by Chiliz).

## How it fits together

```
          native token / ERC20 / USDC
 user ─────────────► NetworkRouter ─────► DEX (swap to USDC)
                        │
                        ├─ bet ─────────► PariMatch proxy (USDC escrow) ──► LeaderboardRewards
                        │                                                   (fee share and scores)
                        └─ donate / sub ► StreamWallet (USDC escrow) + fee to the treasury
```

| Contract | Role |
|---|---|
| `src/pari/PariMatchBase.sol` | Escrow, market lifecycle and pari-mutuel math |
| `src/pari/FootballPariMatch.sol`, `BasketballPariMatch.sol` | Market types and score-based resolution |
| `src/pari/PariMatchFactory.sol` | Creates matches as BeaconProxies, one beacon per sport |
| `src/swap/NetworkRouter.sol` | Swaps to USDC and delivers bets, donations and subscriptions |
| `src/swap/uniswapV3/ConcentratedPoolAdapter.sol` | Base only: exposes the Uniswap V2 ABI over Uniswap V3 style pools |
| `src/swap/uniswapV3/ConcentratedPoolQuote.sol` | Base only: exact read-only quotes on those pools |
| `src/streamer/StreamWallet.sol` | USDC escrow of one streamer |
| `src/streamer/StreamWalletFactory.sol` | Creates and upgrades streamer wallets, holds their configuration |
| `src/leaderboard/LeaderboardRewards.sol` | Prize pool shared per epoch, based on net profit |

`src/swap/uniswapV3/` also serves Slipstream-style pools (Aerodrome, Dromos CL), which use the same pool interface and swap callback.

## Networks

| Network | Chain id | DEX | Native token |
|---|---|---|---|
| Chiliz mainnet | 88888 | Kayen V2 | CHZ |
| Chiliz Spicy | 88882 | Kayen V2 | CHZ |
| Base mainnet | 8453 | Dromos CL pools (Slipstream interface), see `docs/TEST_ADDRESSES.md` | ETH |
| Base Sepolia | 84532 | Uniswap V3 | ETH |

Addresses of the deployed contracts are in `deployments/<network>.json`. Each DEX address used on Base is in `script/config/BaseDexConfig.sol`.

## Build and test

```bash
forge build
```

```bash
forge test
```

The Base mainnet suite needs Cancun, because the Dromos CL pools' fee hooks use its opcodes. The project default must stay `shanghai`:

```bash
forge test --evm-version cancun --match-contract BaseMainnetDexAdapterForkTest
```

Fork suites use public RPCs by default. [docs/TEST_ADDRESSES.md](../../TEST_ADDRESSES.md) explains how to run them on local anvil forks.

## Deploy

```bash
cp .env.example .env
```

On Base, copy `.env.baseSepolia.example` to `.env.baseSepolia`, or `.env.baseMainnet.example` to `.env.baseMainnet`.
`deploy.sh` uses `.env.<network>` when it exists, `.env` otherwise.

Simulate first:

```bash
./deploy.sh --network chilizTestnet --all --dry-run
```

Then run the same command without `--dry-run`. Networks: `chilizTestnet`, `chilizMainnet`, `baseSepolia`, `baseMainnet`.

## Documentation

| Document | Content |
|---|---|
| [docs/CALL_FLOWS.md](../../CALL_FLOWS.md) | Calls to make per scenario, and Chiliz and Base differences |
| [docs/PARI_MUTUEL.md](../../PARI_MUTUEL.md) | Markets, lifecycle, resolution, payout math, roles |
| [docs/reference](../../reference/src/SUMMARY.md) | API reference generated from the NatSpec |
| [docs/FAN_TOKENS_MAINNET.md](../../FAN_TOKENS_MAINNET.md) | Fan tokens tradable on Chiliz mainnet |
| [docs/TEST_ADDRESSES.md](../../TEST_ADDRESSES.md) | Tokens, pools and fork setup per network |

To regenerate the reference after changing NatSpec (`forge doc` alone leaves links that do not work on GitHub):

```bash
./script/generate-docs.sh
```
