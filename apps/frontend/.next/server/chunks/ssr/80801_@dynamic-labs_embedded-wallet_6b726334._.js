module.exports = {

"[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/package.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/_virtual/_tslib.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "__awaiter": (()=>__awaiter),
    "__classPrivateFieldGet": (()=>__classPrivateFieldGet),
    "__classPrivateFieldSet": (()=>__classPrivateFieldSet)
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
***************************************************************************** */ function __awaiter(thisArg, _arguments, P, generator) {
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
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/src/lib/BaseTurnkeyHandler.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "BaseTurnkeyHandler": (()=>BaseTurnkeyHandler)
});
'use client';
class BaseTurnkeyHandler {
    get client() {
        return this.__turnkeyClient;
    }
    get publicKey() {
        return this.__publicKey;
    }
    clear() {
        var _a;
        (_a = this.__iframeStamper) === null || _a === void 0 ? void 0 : _a.clear();
        this.__iframeStamper = undefined;
        this.__publicKey = undefined;
        this.__turnkeyClient = undefined;
    }
}
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/src/lib/constants.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "INVALID_PASSKEY_SELECTED_ERROR_MESSAGE": (()=>INVALID_PASSKEY_SELECTED_ERROR_MESSAGE),
    "TURNKEY_API_BASE_URL": (()=>TURNKEY_API_BASE_URL),
    "TURNKEY_API_KEY_EXPIRY_MESSAGE": (()=>TURNKEY_API_KEY_EXPIRY_MESSAGE),
    "TURNKEY_API_KEY_NOT_FOUND_MESSAGE": (()=>TURNKEY_API_KEY_NOT_FOUND_MESSAGE),
    "TURNKEY_SDK_BENIGN_ERRORS": (()=>TURNKEY_SDK_BENIGN_ERRORS),
    "TURNKEY_SDK_SESSION_KEY_RETRYABLE_ERRORS": (()=>TURNKEY_SDK_SESSION_KEY_RETRYABLE_ERRORS),
    "USER_CANCELLED_REQUEST_ERROR_MESSAGE": (()=>USER_CANCELLED_REQUEST_ERROR_MESSAGE),
    "WEBAUTHN_NOT_SUPPORTED_OR_CANCELLED_ERROR_MESSAGE": (()=>WEBAUTHN_NOT_SUPPORTED_OR_CANCELLED_ERROR_MESSAGE),
    "WEBAUTHN_NOT_SUPPORTED_OR_DISABLED_ERROR_MESSAGE": (()=>WEBAUTHN_NOT_SUPPORTED_OR_DISABLED_ERROR_MESSAGE)
});
'use client';
const TURNKEY_API_BASE_URL = 'https://api.turnkey.com';
const TURNKEY_API_KEY_EXPIRY_MESSAGE = 'Turnkey error 16: expired api key';
const TURNKEY_API_KEY_NOT_FOUND_MESSAGE = 'Turnkey error 16: could not find public key';
const WEBAUTHN_NOT_SUPPORTED_OR_CANCELLED_ERROR_MESSAGE = 'The operation either timed out or was not allowed';
const WEBAUTHN_NOT_SUPPORTED_OR_DISABLED_ERROR_MESSAGE = 'The request is not allowed by the user agent or the platform in the current context, possibly because the user denied permission.';
const INVALID_PASSKEY_SELECTED_ERROR_MESSAGE = 'Turnkey error 5: webauthn authenticator not found in organization or parent organization';
const USER_CANCELLED_REQUEST_ERROR_MESSAGE = 'The user cancelled the request';
const TURNKEY_SDK_SESSION_KEY_RETRYABLE_ERRORS = [
    TURNKEY_API_KEY_EXPIRY_MESSAGE,
    TURNKEY_API_KEY_NOT_FOUND_MESSAGE
];
const TURNKEY_SDK_BENIGN_ERRORS = [
    WEBAUTHN_NOT_SUPPORTED_OR_CANCELLED_ERROR_MESSAGE,
    WEBAUTHN_NOT_SUPPORTED_OR_DISABLED_ERROR_MESSAGE,
    INVALID_PASSKEY_SELECTED_ERROR_MESSAGE,
    USER_CANCELLED_REQUEST_ERROR_MESSAGE
];
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/src/lib/utils/convertAttestationTransports/convertAttestationTransports.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "convertAttestationTransports": (()=>convertAttestationTransports)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$AuthenticatorTransportProtocol$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/models/AuthenticatorTransportProtocol.js [app-ssr] (ecmascript)");
'use client';
;
const transportMap = {
    AUTHENTICATOR_TRANSPORT_BLE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$AuthenticatorTransportProtocol$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthenticatorTransportProtocol"].Ble,
    AUTHENTICATOR_TRANSPORT_HYBRID: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$AuthenticatorTransportProtocol$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthenticatorTransportProtocol"].Hybrid,
    AUTHENTICATOR_TRANSPORT_INTERNAL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$AuthenticatorTransportProtocol$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthenticatorTransportProtocol"].Internal,
    AUTHENTICATOR_TRANSPORT_NFC: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$AuthenticatorTransportProtocol$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthenticatorTransportProtocol"].Nfc,
    AUTHENTICATOR_TRANSPORT_USB: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$AuthenticatorTransportProtocol$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthenticatorTransportProtocol"].Usb
};
const convertAttestationTransports = (attestationTransports)=>attestationTransports.map((transport)=>transportMap[transport]);
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/src/lib/utils/logger/logger.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DynamicEmbeddedWalletsLogger": (()=>DynamicEmbeddedWalletsLogger),
    "logger": (()=>logger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$logger$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$logger$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+logger@4.73.2/node_modules/@dynamic-labs/logger/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$logger$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$logger$2f$src$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+logger@4.73.2/node_modules/@dynamic-labs/logger/src/types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$logger$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$logger$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+logger@4.73.2/node_modules/@dynamic-labs/logger/src/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/src/lib/constants.js [app-ssr] (ecmascript)");
'use client';
;
;
class DynamicEmbeddedWalletsLogger extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$logger$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$logger$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Logger"] {
    constructor(name, level){
        super(name, level);
    }
    error(message, ...args) {
        const [err] = args;
        if (!(err === null || err === void 0 ? void 0 : err.message) || !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TURNKEY_SDK_BENIGN_ERRORS"].some((errorMsg)=>err.message.includes(errorMsg))) {
            this.log(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$logger$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$logger$2f$src$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LogLevel"].ERROR, message, ...args);
        } else {
            // log benign turnkey sdk errors as WARN
            this.warn(message, ...args);
        }
    }
}
const logger = new DynamicEmbeddedWalletsLogger('Dynamic embedded wallets', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$logger$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$logger$2f$src$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LogLevel"].INFO);
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/src/lib/utils/TurnkeyPasskeyService/utils/createTurnkeyPasskeyService/createTurnkeyPasskeyService.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createTurnkeyPasskeyService": (()=>createTurnkeyPasskeyService)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$turnkey$2b$webauthn$2d$stamper$40$0$2e$5$2e$1$2f$node_modules$2f40$turnkey$2f$webauthn$2d$stamper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@turnkey+webauthn-stamper@0.5.1/node_modules/@turnkey/webauthn-stamper/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$webauthn$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$webauthn$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+webauthn@4.73.2/node_modules/@dynamic-labs/webauthn/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$webauthn$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$webauthn$2f$src$2f$lib$2f$adapters$2f$getWebAuthnAttestationTurnkeyAdapter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+webauthn@4.73.2/node_modules/@dynamic-labs/webauthn/src/lib/adapters/getWebAuthnAttestationTurnkeyAdapter.js [app-ssr] (ecmascript)");
'use client';
;
;
const createTurnkeyPasskeyService = ()=>({
        createWebauthnStamper: (config)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$turnkey$2b$webauthn$2d$stamper$40$0$2e$5$2e$1$2f$node_modules$2f40$turnkey$2f$webauthn$2d$stamper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebauthnStamper"](config),
        getWebAuthnAttestation: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$webauthn$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$webauthn$2f$src$2f$lib$2f$adapters$2f$getWebAuthnAttestationTurnkeyAdapter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWebAuthnAttestationTurnkeyAdapter"]
    });
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/src/lib/utils/TurnkeyPasskeyService/TurnkeyPasskeyService.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "TurnkeyPasskeyService": (()=>TurnkeyPasskeyService)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/_virtual/_tslib.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$utils$2f$TurnkeyPasskeyService$2f$utils$2f$createTurnkeyPasskeyService$2f$createTurnkeyPasskeyService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/src/lib/utils/TurnkeyPasskeyService/utils/createTurnkeyPasskeyService/createTurnkeyPasskeyService.js [app-ssr] (ecmascript)");
'use client';
;
;
var _a, _TurnkeyPasskeyService_implementation;
class TurnkeyPasskeyService {
    /**
     * Gets the current passkey service implementation.
     * If no implementation is set, it will create a new turnkey passkey service.
     * @returns {ITurnkeyPasskeyService} The passkey service implementation.
     */ static get implementation() {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__classPrivateFieldGet"])(_a, _a, "f", _TurnkeyPasskeyService_implementation)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$utils$2f$TurnkeyPasskeyService$2f$utils$2f$createTurnkeyPasskeyService$2f$createTurnkeyPasskeyService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTurnkeyPasskeyService"])();
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__classPrivateFieldGet"])(_a, _a, "f", _TurnkeyPasskeyService_implementation);
    }
    /**
     * Sets the passkey service implementation.
     * @param {ITurnkeyPasskeyService} implementation The passkey service implementation to set.
     */ static set implementation(implementation) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__classPrivateFieldSet"])(_a, _a, implementation, "f", _TurnkeyPasskeyService_implementation);
    }
    /**
     * Gets the WebAuthn attestation method from the current implementation.
     */ static get getWebAuthnAttestation() {
        return _a.implementation.getWebAuthnAttestation;
    }
    /**
     * Gets the createWebauthnStamper method from the current implementation.
     */ static get createWebauthnStamper() {
        return _a.implementation.createWebauthnStamper;
    }
}
_a = TurnkeyPasskeyService;
_TurnkeyPasskeyService_implementation = {
    value: void 0
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/src/lib/AuthenticatorHandler/TurnkeyAuthenticatorRecoveryHandler.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "turnkeyAuthenticatorRecoveryHandler": (()=>turnkeyAuthenticatorRecoveryHandler)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/_virtual/_tslib.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$turnkey$2b$http$40$3$2e$10$2e$0$2f$node_modules$2f40$turnkey$2f$http$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@turnkey+http@3.10.0/node_modules/@turnkey/http/dist/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$turnkey$2b$http$40$3$2e$10$2e$0$2f$node_modules$2f40$turnkey$2f$http$2f$dist$2f$_$5f$generated_$5f2f$services$2f$coordinator$2f$public$2f$v1$2f$public_api$2e$client$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@turnkey+http@3.10.0/node_modules/@turnkey/http/dist/__generated__/services/coordinator/public/v1/public_api.client.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$turnkey$2b$iframe$2d$stamper$40$2$2e$5$2e$0$2f$node_modules$2f40$turnkey$2f$iframe$2d$stamper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@turnkey+iframe-stamper@2.5.0/node_modules/@turnkey/iframe-stamper/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/DynamicError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$getTLD$2f$getTLD$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/getTLD/getTLD.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$PlatformService$2f$PlatformService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/PlatformService/PlatformService.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$BaseTurnkeyHandler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/src/lib/BaseTurnkeyHandler.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/src/lib/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$utils$2f$convertAttestationTransports$2f$convertAttestationTransports$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/src/lib/utils/convertAttestationTransports/convertAttestationTransports.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$utils$2f$logger$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/src/lib/utils/logger/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$utils$2f$TurnkeyPasskeyService$2f$TurnkeyPasskeyService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/src/lib/utils/TurnkeyPasskeyService/TurnkeyPasskeyService.js [app-ssr] (ecmascript)");
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
const turnkeyPasskeyRecoveryUrl = 'https://recovery.turnkey.com';
const turnkeyEmailRecoveryUrl = 'https://auth.turnkey.com';
const TURNKEY_RECOVERY_CREDENTIAL_EXPIRATION_SECONDS = 900; // 15 seconds
const TURNKEY_SESSION_EXPIRATION_SECONDS = 1800; //30 seconds
const EMAIL_AUTH_CREDENTIAL_TYPE = 'CREDENTIAL_TYPE_API_KEY_P256';
const PASSKEY_RECOVERY_CREDENTIAL_TYPE = 'CREDENTIAL_TYPE_RECOVER_USER_KEY_P256';
class TurnkeyAuthenticatorRecoveryHandler extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$BaseTurnkeyHandler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseTurnkeyHandler"] {
    constructor(){
        super(...arguments);
        this.isSessionActive = ()=>{
            // it's only used for email auth session
            if (!this.__createdAt || this.__recoveryType !== 'email') {
                return false;
            }
            const isExpired = this.isExpired(this.__createdAt, this.__sessionExpiration || TURNKEY_SESSION_EXPIRATION_SECONDS);
            if (isExpired) {
                this.clear();
                return false;
            }
            return true;
        };
        this.isValidCode = (organizationId)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
                var _a, _b, _c, _d;
                if (!organizationId || !this.__turnkeyRecoveryUserId) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"]('Cannot proceed with your request');
                }
                const userResponse = yield (_a = this.__turnkeyClient) === null || _a === void 0 ? void 0 : _a.getUser({
                    organizationId,
                    userId: this.__turnkeyRecoveryUserId
                });
                const credentialTypeMap = {
                    email: EMAIL_AUTH_CREDENTIAL_TYPE,
                    passkey: PASSKEY_RECOVERY_CREDENTIAL_TYPE
                };
                const recoveryCredential = (_d = (_c = (_b = userResponse === null || userResponse === void 0 ? void 0 : userResponse.user) === null || _b === void 0 ? void 0 : _b.apiKeys) === null || _c === void 0 ? void 0 : _c.filter((k)=>k.credential.type === credentialTypeMap[this.__recoveryType])) === null || _d === void 0 ? void 0 : _d.pop();
                if (!recoveryCredential) {
                    return false;
                }
                const isExpired = this.isExpired(parseInt(recoveryCredential.createdAt.seconds, 10), TURNKEY_RECOVERY_CREDENTIAL_EXPIRATION_SECONDS);
                if (isExpired) {
                    return false;
                }
                this.__createdAt = parseInt(recoveryCredential.createdAt.seconds, 10);
                return true;
            });
        this.isExpired = (createdAtSeconds, expirationTimeSeconds)=>{
            const recoveryExpirationSeconds = createdAtSeconds + expirationTimeSeconds;
            const expirationTime = new Date(recoveryExpirationSeconds * 1000);
            if (new Date() >= expirationTime) {
                return true;
            }
            return false;
        };
    }
    get recoveryType() {
        return this.__recoveryType;
    }
    get recoveryUserId() {
        return this.__turnkeyRecoveryUserId || '';
    }
    set recoveryUserId(turnkeyRecoveryUserId) {
        this.__turnkeyRecoveryUserId = turnkeyRecoveryUserId;
    }
    clear() {
        super.clear();
        this.__recoveryType = undefined;
        this.__turnkeyRecoveryUserId = undefined;
        this.__createdAt = undefined;
    }
    initRecovery(authType, iframeContainer, iframeElementId, sessionExpiration) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            if (this.__recoveryType) {
                this.clear();
            }
            this.__sessionExpiration = sessionExpiration;
            this.__recoveryType = authType;
            const iframeUrl = authType === 'passkey' ? turnkeyPasskeyRecoveryUrl : turnkeyEmailRecoveryUrl;
            this.__iframeStamper = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$turnkey$2b$iframe$2d$stamper$40$2$2e$5$2e$0$2f$node_modules$2f40$turnkey$2f$iframe$2d$stamper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IframeStamper"]({
                iframeContainer,
                iframeElementId,
                iframeUrl
            });
            yield this.__iframeStamper.init();
            this.__publicKey = this.__iframeStamper.publicKey();
            return this.__publicKey;
        });
    }
    verifyRecoveryCode(recoveryBundle, organizationId) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            if (!this.__iframeStamper) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"]('Cannot proceed with your request');
            }
            try {
                yield this.__iframeStamper.injectCredentialBundle(recoveryBundle);
                this.__turnkeyClient = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$turnkey$2b$http$40$3$2e$10$2e$0$2f$node_modules$2f40$turnkey$2f$http$2f$dist$2f$_$5f$generated_$5f2f$services$2f$coordinator$2f$public$2f$v1$2f$public_api$2e$client$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TurnkeyClient"]({
                    baseUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TURNKEY_API_BASE_URL"]
                }, this.__iframeStamper);
                if (!organizationId || !this.__turnkeyRecoveryUserId) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"]('Cannot proceed with your request');
                }
                if (!(yield this.isValidCode(organizationId))) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"]('The code is invalid or expired.');
                }
            } catch (err) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$utils$2f$logger$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].error('Error while verifying recovery code', err);
                if (err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"]) {
                    throw err;
                }
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"]('The code is invalid or expired.');
            }
        });
    }
    completeRecovery(_a) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, arguments, void 0, function*({ attestation, challenge, turnkeySubOrganizationId }) {
            if (!this.__turnkeyClient || !this.__turnkeyRecoveryUserId) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"]('Cannot proceed with your request');
            }
            try {
                return this.__turnkeyClient.recoverUser({
                    organizationId: turnkeySubOrganizationId,
                    parameters: {
                        authenticator: {
                            attestation: attestation,
                            authenticatorName: 'Passkey',
                            challenge
                        },
                        userId: this.__turnkeyRecoveryUserId
                    },
                    timestampMs: String(Date.now()),
                    type: 'ACTIVITY_TYPE_RECOVER_USER'
                });
            } catch (err) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$utils$2f$logger$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].error('[TK] Error while completing recovery process', err);
                throw err;
            }
        });
    }
    addPasskeyAuthenticator(_a) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, arguments, void 0, function*({ attestation, challenge, turnkeySubOrganizationId }) {
            if (!this.__turnkeyClient || !this.__turnkeyRecoveryUserId) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"]('Cannot proceed with your request');
            }
            try {
                return this.__turnkeyClient.createAuthenticators({
                    organizationId: turnkeySubOrganizationId,
                    parameters: {
                        authenticators: [
                            {
                                attestation: attestation,
                                authenticatorName: 'Passkey',
                                challenge
                            }
                        ],
                        userId: this.__turnkeyRecoveryUserId
                    },
                    timestampMs: String(Date.now()),
                    type: 'ACTIVITY_TYPE_CREATE_AUTHENTICATORS_V2'
                });
            } catch (err) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$utils$2f$logger$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].error('[TK] Error while creating new authenticator', err);
                throw err;
            }
        });
    }
    addEmailRecovery(_a) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, arguments, void 0, function*({ organizationId, email, turnkeyUserId }) {
            let rpId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$getTLD$2f$getTLD$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTLD"])();
            if (!rpId) {
                rpId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$PlatformService$2f$PlatformService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlatformService"].getHostname();
            }
            const stamper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$utils$2f$TurnkeyPasskeyService$2f$TurnkeyPasskeyService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TurnkeyPasskeyService"].createWebauthnStamper({
                rpId
            });
            const client = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$turnkey$2b$http$40$3$2e$10$2e$0$2f$node_modules$2f40$turnkey$2f$http$2f$dist$2f$_$5f$generated_$5f2f$services$2f$coordinator$2f$public$2f$v1$2f$public_api$2e$client$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TurnkeyClient"]({
                baseUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TURNKEY_API_BASE_URL"]
            }, stamper);
            try {
                const signedRequest = yield client.stampUpdateUser({
                    organizationId,
                    parameters: {
                        userEmail: email,
                        userId: turnkeyUserId,
                        userTagIds: []
                    },
                    timestampMs: String(Date.now()),
                    type: 'ACTIVITY_TYPE_UPDATE_USER'
                });
                return {
                    signedRequest,
                    userId: turnkeyUserId
                };
            } catch (err) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$utils$2f$logger$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].error('Error while adding email recovery', err);
                throw err;
            }
        });
    }
}
const turnkeyAuthenticatorRecoveryHandler = new TurnkeyAuthenticatorRecoveryHandler();
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/src/lib/ExportHandler/TurnkeyExportHandler.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "TurnkeyExportHandler": (()=>TurnkeyExportHandler)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/_virtual/_tslib.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$turnkey$2b$http$40$3$2e$10$2e$0$2f$node_modules$2f40$turnkey$2f$http$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@turnkey+http@3.10.0/node_modules/@turnkey/http/dist/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$turnkey$2b$http$40$3$2e$10$2e$0$2f$node_modules$2f40$turnkey$2f$http$2f$dist$2f$_$5f$generated_$5f2f$services$2f$coordinator$2f$public$2f$v1$2f$public_api$2e$client$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@turnkey+http@3.10.0/node_modules/@turnkey/http/dist/__generated__/services/coordinator/public/v1/public_api.client.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$turnkey$2b$iframe$2d$stamper$40$2$2e$5$2e$0$2f$node_modules$2f40$turnkey$2f$iframe$2d$stamper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@turnkey+iframe-stamper@2.5.0/node_modules/@turnkey/iframe-stamper/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$getTLD$2f$getTLD$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/getTLD/getTLD.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$PlatformService$2f$PlatformService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/PlatformService/PlatformService.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/DynamicError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$AuthenticatorHandler$2f$TurnkeyAuthenticatorRecoveryHandler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/src/lib/AuthenticatorHandler/TurnkeyAuthenticatorRecoveryHandler.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$BaseTurnkeyHandler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/src/lib/BaseTurnkeyHandler.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/src/lib/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$utils$2f$convertAttestationTransports$2f$convertAttestationTransports$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/src/lib/utils/convertAttestationTransports/convertAttestationTransports.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$utils$2f$logger$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/src/lib/utils/logger/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$utils$2f$TurnkeyPasskeyService$2f$TurnkeyPasskeyService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/src/lib/utils/TurnkeyPasskeyService/TurnkeyPasskeyService.js [app-ssr] (ecmascript)");
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
const turnkeyExportUrl = 'https://export.turnkey.com';
class TurnkeyExportHandler extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$BaseTurnkeyHandler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseTurnkeyHandler"] {
    initExport(iframeContainer, iframeElementId) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            this.__iframeStamper = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$turnkey$2b$iframe$2d$stamper$40$2$2e$5$2e$0$2f$node_modules$2f40$turnkey$2f$iframe$2d$stamper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IframeStamper"]({
                iframeContainer,
                iframeElementId,
                iframeUrl: turnkeyExportUrl
            });
            yield this.__iframeStamper.init();
            this.__publicKey = this.__iframeStamper.publicKey();
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$AuthenticatorHandler$2f$TurnkeyAuthenticatorRecoveryHandler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["turnkeyAuthenticatorRecoveryHandler"].isSessionActive()) {
                this.__turnkeyClient = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$AuthenticatorHandler$2f$TurnkeyAuthenticatorRecoveryHandler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["turnkeyAuthenticatorRecoveryHandler"].client;
            } else {
                let rpId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$getTLD$2f$getTLD$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTLD"])();
                if (!rpId) {
                    rpId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$PlatformService$2f$PlatformService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlatformService"].getHostname();
                }
                const passkeyStamper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$utils$2f$TurnkeyPasskeyService$2f$TurnkeyPasskeyService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TurnkeyPasskeyService"].createWebauthnStamper({
                    rpId
                });
                const apiKeyStamper = TurnkeyExportHandler === null || TurnkeyExportHandler === void 0 ? void 0 : TurnkeyExportHandler.apiKeyStamper;
                const stamper = apiKeyStamper !== null && apiKeyStamper !== void 0 ? apiKeyStamper : passkeyStamper;
                this.__turnkeyClient = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$turnkey$2b$http$40$3$2e$10$2e$0$2f$node_modules$2f40$turnkey$2f$http$2f$dist$2f$_$5f$generated_$5f2f$services$2f$coordinator$2f$public$2f$v1$2f$public_api$2e$client$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TurnkeyClient"]({
                    baseUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TURNKEY_API_BASE_URL"]
                }, stamper);
            }
            return this.__publicKey;
        });
    }
    verifyExportWallet(_a) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, arguments, void 0, function*({ exportBundle, organizationId }) {
            if (!this.__iframeStamper) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"]('Cannot proceed with your request');
            }
            try {
                return yield this.__iframeStamper.injectWalletExportBundle(exportBundle, organizationId);
            } catch (err) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$utils$2f$logger$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].error('Error while verifying export wallet', err);
                throw err;
            }
        });
    }
    verifyExportPrivateKey(_a) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, arguments, void 0, function*({ exportBundle, organizationId, chain }) {
            if (!this.__iframeStamper) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"]('Cannot proceed with your request');
            }
            const keyFormat = chain === 'solana' || chain === 'SOL' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$turnkey$2b$iframe$2d$stamper$40$2$2e$5$2e$0$2f$node_modules$2f40$turnkey$2f$iframe$2d$stamper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KeyFormat"].Solana : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$turnkey$2b$iframe$2d$stamper$40$2$2e$5$2e$0$2f$node_modules$2f40$turnkey$2f$iframe$2d$stamper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KeyFormat"].Hexadecimal;
            try {
                return yield this.__iframeStamper.injectKeyExportBundle(exportBundle, organizationId, keyFormat);
            } catch (err) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$utils$2f$logger$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].error('Error while verifying export private key', err);
                throw err;
            }
        });
    }
    exportPrivateKey(_a) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, arguments, void 0, function*({ privateKeyId, organizationId }) {
            const apiKeyStamper = TurnkeyExportHandler === null || TurnkeyExportHandler === void 0 ? void 0 : TurnkeyExportHandler.apiKeyStamper;
            if (apiKeyStamper) {
                this.__turnkeyClient = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$turnkey$2b$http$40$3$2e$10$2e$0$2f$node_modules$2f40$turnkey$2f$http$2f$dist$2f$_$5f$generated_$5f2f$services$2f$coordinator$2f$public$2f$v1$2f$public_api$2e$client$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TurnkeyClient"]({
                    baseUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TURNKEY_API_BASE_URL"]
                }, apiKeyStamper);
            }
            if (!this.__iframeStamper || !this.__publicKey || !this.__turnkeyClient || !privateKeyId) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"]('Cannot proceed with your request');
            }
            try {
                const newActivity = yield this.__turnkeyClient.exportPrivateKey({
                    organizationId,
                    parameters: {
                        privateKeyId,
                        targetPublicKey: this.__publicKey
                    },
                    timestampMs: String(Date.now()),
                    type: 'ACTIVITY_TYPE_EXPORT_PRIVATE_KEY'
                });
                return newActivity.activity;
            } catch (err) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$utils$2f$logger$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].error('[TK] Error while completing export private key process', err);
                throw err;
            }
        });
    }
    exportWallet(_a) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, arguments, void 0, function*({ walletId, organizationId, address }) {
            const apiKeyStamper = TurnkeyExportHandler === null || TurnkeyExportHandler === void 0 ? void 0 : TurnkeyExportHandler.apiKeyStamper;
            if (apiKeyStamper) {
                this.__turnkeyClient = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$turnkey$2b$http$40$3$2e$10$2e$0$2f$node_modules$2f40$turnkey$2f$http$2f$dist$2f$_$5f$generated_$5f2f$services$2f$coordinator$2f$public$2f$v1$2f$public_api$2e$client$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TurnkeyClient"]({
                    baseUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TURNKEY_API_BASE_URL"]
                }, apiKeyStamper);
            }
            if (!this.__iframeStamper || !this.__publicKey || !this.__turnkeyClient || !walletId) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"]('Cannot proceed with your request');
            }
            try {
                if (address) {
                    const newActivity = yield this.__turnkeyClient.exportWalletAccount({
                        organizationId,
                        parameters: {
                            address,
                            targetPublicKey: this.__publicKey
                        },
                        timestampMs: String(Date.now()),
                        type: 'ACTIVITY_TYPE_EXPORT_WALLET_ACCOUNT'
                    });
                    return newActivity.activity;
                }
                const newActivity = yield this.__turnkeyClient.exportWallet({
                    organizationId,
                    parameters: {
                        targetPublicKey: this.__publicKey,
                        walletId
                    },
                    timestampMs: String(Date.now()),
                    type: 'ACTIVITY_TYPE_EXPORT_WALLET'
                });
                return newActivity.activity;
            } catch (err) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$utils$2f$logger$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].error('[TK] Error while completing export wallet process', err);
                throw err;
            }
        });
    }
}
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/src/lib/utils/base64UrlEncode/base64UrlEncode.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "base64UrlEncode": (()=>base64UrlEncode)
});
'use client';
const base64UrlEncode = (challenge)=>Buffer.from(challenge).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/src/lib/utils/generateRandomBuffer/generateRandomBuffer.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "generateRandomBuffer": (()=>generateRandomBuffer)
});
'use client';
const generateRandomBuffer = ()=>{
    const arr = new Uint8Array(32);
    crypto.getRandomValues(arr);
    return arr.buffer;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/src/lib/TurnkeyWalletConnectorBase/TurnkeyWalletConnectorBase.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "TurnkeyWalletConnectorBase": (()=>TurnkeyWalletConnectorBase)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/_virtual/_tslib.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$turnkey$2b$api$2d$key$2d$stamper$40$0$2e$4$2e$7$2f$node_modules$2f40$turnkey$2f$api$2d$key$2d$stamper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@turnkey+api-key-stamper@0.4.7/node_modules/@turnkey/api-key-stamper/dist/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$turnkey$2b$api$2d$key$2d$stamper$40$0$2e$4$2e$7$2f$node_modules$2f40$turnkey$2f$api$2d$key$2d$stamper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@turnkey+api-key-stamper@0.4.7/node_modules/@turnkey/api-key-stamper/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$turnkey$2b$http$40$3$2e$10$2e$0$2f$node_modules$2f40$turnkey$2f$http$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@turnkey+http@3.10.0/node_modules/@turnkey/http/dist/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$turnkey$2b$http$40$3$2e$10$2e$0$2f$node_modules$2f40$turnkey$2f$http$2f$dist$2f$_$5f$generated_$5f2f$services$2f$coordinator$2f$public$2f$v1$2f$public_api$2e$client$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@turnkey+http@3.10.0/node_modules/@turnkey/http/dist/__generated__/services/coordinator/public/v1/public_api.client.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$getTLD$2f$getTLD$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/getTLD/getTLD.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$PlatformService$2f$PlatformService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/PlatformService/PlatformService.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/DynamicError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$DeferredPromise$2f$DeferredPromise$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/DeferredPromise/DeferredPromise.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-connector-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3._7679fe86d42f6979f41d87c8de2f235e/node_modules/@dynamic-labs/wallet-connector-core/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$WalletConnectorBase$2f$WalletConnectorBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+wallet-connector-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3._7679fe86d42f6979f41d87c8de2f235e/node_modules/@dynamic-labs/wallet-connector-core/src/WalletConnectorBase/WalletConnectorBase.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$AuthenticatorHandler$2f$TurnkeyAuthenticatorRecoveryHandler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/src/lib/AuthenticatorHandler/TurnkeyAuthenticatorRecoveryHandler.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/src/lib/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$ExportHandler$2f$TurnkeyExportHandler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/src/lib/ExportHandler/TurnkeyExportHandler.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$utils$2f$base64UrlEncode$2f$base64UrlEncode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/src/lib/utils/base64UrlEncode/base64UrlEncode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$utils$2f$generateRandomBuffer$2f$generateRandomBuffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/src/lib/utils/generateRandomBuffer/generateRandomBuffer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$utils$2f$convertAttestationTransports$2f$convertAttestationTransports$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/src/lib/utils/convertAttestationTransports/convertAttestationTransports.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$utils$2f$logger$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/src/lib/utils/logger/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$utils$2f$TurnkeyPasskeyService$2f$TurnkeyPasskeyService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/src/lib/utils/TurnkeyPasskeyService/TurnkeyPasskeyService.js [app-ssr] (ecmascript)");
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
class TurnkeyWalletConnectorBase extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$wallet$2d$connector$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$_7679fe86d42f6979f41d87c8de2f235e$2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$WalletConnectorBase$2f$WalletConnectorBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WalletConnectorBase"] {
    constructor(nameAndKey, props){
        super(props);
        // Public fields
        this.requiresNonDynamicEmailOtp = false;
        this.isEmbeddedWallet = true;
        this.removeSessionKeys = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
                TurnkeyWalletConnectorBase.sessionKeys = undefined;
                TurnkeyWalletConnectorBase.apiKeyStamper = undefined;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$ExportHandler$2f$TurnkeyExportHandler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TurnkeyExportHandler"].apiKeyStamper = undefined;
            });
        this.stampCreateWalletAccountRequest = (_a)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, [
                _a
            ], void 0, function*({ request }) {
                yield this.createOrRestoreSession();
                const turnkeyClient = yield this.getTurnkeyClient();
                return turnkeyClient.stampCreateWalletAccounts(request);
            });
        this.stampDeleteSubOrganizationRequest = (_b)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, [
                _b
            ], void 0, function*({ request }) {
                yield this.createOrRestoreSession();
                const turnkeyClient = yield this.getTurnkeyClient();
                return turnkeyClient.stampDeleteSubOrganization(request);
            });
        if (!props.appName) {
            throw new Error('appName not set');
        }
        this.name = nameAndKey.name;
        this.overrideKey = nameAndKey.key;
        this.appName = props.appName;
        this.__authenticatorMethodHandler = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$AuthenticatorHandler$2f$TurnkeyAuthenticatorRecoveryHandler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["turnkeyAuthenticatorRecoveryHandler"];
    }
    getWebAuthnAttestation() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            const challenge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$utils$2f$generateRandomBuffer$2f$generateRandomBuffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateRandomBuffer"])();
            const authenticatorUserId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$utils$2f$generateRandomBuffer$2f$generateRandomBuffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateRandomBuffer"])();
            const { email, passkeyIdentifier } = this;
            if (!email && !passkeyIdentifier) {
                throw new Error('Email or passkeyIdentifier must be set to register a webauthn credential.');
            }
            const displayName = email || `${this.appName} - ${passkeyIdentifier}`;
            const webAuthnCreateParams = {
                publicKey: {
                    authenticatorSelection: {
                        authenticatorAttachment: undefined,
                        requireResidentKey: false,
                        residentKey: 'preferred',
                        userVerification: 'discouraged'
                    },
                    challenge,
                    pubKeyCredParams: [
                        {
                            alg: -7,
                            type: 'public-key'
                        }
                    ],
                    rp: {
                        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$getTLD$2f$getTLD$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTLD"])(),
                        name: this.appName
                    },
                    user: {
                        displayName,
                        id: authenticatorUserId,
                        name: email || `${this.appName} - ${passkeyIdentifier}`
                    }
                }
            };
            let attestation;
            try {
                attestation = yield __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$utils$2f$TurnkeyPasskeyService$2f$TurnkeyPasskeyService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TurnkeyPasskeyService"].getWebAuthnAttestation(webAuthnCreateParams);
            } catch (error) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$utils$2f$logger$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].warn(`Unable to register webauthn credential on the current page's TLD ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$getTLD$2f$getTLD$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTLD"])()}. Falling back to using hostname. ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$PlatformService$2f$PlatformService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlatformService"].getHostname()}`, error);
                // Create the passkey on the hostname instead.
                webAuthnCreateParams.publicKey.rp.id = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$PlatformService$2f$PlatformService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlatformService"].getHostname();
                attestation = yield __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$utils$2f$TurnkeyPasskeyService$2f$TurnkeyPasskeyService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TurnkeyPasskeyService"].getWebAuthnAttestation(webAuthnCreateParams);
            }
            return {
                attestation: {
                    attestationObject: attestation.attestationObject,
                    clientDataJson: attestation.clientDataJson,
                    credentialId: attestation.credentialId,
                    transports: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$utils$2f$convertAttestationTransports$2f$convertAttestationTransports$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertAttestationTransports"])(attestation.transports)
                },
                challenge: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$utils$2f$base64UrlEncode$2f$base64UrlEncode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["base64UrlEncode"])(challenge),
                displayName
            };
        });
    }
    getAuthenticatorHandler() {
        return this.__authenticatorMethodHandler;
    }
    getExportHandler() {
        // Create handler if it doesn't exist, reuse if it does
        if (!TurnkeyWalletConnectorBase.__exportHandler) {
            TurnkeyWalletConnectorBase.__exportHandler = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$ExportHandler$2f$TurnkeyExportHandler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TurnkeyExportHandler"]();
        }
        return TurnkeyWalletConnectorBase.__exportHandler;
    }
    // Public methods
    get email() {
        return this._email;
    }
    setEmail(email) {
        this._email = email;
    }
    get phone() {
        return this._phone;
    }
    setPhone(phone) {
        this._phone = phone;
    }
    get passkeyIdentifier() {
        return this._passkeyIdentifier;
    }
    setPasskeyIdentifier(passkeyIdentifier) {
        this._passkeyIdentifier = passkeyIdentifier;
    }
    clearEmail() {
        this._email = null;
    }
    getAddress() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            var _a;
            return (_a = this.verifiedCredential) === null || _a === void 0 ? void 0 : _a.address;
        });
    }
    getConnectedAccounts() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            const verifiedCredentials = this.verifiedCredentials || [];
            const addresses = verifiedCredentials.map((vc)=>vc === null || vc === void 0 ? void 0 : vc.address).filter((a)=>typeof a === 'string');
            return addresses;
        });
    }
    get turnkeyAddress() {
        var _a;
        const { address } = (_a = this.verifiedCredential) !== null && _a !== void 0 ? _a : {};
        return address;
    }
    get walletProperties() {
        const { walletProperties } = this.verifiedCredential || {};
        return walletProperties;
    }
    // Private methods
    set verifiedCredentials(verifiedCredentials) {
        this._verifiedCredentials = verifiedCredentials;
    }
    get verifiedCredentials() {
        return this._verifiedCredentials;
    }
    set verifiedCredential(verifiedCredential) {
        this._verifiedCredential = verifiedCredential;
    }
    get verifiedCredential() {
        return this._verifiedCredential;
    }
    setSessionKeyFetcher(func) {
        this.createOrRestoreSessionFetcherFunction = func;
    }
    setSessionKeyRemoveFunction(func) {
        this.removeSessionKeysFunction = func;
    }
    createOrRestoreSession() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, arguments, void 0, function*({ ignoreRestore } = {}) {
            var _a, _b, _c;
            if (!this.isSessionKeyCompatible() || TurnkeyWalletConnectorBase.isLoadingSession) {
                return;
            }
            if (!this.createOrRestoreSessionFetcherFunction) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"]('Cannot register session key to init provider');
            }
            const { sessionKeys } = TurnkeyWalletConnectorBase;
            if (sessionKeys === null || sessionKeys === void 0 ? void 0 : sessionKeys.publicKey) {
                const isExpired = new Date() >= new Date(sessionKeys.expirationDate);
                if (!isExpired) return sessionKeys.publicKey;
            }
            try {
                TurnkeyWalletConnectorBase.isLoadingSession = true;
                this.isLoadingSessionDeferredPromise = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$DeferredPromise$2f$DeferredPromise$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeferredPromise"]();
                if (!((_a = this.verifiedCredential) === null || _a === void 0 ? void 0 : _a.id)) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"]('No wallet ID found');
                }
                const sessionKeys = yield this.createOrRestoreSessionFetcherFunction({
                    ignoreRestore,
                    walletId: (_b = this.verifiedCredential) === null || _b === void 0 ? void 0 : _b.id
                });
                TurnkeyWalletConnectorBase.sessionKeys = sessionKeys;
                TurnkeyWalletConnectorBase.apiKeyStamper = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$turnkey$2b$api$2d$key$2d$stamper$40$0$2e$4$2e$7$2f$node_modules$2f40$turnkey$2f$api$2d$key$2d$stamper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ApiKeyStamper"]({
                    apiPrivateKey: sessionKeys.privateKey,
                    apiPublicKey: sessionKeys.publicKey
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$ExportHandler$2f$TurnkeyExportHandler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TurnkeyExportHandler"].apiKeyStamper = TurnkeyWalletConnectorBase.apiKeyStamper;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$utils$2f$logger$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].metaData.set('sessionApiPublicKey', sessionKeys.publicKey);
                return sessionKeys.publicKey;
            } catch (error) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$utils$2f$logger$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].error(error);
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"]('Failed to create or restore session');
            } finally{
                TurnkeyWalletConnectorBase.isLoadingSession = false;
                (_c = this.isLoadingSessionDeferredPromise) === null || _c === void 0 ? void 0 : _c.resolve();
            }
        });
    }
    isSessionKeyCompatible() {
        var _a;
        const walletProperties = (_a = this.verifiedCredential) === null || _a === void 0 ? void 0 : _a.walletProperties;
        const isSessionKeyCompatible = walletProperties === null || walletProperties === void 0 ? void 0 : walletProperties.isSessionKeyCompatible;
        return Boolean(isSessionKeyCompatible);
    }
    isSessionActive() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            const hasWallet = yield this.getAddress();
            return Boolean(hasWallet && TurnkeyWalletConnectorBase.sessionKeys && TurnkeyWalletConnectorBase.apiKeyStamper);
        });
    }
    get sessionKeys() {
        return TurnkeyWalletConnectorBase.sessionKeys;
    }
    getTurnkeyClient() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            var _a, _b;
            if (TurnkeyWalletConnectorBase.isLoadingSession) {
                yield (_a = this.isLoadingSessionDeferredPromise) === null || _a === void 0 ? void 0 : _a.promise;
            }
            let rpId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$getTLD$2f$getTLD$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTLD"])();
            if (!rpId) {
                rpId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$PlatformService$2f$PlatformService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlatformService"].getHostname();
            }
            const passkeyStamper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$utils$2f$TurnkeyPasskeyService$2f$TurnkeyPasskeyService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TurnkeyPasskeyService"].createWebauthnStamper({
                rpId
            });
            const apiKeyStamper = TurnkeyWalletConnectorBase === null || TurnkeyWalletConnectorBase === void 0 ? void 0 : TurnkeyWalletConnectorBase.apiKeyStamper;
            const stamper = apiKeyStamper !== null && apiKeyStamper !== void 0 ? apiKeyStamper : passkeyStamper;
            this.__turnkeyClient = (_b = this.getAuthenticatorHandler().client) !== null && _b !== void 0 ? _b : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$turnkey$2b$http$40$3$2e$10$2e$0$2f$node_modules$2f40$turnkey$2f$http$2f$dist$2f$_$5f$generated_$5f2f$services$2f$coordinator$2f$public$2f$v1$2f$public_api$2e$client$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TurnkeyClient"]({
                baseUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TURNKEY_API_BASE_URL"]
            }, stamper);
            return this.__turnkeyClient;
        });
    }
    setLoggerMetadata() {
        var _a, _b, _c;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$utils$2f$logger$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].metaData.set('turnkeySubOrganizationId', (_b = (_a = this._verifiedCredential) === null || _a === void 0 ? void 0 : _a.walletProperties) === null || _b === void 0 ? void 0 : _b.turnkeySubOrganizationId);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$utils$2f$logger$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].metaData.set('walletId', (_c = this._verifiedCredential) === null || _c === void 0 ? void 0 : _c.id);
        let authMethod = 'Unknown';
        if (this.isSessionKeyCompatible()) {
            authMethod = 'SessionKeys';
        } else if (this.__authenticatorMethodHandler.recoveryType === 'passkey') {
            authMethod = 'Passkey';
        } else if (this.__authenticatorMethodHandler.recoveryType === 'email') {
            authMethod = 'EmailAuth';
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$utils$2f$logger$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].metaData.set('authMethod', authMethod);
    }
}
TurnkeyWalletConnectorBase.isLoadingSession = false;
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/src/lib/utils/findTurnkeyVerifiedCredentials/findTurnkeyVerifiedCredentials.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "findTurnkeyVerifiedCredentials": (()=>findTurnkeyVerifiedCredentials),
    "findTurnkeyVerifiedCredentialsWithSmartWalletRef": (()=>findTurnkeyVerifiedCredentialsWithSmartWalletRef)
});
'use client';
const findTurnkeyVerifiedCredentials = (verifiedCredentials, chain)=>verifiedCredentials === null || verifiedCredentials === void 0 ? void 0 : verifiedCredentials.filter(({ walletName, chain: vcChain })=>(walletName === null || walletName === void 0 ? void 0 : walletName.startsWith('turnkey')) && chain === vcChain);
const findTurnkeyVerifiedCredentialsWithSmartWalletRef = (verifiedCredentials, chain)=>verifiedCredentials === null || verifiedCredentials === void 0 ? void 0 : verifiedCredentials.reduce((acc, vc)=>{
        var _a;
        if (((_a = vc.walletName) === null || _a === void 0 ? void 0 : _a.startsWith('turnkey')) && chain === vc.chain) {
            const smartWallet = verifiedCredentials.find((v)=>v.signerRefId === vc.id);
            const smartWalletRefId = smartWallet === null || smartWallet === void 0 ? void 0 : smartWallet.id;
            const smartWalletRefAddress = smartWallet === null || smartWallet === void 0 ? void 0 : smartWallet.address;
            acc.push(Object.assign(Object.assign({}, vc), {
                smartWalletRefAddress,
                smartWalletRefId
            }));
        }
        return acc;
    }, []);
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/src/types.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "TurnkeyWalletConnectorInfo": (()=>TurnkeyWalletConnectorInfo)
});
'use client';
const TurnkeyWalletConnectorInfo = {
    Turnkey: {
        key: 'turnkey',
        name: 'Turnkey'
    },
    TurnkeyHD: {
        key: 'turnkeyhd',
        name: 'Turnkey HD'
    }
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/src/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$assert$2d$package$2d$version$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$assert$2d$package$2d$version$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+assert-package-version@4.73.2/node_modules/@dynamic-labs/assert-package-version/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$assert$2d$package$2d$version$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$assert$2d$package$2d$version$2f$src$2f$lib$2f$assertPackageVersion$2f$assertPackageVersion$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+assert-package-version@4.73.2/node_modules/@dynamic-labs/assert-package-version/src/lib/assertPackageVersion/assertPackageVersion.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/package.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$AuthenticatorHandler$2f$TurnkeyAuthenticatorRecoveryHandler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/src/lib/AuthenticatorHandler/TurnkeyAuthenticatorRecoveryHandler.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/src/lib/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$ExportHandler$2f$TurnkeyExportHandler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/src/lib/ExportHandler/TurnkeyExportHandler.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$TurnkeyWalletConnectorBase$2f$TurnkeyWalletConnectorBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/src/lib/TurnkeyWalletConnectorBase/TurnkeyWalletConnectorBase.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$utils$2f$findTurnkeyVerifiedCredentials$2f$findTurnkeyVerifiedCredentials$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/src/lib/utils/findTurnkeyVerifiedCredentials/findTurnkeyVerifiedCredentials.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$utils$2f$convertAttestationTransports$2f$convertAttestationTransports$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/src/lib/utils/convertAttestationTransports/convertAttestationTransports.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$utils$2f$logger$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/src/lib/utils/logger/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$utils$2f$TurnkeyPasskeyService$2f$TurnkeyPasskeyService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/src/lib/utils/TurnkeyPasskeyService/TurnkeyPasskeyService.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/src/types.js [app-ssr] (ecmascript)");
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
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$assert$2d$package$2d$version$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$assert$2d$package$2d$version$2f$src$2f$lib$2f$assertPackageVersion$2f$assertPackageVersion$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertPackageVersion"])('@dynamic-labs/embedded-wallet', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"]);
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/src/index.js [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$assert$2d$package$2d$version$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$assert$2d$package$2d$version$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+assert-package-version@4.73.2/node_modules/@dynamic-labs/assert-package-version/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/package.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$AuthenticatorHandler$2f$TurnkeyAuthenticatorRecoveryHandler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/src/lib/AuthenticatorHandler/TurnkeyAuthenticatorRecoveryHandler.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/src/lib/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$ExportHandler$2f$TurnkeyExportHandler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/src/lib/ExportHandler/TurnkeyExportHandler.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$TurnkeyWalletConnectorBase$2f$TurnkeyWalletConnectorBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/src/lib/TurnkeyWalletConnectorBase/TurnkeyWalletConnectorBase.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$utils$2f$findTurnkeyVerifiedCredentials$2f$findTurnkeyVerifiedCredentials$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/src/lib/utils/findTurnkeyVerifiedCredentials/findTurnkeyVerifiedCredentials.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$utils$2f$convertAttestationTransports$2f$convertAttestationTransports$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/src/lib/utils/convertAttestationTransports/convertAttestationTransports.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$utils$2f$logger$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/src/lib/utils/logger/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$lib$2f$utils$2f$TurnkeyPasskeyService$2f$TurnkeyPasskeyService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/src/lib/utils/TurnkeyPasskeyService/TurnkeyPasskeyService.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/src/types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$embedded$2d$wallet$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buff_968b812a23342008ead4545432bdca27$2f$node_modules$2f40$dynamic$2d$labs$2f$embedded$2d$wallet$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+embedded-wallet@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buff_968b812a23342008ead4545432bdca27/node_modules/@dynamic-labs/embedded-wallet/src/index.js [app-ssr] (ecmascript) <locals>");
}}),

};

//# sourceMappingURL=80801_%40dynamic-labs_embedded-wallet_6b726334._.js.map