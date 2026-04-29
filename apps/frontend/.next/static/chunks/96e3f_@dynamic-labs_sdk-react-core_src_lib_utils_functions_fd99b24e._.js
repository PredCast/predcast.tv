(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/convertHexToRGBA/convertHexToRGBA.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "convertHexToRGBA": (()=>convertHexToRGBA)
});
'use client';
const convertHexToRGBA = (hex, alpha = 1)=>{
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/classNames/utils/isClassNamesObjectArg.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isClassNamesObjectArg": (()=>isClassNamesObjectArg)
});
'use client';
const isClassNamesObjectArg = (arg)=>typeof arg === 'object';
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/classNames/classNames.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "classNames": (()=>classNames)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$isString$2f$isString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/isString/isString.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$classNames$2f$utils$2f$isClassNamesObjectArg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/classNames/utils/isClassNamesObjectArg.js [app-client] (ecmascript)");
'use client';
;
;
const classNames = (...args)=>{
    const classes1 = args.reduce((classes, arg)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$isString$2f$isString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(arg)) {
            return [
                ...classes,
                arg
            ];
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$classNames$2f$utils$2f$isClassNamesObjectArg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isClassNamesObjectArg"])(arg)) {
            const keys = Object.keys(arg);
            const validClasses = keys.map((key)=>{
                if (arg[key]) {
                    return key;
                }
                return null;
            }).filter(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$isString$2f$isString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"]);
            return [
                ...classes,
                ...validClasses
            ];
        }
        return classes;
    }, []);
    return classes1.join(' ');
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getWaasAddressTypeLabel/getWaasAddressTypeLabel.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getWaasAddressTypeLabel": (()=>getWaasAddressTypeLabel)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$ChainEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/models/ChainEnum.js [app-client] (ecmascript)");
'use client';
;
const chainHandlers = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$ChainEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainEnum"].Btc]: (address)=>{
        // taproot
        if (address.startsWith('bc1p') || address.startsWith('tb1p')) {
            return 'Ordinals & Runes';
        }
        // native_segwit
        if (address.startsWith('bc1q') || address.startsWith('tb1q')) {
            return 'Payment address';
        }
        return undefined;
    }
};
/**
 * Determines the address type label for WaaS wallets based on the chain and address format.
 *
 * @param chain - The chain identifier (e.g., ChainEnum.Btc, 'BTC', 'bip122')
 * @param isWaasWallet - Whether the wallet is a WaaS wallet
 * @param address - The wallet address to check
 * @returns The address type label for the given chain or undefined
 */ const getWaasAddressTypeLabel = (chain, isWaasWallet, address)=>{
    if (!chain || !isWaasWallet || !address) {
        return undefined;
    }
    const normalizedChain = chain === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$ChainEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainEnum"].Btc || chain === 'BTC' || chain === 'bip122' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$ChainEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainEnum"].Btc : chain;
    const handler = chainHandlers[normalizedChain];
    if (!handler) {
        return undefined;
    }
    return handler(address);
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getDeviceFingerprint/getDeviceFingerprint.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getDeviceFingerprint": (()=>getDeviceFingerprint)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$StorageService$2f$StorageService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/StorageService/StorageService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$localStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/localStorage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/values.js [app-client] (ecmascript)");
'use client';
;
;
;
;
const getDeviceFingerprint = ()=>{
    if (typeof window === 'undefined') return undefined;
    const deviceFingerprint = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$StorageService$2f$StorageService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageService"].getItem(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$localStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEVICE_FINGERPRINT"]);
    if (!deviceFingerprint) return undefined;
    return deviceFingerprint;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/randomString/randomString.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "randomString": (()=>randomString)
});
'use client';
const randomString = (length)=>{
    const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
    let result = '';
    for(let i = length; i > 0; --i){
        result += CHARS[Math.floor(Math.random() * CHARS.length)];
    }
    return result;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/compareChains/compareChains.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "compareChains": (()=>compareChains)
});
'use client';
const synonyms = {
    aleo: 'ALEO',
    algorand: 'ALGO',
    aptos: 'APTOS',
    bip122: 'BTC',
    bitcoin: 'BTC',
    cosmos: 'COSMOS',
    eip155: 'EVM',
    flow: 'FLOW',
    solana: 'SOL',
    starknet: 'STARK',
    stellar: 'STELLAR',
    sui: 'SUI',
    tempo: 'TEMPO',
    ton: 'TON',
    tron: 'TRON'
};
for(const chain in synonyms)synonyms[synonyms[chain]] = chain;
const compareChains = (chain1, chain2)=>chain1 === chain2 || synonyms[chain1] === chain2 || synonyms[chain2] === chain1;
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getReferencedAccount/getReferencedAccount.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getReferencedAccount": (()=>getReferencedAccount)
});
'use client';
/**
 * given a wallet it, this function will look through the jwt and do the following:
 * 1. find the account that matches the wallet id
 * 2. find the account that matches the refId of the account found in step 1
 * 3. return the account found in step 2. this is the referenced account
 */ const getReferencedAccount = (user, walletId)=>{
    const accountForWalletId = user === null || user === void 0 ? void 0 : user.verifiedCredentials.find((account)=>account.id === walletId);
    return user === null || user === void 0 ? void 0 : user.verifiedCredentials.find((account)=>account.id === (accountForWalletId === null || accountForWalletId === void 0 ? void 0 : accountForWalletId.refId));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/updatePrimaryWalletId/updatePrimaryWalletId.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "updatePrimaryWalletId": (()=>updatePrimaryWalletId)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/_virtual/_tslib.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/core.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$client$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/client/client.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$config$2f$ApiEndpoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/config/ApiEndpoint.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$iconic$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$iconic$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+iconic@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/iconic/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-connector-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3._7679fe86d42f6979f41d87c8de2f235e/node_modules/@dynamic-labs/wallet-connector-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ViewContext$2f$ViewContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/ViewContext/ViewContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/values.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$consts$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/consts/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$multi$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferu_fe90954bf73f9037990328eb7876c7de$2f$node_modules$2f40$dynamic$2d$labs$2f$multi$2d$wallet$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+multi-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferu_fe90954bf73f9037990328eb7876c7de/node_modules/@dynamic-labs/multi-wallet/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$international$2d$phone$40$4$2e$5$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$international$2d$phone$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-international-phone@4.5.0_react@19.2.4/node_modules/react-international-phone/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$nonce$2f$nonce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/nonce/nonce.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$locale$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$locale$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+locale@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/locale/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$data$2f$api$2f$wallets$2f$wallets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/data/api/wallets/wallets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$dynamicContextProps$2f$dynamicContextProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/dynamicContextProps/dynamicContextProps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$primaryWalletId$2f$primaryWalletId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/primaryWalletId/primaryWalletId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$connectedWalletsInfo$2f$connectedWalletsInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/connectedWalletsInfo/connectedWalletsInfo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$getWaasAddressTypeLabel$2f$getWaasAddressTypeLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getWaasAddressTypeLabel/getWaasAddressTypeLabel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$events$2f$dynamicEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/events/dynamicEvents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$client$2f$extension$2f$user$2f$getUserProfile$2f$getUserProfile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/client/extension/user/getUserProfile/getUserProfile.js [app-client] (ecmascript)");
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
const updatePrimaryWalletId = (walletId)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, void 0, void 0, function*() {
        var _a;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$primaryWalletId$2f$primaryWalletId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setPrimaryWalletId"])(walletId);
        const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$client$2f$extension$2f$user$2f$getUserProfile$2f$getUserProfile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserProfile"])();
        if (user) {
            const environmentId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$dynamicContextProps$2f$dynamicContextProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEnvironmentId"])();
            // We will compare the value of this wallet's lastSelectedAt to the latest
            // selected credential's lastSelectedAt. If it's the same, we can skip the
            // /select endpoint. This is to avoid unnecessary calls to the /select
            // endpoint, which causes an update to the user's JWT.
            const currentWalletLastSelectedAt = (_a = user.verifiedCredentials.find((credential)=>credential.id === walletId)) === null || _a === void 0 ? void 0 : _a.lastSelectedAt;
            if (currentWalletLastSelectedAt) {
                const lastSelectedWalletCredential = user.verifiedCredentials.reduce((mostRecentSelectedCredential, credentialToCheck)=>{
                    if (credentialToCheck.format !== 'blockchain' || !credentialToCheck.lastSelectedAt) {
                        return mostRecentSelectedCredential;
                    }
                    if (!mostRecentSelectedCredential || !mostRecentSelectedCredential.lastSelectedAt) {
                        return credentialToCheck;
                    }
                    return credentialToCheck.lastSelectedAt > mostRecentSelectedCredential.lastSelectedAt ? credentialToCheck : mostRecentSelectedCredential;
                }, null);
                if ((lastSelectedWalletCredential === null || lastSelectedWalletCredential === void 0 ? void 0 : lastSelectedWalletCredential.lastSelectedAt) && lastSelectedWalletCredential.lastSelectedAt.getTime() === currentWalletLastSelectedAt.getTime()) {
                    return;
                }
            }
            yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$data$2f$api$2f$wallets$2f$wallets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storeSelectedWallet"])({
                environmentId,
                walletId
            });
        }
    });
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/generateMessages/index.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "generateMessages": (()=>generateMessages)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/_virtual/_tslib.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$multi$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferu_fe90954bf73f9037990328eb7876c7de$2f$node_modules$2f40$dynamic$2d$labs$2f$multi$2d$wallet$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+multi-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferu_fe90954bf73f9037990328eb7876c7de/node_modules/@dynamic-labs/multi-wallet/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$multi$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferu_fe90954bf73f9037990328eb7876c7de$2f$node_modules$2f40$dynamic$2d$labs$2f$multi$2d$wallet$2f$src$2f$utils$2f$message$2f$message$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+multi-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferu_fe90954bf73f9037990328eb7876c7de/node_modules/@dynamic-labs/multi-wallet/src/utils/message/message.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/DynamicError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$PlatformService$2f$PlatformService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/PlatformService/PlatformService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/logger.js [app-client] (ecmascript)");
'use client';
;
;
;
;
const getChainIdForMessage = (walletConnector)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, void 0, void 0, function*() {
        // If it's a Solana wallet, we should not specify a chainId
        // since it breaks the message signature in some wallets (e.g. Trust Wallet)
        if (walletConnector.connectedChain === 'SOL') {
            return undefined;
        }
        if (walletConnector.connectedChain === 'SUI') {
            return undefined;
        }
        const chain = yield walletConnector.getNetwork(true);
        if (chain) {
            return chain;
        }
        if (walletConnector.key === 'bloctoevm') {
            return 137;
        }
        if (walletConnector.connectedChain === 'EVM') {
            return 1;
        }
        return chain;
    });
const generateMessages = (publicWalletAddress, walletConnector, nonce, projectEnvironmentId, displaySiweStatement, siweStatement)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, void 0, void 0, function*() {
        if (publicWalletAddress === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DynamicError"]('Unable to fetch the public address from the wallet');
        }
        if (!walletConnector.connectedChain) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DynamicError"]('Wallet is not connected');
        }
        const chainId = yield getChainIdForMessage(walletConnector);
        const parsedAddress = walletConnector.parseAddress(publicWalletAddress);
        let currentUrl;
        // For native mobile, getDisplayOrigin() returns the app's web origin (e.g., "https://demo.dynamic.xyz")
        // which is needed for valid SIWE messages instead of the deep link scheme we get from getUrl()
        const displayOrigin = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$PlatformService$2f$PlatformService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlatformService"].getDisplayOrigin();
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$PlatformService$2f$PlatformService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlatformService"].isNativeMobile && displayOrigin) {
            currentUrl = new URL(displayOrigin);
        } else {
            // Fallback to currentUrl for non-native mobile (browser/web)
            currentUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$PlatformService$2f$PlatformService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlatformService"].getUrl();
        }
        const messageToSign = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$multi$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferu_fe90954bf73f9037990328eb7876c7de$2f$node_modules$2f40$dynamic$2d$labs$2f$multi$2d$wallet$2f$src$2f$utils$2f$message$2f$message$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateMessageToSign"])({
            blockchain: walletConnector.connectedChain,
            chainId: chainId,
            domain: currentUrl.host,
            nonce,
            // The SIWE parser library used to validate signed messages for EVM/Ethereum
            // checks that an address is in EIP55 format, so make sure we do that here.
            // see: https://eips.ethereum.org/EIPS/eip-55
            publicKey: parsedAddress,
            requestId: projectEnvironmentId,
            resources: walletConnector.providerResources,
            statement: displaySiweStatement ? siweStatement.replace(/(\r\n|\n|\r)/gm, ' ').trim() : undefined,
            uri: currentUrl.origin + currentUrl.pathname
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].debug('[generateMessages] Generated SIWE message:', {
            messageToSign
        });
        const signedMessage = yield walletConnector.proveOwnership(parsedAddress, messageToSign);
        if (!signedMessage) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DynamicError"]('Unable to sign the message');
        }
        return {
            messageToSign,
            signedMessage
        };
    });
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getVerifyArgs/getVerifyArgs.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getVerifyArgs": (()=>getVerifyArgs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/_virtual/_tslib.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$generateMessages$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/generateMessages/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$nonce$2f$nonce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/nonce/nonce.js [app-client] (ecmascript)");
'use client';
;
;
;
;
// TODO - This function is doing too much we should split it up.
const getVerifyArgs = (_a)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, [
        _a
    ], void 0, function*({ walletConnector, walletProvider, environmentId, displaySiweStatement, skipEmptyAccountCheck, siweStatement, publicWalletAddress, signedMessageOverride, messageToSignOverride }) {
        // WARNING - PLEASE READ!
        // DO NOT ADD ANY NEW ASYNC WORK WITH AWAIT!
        // Deep linking could break with too many blocking awaits
        // before the we call generateMessages.
        // This could manifest in users being directed to the app store
        // instead of the actual wallet app.
        const chain = walletConnector.connectedChain;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].logVerboseTroubleshootingMessage('[getVerifyArgs] called', {
            chain,
            displaySiweStatement,
            environmentId,
            hasMessageToSignOverride: Boolean(messageToSignOverride),
            hasSignedMessageOverride: Boolean(signedMessageOverride),
            publicWalletAddress,
            siweStatement,
            walletConnectorKey: walletConnector.key
        });
        if (signedMessageOverride && messageToSignOverride) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].logVerboseTroubleshootingMessage('[getVerifyArgs] using overrides', {
                messageToSignOverride,
                messageToSignOverrideLength: messageToSignOverride.length,
                signedMessageOverride,
                signedMessageOverrideLength: signedMessageOverride.length
            });
            const [network, additionalWalletAddresses] = yield Promise.all([
                walletConnector.getNetwork(true),
                walletConnector.getAdditionalAddresses(publicWalletAddress)
            ]);
            const result = {
                additionalWalletAddresses,
                chain,
                messageToSign: messageToSignOverride,
                network: String(network),
                publicWalletAddress,
                signedMessage: signedMessageOverride,
                skipEmptyAccountCheck,
                walletName: walletConnector.key,
                walletProvider
            };
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].logVerboseTroubleshootingMessage('[getVerifyArgs] returning with overrides', {
                chain: result.chain,
                messageToSign: result.messageToSign,
                network: result.network,
                publicWalletAddress: result.publicWalletAddress,
                signedMessage: result.signedMessage,
                walletName: result.walletName
            });
            return result;
        }
        const nonce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$nonce$2f$nonce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["consumeNonce"])();
        // generate message to sign and then initiate signing step to prove ownership
        const { messageToSign, signedMessage } = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$generateMessages$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateMessages"])(publicWalletAddress, walletConnector, nonce, environmentId, displaySiweStatement, siweStatement);
        const [network, additionalWalletAddresses] = yield Promise.all([
            walletConnector.getNetwork(true),
            walletConnector.getAdditionalAddresses(publicWalletAddress)
        ]);
        return {
            additionalWalletAddresses,
            chain,
            messageToSign,
            network: String(network),
            publicWalletAddress,
            signedMessage,
            skipEmptyAccountCheck,
            walletName: walletConnector.key,
            walletProvider
        };
    });
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getSiweStatement/getSiweStatement.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getSiweStatement": (()=>getSiweStatement)
});
'use client';
const getSiweStatement = ({ appName, siweStatement })=>{
    const defaultMessage = `Welcome to ${appName}. Signing is the only way we can truly know that you are the owner of the wallet you are connecting. Signing is a safe, gas-less transaction that does not in any way give ${appName} permission to perform any transactions with your wallet.`;
    return siweStatement || defaultMessage;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/keyService/keyService.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "base64urlDecode": (()=>base64urlDecode),
    "buf2hex": (()=>buf2hex),
    "compressRawPublicKey": (()=>compressRawPublicKey),
    "p256Keygen": (()=>p256Keygen),
    "p256Sign": (()=>p256Sign),
    "toEncodedFormat": (()=>toEncodedFormat)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/_virtual/_tslib.js [app-client] (ecmascript)");
'use client';
;
const toEncodedFormat = (publicKey, privateKey, privateKeyJwk, registered, expirationDate)=>{
    const sessionKeys = {
        expirationDate,
        privateKey,
        privateKeyJwk,
        publicKey,
        registered
    };
    const sessionKeysString = JSON.stringify(sessionKeys);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(sessionKeysString).toString('base64');
};
// Converts an ArrayBuffer to a hex-encoded string
const buf2hex = (buffer)=>[
        ...new Uint8Array(buffer)
    ].map((x)=>x.toString(16).padStart(2, '0')).join('');
// Takes a base64url-encoded string (e.g. "nMueRPiAm51YXEjRtka8S_8Ura3HaqbmqDqMJCZmvkM")
// and return the corresponding bytes, as an array buffer.
const base64urlDecode = (s)=>{
    // Go from base64url encoding to base64 encoding
    s = (s === null || s === void 0 ? void 0 : s.replace(/-/g, '+').replace(/_/g, '/')) || '';
    // use `atob` to decode base64
    return Uint8Array.from(atob(s), (c)=>c.charCodeAt(0));
};
// Accepts a public key array buffer, and returns a buffer with the compressed version of the public key
const compressRawPublicKey = (rawPublicKey)=>{
    const rawPublicKeyBytes = new Uint8Array(rawPublicKey);
    const len = rawPublicKeyBytes.byteLength;
    // Drop the y coordinate
    const compressedBytes = rawPublicKeyBytes.slice(0, 1 + len >>> 1);
    // Encode the parity of `y` in first bit
    compressedBytes[0] = 0x2 | rawPublicKeyBytes[len - 1] & 0x01;
    return compressedBytes.buffer;
};
const p256Keygen = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, void 0, void 0, function*() {
        // Create a new P-256 keypair
        const p256Keypair = yield crypto.subtle.generateKey({
            name: 'ECDSA',
            namedCurve: 'P-256'
        }, true, [
            'sign',
            'verify'
        ]);
        // Export the raw public key. By default this will export in uncompressed format
        const rawPublicKey = yield crypto.subtle.exportKey('raw', p256Keypair.publicKey);
        // We need to export with JWK format because exporting EC private keys with "raw" isn't supported
        const privateKeyJwk = yield crypto.subtle.exportKey('jwk', p256Keypair.privateKey);
        // Optional: compress the public key! But you don't have to
        const compressedPublicKeyBuffer = compressRawPublicKey(rawPublicKey);
        const privateKeyBuffer = base64urlDecode(privateKeyJwk.d);
        return {
            private: buf2hex(privateKeyBuffer),
            privateJwk: privateKeyJwk,
            public: buf2hex(compressedPublicKeyBuffer),
            publicUncompressed: buf2hex(rawPublicKey)
        };
    });
const p256Sign = (privateKeyJwk, message)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, void 0, void 0, function*() {
        const privateKey = yield crypto.subtle.importKey('jwk', privateKeyJwk, {
            name: 'ECDSA',
            namedCurve: 'P-256'
        }, false, [
            'sign'
        ]);
        const signature = yield crypto.subtle.sign({
            hash: 'SHA-256',
            name: 'ECDSA'
        }, privateKey, new TextEncoder().encode(message));
        return buf2hex(signature);
    });
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getTurnkeyWalletId/getTurnkeyWalletId.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getTurnkeyWalletId": (()=>getTurnkeyWalletId)
});
'use client';
/**
 * returns the id of the turnkey wallet
 * if the wallet is a turnkey wallet, it returns the id of the wallet
 * if the wallet is a zerodev wallet, it returns corresponding turnkey wallet id
 */ const getTurnkeyWalletId = (turnkeyWalletId, verifiedCredentials)=>{
    var _a;
    const turnkeyWallet = verifiedCredentials === null || verifiedCredentials === void 0 ? void 0 : verifiedCredentials.find(({ id })=>id === turnkeyWalletId);
    if (!turnkeyWallet) {
        throw new Error('Dynamic v2 wallet not found');
    }
    let walletId = undefined;
    if ((_a = turnkeyWallet === null || turnkeyWallet === void 0 ? void 0 : turnkeyWallet.walletName) === null || _a === void 0 ? void 0 : _a.startsWith('turnkey')) {
        walletId = turnkeyWallet === null || turnkeyWallet === void 0 ? void 0 : turnkeyWallet.id;
    } else if (turnkeyWallet === null || turnkeyWallet === void 0 ? void 0 : turnkeyWallet.signerRefId) {
        walletId = turnkeyWallet === null || turnkeyWallet === void 0 ? void 0 : turnkeyWallet.signerRefId;
    }
    if (!walletId) {
        throw new Error("Invalid wallet type: expecting 'turnkey' wallet, or a wallet with a 'signerRefId'");
    }
    return walletId;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/embeddedWalletSessionKeysUtils/embeddedWalletSessionKeysUtils.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "generateAndSaveSessionKey": (()=>generateAndSaveSessionKey),
    "generateSessionKey": (()=>generateSessionKey)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/_virtual/_tslib.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$keyService$2f$keyService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/keyService/keyService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$StorageService$2f$StorageService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/StorageService/StorageService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$sessionStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/sessionStorage.js [app-client] (ecmascript)");
'use client';
;
;
;
;
const generateSessionKey = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, void 0, void 0, function*() {
        const { private: privateKey, public: publicKey, privateJwk } = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$keyService$2f$keyService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["p256Keygen"])();
        // convert to base64 and store the session keys in session storage
        return {
            privateKey,
            privateKeyJwk: privateJwk,
            publicKey,
            registered: false
        };
    });
// TODO - what is the reason that the session keys are not registered in the backend?
/**
 * Generates a new session key and saves it to session storage
 * It doesn't register the session key with the backend, it's only used to generate a new key
 * and save it to session storage.
 * @returns the new session key
 */ const generateAndSaveSessionKey = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, void 0, void 0, function*() {
        const newSessionKey = yield generateSessionKey();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$StorageService$2f$StorageService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageService"].setItem(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$sessionStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SECURE_ENCLAVE_WALLET_SESSION_KEYS"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$keyService$2f$keyService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toEncodedFormat"])(newSessionKey.publicKey, newSessionKey.privateKey, newSessionKey.privateKeyJwk, newSessionKey.registered), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$sessionStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SECURE_ENCLAVE_WALLET_SESSION_KEYS_STORAGE_OPTIONS"]);
        return newSessionKey;
    });
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/validatePhoneLength/validatePhoneLength.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "validatePhoneLength": (()=>validatePhoneLength)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$international$2d$phone$40$4$2e$5$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$international$2d$phone$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-international-phone@4.5.0_react@19.2.4/node_modules/react-international-phone/dist/index.mjs [app-client] (ecmascript)");
'use client';
;
/** Whether phone number is not empty */ const validatePhoneLength = (phone, country)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$international$2d$phone$40$4$2e$5$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$international$2d$phone$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeDialCode"])({
        dialCode: country.dialCode,
        phone
    }).length > 0;
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/animationFrameTimeout/animationFrameTimeout.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "animationFrameTimeout": (()=>animationFrameTimeout),
    "clearAnimationFrameTimeout": (()=>clearAnimationFrameTimeout)
});
'use client';
const animationFrameTimeout = (callback, duration)=>{
    const startTime = performance.now();
    const canceller = {
        id: -1
    };
    const tick = ()=>{
        canceller.id = requestAnimationFrame((now)=>{
            if (now - startTime > duration) {
                callback();
            } else {
                tick();
            }
        });
    };
    tick();
    return canceller;
};
const clearAnimationFrameTimeout = (canceller)=>{
    if (canceller.id) cancelAnimationFrame(canceller.id);
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getWalletGroupType/getWalletGroupType.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getWalletGroupType": (()=>getWalletGroupType)
});
'use client';
const getWalletGroupType = (walletGroup)=>{
    if (!walletGroup.groupedWallets.length) {
        throw new Error('Wallet group must have at least one wallet');
    }
    const [wallet] = walletGroup.groupedWallets;
    if (wallet.chainGroup) {
        return 'multi-chain';
    }
    if (wallet.walletGroup) {
        return 'multi-wallet';
    }
    return undefined;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/isProgrammableNetworkSwitchSupported/isProgrammableNetworkSwitchSupported.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isProgrammableNetworkSwitchSupported": (()=>isProgrammableNetworkSwitchSupported)
});
'use client';
/**
 * Determines whether the programmable network switch feature is supported.
 *
 * @param {WalletConnector} walletConnector - The wallet connector instance.
 * @returns {boolean} Whether the programmable network switch feature is supported.
 */ const isProgrammableNetworkSwitchSupported = (walletConnector)=>{
    // TODO: use PlatformService
    const urlParams = new URLSearchParams(window.location.search);
    // Get the dev_isProgrammableNetworkSwitchSupported parameter from the URL.
    const devIsProgrammableNetworkSwitchSupported = urlParams.get('dev_isProgrammableNetworkSwitchSupported');
    if (devIsProgrammableNetworkSwitchSupported) {
        return devIsProgrammableNetworkSwitchSupported === 'true';
    }
    // Otherwise, fall back to the original logic and return whether switchNetworkOnlyFromWallet is not true.
    return walletConnector.switchNetworkOnlyFromWallet !== true;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/isSupportedNetwork/isSupportedNetwork.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isSupportedNetwork": (()=>isSupportedNetwork)
});
'use client';
const isSupportedNetwork = ({ walletConnector, network })=>{
    const enabledNetworks = walletConnector.getEnabledNetworks();
    // If no networks are configured, all networks are supported
    if (!enabledNetworks.length) {
        return true;
    }
    // If network is undefined, the connector hasn't determined the network yet
    // This can happen during initial load before getNetwork() resolves
    if (network === undefined) {
        return false;
    }
    // Check if network matches either chainId or networkId
    // This supports chains like Stellar where getNetwork() returns the chainId hash
    const isCurrentNetworkSupported = enabledNetworks.some(({ chainId, networkId })=>String(chainId) === String(network) || String(networkId) === String(network));
    return isCurrentNetworkSupported;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getEnabledKYC/index.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getEnabledKYC": (()=>getEnabledKYC)
});
'use client';
/**
    Filters a list of ProjectSettingsKyc objects and returns only those that have the 'enabled' property set to true.
    @param {ProjectSettingsKyc[] | undefined} kyc - A list of ProjectSettingsKyc objects to filter.
    @returns {ProjectSettingsKyc[]} - The list of ProjectSettingsKyc objects that have the 'enabled' property set to true.
*/ const getEnabledKYC = (kyc)=>{
    var _a;
    return (_a = kyc === null || kyc === void 0 ? void 0 : kyc.filter(({ enabled })=>Boolean(enabled))) !== null && _a !== void 0 ? _a : [];
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getUserProfileFields/getUserProfileFields.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getEditableUserProfileFields": (()=>getEditableUserProfileFields),
    "getNonEditableUserProfileFields": (()=>getNonEditableUserProfileFields),
    "getUserProfileFields": (()=>getUserProfileFields)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$WalletProviderEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/models/WalletProviderEnum.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$EmbeddedWalletVersionEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/models/EmbeddedWalletVersionEnum.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$KycFieldType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/models/KycFieldType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$getEnabledKYC$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getEnabledKYC/index.js [app-client] (ecmascript)");
'use client';
;
;
/**
 * The fields that are attached to the user and/or KYC but are not editable/showable.
 * @const {string[]}
 */ const filterFields = [
    'social'
];
/**
 * Maps user profile fields to KYC settings based on project settings.
 *
 * @param {UserFields} user - The user profile object containing fields to map.
 * @param {ProjectSettingsKyc[]} projectSettingsKyc - The project settings KYC object array to map against.
 * @returns {ProjectSettingsKyc[]} - The mapped KYC settings object array.
 */ const mapUserFieldsToKycSettings = (user, projectSettingsKyc)=>{
    // We do not want to use predefined KYC fields, but rather map all existing fields in the project.
    // This supports custom fields that may be added in the future.
    const fields = Object.entries(user).reduce((previousValue, [fieldName, fieldValue])=>{
        if (fieldValue) {
            const kycSetting = projectSettingsKyc.find((field)=>field.name === fieldName);
            if (kycSetting && !kycSetting.enabled) {
                previousValue.push(Object.assign({}, kycSetting));
            }
        }
        return previousValue;
    }, []);
    return fields;
};
/**
 * Get editable user profile fields based on the project settings.
 * @param {ProjectSettingsKyc[]} projectSettings - The project settings KYC object array.
 * @returns {ProjectSettingsKyc[]} - The list of editable user profile fields based on project settings.
 */ const getEditableUserProfileFields = (projectSettings)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$getEnabledKYC$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEnabledKYC"])(projectSettings).filter(({ name, type })=>type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$KycFieldType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KycFieldType"].Custom || !filterFields.includes(name));
/**
 * Get non-editable user profile fields that exist in the user profile and are disabled in the project
 * @param {Object} options - The function options object.
 * @param {ProjectSettingsKyc[]} options.projectSettingsKyc - The project settings KYC object array.
 * @param {UserFields} options.user - The user profile object.
 * @returns {ProjectSettingsKyc[]} - The list of non-editable user profile fields based on project settings.
 */ const getNonEditableUserProfileFields = ({ projectSettingsKyc = [], user })=>{
    if (!user) return [];
    const userProfileFields = mapUserFieldsToKycSettings(user, projectSettingsKyc);
    return userProfileFields.filter(({ name })=>!filterFields.includes(name));
};
/**
 * Get all user profile fields that exist in the user profile and are defined in the project
 * @param {Object} options - The function options object.
 * @param {ProjectSettingsKyc[]} options.projectSettingsKyc - The project settings KYC object array.
 * @param {UserProfile} options.user - The user profile object.
 * @returns {ProjectSettingsKyc[]} - The list of all user profile fields based on project settings.
 */ const getUserProfileFields = ({ projectSettingsKyc = [], customFields = [], user })=>{
    var _a, _b;
    const editableUserProfileFields = getEditableUserProfileFields([
        ...projectSettingsKyc,
        ...customFields
    ]);
    const nonEditableUserProfileFields = getNonEditableUserProfileFields({
        projectSettingsKyc,
        user
    });
    let concatedList = [
        ...editableUserProfileFields,
        ...nonEditableUserProfileFields
    ];
    // filter out policiesConsent field
    concatedList = concatedList.filter((field)=>field.name !== 'policiesConsent');
    const userEmbeddedWallet = (_a = user === null || user === void 0 ? void 0 : user.verifiedCredentials) === null || _a === void 0 ? void 0 : _a.find(({ walletProvider })=>walletProvider === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$WalletProviderEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletProviderEnum"].EmbeddedWallet);
    const hasV1EmbeddedWallet = ((_b = userEmbeddedWallet === null || userEmbeddedWallet === void 0 ? void 0 : userEmbeddedWallet.walletProperties) === null || _b === void 0 ? void 0 : _b.version) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$EmbeddedWalletVersionEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmbeddedWalletVersionEnum"].V1;
    const userHasEmail = Boolean(user === null || user === void 0 ? void 0 : user.email);
    const userHasPhoneNumber = Boolean(user === null || user === void 0 ? void 0 : user.phoneNumber);
    if (hasV1EmbeddedWallet) {
        concatedList = concatedList.map((field)=>{
            if (field.name === 'email' && userHasEmail || field.name === 'phoneNumber' && userHasPhoneNumber) {
                return Object.assign(Object.assign({}, field), {
                    enabled: false
                });
            }
            return field;
        });
    }
    return concatedList.sort((a, b)=>{
        const indexA = projectSettingsKyc.findIndex((field)=>field.name === a.name);
        const indexB = projectSettingsKyc.findIndex((field)=>field.name === b.name);
        return indexA - indexB;
    });
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/isSocialKycEnabled/isSocialKycEnabled.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isSocialKycEnabled": (()=>isSocialKycEnabled)
});
'use client';
const isSocialKycEnabled = (projectSettings)=>{
    var _a;
    return Boolean((_a = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.kyc.find(({ name })=>name === 'social')) === null || _a === void 0 ? void 0 : _a.enabled);
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getEnabledOAuthProviders/index.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getEnabledOAuthProviders": (()=>getEnabledOAuthProviders)
});
'use client';
const getEnabledOAuthProviders = (providers)=>{
    var _a;
    return (_a = providers === null || providers === void 0 ? void 0 : providers.filter(({ enabledAt, authorizationUrl, redirectUrl })=>Boolean(enabledAt) && Boolean(authorizationUrl) && Boolean(redirectUrl))) !== null && _a !== void 0 ? _a : [];
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getProviderEnumForSocialSignInProvider/getProviderEnumForSocialSignInProvider.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getProviderEnumForSocialSignInProvider": (()=>getProviderEnumForSocialSignInProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$ProviderEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/models/ProviderEnum.js [app-client] (ecmascript)");
'use client';
;
const getProviderEnumForSocialSignInProvider = (provider)=>{
    if (!provider) return null;
    const values = Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$ProviderEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderEnum"]);
    for (const value of values){
        if (value === provider) {
            return value;
        }
    }
    return null;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getEnabledSocialSignInProvidersAsProviderEnum/getEnabledSocialSignInProvidersAsProviderEnum.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getEnabledSocialSignInProvidersAsProviderEnum": (()=>getEnabledSocialSignInProvidersAsProviderEnum)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$getProviderEnumForSocialSignInProvider$2f$getProviderEnumForSocialSignInProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getProviderEnumForSocialSignInProvider/getProviderEnumForSocialSignInProvider.js [app-client] (ecmascript)");
'use client';
;
const getEnabledSocialSignInProvidersAsProviderEnum = (providers)=>{
    if (!providers) return [];
    const enabledProviders = [];
    for (const provider of providers){
        const matchingProviderEnum = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$getProviderEnumForSocialSignInProvider$2f$getProviderEnumForSocialSignInProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProviderEnumForSocialSignInProvider"])(provider.provider);
        if (matchingProviderEnum && provider.enabled) {
            enabledProviders.push(matchingProviderEnum);
        }
    }
    return enabledProviders;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/digestSHA256/digestSHA256.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "digestSHA256": (()=>digestSHA256)
});
'use client';
const digestSHA256 = (str)=>{
    const encoder = new TextEncoder();
    const data = encoder.encode(str);
    return window.crypto.subtle.digest('SHA-256', data);
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/encodeBase64URL/encodeBase64URL.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "encodeBase64URL": (()=>encodeBase64URL)
});
'use client';
const encodeBase64URL = (str)=>{
    const numberArray = [];
    new Uint8Array(str).forEach((item)=>numberArray.push(item));
    return btoa(String.fromCharCode.apply(null, numberArray)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/stringifyURIQuery/stringifyURIQuery.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "stringifyURIQuery": (()=>stringifyURIQuery)
});
'use client';
const stringifyURIQuery = (obj)=>{
    const str = [];
    for(const prop in obj){
        str.push(encodeURIComponent(prop) + '=' + encodeURIComponent(obj[prop]));
    }
    return str.join('&');
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getProviderByType/getProviderByType.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getProviderByType": (()=>getProviderByType)
});
'use client';
const getProviderByType = (providers, providerType)=>providers.find((p)=>p.provider === providerType);
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getOauthLoginUrl/getOauthLoginUrl.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getOauthLoginUrl": (()=>getOauthLoginUrl)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$ProviderEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/models/ProviderEnum.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$isMobile$2f$isMobile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/isMobile/isMobile.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$stringifyURIQuery$2f$stringifyURIQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/stringifyURIQuery/stringifyURIQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$getProviderByType$2f$getProviderByType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getProviderByType/getProviderByType.js [app-client] (ecmascript)");
'use client';
;
;
;
;
const APPLE_LOGIN_DATA = {
    customMobileUrl: true,
    response_mode: 'form_post',
    response_type: [
        'code',
        'id_token'
    ]
};
const getMobileOauthUrl = (provider, loginData)=>{
    if (!(loginData === null || loginData === void 0 ? void 0 : loginData.customMobileUrl) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$isMobile$2f$isMobile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])() || !provider.redirectUrl) {
        return;
    }
    return provider.redirectUrl.replace('redirect', 'authorizeHtml');
};
const getOauthLoginUrl = (providers, providerType, options)=>{
    var _a, _b, _c;
    const provider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$getProviderByType$2f$getProviderByType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProviderByType"])(providers, providerType);
    if (!(provider === null || provider === void 0 ? void 0 : provider.clientId)) {
        return '';
    }
    let loginData;
    if (providerType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$ProviderEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderEnum"].Apple) {
        loginData = APPLE_LOGIN_DATA;
    }
    let loginBaseUrl;
    if (providerType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$ProviderEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderEnum"].Telegram) {
        loginBaseUrl = (_a = provider.authorizationUrl) !== null && _a !== void 0 ? _a : '';
    } else if (provider.baseAuthUrl) {
        if (providerType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$ProviderEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderEnum"].Shopify) {
            loginBaseUrl = provider.baseAuthUrl.replace('{{shopifyStore}}', (_b = provider.shopifyStore) !== null && _b !== void 0 ? _b : '');
        } else {
            loginBaseUrl = provider.baseAuthUrl;
        }
    } else {
        return '';
    }
    const mobileUrl = getMobileOauthUrl(provider, loginData);
    const baseProps = {
        client_id: provider.clientId,
        redirect_uri: (_c = provider.redirectUrl) !== null && _c !== void 0 ? _c : '',
        response_type: 'code'
    };
    if (providerType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$ProviderEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderEnum"].Tiktok) {
        delete baseProps.client_id;
        baseProps.client_key = provider.clientId;
    }
    if (providerType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$ProviderEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderEnum"].Google) {
        baseProps.access_type = 'offline';
        if (options === null || options === void 0 ? void 0 : options.isGoogleDriveBackupEnabled) {
            baseProps.prompt = 'consent';
        }
    }
    if (provider.scopes) {
        baseProps.scope = provider.scopes;
    }
    if (loginData === null || loginData === void 0 ? void 0 : loginData.prompt) {
        baseProps.prompt = loginData.prompt.join(' ');
    }
    if (loginData === null || loginData === void 0 ? void 0 : loginData.response_mode) {
        baseProps.response_mode = loginData.response_mode;
    }
    if (loginData === null || loginData === void 0 ? void 0 : loginData.response_type) {
        baseProps.response_type = loginData.response_type.join(' ');
    }
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$stringifyURIQuery$2f$stringifyURIQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyURIQuery"])(baseProps);
    return `${mobileUrl !== null && mobileUrl !== void 0 ? mobileUrl : loginBaseUrl}?${params}`;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/socialStorage/socialStorage.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SOCIAL_STORAGE_KEY": (()=>SOCIAL_STORAGE_KEY),
    "deleteSocialStorage": (()=>deleteSocialStorage),
    "searchSocialStorageByState": (()=>searchSocialStorageByState),
    "setSocialStorageFor": (()=>setSocialStorageFor)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$StorageService$2f$StorageService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/StorageService/StorageService.js [app-client] (ecmascript)");
'use client';
;
const SOCIAL_STORAGE_KEY = 'dynamic_social_storage';
const searchSocialStorageByState = (targetState)=>{
    var _a;
    const socialStorage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$StorageService$2f$StorageService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageService"].getItem(SOCIAL_STORAGE_KEY);
    if (!socialStorage) return undefined;
    const storageEntries = Object.entries(socialStorage);
    const [provider] = (_a = storageEntries.find(([, { state }])=>state === targetState)) !== null && _a !== void 0 ? _a : [];
    if (!provider) return undefined;
    return socialStorage[provider];
};
const setSocialStorageFor = (provider, socialStorageItem)=>{
    var _a;
    const socialStorage = (_a = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$StorageService$2f$StorageService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageService"].getItem(SOCIAL_STORAGE_KEY)) !== null && _a !== void 0 ? _a : {};
    socialStorage[provider] = Object.assign({
        provider
    }, socialStorageItem);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$StorageService$2f$StorageService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageService"].setItem(SOCIAL_STORAGE_KEY, socialStorage);
};
const deleteSocialStorage = (provider)=>{
    var _a;
    const socialStorage = (_a = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$StorageService$2f$StorageService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageService"].getItem(SOCIAL_STORAGE_KEY)) !== null && _a !== void 0 ? _a : {};
    delete socialStorage[provider];
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$StorageService$2f$StorageService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageService"].setItem(SOCIAL_STORAGE_KEY, socialStorage);
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getAppOrigin/getAppOrigin.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getAppOrigin": (()=>getAppOrigin)
});
'use client';
const getAppOrigin = ()=>{
    if (typeof window !== 'undefined') {
        // TODO: use PlatformService
        return window.location.origin;
    }
    return undefined;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/pixelToRem/pixelToRem.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "pixelToRem": (()=>pixelToRem)
});
'use client';
//
// This is a helper to convert pixel to rem string.
// Since we are using rem as our unit of measurement, we need to convert pixel to rem
// otherwise, the styling can look broken if the user changes html font size in the browser.
//
const pixelToRem = (pixel)=>`${pixel / 16}rem`;
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getUserVerifiedCredentialType/getUserVerifiedCredentialType.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getUserVerifiedCredentialType": (()=>getUserVerifiedCredentialType)
});
'use client';
/**
 * This will return a string which we can present to the user credential type
 * @param user
 * @param type optional parameter to check for specific credential type
 * @returns JwtVerifiedCredentialFormatEnum | undefined
 */ const getUserVerifiedCredentialType = (user, type)=>{
    var _a, _b, _c;
    if (!user) {
        return undefined;
    }
    if (type) {
        return (_b = (_a = user.verifiedCredentials) === null || _a === void 0 ? void 0 : _a.find((credentials)=>credentials.format === type)) === null || _b === void 0 ? void 0 : _b.format;
    }
    const verifiedCredential = (_c = user.verifiedCredentials) === null || _c === void 0 ? void 0 : _c.find((credentials)=>credentials.id === user.lastVerifiedCredentialId);
    return verifiedCredential === null || verifiedCredential === void 0 ? void 0 : verifiedCredential.format;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/findWalletOptionFor/findWalletOptionFor.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "findWalletOptionFor": (()=>findWalletOptionFor)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/values.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$compareChains$2f$compareChains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/compareChains/compareChains.js [app-client] (ecmascript)");
'use client';
;
;
const findWalletOptionFor = (account, walletOptions)=>{
    const { walletName, chain } = account;
    if (walletName === 'turnkeyhd' || walletName === 'dynamicwaas') {
        const chain = account.chain ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VerifiedCredentialNameToChainEnum"][account.chain] : undefined;
        return walletOptions.find((wallet)=>walletName === wallet.key && wallet.walletConnector.connectedChain === chain);
    }
    // Wallets with name "unknown" are legacy wallets that were created when wallet name was still
    // set to "unknown" if not found in wallet book. We need to use fallback connector for these wallets.
    // The "unknown" wallet connector is also legacy and should never be used.
    if (walletName !== 'unknown') {
        // The verified credential chain follows a different format than the wallet connector chain
        // so we need first convert
        const walletChain = chain ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VerifiedCredentialNameToChainEnum"][chain] : undefined;
        const wallet = walletOptions.find((wallet)=>wallet.key === walletName && (!walletChain || wallet.walletConnector.connectedChain === walletChain));
        if (wallet) return wallet;
    }
    // If we cannot find the correct connector for the wallet, we default to the fallback
    // this way the wallet will appear in user wallets, but will not be able to be interacted with
    const fallbackOptions = walletOptions.filter((wallet)=>wallet.key === 'fallbackconnector');
    if (chain) {
        const unknownWallet = fallbackOptions.find(({ walletConnector })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$compareChains$2f$compareChains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compareChains"])(walletConnector.connectedChain, chain));
        if (unknownWallet) return unknownWallet;
    }
    return fallbackOptions[0];
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/isMfaMethodEnabled/isMfaMethodEnabled.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isMfaMethodEnabled": (()=>isMfaMethodEnabled)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/core.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$client$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/client/client.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$config$2f$ApiEndpoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/config/ApiEndpoint.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$iconic$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$iconic$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+iconic@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/iconic/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-connector-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3._7679fe86d42f6979f41d87c8de2f235e/node_modules/@dynamic-labs/wallet-connector-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ViewContext$2f$ViewContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/ViewContext/ViewContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/values.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$consts$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/consts/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/_virtual/_tslib.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$multi$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferu_fe90954bf73f9037990328eb7876c7de$2f$node_modules$2f40$dynamic$2d$labs$2f$multi$2d$wallet$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+multi-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferu_fe90954bf73f9037990328eb7876c7de/node_modules/@dynamic-labs/multi-wallet/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$international$2d$phone$40$4$2e$5$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$international$2d$phone$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-international-phone@4.5.0_react@19.2.4/node_modules/react-international-phone/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$nonce$2f$nonce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/nonce/nonce.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$locale$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$locale$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+locale@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/locale/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$dynamicContextProps$2f$dynamicContextProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/dynamicContextProps/dynamicContextProps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$primaryWalletId$2f$primaryWalletId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/primaryWalletId/primaryWalletId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$connectedWalletsInfo$2f$connectedWalletsInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/connectedWalletsInfo/connectedWalletsInfo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$getWaasAddressTypeLabel$2f$getWaasAddressTypeLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getWaasAddressTypeLabel/getWaasAddressTypeLabel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$events$2f$dynamicEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/events/dynamicEvents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$client$2f$extension$2f$projectSettings$2f$getProjectSettings$2f$getProjectSettings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/client/extension/projectSettings/getProjectSettings/getProjectSettings.js [app-client] (ecmascript)");
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
const isMfaMethodEnabled = (methodType)=>{
    var _a, _b, _c;
    const projectSettings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$client$2f$extension$2f$projectSettings$2f$getProjectSettings$2f$getProjectSettings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProjectSettings"])();
    return Boolean((_c = (_b = (_a = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.security) === null || _a === void 0 ? void 0 : _a.mfa) === null || _b === void 0 ? void 0 : _b.methods) === null || _c === void 0 ? void 0 : _c.find((method)=>method.type === methodType && method.enabled));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/onrampProviders/index.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "providerDisplayModes": (()=>providerDisplayModes)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$ProviderEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/models/ProviderEnum.js [app-client] (ecmascript)");
'use client';
;
/**
 * Registry of provider display modes (iframe or popup)
 *
 * This mapping controls how each onramp provider is displayed in the UI.
 * - 'popup': Opens in a new browser window/tab
 * - 'iframe': Embedded directly in the current page
 */ const providerDisplayModes = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$ProviderEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderEnum"].CoinbaseOnramp]: 'popup',
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$ProviderEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderEnum"].CryptoDotCom]: 'popup'
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/onrampConfigurationToOnrampOption/onrampConfigurationToOnrampOption.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "onrampConfigurationToOnrampOption": (()=>onrampConfigurationToOnrampOption)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$onrampProviders$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/onrampProviders/index.js [app-client] (ecmascript)");
'use client';
;
/**
 * Converts an OnrampConfiguration to an OnrampOption based on the provider's display mode
 */ const onrampConfigurationToOnrampOption = (provider)=>{
    var _a, _b, _c, _d;
    // Determine if this provider uses popup or iframe mode
    const providerKey = provider.provider;
    const openMode = (_a = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$onrampProviders$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["providerDisplayModes"][providerKey]) !== null && _a !== void 0 ? _a : 'iframe';
    return {
        displayName: (_c = (_b = provider.name) !== null && _b !== void 0 ? _b : provider.provider) !== null && _c !== void 0 ? _c : '',
        iconUrl: (_d = provider.iconUrl) !== null && _d !== void 0 ? _d : '',
        id: String(provider.provider),
        openMode,
        url: provider.url
    };
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/openPopup/openPopup.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "openPopup": (()=>openPopup)
});
'use client';
const getCenteredPopupFeatures = (popupWidth, popupHeight)=>{
    const { screenLeft = window.screenX, screenTop = window.screenY } = window;
    const { innerWidth = document.documentElement.clientWidth, innerHeight = document.documentElement.clientHeight } = window;
    const left = screenLeft + (innerWidth - popupWidth) / 2;
    const top = screenTop + (innerHeight - popupHeight) / 2;
    return `toolbar=0,location=0,menubar=0,resizable=1,scrollbars=1,width=${popupWidth},height=${popupHeight},left=${left},top=${top}`;
};
const openPopup = (url, popupWidth, popupHeight, onClose)=>new Promise((resolve, reject)=>{
        const popup = window.open('', '_blank', getCenteredPopupFeatures(popupWidth, popupHeight));
        if (!popup) {
            reject(new Error('Popup blocked'));
            return;
        }
        // Set up interval to check if popup is closed
        const checkClosed = setInterval(()=>{
            if (popup.closed) {
                clearInterval(checkClosed);
                window.removeEventListener('unload', cleanup);
                onClose();
            }
        }, 500);
        // Set the URL after opening to avoid popup blockers
        popup.location.href = url;
        // Clean up function
        const cleanup = ()=>{
            clearInterval(checkClosed);
            if (!popup.closed) {
                popup.close();
            }
            window.removeEventListener('unload', cleanup);
        };
        // Handle window unload
        window.addEventListener('unload', cleanup);
        // Return cleanup function
        resolve(cleanup);
    });
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/openOnrampPopup.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ONRAMP_POPUP_CONFIG": (()=>ONRAMP_POPUP_CONFIG),
    "openOnrampPopup": (()=>openOnrampPopup)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/_virtual/_tslib.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$OnrampProviders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/models/OnrampProviders.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$isMobile$2f$isMobile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/isMobile/isMobile.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$openPopup$2f$openPopup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/openPopup/openPopup.js [app-client] (ecmascript)");
'use client';
;
;
;
;
const ONRAMP_POPUP_CONFIG = {
    height: 600,
    width: 500
};
/**
 * Opens an onramp popup and sets up event listeners to handle popup closure
 * @param url The base URL to open in the popup
 * @param wallet The user's wallet (optional)
 * @param setShowOnramp Callback to update the UI state when popup is closed
 * @param provider The onramp provider ID
 * @returns A promise that resolves when the popup is opened
 * @throws Error if there are issues with URL, wallet compatibility, etc.
 */ const openOnrampPopup = (url_1, wallet_1, setShowOnramp_1, ...args_1)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, [
        url_1,
        wallet_1,
        setShowOnramp_1,
        ...args_1
    ], void 0, function*(url, wallet, setShowOnramp, provider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$OnrampProviders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OnrampProviders"].CoinbaseOnramp) {
        try {
            // Safety check: don't open popup with empty URL
            if (!url) {
                throw new Error('Cannot open onramp popup: Empty URL');
            }
            // On mobile devices, fall back to direct navigation for crypto.com
            // since mobile browsers often block popups
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$isMobile$2f$isMobile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])() && provider === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$OnrampProviders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OnrampProviders"].CryptoDotCom) {
                window.open(url, '_blank', 'noopener,noreferrer');
                setShowOnramp(false);
                return;
            }
            // Open the popup - errors will propagate to the caller
            yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$openPopup$2f$openPopup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openPopup"])(url, ONRAMP_POPUP_CONFIG.width, ONRAMP_POPUP_CONFIG.height, ()=>{
                // When the popup is closed (by user or programmatically), update the UI
                setShowOnramp(false);
            });
        } catch (error) {
            // Always set showOnramp to false on any error
            setShowOnramp(false);
            // Re-throw any error
            if (error instanceof Error) {
                throw error;
            }
            // For non-Error objects, wrap in a generic Error
            throw new Error('Error opening onramp popup');
        }
    });
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/rejectPromiseRef/rejectPromiseRef.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "rejectPromiseRef": (()=>rejectPromiseRef)
});
'use client';
const rejectPromiseRef = (// eslint-disable-next-line @typescript-eslint/no-explicit-any
promise, // eslint-disable-next-line @typescript-eslint/no-explicit-any
error)=>{
    if (!promise.current) return;
    promise.current.reject(error);
    promise.current = null;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getTransactionLink/blockExplorerPatterns.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "BLOCK_EXPLORER_PATTERNS": (()=>BLOCK_EXPLORER_PATTERNS),
    "DEFAULT_PATTERN": (()=>DEFAULT_PATTERN),
    "findBlockExplorerPattern": (()=>findBlockExplorerPattern)
});
'use client';
/**
 * Block explorer URL patterns for different chains
 * This mapping allows for easy configuration and extension of transaction link formats
 */ /**
 * Predefined patterns for known block explorers
 * Add new patterns here as needed for different chains
 */ const BLOCK_EXPLORER_PATTERNS = [
    {
        description: 'TRON - Uses hash fragment format',
        domain: 'tronscan.org',
        generateUrl: (baseUrl, hash)=>{
            const url = new URL(baseUrl);
            return `${url.origin}/#/transaction/${hash}`;
        }
    }
];
/**
 * Default pattern for standard block explorers
 * Used when no specific pattern matches
 */ const DEFAULT_PATTERN = {
    description: 'Standard format used by most block explorers',
    domain: '*',
    generateUrl: (baseUrl, hash)=>{
        const url = new URL(baseUrl);
        url.pathname = `/tx/${hash}`;
        return url.toString();
    }
};
/**
 * Find the appropriate pattern for a given block explorer URL
 */ const findBlockExplorerPattern = (blockExplorerUrl)=>{
    const pattern = BLOCK_EXPLORER_PATTERNS.find((pattern)=>blockExplorerUrl.includes(pattern.domain));
    return pattern || DEFAULT_PATTERN;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getTransactionLink/getTransactionLink.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getTransactionLink": (()=>getTransactionLink)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/_virtual/_tslib.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$getTransactionLink$2f$blockExplorerPatterns$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getTransactionLink/blockExplorerPatterns.js [app-client] (ecmascript)");
'use client';
;
;
const getTransactionLink = (_a)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, [
        _a
    ], void 0, function*({ walletConnector, transactionHash }) {
        try {
            if (!walletConnector) {
                return undefined;
            }
            const [blockExplorerUrl] = yield walletConnector.getBlockExplorerUrlsForCurrentNetwork();
            if (!blockExplorerUrl) return undefined;
            // Find the appropriate pattern for this block explorer
            const pattern = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$getTransactionLink$2f$blockExplorerPatterns$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findBlockExplorerPattern"])(blockExplorerUrl);
            // Generate the transaction URL using the pattern
            return pattern.generateUrl(blockExplorerUrl, transactionHash);
        } catch (error) {
            return undefined;
        }
    });
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/resolvePromiseRef/resolvePromiseRef.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "resolvePromiseRef": (()=>resolvePromiseRef)
});
'use client';
const resolvePromiseRef = (promise, value)=>{
    if (!promise.current) return;
    promise.current.resolve(value);
    promise.current = null;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/walletFilters/index.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "FilterAndSortWallets": (()=>FilterAndSortWallets),
    "FilterBridgeChainsName": (()=>FilterBridgeChainsName),
    "FilterChain": (()=>FilterChain),
    "FilterWallets": (()=>FilterWallets),
    "RemoveWallets": (()=>RemoveWallets),
    "SortWallets": (()=>SortWallets),
    "UniswapFilter": (()=>UniswapFilter)
});
'use client';
/**
 * Sorts the provided wallets by the provided sortedWalletKeys
 * Wallets that they keys were not provided will be kept in their default order
 *
 * This function should be used when you want to have the full wallet offerings,
 * but control the order of the top wallets.
 */ const SortWallets = (sortedWalletKeys)=>(wallets)=>[
            ...wallets
        ].sort((walletA, walletB)=>{
            const indexA = sortedWalletKeys.indexOf(walletA.key);
            const indexB = sortedWalletKeys.indexOf(walletB.key);
            if (indexA !== -1 && indexB === -1) {
                return -1;
            } else if (indexA === -1 && indexB !== -1) {
                return 1;
            } else {
                return indexA - indexB;
            }
        });
const FilterWallets = (walletKeys)=>(wallets)=>wallets.filter((wallet)=>walletKeys.includes(wallet.key));
const RemoveWallets = (walletKeys)=>(wallets)=>wallets.filter((wallet)=>!walletKeys.includes(wallet.key));
const FilterBridgeChainsName = (chainName)=>(wallets)=>wallets.filter((wallet)=>wallet.walletConnector.supportedChains.includes(chainName));
/**
 * Filters and sorts the wallet selection by the provided sortedWalletKeys.
 * This filter should be used when you only want specific wallets to be available
 * in a certain order.
 */ const FilterAndSortWallets = (sortedWalletKeys)=>(wallets)=>{
        const unsortedWallets = FilterWallets(sortedWalletKeys)(wallets);
        return SortWallets(sortedWalletKeys)(unsortedWallets);
    };
const UniswapFilter = ()=>(wallets)=>FilterAndSortWallets([
            'uniswap',
            'metamask',
            'coinbase',
            'walletconnect',
            'walletconnectsol'
        ])(wallets);
/**
 * Filters the wallets by the provided chain
 * @param chain The chain to filter by
 */ const FilterChain = (chain)=>(wallets)=>wallets.filter((wallet)=>wallet.walletConnector.supportedChains.includes(chain));
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/requiresTwoStepAuthentication/requiresTwoStepAuthentication.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "requiresTwoStepAuthentication": (()=>requiresTwoStepAuthentication)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$isMobile$2f$isMobile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/isMobile/isMobile.js [app-client] (ecmascript)");
'use client';
;
const walletsRequiringTwoStepAuthentication = [
    'dapper'
];
const requiresTwoStepAuthentication = (connector)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$isMobile$2f$isMobile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])() && !(connector === null || connector === void 0 ? void 0 : connector.canConnectViaCustodialService) || walletsRequiringTwoStepAuthentication.includes((connector === null || connector === void 0 ? void 0 : connector.key) || '');
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/isSelectedWalletAlreadyConnected/isSelectedWalletAlreadyConnected.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isSelectedWalletAlreadyConnected": (()=>isSelectedWalletAlreadyConnected)
});
'use client';
const isSelectedWalletAlreadyConnected = (linkedWallets, selectedWallet, user)=>{
    if (!user) return false;
    return linkedWallets.map(({ connector })=>connector.key).includes(selectedWallet.key);
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/walletListBuilder/utils/isWalletGroup/isWalletGroup.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isWalletGroup": (()=>isWalletGroup)
});
'use client';
/**
 *  Check if given WalletOption is defined as a group
 *
 * @param {WalletOption} walletOption - Wallet Option
 * @returns {Boolean} - boolean value
 */ const isWalletGroup = (walletOption)=>{
    var _a;
    return Boolean((_a = walletOption.groupedWallets) === null || _a === void 0 ? void 0 : _a.length);
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/walletListBuilder/utils/groupWalletOptions/groupWalletOptions.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "groupWalletOptions": (()=>groupWalletOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$walletListBuilder$2f$utils$2f$isWalletGroup$2f$isWalletGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/walletListBuilder/utils/isWalletGroup/isWalletGroup.js [app-client] (ecmascript)");
'use client';
;
const findGroupIndex = (groupKey, workingArray)=>workingArray.findIndex((walletOption)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$walletListBuilder$2f$utils$2f$isWalletGroup$2f$isWalletGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWalletGroup"])(walletOption) && walletOption.key === groupKey);
/**
 *  Group wallets by `group` property
 *
 * @param {WalletOption[]} walletOptionList - WalletOption list
 * @returns {WalletOption[]} the wallet options list with groups
 */ const groupWalletOptions = (walletGroups, walletOptionList)=>{
    const output = [];
    walletOptionList.forEach((currentWalletOption)=>{
        var _a;
        // Go to the next step if walletOption does not contain group
        if (!currentWalletOption.group) {
            return output.push(currentWalletOption);
        }
        // Determine if there a already defined group
        const existingGroupIndex = findGroupIndex(currentWalletOption.group, output);
        if (existingGroupIndex > -1) {
            return (_a = output[existingGroupIndex].groupedWallets) === null || _a === void 0 ? void 0 : _a.push(currentWalletOption);
        }
        // Validate if there is any other wallet with the same group
        const isThereWalletOptionWithSameGroup = walletOptionList.some((walletOption)=>{
            const isSameGroup = currentWalletOption.group === walletOption.group;
            // Some WC wallets may have the same key on different chains, so we need to check that chain as well
            const isDifferentKey = currentWalletOption.key !== walletOption.key || currentWalletOption.walletConnector.connectedChain !== walletOption.walletConnector.connectedChain;
            return isSameGroup && isDifferentKey;
        });
        // Avoid group creation if there only one wallet in group
        if (!isThereWalletOptionWithSameGroup) {
            return output.push(currentWalletOption);
        }
        const walletGroupData = walletGroups[currentWalletOption.group];
        // If for some reason this is undefined, ignore it
        if (!walletGroupData) {
            return output.push(currentWalletOption);
        }
        const walletGroup = {
            groupedWallets: [
                currentWalletOption
            ],
            key: walletGroupData.key,
            name: walletGroupData.name
        };
        return output.push(walletGroup);
    });
    return output;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/isProviderEnabled/isProviderEnabled.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isProviderEnabled": (()=>isProviderEnabled)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$ProviderEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/models/ProviderEnum.js [app-client] (ecmascript)");
'use client';
;
const isProviderEnabled = (providers, provider)=>providers.some((providerItem)=>{
        const providerEnabled = providerItem.provider === provider && Boolean(providerItem.enabledAt);
        if (providerItem.provider === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$ProviderEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderEnum"].MagicLink) {
            return providerEnabled && Boolean(providerItem.providerProjectId);
        }
        return providerEnabled;
    });
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getEnabledEmbeddedWalletProviders/getEnabledEmbeddedWalletProviders.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getEnabledEmbeddedWalletProviders": (()=>getEnabledEmbeddedWalletProviders)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$ProviderEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/models/ProviderEnum.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/values.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/_virtual/_tslib.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$multi$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferu_fe90954bf73f9037990328eb7876c7de$2f$node_modules$2f40$dynamic$2d$labs$2f$multi$2d$wallet$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+multi-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferu_fe90954bf73f9037990328eb7876c7de/node_modules/@dynamic-labs/multi-wallet/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$international$2d$phone$40$4$2e$5$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$international$2d$phone$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-international-phone@4.5.0_react@19.2.4/node_modules/react-international-phone/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$iconic$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$iconic$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+iconic@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/iconic/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-connector-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3._7679fe86d42f6979f41d87c8de2f235e/node_modules/@dynamic-labs/wallet-connector-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ViewContext$2f$ViewContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/ViewContext/ViewContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$consts$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/consts/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$nonce$2f$nonce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/nonce/nonce.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$isProviderEnabled$2f$isProviderEnabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/isProviderEnabled/isProviderEnabled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/core.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$client$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/client/client.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$config$2f$ApiEndpoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/config/ApiEndpoint.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$events$2f$dynamicEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/events/dynamicEvents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$locale$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$locale$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+locale@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/locale/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$dynamicContextProps$2f$dynamicContextProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/dynamicContextProps/dynamicContextProps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$primaryWalletId$2f$primaryWalletId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/primaryWalletId/primaryWalletId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$connectedWalletsInfo$2f$connectedWalletsInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/connectedWalletsInfo/connectedWalletsInfo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$getWaasAddressTypeLabel$2f$getWaasAddressTypeLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getWaasAddressTypeLabel/getWaasAddressTypeLabel.js [app-client] (ecmascript)");
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
const getEnabledEmbeddedWalletProviders = (projectSettings)=>{
    var _a;
    const providers = (_a = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.providers) !== null && _a !== void 0 ? _a : [];
    const embeddedWalletProviders = [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$ProviderEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderEnum"].Turnkey,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$ProviderEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderEnum"].CoinbaseWaas,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$ProviderEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderEnum"].MagicLink,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$ProviderEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderEnum"].Blocto
    ];
    return embeddedWalletProviders.filter((provider)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$isProviderEnabled$2f$isProviderEnabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isProviderEnabled"])(providers, provider));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/isAllowedToLinkWallet/isAllowedToLinkWallet.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isAllowedToLinkWallet": (()=>isAllowedToLinkWallet)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/values.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/_virtual/_tslib.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$multi$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferu_fe90954bf73f9037990328eb7876c7de$2f$node_modules$2f40$dynamic$2d$labs$2f$multi$2d$wallet$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+multi-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferu_fe90954bf73f9037990328eb7876c7de/node_modules/@dynamic-labs/multi-wallet/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$international$2d$phone$40$4$2e$5$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$international$2d$phone$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-international-phone@4.5.0_react@19.2.4/node_modules/react-international-phone/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$iconic$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$iconic$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+iconic@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/iconic/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-connector-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3._7679fe86d42f6979f41d87c8de2f235e/node_modules/@dynamic-labs/wallet-connector-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ViewContext$2f$ViewContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/ViewContext/ViewContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$consts$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/consts/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$nonce$2f$nonce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/nonce/nonce.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$getEnabledEmbeddedWalletProviders$2f$getEnabledEmbeddedWalletProviders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getEnabledEmbeddedWalletProviders/getEnabledEmbeddedWalletProviders.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/core.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$client$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/client/client.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$config$2f$ApiEndpoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/config/ApiEndpoint.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$events$2f$dynamicEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/events/dynamicEvents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$locale$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$locale$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+locale@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/locale/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$dynamicContextProps$2f$dynamicContextProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/dynamicContextProps/dynamicContextProps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$primaryWalletId$2f$primaryWalletId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/primaryWalletId/primaryWalletId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$connectedWalletsInfo$2f$connectedWalletsInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/connectedWalletsInfo/connectedWalletsInfo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$getWaasAddressTypeLabel$2f$getWaasAddressTypeLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getWaasAddressTypeLabel/getWaasAddressTypeLabel.js [app-client] (ecmascript)");
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
const isAllowedToLinkWallet = (projectSettings, verifiedCredentials, multiWallet)=>{
    if (multiWallet) return true;
    if (!projectSettings || !(verifiedCredentials === null || verifiedCredentials === void 0 ? void 0 : verifiedCredentials.length)) return false;
    // no embedded wallet providers are enabled and user doesn't have any wallet linked
    const canLinkOnSingleWallet = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$getEnabledEmbeddedWalletProviders$2f$getEnabledEmbeddedWalletProviders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEnabledEmbeddedWalletProviders"])(projectSettings).length && !verifiedCredentials.some((vc)=>vc.walletProvider);
    return canLinkOnSingleWallet;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/isTurnkeyEnabled/isTurnkeyEnabled.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isTurnkeyEnabled": (()=>isTurnkeyEnabled)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$ProviderEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/models/ProviderEnum.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$isProviderEnabled$2f$isProviderEnabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/isProviderEnabled/isProviderEnabled.js [app-client] (ecmascript)");
'use client';
;
;
const isTurnkeyEnabled = (projectSettings)=>{
    var _a;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$isProviderEnabled$2f$isProviderEnabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isProviderEnabled"])((_a = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.providers) !== null && _a !== void 0 ? _a : [], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$ProviderEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderEnum"].Turnkey);
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/usingV3Wallets/usingV3Wallets.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "usingV3Wallets": (()=>usingV3Wallets)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$EmbeddedWalletVersionEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/models/EmbeddedWalletVersionEnum.js [app-client] (ecmascript)");
'use client';
;
const usingV3Wallets = (projectSettings)=>{
    var _a, _b;
    return Boolean(((_b = (_a = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.sdk) === null || _a === void 0 ? void 0 : _a.embeddedWallets) === null || _b === void 0 ? void 0 : _b.defaultWalletVersion) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$EmbeddedWalletVersionEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmbeddedWalletVersionEnum"].V3);
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getTimeSince/getTimeSince.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getTimeSince": (()=>getTimeSince)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$locale$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$locale$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+locale@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/locale/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$locale$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$locale$2f$src$2f$lib$2f$locale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+locale@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/locale/src/lib/locale.js [app-client] (ecmascript)");
'use client';
;
const getTimeSince = (date, dateTo)=>{
    const { t } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$locale$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$locale$2f$src$2f$lib$2f$locale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Locale"].getInstance();
    const currentTime = dateTo ? dateTo.getTime() : Date.now();
    const timeDifference = currentTime - date.getTime();
    // Define time units in milliseconds
    const minute = 60 * 1000;
    const hour = 60 * minute;
    const day = 24 * hour;
    const month = 30 * day;
    const year = 365 * day;
    if (timeDifference >= year) {
        const yearsAgo = Math.floor(timeDifference / year);
        return {
            unit: yearsAgo === 1 ? t('dyn_time_since.year') : t('dyn_time_since.years'),
            value: yearsAgo
        };
    }
    if (timeDifference >= month) {
        const monthsAgo = Math.floor(timeDifference / month);
        return {
            unit: monthsAgo === 1 ? t('dyn_time_since.month') : t('dyn_time_since.months'),
            value: monthsAgo
        };
    }
    if (timeDifference >= day) {
        const daysAgo = Math.floor(timeDifference / day);
        return {
            unit: daysAgo === 1 ? t('dyn_time_since.day') : t('dyn_time_since.days'),
            value: daysAgo
        };
    }
    if (timeDifference >= hour) {
        const hoursAgo = Math.floor(timeDifference / hour);
        return {
            unit: hoursAgo === 1 ? t('dyn_time_since.hour') : t('dyn_time_since.hours'),
            value: hoursAgo
        };
    }
    if (timeDifference >= minute) {
        const minutesAgo = Math.floor(timeDifference / minute);
        return {
            unit: minutesAgo === 1 ? t('dyn_time_since.minute') : t('dyn_time_since.minutes'),
            value: minutesAgo
        };
    }
    const secondsAgo = Math.floor(timeDifference / 1000);
    return {
        unit: secondsAgo === 1 ? t('dyn_time_since.second') : t('dyn_time_since.seconds'),
        value: secondsAgo
    };
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getWalletAdditionalAddressByType/getWalletAdditionalAddressByType.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getWalletAdditionalAddressByType": (()=>getWalletAdditionalAddressByType)
});
'use client';
const getWalletAdditionalAddressByType = (type, wallet)=>{
    var _a, _b;
    return (_b = (_a = wallet === null || wallet === void 0 ? void 0 : wallet.additionalAddresses) === null || _a === void 0 ? void 0 : _a.find((address)=>address.type === type)) === null || _b === void 0 ? void 0 : _b.address;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/hasEmbeddedWallet/hasEmbeddedWallet.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "hasEmbeddedWallet": (()=>hasEmbeddedWallet)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$WalletProviderEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/models/WalletProviderEnum.js [app-client] (ecmascript)");
'use client';
;
const hasEmbeddedWallet = (user, walletNameFilter)=>{
    var _a;
    return Boolean(user && ((_a = user.verifiedCredentials) === null || _a === void 0 ? void 0 : _a.some(({ walletProvider, walletName })=>walletProvider === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$WalletProviderEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletProviderEnum"].EmbeddedWallet && (!walletNameFilter || (walletName === null || walletName === void 0 ? void 0 : walletName.startsWith(walletNameFilter))))));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/findEmbeddedWalletFromVerifiedCredentials/findEmbeddedWalletFromVerifiedCredentials.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "findEmbeddedWalletFromVerifiedCredentials": (()=>findEmbeddedWalletFromVerifiedCredentials)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$WalletProviderEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/models/WalletProviderEnum.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/values.js [app-client] (ecmascript)");
'use client';
;
;
/**
 * Finds the first embedded wallet from the verified credentials for the given chains.
 * If the user doesn't have embedded wallet for the chain, it will return the first embedded wallet for other chains.
 * @param user - The user profile.
 * @param chains - The chains to check for embedded wallets.
 * @returns The first embedded wallet from the verified credentials for the given chains.
 */ const findEmbeddedWalletFromVerifiedCredentials = (user, chains)=>{
    var _a;
    const verifiedCredentials = (_a = user === null || user === void 0 ? void 0 : user.verifiedCredentials) === null || _a === void 0 ? void 0 : _a.filter(({ walletProvider })=>walletProvider === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$WalletProviderEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletProviderEnum"].EmbeddedWallet);
    let firstVerifiedCredential;
    if ((verifiedCredentials === null || verifiedCredentials === void 0 ? void 0 : verifiedCredentials.length) && (chains === null || chains === void 0 ? void 0 : chains.length)) {
        firstVerifiedCredential = verifiedCredentials.find(({ chain })=>chain && chains.includes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VerifiedCredentialNameToChainEnum"][chain]));
    }
    return firstVerifiedCredential || (verifiedCredentials === null || verifiedCredentials === void 0 ? void 0 : verifiedCredentials.shift());
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/findPrimaryWalletVCForUser/findPrimaryWalletVCForUser.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "findPrimaryWalletVCForUser": (()=>findPrimaryWalletVCForUser)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$WalletProviderEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/models/WalletProviderEnum.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$views$2f$Passkey$2f$utils$2f$findPrimaryEmbeddedChain$2f$findPrimaryEmbeddedChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/views/Passkey/utils/findPrimaryEmbeddedChain/findPrimaryEmbeddedChain.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$findEmbeddedWalletFromVerifiedCredentials$2f$findEmbeddedWalletFromVerifiedCredentials$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/findEmbeddedWalletFromVerifiedCredentials/findEmbeddedWalletFromVerifiedCredentials.js [app-client] (ecmascript)");
'use client';
;
;
;
/**
 * Finds the primary wallet VC for the user based on wallet type priority and most recent lastSelectedAt
 * @param user - The SDK user object or UserProfile
 * @param projectSettings - Project settings containing embedded wallet configuration
 * @param onlyEmbeddedWallets - Whether to only return embedded wallets
 * @returns JwtVerifiedCredential | undefined - The primary wallet VC for the user
 */ const findPrimaryWalletVCForUser = (user, projectSettings, onlyEmbeddedWallets = false)=>{
    if (!(user === null || user === void 0 ? void 0 : user.verifiedCredentials)) return undefined;
    // Sort all verified credentials by lastSelectedAt (most recent first)
    const sortedCredentials = [
        ...user.verifiedCredentials
    ].sort((a, b)=>{
        // Handle credentials without lastSelectedAt
        if (!a.lastSelectedAt && !b.lastSelectedAt) return 0;
        if (!a.lastSelectedAt) return 1; // a goes to end
        if (!b.lastSelectedAt) return -1; // b goes to end
        // Both have lastSelectedAt, sort by most recent first
        return b.lastSelectedAt.getTime() - a.lastSelectedAt.getTime();
    });
    // Find AA wallet credential (highest priority)
    const aaWalletCredential = sortedCredentials.find((vc)=>vc.walletProvider === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$WalletProviderEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletProviderEnum"].SmartContractWallet);
    if (aaWalletCredential) {
        return aaWalletCredential;
    }
    // Find embedded wallet credential (second priority)
    let embeddedWalletCredential;
    if (projectSettings) {
        const primaryEmbeddedChain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$views$2f$Passkey$2f$utils$2f$findPrimaryEmbeddedChain$2f$findPrimaryEmbeddedChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findPrimaryEmbeddedChain"])(projectSettings);
        embeddedWalletCredential = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$findEmbeddedWalletFromVerifiedCredentials$2f$findEmbeddedWalletFromVerifiedCredentials$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findEmbeddedWalletFromVerifiedCredentials"])(Object.assign(Object.assign({}, user), {
            verifiedCredentials: sortedCredentials
        }), [
            primaryEmbeddedChain
        ]);
    }
    if (embeddedWalletCredential) {
        return embeddedWalletCredential;
    }
    if (onlyEmbeddedWallets) {
        return undefined;
    }
    // Find external wallet credential (lowest priority)
    const externalWalletCredential = sortedCredentials.find((vc)=>vc.format === 'blockchain');
    if (externalWalletCredential) {
        return externalWalletCredential;
    }
    return undefined;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/findTurnkeyWallet/findTurnkeyWallet.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "findTurnkeyWalletByChain": (()=>findTurnkeyWalletByChain),
    "findTurnkeyWalletByPrimaryChain": (()=>findTurnkeyWalletByPrimaryChain)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$ChainEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/models/ChainEnum.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/values.js [app-client] (ecmascript)");
'use client';
;
;
;
const findTurnkeyWalletByChain = (walletOptions, chainName)=>{
    const chain = chainName ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VerifiedCredentialNameToChainEnum"][chainName] : undefined;
    return walletOptions === null || walletOptions === void 0 ? void 0 : walletOptions.find(({ key, walletConnector })=>key.startsWith('turnkey') && (walletConnector === null || walletConnector === void 0 ? void 0 : walletConnector.connectedChain) === chain);
};
const findTurnkeyWalletByPrimaryChain = (walletOptions, chainConfigurations, verifiedCredentials)=>{
    var _a;
    const primaryEmbeddedChain = ((_a = chainConfigurations === null || chainConfigurations === void 0 ? void 0 : chainConfigurations.find((chain)=>chain.primary)) === null || _a === void 0 ? void 0 : _a.name) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$ChainEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainEnum"].Evm;
    const walletConnector = findTurnkeyWalletByChain(walletOptions, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainEnumToVerifiedCredentialName"][primaryEmbeddedChain]);
    const turnkeyVC = verifiedCredentials === null || verifiedCredentials === void 0 ? void 0 : verifiedCredentials.find(({ walletName, chain })=>(walletName === null || walletName === void 0 ? void 0 : walletName.startsWith('turnkey')) && chain === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainEnumToVerifiedCredentialName"][primaryEmbeddedChain]);
    if (!walletConnector) {
        return undefined;
    }
    return Object.assign(Object.assign({}, turnkeyVC), walletConnector);
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getUserWalletsFromVerifiedCredentials/getUserWalletsFromVerifiedCredentials.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getUserWalletsFromVerifiedCredentials": (()=>getUserWalletsFromVerifiedCredentials)
});
'use client';
// verifies if user has any type of wallet by checking if walletProvider is present
// as walletProvider is only present in VC wallets
const getUserWalletsFromVerifiedCredentials = (user)=>{
    var _a;
    return (_a = user.verifiedCredentials) === null || _a === void 0 ? void 0 : _a.filter(// Only wallets has walletProviders
    ({ walletProvider })=>walletProvider);
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/addPasskeyIdentifierToWalletConnector/addPasskeyIdentifierToWalletConnector.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "addPasskeyIdentifierToWalletConnector": (()=>addPasskeyIdentifierToWalletConnector)
});
'use client';
const addPasskeyIdentifierToWalletConnector = (walletConnector, user)=>{
    var _a;
    const passkeyIdentifier = (user === null || user === void 0 ? void 0 : user.phoneNumber) || ((_a = user === null || user === void 0 ? void 0 : user.verifiedCredentials.find((vc)=>vc.oauthDisplayName)) === null || _a === void 0 ? void 0 : _a.oauthDisplayName) || '';
    walletConnector.setPasskeyIdentifier(passkeyIdentifier);
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getEmbeddedWalletAuthHandler/getEmbeddedWalletAuthHandler.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getEmbeddedWalletAuthHandler": (()=>getEmbeddedWalletAuthHandler)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/DynamicError.js [app-client] (ecmascript)");
'use client';
;
const getEmbeddedWalletAuthHandler = (walletConnector)=>{
    if (!walletConnector || 'getAuthenticatorHandler' in walletConnector === false) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DynamicError"]('Invalid connector type');
    }
    const turnkeyAuthenticatorHandler = walletConnector.getAuthenticatorHandler();
    return turnkeyAuthenticatorHandler;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getEmbeddedWalletSessionExpiration/getEmbeddedWalletSessionExpiration.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getEmbeddedWalletSessionExpiration": (()=>getEmbeddedWalletSessionExpiration)
});
'use client';
const sessionExpirationUnit = {
    days: 86400,
    hours: 3600,
    minutes: 60
};
/**
 * Convert the session expiration to seconds
 * @param {Duration} duration
 * @returns {number}
 */ const getEmbeddedWalletSessionExpiration = (duration)=>{
    if (!duration) {
        return 0;
    }
    const { unit, amount } = duration;
    const sessionExpiration = amount || 0;
    const decodedSessionExpirationUnit = sessionExpirationUnit[unit] || 0;
    return sessionExpiration * decodedSessionExpirationUnit;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getEnabledEmbeddedWalletsAuthenticators/getEnabledEmbeddedWalletsAuthenticators.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getEnabledEmbeddedWalletsAuthenticators": (()=>getEnabledEmbeddedWalletsAuthenticators)
});
'use client';
const getEnabledEmbeddedWalletsAuthenticators = (supportedSecurityMethods)=>{
    if (!supportedSecurityMethods || !Object.keys(supportedSecurityMethods).length) {
        return {};
    }
    const enabledSecurityMethods = {};
    Object.keys(supportedSecurityMethods).filter((key)=>{
        var _a;
        return (_a = supportedSecurityMethods[key]) === null || _a === void 0 ? void 0 : _a.isEnabled;
    }).forEach((key)=>enabledSecurityMethods[key] = supportedSecurityMethods[key]);
    return enabledSecurityMethods;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/removeElementById/removeElementById.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "removeElementById": (()=>removeElementById)
});
'use client';
const removeElementById = (elementId)=>{
    let elementToRemove;
    if (typeof window !== 'undefined') {
        elementToRemove = window.document.getElementById(elementId);
        const parentElement = elementToRemove === null || elementToRemove === void 0 ? void 0 : elementToRemove.parentElement;
        if (!elementToRemove || !parentElement) {
            return;
        }
        parentElement.removeChild(elementToRemove);
    }
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getNewVerifiedCredentialsFromDiff/getNewVerifiedCredentialsFromDiff.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getNewVerifiedCredentialsFromDiff": (()=>getNewVerifiedCredentialsFromDiff)
});
'use client';
const getNewVerifiedCredentialsFromDiff = (verifiedCredentialsA, verifiedCredentialsB)=>{
    const knownIds = verifiedCredentialsA.map((vc)=>vc.id);
    return verifiedCredentialsB.filter((vc)=>!knownIds.includes(vc.id));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/fiatUtils/fiatUtils.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getGasFiatValue": (()=>getGasFiatValue),
    "getTotalFiatCost": (()=>getTotalFiatCost)
});
'use client';
const getGasFiatValue = (currentToken, transaction, nativePrice)=>{
    if (!(currentToken === null || currentToken === void 0 ? void 0 : currentToken.price) || !transaction.fee.gas) return;
    let currentNativePrice = currentToken.price;
    if (nativePrice) {
        currentNativePrice = nativePrice;
    }
    return (Number(transaction.format(transaction.fee.gas)) * currentNativePrice).toFixed(2);
};
const getTotalFiatCost = (currentToken, transaction, nativePrice, transactionValue)=>{
    const gasValue = getGasFiatValue(currentToken, transaction, nativePrice);
    if (!gasValue || !(currentToken === null || currentToken === void 0 ? void 0 : currentToken.price)) return;
    const totalFiatCost = Number(gasValue) + Number(transactionValue) * currentToken.price;
    return totalFiatCost.toFixed(2);
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/roundToNthDecimal/roundToNthDecimal.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "roundToNthDecimal": (()=>roundToNthDecimal)
});
'use client';
const roundToNthDecimal = (value, decimal)=>{
    if (!value) return;
    const factor = Math.pow(10, decimal);
    const rounded = Math.round(value * factor) / factor;
    const zeros = '0'.repeat(decimal - 1);
    return rounded === 0 ? `<0.${zeros}1` : rounded;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/networksAndChains/networksAndChains.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getEvmChainName": (()=>getEvmChainName),
    "getNetworkInfoEntry": (()=>getNetworkInfoEntry)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-connector-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3._7679fe86d42f6979f41d87c8de2f235e/node_modules/@dynamic-labs/wallet-connector-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$getChainInfo$2f$getChainInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-connector-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3._7679fe86d42f6979f41d87c8de2f235e/node_modules/@dynamic-labs/wallet-connector-core/src/utils/getChainInfo/getChainInfo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$iconic$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$iconic$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+iconic@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/iconic/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ViewContext$2f$ViewContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/ViewContext/ViewContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/values.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$consts$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/consts/index.js [app-client] (ecmascript)");
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
const getNetworkInfoEntry = ({ chain, networkId, networkInfo })=>{
    var _a, _b;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].logVerboseTroubleshootingMessage('[getNetworkInfoEntry]', {
        chain,
        networkId,
        networkInfo
    });
    if (!chain || !networkId) {
        return;
    }
    const normalizedChain = (_a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$getChainInfo$2f$getChainInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChainInfo"])(chain)) === null || _a === void 0 ? void 0 : _a.name;
    if (!normalizedChain) return;
    const networkData = networkInfo[normalizedChain];
    if (!networkData) return;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].logVerboseTroubleshootingMessage('[getNetworkInfoEntry]', {
        networkData,
        normalizedChain
    });
    // Not all networks have a valid chainId, so default to the first network if the chainId is not found
    return (_b = networkData.find((e)=>e.chainId.toString() === networkId.toString())) !== null && _b !== void 0 ? _b : networkData[0];
};
const getEvmChainName = (chainId)=>{
    const map = {
        1: 'Ethereum',
        10: 'OP Mainnet',
        11155111: 'Sepolia',
        137: 'Polygon',
        42161: 'Arbitrum One',
        43114: 'Avalanche',
        8453: 'Base'
    };
    return map[chainId] || 'Unknown';
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getActiveOauthCredential/getActiveOauthCredential.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getActiveOauthCredential": (()=>getActiveOauthCredential)
});
'use client';
const getActiveOauthCredential = (user)=>{
    var _a;
    return (_a = user === null || user === void 0 ? void 0 : user.verifiedCredentials) === null || _a === void 0 ? void 0 : _a.find((credentials)=>credentials.format === 'oauth' && credentials.id === user.lastVerifiedCredentialId);
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getCustomCountries/getCustomCountries.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getCustomCountries": (()=>getCustomCountries)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$international$2d$phone$40$4$2e$5$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$international$2d$phone$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-international-phone@4.5.0_react@19.2.4/node_modules/react-international-phone/dist/index.mjs [app-client] (ecmascript)");
'use client';
;
// To see which iso2 maps to which country, see
// https://github.com/goveo/react-international-phone/blob/master/src/data/countryData.ts
const getCustomCountries = (supportedCountriesForVerification)=>{
    const customCountries = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$international$2d$phone$40$4$2e$5$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$international$2d$phone$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultCountries"].map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$international$2d$phone$40$4$2e$5$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$international$2d$phone$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseCountry"]).map((country)=>{
        if (country.iso2 === 'fr') country.format = '(.) .. .. .. ..';
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$international$2d$phone$40$4$2e$5$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$international$2d$phone$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildCountryData"])(country);
    });
    if (supportedCountriesForVerification) {
        return customCountries.filter(([, iso2])=>supportedCountriesForVerification.includes(iso2));
    }
    return customCountries;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/formatPhone/formatPhone.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "formatPhone": (()=>formatPhone)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$international$2d$phone$40$4$2e$5$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$international$2d$phone$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-international-phone@4.5.0_react@19.2.4/node_modules/react-international-phone/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$getCustomCountries$2f$getCustomCountries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getCustomCountries/getCustomCountries.js [app-client] (ecmascript)");
'use client';
;
;
/**
 * This takes a phone number (with country code, doesn't work otherwise)
 * and returns the same phone number, but formatted to its corresponding country
 */ const formatPhone = (phone)=>{
    var _a;
    const { country } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$international$2d$phone$40$4$2e$5$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$international$2d$phone$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["guessCountryByPartialPhoneNumber"])({
        // Enables using custom formatting
        countries: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$getCustomCountries$2f$getCustomCountries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCustomCountries"])(),
        phone
    });
    if (!country) return phone;
    const strippedPhone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$international$2d$phone$40$4$2e$5$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$international$2d$phone$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeDialCode"])({
        dialCode: country.dialCode,
        phone
    });
    const mask = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$international$2d$phone$40$4$2e$5$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$international$2d$phone$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveFormattingMask"])({
        country,
        phone
    });
    const regex = /\./g;
    // Must be an exact match of the expected digit count and the actual digit count
    if (((_a = mask.match(regex)) !== null && _a !== void 0 ? _a : []).length !== removeNonDigits(strippedPhone).length) return phone;
    let i = 0;
    const formattedPhone = mask.replace(regex, ()=>strippedPhone[i++]);
    return `+${country.dialCode} ${formattedPhone}`;
};
const removeNonDigits = (text)=>text.replace(/\D+/g, '');
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getUserIdentifier/getUserIdentifier.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getUserIdentifier": (()=>getUserIdentifier)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/values.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/_virtual/_tslib.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$multi$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferu_fe90954bf73f9037990328eb7876c7de$2f$node_modules$2f40$dynamic$2d$labs$2f$multi$2d$wallet$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+multi-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferu_fe90954bf73f9037990328eb7876c7de/node_modules/@dynamic-labs/multi-wallet/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$getActiveOauthCredential$2f$getActiveOauthCredential$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getActiveOauthCredential/getActiveOauthCredential.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$international$2d$phone$40$4$2e$5$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$international$2d$phone$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-international-phone@4.5.0_react@19.2.4/node_modules/react-international-phone/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$utils$2f$functions$2f$shortenEmail$2f$shortenEmail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/utils/functions/shortenEmail/shortenEmail.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$formatPhone$2f$formatPhone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/formatPhone/formatPhone.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$iconic$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$iconic$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+iconic@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/iconic/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-connector-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3._7679fe86d42f6979f41d87c8de2f235e/node_modules/@dynamic-labs/wallet-connector-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ViewContext$2f$ViewContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/ViewContext/ViewContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$consts$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/consts/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$nonce$2f$nonce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/nonce/nonce.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/core.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$client$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/client/client.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$config$2f$ApiEndpoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/config/ApiEndpoint.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$events$2f$dynamicEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/events/dynamicEvents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$locale$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$locale$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+locale@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/locale/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$dynamicContextProps$2f$dynamicContextProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/dynamicContextProps/dynamicContextProps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$primaryWalletId$2f$primaryWalletId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/primaryWalletId/primaryWalletId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$connectedWalletsInfo$2f$connectedWalletsInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/connectedWalletsInfo/connectedWalletsInfo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$getWaasAddressTypeLabel$2f$getWaasAddressTypeLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getWaasAddressTypeLabel/getWaasAddressTypeLabel.js [app-client] (ecmascript)");
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
;
/**
 * This will return a string which we can present to the user as his identifier, such as
 * his email address or phone number.
 */ const getUserIdentifier = (user)=>{
    const oauthCredential = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$getActiveOauthCredential$2f$getActiveOauthCredential$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveOauthCredential"])(user);
    if (oauthCredential === null || oauthCredential === void 0 ? void 0 : oauthCredential.publicIdentifier) {
        return oauthCredential.publicIdentifier;
    }
    if (user === null || user === void 0 ? void 0 : user.email) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$utils$2f$functions$2f$shortenEmail$2f$shortenEmail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shortenEmail"])(user.email);
    if (user === null || user === void 0 ? void 0 : user.phoneNumber) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$formatPhone$2f$formatPhone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPhone"])(user.phoneNumber);
    return 'My Profile';
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getOrdinalNumber/getOrdinalNumber.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getOrdinalNumber": (()=>getOrdinalNumber)
});
'use client';
const getOrdinalNumber = (number)=>{
    if (number < 1) {
        return '';
    }
    if (number % 10 === 1 && number % 100 !== 11) {
        return `${number}st`;
    } else if (number % 10 === 2 && number % 100 !== 12) {
        return `${number}nd`;
    } else if (number % 10 === 3 && number % 100 !== 13) {
        return `${number}rd`;
    }
    return `${number}th`;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getWalletVerifiedCredential/getWalletVerifiedCredential.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getWalletVerifiedCredential": (()=>getWalletVerifiedCredential)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-connector-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3._7679fe86d42f6979f41d87c8de2f235e/node_modules/@dynamic-labs/wallet-connector-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$isSameAddress$2f$isSameAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-connector-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3._7679fe86d42f6979f41d87c8de2f235e/node_modules/@dynamic-labs/wallet-connector-core/src/utils/isSameAddress/isSameAddress.js [app-client] (ecmascript)");
'use client';
;
const getWalletVerifiedCredential = (walletAddress, verifiedCredentials, walletChain)=>verifiedCredentials === null || verifiedCredentials === void 0 ? void 0 : verifiedCredentials.find(({ address })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$isSameAddress$2f$isSameAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSameAddress"])(address || '', walletAddress || '', walletChain));
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/isNetworkUnsupported/isNetworkUnsupported.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isNetworkUnsupported": (()=>isNetworkUnsupported)
});
'use client';
// Network is not supported if:
//   - its undefined
//   - its not in supportedNetworks
const isNetworkUnsupported = (network, supportedNetworks)=>!(supportedNetworks === null || supportedNetworks === void 0 ? void 0 : supportedNetworks.find((supportedNetwork)=>{
        var _a;
        return network && ((_a = supportedNetwork.chainId) === null || _a === void 0 ? void 0 : _a.toString()) === network.toString();
    }));
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/reconcilePrimaryWallet/reconcilePrimaryWallet.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "reconcilePrimaryWallet": (()=>reconcilePrimaryWallet)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$primaryWalletId$2f$primaryWalletId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/primaryWalletId/primaryWalletId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$findPrimaryWalletVCForUser$2f$findPrimaryWalletVCForUser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/findPrimaryWalletVCForUser/findPrimaryWalletVCForUser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$updatePrimaryWalletId$2f$updatePrimaryWalletId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/updatePrimaryWalletId/updatePrimaryWalletId.js [app-client] (ecmascript)");
'use client';
;
;
;
const reconcilePrimaryWallet = (user)=>{
    // Check if the primary wallet is still in this user's VCs
    const primaryWalletInUserVCs = user.verifiedCredentials.some(({ id })=>id === (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$primaryWalletId$2f$primaryWalletId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrimaryWalletId"])());
    if (primaryWalletInUserVCs) return;
    // Try to set primary wallet ID from available wallets (AA or embedded)
    const primaryWalletVC = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$findPrimaryWalletVCForUser$2f$findPrimaryWalletVCForUser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findPrimaryWalletVCForUser"])(user);
    if (primaryWalletVC) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$updatePrimaryWalletId$2f$updatePrimaryWalletId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updatePrimaryWalletId"])(primaryWalletVC.id);
    } else {
        // No wallet VCs found, unset the primary wallet
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$primaryWalletId$2f$primaryWalletId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setPrimaryWalletId"])(undefined);
    }
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getSupportedCountriesForVerificationFromProjectSettings/getSupportedCountriesForVerificationFromProjectSettings.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getSupportedCountriesForVerificationFromProjectSettings": (()=>getSupportedCountriesForVerificationFromProjectSettings)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$ProviderEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/models/ProviderEnum.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$getProviderByType$2f$getProviderByType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getProviderByType/getProviderByType.js [app-client] (ecmascript)");
'use client';
;
;
const getSupportedCountriesForVerificationFromProjectSettings = (projectSettings)=>{
    var _a, _b;
    const smsProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$getProviderByType$2f$getProviderByType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProviderByType"])((_a = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.providers) !== null && _a !== void 0 ? _a : [], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$ProviderEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderEnum"].Sms);
    return ((_b = smsProvider === null || smsProvider === void 0 ? void 0 : smsProvider.enabledCountries) !== null && _b !== void 0 ? _b : []).map((country)=>country.isoCountryCode.toLowerCase());
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getDefaultCountriesIfEmpty/getDefaultCountriesIfEmpty.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getDefaultCountriesIfEmpty": (()=>getDefaultCountriesIfEmpty)
});
'use client';
const defaultCountries = [
    'us',
    'ca'
];
/**
 * Returns the default countries if the provided countries array is empty.
 *
 * @param countries - An array of country ISO2 codes.
 * @returns An array of country ISO2 codes.
 */ const getDefaultCountriesIfEmpty = (countries)=>countries.length ? countries : defaultCountries;
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/modulo/modulo.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "modulo": (()=>modulo)
});
'use client';
/** Performs the true mathematical operation of "number mod target" */ const modulo = (number, target)=>(number % target + target) % target;
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/isHardwareWalletEnabled/isHardwareWalletEnabled.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isHardwareWalletEnabled": (()=>isHardwareWalletEnabled)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-connector-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3._7679fe86d42f6979f41d87c8de2f235e/node_modules/@dynamic-labs/wallet-connector-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$isHardwareWalletConnector$2f$isHardwareWalletConnector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-connector-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3._7679fe86d42f6979f41d87c8de2f235e/node_modules/@dynamic-labs/wallet-connector-core/src/utils/isHardwareWalletConnector/isHardwareWalletConnector.js [app-client] (ecmascript)");
'use client';
;
const isHardwareWalletEnabled = (walletConnector)=>walletConnector !== undefined && walletConnector !== null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$isHardwareWalletConnector$2f$isHardwareWalletConnector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHardwareWalletConnector"])(walletConnector) && walletConnector.isHardwareWalletEnabled;
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/parseWalletLinks/parseWalletLinks.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "parseWalletLinks": (()=>parseWalletLinks)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$isMobile$2f$isMobile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/isMobile/isMobile.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$iconic$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$iconic$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+iconic@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/iconic/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-connector-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3._7679fe86d42f6979f41d87c8de2f235e/node_modules/@dynamic-labs/wallet-connector-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ViewContext$2f$ViewContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/ViewContext/ViewContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$utils$2f$functions$2f$detectBrowser$2f$detectBrowser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/utils/functions/detectBrowser/detectBrowser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/values.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$consts$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/consts/index.js [app-client] (ecmascript)");
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
const parseWalletLinks = (links)=>{
    const isIOS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$isMobile$2f$isMobile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isIPhone"])() || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$isMobile$2f$isMobile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isIPad"])();
    const userBrowser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$utils$2f$functions$2f$detectBrowser$2f$detectBrowser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["detectBrowserName"])() || 'chrome';
    let currentDesktopUrl;
    switch(userBrowser){
        case 'edge':
            currentDesktopUrl = links.edge;
            break;
        case 'firefox':
            currentDesktopUrl = links.firefox;
            break;
        case 'chrome':
        default:
            currentDesktopUrl = links.chrome;
            break;
    }
    const canShowAndroidAppButton = !isIOS && Boolean(links.android);
    const canShowIosAppButton = (isIOS || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$isMobile$2f$isMobile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])()) && Boolean(links.ios);
    return {
        canShowAndroidAppButton,
        canShowIosAppButton,
        currentDesktopUrl,
        hasMobileAppUrl: canShowAndroidAppButton || canShowIosAppButton,
        userBrowser
    };
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getSocialSignInProviderForProviderEnum/getSocialSignInProviderForProviderEnum.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getSocialSignInProviderForProviderEnum": (()=>getSocialSignInProviderForProviderEnum)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$SocialSignInProviderEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/models/SocialSignInProviderEnum.js [app-client] (ecmascript)");
'use client';
;
const getSocialSignInProviderForProviderEnum = (provider)=>{
    if (!provider) return;
    const values = Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$SocialSignInProviderEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SocialSignInProviderEnum"]);
    for (const value of values){
        if (value === provider) {
            return value;
        }
    }
    return undefined;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/isEmailProviderEnabled/isEmailProviderEnabled.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isEmailProviderEnabled": (()=>isEmailProviderEnabled)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$ProviderEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/models/ProviderEnum.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$isProviderEnabled$2f$isProviderEnabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/isProviderEnabled/isProviderEnabled.js [app-client] (ecmascript)");
'use client';
;
;
const isEmailProviderEnabled = (providers)=>providers !== undefined && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$isProviderEnabled$2f$isProviderEnabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isProviderEnabled"])(providers, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$ProviderEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderEnum"].Dynamic) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$isProviderEnabled$2f$isProviderEnabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isProviderEnabled"])(providers, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$ProviderEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderEnum"].Blocto) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$isProviderEnabled$2f$isProviderEnabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isProviderEnabled"])(providers, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$ProviderEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderEnum"].MagicLink));
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/isEmailValid/isEmailValid.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isEmailValid": (()=>isEmailValid)
});
'use client';
const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const isEmailValid = (email)=>EMAIL_REGEX.test(email);
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getVerificationDestinationFromNextView/getVerificationDestinationFromNextView.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getVerificationDestinationFromNextView": (()=>getVerificationDestinationFromNextView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$NextViewEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/models/NextViewEnum.js [app-client] (ecmascript)");
'use client';
;
const getVerificationDestinationFromNextView = (nextView)=>{
    if (nextView === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$NextViewEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NextViewEnum"].VerifyEmail) return 'email';
    if (nextView === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$NextViewEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NextViewEnum"].VerifySms) return 'sms';
    return undefined;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/exportWalletCredential/exportWalletCredential.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "exportWalletCredential": (()=>exportWalletCredential)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/_virtual/_tslib.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-connector-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3._7679fe86d42f6979f41d87c8de2f235e/node_modules/@dynamic-labs/wallet-connector-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$isSessionKeyCompatible$2f$isSessionKeyCompatibleWalletConnector$2f$isSessionKeyCompatibleWalletConnector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-connector-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3._7679fe86d42f6979f41d87c8de2f235e/node_modules/@dynamic-labs/wallet-connector-core/src/utils/isSessionKeyCompatible/isSessionKeyCompatibleWalletConnector/isSessionKeyCompatibleWalletConnector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$views$2f$EmbeddedReveal$2f$utils$2f$turnkeyExport$2f$turnkeyExport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/views/EmbeddedReveal/utils/turnkeyExport/turnkeyExport.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$views$2f$EmbeddedReveal$2f$utils$2f$waasExport$2f$waasExport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/views/EmbeddedReveal/utils/waasExport/waasExport.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
const exportWalletCredential = (_a)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, [
        _a
    ], void 0, function*({ isTurnkeyWallet, isWaasWallet, wallet, user, environmentId, exportPrivateKey, iframeContainerRef, handleAcknowledgeExportPrompt }) {
        var _b, _c, _d;
        handleAcknowledgeExportPrompt();
        if (isTurnkeyWallet) {
            try {
                return yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$views$2f$EmbeddedReveal$2f$utils$2f$turnkeyExport$2f$turnkeyExport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exportCredential"])({
                    address: exportPrivateKey ? wallet === null || wallet === void 0 ? void 0 : wallet.address : undefined,
                    environmentId,
                    user,
                    wallet: wallet
                });
            } catch (err) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$isSessionKeyCompatible$2f$isSessionKeyCompatibleWalletConnector$2f$isSessionKeyCompatibleWalletConnector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSessionKeyCompatibleWalletConnector"])(wallet === null || wallet === void 0 ? void 0 : wallet.connector) && ((_b = wallet === null || wallet === void 0 ? void 0 : wallet.connector) === null || _b === void 0 ? void 0 : _b.removeSessionKeys)) {
                    yield (_c = wallet === null || wallet === void 0 ? void 0 : wallet.connector) === null || _c === void 0 ? void 0 : _c.removeSessionKeys();
                    yield (_d = wallet === null || wallet === void 0 ? void 0 : wallet.connector) === null || _d === void 0 ? void 0 : _d.createOrRestoreSession({
                        ignoreRestore: true
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].error('[TK - removeSessionKeys] failed to perform revealEmbeddedWalletKey activity', {
                        address: wallet === null || wallet === void 0 ? void 0 : wallet.address,
                        err,
                        userId: user === null || user === void 0 ? void 0 : user.userId
                    });
                }
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$views$2f$EmbeddedReveal$2f$utils$2f$turnkeyExport$2f$turnkeyExport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exportCredential"])({
                    address: exportPrivateKey ? wallet === null || wallet === void 0 ? void 0 : wallet.address : undefined,
                    environmentId,
                    user,
                    wallet: wallet
                });
            }
        }
        if (isWaasWallet) {
            // Start the export in the background
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$views$2f$EmbeddedReveal$2f$utils$2f$waasExport$2f$waasExport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exportWaasCredential"])({
                address: exportPrivateKey ? wallet === null || wallet === void 0 ? void 0 : wallet.address : undefined,
                iframeContainer: iframeContainerRef,
                user,
                wallet: wallet
            });
        }
        return undefined;
    });
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/walletListBuilder/utils/findLastWalletIndex/findLastPriorityIndex.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "findLastPriorityIndex": (()=>findLastPriorityIndex)
});
'use client';
const findLastPriorityIndex = (walletNames, priorityList)=>priorityList.reduce((lastIndex, walletName)=>{
        const walletIndex = walletNames.indexOf(walletName.toLowerCase());
        if (walletIndex > lastIndex) return walletIndex;
        return lastIndex;
    }, -1);
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/walletListBuilder/utils/getCalculatedOffset/getCalculatedOffset.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getCalculatedOffset": (()=>getCalculatedOffset)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/values.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$walletListBuilder$2f$utils$2f$findLastWalletIndex$2f$findLastPriorityIndex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/walletListBuilder/utils/findLastWalletIndex/findLastPriorityIndex.js [app-client] (ecmascript)");
'use client';
;
;
;
const getCalculatedOffset = ({ hasWalletFilter, defaultOffset, list, priorityList })=>{
    const lastPriorityIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$walletListBuilder$2f$utils$2f$findLastWalletIndex$2f$findLastPriorityIndex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findLastPriorityIndex"])(list, priorityList);
    if (defaultOffset === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_NUMBER_OF_WALLETS_TO_SHOW"] && !hasWalletFilter && list.length > defaultOffset && lastPriorityIndex !== -1) {
        return lastPriorityIndex + 1;
    } else {
        return defaultOffset;
    }
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/walletListBuilder/utils/filterConnectedWallets/filterConnectedWallets.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "filterConnectedWallets": (()=>filterConnectedWallets)
});
'use client';
/**
 * Used to filter out wallets that are already connected
 * This is useful for connect-only multi-wallet, where we want users to only connect new wallets,
 * not additional accounts from the same wallet
 */ const filterConnectedWallets = ({ walletOptions, userWallets })=>{
    const connectedWalletKeys = new Set(userWallets.map((connectedWallet)=>connectedWallet.connector.key));
    /**
     * Phantom and Phantom Ledger are the same wallet, so we have to filter both of them
     * if one is present, because the next connection will not work, it will just connect the
     * same wallet again with a different walletName.
     * This will be fixed by combining both Phantom and PhantomLedger to the same connector here QNTM-885
     */ if (connectedWalletKeys.has('phantom') || connectedWalletKeys.has('phantomledger')) {
        connectedWalletKeys.add('phantom');
        connectedWalletKeys.add('phantomledger');
    }
    return walletOptions.filter((wallet)=>!connectedWalletKeys.has(wallet.walletConnector.key));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getPlatformForConnector/getPlatformForConnector.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getPlatformForConnector": (()=>getPlatformForConnector)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$isMobile$2f$isMobile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/isMobile/isMobile.js [app-client] (ecmascript)");
'use client';
;
const getPlatformForConnector = (connector)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$isMobile$2f$isMobile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])() || connector.isWalletConnect ? 'mobile' : 'desktop';
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/walletListBuilder/utils/staticLinkedWalletFilter/staticLinkedWalletFilter.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "staticWalletFilter": (()=>staticWalletFilter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-connector-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3._7679fe86d42f6979f41d87c8de2f235e/node_modules/@dynamic-labs/wallet-connector-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$isConnectorEventSupported$2f$isConnectorEventSupported$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-connector-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3._7679fe86d42f6979f41d87c8de2f235e/node_modules/@dynamic-labs/wallet-connector-core/src/utils/isConnectorEventSupported/isConnectorEventSupported.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$getPlatformForConnector$2f$getPlatformForConnector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getPlatformForConnector/getPlatformForConnector.js [app-client] (ecmascript)");
'use client';
;
;
/**
 * This function is a helper to filter out wallets that should not appear in the wallet list
 * if they are already linked to the user profile.
 */ const staticWalletFilter = (linkedWallets, walletOptions)=>walletOptions.filter((walletOption)=>{
        if (walletOption.walletConnector && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$isConnectorEventSupported$2f$isConnectorEventSupported$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isConnectorEventSupported"])(walletOption.walletConnector, 'accountChanged', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$getPlatformForConnector$2f$getPlatformForConnector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPlatformForConnector"])(walletOption.walletConnector))) {
            return true;
        }
        if (linkedWallets.some((wallet)=>wallet.connector.key === walletOption.key)) {
            return false;
        }
        return true;
    });
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/walletListBuilder/utils/createMetaMaskMobileFilter/createMetaMaskMobileFilter.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createMetaMaskMobileFilter": (()=>createMetaMaskMobileFilter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$isMobile$2f$isMobile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/isMobile/isMobile.js [app-client] (ecmascript)");
'use client';
;
const metaMaskConnectorKey = 'metamask';
/**
 * Creates a filter for MetaMask Mobile wallets
 * If user has MetaMask Mobile wallet, filter out all other wallets
 * because MetaMask Mobile doesn't support multiwallet
 */ const createMetaMaskMobileFilter = (userWallets)=>{
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$isMobile$2f$isMobile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])()) {
        return ()=>true;
    }
    const hasMetaMaskWallet = userWallets.some((wallet)=>wallet.key === metaMaskConnectorKey);
    if (!hasMetaMaskWallet) {
        return ()=>true;
    }
    return (walletOption)=>walletOption.walletConnector.key !== metaMaskConnectorKey;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/walletListBuilder/utils/applyMultiWalletFilters/applyMultiWalletFilters.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "applyMultiWalletFilters": (()=>applyMultiWalletFilters)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$walletListBuilder$2f$utils$2f$filterConnectedWallets$2f$filterConnectedWallets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/walletListBuilder/utils/filterConnectedWallets/filterConnectedWallets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$walletListBuilder$2f$utils$2f$staticLinkedWalletFilter$2f$staticLinkedWalletFilter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/walletListBuilder/utils/staticLinkedWalletFilter/staticLinkedWalletFilter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$walletListBuilder$2f$utils$2f$createMetaMaskMobileFilter$2f$createMetaMaskMobileFilter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/walletListBuilder/utils/createMetaMaskMobileFilter/createMetaMaskMobileFilter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$authMode$2f$authMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/authMode/authMode.js [app-client] (ecmascript)");
'use client';
;
;
;
;
const applyMultiWalletFilters = ({ userWallets, walletOptions })=>{
    const walletList = walletOptions.filter((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$walletListBuilder$2f$utils$2f$createMetaMaskMobileFilter$2f$createMetaMaskMobileFilter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMetaMaskMobileFilter"])(userWallets));
    const authMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$authMode$2f$authMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuthMode"])();
    if (authMode === 'connect-only') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$walletListBuilder$2f$utils$2f$filterConnectedWallets$2f$filterConnectedWallets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterConnectedWallets"])({
            userWallets,
            walletOptions: walletList
        });
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$walletListBuilder$2f$utils$2f$staticLinkedWalletFilter$2f$staticLinkedWalletFilter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staticWalletFilter"])(userWallets, walletList);
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/walletListBuilder/walletListBuilder.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "PRIORITY_WALLET_LIST": (()=>PRIORITY_WALLET_LIST),
    "calculateWalletOffsetBasedOnInstalledAndLastUsedWallets": (()=>calculateWalletOffsetBasedOnInstalledAndLastUsedWallets),
    "walletListBuilder": (()=>walletListBuilder)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-connector-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3._7679fe86d42f6979f41d87c8de2f235e/node_modules/@dynamic-labs/wallet-connector-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$isEmbeddedConnector$2f$isEmbeddedConnector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-connector-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3._7679fe86d42f6979f41d87c8de2f235e/node_modules/@dynamic-labs/wallet-connector-core/src/utils/isEmbeddedConnector/isEmbeddedConnector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$walletListBuilder$2f$utils$2f$getCalculatedOffset$2f$getCalculatedOffset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/walletListBuilder/utils/getCalculatedOffset/getCalculatedOffset.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$walletListBuilder$2f$utils$2f$groupWalletOptions$2f$groupWalletOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/walletListBuilder/utils/groupWalletOptions/groupWalletOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$walletListBuilder$2f$utils$2f$applyMultiWalletFilters$2f$applyMultiWalletFilters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/walletListBuilder/utils/applyMultiWalletFilters/applyMultiWalletFilters.js [app-client] (ecmascript)");
'use client';
;
;
;
;
const PRIORITY_WALLET_LIST = [
    'metamask',
    'coinbase',
    'walletconnect',
    'walletconnectsol',
    'phantom',
    'argentx',
    'blocto',
    'solflare',
    'braavos',
    'trust',
    'rainbow',
    'dapper',
    'glow',
    'flowwalletflow'
];
const sortedInputList = (inputList, recommendedWalletKeys)=>{
    // Input is the unordered list of wallets we support
    const unsortedRecommendedWallets = [];
    const unsortedPriorityWallets = [];
    const unsortedOtherWallets = [];
    inputList.forEach((wallet)=>{
        const isRecommendedWallet = recommendedWalletKeys.includes(wallet.key);
        if (isRecommendedWallet) {
            unsortedRecommendedWallets.push(wallet);
        } else if (PRIORITY_WALLET_LIST.includes(wallet.key) && !isRecommendedWallet) {
            unsortedPriorityWallets.push(wallet);
        } else {
            unsortedOtherWallets.push(wallet);
        }
    });
    const sortedPriorityWallets = unsortedPriorityWallets.slice().sort((a, b)=>PRIORITY_WALLET_LIST.indexOf(a.key) - PRIORITY_WALLET_LIST.indexOf(b.key));
    const sortedRecommendedWallets = unsortedRecommendedWallets.slice().sort((a, b)=>recommendedWalletKeys.indexOf(a.key) - recommendedWalletKeys.indexOf(b.key));
    return [
        ...sortedRecommendedWallets,
        ...sortedPriorityWallets,
        ...unsortedOtherWallets
    ];
};
const walletListBuilder = ({ userWallets, multiWallet, numberOfWalletsToShow, inputList, isWalletConnectList, lastUsedWalletKey, searchFilter, walletsFilter, loginWithEmail, groupWallets, walletGroups, showMoreWalletsWithFilter, recommendedWallets })=>{
    let walletList = inputList;
    if (isWalletConnectList) {
        walletList = inputList.filter((wallet)=>wallet.walletConnector.isWalletConnect && wallet.key !== 'walletconnect' && wallet.key !== 'walletconnectsol');
    }
    if (multiWallet) {
        walletList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$walletListBuilder$2f$utils$2f$applyMultiWalletFilters$2f$applyMultiWalletFilters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyMultiWalletFilters"])({
            userWallets,
            walletOptions: walletList
        });
    }
    const hasWalletFilter = Boolean(walletsFilter);
    // This is an array because we might have multiple options with the same key
    // this happens on WC wallets for different chains, because the WC wallet book entries for all chains
    // is always in the EVM entry (for historical reasons) and therefore they all share the same EVM entry's key
    const lastUsedWallets = [];
    const recommendedWalletsList = [];
    const installedWallets = [];
    const otherWallets = [];
    const recommendedWalletKeys = Array.from(new Set((recommendedWallets || []).map((w)=>w.walletKey)));
    const orderedInputList = orderAndFilterList(walletList, walletsFilter, isWalletConnectList, recommendedWalletKeys);
    orderedInputList.forEach((wallet)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$isEmbeddedConnector$2f$isEmbeddedConnector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEmbeddedConnector"])(wallet.walletConnector) || !wallet.walletConnector.isAvailable) {
            return;
        }
        if (recommendedWalletKeys === null || recommendedWalletKeys === void 0 ? void 0 : recommendedWalletKeys.includes(wallet.key)) {
            recommendedWalletsList.push(wallet);
        } else if (lastUsedWalletKey === wallet.key) {
            lastUsedWallets.push(wallet);
        } else if (wallet.isInstalledOnBrowser) {
            installedWallets.push(wallet);
        } else {
            otherWallets.push(wallet);
        }
    });
    const initialWalletsList = [
        ...recommendedWalletsList,
        ...lastUsedWallets,
        ...installedWallets,
        ...otherWallets
    ];
    const finalizedWalletList = groupWallets ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$walletListBuilder$2f$utils$2f$groupWalletOptions$2f$groupWalletOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["groupWalletOptions"])(walletGroups, initialWalletsList) : initialWalletsList;
    // If a filter has been applied we want to add an offset to the number of wallets
    // to include the installed and last used wallets
    const updatedNumberOfWalletsToShow = showMoreWalletsWithFilter && hasWalletFilter ? calculateWalletOffsetBasedOnInstalledAndLastUsedWallets(orderedInputList, lastUsedWallets.concat(installedWallets), numberOfWalletsToShow) : numberOfWalletsToShow;
    const walletsList = listToDisplay(finalizedWalletList, searchFilter, isWalletConnectList, updatedNumberOfWalletsToShow, hasWalletFilter, loginWithEmail);
    return {
        numberOfWallets: initialWalletsList.length,
        walletsList
    };
};
// We want to show the full list of wallets when we render the wallet connect list even
// if a filter was applied to the main page
const orderAndFilterList = (walletList, walletsFilter, isWalletConnectList, recommendedWalletKeys)=>{
    const sortedWalletList = sortedInputList(walletList, recommendedWalletKeys);
    if (!isWalletConnectList && walletsFilter) {
        return walletsFilter(sortedWalletList);
    } else {
        return sortedWalletList;
    }
};
const KEEP_WALLETS_NAME_LIST = [
    'walletconnect',
    'walletconnect sol',
    'bitcoin.com wallet'
];
const applySearchFilterToWalletOptionList = (rawSearchFilter, walletOptionList)=>{
    const searchFilter = rawSearchFilter.trim().toLowerCase();
    const cleanName = (name)=>{
        const trimmedLowerName = name.trim().toLowerCase();
        if (KEEP_WALLETS_NAME_LIST.includes(trimmedLowerName)) {
            return trimmedLowerName;
        } else {
            return trimmedLowerName.replace('wallet', '').replace('evm', '').replace('starknet', '').replace('solana', '').replace('flow', '').replace('bitcoin', '');
        }
    };
    return walletOptionList.filter((walletOption)=>{
        var _a;
        return cleanName(walletOption.name).includes(searchFilter) || (// Validate nested wallets
        (_a = walletOption.groupedWallets) === null || _a === void 0 ? void 0 : _a.some((nestedWalletOption)=>cleanName(nestedWalletOption.name).includes(searchFilter)));
    });
};
const listToDisplay = (finalizedList, searchFilter, isWalletConnectList, numberOfWalletsToShow, hasWalletFilter, loginWithEmail)=>{
    if (searchFilter) {
        return applySearchFilterToWalletOptionList(searchFilter, finalizedList);
    } else if (isWalletConnectList) {
        return finalizedList;
    } else if (loginWithEmail) {
        return finalizedList.slice(0, numberOfWalletsToShow);
    } else {
        const list = finalizedList.map((wallet)=>wallet.name.toLowerCase());
        const offset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$walletListBuilder$2f$utils$2f$getCalculatedOffset$2f$getCalculatedOffset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCalculatedOffset"])({
            defaultOffset: numberOfWalletsToShow,
            hasWalletFilter,
            list,
            priorityList: PRIORITY_WALLET_LIST
        });
        return finalizedList.slice(0, offset);
    }
};
/**
 * This calculation adds an offset to numberOfWalletsToShow so we will show the
 * intended wallets + installed and last used.
 * We should would only apply the additonal offset if the installed wallets was not in the original list.
 *
 * For example:
 * we want to show 4 wallets: ['metamask', 'rainbow', 'walletconnect', 'coinbase']
 * and someone is using brave with installed phantom he should see
 * [ 'brave injected', phantom ,'metamask', 'rainbow', 'walletconnect', 'coinbase',]
 * And when someone is using metamask and coinbase they should see
 * [ 'metamask', 'coinbase', 'rainbow', 'walletconnect']
 */ const calculateWalletOffsetBasedOnInstalledAndLastUsedWallets = (allWalletsOrdered, installedOrUsedWallets, numberOfWalletsToShow)=>{
    const filteredWallets = allWalletsOrdered.slice(0, numberOfWalletsToShow);
    const offset = installedOrUsedWallets.filter((wallet)=>!filteredWallets.includes(wallet)).length;
    return numberOfWalletsToShow + offset;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/isPhoneNumberProviderEnabled/isPhoneNumberProviderEnabled.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isPhoneNumberProviderEnabled": (()=>isPhoneNumberProviderEnabled)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$ProviderEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/models/ProviderEnum.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/values.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/_virtual/_tslib.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$multi$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferu_fe90954bf73f9037990328eb7876c7de$2f$node_modules$2f40$dynamic$2d$labs$2f$multi$2d$wallet$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+multi-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferu_fe90954bf73f9037990328eb7876c7de/node_modules/@dynamic-labs/multi-wallet/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$international$2d$phone$40$4$2e$5$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$international$2d$phone$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-international-phone@4.5.0_react@19.2.4/node_modules/react-international-phone/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$iconic$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$iconic$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+iconic@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/iconic/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-connector-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3._7679fe86d42f6979f41d87c8de2f235e/node_modules/@dynamic-labs/wallet-connector-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ViewContext$2f$ViewContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/ViewContext/ViewContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$consts$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/consts/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$nonce$2f$nonce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/nonce/nonce.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$isProviderEnabled$2f$isProviderEnabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/isProviderEnabled/isProviderEnabled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/core.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$client$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/client/client.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$config$2f$ApiEndpoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/config/ApiEndpoint.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$events$2f$dynamicEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/events/dynamicEvents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$locale$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$locale$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+locale@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/locale/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$dynamicContextProps$2f$dynamicContextProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/dynamicContextProps/dynamicContextProps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$primaryWalletId$2f$primaryWalletId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/primaryWalletId/primaryWalletId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$connectedWalletsInfo$2f$connectedWalletsInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/connectedWalletsInfo/connectedWalletsInfo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$getWaasAddressTypeLabel$2f$getWaasAddressTypeLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getWaasAddressTypeLabel/getWaasAddressTypeLabel.js [app-client] (ecmascript)");
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
const isPhoneNumberProviderEnabled = (providers)=>Boolean(providers && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$isProviderEnabled$2f$isProviderEnabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isProviderEnabled"])(providers, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$ProviderEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderEnum"].Sms));
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getSocialSignInProviderFromString/getSocialSignInProviderFromString.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getSocialSignInProviderFromString": (()=>getSocialSignInProviderFromString)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$SocialSignInProviderEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/models/SocialSignInProviderEnum.js [app-client] (ecmascript)");
'use client';
;
const getSocialSignInProviderFromString = (provider)=>{
    if (!provider) return;
    const values = Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$SocialSignInProviderEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SocialSignInProviderEnum"]);
    for (const value of values){
        if (value === provider) {
            return value;
        }
    }
    return undefined;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/isPasskeyProviderEnabled/isPasskeyProviderEnabled.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isPasskeyProviderEnabled": (()=>isPasskeyProviderEnabled)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$ProviderEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/models/ProviderEnum.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/values.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/_virtual/_tslib.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$multi$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferu_fe90954bf73f9037990328eb7876c7de$2f$node_modules$2f40$dynamic$2d$labs$2f$multi$2d$wallet$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+multi-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferu_fe90954bf73f9037990328eb7876c7de/node_modules/@dynamic-labs/multi-wallet/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$international$2d$phone$40$4$2e$5$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$international$2d$phone$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-international-phone@4.5.0_react@19.2.4/node_modules/react-international-phone/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$iconic$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$iconic$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+iconic@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/iconic/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-connector-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3._7679fe86d42f6979f41d87c8de2f235e/node_modules/@dynamic-labs/wallet-connector-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ViewContext$2f$ViewContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/ViewContext/ViewContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$consts$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/consts/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$nonce$2f$nonce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/nonce/nonce.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$isProviderEnabled$2f$isProviderEnabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/isProviderEnabled/isProviderEnabled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/core.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$client$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/client/client.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$config$2f$ApiEndpoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/config/ApiEndpoint.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$events$2f$dynamicEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/events/dynamicEvents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$locale$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$locale$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+locale@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/locale/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$dynamicContextProps$2f$dynamicContextProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/dynamicContextProps/dynamicContextProps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$primaryWalletId$2f$primaryWalletId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/primaryWalletId/primaryWalletId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$connectedWalletsInfo$2f$connectedWalletsInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/connectedWalletsInfo/connectedWalletsInfo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$getWaasAddressTypeLabel$2f$getWaasAddressTypeLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getWaasAddressTypeLabel/getWaasAddressTypeLabel.js [app-client] (ecmascript)");
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
const isPasskeyProviderEnabled = (providers)=>Boolean(providers && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$isProviderEnabled$2f$isProviderEnabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isProviderEnabled"])(providers, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$ProviderEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderEnum"].Passkey));
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/isValidMfaRecoveryCode/isValidMfaRecoveryCode.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isValidMfaRecoveryCode": (()=>isValidMfaRecoveryCode)
});
'use client';
const isValidMfaRecoveryCode = (text)=>{
    const regex = /^[a-zA-Z0-9]{10}$/;
    return regex.test(text);
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getSocialNetworkIcon/getSocialNetworkIcon.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getSocialNetworkIcon": (()=>getSocialNetworkIcon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$iconic$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$iconic$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+iconic@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/iconic/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$iconic$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$iconic$2f$src$2f$icons$2f$social$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+iconic@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/iconic/src/icons/social/index.js [app-client] (ecmascript)");
'use client';
;
const socialNetworkIconMap = {
    discord: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$iconic$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$iconic$2f$src$2f$icons$2f$social$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DiscordIcon"],
    helpdesk: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$iconic$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$iconic$2f$src$2f$icons$2f$social$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HelpdeskIcon"],
    slack: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$iconic$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$iconic$2f$src$2f$icons$2f$social$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SlackIcon"],
    twitter: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$iconic$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$iconic$2f$src$2f$icons$2f$social$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TwitterIcon"]
};
const getSocialNetworkIcon = (name)=>socialNetworkIconMap[name];
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/clientSessionKeys/getClientSessionKeys.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "clearClientSessionKeys": (()=>clearClientSessionKeys),
    "getClientSessionKeys": (()=>getClientSessionKeys)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$StorageService$2f$StorageService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/StorageService/StorageService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$sessionStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/sessionStorage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$iconic$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$iconic$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+iconic@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/iconic/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-connector-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3._7679fe86d42f6979f41d87c8de2f235e/node_modules/@dynamic-labs/wallet-connector-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ViewContext$2f$ViewContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/ViewContext/ViewContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/values.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$consts$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/consts/index.js [app-client] (ecmascript)");
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
const getClientSessionKeys = ()=>{
    const sessionKeysSS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$StorageService$2f$StorageService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageService"].getItem(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$sessionStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CLIENT_SESSION_KEYS"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$sessionStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CLIENT_SESSION_KEYS_STORAGE_OPTIONS"]);
    const decodedSessionKeys = sessionKeysSS ? JSON.parse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(sessionKeysSS, 'base64').toString()) : undefined;
    return decodedSessionKeys;
};
const clearClientSessionKeys = ()=>{
    const clientSessionKeys = getClientSessionKeys();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].instrument('[SessionChaining] Clearing client session keys', {
        key: 'clearing_client_session_keys',
        sessionPublicKey: clientSessionKeys === null || clientSessionKeys === void 0 ? void 0 : clientSessionKeys.publicKey,
        time: 0
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$StorageService$2f$StorageService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageService"].removeItem(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$sessionStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CLIENT_SESSION_KEYS"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$sessionStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CLIENT_SESSION_KEYS_STORAGE_OPTIONS"]);
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getMissingChains/getMissingChains.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getMissingChains": (()=>getMissingChains)
});
'use client';
const getMissingChains = (arr1, arr2)=>{
    if (!arr1 || !arr2) {
        return;
    }
    // create a Set of all 'chain' values from the second array
    const chainSet = new Set(arr2.map((obj)=>obj.walletChain));
    // filter out objects from the first array that have 'chain' present in the set
    const uniqueChains = arr1.filter((obj)=>!chainSet.has(obj.chain));
    return uniqueChains;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/serializeWalletConnectors/serializeWalletConnectors.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "serializeWalletConnectors": (()=>serializeWalletConnectors)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$iconic$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$iconic$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+iconic@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/iconic/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-connector-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3._7679fe86d42f6979f41d87c8de2f235e/node_modules/@dynamic-labs/wallet-connector-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ViewContext$2f$ViewContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/ViewContext/ViewContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/values.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$consts$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/consts/index.js [app-client] (ecmascript)");
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
const serializeWalletConnectors = (walletConnectors)=>{
    try {
        if (!walletConnectors) return undefined;
        return walletConnectors.map((connector)=>connector.name);
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].error('error serializing walletConnectors', error);
        return undefined;
    }
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/shouldManuallyReconnectOnRefresh/shouldManuallyReconnectOnRefresh.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "shouldManuallyReconnectOnRefresh": (()=>shouldManuallyReconnectOnRefresh)
});
'use client';
const shouldManuallyReconnectOnRefresh = (connector)=>connector.connectedChain === 'STARK' || connector.connectedChain === 'FLOW';
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getSessionInformation/getSessionInformation.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getSessionInformationExpiration": (()=>getSessionInformationExpiration),
    "getSessionInformationJson": (()=>getSessionInformationJson),
    "getSessionInformationName": (()=>getSessionInformationName),
    "getSessionInformationSpendingLimit": (()=>getSessionInformationSpendingLimit),
    "getSessionInformationTimeSinceCreation": (()=>getSessionInformationTimeSinceCreation)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$utils$2f$functions$2f$shortenWalletAddress$2f$shortenWalletAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/utils/functions/shortenWalletAddress/shortenWalletAddress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$getTimeSince$2f$getTimeSince$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getTimeSince/getTimeSince.js [app-client] (ecmascript)");
'use client';
;
;
/** Returns the name of the session or the shortened wallet address if no name is available */ const getSessionInformationName = (session)=>{
    var _a;
    return (_a = session.origin) !== null && _a !== void 0 ? _a : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$utils$2f$functions$2f$shortenWalletAddress$2f$shortenWalletAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shortenWalletAddress"])(session.sessionId);
};
/** Returns the time since the session was created in a human readable format */ const getSessionInformationTimeSinceCreation = (session)=>{
    const { value, unit } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$getTimeSince$2f$getTimeSince$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTimeSince"])(new Date(session.timestamp));
    return `${value} ${unit}`;
};
/** Returns the expiration of the session in a human readable format */ const getSessionInformationExpiration = (session)=>{
    const { value, unit } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$getTimeSince$2f$getTimeSince$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTimeSince"])(new Date(), new Date(Number(session.session.expiresAt) * 1000));
    return `${value} ${unit}`;
};
/** Returns the spending limit of the session in ETH */ const getSessionInformationSpendingLimit = (session)=>{
    var _a, _b;
    const policies = session.session.transferPolicies;
    if (!policies) {
        return '0 ETH';
    }
    let limit = BigInt(0);
    for (const policy of policies){
        limit += (_b = (_a = policy.valueLimit) === null || _a === void 0 ? void 0 : _a.limit) !== null && _b !== void 0 ? _b : BigInt(0);
    }
    const formatter = new Intl.NumberFormat(undefined, {
        maximumFractionDigits: 6
    });
    const ethString = formatter.format(Number(limit) / Math.pow(10, 18));
    return `~${ethString} ETH`;
};
/** Exports the session information as a JSON string with a helper to process bigints */ const getSessionInformationJson = (session)=>JSON.stringify(session, (_, val)=>typeof val === 'bigint' ? val.toString() : val, 2);
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/typeGuard/isThemeSetting.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isThemeSetting": (()=>isThemeSetting)
});
'use client';
const themeModes = [
    'light',
    'dark',
    'auto'
];
const isThemeSetting = (theme)=>themeModes.includes(theme);
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/parseTheme/parseTheme.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "parseTheme": (()=>parseTheme)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ThemeContext$2f$themesData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/ThemeContext/themesData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$typeGuard$2f$isThemeSetting$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/typeGuard/isThemeSetting.js [app-client] (ecmascript)");
'use client';
;
;
const parseTheme = (theme, projectSettingsDesignModal)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$typeGuard$2f$isThemeSetting$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isThemeSetting"])(theme) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ThemeContext$2f$themesData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getThemeConfig"])(projectSettingsDesignModal, theme) : theme;
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getWalletUniqueId/getWalletUniqueId.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getWalletUniqueId": (()=>getWalletUniqueId)
});
'use client';
/**
 * Generates a unique id for a wallet, based on the address,
 * connector key, and chain.
 * This is used to identify a wallet no matter if it's connected only or linked.
 */ const getWalletUniqueId = ({ address, connectorKey, chain })=>`${connectorKey}-${address}-${chain}`;
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getWalletConnectorForWallet/getWalletConnectorForWallet.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getWalletConnectorForWallet": (()=>getWalletConnectorForWallet)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$walletOptions$2f$walletOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/walletOptions/walletOptions.js [app-client] (ecmascript)");
'use client';
;
const getWalletConnectorForWallet = (wallet)=>{
    var _a, _b;
    if (!wallet) {
        return undefined;
    }
    const walletConnectorOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$walletOptions$2f$walletOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWalletConnectorOptions"])();
    const { key: walletKey, chain } = wallet;
    const walletConnector = (_a = walletConnectorOptions.find((wallet)=>walletKey === wallet.key && wallet.walletConnector.connectedChain === chain)) === null || _a === void 0 ? void 0 : _a.walletConnector;
    if (walletConnector) {
        return walletConnector;
    }
    const fallbackConnector = (_b = walletConnectorOptions.find((wallet)=>wallet.key === 'fallbackconnector')) === null || _b === void 0 ? void 0 : _b.walletConnector;
    return fallbackConnector;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/hasAllRequiredWalletsConnected/hasAllRequiredWalletsConnected.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "hasAllRequiredWalletsConnected": (()=>hasAllRequiredWalletsConnected)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$connectedWalletsInfo$2f$connectedWalletsInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/connectedWalletsInfo/connectedWalletsInfo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$dynamicContextProps$2f$dynamicContextProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/dynamicContextProps/dynamicContextProps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$primaryWalletId$2f$primaryWalletId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/primaryWalletId/primaryWalletId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$getMissingChains$2f$getMissingChains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getMissingChains/getMissingChains.js [app-client] (ecmascript)");
'use client';
;
;
;
;
const hasAllRequiredWalletsConnected = ()=>{
    const bridgeChainsToConnect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$getMissingChains$2f$getMissingChains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMissingChains"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$dynamicContextProps$2f$dynamicContextProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBridgeChains"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$connectedWalletsInfo$2f$connectedWalletsInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConnectedWalletsInfo"])());
    return Boolean(!(bridgeChainsToConnect === null || bridgeChainsToConnect === void 0 ? void 0 : bridgeChainsToConnect.length) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$primaryWalletId$2f$primaryWalletId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrimaryWalletId"])());
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/isAuthenticatedWithAWallet/isAuthenticatedWithAWallet.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isAuthenticatedWithAWallet": (()=>isAuthenticatedWithAWallet)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$JwtVerifiedCredentialFormatEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/models/JwtVerifiedCredentialFormatEnum.js [app-client] (ecmascript)");
'use client';
;
const isAuthenticatedWithAWallet = (user)=>{
    const lastVerifiedCredential = user.verifiedCredentials.find((vc)=>vc.id === user.lastVerifiedCredentialId);
    return (lastVerifiedCredential === null || lastVerifiedCredential === void 0 ? void 0 : lastVerifiedCredential.format) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$JwtVerifiedCredentialFormatEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JwtVerifiedCredentialFormatEnum"].Blockchain;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/mergeNetworks/mergeNetworks.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "mergeNetworks": (()=>mergeNetworks)
});
'use client';
/**
 * Will merge the networks in the first param to the networks in the second param.
 * The firs param's networks will have priority in case of conflicts.
 *
 * @example
 * const DynamicSettings = {
 *    overrides: {
 *        evmNetworks: (networks) => mergeNetworks(myEvmNetworks, networks),
 *    }
 * }
 */ const mergeNetworks = (priorityNetworks, secondaryNetworks)=>{
    const networks = [
        ...priorityNetworks
    ];
    secondaryNetworks.forEach((network)=>{
        const hasNetwork = networks.some((item)=>item.chainId === network.chainId);
        if (!hasNetwork) networks.push(network);
    });
    return networks;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/overrideNetworkRpcUrl/overrideNetworkRpcUrl.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "overrideNetworkRpcUrl": (()=>overrideNetworkRpcUrl)
});
'use client';
/**
 * Will override the rpcUrl of the networks in the first param with the urls specified in the second param.
 *
 * @example
 * const DynamicSettings = {
 *    overrides: {
 *        evmNetworks: (networks) => overrideNetworkRpcUrl(networks, {
 *            "1": ["https://eth.customrpc.com", "https://eth.customrpc2.com"],
 *            "137": ["https://polygon.customrpc.com"],
 *        }),
 *    }
 * }
 */ const overrideNetworkRpcUrl = (networks, rpcUrlOverrides)=>{
    const updatedNetworks = [];
    networks.forEach((network)=>{
        if (rpcUrlOverrides[network.chainId]) {
            updatedNetworks.push(Object.assign(Object.assign({}, network), {
                privateCustomerRpcUrls: rpcUrlOverrides[network.chainId]
            }));
        } else {
            updatedNetworks.push(network);
        }
    });
    return updatedNetworks;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/isZKSyncEnabled/isZKSyncEnabled.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isZKSyncEnabled": (()=>isZKSyncEnabled)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$ProviderEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/models/ProviderEnum.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$isProviderEnabled$2f$isProviderEnabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/isProviderEnabled/isProviderEnabled.js [app-client] (ecmascript)");
'use client';
;
;
const isZKSyncEnabled = (projectSettings)=>{
    var _a;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$isProviderEnabled$2f$isProviderEnabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isProviderEnabled"])((_a = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.providers) !== null && _a !== void 0 ? _a : [], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$ProviderEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderEnum"].Zksync);
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getNetwork/getNetwork.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getNetwork": (()=>getNetwork)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/_virtual/_tslib.js [app-client] (ecmascript)");
'use client';
;
const getNetwork = (walletConnector)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, void 0, void 0, function*() {
        var _a;
        return (_a = walletConnector === null || walletConnector === void 0 ? void 0 : walletConnector.getNetwork) === null || _a === void 0 ? void 0 : _a.call(walletConnector);
    });
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/createCryptoDotComPayment/createCryptoDotComPayment.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createCryptoDotComPayment": (()=>createCryptoDotComPayment)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/_virtual/_tslib.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/index.esm.js [app-client] (ecmascript) <locals>");
'use client';
;
;
const createCryptoDotComPayment = (paymentParams)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, void 0, void 0, function*() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createCryptoDotComPayment"])(Object.assign(Object.assign({}, paymentParams), {
            chain: paymentParams.chain
        }));
    });
;
}}),
}]);

//# sourceMappingURL=96e3f_%40dynamic-labs_sdk-react-core_src_lib_utils_functions_fd99b24e._.js.map