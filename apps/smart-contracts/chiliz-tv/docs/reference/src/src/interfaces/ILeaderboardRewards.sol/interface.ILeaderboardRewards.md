# ILeaderboardRewards

Sink interface used by PariMatchBase to feed the leaderboard.
Every call is wrapped in `try/catch` on the match side, so a
misbehaving or paused leaderboard can never block a resolution or
a claim.


## Functions
### notifyFee

Attribute `amount` USDC, already transferred to the leaderboard,
to the epoch in progress at the time of the call (
fees belong to the epoch of the resolution that produced them).


```solidity
function notifyFee(uint256 amount) external;
```

### recordProfit

Credit `profit` (payout minus the user's total stake on that
market, so self-hedging scores nothing) to the
epoch containing `resolvedAt`, the market's resolution time.


```solidity
function recordProfit(address user, uint256 profit, uint256 resolvedAt) external;
```

### recordWin

Legacy V2 entrypoint (gross payout credited at claim time).
Kept so matches deployed before V3 do not revert, but it no
longer credits anything.


```solidity
function recordWin(address user, uint256 payout) external;
```

