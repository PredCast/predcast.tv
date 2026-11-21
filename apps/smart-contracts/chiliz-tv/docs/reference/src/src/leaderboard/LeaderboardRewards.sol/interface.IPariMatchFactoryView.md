# IPariMatchFactoryView

*Minimal slice of `PariMatchFactory.isMatch(address)` used by the
leaderboard to authorize `recordWin` calls. Living here as an inline
interface keeps the leaderboard contract independent of the rest of
the pari tree (no cyclic compile dependency).*


## Functions
### isMatch

Whether an address is a match created by the factory.


```solidity
function isMatch(address) external view returns (bool);
```

