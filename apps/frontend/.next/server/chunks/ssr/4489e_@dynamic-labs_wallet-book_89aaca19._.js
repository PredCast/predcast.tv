module.exports = {

"[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/package.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/context/WalletBookContext.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "WalletBookContext": (()=>WalletBookContext),
    "useWalletBookContext": (()=>useWalletBookContext)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
const WalletBookContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const useWalletBookContext = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(WalletBookContext);
    if (context === undefined) {
        throw new Error('useWalletBookContext must be used within a WalletBookContextProvider');
    }
    return context;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/helpers/getWalletBookWallet.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getWalletBookWallet": (()=>getWalletBookWallet)
});
'use client';
const getWalletBookWallet = (walletBook, walletKey, walletFallback)=>{
    var _a, _b, _c;
    if (!walletKey) throw new Error('Wallet key is required. Please pass in a wallet key to getWalletBookWallet');
    const walletData = (_b = (_a = walletBook === null || walletBook === void 0 ? void 0 : walletBook.wallets) === null || _a === void 0 ? void 0 : _a[walletKey]) !== null && _b !== void 0 ? _b : walletFallback;
    if (!walletData) {
        throw new Error(`Wallet ${walletKey} not found in wallet book (${Object.keys((_c = walletBook === null || walletBook === void 0 ? void 0 : walletBook.wallets) !== null && _c !== void 0 ? _c : {}).length} wallets found)`);
    }
    return walletData;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/helpers/renderTemplate.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "renderTemplate": (()=>renderTemplate)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$iconic$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$iconic$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+iconic@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/iconic/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$iconic$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$iconic$2f$src$2f$helpers$2f$getIconicSpriteUrl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+iconic@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/iconic/src/helpers/getIconicSpriteUrl.js [app-ssr] (ecmascript)");
'use client';
;
const TEMPLATES = {
    androidUrl: 'https://play.google.com/store/apps/details?id={{id}}',
    chromeUrl: 'https://chrome.google.com/webstore/detail/{{id}}',
    edgeUrl: 'https://microsoftedge.microsoft.com/addons/detail/{{id}}',
    firefoxUrl: 'https://addons.mozilla.org/en-US/firefox/addon/{{id}}',
    iconicUrl: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$iconic$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$iconic$2f$src$2f$helpers$2f$getIconicSpriteUrl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getIconicSpriteUrl"])()}#{{id}}`,
    iosUrl: 'https://apps.apple.com/app/apple-store/{{id}}',
    walletConnectUrl: 'https://registry.walletconnect.org/v2/logo/sm/{{id}}'
};
const renderTemplate = (templateName, data)=>{
    if (!data) return undefined;
    return TEMPLATES[templateName].replace('{{id}}', data);
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/helpers/getBrandIconUrl.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getBrandIconUrl": (()=>getBrandIconUrl)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$renderTemplate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/helpers/renderTemplate.js [app-ssr] (ecmascript)");
'use client';
;
const getBrandIconUrl = (brand)=>{
    if (brand.spriteId) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$renderTemplate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["renderTemplate"])('iconicUrl', brand.spriteId);
    }
    return '';
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/helpers/logger.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
const logger = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$logger$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$logger$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Logger"]('WalletBook');
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/helpers/getWalletIconUrl.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getDefaultWalletIconUrl": (()=>getDefaultWalletIconUrl),
    "getWalletIconUrl": (()=>getWalletIconUrl)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$getWalletBookWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/helpers/getWalletBookWallet.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$getBrandIconUrl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/helpers/getBrandIconUrl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/helpers/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$renderTemplate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/helpers/renderTemplate.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const getWalletIconUrl = (walletBook, walletKey)=>{
    try {
        const walletData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$getWalletBookWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWalletBookWallet"])(walletBook, walletKey);
        if (walletData === null || walletData === void 0 ? void 0 : walletData.brand) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$getBrandIconUrl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBrandIconUrl"])(walletData.brand);
        }
    } catch (err) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].error(err);
    }
    return '';
};
const getDefaultWalletIconUrl = ()=>{
    try {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$renderTemplate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["renderTemplate"])('iconicUrl', 'defaultwallet');
    } catch (err) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].error(err);
    }
    return '';
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/helpers/findWalletBookWallet.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "findWalletBookWallet": (()=>findWalletBookWallet)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$getWalletBookWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/helpers/getWalletBookWallet.js [app-ssr] (ecmascript)");
'use client';
;
const findWalletBookWallet = (walletBook, walletKey)=>{
    try {
        const walletData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$getWalletBookWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWalletBookWallet"])(walletBook, walletKey);
        return walletData;
    } catch (err) {
        return undefined;
    }
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/helpers/getWalletGroup.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getWalletGroup": (()=>getWalletGroup)
});
'use client';
const getWalletGroup = (walletBook, key)=>{
    const group = walletBook.groups[key];
    if (!group) throw new Error(`Group ${key} not found in wallet book`);
    return group;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/helpers/findWalletGroup.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "findWalletGroup": (()=>findWalletGroup)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$getWalletGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/helpers/getWalletGroup.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/helpers/logger.js [app-ssr] (ecmascript)");
'use client';
;
;
const findWalletGroup = (walletBook, walletGroup)=>{
    try {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$getWalletGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWalletGroup"])(walletBook, walletGroup);
    } catch (err) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].error(err);
        return undefined;
    }
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/helpers/getWalletBookCdnUrl.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getWalletBookCdnUrl": (()=>getWalletBookCdnUrl)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$env$2f$getEnvVarWithFallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/env/getEnvVarWithFallback.js [app-ssr] (ecmascript)");
'use client';
;
const DEFAULT_WALLET_BOOK_CDN_URL = 'https://dynamic-static-assets.com/wallet-book/v1/stable/wallet-book.json';
const getWalletBookCdnUrl = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$env$2f$getEnvVarWithFallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEnvVarWithFallback"])([
        'WALLET_BOOK_CDN_URL',
        'NEXT_PUBLIC_WALLET_BOOK_CDN_URL',
        'REACT_APP_WALLET_BOOK_CDN_URL'
    ], DEFAULT_WALLET_BOOK_CDN_URL);
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/helpers/findWalletGroupOverride.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "findWalletGroupOverride": (()=>findWalletGroupOverride)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$findWalletGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/helpers/findWalletGroup.js [app-ssr] (ecmascript)");
'use client';
;
const findWalletGroupOverride = (walletBook, groupKey, walletKey)=>{
    var _a;
    const group = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$findWalletGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findWalletGroup"])(walletBook, groupKey);
    return (_a = group === null || group === void 0 ? void 0 : group.walletOverrides) === null || _a === void 0 ? void 0 : _a[walletKey];
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/helpers/isWalletBookPopulated.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isWalletBookPopulated": (()=>isWalletBookPopulated)
});
'use client';
const isWalletBookPopulated = (walletBook)=>{
    var _a;
    return Object.keys((_a = walletBook === null || walletBook === void 0 ? void 0 : walletBook.wallets) !== null && _a !== void 0 ? _a : {}).length > 0;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/helpers/findWalletBookWalletByNameAndChain.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "findWalletBookWalletByNameAndChain": (()=>findWalletBookWalletByNameAndChain)
});
'use client';
const findWalletBookWalletByNameAndChain = (walletBook, walletName, chain)=>{
    var _a;
    return Object.values((_a = walletBook === null || walletBook === void 0 ? void 0 : walletBook.wallets) !== null && _a !== void 0 ? _a : {}).find((wallet)=>{
        var _a, _b;
        return wallet.name === walletName && ((_b = (_a = wallet.injectedConfig) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.chain) === chain;
    });
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/_virtual/_tslib.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/wallet-book-fallbacks.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>walletBookFallbacks),
    "groups": (()=>groups),
    "wallets": (()=>wallets)
});
'use client';
var groups = {
    argentx: {
        brand: {
            alt: "ArgentX",
            primaryColor: "#FF875B",
            spriteId: "argentx"
        },
        key: "argentx",
        name: "ArgentX"
    },
    backpack: {
        brand: {
            alt: "Backpack",
            spriteId: "backpack"
        },
        key: "backpack",
        name: "Backpack"
    },
    bitgetwallet: {
        brand: {
            alt: "Bitget Wallet",
            spriteId: "bitget"
        },
        key: "bitgetwallet",
        name: "Bitget"
    },
    blocto: {
        brand: {
            alt: "Blocto",
            primaryColor: "#5E678A",
            spriteId: "blocto"
        },
        key: "blocto",
        name: "Blocto"
    },
    brave: {
        brand: {
            alt: "Brave Browser",
            primaryColor: "#4B49C6",
            spriteId: "brave"
        },
        key: "brave",
        name: "Brave"
    },
    coin98: {
        brand: {
            alt: "Coin98 Wallet",
            primaryColor: "#CDA349",
            spriteId: "fc460647-ea95-447a-99f0-1bff8fa4be00"
        },
        key: "coin98",
        name: "Coin98"
    },
    coinbase: {
        brand: {
            alt: "Coinbase Wallet",
            primaryColor: "#1648F9",
            spriteId: "coinbase"
        },
        key: "coinbase",
        name: "Coinbase"
    },
    compasswallet: {
        brand: {
            alt: "Compass",
            primaryColor: "#4B49C6",
            spriteId: "1d7dea00-96be-4ce8-ca15-d14bddbb5000"
        },
        key: "compasswallet",
        name: "Compass"
    },
    exodus: {
        brand: {
            alt: "Exodus Wallet",
            spriteId: "exodus"
        },
        key: "exodus",
        name: "Exodus"
    },
    fireblocks: {
        brand: {
            alt: "Fireblocks",
            spriteId: "fireblocks"
        },
        key: "fireblocks",
        name: "Fireblocks"
    },
    flowwallet: {
        brand: {
            alt: "Flow Wallet",
            primaryColor: "#2BE829",
            spriteId: "flowwallet"
        },
        key: "flowwallet",
        name: "Flow Wallet"
    },
    keplr: {
        brand: {
            alt: "Keplr",
            spriteId: "keplr"
        },
        key: "keplr",
        name: "Keplr"
    },
    magiceden: {
        brand: {
            alt: "Magic Eden",
            spriteId: "magiceden"
        },
        key: "magiceden",
        name: "Magic Eden"
    },
    mathwallet: {
        brand: {
            alt: "MathWallet Wallet",
            spriteId: "26a8f588-3231-4411-60ce-5bb6b805a700"
        },
        key: "mathwallet",
        name: "Math Wallet"
    },
    metamask: {
        brand: {
            alt: "MetaMask",
            primaryColor: "#E2761B",
            spriteId: "metamask"
        },
        key: "metamask",
        name: "MetaMask"
    },
    nightly: {
        brand: {
            alt: "Nightly Wallet",
            spriteId: "nightly"
        },
        key: "nightly",
        name: "Nightly"
    },
    okxwallet: {
        brand: {
            alt: "OKX Wallet",
            spriteId: "okx"
        },
        key: "okxwallet",
        name: "OKX Wallet"
    },
    onekey: {
        brand: {
            alt: "OneKey Wallet",
            spriteId: "onekey"
        },
        key: "onekey",
        name: "OneKey"
    },
    phantom: {
        brand: {
            alt: "Phantom",
            primaryColor: "#4B49C6",
            spriteId: "phantom"
        },
        key: "phantom",
        name: "Phantom"
    },
    tronlinkwallet: {
        brand: {
            alt: "TronLink Wallet",
            primaryColor: "#1677FF",
            spriteId: "tronlink"
        },
        key: "tronlink",
        name: "TronLink"
    },
    trust: {
        brand: {
            alt: "Trust Wallet",
            spriteId: "trust"
        },
        key: "trust",
        name: "Trust"
    },
    walletconnect: {
        brand: {
            alt: "WalletConnect",
            primaryColor: "#3182CE",
            spriteId: "walletconnect"
        },
        key: "walletconnect",
        name: "WalletConnect"
    },
    xverse: {
        brand: {
            alt: "Xverse Wallet",
            spriteId: "xverse"
        },
        key: "xverse",
        name: "Xverse"
    }
};
var wallets = {
    metamask: {
        brand: {
            alt: "MetaMask Wallet",
            primaryColor: "#E8831D",
            spriteId: "metamask"
        },
        chainGroup: "metamask",
        chains: [
            "eip155:1",
            "eip155:10",
            "eip155:137",
            "eip155:42161",
            "eip155:42170",
            "eip155:7777777",
            "eip155:80084",
            "eip155:80085",
            "eip155:8453"
        ],
        desktop: {
            chromeId: "nkbihfbeogaeaoehlefnkodbefgpgknn",
            edgeId: "ejbalbakoplchlghecdalmeeeajnimhm",
            firefoxId: "ether-metamask"
        },
        eip6963Config: {
            rdns: "io.metamask"
        },
        filterFromWalletConnect: true,
        group: "metamask",
        injectedConfig: [
            {
                chain: "evm",
                extensionLocators: [
                    {
                        flag: "isMetaMask",
                        value: true
                    },
                    {
                        flag: "isDawn",
                        value: false
                    },
                    {
                        flag: "isBraveWallet",
                        value: false
                    },
                    {
                        flag: "isTrustWallet",
                        value: false
                    },
                    {
                        flag: "isExodus",
                        value: false
                    },
                    {
                        flag: "isZerion",
                        value: false
                    },
                    {
                        flag: "isSuperb",
                        value: false
                    },
                    {
                        flag: "isRabby",
                        value: false
                    },
                    {
                        flag: "isOKExWallet",
                        value: false
                    },
                    {
                        flag: "isOkxWallet",
                        value: false
                    },
                    {
                        flag: "isRainbow",
                        value: false
                    },
                    {
                        flag: "isAvalanche",
                        value: false
                    },
                    {
                        flag: "isMagicEden",
                        value: false
                    },
                    {
                        flag: "isZerion",
                        value: false
                    },
                    {
                        flag: "isOneKey",
                        value: false
                    },
                    {
                        flag: "isPhantom",
                        value: false
                    },
                    {
                        flag: "isCoin98",
                        value: false
                    },
                    {
                        flag: "isBinance",
                        value: false
                    }
                ]
            }
        ],
        mobile: {
            androidId: "io.metamask",
            inAppBrowser: "https://metamask.app.link/dapp",
            inAppBrowserV2: "https://metamask.app.link/dapp/{{dappURI}}",
            iosId: "id1438144202",
            native: "metamask://wc",
            universal: "https://metamask.app.link/wc"
        },
        name: "MetaMask",
        shortName: "MetaMask",
        walletConnect: {
            sdks: [
                "sign_v1",
                "sign_v2"
            ]
        }
    },
    coinbase: {
        brand: {
            alt: "Coinbase Wallet",
            primaryColor: "#1648F9",
            spriteId: "coinbase"
        },
        chainGroup: "coinbase",
        desktop: {
            chromeId: "hnfanknocfeofbddgcijnmhnfnkdnaad"
        },
        eip6963Config: {
            rdns: "com.coinbase.wallet"
        },
        group: "coinbase",
        injectedConfig: [
            {
                chain: "evm",
                extensionLocators: [
                    {
                        flag: "isCoinbaseWallet",
                        value: true
                    }
                ],
                windowLocations: [
                    "coinbaseWalletExtension"
                ]
            }
        ],
        mobile: {
            androidId: "org.toshi",
            inAppBrowserV2: "https://go.base.app/dapp?cb_url={{encodedDappURI}}",
            iosId: "id1278383455"
        },
        name: "Coinbase",
        shortName: "Coinbase Wallet"
    },
    coinbasesolana: {
        brand: {
            alt: "Coinbase Wallet",
            primaryColor: "#1648F9",
            spriteId: "coinbase"
        },
        chainGroup: "coinbase",
        desktop: {
            chromeId: "hnfanknocfeofbddgcijnmhnfnkdnaad"
        },
        group: "coinbase",
        injectedConfig: [
            {
                chain: "sol",
                extensionLocators: [],
                windowLocations: [
                    "coinbaseSolana"
                ]
            }
        ],
        mobile: {
            androidId: "org.toshi",
            inAppBrowser: "https://go.base.app/dapp?cb_url={{encodedDappURI}}",
            inAppBrowserV2: "https://go.base.app/dapp?cb_url={{encodedDappURI}}",
            iosId: "id1278383455"
        },
        mobileExperience: "in-app-browser",
        name: "Coinbase",
        shortName: "Coinbase Wallet (Solana)",
        walletLimitations: {
            browserExtension: {
                unsupportedMethods: [
                    "getConnectedAccounts"
                ]
            }
        }
    },
    phantom: {
        brand: {
            alt: "Phantom Wallet",
            primaryColor: "#4B49C6",
            spriteId: "phantom"
        },
        chainGroup: "phantom",
        desktop: {
            chromeId: "bfnaelmomeimhlpmgjnjophhpkkoljpa",
            firefoxId: "phantom-app"
        },
        group: "phantom",
        hardwareWallets: [
            "ledger"
        ],
        injectedConfig: [
            {
                chain: "sol",
                extensionLocators: [
                    {
                        flag: "isPhantom",
                        value: true
                    },
                    {
                        flag: "isBraveWallet",
                        value: false
                    },
                    {
                        flag: "isExodus",
                        value: false
                    },
                    {
                        flag: "isMagicEden",
                        value: false
                    },
                    {
                        flag: "isGlow",
                        value: false
                    },
                    {
                        flag: "isOKExWallet",
                        value: false
                    },
                    {
                        flag: "isOkxWallet",
                        value: false
                    }
                ],
                walletStandardLocators: [
                    {
                        locator: "features.phantom:.phantom",
                        name: "Phantom"
                    }
                ],
                windowLocations: [
                    "phantom.solana"
                ]
            }
        ],
        mobile: {
            androidId: "app.phantom",
            iosId: "id1598432977"
        },
        mobileExperience: "redirect",
        name: "Phantom"
    },
    phantombtc: {
        brand: {
            alt: "Phantom Wallet",
            primaryColor: "#4B49C6",
            spriteId: "phantom"
        },
        chainGroup: "phantom",
        desktop: {
            chromeId: "bfnaelmomeimhlpmgjnjophhpkkoljpa",
            firefoxId: "phantom-app"
        },
        group: "phantom",
        injectedConfig: [
            {
                chain: "btc",
                extensionLocators: [
                    {
                        flag: "isPhantom",
                        value: true
                    }
                ],
                walletStandard: {
                    features: [
                        "bitcoin:connect"
                    ],
                    name: "Phantom"
                },
                windowLocations: [
                    "phantom.bitcoin"
                ]
            }
        ],
        mobile: {
            androidId: "app.phantom",
            iosId: "id1598432977"
        },
        name: "Phantom",
        shortName: "Phantom (Bitcoin)"
    },
    phantomevm: {
        brand: {
            alt: "Phantom Wallet",
            primaryColor: "#4B49C6",
            spriteId: "phantom"
        },
        chainGroup: "phantom",
        desktop: {
            chromeId: "bfnaelmomeimhlpmgjnjophhpkkoljpa",
            firefoxId: "phantom-app"
        },
        group: "phantom",
        injectedConfig: [
            {
                chain: "evm",
                extensionLocators: [
                    {
                        flag: "isPhantom",
                        value: true
                    }
                ],
                windowLocations: [
                    "phantom.ethereum"
                ]
            }
        ],
        mobile: {
            androidId: "app.phantom",
            iosId: "id1598432977"
        },
        mobileExperience: "in-app-browser",
        name: "Phantom",
        shortName: "Phantom (EVM)"
    },
    phantomledger: {
        brand: {
            alt: "Phantom Wallet",
            primaryColor: "#4B49C6",
            spriteId: "phantom"
        },
        chainGroup: "phantom",
        desktop: {
            chromeId: "bfnaelmomeimhlpmgjnjophhpkkoljpa",
            firefoxId: "phantom-app"
        },
        group: "phantom",
        injectedConfig: [
            {
                chain: "sol",
                extensionLocators: [
                    {
                        flag: "isPhantom",
                        value: true
                    },
                    {
                        flag: "isBraveWallet",
                        value: false
                    },
                    {
                        flag: "isExodus",
                        value: false
                    },
                    {
                        flag: "isMagicEden",
                        value: false
                    },
                    {
                        flag: "isGlow",
                        value: false
                    },
                    {
                        flag: "isOKExWallet",
                        value: false
                    },
                    {
                        flag: "isOkxWallet",
                        value: false
                    }
                ],
                walletStandardLocators: [
                    {
                        locator: "features.phantom:.phantom",
                        name: "Phantom"
                    }
                ],
                windowLocations: [
                    "phantom.solana"
                ]
            }
        ],
        mobile: {
            androidId: "app.phantom",
            iosId: "id1598432977"
        },
        name: "Phantom",
        shortName: "Phantom (Ledger)"
    },
    walletconnect: {
        brand: {
            alt: "WalletConnect",
            primaryColor: "#3182CE",
            spriteId: "walletconnect"
        },
        chainGroup: "walletconnect",
        group: "walletconnect",
        mobile: {
            androidId: "enable-android",
            iosId: "id1438144202"
        },
        name: "WalletConnect"
    },
    walletconnectsol: {
        brand: {
            alt: "WalletConnect",
            primaryColor: "#3182CE",
            spriteId: "walletconnect"
        },
        chainGroup: "walletconnect",
        group: "walletconnect",
        mobile: {
            androidId: "enable-android",
            iosId: "id1438144202"
        },
        name: "WalletConnect"
    },
    argentx: {
        brand: {
            alt: "Argent X Wallet",
            primaryColor: "#FF875B",
            spriteId: "argentx"
        },
        desktop: {
            chromeId: "dlcobpjiigpikoobohmabehhmhfoodbb",
            edgeId: "ajcicjlkibolbeaaagejfhnofogocgcj",
            firefoxId: "argent-x"
        },
        name: "Ready Wallet (formerly Argent)",
        shortName: "Ready Wallet (formerly Argent)"
    },
    perawallet: {
        brand: {
            alt: "Pera Wallet",
            spriteId: "pera"
        },
        mobile: {
            androidId: "com.algorand.android",
            iosId: "id1459898525"
        },
        name: "Pera Wallet"
    },
    blocto: {
        brand: {
            alt: "Blocto Wallet",
            primaryColor: "#5E678A",
            spriteId: "blocto"
        },
        chainGroup: "blocto",
        group: "blocto",
        mobile: {
            androidId: "com.portto.blocto",
            iosId: "id1481181682"
        },
        name: "Blocto",
        shortName: "Blocto (Flow)"
    },
    solflare: {
        brand: {
            alt: "Solflare Wallet",
            primaryColor: "#FC7227",
            spriteId: "solflare"
        },
        chains: [
            "solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z",
            "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
            "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1"
        ],
        desktop: {
            chromeId: "bhhhlbepdkbapadjdnnojkbgioiodbic"
        },
        filterFromWalletConnect: true,
        hardwareWallets: [
            "ledger"
        ],
        injectedConfig: [
            {
                chain: "sol",
                extensionLocators: [
                    {
                        flag: "isSolflare",
                        value: true
                    }
                ],
                windowLocations: [
                    "solflare"
                ]
            }
        ],
        mobile: {
            androidId: "com.solflare.mobile",
            inAppBrowser: "https://solflare.com/ul/v1/browse/{{encodedDappURI}}?ref={{encodedDappURI}}",
            inAppBrowserV2: "https://solflare.com/ul/v1/browse/{{encodedDappURI}}?ref={{encodedDappURI}}",
            iosId: "id1580902717"
        },
        name: "Solflare",
        walletConnect: {
            sdks: [
                "sign_v1"
            ]
        },
        walletLimitations: {
            browserExtension: {
                unsupportedMethods: [
                    "getConnectedAccounts"
                ]
            }
        }
    },
    braavos: {
        brand: {
            alt: "Braavos Wallet",
            primaryColor: "#FABB38",
            spriteId: "braavos"
        },
        desktop: {
            chromeId: "jnlgamecbpmbajjfhmmmlhejkemejdma",
            edgeId: "hkkpjehhcnhgefhbdcgfkeegglpjchdc",
            firefoxId: "braavos-wallet"
        },
        injectedConfig: [
            {
                chain: "starknet",
                extensionLocators: [],
                windowLocations: [
                    "braavos"
                ]
            }
        ],
        mobile: {
            androidId: "app.braavos.wallet",
            inAppBrowser: "https://link.braavos.app/dapp/{{encodedDappURI}}",
            inAppBrowserV2: "https://link.braavos.app/dapp/{{encodedDappURI}}",
            iosId: "id1636013523"
        },
        name: "Braavos"
    },
    trust: {
        brand: {
            alt: "Trust Wallet",
            primaryColor: "#0500FF",
            spriteId: "7677b54f-3486-46e2-4e37-bf8747814f00"
        },
        chainGroup: "trust",
        chains: [
            "cosmos:cosmoshub-4",
            "cosmos:kava-4",
            "cosmos:thorchain-mainnet-v1",
            "eip155:1",
            "eip155:10",
            "eip155:100",
            "eip155:108",
            "eip155:1101",
            "eip155:128",
            "eip155:137",
            "eip155:2020",
            "eip155:288",
            "eip155:321",
            "eip155:324",
            "eip155:361",
            "eip155:42161",
            "eip155:42220",
            "eip155:43114",
            "eip155:4689",
            "eip155:56",
            "eip155:56288",
            "eip155:59144",
            "eip155:60",
            "eip155:80084",
            "eip155:80085",
            "eip155:820",
            "eip155:8453",
            "eip155:88",
            "eip155:9001",
            "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp"
        ],
        desktop: {
            chromeId: "egjidjbpglichdcondbcbdnbeeppgdph"
        },
        eip6963Config: {
            rdns: "com.trustwallet.app"
        },
        filterFromWalletConnect: true,
        group: "trust",
        injectedConfig: [
            {
                chain: "evm",
                extensionLocators: [
                    {
                        flag: "isTrustWallet",
                        value: true
                    }
                ],
                windowLocations: [
                    "trustWallet"
                ]
            }
        ],
        mobile: {
            androidId: "com.wallet.crypto.trustapp",
            inAppBrowserV2: "https://link.trustwallet.com/open_url?url={{encodedDappURI}}",
            iosId: "id1288339409",
            native: "trust://wc",
            universal: "https://link.trustwallet.com/wc"
        },
        name: "Trust",
        shortName: "Trust",
        walletConnect: {
            sdks: [
                "sign_v1",
                "sign_v2",
                "auth_v1"
            ]
        }
    },
    rainbow: {
        brand: {
            alt: "Rainbow Wallet",
            primaryColor: "#001e59",
            spriteId: "rainbow"
        },
        chains: [
            "eip155:1",
            "eip155:10",
            "eip155:137",
            "eip155:42161",
            "eip155:56",
            "eip155:7777777",
            "eip155:80084",
            "eip155:80085",
            "eip155:8453"
        ],
        desktop: {
            chromeId: "opfgelmcmbiajamepnmloijbpoleiama",
            edgeId: "cpojfbodiccabbabgimdeohkkpjfpbnf",
            firefoxId: "rainbow-extension"
        },
        eip6963Config: {
            rdns: "me.rainbow"
        },
        filterFromWalletConnect: true,
        injectedConfig: [
            {
                chain: "evm",
                extensionLocators: [
                    {
                        flag: "isRainbow",
                        value: true
                    }
                ],
                windowLocations: [
                    "rainbow"
                ]
            }
        ],
        mobile: {
            androidId: "me.rainbow",
            inAppBrowserV2: "rainbow://dapp?url={{encodedDappURI}}",
            iosId: "id1457119021",
            native: "rainbow://wc",
            universal: "https://rnbwapp.com/wc"
        },
        name: "Rainbow",
        walletConnect: {
            sdks: [
                "sign_v1",
                "sign_v2",
                "auth_v1"
            ]
        }
    },
    dapper: {
        brand: {
            alt: "Dapper Wallet",
            primaryColor: "#762FBE",
            spriteId: "dapper"
        },
        mobile: {
            android: "fake-to-get-dapper-to-appear",
            ios: "fake-to-get-dapper-to-appear"
        },
        name: "Dapper"
    },
    glow: {
        brand: {
            alt: "Glow Wallet",
            spriteId: "glow"
        },
        desktop: {
            chromeId: "ojbcfhjmpigfobfclfflafhblgemeidi",
            edgeId: "niihfokdlimbddhfmngnplgfcgpmlido",
            firefoxId: "glow-solana-wallet"
        },
        hardwareWallets: [
            "ledger"
        ],
        injectedConfig: [
            {
                chain: "sol",
                extensionLocators: [
                    {
                        flag: "isGlow",
                        value: true
                    }
                ],
                windowLocations: [
                    "glowSolana"
                ]
            }
        ],
        name: "Glow"
    },
    lilico: {
        brand: {
            alt: "Lilico Wallet",
            spriteId: "lilico"
        },
        desktop: {
            chromeId: "hpclkefagolihohboafpheddmmgdffjm"
        },
        filterFromWalletConnect: true,
        name: "Lilico"
    },
    flowwalletflow: {
        brand: {
            alt: "Flow Wallet",
            spriteId: "flowwallet"
        },
        chainGroup: "flowwallet",
        desktop: {
            chromeId: "hpclkefagolihohboafpheddmmgdffjm"
        },
        filterFromWalletConnect: true,
        group: "flowwallet",
        name: "Flow Wallet"
    },
    magicemailotp: {
        brand: {
            alt: "Magic Email OTP",
            spriteId: "magiclink"
        },
        name: "Magic Email OTP"
    },
    magiclink: {
        brand: {
            alt: "Magic Link",
            spriteId: "magiclink"
        },
        name: "Magic Link"
    },
    magicsocial: {
        brand: {
            alt: "Magic Social",
            spriteId: "magiclink"
        },
        name: "Magic Social"
    },
    magiceden: {
        brand: {
            alt: "Magic Eden",
            spriteId: "magiceden"
        },
        chainGroup: "magiceden",
        chains: [
            "eip155:1",
            "eip155:137",
            "eip155:80084",
            "eip155:80085",
            "eip155:8453",
            "solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z",
            "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
            "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1"
        ],
        desktop: {
            chromeId: "mkpegjkblkkefacfnmkajcjmabijhclg"
        },
        eip6963Config: {
            rdns: "io.magiceden.wallet"
        },
        filterFromWalletConnect: true,
        group: "magiceden",
        injectedConfig: [
            {
                chain: "evm",
                extensionLocators: [
                    {
                        flag: "isMagicEden",
                        value: true
                    }
                ],
                windowLocations: [
                    "magicEden.ethereum"
                ]
            }
        ],
        mobile: {
            androidId: "com.magiceden.wallet",
            inAppBrowser: "magiceden://browser",
            inAppBrowserV2: "magiceden://browser/{{encodedDappURI}}",
            iosId: "id6478631482",
            native: "magiceden://wc",
            universal: "https://magiceden.io/browser"
        },
        name: "Magic Eden"
    },
    magicedenbtc: {
        brand: {
            alt: "Magic Eden",
            spriteId: "magiceden"
        },
        chainGroup: "magiceden",
        desktop: {
            chromeId: "mkpegjkblkkefacfnmkajcjmabijhclg"
        },
        group: "magiceden",
        injectedConfig: [
            {
                chain: "btc",
                extensionLocators: [],
                walletStandard: {
                    features: [
                        "sats-connect:"
                    ],
                    name: "Magic Eden"
                },
                windowLocations: [
                    "magicEden.bitcoin"
                ]
            }
        ],
        mobile: {
            androidId: "com.magiceden.wallet",
            inAppBrowser: "magiceden://browser/{{encodedDappURI}}",
            inAppBrowserV2: "magiceden://browser/{{encodedDappURI}}",
            iosId: "id6478631482",
            universal: "https://magiceden.io/browser/{{encodedDappURI}}"
        },
        mobileExperience: "in-app-browser",
        name: "Magic Eden",
        shortName: "Magic Eden (Bitcoin)",
        walletLimitations: {
            browserExtension: {
                unsupportedMethods: [
                    "getConnectedAccounts"
                ]
            }
        }
    },
    magicedensol: {
        brand: {
            alt: "Magic Eden",
            spriteId: "magiceden"
        },
        chainGroup: "magiceden",
        desktop: {
            chromeId: "mkpegjkblkkefacfnmkajcjmabijhclg"
        },
        group: "magiceden",
        injectedConfig: [
            {
                chain: "sol",
                extensionLocators: [
                    {
                        flag: "isMagicEden",
                        value: true
                    }
                ],
                windowLocations: [
                    "magicEden.solana"
                ]
            }
        ],
        mobile: {
            androidId: "com.magiceden.wallet",
            inAppBrowser: "magiceden://browser/{{encodedDappURI}}",
            inAppBrowserV2: "magiceden://browser/{{encodedDappURI}}",
            iosId: "id6478631482",
            universal: "https://magiceden.io/browser/{{encodedDappURI}}"
        },
        name: "Magic Eden",
        shortName: "Magic Eden (Solana)",
        walletLimitations: {
            browserExtension: {
                unsupportedMethods: [
                    "getConnectedAccounts"
                ]
            }
        }
    },
    exodus: {
        brand: {
            alt: "Exodus Wallet",
            spriteId: "4c16cad4-cac9-4643-6726-c696efaf5200"
        },
        chainGroup: "exodus",
        chains: [
            "eip155:1",
            "eip155:137",
            "eip155:43114",
            "eip155:56",
            "eip155:80084",
            "eip155:80085",
            "solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z",
            "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
            "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1"
        ],
        desktop: {
            chromeId: "aholpfdialjgjfhomihkjbmgjidlcdno"
        },
        filterFromWalletConnect: true,
        group: "exodus",
        mobile: {
            androidId: "exodusmovement.exodus",
            iosId: "id1414384820",
            native: "exodus://wc",
            universal: "https://exodus.com/m/wc"
        },
        name: "Exodus",
        walletConnect: {
            sdks: [
                "sign_v1",
                "sign_v2",
                "auth_v1"
            ]
        }
    },
    exodusevm: {
        brand: {
            alt: "Exodus Wallet",
            spriteId: "exodus"
        },
        chainGroup: "exodus",
        chains: [
            "eip155:1",
            "eip155:137",
            "eip155:43114",
            "eip155:56"
        ],
        desktop: {
            chromeId: "aholpfdialjgjfhomihkjbmgjidlcdno"
        },
        eip6963Config: {
            rdns: "com.exodus.web3-wallet"
        },
        filterFromWalletConnect: true,
        group: "exodus",
        injectedConfig: [
            {
                chain: "evm",
                extensionLocators: [
                    {
                        flag: "isExodus",
                        value: true
                    }
                ]
            }
        ],
        mobile: {
            androidId: "exodusmovement.exodus",
            iosId: "id1414384820",
            native: "exodus://wc"
        },
        name: "Exodus",
        shortName: "Exodus Wallet (EVM)",
        walletConnect: {
            sdks: [
                "sign_v2",
                "auth_v1"
            ]
        }
    },
    exodussol: {
        brand: {
            alt: "Exodus Wallet",
            spriteId: "exodus"
        },
        chainGroup: "exodus",
        chains: [
            "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp"
        ],
        desktop: {
            chromeId: "aholpfdialjgjfhomihkjbmgjidlcdno"
        },
        group: "exodus",
        injectedConfig: [
            {
                chain: "sol",
                extensionLocators: [
                    {
                        flag: "isPhantom",
                        value: true
                    },
                    {
                        flag: "isExodus",
                        value: true
                    }
                ],
                windowLocations: [
                    "exodus.solana"
                ]
            }
        ],
        mobile: {
            androidId: "exodusmovement.exodus",
            iosId: "id1414384820",
            native: "exodus://wc"
        },
        name: "Exodus",
        shortName: "Exodus Wallet (Solana)",
        walletConnect: {
            sdks: [
                "sign_v2",
                "auth_v1"
            ]
        }
    },
    okxwallet: {
        brand: {
            alt: "OKX Wallet",
            spriteId: "okx"
        },
        chainGroup: "okxwallet",
        chains: [
            "bip122:000000000019d6689c085ae165831e93",
            "bip122:000000000933ea01ad0ee984209779ba",
            "eip155:1",
            "eip155:10",
            "eip155:137",
            "eip155:42161",
            "eip155:43114",
            "eip155:56",
            "eip155:66",
            "eip155:80084",
            "eip155:80085",
            "eip155:8453",
            "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp"
        ],
        desktop: {
            chromeId: "mcohilncbfahbmgdjkbpemcciiolgcge"
        },
        eip6963Config: {
            rdns: "com.okex.wallet"
        },
        filterFromWalletConnect: true,
        group: "okxwallet",
        injectedConfig: [
            {
                chain: "evm",
                extensionLocators: [
                    {
                        flag: "isOKExWallet",
                        value: true
                    },
                    {
                        flag: "isOkxWallet",
                        value: true
                    }
                ],
                windowLocations: [
                    "okxwallet"
                ]
            }
        ],
        mobile: {
            androidId: "com.okinc.okex.gp",
            inAppBrowser: "okx://wallet/dapp/url?dappUrl={{encodedDappURI}}",
            inAppBrowserV2: "okx://wallet/dapp/url?dappUrl={{encodedDappURI}}",
            iosId: "id1327268470",
            native: "okex://main/wc"
        },
        name: "OKX Wallet",
        shortName: "OKX Wallet",
        walletConnect: {
            sdks: [
                "sign_v2"
            ]
        }
    },
    backpack: {
        brand: {
            alt: "Backpack",
            primaryColor: "#e43c3c",
            spriteId: "backpack"
        },
        chainGroup: "backpack",
        chains: [
            "eip155:1",
            "eip155:10",
            "eip155:10143",
            "eip155:1329",
            "eip155:137",
            "eip155:42161",
            "eip155:56",
            "eip155:80084",
            "eip155:80085",
            "eip155:8453",
            "solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z",
            "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
            "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1"
        ],
        desktop: {
            chromeId: "aflkmfhebedbjioipglgcbcmnbpgliof"
        },
        eip6963Config: {
            rdns: "app.backpack"
        },
        filterFromWalletConnect: true,
        group: "backpack",
        injectedConfig: [
            {
                chain: "evm",
                extensionLocators: [
                    {
                        flag: "isBackpack",
                        value: true
                    }
                ],
                windowLocations: []
            }
        ],
        mobile: {
            androidId: "app.backpack.mobile",
            iosId: "id6445964121",
            native: "backpack://wc"
        },
        name: "Backpack",
        walletConnect: {
            sdks: [
                "sign_v1",
                "sign_v2"
            ]
        }
    },
    okxwalletbtc: {
        brand: {
            alt: "OKX Wallet",
            spriteId: "okx"
        },
        chainGroup: "okxwallet",
        desktop: {
            chromeId: "mcohilncbfahbmgdjkbpemcciiolgcge"
        },
        group: "okxwallet",
        injectedConfig: [
            {
                chain: "btc",
                extensionLocators: [],
                windowLocations: [
                    "okxwallet.bitcoin"
                ]
            }
        ],
        mobile: {
            androidId: "com.okinc.okex.gp",
            inAppBrowser: "okx://wallet/dapp/url?dappUrl={{encodedDappURI}}",
            inAppBrowserV2: "okx://wallet/dapp/url?dappUrl={{encodedDappURI}}",
            iosId: "id1327268470"
        },
        mobileExperience: "in-app-browser",
        name: "OKX Wallet",
        shortName: "OKX Wallet (Bitcoin)",
        walletLimitations: {
            browserExtension: {
                unsupportedMethods: [
                    "getConnectedAccounts"
                ]
            }
        }
    },
    unisat: {
        brand: {
            alt: "UniSat",
            spriteId: "unisat"
        },
        desktop: {
            chromeId: "ppbibelpcjmhbdihakflkdcoccbgbkpo"
        },
        injectedConfig: [
            {
                chain: "btc",
                extensionLocators: [],
                windowLocations: [
                    "unisat"
                ]
            }
        ],
        name: "UniSat"
    },
    unknown: {
        brand: {
            spriteId: "unknown-wallet"
        },
        mobile: {
            androidId: "enable-android",
            iosId: "id1234567890"
        },
        name: "Unknown Wallet",
        walletLimitations: {
            browserExtension: {
                unsupportedMethods: [
                    "getConnectedAccounts"
                ]
            }
        }
    },
    xverse: {
        brand: {
            alt: "Xverse Wallet",
            spriteId: "xverse"
        },
        chainGroup: "xverse",
        desktop: {
            chromeId: "idnnbdplmphpflfnlkomgpfbpcgelopg"
        },
        group: "xverse",
        hardwareWallets: [
            "ledger"
        ],
        injectedConfig: [
            {
                chain: "btc",
                extensionLocators: [],
                walletStandard: {
                    features: [
                        "sats-connect:"
                    ],
                    name: "Xverse",
                    providerId: "XverseProviders.BitcoinProvider"
                },
                windowLocations: [
                    "XverseProviders.BitcoinProvider"
                ]
            }
        ],
        mobile: {
            androidId: "com.secretkeylabs.xverse",
            inAppBrowser: "xverse://browser?url={{encodedDappURI}}",
            inAppBrowserV2: "xverse://browser?url={{encodedDappURI}}",
            iosId: "id1552272513"
        },
        name: "Xverse",
        walletLimitations: {
            browserExtension: {
                unsupportedMethods: [
                    "getConnectedAccounts"
                ]
            }
        }
    },
    fallbackconnector: {
        brand: {
            spriteId: "unknown-wallet"
        },
        mobile: {
            androidId: "enable-android",
            iosId: "id1234567890"
        },
        name: "Fallback Connector",
        walletLimitations: {
            browserExtension: {
                unsupportedMethods: [
                    "getConnectedAccounts"
                ]
            }
        }
    },
    oylwallet: {
        brand: {
            alt: "Oyl Wallet",
            spriteId: "oyl"
        },
        desktop: {
            chromeId: "ilolmnhjbbggkmopnemiphomhaojndmb"
        },
        injectedConfig: [
            {
                chain: "btc",
                extensionLocators: [],
                windowLocations: [
                    "oyl"
                ]
            }
        ],
        name: "Oyl Wallet"
    },
    abstract: {
        brand: {
            alt: "Abstract",
            spriteId: "abstract"
        },
        chains: [
            "eip155:11124",
            "eip155:2741"
        ],
        desktop: {
            universal: "https://portal.abs.xyz/profile"
        },
        injectedConfig: [
            {
                chain: "evm",
                extensionLocators: []
            }
        ],
        name: "Abstract",
        walletConnect: {
            sdks: [
                "sign_v1",
                "sign_v2"
            ]
        }
    },
    edenonline: {
        brand: {
            alt: "Eden Online",
            spriteId: "edenonline"
        },
        injectedConfig: [
            {
                chain: "evm",
                extensionLocators: []
            }
        ],
        name: "Eden Online"
    },
    onekeybtc: {
        brand: {
            alt: "OneKey Wallet",
            spriteId: "onekey"
        },
        chainGroup: "onekey",
        desktop: {
            chromeId: "jnmbobjmhlngoefaiojfljckilhhlhcj"
        },
        group: "onekey",
        injectedConfig: [
            {
                chain: "btc",
                extensionLocators: [],
                windowLocations: [
                    "$onekey.btc"
                ]
            }
        ],
        mobile: {
            androidId: "so.onekey.app.wallet",
            iosId: "id1609559473"
        },
        mobileExperience: "in-app-browser",
        name: "OneKey"
    },
    intersend: {
        brand: {
            alt: "Intersend",
            spriteId: "intersend"
        },
        injectedConfig: [
            {
                chain: "evm",
                extensionLocators: []
            }
        ],
        name: "Intersend"
    },
    okxeclipse: {
        brand: {
            alt: "OKX Wallet",
            primaryColor: "#FABB38",
            spriteId: "okx"
        },
        chainGroup: "okxwallet",
        desktop: {
            chromeId: "mcohilncbfahbmgdjkbpemcciiolgcge"
        },
        group: "okxwallet",
        injectedConfig: [
            {
                chain: "eclipse",
                extensionLocators: [
                    {
                        flag: "isOKExWallet",
                        value: true
                    },
                    {
                        flag: "isOkxWallet",
                        value: true
                    }
                ],
                windowLocations: [
                    "okxwallet.solana"
                ]
            }
        ],
        mobile: {
            androidId: "com.okinc.okex.gp",
            inAppBrowser: "okx://wallet/dapp/url?dappUrl={{encodedDappURI}}",
            inAppBrowserV2: "okx://wallet/dapp/url?dappUrl={{encodedDappURI}}",
            iosId: "id1327268470"
        },
        name: "OKX Wallet"
    },
    dynamicwaas: {
        brand: {
            alt: "Dynamic Waas",
            primaryColor: "#4779ff",
            spriteId: "dynamicwaas"
        },
        name: "Dynamic Waas"
    },
    nightlyeclipse: {
        brand: {
            alt: "Nightly Wallet",
            spriteId: "nightly"
        },
        chainGroup: "nightly",
        desktop: {
            chromeId: "fiikommddbeccaoicoejoniammnalkfa",
            edgeId: "fiikommddbeccaoicoejoniammnalkfa",
            operaId: "fiikommddbeccaoicoejoniammnalkfa"
        },
        group: "nightly",
        hardwareWallets: [
            "ledger"
        ],
        injectedConfig: [
            {
                chain: "eclipse",
                extensionLocators: [],
                walletStandard: {
                    features: [
                        "standard:connect",
                        "standard:disconnect",
                        "solana:signMessage",
                        "solana:signTransaction",
                        "solana:signAndSendTransaction"
                    ],
                    name: "Nightly"
                }
            }
        ],
        name: "Nightly"
    },
    bitgetwalletbtc: {
        brand: {
            alt: "Bitget Wallet",
            spriteId: "bitgetwallet"
        },
        chainGroup: "bitgetwallet",
        group: "bitgetwallet",
        injectedConfig: [
            {
                chain: "btc",
                extensionLocators: [],
                windowLocations: [
                    "bitkeep.unisat"
                ]
            }
        ],
        mobile: {
            androidId: "com.bitkeep.wallet",
            inAppBrowser: "https://bkcode.vip?action=dapp&url={{encodedDappURI}}",
            inAppBrowserV2: "https://bkcode.vip?action=dapp&url={{encodedDappURI}}",
            iosId: "id1395301115"
        },
        name: "Bitget Wallet"
    },
    backpackeclipse: {
        brand: {
            alt: "Backpack",
            primaryColor: "#e43c3c",
            spriteId: "backpack"
        },
        chainGroup: "backpack",
        desktop: {
            chromeId: "aflkmfhebedbjioipglgcbcmnbpgliof"
        },
        group: "backpack",
        hardwareWallets: [
            "ledger"
        ],
        injectedConfig: [
            {
                chain: "eclipse",
                extensionLocators: [
                    {
                        flag: "isBackpack",
                        value: true
                    }
                ],
                windowLocations: [
                    "backpack"
                ]
            }
        ],
        mobile: {
            androidId: "app.backpack.mobile",
            inAppBrowser: "backpack://ul/v1/browse/{{encodedDappURI}}",
            inAppBrowserV2: "backpack://ul/v1/browse/{{encodedDappURI}}",
            iosId: "id6445964121"
        },
        mobileExperience: "in-app-browser",
        name: "Backpack"
    },
    binancewalletbtc: {
        brand: {
            alt: "Binance Wallet",
            spriteId: "binance"
        },
        chainGroup: "binance",
        group: "binance",
        injectedConfig: [
            {
                chain: "btc",
                extensionLocators: [],
                windowLocations: [
                    "binancew3w.bitcoin"
                ]
            }
        ],
        name: "Binance Wallet",
        shortName: "Binance"
    },
    xversestarknet: {
        brand: {
            alt: "Xverse Wallet",
            spriteId: "xverse"
        },
        chainGroup: "xverse",
        desktop: {
            chromeId: "idnnbdplmphpflfnlkomgpfbpcgelopg"
        },
        group: "xverse",
        injectedConfig: [
            {
                chain: "starknet",
                extensionLocators: [],
                windowLocations: [
                    "xverse"
                ]
            }
        ],
        mobile: {
            androidId: "com.secretkeylabs.xverse",
            inAppBrowser: "xverse://browser?url={{encodedDappURI}}",
            inAppBrowserV2: "xverse://browser?url={{encodedDappURI}}",
            iosId: "id1552272513"
        },
        name: "Xverse"
    },
    xversespark: {
        brand: {
            alt: "Xverse Wallet",
            spriteId: "xverse"
        },
        chainGroup: "xverse",
        desktop: {
            chromeId: "idnnbdplmphpflfnlkomgpfbpcgelopg"
        },
        group: "xverse",
        hardwareWallets: [
            "ledger"
        ],
        injectedConfig: [
            {
                chain: "spark",
                extensionLocators: [],
                walletStandard: {
                    features: [
                        "sats-connect:"
                    ],
                    name: "Xverse",
                    providerId: "XverseProviders.SparkProvider"
                },
                windowLocations: [
                    "XverseProviders.SparkProvider"
                ]
            }
        ],
        mobile: {
            androidId: "com.secretkeylabs.xverse",
            inAppBrowser: "xverse://browser?url={{encodedDappURI}}",
            inAppBrowserV2: "xverse://browser?url={{encodedDappURI}}",
            iosId: "id1552272513"
        },
        mobileExperience: "in-app-browser",
        name: "Xverse",
        walletLimitations: {
            browserExtension: {
                unsupportedMethods: [
                    "getConnectedAccounts"
                ]
            }
        }
    },
    turnkey: {
        brand: {
            alt: "Turnkey Wallet",
            spriteId: "turnkey"
        },
        name: "Turnkey"
    },
    turnkeyhd: {
        brand: {
            alt: "Turnkey Wallet",
            spriteId: "turnkey"
        },
        name: "Turnkey HD"
    }
};
var walletBookFallbacks = {
    groups: groups,
    wallets: wallets
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/schemas/utils/nonEmptyString.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "nonEmptyString": (()=>nonEmptyString)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/mini/schemas.js [app-ssr] (ecmascript)");
'use client';
;
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-namespace
/**
 * A zod type to ensure a string is not empty
 */ const nonEmptyString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transform"])((val)=>val ? val : undefined), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"])())));
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/schemas/utils/filterEmptyObject.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "filterEmptyObject": (()=>filterEmptyObject)
});
'use client';
/**
 * Returns undefined if an object values are all nullish
 * @param val object
 * @returns
 */ const filterEmptyObject = (val)=>val && Object.values(val).some((x)=>Boolean(x)) ? val : undefined;
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/schemas/utils/nonEmptyStringArray.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "nonEmptyStringArray": (()=>nonEmptyStringArray)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/mini/schemas.js [app-ssr] (ecmascript)");
'use client';
;
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-namespace
/**
 * A zod type to ensure an array is not empty
 */ const nonEmptyStringArray = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transform"])((val)=>Array.isArray(val) && val.length > 0 ? val : undefined), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["array"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"])()))));
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/schemas/utils/transformAndroidId.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "transformAndroidId": (()=>transformAndroidId)
});
'use client';
const transformAndroidId = (url)=>{
    if (!(url === null || url === void 0 ? void 0 : url.match(/^https?:\/\//))) return url;
    if (!url) return;
    try {
        const urlObject = new URL(url);
        const id = urlObject.searchParams.get('id');
        if (id) {
            return id;
        }
    } catch (_a) {
    // ignore
    }
    return;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/schemas/utils/transformChromeExtensionId.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "transformChromeExtensionId": (()=>transformChromeExtensionId)
});
'use client';
const extensionIdFromChromeWebStorePath = (pathname)=>pathname.split('/').filter(Boolean).at(-1);
const transformChromeExtensionId = (url)=>{
    if (url === null || url === void 0 ? void 0 : url.match(/^[a-z]{32}$/)) return url;
    if (url === null || url === void 0 ? void 0 : url.includes('chrome.google.com/webstore/detail/')) {
        try {
            const urlObject = new URL(url);
            return extensionIdFromChromeWebStorePath(urlObject.pathname);
        } catch (_a) {
        // ignore
        }
    }
    // New Chrome Web Store host (WalletConnect / Explorer often use this shape)
    if (url === null || url === void 0 ? void 0 : url.includes('chromewebstore.google.com/detail/')) {
        try {
            const urlObject = new URL(url);
            return extensionIdFromChromeWebStorePath(urlObject.pathname);
        } catch (_b) {
        // ignore
        }
    }
    return;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/schemas/utils/transformEdgeExtensionId.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "transformEdgeExtensionId": (()=>transformEdgeExtensionId)
});
'use client';
const transformEdgeExtensionId = (url)=>{
    if (url === null || url === void 0 ? void 0 : url.match(/^[a-z]{32}$/)) return url;
    if (url === null || url === void 0 ? void 0 : url.includes('microsoftedge.microsoft.com/addons/detail/')) {
        try {
            const urlObject = new URL(url);
            return urlObject.pathname.split('/').at(-1);
        } catch (_a) {
        // ignore
        }
    }
    return;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/schemas/utils/transformFirefoxExtensionId.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "transformFirefoxExtensionId": (()=>transformFirefoxExtensionId)
});
'use client';
const transformFirefoxExtensionId = (url)=>{
    if (!(url === null || url === void 0 ? void 0 : url.match(/^https?:\/\//))) return url;
    if (url === null || url === void 0 ? void 0 : url.includes('addons.mozilla.org')) {
        try {
            const urlObject = new URL(url);
            return urlObject.pathname.replace(/\/$/, '').split('/').at(-1);
        } catch (_a) {
        // ignore
        }
    }
    return;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/schemas/utils/transformIosId.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "transformIosId": (()=>transformIosId)
});
'use client';
const idRegex = /^id[0-9]{1,36}$/;
const transformIosId = (url)=>{
    if (url === null || url === void 0 ? void 0 : url.match(idRegex)) return url;
    if (url === null || url === void 0 ? void 0 : url.match(/^https:\/\/[a-zA-Z0-9-]+\.apple\.com/)) {
        try {
            const urlObject = new URL(url);
            const expectedId = urlObject.pathname.replace(/\/$/, '').split('/').at(-1);
            if (expectedId === null || expectedId === void 0 ? void 0 : expectedId.match(idRegex)) {
                return expectedId;
            }
        } catch (_a) {
        // ignore
        }
    }
    return;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/schemas/walletSchema.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "brandSchema": (()=>brandSchema),
    "walletSchema": (()=>walletSchema)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/mini/schemas.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$schemas$2f$utils$2f$filterEmptyObject$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/schemas/utils/filterEmptyObject.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$schemas$2f$utils$2f$nonEmptyString$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/schemas/utils/nonEmptyString.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$schemas$2f$utils$2f$nonEmptyStringArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/schemas/utils/nonEmptyStringArray.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$schemas$2f$utils$2f$transformAndroidId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/schemas/utils/transformAndroidId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$schemas$2f$utils$2f$transformChromeExtensionId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/schemas/utils/transformChromeExtensionId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$schemas$2f$utils$2f$transformEdgeExtensionId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/schemas/utils/transformEdgeExtensionId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$schemas$2f$utils$2f$transformFirefoxExtensionId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/schemas/utils/transformFirefoxExtensionId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$schemas$2f$utils$2f$transformIosId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/schemas/utils/transformIosId.js [app-ssr] (ecmascript)");
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
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-namespace
const injectedConfigSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["object"])({
    chain: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"])(),
    extensionLocators: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["array"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["object"])({
        flag: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"])(),
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"])()), true)
    })),
    /**
     * Allows declaring which interface, if any, this wallet's implementation follows
     * ex. Leather with https://btckit.org/
     */ providerInterface: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"])()),
    /**
     * Allows declaring that this wallet is discoverable through the the Wallet Standard
     * See https://github.com/wallet-standard/wallet-standard
     * Also allows ignoring wallets that don't support the provided features
     */ walletStandard: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["object"])({
        features: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["array"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"])()),
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"])(),
        providerId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"])())
    })),
    walletStandardLocators: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["array"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["object"])({
        locator: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"])(),
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"])()
    }))),
    windowLocations: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["array"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"])())).check((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["refine"])((val)=>{
        if (!val) return true;
        if (!val.some((v)=>[
                'ethereum',
                'ethereum.providers'
            ].includes(v))) return true;
        return false;
    }, {
        message: 'windowLocations cannot include ethereum or ethereum.providers as they are included by default',
        path: [
            'config'
        ]
    }))
});
const brandSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["object"])({
    alt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$schemas$2f$utils$2f$nonEmptyString$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonEmptyString"],
    primaryColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$schemas$2f$utils$2f$nonEmptyString$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonEmptyString"],
    spriteId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$schemas$2f$utils$2f$nonEmptyString$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonEmptyString"]
});
const walletSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transform"])((val)=>val), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["object"])({
    brand: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["optional"])(brandSchema),
    chainGroup: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"])()),
    chains: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["array"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"])())),
    desktop: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["object"])({
        chromeId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pipe"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$schemas$2f$utils$2f$nonEmptyString$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonEmptyString"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transform"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$schemas$2f$utils$2f$transformChromeExtensionId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformChromeExtensionId"]))),
        edgeId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pipe"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$schemas$2f$utils$2f$nonEmptyString$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonEmptyString"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transform"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$schemas$2f$utils$2f$transformEdgeExtensionId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEdgeExtensionId"]))),
        firefoxId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pipe"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$schemas$2f$utils$2f$nonEmptyString$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonEmptyString"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transform"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$schemas$2f$utils$2f$transformFirefoxExtensionId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformFirefoxExtensionId"]))),
        native: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$schemas$2f$utils$2f$nonEmptyString$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonEmptyString"],
        operaId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$schemas$2f$utils$2f$nonEmptyString$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonEmptyString"],
        safariId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$schemas$2f$utils$2f$nonEmptyString$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonEmptyString"],
        universal: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$schemas$2f$utils$2f$nonEmptyString$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonEmptyString"]
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transform"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$schemas$2f$utils$2f$filterEmptyObject$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterEmptyObject"]))),
    eip6963Config: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["object"])({
        rdns: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"])()
    })),
    filterFromWalletConnect: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"])()),
    group: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"])()),
    /**
     * Indicates which hardware wallets are enabled for this wallet
     */ hardwareWallets: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["array"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"])())),
    injectedConfig: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["array"])(injectedConfigSchema)),
    mobile: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["object"])({
        android: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nullish"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"])()),
        androidId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pipe"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$schemas$2f$utils$2f$nonEmptyString$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonEmptyString"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transform"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$schemas$2f$utils$2f$transformAndroidId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformAndroidId"]))),
        /**
         * @deprecated Use inAppBrowserV2 instead for EVM wallet deep linking
         */ inAppBrowser: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nullish"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"])()),
        inAppBrowserV2: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nullish"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"])()),
        ios: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nullish"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"])()),
        iosId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pipe"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$schemas$2f$utils$2f$nonEmptyString$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonEmptyString"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transform"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$schemas$2f$utils$2f$transformIosId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformIosId"]))),
        native: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$schemas$2f$utils$2f$nonEmptyString$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonEmptyString"],
        universal: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$schemas$2f$utils$2f$nonEmptyString$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonEmptyString"]
    })), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transform"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$schemas$2f$utils$2f$filterEmptyObject$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterEmptyObject"]))),
    mobileExperience: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["enum"])([
        'in-app-browser',
        'redirect'
    ])),
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"])(),
    /**
     * Indicates if the wallet requires disconnecting current wallet before connecting a new one.
     * An example is Slush.
     */ requiresDisconnectBeforeNewConnection: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"])()),
    shortName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$schemas$2f$utils$2f$nonEmptyString$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonEmptyString"],
    showOnlyIfInstalled: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"])()),
    switchNetworkOnlyFromWallet: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"])()),
    walletConnect: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["object"])({
        sdks: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$schemas$2f$utils$2f$nonEmptyStringArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonEmptyStringArray"]
    })), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transform"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$schemas$2f$utils$2f$filterEmptyObject$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterEmptyObject"]))),
    walletGroup: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"])()),
    /**
     * Indicates which connector methods/events are not supported, keyed by wallet type
     */ walletLimitations: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["object"])({
        browserExtension: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["object"])({
            unsupportedEvents: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["array"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"])())),
            unsupportedMethods: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["array"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"])()))
        })),
        mobile: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["object"])({
            unsupportedEvents: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["array"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"])())),
            unsupportedMethods: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["array"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"])()))
        }))
    }))
})), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transform"])((val)=>{
    var _a, _b, _c, _d, _e, _f;
    if (val.group) {
        val.chainGroup = val.group;
    }
    if (((_a = val.mobile) === null || _a === void 0 ? void 0 : _a.iosId) || ((_b = val.mobile) === null || _b === void 0 ? void 0 : _b.ios) === null) {
        (_c = val.mobile) === null || _c === void 0 ? true : delete _c.ios;
    }
    if (((_d = val.mobile) === null || _d === void 0 ? void 0 : _d.androidId) || ((_e = val.mobile) === null || _e === void 0 ? void 0 : _e.android) === null) {
        (_f = val.mobile) === null || _f === void 0 ? true : delete _f.android;
    }
    return val;
}));
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/schemas/walletGroup.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "walletGroupSchema": (()=>walletGroupSchema)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/mini/schemas.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$schemas$2f$utils$2f$nonEmptyString$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/schemas/utils/nonEmptyString.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$schemas$2f$walletSchema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/schemas/walletSchema.js [app-ssr] (ecmascript)");
'use client';
;
;
;
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-namespace
const WalletOverrideEntrySchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["object"])({
    brand: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["optional"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$schemas$2f$walletSchema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brandSchema"]),
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$schemas$2f$utils$2f$nonEmptyString$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonEmptyString"]
});
const walletGroupSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["object"])({
    brand: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["object"])({
        alt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$schemas$2f$utils$2f$nonEmptyString$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonEmptyString"],
        primaryColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$schemas$2f$utils$2f$nonEmptyString$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonEmptyString"],
        spriteId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$schemas$2f$utils$2f$nonEmptyString$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonEmptyString"]
    })),
    key: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"])(),
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"])(),
    walletOverrides: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["record"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"])(), WalletOverrideEntrySchema))
});
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/schemas/walletBookSchema.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "walletBookSchema": (()=>walletBookSchema)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/mini/schemas.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$schemas$2f$walletGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/schemas/walletGroup.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$schemas$2f$walletSchema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/schemas/walletSchema.js [app-ssr] (ecmascript)");
'use client';
;
;
;
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-namespace
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["record"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"])(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$schemas$2f$walletSchema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["walletSchema"]);
const walletBookSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transform"])((val)=>val), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["object"])({
    groups: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["record"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"])(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$schemas$2f$walletGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["walletGroupSchema"]),
    wallets: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["record"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"])(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$schemas$2f$walletSchema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["walletSchema"])
}));
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["record"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"])(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$schemas$2f$walletGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["walletGroupSchema"]);
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/hooks/fetchWalletBook/fetchWalletBook.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "fetchWalletBook": (()=>fetchWalletBook),
    "walletBookCache": (()=>walletBookCache),
    "walletBookEmitter": (()=>walletBookEmitter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/_virtual/_tslib.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter3$40$5$2e$0$2e$1$2f$node_modules$2f$eventemitter3$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eventemitter3@5.0.1/node_modules/eventemitter3/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter3$40$5$2e$0$2e$1$2f$node_modules$2f$eventemitter3$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eventemitter3@5.0.1/node_modules/eventemitter3/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$retryableFn$2f$retryableFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/retryableFn/retryableFn.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$wallet$2d$book$2d$fallbacks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/wallet-book-fallbacks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$getWalletBookCdnUrl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/helpers/getWalletBookCdnUrl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/helpers/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$schemas$2f$walletBookSchema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/schemas/walletBookSchema.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const walletBookCache = {
    current: {}
};
const walletBookEmitter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter3$40$5$2e$0$2e$1$2f$node_modules$2f$eventemitter3$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"]();
const fetchWalletBook = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, void 0, void 0, function*() {
        const url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$getWalletBookCdnUrl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWalletBookCdnUrl"])();
        const fn = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, void 0, void 0, function*() {
                const res = yield fetch(url, {
                    mode: 'cors'
                });
                if (!res.ok) {
                    throw new Error(`Failed to fetch wallet book data from ${url} with status code ${res.status}`);
                }
                const json = yield res.json();
                try {
                    const parsedData = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$schemas$2f$walletBookSchema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["walletBookSchema"].parse(json);
                    return parsedData;
                } catch (e) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].error('Error parsing wallet book data', e, json);
                    throw e;
                }
            });
        walletBookCache.current = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$retryableFn$2f$retryableFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retryableFn"])(fn, {
            fallbackValue: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$schemas$2f$walletBookSchema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["walletBookSchema"].parse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$wallet$2d$book$2d$fallbacks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]),
            maxRetries: 3,
            retryStrategy: 'timeout-and-rejection',
            timeoutMs: 30000
        });
        walletBookEmitter.emit('walletBookLoaded', walletBookCache.current);
    });
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/hooks/useWalletBookCdn.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useWalletBookCdn": (()=>useWalletBookCdn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$hooks$2f$fetchWalletBook$2f$fetchWalletBook$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/hooks/fetchWalletBook/fetchWalletBook.js [app-ssr] (ecmascript)");
'use client';
;
;
// Initiate wallet book fetch immediately
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$hooks$2f$fetchWalletBook$2f$fetchWalletBook$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchWalletBook"])();
const useWalletBookCdn = ()=>{
    const [walletBookState, setWalletBookState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$hooks$2f$fetchWalletBook$2f$fetchWalletBook$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["walletBookCache"].current);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$hooks$2f$fetchWalletBook$2f$fetchWalletBook$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["walletBookEmitter"].on('walletBookLoaded', setWalletBookState);
        /**
         * Justification for this setWalletBookState call — imagine the following scenario:
         *
         * 1. fetchWalletBook() is called — the wallet book is not yet loaded
         * 2. useState(walletBookCache.current) is called, and therefore initializes walletBookState to {}
         * 3. Before this effect runs — wallet book is loaded, and the walletBookLoaded event is emitted
         * 4. This effect finally runs and only then subscribes to the walletBookLoaded event
         *
         * In this case, walletBookState would be initialized to {}, and would never be updated to the actual wallet book
         * Therefore, we need to call setWalletBookState(walletBookCache.current)
         * to ensure that walletBookState is initialized to the correct value in this edge case
         */ setWalletBookState(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$hooks$2f$fetchWalletBook$2f$fetchWalletBook$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["walletBookCache"].current);
        return ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$hooks$2f$fetchWalletBook$2f$fetchWalletBook$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["walletBookEmitter"].off('walletBookLoaded', setWalletBookState);
        };
    }, []);
    return walletBookState;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/helpers/getWalletIconData.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getWalletIconData": (()=>getWalletIconData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$getWalletBookWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/helpers/getWalletBookWallet.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$getBrandIconUrl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/helpers/getBrandIconUrl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/helpers/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$findWalletGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/helpers/findWalletGroup.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const getWalletIconData = (walletBook, walletKey, isGroup)=>{
    if (!walletKey) {
        return {
            walletIconAlt: '',
            walletIconUrl: ''
        };
    }
    try {
        const walletData = isGroup ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$findWalletGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findWalletGroup"])(walletBook, walletKey) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$getWalletBookWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWalletBookWallet"])(walletBook, walletKey);
        const iconData = walletData === null || walletData === void 0 ? void 0 : walletData.brand;
        if (iconData) {
            return {
                walletIconAlt: iconData.alt,
                walletIconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$getBrandIconUrl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBrandIconUrl"])(iconData)
            };
        }
    } catch (err) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].debug(err);
    }
    return {
        walletIconAlt: '',
        walletIconUrl: ''
    };
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/components/WalletIcon.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "WalletIcon": (()=>WalletIcon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/_virtual/_tslib.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$getWalletIconUrl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/helpers/getWalletIconUrl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$renderTemplate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/helpers/renderTemplate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/helpers/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$getWalletIconData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/helpers/getWalletIconData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$context$2f$WalletBookContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/context/WalletBookContext.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
const WalletBookWalletIcon = (_a)=>{
    var { walletKey, isGroup, children } = _a, props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__rest"])(_a, [
        "walletKey",
        "isGroup",
        "children"
    ]);
    const { walletBook } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$context$2f$WalletBookContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWalletBookContext"])();
    const [imgError, setImgError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { walletIconUrl, walletIconAlt } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$getWalletIconData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWalletIconData"])(walletBook, walletKey, isGroup);
    const defaultWalletIconUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$getWalletIconUrl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultWalletIconUrl"])();
    if (!walletIconUrl) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, children);
    }
    const onError = ()=>{
        setImgError(true);
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])('img', Object.assign(Object.assign({
        'data-testid': `wallet-icon-${walletKey}`
    }, props), {
        alt: walletIconAlt,
        key: walletKey,
        onError: onError,
        src: imgError ? defaultWalletIconUrl : walletIconUrl
    }), children);
};
const WalletIcon = (_a)=>{
    var { icon, walletKey, isGroup, children } = _a, props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__rest"])(_a, [
        "icon",
        "walletKey",
        "isGroup",
        "children"
    ]);
    if (!icon) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(WalletBookWalletIcon, Object.assign({
            children,
            isGroup,
            walletKey
        }, props));
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])('img', Object.assign(Object.assign({
        'data-testid': `wallet-icon-${walletKey}`
    }, props), {
        alt: walletKey,
        key: walletKey,
        src: icon
    }), children);
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/components/WalletBookContextProvider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "WalletBookContextProvider": (()=>WalletBookContextProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$context$2f$WalletBookContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/context/WalletBookContext.js [app-ssr] (ecmascript)");
'use client';
;
;
const WalletBookContextProvider = ({ walletBook, children })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$context$2f$WalletBookContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WalletBookContext"].Provider, {
        value: {
            walletBook
        }
    }, children);
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/components/BrandIcon.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "BrandIcon": (()=>BrandIcon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/_virtual/_tslib.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$getWalletIconUrl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/helpers/getWalletIconUrl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$renderTemplate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/helpers/renderTemplate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/helpers/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$getBrandIconUrl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/helpers/getBrandIconUrl.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const BrandIcon = (_a)=>{
    var { brand, walletKey } = _a, props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__rest"])(_a, [
        "brand",
        "walletKey"
    ]);
    const [imgError, setImgError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const walletIconUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$getBrandIconUrl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBrandIconUrl"])(brand);
    const defaultWalletIconUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$getWalletIconUrl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultWalletIconUrl"])();
    if (!walletIconUrl) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {});
    }
    const onError = ()=>{
        setImgError(true);
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])('img', Object.assign(Object.assign({
        'data-testid': `wallet-icon-${walletKey}`
    }, props), {
        alt: brand.alt,
        onError: onError,
        src: imgError ? defaultWalletIconUrl : walletIconUrl
    }));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$assert$2d$package$2d$version$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$assert$2d$package$2d$version$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+assert-package-version@4.73.2/node_modules/@dynamic-labs/assert-package-version/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$assert$2d$package$2d$version$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$assert$2d$package$2d$version$2f$src$2f$lib$2f$assertPackageVersion$2f$assertPackageVersion$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+assert-package-version@4.73.2/node_modules/@dynamic-labs/assert-package-version/src/lib/assertPackageVersion/assertPackageVersion.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/package.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$context$2f$WalletBookContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/context/WalletBookContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$getWalletIconUrl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/helpers/getWalletIconUrl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$getWalletBookWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/helpers/getWalletBookWallet.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$renderTemplate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/helpers/renderTemplate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$findWalletBookWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/helpers/findWalletBookWallet.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/helpers/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$getWalletGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/helpers/getWalletGroup.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$findWalletGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/helpers/findWalletGroup.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$getWalletBookCdnUrl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/helpers/getWalletBookCdnUrl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$getBrandIconUrl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/helpers/getBrandIconUrl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$findWalletGroupOverride$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/helpers/findWalletGroupOverride.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$isWalletBookPopulated$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/helpers/isWalletBookPopulated.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$findWalletBookWalletByNameAndChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/helpers/findWalletBookWalletByNameAndChain.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$hooks$2f$useWalletBookCdn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/hooks/useWalletBookCdn.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$components$2f$WalletIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/components/WalletIcon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$components$2f$WalletBookContextProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/components/WalletBookContextProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$components$2f$BrandIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/components/BrandIcon.js [app-ssr] (ecmascript)");
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
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$assert$2d$package$2d$version$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$assert$2d$package$2d$version$2f$src$2f$lib$2f$assertPackageVersion$2f$assertPackageVersion$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertPackageVersion"])('@dynamic-labs/wallet-book', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"]);
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/index.js [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$assert$2d$package$2d$version$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$assert$2d$package$2d$version$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+assert-package-version@4.73.2/node_modules/@dynamic-labs/assert-package-version/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/package.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$context$2f$WalletBookContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/context/WalletBookContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$getWalletIconUrl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/helpers/getWalletIconUrl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$getWalletBookWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/helpers/getWalletBookWallet.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$renderTemplate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/helpers/renderTemplate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$findWalletBookWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/helpers/findWalletBookWallet.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/helpers/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$getWalletGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/helpers/getWalletGroup.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$findWalletGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/helpers/findWalletGroup.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$getWalletBookCdnUrl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/helpers/getWalletBookCdnUrl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$getBrandIconUrl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/helpers/getBrandIconUrl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$findWalletGroupOverride$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/helpers/findWalletGroupOverride.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$isWalletBookPopulated$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/helpers/isWalletBookPopulated.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$findWalletBookWalletByNameAndChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/helpers/findWalletBookWalletByNameAndChain.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$hooks$2f$useWalletBookCdn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/hooks/useWalletBookCdn.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$components$2f$WalletIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/components/WalletIcon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$components$2f$WalletBookContextProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/components/WalletBookContextProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$components$2f$BrandIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/components/BrandIcon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/index.js [app-ssr] (ecmascript) <locals>");
}}),

};

//# sourceMappingURL=4489e_%40dynamic-labs_wallet-book_89aaca19._.js.map