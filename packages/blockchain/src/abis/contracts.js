"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BASKETBALL_MATCH_ABI = exports.FOOTBALL_MATCH_FULL_ABI = exports.BETTING_MATCH_ABI = exports.BETTING_MATCH_FACTORY_ABI = exports.STREAM_WALLET_FACTORY_ABI = exports.STREAM_WALLET_ABI = exports.CHILIZ_SWAP_ROUTER_ABI = exports.LIQUIDITY_POOL_ABI = void 0;
const LiquidityPool_json_1 = __importDefault(require("./json/LiquidityPool.json"));
const ChilizSwapRouter_json_1 = __importDefault(require("./json/ChilizSwapRouter.json"));
const StreamWallet_json_1 = __importDefault(require("./json/StreamWallet.json"));
const StreamWalletFactory_json_1 = __importDefault(require("./json/StreamWalletFactory.json"));
const BettingMatchFactory_json_1 = __importDefault(require("./json/BettingMatchFactory.json"));
const BettingMatch_json_1 = __importDefault(require("./json/BettingMatch.json"));
const FootballMatch_json_1 = __importDefault(require("./json/FootballMatch.json"));
const BasketballMatch_json_1 = __importDefault(require("./json/BasketballMatch.json"));
// JSON imports lose `as const` literal typing, but viem's runtime calls (readContract,
// writeContract, getLogs with `event:`) accept Abi at the type level. For full literal
// inference (compile-time function-name autocompletion), the frontend uses the wagmi-
// generated hooks instead.
exports.LIQUIDITY_POOL_ABI = LiquidityPool_json_1.default.abi;
exports.CHILIZ_SWAP_ROUTER_ABI = ChilizSwapRouter_json_1.default.abi;
exports.STREAM_WALLET_ABI = StreamWallet_json_1.default.abi;
exports.STREAM_WALLET_FACTORY_ABI = StreamWalletFactory_json_1.default.abi;
exports.BETTING_MATCH_FACTORY_ABI = BettingMatchFactory_json_1.default.abi;
exports.BETTING_MATCH_ABI = BettingMatch_json_1.default.abi;
exports.FOOTBALL_MATCH_FULL_ABI = FootballMatch_json_1.default.abi;
exports.BASKETBALL_MATCH_ABI = BasketballMatch_json_1.default.abi;
