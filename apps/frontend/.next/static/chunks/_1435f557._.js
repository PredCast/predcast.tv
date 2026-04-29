(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/packages/blockchain/src/chains/index.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "baseSepolia": (()=>baseSepolia)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$defineChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/utils/chain/defineChain.js [app-client] (ecmascript)");
;
const baseSepolia = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$defineChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineChain"])({
    id: 84532,
    name: 'Base Sepolia',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH'
    },
    rpcUrls: {
        default: {
            http: [
                'https://sepolia.base.org'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'BaseScan',
            url: 'https://sepolia.basescan.org'
        }
    },
    testnet: true
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/frontend/components/providers/WagmiProviderWrapper.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// components/providers/WagmiProviderWrapper.tsx
__turbopack_context__.s({
    "WagmiProviderWrapper": (()=>WagmiProviderWrapper)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/wagmi@2.19.5_@tanstack+query-core@5.96.1_@tanstack+react-query@5.96.1_react@19.2.4__@ty_9cc1b734e49407b526111a54d0626853/node_modules/wagmi/dist/esm/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+query-core@5.96.1/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+react-query@5.96.1_react@19.2.4/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$22$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$types$2b$react$40$19$2e$2$2e$14_react$40$19$2e$2$2e$4_typesc_b053bcd76cd9f9e8a8377b0b2c52f730$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$createConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.96.1_@types+react@19.2.14_react@19.2.4_typesc_b053bcd76cd9f9e8a8377b0b2c52f730/node_modules/@wagmi/core/dist/esm/createConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/clients/transports/http.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$chiliz$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/chains/definitions/chiliz.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$spicy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/chains/definitions/spicy.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$blockchain$2f$src$2f$chains$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/blockchain/src/chains/index.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const queryClient = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClient"]();
// Determine network from environment variable
const NETWORK = (("TURBOPACK compile-time value", "testnet") || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NETWORK || 'testnet').toLowerCase();
const isTestnet = NETWORK !== 'mainnet';
// Use testnet (spicy) or mainnet (chiliz) based on environment
// Spécifier explicitement le RPC URL pour Spicy Testnet
const SPICY_RPC_URL = 'https://spicy-rpc.chiliz.com';
const CHILIZ_RPC_URL = 'https://rpc.ankr.com/chiliz';
const BASE_SEPOLIA_RPC_URL = 'https://sepolia.base.org';
const config = isTestnet ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$22$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$types$2b$react$40$19$2e$2$2e$14_react$40$19$2e$2$2e$4_typesc_b053bcd76cd9f9e8a8377b0b2c52f730$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$createConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createConfig"])({
    chains: [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$spicy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spicy"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$blockchain$2f$src$2f$chains$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseSepolia"]
    ],
    multiInjectedProviderDiscovery: false,
    transports: {
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$spicy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spicy"].id]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["http"])(SPICY_RPC_URL),
        [__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$blockchain$2f$src$2f$chains$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseSepolia"].id]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["http"])(BASE_SEPOLIA_RPC_URL)
    }
}) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$22$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$types$2b$react$40$19$2e$2$2e$14_react$40$19$2e$2$2e$4_typesc_b053bcd76cd9f9e8a8377b0b2c52f730$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$createConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createConfig"])({
    chains: [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$chiliz$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chiliz"]
    ],
    multiInjectedProviderDiscovery: false,
    transports: {
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$chiliz$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chiliz"].id]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["http"])(CHILIZ_RPC_URL)
    }
});
function WagmiProviderWrapper({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WagmiProvider"], {
        config: config,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
            client: queryClient,
            children: children
        }, void 0, false, {
            fileName: "[project]/apps/frontend/components/providers/WagmiProviderWrapper.tsx",
            lineNumber: 44,
            columnNumber: 11
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/frontend/components/providers/WagmiProviderWrapper.tsx",
        lineNumber: 43,
        columnNumber: 9
    }, this);
}
_c = WagmiProviderWrapper;
var _c;
__turbopack_context__.k.register(_c, "WagmiProviderWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/frontend/components/providers/DynamicProviderWrapper.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>DynamicSolanaWalletProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$DynamicContext$2f$DynamicContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/DynamicContext/DynamicContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$walletFilters$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/walletFilters/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$EthereumWalletConnectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+ethereum@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferutil@_84d6da3251c30e85078ff472fd4ca716/node_modules/@dynamic-labs/ethereum/src/EthereumWalletConnectors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wagmi$2d$connector$40$4$2e$73$2e$2_089207679bdde649e04cdd4da3a3ef1d$2f$node_modules$2f40$dynamic$2d$labs$2f$wagmi$2d$connector$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wagmi-connector@4.73.2_089207679bdde649e04cdd4da3a3ef1d/node_modules/@dynamic-labs/wagmi-connector/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wagmi$2d$connector$40$4$2e$73$2e$2_089207679bdde649e04cdd4da3a3ef1d$2f$node_modules$2f40$dynamic$2d$labs$2f$wagmi$2d$connector$2f$src$2f$lib$2f$DynamicWagmiConnector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wagmi-connector@4.73.2_089207679bdde649e04cdd4da3a3ef1d/node_modules/@dynamic-labs/wagmi-connector/src/lib/DynamicWagmiConnector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$providers$2f$WagmiProviderWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/components/providers/WagmiProviderWrapper.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function DynamicSolanaWalletProvider({ children }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // Configuration conditionnelle pour le développement
    const isDevelopment = ("TURBOPACK compile-time value", "development") === 'development' || ("TURBOPACK compile-time value", "") === "true";
    const disableOnramps = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_DISABLE_ONRAMPS === "true" || isDevelopment;
    // Récupérer l'environment ID avec une valeur par défaut pour éviter undefined
    const environmentId = ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : ("TURBOPACK compile-time value", "a4aa92a8-677b-4450-855f-0a3ce60c7f0f") || "";
    // Vérifier que l'environment ID est défini
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    const dynamicSettings = {
        environmentId: environmentId,
        walletConnectors: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$ethereum$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferutil$40$_84d6da3251c30e85078ff472fd4ca716$2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$EthereumWalletConnectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthereumWalletConnectors"]
        ],
        walletsFilter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$walletFilters$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SortWallets"])([
            'socios',
            'metamask',
            'coinbase',
            'walletconnect',
            'phantom'
        ]),
        appName: 'ChilizTV',
        appLogoUrl: '/Logo_FINAL.svg',
        initialAuthenticationMode: 'connect-and-sign',
        overrides: {
            evmNetworks: [
                {
                    chainId: 88882,
                    networkId: 88882,
                    chainName: 'Chiliz Spicy Testnet',
                    name: 'Chiliz Spicy Testnet',
                    rpcUrls: [
                        'https://spicy-rpc.chiliz.com'
                    ],
                    blockExplorerUrls: [
                        'https://testnet.chiliscan.com'
                    ],
                    nativeCurrency: {
                        name: 'CHZ',
                        symbol: 'CHZ',
                        decimals: 18
                    },
                    iconUrls: [
                        '/Logo_FINAL.svg'
                    ],
                    isTestnet: true
                },
                {
                    chainId: 84532,
                    networkId: 84532,
                    chainName: 'Base Sepolia',
                    name: 'Base Sepolia',
                    rpcUrls: [
                        'https://sepolia.base.org'
                    ],
                    blockExplorerUrls: [
                        'https://sepolia.basescan.org'
                    ],
                    nativeCurrency: {
                        name: 'ETH',
                        symbol: 'ETH',
                        decimals: 18
                    },
                    iconUrls: [],
                    isTestnet: true
                }
            ]
        },
        settings: {
            appEnvironment: 'production'
        },
        // Désactiver les fonctionnalités problématiques en développement
        ...disableOnramps && {
            disableOnramps: true
        },
        ...isDevelopment && {
            disableAnalytics: true,
            debugMode: true
        },
        events: {
            onLogout: ()=>{
                router.push("/");
            },
            onAuthSuccess: ()=>{
                router.push("/verifying");
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$providers$2f$WagmiProviderWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WagmiProviderWrapper"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$DynamicContext$2f$DynamicContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DynamicContextProvider"], {
            settings: dynamicSettings,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wagmi$2d$connector$40$4$2e$73$2e$2_089207679bdde649e04cdd4da3a3ef1d$2f$node_modules$2f40$dynamic$2d$labs$2f$wagmi$2d$connector$2f$src$2f$lib$2f$DynamicWagmiConnector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DynamicWagmiConnector"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/apps/frontend/components/providers/DynamicProviderWrapper.tsx",
                lineNumber: 99,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/frontend/components/providers/DynamicProviderWrapper.tsx",
            lineNumber: 96,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/frontend/components/providers/DynamicProviderWrapper.tsx",
        lineNumber: 95,
        columnNumber: 9
    }, this);
}
_s(DynamicSolanaWalletProvider, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = DynamicSolanaWalletProvider;
var _c;
__turbopack_context__.k.register(_c, "DynamicSolanaWalletProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/frontend/lib/api/auth.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "authenticateWallet": (()=>authenticateWallet),
    "clearAuthToken": (()=>clearAuthToken),
    "getAuthToken": (()=>getAuthToken),
    "setAuthToken": (()=>setAuthToken)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$axios$40$1$2e$14$2e$0$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/axios@1.14.0/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const AUTH_TOKEN_KEY = 'chiliztv_auth_token';
async function authenticateWallet(walletAddress) {
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$axios$40$1$2e$14$2e$0$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`${("TURBOPACK compile-time value", "http://localhost:3001")}/auth/token`, {
        walletAddress
    }, {
        withCredentials: true
    });
    const token = response.data.token;
    await setAuthToken(token);
    return token;
}
async function getAuthToken() {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    return localStorage.getItem(AUTH_TOKEN_KEY);
}
async function setAuthToken(token) {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    localStorage.setItem(AUTH_TOKEN_KEY, token);
}
async function clearAuthToken() {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    localStorage.removeItem(AUTH_TOKEN_KEY);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/frontend/providers/auth-provider.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "AuthProvider": (()=>AuthProvider),
    "useAuth": (()=>useAuth)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$DynamicContext$2f$useDynamicContext$2f$useDynamicContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/DynamicContext/useDynamicContext/useDynamicContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/auth.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AuthProvider({ children }) {
    _s();
    const { primaryWallet } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$DynamicContext$2f$useDynamicContext$2f$useDynamicContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDynamicContext"])();
    const [authState, setAuthState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        isAuthenticated: false,
        isLoading: true
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            const authenticate = {
                "AuthProvider.useEffect.authenticate": async ()=>{
                    if (!primaryWallet?.address) {
                        setAuthState({
                            isAuthenticated: false,
                            isLoading: false
                        });
                        return;
                    }
                    try {
                        const existingToken = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuthToken"])();
                        if (existingToken) {
                            setAuthState({
                                isAuthenticated: true,
                                isLoading: false
                            });
                            return;
                        }
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authenticateWallet"])(primaryWallet.address);
                        setAuthState({
                            isAuthenticated: true,
                            isLoading: false
                        });
                    } catch (error) {
                        setAuthState({
                            isAuthenticated: false,
                            isLoading: false,
                            error: error instanceof Error ? error : new Error('Authentication failed')
                        });
                    }
                }
            }["AuthProvider.useEffect.authenticate"];
            authenticate();
        }
    }["AuthProvider.useEffect"], [
        primaryWallet?.address
    ]);
    const login = async ()=>{
        if (!primaryWallet?.address) {
            throw new Error('No wallet connected');
        }
        try {
            setAuthState((prev)=>({
                    ...prev,
                    isLoading: true
                }));
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authenticateWallet"])(primaryWallet.address);
            setAuthState({
                isAuthenticated: true,
                isLoading: false
            });
        } catch (error) {
            setAuthState({
                isAuthenticated: false,
                isLoading: false,
                error: error instanceof Error ? error : new Error('Login failed')
            });
            throw error;
        }
    };
    const logout = async ()=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearAuthToken"])();
            setAuthState({
                isAuthenticated: false,
                isLoading: false
            });
        } catch (error) {
            console.error('Logout error:', error);
        }
    };
    const value = {
        ...authState,
        login,
        logout
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/frontend/providers/auth-provider.tsx",
        lineNumber: 93,
        columnNumber: 10
    }, this);
}
_s(AuthProvider, "bbkxT6gVKA8iaJhcqoKjrrHQVB0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$DynamicContext$2f$useDynamicContext$2f$useDynamicContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDynamicContext"]
    ];
});
_c = AuthProvider;
function useAuth() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
}
_s1(useAuth, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/frontend/lib/query/client.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "queryClient": (()=>queryClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+query-core@5.96.1/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-client] (ecmascript)");
;
const queryClient = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClient"]({
    defaultOptions: {
        queries: {
            staleTime: 5 * 60 * 1000,
            gcTime: 10 * 60 * 1000,
            retry: (failureCount, error)=>{
                const axiosError = error;
                const status = axiosError?.response?.status;
                if (status && status >= 400 && status < 500) {
                    return false;
                }
                return failureCount < 3;
            },
            retryDelay: (attemptIndex)=>Math.min(1000 * Math.pow(2, attemptIndex), 30000)
        },
        mutations: {
            retry: false
        }
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/frontend/providers/query-provider.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "QueryProvider": (()=>QueryProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+react-query@5.96.1_react@19.2.4/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/query/client.ts [app-client] (ecmascript)");
'use client';
;
;
;
function QueryProvider({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
        client: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryClient"],
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/frontend/providers/query-provider.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = QueryProvider;
var _c;
__turbopack_context__.k.register(_c, "QueryProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_1435f557._.js.map