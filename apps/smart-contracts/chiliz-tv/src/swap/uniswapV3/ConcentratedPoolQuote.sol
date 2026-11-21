// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {Math}              from "@openzeppelin/contracts/utils/math/Math.sol";
import {IConcentratedPool} from "../../interfaces/IConcentratedPool.sol";

/**
 * @title ConcentratedPoolQuote
 * @notice Read-only exact-input quote for a Uniswap-V3-style pool.
 * @dev    `NetworkRouter` quotes through a `view` function, and the DEX
 *         quoters cannot run under STATICCALL because they call `pool.swap`
 *         and revert. This library replays the pool's swap loop from public
 *         state instead: same tick search, same step math, same rounding, so
 *         the result is the swap's output in the same block.
 */
library ConcentratedPoolQuote {
    int24   internal constant MIN_TICK = -887272;
    int24   internal constant MAX_TICK = 887272;
    uint160 internal constant MIN_SQRT_RATIO = 4295128739;
    uint160 internal constant MAX_SQRT_RATIO = 1461446703485210103287273052203988822378723970342;

    /// @dev Bounds the gas of a quote. A swap crossing more than this many
    ///      steps has no quote; the swap itself is not limited.
    uint256 internal constant MAX_STEPS = 256;

    uint256 private constant Q96 = 1 << 96;
    uint256 private constant FEE_DENOMINATOR = 1e6;

    /// @notice The pool cannot absorb the amount within `MAX_STEPS` steps.
    error QuoteUnavailable();
    error TickOutOfRange(int24 tick);

    /// @notice Output of swapping `amountIn` on `pool` at the current state.
    function exactInput(IConcentratedPool pool, bool zeroForOne, uint256 amountIn)
        internal
        view
        returns (uint256 amountOut)
    {
        (uint160 price, int24 tick) = pool.slot0();
        uint128 liquidity = pool.liquidity();
        uint24 fee = pool.fee();
        int24 spacing = pool.tickSpacing();
        uint256 remaining = amountIn;

        for (uint256 step; remaining != 0; ++step) {
            if (step == MAX_STEPS) revert QuoteUnavailable();

            (int24 next, bool initialized) = _nextInitializedTick(pool, tick, spacing, zeroForOne);
            if (next < MIN_TICK) next = MIN_TICK;
            else if (next > MAX_TICK) next = MAX_TICK;

            uint160 target = sqrtRatioAtTick(next);
            uint256 stepIn;
            uint256 stepOut;
            uint256 stepFee;
            (price, stepIn, stepOut, stepFee) = _computeStep(price, target, liquidity, remaining, fee);
            remaining -= stepIn + stepFee;
            amountOut += stepOut;

            // Short of the target means the input ran out inside this range.
            if (price != target) break;

            if (initialized) {
                (, int128 net) = pool.ticks(next);
                if (zeroForOne) net = -net;
                liquidity = net < 0 ? liquidity - uint128(-net) : liquidity + uint128(net);
            }
            tick = zeroForOne ? next - 1 : next;
        }
    }

    /// @notice sqrt(1.0001^tick) as a Q64.96, rounded up like the pools do.
    function sqrtRatioAtTick(int24 tick) internal pure returns (uint160) {
        if (tick < MIN_TICK || tick > MAX_TICK) revert TickOutOfRange(tick);
        uint256 absTick = tick < 0 ? uint256(-int256(tick)) : uint256(int256(tick));

        // Each constant is 2^128 / sqrt(1.0001)^(2^bit).
        uint256 ratio = absTick & 0x1 != 0 ? 0xfffcb933bd6fad37aa2d162d1a594001 : 1 << 128;
        if (absTick & 0x2 != 0) ratio = (ratio * 0xfff97272373d413259a46990580e213a) >> 128;
        if (absTick & 0x4 != 0) ratio = (ratio * 0xfff2e50f5f656932ef12357cf3c7fdcc) >> 128;
        if (absTick & 0x8 != 0) ratio = (ratio * 0xffe5caca7e10e4e61c3624eaa0941cd0) >> 128;
        if (absTick & 0x10 != 0) ratio = (ratio * 0xffcb9843d60f6159c9db58835c926644) >> 128;
        if (absTick & 0x20 != 0) ratio = (ratio * 0xff973b41fa98c081472e6896dfb254c0) >> 128;
        if (absTick & 0x40 != 0) ratio = (ratio * 0xff2ea16466c96a3843ec78b326b52861) >> 128;
        if (absTick & 0x80 != 0) ratio = (ratio * 0xfe5dee046a99a2a811c461f1969c3053) >> 128;
        if (absTick & 0x100 != 0) ratio = (ratio * 0xfcbe86c7900a88aedcffc83b479aa3a4) >> 128;
        if (absTick & 0x200 != 0) ratio = (ratio * 0xf987a7253ac413176f2b074cf7815e54) >> 128;
        if (absTick & 0x400 != 0) ratio = (ratio * 0xf3392b0822b70005940c7a398e4b70f3) >> 128;
        if (absTick & 0x800 != 0) ratio = (ratio * 0xe7159475a2c29b7443b29c7fa6e889d9) >> 128;
        if (absTick & 0x1000 != 0) ratio = (ratio * 0xd097f3bdfd2022b8845ad8f792aa5825) >> 128;
        if (absTick & 0x2000 != 0) ratio = (ratio * 0xa9f746462d870fdf8a65dc1f90e061e5) >> 128;
        if (absTick & 0x4000 != 0) ratio = (ratio * 0x70d869a156d2a1b890bb3df62baf32f7) >> 128;
        if (absTick & 0x8000 != 0) ratio = (ratio * 0x31be135f97d08fd981231505542fcfa6) >> 128;
        if (absTick & 0x10000 != 0) ratio = (ratio * 0x9aa508b5b7a84e1c677de54f3e99bc9) >> 128;
        if (absTick & 0x20000 != 0) ratio = (ratio * 0x5d6af8dedb81196699c329225ee604) >> 128;
        if (absTick & 0x40000 != 0) ratio = (ratio * 0x2216e584f5fa1ea926041bedfe98) >> 128;
        if (absTick & 0x80000 != 0) ratio = (ratio * 0x48a170391f7dc42444e8fa2) >> 128;

        if (tick > 0) ratio = type(uint256).max / ratio;
        return uint160((ratio >> 32) + (ratio % (1 << 32) == 0 ? 0 : 1));
    }

    function _nextInitializedTick(IConcentratedPool pool, int24 tick, int24 spacing, bool lte)
        private
        view
        returns (int24 next, bool initialized)
    {
        int24 compressed = tick / spacing;
        if (tick < 0 && tick % spacing != 0) compressed--;

        if (lte) {
            (int16 word, uint8 bit) = _position(compressed);
            uint256 masked = pool.tickBitmap(word) & ((uint256(1) << bit) - 1 + (uint256(1) << bit));
            initialized = masked != 0;
            int24 distance = initialized ? int24(int256(uint256(bit) - Math.log2(masked))) : int24(uint24(bit));
            next = (compressed - distance) * spacing;
        } else {
            compressed += 1;
            (int16 word, uint8 bit) = _position(compressed);
            uint256 masked = pool.tickBitmap(word) & ~((uint256(1) << bit) - 1);
            initialized = masked != 0;
            int24 distance = initialized
                ? int24(int256(_leastSignificantBit(masked) - uint256(bit)))
                : int24(uint24(type(uint8).max - bit));
            next = (compressed + distance) * spacing;
        }
    }

    function _position(int24 compressed) private pure returns (int16 word, uint8 bit) {
        word = int16(compressed >> 8);
        bit = uint8(uint24(compressed & 0xff));
    }

    function _leastSignificantBit(uint256 x) private pure returns (uint256) {
        unchecked {
            return Math.log2(x & (~x + 1));
        }
    }

    function _computeStep(uint160 current, uint160 target, uint128 liquidity, uint256 remaining, uint24 fee)
        private
        pure
        returns (uint160 next, uint256 amountIn, uint256 amountOut, uint256 feeAmount)
    {
        bool zeroForOne = current >= target;
        uint256 remainingLessFee = Math.mulDiv(remaining, FEE_DENOMINATOR - fee, FEE_DENOMINATOR);

        amountIn = _amountIn(zeroForOne, target, current, liquidity);
        if (remainingLessFee >= amountIn) {
            next = target;
        } else {
            next = _nextPriceFromInput(current, liquidity, remainingLessFee, zeroForOne);
            amountIn = _amountIn(zeroForOne, next, current, liquidity);
        }

        amountOut = zeroForOne
            ? _amount1Delta(next, current, liquidity, false)
            : _amount0Delta(current, next, liquidity, false);
        feeAmount = next != target
            ? remaining - amountIn
            : Math.mulDiv(amountIn, fee, FEE_DENOMINATOR - fee, Math.Rounding.Ceil);
    }

    function _amountIn(bool zeroForOne, uint160 to, uint160 from, uint128 liquidity) private pure returns (uint256) {
        return zeroForOne ? _amount0Delta(to, from, liquidity, true) : _amount1Delta(from, to, liquidity, true);
    }

    function _amount0Delta(uint160 lower, uint160 upper, uint128 liquidity, bool roundUp)
        private
        pure
        returns (uint256)
    {
        uint256 numerator = uint256(liquidity) << 96;
        uint256 width = upper - lower;
        return roundUp
            ? Math.ceilDiv(Math.mulDiv(numerator, width, upper, Math.Rounding.Ceil), lower)
            : Math.mulDiv(numerator, width, upper) / lower;
    }

    function _amount1Delta(uint160 lower, uint160 upper, uint128 liquidity, bool roundUp)
        private
        pure
        returns (uint256)
    {
        return Math.mulDiv(liquidity, upper - lower, Q96, roundUp ? Math.Rounding.Ceil : Math.Rounding.Floor);
    }

    /// @dev Only reached when the input stops short of the target, so the
    ///      result stays between `price` and the target and fits in a uint160.
    function _nextPriceFromInput(uint160 price, uint128 liquidity, uint256 amount, bool zeroForOne)
        private
        pure
        returns (uint160)
    {
        if (amount == 0) return price;

        if (zeroForOne) {
            uint256 numerator = uint256(liquidity) << 96;
            unchecked {
                uint256 product = amount * price;
                if (product / amount == price) {
                    uint256 denominator = numerator + product;
                    if (denominator >= numerator) {
                        return uint160(Math.mulDiv(numerator, price, denominator, Math.Rounding.Ceil));
                    }
                }
            }
            return uint160(Math.ceilDiv(numerator, numerator / price + amount));
        }

        uint256 quotient = amount <= type(uint160).max
            ? (amount << 96) / liquidity
            : Math.mulDiv(amount, Q96, liquidity);
        return uint160(uint256(price) + quotient);
    }
}
