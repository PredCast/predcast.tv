# Call flows

Which functions to call, in which order, for each scenario, and where Chiliz and Base differ.
Full signatures and parameters are in the [generated reference](reference/src/SUMMARY.md).

Names used below:

| Name | Contract |
|---|---|
| `router` | `NetworkRouter` |
| `factory` | `PariMatchFactory` |
| `match` | A `FootballPariMatch` or `BasketballPariMatch` proxy |
| `streams` | `StreamWalletFactory` |
| `wallet` | The `StreamWallet` of one streamer |
| `leaderboard` | `LeaderboardRewards` proxy |
| `adapter` | `ConcentratedPoolAdapter` (Base only) |

Rules that apply everywhere:

- USDC has 6 decimals. Every bet, donation and subscription settles in USDC.
- `deadline` is a unix timestamp in seconds.
- `amountOutMin` is the router's quote minus your slippage tolerance. It can never be 0.
- Always quote through the router, so the quoted route is the executed one.

## 1. Chiliz and Base differences

Function names, parameters and call order are the same on both networks. These points differ:

| | Chiliz (88888, Spicy 88882) | Base (8453, Sepolia 84532) |
|---|---|---|
| Native token sent to `*WithNativeToken` | CHZ | ETH |
| `router.wrappedNativeToken()` | WCHZ | WETH |
| DEX behind the router | Kayen V2 router, called directly | `adapter`, on Aero Slipstream V3 pools (mainnet) or Uniswap V3 (Sepolia) |
| `router.wrapperFactory()` | Kayen wrapper factory on mainnet | `address(0)` |
| Tokens accepted by `*WithToken` | Any token with a pool against WCHZ, see [FAN_TOKENS_MAINNET.md](FAN_TOKENS_MAINNET.md) | Only tokens with a registered route. Mainnet: WETH, CHZ, PSG, AFC, PEPPER. Sepolia: WETH |
| Fan token decimals | 0 for CAP-20 tokens | 18 |
| Fan token handling | The router wraps it, then swaps the wrapped token. Emits `FanTokenWrapped` | No wrapping |
| Supporting a new token | Nothing to do once a WCHZ pool exists | The owner calls `adapter.setRoute` |
| Transactions | Legacy, gas price around 2,500 gwei | EIP-1559 |

Token addresses must never be copied between networks: six fan-token addresses are a different token on each
(`0xDD15…7EC8` is PERSIB on Chiliz and PSG on Base). See [TEST_ADDRESSES.md](TEST_ADDRESSES.md).

Spicy has the same setup as Chiliz mainnet, but its fan-token pools are empty, so fan-token swaps cannot run there.

Everything after the swap is identical: match escrow, resolution, claims, refunds, streamer wallets and the leaderboard.

## 2. Deploy the platform

`./deploy.sh --network <name> --all` runs `script/DeployAll.s.sol`, which makes these calls:

| # | Call | Network |
|---|---|---|
| 1 | Deploy `adapter`, then `adapter.setRoute(...)` for each route in `script/config/BaseDexConfig.sol` | Base only |
| 2 | Deploy `factory` with the two match implementations and the upgrade admin | Both |
| 3 | Deploy `streams` | Both |
| 4 | Deploy `router`. On Base, `adapter` is both the master and the token router | Both |
| 5 | `router.setWrapperFactory(wrapperFactory)` | Chiliz, when `WRAPPER_FACTORY` is set |
| 6 | Deploy the `leaderboard` proxy, then `leaderboard.initializeV2()` | Both |
| 7 | `factory.setWiring(usdc, feeRecipient, router)` | Both |
| 8 | `factory.setMatchOperator(operator)` | Both |
| 9 | `factory.setLeaderboardWiring(leaderboard, 100)` | Both |
| 10 | `router.setMatchFactory(factory)` | Both |
| 11 | `streams.setSwapRouter(router)`, which must come before step 12 | Both |
| 12 | `router.setStreamWalletFactory(streams)` | Both |
| 13 | `leaderboard.setMatchFactory(factory)` | Both |

With `TRANSFER_OWNERSHIP=true`, the run also starts the ownership transfer of `factory`, `streams`, `router` and `adapter`.
The Safe then calls `acceptOwnership()` on each.

## 3. Create a match

**In one transaction (recommended).** The factory owner or `matchOperator` calls:

```solidity
factory.createFootballMatchWithMarkets(name, owner, oracle, setup)   // or createBasketballMatchWithMarkets
// setup = MarketSetup({ marketTypes, lines, extras, groupIds, closesAt, open })
```

It creates the match, adds every market (ids 0..n-1), sets their cutoff to `closesAt` when it is not 0 and opens them when `open` is true. The roles are the same as in the step-by-step flow, and the factory keeps none.

`extras` carries the basketball quarter (1..4) or the points-exact step, 0 otherwise; `groupIds` are UI groups, 0 for none. Measured with real transactions on a Base Sepolia fork (2026-11-10, three markets): 893,017 gas in one transaction against 1,003,888 gas for the four below, about 11 % less, mostly the three transaction base fees and the repeated cold access to the match.

**Step by step:**

| # | Caller | Call |
|---|---|---|
| 1 | Factory owner or `matchOperator` | `factory.createFootballMatch(name, owner, oracle)` or `factory.createBasketballMatch(name, owner, oracle)` |
| 2 | `owner` | `match.addMarketWithLine(marketType, line)`, once per market |
| 3 | `owner` | `match.setMarketCloseTime(marketId, kickoff)` |
| 4 | `owner` | `match.openMarket(marketId)` |

- Step 1 returns the proxy and emits `MatchCreated`. `oracle` must differ from `owner`, the factory owner and `matchOperator`.
- Step 2 emits `MarketCreated` with the id. `marketType` is `keccak256("WINNER")`, also readable as `match.MARKET_WINNER()`.
  Market types and outcome encoding are in [PARI_MUTUEL.md](PARI_MUTUEL.md).
- Batch forms: `addMarketsBatch`, `addMarketsBatchAdvanced`, `setMarketsCloseTime`, `openMarketsBatch`.
- Markets with an extra parameter: `addMarketAdvanced`, and on basketball `addQuarterMarket` and `addPointsExactMarket`.
- Step 4 freezes the market's fees.

## 4. Place a bet

Useful reads before betting: `factory.isMatch(match)`, `match.getMarketInfo(marketId)` and `match.getMarketSpec(marketId)`.
The market must be Open and before its `closesAt`. The minimum stake is 0.01 USDC. A user can stake several times, on several outcomes.

Every bet goes through the router, so a user approves one contract, not every match. The router checks `factory.isMatch(match)`, sends the USDC to the match and calls `placeBetUSDCFor`. Matches have no direct staking entry point.

**With USDC**

1. `usdc.approve(router, amount)`
2. `router.placeBetWithUSDC(match, marketId, outcome, amount)`

**With the native token (CHZ on Chiliz, ETH on Base)**

1. `quote = router.quoteTokenToUSDC(router.wrappedNativeToken(), value)`
2. `router.placeBetWithNativeToken{value: value}(match, marketId, outcome, amountOutMin, deadline)`

No approval is needed.

**With an ERC20 or fan token**

1. `quote = router.quoteTokenToUSDC(token, amount)`. A quote of 0 means there is no usable route: do not send.
2. `token.approve(router, amount)`
3. `router.placeBetWithToken(token, amount, match, marketId, outcome, amountOutMin, deadline)`

| Chiliz | Base |
|---|---|
| Use the fan token's own address, not the wrapped one, and read `decimals()`: with 0 decimals, 100 PSG is `100` | Fan tokens have 18 decimals. The token needs a route, otherwise the bet reverts with `RouteNotSet` |

Events: the match always emits `PositionTaken`. The router also emits `BetPlacedViaNativeToken`, `BetPlacedViaToken` or `BetPlacedWithUSDC`.

Never send tokens directly to the router: only `approve`, then call.

## 5. Close and resolve a market

| # | Caller | Call |
|---|---|---|
| 1 | Anyone, once `closesAt` has passed | `match.closeExpiredMarket(marketId)` |
| 1 (alternative) | `owner` | `match.closeMarket(marketId)` or `match.closeMarketsBatch(ids)` |
| 2 | Oracle | One of the calls below |

| Sport | Call | Effect |
|---|---|---|
| Football | `match.resolveByScore(score)` | Settles every Closed market that can be derived from the score |
| Football | `match.resolveBatchByScore(ids, score)` | Same, for the listed markets |
| Basketball | `match.resolveByFinalScore(score)` | Settles every Closed market, overtime included |
| Basketball | `match.resolveBatchByFinalScore(ids, score)` | Same, for the listed markets |
| Any | `match.resolveMarket(marketId, outcome)` or `match.resolveMarketsBatch(ids, outcomes)` | Sets explicit outcomes |

- `computeOutcome` and, on basketball, `computeOutcomeFinal` give the outcome without writing anything.
- A market that cannot be derived from the score stays Closed. Settle it with `resolveMarket`, or cancel it with `cancelMarket`.
- To stop betting for a moment: `match.suspendMarket(marketId)`, then `match.openMarket(marketId)`.

At resolution:

- The fee is sent to `feeRecipient` and to the leaderboard. It is 2% of the pool by default: 1.5% to `feeRecipient`, 0.5% to the leaderboard.
- With no stake on the winning outcome, the market becomes Cancelled and everyone refunds.
- With stakes only on the winning outcome, no fee is taken.

## 6. Collect

| Situation | Caller | Call |
|---|---|---|
| Market Resolved, user won | User | `match.claim(marketId)` |
| Several markets | User | `match.claimBatch(ids)`, which skips what cannot be claimed |
| Market Cancelled | User | `match.claimRefund(marketId)` or `match.claimRefundBatch(ids)` |
| Oracle never resolved | Anyone, after `match.staleAt(marketId)` | `match.cancelStaleMarket(marketId)`, then users refund |

- Payout: `userStake on the winning outcome * resolvedNetPool / pool of the winning outcome`, rounded on the running total: a claim pays `floor(claimedStake * resolvedNetPool / winningPool) - paidOut`, where `claimedStake` includes the claimer. Payouts add up to `resolvedNetPool` exactly, and each is the exact share rounded down or up by one unit at most.
- An off-chain preview can use the plain formula: it is at most 1 unit (0.000001 USDC) off.
- A pause freezes claims for at most 7 days. Refunds keep working during a pause.
- Winners are paid in USDC on both networks. There is no swap on the way out.

## 7. Streaming

### Prepare a streamer

| # | Caller | Call |
|---|---|---|
| 1 | Anyone | `streams.getWallet(streamer)`. `address(0)` means no wallet yet |
| 2 | Owner of `streams` | `streams.deployWalletFor(streamer)` if there is no wallet. A first donation also creates it |
| 3 | Streamer | `wallet.setSubscriptionPricing(price, period)`: `price` USDC buys `period` seconds (1 to 365 days) |
| 4 | Streamer, optional | `wallet.setPayoutAddress(payout)` |

### Donate

| Paid with | Calls |
|---|---|
| USDC | `usdc.approve(router, amount)`, then `router.donateWithUSDC(streamer, message, amount)` |
| Native token | Quote with `wrappedNativeToken`, then `router.donateWithNativeToken{value: value}(streamer, message, amountOutMin, deadline)` |
| ERC20 or fan token | Quote, `token.approve(router, amount)`, then `router.donateWithToken(token, amount, streamer, message, amountOutMin, deadline)` |

The router sends `platformFeeBps` of the USDC to its treasury and the rest to the wallet. The wallet emits `DonationReceived`.

### Subscribe

Subscribing fails with `SubscriptionPriceNotSet` until the streamer has done step 3 above.

1. `wallet = streams.getWallet(streamer)`
2. `cost = wallet.subscriptionCost(duration)`
3. Pay:

| Paid with | Calls |
|---|---|
| USDC | `usdc.approve(router, cost)`, then `router.subscribeWithUSDC(streamer, duration, cost)` |
| Native token | Quote, then `router.subscribeWithNativeToken{value: value}(streamer, duration, amountOutMin, deadline)` |
| ERC20 or fan token | Quote, `token.approve(router, amount)`, then `router.subscribeWithToken(token, amount, streamer, duration, amountOutMin, deadline)` |

- `cost` includes the platform fee. On a swap, set `amountOutMin` to at least `cost`.
- USDC above `cost` is kept as payment. It does not extend the subscription.
- Paying again while active adds `duration` to the current expiry.
- To check access: `wallet.isSubscribed(user)` or `wallet.getSubscription(user)`.

### Withdraw

1. `wallet.availableBalance()`
2. `wallet.withdrawRevenue(amount)`, sent by the streamer. USDC goes to the payout address, or to the streamer by default.

The only difference between networks is the payment side, as in [section 1](#1-chiliz-and-base-differences).

## 8. Leaderboard

Fees and scores arrive automatically: fees at resolution, scores when a winner claims.

| Action | Caller | Call |
|---|---|---|
| Read the open epoch | Anyone | `leaderboard.currentEpoch()`, `leaderboard.epochScore(id, user)`, `leaderboard.openPrizePool()` |
| Close the epoch | Anyone, after `leaderboard.nextCloseTime()` | `leaderboard.advanceEpoch()` |
| Preview a prize | Anyone | `leaderboard.pendingClaim(id, user)`. Prizes are rounded on the running total like payouts, so they add up to the epoch's pool |
| Claim a prize | User, until `leaderboard.claimDeadline(id)` | `leaderboard.claim(id)` |
| Recycle what was not claimed | Anyone, after `claimDeadline(id)` | `leaderboard.rolloverEpoch(id)` |

## 9. Operations

| Action | Caller | Call |
|---|---|---|
| Pause a match | `PAUSER_ROLE` | `match.emergencyPause()` |
| Lift the pause | `ADMIN_ROLE` | `match.unpause()` |
| Cancel a market | `ADMIN_ROLE` | `match.cancelMarket(marketId, reason)` |
| Fees for future markets | `DEFAULT_ADMIN_ROLE` | `match.setFeeBps`, `match.setLeaderboardFeeBps`, `match.setFeeRecipient`, `match.setLeaderboardRecipient` |
| Replace the oracle of a match | `DEFAULT_ADMIN_ROLE` | `match.grantRole(RESOLVER_ROLE, oracle)`, then `match.revokeRole(RESOLVER_ROLE, oldOracle)` |
| Settings of new matches | Factory owner | `factory.setWiring`, `factory.setLeaderboardWiring`, `factory.setMatchOperator` |
| Streaming fee and treasury | Router owner | `router.setPlatformFeeBps`, `router.setTreasury` |
| Upgrade all matches of a sport | Upgrade admin | `upgradeTo(newImplementation)` on `factory.footballBeacon()` or `factory.basketballBeacon()` |
| Upgrade a wallet | Owner of `streams` | `streams.upgradeWallet(streamer, newImplementation)` |
| Implementation of new wallets | Owner of `streams` | `streams.setImplementation(newImplementation)` |
| Upgrade the leaderboard | `DEFAULT_ADMIN_ROLE` | `script/UpgradeLeaderboard.s.sol` |
| Replace the router | Owners | `script/RedeploySwapRouter.s.sol`, then `script/RotateSwapRouterRoleOnMatches.s.sol` |
| Add or change a route | Adapter owner, **Base only** | `adapter.setRoute(tokenIn, usdc, pools)`. An empty `pools` removes the route. Read with `adapter.getRoute` |
| Change the fan-token wrapper | Router owner, **Chiliz only** | `router.setWrapperFactory(wrapperFactory)` |

The fee actually charged on donations and subscriptions is the router's. `streams.setPlatformFee` and `streams.setTreasury` only change what wallets report.

## 10. Common reverts

| Error | Meaning | Fix |
|---|---|---|
| `SlippageNotSet` | `amountOutMin` is 0 | Quote and pass a minimum |
| `DeadlinePassed` | The deadline is in the past | Use a later timestamp |
| `TokenIsUSDC` | `*WithToken` called with USDC | Use `*WithUSDC` |
| `UnauthorizedBettingMatch` | The address is not a match of the factory | Check `factory.isMatch` |
| `InvalidMarketState` | The market is not in the required state | Read `match.getMarketInfo` |
| `BettingClosed` | `closesAt` has passed | Stop accepting bets on this market |
| `StakeBelowMinimum` | The stake is under 0.01 USDC | Stake more, or raise the swap amount |
| `InvalidOutcomeValue` | The outcome is out of range | Read `maxOutcome` in `match.getMarketSpec` |
| `NothingToClaim` | The user holds no winning stake | Nothing to do |
| `NothingToRefund` | The user holds no stake on this market | Nothing to do |
| `AlreadyClaimed` | Already claimed or refunded | Nothing to do |
| `ClaimsPaused` | The match is paused | Wait for the timestamp in the error |
| `SubscriptionPriceNotSet` | The streamer has no price, or no wallet yet | Streamer calls `setSubscriptionPricing` |
| `InsufficientSubscriptionPayment` | The USDC paid is under `subscriptionCost` | Pay more, or raise `amountOutMin` |
| `RouteNotSet` (Base) | The token has no registered route | Owner calls `adapter.setRoute` |
| `PartialFill` (Base) | The pool cannot absorb the amount | Bet less |
| `InsufficientOutput` (Base) | The swap paid under `amountOutMin` | Quote again |

## 11. Names on contracts already deployed

Contracts deployed on Chiliz mainnet and Spicy before the rename keep their original ABI:

| Deployed | Current source |
|---|---|
| `ChilizSwapRouter` | `NetworkRouter` |
| `placeBetWithCHZ` | `placeBetWithNativeToken` |
| `donateWithCHZ` | `donateWithNativeToken` |
| `subscribeWithCHZ` | `subscribeWithNativeToken` |
| `wchz()` | `wrappedNativeToken()` |
| `BetPlacedViaCHZ` | `BetPlacedViaNativeToken` |
| `DonationWithCHZ` | `DonationWithNativeToken` |
| `SubscriptionWithCHZ` | `SubscriptionWithNativeToken` |

Selectors and event topics change with the names. Frontend and indexer code must switch when they target a new deployment.
