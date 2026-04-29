(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/internalImplementation/utils/useStoreWithSelector/useStoreWithSelector.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useStoreWithSelector": (()=>useStoreWithSelector)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
/**
 * Custom hook that provides a slice of the store state based on a selector function.
 *
 * @template TState - The type of the store state.
 * @template StateSlice - The type of the selected slice of the store state.
 * @param {StoreApi<TState>} api - The store API object.
 * @param {(state: TState) => StateSlice} selector - The selector function to extract the desired store slice.
 * @returns {StateSlice} - The selected slice of the store state.
 *
 * @example
 * const store = createStore(() => ({
 *   count: 0,
 * }))
 *
 * const count = useStoreWithSelector(store, ({ count }) => count);
 */ const useStoreWithSelector = (api, selector)=>{
    /**
     * The cache is either an object or undefined. This allows us to differentiate between:
     * 1. A selector that resolved to an undefined value
     * 2. A cache that hasn't been populated yet
     */ const serverSnapshotCacheRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const getSnapshot = ()=>selector(api.getState());
    /**
     * Cache the server snapshot in a ref to prevent infinite loops in Next.js SSR
     *
     * Next.js can re-render components multiple times during server-side rendering.
     * If we don't cache the result of getServerSnapshot, it may cause an infinite loop
     * as the component keeps re-rendering with new snapshots.
     *
     * Prevents this log "Warning: The result of getServerSnapshot should be cached to avoid an infinite loop"
     */ const getServerSnapshot = ()=>{
        if (serverSnapshotCacheRef.current === undefined) {
            serverSnapshotCacheRef.current = {
                value: selector(api.getInitialState())
            };
        }
        return serverSnapshotCacheRef.current.value;
    };
    const slice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(api.subscribe, getSnapshot, getServerSnapshot);
    return slice;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/stateConfig.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createInitialState": (()=>createInitialState),
    "storeVersion": (()=>storeVersion),
    "transformStateForLocalStorage": (()=>transformStateForLocalStorage)
});
'use client';
/**
 * Returns the initial state for the SdkStore
 */ const createInitialState = (dynamicContextProps)=>{
    var _a, _b;
    const initialAuthMode = (_b = (_a = dynamicContextProps.settings) === null || _a === void 0 ? void 0 : _a.initialAuthenticationMode) !== null && _b !== void 0 ? _b : 'connect-and-sign';
    return {
        authMode: initialAuthMode,
        connectedWalletsInfo: [],
        connectorsInitializing: {},
        dynamicContextProps,
        loadingAndLifecycle: {
            initialWalletVerificationInProgress: false,
            sessionValidation: false
        },
        multichainTokenBalancesState: {
            error: undefined,
            isError: false,
            isLoading: false,
            multichainTokenBalances: undefined,
            requestsKey: undefined
        },
        nonce: {
            expiresAt: undefined,
            nonce: undefined
        },
        primaryWalletId: undefined,
        sendBalanceState: {
            amount: undefined,
            chainName: undefined,
            nativePrice: undefined
        },
        tokenBalancesState: {
            error: undefined,
            isError: false,
            isLoading: false,
            tokenBalances: undefined
        },
        user: undefined,
        walletOptions: {
            groups: {},
            walletConnectorOptions: []
        }
    };
};
/**
 * Filters out which variables should be stored to local storage.
 * Also allows transforming them before storage.
 */ const transformStateForLocalStorage = (state)=>({
        connectedWalletsInfo: state.connectedWalletsInfo,
        nonce: state.nonce,
        primaryWalletId: state.primaryWalletId,
        user: state.user
    });
/**
 * The store version works to invalidate old versions of the stored data
 * it should only be updated when the schema saved to local storage has a braking change.
 *
 * update using the current date in the format YYYY-MM-DD
 */ const storeVersion = '2025-02-21';
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/internalImplementation/utils/syncLegacyStorage/syncLegacyStorage.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "syncLegacyStorage": (()=>syncLegacyStorage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$StorageService$2f$StorageService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/StorageService/StorageService.js [app-client] (ecmascript)");
'use client';
;
const AUTH_USER = 'dynamic_authenticated_user';
const syncLegacyStorage = (store)=>{
    const legacyUser = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$StorageService$2f$StorageService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageService"].getItem(AUTH_USER);
    if (Boolean(legacyUser) && !store.getState().user) {
        store.setState({
            user: legacyUser !== null && legacyUser !== void 0 ? legacyUser : undefined
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$StorageService$2f$StorageService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageService"].removeItem(AUTH_USER);
    }
    return store;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/internalImplementation/store.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getStore": (()=>getStore),
    "initializeStore": (()=>initializeStore),
    "removeStoreInstance": (()=>removeStoreInstance)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$store$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$store$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+store@4.73.2/node_modules/@dynamic-labs/store/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$store$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$store$2f$src$2f$lib$2f$persist$2f$persist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+store@4.73.2/node_modules/@dynamic-labs/store/src/lib/persist/persist.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$store$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$store$2f$src$2f$lib$2f$createStore$2f$createStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+store@4.73.2/node_modules/@dynamic-labs/store/src/lib/createStore/createStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$localStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/localStorage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/values.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$stateConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/stateConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$internalImplementation$2f$utils$2f$syncLegacyStorage$2f$syncLegacyStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/internalImplementation/utils/syncLegacyStorage/syncLegacyStorage.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
let store;
const getStore = ()=>{
    if (!store) {
        throw new Error('Store not initialized');
    }
    return store;
};
const removeStoreInstance = ()=>{
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    store = undefined;
};
const initializeStore = (props)=>{
    var _a;
    if (store) {
        return;
    }
    const { localStorageSuffix } = (_a = props.settings) !== null && _a !== void 0 ? _a : {};
    const persistName = localStorageSuffix ? `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$localStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORE_STORAGE_KEY"]}_${localStorageSuffix}` : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$localStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORE_STORAGE_KEY"];
    store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$internalImplementation$2f$utils$2f$syncLegacyStorage$2f$syncLegacyStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["syncLegacyStorage"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$store$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$store$2f$src$2f$lib$2f$persist$2f$persist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])({
        name: persistName,
        partialize: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$stateConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformStateForLocalStorage"],
        storage: getStorage(),
        // Map each entry to its initialValue
        store: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$store$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$store$2f$src$2f$lib$2f$createStore$2f$createStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStore"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$stateConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createInitialState"])(props)),
        version: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$stateConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storeVersion"]
    }));
};
const getStorage = ()=>{
    if (typeof localStorage === 'undefined') {
        return {
            getItem: ()=>null,
            setItem: ()=>{}
        };
    }
    return window.localStorage;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/internalImplementation/utils/createStoreState/createStoreState.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createStoreState": (()=>createStoreState)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$internalImplementation$2f$utils$2f$useStoreWithSelector$2f$useStoreWithSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/internalImplementation/utils/useStoreWithSelector/useStoreWithSelector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$internalImplementation$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/internalImplementation/store.js [app-client] (ecmascript)");
'use client';
;
;
const createStoreState = (variable)=>{
    const capitalizedName = variable[0].toUpperCase() + variable.slice(1);
    const useValue = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$internalImplementation$2f$utils$2f$useStoreWithSelector$2f$useStoreWithSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStoreWithSelector"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$internalImplementation$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStore"])(), {
            "createStoreState.useValue.useStoreWithSelector": (state)=>state[variable]
        }["createStoreState.useValue.useStoreWithSelector"]);
    const setValue = (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$internalImplementation$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStore"])().setState(Object.assign(Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$internalImplementation$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStore"])().getState()), {
            [variable]: value
        }));
    const getValue = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$internalImplementation$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStore"])().getState()[variable];
    const resetValue = ()=>setValue((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$internalImplementation$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStore"])().getInitialState()[variable]);
    return {
        [`use${capitalizedName}`]: useValue,
        [`get${capitalizedName}`]: getValue,
        [`set${capitalizedName}`]: setValue,
        [`reset${capitalizedName}`]: resetValue
    };
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/loadingAndLifecycle/loadingAndLifecycle.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getLoadingAndLifecycle": (()=>getLoadingAndLifecycle),
    "setIsInitialWalletVerificationInProgress": (()=>setIsInitialWalletVerificationInProgress),
    "setLoadingAndLifecycle": (()=>setLoadingAndLifecycle),
    "setSessionValidation": (()=>setSessionValidation),
    "useLoadingAndLifecycle": (()=>useLoadingAndLifecycle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$internalImplementation$2f$utils$2f$createStoreState$2f$createStoreState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/internalImplementation/utils/createStoreState/createStoreState.js [app-client] (ecmascript)");
'use client';
;
const { getLoadingAndLifecycle, setLoadingAndLifecycle, useLoadingAndLifecycle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$internalImplementation$2f$utils$2f$createStoreState$2f$createStoreState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStoreState"])('loadingAndLifecycle');
const setIsInitialWalletVerificationInProgress = (isInitialWalletVerificationInProgress)=>{
    setLoadingAndLifecycle(Object.assign(Object.assign({}, getLoadingAndLifecycle()), {
        initialWalletVerificationInProgress: isInitialWalletVerificationInProgress
    }));
};
const setSessionValidation = (sessionValidation)=>{
    setLoadingAndLifecycle(Object.assign(Object.assign({}, getLoadingAndLifecycle()), {
        sessionValidation
    }));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/authMode/authMode.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getAuthMode": (()=>getAuthMode),
    "setAuthMode": (()=>setAuthMode),
    "useAuthMode": (()=>useAuthMode)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$internalImplementation$2f$utils$2f$createStoreState$2f$createStoreState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/internalImplementation/utils/createStoreState/createStoreState.js [app-client] (ecmascript)");
'use client';
;
const { getAuthMode, setAuthMode, useAuthMode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$internalImplementation$2f$utils$2f$createStoreState$2f$createStoreState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStoreState"])('authMode');
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/dynamicContextProps/defaultDynamicSettings.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "PUBLIC_PROJECT_LIVE_ENVIRONMENT_ID": (()=>PUBLIC_PROJECT_LIVE_ENVIRONMENT_ID),
    "defaultDynamicSettings": (()=>defaultDynamicSettings)
});
'use client';
const PUBLIC_PROJECT_LIVE_ENVIRONMENT_ID = '2762a57b-faa4-41ce-9f16-abff9300e2c9';
/**
 * These values will override undefined values in the dynamic context settings.
 */ const deviceRegistrationModalDefault = {
    enabled: true
};
const defaultDynamicSettings = {
    appLogoUrl: 'https://demo.dynamic.xyz/assets/dynamic-logo.svg',
    appName: 'Dynamic Example',
    debugError: false,
    deepLinkPreference: 'native',
    detectNewWalletsForLinking: false,
    deviceRegistrationModal: deviceRegistrationModalDefault,
    displaySiweStatement: true,
    enableConnectOnlyFallback: false,
    enableVisitTrackingOnConnectOnly: true,
    initialAuthenticationMode: 'connect-and-sign',
    logLevel: 'WARN',
    shadowDOMEnabled: true,
    showLockedWalletView: false,
    tokensFilter: (tokens)=>tokens,
    useMetamaskSdk: true
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/dynamicContextProps/dynamicContextProps.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "applyDefaultSettings": (()=>applyDefaultSettings),
    "getBridgeChains": (()=>getBridgeChains),
    "getDynamicContextProps": (()=>getDynamicContextProps),
    "getDynamicSettings": (()=>getDynamicSettings),
    "getEnvironmentId": (()=>getEnvironmentId),
    "setDynamicContextProps": (()=>setDynamicContextProps),
    "setEnvironmentId": (()=>setEnvironmentId),
    "useApiBaseUrl": (()=>useApiBaseUrl),
    "useDynamicContextProps": (()=>useDynamicContextProps),
    "useDynamicSettings": (()=>useDynamicSettings),
    "useEnvironmentId": (()=>useEnvironmentId),
    "useSyncDynamicContextProps": (()=>useSyncDynamicContextProps)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$MissingEnvironmentIdError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/MissingEnvironmentIdError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$env$2f$getEnvVarWithFallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/env/getEnvVarWithFallback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$logger$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$logger$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+logger@4.73.2/node_modules/@dynamic-labs/logger/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$logger$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$logger$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+logger@4.73.2/node_modules/@dynamic-labs/logger/src/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$config$2f$ApiEndpoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/config/ApiEndpoint.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$internalImplementation$2f$utils$2f$createStoreState$2f$createStoreState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/internalImplementation/utils/createStoreState/createStoreState.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$dynamicContextProps$2f$defaultDynamicSettings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/dynamicContextProps/defaultDynamicSettings.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const { getDynamicContextProps, setDynamicContextProps, useDynamicContextProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$internalImplementation$2f$utils$2f$createStoreState$2f$createStoreState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStoreState"])('dynamicContextProps');
const getDynamicSettings = ()=>applyDefaultSettings(getDynamicContextProps().settings);
const useDynamicSettings = ()=>applyDefaultSettings(useDynamicContextProps().settings);
const getEnvironmentId = ()=>getDynamicSettings().environmentId;
const useEnvironmentId = ()=>useDynamicSettings().environmentId;
const setEnvironmentId = (environmentId)=>{
    const props = getDynamicContextProps();
    setDynamicContextProps(Object.assign(Object.assign({}, props), {
        settings: Object.assign(Object.assign({}, props.settings), {
            environmentId
        })
    }));
};
const useApiBaseUrl = ()=>useDynamicSettings().apiBaseUrl;
const getBridgeChains = ()=>getDynamicSettings().bridgeChains;
const applyDefaultSettings = (settings)=>{
    const newSettings = Object.assign({}, settings);
    Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$dynamicContextProps$2f$defaultDynamicSettings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultDynamicSettings"]).forEach((key)=>{
        const typedKey = key;
        if (newSettings[typedKey] === undefined) {
            // @ts-expect-error TS fails to infer this type properly
            newSettings[typedKey] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$dynamicContextProps$2f$defaultDynamicSettings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultDynamicSettings"][typedKey];
        }
    });
    return newSettings;
};
const useSyncDynamicContextProps = ({ settings, emitErrors, enableInstrumentation, locale, theme })=>{
    const environmentId = useEnvironmentId();
    if (!environmentId) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$MissingEnvironmentIdError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MissingEnvironmentIdError"]();
    }
    // We don't want to update the env id here.
    // If it changes, the user should be logged out and we will detect that in useValidateSession.
    settings.environmentId = environmentId;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSyncDynamicContextProps.useEffect": ()=>{
            if (environmentId === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$dynamicContextProps$2f$defaultDynamicSettings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PUBLIC_PROJECT_LIVE_ENVIRONMENT_ID"]) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].warn(`WARNING: DYNAMIC is using a test environment ID ${environmentId}. Please sign up on https://app.dynamic.xyz/ to get your production environment ID.`);
            }
            if (settings.logLevel) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$logger$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$logger$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Logger"].setLogLevel(settings.logLevel);
            }
            const apiBaseUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$env$2f$getEnvVarWithFallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEnvVarWithFallback"])('DYNAMIC_API_BASE_URL', settings.apiBaseUrl || '');
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$config$2f$ApiEndpoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].setBaseUrl(apiBaseUrl);
            setDynamicContextProps({
                emitErrors,
                enableInstrumentation,
                locale,
                settings,
                theme
            });
        }
    }["useSyncDynamicContextProps.useEffect"], [
        emitErrors,
        enableInstrumentation,
        environmentId,
        locale,
        settings,
        theme
    ]);
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/primaryWalletId/primaryWalletId.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getPrimaryWalletId": (()=>getPrimaryWalletId),
    "resetPrimaryWalletId": (()=>resetPrimaryWalletId),
    "setPrimaryWalletId": (()=>setPrimaryWalletId),
    "usePrimaryWalletId": (()=>usePrimaryWalletId)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$internalImplementation$2f$utils$2f$createStoreState$2f$createStoreState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/internalImplementation/utils/createStoreState/createStoreState.js [app-client] (ecmascript)");
'use client';
;
const { getPrimaryWalletId, setPrimaryWalletId, usePrimaryWalletId, resetPrimaryWalletId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$internalImplementation$2f$utils$2f$createStoreState$2f$createStoreState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStoreState"])('primaryWalletId');
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/connectedWalletsInfo/connectedWalletsInfo.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getConnectedWalletsInfo": (()=>getConnectedWalletsInfo),
    "resetConnectedWalletsInfo": (()=>resetConnectedWalletsInfo),
    "setConnectedWalletsInfo": (()=>setConnectedWalletsInfo),
    "useConnectedWalletsInfo": (()=>useConnectedWalletsInfo)
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$getWaasAddressTypeLabel$2f$getWaasAddressTypeLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getWaasAddressTypeLabel/getWaasAddressTypeLabel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$events$2f$dynamicEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/events/dynamicEvents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$client$2f$extension$2f$unverifiedWalletAccounts$2f$setUnverifiedWalletAccounts$2f$setUnverifiedWalletAccounts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/client/extension/unverifiedWalletAccounts/setUnverifiedWalletAccounts/setUnverifiedWalletAccounts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$internalImplementation$2f$utils$2f$createStoreState$2f$createStoreState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/internalImplementation/utils/createStoreState/createStoreState.js [app-client] (ecmascript)");
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
const { getConnectedWalletsInfo, resetConnectedWalletsInfo: resetConnectedWalletsInfoStore, setConnectedWalletsInfo: setConnectedWalletsInfoStore, useConnectedWalletsInfo } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$internalImplementation$2f$utils$2f$createStoreState$2f$createStoreState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStoreState"])('connectedWalletsInfo');
// We need to sync the unverified wallet accounts with the connected wallets info
// for the JS SDK to know when there's an active "session" and not do things like refetch project settings, etc
const resetConnectedWalletsInfo = ()=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$client$2f$extension$2f$unverifiedWalletAccounts$2f$setUnverifiedWalletAccounts$2f$setUnverifiedWalletAccounts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setUnverifiedWalletAccounts"])([]);
    resetConnectedWalletsInfoStore();
};
const setConnectedWalletsInfo = (value)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$client$2f$extension$2f$unverifiedWalletAccounts$2f$setUnverifiedWalletAccounts$2f$setUnverifiedWalletAccounts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setUnverifiedWalletAccounts"])(value);
    setConnectedWalletsInfoStore(value);
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/walletOptions/walletOptions.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getWalletConnectorOptions": (()=>getWalletConnectorOptions),
    "getWalletGroups": (()=>getWalletGroups),
    "getWalletOptions": (()=>getWalletOptions),
    "mergeWalletConnectorOptions": (()=>mergeWalletConnectorOptions),
    "mergeWalletGroups": (()=>mergeWalletGroups),
    "setWalletConnectorOptions": (()=>setWalletConnectorOptions),
    "setWalletGroups": (()=>setWalletGroups),
    "useWalletConnectorOptions": (()=>useWalletConnectorOptions),
    "useWalletGroups": (()=>useWalletGroups),
    "useWalletOptions": (()=>useWalletOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$internalImplementation$2f$utils$2f$createStoreState$2f$createStoreState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/internalImplementation/utils/createStoreState/createStoreState.js [app-client] (ecmascript)");
'use client';
;
const walletOptionsState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$internalImplementation$2f$utils$2f$createStoreState$2f$createStoreState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStoreState"])('walletOptions');
const { getWalletOptions, useWalletOptions } = walletOptionsState;
const getWalletConnectorOptions = ()=>getWalletOptions().walletConnectorOptions;
const useWalletConnectorOptions = ()=>useWalletOptions().walletConnectorOptions;
const setWalletConnectorOptions = (walletConnectorOptions)=>{
    const options = getWalletOptions();
    walletOptionsState.setWalletOptions(Object.assign(Object.assign({}, options), {
        walletConnectorOptions
    }));
};
const getWalletGroups = ()=>getWalletOptions().groups;
const useWalletGroups = ()=>useWalletOptions().groups;
const setWalletGroups = (groups)=>{
    const options = getWalletOptions();
    walletOptionsState.setWalletOptions(Object.assign(Object.assign({}, options), {
        groups
    }));
};
/**
 * Merges the current wallet groups with the new groups.
 * @param groups - The new wallet groups to merge.
 */ const mergeWalletGroups = (groups)=>{
    const currentGroups = getWalletGroups();
    const mergedGroups = Object.assign(Object.assign({}, currentGroups), groups);
    setWalletGroups(mergedGroups);
};
/**
 * Merges the current wallet connector options with the new options.
 * @param options - The new wallet connector options to merge.
 */ const mergeWalletConnectorOptions = (options)=>{
    const currentWalletOptions = getWalletConnectorOptions();
    // Create a unique key for each wallet option based on its key and connected chain
    const getKey = (walletOption)=>`${walletOption.key}-${walletOption.walletConnector.connectedChain}`;
    const currentWalletOptionsMap = new Map(currentWalletOptions.map((walletOption)=>[
            getKey(walletOption),
            walletOption
        ]));
    options.forEach((walletOption)=>{
        currentWalletOptionsMap.set(getKey(walletOption), walletOption);
    });
    const updatedWalletOptions = Array.from(currentWalletOptionsMap.values());
    setWalletConnectorOptions(updatedWalletOptions);
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/internalImplementation/utils/createPartialStoreSetter/createPartialStoreSetter.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createPartialStoreSetter": (()=>createPartialStoreSetter)
});
'use client';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createPartialStoreSetter = ({ get, set })=>(key, value)=>set(Object.assign(Object.assign({}, get()), {
            [key]: value
        }));
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/sendBalances.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getSendBalanceState": (()=>getSendBalanceState),
    "resetSendBalanceState": (()=>resetSendBalanceState),
    "setSendBalanceState": (()=>setSendBalanceState),
    "setSendBalanceVariable": (()=>setSendBalanceVariable),
    "useSendBalanceState": (()=>useSendBalanceState)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$internalImplementation$2f$utils$2f$createPartialStoreSetter$2f$createPartialStoreSetter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/internalImplementation/utils/createPartialStoreSetter/createPartialStoreSetter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$internalImplementation$2f$utils$2f$createStoreState$2f$createStoreState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/internalImplementation/utils/createStoreState/createStoreState.js [app-client] (ecmascript)");
'use client';
;
;
const { getSendBalanceState, setSendBalanceState, useSendBalanceState, resetSendBalanceState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$internalImplementation$2f$utils$2f$createStoreState$2f$createStoreState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStoreState"])('sendBalanceState');
const setSendBalanceVariable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$internalImplementation$2f$utils$2f$createPartialStoreSetter$2f$createPartialStoreSetter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPartialStoreSetter"])({
    get: getSendBalanceState,
    set: setSendBalanceState
});
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/connectorsInitializing/connectorsInitializing.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "resetConnectorsInitializing": (()=>resetConnectorsInitializing),
    "setConnectorInitializing": (()=>setConnectorInitializing),
    "useConnectorsInitializing": (()=>useConnectorsInitializing)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$internalImplementation$2f$utils$2f$createStoreState$2f$createStoreState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/internalImplementation/utils/createStoreState/createStoreState.js [app-client] (ecmascript)");
'use client';
;
const { getConnectorsInitializing: getConnectorsInitializingState, resetConnectorsInitializing, setConnectorsInitializing, useConnectorsInitializing } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$internalImplementation$2f$utils$2f$createStoreState$2f$createStoreState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStoreState"])('connectorsInitializing');
const setConnectorInitializing = (connectorKey, initializing)=>{
    const currentState = getConnectorsInitializingState();
    const updatedState = Object.assign(Object.assign({}, currentState), {
        [connectorKey]: initializing
    });
    setConnectorsInitializing(updatedState);
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/tokenBalances.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getTokenBalancesState": (()=>getTokenBalancesState),
    "setTokenBalanceVariable": (()=>setTokenBalanceVariable),
    "useTokenBalancesState": (()=>useTokenBalancesState)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$internalImplementation$2f$utils$2f$createPartialStoreSetter$2f$createPartialStoreSetter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/internalImplementation/utils/createPartialStoreSetter/createPartialStoreSetter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$internalImplementation$2f$utils$2f$createStoreState$2f$createStoreState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/internalImplementation/utils/createStoreState/createStoreState.js [app-client] (ecmascript)");
'use client';
;
;
const { getTokenBalancesState, setTokenBalancesState, useTokenBalancesState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$internalImplementation$2f$utils$2f$createStoreState$2f$createStoreState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStoreState"])('tokenBalancesState');
const setTokenBalanceVariable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$internalImplementation$2f$utils$2f$createPartialStoreSetter$2f$createPartialStoreSetter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPartialStoreSetter"])({
    get: getTokenBalancesState,
    set: setTokenBalancesState
});
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/multichainBalances.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getMultichainTokenBalancesState": (()=>getMultichainTokenBalancesState),
    "setMultichainTokenBalanceVariable": (()=>setMultichainTokenBalanceVariable),
    "useMultichainTokenBalancesState": (()=>useMultichainTokenBalancesState)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$internalImplementation$2f$utils$2f$createPartialStoreSetter$2f$createPartialStoreSetter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/internalImplementation/utils/createPartialStoreSetter/createPartialStoreSetter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$internalImplementation$2f$utils$2f$createStoreState$2f$createStoreState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/internalImplementation/utils/createStoreState/createStoreState.js [app-client] (ecmascript)");
'use client';
;
;
const { getMultichainTokenBalancesState, setMultichainTokenBalancesState, useMultichainTokenBalancesState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$internalImplementation$2f$utils$2f$createStoreState$2f$createStoreState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStoreState"])('multichainTokenBalancesState');
const setMultichainTokenBalanceVariable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$internalImplementation$2f$utils$2f$createPartialStoreSetter$2f$createPartialStoreSetter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPartialStoreSetter"])({
    get: getMultichainTokenBalancesState,
    set: setMultichainTokenBalancesState
});
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/nonce/nonce.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "consumeNonce": (()=>consumeNonce),
    "fetchAndStoreNonce": (()=>fetchAndStoreNonce),
    "getNonce": (()=>getNonce),
    "setNonce": (()=>setNonce),
    "useFetchNonce": (()=>useFetchNonce),
    "useNonce": (()=>useNonce)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/_virtual/_tslib.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/DynamicError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/core.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$client$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/client/client.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$config$2f$ApiEndpoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/config/ApiEndpoint.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$iconic$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$iconic$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+iconic@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/iconic/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-connector-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3._7679fe86d42f6979f41d87c8de2f235e/node_modules/@dynamic-labs/wallet-connector-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ViewContext$2f$ViewContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/ViewContext/ViewContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$book$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-book@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/wallet-book/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/values.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$consts$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/consts/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$multi$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_bufferu_fe90954bf73f9037990328eb7876c7de$2f$node_modules$2f40$dynamic$2d$labs$2f$multi$2d$wallet$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+multi-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_bufferu_fe90954bf73f9037990328eb7876c7de/node_modules/@dynamic-labs/multi-wallet/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$international$2d$phone$40$4$2e$5$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$international$2d$phone$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-international-phone@4.5.0_react@19.2.4/node_modules/react-international-phone/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$dynamicContextProps$2f$dynamicContextProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/dynamicContextProps/dynamicContextProps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$primaryWalletId$2f$primaryWalletId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/primaryWalletId/primaryWalletId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$connectedWalletsInfo$2f$connectedWalletsInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/connectedWalletsInfo/connectedWalletsInfo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$getWaasAddressTypeLabel$2f$getWaasAddressTypeLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getWaasAddressTypeLabel/getWaasAddressTypeLabel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$events$2f$dynamicEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/events/dynamicEvents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$data$2f$api$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/data/api/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$locale$40$4$2e$73$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$dynamic$2d$labs$2f$locale$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+locale@4.73.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dynamic-labs/locale/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$hooks$2f$events$2f$useDynamicEvents$2f$useDynamicEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/hooks/events/useDynamicEvents/useDynamicEvents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$DynamicContext$2f$DynamicContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/DynamicContext/DynamicContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$loadingAndLifecycle$2f$loadingAndLifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/loadingAndLifecycle/loadingAndLifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$authMode$2f$authMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/authMode/authMode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$CaptchaContext$2f$CaptchaContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/CaptchaContext/CaptchaContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ErrorContext$2f$ErrorContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/ErrorContext/ErrorContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$AccessDeniedContext$2f$AccessDeniedContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/AccessDeniedContext/AccessDeniedContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$AccountExistsContext$2f$AccountExistsContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/AccountExistsContext/AccountExistsContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$UserWalletsContext$2f$UserWalletsContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/UserWalletsContext/UserWalletsContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$VerificationContext$2f$VerificationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/VerificationContext/VerificationContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$compareChains$2f$compareChains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/compareChains/compareChains.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$views$2f$Passkey$2f$utils$2f$findPrimaryEmbeddedChain$2f$findPrimaryEmbeddedChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/views/Passkey/utils/findPrimaryEmbeddedChain/findPrimaryEmbeddedChain.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ThemeContext$2f$ThemeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/ThemeContext/ThemeContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$hooks$2f$useUserUpdateRequest$2f$useUpdateUser$2f$userFieldsSchema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/hooks/useUserUpdateRequest/useUpdateUser/userFieldsSchema.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bs58$40$5$2e$0$2e$0$2f$node_modules$2f$bs58$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/bs58@5.0.0/node_modules/bs58/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$hooks$2f$usePromise$2f$usePromise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/hooks/usePromise/usePromise.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$types$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$types$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+types@4.73.2/node_modules/@dynamic-labs/types/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$SocialRedirectContext$2f$SocialRedirectContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/SocialRedirectContext/SocialRedirectContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$LoadingContext$2f$LoadingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/LoadingContext/LoadingContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$WalletContext$2f$WalletContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/WalletContext/WalletContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$hooks$2f$useEmbeddedWallet$2f$useSecureEnclaveEmbeddedWallet$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/hooks/useEmbeddedWallet/useSecureEnclaveEmbeddedWallet/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yup$40$0$2e$32$2e$11$2f$node_modules$2f$yup$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/yup@0.32.11/node_modules/yup/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$MockContext$2f$MockContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/MockContext/MockContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$views$2f$CollectUserDataView$2f$useFields$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/views/CollectUserDataView/useFields.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$FieldsStateContext$2f$FieldsStateContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/FieldsStateContext/FieldsStateContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$UserFieldEditorContext$2f$UserFieldEditorContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/UserFieldEditorContext/UserFieldEditorContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$rpc$2d$providers$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$rpc$2d$providers$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+rpc-providers@4.73.2/node_modules/@dynamic-labs/rpc-providers/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$walletOptions$2f$walletOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/walletOptions/walletOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$i18next$40$13$2e$5$2e$0_i18next$40$23$2e$4$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-i18next@13.5.0_i18next@23.4.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Accordion$2f$components$2f$AccordionItem$2f$AccordionItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Accordion/components/AccordionItem/AccordionItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Alert/Alert.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$ShadowDOM$2f$ShadowDOM$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/ShadowDOM/ShadowDOM.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/IconButton/IconButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$InlineWidget$2f$InlineWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/InlineWidget/InlineWidget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Input$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Input/Input.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$IsBrowser$2f$IsBrowser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/IsBrowser/IsBrowser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$MenuList$2f$Dropdown$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/MenuList/Dropdown/Dropdown.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$OverlayCard$2f$OverlayCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/OverlayCard/OverlayCard.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Transition$2f$ZoomTransition$2f$ZoomTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Transition/ZoomTransition/ZoomTransition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Transition$2f$SlideInUpTransition$2f$SlideInUpTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Transition/SlideInUpTransition/SlideInUpTransition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Transition$2f$OpacityTransition$2f$OpacityTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Transition/OpacityTransition/OpacityTransition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$PasskeyCreatedSuccessBanner$2f$PasskeyCreatedSuccessBanner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/PasskeyCreatedSuccessBanner/PasskeyCreatedSuccessBanner.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Popper$2f$Popper$2f$Popper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Popper/Popper/Popper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Popper$2f$PopperContext$2f$PopperContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Popper/PopperContext/PopperContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$focus$2d$lock$40$2$2e$13$2e$6_$40$types$2b$react$40$19$2e$2$2e$14_react$40$19$2e$2$2e$4$2f$node_modules$2f$react$2d$focus$2d$lock$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-focus-lock@2.13.6_@types+react@19.2.14_react@19.2.4/node_modules/react-focus-lock/dist/es2015/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$qrcode$40$1$2e$5$2e$1$2f$node_modules$2f$qrcode$2f$lib$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/qrcode@1.5.1/node_modules/qrcode/lib/browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$formik$40$2$2e$2$2e$9_react$40$19$2e$2$2e$4$2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/formik@2.2.9_react@19.2.4/node_modules/formik/dist/formik.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$hooks$2f$useSubdomainCheck$2f$useSubdomainCheck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/hooks/useSubdomainCheck/useSubdomainCheck.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$WalletGroupContext$2f$WalletGroupContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/WalletGroupContext/WalletGroupContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$context$2f$DynamicWidgetContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/context/DynamicWidgetContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$hooks$2f$useGetMfaToken$2f$useGetMfaToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/hooks/useGetMfaToken/useGetMfaToken.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$hooks$2f$useWalletBackup$2f$useWalletBackup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/hooks/useWalletBackup/useWalletBackup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$hooks$2f$useWalletBackup$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/hooks/useWalletBackup/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$hooks$2f$useWalletBackup$2f$cloudProviders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/hooks/useWalletBackup/cloudProviders.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$IpConfigurationContext$2f$IpConfigurationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/IpConfigurationContext/IpConfigurationContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ConnectWithOtpContext$2f$ConnectWithOtpContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/ConnectWithOtpContext/ConnectWithOtpContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicBridgeWidget$2f$views$2f$WalletsView$2f$components$2f$SecondaryWallets$2f$SecondaryWallets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicBridgeWidget/views/WalletsView/components/SecondaryWallets/SecondaryWallets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$hcaptcha$2b$react$2d$hcaptcha$40$1$2e$4$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$hcaptcha$2f$react$2d$hcaptcha$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@hcaptcha+react-hcaptcha@1.4.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@hcaptcha/react-hcaptcha/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$helpers$2f$convertExchangeKeyAndProviderEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/helpers/convertExchangeKeyAndProviderEnum.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$views$2f$ExchangeWhitelistWarning$2f$ExchangeWhitelistWarning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/views/ExchangeWhitelistWarning/ExchangeWhitelistWarning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ErrorContext$2f$hooks$2f$useErrorText$2f$useErrorText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/ErrorContext/hooks/useErrorText/useErrorText.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$FooterAnimationContext$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/FooterAnimationContext/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$views$2f$MfaChooseDeviceView$2f$useGetMfaOptions$2f$useGetMfaOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/views/MfaChooseDeviceView/useGetMfaOptions/useGetMfaOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$PasskeyContext$2f$PasskeyContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/PasskeyContext/PasskeyContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$OnrampContext$2f$OnrampContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/OnrampContext/OnrampContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$sendBalances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/sendBalances.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$connectorsInitializing$2f$connectorsInitializing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/connectorsInitializing/connectorsInitializing.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$OverlayCardBase$2f$OverlayCardTarget$2f$OverlayCardTarget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/OverlayCardBase/OverlayCardTarget/OverlayCardTarget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$components$2f$DynamicWidgetHeader$2f$DynamicWidgetHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$views$2f$TransactionConfirmationView$2f$TransactionConfirmationView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/views/TransactionConfirmationView/TransactionConfirmationView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$components$2f$PasskeyCard$2f$PasskeyCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/components/PasskeyCard/PasskeyCard.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$views$2f$CryptoComOnramp$2f$CryptoComOnramp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/views/CryptoComOnramp/CryptoComOnramp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$views$2f$ManagePasskeysMfaWidgetView$2f$ManagePasskeysMfaWidgetView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/views/ManagePasskeysMfaWidgetView/ManagePasskeysMfaWidgetView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$views$2f$ManageTotpMfaWidgetView$2f$ManageTotpMfaWidgetView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/views/ManageTotpMfaWidgetView/ManageTotpMfaWidgetView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$views$2f$ReceiveWalletFunds$2f$ReceiveWalletFunds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/views/ReceiveWalletFunds/ReceiveWalletFunds.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$tokenBalances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/tokenBalances.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$multichainBalances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/multichainBalances.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$utils$2f$functions$2f$getInitialUrl$2f$getInitialUrl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/utils/functions/getInitialUrl/getInitialUrl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$internalImplementation$2f$utils$2f$createStoreState$2f$createStoreState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/internalImplementation/utils/createStoreState/createStoreState.js [app-client] (ecmascript)");
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
const { getNonce: getNonceRaw, setNonce, useNonce: useNonceRaw } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$internalImplementation$2f$utils$2f$createStoreState$2f$createStoreState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStoreState"])('nonce');
const getNonce = ()=>getNonceRaw().nonce;
const useNonce = ()=>useNonceRaw().nonce;
const storeNewNonce = (newNonce)=>{
    const expiry = new Date().getTime() + 60000 * 60 * 24;
    setNonce({
        expiresAt: expiry,
        nonce: newNonce
    });
};
let nonceExpiryTimeout;
const checkAndExpireNonceWhenRequired = ()=>{
    const nonce = getNonceRaw();
    if (!(nonce === null || nonce === void 0 ? void 0 : nonce.expiresAt)) {
        return;
    }
    if (nonceExpiryTimeout) {
        clearTimeout(nonceExpiryTimeout);
    }
    const timeToExpire = nonce.expiresAt - new Date().getTime();
    const timeout = timeToExpire > 0 ? timeToExpire : 0;
    nonceExpiryTimeout = setTimeout(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].debug('[Nonce] Expiring nonce', {
            expiresAt: nonce.expiresAt,
            nonce: nonce.nonce
        });
        setNonce({
            expiresAt: undefined,
            nonce: undefined
        });
    }, timeout);
};
const useFetchNonce = ({ shouldFetch = true, retries = 2 } = {})=>{
    const nonce = useNonce();
    const environmentId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$dynamicContextProps$2f$dynamicContextProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnvironmentId"])();
    checkAndExpireNonceWhenRequired();
    const { retrigger } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$hooks$2f$usePromise$2f$usePromise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePromise"])({
        "useFetchNonce.usePromise": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, void 0, void 0, {
                "useFetchNonce.usePromise": function*() {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$data$2f$api$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNonce"])(environmentId);
                }
            }["useFetchNonce.usePromise"])
    }["useFetchNonce.usePromise"], {
        deps: [
            environmentId
        ],
        enabled: shouldFetch && !nonce,
        onResolve: {
            "useFetchNonce.usePromise": (newNonce)=>{
                storeNewNonce(newNonce);
                checkAndExpireNonceWhenRequired();
            }
        }["useFetchNonce.usePromise"],
        retries
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$hooks$2f$events$2f$useDynamicEvents$2f$useDynamicEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDynamicEvents"])('logout', retrigger);
    return nonce;
};
const consumeNonce = ()=>{
    const nonce = getNonce();
    if (!nonce) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DynamicError"]('Nonce is not defined');
    }
    setNonce({
        expiresAt: undefined,
        nonce: undefined
    });
    return nonce;
};
const fetchAndStoreNonce = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, void 0, void 0, function*() {
        const existingNonce = getNonce();
        if (existingNonce) {
            return;
        }
        const environmentId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$dynamicContextProps$2f$dynamicContextProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEnvironmentId"])();
        const nonce = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$data$2f$api$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNonce"])(environmentId);
        storeNewNonce(nonce);
    });
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/utils/settingsUtils/settingsUtils.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useAppName": (()=>useAppName),
    "useRedirectUrl": (()=>useRedirectUrl)
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$client$2f$extension$2f$projectSettings$2f$useProjectSettings$2f$useProjectSettings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/client/extension/projectSettings/useProjectSettings/useProjectSettings.js [app-client] (ecmascript)");
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
const useDynamicSettingsValue = (projectSettingName, dynamicSettingName)=>{
    var _a;
    const projectSettings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$client$2f$extension$2f$projectSettings$2f$useProjectSettings$2f$useProjectSettings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProjectSettings"])();
    const dynamicSettings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$dynamicContextProps$2f$dynamicContextProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDynamicSettings"])();
    return (_a = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.general[projectSettingName]) !== null && _a !== void 0 ? _a : dynamicSettings[dynamicSettingName];
};
const useAppName = ()=>useDynamicSettingsValue('displayName', 'appName');
const useRedirectUrl = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$dynamicContextProps$2f$dynamicContextProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDynamicSettings"])().redirectUrl;
;
}}),
}]);

//# sourceMappingURL=96e3f_%40dynamic-labs_sdk-react-core_src_lib_store_6e63a973._.js.map