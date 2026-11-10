// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {Ownable}           from "@openzeppelin/contracts/access/Ownable.sol";
import {Ownable2Step}      from "@openzeppelin/contracts/access/Ownable2Step.sol";
import {BeaconProxy}       from "@openzeppelin/contracts/proxy/beacon/BeaconProxy.sol";
import {UpgradeableBeacon} from "@openzeppelin/contracts/proxy/beacon/UpgradeableBeacon.sol";

import {PariMatchBase}       from "./PariMatchBase.sol";
import {FootballPariMatch}   from "./FootballPariMatch.sol";
import {BasketballPariMatch} from "./BasketballPariMatch.sol";

/**
 * @title PariMatchFactory
 * @author ChilizTV Team
 * @notice Factory for pari-mutuel match proxies.
 *
 * @dev Governance:
 *        - Every match is a `BeaconProxy` pointing at one beacon per sport.
 *          Match contracts have NO upgrade entrypoint of their own: no match
 *          admin can swap the code under its escrow any more. The code of all
 *          matches of a sport changes only through
 *          `UpgradeableBeacon.upgradeTo`, owned by `upgradeAdmin` (meant to
 *          be a Safe, optionally behind a TimelockController).
 *        - Because a match's code is fixed by the beacon, `isMatch` is a
 *          trustworthy registry for the leaderboard and the router.
 *        - Keys are split: the factory OWNER (Safe) configures
 *          the factory; an optional `matchOperator` (backend hot key) may
 *          also create matches; each match's `_owner` gets the ops roles
 *          (ADMIN_ROLE + PAUSER_ROLE) only, while DEFAULT_ADMIN_ROLE (role
 *          management, e.g. rotating the oracle or the router role) goes to
 *          governance, the beacon owner; the oracle (RESOLVER_ROLE) must be
 *          a different key from the match ops key, the factory owner and
 *          the operator. The ops key therefore cannot grant itself
 *          RESOLVER_ROLE.
 *        - Ownership of the factory moves in two steps (Ownable2Step).
 *
 *      Each proxy is initialized with the factory as temporary admin, then
 *      wired (USDC, fee recipient, leaderboard split, router role, oracle) and
 *      handed to `_owner`; the factory renounces every role in the same
 *      transaction.
 */
contract PariMatchFactory is Ownable2Step {

    // ═══════════════════════════════════════════════════════════════════════
    // TYPES
    // ═══════════════════════════════════════════════════════════════════════

    enum SportType { FOOTBALL, BASKETBALL }

    /// @notice Sport id of football matches.
    uint8 public constant FOOTBALL   = uint8(SportType.FOOTBALL);
    /// @notice Sport id of basketball matches.
    uint8 public constant BASKETBALL = uint8(SportType.BASKETBALL);

    /// @notice Total fee a new match starts with (PariMatchBase.DEFAULT_FEE_BPS):
    ///         the leaderboard share written into new matches cannot exceed it.
    uint16 public constant MATCH_DEFAULT_FEE_BPS = 200;

    // ═══════════════════════════════════════════════════════════════════════
    // STATE
    // ═══════════════════════════════════════════════════════════════════════

    /// @notice Every match created by this factory.
    address[] public allMatches;
    /// @notice Sport of a match.
    mapping(address => SportType) public matchSportType;
    /// @notice Whether an address is a match created by this factory.
    mapping(address => bool)      public isMatch;

    /// @notice Beacon of every FootballPariMatch proxy (owned by `upgradeAdmin`).
    UpgradeableBeacon public immutable footballBeacon;

    /// @notice Beacon of every BasketballPariMatch proxy (owned by `upgradeAdmin`).
    UpgradeableBeacon public immutable basketballBeacon;

    // ─── Wiring config ─────────────────────────────────────────────────────

    /// @notice USDC token address passed to every new match.
    address public usdcToken;

    /// @notice Platform fee recipient passed to every new match.
    address public feeRecipient;

    /// @notice Swap router granted SWAP_ROUTER_ROLE on every new match.
    address public swapRouter;

    /// @notice LeaderboardRewards proxy wired into every new match as the
    ///         recipient of the leaderboard-fee split + the sink for
    ///         leaderboard notifications. May be `address(0)` — no-leaderboard
    ///         mode, all fees go to `feeRecipient`.
    address public leaderboardRewards;

    /// @notice Leaderboard's share of the total fee, in basis points OF THE
    ///         POOL. Default 100 (1%). The factory writes this into every
    ///         new match alongside `leaderboardRewards`.
    uint16 public leaderboardFeeBps;

    /// @notice Hot ops key allowed to create matches besides the owner, so
    ///         the owner can be a Safe while the backend keeps
    ///         creating matches. 0 = owner only.
    address public matchOperator;

    // ═══════════════════════════════════════════════════════════════════════
    // EVENTS
    // ═══════════════════════════════════════════════════════════════════════

    /// @dev Signature kept: the backend reads the proxy from topic[1].
    event MatchCreated(address indexed proxy, SportType sportType, address indexed owner);
    /// @notice The token, fee recipient and router given to new matches changed.
    event WiringSet(address indexed usdcToken, address indexed feeRecipient, address indexed swapRouter);
    /// @notice The leaderboard settings given to new matches changed.
    event LeaderboardWiringSet(address indexed leaderboard, uint16 leaderboardFeeBps);
    /// @notice The ops key allowed to create matches changed.
    event MatchOperatorSet(address indexed oldOperator, address indexed newOperator);

    // ═══════════════════════════════════════════════════════════════════════
    // ERRORS
    // ═══════════════════════════════════════════════════════════════════════

    error MatchNotFound(address matchAddress);
    error InvalidAddress();
    error WiringNotConfigured();
    error InvalidLeaderboardBps(uint16 bps);
    /// @notice The oracle must be a dedicated key.
    error OracleMustBeDistinct(address oracle);
    error NotOwnerOrOperator(address caller);

    // ═══════════════════════════════════════════════════════════════════════
    // CONSTRUCTOR
    // ═══════════════════════════════════════════════════════════════════════

    /// @param _footballImpl   Deployed FootballPariMatch implementation.
    /// @param _basketballImpl Deployed BasketballPariMatch implementation.
    /// @param _upgradeAdmin   Owner of both beacons: the only key able to
    ///                        change match code. Use a Safe (or a
    ///                        TimelockController run by the Safe).
    /// @dev   Implementations are deployed separately: embedding both in the
    ///        factory's creation code would exceed the 48 KB initcode limit
    ///        (EIP-3860).
    constructor(address _footballImpl, address _basketballImpl, address _upgradeAdmin)
        Ownable(msg.sender)
    {
        if (_footballImpl.code.length == 0 || _basketballImpl.code.length == 0) revert InvalidAddress();
        if (_upgradeAdmin == address(0)) revert InvalidAddress();
        footballBeacon   = new UpgradeableBeacon(_footballImpl, _upgradeAdmin);
        basketballBeacon = new UpgradeableBeacon(_basketballImpl, _upgradeAdmin);
        // Default to 1% of pool to the leaderboard (matches the 1% / 1%
        // distribution baseline). Owner can override via setLeaderboardWiring.
        leaderboardFeeBps = 100;
    }

    // ═══════════════════════════════════════════════════════════════════════
    // WIRING CONFIG
    // ═══════════════════════════════════════════════════════════════════════

    /// @notice Set the USDC token, fee recipient and router given to new matches. Owner only.
    function setWiring(address _usdcToken, address _feeRecipient, address _swapRouter)
        external
        onlyOwner
    {
        if (_usdcToken == address(0) || _feeRecipient == address(0) || _swapRouter == address(0))
            revert InvalidAddress();
        usdcToken    = _usdcToken;
        feeRecipient = _feeRecipient;
        swapRouter   = _swapRouter;
        emit WiringSet(_usdcToken, _feeRecipient, _swapRouter);
    }

    /// @notice Configure (or update) the leaderboard split applied to every
    ///         FUTURE match the factory creates. Existing matches are left
    ///         untouched — they keep whatever leaderboard recipient / bps
    ///         they were initialized with.
    /// @param _leaderboard Address of the LeaderboardRewards proxy. Pass
    ///                     `address(0)` (with `_bps = 0`) to disable the
    ///                     leaderboard split for new matches.
    /// @param _bps         Leaderboard's share of the pool, in basis points.
    ///                     Must be <= MATCH_DEFAULT_FEE_BPS. Validated here
    ///                     so a bad value fails now, not in
    ///                     every later createMatch.
    function setLeaderboardWiring(address _leaderboard, uint16 _bps) external onlyOwner {
        if (_leaderboard == address(0)) {
            if (_bps != 0) revert InvalidLeaderboardBps(_bps);
        } else {
            if (_leaderboard.code.length == 0) revert InvalidAddress();
            if (_bps > MATCH_DEFAULT_FEE_BPS) revert InvalidLeaderboardBps(_bps);
        }
        leaderboardRewards = _leaderboard;
        leaderboardFeeBps  = _bps;
        emit LeaderboardWiringSet(_leaderboard, _bps);
    }

    /// @notice Set (or clear with address(0)) the ops key allowed to create matches.
    function setMatchOperator(address _operator) external onlyOwner {
        address old = matchOperator;
        matchOperator = _operator;
        emit MatchOperatorSet(old, _operator);
    }

    modifier onlyOwnerOrOperator() {
        if (msg.sender != owner() && (msg.sender != matchOperator || matchOperator == address(0)))
            revert NotOwnerOrOperator(msg.sender);
        _;
    }

    // ═══════════════════════════════════════════════════════════════════════
    // MATCH DEPLOYMENT
    // ═══════════════════════════════════════════════════════════════════════

    /// @notice Deploy, initialize, and fully wire a FootballPariMatch proxy.
    /// @param _matchName Human-readable name (e.g. "Barcelona vs Real Madrid").
    /// @param _owner     Match ops key: receives ADMIN_ROLE + PAUSER_ROLE
    ///                   (market lifecycle, pause). DEFAULT_ADMIN_ROLE goes
    ///                   to governance (`upgradeAdmin()`).
    /// @param _oracle    Receives RESOLVER_ROLE. Must differ from `_owner`,
    ///                   the factory owner and `matchOperator`.
    /// @return proxy     Address of the ready-to-use match proxy.
    function createFootballMatch(
        string calldata _matchName,
        address _owner,
        address _oracle
    ) external onlyOwnerOrOperator returns (address proxy) {
        proxy = _createMatch(
            footballBeacon,
            abi.encodeWithSelector(FootballPariMatch.initialize.selector, _matchName, address(this)),
            SportType.FOOTBALL,
            _owner,
            _oracle
        );
    }

    /// @notice Deploy, initialize, and fully wire a BasketballPariMatch proxy.
    function createBasketballMatch(
        string calldata _matchName,
        address _owner,
        address _oracle
    ) external onlyOwnerOrOperator returns (address proxy) {
        proxy = _createMatch(
            basketballBeacon,
            abi.encodeWithSelector(BasketballPariMatch.initialize.selector, _matchName, address(this)),
            SportType.BASKETBALL,
            _owner,
            _oracle
        );
    }

    function _createMatch(
        UpgradeableBeacon beacon,
        bytes memory initData,
        SportType sport,
        address _owner,
        address _oracle
    ) internal returns (address proxy) {
        _requireWiring();
        if (_owner == address(0) || _oracle == address(0)) revert InvalidAddress();
        if (_oracle == _owner || _oracle == owner() || _oracle == matchOperator)
            revert OracleMustBeDistinct(_oracle);

        proxy = address(new BeaconProxy(address(beacon), initData));
        allMatches.push(proxy);
        isMatch[proxy]        = true;
        matchSportType[proxy] = sport;

        _wireMatch(proxy, _owner, _oracle, beacon.owner());
        emit MatchCreated(proxy, sport, _owner);
    }

    // ═══════════════════════════════════════════════════════════════════════
    // VIEW
    // ═══════════════════════════════════════════════════════════════════════

    /// @notice Current FootballPariMatch code (set by the beacon owner).
    function footballImplementation() public view returns (address) {
        return footballBeacon.implementation();
    }

    /// @notice Current BasketballPariMatch code (set by the beacon owner).
    function basketballImplementation() public view returns (address) {
        return basketballBeacon.implementation();
    }

    /// @notice Owner of the beacons, i.e. the only key able to change match code.
    function upgradeAdmin() external view returns (address) {
        return footballBeacon.owner();
    }

    /// @notice Every match created by this factory.
    function getAllMatches() external view returns (address[] memory) {
        return allMatches;
    }

    /// @notice Sport of a match. Reverts for an unknown address.
    function getSportType(address matchAddress) external view returns (SportType) {
        if (!isMatch[matchAddress]) revert MatchNotFound(matchAddress);
        return matchSportType[matchAddress];
    }

    /// @notice Current implementation for a sport id.
    function implementations(uint8 sport) external view returns (address) {
        if (sport == FOOTBALL)   return footballImplementation();
        if (sport == BASKETBALL) return basketballImplementation();
        revert InvalidAddress();
    }

    // ═══════════════════════════════════════════════════════════════════════
    // INTERNAL
    // ═══════════════════════════════════════════════════════════════════════

    function _requireWiring() internal view {
        if (usdcToken == address(0) || feeRecipient == address(0) || swapRouter == address(0))
            revert WiringNotConfigured();
    }

    /// @dev Full wiring sequence while the factory is the temporary admin.
    ///      After this function the factory holds NO role on the proxy.
    function _wireMatch(address proxy, address _owner, address _oracle, address governance) internal {
        PariMatchBase m = PariMatchBase(payable(proxy));

        // 1) Configure token + fee recipient (ADMIN_ROLE-gated).
        m.setUSDCToken(usdcToken);
        m.setFeeRecipient(feeRecipient);

        // 1b) Leaderboard split (optional; recipient first, then share).
        if (leaderboardRewards != address(0)) {
            m.setLeaderboardRecipient(leaderboardRewards);
            m.setLeaderboardFeeBps(leaderboardFeeBps);
        }

        // 2) Grant operational roles (DEFAULT_ADMIN_ROLE-gated).
        m.grantRole(m.SWAP_ROUTER_ROLE(), swapRouter);
        m.grantRole(m.RESOLVER_ROLE(),    _oracle);

        // 3) Ops roles to the match owner; role management to governance,
        //    so the ops key cannot grant itself RESOLVER_ROLE.
        m.grantRole(m.ADMIN_ROLE(),         _owner);
        m.grantRole(m.PAUSER_ROLE(),        _owner);
        m.grantRole(m.DEFAULT_ADMIN_ROLE(), governance);

        // 4) Renounce every factory role. DEFAULT_ADMIN last.
        m.renounceRole(m.ADMIN_ROLE(),         address(this));
        m.renounceRole(m.PAUSER_ROLE(),        address(this));
        m.renounceRole(m.DEFAULT_ADMIN_ROLE(), address(this));
    }
}
