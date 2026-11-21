// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {PariMatchFactory}    from "../../src/pari/PariMatchFactory.sol";
import {FootballPariMatch}   from "../../src/pari/FootballPariMatch.sol";
import {BasketballPariMatch} from "../../src/pari/BasketballPariMatch.sol";

/// @notice Single place where tests build a PariMatchFactory, so changes to
///         its constructor only touch this file. Internal library function:
///         runs in the caller's context, so the caller owns the factory.
library PariFactoryDeployer {
    /// @dev The caller (test contract) owns the factory AND both beacons.
    function deploy() internal returns (PariMatchFactory) {
        return deploy(address(this));
    }

    function deploy(address upgradeAdmin) internal returns (PariMatchFactory) {
        return new PariMatchFactory(
            address(new FootballPariMatch()), address(new BasketballPariMatch()), upgradeAdmin
        );
    }
}
