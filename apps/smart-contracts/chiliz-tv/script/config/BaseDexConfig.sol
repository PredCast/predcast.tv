// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {IERC20Metadata} from "@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol";
import {ConcentratedPoolAdapter} from "../../src/swap/ConcentratedPoolAdapter.sol";
import {IConcentratedPool}       from "../../src/interfaces/IConcentratedPool.sol";

interface IPoolWithFactory {
    function factory() external view returns (address);
}

interface IUniswapV3PoolFactory {
    function getPool(address tokenA, address tokenB, uint24 fee) external view returns (address);
}

interface ISlipstreamPoolFactory {
    function getPool(address tokenA, address tokenB, int24 tickSpacing) external view returns (address);
}

/**
 * @title BaseDexConfig
 * @notice Every DEX address the Base deployment uses, selected by chain id.
 * @dev    Six fan-token contract addresses are a different token on Chiliz and
 *         on Base (0xDD15...7EC8 is PERSIB on Chiliz and PSG on Base), so
 *         addresses must not be copied between networks. `verify` reads each
 *         symbol, pool and factory on the target chain before anything is
 *         deployed.
 *
 *         Each pool is the deepest one for its pair, read on-chain in
 *         November 2026. Liquidity moves: `ConcentratedPoolAdapter.setRoute`
 *         replaces a pool without a redeployment.
 */
library BaseDexConfig {
    uint256 internal constant BASE_MAINNET = 8453;
    uint256 internal constant BASE_SEPOLIA = 84532;

    enum Dex { UniswapV3, Slipstream }

    struct TokenSpec {
        address token;
        string  symbol;
    }

    struct PoolSpec {
        address pool;
        Dex     dex;
        address factory;
        /// @dev Fee on Uniswap V3, tick spacing on Slipstream: each DEX's pool key.
        int24   poolKey;
    }

    struct RouteSpec {
        address   tokenIn;
        address   tokenOut;
        address[] pools;
    }

    struct Network {
        address      weth;
        address      usdc;
        TokenSpec[]  tokens;
        PoolSpec[]   pools;
        RouteSpec[]  routes;
    }

    address private constant WETH = 0x4200000000000000000000000000000000000006;

    // Base mainnet
    address private constant BASE_USDC   = 0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913;
    address private constant BASE_CHZ    = 0x70c8392DE9b39a1E48d12A70Af6FF4Be25D6D0A2;
    address private constant BASE_PSG    = 0xDD15623d107c639aF0C5127AFFA26d3f20327EC8;
    address private constant BASE_AFC    = 0x580edA966a8129C3c01D149871B47feFcC599D28;
    address private constant BASE_PEPPER = 0x5e985E4BCa4664E985f3FaF8140EbA25b10E28C2;

    address private constant SLIPSTREAM_FACTORY = 0x9CB220581b91b0C83223012FE69688b92aD07a76;
    address private constant POOL_WETH_USDC   = 0x4A7af46bC8aBc00048c6c7920a1488DAF568366c;
    address private constant POOL_CHZ_USDC    = 0xF97dc64314813De750169Ce924C92564bc9fF411;
    address private constant POOL_PSG_USDC    = 0xce9d679f6451EC5B6B9ECbE49A59e59Ce24bbe2B;
    address private constant POOL_AFC_USDC    = 0x3B62856717d896b0fdBF72CacD0184e5091e5740;
    address private constant POOL_PEPPER_CHZ  = 0x125B160e0De44156F48f61990FAcf14A5328B972;

    // Base Sepolia. Aerodrome is not deployed there and no fan token exists.
    address private constant SEPOLIA_USDC = 0x036CbD53842c5426634e7929541eC2318f3dCF7e;
    address private constant SEPOLIA_V3_FACTORY = 0x4752ba5DBc23f44D87826276BF6Fd6b1C372aD24;
    address private constant SEPOLIA_POOL_WETH_USDC = 0x46880b404CD35c165EDdefF7421019F8dD25F4Ad;

    function isSupported(uint256 chainId) internal pure returns (bool) {
        return chainId == BASE_MAINNET || chainId == BASE_SEPOLIA;
    }

    function forChain(uint256 chainId) internal pure returns (Network memory) {
        if (chainId == BASE_MAINNET) return _baseMainnet();
        if (chainId == BASE_SEPOLIA) return _baseSepolia();
        revert("BaseDexConfig: unsupported chain");
    }

    /// @notice Check the config against the chain it is about to be used on.
    function verify(Network memory net) internal view {
        for (uint256 i; i < net.tokens.length; ++i) {
            TokenSpec memory spec = net.tokens[i];
            require(spec.token.code.length != 0, string.concat("BaseDexConfig: no code for ", spec.symbol));
            require(
                keccak256(bytes(IERC20Metadata(spec.token).symbol())) == keccak256(bytes(spec.symbol)),
                string.concat("BaseDexConfig: wrong token for ", spec.symbol)
            );
        }

        for (uint256 i; i < net.pools.length; ++i) {
            _verifyPool(net, net.pools[i]);
        }

        for (uint256 i; i < net.routes.length; ++i) {
            RouteSpec memory route = net.routes[i];
            require(_isListedToken(net, route.tokenIn), "BaseDexConfig: route token not listed");
            require(_isListedToken(net, route.tokenOut), "BaseDexConfig: route token not listed");
            for (uint256 j; j < route.pools.length; ++j) {
                require(_isListedPool(net, route.pools[j]), "BaseDexConfig: route pool not listed");
            }
        }
    }

    /// @notice Deploy the adapter owned by the caller and register every route.
    function deployAdapter(Network memory net) internal returns (ConcentratedPoolAdapter adapter) {
        adapter = new ConcentratedPoolAdapter(net.weth);
        for (uint256 i; i < net.routes.length; ++i) {
            RouteSpec memory route = net.routes[i];
            adapter.setRoute(route.tokenIn, route.tokenOut, route.pools);
        }
    }

    function _verifyPool(Network memory net, PoolSpec memory spec) private view {
        IConcentratedPool pool = IConcentratedPool(spec.pool);
        require(spec.pool.code.length != 0, "BaseDexConfig: pool has no code");
        require(IPoolWithFactory(spec.pool).factory() == spec.factory, "BaseDexConfig: pool from another factory");

        address token0 = pool.token0();
        address token1 = pool.token1();
        require(_isListedToken(net, token0) && _isListedToken(net, token1), "BaseDexConfig: pool token not listed");

        address registered = spec.dex == Dex.UniswapV3
            ? IUniswapV3PoolFactory(spec.factory).getPool(token0, token1, uint24(spec.poolKey))
            : ISlipstreamPoolFactory(spec.factory).getPool(token0, token1, spec.poolKey);
        require(registered == spec.pool, "BaseDexConfig: factory does not know this pool");
        require(pool.liquidity() != 0, "BaseDexConfig: pool has no active liquidity");
    }

    function _isListedToken(Network memory net, address token) private pure returns (bool) {
        for (uint256 i; i < net.tokens.length; ++i) {
            if (net.tokens[i].token == token) return true;
        }
        return false;
    }

    function _isListedPool(Network memory net, address pool) private pure returns (bool) {
        for (uint256 i; i < net.pools.length; ++i) {
            if (net.pools[i].pool == pool) return true;
        }
        return false;
    }

    function _baseMainnet() private pure returns (Network memory net) {
        net.weth = WETH;
        net.usdc = BASE_USDC;

        net.tokens = new TokenSpec[](6);
        net.tokens[0] = TokenSpec(WETH, "WETH");
        net.tokens[1] = TokenSpec(BASE_USDC, "USDC");
        net.tokens[2] = TokenSpec(BASE_CHZ, "CHZ");
        net.tokens[3] = TokenSpec(BASE_PSG, "PSG");
        net.tokens[4] = TokenSpec(BASE_AFC, "AFC");
        net.tokens[5] = TokenSpec(BASE_PEPPER, "PEPPER");

        net.pools = new PoolSpec[](5);
        net.pools[0] = PoolSpec(POOL_WETH_USDC, Dex.Slipstream, SLIPSTREAM_FACTORY, 50);
        net.pools[1] = PoolSpec(POOL_CHZ_USDC, Dex.Slipstream, SLIPSTREAM_FACTORY, 50);
        net.pools[2] = PoolSpec(POOL_PSG_USDC, Dex.Slipstream, SLIPSTREAM_FACTORY, 100);
        net.pools[3] = PoolSpec(POOL_AFC_USDC, Dex.Slipstream, SLIPSTREAM_FACTORY, 100);
        net.pools[4] = PoolSpec(POOL_PEPPER_CHZ, Dex.Slipstream, SLIPSTREAM_FACTORY, 50);

        net.routes = new RouteSpec[](5);
        net.routes[0] = RouteSpec(WETH, BASE_USDC, _hops(POOL_WETH_USDC));
        net.routes[1] = RouteSpec(BASE_CHZ, BASE_USDC, _hops(POOL_CHZ_USDC));
        net.routes[2] = RouteSpec(BASE_PSG, BASE_USDC, _hops(POOL_PSG_USDC));
        net.routes[3] = RouteSpec(BASE_AFC, BASE_USDC, _hops(POOL_AFC_USDC));
        net.routes[4] = RouteSpec(BASE_PEPPER, BASE_USDC, _hops(POOL_PEPPER_CHZ, POOL_CHZ_USDC));
    }

    function _baseSepolia() private pure returns (Network memory net) {
        net.weth = WETH;
        net.usdc = SEPOLIA_USDC;

        net.tokens = new TokenSpec[](2);
        net.tokens[0] = TokenSpec(WETH, "WETH");
        net.tokens[1] = TokenSpec(SEPOLIA_USDC, "USDC");

        net.pools = new PoolSpec[](1);
        net.pools[0] = PoolSpec(SEPOLIA_POOL_WETH_USDC, Dex.UniswapV3, SEPOLIA_V3_FACTORY, 3000);

        net.routes = new RouteSpec[](1);
        net.routes[0] = RouteSpec(WETH, SEPOLIA_USDC, _hops(SEPOLIA_POOL_WETH_USDC));
    }

    function _hops(address a) private pure returns (address[] memory pools) {
        pools = new address[](1);
        pools[0] = a;
    }

    function _hops(address a, address b) private pure returns (address[] memory pools) {
        pools = new address[](2);
        pools[0] = a;
        pools[1] = b;
    }
}
