module.exports = {

"[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/polyfills.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$buffer$40$6$2e$0$2e$3$2f$node_modules$2f$buffer$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/buffer@6.0.3/node_modules/buffer/index.js [app-ssr] (ecmascript)");
'use client';
;
/* eslint-disable */ /**
 * @walletconnect/client and @walletconnect/qrcode-modal use `global` and `Buffer`, respectively.
 * This issue is captured here: https://github.com/WalletConnect/walletconnect-monorepo/issues/341
 * Here are some GH issues of others facing the same problem:
 *   * https://github.com/WalletConnect/walletconnect-monorepo/issues/734
 *   * https://github.com/WalletConnect/walletconnect-monorepo/issues/748
 */ if (typeof window !== 'undefined') {
    window.global = globalThis;
    Object.assign(window, {
        Buffer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$buffer$40$6$2e$0$2e$3$2f$node_modules$2f$buffer$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Buffer"]
    });
}
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/package.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/_virtual/_tslib.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/ethProviderHelper.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "EthProviderHelper": (()=>EthProviderHelper)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/_virtual/_tslib.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createWalletClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/clients/createWalletClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$custom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/clients/transports/custom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/utils/address/getAddress.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$chainsMap$2f$chainsMap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/chainsMap/chainsMap.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$normalizeRpcError$2f$normalizeRpcError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/normalizeRpcError/normalizeRpcError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$getProvidersFromWindow$2f$getProvidersFromWindow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/getProvidersFromWindow/getProvidersFromWindow.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$eip6963$2f$eip6963Provider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/eip6963/eip6963Provider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$findWalletBookWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/helpers/findWalletBookWallet.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-connector-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3._7679fe86d42f6979f41d87c8de2f235e/node_modules/@dynamic-labs/wallet-connector-core/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$ProviderLookup$2f$ProviderLookup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-connector-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3._7679fe86d42f6979f41d87c8de2f235e/node_modules/@dynamic-labs/wallet-connector-core/src/utils/ProviderLookup/ProviderLookup.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-connector-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3._7679fe86d42f6979f41d87c8de2f235e/node_modules/@dynamic-labs/wallet-connector-core/src/utils/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$eventListenerHandlers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-connector-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3._7679fe86d42f6979f41d87c8de2f235e/node_modules/@dynamic-labs/wallet-connector-core/src/utils/eventListenerHandlers.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
class EthProviderHelper {
    constructor(connector){
        this.walletBookWallet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$findWalletBookWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findWalletBookWallet"])(connector.walletBook, connector.key);
        this.connector = connector;
    }
    getInstalledProvider() {
        const eip6963Provider = this.getEip6963Provider();
        if (eip6963Provider) {
            return eip6963Provider;
        }
        const injectedProvider = this.getInjectedProvider();
        return injectedProvider;
    }
    getInjectedProvider() {
        const config = this.getInjectedConfig();
        if (!config || !config.extensionLocators || !config.extensionLocators.length) return undefined;
        const provider = this.installedProviderLookup(config.extensionLocators);
        return provider;
    }
    getEip6963Provider() {
        const { rdns } = this.connector.metadata;
        if (!rdns) {
            return undefined;
        }
        return this.eip6963ProviderLookup(rdns);
    }
    getInjectedConfig() {
        var _a;
        const injectedConfig = (_a = this.walletBookWallet) === null || _a === void 0 ? void 0 : _a.injectedConfig;
        return injectedConfig === null || injectedConfig === void 0 ? void 0 : injectedConfig.find((c)=>c.chain === 'evm');
    }
    installedProviders() {
        const config = this.getInjectedConfig();
        if (!config) return [];
        const providers = [];
        if (config.windowLocations) {
            for (const windowLocation of config.windowLocations){
                const foundProviders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$getProvidersFromWindow$2f$getProvidersFromWindow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProvidersFromWindow"])(windowLocation);
                if (foundProviders && foundProviders.length) providers.push(...foundProviders);
            }
        }
        if (window.ethereum) {
            if (!window.ethereum.providers || !window.ethereum.providers.length) {
                providers.push(window.ethereum);
            } else {
                window.ethereum.providers.forEach((p)=>providers.push(p));
            }
        }
        return providers;
    }
    installedProviderLookup(extensionLocators) {
        const allInstalledProviders = this.installedProviders();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$ProviderLookup$2f$ProviderLookup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProviderLookup"])(allInstalledProviders, extensionLocators);
    }
    eip6963ProviderLookup(rdns) {
        var _a;
        const { providers } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$eip6963$2f$eip6963Provider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Eip6963ProviderSingleton"].get();
        return (_a = providers.find((provider)=>{
            var _a;
            return ((_a = provider === null || provider === void 0 ? void 0 : provider.info) === null || _a === void 0 ? void 0 : _a.rdns) === rdns;
        })) === null || _a === void 0 ? void 0 : _a.provider;
    }
    isInstalledHelper() {
        return this.findProvider() !== undefined;
    }
    findProvider() {
        const provider = this.connector.findProvider();
        return provider;
    }
    findWalletClient(chainId) {
        const provider = this.findProvider();
        if (!provider) {
            return undefined;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createWalletClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWalletClient"])({
            account: this.connector.getActiveAccount(),
            chain: chainId ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$chainsMap$2f$chainsMap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chainsMap"][chainId] : this.connector.getActiveChain(),
            transport: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$custom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["custom"])({
                request: (args)=>provider.request(args).catch(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$normalizeRpcError$2f$normalizeRpcError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeRpcError"])
            }, this.connector.providersConfig.httpTransportConfig)
        });
    }
    getAddress() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            const client = this.findWalletClient();
            if (!client) {
                return Promise.resolve(undefined);
            }
            return this.getAddressWithProvider(client);
        });
    }
    getAddressWithProvider(client) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            try {
                const [lowercaseAddress] = yield client.requestAddresses();
                const publicAddress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddress"])(lowercaseAddress);
                this.connector.setActiveAccount(publicAddress);
                return publicAddress;
            } catch (err) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].error(err);
                return Promise.reject(err);
            }
        });
    }
    signMessage(messageToSign) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            const walletAddress = yield this.getAddress();
            if (!walletAddress) {
                return Promise.resolve(undefined);
            }
            const client = this.findWalletClient();
            if (!client) {
                return Promise.resolve(undefined);
            }
            const signedMessage = yield client.signMessage({
                account: walletAddress,
                message: messageToSign
            });
            return signedMessage;
        });
    }
    _setupEventListeners(walletConnector) {
        const web3Provider = this.findProvider();
        if (!web3Provider) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].warn('Provider not found', {
                connector: walletConnector
            });
            return {
                tearDownEventListeners: ()=>{}
            };
        }
        if (!web3Provider.on) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].warn('Provider does not support event listeners', {
                connector: walletConnector,
                provider: web3Provider
            });
            return {
                tearDownEventListeners: ()=>{}
            };
        }
        const { handleAccountChange, handleChainChange, handleDisconnect } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$eventListenerHandlers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eventListenerHandlers"])(walletConnector);
        web3Provider.on('accountsChanged', handleAccountChange);
        web3Provider.on('chainChanged', handleChainChange);
        web3Provider.on('disconnect', handleDisconnect);
        const tearDownEventListeners = ()=>{
            const web3Provider = this.findProvider();
            if (!web3Provider) {
                return;
            }
            if (handleAccountChange) {
                web3Provider.removeListener('accountsChanged', handleAccountChange);
            }
            if (handleChainChange) {
                web3Provider.removeListener('chainChanged', handleChainChange);
            }
            if (handleDisconnect) {
                web3Provider.removeListener('disconnect', handleDisconnect);
            }
        };
        return {
            tearDownEventListeners
        };
    }
}
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/utils/logger.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
const logger = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$logger$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$logger$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Logger"]('@dynamic-labs/ethereum');
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/walletConnect/WalletConnectProvider/WalletConnectProvider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "WalletConnectProvider": (()=>WalletConnectProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/_virtual/_tslib.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$ethereum$2d$provider$40$2$2e$21$2e$5_$40$types$2b$react$40$19$2e$2$2e$14_bufferutil$40$4$2e$1$2e$0_react$40$19$2e$_d97bee5aff43bf08910025fecc1f1480$2f$node_modules$2f40$walletconnect$2f$ethereum$2d$provider$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@walletconnect+ethereum-provider@2.21.5_@types+react@19.2.14_bufferutil@4.1.0_react@19._d97bee5aff43bf08910025fecc1f1480/node_modules/@walletconnect/ethereum-provider/dist/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-connector-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3._7679fe86d42f6979f41d87c8de2f235e/node_modules/@dynamic-labs/wallet-connector-core/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$walletConnectDeepLinks$2f$performPlatformSpecificConnectionMethod$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-connector-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3._7679fe86d42f6979f41d87c8de2f235e/node_modules/@dynamic-labs/wallet-connector-core/src/utils/walletConnectDeepLinks/performPlatformSpecificConnectionMethod.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$parseIntSafe$2f$parseIntSafe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/parseIntSafe/parseIntSafe.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/DynamicError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$ErrorCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/ErrorCode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/utils/logger.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
var _a;
class WalletConnectProvider {
    constructor(){
        throw new Error('WalletConnectProvider is not instantiable');
    }
    static getMappedChainsByPreferredOrder() {
        const allChains = _a.enabledNetworks.map((network)=>`eip155:${network.chainId}`);
        const reorderedChains = _a.preferredChains.filter((chain)=>allChains.includes(chain));
        const remainingChains = allChains.filter((chain)=>!_a.preferredChains.includes(chain));
        return [
            ...reorderedChains,
            ...remainingChains
        ].map((chain)=>Number(chain.split(':')[1]));
    }
}
_a = WalletConnectProvider;
WalletConnectProvider.isInitializing = false;
WalletConnectProvider.isInitialized = false;
WalletConnectProvider.enabledNetworks = [];
WalletConnectProvider.preferredChains = [];
WalletConnectProvider.evmNetworkRpcMap = {};
WalletConnectProvider.appName = '';
WalletConnectProvider.appLogoUrl = '';
WalletConnectProvider.eventListenersSetup = false;
WalletConnectProvider.accountChangedHandler = ()=>{};
WalletConnectProvider.chainChangedHandler = ()=>{};
WalletConnectProvider.disconnectHandler = ()=>{};
/**
 * Initializes the provider. This method should only be called once.
 * Does not start a connection.
 */ WalletConnectProvider.init = (...args_1)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, [
        ...args_1
    ], void 0, function*({ storePrefix = 'dynamic-wc2' } = {}) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].debug('[WalletConnectProvider] init', {
            isInitialized: _a.isInitialized,
            isInitializing: _a.isInitializing
        });
        if (_a.isInitializing || _a.isInitialized) {
            return;
        }
        _a.isInitializing = true;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].debug('[WalletConnectProvider] initializing');
        const redirectMetadata = {};
        if (_a.redirectNative) {
            redirectMetadata.native = _a.redirectNative;
        }
        if (_a.redirectUniversal) {
            redirectMetadata.universal = _a.redirectUniversal;
        }
        const metadata = {
            description: '',
            icons: _a.appLogoUrl ? [
                _a.appLogoUrl
            ] : [],
            name: _a.appName || 'Unknown App',
            url: ''
        };
        // Only include redirect metadata if at least one redirect URL is set
        if (_a.redirectNative || _a.redirectUniversal) {
            metadata.redirect = redirectMetadata;
        }
        _a.providerInitPromise = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$ethereum$2d$provider$40$2$2e$21$2e$5_$40$types$2b$react$40$19$2e$2$2e$14_bufferutil$40$4$2e$1$2e$0_react$40$19$2e$_d97bee5aff43bf08910025fecc1f1480$2f$node_modules$2f40$walletconnect$2f$ethereum$2d$provider$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].init({
            customStoragePrefix: storePrefix,
            disableProviderPing: true,
            metadata,
            optionalChains: _a.getMappedChainsByPreferredOrder(),
            optionalEvents: [
                'chainChanged',
                'accountsChanged'
            ],
            optionalMethods: [
                'eth_chainId',
                'eth_signTypedData',
                'eth_signTransaction',
                'eth_sign',
                'personal_sign',
                'eth_sendTransaction',
                'eth_signTypedData_v4',
                'wallet_switchEthereumChain',
                'wallet_addEthereumChain'
            ],
            projectId: _a.projectId,
            rpcMap: _a.evmNetworkRpcMap,
            showQrModal: false
        });
        _a.provider = yield _a.providerInitPromise;
        _a.isInitialized = true;
        _a.isInitializing = false;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].debug('[WalletConnectProvider] initialized');
    });
/**
 * Connects to a wallet. This method should be called whenever a new wallet connection is needed.
 * If the wallet is already connected when the page is refreshed, this method does not need to be called.
 */ WalletConnectProvider.connect = (_b)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, [
        _b
    ], void 0, function*({ deepLinks, deepLinkPreference, connectionOpts }) {
        const handleDisplayURI = (uri)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, void 0, void 0, function*() {
                var _c;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].debug('[WalletConnectProvider] handleDisplayURI', uri);
                _a.connectionUri = uri;
                yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$walletConnectDeepLinks$2f$performPlatformSpecificConnectionMethod$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["performPlatformSpecificConnectionMethod"])(_a.connectionUri, deepLinks, {
                    onDesktopUri: connectionOpts === null || connectionOpts === void 0 ? void 0 : connectionOpts.onDesktopUri,
                    onDisplayUri: connectionOpts === null || connectionOpts === void 0 ? void 0 : connectionOpts.onDisplayUri
                }, deepLinkPreference, _a.redirectNative || _a.redirectUniversal);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].debug('[WalletConnectProvider] removing display_uri event listener');
                (_c = _a.provider) === null || _c === void 0 ? void 0 : _c.off('display_uri', handleDisplayURI);
            });
        if (!_a.provider) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].error('[WalletConnectProvider] connect - provider is not initialized');
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"]('WalletConnectProvider is not initialized');
        }
        // this is in case the user just cancels the deeplink prompt (i.e. in mobile/Safari)
        // in this case, the connection is not rejected, so the "enable" promise is just pending
        // so on retry, we should just use the same uri to handle that promise
        if (_a.connectionUri) {
            yield handleDisplayURI(_a.connectionUri);
            return;
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].debug('[WalletConnectProvider] adding display_uri event listener');
        _a.provider.on('display_uri', handleDisplayURI);
        try {
            // enable = connect to the provider
            const result = yield _a.provider.enable();
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].debug('[WalletConnectProvider] connected to WalletConnect', result);
            return result;
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].error('[WalletConnectProvider] Failed to connect to WalletConnect', error);
            if (typeof error !== 'object' || error === null || !('message' in error) || typeof error.message !== 'string') {
                throw error;
            }
            const customError = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"](error.message);
            if (error.message.includes('rejected')) {
                customError.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$ErrorCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorCode"].CONNECTION_REJECTED;
            } else if (error.message.includes('expired')) {
                customError.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$ErrorCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorCode"].CONNECTION_PROPOSAL_EXPIRED;
            }
            throw customError;
        } finally{
            // Reset the connection URI after it's been consumed
            _a.connectionUri = undefined;
        }
    });
/**
 * Disconnects from a wallet. This method should be called whenever we need to disconnect from a wallet.
 * It will kill the connection, but not the provider.
 */ WalletConnectProvider.disconnect = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, void 0, void 0, function*() {
        if (!_a.provider) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].debug('[WalletConnectProvider] disconnect - provider is not initialized');
            return;
        }
        _a.connectionUri = undefined;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].debug('[WalletConnectProvider] disconnecting from WalletConnect');
        try {
            yield _a.provider.disconnect();
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].error('[WalletConnectProvider] Failed to disconnect from WalletConnect', error);
        }
    });
/**
 * Waits for the provider to be initialized and returns the EthereumProvider instance.
 * We should use this wherever possible (async methods), to ensure the provider is initialized.
 */ WalletConnectProvider.awaitAndGetProvider = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, void 0, void 0, function*() {
        return _a.providerInitPromise;
    });
/**
 * Returns the EthereumProvider instance.
 * Used when we need to access the provider synchronously.
 */ WalletConnectProvider.getProvider = ()=>_a.provider;
WalletConnectProvider.getConnectionUri = ()=>_a.connectionUri;
WalletConnectProvider.handleChainChangedEvent = (chain, onChainChanged)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].debug('[WalletConnectProvider] handling chain change event', {
        chain
    });
    const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$parseIntSafe$2f$parseIntSafe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseIntSafe"])(chain);
    if (!chainId) {
        return;
    }
    onChainChanged === null || onChainChanged === void 0 ? void 0 : onChainChanged(chainId);
};
WalletConnectProvider.handleAccountChangedEvent = (accounts, onAccountChanged)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].debug('[WalletConnectProvider] handling account change event', {
        accounts
    });
    const [account] = accounts;
    const address = account.includes(':') ? account.split(':').pop() : account;
    if (!address) {
        return;
    }
    onAccountChanged === null || onAccountChanged === void 0 ? void 0 : onAccountChanged(address);
};
/**
 * Sets up event listeners for the provider.
 */ WalletConnectProvider.setupEventListeners = ({ onChainChanged, onAccountChanged, onDisconnect })=>{
    if (!_a.provider || _a.eventListenersSetup) {
        return;
    }
    _a.chainChangedHandler = (chainId)=>{
        _a.handleChainChangedEvent(chainId, onChainChanged);
    };
    _a.accountChangedHandler = (account)=>{
        _a.handleAccountChangedEvent(account, onAccountChanged);
    };
    _a.disconnectHandler = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].debug('[WalletConnectProvider] handling disconnect event');
        onDisconnect === null || onDisconnect === void 0 ? void 0 : onDisconnect();
    };
    _a.provider.on('accountsChanged', _a.accountChangedHandler);
    _a.provider.on('chainChanged', _a.chainChangedHandler);
    _a.provider.on('disconnect', _a.disconnectHandler);
    _a.eventListenersSetup = true;
};
/**
 * Tears down event listeners for the provider.
 */ WalletConnectProvider.teardownEventListeners = ()=>{
    if (!_a.provider || !_a.eventListenersSetup) {
        return;
    }
    _a.provider.off('accountsChanged', _a.accountChangedHandler);
    _a.provider.off('chainChanged', _a.chainChangedHandler);
    _a.provider.off('disconnect', _a.disconnectHandler);
    _a.eventListenersSetup = false;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/walletConnect/WalletConnectConnector/WalletConnectConnector.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "WalletConnectConnector": (()=>WalletConnectConnector)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/_virtual/_tslib.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createWalletClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/clients/createWalletClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$custom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/clients/transports/custom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$toAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/accounts/toAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$connector$2f$EthereumWalletConnector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/connector/EthereumWalletConnector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$chainsMap$2f$chainsMap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/chainsMap/chainsMap.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$normalizeRpcError$2f$normalizeRpcError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/normalizeRpcError/normalizeRpcError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$StorageService$2f$StorageService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/StorageService/StorageService.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$parseIntSafe$2f$parseIntSafe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/parseIntSafe/parseIntSafe.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/DynamicError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$isMobile$2f$isMobile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/isMobile/isMobile.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$PlatformService$2f$PlatformService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/PlatformService/PlatformService.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$walletReturnRoute$2f$walletReturnRoute$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/walletReturnRoute/walletReturnRoute.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-connector-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3._7679fe86d42f6979f41d87c8de2f235e/node_modules/@dynamic-labs/wallet-connector-core/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-connector-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3._7679fe86d42f6979f41d87c8de2f235e/node_modules/@dynamic-labs/wallet-connector-core/src/utils/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$walletConnectDeepLinks$2f$walletConnectDeepLinks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-connector-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3._7679fe86d42f6979f41d87c8de2f235e/node_modules/@dynamic-labs/wallet-connector-core/src/utils/walletConnectDeepLinks/walletConnectDeepLinks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$isSameAddress$2f$isSameAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-connector-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3._7679fe86d42f6979f41d87c8de2f235e/node_modules/@dynamic-labs/wallet-connector-core/src/utils/isSameAddress/isSameAddress.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$walletConnect$2f$WalletConnectProvider$2f$WalletConnectProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/walletConnect/WalletConnectProvider/WalletConnectProvider.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const WC_CURRENT_CHAIN_KEY = 'dynamic-wc2-current-chain';
class WalletConnectConnector extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$connector$2f$EthereumWalletConnector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EthereumWalletConnector"] {
    constructor(opts){
        super(opts);
        this.canConnectViaQrCode = true;
        this.isWalletConnect = true;
        this.canHandleMultipleConnections = false;
        this.name = opts.walletName;
        this.deepLinkPreference = opts.deepLinkPreference || 'native';
        const storedChainId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$StorageService$2f$StorageService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StorageService"].getItem(WC_CURRENT_CHAIN_KEY);
        if (storedChainId) {
            this.currentChainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$parseIntSafe$2f$parseIntSafe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseIntSafe"])(storedChainId);
        }
        if (!opts.projectId) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"]('WalletConnect project ID is required');
        }
        // set provider props generic to all wallets
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$walletConnect$2f$WalletConnectProvider$2f$WalletConnectProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WalletConnectProvider"].projectId = opts.projectId;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$walletConnect$2f$WalletConnectProvider$2f$WalletConnectProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WalletConnectProvider"].enabledNetworks = opts.evmNetworks;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$walletConnect$2f$WalletConnectProvider$2f$WalletConnectProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WalletConnectProvider"].preferredChains = opts.walletConnectPreferredChains || [];
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$walletConnect$2f$WalletConnectProvider$2f$WalletConnectProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WalletConnectProvider"].evmNetworkRpcMap = this.evmNetworkRpcMap();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$walletConnect$2f$WalletConnectProvider$2f$WalletConnectProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WalletConnectProvider"].appName = opts.appName || '';
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$walletConnect$2f$WalletConnectProvider$2f$WalletConnectProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WalletConnectProvider"].appLogoUrl = opts.appLogoUrl || '';
        // Set redirect URLs for WalletConnect mobile linking
        // This allows wallets to automatically redirect back to the app after signature
        const { redirectUrl } = this.constructorProps;
        if (redirectUrl) {
            try {
                const redirectUrlObj = new URL(redirectUrl);
                // Native redirects use custom schemes (e.g., "yourapp://")
                if (!redirectUrlObj.protocol.startsWith('http')) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$walletConnect$2f$WalletConnectProvider$2f$WalletConnectProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WalletConnectProvider"].redirectNative = redirectUrl;
                } else {
                    // For http/https URLs, use as universal link
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$walletConnect$2f$WalletConnectProvider$2f$WalletConnectProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WalletConnectProvider"].redirectUniversal = redirectUrl;
                }
            } catch (_a) {
                // If redirectUrl is not a valid URL, try to use it as-is if it looks like a scheme
                // (e.g., "yourapp://")
                if (redirectUrl.includes('://')) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$walletConnect$2f$WalletConnectProvider$2f$WalletConnectProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WalletConnectProvider"].redirectNative = redirectUrl;
                }
            }
        }
    }
    init() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            var _a, _b, _c, _d;
            // Check if WalletConnect is enabled in project settings
            const isWalletConnectEnabled = (_d = (_c = (_b = (_a = this.constructorProps.settings) === null || _a === void 0 ? void 0 : _a.sdk) === null || _b === void 0 ? void 0 : _b.walletConnect) === null || _c === void 0 ? void 0 : _c.v2Enabled) !== null && _d !== void 0 ? _d : false;
            if (!isWalletConnectEnabled) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].logVerboseTroubleshootingMessage('[WalletConnect] skipping init - WalletConnect is not enabled in project settings');
                return;
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].logVerboseTroubleshootingMessage('[WalletConnect] init called', {
                    isInitialized: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$walletConnect$2f$WalletConnectProvider$2f$WalletConnectProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WalletConnectProvider"].isInitialized,
                    isInitializing: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$walletConnect$2f$WalletConnectProvider$2f$WalletConnectProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WalletConnectProvider"].isInitializing
                });
            }
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$walletConnect$2f$WalletConnectProvider$2f$WalletConnectProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WalletConnectProvider"].isInitialized || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$walletConnect$2f$WalletConnectProvider$2f$WalletConnectProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WalletConnectProvider"].isInitializing) {
                return;
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].debug('[WalletConnect] init');
            this.walletConnectorEventsEmitter.emit('connectorInitStarted', 'walletconnect');
            try {
                yield __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$walletConnect$2f$WalletConnectProvider$2f$WalletConnectProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WalletConnectProvider"].init();
            } catch (error) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].error('[WalletConnect] init - error', error);
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"]('WalletConnectProvider failed to initialize');
            }
            this.setupWCEventListeners();
            this.walletConnectorEventsEmitter.emit('connectorInitCompleted', 'walletconnect');
        });
    }
    setupWCEventListeners() {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].debug('[WalletConnect] setupWCEventListeners');
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$walletConnect$2f$WalletConnectProvider$2f$WalletConnectProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WalletConnectProvider"].teardownEventListeners();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$walletConnect$2f$WalletConnectProvider$2f$WalletConnectProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WalletConnectProvider"].setupEventListeners({
            onAccountChanged: (account)=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].debug('[WalletConnect] onAccountChanged', {
                    account
                });
                this.emit('accountChange', {
                    accounts: [
                        account
                    ]
                });
            },
            onChainChanged: (chainId)=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].debug('[WalletConnect] onChainChange', {
                    chainId
                });
                if (chainId === this.currentChainId) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].debug(`[WalletConnect] onChainChange - ignoring chainChanged event with same chain id as current chain id: ${chainId}`);
                    return;
                }
                this.currentChainId = chainId;
                this.emit('chainChange', {
                    chain: String(chainId)
                });
            },
            onDisconnect: ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].debug('[WalletConnect] onDisconnect');
                this.endSession();
                this.emit('disconnect');
            }
        });
    }
    endSession() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].debug('[WalletConnect] endSession');
            this.currentChainId = undefined;
            yield __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$walletConnect$2f$WalletConnectProvider$2f$WalletConnectProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WalletConnectProvider"].disconnect();
        });
    }
    getAddress(opts) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            var _a;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].debug('[WalletConnect] getAddress', opts);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].logVerboseTroubleshootingMessage('[WalletConnectConnector] getAddress', {
                inAppBrowserUrl: (_a = this.metadata) === null || _a === void 0 ? void 0 : _a.inAppBrowserUrl,
                isMobile: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$isMobile$2f$isMobile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isMobile"])(),
                mobileExperience: this.mobileExperience
            });
            const didOpenInAppBrowser = this.openInAppBrowserIfRequired();
            if (didOpenInAppBrowser) {
                return;
            }
            const provider = yield __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$walletConnect$2f$WalletConnectProvider$2f$WalletConnectProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WalletConnectProvider"].awaitAndGetProvider();
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].debug('[WalletConnect] getAddress - connecting to WalletConnect', {
                provider
            });
            const addresses = yield __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$walletConnect$2f$WalletConnectProvider$2f$WalletConnectProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WalletConnectProvider"].connect({
                connectionOpts: opts,
                deepLinkPreference: this.deepLinkPreference,
                deepLinks: this.metadata.deepLinks
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].debug('[WalletConnect] getAddress - connection result', addresses);
            const address = addresses === null || addresses === void 0 ? void 0 : addresses[0];
            return address;
        });
    }
    getWalletClient(chainId) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].logVerboseTroubleshootingMessage('[WalletConnect] getWalletClient was called - chainId', chainId);
        const provider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$walletConnect$2f$WalletConnectProvider$2f$WalletConnectProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WalletConnectProvider"].getProvider();
        if (!provider) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].debug('[WalletConnect] getWalletClient - provider is not initialized');
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"]('WalletConnectProvider is not initialized');
        }
        const walletClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createWalletClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWalletClient"])({
            account: this.getActiveAccount(),
            chain: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$chainsMap$2f$chainsMap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chainsMap"][chainId !== null && chainId !== void 0 ? chainId : String(this.currentChainId)],
            transport: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$custom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["custom"])({
                request: (args)=>{
                    this.deepLinkIfApplicable(args.method);
                    return provider.request(args).catch(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$normalizeRpcError$2f$normalizeRpcError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeRpcError"]);
                }
            }, this.providersConfig.httpTransportConfig)
        });
        return walletClient;
    }
    deepLinkIfApplicable(method) {
        const methodsThatRequireDeepLink = [
            'personal_sign',
            'eth_sendTransaction',
            'eth_signTypedData_v4'
        ];
        const deepLink = this.getDeepLink();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$isMobile$2f$isMobile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isMobile"])() && deepLink && methodsThatRequireDeepLink.includes(method)) {
            // Store current route before opening wallet so we can emit an event on return
            const currentUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$PlatformService$2f$PlatformService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlatformService"].getUrl();
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$walletReturnRoute$2f$walletReturnRoute$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["walletReturnRoute"].set(currentUrl.pathname);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$PlatformService$2f$PlatformService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlatformService"].openURL(deepLink);
        }
    }
    signMessage(messageToSign) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].logVerboseTroubleshootingMessage('[WalletConnect] signMessage', messageToSign);
            const activeAccount = this.getActiveAccount();
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].logVerboseTroubleshootingMessage('[WalletConnect] signMessage - activeAccount', activeAccount);
            if (!activeAccount) {
                return;
            }
            const walletClient = yield this.getWalletClient();
            return walletClient.signMessage({
                account: activeAccount,
                message: messageToSign
            });
        });
    }
    getConnectedAccounts() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            const activeAccount = this.getActiveAccount();
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].logVerboseTroubleshootingMessage('[WalletConnect] getConnectedAccounts - activeAccount', activeAccount);
            return activeAccount ? [
                activeAccount.address
            ] : [];
        });
    }
    getActiveAccount() {
        var _a;
        const provider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$walletConnect$2f$WalletConnectProvider$2f$WalletConnectProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WalletConnectProvider"].getProvider();
        const connectedAccount = (_a = provider === null || provider === void 0 ? void 0 : provider.accounts) === null || _a === void 0 ? void 0 : _a[0];
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].logVerboseTroubleshootingMessage('[WalletConnect] getActiveAccount - connectedAccount', connectedAccount);
        if (!connectedAccount) {
            return undefined;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$toAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toAccount"])(connectedAccount);
    }
    get currentChainId() {
        const lsCurrentChain = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$StorageService$2f$StorageService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StorageService"].getItem(WC_CURRENT_CHAIN_KEY);
        try {
            return lsCurrentChain ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$parseIntSafe$2f$parseIntSafe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseIntSafe"])(lsCurrentChain) : undefined;
        } catch (e) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].debug('[WalletConnect] getCurrentChainId - error', e);
            return undefined;
        }
    }
    set currentChainId(value) {
        if (value) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$StorageService$2f$StorageService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StorageService"].setItem(WC_CURRENT_CHAIN_KEY, value.toString());
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$StorageService$2f$StorageService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StorageService"].removeItem(WC_CURRENT_CHAIN_KEY);
        }
    }
    getActiveChain() {
        if (!this.currentChainId) {
            return undefined;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$chainsMap$2f$chainsMap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chainsMap"][this.currentChainId];
    }
    getNetwork() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].logVerboseTroubleshootingMessage('[WalletConnect] getNetwork');
            const provider = yield __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$walletConnect$2f$WalletConnectProvider$2f$WalletConnectProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WalletConnectProvider"].awaitAndGetProvider();
            if (provider === null || provider === void 0 ? void 0 : provider.chainId) {
                const network = provider.chainId;
                this.currentChainId = network;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].logVerboseTroubleshootingMessage('[WalletConnect] getNetwork - provider network', network);
                return network;
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].logVerboseTroubleshootingMessage('[WalletConnect] getNetwork - no provider found, returning current chain id', {
                currentChainId: this.currentChainId
            });
            return this.currentChainId;
        });
    }
    providerSwitchNetwork(_a) {
        const _super = Object.create(null, {
            providerSwitchNetwork: {
                get: ()=>super.providerSwitchNetwork
            }
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, arguments, void 0, function*({ network }) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].logVerboseTroubleshootingMessage('[WalletConnect] providerSwitchNetwork - network', {
                network,
                switchNetworkOnlyFromWallet: this.switchNetworkOnlyFromWallet
            });
            yield this.reconnectIfRequired();
            const currentNetworkId = yield this.getNetwork();
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].logVerboseTroubleshootingMessage('[WalletConnect] providerSwitchNetwork - currentNetworkId', currentNetworkId);
            if (currentNetworkId && currentNetworkId === network.chainId) {
                return;
            }
            if (this.switchNetworkOnlyFromWallet) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"]('Network switching is only supported through the wallet');
            }
            const walletClient = yield this.getWalletClient();
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].logVerboseTroubleshootingMessage('[WalletConnect] providerSwitchNetwork - will switch network');
            yield _super.providerSwitchNetwork.call(this, {
                network,
                provider: walletClient
            });
            this.currentChainId = network.chainId;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].logVerboseTroubleshootingMessage('[WalletConnect] providerSwitchNetwork - switched network', network.chainId);
            this.emit('chainChange', {
                chain: String(network.chainId)
            });
        });
    }
    supportsNetworkSwitching() {
        return true;
    }
    getSupportedNetworks() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            var _a;
            const enabledNetworks = this.evmNetworks.map((network)=>network.chainId.toString());
            const provider = yield __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$walletConnect$2f$WalletConnectProvider$2f$WalletConnectProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WalletConnectProvider"].awaitAndGetProvider();
            // if there is no session to determine supported networks, we need to return the enabled networks
            if (!(provider === null || provider === void 0 ? void 0 : provider.session)) {
                return enabledNetworks;
            }
            const sessionNetworks = [];
            // Some wallet (i.e ZenGo) use namespaces.account to list supported chains
            // while others use keys within the namespaces object
            Object.keys(provider === null || provider === void 0 ? void 0 : provider.session.namespaces).forEach((key)=>{
                if (key.startsWith('eip155:')) {
                    sessionNetworks.push(key.split(':')[1]);
                }
            });
            (_a = provider === null || provider === void 0 ? void 0 : provider.session.namespaces.eip155) === null || _a === void 0 ? void 0 : _a.accounts.forEach((account)=>sessionNetworks.push(account.split(':')[1]));
            return sessionNetworks.length ? sessionNetworks : enabledNetworks;
        });
    }
    getDeepLink() {
        var _a;
        const provider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$walletConnect$2f$WalletConnectProvider$2f$WalletConnectProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WalletConnectProvider"].getProvider();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].debug('[WalletConnect] getDeepLink', {
            hasSession: Boolean(provider === null || provider === void 0 ? void 0 : provider.session),
            topic: (_a = provider === null || provider === void 0 ? void 0 : provider.session) === null || _a === void 0 ? void 0 : _a.topic,
            uri: provider === null || provider === void 0 ? void 0 : provider.signer.uri
        });
        if (!(provider === null || provider === void 0 ? void 0 : provider.session)) {
            return;
        }
        const deepLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$walletConnectDeepLinks$2f$walletConnectDeepLinks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDeepLink"])({
            deepLinks: this.metadata.deepLinks,
            mode: 'regular',
            preference: this.deepLinkPreference,
            uri: provider.signer.uri
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].logVerboseTroubleshootingMessage('[WalletConnect] getDeepLink - deepLink', deepLink);
        if (!deepLink) {
            return;
        }
        // we need to include the session topic here because it helps the wallet
        // auto redirect back to the dapp after signing
        return `${deepLink}?sessionTopic=${provider.session.topic}`;
    }
    getConnectionUri() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$walletConnect$2f$WalletConnectProvider$2f$WalletConnectProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WalletConnectProvider"].getConnectionUri();
    }
    validateActiveWallet(expectedAddress) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].debug('[WalletConnect] validateActiveWallet - validating wallet', expectedAddress);
            const [activeAddress] = yield this.getConnectedAccounts();
            const isWalletActive = activeAddress && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$isSameAddress$2f$isSameAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSameAddress"])(activeAddress, expectedAddress, this.connectedChain);
            if (isWalletActive) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].debug('[WalletConnect] validateActiveWallet - wallet is active');
                return;
            }
            // if the was an existing session, we need to end it before prompting the user to connect
            // with the wallet they want to use
            if (activeAddress) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].debug('[WalletConnect] validateActiveWallet - ending existing WC session');
                yield this.endSession();
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].debug('[WalletConnect] validateActiveWallet - trying to reconnect WalletConnect wallet...');
            return this.handleWalletNotActive({
                activeAddress,
                expectedAddress
            });
        });
    }
    reconnectIfRequired() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            var _a, _b;
            const wcProvider = yield __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$walletConnect$2f$WalletConnectProvider$2f$WalletConnectProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WalletConnectProvider"].awaitAndGetProvider();
            if (wcProvider === null || wcProvider === void 0 ? void 0 : wcProvider.session) {
                return;
            }
            // we don't really need the address in the WC reconnect view
            yield this.handleWalletNotActive({
                expectedAddress: (_b = (_a = this.getActiveAccount()) === null || _a === void 0 ? void 0 : _a.address) !== null && _b !== void 0 ? _b : ''
            });
        });
    }
}
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/injected/InjectedWalletBase.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "InjectedWalletBase": (()=>InjectedWalletBase)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/_virtual/_tslib.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$connector$2f$EthereumWalletConnector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/connector/EthereumWalletConnector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$ethProviderHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/ethProviderHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/utils/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$walletConnect$2f$WalletConnectConnector$2f$WalletConnectConnector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/walletConnect/WalletConnectConnector/WalletConnectConnector.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
class InjectedWalletBase extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$connector$2f$EthereumWalletConnector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EthereumWalletConnector"] {
    constructor(){
        super(...arguments);
        this.walletConnectorFallback = false;
    }
    get ethProviderHelper() {
        if (!this._ethProviderHelper) {
            this._ethProviderHelper = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$ethProviderHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EthProviderHelper"](this);
        }
        return this._ethProviderHelper;
    }
    getMobileOrInstalledWallet() {
        // can use WC if the wallet has WC setting in wallet book and projectId is set
        const canUseWalletConnect = this.walletConnectorFallback && this.constructorProps.projectId;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].logVerboseTroubleshootingMessage('[InjectedWalletBase] getMobileOrInstalledWallet', {
            canUseWalletConnect,
            isInstalledOnBrowser: this.isInstalledOnBrowser(),
            projectId: this.constructorProps.projectId,
            walletConnectorFallback: this.walletConnectorFallback
        });
        // if the wallet is installed on the browser or WC is not available, return the injected connector
        if (this.isInstalledOnBrowser() || !canUseWalletConnect) {
            return this;
        }
        // if the wallet is not installed on the browser and WC is available, return the WC connector
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$walletConnect$2f$WalletConnectConnector$2f$WalletConnectConnector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WalletConnectConnector"](Object.assign(Object.assign({}, this.constructorProps), {
            walletName: this.name
        }));
    }
    findProvider() {
        var _a;
        return (_a = this.ethProviderHelper) === null || _a === void 0 ? void 0 : _a.getInstalledProvider();
    }
    setupEventListeners() {
        const provider = this.getWalletClient();
        if (!provider) return;
        if (!this.ethProviderHelper) return;
        const { tearDownEventListeners } = this.ethProviderHelper._setupEventListeners(this);
        this.teardownEventListeners = tearDownEventListeners;
    }
    getWalletClient(chainId) {
        var _a;
        return (_a = this.ethProviderHelper) === null || _a === void 0 ? void 0 : _a.findWalletClient(chainId);
    }
    isInstalledOnBrowser() {
        var _a;
        return ((_a = this.ethProviderHelper) === null || _a === void 0 ? void 0 : _a.findProvider()) !== undefined;
    }
    getAddress() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            var _a;
            const didOpenInAppBrowser = this.openInAppBrowserIfRequired();
            if (didOpenInAppBrowser) {
                return;
            }
            return (_a = this.ethProviderHelper) === null || _a === void 0 ? void 0 : _a.getAddress();
        });
    }
    connect() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            yield this.getAddress();
        });
    }
    signMessage(messageToSign) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            var _a;
            return (_a = this.ethProviderHelper) === null || _a === void 0 ? void 0 : _a.signMessage(messageToSign);
        });
    }
    proveOwnership(address, messageToSign) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            yield this.validateActiveWallet(address);
            return this.signMessage(messageToSign);
        });
    }
    endSession() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            var _a;
            const provider = (_a = this.ethProviderHelper) === null || _a === void 0 ? void 0 : _a.findProvider();
            if (!provider) return;
            void provider.request({
                method: 'wallet_revokePermissions',
                params: [
                    {
                        eth_accounts: {}
                    }
                ]
            }).catch((err)=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].debug('[InjectedWalletBase] endSession - Error revoking permissions', err);
            });
        });
    }
    providerSwitchNetwork(_a) {
        const _super = Object.create(null, {
            providerSwitchNetwork: {
                get: ()=>super.providerSwitchNetwork
            }
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, arguments, void 0, function*({ network, provider }) {
            return _super.providerSwitchNetwork.call(this, {
                network,
                provider
            });
        });
    }
}
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/injected/PhantomEvm.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "PhantomEvm": (()=>PhantomEvm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/_virtual/_tslib.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$isMobile$2f$isMobile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/isMobile/isMobile.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$handleMobileWalletRedirect$2f$handleMobileWalletRedirect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/handleMobileWalletRedirect/handleMobileWalletRedirect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$injected$2f$InjectedWalletBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/injected/InjectedWalletBase.js [app-ssr] (ecmascript)");
'use client';
;
;
;
class PhantomEvm extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$injected$2f$InjectedWalletBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InjectedWalletBase"] {
    constructor(){
        super(...arguments);
        this.name = 'Phantom';
        this.overrideKey = 'phantomevm';
    }
    getAddress() {
        const _super = Object.create(null, {
            getAddress: {
                get: ()=>super.getAddress
            }
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            if (this.isInstalledOnBrowser()) {
                return _super.getAddress.call(this);
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$isMobile$2f$isMobile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isMobile"])()) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$handleMobileWalletRedirect$2f$handleMobileWalletRedirect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleMobileWalletRedirect"])({
                    nativeLink: 'phantom://browse',
                    universalLink: 'https://phantom.app/ul/browse'
                });
            }
            return undefined;
        });
    }
    canGetChainAddress() {
        var _a, _b;
        return Boolean((_b = (_a = this.ethProviderHelper) === null || _a === void 0 ? void 0 : _a.findProvider()) === null || _b === void 0 ? void 0 : _b.selectedAddress);
    }
}
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/injected/ExodusEvm.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ExodusEvm": (()=>ExodusEvm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$injected$2f$InjectedWalletBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/injected/InjectedWalletBase.js [app-ssr] (ecmascript)");
'use client';
;
// leaving ExodusEvm in here due to a backwards compatibility issue with this one wallet and v18
class ExodusEvm extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$injected$2f$InjectedWalletBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InjectedWalletBase"] {
    constructor(){
        super(...arguments);
        this.name = 'ExodusEvm';
        this.overrideKey = 'exodusevm';
        this.walletConnectorFallback = true;
    }
}
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/injected/FallbackEvmConnector.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "FallbackEvmConnector": (()=>FallbackEvmConnector)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$injected$2f$InjectedWalletBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/injected/InjectedWalletBase.js [app-ssr] (ecmascript)");
'use client';
;
class FallbackEvmConnector extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$injected$2f$InjectedWalletBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InjectedWalletBase"] {
    constructor(){
        super(...arguments);
        this.name = 'Fallback Connector';
        this.overrideKey = 'fallbackconnector';
        this.isAvailable = false;
    }
    isInstalledOnBrowser() {
        return false;
    }
}
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/utils/getConnectorConstructorForEip6963Wallet/getConnectorConstructorForEip6963Wallet.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getConnectorConstructorForEip6963Wallet": (()=>getConnectorConstructorForEip6963Wallet)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$sanitizeName$2f$sanitizeName$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/sanitizeName/sanitizeName.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$injected$2f$InjectedWalletBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/injected/InjectedWalletBase.js [app-ssr] (ecmascript)");
'use client';
;
;
const getConnectorConstructorForEip6963Wallet = (walletDetail)=>{
    const { info, provider } = walletDetail;
    const sanitizedName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$sanitizeName$2f$sanitizeName$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sanitizeName"])(info.name);
    return class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$injected$2f$InjectedWalletBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InjectedWalletBase"] {
        constructor(props){
            super(Object.assign(Object.assign({}, props), {
                metadata: {
                    groupKey: sanitizedName,
                    icon: info.icon,
                    id: info.uuid,
                    name: info.name,
                    rdns: info.rdns
                }
            }));
            this.name = info.name;
            this.overrideKey = `${sanitizedName}evm`;
        }
        findProvider() {
            return provider;
        }
    };
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/utils/getConnectorConstructorInjectedWallet/getConnectorConstructorInjectedWallet.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getConnectorConstructorInjectedWallet": (()=>getConnectorConstructorInjectedWallet)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$injected$2f$InjectedWalletBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/injected/InjectedWalletBase.js [app-ssr] (ecmascript)");
'use client';
;
const getConnectorConstructorInjectedWallet = (key, wallet)=>{
    const { shortName } = wallet;
    const name = shortName || wallet.name;
    const walletConnectorFallback = Boolean(wallet.walletConnect);
    return class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$injected$2f$InjectedWalletBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InjectedWalletBase"] {
        constructor(){
            super(...arguments);
            this.name = name;
            this.walletConnectorFallback = walletConnectorFallback;
            // this is the key from the wallet book entry so that we don't purely rely on the normalized name
            this.overrideKey = key;
        }
    };
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/injected/fetchInjectedWalletConnectors.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "fetchInjectedWalletConnector": (()=>fetchInjectedWalletConnector),
    "injectedWalletOverrides": (()=>injectedWalletOverrides)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-connector-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3._7679fe86d42f6979f41d87c8de2f235e/node_modules/@dynamic-labs/wallet-connector-core/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-connector-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3._7679fe86d42f6979f41d87c8de2f235e/node_modules/@dynamic-labs/wallet-connector-core/src/utils/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$events$2f$walletConnectorEvents$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-connector-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3._7679fe86d42f6979f41d87c8de2f235e/node_modules/@dynamic-labs/wallet-connector-core/src/events/walletConnectorEvents.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$eip6963$2f$eip6963Provider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/eip6963/eip6963Provider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$sanitizeName$2f$sanitizeName$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/sanitizeName/sanitizeName.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$utils$2f$getConnectorConstructorForEip6963Wallet$2f$getConnectorConstructorForEip6963Wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/utils/getConnectorConstructorForEip6963Wallet/getConnectorConstructorForEip6963Wallet.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$utils$2f$getConnectorConstructorInjectedWallet$2f$getConnectorConstructorInjectedWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/utils/getConnectorConstructorInjectedWallet/getConnectorConstructorInjectedWallet.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$injected$2f$PhantomEvm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/injected/PhantomEvm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$injected$2f$ExodusEvm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/injected/ExodusEvm.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const injectedWalletOverrides = [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$injected$2f$PhantomEvm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhantomEvm"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$injected$2f$ExodusEvm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExodusEvm"]
];
let removeEip6963EventsListener;
// should add eip6963 connector only if not in wallet-book, to avoid adding duplicate connectors
const shouldAddEip6963Connector = (eip6963ProviderInfo, walletBook, walletsWithCustomConnectors)=>{
    var _a;
    const { rdns, name } = eip6963ProviderInfo;
    const chain = 'evm';
    const connectorKey = `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$sanitizeName$2f$sanitizeName$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sanitizeName"])(name)}${chain}`;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].logVerboseTroubleshootingMessage('[ETH shouldAddEip6963Connector]', rdns, name, chain, connectorKey);
    const existingWallet = Object.entries((_a = walletBook === null || walletBook === void 0 ? void 0 : walletBook.wallets) !== null && _a !== void 0 ? _a : {}).find(([key, wallet])=>{
        var _a, _b;
        return ((_a = wallet.eip6963Config) === null || _a === void 0 ? void 0 : _a.rdns) === rdns || key === connectorKey || walletsWithCustomConnectors.includes(connectorKey) || wallet.name === name && ((_b = wallet.injectedConfig) === null || _b === void 0 ? void 0 : _b[0].chain) === chain;
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].logVerboseTroubleshootingMessage('[ETH shouldAddEip6963Connector]', existingWallet);
    return !existingWallet;
};
const addEip6963Listener = (walletBook, walletsWithCustomConnectors)=>{
    removeEip6963EventsListener === null || removeEip6963EventsListener === void 0 ? void 0 : removeEip6963EventsListener();
    removeEip6963EventsListener = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$eip6963$2f$eip6963Provider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["listenToEip6963Events"])((event)=>{
        if (!shouldAddEip6963Connector(event.detail.info, walletBook, walletsWithCustomConnectors)) {
            return;
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].logVerboseTroubleshootingMessage('[ETH fetchInjectedWalletConnectors] listenToEip6963Events', event.detail);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$events$2f$walletConnectorEvents$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["walletConnectorEvents"].emit('providerInjected', {
            injectedConnectorConstructor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$utils$2f$getConnectorConstructorForEip6963Wallet$2f$getConnectorConstructorForEip6963Wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getConnectorConstructorForEip6963Wallet"])(event.detail)
        });
    });
};
const fetchInjectedWalletConnector = ({ walletBook, walletsWithCustomConnectors })=>{
    var _a;
    addEip6963Listener(walletBook, walletsWithCustomConnectors);
    const walletBookConnectors = Object.entries((_a = walletBook === null || walletBook === void 0 ? void 0 : walletBook.wallets) !== null && _a !== void 0 ? _a : {}).filter(([key, wallet])=>{
        var _a;
        return ((_a = wallet.injectedConfig) === null || _a === void 0 ? void 0 : _a.find((config)=>config.chain === 'evm')) && !walletsWithCustomConnectors.includes(key);
    }).map(([key, wallet])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$utils$2f$getConnectorConstructorInjectedWallet$2f$getConnectorConstructorInjectedWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getConnectorConstructorInjectedWallet"])(key, wallet));
    const { providers } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$eip6963$2f$eip6963Provider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Eip6963ProviderSingleton"].get();
    const eip6963Connectors = providers.filter((provider)=>shouldAddEip6963Connector(provider.info, walletBook, walletsWithCustomConnectors)).map((provider)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$utils$2f$getConnectorConstructorForEip6963Wallet$2f$getConnectorConstructorForEip6963Wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getConnectorConstructorForEip6963Wallet"])(provider));
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].logVerboseTroubleshootingMessage('[ETH fetchInjectedWalletConnectors] eip6963Connectors', eip6963Connectors);
    return [
        ...walletBookConnectors,
        ...eip6963Connectors
    ];
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/constants.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "INFURA_ID": (()=>INFURA_ID)
});
'use client';
const INFURA_ID = '87939db78f824920ada5c872db3e56b8';
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/utils/createInjectedConnector/createInjectedConnector.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createInjectedConnector": (()=>createInjectedConnector)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/_virtual/_tslib.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$injected$2f$InjectedWalletBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/injected/InjectedWalletBase.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-connector-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3._7679fe86d42f6979f41d87c8de2f235e/node_modules/@dynamic-labs/wallet-connector-core/src/index.js [app-ssr] (ecmascript) <module evaluation>");
'use client';
;
;
;
;
const createInjectedConnector = (customConnectorFn)=>(props)=>{
        const delegate = customConnectorFn(props);
        return [
            class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$injected$2f$InjectedWalletBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InjectedWalletBase"] {
                constructor(props){
                    super(Object.assign(Object.assign({}, props), {
                        metadata: delegate.metadata
                    }));
                    this.name = delegate.metadata.name;
                }
                init() {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
                        return delegate.init();
                    });
                }
                findProvider() {
                    return delegate.findProvider();
                }
                signMessage(messageToSign) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
                        return delegate.signMessage(messageToSign);
                    });
                }
                connect() {
                    const _super = Object.create(null, {
                        connect: {
                            get: ()=>super.connect
                        }
                    });
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
                        if (delegate.connect) {
                            return delegate.connect();
                        }
                        return _super.connect.call(this);
                    });
                }
                endSession() {
                    const _super = Object.create(null, {
                        endSession: {
                            get: ()=>super.endSession
                        }
                    });
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
                        if (delegate.disconnect) {
                            yield delegate.disconnect();
                        }
                        return _super.endSession.call(this);
                    });
                }
                getAddress() {
                    const _super = Object.create(null, {
                        getAddress: {
                            get: ()=>super.getAddress
                        }
                    });
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
                        if (delegate.getAddress) {
                            return delegate.getAddress();
                        }
                        return _super.getAddress.call(this);
                    });
                }
                getConnectedAccounts() {
                    const _super = Object.create(null, {
                        getConnectedAccounts: {
                            get: ()=>super.getConnectedAccounts
                        }
                    });
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
                        if (delegate.getConnectedAccounts) {
                            return delegate.getConnectedAccounts();
                        }
                        return _super.getConnectedAccounts.call(this);
                    });
                }
                filter() {
                    if (delegate.filter) {
                        return delegate.filter();
                    }
                    return super.filter();
                }
                supportsNetworkSwitching() {
                    if (delegate.supportsNetworkSwitching) {
                        return delegate.supportsNetworkSwitching();
                    }
                    return super.supportsNetworkSwitching();
                }
            }
        ];
    };
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/walletConnect/utils/fetchWalletConnectWallets.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "fetchWalletConnectWallets": (()=>fetchWalletConnectWallets)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$walletConnect$2f$WalletConnectConnector$2f$WalletConnectConnector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/walletConnect/WalletConnectConnector/WalletConnectConnector.js [app-ssr] (ecmascript)");
'use client';
;
const fetchWalletConnectWallets = ({ walletBook, applyFilterFromWalletConnect = true, evmNetworks })=>{
    var _a;
    // Don't create EVM WalletConnect connectors if EVM networks are not configured
    const hasEvmNetworks = evmNetworks && evmNetworks.length > 0;
    if (!hasEvmNetworks) {
        return [];
    }
    return Object.entries((_a = walletBook === null || walletBook === void 0 ? void 0 : walletBook.wallets) !== null && _a !== void 0 ? _a : {}).filter(([, wallet])=>{
        var _a;
        return wallet.walletConnect && (!applyFilterFromWalletConnect || !wallet.filterFromWalletConnect) && (// Exclude wallets that don't support Evm
        (_a = wallet.chains) === null || _a === void 0 ? void 0 : _a.some((chain)=>chain.includes('eip155:')));
    }).map(([key, wallet])=>{
        const { shortName } = wallet;
        const name = shortName || wallet.name;
        return class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$walletConnect$2f$WalletConnectConnector$2f$WalletConnectConnector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WalletConnectConnector"] {
            constructor(props){
                super(Object.assign(Object.assign({}, props), {
                    walletName: name
                }));
                this.overrideKey = key;
            }
        };
    });
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/walletConnect/utils/getWalletConnectConnector.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getWalletConnectConnector": (()=>getWalletConnectConnector)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$walletConnect$2f$WalletConnectConnector$2f$WalletConnectConnector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/walletConnect/WalletConnectConnector/WalletConnectConnector.js [app-ssr] (ecmascript)");
'use client';
;
const getWalletConnectConnector = ()=>class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$walletConnect$2f$WalletConnectConnector$2f$WalletConnectConnector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WalletConnectConnector"] {
        constructor(props){
            super(Object.assign(Object.assign({}, props), {
                walletName: 'WalletConnect'
            }));
        }
    };
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/coinbase/helpers.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getCoinbaseProvider": (()=>getCoinbaseProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$wallet$2d$sdk$40$4$2e$3$2e$7_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f40$coinbase$2f$wallet$2d$sdk$2f$dist$2f$CoinbaseWalletSDK$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@coinbase+wallet-sdk@4.3.7_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/@coinbase/wallet-sdk/dist/CoinbaseWalletSDK.js [app-ssr] (ecmascript)");
'use client';
;
// storing a reference to the coinbase provider because the provider methods work better when
// they are called on the same instance
let coinbaseProvider;
const baseSepolia = 84532;
const baseMainnet = 8453;
const getCoinbaseProvider = ({ appLogoUrl, appName, evmNetworks, walletPreference } = {})=>{
    const appChainIds = evmNetworks === null || evmNetworks === void 0 ? void 0 : evmNetworks.map((network)=>Number(network.chainId));
    // just brings base sepolia to the front of the list, because that is treated as the default chain
    const hasBaseSepolia = evmNetworks === null || evmNetworks === void 0 ? void 0 : evmNetworks.some((network)=>network.chainId === baseSepolia);
    if (hasBaseSepolia) {
        appChainIds === null || appChainIds === void 0 ? void 0 : appChainIds.sort((a, b)=>a === baseSepolia ? -1 : b === baseSepolia ? 1 : 0);
    }
    // just brings base mainnet to the front, because that that is treated as the default chain
    const hasBaseMainnet = evmNetworks === null || evmNetworks === void 0 ? void 0 : evmNetworks.some((network)=>network.chainId === baseMainnet);
    if (hasBaseMainnet) {
        appChainIds === null || appChainIds === void 0 ? void 0 : appChainIds.sort((a, b)=>a === baseMainnet ? -1 : b === baseMainnet ? 1 : 0);
    }
    if (!coinbaseProvider) {
        const coinbaseSdk = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$wallet$2d$sdk$40$4$2e$3$2e$7_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f40$coinbase$2f$wallet$2d$sdk$2f$dist$2f$CoinbaseWalletSDK$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CoinbaseWalletSDK"]({
            appChainIds,
            appLogoUrl,
            appName
        });
        coinbaseProvider = coinbaseSdk.makeWeb3Provider({
            options: walletPreference !== null && walletPreference !== void 0 ? walletPreference : 'all'
        });
    }
    return coinbaseProvider;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/coinbase/coinbase.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Coinbase": (()=>Coinbase)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/_virtual/_tslib.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/utils/encoding/toBytes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createWalletClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/clients/createWalletClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$custom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/clients/transports/custom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$connector$2f$EthereumWalletConnector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/connector/EthereumWalletConnector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$chainsMap$2f$chainsMap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/chainsMap/chainsMap.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-connector-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3._7679fe86d42f6979f41d87c8de2f235e/node_modules/@dynamic-labs/wallet-connector-core/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$eventListenerHandlers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-connector-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3._7679fe86d42f6979f41d87c8de2f235e/node_modules/@dynamic-labs/wallet-connector-core/src/utils/eventListenerHandlers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/utils/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$coinbase$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/coinbase/helpers.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
class Coinbase extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$connector$2f$EthereumWalletConnector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EthereumWalletConnector"] {
    constructor(_a){
        var { appName, appLogoUrl, evmNetworks, coinbaseWalletPreference } = _a, props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__rest"])(_a, [
            "appName",
            "appLogoUrl",
            "evmNetworks",
            "coinbaseWalletPreference"
        ]);
        super(Object.assign({
            evmNetworks
        }, props));
        this.name = 'Coinbase';
        this.overrideKey = 'coinbase';
        this.canConnectViaQrCode = false;
        this.canConnectViaCustodialService = !this.isInstalledOnBrowser();
        this.coinbaseProviderOpts = {
            appLogoUrl: appLogoUrl,
            appName: appName,
            evmNetworks: evmNetworks,
            walletPreference: coinbaseWalletPreference
        };
    }
    get coinbaseProvider() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$coinbase$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCoinbaseProvider"])(this.coinbaseProviderOpts);
    }
    getConnectedAccounts() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            try {
                const accounts = yield this.coinbaseProvider.request({
                    method: 'eth_accounts'
                });
                if (accounts[0]) {
                    this.setActiveAccount(this.parseAddress(accounts[0]));
                }
                return accounts.map(this.parseAddress);
            } catch (error) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].error('Error getting connected accounts', error);
                return [];
            }
        });
    }
    isInstalledOnBrowser() {
        var _a, _b;
        return Boolean((_a = window === null || window === void 0 ? void 0 : window.coinbaseWalletExtension) === null || _a === void 0 ? void 0 : _a.isCoinbaseWallet) || Boolean((_b = window === null || window === void 0 ? void 0 : window.ethereum) === null || _b === void 0 ? void 0 : _b.isCoinbaseWallet);
    }
    getAddress() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            const didOpenInAppBrowser = this.openInAppBrowserIfRequired();
            if (didOpenInAppBrowser) {
                return;
            }
            const [address] = yield this.coinbaseProvider.request({
                method: 'eth_requestAccounts'
            });
            const parsedAddress = this.parseAddress(address);
            this.setActiveAccount(parsedAddress);
            return parsedAddress;
        });
    }
    signMessage(messageToSign) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            const [address] = yield this.coinbaseProvider.request({
                method: 'eth_requestAccounts'
            });
            const parsedAddress = this.parseAddress(address);
            try {
                return yield this.coinbaseProvider.request({
                    method: 'personal_sign',
                    params: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBytes"])(messageToSign)),
                        parsedAddress
                    ]
                });
            } catch (err) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].error('Error signing message', err);
                return undefined;
            }
        });
    }
    setupEventListeners() {
        const { handleAccountChange, handleChainChange, handleDisconnect } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$eventListenerHandlers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eventListenerHandlers"])(this);
        this.coinbaseProvider.on('accountsChanged', handleAccountChange);
        this.coinbaseProvider.on('chainChanged', handleChainChange);
        this.coinbaseProvider.on('disconnect', handleDisconnect);
        this.teardownEventListeners = ()=>{
            this.coinbaseProvider.removeListener('accountsChanged', handleAccountChange);
            this.coinbaseProvider.removeListener('chainChanged', handleChainChange);
            this.coinbaseProvider.removeListener('disconnect', handleDisconnect);
        };
    }
    getWalletClient(chainId) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createWalletClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWalletClient"])({
            account: this.getActiveAccount(),
            chain: chainId ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$chainsMap$2f$chainsMap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chainsMap"][chainId] : this.getActiveChain(),
            transport: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$custom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["custom"])(this.coinbaseProvider, this.providersConfig.httpTransportConfig)
        });
    }
}
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/metaMask/utils/isPendingWalletRequestPermissionError.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isPendingWalletRequestPermissionError": (()=>isPendingWalletRequestPermissionError)
});
'use client';
const isPendingWalletRequestPermissionError = (error)=>typeof error === 'object' && error !== null && 'message' in error && error.message.includes("Request of type 'wallet_requestPermissions' already pending for origin");
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/metaMask/utils/waitForConnection.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "waitForConnection": (()=>waitForConnection)
});
'use client';
const waitForConnection = (provider)=>new Promise((resolve)=>{
        provider.once('connect', ()=>resolve());
    });
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/metaMask/MetaMaskConnector.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "MetaMaskConnector": (()=>MetaMaskConnector),
    "eventTimeline": (()=>eventTimeline),
    "setMetaMaskDisplayUri": (()=>setMetaMaskDisplayUri)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/_virtual/_tslib.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$metamask$2b$sdk$40$0$2e$33$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$metamask$2f$sdk$2f$dist$2f$browser$2f$es$2f$metamask$2d$sdk$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@metamask+sdk@0.33.0_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@metamask/sdk/dist/browser/es/metamask-sdk.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createWalletClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/clients/createWalletClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$custom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/clients/transports/custom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/utils/data/isHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$getOrMapViemChain$2f$getOrMapViemChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/utils/viem/getOrMapViemChain/getOrMapViemChain.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$eventTimeline$2f$eventTimeline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/eventTimeline/eventTimeline.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$PlatformService$2f$PlatformService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/PlatformService/PlatformService.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$isMobile$2f$isMobile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/isMobile/isMobile.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$template$2f$template$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/template/template.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$GetAddressCancelledError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/GetAddressCancelledError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$MetaMaskError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/MetaMaskError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$retryableFn$2f$retryableFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/retryableFn/retryableFn.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$PlatformEventsService$2f$PlatformEventsService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/PlatformEventsService/PlatformEventsService.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-connector-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3._7679fe86d42f6979f41d87c8de2f235e/node_modules/@dynamic-labs/wallet-connector-core/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$eventListenerHandlers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-connector-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3._7679fe86d42f6979f41d87c8de2f235e/node_modules/@dynamic-labs/wallet-connector-core/src/utils/eventListenerHandlers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$injected$2f$InjectedWalletBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/injected/InjectedWalletBase.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/utils/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$metaMask$2f$utils$2f$isPendingWalletRequestPermissionError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/metaMask/utils/isPendingWalletRequestPermissionError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$metaMask$2f$utils$2f$waitForConnection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/metaMask/utils/waitForConnection.js [app-ssr] (ecmascript)");
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
/**
 * The MetaMask SDK must be initialized only once, so we store the instance
 * in these variables to avoid initializing it multiple times
 */ let _metaMaskSDK = null;
let _metaMaskDisplayUri = null;
let _metaMaskConnectUri = null;
const eventTimeline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$eventTimeline$2f$eventTimeline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEventTimeline"])();
const setMetaMaskDisplayUri = (displayUri)=>{
    _metaMaskDisplayUri = displayUri;
};
class MetaMaskConnector extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$injected$2f$InjectedWalletBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InjectedWalletBase"] {
    constructor(props){
        super(props);
        this.name = 'MetaMask';
        this.overrideKey = 'metamask';
        this.canConnectViaQrCode = true;
        this.isInAppBrowser = false;
        this.appName = props.appName;
        this.appLogoUrl = props.appLogoUrl;
        /**
         * The isInAppBrowser must be calculated before initializing the MetaMask SDK.
         *
         * The isInAppBrowser is calculated by checking if the window provider is installed
         * in the browser and if it is running on a mobile device.
         *
         * But the MetaMask SDK will inject its own provider to the window if not provider is injected.
         * This means the MetaMask SDK can interfere with the isInAppBrowser calculation.
         *
         * So we need to calculate the isInAppBrowser before initializing the MetaMask SDK
         * to prevent a false negative
         */ this.isInAppBrowser = this.getIsInAppBrowser();
        /**
         * We can handle multiple connections in MetaMask only when the provider
         * is installed on the browser.
         */ this.canHandleMultipleConnections = this.isInstalledOnBrowser();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].logVerboseTroubleshootingMessage('[MetaMaskConnector] constructor', {
            hasMetaMaskSDK: Boolean(_metaMaskSDK)
        });
        if (!_metaMaskSDK) {
            this.createMetaMaskSDK();
        }
    }
    isInstalledOnBrowser() {
        var _a;
        const metaMaskEip6963Provider = (_a = this.ethProviderHelper) === null || _a === void 0 ? void 0 : _a.eip6963ProviderLookup(this.rdns);
        const isInstalled = Boolean(metaMaskEip6963Provider);
        return isInstalled;
    }
    getSupportedNetworks() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            return this.evmNetworks.map((network)=>network.chainId.toString());
        });
    }
    get metaMaskSDK() {
        if (!_metaMaskSDK) throw new Error('MetaMaskSDK not initialized');
        return _metaMaskSDK;
    }
    set metaMaskSDK(metaMaskSDK) {
        _metaMaskSDK = metaMaskSDK;
    }
    createMetaMaskSDK() {
        const dappMetadata = {
            iconUrl: this.appLogoUrl,
            name: this.appName,
            url: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$PlatformService$2f$PlatformService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlatformService"].getOrigin()
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].debug('[MetaMaskConnector] createMetaMaskSDK - creating sdk', {
            dappMetadata
        });
        _metaMaskSDK = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$metamask$2b$sdk$40$0$2e$33$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$metamask$2f$sdk$2f$dist$2f$browser$2f$es$2f$metamask$2d$sdk$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MetaMaskSDK"]({
            checkInstallationImmediately: true,
            dappMetadata,
            enableAnalytics: false,
            extensionOnly: this.isInstalledOnBrowser(),
            headless: true,
            injectProvider: false,
            openDeeplink: (url)=>{
                if (url.includes('://connect')) {
                    _metaMaskConnectUri = url;
                } else {
                    _metaMaskConnectUri = null;
                }
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$PlatformService$2f$PlatformService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlatformService"].openURL(url);
            },
            preferDesktop: !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$isMobile$2f$isMobile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isMobile"])(),
            readonlyRPCMap: getReadonlyRPCMap(this.evmNetworkRpcMap()),
            useDeeplink: true
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].logVerboseTroubleshootingMessage('[MetaMaskConnector] createMetaMaskSDK - created sdk', {
            _metaMaskSDK
        });
    }
    endSession() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            eventTimeline.postEvent('disconnect');
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].logVerboseTroubleshootingMessage('[MetaMaskConnector] endSession - terminating sdk');
            /**
             * The MetaMask SDK must be terminated and reinitialized on mobile
             * to prevent deeplinks not working
             */ if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$isMobile$2f$isMobile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isMobile"])()) {
                return this.metaMaskSDK.terminate().then(()=>{
                    _metaMaskSDK = null;
                    _metaMaskConnectUri = null;
                    return this.createMetaMaskSDK();
                });
            }
            /**
             * Just terminate the SDK on desktop
             */ return this.metaMaskSDK.terminate();
        });
    }
    getAddress(opts) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].logVerboseTroubleshootingMessage('[MetaMaskConnector] getAddress - waiting for sdk init');
            yield this.metaMaskSDK.sdkInitPromise;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].logVerboseTroubleshootingMessage('[MetaMaskConnector] getAddress - sdk init promise resolved');
            // QR Code flow
            const handleDisplayUri = (displayUri)=>{
                var _a;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].logVerboseTroubleshootingMessage('[MetaMaskConnector] handleDisplayUri', {
                    displayUri
                });
                if (!displayUri) return;
                setMetaMaskDisplayUri(displayUri);
                (_a = opts === null || opts === void 0 ? void 0 : opts.onDisplayUri) === null || _a === void 0 ? void 0 : _a.call(opts, displayUri);
            };
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$isMobile$2f$isMobile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isMobile"])() && Boolean(opts === null || opts === void 0 ? void 0 : opts.onDisplayUri)) {
                this.metaMaskSDK.on('display_uri', handleDisplayUri);
            }
            try {
                // Deep link to MetaMask app in-app browser
                if (this.shouldDeepLinkToMetaMaskInAppBrowser() && this.metadata.inAppBrowserUrl) {
                    const inAppBrowserCompiledTemplate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$template$2f$template$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["template"])(this.metadata.inAppBrowserUrl);
                    const { href } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$PlatformService$2f$PlatformService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlatformService"].getUrl();
                    const deepLink = inAppBrowserCompiledTemplate({
                        dappURI: href
                    });
                    // Redirect to the in-app browser and append the current url
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$PlatformService$2f$PlatformService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlatformService"].openURL(deepLink);
                    return;
                }
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].logVerboseTroubleshootingMessage('[MetaMaskConnector] getAddress - getting initial connected accounts');
                // Connect to MetaMask
                const initialConnectedAccounts = yield this.getConnectedAccountsSafely();
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].logVerboseTroubleshootingMessage('[MetaMaskConnector] getAddress - got initial connected accounts', {
                    initialConnectedAccounts
                });
                if (initialConnectedAccounts.length) {
                    return this.parseAddress(initialConnectedAccounts[0]);
                }
                try {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].logVerboseTroubleshootingMessage('[MetaMaskConnector] getAddress - connecting to metaMask');
                    yield this.metaMaskSDK.connect();
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].logVerboseTroubleshootingMessage('[MetaMaskConnector] getAddress - connected to metaMask');
                } catch (error) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].logVerboseTroubleshootingMessage('[MetaMaskConnector] getAddress - error connecting to metaMask', {
                        error
                    });
                    /**
                     * In case of a getAddress call was already made and is pending
                     * and a new getAddress call is made after a endSession call, the
                     * MetaMask SDK will reject the original connect calls in the getAddress
                     * promise.
                     *
                     * In this case we want to cast the error to GetAddressCancelledError
                     * so the SDK knows the original getAddres call is cancelled and
                     * be clear to start the new getAddress flow
                     */ if (eventTimeline.isEventRecent('disconnect', 1000)) {
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$GetAddressCancelledError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GetAddressCancelledError"]();
                    }
                    const isRequestPendingError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$metaMask$2f$utils$2f$isPendingWalletRequestPermissionError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPendingWalletRequestPermissionError"])(error);
                    if (!isRequestPendingError) {
                        throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$MetaMaskError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MetaMaskError"].fromError(error);
                    } else {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].logVerboseTroubleshootingMessage('[MetaMaskConnector] getAddress - error connection - waiting for connection');
                        // Get provider again after connect() attempt - it might be available now
                        const providerAfterConnect = this.getProvider();
                        if (providerAfterConnect) {
                            yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$metaMask$2f$utils$2f$waitForConnection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["waitForConnection"])(providerAfterConnect);
                        }
                    }
                }
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].logVerboseTroubleshootingMessage('[MetaMaskConnector] getAddress - getting connected accounts');
                const accounts = yield this.getConnectedAccounts();
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].logVerboseTroubleshootingMessage('[MetaMaskConnector] getAddress - got connected accounts', {
                    accounts
                });
                return accounts[0];
            } finally{
                this.metaMaskSDK.off('display_uri', handleDisplayUri);
            }
        });
    }
    getConnectedAccountsSafely() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            try {
                const connectedAccounts = yield this.getConnectedAccounts();
                return connectedAccounts;
            } catch (err) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].error(err);
                return [];
            }
        });
    }
    getConnectedAccounts() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            // Wait for for MetaMask SDK to initialize
            yield this.metaMaskSDK.sdkInitPromise;
            const provider = this.getProvider();
            if (!provider) {
                return [];
            }
            /**
             * The eth_accounts method can hang on mobile devices when
             * the MetaMask SDK has not connected yet. So we use a retryable
             * to ensure the timeout will be respected
             */ const accounts = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$retryableFn$2f$retryableFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retryableFn"])(()=>provider.request({
                    method: 'eth_accounts',
                    params: []
                }), {
                fallbackValue: [],
                timeoutMs: 1000
            });
            if (!(accounts === null || accounts === void 0 ? void 0 : accounts.length)) {
                return [];
            }
            return accounts.map(this.parseAddress);
        });
    }
    signMessage(messageToSign) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].logVerboseTroubleshootingMessage('[MetaMaskConnector] signMessage - waiting for sdk init');
            yield this.metaMaskSDK.sdkInitPromise;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].logVerboseTroubleshootingMessage('[MetaMaskConnector] signMessage - sdk init promise resolved');
            /**
             * Should wait for the window to be focused on mobile
             * to account for the user moving between the MetaMaskApp
             * and the browser
             */ const windowFocusPromiseForMobile = !this.isInAppBrowser && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$isMobile$2f$isMobile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isMobile"])() ? waitForFocusWindowEvent() : Promise.resolve();
            const provider = this.getProvider();
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].logVerboseTroubleshootingMessage('[MetaMaskConnector] signMessage - got provider', {
                provider
            });
            if (!provider) {
                return undefined;
            }
            const [selectedAddress] = yield this.getConnectedAccounts();
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].logVerboseTroubleshootingMessage('[MetaMaskConnector] signMessage - got selected address', {
                selectedAddress
            });
            if (!selectedAddress) {
                return undefined;
            }
            const walletClient = this.getWalletClientForAddress(selectedAddress);
            if (!walletClient) return undefined;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].logVerboseTroubleshootingMessage('[MetaMaskConnector] signMessage - will sign', {
                messageToSign
            });
            const signature = yield walletClient.signMessage({
                message: messageToSign
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].logVerboseTroubleshootingMessage('[MetaMaskConnector] signMessage - will wait for window focus');
            yield windowFocusPromiseForMobile;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].logVerboseTroubleshootingMessage('[MetaMaskConnector] signMessage - signed', {
                signature
            });
            return signature;
        });
    }
    chooseAccountsToConnect() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            return [];
        });
    }
    getWalletClient(chainId) {
        const provider = this.getProvider();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].logVerboseTroubleshootingMessage('[MetaMaskConnector] getWalletClient - got provider', {
            provider
        });
        if (!provider) {
            return undefined;
        }
        const selectedAddress = provider.getSelectedAddress();
        return this.getWalletClientForAddress(selectedAddress || undefined, chainId);
    }
    get rdns() {
        const { rdns } = this.metadata;
        if (!rdns) {
            throw new Error('rdns not found in metadata');
        }
        return rdns;
    }
    setupEventListeners() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            yield this.metaMaskSDK.sdkInitPromise;
            const metaMaskProvider = this.getProvider();
            if (!metaMaskProvider) {
                return;
            }
            const { handleAccountChange, handleChainChange, handleDisconnect } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$eventListenerHandlers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eventListenerHandlers"])(this);
            const handleAccountsChangedFromMetaMask = (accounts)=>{
                /**
                 * MetaMask emits an account changed event when the wallet is disconnected
                 * so we ignore the accountsChanged event if the disconnect event was recent
                 */ if (eventTimeline.isEventRecent('disconnect', 1000)) {
                    return;
                }
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                handleAccountChange(accounts);
            };
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            metaMaskProvider.on('accountsChanged', handleAccountsChangedFromMetaMask);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            metaMaskProvider.on('chainChanged', handleChainChange);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            metaMaskProvider.on('disconnect', handleDisconnect);
            this.teardownEventListeners = ()=>{
                metaMaskProvider.off('accountsChanged', handleAccountsChangedFromMetaMask);
                metaMaskProvider.off('chainChanged', handleChainChange);
                metaMaskProvider.off('disconnect', handleDisconnect);
            };
        });
    }
    /**
     * This override is necessary to wait for the MetaMask SDK to initialize
     * before calling the super method. Otherwise, the super method may fail
     * to fetch the provider
     */ getNetwork() {
        const _super = Object.create(null, {
            getNetwork: {
                get: ()=>super.getNetwork
            }
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].logVerboseTroubleshootingMessage('[MetaMaskConnector] getNetwork - waiting for sdk init');
            yield this.metaMaskSDK.sdkInitPromise;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].logVerboseTroubleshootingMessage('[MetaMaskConnector] getNetwork - sdk init promise resolved');
            const net = yield _super.getNetwork.call(this);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].logVerboseTroubleshootingMessage('[MetaMaskConnector] getNetwork - got network', {
                network: net
            });
            return net;
        });
    }
    // Utils
    getProvider() {
        var _a, _b;
        try {
            return (_b = (_a = this.metaMaskSDK.getProvider()) !== null && _a !== void 0 ? _a : this.metaMaskSDK.getMobileProvider()) !== null && _b !== void 0 ? _b : undefined;
        } catch (_c) {
            // If getMobileProvider throws (mobile provider not ready), return undefined
            return undefined;
        }
    }
    evmNetworkByChainId(chainId) {
        return this.evmNetworks.find((network)=>network.chainId === chainId);
    }
    getWalletClientForAddress(address, chainId) {
        var _a, _b;
        const provider = this.getProvider();
        if (!provider) {
            return undefined;
        }
        const effectiveChainId = (_b = (_a = this.toInt(chainId)) !== null && _a !== void 0 ? _a : this.getCurrentChainId()) !== null && _b !== void 0 ? _b : '1';
        const network = this.evmNetworkByChainId(effectiveChainId);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createWalletClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWalletClient"])({
            account: address,
            chain: network ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$utils$2f$viem$2f$getOrMapViemChain$2f$getOrMapViemChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOrMapViemChain"])(network) : this.getActiveChain(),
            transport: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$custom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["custom"])(provider, this.providersConfig.httpTransportConfig)
        });
    }
    toInt(chainId) {
        if (!chainId) return undefined;
        try {
            return parseInt(chainId);
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].debug(err);
            return undefined;
        }
    }
    getCurrentChainId() {
        const provider = this.getProvider();
        if (!provider) {
            return undefined;
        }
        const chainId = provider.getChainId();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(chainId)) {
            return parseInt(chainId);
        }
        return chainId;
    }
    /**
     * Checks if the current environment is the MetaMask in-app browser
     * by checking if the MetaMask provider is installed in the window object
     * on a mobile device
     */ getIsInAppBrowser() {
        var _a, _b;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$isMobile$2f$isMobile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isMobile"])()) return false;
        const provider = ((_a = this.ethProviderHelper) === null || _a === void 0 ? void 0 : _a.eip6963ProviderLookup(this.rdns)) || ((_b = this.ethProviderHelper) === null || _b === void 0 ? void 0 : _b.getInjectedProvider());
        return Boolean(provider);
    }
    shouldDeepLinkToMetaMaskInAppBrowser() {
        // Not in an in-app browser
        if (this.isInAppBrowser) {
            return false;
        }
        // Not a mobile device
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$isMobile$2f$isMobile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isMobile"])()) {
            return false;
        }
        // SDK is configured to use the in-app browser
        if (this.mobileExperience !== 'in-app-browser') {
            return false;
        }
        // Wallet does not have an in-app browser link
        if (!this.metadata.inAppBrowserUrl) {
            return false;
        }
        // We don't want to deep link to the in-app browser when already in the in-app browser
        if (navigator.userAgent.match(/metamaskmobile/i)) {
            return false;
        }
        return true;
    }
    getConnectionUri() {
        return _metaMaskDisplayUri !== null && _metaMaskDisplayUri !== void 0 ? _metaMaskDisplayUri : undefined;
    }
    retryDeeplinkConnection() {
        if (_metaMaskConnectUri) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$PlatformService$2f$PlatformService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlatformService"].openURL(_metaMaskConnectUri);
        }
    }
}
// Utils
const getReadonlyRPCMap = (evmNetworkRpcMap)=>Object.keys(evmNetworkRpcMap).reduce((acc, chainId)=>Object.assign(Object.assign({}, acc), {
            [(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(parseInt(chainId))]: evmNetworkRpcMap[chainId]
        }), {});
/**
 * Waits for the focus page event and await for an extra second
 * This is necessary to ensure the verify call will succeed
 */ const waitForFocusWindowEvent = ()=>new Promise((resolve)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$PlatformEventsService$2f$PlatformEventsService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlatformEventsService"].once('appFocused', resolve);
    }).then(()=>new Promise((resolve)=>setTimeout(resolve, 1000)));
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/EthereumWalletConnectors.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "EthereumWalletConnectors": (()=>EthereumWalletConnectors)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$connectors$2b$base$2d$account$2d$evm$40$4$2e$4$2e$2_$40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dyn_380c68884d59846e1568a00098b43934$2f$node_modules$2f40$dynamic$2d$labs$2d$connectors$2f$base$2d$account$2d$evm$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-connectors+base-account-evm@4.4.2_@dynamic-labs+ethereum-core@4.73.2_@dyn_380c68884d59846e1568a00098b43934/node_modules/@dynamic-labs-connectors/base-account-evm/src/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$2d$evm$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_$5f$7eafa5f9d283d66ecb9893d3610f4bd6$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2d$evm$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet-evm@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0__7eafa5f9d283d66ecb9893d3610f4bd6/node_modules/@dynamic-labs/embedded-wallet-evm/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$2d$evm$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_$5f$7eafa5f9d283d66ecb9893d3610f4bd6$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2d$evm$2f$src$2f$TurnkeyEVMWalletConnectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet-evm@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0__7eafa5f9d283d66ecb9893d3610f4bd6/node_modules/@dynamic-labs/embedded-wallet-evm/src/TurnkeyEVMWalletConnectors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$waas$2d$evm$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_45e167ac1b9f3cdc5dd0dfc5c6842089$2f$node_modules$2f40$dynamic$2d$labs$2f$waas$2d$evm$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+waas-evm@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_45e167ac1b9f3cdc5dd0dfc5c6842089/node_modules/@dynamic-labs/waas-evm/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$waas$2d$evm$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_45e167ac1b9f3cdc5dd0dfc5c6842089$2f$node_modules$2f40$dynamic$2d$labs$2f$waas$2d$evm$2f$src$2f$DynamicWaasEVMConnectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+waas-evm@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_45e167ac1b9f3cdc5dd0dfc5c6842089/node_modules/@dynamic-labs/waas-evm/src/DynamicWaasEVMConnectors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/_virtual/_tslib.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-connector-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3._7679fe86d42f6979f41d87c8de2f235e/node_modules/@dynamic-labs/wallet-connector-core/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/utils/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$walletConnect$2f$WalletConnectProvider$2f$WalletConnectProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/walletConnect/WalletConnectProvider/WalletConnectProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$walletConnect$2f$utils$2f$fetchWalletConnectWallets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/walletConnect/utils/fetchWalletConnectWallets.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$walletConnect$2f$utils$2f$getWalletConnectConnector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/walletConnect/utils/getWalletConnectConnector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$injected$2f$FallbackEvmConnector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/injected/FallbackEvmConnector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$injected$2f$fetchInjectedWalletConnectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/injected/fetchInjectedWalletConnectors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$coinbase$2f$coinbase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/coinbase/coinbase.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$metaMask$2f$MetaMaskConnector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/metaMask/MetaMaskConnector.js [app-ssr] (ecmascript)");
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
const EthereumWalletConnectors = (props)=>{
    const { useMetamaskSdk } = props;
    const walletsWithCustomConnectors = [
        'phantomevm',
        'coinbase',
        'exodusevm',
        'abstract',
        'edenonline',
        'intersend'
    ];
    if (useMetamaskSdk) {
        walletsWithCustomConnectors.push('metamask');
    }
    return [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$injected$2f$fetchInjectedWalletConnectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["injectedWalletOverrides"],
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$injected$2f$fetchInjectedWalletConnectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchInjectedWalletConnector"])(Object.assign(Object.assign({}, props), {
            walletsWithCustomConnectors
        })),
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$walletConnect$2f$utils$2f$fetchWalletConnectWallets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchWalletConnectWallets"])(props),
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$2d$evm$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_$5f$7eafa5f9d283d66ecb9893d3610f4bd6$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2d$evm$2f$src$2f$TurnkeyEVMWalletConnectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TurnkeyEVMWalletConnectors"])(props),
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$waas$2d$evm$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_45e167ac1b9f3cdc5dd0dfc5c6842089$2f$node_modules$2f40$dynamic$2d$labs$2f$waas$2d$evm$2f$src$2f$DynamicWaasEVMConnectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicWaasEVMConnectors"])(),
        ...useMetamaskSdk ? [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$metaMask$2f$MetaMaskConnector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MetaMaskConnector"]
        ] : [],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$coinbase$2f$coinbase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Coinbase"],
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$connectors$2b$base$2d$account$2d$evm$40$4$2e$4$2e$2_$40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dyn_380c68884d59846e1568a00098b43934$2f$node_modules$2f40$dynamic$2d$labs$2d$connectors$2f$base$2d$account$2d$evm$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createBaseAccountConnector"])(props.baseAccountSdkOpts)(props),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$injected$2f$FallbackEvmConnector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FallbackEvmConnector"],
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$walletConnect$2f$utils$2f$getWalletConnectConnector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWalletConnectConnector"])()
    ];
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/EthereumWalletConnectorsWithConfig.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "EthereumWalletConnectorsWithConfig": (()=>EthereumWalletConnectorsWithConfig)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$EthereumWalletConnectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/EthereumWalletConnectors.js [app-ssr] (ecmascript)");
'use client';
;
const EthereumWalletConnectorsWithConfig = (providersConfig)=>{
    const classWithConfig = (className)=>class extends className {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            constructor(...args){
                const [opts] = args;
                // TODO: remove this once we remove the deprecated `publicClientHttpTransportConfig`
                const updatedProviderConfig = {
                    httpTransportConfig: Object.assign(Object.assign({}, providersConfig.httpTransportConfig), providersConfig.publicClientHttpTransportConfig)
                };
                super(Object.assign(Object.assign({}, opts), {
                    providersConfig: updatedProviderConfig
                }));
            }
        };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (props)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$EthereumWalletConnectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EthereumWalletConnectors"])(Object.assign(Object.assign({}, props), {
            baseAccountSdkOpts: providersConfig.baseAccountSdkOpts
        })).map(classWithConfig);
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/walletConnect/EvmWalletConnectConnectors.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "EvmWalletConnectConnectors": (()=>EvmWalletConnectConnectors)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$walletConnect$2f$utils$2f$fetchWalletConnectWallets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/walletConnect/utils/fetchWalletConnectWallets.js [app-ssr] (ecmascript)");
'use client';
;
/**
 * Returns ALL WalletConnect connectors from the wallet book.
 *
 * WARNING: You should not use this if you are also using fetchInjectedWalletConnector.
 * fetchInjectedWalletConnector wallets will turn into WalletConnectConnector if the wallet is
 * not installed and supports WalletConnect, which will result in two instances of the same wallet.
 *
 * See fetchWalletConnectWallets for more details and use it instead.
 */ const EvmWalletConnectConnectors = (// eslint-disable-next-line @typescript-eslint/no-explicit-any
props)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$walletConnect$2f$utils$2f$fetchWalletConnectWallets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchWalletConnectWallets"])({
        applyFilterFromWalletConnect: false,
        evmNetworks: props.evmNetworks,
        walletBook: props.walletBook
    });
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$polyfills$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/polyfills.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$assert$2d$package$2d$version$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$assert$2d$package$2d$version$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+assert-package-version@4.73.2/node_modules/@dynamic-labs/assert-package-version/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$assert$2d$package$2d$version$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$assert$2d$package$2d$version$2f$src$2f$lib$2f$assertPackageVersion$2f$assertPackageVersion$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+assert-package-version@4.73.2/node_modules/@dynamic-labs/assert-package-version/src/lib/assertPackageVersion/assertPackageVersion.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/package.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$injected$2f$PhantomEvm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/injected/PhantomEvm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$injected$2f$ExodusEvm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/injected/ExodusEvm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$injected$2f$FallbackEvmConnector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/injected/FallbackEvmConnector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$injected$2f$fetchInjectedWalletConnectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/injected/fetchInjectedWalletConnectors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$injected$2f$InjectedWalletBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/injected/InjectedWalletBase.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$ethProviderHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/ethProviderHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$utils$2f$createInjectedConnector$2f$createInjectedConnector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/utils/createInjectedConnector/createInjectedConnector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$EthereumWalletConnectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/EthereumWalletConnectors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$EthereumWalletConnectorsWithConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/EthereumWalletConnectorsWithConfig.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/_virtual/_tslib.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-connector-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3._7679fe86d42f6979f41d87c8de2f235e/node_modules/@dynamic-labs/wallet-connector-core/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$walletConnect$2f$WalletConnectProvider$2f$WalletConnectProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/walletConnect/WalletConnectProvider/WalletConnectProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$walletConnect$2f$EvmWalletConnectConnectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/walletConnect/EvmWalletConnectConnectors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$metaMask$2f$MetaMaskConnector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/metaMask/MetaMaskConnector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$utils$2f$getConnectorConstructorForEip6963Wallet$2f$getConnectorConstructorForEip6963Wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/utils/getConnectorConstructorForEip6963Wallet/getConnectorConstructorForEip6963Wallet.js [app-ssr] (ecmascript)");
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
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$assert$2d$package$2d$version$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$assert$2d$package$2d$version$2f$src$2f$lib$2f$assertPackageVersion$2f$assertPackageVersion$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertPackageVersion"])('@dynamic-labs/ethereum', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"]);
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/index.js [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$polyfills$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/polyfills.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$assert$2d$package$2d$version$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$assert$2d$package$2d$version$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+assert-package-version@4.73.2/node_modules/@dynamic-labs/assert-package-version/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/package.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffer_955581d15eef8560b796d6cc5ed89b4e$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffer_955581d15eef8560b796d6cc5ed89b4e/node_modules/@dynamic-labs/ethereum-core/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$injected$2f$PhantomEvm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/injected/PhantomEvm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$injected$2f$ExodusEvm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/injected/ExodusEvm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$injected$2f$FallbackEvmConnector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/injected/FallbackEvmConnector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$injected$2f$fetchInjectedWalletConnectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/injected/fetchInjectedWalletConnectors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$injected$2f$InjectedWalletBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/injected/InjectedWalletBase.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$ethProviderHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/ethProviderHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$utils$2f$createInjectedConnector$2f$createInjectedConnector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/utils/createInjectedConnector/createInjectedConnector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$EthereumWalletConnectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/EthereumWalletConnectors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$EthereumWalletConnectorsWithConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/EthereumWalletConnectorsWithConfig.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/_virtual/_tslib.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-connector-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3._7679fe86d42f6979f41d87c8de2f235e/node_modules/@dynamic-labs/wallet-connector-core/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$walletConnect$2f$WalletConnectProvider$2f$WalletConnectProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/walletConnect/WalletConnectProvider/WalletConnectProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$walletConnect$2f$EvmWalletConnectConnectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/walletConnect/EvmWalletConnectConnectors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$metaMask$2f$MetaMaskConnector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/metaMask/MetaMaskConnector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$utils$2f$getConnectorConstructorForEip6963Wallet$2f$getConnectorConstructorForEip6963Wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/utils/getConnectorConstructorForEip6963Wallet/getConnectorConstructorForEip6963Wallet.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/index.js [app-ssr] (ecmascript) <locals>");
}}),

};

//# sourceMappingURL=db8af_%40dynamic-labs_ethereum_78128685._.js.map