module.exports = {

"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/utils/functions/isSSR/isSSR.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isSSR": (()=>isSSR)
});
'use client';
const isSSR = ()=>typeof window === 'undefined';
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/utils/functions/getInitialUrl/getInitialUrl.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getInitialUrl": (()=>getInitialUrl)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$utils$2f$functions$2f$isSSR$2f$isSSR$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/utils/functions/isSSR/isSSR.js [app-ssr] (ecmascript)");
'use client';
;
let initialUrl;
(()=>{
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$utils$2f$functions$2f$isSSR$2f$isSSR$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSSR"])()) {
        // TODO: use PlatformService
        initialUrl = new URL(window.location.href);
    }
})();
const getInitialUrl = ()=>initialUrl;
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/logger.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "logger": (()=>logger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$logger$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$logger$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+logger@4.73.2/node_modules/@dynamic-labs/logger/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$logger$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$logger$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+logger@4.73.2/node_modules/@dynamic-labs/logger/src/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$logger$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$logger$2f$src$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+logger@4.73.2/node_modules/@dynamic-labs/logger/src/types.js [app-ssr] (ecmascript)");
'use client';
;
const logger = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$logger$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$logger$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Logger"]('DynamicSDK', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$logger$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$logger$2f$src$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LogLevel"].INFO);
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/utils/functions/wallet/createWallet.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createWallet": (()=>createWallet)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$findWalletBookWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/helpers/findWalletBookWallet.js [app-ssr] (ecmascript)");
'use client';
;
const createWallet = (walletBook, walletConnector)=>{
    var _a;
    const walletBookWallet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$findWalletBookWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findWalletBookWallet"])(walletBook, walletConnector.key);
    return {
        chainGroup: walletConnector.metadata.groupKey,
        group: walletConnector.metadata.groupKey,
        injectedConfig: walletBookWallet === null || walletBookWallet === void 0 ? void 0 : walletBookWallet.injectedConfig,
        isInstalledOnBrowser: (_a = walletConnector.isInstalledOnBrowser()) !== null && _a !== void 0 ? _a : false,
        key: walletConnector.key,
        name: walletConnector.name,
        walletConnector: walletConnector,
        walletGroup: walletConnector.metadata.groupKey
    };
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/consts/index.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "authModalZIndex": (()=>authModalZIndex),
    "countryCodes": (()=>countryCodes),
    "defaultWalletsForChains": (()=>defaultWalletsForChains),
    "tShirtSizes": (()=>tShirtSizes),
    "teamNames": (()=>teamNames),
    "tooltipZIndex": (()=>tooltipZIndex),
    "widgetModalZIndex": (()=>widgetModalZIndex)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$country$2d$list$40$2$2e$3$2e$0$2f$node_modules$2f$country$2d$list$2f$country$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/country-list@2.3.0/node_modules/country-list/country-list.js [app-ssr] (ecmascript)");
'use client';
;
const tShirtSizes = [
    'XS',
    'S',
    'M',
    'L',
    'XL',
    '2XL'
];
// getData will contain a list of country codes and names
// eg: [ { code: "AU", name: "Australia" }]
const countryCodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$country$2d$list$40$2$2e$3$2e$0$2f$node_modules$2f$country$2d$list$2f$country$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getData"])();
// see: dyn-1131 - this is a hardcoded list for animoca
// these will be removed once we have custom fields
const teamNames = [
    'Brunei DS',
    'Cambodia',
    'Indonesia',
    'Laos',
    'Malaysia',
    'Myanmar',
    'Philippines',
    'Singapore',
    'Thailand',
    'Vietnam'
];
const defaultWalletsForChains = {
    primary_chain: 'evm',
    wallets: {
        algorand: 'perawallet',
        bitcoin: 'xverse',
        cosmos: 'keplr',
        evm: 'metamask',
        flow: 'blocto',
        solana: 'phantom'
    }
};
// z-index
const tooltipZIndex = 2147483647;
const authModalZIndex = 2147483645;
const widgetModalZIndex = 2147483643;
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/utils/hooks/usePreventPageScroll/usePreventPageScroll.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "usePreventPageScroll": (()=>usePreventPageScroll)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$isMobile$2f$isMobile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/isMobile/isMobile.js [app-ssr] (ecmascript)");
'use client';
;
;
// This hook allows us to prevent page from scrolling ie. when a modal is open.
// It adds a class to the html and body elements which disables scrolling.
const usePreventPageScroll = (isOpen)=>{
    const disableScroll = ()=>{
        var _a;
        const html = document.querySelector('html');
        const body = document.querySelector('body');
        /* istanbul ignore next */ if (!html || !body) return;
        // https://developer.mozilla.org/en-US/docs/Web/API/Screen/height
        const deviceScreenHeight = (_a = window === null || window === void 0 ? void 0 : window.screen) === null || _a === void 0 ? void 0 : _a.height;
        const isScrollable = body.scrollHeight > deviceScreenHeight;
        // Don't prevent scroll if the page is not scrollable
        // If we don't know the device screen height, we can't know if the page is scrollable
        /* istanbul ignore else */ if (!isScrollable || deviceScreenHeight === 0) return;
        html.classList.add('dynamic-no-scroll');
        body.classList.add('dynamic-no-scroll');
    };
    const enableScroll = (userScrollCoordinatesBeforeLock)=>{
        const html = document.querySelector('html');
        const body = document.querySelector('body');
        /* istanbul ignore next */ if (!html || !body) return;
        html.classList.remove('dynamic-no-scroll');
        body.classList.remove('dynamic-no-scroll');
        // Restore the scroll position when user is using IOS
        /* istanbul ignore else */ if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$isMobile$2f$isMobile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isIOS"])()) {
            window.scrollTo(userScrollCoordinatesBeforeLock.x, userScrollCoordinatesBeforeLock.y);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isOpen) return;
        const userScrollCoordinatesBeforeLock = {
            x: window.scrollX,
            y: window.scrollY
        };
        disableScroll();
        return ()=>{
            enableScroll(userScrollCoordinatesBeforeLock);
        };
    }, [
        isOpen
    ]);
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/error.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgError = function SvgError(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M9.99 0C4.47 0 0 4.48 0 10s4.47 10 9.99 10C15.52 20 20 15.52 20 10S15.52 0 9.99 0ZM10 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8Zm-1-5h2v2H9v-2Zm0-8h2v6H9V5Z",
        fill: "currentcolor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/utils/hooks/useLocalStorage/useLocalStorage.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useLocalStorage": (()=>useLocalStorage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$StorageService$2f$StorageService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/StorageService/StorageService.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/logger.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const useLocalStorage = (key, initialValue, valueValidator, otherKeysToRemove)=>{
    const intialValueRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(initialValue);
    intialValueRef.current = initialValue;
    const [storedValue, setStoredValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        try {
            const item = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$StorageService$2f$StorageService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StorageService"].getItem(key);
            if (item && valueValidator && !valueValidator(item)) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$StorageService$2f$StorageService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StorageService"].removeItem(key);
                otherKeysToRemove === null || otherKeysToRemove === void 0 ? void 0 : otherKeysToRemove.forEach((k)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$StorageService$2f$StorageService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StorageService"].removeItem(k));
                return intialValueRef.current;
            } else {
                return item !== null && item !== void 0 ? item : intialValueRef.current;
            }
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].error(error);
            return intialValueRef.current;
        }
    });
    const setValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((value)=>{
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$StorageService$2f$StorageService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StorageService"].setItem(key, valueToStore);
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].error(error);
        }
    }, [
        key,
        storedValue
    ]);
    const removeValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$StorageService$2f$StorageService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StorageService"].removeItem(key);
        setStoredValue(intialValueRef.current);
    }, [
        key
    ]);
    return [
        storedValue,
        setValue,
        removeValue
    ];
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/utils/functions/isGlobalWalletPopup/isGlobalWalletPopup.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isGlobalWalletPopup": (()=>isGlobalWalletPopup)
});
'use client';
const isGlobalWalletPopup = ()=>typeof window !== 'undefined' && window.isGlobalWalletPopup;
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/utils/functions/getValueByKey/index.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getValueByKey": (()=>getValueByKey)
});
'use client';
const getValueByKey = (objectData, keyName)=>objectData[keyName];
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/utils/functions/hasPendingMfaAction/hasPendingMfaAction.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "hasPendingMfaAction": (()=>hasPendingMfaAction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$MfaBackupCodeAcknowledgement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/models/MfaBackupCodeAcknowledgement.js [app-ssr] (ecmascript)");
'use client';
;
const hasPendingMfaAction = (user)=>{
    var _a;
    return ((_a = user.scope) === null || _a === void 0 ? void 0 : _a.includes('requiresAdditionalAuth')) || user.mfaBackupCodeAcknowledgement === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$MfaBackupCodeAcknowledgement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MfaBackupCodeAcknowledgement"].Pending;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/utils/functions/hasPendingRequirements/hasPendingRequirements.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "hasPendingRequirements": (()=>hasPendingRequirements)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$utils$2f$functions$2f$hasPendingMfaAction$2f$hasPendingMfaAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/utils/functions/hasPendingMfaAction/hasPendingMfaAction.js [app-ssr] (ecmascript)");
'use client';
;
const hasPendingRequirements = (user)=>{
    var _a;
    return Boolean((_a = user.missingFields) === null || _a === void 0 ? void 0 : _a.length) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$utils$2f$functions$2f$hasPendingMfaAction$2f$hasPendingMfaAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasPendingMfaAction"])(user);
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/utils/hooks/useOnClickOutside/index.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useOnClickOutside": (()=>useOnClickOutside)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
const useOnClickOutside = (ref, handler)=>{
    const handlerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(handler);
    handlerRef.current = handler;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!ref) return;
        const listener = (event)=>{
            event.stopPropagation();
            const realTarget = event.composedPath().shift();
            const refCurrent = 'current' in ref ? ref.current : ref;
            if (!refCurrent || refCurrent.contains(event.currentTarget) || refCurrent.contains(realTarget)) {
                return;
            }
            handlerRef.current(event);
        };
        document.addEventListener('touchstart', listener);
        document.addEventListener('click', listener);
        return ()=>{
            document.removeEventListener('touchstart', listener);
            document.removeEventListener('click', listener);
        };
    }, [
        ref
    ]);
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/google-drive.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgGoogleDrive)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _g, _defs;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgGoogleDrive = function SvgGoogleDrive(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 20,
        height: 24,
        viewBox: "0 0 20 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _g || (_g = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("g", {
        clipPath: "url(#google-drive_svg__a)"
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "m1.512 21.141.882 1.705c.183.36.447.641.756.846L6.3 17.59H0c0 .397.092.795.275 1.154l1.237 2.397Z",
        fill: "#0066DA"
    }), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M10 10.41 6.85 4.308a2.22 2.22 0 0 0-.756.846L.274 16.436A2.54 2.54 0 0 0 0 17.59h6.3l3.7-7.18Z",
        fill: "#00AC47"
    }), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M16.85 23.692a2.22 2.22 0 0 0 .756-.846l.366-.705 1.753-3.397A2.54 2.54 0 0 0 20 17.59h-6.3l1.34 2.948 1.81 3.154Z",
        fill: "#EA4335"
    }), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "m10 10.41 3.15-6.102A1.852 1.852 0 0 0 12.119 4H7.88a1.96 1.96 0 0 0-1.031.308L10 10.41Z",
        fill: "#00832D"
    }), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M13.7 17.59H6.3l-3.15 6.102c.31.205.665.308 1.031.308H15.82a1.96 1.96 0 0 0 1.031-.308L13.7 17.59Z",
        fill: "#2684FC"
    }), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "m16.816 10.795-2.91-5.641a2.221 2.221 0 0 0-.756-.846L10 10.41l3.7 7.18h6.288a2.54 2.54 0 0 0-.274-1.154l-2.898-5.641Z",
        fill: "#FFBA00"
    }))), _defs || (_defs = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("defs", null, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("clipPath", {
        id: "google-drive_svg__a"
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fill: "#fff",
        transform: "translate(0 4)",
        d: "M0 0h20v20H0z"
    })))));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/icloud.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgIcloud)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path, _defs;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgIcloud = function SvgIcloud(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M11.468 4.074a5.426 5.426 0 0 0-4.724 2.777 2.976 2.976 0 0 0-1.299-.3 2.976 2.976 0 0 0-2.93 2.5A4.098 4.098 0 0 0 0 12.83a4.098 4.098 0 0 0 4.1 4.094c.172-.001.344-.014.514-.037h11.393c.06.005.12.007.18.009l.171-.009h.273v-.02a3.809 3.809 0 0 0 2.404-1.259c.621-.7.964-1.606.965-2.545v-.007a3.844 3.844 0 0 0-.88-2.44A3.811 3.811 0 0 0 16.894 9.3a5.425 5.425 0 0 0-5.426-5.226Z",
        fill: "url(#icloud_svg__a)"
    })), _defs || (_defs = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("defs", null, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("linearGradient", {
        id: "icloud_svg__a",
        x1: 20.061,
        y1: 13.075,
        x2: -0.007,
        y2: 12.798,
        gradientUnits: "userSpaceOnUse"
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("stop", {
        stopColor: "#3E82F4"
    }), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("stop", {
        offset: 1,
        stopColor: "#93DCF7"
    })))));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/utils/functions/chain/getChainIcon.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getChainIcon": (()=>getChainIcon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$iconic$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$iconic$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+iconic@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/iconic/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$iconic$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$iconic$2f$src$2f$icons$2f$chains$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+iconic@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/iconic/src/icons/chains/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-connector-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3._7679fe86d42f6979f41d87c8de2f235e/node_modules/@dynamic-labs/wallet-connector-core/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$getChainInfo$2f$getChainInfo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-connector-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3._7679fe86d42f6979f41d87c8de2f235e/node_modules/@dynamic-labs/wallet-connector-core/src/utils/getChainInfo/getChainInfo.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$assets$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/error.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ViewContext$2f$ViewContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/ViewContext/ViewContext.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const chainIconMap = {
    aleo: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$iconic$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$iconic$2f$src$2f$icons$2f$chains$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AleoIcon"],
    algorand: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$iconic$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$iconic$2f$src$2f$icons$2f$chains$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlgorandIcon"],
    aptos: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$iconic$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$iconic$2f$src$2f$icons$2f$chains$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AptosIcon"],
    bitcoin: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$iconic$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$iconic$2f$src$2f$icons$2f$chains$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BitcoinIcon"],
    cosmos: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$iconic$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$iconic$2f$src$2f$icons$2f$chains$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CosmosIcon"],
    eclipse: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$iconic$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$iconic$2f$src$2f$icons$2f$chains$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EclipseIcon"],
    evm: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$iconic$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$iconic$2f$src$2f$icons$2f$chains$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EthereumIcon"],
    flow: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$iconic$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$iconic$2f$src$2f$icons$2f$chains$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowIcon"],
    solana: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$iconic$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$iconic$2f$src$2f$icons$2f$chains$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaIcon"],
    spark: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$iconic$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$iconic$2f$src$2f$icons$2f$chains$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SparkIcon"],
    starknet: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$iconic$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$iconic$2f$src$2f$icons$2f$chains$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StarknetIcon"],
    stellar: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$iconic$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$iconic$2f$src$2f$icons$2f$chains$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StellarIcon"],
    sui: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$iconic$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$iconic$2f$src$2f$icons$2f$chains$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SuiIcon"],
    tempo: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$iconic$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$iconic$2f$src$2f$icons$2f$chains$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TempoIcon"],
    ton: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$iconic$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$iconic$2f$src$2f$icons$2f$chains$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TonIcon"],
    tron: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$iconic$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$iconic$2f$src$2f$icons$2f$chains$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TronIcon"]
};
const getChainIcon = (chain)=>{
    var _a, _b, _c;
    const chainName = (_b = (_a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$getChainInfo$2f$getChainInfo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getChainInfo"])(chain)) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : '';
    return (_c = chainIconMap[chainName]) !== null && _c !== void 0 ? _c : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$assets$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ReactComponent"];
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/close.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgClose)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgClose = function SvgClose(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M4.41 4.41a.833.833 0 0 1 1.18 0L10 8.822l4.41-4.41a.833.833 0 1 1 1.18 1.178L11.178 10l4.41 4.41a.833.833 0 1 1-1.178 1.18L10 11.177 5.588 15.59a.833.833 0 1 1-1.178-1.178L8.82 10l-4.41-4.41a.833.833 0 0 1 0-1.18Z",
        fill: "currentcolor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/copy.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgCopy)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path, _path2;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgCopy = function SvgCopy(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 18,
        height: 18,
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8.333 1.667a2.5 2.5 0 0 0-2.5 2.5v1.666H7.5V4.167c0-.46.373-.834.833-.834h7.5c.46 0 .833.373.833.834v7.5c0 .46-.373.833-.833.833h-1.667v1.667h1.667a2.5 2.5 0 0 0 2.5-2.5v-7.5a2.5 2.5 0 0 0-2.5-2.5h-7.5Z",
        fill: "currentColor"
    })), _path2 || (_path2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1.667 8.333a2.5 2.5 0 0 1 2.5-2.5h7.5a2.5 2.5 0 0 1 2.5 2.5v7.5a2.5 2.5 0 0 1-2.5 2.5h-7.5a2.5 2.5 0 0 1-2.5-2.5v-7.5Zm2.5-.833a.833.833 0 0 0-.833.833v7.5c0 .46.373.834.833.834h7.5c.46 0 .833-.373.833-.834v-7.5a.833.833 0 0 0-.833-.833h-7.5Z",
        fill: "currentColor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/externalLink.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgExternalLink)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgExternalLink = function SvgExternalLink(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 12,
        height: 12,
        viewBox: "0 0 12 12",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7.333 1.333a.667.667 0 1 1 0-1.333h4c.368 0 .667.298.667.667v4a.667.667 0 0 1-1.333 0v-2.39L5.138 7.804a.667.667 0 1 1-.943-.943l5.529-5.529h-2.39ZM2 2.667a.667.667 0 0 0-.667.666V10c0 .368.299.667.667.667h6.667A.667.667 0 0 0 9.333 10V7.333a.667.667 0 0 1 1.334 0V10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3.333a2 2 0 0 1 2-2h2.667a.667.667 0 0 1 0 1.334H2Z",
        fill: "currentColor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/spinner.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgSpinner)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _circle, _g;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgSpinner = function SvgSpinner(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("circle", {
        cx: 12,
        cy: 12,
        r: 11,
        stroke: "currentColor",
        strokeWidth: 2,
        style: {
            opacity: 0.1
        }
    }), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("mask", {
        id: "spinner_svg__a",
        style: {
            maskType: "alpha"
        },
        maskUnits: "userSpaceOnUse",
        x: 0,
        y: 0,
        width: 24,
        height: 24
    }, _circle || (_circle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("circle", {
        cx: 12,
        cy: 12,
        r: 11,
        stroke: "currentColor",
        strokeWidth: 2
    }))), _g || (_g = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("g", {
        mask: "url(#spinner_svg__a)"
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fill: "currentColor",
        d: "M12-16.5h27v27H12z"
    }))));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/utils/hooks/useMediaQuery/useMediaQuery.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useMediaQuery": (()=>useMediaQuery)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
// This hook is based on https://usehooks-ts.com/react-hook/use-media-query
const useMediaQuery = (query)=>{
    const getMatches = (query)=>{
        // Prevents SSR issues
        if (typeof window !== 'undefined') {
            return window.matchMedia(query).matches;
        }
        return false;
    };
    const [matches, setMatches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(getMatches(query));
    const handleChange = ()=>setMatches(getMatches(query));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const matchMedia = window.matchMedia(query);
        // Triggered at the first client-side load and if query changes
        handleChange();
        matchMedia.addEventListener('change', handleChange);
        return ()=>{
            matchMedia.removeEventListener('change', handleChange);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        query
    ]);
    return matches;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/wallet-connect-logo.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgWalletConnectLogo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgWalletConnectLogo = function SvgWalletConnectLogo(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 17,
        height: 12,
        viewBox: "0 0 17 12",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M3.84 2.345c2.573-3.127 6.747-3.127 9.32 0l.31.376a.463.463 0 0 1 0 .566l-1.06 1.287a.145.145 0 0 1-.232 0l-.427-.518c-1.795-2.18-4.707-2.18-6.502 0l-.457.555a.145.145 0 0 1-.233 0L3.5 3.324a.463.463 0 0 1 0-.566l.34-.413Zm11.512 2.661.943 1.146a.463.463 0 0 1 0 .566l-4.252 5.165a.29.29 0 0 1-.466 0L8.558 8.217a.073.073 0 0 0-.116 0l-3.018 3.666a.29.29 0 0 1-.466 0L.705 6.718a.463.463 0 0 1 0-.566l.943-1.146a.29.29 0 0 1 .466 0l3.018 3.666c.032.04.085.04.117 0l3.018-3.666a.29.29 0 0 1 .466 0l3.018 3.666c.033.04.085.04.117 0l3.018-3.666a.29.29 0 0 1 .466 0Z",
        fill: "currentColor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/utils/functions/shortenWalletAddress/shortenWalletAddress.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "shortenWalletAddress": (()=>shortenWalletAddress)
});
'use client';
// These are constant to ensure we keep a consistent length for cropped
// wallet addresses throughout the app.
const before = 4;
const after = 4;
// While it would be useful to export this function, we need to ensure the wallet lengths
// follow a standard. Therefore, we export the functions with the specific lengths.
const shortenWalletAddress = (walletAddress)=>{
    if (!walletAddress) return '';
    if (walletAddress.length <= before + after) return walletAddress;
    return walletAddress.replace(walletAddress.substring(before, Number(walletAddress.length) - after), '...');
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/utils/functions/shortenEmail/shortenEmail.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "shortenEmail": (()=>shortenEmail)
});
'use client';
const DEFAULT_BREAKPOINT = 12;
const DEFAULT_CUT_END = 4;
const DEFAULT_CUT_START = 4;
const shortenString = (str, start, end)=>str.replace(str.substring(start, end), '...');
const shortenEmail = (email, options)=>{
    if (!email) return '';
    const breakpoint = (options === null || options === void 0 ? void 0 : options.breakpoint) || DEFAULT_BREAKPOINT;
    const cutStart = (options === null || options === void 0 ? void 0 : options.cutStart) || DEFAULT_CUT_START;
    const cutEnd = (options === null || options === void 0 ? void 0 : options.cutEnd) || DEFAULT_CUT_END;
    let [username, domain] = email.split('@');
    const shouldShortenUsername = (username === null || username === void 0 ? void 0 : username.length) > breakpoint;
    if (shouldShortenUsername) {
        username = shortenString(username, cutStart, username.length - cutEnd);
    }
    const shouldShortenDomain = (domain === null || domain === void 0 ? void 0 : domain.length) > breakpoint;
    if (shouldShortenDomain) {
        domain = shortenString(domain, cutStart, domain.length - cutEnd);
    }
    return `${username}@${domain}`;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/chevron-down.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgChevronDown)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgChevronDown = function SvgChevronDown(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2.862 5.529c.26-.26.682-.26.943 0L8 9.724l4.195-4.195a.667.667 0 1 1 .943.943L8.47 11.138a.667.667 0 0 1-.943 0L2.862 6.472a.667.667 0 0 1 0-.943Z",
        fill: "#7B7D86"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/add.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgAdd)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgAdd = function SvgAdd(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8 2c.368 0 .667.298.667.667v4.666h4.666a.667.667 0 1 1 0 1.334H8.667v4.666a.667.667 0 1 1-1.334 0V8.667H2.667a.667.667 0 0 1 0-1.334h4.666V2.667C7.333 2.298 7.632 2 8 2Z",
        fill: "currentColor",
        fillOpacity: 0.4
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/chevron-left.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgChevronLeft)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgChevronLeft = function SvgChevronLeft(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M13.09 3.577a.833.833 0 0 1 0 1.179L7.844 10l5.244 5.244a.833.833 0 0 1-1.178 1.179l-5.834-5.834a.833.833 0 0 1 0-1.178l5.834-5.834a.833.833 0 0 1 1.178 0Z",
        fill: "currentcolor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/footer-info-icon.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgFooterInfoIcon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgFooterInfoIcon = function SvgFooterInfoIcon(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M10 3.333a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334ZM1.667 10a8.333 8.333 0 1 1 16.666 0 8.333 8.333 0 0 1-16.666 0Zm7.5-3.333c0-.46.373-.834.833-.834h.008a.833.833 0 1 1 0 1.667H10a.833.833 0 0 1-.833-.833ZM8.333 10c0-.46.374-.833.834-.833H10c.46 0 .833.373.833.833v2.5a.833.833 0 1 1 0 1.667H10a.833.833 0 0 1-.833-.834v-2.5A.833.833 0 0 1 8.333 10Z",
        fill: "currentcolor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/switch-toggle.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgSwitchToggle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _g;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgSwitchToggle = function SvgSwitchToggle(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 11,
        height: 14,
        viewBox: "0 0 11 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _g || (_g = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("g", {
        fill: "#7B7D86"
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M6.417 10.102v-8.89c.012-.12.022-.3.224-.496a.782.782 0 0 1 1.08 0l3.056 2.955a.722.722 0 0 1 0 1.044.782.782 0 0 1-1.08 0L7.944 3.022v7.08a.752.752 0 0 1-.764.739.752.752 0 0 1-.764-.739ZM4.583 3.898v8.89c-.012.12-.022.3-.224.496a.782.782 0 0 1-1.08 0L.223 10.329a.722.722 0 0 1 0-1.044.782.782 0 0 1 1.08 0l1.752 1.693v-7.08c0-.408.342-.739.764-.739s.764.33.764.739Z"
    }))));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/tooltip-arrow.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgTooltipArrow)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgTooltipArrow = function SvgTooltipArrow(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 8,
        height: 4,
        viewBox: "0 0 8 4",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M4 3.75 7.031 0H.97L4 3.75Z",
        fill: "currentColor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/utils/functions/debounce/debounce.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "debounce": (()=>debounce)
});
'use client';
const debounce = (callback, timeout)=>{
    let timeoutId;
    const onTimeoutTick = ()=>{
        callback();
    };
    const debouncedFn = ()=>{
        clearTimeout(timeoutId);
        timeoutId = window.setTimeout(onTimeoutTick, timeout);
    };
    return debouncedFn;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/wallet-illustration.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgWalletIllustration)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _circle, _circle2, _circle3, _path, _path2;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgWalletIllustration = function SvgWalletIllustration(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 116,
        height: 112,
        viewBox: "0 0 116 112",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _circle || (_circle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("circle", {
        cx: 25.5,
        cy: 39.5,
        r: 10.5,
        fill: "#D6E4FF"
    })), _circle2 || (_circle2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("circle", {
        cx: 36.5,
        cy: 78.5,
        r: 18.5,
        fill: "#E5EEFF"
    })), _circle3 || (_circle3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("circle", {
        cx: 81,
        cy: 43,
        r: 15,
        fill: "#D6E4FF"
    })), _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "m29.113 48.714 48.646-5.195-1.027-9.609a2.489 2.489 0 0 0-2.739-2.21L28.6 43.914l.513 4.8Z",
        fill: "#4779FF"
    })), _path2 || (_path2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "m28.616 44.067 53.199-5.681a2.9 2.9 0 0 1 3.191 2.576l3.355 31.414a2.9 2.9 0 0 1-2.576 3.191L35.47 80.94a2.9 2.9 0 0 1-3.191-2.576l-3.663-34.297Z",
        fill: "#A2BDFF"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/framed-linear-gradient.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgFramedLinearGradient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _circle, _defs;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgFramedLinearGradient = function SvgFramedLinearGradient(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 228,
        height: 112,
        viewBox: "0 0 228 112",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _circle || (_circle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("circle", {
        cx: 114,
        cy: 114,
        r: 114,
        fill: "url(#framed-linear-gradient_svg__a)",
        fillOpacity: 0.12
    })), _defs || (_defs = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("defs", null, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("linearGradient", {
        id: "framed-linear-gradient_svg__a",
        x1: 114,
        y1: 0,
        x2: 114,
        y2: 93.5,
        gradientUnits: "userSpaceOnUse"
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("stop", {
        stopColor: "#4779FF"
    }), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("stop", {
        offset: 1,
        stopColor: "#4779FF",
        stopOpacity: 0
    })))));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/arrow-left.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgArrowLeft)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgArrowLeft = function SvgArrowLeft(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M10.707 4.293a1 1 0 0 1 0 1.414L5.414 11H21a1 1 0 1 1 0 2H5.414l5.293 5.293a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.414 0Z",
        fill: "currentColor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/authenticator.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgAuthenticator)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgAuthenticator = function SvgAuthenticator(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M21.75 8.25a6 6 0 1 0-12 0 6 6 0 0 0 12 0Zm-3 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0Zm-9.37 3.892a7.512 7.512 0 0 0 2.005 2.237l-2.83 2.83 2.102 2.104-2.121 2.12-2.103-2.102-2.062 2.062L2.25 19.27l7.13-7.13Z",
        fill: "#ABACB2"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/three-dots.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgThreeDots)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgThreeDots = function SvgThreeDots(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8 2a1.333 1.333 0 1 1 0 2.667A1.333 1.333 0 0 1 8 2Zm0 4.667a1.333 1.333 0 1 1 0 2.666 1.333 1.333 0 0 1 0-2.666Zm0 4.666A1.333 1.333 0 1 1 8 14a1.333 1.333 0 0 1 0-2.667Z",
        fill: "currentColor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/utils/functions/parseToken/parseToken.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "parseToken": (()=>parseToken)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/logger.js [app-ssr] (ecmascript)");
'use client';
;
const parseToken = (token)=>{
    var _a;
    if (!token) return undefined;
    try {
        const base64 = (_a = token.split('.')[1]) === null || _a === void 0 ? void 0 : _a.replace(/-/g, '+').replace(/_/g, '/');
        if (!base64) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].error('Failed to parse token to base64 payload');
            return undefined;
        }
        const decodedBase64 = atob(base64);
        const jsonPayload = decodeURIComponent(decodedBase64.split('').map((c)=>`%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`).join(''));
        return JSON.parse(jsonPayload);
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].error('Failed to parse token', {
            error: error instanceof Error ? error.message : String(error)
        });
        return undefined;
    }
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/utils/functions/detectBrowser/detectBrowser.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "detectBrowserName": (()=>detectBrowserName)
});
'use client';
const detectBrowserName = (customUserAgent)=>{
    const userAgent = customUserAgent || navigator.userAgent;
    if (userAgent.match(/brave/i)) {
        return 'brave';
    } else if (userAgent.match(/edg/i)) {
        return 'edge';
    } else if (userAgent.match(/chrome|chromium|crios/i)) {
        return 'chrome';
    } else if (userAgent.match(/firefox|fxios/i)) {
        return 'firefox';
    } else if (userAgent.match(/safari/i)) {
        return 'safari';
    }
    return undefined;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/utils/functions/usingSessionKeys/usingSessionKeys.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "usingSessionKey": (()=>usingSessionKey)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-connector-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3._7679fe86d42f6979f41d87c8de2f235e/node_modules/@dynamic-labs/wallet-connector-core/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$isSessionKeyCompatible$2f$isSessionKeyCompatibleWalletConnector$2f$isSessionKeyCompatibleWalletConnector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-connector-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3._7679fe86d42f6979f41d87c8de2f235e/node_modules/@dynamic-labs/wallet-connector-core/src/utils/isSessionKeyCompatible/isSessionKeyCompatibleWalletConnector/isSessionKeyCompatibleWalletConnector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$isAccountAbstractionConnector$2f$isAccountAbstractionConnector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-connector-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3._7679fe86d42f6979f41d87c8de2f235e/node_modules/@dynamic-labs/wallet-connector-core/src/utils/isAccountAbstractionConnector/isAccountAbstractionConnector.js [app-ssr] (ecmascript)");
'use client';
;
const usingSessionKey = (walletConnector)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$isSessionKeyCompatible$2f$isSessionKeyCompatibleWalletConnector$2f$isSessionKeyCompatibleWalletConnector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSessionKeyCompatibleWalletConnector"])(walletConnector) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$isAccountAbstractionConnector$2f$isAccountAbstractionConnector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAccountAbstractionConnector"])(walletConnector) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$isSessionKeyCompatible$2f$isSessionKeyCompatibleWalletConnector$2f$isSessionKeyCompatibleWalletConnector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSessionKeyCompatibleWalletConnector"])(walletConnector.getEOAConnector());
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/tooltip.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgTooltip)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgTooltip = function SvgTooltip(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm10-5a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1Zm-1 9a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1Z",
        fill: "#ABACB2"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/link.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgLink)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgLink = function SvgLink(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 17,
        height: 16,
        viewBox: "0 0 17 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M11.833 4.667H9.167V6h2.666c1.1 0 2 .9 2 2s-.9 2-2 2H9.167v1.333h2.666a3.335 3.335 0 0 0 0-6.666Zm-4 5.333H5.167c-1.1 0-2-.9-2-2s.9-2 2-2h2.666V4.667H5.167a3.335 3.335 0 0 0 0 6.666h2.666V10Zm-2-2.667h5.334v1.334H5.833V7.333Z",
        fill: "currentColor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/send.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgSend)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _g;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgSend = function SvgSend(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _g || (_g = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("g", {
        clipPath: "url(#send_svg__clip0_6894_96)"
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "m3.846 9.3.03-.01 14.64-5.728c.199-.078.399-.156.567-.205.156-.046.465-.126.794-.02.374.123.664.413.786.787.107.33.027.638-.019.794-.049.168-.127.368-.205.567L14.702 20.15c-.08.204-.16.408-.239.568-.073.147-.226.436-.537.614a1.277 1.277 0 0 1-1.136.072c-.323-.137-.496-.405-.58-.542-.09-.149-.184-.342-.278-.535l-2.693-5.52-5.546-2.724-.027-.014c-.193-.094-.385-.189-.533-.28-.137-.082-.403-.256-.54-.578a1.277 1.277 0 0 1 .074-1.136c.178-.31.466-.463.612-.536.16-.079.363-.158.567-.238Zm.972 1.425 4.88 2.396 2.912-2.913a.848.848 0 0 1 1.2-.017.848.848 0 0 1-.017 1.2l-2.898 2.898 2.384 4.888 5.433-13.888-13.894 5.436Z",
        fill: "currentColor",
        fillOpacity: 0.4
    }))));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/stroke.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgStroke)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgStroke = function SvgStroke(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8.293 19.707a1 1 0 0 1 0-1.414L14.586 12 8.293 5.707a1 1 0 0 1 1.414-1.414l7 7a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414 0Z",
        fill: "currentColor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/check-blue.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgCheckBlue)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgCheckBlue = function SvgCheckBlue(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 65,
        height: 64,
        viewBox: "0 0 65 64",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M32.5 64c17.673 0 32-14.327 32-32 0-17.673-14.327-32-32-32C14.827 0 .5 14.327.5 32c0 17.673 14.327 32 32 32Zm12.845-39.155a1.667 1.667 0 1 0-2.357-2.357L27.5 37.976l-5.488-5.488a1.667 1.667 0 1 0-2.357 2.357l6.666 6.667c.651.65 1.707.65 2.357 0l16.667-16.667Z",
        fill: "#4779FF"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/eye-outline.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgEyeOutline)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgEyeOutline = function SvgEyeOutline(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3.512 12a9.004 9.004 0 0 0 16.977 0 9.004 9.004 0 0 0-16.977 0Zm-2.008-.3C2.906 7.238 7.074 4 12 4c4.927 0 9.095 3.238 10.497 7.7a1 1 0 0 1 0 .6C21.095 16.762 16.927 20 12 20c-4.927 0-9.095-3.238-10.497-7.7a1 1 0 0 1 0-.6ZM12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z",
        fill: "#ABACB2"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/key.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgKey)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgKey = function SvgKey(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 18,
        height: 18,
        viewBox: "0 0 18 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.25 3a3.751 3.751 0 0 0-3.59 4.84.743.743 0 0 1-.187.746L3 13.062V15h1.5v-.75a.75.75 0 0 1 .75-.75H6v-.75a.75.75 0 0 1 .75-.75h1.188l1.476-1.473a.743.743 0 0 1 .746-.187A3.751 3.751 0 1 0 11.25 3ZM6 15v.75a.75.75 0 0 1-.75.75H3A1.5 1.5 0 0 1 1.5 15v-1.938c0-.398.156-.78.438-1.062l4.171-4.172A5.251 5.251 0 0 1 11.25 1.5a5.251 5.251 0 0 1 5.251 5.25 5.251 5.251 0 0 1-6.328 5.14l-1.39 1.391a.75.75 0 0 1-.532.219H7.5v.75a.75.75 0 0 1-.75.75Zm4.5-9.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25.75.75 0 0 1-1.5 0 .75.75 0 0 0-.75-.75.75.75 0 0 1-.75-.75Zm0 0",
        fill: "currentColor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/unlink.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgUnlink)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgUnlink = function SvgUnlink(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 18,
        height: 18,
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M15.935 4.066a2.5 2.5 0 0 0-3.536 0l-.916.916a.833.833 0 0 1-1.179-1.179l.917-.916a4.167 4.167 0 0 1 5.892 5.893l-1.81 1.81-1.178-1.18 1.81-1.809a2.5 2.5 0 0 0 0-3.535Zm-10.06 6.523L4.698 9.411l-1.81 1.81a4.167 4.167 0 1 0 5.893 5.892l.918-.918a.833.833 0 0 0-1.179-1.178l-.918.917A2.5 2.5 0 0 1 4.066 12.4l1.81-1.81Zm-.488-6.38A.833.833 0 1 0 4.21 5.387l10.017 10.017a.833.833 0 1 0 1.179-1.178L5.387 4.209Z",
        fill: "currentColor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/wallet-v2.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgWalletV2)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgWalletV2 = function SvgWalletV2(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        xmlns: "http://www.w3.org/2000/svg",
        width: 25,
        height: 24,
        viewBox: "0 0 25 24",
        fill: "none",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5.5 4a1 1 0 0 0 0 2h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-14a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h12a1 1 0 1 1 0 2h-12Zm-1 3.83V19a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-14c-.35 0-.687-.06-1-.17Zm11 6.17a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z",
        fill: "#ABACB2"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/embedded-wallet-icon.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgEmbeddedWalletIcon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgEmbeddedWalletIcon = function SvgEmbeddedWalletIcon(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 64,
        height: 64,
        viewBox: "0 0 64 64",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M32 64c17.673 0 32-14.327 32-32C64 14.327 49.673 0 32 0 14.327 0 0 14.327 0 32c0 17.673 14.327 32 32 32Zm8.334-45.333a3.333 3.333 0 0 0-3.333-3.334h-15a6.669 6.669 0 0 0-6.56 5.473 6.649 6.649 0 0 1 4.893-2.14h20ZM42 22a6.667 6.667 0 0 1 6.667 6.667V42A6.667 6.667 0 0 1 42 48.667H22A6.667 6.667 0 0 1 15.334 42V28.667A6.667 6.667 0 0 1 22 22h20Z",
        fill: "#4779FF",
        "data-testid": "wallet-icon-embedded"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/smart-wallet.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgSmartWallet)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path, _path2;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgSmartWallet = function SvgSmartWallet(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 32,
        height: 32,
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16Zm4.667-23.467c0-1.03-.836-1.866-1.867-1.866h-8.4A3.734 3.734 0 0 0 6.727 9.73a3.723 3.723 0 0 1 2.74-1.198h11.2ZM21.6 10.4a3.733 3.733 0 0 1 3.733 3.733V21.6a3.733 3.733 0 0 1-3.733 3.733H10.4A3.733 3.733 0 0 1 6.667 21.6v-7.467A3.733 3.733 0 0 1 10.4 10.4h11.2Z",
        fill: "#4779FF"
    })), _path2 || (_path2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M17.455 12.667c.2 0 .38.123.452.31l.572 1.486c.145.379.191.488.254.576a.97.97 0 0 0 .228.228c.088.063.197.109.576.255l1.486.57a.485.485 0 0 1 0 .906l-1.486.571c-.379.146-.488.192-.576.255a.97.97 0 0 0-.228.228c-.063.088-.109.197-.254.576l-.572 1.485a.485.485 0 0 1-.905 0l-.571-1.485c-.146-.379-.192-.488-.254-.576a.97.97 0 0 0-.229-.229c-.088-.062-.197-.108-.576-.254l-1.485-.571a.485.485 0 0 1 0-.905l1.485-.572c.38-.145.488-.191.576-.254a.97.97 0 0 0 .229-.228c.062-.088.108-.197.254-.576l.571-1.486a.485.485 0 0 1 .453-.31ZM13.333 18c.184 0 .352.104.434.268l.38.76c.137.275.18.353.23.42.05.065.11.124.176.175.066.051.144.093.418.23l.761.38a.485.485 0 0 1 0 .867l-.76.38c-.274.138-.353.18-.42.23a.968.968 0 0 0-.175.176c-.05.066-.093.145-.23.419l-.38.76a.485.485 0 0 1-.867 0l-.38-.76c-.138-.274-.18-.353-.23-.419a.968.968 0 0 0-.176-.176c-.066-.05-.145-.092-.419-.23l-.76-.38a.485.485 0 0 1 0-.867l.76-.38c.274-.137.353-.179.419-.23a.968.968 0 0 0 .176-.176c.05-.066.092-.144.23-.418l.38-.761a.485.485 0 0 1 .433-.268Z",
        fill: "#4779FF"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/utils/functions/capitalize/capitalize.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "capitalize": (()=>capitalize)
});
'use client';
const capitalize = (value)=>{
    var _a;
    return ((_a = value[0]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) + value.slice(1).toLowerCase();
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/check.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgCheck)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgCheck = function SvgCheck(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 14,
        height: 14,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.496 3.67a.583.583 0 0 1 0 .826l-5.834 5.833a.583.583 0 0 1-.824 0L2.504 7.996a.583.583 0 1 1 .825-.825L5.25 9.09l5.42-5.42a.583.583 0 0 1 .826 0Z",
        fill: "currentColor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/reload-icon.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgReloadIcon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgReloadIcon = function SvgReloadIcon(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M4.955 12.806a7.373 7.373 0 1 0 9.14-7.07l.35.358a.922.922 0 1 1-1.32 1.287l-1.82-1.866a.922.922 0 0 1 .015-1.303l1.866-1.82a.922.922 0 0 1 1.287 1.32l-.182.177a9.217 9.217 0 1 1-6.548 1.01.922.922 0 0 1 .918 1.598 7.37 7.37 0 0 0-3.706 6.31Z",
        fill: "#ABACB2"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/arrow-down.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgArrowDown)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgArrowDown = function SvgArrowDown(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6.862 9.529c.26-.26.682-.26.943 0L12 13.724l4.195-4.195a.667.667 0 1 1 .943.942l-4.667 4.667a.667.667 0 0 1-.942 0l-4.667-4.667a.667.667 0 0 1 0-.942Z",
        fill: "currentColor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/utils/hooks/useThrottle/useThrottle.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useThrottle": (()=>useThrottle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
/* eslint-disable @typescript-eslint/no-explicit-any */ /**
 * useThrottle hook to throttle a callback function.
 *
 * @param callback - The callback function to be throttled. It must return void.
 * @param delay - The time in milliseconds to wait before the next call.
 * @returns A throttled version of the callback function.
 */ const useThrottle = (callback, delay)=>{
    const isThrottled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const savedCallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(callback);
    // Remember the latest callback if it changes.
    savedCallback.current = callback;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((...args)=>{
        if (!isThrottled.current) {
            savedCallback.current(...args);
            isThrottled.current = true;
            // Set the throttle off after the delay
            setTimeout(()=>isThrottled.current = false, delay);
        }
    }, [
        delay
    ]);
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/utils/functions/splitCamelCase/splitCamelCase.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "splitCamelCase": (()=>splitCamelCase)
});
'use client';
// Source: https://stackoverflow.com/questions/18379254/regex-to-split-camel-case
const splitCamelCase = (text)=>text.replace(/([a-z])([A-Z])/g, '$1 $2');
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/at.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgAt)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgAt = function SvgAt(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 4a8 8 0 1 0 4 14.928 1 1 0 1 1 1 1.732A9.96 9.96 0 0 1 11.942 22C6.446 21.968 2 17.503 2 12 2 6.477 6.477 2 12 2s10 4.477 10 10v1.5a3.5 3.5 0 0 1-6.396 1.966A5 5 0 1 1 17 12v1.5a1.5 1.5 0 0 0 3 0V12a8 8 0 0 0-8-8Zm3 8a3 3 0 1 0-6 0 3 3 0 0 0 6 0Z",
        fill: "currentColor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/justified-text.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgJustifiedText)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgJustifiedText = function SvgJustifiedText(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm0 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm0 6a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Z",
        fill: "currentColor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/location.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgLocation)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgLocation = function SvgLocation(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 32,
        height: 32,
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M22.6 8.067a9.333 9.333 0 0 0-13.2 13.2l5.658 5.657c.52.52 1.363.52 1.884 0l5.658-5.658a9.333 9.333 0 0 0 0-13.199ZM7.515 6.181c4.686-4.686 12.284-4.686 16.97 0 4.687 4.687 4.687 12.285 0 16.97l-4.67 4.67c-.041.042.019-.018-.023.024l-.964.964a3.998 3.998 0 0 1-5.655 0l-5.658-5.657c-4.687-4.686-4.687-12.284 0-16.97ZM16 12a2.667 2.667 0 1 0 0 5.333A2.667 2.667 0 0 0 16 12Zm-5.333 2.667a5.333 5.333 0 1 1 10.666 0 5.333 5.333 0 0 1-10.666 0Z",
        fill: "currentColor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/mail.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgMail)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgMail = function SvgMail(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2 7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7Zm2 2.869V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9.869l-6.336 4.223a3 3 0 0 1-3.328 0L4 9.87Zm16-2.404-7.445 4.963a1 1 0 0 1-1.11 0L4 7.465V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v.465Z",
        fill: "currentColor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/phone.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgPhone)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgPhone = function SvgPhone(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5 5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V5Zm3-1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H8Zm3 14a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1Z",
        fill: "currentColor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/size-labels.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgSizeLabels)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgSizeLabels = function SvgSizeLabels(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2 5a3 3 0 0 1 3-3h4a3 3 0 0 1 3 2.93 3 3 0 0 1 4.192.05l2.829 2.828A3 3 0 0 1 19.069 12 3 3 0 0 1 22 15v4a3 3 0 0 1-3 3H7a5 5 0 0 1-5-5V5Zm9.071 15H19a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-1.929l-6 6Zm4.878-7.707h.001l1.657-1.657a1 1 0 0 0 0-1.414l-2.829-2.829a1 1 0 0 0-1.414 0L12 7.757v8.486l3.95-3.95ZM9.123 19.12A2.99 2.99 0 0 0 10 17V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a3 3 0 0 0 5.123 2.12ZM6 17a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Z",
        fill: "currentColor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/user-card.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgUserCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgUserCard = function SvgUserCard(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9 5a3 3 0 1 1 6 0h4a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h4Zm.17 2H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-4.17a3.001 3.001 0 0 1-5.66 0ZM12 4a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0V5a1 1 0 0 0-1-1Zm-3 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm2.4 2.8a3 3 0 1 0-4.8 0 4.01 4.01 0 0 0-1.372 1.867 1 1 0 1 0 1.885.666 2.001 2.001 0 0 1 3.773 0 1 1 0 1 0 1.886-.666A4.01 4.01 0 0 0 11.4 13.8ZM14 11a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1Z",
        fill: "currentColor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/user.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgUser)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgUser = function SvgUser(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 4a8 8 0 0 0-6.598 12.526A14.943 14.943 0 0 1 12 15c2.366 0 4.606.548 6.598 1.526A8 8 0 0 0 12 4Zm7.654 14.436A9.96 9.96 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.96 9.96 0 0 0 2.37 6.464A9.978 9.978 0 0 0 12 22a9.978 9.978 0 0 0 7.654-3.564ZM17.2 18.08A12.954 12.954 0 0 0 12 17c-1.85 0-3.607.386-5.199 1.08A7.968 7.968 0 0 0 12 20c1.985 0 3.8-.723 5.199-1.92ZM12 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z",
        fill: "currentColor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/work-suitcase.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgWorkSuitcase)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgWorkSuitcase = function SvgWorkSuitcase(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 4a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h2V4ZM5 7a1 1 0 0 0-1 1v4.57A22.95 22.95 0 0 0 12 14c2.815 0 5.51-.505 8-1.43V8a1 1 0 0 0-1-1H5Zm10-2H9V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1Zm5 9.692A24.971 24.971 0 0 1 12 16c-2.796 0-5.487-.46-8-1.308V18a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3.308ZM11 12a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1Z",
        fill: "currentColor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/utils/functions/isUserLinkingWallet/isUserLinkingWallet.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isUserLinkingWallet": (()=>isUserLinkingWallet)
});
'use client';
const isUserLinkingWallet = (user, view, isMockedSDK)=>(user === null || user === void 0 ? void 0 : user.verifiedCredentials) !== undefined && view === 'multi-wallet-wallet-list' && // Mocked SDK is used in the dashboard and the user is
    // the actual user that the user logged in to the dashboard
    !isMockedSDK;
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/question-mark.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgQuestionMark)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path, _path2;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgQuestionMark = function SvgQuestionMark(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M10 3.25a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM1.667 10a8.333 8.333 0 1 1 16.666 0 8.333 8.333 0 0 1-16.666 0Z",
        fill: "currentcolor"
    })), _path2 || (_path2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M10.31 7.044a1.784 1.784 0 0 0-1.133.192 1.513 1.513 0 0 0-.699.783.792.792 0 0 1-1.481-.559c.26-.689.768-1.257 1.42-1.613a3.368 3.368 0 0 1 2.144-.367 3.262 3.262 0 0 1 1.908 1.023c.496.55.775 1.254.774 1.99 0 1.201-.948 1.972-1.587 2.369a6.63 6.63 0 0 1-1.354.635l-.028.01-.008.002h-.003l-.002.001-.235-.756.235.756A.792.792 0 0 1 9.789 10h.001m0 0 .014-.005.06-.021a5.054 5.054 0 0 0 .956-.456c.575-.357.84-.717.84-1.024 0-.332-.125-.66-.367-.928a1.68 1.68 0 0 0-.982-.521M9.265 13.77c0-.438.355-.792.792-.792h.01a.792.792 0 1 1 0 1.584h-.01a.792.792 0 0 1-.792-.792Z",
        fill: "currentcolor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/footer-eye-icon.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgFooterEyeIcon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgFooterEyeIcon = function SvgFooterEyeIcon(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9.995 4.167c3.965 0 6.643 2.655 7.937 4.675a2.14 2.14 0 0 1 0 2.316c-1.294 2.02-3.972 4.675-7.937 4.675-3.965 0-6.643-2.655-7.937-4.675a2.14 2.14 0 0 1 0-2.316c1.294-2.02 3.972-4.675 7.937-4.675ZM14.16 10a4.167 4.167 0 1 1-8.333 0 4.167 4.167 0 0 1 8.333 0Zm-4.12 2.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
        fill: "currentColor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/footer-gas-icon.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgFooterGasIcon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgFooterGasIcon = function SvgFooterGasIcon(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9.667 18.333a2 2 0 0 0 2-2V3.667a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v12.666a2 2 0 0 0 2 2h6ZM9 8.333a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H4.333a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1H9ZM17.5 5.833c.46 0 .833.373.833.834v7.5H17.5h.833V14.186a1.201 1.201 0 0 1-.005.113 2.881 2.881 0 0 1-.29 1.075c-.155.307-.398.64-.779.893-.386.258-.863.4-1.426.4-.562 0-1.04-.142-1.425-.4a2.295 2.295 0 0 1-.778-.893 2.878 2.878 0 0 1-.296-1.16v-.045l.833-.001h-.834V9.185l-.001-.011a.2.2 0 0 0-.015-.051v-.001s.005.008.016.02V7.5c.354 0 .675.091.944.27.264.176.43.404.53.607A1.856 1.856 0 0 1 15 9.13v.035c0 .001 0 .002-.832.002H15v4.992l.001.02a1.228 1.228 0 0 0 .12.448c.054.11.123.194.211.253.083.055.23.12.501.12s.419-.065.502-.12a.633.633 0 0 0 .211-.253 1.218 1.218 0 0 0 .12-.468V6.667c0-.46.374-.834.834-.834ZM13.378 9.17h.002-.002Z",
        fill: "currentColor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/footer-key-icon.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgFooterKeyIcon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgFooterKeyIcon = function SvgFooterKeyIcon(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M18.125 6.875a5 5 0 1 0-10 0 5 5 0 0 0 10 0Zm-2.5 0a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Zm-7.809 3.243a6.258 6.258 0 0 0 1.671 1.865L7.13 14.34l1.752 1.753-1.768 1.767-1.752-1.752-1.718 1.718-1.768-1.767 5.941-5.942Z",
        fill: "currentColor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/puzzle.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgPuzzle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgPuzzle = function SvgPuzzle(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M16.044 20.998a.693.693 0 0 0 .7-.68V16.59c.239-2.01 1.121-1.413 2.16-.791 2.51 1.502 4.177-2.45 2.148-3.67-1.592-.956-2.281.689-3.448.52-.45-.067-.763-.54-.862-1.261V8.693a.692.692 0 0 0-.7-.68h-3.21c-2.65-.327-.297-1.755-.297-3.083.001-1.066-.99-1.93-2.214-1.93-1.222 0-2.344.864-2.344 1.93 0 1.253 2.435 2.756-.253 3.083H3.7a.692.692 0 0 0-.699.68v2.688c.205 1.146 1.001 1.411 2.021.655.344-.256.924-.554 1.344-.554 1.094 0 1.982.965 1.982 2.154 0 1.19-.887 2.416-1.982 2.416-.39 0-.755-.123-1.063-.338 0 .091-1.913-1.674-2.302.486v4.121c0 .375.315.68.699.68L10.16 21c.085-.393-.191-.844-.45-1.234-2.04-3.075 5.895-3.382 3.855.095-.1.172-.2.338-.277.5-.098.202-.162.45-.149.639l2.905-.002Z",
        fill: "currentColor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/utils/functions/getWalletListItemLabel/getWalletListItemLabel.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getWalletListItemLabel": (()=>getWalletListItemLabel)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$StorageService$2f$StorageService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/StorageService/StorageService.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$localStorage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/localStorage.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/colors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$values$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/values.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$walletListBuilder$2f$utils$2f$isWalletGroup$2f$isWalletGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/walletListBuilder/utils/isWalletGroup/isWalletGroup.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$getWalletGroupType$2f$getWalletGroupType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getWalletGroupType/getWalletGroupType.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const getLastUsedWalletKey = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$StorageService$2f$StorageService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StorageService"].getItem(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$localStorage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LAST_USED_WALLET"]);
const getWalletGroupLabel = (walletGroup, recommendedWallets)=>{
    const nestedRecommendedWalletSetting = recommendedWallets === null || recommendedWallets === void 0 ? void 0 : recommendedWallets.find((recommendedWallet)=>walletGroup.groupedWallets.some((walletOption)=>recommendedWallet.walletKey === walletOption.walletConnector.key));
    if (nestedRecommendedWalletSetting) {
        return {
            isRecommended: true,
            label: nestedRecommendedWalletSetting.label || 'Recommended'
        };
    }
    const lastUsedWalletKey = getLastUsedWalletKey();
    const hasNestedLastUsedWallet = walletGroup.groupedWallets.some((walletOption)=>walletOption.walletConnector.key === lastUsedWalletKey);
    if (hasNestedLastUsedWallet) {
        return {
            label: 'Last used'
        };
    }
    const hasNestedInstalledWallets = walletGroup.groupedWallets.some((walletOption)=>walletOption.isInstalledOnBrowser);
    if (hasNestedInstalledWallets) {
        return {
            label: 'Installed'
        };
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$getWalletGroupType$2f$getWalletGroupType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWalletGroupType"])(walletGroup) === 'multi-chain') {
        return {
            label: 'Multichain'
        };
    }
    return undefined;
};
const getWalletLabel = (walletOption, recommendedWallets)=>{
    const lastUsedWalletKey = getLastUsedWalletKey();
    const { key: walletKey } = walletOption.walletConnector;
    const recommendedWalletSetting = recommendedWallets === null || recommendedWallets === void 0 ? void 0 : recommendedWallets.find((wallet)=>wallet.walletKey === walletKey);
    if (recommendedWalletSetting) return {
        isRecommended: true,
        label: recommendedWalletSetting.label || 'Recommended'
    };
    const isLastUsedWallet = walletKey === lastUsedWalletKey;
    if (isLastUsedWallet) return {
        label: 'Last used'
    };
    if (walletOption.isInstalledOnBrowser) return {
        label: 'Installed'
    };
    return undefined;
};
const getWalletListItemLabel = ({ wallet, recommendedWallets })=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$walletListBuilder$2f$utils$2f$isWalletGroup$2f$isWalletGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isWalletGroup"])(wallet)) {
        return getWalletGroupLabel(wallet, recommendedWallets);
    }
    return getWalletLabel(wallet, recommendedWallets);
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/user-account-2.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgUserAccount2)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgUserAccount2 = function SvgUserAccount2(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 60,
        height: 50,
        viewBox: "0 0 60 50",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M51.931 49.48A29.223 29.223 0 0 0 59.333 30C59.333 13.8 46.2.667 30 .667S.667 13.8.667 30A29.224 29.224 0 0 0 8.07 49.483c5.52-6.63 16.005-9.007 22.387-9.007 6.383 0 15.962 1.903 21.473 9.004ZM19 22.667c0-6.076 4.925-11 11-11s11 4.924 11 11c0 6.075-4.925 11-11 11s-11-4.925-11-11Z",
        fill: "#4779FF"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/utils/hooks/useEffectOnceCondition/useEffectOnceCondition.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useEffectOnceCondition": (()=>useEffectOnceCondition)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
/**
 * Hook that runs an effect only once based on a condition.
 *
 * @param {Function} effect - The effect callback function to run.
 * @param {boolean} condition - The condition that determines whether the effect should run.
 */ const useEffectOnceCondition = (effect, condition)=>{
    const hasRun = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const effectRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(effect);
    effectRef.current = effect;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (condition && !hasRun.current) {
            effectRef.current();
            hasRun.current = true;
        }
    }, [
        condition
    ]);
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/setup-password-terms-illustration.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgSetupPasswordTermsIllustration)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _g, _defs;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgSetupPasswordTermsIllustration = function SvgSetupPasswordTermsIllustration(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 317,
        height: 85,
        viewBox: "0 0 317 85",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _g || (_g = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("g", {
        clipPath: "url(#setup-password-terms-illustration_svg__a)"
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("circle", {
        cx: 158.41,
        cy: 110.114,
        r: 110.114,
        fill: "url(#setup-password-terms-illustration_svg__b)",
        fillOpacity: 0.12
    }), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M230.37 18.352a3.864 3.864 0 0 1 3.864 3.863v7.728a3.863 3.863 0 0 1-3.864 3.863h-38.636a3.864 3.864 0 0 1-3.864-3.863v-7.728a3.864 3.864 0 0 1 3.864-3.863h38.636Zm-32.002 5.152c-1.449 0-2.625 1.153-2.625 2.576 0 1.422 1.176 2.575 2.625 2.575s2.624-1.153 2.624-2.575c0-1.423-1.175-2.576-2.624-2.576Zm8.747 0c-1.449 0-2.624 1.153-2.624 2.576 0 1.422 1.175 2.575 2.624 2.575 1.45 0 2.625-1.153 2.625-2.575 0-1.423-1.175-2.576-2.625-2.576Zm8.749 0c-1.449 0-2.624 1.153-2.624 2.576 0 1.422 1.175 2.575 2.624 2.575 1.45 0 2.625-1.153 2.625-2.575 0-1.423-1.175-2.576-2.625-2.576Zm8.746 0c-1.449 0-2.624 1.154-2.624 2.576l.014.263c.134 1.298 1.252 2.312 2.61 2.312 1.359 0 2.477-1.014 2.612-2.313l.013-.262c0-1.423-1.175-2.576-2.625-2.576Zm0 .965c.933 0 1.659.739 1.66 1.61-.001.873-.727 1.61-1.66 1.61-.932 0-1.658-.738-1.658-1.61 0-.871.726-1.61 1.658-1.61ZM97.995 25.218c8.244-2.209 16.719 2.683 18.928 10.927 2.209 8.245-2.684 16.72-10.928 18.929-8.245 2.209-16.719-2.684-18.928-10.929-2.209-8.244 2.684-16.718 10.928-18.927Zm1.839 6.007a3.9 3.9 0 0 0-2.757 4.776l.504 1.882a6.498 6.498 0 1 0 7.532-2.018l-.504-1.882a3.9 3.9 0 0 0-4.58-2.805l-.195.047Zm2.145 7.925a1.69 1.69 0 0 1 1.532 2.919l.355 1.325a.725.725 0 1 1-1.4.375l-.355-1.325a1.69 1.69 0 0 1-.132-3.294Zm-1.395-5.126a1.002 1.002 0 0 1 1.226.709l.188.701a6.583 6.583 0 0 0-1.935.519l-.188-.702a1.003 1.003 0 0 1 .709-1.227ZM165.171 39.28a4.508 4.508 0 0 1 4.508 4.507h-27.045a8.992 8.992 0 0 0-6.618 2.893c.762-4.209 4.444-7.4 8.871-7.4h20.284ZM180.947 57.31a9.015 9.015 0 0 0-9.015-9.015h-27.046a9.015 9.015 0 0 0-9.015 9.015v18.03a9.015 9.015 0 0 0 9.015 9.015h27.046a9.015 9.015 0 0 0 9.015-9.015V57.31Z",
        fill: "#4779FF"
    }), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M155.879 66.785a7.284 7.284 0 0 0 1.936 2.16l-2.734 2.734 2.031 2.031-2.049 2.05-2.031-2.032-1.991 1.992-2.049-2.049 6.887-6.886Zm6.153-9.555a5.796 5.796 0 1 1-.001 11.591 5.796 5.796 0 0 1 .001-11.591Zm0 2.898a2.899 2.899 0 0 0 0 5.795 2.899 2.899 0 0 0 0-5.796Z",
        fill: "#fff"
    }))), _defs || (_defs = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("defs", null, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("linearGradient", {
        id: "setup-password-terms-illustration_svg__b",
        x1: 158.41,
        y1: 0,
        x2: 158.41,
        y2: 90.313,
        gradientUnits: "userSpaceOnUse"
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("stop", {
        stopColor: "#4779FF"
    }), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("stop", {
        offset: 1,
        stopColor: "#4779FF",
        stopOpacity: 0
    })), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("clipPath", {
        id: "setup-password-terms-illustration_svg__a"
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("rect", {
        width: 316.818,
        height: 85,
        rx: 11.591,
        fill: "#fff"
    })))));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/download.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgDownload)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgDownload = function SvgDownload(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 21,
        height: 20,
        viewBox: "0 0 21 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M4.417 14.167c0 .92.746 1.666 1.666 1.666h8.334c.92 0 1.666-.746 1.666-1.666v-.834a.833.833 0 0 1 1.667 0v.834a3.333 3.333 0 0 1-3.333 3.333H6.083a3.333 3.333 0 0 1-3.333-3.333v-.834a.833.833 0 0 1 1.667 0v.834Zm1.91-4.756a.833.833 0 0 1 1.179 0l1.91 1.91V3.333a.833.833 0 0 1 1.667 0v7.989l1.911-1.911a.833.833 0 1 1 1.179 1.178l-3.334 3.334a.833.833 0 0 1-1.178 0l-3.334-3.334a.833.833 0 0 1 0-1.178Z",
        fill: "#ABACB2"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/caution-triangle.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgCautionTriangle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgCautionTriangle = function SvgCautionTriangle(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 17,
        height: 16,
        viewBox: "0 0 17 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6.335 1.917c.962-1.667 3.368-1.667 4.33 0l5.774 10c.962 1.666-.241 3.75-2.166 3.75H2.726c-1.924 0-3.127-2.084-2.165-3.75l5.774-10Zm2.887.833a.833.833 0 0 0-1.444 0l-5.773 10A.833.833 0 0 0 2.726 14h11.547a.833.833 0 0 0 .722-1.25l-5.773-10ZM8.5 5.667c.46 0 .833.373.833.833v1.667a.833.833 0 0 1-1.666 0V6.5c0-.46.373-.833.833-.833ZM7.667 11.5c0-.46.373-.833.833-.833h.008a.833.833 0 1 1 0 1.666H8.5a.833.833 0 0 1-.833-.833Z",
        fill: "#DD8500"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/filled-question-mark.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgFilledQuestionMark)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgFilledQuestionMark = function SvgFilledQuestionMark(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 65,
        height: 64,
        viewBox: "0 0 65 64",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M32.5 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32-17.673 0-32-14.327-32-32 0-17.673 14.327-32 32-32Zm.11 42.446c-1.561 0-2.828 1.243-2.828 2.777 0 1.533 1.267 2.777 2.828 2.777h.038c1.562 0 2.828-1.244 2.828-2.777 0-1.534-1.266-2.777-2.828-2.777h-.038Zm1.8-26.297a12.215 12.215 0 0 0-7.658 1.286c-2.326 1.25-4.14 3.242-5.07 5.659-.55 1.434.187 3.036 1.648 3.578 1.461.541 3.092-.183 3.644-1.617.428-1.116 1.294-2.103 2.495-2.75a6.458 6.458 0 0 1 3.783-.708l-1.595 10.396-.003.001c-1.488.457-2.319 2.012-1.856 3.475.463 1.464 2.048 2.283 3.539 1.828l-.839-2.652c.8 2.525.84 2.644.843 2.65l.004-.001.01-.003.032-.01.098-.031a23.601 23.601 0 0 0 1.448-.535c.906-.368 2.136-.93 3.388-1.693 2.28-1.392 5.665-4.095 5.665-8.304.004-2.583-.993-5.054-2.763-6.98-1.767-1.921-4.188-3.176-6.814-3.589Zm-.894 5.484c1.405.22 2.642.884 3.51 1.827.862.938 1.307 2.092 1.305 3.252v.005c0 1.075-.945 2.335-2.995 3.587-.913.557-1.848.988-2.566 1.28a17.913 17.913 0 0 1-1.064.393l1.81-10.344Z",
        fill: "currentColor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/exclamation.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgExclamation)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgExclamation = function SvgExclamation(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 7,
        height: 32,
        viewBox: "0 0 7 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M6.4 3.2a3.2 3.2 0 0 0-6.4 0V16a3.2 3.2 0 0 0 6.4 0V3.2ZM3.2 25.6a3.2 3.2 0 0 0 0 6.4h.032a3.2 3.2 0 0 0 0-6.4H3.2Z",
        fill: "#F9F9FB"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/backup-waas.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgBackupWaas)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgBackupWaas = function SvgBackupWaas(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 64,
        height: 64,
        viewBox: "0 0 64 64",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm10.325 34.635a.89.89 0 0 0-1.258-.016l-1.8 1.757a.89.89 0 0 0-.016 1.258l1.758 1.801a.89.89 0 0 0 1.273-1.242l-.338-.346a7.119 7.119 0 1 1-5.245.735.89.89 0 1 0-.886-1.543 8.897 8.897 0 1 0 6.321-.975l.176-.171a.89.89 0 0 0 .015-1.258ZM19.95 15A4.95 4.95 0 0 0 15 19.95v23.1A4.95 4.95 0 0 0 19.95 48h8.11a12.481 12.481 0 0 1-.383-3.081c0-6.002 4.245-11.014 9.897-12.193a2.47 2.47 0 0 1 2.183-.257A12.405 12.405 0 0 1 48 35.262V26.55a4.95 4.95 0 0 0-4.95-4.95h-23.1a1.65 1.65 0 1 1 0-3.3h19.8a1.65 1.65 0 1 0 0-3.3h-19.8Z",
        fill: "#4779FF"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/pencil-alt-icon.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgPencilAltIcon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgPencilAltIcon = function SvgPencilAltIcon(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 17,
        height: 16,
        viewBox: "0 0 17 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M13.638 2.862a.667.667 0 0 0-.943 0L7.167 8.391v.943h.942l5.53-5.53a.667.667 0 0 0 0-.942Zm-1.886-.943a2 2 0 1 1 2.829 2.829l-5.724 5.724a.667.667 0 0 1-.471.195H6.5A.667.667 0 0 1 5.833 10V8.115c0-.177.07-.347.196-.472l5.723-5.724ZM4.5 4a.667.667 0 0 0-.667.667V12c0 .368.299.667.667.667h7.333A.667.667 0 0 0 12.5 12V8.667a.667.667 0 0 1 1.333 0V12a2 2 0 0 1-2 2H4.5a2 2 0 0 1-2-2V4.667a2 2 0 0 1 2-2h3.333a.667.667 0 0 1 0 1.333H4.5Z",
        fill: "currentColor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/check-circle.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgCheckCircle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgCheckCircle = function SvgCheckCircle(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8 2.666a5.333 5.333 0 1 0 0 10.667A5.333 5.333 0 0 0 8 2.666ZM1.333 8a6.667 6.667 0 1 1 13.333 0A6.667 6.667 0 0 1 1.333 8Zm9.138-1.805c.26.26.26.682 0 .943L7.804 9.804a.667.667 0 0 1-.942 0L5.528 8.471a.667.667 0 1 1 .943-.943l.862.862 2.195-2.195c.26-.26.683-.26.943 0Z",
        fill: "currentColor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/sign-in-with-email.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgSignInWithEmail)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _circle, _path, _path2;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgSignInWithEmail = function SvgSignInWithEmail(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 64,
        height: 64,
        viewBox: "0 0 64 64",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _circle || (_circle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("circle", {
        cx: 32,
        cy: 32,
        r: 32,
        fill: "currentColor"
    })), _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M51 29.333a1.333 1.333 0 0 0-1.333 0l-17.334 9.8L15 29.333a1.333 1.333 0 0 0-2 1.16V42a4 4 0 0 0 4 4h30.667a4 4 0 0 0 4-4V30.5A1.333 1.333 0 0 0 51 29.333Z",
        fill: "#fff"
    })), _path2 || (_path2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M47.667 18H17a4 4 0 0 0-4 4v2.5a1.334 1.334 0 0 0 .667 1.16l18 10.167a1.333 1.333 0 0 0 1.333 0L51 25.66a1.334 1.334 0 0 0 .667-1.16V22a4 4 0 0 0-4-4Z",
        fill: "#fff"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/sign-in-with-phone.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgSignInWithPhone)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgSignInWithPhone = function SvgSignInWithPhone(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 64,
        height: 64,
        viewBox: "0 0 64 64",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M32 64c17.673 0 32-14.327 32-32C64 14.327 49.673 0 32 0 14.327 0 0 14.327 0 32c0 17.673 14.327 32 32 32Zm-7.91-50h14.892a4.092 4.092 0 0 1 4.09 4.09v27.82a4.092 4.092 0 0 1-4.09 4.09H24.09A4.092 4.092 0 0 1 20 45.91V18.09A4.092 4.092 0 0 1 24.09 14Zm4.992 31.91a2.451 2.451 0 0 0 2.454 2.454 2.451 2.451 0 0 0 2.455-2.455 2.451 2.451 0 0 0-2.455-2.454 2.451 2.451 0 0 0-2.454 2.454Zm-5.81-4.092H39.8V18.91H23.273v22.91Z",
        fill: "#4779FF"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/wallet-outline.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgWalletOutline)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgWalletOutline = function SvgWalletOutline(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5.272 3.708c.177-.027.364-.041.561-.041h7.5a3.088 3.088 0 0 1 .539.036c.906.106 1.613.486 2.096 1.045.483.56.782 1.348.782 2.335v.459h-.983a2.406 2.406 0 0 0-1.73.72 2.424 2.424 0 0 0-.717 1.955c.114 1.342 1.317 2.241 2.547 2.241h.883v.459c0 1.08-.357 1.92-.926 2.49-.57.57-1.411.926-2.49.926h-7.5c-1.08 0-1.922-.356-2.491-.926-.57-.57-.926-1.41-.926-2.49V7.083c0-.98.293-1.763.77-2.322.474-.556 1.17-.938 2.065-1.05l.02-.003Zm12.978 8.551v.658c0 1.42-.477 2.662-1.366 3.55-.888.89-2.13 1.366-3.55 1.366h-7.5c-1.421 0-2.663-.476-3.552-1.365-.889-.889-1.365-2.13-1.365-3.551V7.083c0-1.286.39-2.428 1.128-3.295.738-.865 1.784-1.408 3.01-1.564a5.19 5.19 0 0 1 .778-.057h7.5c.227 0 .476.008.73.048 1.235.148 2.293.687 3.04 1.553.75.869 1.147 2.019 1.147 3.315v.657c.495.272.834.794.834 1.402v1.716c0 .608-.338 1.13-.834 1.401Zm-2.581-3.213a.903.903 0 0 0-.565.269l-.013.013a.924.924 0 0 0-.278.75l.001.01c.038.455.484.87 1.053.87h1.614c.069-.006.102-.057.102-.1V9.142c0-.043-.033-.094-.102-.1h-1.714a1.046 1.046 0 0 0-.098.004ZM5.083 7.5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75Z",
        fill: "currentColor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/access-blocked.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgAccessBlocked)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _g, _defs;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgAccessBlocked = function SvgAccessBlocked(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 327,
        height: 112,
        viewBox: "0 0 327 112",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _g || (_g = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("g", {
        clipPath: "url(#access-blocked_svg__a)"
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("circle", {
        cx: 164,
        cy: 114,
        r: 114,
        fill: "url(#access-blocked_svg__b)",
        fillOpacity: 0.12
    }), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("circle", {
        cx: 220.352,
        cy: 29.265,
        r: 15.729,
        transform: "rotate(15 220.352 29.265)",
        fill: "#4779FF"
    }), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M223.594 23.62a1.573 1.573 0 1 0-3.038-.815l-1.629 6.078a1.573 1.573 0 1 0 3.039.814l1.628-6.077ZM219.225 33.848a1.573 1.573 0 0 0-.814 3.039l.015.004a1.574 1.574 0 0 0 .814-3.039l-.015-.004Z",
        fill: "#F9F9FB"
    }), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("g", {
        clipPath: "url(#access-blocked_svg__c)",
        fill: "#4779FF"
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M101.972 36.04a8 8 0 0 1 9.798 5.657l-2.897.777a5 5 0 0 0-9.66 2.588l-2.897.776a8 8 0 0 1 5.656-9.797ZM118.498 47.487a5.333 5.333 0 0 0-6.532-3.772l-14.81 3.969a5.333 5.333 0 0 0-3.772 6.532l1.898 7.084a5.333 5.333 0 0 0 6.532 3.77l14.811-3.968a5.334 5.334 0 0 0 3.771-6.532l-1.898-7.083Z"
    })), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M164.943 32.064a6.216 6.216 0 0 0-1.779 0c-.681.098-1.313.337-1.816.527l-.135.05-16.68 6.256-.407.152c-1.922.718-3.61 1.348-4.909 2.493a9.336 9.336 0 0 0-2.553 3.683c-.616 1.62-.613 3.421-.61 5.473V66.01c0 8.793 4.783 16.125 9.953 21.51 5.204 5.422 11.159 9.252 14.307 11.089l.128.075c.574.337 1.32.775 2.307.987a6.619 6.619 0 0 0 2.609 0c.987-.212 1.733-.65 2.307-.987l.128-.075c3.148-1.837 9.103-5.667 14.307-11.088 5.17-5.386 9.953-12.718 9.953-21.511V50.698c.003-2.052.006-3.854-.611-5.473a9.333 9.333 0 0 0-2.552-3.683c-1.3-1.145-2.987-1.775-4.909-2.493l-.407-.152-16.68-6.255-.135-.05c-.503-.19-1.136-.43-1.816-.528Zm-3.344 46.703c-1.172-2.936-2.026-7.051-2.236-11.797h9.298c-.21 4.746-1.064 8.861-2.236 11.797-.683 1.709-1.393 2.816-1.971 3.428-.198.21-.346.328-.442.393a2.703 2.703 0 0 1-.442-.392c-.578-.613-1.288-1.72-1.971-3.429Zm0-28.13c-1.208 3.025-2.078 7.301-2.253 12.228h9.332c-.175-4.927-1.045-9.203-2.253-12.227-.683-1.709-1.393-2.816-1.971-3.429a2.703 2.703 0 0 0-.442-.392 2.703 2.703 0 0 0-.442.392c-.578.613-1.288 1.72-1.971 3.429Zm-15.106 12.228h8.746c.21-6.38 1.506-11.989 3.423-15.668-6.57 2.184-11.466 8.283-12.169 15.668Zm.046 4.105h8.716c.253 6.201 1.533 11.642 3.407 15.238-6.442-2.141-11.274-8.046-12.123-15.238Zm34.946 0h-8.716c-.253 6.201-1.533 11.642-3.407 15.238 6.442-2.141 11.275-8.046 12.123-15.238Zm.133-2.267v.065-.131.066Zm-8.833-1.838h8.746c-.703-7.385-5.599-13.484-12.169-15.668 1.917 3.68 3.213 9.289 3.423 15.668Zm-8.909 19.795c0-.001.007-.004.023-.008a.077.077 0 0 1-.023.008Zm.25-.008a.064.064 0 0 1 .022.008s-.007-.001-.022-.008Zm.022-35.907c0 .001-.007.004-.023.008a.077.077 0 0 1 .023-.008Zm-.249.008c-.016-.004-.023-.007-.023-.008 0 0 .007.001.023.008Z",
        fill: "#4779FF"
    }))), _defs || (_defs = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("defs", null, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("clipPath", {
        id: "access-blocked_svg__a"
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("rect", {
        width: 327,
        height: 112,
        rx: 12,
        fill: "#fff"
    })), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("clipPath", {
        id: "access-blocked_svg__c"
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fill: "#fff",
        transform: "rotate(-15 188.268 -307.493)",
        d: "M0 0h32v32H0z"
    })), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("linearGradient", {
        id: "access-blocked_svg__b",
        x1: 164,
        y1: 0,
        x2: 164,
        y2: 93.5,
        gradientUnits: "userSpaceOnUse"
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("stop", {
        stopColor: "#4779FF"
    }), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("stop", {
        offset: 1,
        stopColor: "#4779FF",
        stopOpacity: 0
    })))));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/arrow-right-background.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgArrowRightBackground)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _rect, _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgArrowRightBackground = function SvgArrowRightBackground(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 25,
        height: 24,
        viewBox: "0 0 25 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _rect || (_rect = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("rect", {
        x: 0.5,
        width: 24,
        height: 24,
        rx: 12,
        fill: "var(--icon-background, var(--dynamic-hover))"
    })), _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M13.22 7.47a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H7.5a.75.75 0 0 1 0-1.5h8.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z",
        fill: "var(--icon-arrow, var(--dynamic-text-secondary))"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/sparkles.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgSparkles)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgSparkles = function SvgSparkles(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 32,
        height: 32,
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6.667 2.667C7.403 2.667 8 3.264 8 4v1.333h1.333a1.333 1.333 0 0 1 0 2.667H8v1.333a1.333 1.333 0 1 1-2.667 0V8H4a1.333 1.333 0 0 1 0-2.667h1.333V4c0-.736.597-1.333 1.334-1.333Zm10.666 0c.574 0 1.084.367 1.265.911l2.847 8.54 7.023 2.634a1.333 1.333 0 0 1 0 2.496l-7.023 2.634-2.847 8.54a1.333 1.333 0 0 1-2.53 0l-2.846-8.54-7.023-2.634a1.333 1.333 0 0 1 0-2.496l7.023-2.634 2.846-8.54a1.333 1.333 0 0 1 1.265-.911Zm0 5.55-1.782 5.348c-.128.381-.42.685-.797.826L10.464 16l4.29 1.609c.377.141.67.445.797.826l1.782 5.349 1.783-5.348c.127-.382.42-.686.797-.827L24.203 16l-4.29-1.609a1.333 1.333 0 0 1-.797-.826l-1.783-5.349ZM8 21.332c.736 0 1.333.597 1.333 1.334V24h1.334a1.333 1.333 0 0 1 0 2.667H9.333V28a1.333 1.333 0 1 1-2.666 0v-1.333H5.333a1.333 1.333 0 0 1 0-2.667h1.334v-1.333c0-.737.597-1.334 1.333-1.334Z",
        fill: "currentColor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/backup.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgBackup)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgBackup = function SvgBackup(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        xmlns: "http://www.w3.org/2000/svg",
        width: 65,
        height: 64,
        viewBox: "0 0 65 64",
        fill: "none",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M32.5 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32-17.673 0-32-14.327-32-32 0-17.673 14.327-32 32-32Zm10.325 34.635a.89.89 0 0 0-1.258-.016l-1.8 1.757a.89.89 0 0 0-.016 1.258l1.758 1.801a.89.89 0 0 0 1.273-1.242l-.338-.346a7.119 7.119 0 1 1-5.245.735.89.89 0 1 0-.886-1.543 8.897 8.897 0 1 0 6.321-.975l.176-.171a.89.89 0 0 0 .015-1.258ZM20.45 15a4.95 4.95 0 0 0-4.95 4.95v23.1A4.95 4.95 0 0 0 20.45 48h8.11a12.481 12.481 0 0 1-.383-3.081c0-6.004 4.247-11.016 9.901-12.194a2.462 2.462 0 0 1 2.172-.256 12.403 12.403 0 0 1 8.25 2.795V26.55a4.95 4.95 0 0 0-4.95-4.95h-23.1a1.65 1.65 0 1 1 0-3.3h19.8a1.65 1.65 0 1 0 0-3.3h-19.8Z",
        fill: "currentColor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/warning-red.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgWarningRed)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _circle;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgWarningRed = function SvgWarningRed(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 64,
        height: 64,
        viewBox: "0 0 64 64",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _circle || (_circle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("circle", {
        cx: 32,
        cy: 32,
        r: 32,
        fill: "#FF4646"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/check-connection.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgCheckConnection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgCheckConnection = function SvgCheckConnection(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 65,
        height: 64,
        viewBox: "0 0 65 64",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M32.5 64c17.673 0 32-14.327 32-32 0-17.673-14.327-32-32-32C14.827 0 .5 14.327.5 32c0 17.673 14.327 32 32 32Zm12.845-39.155a1.667 1.667 0 1 0-2.357-2.357L27.5 37.976l-5.488-5.488a1.667 1.667 0 1 0-2.357 2.357l6.666 6.667c.651.65 1.707.65 2.357 0l16.667-16.667Z",
        fill: "#4779FF"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/security-alert.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgSecurityAlert)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgSecurityAlert = function SvgSecurityAlert(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 55,
        height: 64,
        viewBox: "0 0 55 64",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M26.626.06c.58-.08 1.168-.08 1.747 0 .668.093 1.29.318 1.784.497l.133.05L46.672 6.51l.4.143c1.887.677 3.544 1.272 4.821 2.354a8.812 8.812 0 0 1 2.507 3.475c.605 1.529.602 3.23.6 5.166v14.454c0 8.3-4.698 15.221-9.775 20.305-5.111 5.118-10.96 8.733-14.053 10.467l-.125.071c-.564.319-1.297.732-2.265.932a6.764 6.764 0 0 1-2.564 0c-.969-.2-1.701-.614-2.265-.932l-.125-.071c-3.093-1.734-8.94-5.35-14.052-10.467C4.698 47.324 0 40.404 0 32.103V17.65c-.003-1.936-.005-3.637.6-5.166a8.813 8.813 0 0 1 2.507-3.475C4.383 7.926 6.04 7.33 7.928 6.654l.4-.143L24.71.606l.133-.049C25.337.378 25.96.153 26.626.06Zm1.394 41.074c-1.696 0-3.07 1.321-3.07 2.95 0 1.63 1.374 2.953 3.07 2.953h.031c1.696 0 3.07-1.322 3.07-2.952s-1.374-2.951-3.07-2.951h-.031Zm0-23.61c-1.696 0-3.07 1.32-3.07 2.95V32.28c0 1.63 1.374 2.951 3.07 2.951 1.696 0 3.071-1.321 3.071-2.951V20.474c0-1.63-1.375-2.95-3.071-2.95Z",
        fill: "#4779FF"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/delete-embedded-hero.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgDeleteEmbeddedHero)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _circle, _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgDeleteEmbeddedHero = function SvgDeleteEmbeddedHero(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 64,
        height: 64,
        viewBox: "0 0 64 64",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _circle || (_circle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("circle", {
        cx: 32,
        cy: 32,
        r: 32,
        fill: "#FF4646"
    })), _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M35.4 19.2a3.2 3.2 0 0 0-6.4 0V32a3.2 3.2 0 0 0 6.4 0V19.2ZM32.2 41.6a3.2 3.2 0 0 0 0 6.4h.032a3.2 3.2 0 0 0 0-6.4H32.2Z",
        fill: "#F9F9FB"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/export-embedded-hero.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgExportEmbeddedHero)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _g, _defs;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgExportEmbeddedHero = function SvgExportEmbeddedHero(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 329,
        height: 88,
        viewBox: "0 0 329 88",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _g || (_g = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("g", {
        clipPath: "url(#export-embedded-hero_svg__a)"
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("circle", {
        cx: 164.5,
        cy: 114,
        r: 114,
        fill: "url(#export-embedded-hero_svg__b)",
        fillOpacity: 0.12
    }), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M195 23a4 4 0 0 1 4-4h40a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-40a4 4 0 0 1-4-4v-8Zm13.585 4c0 1.473-1.217 2.667-2.717 2.667-1.501 0-2.717-1.194-2.717-2.667 0-1.473 1.216-2.667 2.717-2.667 1.5 0 2.717 1.194 2.717 2.667Zm6.34 2.667c1.5 0 2.717-1.194 2.717-2.667 0-1.473-1.217-2.667-2.717-2.667-1.501 0-2.717 1.194-2.717 2.667 0 1.473 1.216 2.667 2.717 2.667ZM226.698 27c0 1.473-1.216 2.667-2.717 2.667-1.5 0-2.717-1.194-2.717-2.667 0-1.473 1.217-2.667 2.717-2.667 1.501 0 2.717 1.194 2.717 2.667Zm8.057 0c0 .903-.751 1.667-1.717 1.667-.966 0-1.717-.764-1.717-1.667s.751-1.667 1.717-1.667c.966 0 1.717.764 1.717 1.667Zm1 0c0 1.473-1.217 2.667-2.717 2.667-1.501 0-2.717-1.194-2.717-2.667 0-1.473 1.216-2.667 2.717-2.667 1.5 0 2.717 1.194 2.717 2.667ZM110.237 57.018c8.535-2.287 13.601-11.06 11.314-19.596-2.287-8.535-11.061-13.6-19.596-11.313-8.536 2.287-13.601 11.06-11.314 19.596 2.287 8.535 11.061 13.6 19.596 11.313Zm-8.712-17.797-.522-1.949a4.037 4.037 0 0 1 7.798-2.09l.522 1.95a6.727 6.727 0 1 1-7.798 2.09Zm4.573-2.535-.195-.727a1.036 1.036 0 1 0-2.002.537l.194.726a6.81 6.81 0 0 1 2.003-.536Zm1.567 6.87a1.749 1.749 0 0 0-1.586-3.023 1.75 1.75 0 0 0 .137 3.412l.368 1.37a.75.75 0 1 0 1.448-.388l-.367-1.37Z",
        fill: "#4779FF"
    }), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M171.501 40.667a4.666 4.666 0 0 1 4.667 4.666h-28a9.306 9.306 0 0 0-6.85 2.995c.788-4.357 4.6-7.661 9.183-7.661h21ZM187.834 59.333A9.334 9.334 0 0 0 178.5 50h-28a9.333 9.333 0 0 0-9.333 9.333V78a9.333 9.333 0 0 0 9.333 9.333h28A9.334 9.334 0 0 0 187.834 78V59.333Z",
        fill: "#4779FF"
    }), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M174.25 65.25a6 6 0 1 0-12 0 6 6 0 0 0 12 0Zm-3 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0Zm-9.37 3.892a7.497 7.497 0 0 0 2.005 2.237l-2.831 2.83 2.103 2.103-2.121 2.122-2.103-2.103-2.062 2.062-2.121-2.121 7.13-7.13Z",
        fill: "#fff"
    }))), _defs || (_defs = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("defs", null, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("linearGradient", {
        id: "export-embedded-hero_svg__b",
        x1: 164.5,
        y1: 0,
        x2: 164.5,
        y2: 93.5,
        gradientUnits: "userSpaceOnUse"
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("stop", {
        stopColor: "#4779FF"
    }), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("stop", {
        offset: 1,
        stopColor: "#4779FF",
        stopOpacity: 0
    })), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("clipPath", {
        id: "export-embedded-hero_svg__a"
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("rect", {
        x: 0.5,
        width: 328,
        height: 88,
        rx: 12,
        fill: "#fff"
    })))));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/eye-off-icon.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgEyeOffIcon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgEyeOffIcon = function SvgEyeOffIcon(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        xmlns: "http://www.w3.org/2000/svg",
        width: 25,
        height: 24,
        viewBox: "0 0 25 24",
        fill: "none",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2.793 2.293a1 1 0 0 1 1.414 0l3.04 3.04A10.955 10.955 0 0 1 12.5 4c4.927 0 9.095 3.238 10.497 7.7a1 1 0 0 1 0 .6 11.014 11.014 0 0 1-3.552 5.231l2.762 2.762a1 1 0 0 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414Zm5.943 4.53 1.732 1.731a4 4 0 0 1 5.478 5.478l2.076 2.076A9.022 9.022 0 0 0 20.989 12 9.004 9.004 0 0 0 8.736 6.822Zm5.696 5.695a2 2 0 0 0-2.45-2.45l2.45 2.45ZM5.125 8.174a1 1 0 0 1 .194 1.4A8.975 8.975 0 0 0 4.012 12a9.004 9.004 0 0 0 10.177 5.842 1 1 0 0 1 .372 1.965c-.668.127-1.357.193-2.06.193-4.927 0-9.095-3.238-10.497-7.7a1 1 0 0 1 0-.6 10.97 10.97 0 0 1 1.72-3.332 1 1 0 0 1 1.4-.194Z",
        fill: "#ABACB2"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/info.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgInfo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgInfo = function SvgInfo(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 18,
        height: 18,
        viewBox: "0 0 18 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9 2.333a6.667 6.667 0 1 0 0 13.334A6.667 6.667 0 0 0 9 2.333ZM.667 9a8.333 8.333 0 1 1 16.666 0A8.333 8.333 0 0 1 .667 9Zm7.5-3.333c0-.46.373-.834.833-.834h.008a.833.833 0 0 1 0 1.667H9a.833.833 0 0 1-.833-.833ZM7.333 9c0-.46.373-.833.834-.833H9c.46 0 .833.373.833.833v2.5a.833.833 0 1 1 0 1.667H9a.833.833 0 0 1-.833-.834v-2.5A.833.833 0 0 1 7.333 9Z",
        fill: "#383C48"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/utils/functions/getBrowserIcon/getBrowserIcon.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "browserIconMap": (()=>browserIconMap),
    "getBrowserIcon": (()=>getBrowserIcon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$iconic$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$iconic$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+iconic@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/iconic/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$iconic$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$iconic$2f$src$2f$icons$2f$browsers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+iconic@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/iconic/src/icons/browsers/index.js [app-ssr] (ecmascript)");
'use client';
;
const browserIconMap = {
    brave: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$iconic$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$iconic$2f$src$2f$icons$2f$browsers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BraveIcon"],
    chrome: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$iconic$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$iconic$2f$src$2f$icons$2f$browsers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChromeIcon"],
    edge: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$iconic$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$iconic$2f$src$2f$icons$2f$browsers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EdgeIcon"],
    firefox: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$iconic$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$iconic$2f$src$2f$icons$2f$browsers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FirefoxIcon"],
    safari: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$iconic$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$iconic$2f$src$2f$icons$2f$browsers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SafariIcon"]
};
const getBrowserIcon = (name)=>browserIconMap[name];
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/blue-walletconnect.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgBlueWalletconnect)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _g, _defs;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgBlueWalletconnect = function SvgBlueWalletconnect(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 12,
        height: 12,
        viewBox: "0 0 12 12",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _g || (_g = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("g", {
        clipPath: "url(#blue-walletconnect_svg__a)"
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M6 12A6 6 0 1 0 6 0a6 6 0 0 0 0 12Z",
        fill: "#4084ED"
    }), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M3.343 4.286a3.761 3.761 0 0 1 5.314 0l.176.176a.186.186 0 0 1 0 .265l-.603.603a.096.096 0 0 1-.133 0l-.243-.244a2.624 2.624 0 0 0-3.708 0l-.26.26a.096.096 0 0 1-.132 0l-.606-.6a.186.186 0 0 1 0-.266l.195-.194Zm6.563 1.248.538.537a.185.185 0 0 1 0 .265L8.018 8.757a.187.187 0 0 1-.264 0L6.034 7.04a.047.047 0 0 0-.068 0l-1.72 1.718a.187.187 0 0 1-.264 0l-2.426-2.42a.186.186 0 0 1 0-.266l.538-.537a.187.187 0 0 1 .265 0l1.72 1.718a.047.047 0 0 0 .067 0l1.72-1.718a.187.187 0 0 1 .265 0l1.72 1.718a.047.047 0 0 0 .068 0l1.72-1.718a.19.19 0 0 1 .267 0Z",
        fill: "#fff"
    }))), _defs || (_defs = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("defs", null, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("clipPath", {
        id: "blue-walletconnect_svg__a"
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fill: "#fff",
        d: "M0 0h12v12H0z"
    })))));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/exclamation-circle.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgExclamationCircle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgExclamationCircle = function SvgExclamationCircle(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 17,
        height: 18,
        viewBox: "0 0 17 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8.5 2.333a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334ZM.167 9a8.333 8.333 0 1 1 16.666 0A8.333 8.333 0 0 1 .167 9ZM8.5 4.833c.46 0 .833.373.833.834V9a.833.833 0 1 1-1.667 0V5.667c0-.46.374-.834.834-.834Zm-.833 7.5c0-.46.373-.833.833-.833h.008a.833.833 0 0 1 0 1.667H8.5a.833.833 0 0 1-.833-.834Z",
        fill: "#FF4646"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/warning-orange.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgWarningOrange)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _circle;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgWarningOrange = function SvgWarningOrange(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 64,
        height: 64,
        viewBox: "0 0 64 64",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _circle || (_circle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("circle", {
        cx: 32,
        cy: 32,
        r: 32,
        fill: "#DD8500"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/face-id.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgFaceId)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgFaceId = function SvgFaceId(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M18.055 2.4A3.548 3.548 0 0 1 21.6 5.945v2.013a1.095 1.095 0 0 1-2.19 0V5.945c0-.747-.608-1.355-1.355-1.355h-2.012a1.095 1.095 0 1 1 0-2.19h2.012Zm-10.098 0a1.095 1.095 0 0 1 0 2.19H5.945c-.747 0-1.355.608-1.355 1.355v2.013a1.095 1.095 0 0 1-2.19 0V5.945A3.548 3.548 0 0 1 5.945 2.4h2.012Zm7.692 5.083c.6 0 1.086.486 1.086 1.086v1.347a1.086 1.086 0 1 1-2.172 0V8.57c0-.6.486-1.086 1.086-1.086Zm-4.121 0c.614 0 1.112.498 1.112 1.112v2.982h.008a1.113 1.113 0 0 1 0 2.226h-.386a1.849 1.849 0 0 1-1.847-1.848v-3.36c0-.614.498-1.112 1.113-1.112Zm-3.282 0c.6 0 1.086.486 1.086 1.086v1.347a1.086 1.086 0 0 1-2.172 0V8.57c0-.6.486-1.086 1.086-1.086Zm12.259 7.465c.605 0 1.095.49 1.095 1.095v2.012a3.548 3.548 0 0 1-3.545 3.545h-2.012a1.095 1.095 0 1 1 0-2.19h2.012c.747 0 1.355-.608 1.355-1.355v-2.012c0-.605.49-1.095 1.095-1.095Zm-17.01 0c.605 0 1.095.49 1.095 1.095v2.012c0 .747.608 1.355 1.355 1.355h2.012a1.095 1.095 0 0 1 0 2.19H5.945A3.548 3.548 0 0 1 2.4 18.055v-2.012c0-.605.49-1.095 1.095-1.095Zm5.365 1.337a.473.473 0 0 0 0 0l-.434.47a1.113 1.113 0 0 1 1.51-1.634c.563.52 1.296.806 2.064.806s1.5-.286 2.065-.807a1.113 1.113 0 0 1 1.51 1.634A5.255 5.255 0 0 1 12 18.153a5.255 5.255 0 0 1-3.574-1.397l.434-.47a4.615 4.615 0 0 1 0 0Zm5.947.28a4.694 4.694 0 0 1 0 0Z",
        fill: "currentColor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/dots-horizontal.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgDotsHorizontal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgDotsHorizontal = function SvgDotsHorizontal(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 21,
        height: 20,
        viewBox: "0 0 21 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2.7 10a1.667 1.667 0 1 1 3.333 0A1.667 1.667 0 0 1 2.7 10Zm5.833 0a1.667 1.667 0 1 1 3.334 0 1.667 1.667 0 0 1-3.334 0Zm5.834 0a1.667 1.667 0 1 1 3.333 0 1.667 1.667 0 0 1-3.333 0Z",
        fill: "currentColor",
        fillOpacity: 0.4
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/utils/functions/providerLabel/providerLabel.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "providerLabel": (()=>providerLabel)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$SocialSignInProviderEnum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/models/SocialSignInProviderEnum.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$utils$2f$functions$2f$capitalize$2f$capitalize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/utils/functions/capitalize/capitalize.js [app-ssr] (ecmascript)");
'use client';
;
;
const providerLabel = (provider)=>{
    if (!provider) {
        return undefined;
    }
    if (provider === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$SocialSignInProviderEnum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SocialSignInProviderEnum"].Twitter) {
        return 'X';
    }
    if (provider === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$SocialSignInProviderEnum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SocialSignInProviderEnum"].Coinbasesocial) {
        return 'Coinbase';
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$utils$2f$functions$2f$capitalize$2f$capitalize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["capitalize"])(provider);
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/double-arrow-right.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgDoubleArrowRight)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgDoubleArrowRight = function SvgDoubleArrowRight(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2.862 2.862c.26-.26.682-.26.943 0L8.47 7.529a.667.667 0 0 1 0 .942l-4.666 4.667a.667.667 0 0 1-.943-.943L7.057 8 2.862 3.805a.667.667 0 0 1 0-.943Zm5.333 0c.26-.26.683-.26.943 0l4.667 4.667c.26.26.26.682 0 .942l-4.667 4.667a.667.667 0 0 1-.943-.943L12.39 8 8.195 3.805a.667.667 0 0 1 0-.943Z",
        fill: "currentColor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/locked.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgLocked)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgLocked = function SvgLocked(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 65,
        height: 64,
        viewBox: "0 0 65 64",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M32.5 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32-17.673 0-32-14.327-32-32 0-17.673 14.327-32 32-32Zm.455 13a8.074 8.074 0 0 0-8.073 8.073v4.037A13.435 13.435 0 0 0 19.5 35.875c0 7.431 6.025 13.456 13.456 13.456 7.431 0 13.455-6.025 13.455-13.456 0-4.403-2.114-8.312-5.383-10.767v-4.035a8.073 8.073 0 0 0-7.657-8.062L32.955 13ZM33 30a3.5 3.5 0 0 1 1.5 6.663V39.5a1.5 1.5 0 0 1-3 0v-2.837A3.5 3.5 0 0 1 33 30Zm-.045-14a5.073 5.073 0 0 1 5.073 5.073v2.335a13.418 13.418 0 0 0-5.072-.99c-1.795 0-3.508.353-5.074.991v-2.336A5.074 5.074 0 0 1 32.955 16Z",
        fill: "#0A0B0C"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/mfa-recovery-icon.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgMfaRecoveryIcon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgMfaRecoveryIcon = function SvgMfaRecoveryIcon(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 65,
        height: 64,
        viewBox: "0 0 65 64",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M32.5 64c17.673 0 32-14.327 32-32 0-17.673-14.327-32-32-32C14.827 0 .5 14.327.5 32c0 17.673 14.327 32 32 32Zm-9.322-18.117a1.828 1.828 0 1 0 3.613.568l1.152-7.457h7.144l-1.1 6.89a1.828 1.828 0 1 0 3.612.567l1.153-7.457h3.504a1.691 1.691 0 0 0 0-3.383h-2.948l1.16-7.222h3.597a1.691 1.691 0 0 0 0-3.383h-3.087l1.1-6.89a1.829 1.829 0 1 0-3.612-.567l-1.153 7.457H30.17l1.1-6.89a1.828 1.828 0 1 0-3.613-.567l-1.152 7.457h-3.458a1.691 1.691 0 0 0 0 3.383h2.901l-1.16 7.222h-3.597a1.691 1.691 0 0 0 0 3.383h3.087l-1.1 6.89Zm12.42-10.272H28.5l1.16-7.222h7.097l-1.16 7.222Z",
        fill: "#4779FF"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/password-hero.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgPasswordHero)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgPasswordHero = function SvgPasswordHero(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 65,
        height: 64,
        viewBox: "0 0 65 64",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M32.5 64c17.673 0 32-14.327 32-32 0-17.673-14.327-32-32-32C14.827 0 .5 14.327.5 32c0 17.673 14.327 32 32 32Zm-7.618-38.89v-4.037a8.074 8.074 0 0 1 16.147 0v4.036a13.436 13.436 0 0 1 5.383 10.766c0 7.431-6.025 13.456-13.456 13.456-7.432 0-13.456-6.025-13.456-13.456 0-4.402 2.114-8.31 5.382-10.765Zm13.147-1.702v-2.335a5.074 5.074 0 0 0-10.147 0v2.336a13.416 13.416 0 0 1 5.074-.99c1.795 0 3.507.352 5.073.99ZM34.5 36.663a3.5 3.5 0 1 0-3 0V39.5a1.5 1.5 0 0 0 3 0v-2.837Z",
        fill: "#4779FF"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/passkey-intro2.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgPasskeyIntro2)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _g, _defs;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgPasskeyIntro2 = function SvgPasskeyIntro2(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 327,
        height: 112,
        viewBox: "0 0 327 112",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _g || (_g = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("g", {
        clipPath: "url(#passkey-intro2_svg__a)"
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("circle", {
        cx: 164,
        cy: 114,
        r: 114,
        fill: "url(#passkey-intro2_svg__b)",
        fillOpacity: 0.12
    }), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("g", {
        clipPath: "url(#passkey-intro2_svg__c)",
        fill: "#4779FF"
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M106.009 34.681a2.666 2.666 0 0 1 3.266 1.886l-15.454 4.141a5.319 5.319 0 0 0-3.339 2.666 5.335 5.335 0 0 1 3.936-5.587l11.591-3.106ZM117.785 42.57a5.333 5.333 0 0 0-6.532-3.772l-15.455 4.141a5.333 5.333 0 0 0-3.771 6.532l2.76 10.303a5.333 5.333 0 0 0 6.533 3.771l15.454-4.14a5.333 5.333 0 0 0 3.772-6.533l-2.761-10.303Z"
    })), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "m207.67 19.875-.767 2.862a9.86 9.86 0 0 0-5.861 6.61c-1.412 5.269 1.715 10.684 6.984 12.096 5.268 1.412 10.684-1.715 12.096-6.984a9.862 9.862 0 0 0-1.771-8.655l.767-2.861a5.926 5.926 0 0 0-11.448-3.068Zm9.321 2.498-.444 1.655a9.844 9.844 0 0 0-3.409-1.665 9.847 9.847 0 0 0-3.785-.262l.444-1.656a3.723 3.723 0 1 1 7.194 1.928Zm-3.445 8.52a2.57 2.57 0 0 1-2.019 1.862l-.539 2.011a1.1 1.1 0 1 1-2.127-.57l.539-2.01a2.569 2.569 0 1 1 4.146-1.294ZM164.943 32.064a6.216 6.216 0 0 0-1.779 0c-.681.098-1.314.337-1.816.527l-.135.05-16.68 6.256-.407.152c-1.922.718-3.61 1.348-4.909 2.493a9.325 9.325 0 0 0-2.553 3.683c-.616 1.62-.613 3.421-.61 5.473V66.01c0 8.793 4.783 16.125 9.953 21.51 5.204 5.422 11.159 9.252 14.307 11.089l.128.075c.574.337 1.32.775 2.307.987a6.619 6.619 0 0 0 2.609 0c.987-.212 1.732-.65 2.307-.987l.128-.075c3.148-1.837 9.103-5.667 14.307-11.088 5.17-5.386 9.953-12.718 9.953-21.511V50.698c.003-2.052.006-3.854-.611-5.473a9.333 9.333 0 0 0-2.552-3.683c-1.3-1.145-2.987-1.775-4.909-2.493l-.407-.152-16.68-6.255-.135-.05c-.503-.19-1.136-.43-1.816-.528Zm-1.34 14.592a15.89 15.89 0 0 0-7.978 2.135 1.772 1.772 0 0 0 1.775 3.069 12.347 12.347 0 0 1 6.203-1.66c6.853 0 12.408 5.556 12.408 12.409a44.34 44.34 0 0 1-1.688 12.156 1.772 1.772 0 1 0 3.41.97 47.883 47.883 0 0 0 1.823-13.126c0-8.81-7.142-15.953-15.953-15.953Zm-10.749 9.75a1.772 1.772 0 1 0-3.069-1.775 15.891 15.891 0 0 0-2.135 7.978c0 2.499-.573 4.86-1.594 6.96a1.772 1.772 0 1 0 3.189 1.55 19.43 19.43 0 0 0 1.95-8.51c0-2.263.604-4.38 1.659-6.203Zm10.749-2.66a8.863 8.863 0 0 0-8.863 8.863c0 4.516-1.29 8.704-3.518 12.246l1.5.944-1.5-.944-.121.196a1.774 1.774 0 0 0 3.049 1.81 26.434 26.434 0 0 0 4.135-14.253 5.318 5.318 0 0 1 10.636 0c0 1.723-.118 3.418-.345 5.078a1.773 1.773 0 0 0 3.513.48 41.12 41.12 0 0 0 .377-5.557 8.863 8.863 0 0 0-8.863-8.863Zm1.772 8.863a1.772 1.772 0 1 0-3.545 0c0 5.89-1.688 11.381-4.607 16.021a1.773 1.773 0 0 0 3.001 1.888 33.528 33.528 0 0 0 5.151-17.91Zm5.554 11.117a1.773 1.773 0 0 0-3.411-.965 37.01 37.01 0 0 1-2.523 6.502 1.771 1.771 0 1 0 3.169 1.588 40.517 40.517 0 0 0 2.765-7.124Z",
        fill: "#4779FF"
    }))), _defs || (_defs = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("defs", null, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("clipPath", {
        id: "passkey-intro2_svg__a"
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("rect", {
        width: 327,
        height: 112,
        rx: 12,
        fill: "#fff"
    })), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("clipPath", {
        id: "passkey-intro2_svg__c"
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fill: "#fff",
        transform: "rotate(-15 184.593 -307.976)",
        d: "M0 0h32v32H0z"
    })), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("linearGradient", {
        id: "passkey-intro2_svg__b",
        x1: 164,
        y1: 0,
        x2: 164,
        y2: 93.5,
        gradientUnits: "userSpaceOnUse"
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("stop", {
        stopColor: "#4779FF"
    }), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("stop", {
        offset: 1,
        stopColor: "#4779FF",
        stopOpacity: 0
    })))));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/android-face-id.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgAndroidFaceId)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path, _path2, _path3;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgAndroidFaceId = function SvgAndroidFaceId(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 64,
        height: 64,
        viewBox: "0 0 64 64",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M32 57.887c14.297 0 25.887-11.59 25.887-25.887S46.297 6.113 32 6.113 6.113 17.703 6.113 32 17.703 57.887 32 57.887ZM32 60c15.464 0 28-12.536 28-28S47.464 4 32 4 4 16.536 4 32s12.536 28 28 28Z",
        fill: "#1A73E8"
    })), _path2 || (_path2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M36.752 46.831c.27.582.018 1.274-.565 1.544-2.69 1.25-5.356 1.479-7.54.476-2.215-1.017-3.66-3.173-4.134-6.099l2.295-.372c.383 2.364 1.466 3.742 2.809 4.359 1.374.63 3.299.592 5.591-.472a1.162 1.162 0 0 1 1.544.564ZM33.585 35.17v-4.755h2.113v6.868h-5.811V35.17h3.698Z",
        fill: "#1A73E8"
    })), _path3 || (_path3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M46.792 25.132a2.113 2.113 0 1 1-4.226 0 2.113 2.113 0 0 1 4.226 0ZM21.434 25.132a2.113 2.113 0 1 1-4.227 0 2.113 2.113 0 0 1 4.227 0Z",
        fill: "#1A73E8"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/android-touch-id.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgAndroidTouchId)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgAndroidTouchId = function SvgAndroidTouchId(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 64,
        height: 64,
        viewBox: "0 0 64 64",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M47.493 11.92c-.213 0-.426-.053-.613-.16C41.76 9.12 37.333 8 32.027 8c-5.28 0-10.294 1.253-14.854 3.76-.64.347-1.44.107-1.813-.533a1.35 1.35 0 0 1 .533-1.814c4.96-2.693 10.4-4.08 16.134-4.08 5.68 0 10.64 1.254 16.08 4.054.666.346.906 1.146.56 1.786-.24.48-.694.747-1.174.747Zm-38.16 14a1.33 1.33 0 0 1-1.093-2.107c2.64-3.733 6-6.666 10-8.72 8.373-4.32 19.093-4.346 27.493-.026 4 2.053 7.36 4.96 10 8.666.427.587.294 1.44-.32 1.867a1.33 1.33 0 0 1-1.866-.32c-2.4-3.36-5.44-6-9.04-7.84-7.654-3.92-17.44-3.92-25.067.027-3.627 1.866-6.667 4.533-9.067 7.893-.213.373-.613.56-1.04.56ZM26 58.107c-.347 0-.693-.134-.933-.4-2.32-2.32-3.574-3.814-5.36-7.04-1.84-3.28-2.8-7.28-2.8-11.574 0-7.92 6.773-14.373 15.093-14.373s15.093 6.453 15.093 14.373a1.32 1.32 0 0 1-1.333 1.334 1.32 1.32 0 0 1-1.333-1.334c0-6.453-5.574-11.706-12.427-11.706S19.573 32.64 19.573 39.093c0 3.84.854 7.387 2.48 10.267 1.707 3.067 2.88 4.373 4.934 6.453a1.37 1.37 0 0 1 0 1.894c-.294.266-.64.4-.987.4Zm19.12-4.934c-3.173 0-5.973-.8-8.267-2.373-3.973-2.693-6.346-7.067-6.346-11.707a1.32 1.32 0 0 1 1.333-1.333 1.32 1.32 0 0 1 1.333 1.333c0 3.76 1.92 7.307 5.174 9.494 1.893 1.28 4.106 1.893 6.773 1.893.64 0 1.707-.08 2.773-.267a1.33 1.33 0 0 1 1.547 1.094 1.33 1.33 0 0 1-1.093 1.546c-1.52.294-2.854.32-3.227.32Zm-5.36 5.494a1.56 1.56 0 0 1-.347-.054c-4.24-1.173-7.013-2.746-9.92-5.6-3.733-3.706-5.786-8.64-5.786-13.92 0-4.32 3.68-7.84 8.213-7.84 4.533 0 8.213 3.52 8.213 7.84 0 2.854 2.48 5.174 5.547 5.174 3.067 0 5.547-2.32 5.547-5.174 0-10.053-8.667-18.213-19.334-18.213-7.573 0-14.506 4.213-17.626 10.747-1.04 2.16-1.574 4.693-1.574 7.466 0 2.08.187 5.36 1.787 9.627a1.301 1.301 0 0 1-.773 1.707A1.323 1.323 0 0 1 12 49.653c-1.307-3.493-1.947-6.96-1.947-10.56 0-3.2.614-6.106 1.814-8.64 3.546-7.44 11.413-12.266 20.026-12.266 12.134 0 22 9.36 22 20.88 0 4.32-3.68 7.84-8.213 7.84-4.533 0-8.213-3.52-8.213-7.84 0-2.854-2.48-5.174-5.547-5.174-3.067 0-5.547 2.32-5.547 5.174 0 4.56 1.76 8.826 4.987 12.026 2.533 2.507 4.96 3.894 8.72 4.934.72.186 1.12.933.933 1.626a1.301 1.301 0 0 1-1.253 1.014Z",
        fill: "#1A73E8"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/iphone-touch-id.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgIphoneTouchId)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _g, _defs;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgIphoneTouchId = function SvgIphoneTouchId(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 64,
        height: 64,
        viewBox: "0 0 64 64",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _g || (_g = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("g", {
        clipPath: "url(#iphone-touch-id_svg__a)",
        fill: "#000"
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M38.635.943c-4.483-1.118-9.2-1.278-13.79-.287a.657.657 0 0 0 .277 1.285c4.396-.95 8.924-.793 13.232.287 10.3 2.582 18.875 10.327 22.14 20.444 1.264 3.912 1.8 8.078 1.908 12.445a.657.657 0 0 0 1.313-.033c-.108-4.426-.651-8.7-1.945-12.74C58.378 11.75 49.417 3.632 38.635.943ZM21.51 2.932a.657.657 0 1 0-.35-1.267c-4.801 1.324-11.554 5.9-15.728 12.014a.754.754 0 0 0-.004.007C1.763 19.208-.534 26.148.108 32.883l.001.019c.154 1.23.412 2.457.67 3.686.544 2.588 1.09 5.183.665 7.818a.657.657 0 1 0 1.297.21c.445-2.755-.107-5.443-.66-8.13-.254-1.244-.51-2.487-.666-3.737-.604-6.364 1.57-13.002 5.105-18.333 4.015-5.879 10.516-10.25 14.99-11.484Z"
    }), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M30.133 4.4c8.25-.504 16.499 2.863 22.039 9.314a.657.657 0 1 1-.997.856c-5.268-6.134-13.118-9.339-20.966-8.858H30.2c-9.925.48-19.22 7.214-22.638 16.648a.657.657 0 1 1-1.236-.447C9.928 11.973 19.688 4.907 30.133 4.4ZM54.174 16.585a.657.657 0 0 0-1.091.733c3.07 4.572 4.34 9.548 4.843 15.454a.657.657 0 0 0 1.31-.112c-.514-6.034-1.823-11.252-5.062-16.075ZM58.796 35.45a.657.657 0 0 1 .697.615c.247 3.963.25 8.446-.189 11.76a.657.657 0 1 1-1.303-.173c.423-3.193.425-7.582.18-11.505a.657.657 0 0 1 .615-.697ZM6.57 25.543a.657.657 0 1 0-1.278-.308 26.58 26.58 0 0 0-.743 6.104c-.01 2.117.385 4.184.78 6.25.323 1.692.646 3.384.747 5.104.134 2.26-.341 4.523-1.163 6.677a.657.657 0 1 0 1.228.469c.868-2.277 1.395-4.73 1.247-7.223-.1-1.709-.424-3.39-.747-5.072-.394-2.051-.788-4.102-.778-6.199.01-1.952.248-3.902.706-5.802Z"
    }), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M23.813 10.94a.657.657 0 0 1-.365.855c-6.813 2.736-11.93 8.91-12.973 16.19-.436 3.042.035 6.055.506 9.067.265 1.696.53 3.392.634 5.093.223 3.688-.197 7.739-2.597 11.425a.657.657 0 0 1-1.101-.718c2.186-3.358 2.6-7.088 2.386-10.627-.105-1.726-.368-3.442-.632-5.156-.472-3.077-.944-6.15-.497-9.27 1.115-7.774 6.563-14.324 13.784-17.224a.657.657 0 0 1 .855.365ZM46.882 14.681c-5.374-5.034-13.164-6.79-20.244-5.238a.657.657 0 1 0 .282 1.284c6.704-1.47 14.039.207 19.064 4.914 4.235 3.967 6.695 9.739 7.339 16.037a.657.657 0 0 0 1.307-.134c-.668-6.54-3.232-12.633-7.748-16.863ZM54.493 34.674a.657.657 0 0 1 .72.586c.625 6.077.356 12.64-.587 18.99a.657.657 0 0 1-1.3-.193c.93-6.261 1.191-12.713.58-18.662a.657.657 0 0 1 .587-.721Z"
    }), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M31.582 13.355c-10.07 0-18.252 8.034-18.252 17.967 0 1.06.094 2.1.274 3.111a.657.657 0 0 0 1.294-.23 16.469 16.469 0 0 1-.254-2.881c0-9.187 7.574-16.652 16.938-16.652 4.232 0 8.098 1.525 11.066 4.045a.657.657 0 0 0 .85-1.002 18.353 18.353 0 0 0-11.916-4.358ZM44.971 20.163a.657.657 0 0 1 .93.02c2.9 3.024 3.828 7.777 4.442 11.766.692 4.494.798 8.877.798 10.91a.657.657 0 0 1-1.315 0c0-2-.104-6.31-.782-10.71-.57-3.703-1.392-8.24-4.092-11.056a.657.657 0 0 1 .02-.93ZM50.974 46.622a.657.657 0 0 0-1.31-.105c-.323 4.048-.745 8.092-1.6 11.827a.657.657 0 1 0 1.28.293c.879-3.833 1.306-7.956 1.63-12.015ZM14.662 36.852a.657.657 0 0 1 .771.518c1.39 7.056.43 13.466-3.25 19.08a.657.657 0 0 1-1.099-.72c3.462-5.283 4.394-11.331 3.06-18.106a.657.657 0 0 1 .518-.772Z"
    }), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M31.582 17.631c-6.537 0-12.95 5.06-13.604 11.42-.287 2.784.116 5.526.519 8.27.351 2.395.703 4.791.596 7.217-.244 5.552-1.873 10.135-4.672 13.91a.657.657 0 1 0 1.056.782c2.968-4.003 4.674-8.844 4.93-14.634.106-2.415-.247-4.804-.6-7.19-.403-2.73-.806-5.459-.521-8.221.574-5.587 6.325-10.24 12.296-10.24 2.785 0 9.991 1.508 12.283 8.976 1.437 4.679 1.828 11.012 1.48 17.164-.347 6.151-1.43 12.035-2.885 15.808a.657.657 0 0 0 1.227.473c1.522-3.947 2.619-9.98 2.97-16.207.353-6.226-.034-12.734-1.535-17.624-2.545-8.289-10.52-9.904-13.54-9.904Z"
    }), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M21.47 56.451c.303.198.389.606.19.91-.407.624-.765 1.278-1.124 1.932-.359.654-.717 1.307-1.125 1.932a.657.657 0 1 1-1.1-.718c.407-.624.765-1.278 1.124-1.932.359-.654.717-1.308 1.125-1.932a.657.657 0 0 1 .91-.192ZM27.096 24.453a.657.657 0 1 0-.73-1.093c-2.603 1.74-4.2 4.134-4.2 7.64 0 2.088.37 3.795.75 5.545.567 2.62.953 5.233.883 7.923-.084 3.267-.723 6.252-1.952 9.096a.657.657 0 1 0 1.207.521c1.299-3.007 1.971-6.158 2.06-9.583.071-2.796-.325-5.513-.913-8.235-.38-1.758-.72-3.328-.72-5.267 0-3.004 1.321-5.013 3.615-6.547ZM29.66 22.144c2.728-.556 5.662.13 7.822 1.879 3.858 3.122 4.371 8.817 4.787 13.432l.021.235c.538 5.949-.077 11.726-1.316 17.529a.657.657 0 1 1-1.286-.275c1.22-5.715 1.815-11.355 1.293-17.136l-.052-.582v-.002c-.37-4.17-.832-9.394-4.274-12.18-1.846-1.494-4.379-2.092-6.732-1.613a.657.657 0 1 1-.262-1.287ZM40.045 58.489a.657.657 0 1 0-1.274-.325 15.88 15.88 0 0 1-1.785 4.266.657.657 0 1 0 1.127.675 17.188 17.188 0 0 0 1.932-4.616ZM36.831 48.952c.36.043.618.37.576.73-.62 5.245-2.022 9.922-4.27 13.98a.657.657 0 0 1-1.15-.638c2.152-3.882 3.51-8.39 4.115-13.496a.657.657 0 0 1 .73-.576Z"
    }), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M36.696 30.656c-.456-2.435-2.545-4.297-5.081-4.297-3.435 0-5.845 3.462-4.996 6.683 1.437 5.686 1.673 11.166.7 16.444v.003c-.845 4.739-2.465 9.002-4.677 12.614a.657.657 0 0 0 1.121.686c2.302-3.76 3.978-8.178 4.85-13.067 1.01-5.482.759-11.154-.72-17.005l-.002-.007c-.637-2.41 1.138-5.037 3.724-5.037 1.865 0 3.44 1.373 3.788 3.22.957 5.548 1.455 10.693 1.1 15.123a.657.657 0 1 0 1.31.105c.368-4.592-.151-9.863-1.115-15.456l-.002-.01ZM29.654 59.117c.323.166.45.562.284.885l-1.741 3.389a.657.657 0 1 1-1.17-.601L28.77 59.4a.657.657 0 0 1 .885-.284Z"
    }), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M32.103 31.29a.657.657 0 1 0-1.28.3c2.217 9.433 1.913 17.717-.787 24.773a.657.657 0 1 0 1.228.47c2.814-7.358 3.1-15.919.84-25.544Z"
    }))), _defs || (_defs = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("defs", null, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("clipPath", {
        id: "iphone-touch-id_svg__a"
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fill: "#fff",
        d: "M0 0h64v64H0z"
    })))));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/passkey-intro-icon.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgPasskeyIntroIcon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _circle, _path, _g, _defs;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgPasskeyIntroIcon = function SvgPasskeyIntroIcon(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 206,
        height: 206,
        viewBox: "0 0 206 206",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _circle || (_circle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("circle", {
        cx: 103,
        cy: 103,
        r: 103,
        fill: "url(#passkey-intro-icon_svg__a)",
        fillOpacity: 0.12
    })), _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M101.59 42.066a6.37 6.37 0 0 1 1.822 0c.696.1 1.343.345 1.858.54l.138.051 17.072 6.402.416.156c1.967.734 3.695 1.38 5.025 2.551a9.553 9.553 0 0 1 2.612 3.77c.631 1.657.628 3.501.625 5.6v15.672c0 9-4.895 16.504-10.187 22.016-5.326 5.55-11.421 9.469-14.643 11.349l-.131.077c-.588.345-1.351.793-2.361 1.01a6.78 6.78 0 0 1-2.67 0c-1.01-.217-1.774-.665-2.362-1.01l-.13-.077c-3.223-1.88-9.317-5.799-14.644-11.349-5.291-5.512-10.186-13.015-10.186-22.016V61.137c-.003-2.1-.006-3.944.625-5.601a9.553 9.553 0 0 1 2.612-3.77c1.33-1.172 3.058-1.817 5.025-2.551l.416-.156 17.072-6.402.138-.052c.514-.194 1.162-.439 1.858-.54ZM94.382 69.11v-4.037a8.073 8.073 0 1 1 16.147 0v4.036a13.434 13.434 0 0 1 5.383 10.766c0 7.431-6.024 13.456-13.456 13.456C95.025 93.33 89 87.306 89 79.875c0-4.402 2.114-8.31 5.382-10.765Zm13.147-1.702v-2.335a5.073 5.073 0 1 0-10.147 0v2.336a13.414 13.414 0 0 1 5.074-.99c1.795 0 3.508.352 5.073.99ZM106 77.5a3.5 3.5 0 0 1-2 3.163V83.5a1.5 1.5 0 1 1-3 0v-2.837a3.5 3.5 0 1 1 5-3.163ZM126 22a4 4 0 0 1 4-4h45a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4h-45a4 4 0 0 1-4-4V22Zm15 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm7 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm13-3a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm9 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm1 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
        fill: "#4779FF"
    })), _g || (_g = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("g", {
        clipPath: "url(#passkey-intro-icon_svg__b)"
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("g", {
        clipPath: "url(#passkey-intro-icon_svg__c)"
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M59.731 54.983a15.068 15.068 0 0 0 1.087-10.69C58.656 36.226 50.362 31.438 42.294 33.6c-8.069 2.162-12.857 10.455-10.695 18.524a15.068 15.068 0 0 0 6.288 8.715c1.864-4.039 6.77-6.622 9.948-7.473 3.179-.852 8.204-1.183 11.896 1.618Zm-19.98-8.96a5.672 5.672 0 1 1 10.957-2.935 5.672 5.672 0 0 1-10.957 2.936Z",
        fill: "#4779FF"
    })))), _defs || (_defs = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("defs", null, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("clipPath", {
        id: "passkey-intro-icon_svg__b"
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fill: "#fff",
        transform: "rotate(-15 151.778 -80.474)",
        d: "M0 0h33v33H0z"
    })), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("clipPath", {
        id: "passkey-intro-icon_svg__c"
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("rect", {
        x: 27.684,
        y: 37.513,
        width: 30.25,
        height: 30.25,
        rx: 15.125,
        transform: "rotate(-15 27.684 37.513)",
        fill: "#fff"
    })), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("linearGradient", {
        id: "passkey-intro-icon_svg__a",
        x1: 103,
        y1: 0,
        x2: 103,
        y2: 105.711,
        gradientUnits: "userSpaceOnUse"
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("stop", {
        stopColor: "#4779FF"
    }), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("stop", {
        offset: 1,
        stopColor: "#4779FF",
        stopOpacity: 0
    })))));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/multiple-account-security.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgMultipleAccountSecurity)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _g, _defs;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgMultipleAccountSecurity = function SvgMultipleAccountSecurity(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 327,
        height: 112,
        viewBox: "0 0 327 112",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _g || (_g = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("g", {
        clipPath: "url(#multiple-account-security_svg__a)"
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("circle", {
        cx: 164,
        cy: 114,
        r: 114,
        fill: "url(#multiple-account-security_svg__b)",
        fillOpacity: 0.12
    }), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("g", {
        clipPath: "url(#multiple-account-security_svg__c)"
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("g", {
        clipPath: "url(#multiple-account-security_svg__d)"
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M118.709 55.166a14.617 14.617 0 0 0 1.054-10.366c-2.097-7.824-10.139-12.467-17.963-10.371-7.824 2.096-12.468 10.139-10.371 17.963a14.612 14.612 0 0 0 6.097 8.451c1.808-3.916 6.565-6.42 9.647-7.247 3.083-.826 7.955-1.146 11.536 1.57Zm-19.375-8.688a5.5 5.5 0 1 1 10.625-2.848 5.5 5.5 0 0 1-10.625 2.848Z",
        fill: "#4779FF"
    }))), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "m207.67 19.875-.767 2.862a9.86 9.86 0 0 0-5.861 6.61c-1.412 5.269 1.715 10.684 6.984 12.096 5.268 1.412 10.684-1.715 12.096-6.984a9.862 9.862 0 0 0-1.771-8.655l.767-2.861a5.926 5.926 0 0 0-11.448-3.068Zm9.321 2.498-.444 1.655a9.844 9.844 0 0 0-3.409-1.665 9.847 9.847 0 0 0-3.785-.262l.444-1.656a3.723 3.723 0 1 1 7.194 1.928Zm-3.445 8.52a2.57 2.57 0 0 1-2.019 1.862l-.539 2.011a1.1 1.1 0 1 1-2.127-.57l.539-2.01a2.569 2.569 0 1 1 4.146-1.294ZM164.943 32.064a6.216 6.216 0 0 0-1.779 0c-.681.098-1.313.337-1.816.527l-.135.05-16.68 6.256-.407.152c-1.922.718-3.61 1.348-4.909 2.493a9.336 9.336 0 0 0-2.553 3.683c-.616 1.62-.613 3.421-.61 5.473V66.01c0 8.793 4.783 16.125 9.953 21.51 5.204 5.422 11.159 9.252 14.307 11.089l.128.075c.574.337 1.32.775 2.307.987a6.619 6.619 0 0 0 2.609 0c.987-.212 1.733-.65 2.307-.987l.128-.075c3.148-1.837 9.103-5.667 14.307-11.088 5.17-5.386 9.953-12.718 9.953-21.511V50.698c.003-2.052.006-3.854-.611-5.473a9.333 9.333 0 0 0-2.552-3.683c-1.3-1.145-2.987-1.775-4.909-2.493l-.407-.152-16.68-6.255-.135-.05c-.503-.19-1.136-.43-1.816-.528Zm7.008 18.695c0-1.726-1.4-3.126-3.127-3.126h-14.069a6.253 6.253 0 0 0-6.153 5.133 6.234 6.234 0 0 1 4.589-2.007h18.76Zm1.562 3.127c3.454 0 6.253 2.8 6.253 6.253v12.506a6.253 6.253 0 0 1-6.253 6.254h-18.759a6.253 6.253 0 0 1-6.253-6.254V60.14a6.253 6.253 0 0 1 6.253-6.253h18.759Z",
        fill: "#4779FF"
    }))), _defs || (_defs = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("defs", null, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("clipPath", {
        id: "multiple-account-security_svg__a"
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("rect", {
        width: 327,
        height: 112,
        rx: 12,
        fill: "#fff"
    })), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("clipPath", {
        id: "multiple-account-security_svg__c"
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fill: "#fff",
        transform: "rotate(-15 184.593 -307.976)",
        d: "M0 0h32v32H0z"
    })), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("clipPath", {
        id: "multiple-account-security_svg__d"
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("rect", {
        x: 87.633,
        y: 38.225,
        width: 29.333,
        height: 29.333,
        rx: 14.667,
        transform: "rotate(-15 87.633 38.225)",
        fill: "#fff"
    })), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("linearGradient", {
        id: "multiple-account-security_svg__b",
        x1: 164,
        y1: 0,
        x2: 164,
        y2: 93.5,
        gradientUnits: "userSpaceOnUse"
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("stop", {
        stopColor: "#4779FF"
    }), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("stop", {
        offset: 1,
        stopColor: "#4779FF",
        stopOpacity: 0
    })))));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/passkey-account-security.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgPasskeyAccountSecurity)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _g, _defs;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgPasskeyAccountSecurity = function SvgPasskeyAccountSecurity(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 327,
        height: 112,
        viewBox: "0 0 327 112",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _g || (_g = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("g", {
        clipPath: "url(#passkey-account-security_svg__a)"
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("circle", {
        cx: 164,
        cy: 114,
        r: 114,
        fill: "url(#passkey-account-security_svg__b)",
        fillOpacity: 0.12
    }), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("g", {
        clipPath: "url(#passkey-account-security_svg__c)",
        fill: "#4779FF"
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M106.009 34.681a2.666 2.666 0 0 1 3.266 1.886l-15.454 4.141a5.319 5.319 0 0 0-3.339 2.666 5.335 5.335 0 0 1 3.936-5.587l11.591-3.105ZM117.785 42.57a5.333 5.333 0 0 0-6.532-3.772l-15.455 4.141a5.333 5.333 0 0 0-3.771 6.532l2.76 10.303a5.334 5.334 0 0 0 6.533 3.771l15.454-4.14a5.333 5.333 0 0 0 3.772-6.533l-2.761-10.303Z"
    })), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "m207.67 19.875-.767 2.862a9.86 9.86 0 0 0-5.861 6.61c-1.412 5.268 1.715 10.684 6.984 12.096 5.268 1.412 10.684-1.715 12.096-6.984a9.862 9.862 0 0 0-1.771-8.655l.767-2.861a5.926 5.926 0 0 0-11.448-3.068Zm9.321 2.498-.444 1.655a9.846 9.846 0 0 0-3.409-1.665 9.849 9.849 0 0 0-3.785-.262l.444-1.656a3.723 3.723 0 1 1 7.194 1.928Zm-3.445 8.52a2.57 2.57 0 0 1-2.019 1.862l-.539 2.011a1.1 1.1 0 1 1-2.127-.57l.539-2.01a2.569 2.569 0 1 1 4.146-1.294ZM164.943 32.064a6.216 6.216 0 0 0-1.779 0c-.681.098-1.313.337-1.816.527l-.135.05-16.68 6.256-.407.152c-1.922.718-3.61 1.348-4.909 2.493a9.336 9.336 0 0 0-2.553 3.683c-.616 1.62-.613 3.421-.61 5.473V66.01c0 8.793 4.783 16.125 9.953 21.51 5.204 5.422 11.159 9.252 14.307 11.089l.128.075c.574.337 1.32.775 2.307.987a6.619 6.619 0 0 0 2.609 0c.987-.212 1.733-.65 2.307-.987l.128-.075c3.148-1.837 9.103-5.667 14.307-11.088 5.17-5.386 9.953-12.718 9.953-21.511V50.698c.003-2.052.006-3.854-.611-5.473a9.333 9.333 0 0 0-2.552-3.683c-1.3-1.145-2.987-1.775-4.909-2.493l-.407-.152-16.68-6.255-.135-.05c-.503-.19-1.136-.43-1.816-.528Zm-1.34 14.592a15.89 15.89 0 0 0-7.978 2.135 1.772 1.772 0 1 0 1.776 3.069 12.34 12.34 0 0 1 6.202-1.66c6.853 0 12.408 5.556 12.408 12.409a44.34 44.34 0 0 1-1.688 12.156 1.772 1.772 0 1 0 3.41.97 47.883 47.883 0 0 0 1.823-13.126c0-8.81-7.142-15.953-15.953-15.953Zm-10.749 9.75a1.772 1.772 0 1 0-3.068-1.775 15.882 15.882 0 0 0-2.136 7.978c0 2.499-.573 4.86-1.594 6.96a1.772 1.772 0 1 0 3.189 1.55 19.43 19.43 0 0 0 1.95-8.51c0-2.263.605-4.38 1.659-6.203Zm10.749-2.66a8.863 8.863 0 0 0-8.863 8.863c0 4.516-1.29 8.704-3.518 12.246l1.5.944-1.5-.944a8.75 8.75 0 0 0-.12.196 1.773 1.773 0 1 0 3.048 1.81c.023-.04.048-.079.072-.118a26.434 26.434 0 0 0 4.063-14.134 5.318 5.318 0 0 1 10.636 0c0 1.722-.118 3.417-.344 5.077a1.772 1.772 0 1 0 3.512.48 41.12 41.12 0 0 0 .377-5.557 8.863 8.863 0 0 0-8.863-8.863Zm1.772 8.863a1.772 1.772 0 1 0-3.545 0c0 5.89-1.688 11.381-4.607 16.021a1.773 1.773 0 0 0 3.001 1.888 33.528 33.528 0 0 0 5.151-17.91Zm5.554 11.117a1.773 1.773 0 0 0-3.411-.965 37.01 37.01 0 0 1-2.523 6.502 1.771 1.771 0 1 0 3.169 1.588 40.517 40.517 0 0 0 2.765-7.124Z",
        fill: "#4779FF"
    }))), _defs || (_defs = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("defs", null, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("clipPath", {
        id: "passkey-account-security_svg__a"
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("rect", {
        width: 327,
        height: 112,
        rx: 12,
        fill: "#fff"
    })), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("clipPath", {
        id: "passkey-account-security_svg__c"
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fill: "#fff",
        transform: "rotate(-15 184.593 -307.976)",
        d: "M0 0h32v32H0z"
    })), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("linearGradient", {
        id: "passkey-account-security_svg__b",
        x1: 164,
        y1: 0,
        x2: 164,
        y2: 93.5,
        gradientUnits: "userSpaceOnUse"
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("stop", {
        stopColor: "#4779FF"
    }), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("stop", {
        offset: 1,
        stopColor: "#4779FF",
        stopOpacity: 0
    })))));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/question.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgQuestion)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgQuestion = function SvgQuestion(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 65,
        height: 64,
        viewBox: "0 0 65 64",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M32.5 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32-17.673 0-32-14.327-32-32 0-17.673 14.327-32 32-32Zm.11 42.446c-1.561 0-2.828 1.243-2.828 2.777 0 1.533 1.267 2.777 2.828 2.777h.038c1.562 0 2.828-1.244 2.828-2.777 0-1.534-1.266-2.777-2.828-2.777h-.038Zm1.8-26.297a12.215 12.215 0 0 0-7.658 1.286c-2.326 1.25-4.14 3.242-5.07 5.659-.55 1.434.187 3.036 1.648 3.578 1.461.541 3.092-.183 3.644-1.617.428-1.116 1.294-2.103 2.495-2.75a6.458 6.458 0 0 1 3.783-.708l-1.595 10.396-.003.001c-1.488.457-2.319 2.012-1.856 3.475.463 1.464 2.048 2.283 3.539 1.828l-.839-2.652c.8 2.525.84 2.644.843 2.65l.004-.001.01-.003.032-.01.098-.031a23.601 23.601 0 0 0 1.448-.535c.906-.368 2.136-.93 3.388-1.693 2.28-1.392 5.665-4.095 5.665-8.304.004-2.583-.993-5.054-2.763-6.98-1.767-1.921-4.188-3.176-6.814-3.589Zm-.894 5.484c1.405.22 2.642.884 3.51 1.827.862.938 1.307 2.092 1.305 3.252v.005c0 1.075-.945 2.335-2.995 3.587-.913.557-1.848.988-2.566 1.28a17.913 17.913 0 0 1-1.064.393l1.81-10.344Z",
        fill: "currentColor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/switch-horizontal.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgSwitchHorizontal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgSwitchHorizontal = function SvgSwitchHorizontal(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 18,
        height: 18,
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M17.256 5.244a.833.833 0 0 1 0 1.179l-3.333 3.333a.833.833 0 0 1-1.179-1.179l1.91-1.91H6.668a.833.833 0 0 1 0-1.667h7.988l-1.91-1.91a.833.833 0 1 1 1.178-1.18l3.333 3.334Zm-11.91 8.09h7.987a.833.833 0 1 1 0 1.666H5.345l1.91 1.91a.833.833 0 1 1-1.178 1.18l-3.333-3.334a.833.833 0 0 1 0-1.179l3.333-3.333a.833.833 0 1 1 1.179 1.179l-1.91 1.91Z",
        fill: "currentColor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/secure-action.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgSecureAction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgSecureAction = function SvgSecureAction(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 59,
        height: 70,
        viewBox: "0 0 59 70",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M30.465.065a6.368 6.368 0 0 0-1.822 0c-.696.101-1.344.346-1.858.54l-.138.052L9.575 7.059l-.415.155h-.001c-1.967.735-3.695 1.38-5.025 2.553a9.552 9.552 0 0 0-2.612 3.769c-.63 1.657-.628 3.501-.625 5.6v15.672c0 9 4.895 16.504 10.186 22.016 5.327 5.55 11.421 9.47 14.644 11.35l.13.076c.589.345 1.352.793 2.362 1.01a6.774 6.774 0 0 0 2.67 0c1.01-.217 1.773-.665 2.362-1.01l.13-.077c3.223-1.88 9.317-5.8 14.644-11.349 5.29-5.512 10.186-13.015 10.186-22.016V19.137c.003-2.1.006-3.944-.625-5.601a9.552 9.552 0 0 0-2.612-3.77c-1.33-1.172-3.058-1.817-5.025-2.551l-.416-.156L32.461.657l-.138-.052c-.514-.194-1.162-.439-1.858-.54ZM30.096 19a3.2 3.2 0 0 1 3.2 3.2V35a3.2 3.2 0 0 1-6.4 0V22.2a3.2 3.2 0 0 1 3.2-3.2Zm-3.2 28.8a3.2 3.2 0 0 1 3.2-3.2h.032a3.2 3.2 0 0 1 0 6.4h-.032a3.2 3.2 0 0 1-3.2-3.2Z",
        fill: "#4779FF"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/error-circle-x.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgErrorCircleX)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgErrorCircleX = function SvgErrorCircleX(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 17,
        height: 17,
        viewBox: "0 0 17 17",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8.333 1.667a6.667 6.667 0 1 0 0 13.333 6.667 6.667 0 0 0 0-13.333ZM0 8.333a8.333 8.333 0 1 1 16.667 0A8.333 8.333 0 0 1 0 8.333Zm6.077-2.256a.833.833 0 0 1 1.179 0l1.077 1.078 1.078-1.078a.833.833 0 0 1 1.178 1.179L9.512 8.333l1.077 1.078a.833.833 0 0 1-1.178 1.178L8.333 9.512l-1.077 1.077a.833.833 0 0 1-1.179-1.178l1.078-1.078-1.078-1.077a.833.833 0 0 1 0-1.179Z",
        fill: "currentColor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/password-lock-icon.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgPasswordLockIcon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgPasswordLockIcon = function SvgPasswordLockIcon(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        xmlns: "http://www.w3.org/2000/svg",
        width: 58,
        height: 70,
        viewBox: "0 0 58 70",
        fill: "none",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M28.117.065a6.369 6.369 0 0 1 1.82 0c.697.101 1.345.346 1.86.54l.137.052L49.006 7.06l.416.155c1.967.734 3.695 1.38 5.026 2.552a9.553 9.553 0 0 1 2.611 3.77c.552 1.45.619 3.042.625 4.824V34.81c0 9-4.895 16.503-10.186 22.015-5.327 5.55-11.421 9.469-14.644 11.349l-.13.077c-.588.345-1.352.793-2.361 1.01a6.78 6.78 0 0 1-2.671 0c-1.01-.217-1.773-.665-2.361-1.01l-.13-.077c-3.223-1.88-9.318-5.8-14.645-11.349C5.265 51.312.371 43.81.371 34.81V19.58l-.001-.444c-.003-2.1-.006-3.944.625-5.6a9.555 9.555 0 0 1 2.612-3.77c1.33-1.173 3.058-1.818 5.025-2.552l.416-.155L26.121.657l.137-.052c.515-.194 1.163-.439 1.859-.54ZM28.825 15a8.074 8.074 0 0 0-8.074 8.073v4.036a13.436 13.436 0 0 0-5.381 10.766c0 7.431 6.024 13.456 13.456 13.456 7.43 0 13.455-6.025 13.455-13.456 0-4.403-2.114-8.31-5.383-10.766v-4.036A8.073 8.073 0 0 0 28.825 15Zm.045 17a3.5 3.5 0 0 1 1.5 6.663V41.5a1.5 1.5 0 0 1-3 0v-2.837A3.5 3.5 0 0 1 28.87 32Zm-.045-14a5.073 5.073 0 0 1 5.073 5.073v2.335a13.416 13.416 0 0 0-5.072-.989 13.42 13.42 0 0 0-5.075.99v-2.336A5.074 5.074 0 0 1 28.825 18Z",
        fill: "#4779FF"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/knowledge-check-icon.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgKnowledgeCheckIcon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path, _path2;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgKnowledgeCheckIcon = function SvgKnowledgeCheckIcon(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        xmlns: "http://www.w3.org/2000/svg",
        width: 69,
        height: 69,
        viewBox: "0 0 69 69",
        fill: "none",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M34.5 0C53.554 0 69 15.446 69 34.5 69 53.554 53.554 69 34.5 69 15.446 69 0 53.554 0 34.5 0 15.446 15.446 0 34.5 0Z",
        fill: "#4779FF"
    })), _path2 || (_path2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M35.825 23.161a6.761 6.761 0 0 0-4.32.735c-1.282.707-2.205 1.787-2.663 3.007a3.012 3.012 0 0 1-3.889 1.77 3.043 3.043 0 0 1-1.758-3.914c.991-2.644 2.928-4.822 5.41-6.19a12.764 12.764 0 0 1 8.173-1.406c2.802.45 5.386 1.824 7.272 3.925 1.89 2.107 2.954 4.81 2.95 7.635 0 4.604-3.614 7.56-6.047 9.081a25.197 25.197 0 0 1-3.615 1.852 24.858 24.858 0 0 1-1.546.586l-.105.034-.033.01-.012.004-.005.002s-.003.001-.898-2.9l.895 2.901a3.014 3.014 0 0 1-3.777-2 3.04 3.04 0 0 1 1.984-3.8m0 0 .052-.017.233-.081c.21-.075.523-.192.902-.35.767-.32 1.765-.79 2.74-1.4 2.188-1.369 3.196-2.748 3.196-3.924v-.005c.002-1.268-.473-2.53-1.394-3.556-.925-1.032-2.245-1.758-3.745-1.999M31.84 48.963a3.028 3.028 0 0 1 3.018-3.037h.04a3.028 3.028 0 0 1 3.019 3.037A3.028 3.028 0 0 1 34.899 52h-.041a3.028 3.028 0 0 1-3.018-3.037Z",
        fill: "#fff"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/check-circle-filled.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgCheckCircleFilled)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _circle, _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgCheckCircleFilled = function SvgCheckCircleFilled(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 64,
        height: 64,
        viewBox: "0 0 64 64",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _circle || (_circle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("circle", {
        cx: 32,
        cy: 32,
        r: 32,
        fill: "currentColor"
    })), _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "m44.5 24-17 17-8-8",
        stroke: "#fff",
        strokeWidth: 3,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/fingerprint.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgFingerprint)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgFingerprint = function SvgFingerprint(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 65,
        height: 64,
        viewBox: "0 0 65 64",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M32.5 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32-17.673 0-32-14.327-32-32 0-17.673 14.327-32 32-32Zm6.389 39.467a1.815 1.815 0 0 0-2.24 1.252 37.88 37.88 0 0 1-2.583 6.654 1.814 1.814 0 0 0 3.244 1.625 41.508 41.508 0 0 0 2.83-7.292 1.814 1.814 0 0 0-1.251-2.24Zm-6.247-10.953a1.813 1.813 0 0 0-1.814 1.813 30.69 30.69 0 0 1-4.716 16.399 1.814 1.814 0 1 0 3.072 1.931 34.317 34.317 0 0 0 5.272-18.33 1.814 1.814 0 0 0-1.814-1.813Zm0-7.257a9.07 9.07 0 0 0-9.07 9.07c0 4.622-1.322 8.909-3.602 12.534l-.123.202a1.815 1.815 0 0 0 3.12 1.852l.074-.122a27.06 27.06 0 0 0 4.158-14.466 5.443 5.443 0 0 1 10.885 0c0 1.763-.12 3.498-.352 5.197a1.814 1.814 0 1 0 3.595.492c.254-1.862.386-3.761.386-5.689 0-5.01-4.062-9.07-9.071-9.07Zm0-7.257c-2.971 0-5.762.795-8.165 2.186a1.814 1.814 0 0 0 1.817 3.14 12.632 12.632 0 0 1 6.348-1.698c7.013 0 12.699 5.686 12.699 12.7 0 4.316-.602 8.49-1.727 12.442a1.814 1.814 0 1 0 3.49.993 49.017 49.017 0 0 0 1.866-13.436C48.97 21.31 41.659 14 32.642 14Zm-11.664 7.5a1.815 1.815 0 0 0-2.478.662 16.262 16.262 0 0 0-2.186 8.165c0 2.558-.587 4.974-1.631 7.125a1.815 1.815 0 1 0 3.263 1.585 19.884 19.884 0 0 0 1.997-8.71c0-2.316.618-4.482 1.698-6.348a1.815 1.815 0 0 0-.662-2.479Z",
        fill: "#4779FF"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/upgrade.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgUpgrade)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _g, _defs;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgUpgrade = function SvgUpgrade(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 328,
        height: 112,
        viewBox: "0 0 328 112",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _g || (_g = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("g", {
        clipPath: "url(#upgrade_svg__a)"
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("circle", {
        cx: 164.5,
        cy: 114,
        r: 114,
        fill: "url(#upgrade_svg__b)",
        fillOpacity: 0.12
    }), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M138.586 37.408s12.282 9.32 30.953-8.106c16.582-15.477 30.121 8.941 30.216 20.635.123 15.148-16.582 27.268-8.475 37.217 8.107 9.95-16.077 26.379-29.111 12.16-16.213-17.687-20.605-3.316-29.847-3.316-6.633 0-20.251-16.481-11.055-28.742 7.739-10.318 3.518-13.742 1.475-17.32-2.948-5.158 4.053-19.16 15.844-12.528Z",
        fill: "#DEE9FF"
    }), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M193.356 31.055a7.764 7.764 0 0 1-8.274 7.741 7.76 7.76 0 1 1 8.274-7.74Z",
        fill: "#A2BDFF"
    }), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M186.574 31.65c-.501.389-1.201 1.165-.99 2.89-.234.67-1.069 1.95-1.069 2.563 0 .612-1.002.723-1.113.556-.111-.168-.167-2.282-.779-2.671-.612-.39-.501-2.17-.501-2.17s.223-.668-.501-1.113c-.723-.445-1.227-1.502-.585-2.115.641-.612-1.084-1.001-1.306-1.446-.095-.19-.458-.612-.843-1.034a7.799 7.799 0 0 1 3.588-3.179c.569.594 1.061 1.355.927 2.154.022.39 1.713 1.001.885 1.836-.829.835-1.954 2.003 0 2.393 1.953.39 2.788.946 2.287 1.335ZM191.019 25.5c-.417.879-1.46 1.587-2.052 1.587-.668-.724-2.115.278-2.25-.89-.079-.682.697-1.739 1.359-2.505a7.777 7.777 0 0 1 2.943 1.809ZM193.326 31.734a7.74 7.74 0 0 1-2.46 5.02c-.257-.246-.474-.534-.397-.764.167-.501.846-1.559.729-2.226-.109-.623.466-2.509 2.128-2.03Z",
        fill: "#0E84E5"
    }), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M180.69 70.309a21.881 21.881 0 0 1-1.227 4.48c-3.696 9.468-13.612 15.4-24.046 13.695a22.016 22.016 0 0 1-18.014-26.147c2.354-11.517 13.406-19.214 25.112-17.302a21.88 21.88 0 0 1 9.628 4.09 21.659 21.659 0 0 1 2.611 2.299 22 22 0 0 1 5.936 18.884Z",
        fill: "#699CFF"
    }), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M179.463 74.79c-4.192 2.698-9.142 5.194-14.6 7.259-5.557 2.1-11.014 3.52-16.016 4.263-11.753 1.752-20.983-.206-23.063-5.707-1.948-5.139 2.843-12.098 11.619-18.268a21.656 21.656 0 0 0-.446 4.11c-5.057 3.904-7.688 7.727-6.651 10.47 1.009 2.667 5.291 3.802 11.383 3.48 5.955-.314 13.64-2.029 21.684-5.07 6.957-2.633 13.058-5.834 17.6-9.05 6.082-4.299 9.38-8.625 8.242-11.643-1.171-3.098-6.756-4.131-14.461-3.21a21.591 21.591 0 0 0-2.611-2.298c10.786-1.247 19.099.79 21.058 5.972 2.1 5.542-3.625 13.193-13.738 19.692Z",
        fill: "#0E84E5"
    }))), _defs || (_defs = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("defs", null, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("linearGradient", {
        id: "upgrade_svg__b",
        x1: 164.5,
        y1: 0,
        x2: 164.5,
        y2: 93.5,
        gradientUnits: "userSpaceOnUse"
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("stop", {
        stopColor: "#4779FF"
    }), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("stop", {
        offset: 1,
        stopColor: "#4779FF",
        stopOpacity: 0
    })), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("clipPath", {
        id: "upgrade_svg__a"
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("rect", {
        x: 0.5,
        width: 327,
        height: 112,
        rx: 12,
        fill: "#fff"
    })))));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/domain.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgDomain)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgDomain = function SvgDomain(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 65,
        height: 64,
        viewBox: "0 0 65 64",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M32.5 64c17.673 0 32-14.327 32-32 0-17.673-14.327-32-32-32C14.827 0 .5 14.327.5 32c0 17.673 14.327 32 32 32Zm-4.928-29.305h9.717c-.207 4.908-1.087 9.168-2.3 12.206-.7 1.756-1.433 2.9-2.036 3.54-.245.26-.42.387-.523.448-.102-.06-.277-.189-.522-.449-.603-.638-1.336-1.783-2.037-3.539-1.213-3.038-2.092-7.298-2.3-12.206Zm2.3-16.655c-1.242 3.108-2.134 7.497-2.314 12.55h9.744c-.18-5.053-1.071-9.442-2.313-12.55-.7-1.756-1.433-2.9-2.036-3.54-.245-.26-.42-.388-.523-.449-.102.061-.277.19-.522.45-.603.638-1.336 1.783-2.037 3.539ZM14.5 30.59h8.951c.216-6.53 1.541-12.27 3.503-16.036C20.23 16.789 15.22 23.03 14.5 30.59Zm.036 4.105h8.928c.25 6.387 1.563 11.993 3.49 15.692-6.622-2.201-11.582-8.288-12.418-15.692Zm35.789 0h-8.928c-.25 6.387-1.563 11.993-3.49 15.692 6.621-2.201 11.581-8.288 12.418-15.692Zm.125-2.224v.066-.133.066Zm-9.04-1.88h8.95c-.719-7.56-5.73-13.802-12.454-16.037 1.962 3.766 3.288 9.507 3.503 16.036Zm-9.09 20.35c0-.001.008-.004.023-.007-.015.006-.023.008-.023.007Zm.198-.007a.072.072 0 0 1 .023.007s-.008-.001-.023-.007ZM32.541 14s-.008.004-.023.007c.015-.006.023-.008.023-.007Zm-.198.007A.068.068 0 0 1 32.32 14s.008.001.023.007Z",
        fill: "#4779FF"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/utils/hooks/usePrefetch/usePrefetch.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "usePrefetch": (()=>usePrefetch)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$iconic$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$iconic$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+iconic@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/iconic/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-connector-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3._7679fe86d42f6979f41d87c8de2f235e/node_modules/@dynamic-labs/wallet-connector-core/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ViewContext$2f$ViewContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/ViewContext/ViewContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$utils$2f$functions$2f$isSSR$2f$isSSR$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/utils/functions/isSSR/isSSR.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/colors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$values$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/values.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/index.js [app-ssr] (ecmascript) <module evaluation>");
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
/**
 * Prefetches a resource
 * Adds a link element to the head of the document with the provided attributes
 * when the element is not already present
 * @param {PrefetchProps} prefetchProps
 * @returns {void}
 *
 * @example
 * usePrefetch({
 *  href: 'https://example.com/image.jpg',
 *  as: 'image',
 *  type: 'image/jpeg',
 *  id: 'image-prefetch',
 * });
 */ const usePrefetch = ({ as, href, id, type })=>{
    // Do not run on server side
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$utils$2f$functions$2f$isSSR$2f$isSSR$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSSR"])()) return;
    const predefinedElement = document.head.querySelector(`#${id}`);
    // Do not add the element if it already exists
    if (predefinedElement) return;
    const element = document.createElement('link');
    element.setAttribute('id', id);
    element.setAttribute('rel', 'prefetch');
    element.setAttribute('href', href);
    element.setAttribute('as', as);
    element.setAttribute('type', type);
    document.head.insertAdjacentElement('beforeend', element);
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/utils/functions/createWalletGroupFromWalletOption/createWalletGroupFromWalletOption.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createWalletGroupFromWalletOption": (()=>createWalletGroupFromWalletOption)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$sanitizeName$2f$sanitizeName$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/sanitizeName/sanitizeName.js [app-ssr] (ecmascript)");
'use client';
;
const createWalletGroupFromWalletOption = (walletOption)=>{
    const { metadata } = walletOption.walletConnector;
    const { name } = metadata;
    const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$sanitizeName$2f$sanitizeName$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sanitizeName"])(name);
    return {
        brand: {
            icon: metadata.icon,
            primaryColor: metadata.brandColor
        },
        key,
        name
    };
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/sign-circle.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgSignCircle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _circle, _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgSignCircle = function SvgSignCircle(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 64,
        height: 64,
        viewBox: "0 0 64 64",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _circle || (_circle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("circle", {
        cx: 32,
        cy: 32,
        r: 32,
        fill: "currentColor"
    })), _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M34.048 17.611a5.5 5.5 0 1 1 7.779 7.779l-.611.61.193.193a4.5 4.5 0 0 1 0 6.364l-3.238 3.239a1.125 1.125 0 0 1-1.592-1.591l3.239-3.239a2.25 2.25 0 0 0 0-3.182l-.193-.193-12.704 12.705a1.123 1.123 0 0 1-.523.296l-9 2.25a1.125 1.125 0 0 1-1.34-1.447l2.812-8.438c.055-.166.148-.316.272-.44l14.906-14.906Zm6.188 1.591a3.25 3.25 0 0 0-4.597 0L20.921 33.92l-2.08 6.242 6.709-1.678 14.686-14.686a3.25 3.25 0 0 0 0-4.596ZM24.925 47.375c-2.779 0-4.967-1.275-6.424-2.49l2.89-.723c1.003.562 2.19.963 3.534.963.912 0 1.853-.369 2.856-1.028 1.005-.66 1.976-1.546 2.956-2.465l.255-.24c.865-.812 1.764-1.658 2.624-2.242.918-.624 2.135-1.191 3.413-.7.844.325 1.393.925 1.78 1.658.362.687.612 1.548.855 2.485.111.427.3.841.515 1.12.105.137.196.214.26.253.055.034.08.034.086.034.274 0 .745-.185 1.417-.643.417-.284.774-.568 1.13-.852.221-.177.443-.354.679-.53.628-.47 1.171-.785 1.57-.986a6.86 6.86 0 0 1 .625-.28l.045-.016.016-.006.006-.002h.003s.002-.002.359 1.065l-.357-1.067a1.125 1.125 0 0 1 .721 2.132l-.008.003a4.59 4.59 0 0 0-.394.178 8.472 8.472 0 0 0-1.238.78c-.132.098-.304.235-.5.391-.409.324-.921.73-1.39 1.05-.7.476-1.67 1.033-2.684 1.033-.98 0-1.69-.595-2.127-1.162-.447-.578-.746-1.29-.912-1.93-.247-.95-.442-1.573-.667-2-.201-.38-.383-.525-.598-.608-.184-.07-.552-.075-1.34.46-.704.48-1.472 1.2-2.38 2.053l-.225.211c-.97.91-2.071 1.922-3.26 2.703-1.19.783-2.566 1.398-4.091 1.398Z",
        fill: "#fff"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/utils/functions/getGlobalWalletContext/getGlobalWalletContext.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getGlobalWalletContext": (()=>getGlobalWalletContext)
});
'use client';
const getGlobalWalletContext = ()=>{
    if (typeof window === 'undefined' || !window.isGlobalWalletPopup || !window.globalWalletContext) {
        return {};
    }
    return window.globalWalletContext;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/arrow-circle-right.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgArrowCircleRight)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgArrowCircleRight = function SvgArrowCircleRight(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm10.293-3.707a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L13.586 13H8a1 1 0 1 1 0-2h5.586l-1.293-1.293a1 1 0 0 1 0-1.414Z",
        fill: "#ABACB2"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/clock.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgClock)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgClock = function SvgClock(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm10-5a1 1 0 0 1 1 1v3.586l2.707 2.707a1 1 0 0 1-1.414 1.414l-3-3A1 1 0 0 1 11 12V8a1 1 0 0 1 1-1Z",
        fill: "currentColor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/profile-outline.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgProfileOutline)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgProfileOutline = function SvgProfileOutline(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 25,
        height: 24,
        viewBox: "0 0 25 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12.5 4a8 8 0 0 0-6.598 12.526A14.943 14.943 0 0 1 12.5 15c2.366 0 4.606.548 6.598 1.526A8 8 0 0 0 12.5 4Zm7.654 14.436A9.96 9.96 0 0 0 22.5 12c0-5.523-4.477-10-10-10s-10 4.477-10 10a9.96 9.96 0 0 0 2.37 6.464A9.978 9.978 0 0 0 12.5 22a9.978 9.978 0 0 0 7.654-3.564ZM17.7 18.08A12.954 12.954 0 0 0 12.5 17c-1.85 0-3.607.386-5.199 1.08A7.968 7.968 0 0 0 12.5 20c1.985 0 3.8-.723 5.199-1.92ZM12.5 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z",
        fill: "currentColor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/utils/functions/shouldFetchNonce/shouldFetchNonce.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "shouldFetchNonce": (()=>shouldFetchNonce)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$isMobile$2f$isMobile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/isMobile/isMobile.js [app-ssr] (ecmascript)");
'use client';
;
const shouldFetchNonce = ({ authMode })=>authMode === 'connect-and-sign' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$isMobile$2f$isMobile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isMobile"])();
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/utils/functions/lastAuthenticatedAccount/index.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "lastAuthenticatedAccount": (()=>lastAuthenticatedAccount)
});
'use client';
const lastAuthenticatedAccount = (dynamicJwtOrUser)=>dynamicJwtOrUser.verifiedCredentials.find((account)=>account.id === dynamicJwtOrUser.lastVerifiedCredentialId);
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/utils/functions/isDisplayOrderPriorityForWeb3/isDisplayOrderPriorityForWeb3.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isDisplayOrderPriorityForWeb3": (()=>isDisplayOrderPriorityForWeb3)
});
'use client';
const isDisplayOrderPriorityForWeb3 = (displayOrder)=>{
    if (displayOrder.length !== 2) return false;
    const [firstPriority, secondPriority] = displayOrder;
    return firstPriority === 'wallet' && secondPriority === 'email';
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/arrow-right.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgArrowRight)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgArrowRight = function SvgArrowRight(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8.862 2.862c.26-.26.682-.26.943 0l4.666 4.667a.667.667 0 0 1 0 .942l-4.666 4.667a.667.667 0 0 1-.943-.943l3.528-3.528H2a.667.667 0 0 1 0-1.334h10.39L8.862 3.805a.667.667 0 0 1 0-.943Z",
        fill: "currentColor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/iphone-face-id.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgIphoneFaceId)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgIphoneFaceId = function SvgIphoneFaceId(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 64,
        height: 64,
        viewBox: "0 0 64 64",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3.25 17.563v-7.188a7.133 7.133 0 0 1 7.125-7.125h7.188a1.625 1.625 0 0 0 0-3.25h-7.188C4.655 0 0 4.654 0 10.375v7.188a1.625 1.625 0 0 0 3.25 0ZM17.563 60.75a1.625 1.625 0 0 1 0 3.25h-7.188C4.655 64 0 59.346 0 53.625v-7.188a1.625 1.625 0 0 1 3.25 0v7.188a7.133 7.133 0 0 0 7.125 7.125h7.188ZM64 46.437v7.188C64 59.345 59.346 64 53.625 64h-7.188a1.625 1.625 0 0 1 0-3.25h7.188a7.133 7.133 0 0 0 7.125-7.125v-7.188a1.625 1.625 0 0 1 3.25 0Zm0-36.062v7.188a1.625 1.625 0 0 1-3.25 0v-7.188a7.133 7.133 0 0 0-7.125-7.125h-7.188a1.625 1.625 0 0 1 0-3.25h7.188C59.345 0 64 4.654 64 10.375ZM43.214 47.302a1.687 1.687 0 0 0-2.29-2.48A13.115 13.115 0 0 1 32 48.313c-3.319 0-6.488-1.239-8.924-3.49a1.688 1.688 0 0 0-2.29 2.48A16.481 16.481 0 0 0 32 51.687c4.17 0 8.153-1.557 11.214-4.385Zm-7.839-23.177v12a4.317 4.317 0 0 1-4.313 4.313h-1.375a1.687 1.687 0 1 1 0-3.376h1.375c.517 0 .938-.42.938-.937v-12a1.687 1.687 0 1 1 3.375 0ZM47 28.844V24.03a1.594 1.594 0 0 0-3.188 0v4.813a1.594 1.594 0 0 0 3.188 0Zm-29.625 0a1.594 1.594 0 0 0 3.188 0V24.03a1.594 1.594 0 0 0-3.188 0v4.813Z",
        fill: "#000"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/logout.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgLogout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgLogout = function SvgLogout(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 14,
        height: 12,
        viewBox: "0 0 14 12",
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3 1.333c-.736 0-1.333.597-1.333 1.334v6.666c0 .737.597 1.334 1.333 1.334h2.667C6.403 10.667 7 10.07 7 9.333v-.666a.667.667 0 0 1 1.333 0v.666A2.667 2.667 0 0 1 5.667 12H3A2.667 2.667 0 0 1 .333 9.333V2.667A2.667 2.667 0 0 1 3 0h2.667a2.667 2.667 0 0 1 2.666 2.667v.666a.667.667 0 1 1-1.333 0v-.666c0-.737-.597-1.334-1.333-1.334H3Zm6.862 1.529c.26-.26.682-.26.943 0l2.666 2.667c.26.26.26.682 0 .942l-2.666 2.667a.667.667 0 0 1-.943-.943l1.529-1.528H3.667a.667.667 0 0 1 0-1.334h7.724L9.862 3.805a.667.667 0 0 1 0-.943Z"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/pencil.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgPencil)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgPencil = function SvgPencil(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 14,
        height: 14,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12.04 1.96a1 1 0 0 0-1.414 0l-.528.528 1.414 1.414.529-.528a1 1 0 0 0 0-1.414Zm-1.47 2.885L9.154 3.431l-7.488 7.488v1.438h1.39l7.512-7.512Zm-.886-3.828a2.333 2.333 0 0 1 3.3 3.3l-9.18 9.178a.666.666 0 0 1-.47.195H1a.667.667 0 0 1-.667-.666v-2.381c0-.177.07-.347.196-.472l9.155-9.154Z",
        fill: "currentColor",
        fillOpacity: 0.65
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/utils/functions/chain/getChainDisplayName.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getChainDisplayName": (()=>getChainDisplayName)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-connector-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3._7679fe86d42f6979f41d87c8de2f235e/node_modules/@dynamic-labs/wallet-connector-core/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$getChainInfo$2f$getChainInfo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-connector-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3._7679fe86d42f6979f41d87c8de2f235e/node_modules/@dynamic-labs/wallet-connector-core/src/utils/getChainInfo/getChainInfo.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/logger.js [app-ssr] (ecmascript)");
'use client';
;
;
const getChainDisplayName = (chain)=>{
    var _a;
    const displayName = (_a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$getChainInfo$2f$getChainInfo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getChainInfoWithOverrides"])(chain)) === null || _a === void 0 ? void 0 : _a.displayName;
    if (!displayName) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].error(`Chain name for "${chain}" not supported`);
        return chain;
    }
    return displayName;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/settings-outline.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgSettingsOutline)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgSettingsOutline = function SvgSettingsOutline(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 25,
        height: 24,
        viewBox: "0 0 25 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9.853 4.081c.674-2.775 4.62-2.775 5.294 0a.724.724 0 0 0 1.08.448c2.44-1.486 5.23 1.305 3.744 3.744a.724.724 0 0 0 .448 1.08c2.775.674 2.775 4.62 0 5.294a.724.724 0 0 0-.448 1.08c1.486 2.44-1.305 5.23-3.744 3.744a.724.724 0 0 0-1.08.448c-.674 2.775-4.62 2.775-5.294 0a.724.724 0 0 0-1.08-.448c-2.44 1.486-5.23-1.305-3.744-3.744a.724.724 0 0 0-.448-1.08c-2.775-.674-2.775-4.62 0-5.294a.724.724 0 0 0 .448-1.08c-1.486-2.44 1.305-5.23 3.744-3.744a.724.724 0 0 0 1.08-.448Zm3.35.472c-.178-.737-1.227-.737-1.407 0a2.724 2.724 0 0 1-4.064 1.684c-.648-.395-1.39.347-.995.995.96 1.575.109 3.63-1.684 4.064-.737.18-.737 1.229 0 1.408a2.724 2.724 0 0 1 1.684 4.064c-.395.648.347 1.39.995.995a2.724 2.724 0 0 1 4.064 1.684c.18.737 1.229.737 1.408 0a2.724 2.724 0 0 1 4.064-1.684c.648.395 1.39-.347.995-.995a2.724 2.724 0 0 1 1.684-4.064c.737-.18.737-1.229 0-1.408a2.724 2.724 0 0 1-1.684-4.064c.395-.648-.347-1.39-.995-.995-1.575.96-3.63.109-4.064-1.684ZM12.5 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z",
        fill: "currentColor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/wallet-outline-v2.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgWalletOutlineV2)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgWalletOutlineV2 = function SvgWalletOutlineV2(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 25,
        height: 24,
        viewBox: "0 0 25 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M15.5 2a2 2 0 0 1 2 2h-12a3.99 3.99 0 0 0-2.935 1.283A4.005 4.005 0 0 1 6.5 2h9ZM6.5 6A4 4 0 0 0 2.5 10v8a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-8a4 4 0 0 0-4-4H6.5ZM20.5 10a2 2 0 0 0-2-2h-12a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8Z",
        fill: "currentColor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/account-and-security.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgAccountAndSecurity)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _rect, _path, _path2;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgAccountAndSecurity = function SvgAccountAndSecurity(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 28,
        height: 28,
        viewBox: "0 0 28 28",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _rect || (_rect = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("rect", {
        width: 28,
        height: 28,
        rx: 14,
        fill: "#4779FF"
    })), _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M5.667 16.083a6.25 6.25 0 1 1 12.5 0 6.25 6.25 0 0 1-12.5 0Z",
        fill: "#fff"
    })), _path2 || (_path2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12.494 8.328a7.897 7.897 0 0 1 7.178 7.178 5.263 5.263 0 1 0-7.178-7.178Z",
        fill: "#fff"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/connect.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgConnect)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _rect, _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgConnect = function SvgConnect(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 28,
        height: 28,
        viewBox: "0 0 28 28",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _rect || (_rect = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("rect", {
        width: 28,
        height: 28,
        rx: 14,
        fill: "#4779FF"
    })), _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M18.667 5.667a2 2 0 0 1 2 2v12.666a2 2 0 0 1-2 2H9.333a2 2 0 0 1-2-2V7.667a2 2 0 0 1 2-2h9.334Z",
        fill: "#fff"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/connected-apps.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgConnectedApps)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _rect, _path, _circle;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgConnectedApps = function SvgConnectedApps(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 28,
        height: 28,
        viewBox: "0 0 28 28",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _rect || (_rect = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("rect", {
        width: 28,
        height: 28,
        rx: 14,
        fill: "#4779FF"
    })), _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9.334 5.667a2 2 0 0 0-2 2v3.891a6.667 6.667 0 0 1 7.743 10.775h3.59a2 2 0 0 0 2-2V7.667a2 2 0 0 0-2-2H9.333Z",
        fill: "#fff"
    })), _circle || (_circle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("circle", {
        cx: 10.666,
        cy: 17.334,
        fill: "#fff",
        r: 5
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/wallet-with-sunglasses.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgWalletWithSunglasses)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _g, _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgWalletWithSunglasses = function SvgWalletWithSunglasses(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 64,
        height: 64,
        viewBox: "0 0 64 64",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _g || (_g = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("g", {
        fill: "#4779FF"
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M40.002 5.333a5.333 5.333 0 0 1 5.333 5.334h-32c-3.094 0-5.88 1.317-7.83 3.422.901-4.98 5.258-8.756 10.497-8.756h24ZM58.667 26.667C58.667 20.776 53.891 16 48 16H16c-5.89 0-10.666 4.776-10.666 10.667V48c0 5.891 4.775 10.667 10.666 10.667h32c5.891 0 10.667-4.776 10.667-10.667V26.667Z"
    }))), _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M35.928 37.787a7.431 7.431 0 1 0 14.862 0 7.431 7.431 0 0 0-14.862 0Zm-22.88 0a7.43 7.43 0 1 0 14.861 0 7.43 7.43 0 0 0-14.862 0Zm30.311-9.037a9.035 9.035 0 0 1 7.566 4.103h1.522a.803.803 0 0 1 0 1.606h-.688a8.98 8.98 0 0 1 .638 3.328c0 4.984-4.054 9.038-9.038 9.038-4.983 0-9.037-4.054-9.037-9.038 0-1.114.204-2.18.575-3.166a3.718 3.718 0 0 0-3.276-1.926 3.748 3.748 0 0 0-2.903 1.383 8.983 8.983 0 0 1 .798 3.71c0 4.983-4.054 9.037-9.038 9.037-4.983 0-9.037-4.054-9.037-9.038a8.98 8.98 0 0 1 .637-3.328h-.525a.803.803 0 1 1 0-1.606h1.36a9.035 9.035 0 0 1 7.565-4.103 9.03 9.03 0 0 1 7.404 3.864 5.354 5.354 0 0 1 3.74-1.526c1.628 0 3.102.72 4.09 1.893a9.036 9.036 0 0 1 7.647-4.231Z",
        fill: "var(--dynamic-base-2)",
        stroke: "var(--dynamic-base-2)",
        strokeWidth: 0.5
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/backupArrow.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgBackupArrow)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgBackupArrow = function SvgBackupArrow(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M4.955 12.806a7.373 7.373 0 1 0 9.14-7.07l.35.358a.922.922 0 1 1-1.32 1.287l-1.82-1.866a.922.922 0 0 1 .015-1.303l1.866-1.82a.922.922 0 0 1 1.287 1.32l-.182.177a9.217 9.217 0 1 1-6.548 1.01.922.922 0 0 1 .918 1.598 7.37 7.37 0 0 0-3.706 6.31Z",
        fill: "currentColor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/export-private-key.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgExportPrivateKey)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgExportPrivateKey = function SvgExportPrivateKey(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 28,
        height: 28,
        viewBox: "0 0 28 28",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M19.834 4.667a2.333 2.333 0 0 0-2.333-2.334H7a4.668 4.668 0 0 0-4.592 3.83 4.654 4.654 0 0 1 3.425-1.496h14ZM21 7a4.667 4.667 0 0 1 4.667 4.667V21A4.667 4.667 0 0 1 21 25.667H7A4.667 4.667 0 0 1 2.333 21v-9.333A4.667 4.667 0 0 1 7 7h14Zm-4.915 3.792a3.649 3.649 0 1 1 0 7.297 3.649 3.649 0 0 1 0-7.297Zm0 1.824a1.824 1.824 0 1 1 0 3.649 1.824 1.824 0 0 1 0-3.649Zm-3.16 5.115a4.565 4.565 0 0 1-.714-.924l-4.336 4.336 1.29 1.29 1.254-1.253 1.279 1.278 1.29-1.29-1.279-1.278 1.721-1.722a4.598 4.598 0 0 1-.505-.437Z",
        fill: "currentColor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/export-recovery-phrase.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgExportRecoveryPhrase)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgExportRecoveryPhrase = function SvgExportRecoveryPhrase(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 28,
        height: 28,
        viewBox: "0 0 28 28",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M17.5 2.333a2.333 2.333 0 0 1 2.334 2.334h-14A4.654 4.654 0 0 0 2.41 6.164 4.668 4.668 0 0 1 7 2.334h10.5Zm8.167 9.334A4.667 4.667 0 0 0 21 7H7a4.667 4.667 0 0 0-4.667 4.667V21A4.667 4.667 0 0 0 7 25.667h14A4.667 4.667 0 0 0 25.667 21v-9.333Zm-16.8.933A.933.933 0 1 1 7 12.6a.933.933 0 0 1 1.867 0Zm2.426-.933a.933.933 0 1 0 0 1.866h8.214a.933.933 0 1 0 0-1.866h-8.214Zm-2.426 4.666a.933.933 0 1 1-1.867 0 .933.933 0 0 1 1.867 0Zm2.426-.933a.933.933 0 1 0 0 1.867h8.214a.933.933 0 0 0 0-1.867h-8.214Zm-2.426 4.667a.933.933 0 1 1-1.867 0 .933.933 0 0 1 1.867 0Zm2.24-.934a.933.933 0 0 0 0 1.867h8.213a.933.933 0 1 0 0-1.867h-8.213Z",
        fill: "currentColor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/lock.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgLock)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgLock = function SvgLock(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 7a5 5 0 0 1 10 0v3h1a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3h1V7Zm2 3h6V7a3 3 0 1 0-6 0v3Zm-3 2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H6Zm6 2a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1Z",
        fill: "currentColor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/monitor-and-device.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgMonitorAndDevice)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgMonitorAndDevice = function SvgMonitorAndDevice(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M15.465 22H18a1 1 0 0 0 .707-1.707l-.804-.804L17.53 18H21a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3h-5.535c.34.588.535 1.271.535 2h5a1 1 0 0 1 1 1v7h-6v2h6v1a1 1 0 0 1-1 1h-5v4a3.98 3.98 0 0 1-.535 2ZM0 5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V5Zm3-1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H3Zm3 14a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Z",
        fill: "currentColor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/session.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgSession)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgSession = function SvgSession(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 4a8 8 0 1 0 7.791 9.823l-.384.384a1 1 0 0 1-1.414-1.414l2-2a1 1 0 0 1 1.415 0l2 2a1 1 0 0 1-1.415 1.414l-.195-.195C20.867 18.57 16.834 22 12 22 6.477 22 2 17.523 2 12S6.477 2 12 2a9.996 9.996 0 0 1 8.616 4.92 1 1 0 0 1-1.723 1.018A7.996 7.996 0 0 0 12 4Zm0 2a1 1 0 0 1 1 1v4.465l2.555 1.703a1 1 0 0 1-1.11 1.664l-3-2A1 1 0 0 1 11 12V7a1 1 0 0 1 1-1Z",
        fill: "currentColor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/chevron-right.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgChevronRight)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgChevronRight = function SvgChevronRight(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5.529 13.138a.667.667 0 0 1 0-.943L9.724 8 5.529 3.805a.667.667 0 1 1 .943-.943l4.666 4.667c.26.26.26.682 0 .942l-4.666 4.667a.667.667 0 0 1-.943 0Z",
        fill: "currentColor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/add-thick.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgAddThick)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgAddThick = function SvgAddThick(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8 3.333c.368 0 .667.299.667.667v3.333H12a.667.667 0 0 1 0 1.334H8.667V12a.667.667 0 1 1-1.333 0V8.667H4a.667.667 0 1 1 0-1.334h3.333V4c0-.368.299-.667.667-.667Z",
        fill: "#ABACB2"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/globe.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgGlobe)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgGlobe = function SvgGlobe(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 28,
        height: 28,
        viewBox: "0 0 28 28",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M4.738 12.84h4.616c.09-2.54.47-4.854 1.064-6.634.114-.342.238-.671.373-.984a9.352 9.352 0 0 0-6.053 7.617ZM14 2.332C7.55 2.333 2.334 7.563 2.334 14c0 6.437 5.217 11.667 11.666 11.667 6.45 0 11.667-5.23 11.667-11.667C25.667 7.563 20.45 2.333 14 2.333Zm0 2.322s.007 0 .016.003a.343.343 0 0 1 .077.037c.08.05.202.151.351.34.304.387.63 1.018.924 1.901.502 1.51.855 3.568.944 5.903h-4.623c.089-2.335.441-4.394.944-5.903.294-.883.619-1.514.923-1.9.15-.19.271-.291.352-.34a.343.343 0 0 1 .076-.038L14 4.655ZM9.354 15.161H4.738a9.352 9.352 0 0 0 6.052 7.616 12.295 12.295 0 0 1-.372-.983c-.593-1.78-.974-4.095-1.064-6.633ZM14 23.345s-.006 0-.016-.003a.34.34 0 0 1-.076-.037c-.081-.05-.202-.151-.352-.341-.304-.386-.629-1.017-.923-1.9-.503-1.51-.855-3.568-.944-5.903h4.623c-.09 2.335-.442 4.394-.944 5.902-.295.884-.48 1.3-.784 1.687-.15.19-.41.505-.491.555a.34.34 0 0 1-.077.037l-.016.003c1.127 0 2.209-.2 3.21-.568a9.351 9.351 0 0 0 6.052-7.616h-4.616c-.09 2.539-.47 4.853-1.064 6.633-.113.342-.238.671-.372.983m1.436-9.938c-.09-2.539-.47-4.853-1.064-6.633a12.305 12.305 0 0 0-.372-.984 9.351 9.351 0 0 1 6.052 7.617h-4.616Z",
        fill: "currentColor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/link-circle.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgLinkCircle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path, _g, _defs;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgLinkCircle = function SvgLinkCircle(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0 2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z",
        fill: "#ABACB2"
    })), _g || (_g = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("g", {
        clipPath: "url(#link-circle_svg__a)"
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M13.58 8.58a1.3 1.3 0 1 1 1.84 1.84l-2 2a1.3 1.3 0 0 1-1.84 0 .7.7 0 0 0-.99.99 2.7 2.7 0 0 0 3.82 0l2-2a2.7 2.7 0 0 0-3.82-3.82l-.549.55a.7.7 0 1 0 .99.99l.55-.55Zm-3 3a1.3 1.3 0 0 1 1.84 0 .7.7 0 0 0 .99-.99 2.7 2.7 0 0 0-3.82 0l-2 2a2.7 2.7 0 0 0 3.82 3.82l.55-.552a.7.7 0 0 0-.99-.99l-.55.551a1.3 1.3 0 1 1-1.84-1.838l2-2Z",
        fill: "#ABACB2",
        stroke: "#ABACB2",
        strokeWidth: 0.4,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }))), _defs || (_defs = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("defs", null, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("clipPath", {
        id: "link-circle_svg__a"
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fill: "#fff",
        transform: "translate(6 6)",
        d: "M0 0h12v12H0z"
    })))));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/qr-code.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgQrCode)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgQrCode = function SvgQrCode(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 28,
        height: 28,
        viewBox: "0 0 28 28",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3.5 5.833A2.333 2.333 0 0 1 5.833 3.5h2.334A2.333 2.333 0 0 1 10.5 5.833v2.334A2.333 2.333 0 0 1 8.167 10.5H5.833A2.333 2.333 0 0 1 3.5 8.167V5.833Zm4.667 0H5.833v2.334h2.334V5.833ZM14 3.5c.644 0 1.167.522 1.167 1.167v1.166a1.167 1.167 0 0 1-2.334 0V4.667c0-.645.523-1.167 1.167-1.167Zm3.5 2.333A2.333 2.333 0 0 1 19.833 3.5h2.334A2.333 2.333 0 0 1 24.5 5.833v2.334a2.333 2.333 0 0 1-2.333 2.333h-2.334A2.333 2.333 0 0 1 17.5 8.167V5.833Zm4.667 0h-2.334v2.334h2.334V5.833ZM14 9.333c.644 0 1.167.523 1.167 1.167v2.333h3.511a1.167 1.167 0 0 1 0 2.334H14A1.167 1.167 0 0 1 12.833 14v-3.5c0-.644.523-1.167 1.167-1.167ZM3.5 14c0-.644.522-1.167 1.167-1.167h4.666a1.167 1.167 0 0 1 0 2.334H4.667A1.167 1.167 0 0 1 3.5 14Zm18.667 0c0-.644.522-1.167 1.166-1.167h.012a1.167 1.167 0 0 1 0 2.334h-.012A1.167 1.167 0 0 1 22.167 14ZM3.5 19.833A2.333 2.333 0 0 1 5.833 17.5h2.334a2.333 2.333 0 0 1 2.333 2.333v2.334A2.333 2.333 0 0 1 8.167 24.5H5.833A2.333 2.333 0 0 1 3.5 22.167v-2.334Zm4.667 0H5.833v2.334h2.334v-2.334Zm4.666-1.166c0-.645.523-1.167 1.167-1.167h2.333a1.167 1.167 0 1 1 0 2.333h-1.166v3.5a1.167 1.167 0 0 1-2.334 0v-4.666Zm7 0c0-.645.523-1.167 1.167-1.167h2.333a1.167 1.167 0 1 1 0 2.333H21a1.167 1.167 0 0 1-1.167-1.166ZM17.5 23.333c0-.644.522-1.166 1.167-1.166h4.666a1.167 1.167 0 1 1 0 2.333h-4.666a1.167 1.167 0 0 1-1.167-1.167Z",
        fill: "currentColor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/white-check-black-circle.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgWhiteCheckBlackCircle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _g, _defs;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgWhiteCheckBlackCircle = function SvgWhiteCheckBlackCircle(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 80,
        height: 80,
        viewBox: "0 0 80 80",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _g || (_g = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("g", {
        clipPath: "url(#white-check-black-circle_svg__a)"
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M40 0c22.091 0 40 17.909 40 40S62.091 80 40 80 0 62.091 0 40 17.909 0 40 0Zm16.056 28.11a2.083 2.083 0 0 0-2.947 0L33.75 47.47l-6.86-6.86a2.083 2.083 0 1 0-2.947 2.947l8.333 8.333a2.083 2.083 0 0 0 2.947 0l20.833-20.833a2.083 2.083 0 0 0 0-2.947Z",
        fill: "#0A0B0C"
    }))), _defs || (_defs = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("defs", null, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("clipPath", {
        id: "white-check-black-circle_svg__a"
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("rect", {
        width: 80,
        height: 80,
        rx: 40,
        fill: "#fff"
    })))));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/monitor.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgMonitor)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgMonitor = function SvgMonitor(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1.667 4.167a2.5 2.5 0 0 1 2.5-2.5h11.666a2.5 2.5 0 0 1 2.5 2.5V12.5a2.5 2.5 0 0 1-2.5 2.5h-2.89l.31 1.241.67.67a.833.833 0 0 1-.59 1.423H6.667a.833.833 0 0 1-.59-1.423l.67-.67.31-1.24h-2.89a2.5 2.5 0 0 1-2.5-2.5V4.166Zm1.666 7.5v.833c0 .46.374.834.834.834h11.667c.46 0 .833-.373.833-.834v-.833H3.333ZM16.667 10H3.333V4.167c0-.46.374-.833.834-.833h11.666c.46 0 .834.373.834.833V10Zm-5.443 5H8.776l-.417 1.667h3.282L11.224 15Z",
        fill: "currentColor"
    })));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/trash.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgTrash)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
var _path;
var _excluded = [
    "title",
    "titleId"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
var SvgTrash = function SvgTrash(_ref) {
    var title = _ref.title, titleId = _ref.titleId, props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5.333 2.666c0-.736.597-1.333 1.334-1.333h2.666c.737 0 1.334.597 1.334 1.333V4h2.666a.667.667 0 1 1 0 1.333h-.046l-.534 7.476a2 2 0 0 1-1.995 1.857H5.241a2 2 0 0 1-1.994-1.857l-.534-7.476h-.046a.667.667 0 0 1 0-1.333H5.333V2.666ZM4.05 5.333l.528 7.38c.024.35.315.62.664.62h5.518c.35 0 .64-.27.665-.62l.527-7.38H4.049ZM9.333 4H6.667V2.666h2.666V4ZM6.667 6.666c.368 0 .666.299.666.667v4a.667.667 0 1 1-1.333 0v-4c0-.368.298-.667.667-.667Zm2.666 0c.369 0 .667.299.667.667v4a.667.667 0 1 1-1.333 0v-4c0-.368.298-.667.666-.667Z",
        fill: "currentColor"
    })));
};
;
}}),

};

//# sourceMappingURL=96e3f_%40dynamic-labs_sdk-react-core_src_lib_shared_efed80aa._.js.map