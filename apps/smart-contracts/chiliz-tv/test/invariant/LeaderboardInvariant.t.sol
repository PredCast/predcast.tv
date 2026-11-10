// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {Test}         from "forge-std/Test.sol";
import {ERC1967Proxy} from "@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.sol";

import {LeaderboardRewards} from "../../src/leaderboard/LeaderboardRewards.sol";
import {MockUSDC}           from "../mocks/MockUSDC.sol";

contract InvariantMatchRegistry {
    mapping(address => bool) public isMatch;

    function setMatch(address m) external {
        isMatch[m] = true;
    }
}

/**
 * @notice Feeds the leaderboard fees and profits from two whitelisted
 *         matches, moves time, closes epochs, claims, rolls over and pauses,
 *         in random order. Unexpected reverts or successes are counted.
 */
contract LeaderboardHandler is Test {
    LeaderboardRewards public immutable lb;
    MockUSDC           public immutable usdc;

    address[] internal _matches;
    address[] internal _actors;
    uint256 public time;

    uint256 public ghostIn;
    uint256 public ghostOut;
    mapping(uint256 => uint256) public claimedOf;
    mapping(uint256 => bool)    public rolledOver;

    uint256 public unexpected;
    string  public lastUnexpected;

    constructor(LeaderboardRewards lb_, MockUSDC usdc_, address[] memory matches_) {
        lb = lb_;
        usdc = usdc_;
        _matches = matches_;
        time = block.timestamp;
        for (uint256 i; i < 4; ++i) _actors.push(makeAddr(string.concat("player", vm.toString(i))));
    }

    modifier timed() {
        vm.warp(time);
        _;
    }

    function actors() external view returns (address[] memory) {
        return _actors;
    }

    // ─── match callbacks ────────────────────────────────────────────────────

    function fee(uint256 matchSeed, uint256 amount) external timed {
        amount = bound(amount, 1, 1_000e6);
        usdc.mint(address(lb), amount);
        ghostIn += amount;
        vm.prank(_matches[matchSeed % _matches.length]);
        try lb.notifyFee(amount) {} catch { _fail("notifyFee reverted"); }
    }

    function profit(uint256 matchSeed, uint256 actorSeed, uint256 amount, uint256 age) external timed {
        amount = bound(amount, 1, 1_000e6);
        age = bound(age, 0, 40 days);
        uint256 resolvedAt = time > age ? time - age : 0;
        vm.prank(_matches[matchSeed % _matches.length]);
        try lb.recordProfit(_actors[actorSeed % _actors.length], amount, resolvedAt) {} catch {
            _fail("recordProfit reverted");
        }
    }

    // ─── anyone ─────────────────────────────────────────────────────────────

    function stray(uint256 amount) external timed {
        amount = bound(amount, 1, 1_000e6);
        usdc.mint(address(lb), amount);
        ghostIn += amount;
    }

    function advance() external timed {
        bool due = !lb.paused() && block.timestamp >= lb.nextCloseTime();
        bool ok;
        try lb.advanceEpoch() { ok = true; } catch {}
        _expect(ok, due, "advanceEpoch");
    }

    function claim(uint256 actorSeed, uint256 epochSeed) external timed {
        address user = _actors[actorSeed % _actors.length];
        uint256 id = epochSeed % (lb.epochIndex() + 1);
        LeaderboardRewards.Epoch memory ep = lb.epoch(id);
        bool claimable = !lb.paused() && ep.closed && block.timestamp <= ep.claimExpiry
            && !lb.hasClaimed(id, user) && lb.pendingClaim(id, user) != 0;

        uint256 before = usdc.balanceOf(user);
        vm.prank(user);
        bool ok;
        try lb.claim(id) { ok = true; } catch {}
        if (ok) {
            uint256 got = usdc.balanceOf(user) - before;
            ghostOut += got;
            claimedOf[id] += got;
        }
        _expect(ok, claimable, "claim");
    }

    function rollover(uint256 epochSeed) external timed {
        uint256 id = epochSeed % (lb.epochIndex() + 1);
        LeaderboardRewards.Epoch memory ep = lb.epoch(id);
        bool due = !lb.paused() && ep.closed && block.timestamp > ep.claimExpiry;
        bool ok;
        try lb.rolloverEpoch(id) { ok = true; } catch {}
        if (ok) rolledOver[id] = true;
        _expect(ok, due, "rolloverEpoch");
    }

    function warp(uint256 secondsAhead) external {
        time += bound(secondsAhead, 1 hours, 12 days);
    }

    // ─── admin ──────────────────────────────────────────────────────────────

    function pause() external timed {
        try lb.emergencyPause() {} catch {}
    }

    function unpause() external timed {
        try lb.unpause() {} catch {}
    }

    function setEpochDuration(uint256 duration) external timed {
        try lb.setEpochDuration(uint64(bound(duration, 1 days, 60 days))) {} catch {}
    }

    // ─── end of run ─────────────────────────────────────────────────────────

    /// @dev Not a fuzz target: every winner of an epoch still in its claim
    ///      window must be able to claim.
    function claimEverything() external timed {
        if (lb.paused()) lb.unpause();
        uint256 closed = lb.epochIndex();
        for (uint256 id; id < closed; ++id) {
            LeaderboardRewards.Epoch memory ep = lb.epoch(id);
            if (block.timestamp > ep.claimExpiry) continue;
            for (uint256 a; a < _actors.length; ++a) {
                address user = _actors[a];
                if (lb.hasClaimed(id, user) || lb.pendingClaim(id, user) == 0) continue;
                uint256 before = usdc.balanceOf(user);
                vm.prank(user);
                lb.claim(id);
                uint256 got = usdc.balanceOf(user) - before;
                ghostOut += got;
                claimedOf[id] += got;
            }
        }
    }

    function _expect(bool ok, bool shouldSucceed, string memory what) internal {
        if (ok && !shouldSucceed) _fail(string.concat(what, " succeeded but should revert"));
        if (!ok && shouldSucceed) _fail(string.concat(what, " reverted but should succeed"));
    }

    function _fail(string memory why) internal {
        ++unexpected;
        lastUnexpected = why;
    }
}

/**
 * @title Leaderboard prize-pool invariants
 * @notice The leaderboard always holds the prizes it locked plus the fees
 *         it set aside for later epochs, prize accounting matches the
 *         epochs, nobody is paid twice or more than the pool.
 */
contract LeaderboardInvariantTest is Test {
    MockUSDC           internal usdc;
    LeaderboardRewards internal lb;
    LeaderboardHandler internal handler;

    function setUp() public {
        usdc = new MockUSDC();
        lb = LeaderboardRewards(address(new ERC1967Proxy(
            address(new LeaderboardRewards()),
            abi.encodeCall(LeaderboardRewards.initialize, (address(usdc), address(this), address(0)))
        )));
        lb.initializeV2();

        InvariantMatchRegistry registry = new InvariantMatchRegistry();
        address[] memory matches = new address[](2);
        matches[0] = makeAddr("matchA");
        matches[1] = makeAddr("matchB");
        registry.setMatch(matches[0]);
        registry.setMatch(matches[1]);
        lb.setMatchFactory(address(registry));

        handler = new LeaderboardHandler(lb, usdc, matches);
        lb.grantRole(lb.ADMIN_ROLE(), address(handler));
        lb.grantRole(lb.PAUSER_ROLE(), address(handler));

        bytes4[] memory selectors = new bytes4[](11);
        selectors[0]  = LeaderboardHandler.fee.selector;
        selectors[1]  = LeaderboardHandler.profit.selector;
        selectors[2]  = LeaderboardHandler.stray.selector;
        selectors[3]  = LeaderboardHandler.advance.selector;
        selectors[4]  = LeaderboardHandler.claim.selector;
        selectors[5]  = LeaderboardHandler.rollover.selector;
        selectors[6]  = LeaderboardHandler.warp.selector;
        selectors[7]  = LeaderboardHandler.pause.selector;
        selectors[8]  = LeaderboardHandler.unpause.selector;
        selectors[9]  = LeaderboardHandler.setEpochDuration.selector;
        selectors[10] = LeaderboardHandler.claim.selector;
        targetSelector(FuzzSelector({addr: address(handler), selectors: selectors}));
        targetContract(address(handler));
    }

    function invariant_BalanceCoversLockedAndReservedFees() public view {
        assertGe(usdc.balanceOf(address(lb)), lb.lockedInClosedEpochs() + lb.notifiedAhead());
    }

    function invariant_MoneyIsConserved() public view {
        assertEq(usdc.balanceOf(address(lb)), handler.ghostIn() - handler.ghostOut());
    }

    function invariant_LockedMatchesEpochs() public view {
        uint256 closed = lb.epochIndex();
        uint256 locked;
        for (uint256 id; id < closed; ++id) {
            LeaderboardRewards.Epoch memory ep = lb.epoch(id);
            assertTrue(ep.closed, "epochs below the index are closed");
            assertLe(ep.totalClaimed, ep.prizePool, "never claims more than the pool");
            if (handler.rolledOver(id)) {
                assertEq(ep.totalClaimed, ep.prizePool, "rolled over: remainder released");
            } else {
                assertEq(ep.totalClaimed, handler.claimedOf(id), "totalClaimed = USDC actually paid");
            }
            locked += ep.prizePool - ep.totalClaimed;
        }
        assertFalse(lb.epoch(closed).closed, "the open epoch is not closed");
        assertEq(lb.lockedInClosedEpochs(), locked);
    }

    function invariant_ClaimsFitInThePool() public view {
        address[] memory actors = handler.actors();
        uint256 closed = lb.epochIndex();
        for (uint256 id; id < closed; ++id) {
            LeaderboardRewards.Epoch memory ep = lb.epoch(id);
            uint256 owed;
            for (uint256 a; a < actors.length; ++a) {
                if (!lb.hasClaimed(id, actors[a])) owed += lb.pendingClaim(id, actors[a]);
            }
            assertLe(handler.claimedOf(id) + owed, ep.prizePool, "all shares fit in the pool");
        }
    }

    function invariant_NoUnexpectedRevertOrSuccess() public view {
        assertEq(handler.unexpected(), 0, handler.lastUnexpected());
    }

    function afterInvariant() external {
        handler.claimEverything();
        assertEq(handler.unexpected(), 0, handler.lastUnexpected());
        invariant_BalanceCoversLockedAndReservedFees();
        invariant_MoneyIsConserved();
        invariant_LockedMatchesEpochs();
    }
}
