module.exports = {

"[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/package.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "version": (()=>version)
});
'use client';
var version = "4.73.2";
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/_virtual/_tslib.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "__awaiter": (()=>__awaiter),
    "__rest": (()=>__rest)
});
'use client';
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/logger.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "logger": (()=>logger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$logger$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$logger$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+logger@4.73.2/node_modules/@dynamic-labs/logger/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$logger$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$logger$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+logger@4.73.2/node_modules/@dynamic-labs/logger/src/index.js [app-ssr] (ecmascript) <locals>");
'use client';
;
const logger = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$logger$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$logger$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Logger"]('ethereum-core');
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/estimateL1Fee/opStack/abi.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "gasPriceOracleAbi": (()=>gasPriceOracleAbi),
    "gasPriceOracleAbiAddress": (()=>gasPriceOracleAbiAddress)
});
'use client';
/* eslint-disable max-len */ const gasPriceOracleAbiAddress = '0x420000000000000000000000000000000000000F';
/**
 * ABI for the OP Stack [`GasPriceOracle` contract](https://github.com/ethereum-optimism/optimism/blob/develop/packages/contracts-bedrock/src/L2/GasPriceOracle.sol).
 * @see https://optimistic.etherscan.io/address/0x420000000000000000000000000000000000000f
 */ const gasPriceOracleAbi = [
    {
        inputs: [
            {
                internalType: 'bytes',
                name: '_data',
                type: 'bytes'
            }
        ],
        name: 'getL1Fee',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    }
];
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/estimateL1Fee/opStack/estimateL1Fee.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "estimateL1Fee": (()=>estimateL1Fee),
    "opStackSupportedChains": (()=>opStackSupportedChains)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/_virtual/_tslib.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$serializeTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/utils/transaction/serializeTransaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$optimism$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/chains/definitions/optimism.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$optimismGoerli$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/chains/definitions/optimismGoerli.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$optimismSepolia$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/chains/definitions/optimismSepolia.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/chains/definitions/base.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$baseGoerli$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/chains/definitions/baseGoerli.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$baseSepolia$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/chains/definitions/baseSepolia.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$estimateL1Fee$2f$opStack$2f$abi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/estimateL1Fee/opStack/abi.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const estimateL1Fee = (publicClient, transaction)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, void 0, void 0, function*() {
        const serializedTransaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$serializeTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeTransaction"])(Object.assign(Object.assign({
            chainId: publicClient.chain.id
        }, transaction), {
            type: transaction.type ? transaction.type : 'eip1559'
        }));
        return publicClient.readContract({
            abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$estimateL1Fee$2f$opStack$2f$abi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gasPriceOracleAbi"],
            address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$estimateL1Fee$2f$opStack$2f$abi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gasPriceOracleAbiAddress"],
            args: [
                serializedTransaction
            ],
            functionName: 'getL1Fee'
        });
    });
const opStackSupportedChains = [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$optimism$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["optimism"].id,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$optimismGoerli$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["optimismGoerli"].id,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$optimismSepolia$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["optimismSepolia"].id,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["base"].id,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$baseGoerli$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["baseGoerli"].id,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$baseSepolia$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["baseSepolia"].id
];
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/chainsMap/chainsMap.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "chainsMap": (()=>chainsMap)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/chains/index.js [app-ssr] (ecmascript)");
'use client';
;
// eslint-disable-next-line import/no-namespace
const chainsMap = Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__).reduce((acc, chain)=>{
    acc[chain.id] = chain;
    return acc;
}, {});
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/erc20/abi.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "erc20Abi": (()=>erc20Abi)
});
'use client';
/* eslint-disable max-len */ const erc20Abi = [
    {
        constant: true,
        inputs: [],
        name: 'name',
        outputs: [
            {
                name: '',
                type: 'string'
            }
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: false,
        inputs: [
            {
                name: '_spender',
                type: 'address'
            },
            {
                name: '_value',
                type: 'uint256'
            }
        ],
        name: 'approve',
        outputs: [
            {
                name: '',
                type: 'bool'
            }
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        constant: true,
        inputs: [],
        name: 'totalSupply',
        outputs: [
            {
                name: '',
                type: 'uint256'
            }
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: false,
        inputs: [
            {
                name: '_from',
                type: 'address'
            },
            {
                name: '_to',
                type: 'address'
            },
            {
                name: '_value',
                type: 'uint256'
            }
        ],
        name: 'transferFrom',
        outputs: [
            {
                name: '',
                type: 'bool'
            }
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        constant: true,
        inputs: [],
        name: 'decimals',
        outputs: [
            {
                name: '',
                type: 'uint8'
            }
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: true,
        inputs: [
            {
                name: '_owner',
                type: 'address'
            }
        ],
        name: 'balanceOf',
        outputs: [
            {
                name: 'balance',
                type: 'uint256'
            }
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: true,
        inputs: [],
        name: 'symbol',
        outputs: [
            {
                name: '',
                type: 'string'
            }
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: false,
        inputs: [
            {
                name: '_to',
                type: 'address'
            },
            {
                name: '_value',
                type: 'uint256'
            }
        ],
        name: 'transfer',
        outputs: [
            {
                name: '',
                type: 'bool'
            }
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        constant: true,
        inputs: [
            {
                name: '_owner',
                type: 'address'
            },
            {
                name: '_spender',
                type: 'address'
            }
        ],
        name: 'allowance',
        outputs: [
            {
                name: '',
                type: 'uint256'
            }
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        payable: true,
        stateMutability: 'payable',
        type: 'fallback'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'owner',
                type: 'address'
            },
            {
                indexed: true,
                name: 'spender',
                type: 'address'
            },
            {
                indexed: false,
                name: 'value',
                type: 'uint256'
            }
        ],
        name: 'Approval',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'from',
                type: 'address'
            },
            {
                indexed: true,
                name: 'to',
                type: 'address'
            },
            {
                indexed: false,
                name: 'value',
                type: 'uint256'
            }
        ],
        name: 'Transfer',
        type: 'event'
    }
];
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/Eip1559FeeFeed.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Eip1559FeeFeed": (()=>Eip1559FeeFeed)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/_virtual/_tslib.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/logger.js [app-ssr] (ecmascript)");
'use client';
;
;
class Eip1559FeeFeed {
    constructor({ publicClient, initialGasLimit, initialMaxFeePerGas }){
        this.fee = {
            gas: BigInt(0)
        };
        this.publicClient = publicClient;
        this.initialGasLimit = initialGasLimit;
        this.initialMaxFeePerGas = initialMaxFeePerGas;
    }
    fetchFee() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            try {
                const l1Fee = yield this.estimateL1Fee();
                // Handle the case where max fee per gas is explicitly set to 0
                if (this.initialGasLimit && this.initialMaxFeePerGas === BigInt(0)) {
                    this.fee.gas = l1Fee;
                    this.maxPriorityFeePerGas = BigInt(0);
                    this.maxFeePerGas = BigInt(0);
                    return;
                }
                // Original transaction already defined the gas limit and max fee per gas
                if (this.initialGasLimit && this.initialMaxFeePerGas) {
                    this.fee.gas = this.initialGasLimit * this.initialMaxFeePerGas + l1Fee;
                    return;
                }
                // Estimate the gas limit
                const gasLimit = yield this.estimateGas();
                let overrideMaxFeePerGas = false;
                //Special case: if a developer sets the max fee per gas to 0, we need to override the max fee per gas to 0
                // So that it doesn't magically gets overriden later on.
                if (this.initialMaxFeePerGas === BigInt(0)) {
                    overrideMaxFeePerGas = true;
                }
                // Original transaction defined the max fee per gas
                if (this.initialMaxFeePerGas || overrideMaxFeePerGas) {
                    this.fee.gas = gasLimit * this.initialMaxFeePerGas + l1Fee;
                    if (overrideMaxFeePerGas) {
                        this.maxPriorityFeePerGas = BigInt(0);
                        this.maxFeePerGas = BigInt(0);
                    }
                    return;
                }
                // Estimate max fee per gas
                const estimatedFeesPerGas = yield this.publicClient.estimateFeesPerGas();
                if (!estimatedFeesPerGas || !estimatedFeesPerGas.maxFeePerGas) {
                    return;
                }
                this.fee.gas = gasLimit * estimatedFeesPerGas.maxFeePerGas + l1Fee;
                this.maxFeePerGas = this.maxFeePerGas === BigInt(0) ? this.maxFeePerGas : estimatedFeesPerGas.maxFeePerGas;
                this.maxPriorityFeePerGas = this.maxPriorityFeePerGas === BigInt(0) ? this.maxPriorityFeePerGas : estimatedFeesPerGas.maxPriorityFeePerGas;
            } catch (error) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].debug(error);
                return undefined;
            }
        });
    }
}
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/estimateL1Fee/estimateL1Fee.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "estimateL1Fee": (()=>estimateL1Fee),
    "isL1FeeSupportedByChain": (()=>isL1FeeSupportedByChain)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/_virtual/_tslib.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$estimateL1Fee$2f$opStack$2f$estimateL1Fee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/estimateL1Fee/opStack/estimateL1Fee.js [app-ssr] (ecmascript)");
'use client';
;
;
/**
 * Estimates the L1 fee for the transaction.
 * Currently only supports opStack.
 */ const estimateL1Fee = (publicClient, transaction)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, void 0, void 0, function*() {
        const { chain } = publicClient;
        if (!chain) {
            throw new Error('Chain is not defined');
        }
        const publicClientWithChain = publicClient;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$estimateL1Fee$2f$opStack$2f$estimateL1Fee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["opStackSupportedChains"].includes(chain.id)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$estimateL1Fee$2f$opStack$2f$estimateL1Fee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["estimateL1Fee"])(publicClientWithChain, transaction);
        }
        throw new Error('Chain is not supported');
    });
const estimateL1FeeSupportedChains = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$estimateL1Fee$2f$opStack$2f$estimateL1Fee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["opStackSupportedChains"]
];
/**
 * Checks if the chain supports L1 fee estimation.
 */ const isL1FeeSupportedByChain = (chainId)=>estimateL1FeeSupportedChains.includes(chainId);
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/validateAddressFormat/validateAddressFormat.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "validateAddressFormat": (()=>validateAddressFormat)
});
'use client';
const validateAddressFormat = (address)=>/^0x[0-9a-fA-F]{40}$/.test(address);
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/parseEther/parseEther.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "parseEther": (()=>parseEther)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$parseEther$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/utils/unit/parseEther.js [app-ssr] (ecmascript)");
'use client';
;
const parseEther = (input)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$parseEther$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseEther"])(input, 'wei');
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/formatEther/formatEther.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "formatEther": (()=>formatEther)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatEther$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/utils/unit/formatEther.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$formatNumberText$2f$formatNumberText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/formatNumberText/formatNumberText.js [app-ssr] (ecmascript)");
'use client';
;
;
const formatEther = (value, { precision } = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$formatNumberText$2f$formatNumberText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatNumberText"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatEther$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatEther"])(value), {
        precision
    });
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/getTransactionRecipient.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getTransactionRecipient": (()=>getTransactionRecipient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/utils/abi/decodeAbiParameters.js [app-ssr] (ecmascript)");
'use client';
;
const getTransactionRecipient = (data, to)=>{
    // 0xa9059cbb is the function selector for the transfer function
    // so we can use it to check if the transaction is a transfer
    // then decode the transaction data to get the recipient
    if (data === null || data === void 0 ? void 0 : data.startsWith('0xa9059cbb')) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeAbiParameters"])([
            {
                name: 'x',
                type: 'address'
            },
            {
                name: 'x',
                type: 'uint256'
            }
        ], '0x' + (data === null || data === void 0 ? void 0 : data.slice(10)))[0];
    }
    // if the data is 0x or undefined, then the recipient is the "to" address
    if (!data || data === '0x') {
        return to !== null && to !== void 0 ? to : undefined;
    }
    return undefined;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/ViemUiTransaction/ViemUiTransaction.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ViemUiTransaction": (()=>ViemUiTransaction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/_virtual/_tslib.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$parseUnits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/utils/unit/parseUnits.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/utils/unit/formatUnits.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/errors/transaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/errors/base.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/utils/encoding/fromHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$UserRejectedTransactionError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/UserRejectedTransactionError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$Eip1559FeeFeed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/Eip1559FeeFeed.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$estimateL1Fee$2f$estimateL1Fee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/estimateL1Fee/estimateL1Fee.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$validateAddressFormat$2f$validateAddressFormat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/validateAddressFormat/validateAddressFormat.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$parseEther$2f$parseEther$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/parseEther/parseEther.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$formatEther$2f$formatEther$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/formatEther/formatEther.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$getTransactionRecipient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/getTransactionRecipient.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
class ViemUiTransaction extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$Eip1559FeeFeed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Eip1559FeeFeed"] {
    constructor({ transaction, onSubmit, publicClient, account }){
        super({
            initialGasLimit: transaction.gas,
            initialMaxFeePerGas: transaction.maxFeePerGas,
            publicClient
        });
        this.chain = 'EVM';
        this.validateAddressFormat = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$validateAddressFormat$2f$validateAddressFormat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateAddressFormat"];
        this.parse = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$parseEther$2f$parseEther$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseEther"];
        this.parseNonNativeToken = (amount, decimals)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$parseUnits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseUnits"])(amount, decimals);
        this.format = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$formatEther$2f$formatEther$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatEther"];
        this.formatNonNativeToken = (value, decimals)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatUnits"])(value, decimals);
        /**
         * Whether the transaction is gas sponsored.
         * Returns false by default for EVM transactions.
         * Can be overridden for chains like Tempo where fees are paid differently.
         */ this.isGasSponsored = ()=>false;
        this.transaction = transaction;
        this.onSubmit = onSubmit;
        this.publicClient = publicClient;
        this.address = account;
    }
    get to() {
        return this.transaction.to || undefined;
    }
    set to(toAddress) {
        this.transaction.to = toAddress;
    }
    get from() {
        return this.address;
    }
    get value() {
        return this.transaction.value;
    }
    set value(value) {
        this.transaction.value = value;
    }
    get nonNativeValue() {
        return this.transaction.nonNativeValue;
    }
    set nonNativeValue(value) {
        this.transaction.nonNativeValue = value;
    }
    get nonNativeAddress() {
        return this.transaction.nonNativeAddress;
    }
    set nonNativeAddress(value) {
        this.transaction.nonNativeAddress = value;
    }
    get nonNativeDecimal() {
        return this.transaction.nonNativeDecimal;
    }
    set nonNativeDecimal(value) {
        this.transaction.nonNativeDecimal = value;
    }
    get feeTokenAddress() {
        return this.transaction.feeTokenAddress;
    }
    set feeTokenAddress(value) {
        this.transaction.feeTokenAddress = value;
    }
    get feeTokenSymbol() {
        return this.transaction.feeTokenSymbol;
    }
    set feeTokenSymbol(value) {
        this.transaction.feeTokenSymbol = value;
    }
    get data() {
        return this.transaction.data;
    }
    submit() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            return this.onSubmit(this.transaction).catch((error)=>{
                if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$UserRejectedTransactionError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRejectedTransactionError"]) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransactionExecutionError"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"](error.message), this.transaction);
                }
                throw error;
            });
        });
    }
    getBalance() {
        return this.publicClient.getBalance({
            address: this.address
        });
    }
    estimateGas() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            const hexResult = yield this.publicClient.transport.request({
                method: 'eth_estimateGas',
                params: [
                    {
                        data: this.data,
                        to: this.to,
                        value: this.convertBigIntToHex(this.value)
                    }
                ]
            });
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(hexResult);
        });
    }
    convertBigIntToHex(value) {
        return value ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(value) : undefined;
    }
    getTransactionRecipient() {
        var _a;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$getTransactionRecipient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTransactionRecipient"])(this.transaction.data, (_a = this.transaction.to) !== null && _a !== void 0 ? _a : undefined);
    }
    estimateL1Fee() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            var _a;
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$estimateL1Fee$2f$estimateL1Fee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isL1FeeSupportedByChain"])(((_a = this.publicClient.chain) === null || _a === void 0 ? void 0 : _a.id) || 0)) {
                return BigInt(0);
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$estimateL1Fee$2f$estimateL1Fee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["estimateL1Fee"])(this.publicClient, {
                data: this.transaction.data,
                to: this.transaction.to,
                value: this.transaction.value
            });
        });
    }
    set maxFeePerGas(value) {
        this.transaction.maxFeePerGas = value;
    }
    set maxPriorityFeePerGas(value) {
        this.transaction.maxPriorityFeePerGas = value;
    }
}
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/createViemUiTransaction/createViemUiTransaction.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createViemUiTransaction": (()=>createViemUiTransaction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/_virtual/_tslib.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$erc20$2f$abi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/erc20/abi.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$ViemUiTransaction$2f$ViemUiTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/ViemUiTransaction/ViemUiTransaction.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const createViemUiTransaction = (_a)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, [
        _a
    ], void 0, function*({ from, publicClient, walletClient }) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$ViemUiTransaction$2f$ViemUiTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ViemUiTransaction"]({
            account: from,
            onSubmit: (transaction)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, void 0, void 0, function*() {
                    // Non native token
                    if (transaction.nonNativeAddress) {
                        return walletClient.writeContract({
                            abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$erc20$2f$abi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["erc20Abi"],
                            account: from,
                            address: transaction.nonNativeAddress,
                            args: [
                                transaction.to,
                                transaction.nonNativeValue
                            ],
                            functionName: 'transfer',
                            maxFeePerGas: transaction.maxFeePerGas,
                            maxPriorityFeePerGas: transaction.maxPriorityFeePerGas
                        });
                    }
                    // Native token
                    return walletClient.sendTransaction({
                        account: from,
                        data: '0x',
                        maxFeePerGas: transaction.maxFeePerGas,
                        maxPriorityFeePerGas: transaction.maxPriorityFeePerGas,
                        to: transaction.to,
                        value: transaction.value
                    });
                }),
            publicClient,
            transaction: {}
        });
    });
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/getOrMapViemChain/getOrMapViemChain.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getChain": (()=>getChain),
    "getOrMapViemChain": (()=>getOrMapViemChain),
    "mapChain": (()=>mapChain)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/chains/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/logger.js [app-ssr] (ecmascript)");
'use client';
;
;
// eslint-disable-next-line import/no-namespace
/**
 * Gets the chain object for the given chain id.
 * @param chainId - Chain id of the target EVM chain.
 * @returns Viem's chain object.
 */ const getChain = (chainId)=>{
    for (const chain of Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__)){
        if ('id' in chain) {
            if (chain.id === chainId) {
                return chain;
            }
        }
    }
    throw new Error(`Chain with id ${chainId} not found`);
};
const mapChain = (network)=>{
    var _a;
    return {
        blockExplorers: ((_a = network.blockExplorerUrls) === null || _a === void 0 ? void 0 : _a[0]) ? {
            default: {
                name: network.blockExplorerUrls[0],
                url: network.blockExplorerUrls[0]
            }
        } : undefined,
        id: network.chainId,
        name: network.vanityName || network.name || network.chainName,
        nativeCurrency: network.nativeCurrency,
        rpcUrls: {
            default: {
                http: network.rpcUrls
            },
            public: {
                http: network.rpcUrls
            }
        }
    };
};
const getOrMapViemChain = (network)=>{
    let viemChain;
    try {
        viemChain = getChain(network.chainId);
    } catch (_a) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].debug(`Chain with id ${network.chainId} not found in viem's chains`);
    }
    const mappedChain = mapChain(network);
    if (!viemChain) {
        return mappedChain;
    }
    // even if a chain is found in viem's chains, we still want to overwrite some values
    return Object.assign(Object.assign({}, viemChain), mappedChain);
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/hasAtomicStatusCapability/hasAtomicStatusCapability.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "hasAtomicStatusCapability": (()=>hasAtomicStatusCapability)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/logger.js [app-ssr] (ecmascript)");
'use client';
;
const hasAtomicStatusCapability = (capabilities, chainId)=>{
    if (!(capabilities === null || capabilities === void 0 ? void 0 : capabilities[chainId])) {
        return false;
    }
    const chainCapabilities = capabilities[chainId];
    const hasAtomicStatus = Boolean(chainCapabilities['atomic'] && (chainCapabilities['atomic'].status === 'ready' || chainCapabilities['atomic'].status === 'supported'));
    // coinbase uses 'atomicBatch.support' instead of 'atomic.status'
    const hasAtomicBatchSupport = Boolean(chainCapabilities['atomicBatch'] && chainCapabilities['atomicBatch'].supported === true);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].debug('[hasAtomicStatusCapability]', {
        chainCapabilities,
        hasAtomicBatchSupport,
        hasAtomicStatus
    });
    return hasAtomicStatus || hasAtomicBatchSupport;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/hasPaymasterServiceCapability/hasPaymasterServiceCapability.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "hasPaymasterServiceCapability": (()=>hasPaymasterServiceCapability)
});
'use client';
const hasPaymasterServiceCapability = (capabilities, chainId)=>{
    var _a;
    if (!(capabilities === null || capabilities === void 0 ? void 0 : capabilities[chainId])) {
        return false;
    }
    const chainCapabilities = capabilities[chainId];
    return Boolean((_a = chainCapabilities['paymasterService']) === null || _a === void 0 ? void 0 : _a.supported);
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/findEvmNetwork/findEvmNetwork.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "findEvmNetwork": (()=>findEvmNetwork)
});
'use client';
const findEvmNetwork = ({ chainId, name, networks })=>{
    if (!chainId && !name) {
        return undefined;
    }
    if (chainId && name) {
        return networks.find((network)=>network.chainId === chainId && network.name === name);
    } else if (chainId) {
        return networks.find((network)=>network.chainId === chainId);
    } else {
        return networks.find((network)=>network.name === name);
    }
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/L2ResolverAbi/L2ResolverAbi.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>L2ResolverAbi)
});
'use client';
var L2ResolverAbi = [
    {
        inputs: [
            {
                internalType: 'contract ENS',
                name: 'ens_',
                type: 'address'
            },
            {
                internalType: 'address',
                name: 'registrarController_',
                type: 'address'
            },
            {
                internalType: 'address',
                name: 'reverseRegistrar_',
                type: 'address'
            },
            {
                internalType: 'address',
                name: 'owner_',
                type: 'address'
            }
        ],
        stateMutability: 'nonpayable',
        type: 'constructor'
    },
    {
        inputs: [],
        name: 'AlreadyInitialized',
        type: 'error'
    },
    {
        inputs: [],
        name: 'CantSetSelfAsDelegate',
        type: 'error'
    },
    {
        inputs: [],
        name: 'CantSetSelfAsOperator',
        type: 'error'
    },
    {
        inputs: [],
        name: 'NewOwnerIsZeroAddress',
        type: 'error'
    },
    {
        inputs: [],
        name: 'NoHandoverRequest',
        type: 'error'
    },
    {
        inputs: [],
        name: 'Unauthorized',
        type: 'error'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'node',
                type: 'bytes32'
            },
            {
                indexed: true,
                internalType: 'uint256',
                name: 'contentType',
                type: 'uint256'
            }
        ],
        name: 'ABIChanged',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'node',
                type: 'bytes32'
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'a',
                type: 'address'
            }
        ],
        name: 'AddrChanged',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'node',
                type: 'bytes32'
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'coinType',
                type: 'uint256'
            },
            {
                indexed: false,
                internalType: 'bytes',
                name: 'newAddress',
                type: 'bytes'
            }
        ],
        name: 'AddressChanged',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'owner',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'operator',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'bool',
                name: 'approved',
                type: 'bool'
            }
        ],
        name: 'ApprovalForAll',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'address',
                name: 'owner',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'node',
                type: 'bytes32'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'delegate',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'bool',
                name: 'approved',
                type: 'bool'
            }
        ],
        name: 'Approved',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'node',
                type: 'bytes32'
            },
            {
                indexed: false,
                internalType: 'bytes',
                name: 'hash',
                type: 'bytes'
            }
        ],
        name: 'ContenthashChanged',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'node',
                type: 'bytes32'
            },
            {
                indexed: false,
                internalType: 'bytes',
                name: 'name',
                type: 'bytes'
            },
            {
                indexed: false,
                internalType: 'uint16',
                name: 'resource',
                type: 'uint16'
            },
            {
                indexed: false,
                internalType: 'bytes',
                name: 'record',
                type: 'bytes'
            }
        ],
        name: 'DNSRecordChanged',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'node',
                type: 'bytes32'
            },
            {
                indexed: false,
                internalType: 'bytes',
                name: 'name',
                type: 'bytes'
            },
            {
                indexed: false,
                internalType: 'uint16',
                name: 'resource',
                type: 'uint16'
            }
        ],
        name: 'DNSRecordDeleted',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'node',
                type: 'bytes32'
            },
            {
                indexed: false,
                internalType: 'bytes',
                name: 'lastzonehash',
                type: 'bytes'
            },
            {
                indexed: false,
                internalType: 'bytes',
                name: 'zonehash',
                type: 'bytes'
            }
        ],
        name: 'DNSZonehashChanged',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'node',
                type: 'bytes32'
            },
            {
                indexed: true,
                internalType: 'bytes4',
                name: 'interfaceID',
                type: 'bytes4'
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'implementer',
                type: 'address'
            }
        ],
        name: 'InterfaceChanged',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'node',
                type: 'bytes32'
            },
            {
                indexed: false,
                internalType: 'string',
                name: 'name',
                type: 'string'
            }
        ],
        name: 'NameChanged',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'pendingOwner',
                type: 'address'
            }
        ],
        name: 'OwnershipHandoverCanceled',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'pendingOwner',
                type: 'address'
            }
        ],
        name: 'OwnershipHandoverRequested',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'oldOwner',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'newOwner',
                type: 'address'
            }
        ],
        name: 'OwnershipTransferred',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'node',
                type: 'bytes32'
            },
            {
                indexed: false,
                internalType: 'bytes32',
                name: 'x',
                type: 'bytes32'
            },
            {
                indexed: false,
                internalType: 'bytes32',
                name: 'y',
                type: 'bytes32'
            }
        ],
        name: 'PubkeyChanged',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'newRegistrarController',
                type: 'address'
            }
        ],
        name: 'RegistrarControllerUpdated',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'newReverseRegistrar',
                type: 'address'
            }
        ],
        name: 'ReverseRegistrarUpdated',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'node',
                type: 'bytes32'
            },
            {
                indexed: true,
                internalType: 'string',
                name: 'indexedKey',
                type: 'string'
            },
            {
                indexed: false,
                internalType: 'string',
                name: 'key',
                type: 'string'
            },
            {
                indexed: false,
                internalType: 'string',
                name: 'value',
                type: 'string'
            }
        ],
        name: 'TextChanged',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'node',
                type: 'bytes32'
            },
            {
                indexed: false,
                internalType: 'uint64',
                name: 'newVersion',
                type: 'uint64'
            }
        ],
        name: 'VersionChanged',
        type: 'event'
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: 'node',
                type: 'bytes32'
            },
            {
                internalType: 'uint256',
                name: 'contentTypes',
                type: 'uint256'
            }
        ],
        name: 'ABI',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            },
            {
                internalType: 'bytes',
                name: '',
                type: 'bytes'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: 'node',
                type: 'bytes32'
            }
        ],
        name: 'addr',
        outputs: [
            {
                internalType: 'address payable',
                name: '',
                type: 'address'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: 'node',
                type: 'bytes32'
            },
            {
                internalType: 'uint256',
                name: 'coinType',
                type: 'uint256'
            }
        ],
        name: 'addr',
        outputs: [
            {
                internalType: 'bytes',
                name: '',
                type: 'bytes'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: 'node',
                type: 'bytes32'
            },
            {
                internalType: 'address',
                name: 'delegate',
                type: 'address'
            },
            {
                internalType: 'bool',
                name: 'approved',
                type: 'bool'
            }
        ],
        name: 'approve',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'cancelOwnershipHandover',
        outputs: [],
        stateMutability: 'payable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: 'node',
                type: 'bytes32'
            }
        ],
        name: 'clearRecords',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'pendingOwner',
                type: 'address'
            }
        ],
        name: 'completeOwnershipHandover',
        outputs: [],
        stateMutability: 'payable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: 'node',
                type: 'bytes32'
            }
        ],
        name: 'contenthash',
        outputs: [
            {
                internalType: 'bytes',
                name: '',
                type: 'bytes'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: 'node',
                type: 'bytes32'
            },
            {
                internalType: 'bytes32',
                name: 'name',
                type: 'bytes32'
            },
            {
                internalType: 'uint16',
                name: 'resource',
                type: 'uint16'
            }
        ],
        name: 'dnsRecord',
        outputs: [
            {
                internalType: 'bytes',
                name: '',
                type: 'bytes'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'ens',
        outputs: [
            {
                internalType: 'contract ENS',
                name: '',
                type: 'address'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: 'node',
                type: 'bytes32'
            },
            {
                internalType: 'bytes32',
                name: 'name',
                type: 'bytes32'
            }
        ],
        name: 'hasDNSRecords',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: 'node',
                type: 'bytes32'
            },
            {
                internalType: 'bytes4',
                name: 'interfaceID',
                type: 'bytes4'
            }
        ],
        name: 'interfaceImplementer',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'owner',
                type: 'address'
            },
            {
                internalType: 'bytes32',
                name: 'node',
                type: 'bytes32'
            },
            {
                internalType: 'address',
                name: 'delegate',
                type: 'address'
            }
        ],
        name: 'isApprovedFor',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'account',
                type: 'address'
            },
            {
                internalType: 'address',
                name: 'operator',
                type: 'address'
            }
        ],
        name: 'isApprovedForAll',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes[]',
                name: 'data',
                type: 'bytes[]'
            }
        ],
        name: 'multicall',
        outputs: [
            {
                internalType: 'bytes[]',
                name: 'results',
                type: 'bytes[]'
            }
        ],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: 'nodehash',
                type: 'bytes32'
            },
            {
                internalType: 'bytes[]',
                name: 'data',
                type: 'bytes[]'
            }
        ],
        name: 'multicallWithNodeCheck',
        outputs: [
            {
                internalType: 'bytes[]',
                name: 'results',
                type: 'bytes[]'
            }
        ],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: 'node',
                type: 'bytes32'
            }
        ],
        name: 'name',
        outputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'owner',
        outputs: [
            {
                internalType: 'address',
                name: 'result',
                type: 'address'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'pendingOwner',
                type: 'address'
            }
        ],
        name: 'ownershipHandoverExpiresAt',
        outputs: [
            {
                internalType: 'uint256',
                name: 'result',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: 'node',
                type: 'bytes32'
            }
        ],
        name: 'pubkey',
        outputs: [
            {
                internalType: 'bytes32',
                name: 'x',
                type: 'bytes32'
            },
            {
                internalType: 'bytes32',
                name: 'y',
                type: 'bytes32'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: '',
                type: 'bytes32'
            }
        ],
        name: 'recordVersions',
        outputs: [
            {
                internalType: 'uint64',
                name: '',
                type: 'uint64'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'registrarController',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'renounceOwnership',
        outputs: [],
        stateMutability: 'payable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'requestOwnershipHandover',
        outputs: [],
        stateMutability: 'payable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes',
                name: '',
                type: 'bytes'
            },
            {
                internalType: 'bytes',
                name: 'data',
                type: 'bytes'
            }
        ],
        name: 'resolve',
        outputs: [
            {
                internalType: 'bytes',
                name: '',
                type: 'bytes'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'reverseRegistrar',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: 'node',
                type: 'bytes32'
            },
            {
                internalType: 'uint256',
                name: 'contentType',
                type: 'uint256'
            },
            {
                internalType: 'bytes',
                name: 'data',
                type: 'bytes'
            }
        ],
        name: 'setABI',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: 'node',
                type: 'bytes32'
            },
            {
                internalType: 'uint256',
                name: 'coinType',
                type: 'uint256'
            },
            {
                internalType: 'bytes',
                name: 'a',
                type: 'bytes'
            }
        ],
        name: 'setAddr',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: 'node',
                type: 'bytes32'
            },
            {
                internalType: 'address',
                name: 'a',
                type: 'address'
            }
        ],
        name: 'setAddr',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'operator',
                type: 'address'
            },
            {
                internalType: 'bool',
                name: 'approved',
                type: 'bool'
            }
        ],
        name: 'setApprovalForAll',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: 'node',
                type: 'bytes32'
            },
            {
                internalType: 'bytes',
                name: 'hash',
                type: 'bytes'
            }
        ],
        name: 'setContenthash',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: 'node',
                type: 'bytes32'
            },
            {
                internalType: 'bytes',
                name: 'data',
                type: 'bytes'
            }
        ],
        name: 'setDNSRecords',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: 'node',
                type: 'bytes32'
            },
            {
                internalType: 'bytes4',
                name: 'interfaceID',
                type: 'bytes4'
            },
            {
                internalType: 'address',
                name: 'implementer',
                type: 'address'
            }
        ],
        name: 'setInterface',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: 'node',
                type: 'bytes32'
            },
            {
                internalType: 'string',
                name: 'newName',
                type: 'string'
            }
        ],
        name: 'setName',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: 'node',
                type: 'bytes32'
            },
            {
                internalType: 'bytes32',
                name: 'x',
                type: 'bytes32'
            },
            {
                internalType: 'bytes32',
                name: 'y',
                type: 'bytes32'
            }
        ],
        name: 'setPubkey',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'registrarController_',
                type: 'address'
            }
        ],
        name: 'setRegistrarController',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'reverseRegistrar_',
                type: 'address'
            }
        ],
        name: 'setReverseRegistrar',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: 'node',
                type: 'bytes32'
            },
            {
                internalType: 'string',
                name: 'key',
                type: 'string'
            },
            {
                internalType: 'string',
                name: 'value',
                type: 'string'
            }
        ],
        name: 'setText',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: 'node',
                type: 'bytes32'
            },
            {
                internalType: 'bytes',
                name: 'hash',
                type: 'bytes'
            }
        ],
        name: 'setZonehash',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes4',
                name: 'interfaceID',
                type: 'bytes4'
            }
        ],
        name: 'supportsInterface',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: 'node',
                type: 'bytes32'
            },
            {
                internalType: 'string',
                name: 'key',
                type: 'string'
            }
        ],
        name: 'text',
        outputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'newOwner',
                type: 'address'
            }
        ],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'payable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: 'node',
                type: 'bytes32'
            }
        ],
        name: 'zonehash',
        outputs: [
            {
                internalType: 'bytes',
                name: '',
                type: 'bytes'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    }
];
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/getNameservice/getNameservice.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getNameservice": (()=>getNameservice)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/_virtual/_tslib.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/utils/hash/keccak256.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$namehash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/utils/ens/namehash.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodePacked$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/utils/abi/encodePacked.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$L2ResolverAbi$2f$L2ResolverAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/L2ResolverAbi/L2ResolverAbi.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const getNameservice = (_a)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, [
        _a
    ], void 0, function*({ rpcProvider, address }) {
        const nsData = {
            avatar: undefined,
            name: undefined
        };
        const network = yield rpcProvider.getChainId();
        if (!network) {
            return nsData;
        }
        // per CB team they recommended using the code
        // from: https://github.com/coinbase/onchainkit/blob/main/src/identity/utils/getName.ts
        // Once they will have proper resolver for the ens names we can remove this code
        const convertReverseNodeToBytes = (address, chainId)=>{
            const addressFormatted = address.toLocaleLowerCase();
            const addressNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keccak256"])(addressFormatted.substring(2));
            const chainCoinType = convertChainIdToCoinType(chainId);
            const baseReverseNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$namehash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["namehash"])(`${chainCoinType.toLocaleUpperCase()}.reverse`);
            const addressReverseNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keccak256"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodePacked$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodePacked"])([
                'bytes32',
                'bytes32'
            ], [
                baseReverseNode,
                addressNode
            ]));
            return addressReverseNode;
        };
        const convertChainIdToCoinType = (chainId)=>{
            const cointype = (0x80000000 | chainId) >>> 0;
            return cointype.toString(16).toLocaleUpperCase();
        };
        if (network === 8453) {
            const addressReverseNode = convertReverseNodeToBytes(address, 8453);
            try {
                const baseName = yield rpcProvider.readContract({
                    abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$L2ResolverAbi$2f$L2ResolverAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
                    address: '0xC6d566A56A1aFf6508b41f6c90ff131615583BCD',
                    args: [
                        addressReverseNode
                    ],
                    functionName: 'name'
                });
                if (baseName) {
                    nsData.name = baseName;
                    return nsData;
                }
            } catch (_error) {
                // This is a best effort attempt, so we don't need to do anything here.
                return nsData;
            }
        } else {
            nsData.name = yield rpcProvider.getEnsName({
                address: address
            });
            nsData.avatar = nsData.name ? yield rpcProvider.getEnsAvatar({
                name: nsData.name
            }) : undefined;
        }
        return nsData;
    });
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/isTransactionExecutionError/isTransactionExecutionError.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isTransactionExecutionError": (()=>isTransactionExecutionError)
});
'use client';
/**
 * @description
 * Checks if the error has a `walk` method
 */ const isTransactionExecutionError = (error)=>error !== undefined && error !== null && typeof error === 'object' && 'walk' in error && typeof error['walk'] === 'function';
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/interceptTransport/interceptTransport.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "interceptTransport": (()=>interceptTransport)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/_virtual/_tslib.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$custom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/clients/transports/custom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/errors/rpc.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$UserRejectedRequestError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/UserRejectedRequestError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$UserRejectedTransactionError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/UserRejectedTransactionError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$isTransactionExecutionError$2f$isTransactionExecutionError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/isTransactionExecutionError/isTransactionExecutionError.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const interceptTransport = ({ getAccounts, onPersonalSign, onSendTransaction, onSignTransaction, onSignTypedData, onGetCapabilities, onSendCalls, transport })=>(props)=>{
        const provider = transport(props);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$custom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["custom"])({
            request: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, void 0, void 0, function*() {
                    var _a;
                    const { method, params } = args;
                    if (getAccounts && method === 'eth_accounts') {
                        return getAccounts({
                            provider
                        });
                    }
                    if (onPersonalSign && method === 'personal_sign') {
                        const [message] = params;
                        return onPersonalSign({
                            args,
                            message,
                            provider
                        }).catch((error)=>{
                            if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$UserRejectedRequestError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRejectedRequestError"]) {
                                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRejectedRequestError"](error);
                            }
                            throw error;
                        });
                    }
                    if (onSendTransaction && method === 'eth_sendTransaction') {
                        const [transaction] = params;
                        return onSendTransaction({
                            args,
                            provider,
                            transaction
                        }).catch((error)=>{
                            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$isTransactionExecutionError$2f$isTransactionExecutionError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTransactionExecutionError"])(error) && error.walk() instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$UserRejectedTransactionError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRejectedTransactionError"]) {
                                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRejectedRequestError"](error.walk());
                            }
                            if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$UserRejectedTransactionError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRejectedTransactionError"]) {
                                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRejectedRequestError"](error);
                            }
                            if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$UserRejectedRequestError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRejectedRequestError"]) {
                                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRejectedRequestError"](error);
                            }
                            throw error;
                        });
                    }
                    if (onSignTransaction && method === 'eth_signTransaction') {
                        const [transaction] = params;
                        return onSignTransaction({
                            args,
                            provider,
                            transaction
                        }).catch((error)=>{
                            if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$UserRejectedRequestError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRejectedRequestError"]) {
                                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRejectedRequestError"](error);
                            }
                            throw error;
                        });
                    }
                    if (onSignTypedData && method === 'eth_signTypedData_v4') {
                        const [, message] = (_a = params) !== null && _a !== void 0 ? _a : [];
                        return onSignTypedData({
                            args,
                            message,
                            provider
                        }).catch((error)=>{
                            if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$UserRejectedRequestError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRejectedRequestError"]) {
                                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRejectedRequestError"](error);
                            }
                            throw error;
                        });
                    }
                    if (onGetCapabilities && method === 'wallet_getCapabilities') {
                        return onGetCapabilities({
                            provider
                        });
                    }
                    if (onSendCalls && method === 'wallet_sendCalls') {
                        const [callParams] = params;
                        return onSendCalls({
                            callParams,
                            provider
                        });
                    }
                    return provider.request(args);
                })
        })(props);
    };
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/parseAddress/parseAddress.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "parseAddress": (()=>parseAddress)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/utils/address/getAddress.js [app-ssr] (ecmascript)");
'use client';
;
const parseAddress = (address)=>{
    try {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddress"])(address);
    } catch (error) {
        return address;
    }
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/wallet/EthereumWallet.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "EthereumWallet": (()=>EthereumWallet)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/_virtual/_tslib.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$getContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/actions/getContract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$parseUnits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/utils/unit/parseUnits.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$parseEther$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/utils/unit/parseEther.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createWalletClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/clients/createWalletClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$custom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/clients/transports/custom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-connector-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3._7679fe86d42f6979f41d87c8de2f235e/node_modules/@dynamic-labs/wallet-connector-core/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$Wallet$2f$Wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-connector-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3._7679fe86d42f6979f41d87c8de2f235e/node_modules/@dynamic-labs/wallet-connector-core/src/Wallet/Wallet.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$estimateL1Fee$2f$opStack$2f$estimateL1Fee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/estimateL1Fee/opStack/estimateL1Fee.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$chainsMap$2f$chainsMap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/chainsMap/chainsMap.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$interceptTransport$2f$interceptTransport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/interceptTransport/interceptTransport.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$erc20$2f$abi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/erc20/abi.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$getOrMapViemChain$2f$getOrMapViemChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/getOrMapViemChain/getOrMapViemChain.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$parseAddress$2f$parseAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/parseAddress/parseAddress.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
class EthereumWallet extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$Wallet$2f$Wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Wallet"] {
    constructor(props){
        super(Object.assign(Object.assign({}, props), {
            address: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$parseAddress$2f$parseAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAddress"])(props.address)
        }));
    }
    /**
     * Sends the native balance of the wallet to the given address.
     * @param amount - The amount of balance to send (in ETH).
     * @param toAddress - The address to send the balance to.
     * @param token - The token to send (optional) — for example, an ERC20 token.
     *   @param token.address - The address of the token contract.
     *   @param token.decimals - The decimals of the token (defaults to 18).
     * @returns The transaction hash of the sent transaction.
     */ sendBalance(_a) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, arguments, void 0, function*({ amount, toAddress, token }) {
            const provider = yield this.getWalletClient();
            if (token && token.address) {
                const erc20Contract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$getContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getContract"])({
                    abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$erc20$2f$abi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["erc20Abi"],
                    address: token.address,
                    client: provider
                });
                const transfer = yield erc20Contract.write['transfer']([
                    toAddress,
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$parseUnits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseUnits"])(amount, token.decimals || 18)
                ]);
                return transfer;
            }
            const transaction = {
                account: this.address,
                chain: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$getOrMapViemChain$2f$getOrMapViemChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getChain"])((yield provider.getChainId())),
                // required for zksync until this PR is merged:https://github.com/matter-labs/zksync-sso/pull/91
                data: '0x',
                to: toAddress,
                value: amount ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$parseEther$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseEther"])(amount) : undefined
            };
            const transactionHash = yield provider.sendTransaction(transaction);
            return transactionHash;
        });
    }
    /**
     * Retrieves the public client.
     * @returns A promise that resolves to the public client,
     * or throws if the client cannot be retrieved.
     */ getPublicClient() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            const client = yield this._connector.getPublicClient();
            if (!client) {
                throw new Error('Unable to retrieve PublicClient');
            }
            return client;
        });
    }
    /**
     * Retrieves the wallet client.
     * @param chainId - (optional) Chain id to be used by the wallet client.
     * @returns A promise that resolves to the wallet client,
     * or throws if the client cannot be retrieved.
     */ getWalletClient(chainId) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            // Set active account if connector supports it, not AA atm
            if ('setActiveAccount' in this._connector) {
                this._connector.setActiveAccount(this.address);
            }
            const walletClient = yield this._connector.getWalletClient(chainId);
            if (!walletClient) {
                throw new Error('Unable to retrieve WalletClient');
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createWalletClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWalletClient"])({
                account: this.address,
                chain: walletClient.chain,
                transport: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$interceptTransport$2f$interceptTransport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interceptTransport"])({
                    onPersonalSign: (_a)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, [
                            _a
                        ], void 0, function*({ provider, args }) {
                            yield this.sync();
                            return provider.request(args);
                        }),
                    onSendTransaction: (_b)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, [
                            _b
                        ], void 0, function*({ provider, args }) {
                            yield this.sync();
                            return provider.request(args);
                        }),
                    onSignTypedData: (_c)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, [
                            _c
                        ], void 0, function*({ provider, args }) {
                            yield this.sync();
                            return provider.request(args);
                        }),
                    transport: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$custom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["custom"])(walletClient.transport, this.getTransportConfig())
                })
            });
        });
    }
    getTransportConfig() {
        return this._connector.providersConfig.httpTransportConfig;
    }
    isSignAuthorizationSupported() {
        return this._connector.isSignAuthorizationSupported();
    }
    isPaymasterServiceSupported(chainId) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            try {
                const supported = yield this._connector.isPaymasterServiceSupported(chainId);
                return supported;
            } catch (error) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].error('[EthereumWallet] isPaymasterServiceSupported', {
                    chainId,
                    error
                });
                return false;
            }
        });
    }
    isAtomicSupported(chainId) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            try {
                const supported = yield this._connector.isAtomicSupported(chainId);
                return supported;
            } catch (error) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].error('[EthereumWallet] isAtomicSupported', {
                    chainId,
                    error
                });
                return false;
            }
        });
    }
    sendCalls(callParams, options) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            var _a, _b, _c;
            const chainId = (_a = callParams.chain) === null || _a === void 0 ? void 0 : _a.id;
            const walletClient = yield this.getWalletClient(chainId === null || chainId === void 0 ? void 0 : chainId.toString());
            const atomicStatusSupported = yield this.isAtomicSupported(chainId);
            if (!atomicStatusSupported) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].debug('[EthereumWallet] atomic is not supported wallet or chain', {
                    chainId,
                    wallet: {
                        address: this.address,
                        key: this.key
                    },
                    wcChainId: (_b = walletClient.chain) === null || _b === void 0 ? void 0 : _b.id
                });
                throw new Error('Atomic is not supported for this wallet and chain');
            }
            const paymasterServiceSupported = yield this.isPaymasterServiceSupported(chainId);
            const chainIdToUse = chainId !== null && chainId !== void 0 ? chainId : (_c = walletClient.chain) === null || _c === void 0 ? void 0 : _c.id;
            if (paymasterServiceSupported && (options === null || options === void 0 ? void 0 : options.paymasterURL)) {
                callParams.capabilities = {
                    paymasterService: {
                        url: options === null || options === void 0 ? void 0 : options.paymasterURL
                    }
                };
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].logVerboseTroubleshootingMessage('[EthereumWallet] sendCalls', {
                atomicStatusSupported,
                callOptions: options,
                callParams,
                chainIdToUse,
                paymasterServiceSupported
            });
            const result = yield walletClient.sendCalls(callParams);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].logVerboseTroubleshootingMessage('[EthereumWallet] sendCalls', {
                result
            });
            return result;
        });
    }
}
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/connector/EthereumWalletConnector.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "EthereumWalletConnector": (()=>EthereumWalletConnector)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/_virtual/_tslib.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/utils/address/getAddress.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatEther$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/utils/unit/formatEther.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$toAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/accounts/toAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$parseNetworks$2f$parseNetworks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/parseNetworks/parseNetworks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$retryableFn$2f$retryableFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/retryableFn/retryableFn.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/DynamicError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$UserRejectedRequestError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/UserRejectedRequestError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$isMobile$2f$isMobile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/isMobile/isMobile.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-connector-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3._7679fe86d42f6979f41d87c8de2f235e/node_modules/@dynamic-labs/wallet-connector-core/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$WalletConnectorBase$2f$WalletConnectorBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-connector-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3._7679fe86d42f6979f41d87c8de2f235e/node_modules/@dynamic-labs/wallet-connector-core/src/WalletConnectorBase/WalletConnectorBase.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-connector-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3._7679fe86d42f6979f41d87c8de2f235e/node_modules/@dynamic-labs/wallet-connector-core/src/utils/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$estimateL1Fee$2f$opStack$2f$estimateL1Fee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/estimateL1Fee/opStack/estimateL1Fee.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$chainsMap$2f$chainsMap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/chainsMap/chainsMap.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$createViemUiTransaction$2f$createViemUiTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/createViemUiTransaction/createViemUiTransaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$getOrMapViemChain$2f$getOrMapViemChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/getOrMapViemChain/getOrMapViemChain.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$hasAtomicStatusCapability$2f$hasAtomicStatusCapability$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/hasAtomicStatusCapability/hasAtomicStatusCapability.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$hasPaymasterServiceCapability$2f$hasPaymasterServiceCapability$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/hasPaymasterServiceCapability/hasPaymasterServiceCapability.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$findEvmNetwork$2f$findEvmNetwork$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/findEvmNetwork/findEvmNetwork.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$getNameservice$2f$getNameservice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/getNameservice/getNameservice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$wallet$2f$EthereumWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/wallet/EthereumWallet.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
class EthereumWalletConnector extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$WalletConnectorBase$2f$WalletConnectorBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WalletConnectorBase"] {
    constructor(props){
        var _a, _b, _c;
        super(props);
        this.supportedChains = [
            'EVM',
            'ETH'
        ];
        this.connectedChain = 'EVM';
        this.ChainWallet = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$wallet$2f$EthereumWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EthereumWallet"];
        this.evmNetworkRpcMap = ()=>this.evmNetworks.reduce((acc, network)=>{
                var _a;
                [acc[network.chainId]] = ((_a = network === null || network === void 0 ? void 0 : network.privateCustomerRpcUrls) === null || _a === void 0 ? void 0 : _a.length) ? network.privateCustomerRpcUrls : network.rpcUrls;
                return acc;
            }, {});
        this.walletUiUtils = props.walletUiUtils;
        this.evmNetworks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$parseNetworks$2f$parseNetworks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseEvmNetworks"])(props.evmNetworks);
        this.providersConfig = (_a = props.providersConfig) !== null && _a !== void 0 ? _a : {};
        this.chainRpcProviders = props.chainRpcProviders;
        (_b = this.chainRpcProviders) === null || _b === void 0 ? void 0 : _b.registerEvmProviders((_c = this.providersConfig) !== null && _c !== void 0 ? _c : {});
    }
    getPublicClient() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            var _a, _b;
            const networkId = (_a = yield this.getNetwork()) !== null && _a !== void 0 ? _a : 1;
            if (this.evmNetworks.length === 0) {
                return undefined;
            }
            const configurations = {
                cosmos: [],
                evm: this.evmNetworks,
                solana: [],
                starknet: undefined
            };
            if (!this.chainRpcProviders) return undefined;
            const providers = this.chainRpcProviders.getProviders(configurations);
            return (_b = this.chainRpcProviders.getEvmProviderByChainId(providers, networkId)) === null || _b === void 0 ? void 0 : _b.provider;
        });
    }
    getNetwork() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            const provider = this.getWalletClient();
            if (!this.supportsNetworkSwitching || !provider) {
                return Promise.resolve(undefined);
            }
            const chainId = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$retryableFn$2f$retryableFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retryableFn"])(provider.getChainId, {
                fallbackValue: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$retryableFn$2f$retryableFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FALLBACK_UNDEFINED"],
                /**
                 * The timeout is set to 1 second because the getChainId method
                 * takes around 500ms to resolve on Brave. If the timeout is not set
                 * it will use 100ms by default and the method will fail.
                 * QNTM-815
                 */ timeoutMs: 1000
            });
            this.setActiveChain(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$chainsMap$2f$chainsMap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chainsMap"][chainId]);
            return chainId;
        });
    }
    getNameService(address) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            const rpcProvider = yield this.getPublicClient();
            if (!rpcProvider) {
                return;
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$getNameservice$2f$getNameservice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNameservice"])({
                address,
                rpcProvider
            });
        });
    }
    isTestnet() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            var _a, _b;
            const chain = (_a = yield this.getPublicClient()) === null || _a === void 0 ? void 0 : _a.chain;
            const evmNetwork = this.evmNetworks.find((n)=>n.chainId === (chain === null || chain === void 0 ? void 0 : chain.id));
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].logVerboseTroubleshootingMessage('[EthereumWalletConnector] isTestnet', {
                evmNetwork,
                viemChain: chain
            });
            // this is a workaround to an issue with Hyperliquid Mainnet, where its chainId
            // conflicts with another chain in viem, so viem thinks it's a testnet, but it's not
            // we should use the value coming from our api and only fallback to viem if it's not set
            if ((evmNetwork === null || evmNetwork === void 0 ? void 0 : evmNetwork.isTestnet) !== undefined) {
                return evmNetwork.isTestnet;
            }
            return (_b = chain === null || chain === void 0 ? void 0 : chain.testnet) !== null && _b !== void 0 ? _b : false;
        });
    }
    parseAddress(address) {
        try {
            // Ensures the address follows the EIP55 format.
            // see: https://eips.ethereum.org/EIPS/eip-55
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddress"])(address);
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].debug(`Failed to parse EVM address into EIP55 format: error getting checksum, returning default ${address}`, err);
        }
        return address;
    }
    getSigner() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            return this.getWalletClient();
        });
    }
    getBalance(address) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            const client = yield this.getPublicClient();
            const result = yield client === null || client === void 0 ? void 0 : client.getBalance({
                address: address
            });
            if (!result && result !== BigInt(0)) return;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatEther$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatEther"])(result);
        });
    }
    supportsNetworkSwitching() {
        return true;
    }
    switchNetwork(_a) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, arguments, void 0, function*({ networkName, networkChainId }) {
            const network = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$findEvmNetwork$2f$findEvmNetwork$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findEvmNetwork"])({
                chainId: networkChainId,
                name: networkName,
                networks: this.evmNetworks
            });
            if (!network) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"](`Could not find network mapping for chain ${networkName ? networkName : networkChainId}`);
            }
            if (!this.supportsNetworkSwitching()) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"]('Network switching is not supported');
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].logVerboseTroubleshootingMessage('[EthereumWalletConnector] switchNetwork', {
                network,
                networkChainId,
                networkName
            });
            const provider = this.getWalletClient();
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].logVerboseTroubleshootingMessage('[EthereumWalletConnector] switchNetwork - got provider', {
                provider
            });
            if (!provider) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"]('Provider not found');
            }
            return this.providerSwitchNetwork({
                network,
                provider
            });
        });
    }
    chooseAccountsToConnect() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            var _a, _b, _c;
            const provider = this.getWalletClient();
            if (!provider) return [];
            try {
                const result = yield provider.requestPermissions({
                    eth_accounts: {}
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].debug('chooseAccountsToConnect - requestPermissions result', result);
                // this should return the connected addresses for MM
                const addresses = (_c = (_b = (_a = result === null || result === void 0 ? void 0 : result.find((r)=>r.parentCapability === 'eth_accounts')) === null || _a === void 0 ? void 0 : _a.caveats) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.value;
                if (typeof addresses === 'string') {
                    return [
                        addresses
                    ];
                }
                if (Array.isArray(addresses)) {
                    return addresses;
                }
                return [];
            } catch (error) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].debug('chooseAccountsToConnect - error', error);
                // might fail if method is not supported, but just throw if user rejected
                if ((error === null || error === void 0 ? void 0 : error.code) === 4001) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$UserRejectedRequestError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRejectedRequestError"]();
                }
            }
            return [];
        });
    }
    getConnectedAccounts() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            const provider = this.getWalletClient();
            if (!provider) return [];
            const addresses = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$retryableFn$2f$retryableFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retryableFn"])(provider.getAddresses, {
                fallbackValue: [],
                timeoutMs: 500
            });
            if (addresses.length) {
                this.setActiveAccount(addresses[0]);
            }
            return addresses;
        });
    }
    providerSwitchNetwork(_a) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, arguments, void 0, function*({ network, provider }) {
            var _b, _c, _d, _e, _f;
            const { chainId } = network;
            const currentNetworkId = yield this.getNetwork();
            if (currentNetworkId && currentNetworkId === chainId) {
                return;
            }
            try {
                if (!this.supportsNetworkSwitching()) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"]('Network switching is not supported');
                }
                const viemChain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$getOrMapViemChain$2f$getOrMapViemChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOrMapViemChain"])(network);
                yield provider.switchChain({
                    id: viemChain.id
                });
                if (this.key === 'magiceden') {
                    const newChainId = yield provider.getChainId();
                    this.emit('chainChange', {
                        chain: newChainId.toString()
                    });
                } else {
                    this.setActiveChain(viemChain);
                    this.emit('chainChange', {
                        chain: viemChain.id.toString()
                    });
                }
            } catch (error) {
                if ((_b = error.details) === null || _b === void 0 ? void 0 : _b.includes('"wallet_switchEthereumChain" not implemented')) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"]('Network switching is not available at this time. The user should manually switch network in their wallet');
                }
                // we need to check for unrecognized chain error first because it also contains 'rejected' in message
                if (error.code === 4902 || ((_c = error.message) === null || _c === void 0 ? void 0 : _c.includes('Unrecognized chain')) || // https://github.com/MetaMask/metamask-mobile/issues/3312#issuecomment-1065923294
                ((_e = (_d = error.data) === null || _d === void 0 ? void 0 : _d.orginalError) === null || _e === void 0 ? void 0 : _e.code) === 4902) {
                    // error code indicates the chain has not been added yet
                    // https://docs.metamask.io/guide/rpc-api.html#usage-with-wallet-switchethereumchain
                    return this.providerAddNetwork({
                        network,
                        provider
                    });
                } else if (((_f = error.message) === null || _f === void 0 ? void 0 : _f.includes('rejected')) || typeof error === 'string' && error.includes('rejected')) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"]("User rejected the wallet's request to switch network");
                } else {
                    throw error;
                }
            }
        });
    }
    providerAddNetwork(_a) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, arguments, void 0, function*({ network, provider }) {
            var _b;
            try {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$isMobile$2f$isMobile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isMobile"])()) {
                    yield this.walletUiUtils.addNetwork({
                        handler: ()=>provider.addChain({
                                chain: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$getOrMapViemChain$2f$getOrMapViemChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOrMapViemChain"])(network)
                            }),
                        network,
                        walletConnector: this
                    });
                } else {
                    yield provider.addChain({
                        chain: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$getOrMapViemChain$2f$getOrMapViemChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOrMapViemChain"])(network)
                    });
                }
            } catch (error) {
                if (((_b = error.message) === null || _b === void 0 ? void 0 : _b.includes('rejected')) || typeof error === 'string' && error.includes('rejected')) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"]("User rejected the wallet's request to add network");
                } else {
                    throw error;
                }
            }
        });
    }
    setActiveAccount(account) {
        this.activeAccount = account ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$toAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toAccount"])(account) : undefined;
    }
    getActiveAccount() {
        return this.activeAccount;
    }
    setActiveChain(chain) {
        this.activeChain = chain;
    }
    getActiveChain() {
        return this.activeChain;
    }
    createUiTransaction(from) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            yield this.validateActiveWallet(from);
            const walletClient = yield this.getWalletClient();
            const publicClient = yield this.getPublicClient();
            if (!publicClient || !walletClient) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"]('No public client available');
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$createViemUiTransaction$2f$createViemUiTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createViemUiTransaction"])({
                from,
                publicClient,
                walletClient
            });
        });
    }
    confirmTransactionStatus(txHash) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            const publicClient = yield this.getPublicClient();
            if (!publicClient) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"]('No public client available');
            }
            // The number of confirmations (blocks that have passed) to wait before resolving.
            const confirmations = 3;
            return publicClient.waitForTransactionReceipt({
                confirmations,
                hash: txHash
            });
        });
    }
    getBlockExplorerUrlsForCurrentNetwork() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            var _a, _b;
            const currentNetwork = yield this.getNetwork();
            return (_b = (_a = this.evmNetworks.find((network)=>network.chainId.toString() === (currentNetwork === null || currentNetwork === void 0 ? void 0 : currentNetwork.toString()))) === null || _a === void 0 ? void 0 : _a.blockExplorerUrls) !== null && _b !== void 0 ? _b : [];
        });
    }
    getEnabledNetworks() {
        return this.evmNetworks;
    }
    isAtomicSupported(chainId) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            const walletClient = yield this.getWalletClient();
            if (!walletClient) {
                return false;
            }
            const capabilities = yield walletClient.getCapabilities();
            const chainIdToCheck = chainId !== null && chainId !== void 0 ? chainId : yield walletClient.getChainId();
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].debug('[EthereumWalletConnector] isAtomicSupported', {
                capabilities,
                chainId: chainIdToCheck
            });
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$hasAtomicStatusCapability$2f$hasAtomicStatusCapability$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasAtomicStatusCapability"])(capabilities, chainIdToCheck);
        });
    }
    isPaymasterServiceSupported(chainId) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            const walletClient = yield this.getWalletClient();
            if (!walletClient) {
                return false;
            }
            const capabilities = yield walletClient.getCapabilities();
            const chainIdToCheck = chainId !== null && chainId !== void 0 ? chainId : yield walletClient.getChainId();
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].debug('[EthereumWalletConnector] isPaymasterServiceSupported', {
                capabilities,
                chainId: chainIdToCheck
            });
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$hasPaymasterServiceCapability$2f$hasPaymasterServiceCapability$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasPaymasterServiceCapability"])(capabilities, chainIdToCheck);
        });
    }
    /**
     * Whether the wallet supports sign authorization for eip-7702.
     *
     * @returns {boolean} Whether the wallet supports sign authorization
     */ isSignAuthorizationSupported() {
        return false;
    }
}
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/connector/isEthWalletConnector/isEthWalletConnector.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isEthWalletConnector": (()=>isEthWalletConnector)
});
'use client';
const isEthWalletConnector = (connector)=>Boolean(connector === null || connector === void 0 ? void 0 : connector.getActiveAccount);
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/connector/createConnector/createConnector.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createConnector": (()=>createConnector)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/_virtual/_tslib.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$connector$2f$EthereumWalletConnector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/connector/EthereumWalletConnector.js [app-ssr] (ecmascript)");
'use client';
;
;
const createConnector = (customConnectorFn)=>(props)=>{
        const delegate = customConnectorFn(props);
        return [
            class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$connector$2f$EthereumWalletConnector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EthereumWalletConnector"] {
                constructor(props){
                    super(Object.assign(Object.assign({}, props), {
                        metadata: delegate.metadata
                    }));
                    this.name = delegate.metadata.name;
                    this.overrideKey = `${delegate.metadata.name}evm`;
                }
                connect() {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
                        yield delegate.connect();
                    });
                }
                endSession() {
                    const _super = Object.create(null, {
                        endSession: {
                            get: ()=>super.endSession
                        }
                    });
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
                        if (delegate.disconnect) {
                            yield delegate.disconnect();
                        }
                        return _super.endSession.call(this);
                    });
                }
                getAddress() {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
                        return delegate.getAddress();
                    });
                }
                getConnectedAccounts() {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
                        return delegate.getConnectedAccounts();
                    });
                }
                getNetwork() {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
                        return delegate.getNetwork();
                    });
                }
                getPublicClient() {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
                        return delegate.getPublicClient();
                    });
                }
                getWalletClient(chainId) {
                    return delegate.getWalletClient(chainId);
                }
                isInstalledOnBrowser() {
                    return delegate.isInstalledOnBrowser();
                }
                signMessage(messageToSign) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
                        return delegate.signMessage(messageToSign);
                    });
                }
                filter() {
                    if (delegate.filter) {
                        return delegate.filter();
                    }
                    return super.filter();
                }
                init() {
                    const _super = Object.create(null, {
                        init: {
                            get: ()=>super.init
                        }
                    });
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
                        if (delegate.init) {
                            return delegate.init();
                        }
                        return _super.init.call(this);
                    });
                }
                supportsNetworkSwitching() {
                    if (delegate.supportsNetworkSwitching) {
                        return delegate.supportsNetworkSwitching();
                    }
                    return super.supportsNetworkSwitching();
                }
                switchNetwork(_a) {
                    const _super = Object.create(null, {
                        switchNetwork: {
                            get: ()=>super.switchNetwork
                        }
                    });
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, arguments, void 0, function*({ networkName, networkChainId }) {
                        if (delegate.switchNetwork) {
                            return delegate.switchNetwork({
                                networkChainId,
                                networkName
                            });
                        }
                        return _super.switchNetwork.call(this, {
                            networkChainId,
                            networkName
                        });
                    });
                }
            }
        ];
    };
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/rpc/RpcProvidersEthereum/RpcProvidersEthereum.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createPublicClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/clients/createPublicClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/clients/transports/http.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$rpc$2d$providers$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$rpc$2d$providers$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+rpc-providers@4.73.2/node_modules/@dynamic-labs/rpc-providers/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$rpc$2d$providers$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$rpc$2d$providers$2f$src$2f$ChainRpcProviders$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+rpc-providers@4.73.2/node_modules/@dynamic-labs/rpc-providers/src/ChainRpcProviders.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$rpc$2d$providers$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$rpc$2d$providers$2f$src$2f$RpcProviders$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+rpc-providers@4.73.2/node_modules/@dynamic-labs/rpc-providers/src/RpcProviders.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$parseNetworks$2f$parseNetworks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/parseNetworks/parseNetworks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$getOrMapViemChain$2f$getOrMapViemChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/getOrMapViemChain/getOrMapViemChain.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$rpc$2d$providers$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$rpc$2d$providers$2f$src$2f$ChainRpcProviders$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChainRpcProviders"].getEvmProviderByChainId = (rpcProviders, chainId)=>{
    var _a;
    const provider = (_a = rpcProviders['evm']) === null || _a === void 0 ? void 0 : _a.find((provider)=>provider.chainId === chainId);
    return provider;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$rpc$2d$providers$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$rpc$2d$providers$2f$src$2f$ChainRpcProviders$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChainRpcProviders"].registerEvmProviders = (providersConfig)=>{
    if (!providersConfig) {
        throw new Error('providersConfig is required');
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$rpc$2d$providers$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$rpc$2d$providers$2f$src$2f$ChainRpcProviders$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChainRpcProviders"].registerChainProviders(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$rpc$2d$providers$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$rpc$2d$providers$2f$src$2f$RpcProviders$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProviderChain"].EVM, (config)=>{
        const rpcProviders = {};
        if (config === null || config === void 0 ? void 0 : config['evm']) {
            rpcProviders.evm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$parseNetworks$2f$parseNetworks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseEvmNetworks"])(config['evm']).map((network)=>{
                var _a;
                const rpcUrl = ((_a = network.privateCustomerRpcUrls) === null || _a === void 0 ? void 0 : _a[0]) || network.rpcUrls[0];
                const provider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createPublicClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPublicClient"])({
                    chain: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$getOrMapViemChain$2f$getOrMapViemChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOrMapViemChain"])(network),
                    transport: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["http"])(rpcUrl, providersConfig === null || providersConfig === void 0 ? void 0 : providersConfig.httpTransportConfig)
                });
                return {
                    chainId: network.chainId,
                    chainName: network.name,
                    provider
                };
            });
        }
        return rpcProviders.evm;
    });
};
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/rpc/evmProvidersSelector/evmProvidersSelector.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "evmProvidersSelector": (()=>evmProvidersSelector)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$rpc$2d$providers$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$rpc$2d$providers$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+rpc-providers@4.73.2/node_modules/@dynamic-labs/rpc-providers/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$rpc$2d$providers$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$rpc$2d$providers$2f$src$2f$ChainRpcProviders$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+rpc-providers@4.73.2/node_modules/@dynamic-labs/rpc-providers/src/ChainRpcProviders.js [app-ssr] (ecmascript)");
'use client';
;
const evmProvidersSelector = (providers)=>{
    if (!providers) return {
        defaultProvider: undefined,
        getProviderByChainId: ()=>undefined,
        providers: []
    };
    const getProviderByChainId = (chainId)=>{
        var _a;
        return (_a = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$rpc$2d$providers$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$rpc$2d$providers$2f$src$2f$ChainRpcProviders$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChainRpcProviders"].getEvmProviderByChainId) === null || _a === void 0 ? void 0 : _a.call(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$rpc$2d$providers$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$rpc$2d$providers$2f$src$2f$ChainRpcProviders$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChainRpcProviders"], providers, chainId);
    };
    return {
        defaultProvider: getProviderByChainId(1),
        getProviderByChainId,
        providers: providers === null || providers === void 0 ? void 0 : providers.evm
    };
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/ViemRpcUiTransaction/ViemRpcUiTransaction.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ViemRpcUiTransaction": (()=>ViemRpcUiTransaction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/_virtual/_tslib.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/utils/encoding/fromHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/errors/transaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/errors/base.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$UserRejectedTransactionError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/UserRejectedTransactionError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$validateAddressFormat$2f$validateAddressFormat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/validateAddressFormat/validateAddressFormat.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$Eip1559FeeFeed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/Eip1559FeeFeed.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$estimateL1Fee$2f$estimateL1Fee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/estimateL1Fee/estimateL1Fee.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$parseEther$2f$parseEther$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/parseEther/parseEther.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$formatEther$2f$formatEther$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/formatEther/formatEther.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$getTransactionRecipient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/getTransactionRecipient.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
class ViemRpcUiTransaction extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$Eip1559FeeFeed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Eip1559FeeFeed"] {
    constructor({ transaction, onSubmit, publicClient }){
        super({
            initialGasLimit: transaction.gas ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(transaction.gas) : undefined,
            initialMaxFeePerGas: transaction.maxFeePerGas ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(transaction.maxFeePerGas) : undefined,
            publicClient
        });
        this.chain = 'EVM';
        this.validateAddressFormat = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$validateAddressFormat$2f$validateAddressFormat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateAddressFormat"];
        this.parse = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$parseEther$2f$parseEther$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseEther"];
        this.format = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$formatEther$2f$formatEther$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatEther"];
        this.transaction = transaction;
        this.onSubmit = onSubmit;
        this.publicClient = publicClient;
    }
    get to() {
        return this.transaction.to || undefined;
    }
    get from() {
        return this.transaction.from || '';
    }
    get value() {
        const { value } = this.transaction;
        return value ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(value) : undefined;
    }
    get data() {
        return this.transaction.data;
    }
    submit() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            return this.onSubmit(this.transaction).catch((error)=>{
                if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$UserRejectedTransactionError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRejectedTransactionError"]) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransactionExecutionError"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"](error.message), this.transaction);
                }
                throw error;
            });
        });
    }
    getBalance() {
        return this.publicClient.getBalance({
            address: this.transaction.from
        });
    }
    getTransactionRecipient() {
        var _a;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$getTransactionRecipient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTransactionRecipient"])(this.transaction.data, (_a = this.transaction.to) !== null && _a !== void 0 ? _a : undefined);
    }
    estimateGas() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const _a = this.transaction, { from } = _a, transaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__rest"])(_a, [
                "from"
            ]);
            const transactionWithFrom = Object.assign(Object.assign({}, transaction), {
                from
            });
            const hexResult = yield this.publicClient.transport.request({
                method: 'eth_estimateGas',
                params: [
                    transactionWithFrom
                ]
            });
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(hexResult);
        });
    }
    estimateL1Fee() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            var _a;
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$estimateL1Fee$2f$estimateL1Fee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isL1FeeSupportedByChain"])(((_a = this.publicClient.chain) === null || _a === void 0 ? void 0 : _a.id) || 0)) {
                return BigInt(0);
            }
            const result = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$estimateL1Fee$2f$estimateL1Fee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["estimateL1Fee"])(this.publicClient, {
                data: this.transaction.data,
                to: this.transaction.to,
                value: this.convertHexToBigInt(this.transaction.value)
            });
            return result;
        });
    }
    set maxFeePerGas(value) {
        this.transaction.maxFeePerGas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(value);
    }
    set maxPriorityFeePerGas(value) {
        this.transaction.maxPriorityFeePerGas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(value);
    }
    convertHexToBigInt(value) {
        return value ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(value) : undefined;
    }
}
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/confirmationTransport/confirmationTransport.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "confirmationTransport": (()=>confirmationTransport)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/utils/encoding/fromHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$interceptTransport$2f$interceptTransport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/interceptTransport/interceptTransport.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$ViemRpcUiTransaction$2f$ViemRpcUiTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/ViemRpcUiTransaction/ViemRpcUiTransaction.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const confirmationTransport = ({ transport, walletUiUtils, getAccounts, onPersonalSign, onSendTransaction, onSignTransaction, onSignTypedData, walletConnector, provider })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$interceptTransport$2f$interceptTransport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interceptTransport"])({
        getAccounts,
        onPersonalSign: onPersonalSign ? (args)=>walletUiUtils.signMessage({
                handler: ()=>onPersonalSign(args),
                message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromHex"])(args.message, 'string'),
                walletConnector
            }) : undefined,
        onSendTransaction: onSendTransaction ? (args)=>{
            const uiTransaction = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$ViemRpcUiTransaction$2f$ViemRpcUiTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ViemRpcUiTransaction"]({
                onSubmit: (transaction)=>onSendTransaction(Object.assign(Object.assign({}, args), {
                        transaction
                    })),
                publicClient: provider,
                transaction: args.transaction
            });
            return walletUiUtils.sendTransaction(walletConnector, uiTransaction);
        } : undefined,
        onSignTransaction: onSignTransaction ? (args)=>walletUiUtils.signMessage({
                handler: ()=>onSignTransaction(args),
                message: 'Sign Transaction',
                walletConnector
            }) : undefined,
        onSignTypedData: onSignTypedData ? (args)=>walletUiUtils.signMessage({
                handler: ()=>onSignTypedData(args),
                message: args.message,
                walletConnector
            }) : undefined,
        transport
    });
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/createTransportWithUiConfirmation/createTransportWithUiConfirmation.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createTransportWithUiConfirmation": (()=>createTransportWithUiConfirmation)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/_virtual/_tslib.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$confirmationTransport$2f$confirmationTransport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/confirmationTransport/confirmationTransport.js [app-ssr] (ecmascript)");
'use client';
;
;
/**
 * Creates a viem transport with user interface confirmation for Ethereum-related operations.
 *
 * This function wraps a `Transport` object with additional UI confirmation logic for
 * personal sign requests, transaction sending, and signing typed data using the provided
 * `WalletUiUtils`. The function intercepts various Ethereum-related operations to
 * inject custom UI handling logic.
 *
 * @param {Object} props - The properties to configure the transport.
 * @param {WalletUiUtils} props.walletUiUtils - The UI utility functions for wallet operations.
 * @param {PublicClient} props.publicClient - The public client for interacting with Ethereum.
 * @param {Transport} props.transport - The transport layer to be wrapped.
 * @returns {Transport} The transport layer wrapped with UI confirmation logic.
 */ const createTransportWithUiConfirmation = ({ walletUiUtils, publicClient, transport, walletConnector })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$confirmationTransport$2f$confirmationTransport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["confirmationTransport"])({
        onPersonalSign: (_a)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, [
                _a
            ], void 0, function*({ args, provider }) {
                return provider.request(args);
            }),
        onSendTransaction: (_b)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, [
                _b
            ], void 0, function*({ args, provider }) {
                return provider.request(args);
            }),
        onSignTypedData: (_c)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, [
                _c
            ], void 0, function*({ args, provider }) {
                return provider.request(args);
            }),
        provider: publicClient,
        transport,
        walletConnector,
        walletUiUtils
    });
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/unFormatTransaction/unFormatTransaction.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "unFormatTransaction": (()=>unFormatTransaction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/utils/encoding/fromHex.js [app-ssr] (ecmascript)");
'use client';
;
/* eslint-disable max-len */ /**
 * Unformat a transaction request
 * This is used to convert the transaction the RPC transporter receives from
 * an eth_sendTransaction call to a format that viem account accepts.
 * This reverts what viem is doing internally with the format function.
 * https://github.com/wagmi-dev/viem/blob/0977829160effbe7dac5a69f43d263605544fa19/src/actions/wallet/sendTransaction.ts#L206
 */ const unFormatTransaction = (transactionRequest)=>Object.assign(Object.assign({}, transactionRequest), {
        authorizationList: typeof transactionRequest.authorizationList !== 'undefined' ? transactionRequest.authorizationList.map((authorization)=>Object.assign(Object.assign({}, authorization), {
                chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(authorization.chainId),
                nonce: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(authorization.nonce),
                yParity: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])(authorization.yParity, {
                    size: 1
                })
            })) : undefined,
        chainId: typeof transactionRequest.chainId === 'string' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])(transactionRequest.chainId) : transactionRequest.chainId,
        gas: typeof transactionRequest.gas !== 'undefined' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(transactionRequest.gas) : undefined,
        gasPrice: typeof transactionRequest.gasPrice !== 'undefined' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(transactionRequest.gasPrice) : undefined,
        maxFeePerGas: typeof transactionRequest.maxFeePerGas !== 'undefined' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(transactionRequest.maxFeePerGas) : undefined,
        maxPriorityFeePerGas: typeof transactionRequest.maxPriorityFeePerGas !== 'undefined' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(transactionRequest.maxPriorityFeePerGas) : undefined,
        nonce: typeof transactionRequest.nonce !== 'undefined' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(transactionRequest.nonce) : undefined,
        value: typeof transactionRequest.value !== 'undefined' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(transactionRequest.value) : undefined
    });
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/createAccountWithUiConfirmation/createAccountWithUiConfirmation.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createAccountWithUiConfirmation": (()=>createAccountWithUiConfirmation)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/_virtual/_tslib.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$toAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/accounts/toAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$nonceManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/utils/nonceManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$ViemUiTransaction$2f$ViemUiTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/ViemUiTransaction/ViemUiTransaction.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const createAccountWithUiConfirmation = ({ address, account, provider, walletConnector, walletUiUtils })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$toAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toAccount"])({
        address,
        nonceManager: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$nonceManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonceManager"],
        signAuthorization: (...args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, void 0, void 0, function*() {
                const accountInstance = yield account();
                if (!accountInstance.signAuthorization) {
                    throw new Error('signAuthorization not found');
                }
                return accountInstance.signAuthorization(...args);
            }),
        signMessage: (...args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, void 0, void 0, function*() {
                return walletUiUtils.signMessage({
                    handler: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, void 0, void 0, function*() {
                            return (yield account()).signMessage(...args);
                        }),
                    message: (()=>{
                        var _a;
                        const msg = (_a = args[0]) === null || _a === void 0 ? void 0 : _a.message;
                        return msg && !(typeof msg === 'string' && Array.isArray(msg)) ? JSON.stringify(msg) : msg === null || msg === void 0 ? void 0 : msg.toString();
                    })(),
                    walletConnector
                });
            }),
        signTransaction: (...args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, void 0, void 0, function*() {
                const uiTransaction = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$ViemUiTransaction$2f$ViemUiTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ViemUiTransaction"]({
                    account: address,
                    onSubmit: (transaction)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, void 0, void 0, function*() {
                            return (yield account()).signTransaction(transaction);
                        }),
                    publicClient: provider,
                    transaction: args[0]
                });
                return walletUiUtils.sendTransaction(walletConnector, uiTransaction);
            }),
        signTypedData: (...args)=>walletUiUtils.signMessage({
                handler: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, void 0, void 0, function*() {
                        return (yield account()).signTypedData(...args);
                    }),
                message: JSON.stringify(args[0], (_, value)=>typeof value === 'bigint' ? value.toString() : value),
                walletConnector
            })
    });
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/createWalletClientWithUiConfirmation/createWalletClientWithUiConfirmation.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createWalletClientWithUiConfirmation": (()=>createWalletClientWithUiConfirmation)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/_virtual/_tslib.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createPublicClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/clients/createPublicClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createWalletClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/clients/createWalletClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$interceptTransport$2f$interceptTransport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/interceptTransport/interceptTransport.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$unFormatTransaction$2f$unFormatTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/unFormatTransaction/unFormatTransaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$createAccountWithUiConfirmation$2f$createAccountWithUiConfirmation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/createAccountWithUiConfirmation/createAccountWithUiConfirmation.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
/**
 * Creates a WalletClient with UI confirmation for sensitive actions.
 *
 * This function initializes a WalletClient instance that integrates with a UI
 * for user confirmations. It wraps the provided transport with additional functionality
 * to handle personal sign requests, transaction sending, and signing typed data by
 * injecting UI confirmation steps before proceeding with the actual wallet actions.
 *
 * @param {Props} props - The properties required to create a WalletClient with UI confirmation.
 * @param {LocalAccount} props.account - The local account to be used with the WalletClient.
 * @param {Chain} props.chain - The blockchain chain to which the WalletClient will connect.
 * @param {Transport} props.transport - The transport layer responsible for communication with the blockchain.
 * @param {WalletUiUtils} props.walletUiUtils - The UI utility functions for the InternalWalletConnector.
 *
 * @returns {WalletClient<Transport, Chain, Account>} An instance of WalletClient equipped with UI confirmation logic.
 */ const createWalletClientWithUiConfirmation = ({ address, account, chain, transport, walletConnector, walletUiUtils })=>{
    let client = null;
    const provider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createPublicClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPublicClient"])({
        chain,
        transport
    });
    const gatedAccount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$createAccountWithUiConfirmation$2f$createAccountWithUiConfirmation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createAccountWithUiConfirmation"])({
        account,
        address,
        provider,
        walletConnector,
        walletUiUtils: walletUiUtils
    });
    const customTransport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$interceptTransport$2f$interceptTransport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interceptTransport"])({
        getAccounts: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, void 0, void 0, function*() {
                return [
                    address
                ];
            }),
        onPersonalSign: (_a)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, [
                _a
            ], void 0, function*({ message }) {
                if (!client) throw new Error('Client not initialized');
                return client.signMessage({
                    message: {
                        raw: message
                    }
                });
            }),
        onSendTransaction: (_b)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, [
                _b
            ], void 0, function*({ transaction }) {
                if (!client) throw new Error('Client not initialized');
                const unFormattedTransaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$unFormatTransaction$2f$unFormatTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unFormatTransaction"])(transaction);
                return client.sendTransaction(unFormattedTransaction);
            }),
        onSignTypedData: (_c)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, [
                _c
            ], void 0, function*({ message }) {
                if (!client) throw new Error('Client not initialized');
                return client.signTypedData(JSON.parse(message));
            }),
        transport
    });
    client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createWalletClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWalletClient"])({
        account: gatedAccount,
        chain,
        transport: customTransport
    });
    return client;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/normalizeRpcError/normalizeRpcError.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "normalizeRpcError": (()=>normalizeRpcError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/errors/rpc.js [app-ssr] (ecmascript)");
'use client';
;
/**
 * Some wallets may not reject some operations following the EIP-1193 standard.
 * This function normalizes the errors to follow the EIP-1193 standard.
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
const normalizeRpcError = (err)=>{
    /**
     * When the error already comply with the EIP-1193 standard, we don't need to normalize it
     */ if (err.code === 4001) {
        throw err;
    }
    let mappedError = null;
    try {
        mappedError = mapRpcError(err);
    } catch (e) {
    // ignore errors when mapping
    }
    if (mappedError) {
        throw mappedError;
    }
    /**
     * If no error is mapped, we rethrow the original error
     */ throw err;
};
const mapRpcError = (err)=>{
    /**
     * Checks for user rejection error message
     * Rainbow Extension will return a message like "User rejected the request"
     * BitGet will return a message like "user reject this request"
     * Keplr will return a message that matches "Request rejected"
     */ if (typeof err.message === 'string' && (err.message.includes('User rejected the request') || err.message.includes('user reject this request') || err.message === 'Request rejected')) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRejectedRequestError"](err);
    }
    return null;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/wallet/isEthereumWallet/isEthereumWallet.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isEthereumWallet": (()=>isEthereumWallet)
});
'use client';
const isEthereumWallet = (wallet)=>wallet.chain === 'EVM';
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$assert$2d$package$2d$version$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$assert$2d$package$2d$version$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+assert-package-version@4.73.2/node_modules/@dynamic-labs/assert-package-version/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$assert$2d$package$2d$version$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$assert$2d$package$2d$version$2f$src$2f$lib$2f$assertPackageVersion$2f$assertPackageVersion$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+assert-package-version@4.73.2/node_modules/@dynamic-labs/assert-package-version/src/lib/assertPackageVersion/assertPackageVersion.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/package.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$connector$2f$EthereumWalletConnector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/connector/EthereumWalletConnector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$connector$2f$isEthWalletConnector$2f$isEthWalletConnector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/connector/isEthWalletConnector/isEthWalletConnector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$connector$2f$createConnector$2f$createConnector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/connector/createConnector/createConnector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$rpc$2f$RpcProvidersEthereum$2f$RpcProvidersEthereum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/rpc/RpcProvidersEthereum/RpcProvidersEthereum.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$rpc$2d$providers$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$rpc$2d$providers$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+rpc-providers@4.73.2/node_modules/@dynamic-labs/rpc-providers/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$rpc$2f$evmProvidersSelector$2f$evmProvidersSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/rpc/evmProvidersSelector/evmProvidersSelector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$ViemRpcUiTransaction$2f$ViemRpcUiTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/ViemRpcUiTransaction/ViemRpcUiTransaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$ViemUiTransaction$2f$ViemUiTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/ViemUiTransaction/ViemUiTransaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$chainsMap$2f$chainsMap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/chainsMap/chainsMap.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$confirmationTransport$2f$confirmationTransport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/confirmationTransport/confirmationTransport.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$createTransportWithUiConfirmation$2f$createTransportWithUiConfirmation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/createTransportWithUiConfirmation/createTransportWithUiConfirmation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$createViemUiTransaction$2f$createViemUiTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/createViemUiTransaction/createViemUiTransaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$createWalletClientWithUiConfirmation$2f$createWalletClientWithUiConfirmation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/createWalletClientWithUiConfirmation/createWalletClientWithUiConfirmation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$getOrMapViemChain$2f$getOrMapViemChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/getOrMapViemChain/getOrMapViemChain.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$hasAtomicStatusCapability$2f$hasAtomicStatusCapability$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/hasAtomicStatusCapability/hasAtomicStatusCapability.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$hasPaymasterServiceCapability$2f$hasPaymasterServiceCapability$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/hasPaymasterServiceCapability/hasPaymasterServiceCapability.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$unFormatTransaction$2f$unFormatTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/unFormatTransaction/unFormatTransaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$erc20$2f$abi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/erc20/abi.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$interceptTransport$2f$interceptTransport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/interceptTransport/interceptTransport.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$findEvmNetwork$2f$findEvmNetwork$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/findEvmNetwork/findEvmNetwork.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$getNameservice$2f$getNameservice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/getNameservice/getNameservice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$validateAddressFormat$2f$validateAddressFormat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/validateAddressFormat/validateAddressFormat.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$parseAddress$2f$parseAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/parseAddress/parseAddress.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$normalizeRpcError$2f$normalizeRpcError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/normalizeRpcError/normalizeRpcError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$wallet$2f$EthereumWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/wallet/EthereumWallet.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$wallet$2f$isEthereumWallet$2f$isEthereumWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/wallet/isEthereumWallet/isEthereumWallet.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$assert$2d$package$2d$version$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$assert$2d$package$2d$version$2f$src$2f$lib$2f$assertPackageVersion$2f$assertPackageVersion$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertPackageVersion"])('@dynamic-labs/ethereum-core', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"]);
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/index.js [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$assert$2d$package$2d$version$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$assert$2d$package$2d$version$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+assert-package-version@4.73.2/node_modules/@dynamic-labs/assert-package-version/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/package.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$connector$2f$EthereumWalletConnector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/connector/EthereumWalletConnector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$connector$2f$isEthWalletConnector$2f$isEthWalletConnector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/connector/isEthWalletConnector/isEthWalletConnector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$connector$2f$createConnector$2f$createConnector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/connector/createConnector/createConnector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$rpc$2f$RpcProvidersEthereum$2f$RpcProvidersEthereum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/rpc/RpcProvidersEthereum/RpcProvidersEthereum.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$rpc$2d$providers$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$rpc$2d$providers$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+rpc-providers@4.73.2/node_modules/@dynamic-labs/rpc-providers/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$rpc$2f$evmProvidersSelector$2f$evmProvidersSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/rpc/evmProvidersSelector/evmProvidersSelector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$ViemRpcUiTransaction$2f$ViemRpcUiTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/ViemRpcUiTransaction/ViemRpcUiTransaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$ViemUiTransaction$2f$ViemUiTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/ViemUiTransaction/ViemUiTransaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$chainsMap$2f$chainsMap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/chainsMap/chainsMap.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$confirmationTransport$2f$confirmationTransport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/confirmationTransport/confirmationTransport.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$createTransportWithUiConfirmation$2f$createTransportWithUiConfirmation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/createTransportWithUiConfirmation/createTransportWithUiConfirmation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$createViemUiTransaction$2f$createViemUiTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/createViemUiTransaction/createViemUiTransaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$createWalletClientWithUiConfirmation$2f$createWalletClientWithUiConfirmation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/createWalletClientWithUiConfirmation/createWalletClientWithUiConfirmation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$getOrMapViemChain$2f$getOrMapViemChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/getOrMapViemChain/getOrMapViemChain.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$hasAtomicStatusCapability$2f$hasAtomicStatusCapability$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/hasAtomicStatusCapability/hasAtomicStatusCapability.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$hasPaymasterServiceCapability$2f$hasPaymasterServiceCapability$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/hasPaymasterServiceCapability/hasPaymasterServiceCapability.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$unFormatTransaction$2f$unFormatTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/unFormatTransaction/unFormatTransaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$erc20$2f$abi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/erc20/abi.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$interceptTransport$2f$interceptTransport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/interceptTransport/interceptTransport.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$findEvmNetwork$2f$findEvmNetwork$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/findEvmNetwork/findEvmNetwork.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$getNameservice$2f$getNameservice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/getNameservice/getNameservice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$validateAddressFormat$2f$validateAddressFormat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/validateAddressFormat/validateAddressFormat.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$parseAddress$2f$parseAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/parseAddress/parseAddress.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$normalizeRpcError$2f$normalizeRpcError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/normalizeRpcError/normalizeRpcError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$wallet$2f$EthereumWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/wallet/EthereumWallet.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$wallet$2f$isEthereumWallet$2f$isEthereumWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/wallet/isEthereumWallet/isEthereumWallet.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/index.js [app-ssr] (ecmascript) <locals>");
}}),

};

//# sourceMappingURL=7d86d_%40dynamic-labs_ethereum-core_5da9e855._.js.map