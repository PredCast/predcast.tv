(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/InvalidParamError-CnPeSjBW.esm.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "A": (()=>NONCE_POOL_SIZE),
    "C": (()=>getSessionKeys),
    "D": (()=>randomString),
    "E": (()=>ValueMustBeDefinedError),
    "F": (()=>getCore),
    "I": (()=>name),
    "L": (()=>version),
    "M": (()=>setDefaultClient),
    "N": (()=>ClientNotFoundError),
    "O": (()=>CLIENT_SDK_NAME),
    "P": (()=>BaseError),
    "S": (()=>getElevatedAccessToken),
    "T": (()=>assertDefined),
    "_": (()=>MfaRateLimitedError),
    "a": (()=>DYNAMIC_ICONIC_SPRITE_URL),
    "b": (()=>InvalidExternalAuthError),
    "c": (()=>CHAINS_INFO_MAP),
    "d": (()=>UnauthorizedError),
    "f": (()=>createDeviceSignatureHeadersMiddleware),
    "g": (()=>SandboxMaximumThresholdReachedError),
    "h": (()=>getNonce),
    "i": (()=>DYNAMIC_WAAS_METADATA),
    "j": (()=>getDefaultClient),
    "k": (()=>DYNAMIC_SDK_API_VERSION),
    "l": (()=>fetchAndStoreNonces),
    "m": (()=>getDeviceSigner),
    "n": (()=>DEFAULT_WAAS_BASE_API_URL),
    "o": (()=>SDK_API_CORE_VERSION),
    "p": (()=>getHeadersForNonceSignedByDeviceSigners),
    "r": (()=>DEFAULT_WAAS_BASE_MPC_RELAY_API_URL),
    "s": (()=>getChainFromVerifiedCredentialChain),
    "t": (()=>InvalidParamError),
    "u": (()=>createApiClient),
    "v": (()=>MfaInvalidOtpError),
    "w": (()=>isCookieEnabled),
    "x": (()=>APIError),
    "y": (()=>LinkCredentialError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$914$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.914/node_modules/@dynamic-labs/sdk-api-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$914$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$AuthStorageEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.914/node_modules/@dynamic-labs/sdk-api-core/src/models/AuthStorageEnum.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$914$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.914/node_modules/@dynamic-labs/sdk-api-core/src/runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$914$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$apis$2f$SDKApi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.914/node_modules/@dynamic-labs/sdk-api-core/src/apis/SDKApi.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$914$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$deviceNonceSignatureEndpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.914/node_modules/@dynamic-labs/sdk-api-core/src/deviceNonceSignatureEndpoints.js [app-client] (ecmascript)");
;
//#region package.json
var name = "@dynamic-labs-sdk/client";
var version = "0.19.0";
var dependencies = {
    "@dynamic-labs-sdk/assert-package-version": "workspace:*",
    "@dynamic-labs-wallet/browser-wallet-client": "0.0.286",
    "@dynamic-labs/sdk-api-core": "0.0.914",
    "@simplewebauthn/browser": "13.1.0",
    "ably": "2.17.1",
    "buffer": "6.0.3",
    "eventemitter3": "5.0.1",
    "zod": "4.0.5"
};
//#endregion
//#region src/client/core/getCore/getCore.ts
/** @not-instrumented */ const getCore = (client)=>{
    return client.__core;
};
//#endregion
//#region src/errors/base/BaseError.ts
const getDetails = ({ details, cause })=>{
    if (cause instanceof BaseError) return cause.details;
    if (cause?.message) return cause.message;
    return details;
};
/**
* Formats the error message with all available information
*/ const formatMessage = ({ shortMessage, details, docsUrl, metaMessages })=>{
    return [
        "[Dynamic JS SDK]",
        shortMessage,
        "",
        ...metaMessages ? [
            ...metaMessages,
            ""
        ] : [],
        ...docsUrl ? [
            `Docs: ${docsUrl}`
        ] : [],
        ...details ? [
            `Details: ${details}`
        ] : [],
        `Version: ${version}`,
        `Timestamp: ${/* @__PURE__ */ new Date().toISOString()}`
    ].join("\n");
};
/**
* Base error class that provides structured error handling with detailed information
*/ var BaseError = class BaseError extends Error {
    /** The error unique code */ code;
    details;
    formattedMessage;
    name = "BaseError";
    cause;
    constructor(args){
        const details = getDetails(args);
        const formattedMessage = formatMessage({
            ...args,
            details
        });
        super(args.shortMessage ?? formattedMessage, args.cause ? {
            cause: args.cause
        } : void 0);
        this.formattedMessage = formattedMessage;
        this.details = details;
        this.name = args.name ?? this.name;
        this.cause = args.cause ?? this.cause;
        this.code = args.code;
    }
    /**
	* Walks the cause chain of the error and returns the root error
	*/ walk() {
        const cause = this.cause;
        if (cause instanceof BaseError) return cause.walk();
        return cause;
    }
    toString() {
        return this.formattedMessage;
    }
};
//#endregion
//#region src/errors/ClientNotFoundError.ts
var ClientNotFoundError = class extends BaseError {
    constructor(){
        super({
            cause: null,
            code: "client_not_found_error",
            docsUrl: null,
            name: "ClientNotFoundError",
            shortMessage: "No Dynamic client has been created yet. Make sure you have called createDynamicClient() first."
        });
    }
};
//#endregion
//#region src/client/defaultClient/defaultClient.ts
let defaultClient = null;
let numOfInitializedClients = 0;
/**
* Returns the DynamicClient instance that was initialized with createDynamicClient.
*
* If more than one instance of DynamicClient was initialized, you should not use this function.
* Instead, you should pass the client instance you stored to the function that needs it.
* @not-instrumented
*/ const getDefaultClient = ()=>{
    if (!defaultClient) throw new ClientNotFoundError();
    if (numOfInitializedClients > 1) getCore(defaultClient).logger.debug("Multiple instances of DynamicClient found. If you are only using one client (recommended), make sure you are not calling \"createDynamicClient\" multiple times. If you are using multiple clients, make sure you are passing which client to use as the last param of all Dynamic functions.");
    return defaultClient;
};
/** @not-instrumented */ const setDefaultClient = (client)=>{
    defaultClient = client;
    numOfInitializedClients++;
};
//#endregion
//#region src/utils/getNonce/constants.ts
const NONCE_POOL_EXPIRATION_TIME = 6e4 * 60 * 24;
const NONCE_POOL_SIZE = 5;
//#endregion
//#region src/modules/apiClient/constants.ts
const DYNAMIC_API_VERSION_HEADER = "x-dyn-api-version";
const DYNAMIC_REQUEST_ID_HEADER = "x-dyn-request-id";
const DYNAMIC_SDK_VERSION_HEADER = "x-dyn-version";
const ELEVATED_ACCESS_TOKEN_HEADER = "x-dyn-elevated-access-token";
const MFA_TOKEN_HEADER = "x-mfa-auth-token";
const SESSION_PUBLIC_KEY_HEADER = "x-dyn-session-public-key";
const DYNAMIC_SDK_API_VERSION = dependencies["@dynamic-labs/sdk-api-core"];
const DYNAMIC_SDK_SESSION_ID_HEADER = "x-dyn-session-id";
const CLIENT_SDK_NAME = "ClientSDK";
//#endregion
//#region src/utils/randomString/randomString.ts
const DEFAULT_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
/** @not-instrumented */ const randomString = ({ chars = DEFAULT_CHARS, length })=>{
    const bytes = new Uint8Array(length);
    crypto.getRandomValues(bytes);
    let result = "";
    for(let i = 0; i < length; i++)result += chars[bytes[i] % chars.length];
    return result;
};
//#endregion
//#region src/errors/ValueMustBeDefinedError.ts
var ValueMustBeDefinedError = class extends BaseError {
    constructor(message){
        super({
            cause: null,
            code: "value_must_be_defined_error",
            docsUrl: null,
            name: "ValueMustBeDefined",
            shortMessage: message
        });
    }
};
//#endregion
//#region src/utils/assertDefined/assertDefined.ts
/**
* Asserts that a value is not null or undefined, throwing an error if it is.
* This function acts as a type guard, narrowing the type to exclude null and undefined.
*
* @template T - The type of the value being checked
* @param value - The value to check for null or undefined
* @param message - The error message to throw if the value is null or undefined
* @throws Throws an error with the provided message if value is null or undefined
* @example
* ```typescript
* const maybeString: string | null = getValue();
* assertDefined(maybeString, 'String value is required');
* // maybeString is now typed as string (null is excluded)
* ```
*/ function assertDefined(value, message) {
    if (value === null || value === void 0) throw new ValueMustBeDefinedError(message);
}
//#endregion
//#region src/modules/projectSettings/isCookieEnabled/isCookieEnabled.ts
/**
* Returns true if the client is using Dynamic cookies or a BYO JWT cookie.
* @not-instrumented
*/ const isCookieEnabled = (client)=>{
    assertDefined(client.projectSettings, "Project settings are not defined");
    const securitySettings = client.projectSettings.security;
    if (!securitySettings) return false;
    const dynamicCookiesEnabled = (securitySettings.auth?.storage || []).includes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$914$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$AuthStorageEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthStorageEnum"].Cookie);
    const byoJwtCookieEnabled = Boolean(securitySettings.externalAuth?.cookieName);
    return dynamicCookiesEnabled || byoJwtCookieEnabled;
};
//#endregion
//#region src/modules/sessionKeys/getSessionKeys/getSessionKeys.ts
/** @instrumented */ const getSessionKeys = (client)=>{
    const publicKey = getCore(client).state.get().sessionKeys;
    if (!publicKey) return;
    return {
        publicKey
    };
};
//#endregion
//#region src/modules/auth/getElevatedAccessToken/getElevatedAccessToken.ts
/**
* Gets an elevated access token by scope.
*
* This function retrieves an elevated access token that contains the specified scope.
* Expired tokens are automatically filtered out.
*
* By default, if the token has `singleUse: true`, it will be automatically
* consumed (removed from state) after retrieval. Pass `consume: false` to
* check for token existence without consuming it.
*
* @param params - The parameters object.
* @param params.scope - The scope to match (e.g., 'wallet:export').
* @param params.consume - Whether to consume single-use tokens (default: true).
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns The elevated access token if found and not expired, or undefined if not found or expired.
*
* @example
* ```typescript
* // Retrieve and consume (default)
* const token = getElevatedAccessToken({ scope: 'wallet:export' });
*
* // Check existence without consuming
* const token = getElevatedAccessToken({ scope: 'credential:unlink', consume: false });
* ```
* @not-instrumented
*/ const getElevatedAccessToken = ({ consume = true, scope }, client = getDefaultClient())=>{
    const core = getCore(client);
    const now = /* @__PURE__ */ new Date();
    const elevatedAccessTokens = core.state.get().elevatedAccessTokens || [];
    const validTokens = elevatedAccessTokens.filter((token$1)=>!token$1.expiresAt || token$1.expiresAt > now);
    if (validTokens.length !== elevatedAccessTokens.length) core.state.set({
        elevatedAccessTokens: validTokens
    });
    const token = validTokens.find((token$1)=>token$1.scopes.includes(scope));
    if (!token) return;
    if (consume && token.singleUse) {
        const updatedTokens = validTokens.filter((t)=>t !== token);
        core.state.set({
            elevatedAccessTokens: updatedTokens
        });
    }
    return token.token;
};
//#endregion
//#region src/errors/APIError/APIError.ts
var APIError = class APIError extends BaseError {
    status;
    constructor(message, code, status){
        super({
            cause: null,
            code,
            docsUrl: null,
            name: "APIError",
            shortMessage: message
        });
        this.status = status;
    }
    static async fromResponse(response) {
        try {
            const errorBody = await response.clone().json();
            if (errorBody && "error" in errorBody && typeof errorBody.error === "string") {
                const errorCode = "code" in errorBody && typeof errorBody.code === "string" ? errorBody.code : "unknown_error";
                return new APIError(errorBody.error, errorCode, response.status);
            }
            return null;
        } catch  {
            return null;
        }
    }
};
//#endregion
//#region src/errors/InvalidExternalAuthError.ts
var InvalidExternalAuthError = class extends BaseError {
    constructor({ cause }){
        super({
            cause,
            code: "invalid_external_auth_error",
            docsUrl: "https://www.dynamic.xyz/docs/external-auth/third-party-auth-overview",
            name: "InvalidExternalAuthError",
            shortMessage: "Error authenticating with external JWT"
        });
    }
};
//#endregion
//#region src/errors/LinkCredentialError.ts
var LinkCredentialError = class extends BaseError {
    constructor({ cause }){
        super({
            cause,
            code: "link_credential_error",
            docsUrl: null,
            name: "LinkCredentialError",
            shortMessage: "The credential you are trying to link is associated with another account and cannot be reassigned."
        });
    }
};
//#endregion
//#region src/errors/MfaInvalidOtpError.ts
var MfaInvalidOtpError = class extends BaseError {
    constructor({ cause }){
        super({
            cause,
            code: "mfa_invalid_otp_error",
            docsUrl: null,
            name: "MfaInvalidOtpError",
            shortMessage: "Invalid OTP"
        });
    }
};
//#endregion
//#region src/errors/MfaRateLimitedError.ts
var MfaRateLimitedError = class extends BaseError {
    constructor({ cause }){
        super({
            cause,
            code: "mfa_rate_limited_error",
            docsUrl: null,
            name: "MfaRateLimitedError",
            shortMessage: "Rate limited"
        });
    }
};
//#endregion
//#region src/errors/SandboxMaximumThresholdReachedError.ts
var SandboxMaximumThresholdReachedError = class extends BaseError {
    constructor({ cause }){
        super({
            cause,
            code: "sandbox_maximum_threshold_reached_error",
            docsUrl: "https://www.dynamic.xyz/docs/developer-dashboard/sandbox-vs-live#sandbox-vs-live",
            name: "SandboxMaximumThresholdReachedError",
            shortMessage: "Your sandbox environment has reached the maximum MAU. Please use a live environment for production traffic."
        });
    }
};
//#endregion
//#region src/modules/apiClient/utils/clientErrorMapper/clientErrorMapper.ts
/**
* Default error mapper for the client that handles common API error codes.
*
* This mapper transforms specific API error codes into more specific error types:
* - `mfa_invalid_code` → `MfaInvalidOtpError`
* - `mfa_rate_limited` → `MfaRateLimitedError`
*
* @param error - The error to be mapped
* @returns A transformed error if the error code matches a known pattern, or null if no transformation is needed
*
* @example
* ```typescript
* // This will be automatically applied to all API errors
* const apiClient = createApiClient({}, client);
*
* // The clientErrorMapper will automatically convert mfa_invalid_code errors
* // to MfaInvalidOtpError instances
* ```
* @not-instrumented
*/ const clientErrorMapper = (error)=>{
    if (error instanceof APIError) {
        if (error.code === "mfa_invalid_code") return new MfaInvalidOtpError({
            cause: error
        });
        if (error.code === "mfa_rate_limited") return new MfaRateLimitedError({
            cause: error
        });
        if (error.code === "invalid_external_auth") return new InvalidExternalAuthError({
            cause: error
        });
        if (error.code === "sandbox_maximum_threshold_reached") return new SandboxMaximumThresholdReachedError({
            cause: error
        });
        if (error.code === "merge_accounts_invalid" || error.code === "reassign_wallet_error") return new LinkCredentialError({
            cause: error
        });
    }
    return null;
};
//#endregion
//#region src/modules/apiClient/utils/convertToApiErrorMiddleware/convertToApiErrorMiddleware.ts
/**
* Creates middleware that converts HTTP error responses to APIError instances
* and optionally applies custom error mappers to transform them into specific error types.
*
* @param options.errorMappers - Array of error mappers to apply to API errors
* @returns A middleware function that handles error conversion and mapping
* @not-instrumented
*/ const createConvertToApiErrorMiddleware = ({ errorMappers = [] })=>({
        post: async (context)=>{
            if (context.response.status >= 400) {
                const apiError = await APIError.fromResponse(context.response);
                if (apiError) {
                    let errorToThrow = apiError;
                    for (const mapper of errorMappers){
                        const newError = mapper(apiError);
                        if (newError) {
                            errorToThrow = newError;
                            break;
                        }
                    }
                    throw errorToThrow;
                }
            }
            return context.response;
        }
    });
//#endregion
//#region src/utils/getNonce/getNonce.ts
/**
* Returns a nonce for wallet ownership verification.
*
* Pops the first nonce from the prefetched pool. When the pool is running low
* (≤1 remaining after pop) a background refetch is triggered. If the pool is
* empty, nonces are fetched on-demand before returning.
* @instrumented
*/ const getNonce = async (client)=>{
    const core = getCore(client);
    const pool = core.state.get().prefetchedNonces;
    if (pool.length > 0) {
        const [nonce, ...remaining] = pool;
        core.state.set({
            prefetchedNonces: remaining
        });
        if (remaining.length <= 1) fetchAndStoreNonces(client);
        return nonce;
    }
    await fetchAndStoreNonces(client);
    return getNonce(client);
};
//#endregion
//#region src/modules/deviceRegistration/getDeviceSigner/getDeviceSigner.ts
/** @instrumented */ const getDeviceSigner = async (client)=>{
    const { deviceSigner, keychain } = getCore(client);
    /**
	* If the device signer is available, it should handle the device signing.
	* This is used for mobile devices with secure enclave.
	*/ if (deviceSigner) return deviceSigner;
    const keyName = "device";
    if (!await keychain.getPublicKey(keyName)) await keychain.generateKey(keyName);
    return {
        getPublicKey: ()=>keychain.getPublicKey(keyName),
        sign: (payload)=>keychain.sign(keyName, payload)
    };
};
//#endregion
//#region src/modules/deviceRegistration/getHeadersForNonceSignedByDeviceSigners/getHeadersForNonceSignedByDeviceSigners.ts
/** @instrumented */ const getHeadersForNonceSignedByDeviceSigners = async (client)=>{
    const { projectSettings } = client;
    assertDefined(projectSettings, "Project settings not found");
    /**
	* For cookie based environments, the device registration is handled
	* by settings the cookie in the browser.
	* Then we dont need to provide the headers
	*/ if (isCookieEnabled(client)) return {};
    const deviceSigner = await getDeviceSigner(client);
    const nonce = await getNonce(client);
    const signedNonce = await deviceSigner.sign(nonce);
    const publicKey = await deviceSigner.getPublicKey();
    return {
        "x-dynamic-device-nonce": nonce,
        "x-dynamic-device-publickey": publicKey,
        "x-dynamic-device-signed-nonce": signedNonce
    };
};
//#endregion
//#region src/modules/apiClient/utils/deviceSignatureHeadersMiddleware/createDeviceSignatureHeadersMiddleware.ts
/** @instrumented */ const createDeviceSignatureHeadersMiddleware = (client)=>{
    return {
        pre: async (context)=>{
            /**
		* The signed nonce is not required for cookie based environments.
		*/ if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$914$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$deviceNonceSignatureEndpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDeviceNonceSignatureRequiredForUrl"])(context.url) && !isCookieEnabled(client)) {
                const deviceSignerHeaders = await getHeadersForNonceSignedByDeviceSigners(client);
                return {
                    init: {
                        ...context.init,
                        headers: {
                            ...context.init.headers,
                            ...deviceSignerHeaders
                        }
                    },
                    url: context.url
                };
            }
        }
    };
};
//#endregion
//#region src/errors/UnauthorizedError.ts
var UnauthorizedError = class extends BaseError {
    constructor({ cause }){
        super({
            cause,
            code: "unauthorized_error",
            docsUrl: null,
            name: "UnauthorizedError",
            shortMessage: "Unauthorized"
        });
    }
};
//#endregion
//#region src/modules/apiClient/utils/unauthorizedMiddleware/createUnauthorizedMiddleware.ts
/** @not-instrumented */ const createUnauthorizedMiddleware = ()=>({
        post: async (context)=>{
            if (context.response.status === 401) {
                let cause = null;
                try {
                    const errorBody = await context.response.clone().json();
                    if (errorBody && "error" in errorBody && typeof errorBody.error === "string") cause = new Error(errorBody.error);
                } catch  {}
                throw new UnauthorizedError({
                    cause
                });
            }
            return context.response;
        }
    });
//#endregion
//#region src/modules/apiClient/createApiClient.ts
/**
* Returns a new instance of the SDK API client.
*
* This is not meant for storing, as it is very light we can create it whenever needed.
* @instrumented
*/ const createApiClient = (options = {}, client)=>{
    const core = getCore(client);
    const coreState = core.state.get();
    const settings = {
        basePath: core.apiBaseUrl,
        headers: {
            "Content-Type": "application/json",
            [DYNAMIC_API_VERSION_HEADER]: `API/${DYNAMIC_SDK_API_VERSION}`,
            [DYNAMIC_REQUEST_ID_HEADER]: randomString({
                length: 50
            }),
            [DYNAMIC_SDK_SESSION_ID_HEADER]: core.sdkSessionId,
            [DYNAMIC_SDK_VERSION_HEADER]: `${CLIENT_SDK_NAME}/${version}`,
            ...core.getApiHeaders(),
            ...options.headers
        }
    };
    if (client.token) settings.headers.Authorization = `Bearer ${client.token}`;
    if (client.projectSettings && isCookieEnabled(client)) settings.credentials = "include";
    if (options.includeMfaToken && coreState.mfaToken) settings.headers[MFA_TOKEN_HEADER] = coreState.mfaToken;
    if (options.elevatedAccessTokenScope) {
        const elevatedToken = getElevatedAccessToken({
            scope: options.elevatedAccessTokenScope
        }, client);
        if (elevatedToken) settings.headers[ELEVATED_ACCESS_TOKEN_HEADER] = elevatedToken;
    }
    const sessionPublicKey = getSessionKeys(client)?.publicKey;
    const isSessionPublicKeyHeaderPresent = settings.headers[SESSION_PUBLIC_KEY_HEADER] !== void 0;
    if (sessionPublicKey && !isSessionPublicKeyHeaderPresent) settings.headers[SESSION_PUBLIC_KEY_HEADER] = sessionPublicKey;
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$914$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$apis$2f$SDKApi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SDKApi"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$914$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Configuration"]({
        ...settings,
        fetchApi: core.fetch,
        middleware: [
            createDeviceSignatureHeadersMiddleware(client),
            createConvertToApiErrorMiddleware({
                errorMappers: [
                    ...options.errorMappers || [],
                    clientErrorMapper
                ]
            }),
            createUnauthorizedMiddleware()
        ]
    }));
};
//#endregion
//#region src/utils/getNonce/fetchAndStoreNonces/fetchAndStoreNonces.ts
/**
* Fetches a batch of nonces from the API.
*
* Prefetching is critical for iOS deep link wallet providers (e.g. Phantom
* redirect). On iOS, a network request (like fetching a nonce) between a user
* action and a deeplink call will break the gesture chain, causing iOS to
* silently ignore the deeplink. By prefetching nonces ahead of time,
* `getNonce` can return synchronously from cache and the deeplink fires
* without an interrupting network round-trip.
* @not-instrumented
*/ const fetchAndStoreNonces = async (client)=>{
    const core = getCore(client);
    const { environmentId } = core;
    const { nonces } = await createApiClient({}, client).getNonces({
        count: NONCE_POOL_SIZE,
        environmentId
    });
    core.state.set({
        prefetchedNonces: nonces,
        prefetchedNoncesExpiration: Date.now() + NONCE_POOL_EXPIRATION_TIME
    });
};
//#endregion
//#region src/modules/wallets/constants.ts
const CHAINS_INFO_MAP = {
    ALEO: {
        apiChainName: "aleo",
        blockchainName: "Aleo",
        verifiedCredentialChainName: "aleo"
    },
    ALGO: {
        apiChainName: "algo",
        blockchainName: "Algorand",
        verifiedCredentialChainName: "algorand"
    },
    APTOS: {
        apiChainName: "aptos",
        blockchainName: "Aptos",
        verifiedCredentialChainName: "aptos"
    },
    BTC: {
        apiChainName: "bitcoin",
        blockchainName: "Bitcoin",
        verifiedCredentialChainName: "bip122"
    },
    COSMOS: {
        apiChainName: "cosmos",
        blockchainName: "Cosmos",
        verifiedCredentialChainName: "cosmos"
    },
    ECLIPSE: {
        apiChainName: "eclipse",
        blockchainName: "Eclipse",
        verifiedCredentialChainName: "eclipse"
    },
    EVM: {
        apiChainName: "evm",
        blockchainName: "Ethereum",
        verifiedCredentialChainName: "eip155"
    },
    FLOW: {
        apiChainName: "flow",
        blockchainName: "Flow",
        verifiedCredentialChainName: "flow"
    },
    SOL: {
        apiChainName: "solana",
        blockchainName: "Solana",
        verifiedCredentialChainName: "solana",
        waasChainNameOverride: "SVM"
    },
    SPARK: {
        apiChainName: "spark",
        blockchainName: "Spark",
        verifiedCredentialChainName: "spark"
    },
    STARK: {
        apiChainName: "starknet",
        blockchainName: "Starknet",
        verifiedCredentialChainName: "starknet"
    },
    STELLAR: {
        apiChainName: "stellar",
        blockchainName: "Stellar",
        verifiedCredentialChainName: "stellar"
    },
    SUI: {
        apiChainName: "sui",
        blockchainName: "Sui",
        verifiedCredentialChainName: "sui"
    },
    TEMPO: {
        apiChainName: "tempo",
        blockchainName: "Tempo",
        verifiedCredentialChainName: "tempo"
    },
    TON: {
        apiChainName: "ton",
        blockchainName: "TON",
        verifiedCredentialChainName: "ton"
    },
    TRON: {
        apiChainName: "tron",
        blockchainName: "Tron",
        verifiedCredentialChainName: "tron"
    }
};
//#endregion
//#region src/utils/getChainFromVerifiedCredentialChain/getChainFromVerifiedCredentialChain.ts
/** @instrumented */ const getChainFromVerifiedCredentialChain = (verifiedCredentialChain)=>{
    const chain = Object.keys(CHAINS_INFO_MAP).find((chain$1)=>CHAINS_INFO_MAP[chain$1].verifiedCredentialChainName === verifiedCredentialChain);
    assertDefined(chain, `Unknown chain: ${verifiedCredentialChain}`);
    return chain;
};
//#endregion
//#region src/constants.ts
const SDK_API_CORE_VERSION = dependencies["@dynamic-labs/sdk-api-core"];
const DYNAMIC_ICONIC_SPRITE_URL = "https://iconic.dynamic-static-assets.com/icons/sprite.svg";
//#endregion
//#region src/modules/waas/constants.ts
const DEFAULT_WAAS_BASE_API_URL = "https://app.dynamicauth.com";
const DEFAULT_WAAS_BASE_MPC_RELAY_API_URL = "https://relay.dynamicauth.com";
const DYNAMIC_WAAS_METADATA = {
    displayName: "Dynamic WaaS",
    icon: `${DYNAMIC_ICONIC_SPRITE_URL}#dynamicwaas`,
    normalizedWalletName: "dynamicwaas"
};
//#endregion
//#region src/errors/InvalidParamError.ts
var InvalidParamError = class extends BaseError {
    constructor(message){
        super({
            cause: null,
            code: "invalid_param_error",
            docsUrl: null,
            name: "InvalidParamError",
            shortMessage: message
        });
    }
};
;
 //# sourceMappingURL=InvalidParamError-CnPeSjBW.esm.js.map
}}),
"[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/getVerifiedCredentialForWalletAccount-B58hODrW.esm.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "A": (()=>setCookie),
    "C": (()=>normalizeAddress),
    "D": (()=>offEvent),
    "E": (()=>emitEvent),
    "O": (()=>onEvent),
    "S": (()=>formatWalletAccountId),
    "T": (()=>InvalidWalletProviderKeyError),
    "_": (()=>createRuntimeServiceAccessKey),
    "a": (()=>parseElevatedAccessToken),
    "b": (()=>formatWalletProviderKey),
    "c": (()=>findWaasWalletProviderByChain),
    "d": (()=>checkAndRaiseWalletAccountsChangedEvent),
    "f": (()=>emitWalletAccountsChangedEvent),
    "g": (()=>getWalletProviderRegistry),
    "h": (()=>WalletProviderPriority),
    "i": (()=>upsertElevatedAccessToken),
    "k": (()=>onceEvent),
    "l": (()=>isWaasWalletProvider),
    "m": (()=>getWalletProviderFromWalletAccount),
    "n": (()=>getWalletProviderByKey),
    "o": (()=>restoreUserSharesForAllWalletAccounts),
    "p": (()=>DYNAMIC_AUTH_COOKIE_NAME),
    "r": (()=>updateAuthFromVerifyResponse),
    "s": (()=>isWaasWalletAccount),
    "t": (()=>getVerifiedCredentialForWalletAccount),
    "u": (()=>getWalletProviders),
    "v": (()=>NoWalletProviderFoundError),
    "w": (()=>splitWalletProviderKey),
    "x": (()=>normalizeWalletNameWithChain),
    "y": (()=>getWalletAccounts)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/InvalidParamError-CnPeSjBW.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$914$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.914/node_modules/@dynamic-labs/sdk-api-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$914$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$JwtVerifiedCredentialFormatEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.914/node_modules/@dynamic-labs/sdk-api-core/src/models/JwtVerifiedCredentialFormatEnum.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$914$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$WalletProviderEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.914/node_modules/@dynamic-labs/sdk-api-core/src/models/WalletProviderEnum.js [app-client] (ecmascript)");
;
;
//#region src/utils/setCookie/setCookie.ts
/**
* Sefelly sets the cookie in the browser.
* @not-instrumented
*/ const setCookie = (cookie)=>{
    document.cookie = cookie;
};
//#endregion
//#region src/modules/clientEvents/clientEvents.ts
/**
* Adds an event listener for Dynamic client events.
*
* This function allows you to listen for various events emitted by the Dynamic client,
* such as authentication state changes, wallet connections, and more.
*
* @param params.event - The event name to listen for.
* @param params.listener - The callback function to execute when the event is fired.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns A function that can be called to remove the listener.
* @instrumented
*/ const onEvent = ({ event, listener }, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const { eventEmitter } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    eventEmitter.on(event, listener);
    return ()=>{
        eventEmitter.off(event, listener);
    };
};
/**
* Removes an event listener from Dynamic client events.
*
* This function unsubscribes a previously registered event listener
* from the specified Dynamic client event.
*
* @param params.event - The event name to remove the listener from.
* @param params.listener - The callback function to remove.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @instrumented
*/ const offEvent = ({ event, listener }, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const { eventEmitter } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    eventEmitter.off(event, listener);
};
/**
* Adds a one-time event listener for Dynamic client events.
*
* This function listens for an event that will automatically remove itself
* after being triggered once.
*
* @param params.event - The event name to listen for.
* @param params.listener - The callback function to execute when the event is fired.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns A function that can be called to remove the listener before it fires.
* @instrumented
*/ const onceEvent = ({ event, listener }, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const { eventEmitter } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    eventEmitter.once(event, listener);
    return ()=>{
        eventEmitter.off(event, listener);
    };
};
/**
* Emits a Dynamic client event.
*
* This function triggers an event that will be received by all registered
* listeners for the specified event type.
*
* @param params.event - The event name to emit.
* @param params.args - The arguments to pass to event listeners.
* @param client - The Dynamic client instance.
* @not-instrumented
*/ const emitEvent = ({ event, args }, client)=>{
    const { eventEmitter } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    eventEmitter.emit(event, args);
};
//#endregion
//#region src/errors/InvalidWalletProviderKeyError.ts
var InvalidWalletProviderKeyError = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P"] {
    constructor(value){
        super({
            cause: null,
            code: "invalid_wallet_provider_key",
            docsUrl: null,
            name: "InvalidWalletProviderKeyError",
            shortMessage: `Invalid wallet provider key: ${value}. Key must be in the format of <normalizedWalletNameWithChain>:<walletProviderType>[:<suffix>]`
        });
    }
};
//#endregion
//#region src/modules/wallets/walletProvider/splitWalletProviderKey/splitWalletProviderKey.ts
/** @not-instrumented */ const splitWalletProviderKey = (walletProviderKey)=>{
    const [normalizedWalletNameWithChain, walletProviderType, suffix, ...rest] = walletProviderKey.split(":");
    if (!normalizedWalletNameWithChain || !Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$914$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$WalletProviderEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletProviderEnum"]).includes(walletProviderType) || rest.length > 0) throw new InvalidWalletProviderKeyError(walletProviderKey);
    return {
        normalizedWalletNameWithChain,
        suffix,
        walletProviderType
    };
};
//#endregion
//#region src/modules/wallets/utils/normalizeAddress/normalizeAddress.ts
/** @not-instrumented */ const normalizeAddress = (address, chain)=>{
    let normalizedAddress = address;
    if (normalizedAddress?.startsWith("0x")) normalizedAddress = normalizedAddress.slice(2);
    normalizedAddress = [
        "EVM",
        "FLOW"
    ].includes(chain) ? normalizedAddress?.toLowerCase() : normalizedAddress;
    return normalizedAddress;
};
//#endregion
//#region src/modules/wallets/utils/formatWalletAccountId/formatWalletAccountId.ts
/** @not-instrumented */ const formatWalletAccountId = ({ address, chain, walletProviderKey })=>{
    const { normalizedWalletNameWithChain } = splitWalletProviderKey(walletProviderKey);
    return `${normalizedWalletNameWithChain}:${normalizeAddress(address, chain)}`;
};
//#endregion
//#region src/modules/wallets/utils/convertUnverifiedWalletAccountToWalletAccount/convertUnverifiedWalletAccountToWalletAccount.ts
/** @not-instrumented */ const convertUnverifiedWalletAccountToWalletAccount = ({ unverifiedWalletAccount })=>({
        address: unverifiedWalletAccount.address,
        addressesWithTypes: unverifiedWalletAccount.addressesWithTypes,
        chain: unverifiedWalletAccount.chain,
        id: formatWalletAccountId({
            address: unverifiedWalletAccount.address,
            chain: unverifiedWalletAccount.chain,
            walletProviderKey: unverifiedWalletAccount.walletProviderKey
        }),
        lastSelectedAt: unverifiedWalletAccount.lastSelectedAt,
        verifiedCredentialId: null,
        walletProviderKey: unverifiedWalletAccount.walletProviderKey
    });
//#endregion
//#region src/modules/wallets/utils/normalizeWalletNameWithChain/normalizeWalletNameWithChain.ts
/**
* Format the raw wallet name and chain to get the value we can use for
* verified credentials' `walletName` field.
* @not-instrumented
*/ const normalizeWalletNameWithChain = ({ displayName, chain })=>{
    const sanitizedWalletName = displayName.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const chainLowered = chain.toLocaleLowerCase();
    if (sanitizedWalletName.endsWith(chainLowered)) return sanitizedWalletName;
    return `${sanitizedWalletName}${chainLowered}`;
};
//#endregion
//#region src/modules/wallets/utils/formatWalletProviderKey/formatWalletProviderKey.ts
/**
* Assembles the wallet provider key from the wallet name, chain, and wallet provider type.
*
* The suffix is optional and can be used to add a uniquely identifying string to the key, which
* might be necessary for some wallet providers (like Wallet Connect).
*
* IMPORTANT: Do NOT add a suffix unless absolutely necessary, as it will cause the wallet account
* to not be able to find its wallet provider when connecting to a new device (it won't be possible
* to determine the full key just from the Verified Credential data).
* @not-instrumented
*/ const formatWalletProviderKey = ({ suffix, chain, displayName, walletProviderType })=>{
    return `${normalizeWalletNameWithChain({
        chain,
        displayName
    })}:${walletProviderType}${suffix ? `:${suffix}` : ""}`;
};
//#endregion
//#region src/modules/wallets/walletProvider/walletProviderKeyMap/getWalletProviderKeyFromVerifiedCredential/getWalletProviderKeyFromVerifiedCredential.ts
/** @not-instrumented */ const getWalletProviderKeyFromVerifiedCredential = ({ verifiedCredential }, client)=>{
    const { walletProviderKeyMap } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client).state.get();
    const storedWalletProviderKey = walletProviderKeyMap[verifiedCredential.id];
    if (storedWalletProviderKey) return {
        walletProviderKey: storedWalletProviderKey
    };
    /**
	* We fallback to comprising the wallet provider key from walletName and walletProvider.
	*
	* Some wallet provider types (like Wallet Connect) also use a special suffix for their wallet provider
	* keys, so this won't be enough for them.
	* Therefore, for those specific wallet providers, the wallet account will remain without a wallet provider
	* and will require reconnection.
	* Read walletProvider.types.ts for more info.
	*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"])(verifiedCredential.walletName, `Failed to get wallet provider for verified credential with ID ${verifiedCredential.id}: missing walletName`);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"])(verifiedCredential.walletProvider, `Failed to get wallet provider for verified credential with ID ${verifiedCredential.id}: missing walletProvider`);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"])(verifiedCredential.chain, `Failed to get wallet provider for verified credential with ID ${verifiedCredential.id}: missing chain`);
    return {
        walletProviderKey: formatWalletProviderKey({
            chain: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["s"])(verifiedCredential.chain),
            displayName: verifiedCredential.walletName,
            walletProviderType: verifiedCredential.walletProvider
        })
    };
};
//#endregion
//#region src/modules/wallets/utils/convertVerifiedCredentialToWalletAccount/convertVerifiedCredentialToWalletAccount.ts
/** @not-instrumented */ const convertVerifiedCredentialToWalletAccount = ({ verifiedCredential }, client)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"])(verifiedCredential.address, "Missing address in verified credential");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"])(verifiedCredential.chain, "Missing chain in verified credential");
    const chain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["s"])(verifiedCredential.chain);
    const { walletProviderKey } = getWalletProviderKeyFromVerifiedCredential({
        verifiedCredential
    }, client);
    const walletAccountId = formatWalletAccountId({
        address: verifiedCredential.address,
        chain,
        walletProviderKey
    });
    return {
        address: verifiedCredential.address,
        addressesWithTypes: verifiedCredential.walletAdditionalAddresses,
        chain,
        hardwareWalletVendor: verifiedCredential.walletProperties?.hardwareWallet,
        id: walletAccountId,
        lastSelectedAt: verifiedCredential.lastSelectedAt ?? null,
        verifiedCredentialId: verifiedCredential.id,
        walletProviderKey
    };
};
//#endregion
//#region src/modules/wallets/getWalletAccounts/getWalletAccountsFromState/getWalletAccountsFromState.ts
/** @not-instrumented */ const getWalletAccountsFromState = ({ unverifiedWalletAccounts, user }, client)=>{
    const walletAccountsMap = /* @__PURE__ */ new Map();
    /**
	* Handle the unverified wallet accounts before the user verified credentials
	* so the later verified wallet accounts can override the unverified wallet accounts
	*/ unverifiedWalletAccounts.forEach((unverifiedWalletAccount)=>{
        const walletAccount = convertUnverifiedWalletAccountToWalletAccount({
            unverifiedWalletAccount
        });
        walletAccountsMap.set(walletAccount.id, walletAccount);
    });
    (user?.verifiedCredentials ?? []).filter((verified)=>verified.format === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$914$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$JwtVerifiedCredentialFormatEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JwtVerifiedCredentialFormatEnum"].Blockchain).forEach((verifiedWalletAccount)=>{
        const walletAccount = convertVerifiedCredentialToWalletAccount({
            verifiedCredential: verifiedWalletAccount
        }, client);
        walletAccountsMap.set(walletAccount.id, walletAccount);
    });
    return Array.from(walletAccountsMap.values());
};
//#endregion
//#region src/modules/wallets/getWalletAccounts/getWalletAccounts.ts
/**
* Retrieves all wallet accounts associated with the current session.
*
* This function returns both verified and unverified wallet accounts,
* combining data from user credentials and local unverified accounts.
* You can differentiate between verified and unverified wallet accounts by
* checking the `verifiedCredentialId` property.
*
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns An array of wallet accounts associated with the session.
* @instrumented
*/ const getWalletAccounts = (client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const { unverifiedWalletAccounts, user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client).state.get();
    return getWalletAccountsFromState({
        unverifiedWalletAccounts,
        user
    }, client);
};
//#endregion
//#region src/errors/NoWalletProviderFoundError.ts
var NoWalletProviderFoundError = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P"] {
    constructor({ walletProviderKey }){
        super({
            cause: null,
            code: "no_wallet_provider_found_error",
            docsUrl: null,
            name: "NoWalletProviderFoundError",
            shortMessage: `No wallet provider found with key: ${walletProviderKey}`
        });
    }
};
//#endregion
//#region src/services/runtimeServices/createRuntimeServiceAccessKey/createRuntimeServiceAccessKey.ts
/**
* Creates a service accessor function that manages service instantiation and caching.
* The returned function will either retrieve an existing service from the registry or
* create a new one using the provided builder function.
*
* @template - The type of service to be created/accessed
* @param key - Unique identifier for the service in the registry
* @param builder - Function that creates the service instance when called with a DynamicClient
* @instrumented
*/ const createRuntimeServiceAccessKey = (key, builder)=>(client)=>{
        const { runtimeServices } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
        const currentService = runtimeServices.getByKey(key);
        if (currentService) return currentService;
        const service = builder(client);
        runtimeServices.register(key, service);
        return service;
    };
//#endregion
//#region src/modules/wallets/walletProviderRegistry/createWalletProviderRegistry/createWalletProviderRegistry.ts
/**
* Creates a new wallet provider registry that manages wallet providers with priority-based registration.
*
* @returns The wallet provider registry instance
*
* @example
* ```typescript
* const registry = createWalletProviderRegistry();
*
* registry.register({
*   priority: WalletProviderPriority.WALLET_SDK,
*   walletProvider: myWalletProvider
* });
*
* const provider = registry.getByKey('my-wallet-key');
* const providers = registry.listProviders();
* ```
* @not-instrumented
*/ const createWalletProviderRegistry = (client)=>{
    const registry = /* @__PURE__ */ new Map();
    return {
        getByKey: (key)=>registry.get(key)?.walletProvider,
        listProviders: ()=>Array.from(registry.values()).map((v)=>v.walletProvider),
        register: (args)=>{
            const existingEntry = registry.get(args.walletProvider.key);
            if (existingEntry) {
                if (existingEntry.priority < args.priority) {
                    registry.set(args.walletProvider.key, args);
                    emitEvent({
                        args: {
                            walletProviderKey: args.walletProvider.key
                        },
                        event: "walletProviderChanged"
                    }, client);
                }
            } else {
                registry.set(args.walletProvider.key, args);
                emitEvent({
                    args: {
                        walletProvider: args.walletProvider
                    },
                    event: "walletProviderRegistered"
                }, client);
                emitEvent({
                    args: {
                        walletProviderKey: args.walletProvider.key
                    },
                    event: "walletProviderChanged"
                }, client);
            }
        },
        unregister: (key)=>{
            registry.delete(key);
            emitEvent({
                args: {
                    walletProviderKey: key
                },
                event: "walletProviderUnregistered"
            }, client);
        }
    };
};
//#endregion
//#region src/modules/wallets/walletProviderRegistry/getWalletProviderRegistry/getWalletProviderRegistry.ts
/**
* This function provides access to a shared instance of the wallet provider registry.
*
* It ensures that the same registry instance is used throughout the client to maintaining
* consistency of registered wallet providers across different parts of the codebase.
*
* @returns The wallet provider registry instance
*
* @example
* ```typescript
* // Get the registry instance
* const registry = getWalletProviderRegistry();
*
* // Register a wallet provider
* registry.register({
*   priority: WalletProviderPriority.WALLET_SDK,
*   walletProvider: myWalletProvider
* });
*
* // Retrieve a specific provider
* const provider = registry.getByKey('metamaskevm');
* ```
*/ const getWalletProviderRegistry = createRuntimeServiceAccessKey("walletProviderRegistry", (client)=>createWalletProviderRegistry(client));
//#endregion
//#region src/modules/wallets/walletProviderRegistry/walletProviderRegistry.types.ts
let WalletProviderPriority = /* @__PURE__ */ function(WalletProviderPriority$1) {
    /**
	* Highest priority should be used by wallet providers that implement
	* the most reliable wallet integration.
	* example: The SDK provided by the wallet provider.
	*/ WalletProviderPriority$1[WalletProviderPriority$1["WALLET_SDK"] = 100] = "WALLET_SDK";
    /**
	* Medium priority should be used by wallet providers that implement
	* a wallet integration via some reliable standard.
	* example: A wallet provider that uses EIP6963 announcement.
	*/ WalletProviderPriority$1[WalletProviderPriority$1["WALLET_SELF_ANNOUNCEMENT_STANDARD"] = 50] = "WALLET_SELF_ANNOUNCEMENT_STANDARD";
    /**
	* Low priority should be used by wallet providers that implement
	* a wallet integration on a less reliable standard.
	* example: A wallet provider that uses window.ethereum, where the
	* window key can be overridden by other extensions.
	*/ WalletProviderPriority$1[WalletProviderPriority$1["WINDOW_INJECT"] = 20] = "WINDOW_INJECT";
    return WalletProviderPriority$1;
}({});
//#endregion
//#region src/modules/wallets/utils/getWalletProviderFromWalletAccount/getWalletProviderFromWalletAccount.ts
/** @instrumented */ const getWalletProviderFromWalletAccount = ({ walletAccount }, client)=>{
    const walletProvider = getWalletProviderRegistry(client).getByKey(walletAccount.walletProviderKey);
    if (!walletProvider) throw new NoWalletProviderFoundError({
        walletProviderKey: walletAccount.walletProviderKey
    });
    return walletProvider;
};
//#endregion
//#region src/modules/auth/consts.ts
const DYNAMIC_AUTH_COOKIE_NAME = "DYNAMIC_JWT_TOKEN";
//#endregion
//#region src/modules/wallets/emitWalletAccountsChangedEvent/emitWalletAccountsChangedEvent.ts
/**
* Emits the `walletAccountsChanged` event.
* @not-instrumented
*/ const emitWalletAccountsChangedEvent = (client)=>{
    emitEvent({
        args: {
            walletAccounts: getWalletAccounts(client)
        },
        event: "walletAccountsChanged"
    }, client);
};
//#endregion
//#region src/modules/auth/updateAuthFromVerifyResponse/checkAndRaiseWalletAccountsChangedEvent/checkAndRaiseWalletAccountsChangedEvent.ts
/** @not-instrumented */ const checkAndRaiseWalletAccountsChangedEvent = ({ previousState }, client)=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    if (getWalletAccountsHash(previousState, client) !== getWalletAccountsHash(core.state.get(), client)) emitWalletAccountsChangedEvent(client);
};
const getWalletAccountsHash = (state, client)=>getWalletAccountsFromState(state, client).map((walletAccount)=>JSON.stringify(walletAccount)).sort().join("-");
//#endregion
//#region src/modules/wallets/getWalletProviders/getWalletProviders.ts
/**
* Get all available wallet providers to interact with internally.
* @instrumented
*/ const getWalletProviders = (client)=>{
    return getWalletProviderRegistry(client).listProviders();
};
//#endregion
//#region src/modules/waas/isWaasWalletProvider/isWaasWalletProvider.ts
/** @not-instrumented */ const isWaasWalletProvider = (walletProvider)=>{
    return walletProvider.key.includes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["i"].normalizedWalletName);
};
//#endregion
//#region src/modules/waas/findWaasWalletProviderByChain/findWaasWalletProviderByChain.ts
/** @not-instrumented */ const findWaasWalletProviderByChain = ({ chain }, client)=>{
    const providers = getWalletProviders(client);
    const waasProviderKey = formatWalletProviderKey({
        chain,
        displayName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["i"].displayName,
        walletProviderType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$914$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$WalletProviderEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletProviderEnum"].EmbeddedWallet
    });
    const waasProvider = providers.find((provider)=>provider.key === waasProviderKey && provider.chain === chain);
    if (!waasProvider || !isWaasWalletProvider(waasProvider)) return null;
    return waasProvider;
};
//#endregion
//#region src/modules/waas/isWaasWalletAccount/isWaasWalletAccount.ts
/**
* This function determines whether the provided wallet account is a Dynamic
* WaaS wallet account.
*
* @param params.walletAccount - The wallet account to check.
* @returns True if the wallet account is a WaaS wallet account, false otherwise.
* @not-instrumented
*/ const isWaasWalletAccount = ({ walletAccount })=>{
    return walletAccount.walletProviderKey.includes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["i"].normalizedWalletName);
};
//#endregion
//#region src/modules/waas/restoreUserSharesForAllWalletAccounts/restoreUserSharesForAllWalletAccounts.ts
/** @not-instrumented */ const restoreUserSharesForAllWalletAccounts = async (client)=>{
    const waasWalletAccounts = getWalletAccounts(client).filter((walletAccount)=>isWaasWalletAccount({
            walletAccount
        }));
    await Promise.all(waasWalletAccounts.map(async (walletAccount)=>{
        const provider = findWaasWalletProviderByChain({
            chain: walletAccount.chain
        }, client);
        /**
		* The environment might not have the embedded wallet extensions installed.
		* In that case there is no provider for the chain and we can skip restoring the user share.
		*/ if (!provider) return;
        return provider.restoreUserShareForWalletAccount({
            walletAccount
        });
    }));
};
//#endregion
//#region src/modules/auth/decodeJwt/decodeJwt.ts
/**
* Decodes a JWT token and returns the full payload.
*
* This function extracts and returns the complete JWT payload including scopes,
* expiration time, and other claims.
*
* @param jwt - The JWT token string.
* @returns The decoded JWT payload object.
* @throws InvalidParamError if the token is invalid or cannot be decoded.
*
* @example
* ```typescript
* const payload = decodeJwt(jwt);
* // Returns: { scopes: ['wallet:export'], exp: 1234567890, ... }
* ```
* @not-instrumented
*/ const decodeJwt = (jwt)=>{
    try {
        const parts = jwt.split(".");
        if (parts.length !== 3) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"]("Invalid JWT format");
        const base64Payload = parts[1].replaceAll("-", "+").replaceAll("_", "/");
        const paddedPayload = base64Payload + "=".repeat((4 - base64Payload.length % 4) % 4);
        const decodedPayload = atob(paddedPayload);
        return JSON.parse(decodedPayload);
    } catch (error) {
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"]) throw error;
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"](`Failed to decode JWT: ${error instanceof Error ? error.message : String(error)}`);
    }
};
//#endregion
//#region src/modules/auth/updateAuthFromVerifyResponse/elevatedAccessTokens/normalizeScopes/normalizeScopes.ts
/**
* Normalizes scopes by deduplicating and sorting them.
* This creates a canonical representation for comparison.
*
* @param scopes - Array of scope strings (may contain duplicates)
* @returns Normalized, sorted array of unique scopes
* @not-instrumented
*/ const normalizeScopes = (scopes)=>{
    return [
        ...new Set(scopes)
    ].sort((a, b)=>a.localeCompare(b));
};
//#endregion
//#region src/modules/auth/updateAuthFromVerifyResponse/elevatedAccessTokens/parseElevatedAccessToken/parseElevatedAccessToken.ts
/**
* Validates and parses an elevated access token from a JWT string.
* Extracts scopes, expiration, and validates the token structure.
*
* Policy decisions:
* - Tokens without scopes are rejected (returns null)
* - Tokens with empty scopes array are rejected (returns null)
* - Tokens without exp field are rejected (returns null)
* - Expired tokens are rejected (returns null)
*
* @param token - JWT string containing the elevated access token
* @param now - Current date for expiration validation (defaults to new Date())
* @returns Parsed token data or null if token is invalid/expired
* @not-instrumented
*/ const parseElevatedAccessToken = (token, now = /* @__PURE__ */ new Date())=>{
    const payload = decodeJwt(token);
    const filteredScopes = (payload?.scope?.split(" ") ?? []).filter((s)=>s.length > 0);
    const singleUse = payload.singleUse ?? false;
    if (!filteredScopes || filteredScopes.length === 0) return null;
    if (!payload.exp) return null;
    const expiresAt = /* @__PURE__ */ new Date(payload.exp * 1e3);
    if (expiresAt <= now) return null;
    return {
        expiresAt,
        normalizedScopes: normalizeScopes(filteredScopes),
        scopes: filteredScopes,
        singleUse,
        token
    };
};
//#endregion
//#region src/modules/auth/updateAuthFromVerifyResponse/elevatedAccessTokens/upsertElevatedAccessToken/upsertElevatedAccessToken.ts
/**
* Upserts an elevated access token into the current tokens array.
*
* Policy: Only one token per normalized scope-set is allowed.
* If a token with the same normalized scopes exists, it is replaced.
* This ensures we don't accumulate multiple tokens for the same scope combination.
*
* @param currentTokens - Current array of elevated access tokens
* @param newToken - New token to upsert
* @returns Updated array of tokens with the new token upserted
* @not-instrumented
*/ const upsertElevatedAccessToken = ({ currentTokens, newToken })=>{
    const newScopeKey = normalizeScopes(newToken.scopes).join(" ");
    return [
        ...currentTokens.filter((existingToken)=>{
            return normalizeScopes(existingToken.scopes).join(" ") !== newScopeKey;
        }),
        {
            expiresAt: newToken.expiresAt,
            scopes: newToken.scopes,
            singleUse: newToken.singleUse,
            token: newToken.token
        }
    ];
};
//#endregion
//#region src/modules/auth/updateAuthFromVerifyResponse/updateAuthFromVerifyResponse.ts
/** @instrumented */ const updateAuthFromVerifyResponse = ({ response }, client)=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    const previousState = {
        ...core.state.get()
    };
    const { user, minifiedJwt, jwt, expiresAt, mfaToken, elevatedAccessToken } = response;
    const sessionExpiresAt = /* @__PURE__ */ new Date(expiresAt * 1e3);
    const newState = {
        legacyToken: jwt ?? null,
        sessionExpiresAt,
        token: minifiedJwt ?? null,
        user
    };
    if (mfaToken) newState.mfaToken = mfaToken;
    const currentTokens = core.state.get().elevatedAccessTokens || [];
    newState.elevatedAccessTokens = currentTokens;
    if (elevatedAccessToken) {
        const parsedToken = parseElevatedAccessToken(elevatedAccessToken);
        if (parsedToken) newState.elevatedAccessTokens = upsertElevatedAccessToken({
            currentTokens,
            newToken: parsedToken
        });
    }
    core.state.set(newState);
    /**
	* For customers using a sandbox environment with cookies enabled, we need to set the cookie
	* programmatically because Redcoast won't set the cookie via headers. We set the cookie programmatically
	* so customers can access the cookie from document.cookie consistently between sandbox and live environments.
	*/ if (minifiedJwt && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["w"])(client)) setCookie(`${DYNAMIC_AUTH_COOKIE_NAME}=${minifiedJwt}; expires=${sessionExpiresAt.toUTCString()}; path=/; SameSite=Lax`);
    checkAndRaiseWalletAccountsChangedEvent({
        previousState
    }, client);
    if (!previousState.user && Boolean(newState.user)) restoreUserSharesForAllWalletAccounts(client);
};
//#endregion
//#region src/modules/wallets/getWalletProviderByKey/getWalletProviderByKey.ts
/** @not-instrumented */ const getWalletProviderByKey = ({ walletProviderKey }, client)=>{
    const walletProvider = getWalletProviders(client).find((walletProvider$1)=>walletProvider$1.key === walletProviderKey);
    if (!walletProvider) throw new NoWalletProviderFoundError({
        walletProviderKey
    });
    return walletProvider;
};
//#endregion
//#region src/modules/wallets/utils/getVerifiedCredentialForWalletAccount/getVerifiedCredentialForWalletAccount.ts
/** @instrumented */ const getVerifiedCredentialForWalletAccount = ({ walletAccount }, client)=>{
    return client.user?.verifiedCredentials.find((vc)=>vc.id === walletAccount.verifiedCredentialId);
};
;
 //# sourceMappingURL=getVerifiedCredentialForWalletAccount-B58hODrW.esm.js.map
}}),
"[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/getNetworkProviderFromNetworkId-VEDzpV8Z.esm.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "A": (()=>getBuffer),
    "C": (()=>CannotTrackError),
    "D": (()=>INITIALIZE_STORAGE_SYNC_TRACKER_KEY),
    "E": (()=>GENERATE_SESSION_KEYS_TRACKER_KEY),
    "F": (()=>createLocalStorageAdapter),
    "I": (()=>subscribeWithSelector),
    "L": (()=>isEqualShallow),
    "M": (()=>createStorageKeySchema),
    "N": (()=>createStorage),
    "O": (()=>REFRESH_USER_STATE_FROM_COOKIE_TRACKER_KEY),
    "P": (()=>InvalidStorageSet),
    "S": (()=>CrossTabBroadcastMessageSchema),
    "T": (()=>FETCH_PROJECT_SETTINGS_TRACKER_KEY),
    "_": (()=>NoNetworkProvidersError),
    "a": (()=>updateWalletProviderKeysForVerifiedCredentials),
    "b": (()=>createLogger),
    "c": (()=>createSignInMessageStatement),
    "d": (()=>createVisit),
    "f": (()=>hasExtension),
    "g": (()=>WalletAlreadyLinkedToAnotherUserError),
    "h": (()=>isCaptchaRequired),
    "i": (()=>getNetworksData),
    "j": (()=>generateSessionKeys),
    "k": (()=>isServerSideRendering),
    "l": (()=>formatSignInMessage),
    "m": (()=>consumeCaptchaToken),
    "n": (()=>getNetworkProviders),
    "o": (()=>verifyMessageSignatureOwnership),
    "p": (()=>setCaptchaToken),
    "r": (()=>getNetworkProviderBuilderRegistry),
    "s": (()=>removeUnverifiedWalletAccount),
    "t": (()=>getNetworkProviderFromNetworkId),
    "u": (()=>setUnverifiedWalletAccounts),
    "v": (()=>createRealtimeService),
    "w": (()=>createDeferredPromise),
    "x": (()=>createCrossTabBroadcast),
    "y": (()=>createIndexedDBKeychainService)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/InvalidParamError-CnPeSjBW.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/getVerifiedCredentialForWalletAccount-B58hODrW.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$914$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.914/node_modules/@dynamic-labs/sdk-api-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$914$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$AuthModeEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.914/node_modules/@dynamic-labs/sdk-api-core/src/models/AuthModeEnum.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/mini/schemas.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$buffer$40$6$2e$0$2e$3$2f$node_modules$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/buffer@6.0.3/node_modules/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter3$40$5$2e$0$2e$1$2f$node_modules$2f$eventemitter3$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eventemitter3@5.0.1/node_modules/eventemitter3/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter3$40$5$2e$0$2e$1$2f$node_modules$2f$eventemitter3$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eventemitter3@5.0.1/node_modules/eventemitter3/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter3$40$5$2e$0$2e$1$2f$node_modules$2f$eventemitter3$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EventEmitter$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eventemitter3@5.0.1/node_modules/eventemitter3/index.js [app-client] (ecmascript) <export default as EventEmitter>");
;
;
;
;
;
;
//#region src/utils/isEqualShallow/isEqualShallow.ts
/**
* Shallow compare two objects.
*
* Source: https://github.com/pmndrs/zustand/blob/main/src/vanilla/shallow.ts
* @not-instrumented
*/ const isEqualShallow = (objA, objB)=>{
    if (Object.is(objA, objB)) return true;
    if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) return objA === objB;
    if (objA instanceof Map && objB instanceof Map) {
        if (objA.size !== objB.size) return false;
        for (const [key, value] of objA)if (!Object.is(value, objB.get(key))) return false;
        return true;
    }
    if (objA instanceof Set && objB instanceof Set) {
        if (objA.size !== objB.size) return false;
        for (const value of objA)if (!objB.has(value)) return false;
        return true;
    }
    const keysA = Object.keys(objA);
    if (keysA.length !== Object.keys(objB).length) return false;
    for (const keyA of keysA)if (!Object.prototype.hasOwnProperty.call(objB, keyA) || !Object.is(objA[keyA], objB[keyA])) return false;
    if (objA.constructor !== objB.constructor) return false;
    return true;
};
//#endregion
//#region src/utils/observable/subscribeWithSelector/subscribeWithSelector.ts
/**
* Allows subscribing to a slice of the state.
* The slice is a computation of the states.
*
* The callback will only be called when the slice has changed.
* Change is determined by shallow comparison.
*
* Returns a function to unsubscribe the callback.
* @instrumented
*/ const subscribeWithSelector = (observable, selector)=>(callback)=>{
        let lastSlice = selector(observable.get());
        return observable.subscribe((value)=>{
            const nextSlice = selector(value);
            if (isEqualShallow(nextSlice, lastSlice)) return;
            lastSlice = nextSlice;
            callback(nextSlice);
        });
    };
//#endregion
//#region src/services/storage/createLocalStorageAdapter/createLocalStorageAdapter.ts
/**
* Creates a localStorage adapter
* @instrumented
*/ const createLocalStorageAdapter = ()=>({
        getItem: async (key)=>localStorage.getItem(key),
        removeItem: async (key)=>localStorage.removeItem(key),
        setItem: async (key, value)=>localStorage.setItem(key, value)
    });
//#endregion
//#region src/errors/InvalidStorageSet.ts
var InvalidStorageSet = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P"] {
    constructor({ key, value }){
        super({
            cause: null,
            code: "invalid_storage_set",
            docsUrl: null,
            metaMessages: [
                `key: ${key}`,
                value
            ],
            name: "InvalidStorageSet",
            shortMessage: "Tried to store a value that does not match the schema"
        });
    }
};
//#endregion
//#region src/services/storage/createStorage/formatForStorage/isValidDateISOString/isValidDateISOString.ts
/**
* Returns whether the given string is a valid ISO date string.
*
* Does not support timezone offsets.
* @not-instrumented
*/ const isValidDateISOString = (value)=>{
    const date = new Date(value);
    return !isNaN(date.getTime()) && date.toISOString() === value;
};
//#endregion
//#region src/services/storage/createStorage/formatForStorage/storageFormat.ts
const DATE_PREFIX = "__DATE__";
/** @not-instrumented */ const formatForStorage = (value)=>{
    const item = {
        value
    };
    return JSON.stringify(item, (_, entry)=>{
        if (isValidDateISOString(entry)) return `${DATE_PREFIX}${entry}`;
        return entry;
    });
};
/** @not-instrumented */ const parseFromStorage = (value)=>{
    try {
        return JSON.parse(value, (_, entry)=>{
            if (typeof entry === "string" && entry.startsWith(DATE_PREFIX)) return new Date(entry.slice(8));
            return entry;
        });
    } catch (error) {
        return null;
    }
};
//#endregion
//#region src/services/storage/createStorage/createStorage.ts
/**
* Creates a Storage service to interact with storage adapter
* @instrumented
*/ const createStorage = ({ prefix = "", storageAdapter })=>{
    const getPrefixedKey = (key)=>prefix ? `${prefix}_${key}` : key;
    return {
        getItem: async (storageKeySchema)=>{
            const rawItem = await storageAdapter.getItem(getPrefixedKey(storageKeySchema.key));
            const parsedItem = rawItem ? parseFromStorage(rawItem) : null;
            /**
			* The item saved to localStorage may be malformed.
			* In this case, we remove it and return null.
			*/ if (parsedItem !== null) {
                const parsed = storageKeySchema.schema.safeParse(parsedItem.value);
                if (parsed.success) return parsed.data;
            }
            /**
			* The item saved to localStorage may be malformed.
			* In this case, we remove it and return null.
			*/ await storageAdapter.removeItem(getPrefixedKey(storageKeySchema.key));
            return null;
        },
        removeItem: async (storageKeySchema)=>{
            await storageAdapter.removeItem(getPrefixedKey(storageKeySchema.key));
        },
        setItem: async (storageKeySchema, value)=>{
            const parsed = storageKeySchema.schema.safeParse(value);
            if (!parsed.success) throw new InvalidStorageSet({
                key: storageKeySchema.key,
                value: JSON.stringify(value)
            });
            const item = formatForStorage(parsed.data);
            await storageAdapter.setItem(getPrefixedKey(storageKeySchema.key), item);
        }
    };
};
//#endregion
//#region src/services/storage/createStorageKeySchema/createStorageKeySchema.ts
/** @instrumented */ const createStorageKeySchema = (params)=>{
    return params;
};
//#endregion
//#region src/modules/sessionKeys/generateSessionKeys/generateSessionKeys.ts
/** @instrumented */ const generateSessionKeys = async (client)=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    const publicKey = await core.keychain.generateKey("session");
    core.state.set({
        sessionKeys: publicKey
    });
    return {
        publicKey
    };
};
//#endregion
//#region src/utils/getBuffer/getBuffer.ts
/** @not-instrumented */ const getBuffer = ()=>typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"] !== "undefined" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$buffer$40$6$2e$0$2e$3$2f$node_modules$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"];
//#endregion
//#region src/utils/isServerSideRendering/isServerSideRendering.ts
/**
* Indicates if the code is running in a server-side environment.
* @not-instrumented
*/ const isServerSideRendering = ()=>typeof window === "undefined";
//#endregion
//#region src/modules/initializeClient/consts.ts
const REFRESH_USER_STATE_FROM_COOKIE_TRACKER_KEY = "refresh-user-state-from-cookie";
const INITIALIZE_STORAGE_SYNC_TRACKER_KEY = "initialize-storage-sync";
const FETCH_PROJECT_SETTINGS_TRACKER_KEY = "fetch-project-settings";
const GENERATE_SESSION_KEYS_TRACKER_KEY = "generate-session-keys";
//#endregion
//#region src/utils/deferredPromise/createDeferredPromise.ts
/** @instrumented */ const createDeferredPromise = ()=>{
    let resolve;
    let reject;
    return {
        promise: new Promise((_resolve, _reject)=>{
            resolve = _resolve;
            reject = _reject;
        }),
        reject: (reason)=>reject?.(reason),
        resolve: (value)=>resolve?.(value)
    };
};
//#endregion
//#region src/errors/CannotTrackError.ts
var CannotTrackError = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P"] {
    constructor(){
        super({
            cause: null,
            code: "cannot_track_error",
            docsUrl: null,
            name: "CannotTrackError",
            shortMessage: "All track calls must be performed in the same node tick"
        });
    }
};
//#endregion
//#region src/services/crossTabBroadcast/crossTabBroadcast.schema.ts
/**
* Schema for validating cross-tab broadcast messages.
*/ const CrossTabBroadcastMessageSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
    args: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unknown"])()),
    event: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])()
});
//#endregion
//#region src/services/crossTabBroadcast/createCrossTabBroadcast/createCrossTabBroadcast.ts
/**
* Creates a cross-tab broadcast service instance using the BroadcastChannel API.
*
* Enables communication between multiple tabs/windows of the same application.
* Messages are validated against the schema and invalid messages are silently ignored.
*
* In SSR or when BroadcastChannel is unavailable, returns a no-op implementation.
*
* @param params - Configuration parameters
* @param params.channelName - The name of the broadcast channel to use
* @returns A cross-tab broadcast service instance
* @instrumented
*/ const createCrossTabBroadcast = ({ channelName })=>{
    if (isServerSideRendering() || typeof BroadcastChannel === "undefined") return {
        off: ()=>{},
        on: ()=>{},
        send: ()=>{}
    };
    const channel = new BroadcastChannel(channelName);
    const eventEmitter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter3$40$5$2e$0$2e$1$2f$node_modules$2f$eventemitter3$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"]();
    const handleMessage = (messageEvent)=>{
        const parsed = CrossTabBroadcastMessageSchema.safeParse(messageEvent.data);
        if (!parsed.success) return;
        const { args, event } = parsed.data;
        eventEmitter.emit(event, args);
    };
    channel.addEventListener("message", handleMessage);
    return {
        off: (event, callback)=>{
            eventEmitter.off(event, callback);
        },
        on: (event, callback)=>{
            eventEmitter.on(event, callback);
        },
        send: ({ args, event })=>{
            channel.postMessage({
                args,
                event
            });
        }
    };
};
//#endregion
//#region src/services/logger/createLogger/createLogger.ts
/**
* Log levels and their corresponding numeric values
*/ const LOG_LEVELS = {
    debug: 0,
    error: 3,
    info: 1,
    warn: 2
};
const defaultConsole = console;
/**
* Creates a logger instance with configurable log level and event emission capabilities.
* @returns A logger instance with debug, info, warn, and error methods
* @not-instrumented
*/ const createLogger = (options = {})=>{
    const eventEmitter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter3$40$5$2e$0$2e$1$2f$node_modules$2f$eventemitter3$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EventEmitter$3e$__["EventEmitter"]();
    const minLevel = options.level ?? "warn";
    const shouldLog = (level)=>{
        return LOG_LEVELS[level] >= LOG_LEVELS[minLevel];
    };
    const formatMessage = (level, message)=>{
        return `[${/* @__PURE__ */ new Date().toISOString()}] ${level.toUpperCase()}: ${message}`;
    };
    const log = (level, consoleMethod, message, ...args)=>{
        eventEmitter.emit("log", level, message, ...args);
        if (!shouldLog(level)) return;
        consoleMethod(formatMessage(level, message), ...args);
    };
    return {
        debug: (message, ...args)=>log("debug", defaultConsole.debug, message, ...args),
        error: (message, ...args)=>log("error", defaultConsole.error, message, ...args),
        info: (message, ...args)=>log("info", defaultConsole.info, message, ...args),
        off: eventEmitter.off.bind(eventEmitter),
        on: eventEmitter.on.bind(eventEmitter),
        warn: (message, ...args)=>log("warn", defaultConsole.warn, message, ...args)
    };
};
//#endregion
//#region src/utils/bufferToHex/bufferToHex.ts
/**
* Converts an ArrayBuffer or Uint8Array to a hex-encoded string
* @not-instrumented
*/ const bufferToHex = (buffer)=>[
        ...buffer instanceof Uint8Array ? buffer : new Uint8Array(buffer)
    ].map((x)=>x.toString(16).padStart(2, "0")).join("");
//#endregion
//#region src/utils/compressRawPublicKey/compressRawPublicKey.ts
/**
* Accepts a public key array buffer, and returns a buffer with the compressed version of the public key
* @not-instrumented
*/ const compressRawPublicKey = (rawPublicKey)=>{
    const rawPublicKeyBytes = new Uint8Array(rawPublicKey);
    const len = rawPublicKeyBytes.byteLength;
    const compressedBytes = rawPublicKeyBytes.slice(0, 1 + len >>> 1);
    compressedBytes[0] = 2 | rawPublicKeyBytes[len - 1] & 1;
    return compressedBytes.buffer;
};
//#endregion
//#region src/services/keychain/createIndexedDBKeychainService/KeyNotFoundError.ts
var KeyNotFoundError = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P"] {
    constructor(keyName){
        super({
            cause: null,
            code: "key_not_found",
            docsUrl: null,
            name: "KeyNotFoundError",
            shortMessage: `Key "${keyName}" not found in keychain`
        });
    }
};
//#endregion
//#region src/services/keychain/createIndexedDBKeychainService/utils/constants.ts
const STORE_NAME = "keys";
//#endregion
//#region src/services/keychain/createIndexedDBKeychainService/utils/deleteIndexedDBItem.ts
/** @not-instrumented */ const deleteIndexedDBItem = (db, keyName)=>new Promise((resolve, reject)=>{
        const request = db.transaction(STORE_NAME, "readwrite").objectStore(STORE_NAME).delete(keyName);
        request.onsuccess = ()=>resolve();
        request.onerror = ()=>reject(request.error);
    });
//#endregion
//#region src/services/keychain/createIndexedDBKeychainService/utils/getIndexedDBItem.ts
/** @not-instrumented */ const getIndexedDBItem = (db, keyName)=>new Promise((resolve, reject)=>{
        const request = db.transaction(STORE_NAME, "readonly").objectStore(STORE_NAME).get(keyName);
        request.onsuccess = ()=>resolve(request.result);
        request.onerror = ()=>reject(request.error);
    });
//#endregion
//#region src/services/keychain/createIndexedDBKeychainService/utils/openDatabase.ts
/** @not-instrumented */ const openDatabase = (dbName)=>new Promise((resolve, reject)=>{
        const request = indexedDB.open(dbName, 1);
        request.onupgradeneeded = ()=>{
            const db = request.result;
            if (!db.objectStoreNames.contains(STORE_NAME)) db.createObjectStore(STORE_NAME, {
                keyPath: "keyName"
            });
        };
        request.onsuccess = ()=>resolve(request.result);
        request.onerror = ()=>reject(request.error);
    });
//#endregion
//#region src/services/keychain/createIndexedDBKeychainService/utils/setIndexedDBItem.ts
/** @not-instrumented */ const setIndexedDBItem = (db, entry)=>new Promise((resolve, reject)=>{
        const request = db.transaction(STORE_NAME, "readwrite").objectStore(STORE_NAME).put(entry);
        request.onsuccess = ()=>resolve();
        request.onerror = ()=>reject(request.error);
    });
//#endregion
//#region src/services/keychain/createIndexedDBKeychainService/createIndexedDBKeychainService.ts
const DEFAULT_DB_NAME = "dynamic_keychain";
/** @instrumented */ const createIndexedDBKeychainService = (params)=>{
    const dbName = params?.dbName ?? DEFAULT_DB_NAME;
    const generateKey = async (keyName)=>{
        const keyPair = await crypto.subtle.generateKey({
            name: "ECDSA",
            namedCurve: "P-256"
        }, false, [
            "sign"
        ]);
        const publicKeyHex = bufferToHex(compressRawPublicKey(await crypto.subtle.exportKey("raw", keyPair.publicKey)));
        const db = await openDatabase(dbName);
        await setIndexedDBItem(db, {
            keyName,
            privateKey: keyPair.privateKey,
            publicKeyHex
        });
        db.close();
        return publicKeyHex;
    };
    const importKey = async (keyName, jwk)=>{
        const privateKey = await crypto.subtle.importKey("jwk", jwk, {
            name: "ECDSA",
            namedCurve: "P-256"
        }, false, [
            "sign"
        ]);
        const publicJwk = {
            crv: jwk.crv,
            kty: jwk.kty,
            x: jwk.x,
            y: jwk.y
        };
        const publicCryptoKey = await crypto.subtle.importKey("jwk", publicJwk, {
            name: "ECDSA",
            namedCurve: "P-256"
        }, true, [
            "verify"
        ]);
        const publicKeyHex = bufferToHex(compressRawPublicKey(await crypto.subtle.exportKey("raw", publicCryptoKey)));
        const db = await openDatabase(dbName);
        await setIndexedDBItem(db, {
            keyName,
            privateKey,
            publicKeyHex
        });
        db.close();
        return publicKeyHex;
    };
    const getPublicKey = async (keyName)=>{
        const db = await openDatabase(dbName);
        const entry = await getIndexedDBItem(db, keyName);
        db.close();
        return entry?.publicKeyHex ?? null;
    };
    const sign = async (keyName, message)=>{
        const db = await openDatabase(dbName);
        const entry = await getIndexedDBItem(db, keyName);
        db.close();
        if (!entry) throw new KeyNotFoundError(keyName);
        const data = new TextEncoder().encode(message);
        return bufferToHex(await crypto.subtle.sign({
            hash: {
                name: "SHA-256"
            },
            name: "ECDSA"
        }, entry.privateKey, data));
    };
    const hasKey = async (keyName)=>{
        const db = await openDatabase(dbName);
        const entry = await getIndexedDBItem(db, keyName);
        db.close();
        return entry !== void 0;
    };
    const removeKey = async (keyName)=>{
        const db = await openDatabase(dbName);
        await deleteIndexedDBItem(db, keyName);
        db.close();
    };
    return {
        generateKey,
        getPublicKey,
        hasKey,
        importKey,
        removeKey,
        sign
    };
};
//#endregion
//#region src/errors/InvalidRealtimePublishError.ts
var InvalidRealtimePublishError = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P"] {
    constructor({ channel }){
        super({
            cause: null,
            code: "invalid_realtime_publish",
            docsUrl: null,
            metaMessages: [
                `channel: ${channel}`
            ],
            name: "InvalidRealtimePublishError",
            shortMessage: "Tried to publish data that does not match the channel schema"
        });
    }
};
//#endregion
//#region src/errors/RealtimeNotConnectedError.ts
var RealtimeNotConnectedError = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P"] {
    constructor(){
        super({
            cause: null,
            code: "realtime_not_connected_error",
            docsUrl: null,
            name: "RealtimeNotConnectedError",
            shortMessage: "Realtime service is not connected. Call connect() before subscribing or publishing."
        });
    }
};
//#endregion
//#region src/services/realtime/createRealtimeService/createRealtimeService.ts
const ABLY_STATE_TO_REALTIME_STATE = {
    closed: "closed",
    closing: "closing",
    connected: "connected",
    connecting: "connecting",
    disconnected: "disconnected",
    failed: "failed",
    initialized: "idle",
    suspended: "suspended"
};
const mapAblyState = (ablyState)=>ABLY_STATE_TO_REALTIME_STATE[ablyState] ?? "idle";
/**
* Creates a realtime pub/sub service backed by Ably.
*
* The service starts idle. Call `connect({ client })` to establish
* a connection, passing the DynamicClient explicitly.
*
* SSR environments receive a no-op implementation.
* @instrumented
*/ const createRealtimeService = ()=>{
    if (isServerSideRendering()) return {
        connect: ()=>Promise.resolve(),
        disconnect: ()=>{},
        getConnectionState: ()=>"idle",
        off: ()=>{},
        on: ()=>{},
        publish: ()=>Promise.resolve(),
        subscribe: ()=>Promise.resolve(),
        unsubscribe: ()=>{}
    };
    const eventEmitter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter3$40$5$2e$0$2e$1$2f$node_modules$2f$eventemitter3$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"]();
    const channels = /* @__PURE__ */ new Map();
    const handlerMap = /* @__PURE__ */ new WeakMap();
    let ablyClient;
    let connectionState = "idle";
    let isConnecting = false;
    const setConnectionState = (state)=>{
        connectionState = state;
        eventEmitter.emit("connectionStateChange", state);
    };
    const getOrCreateChannel = (channelName)=>{
        const existing = channels.get(channelName);
        if (existing) return existing;
        if (!ablyClient) throw new RealtimeNotConnectedError();
        const channel = ablyClient.channels.get(channelName);
        channels.set(channelName, channel);
        return channel;
    };
    const connect = async ({ client })=>{
        if (isConnecting) return;
        isConnecting = true;
        try {
            const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
            if (ablyClient) {
                ablyClient.close();
                channels.clear();
            }
            const { BaseRealtime: AblyBaseRealtime, FetchRequest, WebSocketTransport } = await __turbopack_context__.r("[project]/node_modules/.pnpm/ably@2.17.1_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_utf-8-validate@6.0.6/node_modules/ably/build/modular/index.mjs [app-client] (ecmascript, async loader)")(__turbopack_context__.i);
            ablyClient = new AblyBaseRealtime({
                authCallback: (_tokenParams, callback)=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])({}, client).getRealtimeAuthToken({
                        environmentId: core.environmentId
                    }).then((response)=>{
                        callback(null, response.token);
                    }).catch((err)=>{
                        callback(err instanceof Error ? err.message : String(err), null);
                    });
                },
                autoConnect: false,
                plugins: {
                    FetchRequest,
                    WebSocketTransport
                }
            });
            ablyClient.connection.on((stateChange)=>{
                setConnectionState(mapAblyState(stateChange.current));
            });
            ablyClient.connect();
        } finally{
            isConnecting = false;
        }
    };
    const disconnect = ()=>{
        if (!ablyClient) return;
        for (const channel of channels.values())channel.detach().catch(()=>{});
        channels.clear();
        ablyClient.close();
        ablyClient = void 0;
    };
    const subscribe = async ({ channelSchema, callback })=>{
        const channel = getOrCreateChannel(channelSchema.channel);
        const handler = (message)=>{
            const parsed = channelSchema.schema.safeParse(message.data);
            if (!parsed.success) return;
            callback({
                data: parsed.data
            });
        };
        handlerMap.set(callback, handler);
        await channel.subscribe(handler);
    };
    const unsubscribe = ({ channelSchema, callback })=>{
        const channel = channels.get(channelSchema.channel);
        if (!channel) return;
        const handler = handlerMap.get(callback);
        if (handler) {
            channel.unsubscribe(handler);
            handlerMap.delete(callback);
        }
    };
    const publish = async ({ channelSchema, data })=>{
        const parsed = channelSchema.schema.safeParse(data);
        if (!parsed.success) throw new InvalidRealtimePublishError({
            channel: channelSchema.channel
        });
        await getOrCreateChannel(channelSchema.channel).publish("message", parsed.data);
    };
    return {
        connect,
        disconnect,
        getConnectionState: ()=>connectionState,
        off: (event, callback)=>{
            eventEmitter.off(event, callback);
        },
        on: (event, callback)=>{
            eventEmitter.on(event, callback);
        },
        publish,
        subscribe,
        unsubscribe
    };
};
//#endregion
//#region src/errors/NoNetworkProvidersError.ts
var NoNetworkProvidersError = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P"] {
    constructor(){
        super({
            cause: null,
            code: "no_network_providers",
            docsUrl: null,
            name: "NoNetworkProvidersError",
            shortMessage: "No networks were registered in the client"
        });
    }
};
//#endregion
//#region src/errors/WalletAlreadyLinkedToAnotherUserError.ts
var WalletAlreadyLinkedToAnotherUserError = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P"] {
    constructor({ cause }){
        super({
            cause,
            code: "wallet_already_linked_to_another_user_error",
            docsUrl: null,
            name: "WalletAlreadyLinkedToAnotherUserError",
            shortMessage: "This wallet is already linked to another user"
        });
    }
};
//#endregion
//#region src/modules/captcha/isCaptchaRequired/isCaptchaRequired.ts
/** @not-instrumented */ const isCaptchaRequired = (client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const projectSettings = client.projectSettings;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"])(projectSettings, "Project settings are not available");
    return projectSettings.security.hCaptcha?.enabled ?? false;
};
//#endregion
//#region src/modules/captcha/consumeCaptchaToken/consumeCaptchaToken.ts
/**
* Retrieves the current captcha token from the client state and sets it to null.
* @instrumented
*/ const consumeCaptchaToken = (client)=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    const captchaToken = core.state.get().captchaToken;
    if (isCaptchaRequired(client)) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"])(captchaToken, "Captcha token is required");
    core.state.set({
        captchaToken: null
    });
    return captchaToken ?? void 0;
};
//#endregion
//#region src/modules/captcha/setCaptchaToken/setCaptchaToken.ts
/**
* Sets the given captcha token in the client state.
*
* @param params.captchaToken - The captcha token to set.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @instrumented
*/ const setCaptchaToken = ({ captchaToken }, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client).state.set({
        captchaToken
    });
};
//#endregion
//#region src/modules/extension/hasExtension/hasExtension.ts
/**
* Checks if a specific extension has been applied to the Dynamic client.
*
* Extensions add optional features to the Dynamic SDK,
* such as EVM, Solana, or other chain support.
*
* @param params.extensionKey - The unique key identifying the extension to check for.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns True if the extension is applied, false otherwise.
* @not-instrumented
*/ const hasExtension = ({ extensionKey }, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client).extensions.has(extensionKey);
};
//#endregion
//#region src/modules/auth/createVisit/createVisit.ts
/** @instrumented */ const createVisit = async ({ walletAccount, authMode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$914$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$AuthModeEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthModeEnum"].Only }, client)=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    const apiClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])({}, client);
    const walletProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"])({
        walletAccount
    }, client);
    try {
        const walletName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["x"])({
            chain: walletProvider.chain,
            displayName: walletProvider.metadata.displayName
        });
        const connectRequest = {
            address: walletAccount.address,
            authMode,
            chain: walletProvider.chain,
            provider: walletProvider.walletProviderType,
            walletName
        };
        await apiClient.createVisit({
            connectRequest,
            environmentId: core.environmentId
        });
    } catch (error) {
        core.logger.error("Error creating visit", {
            error
        });
    }
};
//#endregion
//#region src/modules/wallets/unverifiedWalletAccounts/setUnverifiedWalletAccounts/setUnverifiedWalletAccounts.ts
/**
* Updates the unverified wallet account in the client state.
* This will add new wallet accounts and override those with matching ids,
* but will leave other preexisting wallet accounts unchanged.
* @instrumented
*/ const setUnverifiedWalletAccounts = ({ unverifiedWalletAccountsToUpdate }, client)=>{
    if (unverifiedWalletAccountsToUpdate.length === 0) return;
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    const unverifiedWalletAccountsToUpdateIds = unverifiedWalletAccountsToUpdate.map(({ id })=>id);
    const filteredUnverifiedWalletAccounts = core.state.get().unverifiedWalletAccounts.filter((unverifiedWalletAccount)=>!unverifiedWalletAccountsToUpdateIds.includes(unverifiedWalletAccount.id));
    core.state.set({
        unverifiedWalletAccounts: [
            ...filteredUnverifiedWalletAccounts,
            ...unverifiedWalletAccountsToUpdate
        ]
    });
};
//#endregion
//#region src/modules/wallets/utils/formatSignInMessage/formatSignInMessage.ts
/**
* Formats a sign in message to prove ownership of an address.
* @not-instrumented
*/ const formatSignInMessage = async ({ domain, blockchainName, address, uri, chainId, nonce, issuedAt, requestId, statement, resources })=>{
    const prefix = [
        `${domain} wants you to sign in with your ${blockchainName} account:`,
        address
    ].join("\n");
    const prefixWithStatementGap = statement ? "\n\n" : "\n";
    const prefixWithStatement = `${[
        prefix,
        statement
    ].join(prefixWithStatementGap)}\n`;
    const suffixFields = [];
    suffixFields.push(`URI: ${uri}`);
    suffixFields.push("Version: 1");
    if (chainId) suffixFields.push(`Chain ID: ${chainId}`);
    suffixFields.push(`Nonce: ${nonce}`);
    if (issuedAt) suffixFields.push(`Issued At: ${issuedAt}`);
    if (requestId) suffixFields.push(`Request ID: ${requestId}`);
    if (resources?.length) suffixFields.push(`Resources:${resources.map((resource)=>"\n- " + resource).join()}`);
    return [
        prefixWithStatement,
        suffixFields.join("\n")
    ].join("\n");
};
//#endregion
//#region src/modules/wallets/utils/getSignInMessage/createSignInMessageStatement/createSignInMessageStatement.ts
/** @instrumented */ const createSignInMessageStatement = (client)=>{
    const appName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client).metadata?.name ?? client.projectSettings?.general.displayName;
    return `Welcome to ${appName}. Signing is the only way we can truly know that you are the owner of the wallet you are connecting. Signing is a safe, gas-less transaction that does not in any way give ${appName} permission to perform any transactions with your wallet.`;
};
//#endregion
//#region src/modules/wallets/unverifiedWalletAccounts/removeUnverifiedWalletAccount/removeUnverifiedWalletAccount.ts
/**
* Removes an unverified wallet account from the client's state.
* @instrumented
*/ const removeUnverifiedWalletAccount = ({ unverifiedWalletAccount }, client)=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    const previousState = core.state.get();
    const { unverifiedWalletAccounts } = core.state.get();
    const filteredUnverifiedWalletAccounts = unverifiedWalletAccounts.filter((account)=>account.id !== unverifiedWalletAccount.id);
    core.state.set({
        unverifiedWalletAccounts: filteredUnverifiedWalletAccounts
    });
    /**
	* We check before raising because the wallet account we are removing might still
	* be present in wallet accounts due to having been moved to verified credentials.
	*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])({
        previousState
    }, client);
};
//#endregion
//#region src/utils/isError/isError.ts
/**
* Check if the given value is an Error object
* @not-instrumented
*/ const isError = (error)=>error instanceof Error;
//#endregion
//#region src/utils/isErrorWithCode/isErrorWithCode.ts
/**
* Check if the given value is an Error object with a specific code
* @not-instrumented
*/ const isErrorWithCode = (error, code)=>{
    if (!isError(error)) return false;
    return "code" in error && error.code === code;
};
//#endregion
//#region src/modules/wallets/verifyMessageSignatureOwnership/verifyMessageSignatureOwnership.ts
/**
* Verifies a signed message by calling either the verifyLink, verifyTransfer or verify API function,
* depending on whether the user is signing in, linking or transferring a wallet.
*
* Does NOT call updateAuthFromVerifyResponse, it should be called from the return of this function.
* @instrumented
*/ const verifyMessageSignatureOwnership = async ({ messageToSign, walletAddress, addressesWithTypes, signature, chain, isTransfer = false, walletDisplayName, walletProviderType, networkId, requestedScopes }, client)=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    const apiClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])({}, client);
    const walletName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["x"])({
        chain,
        displayName: walletDisplayName
    });
    let verifyApiFunction;
    if (!client.user) verifyApiFunction = apiClient.walletsSignin.bind(apiClient);
    else if (isTransfer) verifyApiFunction = apiClient.verifyTransfer.bind(apiClient);
    else if (client.user && requestedScopes) verifyApiFunction = apiClient.walletsVerify.bind(apiClient);
    else verifyApiFunction = apiClient.verifyLink.bind(apiClient);
    try {
        return await verifyApiFunction({
            environmentId: core.environmentId,
            verifyRequest: {
                additionalWalletAddresses: addressesWithTypes?.map((address)=>({
                        address: address.address,
                        publicKey: address.publicKey,
                        type: address.type
                    })),
                captchaToken: consumeCaptchaToken(client),
                chain,
                messageToSign,
                network: networkId,
                publicWalletAddress: walletAddress,
                requestedScopes,
                signedMessage: signature,
                walletName,
                walletProvider: walletProviderType
            }
        });
    } catch (error) {
        core.logger.error("Failed to verify message signature ownership", error);
        if (isErrorWithCode(error, "reassign_wallet_confirm") || isErrorWithCode(error, "merge_accounts_confirmation")) throw new WalletAlreadyLinkedToAnotherUserError({
            cause: error
        });
        throw error;
    }
};
//#endregion
//#region src/modules/wallets/walletProvider/walletProviderKeyMap/updateWalletProviderKeysForVerifiedCredentials/updateWalletProviderKeysForVerifiedCredentials.ts
/** @instrumented */ const updateWalletProviderKeysForVerifiedCredentials = ({ keysToUpdate }, client)=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    core.state.set({
        walletProviderKeyMap: {
            ...core.state.get().walletProviderKeyMap,
            ...keysToUpdate
        }
    });
};
//#endregion
//#region src/modules/wallets/networks/getSdkChainFromApiChainName/getSdkChainFromApiChainName.ts
/**
* Maps the chain name from the API to the SDK chain name
* @not-instrumented
*/ const getSdkChainFromApiChainName = (chainName)=>{
    return Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"]).find((chain)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"][chain].apiChainName === chainName) || null;
};
//#endregion
//#region src/modules/wallets/networks/getNetworksData/getNetworksData.ts
/**
* Retrieves all available network configurations from project settings.
*
* This function returns detailed configuration data for all networks enabled
* in your Dynamic project, including RPC URLs, native currencies, and metadata.
*
* If a `transformers.networkData` callback was provided in the client configuration,
* it will be applied to each network before returning the data. This allows you to
* customize network properties (such as RPC URLs) in a centralized way.
*
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns An array of network configuration data for all enabled networks.
* @instrumented
*/ const getNetworksData = (client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const { state, transformers } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    const networkDataTransformer = transformers?.networkData ?? ((networkData)=>networkData);
    const { projectSettings } = state.get();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"])(projectSettings, "projectSettings not found");
    const networks = projectSettings.networks;
    if (!networks) return [];
    return networks.map((network)=>{
        if (!network.chainName) return [];
        const chain = getSdkChainFromApiChainName(network.chainName);
        if (!network?.networks?.length || !chain) return [];
        return network.networks.map((networkConfiguration)=>{
            return networkDataTransformer({
                blockExplorerUrls: networkConfiguration.blockExplorerUrls,
                chain,
                cluster: networkConfiguration.cluster,
                displayName: networkConfiguration.vanityName || networkConfiguration.name,
                genesisHash: networkConfiguration.genesisHash,
                iconUrl: networkConfiguration.iconUrls[0],
                nativeCurrency: {
                    decimals: networkConfiguration.nativeCurrency.decimals,
                    iconUrl: networkConfiguration.nativeCurrency.iconUrl,
                    name: networkConfiguration.nativeCurrency.name,
                    symbol: networkConfiguration.nativeCurrency.symbol
                },
                networkId: networkConfiguration.networkId,
                rpcUrls: {
                    http: [
                        ...networkConfiguration.privateCustomerRpcUrls ?? [],
                        ...networkConfiguration.rpcUrls ?? []
                    ]
                },
                testnet: networkConfiguration.isTestnet ?? false
            });
        });
    }).flat();
};
//#endregion
//#region src/modules/wallets/networks/networkProviderBuilderRegistry/createNetworkProviderBuilderRegistry/createNetworkProviderBuilderRegistry.ts
/** @not-instrumented */ const createNetworkProviderBuilderRegistry = ()=>{
    const registry = /* @__PURE__ */ new Map();
    return {
        get: ()=>registry,
        register: (networkProviderBuilder)=>{
            registry.set(networkProviderBuilder.chain, networkProviderBuilder);
        }
    };
};
//#endregion
//#region src/modules/wallets/networks/networkProviderBuilderRegistry/getNetworkProviderBuilderRegistry/getNetworkProviderBuilderRegistry.ts
const getNetworkProviderBuilderRegistry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])("networkProviderBuilderRegistry", createNetworkProviderBuilderRegistry);
//#endregion
//#region src/modules/wallets/networks/getNetworkProviders/getNetworkProviders.ts
/**
* Retrieves all registered network providers for enabled chains.
* @instrumented
*/ const getNetworkProviders = (client)=>{
    const networkProviderBuilderRegistry = getNetworkProviderBuilderRegistry(client);
    const registeredNetworkProviderBuilders = Array.from(networkProviderBuilderRegistry.get().values());
    const networksData = getNetworksData(client);
    return registeredNetworkProviderBuilders.map(({ builder, chain })=>{
        return networksData.filter((networkData)=>networkData.chain === chain).map(builder);
    }).flat();
};
//#endregion
//#region src/modules/wallets/networks/getNetworkProviderFromNetworkId/getNetworkProviderFromNetworkId.ts
/** @instrumented */ const getNetworkProviderFromNetworkId = ({ networkId, chain }, client)=>{
    const networkProviders = getNetworkProviders(client);
    if (networkProviders.length === 0) throw new NoNetworkProvidersError();
    const networkProvider = networkProviders.find((networkProvider$1)=>networkProvider$1.networkId === networkId && networkProvider$1.chain === chain);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"])(networkProvider, `No network provider found for chain ${chain} with network id ${networkId}`);
    return networkProvider;
};
;
 //# sourceMappingURL=getNetworkProviderFromNetworkId-VEDzpV8Z.esm.js.map
}}),
"[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/NotWaasWalletAccountError-B5QkZWrs.esm.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "n": (()=>refreshAuth),
    "t": (()=>NotWaasWalletAccountError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/InvalidParamError-CnPeSjBW.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/getVerifiedCredentialForWalletAccount-B58hODrW.esm.js [app-client] (ecmascript)");
;
;
//#region src/modules/user/refreshAuth/refreshAuth.ts
/**
* Refreshes the current user's data from the server.
*
* This function fetches the latest user information and token from the backend
* updating the local user and token states with any changes.
*
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns A promise that resolves to the verify response.
* @instrumented
*/ const refreshAuth = async (client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])({}, client).refreshAuth({
        environmentId: core.environmentId
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["r"])({
        response
    }, client);
    return response;
};
//#endregion
//#region src/errors/NotWaasWalletAccountError.ts
var NotWaasWalletAccountError = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P"] {
    constructor({ walletAddress }){
        super({
            cause: null,
            code: "not_waas_wallet_account_error",
            docsUrl: null,
            name: "NotWaasWalletAccountError",
            shortMessage: `Wallet account ${walletAddress} is not a Dynamic WaaS wallet account`
        });
    }
};
;
 //# sourceMappingURL=NotWaasWalletAccountError-B5QkZWrs.esm.js.map
}}),
"[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/isMfaRequiredForAction-Dkj_caxl.esm.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "n": (()=>getMfaMethods),
    "r": (()=>consumeMfaToken),
    "t": (()=>isMfaRequiredForAction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/InvalidParamError-CnPeSjBW.esm.js [app-client] (ecmascript)");
;
//#region src/modules/mfa/consumeMfaToken/consumeMfaToken.ts
/**
* Consumes and clears the current MFA token from the client state.
*
* This function retrieves the MFA token obtained from a successful MFA authentication,
* and removes it from the client, to prevent it from being used again.
*
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns The MFA token that was consumed.
* @throws Error if no MFA token is found.
* @instrumented
*/ const consumeMfaToken = (client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    const mfaToken = core.state.get().mfaToken;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"])(mfaToken, "No MFA token found");
    core.state.set({
        mfaToken: null
    });
    return mfaToken;
};
//#endregion
//#region src/modules/mfa/getMfaMethods/getMfaMethods.ts
/**
* Retrieves the available MFA methods for the current user.
*
* This function fetches information about which multi-factor authentication
* methods are available and configured for the user's account.
*
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns A promise that resolves to the user's MFA methods configuration.
* @instrumented
*/ const getMfaMethods = async (client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])({}, client).getUserMfaMethods({
        environmentId: core.environmentId,
        verifiedOnly: true
    });
};
//#endregion
//#region src/modules/mfa/isMfaRequiredForAction/isMfaRequiredForAction.ts
/**
* Checks if MFA is required for a specific action.
*
* This function determines whether multi-factor authentication is required
* for the specified action based on project settings and user configuration.
*
* @param params.mfaAction - The action to check MFA requirements for.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns A promise that resolves to true if MFA is required for the action, false otherwise.
* @not-instrumented
*/ const isMfaRequiredForAction = async ({ mfaAction }, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const projectSettings = client.projectSettings;
    if (!projectSettings?.security?.mfa?.actions?.some((action)=>action.action === mfaAction && action.required)) return false;
    if (projectSettings?.security?.mfa?.required) return true;
    return (await getMfaMethods(client)).userHasVerifiedMfaMethods;
};
;
 //# sourceMappingURL=isMfaRequiredForAction-Dkj_caxl.esm.js.map
}}),
"[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/index.esm.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CheckoutSessionTokenMissingError": (()=>CheckoutSessionTokenMissingError),
    "ClientAlreadyInitializedError": (()=>ClientAlreadyInitializedError),
    "DeeplinkConnectAndVerifyUnsupportedError": (()=>DeeplinkConnectAndVerifyUnsupportedError),
    "FeeEstimationFailedError": (()=>FeeEstimationFailedError),
    "InvalidDeviceRegistrationRedirectError": (()=>InvalidDeviceRegistrationRedirectError),
    "InvalidRedirectStorageStateError": (()=>InvalidRedirectStorageStateError),
    "MissingRedirectStorageStateError": (()=>MissingRedirectStorageStateError),
    "MissingSocialUrlParamError": (()=>MissingSocialUrlParamError),
    "MissingUserVerificationError": (()=>MissingUserVerificationError),
    "NetworkAddingUnavailableError": (()=>NetworkAddingUnavailableError),
    "NetworkNotAddedError": (()=>NetworkNotAddedError),
    "NetworkSwitchingUnavailableError": (()=>NetworkSwitchingUnavailableError),
    "NoAddressFoundError": (()=>NoAddressFoundError),
    "NoPasskeyCredentialsFoundError": (()=>NoPasskeyCredentialsFoundError),
    "NoSmartWalletAccountSignerFoundError": (()=>NoSmartWalletAccountSignerFoundError),
    "NoWebAuthNSupportError": (()=>NoWebAuthNSupportError),
    "SimulationFailedError": (()=>SimulationFailedError),
    "UnavailableInServerSideError": (()=>UnavailableInServerSideError),
    "UnrecognizedNetworkError": (()=>UnrecognizedNetworkError),
    "UserNotAuthenticatedError": (()=>UserNotAuthenticatedError),
    "UserRejectedError": (()=>UserRejectedError),
    "WalletAccountAlreadyVerifiedError": (()=>WalletAccountAlreadyVerifiedError),
    "WalletAccountNotSelectedError": (()=>WalletAccountNotSelectedError),
    "WalletProviderMethodUnavailableError": (()=>WalletProviderMethodUnavailableError),
    "acknowledgeRecoveryCodes": (()=>acknowledgeRecoveryCodes),
    "addCoinbaseOnrampOrderEventListener": (()=>addCoinbaseOnrampOrderEventListener),
    "addNetwork": (()=>addNetwork),
    "assertWalletAccountSigningAvailability": (()=>assertWalletAccountSigningAvailability),
    "assertWalletProviderMethodDefined": (()=>assertWalletProviderMethodDefined),
    "attachCheckoutTransactionSource": (()=>attachCheckoutTransactionSource),
    "authenticateMfaRecoveryCode": (()=>authenticateMfaRecoveryCode),
    "authenticatePasskeyMFA": (()=>authenticatePasskeyMFA),
    "authenticateTotpMfaDevice": (()=>authenticateTotpMfaDevice),
    "authenticateWithSocial": (()=>authenticateWithSocial),
    "broadcastCheckoutTransaction": (()=>broadcastCheckoutTransaction),
    "canConnectWithHardwareWallet": (()=>canConnectWithHardwareWallet),
    "cancelCheckoutTransaction": (()=>cancelCheckoutTransaction),
    "checkStepUpAuth": (()=>checkStepUpAuth),
    "completeDeviceRegistration": (()=>completeDeviceRegistration),
    "completeSocialAuthentication": (()=>completeSocialAuthentication),
    "connectAndVerifyWithWalletProvider": (()=>connectAndVerifyWithWalletProvider),
    "connectWithWalletProvider": (()=>connectWithWalletProvider),
    "createCheckoutTransaction": (()=>createCheckoutTransaction),
    "createCoinbaseOnrampOrder": (()=>createCoinbaseOnrampOrder),
    "createCryptoDotComPayment": (()=>createCryptoDotComPayment),
    "createDynamicClient": (()=>createDynamicClient),
    "createKrakenExchangeTransfer": (()=>createKrakenExchangeTransfer),
    "createNewMfaRecoveryCodes": (()=>createNewMfaRecoveryCodes),
    "deleteMfaDevice": (()=>deleteMfaDevice),
    "deletePasskey": (()=>deletePasskey),
    "deleteUser": (()=>deleteUser),
    "detectDeviceRegistrationRedirect": (()=>detectDeviceRegistrationRedirect),
    "detectOAuthRedirect": (()=>detectOAuthRedirect),
    "executeSwapTransaction": (()=>executeSwapTransaction),
    "fetchProjectSettings": (()=>fetchProjectSettings),
    "getActiveNetworkData": (()=>getActiveNetworkData),
    "getActiveNetworkId": (()=>getActiveNetworkId),
    "getAvailableWalletProvidersData": (()=>getAvailableWalletProvidersData),
    "getBalance": (()=>getBalance),
    "getBalanceForAddress": (()=>getBalanceForAddress),
    "getBalances": (()=>getBalances),
    "getCheckoutTransaction": (()=>getCheckoutTransaction),
    "getCheckoutTransactionQuote": (()=>getCheckoutTransactionQuote),
    "getCoinbaseBuyUrl": (()=>getCoinbaseBuyUrl),
    "getConnectedAddresses": (()=>getConnectedAddresses),
    "getDeviceRegistrationTokenFromUrl": (()=>getDeviceRegistrationTokenFromUrl),
    "getKrakenAccounts": (()=>getKrakenAccounts),
    "getKrakenWhitelistedAddresses": (()=>getKrakenWhitelistedAddresses),
    "getMfaDevices": (()=>getMfaDevices),
    "getMfaRecoveryCodes": (()=>getMfaRecoveryCodes),
    "getMissingVerificationForCoinbaseOnrampOrder": (()=>getMissingVerificationForCoinbaseOnrampOrder),
    "getMultichainBalances": (()=>getMultichainBalances),
    "getOwnerWalletAccountForSmartWalletAccount": (()=>getOwnerWalletAccountForSmartWalletAccount),
    "getPasskeys": (()=>getPasskeys),
    "getPrimaryWalletAccount": (()=>getPrimaryWalletAccount),
    "getRegisteredDevices": (()=>getRegisteredDevices),
    "getSwapQuote": (()=>getSwapQuote),
    "getSwapStatus": (()=>getSwapStatus),
    "getTransactionHistory": (()=>getTransactionHistory),
    "getUserSocialAccounts": (()=>getUserSocialAccounts),
    "getWalletAccountAddressByType": (()=>getWalletAccountAddressByType),
    "getWalletAccountFromAddress": (()=>getWalletAccountFromAddress),
    "getWalletConnectCatalog": (()=>getWalletConnectCatalog),
    "getWalletConnectCatalogWalletByWalletProviderKey": (()=>getWalletConnectCatalogWalletByWalletProviderKey),
    "getWalletProviderDataByKey": (()=>getWalletProviderDataByKey),
    "initializeClient": (()=>initializeClient),
    "isDeeplinkWalletProvider": (()=>isDeeplinkWalletProvider),
    "isDeviceRegistrationRequired": (()=>isDeviceRegistrationRequired),
    "isHardwareWalletAccount": (()=>isHardwareWalletAccount),
    "isMobile": (()=>isMobile),
    "isPendingRecoveryCodesAcknowledgment": (()=>isPendingRecoveryCodesAcknowledgment),
    "isProgrammaticNetworkSwitchAvailable": (()=>isProgrammaticNetworkSwitchAvailable),
    "isSignedIn": (()=>isSignedIn),
    "isUserMissingMfaAuth": (()=>isUserMissingMfaAuth),
    "isUserOnboardingComplete": (()=>isUserOnboardingComplete),
    "isWalletAccountVerified": (()=>isWalletAccountVerified),
    "logout": (()=>logout),
    "offWalletProviderEvent": (()=>offWalletProviderEvent),
    "onWalletProviderEvent": (()=>onWalletProviderEvent),
    "parseUserAgent": (()=>parseUserAgent),
    "prepareCheckoutTransaction": (()=>prepareCheckoutTransaction),
    "proveWalletAccountOwnership": (()=>proveWalletAccountOwnership),
    "refreshUser": (()=>refreshUser),
    "registerPasskey": (()=>registerPasskey),
    "registerTotpMfaDevice": (()=>registerTotpMfaDevice),
    "removeWalletAccount": (()=>removeWalletAccount),
    "requestExternalAuthElevatedToken": (()=>requestExternalAuthElevatedToken),
    "revokeAllRegisteredDevices": (()=>revokeAllRegisteredDevices),
    "revokeRegisteredDevice": (()=>revokeRegisteredDevice),
    "selectPrimaryWalletAccount": (()=>selectPrimaryWalletAccount),
    "sendEmailOTP": (()=>sendEmailOTP),
    "sendSmsOTP": (()=>sendSmsOTP),
    "setDefaultMfaDevice": (()=>setDefaultMfaDevice),
    "setInstrumentationEnabled": (()=>setInstrumentationEnabled),
    "signInWithExternalJwt": (()=>signInWithExternalJwt),
    "signInWithPasskey": (()=>signInWithPasskey),
    "signMessage": (()=>signMessage),
    "submitCheckoutTransaction": (()=>submitCheckoutTransaction),
    "supportedCountries": (()=>supportedCountries),
    "switchActiveNetwork": (()=>switchActiveNetwork),
    "transferAmount": (()=>transferAmount),
    "transferWalletAccount": (()=>transferWalletAccount),
    "unlinkSocialAccount": (()=>unlinkSocialAccount),
    "updateUser": (()=>updateUser),
    "verifyOTP": (()=>verifyOTP),
    "verifyWalletAccount": (()=>verifyWalletAccount),
    "waitForClientInitialized": (()=>waitForClientInitialized)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/InvalidParamError-CnPeSjBW.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getNetworkProviderFromNetworkId$2d$VEDzpV8Z$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/getNetworkProviderFromNetworkId-VEDzpV8Z.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/getVerifiedCredentialForWalletAccount-B58hODrW.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$NotWaasWalletAccountError$2d$B5QkZWrs$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/NotWaasWalletAccountError-B5QkZWrs.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$isMfaRequiredForAction$2d$Dkj_caxl$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/isMfaRequiredForAction-Dkj_caxl.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$assert$2d$package$2d$version$40$0$2e$19$2e$0$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$assert$2d$package$2d$version$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+assert-package-version@0.19.0/node_modules/@dynamic-labs-sdk/assert-package-version/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$914$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.914/node_modules/@dynamic-labs/sdk-api-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$914$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$AuthModeEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.914/node_modules/@dynamic-labs/sdk-api-core/src/models/AuthModeEnum.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$914$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$ExchangeKeyEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.914/node_modules/@dynamic-labs/sdk-api-core/src/models/ExchangeKeyEnum.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$914$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$JwtVerifiedCredentialFormatEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.914/node_modules/@dynamic-labs/sdk-api-core/src/models/JwtVerifiedCredentialFormatEnum.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$914$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$MfaBackupCodeAcknowledgement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.914/node_modules/@dynamic-labs/sdk-api-core/src/models/MfaBackupCodeAcknowledgement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$914$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$ProviderEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.914/node_modules/@dynamic-labs/sdk-api-core/src/models/ProviderEnum.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$914$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$TokenScope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.914/node_modules/@dynamic-labs/sdk-api-core/src/models/TokenScope.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$914$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$WaasBackupOptionsEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.914/node_modules/@dynamic-labs/sdk-api-core/src/models/WaasBackupOptionsEnum.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$914$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$WalletProviderEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.914/node_modules/@dynamic-labs/sdk-api-core/src/models/WalletProviderEnum.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/mini/schemas.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter3$40$5$2e$0$2e$1$2f$node_modules$2f$eventemitter3$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eventemitter3@5.0.1/node_modules/eventemitter3/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter3$40$5$2e$0$2e$1$2f$node_modules$2f$eventemitter3$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eventemitter3@5.0.1/node_modules/eventemitter3/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter3$40$5$2e$0$2e$1$2f$node_modules$2f$eventemitter3$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EventEmitter$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eventemitter3@5.0.1/node_modules/eventemitter3/index.js [app-client] (ecmascript) <export default as EventEmitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$browser$40$13$2e$1$2e$0$2f$node_modules$2f40$simplewebauthn$2f$browser$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@simplewebauthn+browser@13.1.0/node_modules/@simplewebauthn/browser/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$browser$40$13$2e$1$2e$0$2f$node_modules$2f40$simplewebauthn$2f$browser$2f$esm$2f$helpers$2f$browserSupportsWebAuthn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@simplewebauthn+browser@13.1.0/node_modules/@simplewebauthn/browser/esm/helpers/browserSupportsWebAuthn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$browser$40$13$2e$1$2e$0$2f$node_modules$2f40$simplewebauthn$2f$browser$2f$esm$2f$methods$2f$startAuthentication$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@simplewebauthn+browser@13.1.0/node_modules/@simplewebauthn/browser/esm/methods/startAuthentication.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$browser$40$13$2e$1$2e$0$2f$node_modules$2f40$simplewebauthn$2f$browser$2f$esm$2f$methods$2f$startRegistration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@simplewebauthn+browser@13.1.0/node_modules/@simplewebauthn/browser/esm/methods/startRegistration.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
//#region src/modules/state/raiseStateEvents/events.ts
/**
* Maps the state keys to the event names.
*
* This is mainly to ensure that whenever a new state key is added, the developer
* will have to come to this file and remember to add it here and in the interface.
*/ const stateChangeEvents = {
    initStatus: "initStatusChanged",
    mfaToken: "mfaTokenChanged",
    projectSettings: "projectSettingsChanged",
    sessionExpiresAt: "sessionExpiresAtChanged",
    token: "tokenChanged",
    user: "userChanged"
};
//#endregion
//#region src/utils/getNonce/prefetchNoncesIfNeeded/prefetchNoncesIfNeeded.ts
/** @not-instrumented */ const prefetchNoncesIfNeeded = async (client)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client).state.get().prefetchedNonces.length >= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["A"]) return;
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])(client);
};
//#endregion
//#region src/utils/retryOnFail/InvalidRetryOnFailCallError.ts
/**
* This error is thrown when the `retryOnFail` function is called with an invalid
* number of retries (i.e. less than 0).
*/ var InvalidRetryOnFailCallError = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P"] {
    constructor(maxRetries){
        super({
            cause: null,
            code: "invalid_retry_on_fail_call_error",
            docsUrl: null,
            name: "InvalidRetryOnFailCallError",
            shortMessage: `Invalid retries parameter for retryOnFail call: ${maxRetries}`
        });
    }
};
//#endregion
//#region src/utils/retryOnFail/retryOnFail.ts
/** @not-instrumented */ const retryOnFail = async ({ delay = 0, fn, maxRetries })=>{
    for(let retry = 0; retry <= maxRetries; retry++)try {
        return await fn();
    } catch (error) {
        if (retry >= maxRetries) throw error;
        if (delay > 0) await new Promise((resolve)=>setTimeout(resolve, delay));
    }
    /**
	* Reaching this point should never happen and this
	* error is thrown to help us debug the issue.
	*/ throw new InvalidRetryOnFailCallError(maxRetries);
};
//#endregion
//#region src/modules/auth/isSignedIn/isSignedIn.ts
/**
* Checks if the user is currently signed in to the Dynamic client.
*
* The client is considered to be in a signed in state if a user has
* authenticated or if the client has at least one wallet connected.
*
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns True if the user is signed in, false otherwise.
* @not-instrumented
*/ const isSignedIn = (client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>Boolean(client.user || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["y"])(client).length > 0);
//#endregion
//#region src/modules/projectSettings/fetchProjectSettings/projectSettingsExpirationScheme.ts
/**
* The schema to track the expiration time of the project settings.
*/ const projectSettingsExpirationStorageKeySchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getNetworkProviderFromNetworkId$2d$VEDzpV8Z$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["M"])({
    key: "projectSettingsExpiration",
    schema: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"])()
});
//#endregion
//#region src/modules/projectSettings/fetchProjectSettings/fetchProjectSettings.ts
/**
* Expiration time of the project settings in milliseconds.
* @instrumented
*/ const PROJECT_SETTINGS_EXPIRATION_TIME = 1e3 * 60 * 5;
/**
* Fetches and updates the project settings from the API.
*
* This function retrieves the latest project configuration settings
* from Dynamic's servers, including authentication options, enabled chains,
* and security configurations. The settings are cached for performance.
*
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns A promise that resolves to the updated project settings.
* @not-instrumented
*/ const fetchProjectSettings = async (client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    const currentExpiration = await core.storage.getItem(projectSettingsExpirationStorageKeySchema);
    if (Boolean(client.projectSettings) && !(currentExpiration && currentExpiration < Date.now()) && isSignedIn(client)) return client.projectSettings;
    const apiClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])({}, client);
    core.logger.debug("[fetchProjectSettings] Fetching project settings...");
    const doFetch = async ()=>apiClient.getEnvironmentSettings({
            environmentId: core.environmentId,
            sdkVersion: `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["O"]}/${core.version}`
        }, {
            credentials: "omit"
        });
    const projectSettings = await retryOnFail({
        fn: doFetch,
        maxRetries: 2
    });
    core.state.set({
        projectSettings: projectSettings ?? null
    });
    await core.storage.setItem(projectSettingsExpirationStorageKeySchema, Date.now() + PROJECT_SETTINGS_EXPIRATION_TIME);
    return projectSettings;
};
//#endregion
//#region src/services/runtimeServices/createRuntimeServices/createRuntimeServices.ts
/**
* Creates a new runtime services instance that manages service registration and retrieval.
*
* @returns A RuntimeServices object with methods to get, register, and unregister services
* @not-instrumented
*/ const createRuntimeServices = ()=>{
    const registry = /* @__PURE__ */ new Map();
    return {
        getByKey: (key)=>registry.get(key),
        register: (key, service)=>registry.set(key, service),
        unregister: (key)=>registry.delete(key)
    };
};
//#endregion
//#region src/modules/wallets/utils/getAvailableWalletProvidersFromWalletAccounts/getAvailableWalletProvidersFromWalletAccounts.ts
/** @not-instrumented */ const getAvailableWalletProvidersFromWalletAccounts = (client)=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    const walletProvidersMap = /* @__PURE__ */ new Map();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["y"])(client).forEach((walletAccount)=>{
        if (walletProvidersMap.has(walletAccount.walletProviderKey)) return;
        try {
            const walletProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"])({
                walletAccount
            }, client);
            walletProvidersMap.set(walletAccount.walletProviderKey, walletProvider);
        } catch (error) {
            core.logger.debug("Wallet provider not found for wallet account", {
                error,
                walletAccount: walletAccount.address
            });
        }
    });
    return Array.from(walletProvidersMap.values());
};
//#endregion
//#region src/modules/wallets/disconnectAndTerminateWalletProviders/disconnectAndTerminateWalletProviders.ts
/**
* Disconnect and terminate each wallet provider, if available.
* @not-instrumented
*/ const disconnectAndTerminateWalletProviders = async ({ reason }, client)=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    const walletProviders = getAvailableWalletProvidersFromWalletAccounts(client);
    await Promise.all(walletProviders.map(async (walletProvider)=>{
        if (walletProvider.terminate) await walletProvider.terminate({
            reason
        });
        if (walletProvider.disconnect) try {
            await walletProvider.disconnect();
        } catch (err) {
            core.logger.error(`Error disconnecting from wallet ${walletProvider.key}`, err);
        }
    }));
};
//#endregion
//#region src/modules/auth/performLogout/performLogout.ts
/**
* Shared logout implementation that revokes the session, clears auth state,
* terminates wallet providers, and emits the logout event with the given reason.
*
* @not-instrumented
*/ const performLogout = async ({ reason }, client)=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    core.logger.debug("[logout] Logging out...");
    await disconnectAndTerminateWalletProviders({
        reason
    }, client);
    if (client.user !== null) {
        const apiClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])({}, client);
        try {
            await apiClient.revokeSession({
                environmentId: core.environmentId
            });
        } catch (error) {
            core.logger.error("Failed to revoke session", error);
        }
        /**
		* This deletes the auth cookie if it exists.
		* If the cookie doesn't exist, this sets a new cookie that expires immediately.
		*/ if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["w"])(client)) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["A"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["p"]}=; Max-Age=-99999999; path=/; SameSite=Lax`);
    }
    await core.keychain.removeKey("session");
    core.state.set({
        captchaToken: null,
        elevatedAccessTokens: [],
        legacyToken: null,
        mfaToken: null,
        sessionExpiresAt: null,
        sessionKeys: null,
        token: null,
        unverifiedWalletAccounts: [],
        user: null
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["E"])({
        args: {
            reason
        },
        event: "logout"
    }, client);
    fetchProjectSettings(client);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getNetworkProviderFromNetworkId$2d$VEDzpV8Z$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])(client);
};
//#endregion
//#region src/modules/auth/handleSessionExpiration/handleSessionExpiration.ts
/**
* Logs out due to session expiry with a token-expired reason,
* allowing downstream providers to decide their own cleanup behavior.
*
* @param client - The Dynamic client instance.
* @returns A promise that resolves when the logout process is complete.
* @instrumented
*/ const handleSessionExpiration = async (client)=>{
    return performLogout({
        reason: "token-expired"
    }, client);
};
//#endregion
//#region src/modules/auth/initializeAuth/setLongTimeout/setLongTimeout.ts
/**
* A replacement for setTimeout that supports delays longer than 2147483647ms (~24.8 days).
* @not-instrumented
*/ const setLongTimeout = (callback, delay)=>{
    const MAX_DELAY = 2147483647;
    let timeoutId = null;
    let remaining = delay;
    const run = ()=>{
        if (remaining <= MAX_DELAY) timeoutId = setTimeout(callback, remaining);
        else timeoutId = setTimeout(()=>{
            remaining -= MAX_DELAY;
            run();
        }, MAX_DELAY);
    };
    run();
    return ()=>{
        if (timeoutId !== null) clearTimeout(timeoutId);
    };
};
//#endregion
//#region src/modules/auth/initializeAuth/initializeAuth.ts
/**
* Sets up a timeout to log out the user when their token expires.
* @not-instrumented
*/ const initializeAuth = (client)=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    let clearExpirationTimeout = null;
    const onChangeExpiration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getNetworkProviderFromNetworkId$2d$VEDzpV8Z$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"])(core.state, (state)=>state.sessionExpiresAt);
    const checkExpiration = ()=>{
        const expiration = core.state.get().sessionExpiresAt;
        clearExpirationTimeout?.();
        if (!expiration) return;
        const now = /* @__PURE__ */ new Date();
        const timeUntilExpiration = expiration.getTime() - now.getTime();
        if (timeUntilExpiration <= 0) {
            handleSessionExpiration(client);
            return;
        }
        clearExpirationTimeout = setLongTimeout(checkExpiration, timeUntilExpiration);
    };
    onChangeExpiration(checkExpiration);
    checkExpiration();
};
//#endregion
//#region src/modules/auth/logout/logout.ts
/**
* Logs out the current user and clears all authentication data.
*
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns A promise that resolves when the logout process is complete.
* @instrumented
*/ const logout = async (client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    return performLogout({
        reason: "user-intent"
    }, client);
};
//#endregion
//#region src/modules/crossTabEventSync/setupCrossTabEventSync/setupCrossTabEventSync.ts
/**
* Sets up bidirectional event synchronization between the core event emitter
* and the CrossTabBroadcast service.
*
* This enables events fired in one tab to be received in other tabs.
*
* **Local → Cross-Tab (Forwarding)**
* - Listens to specific events on core.eventEmitter
* - Forwards them to other tabs via core.crossTabBroadcast.send()
*
* **Cross-Tab → Local (Receiving)**
* - Listens to cross-tab events via core.crossTabBroadcast.on()
* - Emits corresponding "*InAnotherTab" events on core.eventEmitter
*
* @param client - The Dynamic client instance
* @not-instrumented
*/ const setupCrossTabEventSync = (client)=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    const handleDeviceRegistrationCompleted = ()=>{
        core.crossTabBroadcast.send({
            event: "deviceRegistrationCompleted"
        });
    };
    core.eventEmitter.on("deviceRegistrationCompleted", handleDeviceRegistrationCompleted);
    const handleCrossTabDeviceRegistrationCompleted = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["E"])({
            event: "deviceRegistrationCompletedInAnotherTab"
        }, client);
    };
    core.crossTabBroadcast.on("deviceRegistrationCompleted", handleCrossTabDeviceRegistrationCompleted);
};
//#endregion
//#region src/modules/wallets/unverifiedWalletAccounts/schema.ts
const unverifiedWalletAccountSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
    address: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(),
    addressesWithTypes: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        address: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(),
        publicKey: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])()),
        type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["custom"])((val)=>typeof val === "string")
    }))),
    chain: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["custom"])((val)=>typeof val === "string"),
    hardwareWalletVendor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["custom"])((val)=>typeof val === "string")),
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(),
    lastSelectedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["date"])()),
    walletProviderKey: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])()
});
//#endregion
//#region src/modules/wallets/walletProvider/walletProviderKeyMap/schema.ts
const walletProviderKeyMapSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["record"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])());
//#endregion
//#region src/modules/storageSync/schema.ts
const stateStorageKeySchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getNetworkProviderFromNetworkId$2d$VEDzpV8Z$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["M"])({
    key: "state",
    schema: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        apiVersion: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(),
        prefetchedNonces: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])()),
        prefetchedNoncesExpiration: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"])()),
        projectSettings: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["custom"])(),
        unverifiedWalletAccounts: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(unverifiedWalletAccountSchema),
        user: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["custom"])(),
        walletProviderKeyMap: walletProviderKeyMapSchema
    })
});
const sessionStorageKeySchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getNetworkProviderFromNetworkId$2d$VEDzpV8Z$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["M"])({
    key: "session",
    schema: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        captchaToken: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])()),
        elevatedAccessTokens: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
            expiresAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"])(),
            scopes: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])()),
            singleUse: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boolean"])()),
            token: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])()
        })),
        legacyToken: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])()),
        mfaToken: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])()),
        sessionExpiration: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"])(),
        sessionKeys: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])()),
        token: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])())
    })
});
//#endregion
//#region src/modules/keychainMigration/migrateSessionKeyToKeychain/KeyMigrationError.ts
var KeyMigrationError = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P"] {
    constructor(expectedPublicKey, importedPublicKey){
        super({
            cause: null,
            code: "key_migration_public_key_mismatch",
            docsUrl: null,
            name: "KeyMigrationError",
            shortMessage: `Public key mismatch after import: expected "${expectedPublicKey}", got "${importedPublicKey}"`
        });
    }
};
//#endregion
//#region src/modules/keychainMigration/migrateSessionKeyToKeychain/migrateSessionKeyToKeychain.ts
/**
* Migrates legacy session keys from the hydrated state into the IndexedDB keychain
* as non-extractable CryptoKey objects.
*
* Must run after hydrateStateWithStorage so that state.sessionKeys already holds
* the legacy base64 blob (or the new public key hex if already migrated).
*
* Idempotent: skips if the keychain already has a `session` key.
* Throws on failure — callers should handle errors (e.g. .catch(() => logout(client))).
* @not-instrumented
*/ const migrateSessionKeyToKeychain = async ({ keychain, logger, state, storage })=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getNetworkProviderFromNetworkId$2d$VEDzpV8Z$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["k"])()) return;
    logger.debug("[migrateSessionKeyToKeychain] Checking for existing session key in keychain");
    if (await keychain.hasKey("session")) {
        logger.debug("[migrateSessionKeyToKeychain] Session key already exists in keychain, skipping migration");
        return;
    }
    const encodedSessionKeys = state.get().sessionKeys;
    if (!encodedSessionKeys) {
        logger.debug("[migrateSessionKeyToKeychain] No session keys in state, nothing to migrate");
        return;
    }
    let blob;
    try {
        blob = JSON.parse((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getNetworkProviderFromNetworkId$2d$VEDzpV8Z$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["A"])().from(encodedSessionKeys, "base64").toString());
    } catch  {
        logger.debug("[migrateSessionKeyToKeychain] Session keys are not a legacy blob, skipping migration");
        return;
    }
    const { privateKeyJwk, publicKey } = blob;
    if (!privateKeyJwk || !publicKey) {
        logger.debug("[migrateSessionKeyToKeychain] Legacy blob missing privateKeyJwk or publicKey, skipping migration");
        return;
    }
    logger.debug("[migrateSessionKeyToKeychain] Found legacy session key, importing into keychain", {
        expectedPublicKey: publicKey
    });
    const importedPublicKey = await keychain.importKey("session", privateKeyJwk);
    logger.debug("[migrateSessionKeyToKeychain] Key imported", {
        expectedPublicKey: publicKey,
        importedPublicKey
    });
    if (importedPublicKey !== publicKey) throw new KeyMigrationError(publicKey, importedPublicKey);
    logger.debug("[migrateSessionKeyToKeychain] Public key validated, updating state and storage");
    state.set({
        sessionKeys: importedPublicKey
    });
    const currentSession = await storage.getItem(sessionStorageKeySchema);
    if (currentSession) await storage.setItem(sessionStorageKeySchema, {
        ...currentSession,
        sessionKeys: importedPublicKey
    });
    logger.debug("[migrateSessionKeyToKeychain] Migration complete");
};
//#endregion
//#region src/modules/state/raiseStateEvents/raiseStateEvents.ts
/** @not-instrumented */ const raiseStateEvents = (client)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client).state.subscribe((value, previous)=>{
        Object.entries(stateChangeEvents).forEach(([key, event])=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getNetworkProviderFromNetworkId$2d$VEDzpV8Z$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["L"])(value[key], previous[key])) return;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["E"])({
                args: {
                    [key]: value[key]
                },
                event
            }, client);
        });
    });
};
//#endregion
//#region src/modules/storageSync/hydrateStateWithStorage/hydrateStateWithStorage.ts
/** @not-instrumented */ const hydrateStateWithStorage = async (client)=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    const previousState = core.state.get();
    const stateChanges = {};
    const session = await core.storage.getItem(sessionStorageKeySchema);
    const isSessionValid = session?.sessionExpiration && session.sessionExpiration > Date.now();
    if (isSessionValid) {
        stateChanges.token = session.token;
        stateChanges.legacyToken = session.legacyToken;
        stateChanges.sessionExpiresAt = new Date(session.sessionExpiration);
        stateChanges.mfaToken = session.mfaToken;
        stateChanges.elevatedAccessTokens = session.elevatedAccessTokens.map((token)=>({
                expiresAt: new Date(token.expiresAt),
                scopes: token.scopes,
                singleUse: token.singleUse ?? false,
                token: token.token
            }));
        stateChanges.captchaToken = session.captchaToken;
        stateChanges.sessionKeys = session.sessionKeys;
    }
    const storedState = await core.storage.getItem(stateStorageKeySchema);
    if (storedState?.apiVersion === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["o"]) {
        stateChanges.unverifiedWalletAccounts = storedState.unverifiedWalletAccounts;
        stateChanges.walletProviderKeyMap = storedState.walletProviderKeyMap;
        if (storedState.prefetchedNoncesExpiration && storedState.prefetchedNoncesExpiration > Date.now()) {
            stateChanges.prefetchedNonces = storedState.prefetchedNonces;
            stateChanges.prefetchedNoncesExpiration = storedState.prefetchedNoncesExpiration;
        }
        if (isSessionValid) stateChanges.user = storedState.user;
        if (isSessionValid || (storedState.unverifiedWalletAccounts ?? []).length > 0) stateChanges.projectSettings = storedState.projectSettings;
    }
    if (Object.keys(stateChanges).length > 0) core.state.set(stateChanges);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])({
        previousState
    }, client);
};
//#endregion
//#region src/modules/storageSync/syncStateWithStorage/syncStateWithStorage.ts
/** @not-instrumented */ const syncStateWithStorage = (client)=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    core.state.subscribe((state)=>{
        if (state.sessionExpiresAt === null) core.storage.removeItem(sessionStorageKeySchema);
        else core.storage.setItem(sessionStorageKeySchema, {
            captchaToken: state.captchaToken,
            elevatedAccessTokens: (state.elevatedAccessTokens || []).map((token)=>({
                    expiresAt: token.expiresAt.getTime(),
                    scopes: token.scopes,
                    singleUse: token.singleUse ?? null,
                    token: token.token
                })),
            legacyToken: state.legacyToken,
            mfaToken: state.mfaToken,
            sessionExpiration: state.sessionExpiresAt.getTime(),
            sessionKeys: state.sessionKeys,
            token: state.token
        });
        core.storage.setItem(stateStorageKeySchema, {
            apiVersion: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["o"],
            prefetchedNonces: state.prefetchedNonces,
            prefetchedNoncesExpiration: state.prefetchedNoncesExpiration,
            projectSettings: state.projectSettings,
            unverifiedWalletAccounts: state.unverifiedWalletAccounts,
            user: state.user,
            walletProviderKeyMap: state.walletProviderKeyMap
        });
    });
};
//#endregion
//#region src/modules/storageSync/initializeStorageSync.ts
/** @not-instrumented */ const initializeStorageSync = async (client)=>{
    await hydrateStateWithStorage(client);
    syncStateWithStorage(client);
};
//#endregion
//#region src/errors/ClientAlreadyInitializedError.ts
var ClientAlreadyInitializedError = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P"] {
    constructor(){
        super({
            cause: null,
            code: "client_already_initialized_error",
            docsUrl: null,
            name: "ClientAlreadyInitializedError",
            shortMessage: "Client must not be initialized more than once"
        });
    }
};
//#endregion
//#region src/modules/initializeClient/initializeClient.ts
/**
* Initializes the Dynamic client and all its modules and services.
*
* This function orchestrates the initialization of authentication, project settings,
* session keys, and storage sync. It manages the initialization status and handles
* any errors that occur during the process.
*
* You only need to call this function if you are not using `autoInitialize: true` in createDynamicClient.
*
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns A promise that resolves when initialization is complete.
* @throws ClientAlreadyInitializedError If the client is already initialized.
* @instrumented
*/ const initializeClient = async (client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    core.logger.debug("[initializeClient] Initializing client. Current init status", core.state.get().initStatus);
    if (core.state.get().initStatus !== "uninitialized") throw new ClientAlreadyInitializedError();
    core.state.set({
        initStatus: "in-progress"
    });
    initializeAuth(client);
    raiseStateEvents(client);
    setupCrossTabEventSync(client);
    const initializeStorageSyncPromise = initializeStorageSync(client);
    const fetchProjectSettingsPromise = initializeStorageSyncPromise.then(async ()=>{
        await migrateSessionKeyToKeychain({
            keychain: core.keychain,
            logger: core.logger,
            state: core.state,
            storage: core.storage
        }).catch(()=>logout(client));
        if (core.state.get().sessionKeys && !await core.keychain.hasKey("session")) await logout(client);
    }).then(async ()=>{
        if (!core.state.get().projectSettings) await fetchProjectSettings(client);
    });
    fetchProjectSettingsPromise.then(()=>prefetchNoncesIfNeeded(client)).catch((error)=>{
        core.logger.error("Failed to prefetch nonces:", error);
    });
    /**
	* Generate session keys if they don't exist
	*/ const generateSessionKeysPromise = fetchProjectSettingsPromise.then(async ()=>{
        if (!core.state.get().sessionKeys) await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getNetworkProviderFromNetworkId$2d$VEDzpV8Z$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])(client);
    });
    /**
	* Refresh user state on initialization when cookie is enabled.
	* This is necessary for supporting multiple subdomain domains.
	*
	* When a user logs in on sub1.example.com, they will have a cookie set. However, when they access
	* sub2.example.com, the cookie will be present but the user state will not be present.
	* We need to fetch the user to access the expiration date of the cookie on the new subdomain.
	*
	* This is also needed in case a user logs in with a new user on sub1.example.com and then accesses
	* sub2.example.com that had the original logged-in user. We need to fetch the user to refresh
	* the user state with the correct logged-in user.
	*/ const refreshUserStateFromCookiePromise = fetchProjectSettingsPromise.then(async ()=>{
        /**
		* When cookies are enabled, we need to refresh the user as part of the initialization process
		* to ensure the user is logged in and sync the auth state with the server.
		*
		* This call can fail with a 401 error if the user is not logged in and the SDK should finish its initialization process
		* without throwing an error because that is an expected behavior.
		*/ if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["w"])(client)) await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$NotWaasWalletAccountError$2d$B5QkZWrs$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"])(client).catch(async (error)=>{
            if (error.status === 401) {
                core.logger.error("Session expired during initialization", error);
                if (client.user) await logout(client);
            } else throw error;
        });
    });
    core.initTrack.track({
        name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getNetworkProviderFromNetworkId$2d$VEDzpV8Z$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["D"],
        promise: initializeStorageSyncPromise
    });
    core.initTrack.track({
        name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getNetworkProviderFromNetworkId$2d$VEDzpV8Z$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"],
        promise: fetchProjectSettingsPromise
    });
    core.initTrack.track({
        name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getNetworkProviderFromNetworkId$2d$VEDzpV8Z$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["E"],
        promise: generateSessionKeysPromise
    });
    core.initTrack.track({
        name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getNetworkProviderFromNetworkId$2d$VEDzpV8Z$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["O"],
        promise: refreshUserStateFromCookiePromise
    });
    try {
        await core.initTrack.waitForAll();
        core.state.set({
            initStatus: "finished"
        });
    } catch (error) {
        core.logger.error("Client initialization failed", error);
        core.state.set({
            initStatus: "failed"
        });
        throw error;
    }
    if (client.user) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["o"])(client);
};
//#endregion
//#region src/services/asyncTrack/createAsyncTrack.ts
/**
* Creates a tracker that associates names with promises and raises as promises resolve.
* @not-instrumented
*/ const createAsyncTrack = ()=>{
    /**
	* Whether tracking is enabled.
	* All processes must be tracked on the same node tick.
	*
	* This ensures no process is missed (as it would throw when tracked on a different node tick).
	*/ let isTrackEnabled = true;
    const eventEmitter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter3$40$5$2e$0$2e$1$2f$node_modules$2f$eventemitter3$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EventEmitter$3e$__["EventEmitter"]();
    const allSettledPromise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getNetworkProviderFromNetworkId$2d$VEDzpV8Z$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["w"])();
    const tracker = /* @__PURE__ */ new Map();
    /**
	* Checks if all processes are initialized and resolves the main promise if they are.
	*/ const checkIfAllSettled = ()=>{
        if (!Array.from(tracker.values()).every(({ status })=>status === "resolved")) return;
        allSettledPromise.resolve();
    };
    const track = ({ name: name$1, promise })=>{
        if (!isTrackEnabled) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getNetworkProviderFromNetworkId$2d$VEDzpV8Z$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"]();
        Promise.resolve().then(()=>isTrackEnabled = false);
        tracker.set(name$1, {
            promise,
            status: "pending"
        });
        promise.then(()=>{
            tracker.set(name$1, {
                promise,
                status: "resolved"
            });
            eventEmitter.emit("resolved", name$1);
            checkIfAllSettled();
        }).catch((error)=>{
            tracker.set(name$1, {
                promise,
                status: "failed"
            });
            eventEmitter.emit("failed", name$1, error);
            allSettledPromise.reject(error);
        });
    };
    const waitForAll = ()=>allSettledPromise.promise;
    const getTracker = (trackerKey)=>tracker.get(trackerKey);
    return {
        getTracker,
        off: eventEmitter.off.bind(eventEmitter),
        on: eventEmitter.on.bind(eventEmitter),
        track,
        waitForAll
    };
};
//#endregion
//#region src/services/eventEmitter/createEventEmitter.ts
/** @not-instrumented */ const createEventEmitter = ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter3$40$5$2e$0$2e$1$2f$node_modules$2f$eventemitter3$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"]();
//#endregion
//#region src/errors/UnavailableInServerSideError.ts
var UnavailableInServerSideError = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P"] {
    constructor(unavailableFeature){
        super({
            cause: null,
            code: "unavailable_in_server_side_error",
            docsUrl: null,
            name: "UnavailableInServerSideError",
            shortMessage: `This function is not available in server-side rendering: ${unavailableFeature}`
        });
    }
};
//#endregion
//#region src/services/fetch/createWebFetch.ts
/**
* Creates a fetch instance that uses the native window.fetch API.
* @not-instrumented
*/ const createWebFetch = ()=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getNetworkProviderFromNetworkId$2d$VEDzpV8Z$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["k"])()) return ()=>Promise.reject(new UnavailableInServerSideError("createWebFetch"));
    return window.fetch.bind(window);
};
//#endregion
//#region src/utils/getUserAgent/getUserAgent.ts
/**
* Returns the browser's `navigator.userAgent` string for inclusion in
* instrumentation events.
*
* Falls back to an empty string in environments where `navigator` is not
* available (e.g., Node.js SSR, service workers) so that callers never need
* to guard against undefined.
* @not-instrumented
*/ const getUserAgent = ()=>{
    try {
        return navigator.userAgent;
    } catch  {
        return "";
    }
};
//#endregion
//#region src/modules/auth/extractSessionId/extractSessionId.ts
/**
* Extracts the session ID (`sid` claim) from a JWT token string.
*
* Decodes the base64url-encoded payload segment of the token and reads the
* `sid` field. This is used to correlate instrumentation events with the
* authenticated session, without ever forwarding the full token.
*
* Returns `null` when no token is present, when the token is malformed, or
* when the payload does not contain a `sid` claim.
* @not-instrumented
*/ const extractSessionId = (token)=>{
    try {
        const payload = token.split(".")[1];
        return JSON.parse(atob(payload)).sid ?? null;
    } catch  {
        return null;
    }
};
//#endregion
//#region src/services/instrumentation/connectLoggerToInstrumentation/connectLoggerToInstrumentation.ts
/**
* Subscribes to the logger's 'log' event and forwards every entry to the
* instrumentation service as an InstrumentationEvent.
*
* Bridges the logger and instrumentation subsystems without coupling them
* at construction time — either can exist without the other.
* Only error-level log entries are forwarded.
* @not-instrumented
*/ const connectLoggerToInstrumentation = ({ environmentId, instrumentation, logger, sdkSessionId, sdkVersion, state })=>{
    logger.on("log", (level, message, ...args)=>{
        if (level !== "error") return;
        const { token, user } = state.get();
        instrumentation.log({
            environmentId,
            parameters: {
                args,
                message
            },
            sdkSessionId,
            sdkVersion,
            timestamp: /* @__PURE__ */ new Date().toISOString(),
            tokenSessionId: token ? extractSessionId(token) : null,
            userAgent: getUserAgent(),
            userId: user?.id ?? null
        });
    });
};
//#endregion
//#region src/services/instrumentation/constants.ts
const DEFAULT_PII_FIELDS = [
    "password",
    "token",
    "secret",
    "privateKey",
    "mnemonic",
    "seed",
    "email",
    "phone",
    "ssn",
    "address",
    "authorization"
];
//#endregion
//#region src/services/instrumentation/createInstrumentation/createInstrumentation.ts
const buildPiiFields = (customFields = [])=>{
    const merged = [
        ...DEFAULT_PII_FIELDS,
        ...customFields
    ];
    return [
        ...new Set(merged)
    ];
};
/**
* Creates the instrumentation service that gates event emission behind an
* enabled flag and delegates to a pluggable transport.
*
* The transport is intentionally optional at creation time — it is wired in
* later via setTransport so the SDK can initialise without one. Events logged
* before a transport is set are simply dropped.
*
* Custom piiFields are merged with and deduplicated against the defaults so
* callers only need to list additional fields, not replicate the baseline.
* @not-instrumented
*/ const createInstrumentation = ({ config: inputConfig } = {})=>{
    let transport;
    const config = {
        enabled: inputConfig?.enabled ?? true,
        piiFields: buildPiiFields(inputConfig?.piiFields)
    };
    const emit = (event)=>{
        if (config.enabled) transport?.log(event);
    };
    return {
        config,
        log: emit,
        logFunction: emit,
        setEnabled: (value)=>{
            config.enabled = value;
        },
        setTransport: (t)=>{
            transport = t;
        }
    };
};
//#endregion
//#region src/services/instrumentation/transports/createDynamicTransport/createDynamicTransport.ts
const LOGS_BASE_URL = "https://logs.dynamicauth.com/api/v1";
/**
* Creates a batched transport that ships instrumentation events to Dynamic's
* log ingestion endpoint.
*
* Events are queued synchronously and flushed as a single HTTP batch in the
* next microtask (via queueMicrotask). Multiple log() calls within the same
* synchronous tick are coalesced into one request, avoiding a round-trip per
* event.
*
* Fetch errors are swallowed to prevent an instrumentation failure from
* triggering another instrumentation event and causing an infinite loop.
*
* Works in both browser and SSR environments — fetch is injected and
* queueMicrotask is available in Node.js >= 11.
* @not-instrumented
*/ const createDynamicTransport = (params)=>{
    const queue = [];
    let flushScheduled = false;
    const flush = ()=>{
        flushScheduled = false;
        const events = queue.splice(0);
        if (events.length === 0) return;
        params.fetch(`${LOGS_BASE_URL}/${params.environmentId}`, {
            body: JSON.stringify(events),
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST"
        }).catch(()=>{});
    };
    return {
        log: (event)=>{
            queue.push(event);
            if (!flushScheduled) {
                flushScheduled = true;
                queueMicrotask(flush);
            }
        }
    };
};
//#endregion
//#region src/services/navigate/createNavigationHandler/createNavigationHandler.ts
/**
* Creates a navigation handler that uses the native window.location API.
* @not-instrumented
*/ const createNavigationHandler = ()=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getNetworkProviderFromNetworkId$2d$VEDzpV8Z$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["k"])()) return ()=>Promise.reject(new UnavailableInServerSideError("createNavigationHandler"));
    return async (url)=>{
        window.location.href = url;
    };
};
//#endregion
//#region src/services/openDeeplink/createWebDeeplinkOpener/createWebDeeplinkOpener.ts
/**
* Creates a deeplink opener that navigates the current tab to the deeplink URL.
*
* Uses `window.location.assign` instead of `window.open` deliberately.
* This matters for Phantom redirect specifically, which is the only deep link
* provider that redirects back to the app in a new tab. With `window.open`,
* the browser first opens an `about:blank` tab before the native wallet app
* handles the deep link. When Phantom redirects back, it opens yet another
* tab. The user ends up with three tabs (original, about:blank, redirect) and
* the browser focuses the lingering about:blank after the redirect tab closes.
* `window.location.assign` reuses the current tab, avoiding the extra tab
* entirely.
* @not-instrumented
*/ const createWebDeeplinkOpener = ()=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getNetworkProviderFromNetworkId$2d$VEDzpV8Z$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["k"])()) return ()=>Promise.reject(new UnavailableInServerSideError("createWebDeeplinkOpener"));
    return async (url)=>{
        window.location.assign(url);
    };
};
//#endregion
//#region src/services/passkey/createWebPasskeyService/createWebPasskeyService.ts
/**
* Because this is the web implementation of the passkey service, we need to
* import the browser's WebAuthn API directly.
* @not-instrumented
*/ /**
* Create a passkey service that uses the browser's WebAuthn API.
* @not-instrumented
*/ const createWebPasskeyService = ()=>({
        authenticate: (options)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$browser$40$13$2e$1$2e$0$2f$node_modules$2f40$simplewebauthn$2f$browser$2f$esm$2f$methods$2f$startAuthentication$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startAuthentication"])(options),
        isSupported: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$browser$40$13$2e$1$2e$0$2f$node_modules$2f40$simplewebauthn$2f$browser$2f$esm$2f$helpers$2f$browserSupportsWebAuthn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browserSupportsWebAuthn"])(),
        register: (options)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$browser$40$13$2e$1$2e$0$2f$node_modules$2f40$simplewebauthn$2f$browser$2f$esm$2f$methods$2f$startRegistration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startRegistration"])(options)
    });
//#endregion
//#region src/utils/debouncedMutex/createDebouncedMutex/createDebouncedMutex.ts
/** @not-instrumented */ const createDebouncedMutex = ()=>{
    const mutexState = /* @__PURE__ */ new Map();
    return async ({ lockKey, callback, debounceTime = 0 })=>{
        const resolutionPromise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getNetworkProviderFromNetworkId$2d$VEDzpV8Z$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["w"])();
        if (!mutexState.has(lockKey)) mutexState.set(lockKey, {
            nextCallback: null,
            queuePromise: Promise.resolve(),
            resolutionPromises: [],
            timer: null
        });
        const currentState = mutexState.get(lockKey);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"])(currentState, `Mutex state for key ${lockKey} not found`);
        currentState.resolutionPromises.push(resolutionPromise);
        if (currentState.timer) clearTimeout(currentState.timer);
        currentState.nextCallback = callback;
        const addCallbackToQueue = async ()=>{
            currentState.queuePromise = currentState.queuePromise.then(async ()=>{
                if (!currentState.nextCallback) return;
                const { nextCallback } = currentState;
                currentState.nextCallback = null;
                const promisesToResolve = currentState.resolutionPromises;
                currentState.resolutionPromises = [];
                try {
                    await nextCallback();
                    promisesToResolve.forEach((resolutionPromise$1)=>resolutionPromise$1.resolve());
                } catch (error) {
                    promisesToResolve.forEach((resolutionPromise$1)=>resolutionPromise$1.reject(error));
                }
            });
        };
        if (debounceTime > 0) currentState.timer = setTimeout(addCallbackToQueue, debounceTime);
        else await addCallbackToQueue();
        return resolutionPromise.promise;
    };
};
//#endregion
//#region src/errors/InvalidStorageValue.ts
var InvalidStorageValue = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P"] {
    constructor(key, value){
        super({
            cause: null,
            code: "invalid_storage_value",
            docsUrl: null,
            name: "InvalidStorageValue",
            shortMessage: `Tried to store state with a forbidden value. Key: ${key}, Value: ${value}`
        });
    }
};
//#endregion
//#region src/utils/observable/createObservableState/createObservableState.ts
/**
* Creates an observable state object that allows subscribing to immutable state changes.
*
* This function creates a state management system with the following capabilities:
* - Get the current state
* - Update state partially
* - Subscribe to state changes
* - Unsubscribe from state changes
*
* @param getInitialState - A function that returns the initial state object
* @returns An ObservableState object with methods to manage and observe state changes
* @example
* ```typescript
* const state = createObservableState(() => ({
*   count: 0,
*   name: 'John'
* }));
*
* // Subscribe to changes
* const unsubscribe = state.subscribe((current, previous) => {
*   console.log('State changed:', current, 'Previous:', previous);
* });
*
* // Update state
* state.set({ count: 1 });
*
* // Get current state
* const currentState = state.get();
*
* // Unsubscribe when done
* unsubscribe();
* ```
* @not-instrumented
*/ const createObservableState = (getInitialState$1)=>{
    const subscribers = /* @__PURE__ */ new Set();
    const notifySubscribers = (value, previous)=>{
        subscribers.forEach((callback)=>callback(value, previous));
    };
    const subscribe = (callback)=>{
        subscribers.add(callback);
        return ()=>unsubscribe(callback);
    };
    const unsubscribe = (callback)=>{
        subscribers.delete(callback);
    };
    let currentState = getInitialState$1();
    const get = ()=>currentState;
    const set = (partial)=>{
        const previous = currentState;
        Object.entries(partial).forEach(([key, value])=>{
            if (value === void 0) throw new InvalidStorageValue(key, value);
        });
        currentState = Object.assign({}, currentState, partial);
        notifySubscribers(currentState, previous);
    };
    return {
        get,
        getInitialState: getInitialState$1,
        set,
        subscribe,
        unsubscribe
    };
};
//#endregion
//#region src/client/consts.ts
/**
* The default API base URL for Dynamic apps in production.
*/ const DEFAULT_API_BASE_URL = "https://app.dynamicauth.com/api/v0";
//#endregion
//#region src/client/core/createCore/getInitialState.ts
/**
* The initial values for the state of the client.
* @not-instrumented
*/ const getInitialState = ()=>({
        captchaToken: null,
        elevatedAccessTokens: [],
        initStatus: "uninitialized",
        legacyToken: null,
        mfaToken: null,
        prefetchedNonces: [],
        prefetchedNoncesExpiration: null,
        projectSettings: null,
        sessionExpiresAt: null,
        sessionKeys: null,
        token: null,
        unverifiedWalletAccounts: [],
        user: null,
        walletProviderKeyMap: {}
    });
//#endregion
//#region src/client/core/createCore/createCore.ts
/**
* Creates a core instance that contains all the services and state of the Dynamic SDK client.
* @not-instrumented
*/ const createCore = (config)=>{
    const apiBaseUrl = config.coreConfig?.apiBaseUrl ?? DEFAULT_API_BASE_URL;
    const logger = config.coreConfig?.logger ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getNetworkProviderFromNetworkId$2d$VEDzpV8Z$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])({
        level: config.logLevel
    });
    const storage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getNetworkProviderFromNetworkId$2d$VEDzpV8Z$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["N"])({
        prefix: `dynamic_${config.environmentId}`,
        storageAdapter: config.coreConfig?.storageAdapter ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getNetworkProviderFromNetworkId$2d$VEDzpV8Z$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])()
    });
    const fetch = config.coreConfig?.fetch ?? createWebFetch();
    const openDeeplink = config.coreConfig?.openDeeplink ?? createWebDeeplinkOpener();
    const navigate = config.coreConfig?.navigate ?? createNavigationHandler();
    const state = createObservableState(getInitialState);
    const debouncedMutex = createDebouncedMutex();
    const eventEmitter = createEventEmitter();
    const initTrack = createAsyncTrack();
    const sdkSessionId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["D"])({
        length: 32
    });
    const instrumentation = createInstrumentation({
        config: config.instrumentation
    });
    connectLoggerToInstrumentation({
        environmentId: config.environmentId,
        instrumentation,
        logger,
        sdkSessionId,
        sdkVersion: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["L"],
        state
    });
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getNetworkProviderFromNetworkId$2d$VEDzpV8Z$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["k"])()) instrumentation.setTransport(createDynamicTransport({
        environmentId: config.environmentId,
        fetch
    }));
    const runtimeServices = createRuntimeServices();
    const passkey = config.coreConfig?.passkey ?? createWebPasskeyService();
    const realtime = config.coreConfig?.realtime ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getNetworkProviderFromNetworkId$2d$VEDzpV8Z$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["v"])();
    const deviceSigner = config.coreConfig?.deviceSigner;
    const keychain = config.coreConfig?.keychain ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getNetworkProviderFromNetworkId$2d$VEDzpV8Z$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["y"])({
        dbName: `dynamic_${config.environmentId}_keychain`
    });
    return {
        apiBaseUrl,
        crossTabBroadcast: config.coreConfig?.crossTabBroadcast ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getNetworkProviderFromNetworkId$2d$VEDzpV8Z$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["x"])({
            channelName: `dynamic_${config.environmentId}_broadcast`
        }),
        debouncedMutex,
        deviceSigner,
        environmentId: config.environmentId,
        eventEmitter,
        extensions: /* @__PURE__ */ new Set(),
        fetch,
        getApiHeaders: config.coreConfig?.getApiHeaders ?? (()=>({})),
        initTrack,
        instrumentation,
        keychain,
        logger,
        metadata: {
            ...config.metadata,
            universalLink: config.metadata?.universalLink ?? ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getNetworkProviderFromNetworkId$2d$VEDzpV8Z$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["k"])() ? void 0 : window.location.origin)
        },
        navigate,
        openDeeplink,
        passkey,
        realtime,
        runtimeServices,
        sdkSessionId,
        state,
        storage,
        transformers: config.transformers,
        version: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["L"]
    };
};
//#endregion
//#region src/client/createDynamicClient/createDynamicClient.ts
/**
* Creates a new DynamicClient instance.
*
* Notice the `autoInitialize` flag is true by default (unless you're running
* in SSR), so the client will be automatically initialized when created — if
* you want to manually initialize the client, you can set the `autoInitialize`
* flag to false and then later call the `initializeClient` function.
*
* Manually calling `initializeClient` also allows you to catch any potential
* errors that may occur during initialization.
*
* @param config - The configuration for the Dynamic client, like the environment ID, app url, etc.
* @returns The Dynamic client instance.
* @instrumented
*/ const createDynamicClient = (config)=>{
    const core = createCore(config);
    const client = {
        get __core () {
            return core;
        },
        get initStatus () {
            return core.state.get().initStatus;
        },
        get mfaToken () {
            return core.state.get().mfaToken;
        },
        get projectSettings () {
            return core.state.get().projectSettings;
        },
        get sessionExpiresAt () {
            return core.state.get().sessionExpiresAt;
        },
        get token () {
            return core.state.get().token;
        },
        get user () {
            return core.state.get().user;
        }
    };
    const autoInitialize = config.autoInitialize ?? true;
    const shouldAutoInitialize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getNetworkProviderFromNetworkId$2d$VEDzpV8Z$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["k"])() ? false : autoInitialize;
    core.logger.debug("[createDynamicClient] Creating client...");
    if (shouldAutoInitialize) {
        core.logger.debug("[createDynamicClient] Initializing client...");
        initializeClient(client);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["M"])(client);
    return client;
};
//#endregion
//#region src/errors/CheckoutSessionTokenMissingError.ts
var CheckoutSessionTokenMissingError = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P"] {
    constructor({ transactionId }){
        super({
            cause: null,
            code: "checkout_session_token_missing",
            docsUrl: null,
            name: "CheckoutSessionTokenMissingError",
            shortMessage: `No session token found for transaction ${transactionId}. Session tokens are issued once at transaction creation and cannot be recovered.`
        });
    }
};
//#endregion
//#region src/errors/DeeplinkConnectAndVerifyUnsupportedError.ts
var DeeplinkConnectAndVerifyUnsupportedError = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P"] {
    constructor({ walletProviderKey }){
        super({
            cause: null,
            code: "deeplink_connect_and_verify_unsupported",
            docsUrl: null,
            metaMessages: [
                `Wallet provider key: ${walletProviderKey}`,
                "On mobile, deep link wallet providers (e.g. Phantom redirect) cannot connect and verify in a single step.",
                "iOS does not allow two sequential deep links — the second one is silently ignored because it is no longer tied to a user gesture.",
                "Android may handle sequential deep links differently, but this guard applies to all mobile platforms to ensure a stable experience and prevent production-only errors.",
                "Use connectWithWalletProvider() first, then call verifyWalletAccount() from a separate user action (e.g. a \"Verify Ownership\" button)."
            ],
            name: "DeeplinkConnectAndVerifyUnsupportedError",
            shortMessage: "connectAndVerifyWithWalletProvider is not supported for deep link wallet providers on mobile. Use connectWithWalletProvider and verifyWalletAccount separately."
        });
    }
};
//#endregion
//#region src/errors/FeeEstimationFailedError.ts
var FeeEstimationFailedError = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P"] {
    constructor(params){
        super({
            cause: params.cause || null,
            code: "fee_estimation_failed_error",
            docsUrl: null,
            name: "FeeEstimationFailedError",
            shortMessage: params.message
        });
    }
};
//#endregion
//#region src/errors/InvalidDeviceRegistrationRedirectError.ts
var InvalidDeviceRegistrationRedirectError = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P"] {
    constructor(){
        super({
            cause: null,
            code: "invalid_device_registration_redirect_error",
            docsUrl: null,
            metaMessages: [
                "To check if a URL is a valid device registration redirect before extracting the token, use detectDeviceRegistrationRedirect from the @dynamic-labs-sdk/client package."
            ],
            name: "InvalidDeviceRegistrationRedirectError",
            shortMessage: "The provided URL is not a valid device registration redirect."
        });
    }
};
//#endregion
//#region src/errors/InvalidRedirectStorageStateError.ts
var InvalidRedirectStorageStateError = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P"] {
    constructor(){
        super({
            cause: null,
            code: "invalid_redirect_storage_state_error",
            docsUrl: null,
            name: "InvalidRedirectStorageStateError",
            shortMessage: "The social redirect data found in local storage does not match the expected state. Try connecting again."
        });
    }
};
//#endregion
//#region src/errors/MissingRedirectStorageStateError.ts
var MissingRedirectStorageStateError = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P"] {
    constructor(){
        super({
            cause: null,
            code: "missing_redirect_storage_state_error",
            docsUrl: null,
            name: "MissingRedirectStorageStateError",
            shortMessage: "The social redirect data was not found in local storage. Try connecting again."
        });
    }
};
//#endregion
//#region src/errors/MissingSocialUrlParamError.ts
var MissingSocialUrlParamError = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P"] {
    constructor(param){
        super({
            cause: null,
            code: "missing_social_url_param_error",
            docsUrl: null,
            name: "MissingSocialParamError",
            shortMessage: `To complete social sign in, the following URL query parameter is required to be set but was not found: ${param}`
        });
    }
};
//#endregion
//#region src/errors/MissingUserVerificationError.ts
var MissingUserVerificationError = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P"] {
    informationToVerify;
    constructor({ informationToVerify, message }){
        super({
            cause: null,
            code: "missing_user_verification_error",
            docsUrl: null,
            name: "MissingUserVerificationError",
            shortMessage: message ?? `The user is missing verification for ${informationToVerify}. Please verify the user's ${informationToVerify}`
        });
        this.informationToVerify = informationToVerify;
    }
};
//#endregion
//#region src/errors/NetworkAddingUnavailableError.ts
var NetworkAddingUnavailableError = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P"] {
    constructor({ walletProviderKey, originalError, extraMessages }){
        const cause = originalError instanceof Error ? originalError : null;
        super({
            cause,
            code: "network_adding_unavailable",
            docsUrl: null,
            metaMessages: [
                `Wallet provider key: ${walletProviderKey}`,
                ...extraMessages ?? []
            ],
            name: "NetworkAddingUnavailableError",
            shortMessage: `Network adding is not available for this wallet provider. The user should manually add the network in their wallet`
        });
    }
};
//#endregion
//#region src/errors/NetworkNotAddedError.ts
var NetworkNotAddedError = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P"] {
    networkData;
    constructor({ networkData, networkId, originalError, walletProviderKey }){
        const cause = originalError instanceof Error ? originalError : null;
        super({
            cause,
            code: "network_not_added",
            docsUrl: null,
            metaMessages: [
                `Wallet provider key: ${walletProviderKey}`,
                `Network ID: ${networkId}`,
                "The network is not added to the wallet. If the wallet provider supports adding networks, call the `addNetwork` method before switching.",
                "The network data is available in the error payload as `error.networkData` and can be passed directly to `addNetwork`."
            ],
            name: "NetworkNotAddedError",
            shortMessage: `Cannot switch to network ${networkId} because it is not added to the wallet. If the wallet provider supports it, call \`addNetwork\` with the network data from \`error.networkData\` first.`
        });
        this.networkData = networkData;
    }
};
//#endregion
//#region src/errors/NetworkSwitchingUnavailableError.ts
var NetworkSwitchingUnavailableError = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P"] {
    constructor({ walletProviderKey, originalError, extraMessages }){
        const cause = originalError instanceof Error ? originalError : null;
        super({
            cause,
            code: "network_switching_unavailable",
            docsUrl: null,
            metaMessages: [
                `Wallet provider key: ${walletProviderKey}`,
                ...extraMessages ?? []
            ],
            name: "NetworkSwitchingUnavailableError",
            shortMessage: `Network switching is not available at this time. The user should manually switch networks in their wallet`
        });
    }
};
//#endregion
//#region src/errors/NoAddressFoundError.ts
var NoAddressFoundError = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P"] {
    constructor(){
        super({
            cause: null,
            code: "no_address_found_error",
            docsUrl: null,
            name: "NoAddressFoundError",
            shortMessage: "No address is connected to the wallet"
        });
    }
};
//#endregion
//#region src/errors/NoPasskeyCredentialsFoundError.ts
var NoPasskeyCredentialsFoundError = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P"] {
    constructor(){
        super({
            cause: null,
            code: "no_passkey_credentials_found_error",
            docsUrl: null,
            name: "NoPasskeyCredentialsFoundError",
            shortMessage: "No passkey credentials found"
        });
    }
};
//#endregion
//#region src/errors/NoSmartWalletAccountSignerFoundError.ts
var NoSmartWalletAccountSignerFoundError = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P"] {
    constructor(smartWalletAddress){
        super({
            cause: null,
            code: "no_smart_wallet_account_signer_found_error",
            docsUrl: null,
            name: "NoSmartWalletAccountSignerFoundError",
            shortMessage: `No signer wallet account found for smart wallet account ${smartWalletAddress}`
        });
    }
};
//#endregion
//#region src/errors/NoWebAuthNSupportError.ts
var NoWebAuthNSupportError = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P"] {
    constructor(){
        super({
            cause: null,
            code: "no_webauthn_support_error",
            docsUrl: null,
            name: "NoWebAuthNSupportError",
            shortMessage: "Browser does not support WebAuthn"
        });
    }
};
//#endregion
//#region src/errors/SimulationFailedError.ts
var SimulationFailedError = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P"] {
    constructor(params){
        super({
            cause: params.cause || null,
            code: "simulation_failed_error",
            docsUrl: null,
            name: "SimulationFailedError",
            shortMessage: params.message
        });
    }
};
//#endregion
//#region src/errors/UnrecognizedNetworkError.ts
var UnrecognizedNetworkError = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P"] {
    constructor({ networkId, originalError, walletProviderKey }){
        const cause = originalError instanceof Error ? originalError : null;
        super({
            cause,
            code: "unrecognized_network",
            docsUrl: null,
            metaMessages: [
                `Wallet provider key: ${walletProviderKey}`
            ],
            name: "UnrecognizedNetworkError",
            shortMessage: `Attempt to switch to unrecognized network of ID ${networkId}. Please enable this network in your dashboard configuration first.`
        });
    }
};
//#endregion
//#region src/errors/UserNotAuthenticatedError.ts
var UserNotAuthenticatedError = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P"] {
    constructor({ shortMessage } = {}){
        super({
            cause: null,
            code: "user_not_authenticated_error",
            docsUrl: null,
            name: "UserNotAuthenticatedError",
            shortMessage: shortMessage ?? "User not authenticated"
        });
    }
};
//#endregion
//#region src/errors/UserRejectedError.ts
var UserRejectedError = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P"] {
    constructor({ action }){
        super({
            cause: null,
            code: "user_rejected",
            docsUrl: null,
            name: "UserRejectedError",
            shortMessage: `User rejected action "${action}"`
        });
    }
};
//#endregion
//#region src/errors/WalletAccountAlreadyVerifiedError.ts
var WalletAccountAlreadyVerifiedError = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P"] {
    constructor(address){
        super({
            cause: null,
            code: "wallet_account_already_verified_error",
            docsUrl: null,
            name: "WalletAccountAlreadyVerifiedError",
            shortMessage: `Wallet account ${address} is already verified`
        });
    }
};
//#endregion
//#region src/errors/WalletAccountNotSelectedError.ts
var WalletAccountNotSelectedError = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P"] {
    expectedAddress;
    selectedAddress;
    constructor(params){
        const currentAccountInfo = params.selectedAddress ? ` (currently ${params.selectedAddress})` : "";
        super({
            cause: null,
            code: "wallet_account_not_selected_error",
            docsUrl: null,
            name: "WalletAccountNotSelected",
            shortMessage: `This wallet only supports signing with its selected account${currentAccountInfo}. Please select account ${params.expectedAddress} in your wallet app and try again`
        });
        this.expectedAddress = params.expectedAddress;
        this.selectedAddress = params.selectedAddress;
    }
};
//#endregion
//#region src/errors/WalletProviderMethodUnavailableError.ts
var WalletProviderMethodUnavailableError = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P"] {
    constructor({ methodName, walletProviderKey }){
        super({
            cause: null,
            code: "wallet_provider_method_unavailable_error",
            docsUrl: null,
            name: "WalletProviderMethodUnavailableError",
            shortMessage: `Wallet provider ${walletProviderKey} does not have ${methodName} available`
        });
    }
};
//#endregion
//#region src/modules/auth/checkStepUpAuth/checkStepUpAuth.ts
const STEP_UP_REQUIRED_DEFAULT = {
    credentials: [],
    isRequired: true
};
/**
* Checks whether step-up authentication is required for a given scope
* and returns the available credentials to satisfy it.
*
* First performs a fast local check — if a valid elevated access token already
* exists for the scope, returns `{ isRequired: false }` immediately without
* an API call.
*
* Otherwise, calls the backend `stepUp/check` endpoint which evaluates
* feature flags, SDK version, MFA settings, and action-based requirements
* to determine if step-up is needed. The response includes the available
* credentials and a recommended default credential.
*
* If the request fails for any reason, defaults to `{ isRequired: true }`
* as a safety measure.
*
* @param params.scope - The scope to check (e.g., 'wallet:export').
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns The step-up check result with `isRequired`, `credentials`, and `defaultCredentialId`.
*
* @example
* ```typescript
* const result = await checkStepUpAuth({ scope: TokenScope.Walletexport });
* if (result.isRequired) {
*   // Show step-up auth UI using result.credentials
* }
* ```
* @instrumented
*/ const checkStepUpAuth = async ({ scope }, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["S"])({
        consume: false,
        scope
    }, client)) return {
        credentials: [],
        isRequired: false
    };
    try {
        const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])({}, client).stepUpCheck({
            environmentId: core.environmentId,
            stepUpCheckRequest: {
                scope
            }
        });
        return {
            credentials: response.credentials ?? [],
            defaultCredentialId: response.defaultCredentialId,
            isRequired: response.isRequired
        };
    } catch  {
        return STEP_UP_REQUIRED_DEFAULT;
    }
};
//#endregion
//#region src/modules/auth/externalAuth/requestExternalAuthElevatedToken/requestExternalAuthElevatedToken.ts
/**
* Requests an elevated access token using an external auth assertion JWT.
*
* The assertion JWT must be signed by the customer's backend using the same key
* registered in the environment's external auth JWKS URL. It must include
* `sub`, `scope`, `jti`, and `exp` claims.
*
* The returned elevated access token is automatically parsed and stored in state,
* and can be retrieved via `getElevatedAccessToken`.
*
* @param params.externalJwt - The assertion JWT signed by the customer's backend.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns A promise that resolves to the assertion response containing the elevated access token.
* @instrumented
*/ const requestExternalAuthElevatedToken = async ({ externalJwt }, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])({}, client).externalAuthVerify({
        environmentId: core.environmentId,
        externalAuthSigninRequest: {
            jwt: externalJwt
        }
    });
    const parsedToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(response.elevatedAccessToken);
    if (parsedToken) {
        const currentTokens = core.state.get().elevatedAccessTokens || [];
        core.state.set({
            elevatedAccessTokens: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["i"])({
                currentTokens,
                newToken: parsedToken
            })
        });
    }
    return response;
};
//#endregion
//#region src/modules/auth/externalAuth/signInWithExternalJwt/signInWithExternalJwt.ts
/**
* Signs in a user using an external JWT token.
*
* This function allows authentication using JWT tokens from external providers,
* enabling integration with custom authentication systems.
*
* @param [params.externalJwt] - Optional external JWT token to authenticate with. Not required when using cookie based auth.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns A promise that resolves to the authentication response from the server.
* @instrumented

* @redact-params
*/ const signInWithExternalJwt = async ({ externalJwt, sessionPublicKey } = {}, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])({}, client).externalAuthSignin({
        environmentId: core.environmentId,
        externalAuthSigninRequest: {
            jwt: externalJwt,
            sessionPublicKey
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["r"])({
        response
    }, client);
    return response;
};
//#endregion
//#region src/modules/auth/passkeys/deletePasskey/deletePasskey.ts
/**
* Deletes a passkey for the current user.
*
* @param params.passkeyId - The unique identifier of the passkey to delete.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns A promise that resolves when the passkey is successfully deleted.
* @instrumented
*/ const deletePasskey = async ({ passkeyId }, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])({
        elevatedAccessTokenScope: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$914$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$TokenScope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenScope"].Credentialunlink,
        includeMfaToken: true
    }, client).deletePasskey({
        deleteUserPasskeyRequest: {
            passkeyId
        },
        environmentId: core.environmentId
    });
};
//#endregion
//#region src/modules/auth/passkeys/getPasskeys/getPasskeys.ts
/**
* Retrieves all passkeys associated with the current user.
*
* This function fetches the list of registered passkeys (WebAuthn credentials)
* that the user can use for multi-factor authentication.
*
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns A promise that resolves to an array of the user's registered passkeys.
* @instrumented
*/ const getPasskeys = async (client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])({}, client).getUserPasskeys({
        environmentId: core.environmentId
    })).passkeys;
};
//#endregion
//#region src/modules/auth/passkeys/getPasskeyRegistrationOptions/getPasskeyRegistrationOptions.ts
/** @not-instrumented */ const getPasskeyRegistrationOptions = async (client)=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])({}, client).getPasskeyRegistrationOptions({
        environmentId: core.environmentId
    });
};
//#endregion
//#region src/modules/auth/passkeys/serverRegisterPasskey/serverRegisterPasskey.ts
/** @not-instrumented */ const serverRegisterPasskey = async ({ registration, createMfaToken }, client)=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])({
        elevatedAccessTokenScope: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$914$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$TokenScope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenScope"].Credentiallink
    }, client).registerPasskey({
        environmentId: core.environmentId,
        passkeyRegisterRequest: {
            ...registration,
            createMfaToken,
            response: {
                ...registration.response,
                clientDataJson: registration.response.clientDataJSON
            }
        }
    });
};
//#endregion
//#region src/modules/auth/passkeys/registerPasskey/registerPasskey.ts
/**
* Registers a new passkey for the current user.
*
* This function creates a new WebAuthn credential that can be used for
* passwordless authentication. The user will be prompted to create a passkey
* using their device's biometric authentication or security key.
*
* @param [params.createMfaToken] - Optional configuration for MFA token creation.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns A promise that resolves to the registration response.
* @throws NoWebAuthNSupportError If WebAuthn is not supported by the browser.
* @instrumented
*/ const registerPasskey = async ({ createMfaToken } = {}, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    if (!core.passkey.isSupported()) throw new NoWebAuthNSupportError();
    const options = await getPasskeyRegistrationOptions(client);
    const response = await serverRegisterPasskey({
        createMfaToken,
        registration: await core.passkey.register({
            optionsJSON: options
        })
    }, client);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["r"])({
        response
    }, client);
    return response;
};
//#endregion
//#region src/modules/auth/passkeys/getPasskeyAuthenticationSignInOptions/getPasskeyAuthenticationSignInOptions.ts
/** @not-instrumented */ const getPasskeyAuthenticationSignInOptions = async ({ relatedOriginRpId } = {}, client)=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])({}, client).getPasskeyAuthenticationSigninOptions({
        environmentId: core.environmentId,
        relatedOriginRpId
    });
};
//#endregion
//#region src/modules/auth/passkeys/serverSigninPasskey/serverSigninPasskey.ts
/** @not-instrumented */ const serverSigninPasskey = async ({ authentication, createMfaToken }, client)=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])({}, client).signinWithPasskey({
        environmentId: core.environmentId,
        passkeyAuthRequest: {
            ...authentication,
            createMfaToken,
            response: {
                ...authentication.response,
                clientDataJson: authentication.response.clientDataJSON
            }
        }
    });
};
//#endregion
//#region src/modules/auth/passkeys/signInWithPasskey/signInWithPasskey.ts
/**
* Signs in the user using a registered passkey.
*
* This function authenticates the user with a previously registered WebAuthn
* credential, providing passwordless authentication using biometrics or
* security keys.
*
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns A promise that resolves to the authentication response.
* @throws NoWebAuthNSupportError If WebAuthn is not supported by the browser.
* @instrumented
*/ const signInWithPasskey = async ({ relatedOriginRpId } = {}, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    if (!core.passkey.isSupported()) throw new NoWebAuthNSupportError();
    const formattedOptions = {
        ...await getPasskeyAuthenticationSignInOptions({
            relatedOriginRpId
        }, client)
    };
    const response = await serverSigninPasskey({
        authentication: await core.passkey.authenticate({
            optionsJSON: formattedOptions
        })
    }, client);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["r"])({
        response
    }, client);
    return response;
};
//#endregion
//#region src/modules/auth/social/getUserSocialAccounts/getUserSocialAccounts.ts
/**
* Retrieves all social accounts associated with the current user.
*
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns An array of `SocialAccount` objects associated with the user.
* @instrumented
*/ const getUserSocialAccounts = (client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const { user } = client;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"])(user, "User is not authenticated");
    return (user.verifiedCredentials.filter((credential)=>credential.format === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$914$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$JwtVerifiedCredentialFormatEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JwtVerifiedCredentialFormatEnum"].Oauth) ?? []).map((credential)=>({
            accountId: credential.oauthAccountId ?? void 0,
            displayName: credential.oauthDisplayName ?? void 0,
            emails: credential.oauthEmails ?? [],
            photos: credential.oauthAccountPhotos ?? [],
            provider: credential.oauthProvider,
            username: credential.oauthUsername ?? void 0,
            verifiedCredentialId: credential.id
        }));
};
//#endregion
//#region src/modules/auth/social/removeDynamicOauthParamsFromUrl/removeDynamicOauthParamsFromUrl.ts
/** @not-instrumented */ const removeDynamicOauthParamsFromUrl = (url)=>{
    const urlObject = new URL(url);
    urlObject.searchParams.delete("dynamicOauthState");
    urlObject.searchParams.delete("dynamicOauthCode");
    return urlObject.toString();
};
//#endregion
//#region src/modules/auth/social/oauth/redirectStateStorageSchema/redirectStateStorageSchema.ts
/** The schema to track the state of the OAuth flow. */ const redirectStateStorageKeySchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getNetworkProviderFromNetworkId$2d$VEDzpV8Z$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["M"])({
    key: "redirectState",
    schema: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        codeVerifier: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])()),
        provider: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enum"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$914$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$ProviderEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderEnum"]),
        state: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])()
    })
});
//#endregion
//#region src/utils/digestSHA256/digestSHA256.ts
/** @not-instrumented */ const digestSHA256 = (str)=>{
    const data = new TextEncoder().encode(str);
    return crypto.subtle.digest("SHA-256", data);
};
//#endregion
//#region src/utils/encodeBase64Url/encodeBase64Url.ts
/**
* Encodes a string to base64url.
*
* @param str - The string to encode as an ArrayBuffer.
* @returns The base64url encoded string.
* @not-instrumented
*/ const encodeBase64Url = (str)=>{
    const numberArray = [];
    new Uint8Array(str).forEach((item)=>numberArray.push(item));
    return btoa(String.fromCharCode.apply(null, numberArray)).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
};
//#endregion
//#region src/modules/auth/social/oauth/authenticateWithSocial/buildOAuthUrl/addOAuthUrlParams/addOAuthUrlParams.ts
const APPLE_RESPONSE_MODE = "form_post";
const APPLE_RESPONSE_TYPE = "code id_token";
/** Helper function to add OAuth URL parameters to a given base URL.  * @not-instrumented
*/ const addOAuthUrlParams = (provider, baseUrl, options = {})=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"])(provider.clientId, "Client ID not found");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"])(provider.provider, "Provider type not found");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"])(provider.redirectUrl, "Redirect URL not found");
    const providerType = provider.provider;
    baseUrl.searchParams.set("client_id", provider.clientId);
    baseUrl.searchParams.set("response_type", "code");
    baseUrl.searchParams.set("redirect_uri", provider.redirectUrl);
    if (providerType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$914$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$ProviderEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderEnum"].Tiktok) {
        baseUrl.searchParams.delete("client_id");
        baseUrl.searchParams.set("client_key", provider.clientId);
    }
    if (providerType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$914$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$ProviderEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderEnum"].Google) {
        baseUrl.searchParams.set("access_type", "offline");
        if (options.isGoogleDriveBackupEnabled) baseUrl.searchParams.set("prompt", "consent");
    }
    if (providerType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$914$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$ProviderEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderEnum"].Apple) {
        baseUrl.searchParams.set("response_mode", APPLE_RESPONSE_MODE);
        baseUrl.searchParams.set("response_type", APPLE_RESPONSE_TYPE);
    }
    if (provider.scopes) baseUrl.searchParams.set("scope", provider.scopes);
    return baseUrl;
};
//#endregion
//#region src/modules/auth/social/oauth/authenticateWithSocial/buildOAuthUrl/getOAuthBaseUrl/getOAuthBaseUrl.ts
/** Helper function to build the OAuth base URL for a given provider.  * @not-instrumented
*/ const getOAuthBaseUrl = (provider)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"])(provider.provider, "Provider type not found");
    const providerType = provider.provider;
    if (providerType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$914$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$ProviderEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderEnum"].Telegram) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"])(provider.authorizationUrl, "Telegram authorization URL not found");
        return new URL(provider.authorizationUrl);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"])(provider.baseAuthUrl, "Base auth URL not found");
    if (providerType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$914$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$ProviderEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderEnum"].Shopify) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"])(provider.shopifyStore, "Shopify store value not found in provider");
        const loginBaseUrl = provider.baseAuthUrl.replace("{{shopifyStore}}", provider.shopifyStore);
        return new URL(loginBaseUrl);
    }
    return new URL(provider.baseAuthUrl);
};
//#endregion
//#region src/modules/auth/social/oauth/authenticateWithSocial/buildOAuthUrl/buildOAuthUrl.ts
const providersRequiringPkce = [
    "twitter",
    "github"
];
/** Helper function to build the OAuth URL for a given provider.  * @not-instrumented
*/ const buildOAuthUrl = async (core, provider)=>{
    const { projectSettings } = core.state.get();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"])(projectSettings, "Project settings not found");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"])(projectSettings.providers, "Project providers not found");
    const socialProvider = projectSettings.providers.find((p)=>p.provider === provider);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"])(socialProvider, `Social provider ${provider} not supported`);
    const isGoogleDriveBackupEnabled = projectSettings.sdk.waas?.backupOptions?.includes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$914$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$WaasBackupOptionsEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WaasBackupOptionsEnum"].GoogleDrive);
    const socialProviderUrl = addOAuthUrlParams(socialProvider, getOAuthBaseUrl(socialProvider), {
        isGoogleDriveBackupEnabled
    });
    const usingPkce = providersRequiringPkce.includes(provider);
    const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["D"])({
        length: 32
    });
    const codeVerifier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["D"])({
        length: 43
    });
    socialProviderUrl.searchParams.set("state", state);
    socialProviderUrl.searchParams.set("response_type", "code");
    if (usingPkce) {
        const digest = await digestSHA256(codeVerifier);
        socialProviderUrl.searchParams.set("code_challenge", encodeBase64Url(digest));
        socialProviderUrl.searchParams.set("code_challenge_method", "S256");
    }
    return {
        codeVerifier: usingPkce ? codeVerifier : void 0,
        state,
        url: socialProviderUrl
    };
};
//#endregion
//#region src/modules/auth/social/oauth/authenticateWithSocial/authenticateWithSocial.ts
/**
* Initiates social authentication by redirecting to the OAuth provider.
*
* This function redirects the user to the specified social provider's
* authorization page to complete OAuth authentication flow.
* After the oauth flow is complete, the user will be redirected back to your app.
* You can then call `detectOAuthRedirect` to check if the user got redirected back to your app due to the oauth flow,
* and finally call `completeSocialAuthentication` to complete the social authentication flow.
*
* @param params.provider - The social provider to authenticate with (e.g., 'google', 'github').
* @param params.redirectUrl - The URL to redirect back to after authentication.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @instrumented
*/ const authenticateWithSocial = async ({ provider, redirectUrl }, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    const apiClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])({}, client);
    await core.initTrack.waitForAll();
    const providerType = provider;
    const { url, state, codeVerifier } = await buildOAuthUrl(core, providerType);
    await apiClient.initAuth({
        environmentId: core.environmentId,
        oauthInitAuthRequest: {
            redirectUrl: removeDynamicOauthParamsFromUrl(redirectUrl),
            state
        },
        providerType
    });
    await core.storage.setItem(redirectStateStorageKeySchema, {
        codeVerifier,
        provider: providerType,
        state
    });
    await core.navigate(url.toString());
};
//#endregion
//#region src/modules/auth/social/oauth/completeSocialAuthentication/completeSocialAuthentication.ts
/**
* Completes the social authentication flow after OAuth redirect.
*
* This function processes the OAuth callback URL with authorization codes
* and completes the user authentication with the social provider.
*
* @param params.url - The callback URL containing OAuth response parameters.
* @param [params.requestedScopes] - Optional scopes to request an elevated access token when verifying (linking) a social account.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns A promise that resolves to the authenticated user or null.
* @throws MissingSocialUrlParamError If required OAuth parameters are missing.
* @throws InvalidRedirectStorageStateError If the stored state doesn't match.
* @instrumented
*/ const completeSocialAuthentication = async ({ url, requestedScopes }, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    const apiClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])({}, client);
    await core.initTrack.waitForAll();
    const dynamicOauthState = url.searchParams.get("dynamicOauthState");
    const dynamicOauthCode = url.searchParams.get("dynamicOauthCode");
    if (!dynamicOauthState) throw new MissingSocialUrlParamError("dynamicOauthState");
    if (!dynamicOauthCode) throw new MissingSocialUrlParamError("dynamicOauthCode");
    const storedSocialRedirectState = await core.storage.getItem(redirectStateStorageKeySchema);
    if (!storedSocialRedirectState) throw new MissingRedirectStorageStateError();
    if (storedSocialRedirectState.state !== dynamicOauthState) throw new InvalidRedirectStorageStateError();
    const { provider, codeVerifier } = storedSocialRedirectState;
    await core.storage.removeItem(redirectStateStorageKeySchema);
    let response;
    if (client.user) response = await apiClient.oauthVerify({
        environmentId: core.environmentId,
        oauthRequest: {
            code: dynamicOauthCode,
            codeVerifier,
            requestedScopes,
            state: dynamicOauthState
        },
        providerType: provider
    });
    else response = await apiClient.oauthSignIn({
        environmentId: core.environmentId,
        oauthRequest: {
            captchaToken: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getNetworkProviderFromNetworkId$2d$VEDzpV8Z$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"])(client),
            code: dynamicOauthCode,
            codeVerifier,
            state: dynamicOauthState
        },
        providerType: provider
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["r"])({
        response
    }, client);
    return response.user;
};
//#endregion
//#region src/modules/auth/social/oauth/detectOAuthRedirect/detectOAuthRedirect.ts
/**
* Detects if the current URL is an OAuth redirect from a social provider.
*
* This function examines the URL parameters to determine if it contains
* OAuth callback data from a social authentication flow.
*
* @param params.url - The URL to check for OAuth redirect parameters.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns A promise that resolves to true if the URL is an OAuth redirect, false otherwise.
* @instrumented
*/ const detectOAuthRedirect = async ({ url }, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    const dynamicOauthState = url.searchParams.get("dynamicOauthState");
    const dynamicOauthCode = url.searchParams.get("dynamicOauthCode");
    if (!dynamicOauthState || !dynamicOauthCode) return false;
    await core.initTrack.waitForAll();
    const storedSocialRedirectState = await core.storage.getItem(redirectStateStorageKeySchema);
    if (!storedSocialRedirectState || storedSocialRedirectState.state !== dynamicOauthState) return false;
    return true;
};
//#endregion
//#region src/modules/wallets/primaryWalletAccount/getPrimaryWalletAccount/getPrimaryWalletAccount.ts
/**
* Get the primary wallet account.
* The primary wallet account is the one that was last selected by the user.
* This information is stored in both unverified and verified wallet accounts.
* This function consolidates this information to determine which wallet was most recently selected.
* @instrumented
*/ const getPrimaryWalletAccount = (client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const sortedLastSelectedWalletAccounts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["y"])(client).filter((walletAccount)=>Boolean(walletAccount.lastSelectedAt)).sort((a, b)=>b.lastSelectedAt.getTime() - a.lastSelectedAt.getTime());
    if (sortedLastSelectedWalletAccounts.length === 0) return null;
    const [primaryWalletAccount] = sortedLastSelectedWalletAccounts;
    return primaryWalletAccount;
};
//#endregion
//#region src/modules/auth/social/oauth/unlinkSocialAccount/unlinkSocialAccount.ts
/**
* Unlinks a social account from the user's account.
*
* @param params.verifiedCredentialId - The verified credential ID of the social account to unlink.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns A promise that resolves to the verify response.
* @instrumented
*/ const unlinkSocialAccount = async ({ verifiedCredentialId }, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    const apiClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])({}, client);
    const walletId = getPrimaryWalletAccount(client)?.verifiedCredentialId?.replace("-zerodev", "");
    const response = await apiClient.verifyUnlink({
        environmentId: core.environmentId,
        verifyUnlinkRequest: {
            verifiedCredentialId,
            walletId: walletId ?? void 0
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["r"])({
        response
    }, client);
    return response;
};
//#endregion
//#region src/modules/balances/getBalances/getBalances.ts
/**
* Retrieves the token balances for a wallet account.
*
* This function fetches the balances of the tokens for the specified wallet account.
*
* @param params.walletAccount - The wallet account to get the balances for.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns A promise that resolves to an array of token balances.
* @not-instrumented
*/ const getBalances = async ({ walletAccount, networkId, includePrices, includeNative, filterSpamTokens, whitelistedContracts, forceRefresh }, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    const apiClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])({}, client);
    if (!networkId) {
        const activeNetworkId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"])({
            walletAccount
        }, client).getActiveNetworkId();
        networkId = Number(activeNetworkId.networkId);
    }
    return await apiClient.getAccountBalances({
        accountAddress: walletAccount.address,
        chainName: walletAccount.chain,
        environmentId: core.environmentId,
        filterSpamTokens,
        forceRefresh,
        includeNative,
        includePrices,
        networkId,
        whitelistedContracts
    });
};
//#endregion
//#region src/modules/balances/getMultichainBalances/getMultichainBalances.ts
/**
* Retrieves token balances across multiple blockchain networks.
*
* This function fetches cryptocurrency and token balances for the user's
* wallet addresses across different chains, networks and addresses specified in the request.
*
* @param params.balanceRequest - The balance request configuration specifying which chains, networks and addresses to query.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns A promise that resolves to the chain balances across multiple networks.
* @instrumented
*/ const getMultichainBalances = async ({ balanceRequest }, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])({}, client).postMultichainAccountBalances({
        environmentId: core.environmentId,
        multichainAccountBalancesRequest: balanceRequest
    })).chainBalances;
};
//#endregion
//#region src/modules/checkout/utils/createCheckoutSessionTokenStorageKey/createCheckoutSessionTokenStorageKey.ts
/** @not-instrumented */ const createCheckoutSessionTokenStorageKey = (transactionId)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getNetworkProviderFromNetworkId$2d$VEDzpV8Z$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["M"])({
        key: `checkoutSessionToken:${transactionId}`,
        schema: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])()
    });
};
//#endregion
//#region src/modules/checkout/utils/createCheckoutApiClient/createCheckoutApiClient.ts
/** @not-instrumented */ const createCheckoutApiClient = async ({ transactionId }, client)=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    const apiClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])({}, client);
    const sessionToken = await core.storage.getItem(createCheckoutSessionTokenStorageKey(transactionId));
    if (!sessionToken) throw new CheckoutSessionTokenMissingError({
        transactionId
    });
    return {
        apiClient,
        environmentId: core.environmentId,
        sessionToken
    };
};
//#endregion
//#region src/modules/checkout/attachCheckoutTransactionSource/attachCheckoutTransactionSource.ts
/**
* Attaches a wallet source to a checkout transaction
*
* @param params AttachCheckoutTransactionSourceParams - The source details to attach.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns The updated checkout transaction
* @instrumented
*/ const attachCheckoutTransactionSource = async ({ fromAddress, fromChainId, fromChainName, transactionId }, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const { apiClient, environmentId, sessionToken } = await createCheckoutApiClient({
        transactionId
    }, client);
    return apiClient.attachSource({
        attachSourceRequest: {
            fromAddress,
            fromChainId,
            fromChainName,
            sourceType: "wallet"
        },
        environmentId,
        transactionId,
        xDynamicCheckoutSessionToken: sessionToken
    });
};
//#endregion
//#region src/modules/checkout/broadcastCheckoutTransaction/broadcastCheckoutTransaction.ts
/**
* Records the on-chain broadcast of a checkout transaction
*
* @param params BroadcastCheckoutTransactionParams - The transaction ID and tx hash.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns The updated checkout transaction
* @instrumented
*/ const broadcastCheckoutTransaction = async ({ transactionId, txHash }, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const { apiClient, environmentId, sessionToken } = await createCheckoutApiClient({
        transactionId
    }, client);
    return apiClient.recordCheckoutBroadcast({
        environmentId,
        recordBroadcastRequest: {
            txHash
        },
        transactionId,
        xDynamicCheckoutSessionToken: sessionToken
    });
};
//#endregion
//#region src/modules/checkout/cancelCheckoutTransaction/cancelCheckoutTransaction.ts
/**
* Cancels a checkout transaction before it has been broadcasted
*
* @param params CancelCheckoutTransactionParams - The transaction to cancel.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns The cancelled checkout transaction
* @instrumented
*/ const cancelCheckoutTransaction = async ({ transactionId }, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const { apiClient, environmentId, sessionToken } = await createCheckoutApiClient({
        transactionId
    }, client);
    const result = await apiClient.cancelCheckoutTransaction({
        environmentId,
        transactionId,
        xDynamicCheckoutSessionToken: sessionToken
    });
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client).storage.removeItem(createCheckoutSessionTokenStorageKey(transactionId));
    return result;
};
//#endregion
//#region src/modules/checkout/getCheckouts/getCheckouts.ts
/** @not-instrumented */ const getCheckouts = async (client)=>{
    const projectSettings = client.projectSettings;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"])(projectSettings, "Project settings are not available");
    return projectSettings.checkouts ?? [];
};
//#endregion
//#region src/modules/checkout/createCheckoutTransaction/createCheckoutTransaction.ts
/**
* Creates a new checkout transaction and stores the session token for subsequent calls
*
* @param params CreateCheckoutTransactionParams - The parameters for the checkout transaction.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns The created transaction with session token
* @instrumented
*/ const createCheckoutTransaction = async (params, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    const apiClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])({}, client);
    const checkouts = await getCheckouts(client);
    const checkoutId = params.checkoutId || checkouts?.[0]?.id;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"])(checkoutId, "No checkout found. Please make sure you have a Checkout setup in the Dashboard.");
    const result = await apiClient.createCheckoutTransaction({
        checkoutId,
        checkoutTransactionCreateRequest: {
            amount: params.amount,
            currency: params.currency,
            expiresIn: params.expiresIn,
            memo: params.memo
        },
        environmentId: core.environmentId
    });
    await core.storage.setItem(createCheckoutSessionTokenStorageKey(result.transaction.id), result.sessionToken);
    return result;
};
//#endregion
//#region src/modules/checkout/getCheckoutTransaction/getCheckoutTransaction.ts
/**
* Fetches the current state of a checkout transaction
*
* @param params GetCheckoutTransactionParams - The parameters for fetching the transaction.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns The checkout transaction
* @instrumented
*/ const getCheckoutTransaction = async ({ transactionId }, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])({}, client).getCheckoutTransaction({
        environmentId: core.environmentId,
        transactionId
    });
};
//#endregion
//#region src/modules/checkout/getCheckoutTransactionQuote/getCheckoutTransactionQuote.ts
/**
* Fetches a quote for a checkout transaction
*
* @param params GetCheckoutTransactionQuoteParams - The quote parameters.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns The updated checkout transaction with quote data
* @instrumented
*/ const getCheckoutTransactionQuote = async ({ fromTokenAddress, slippage, transactionId }, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const { apiClient, environmentId, sessionToken } = await createCheckoutApiClient({
        transactionId
    }, client);
    return apiClient.quoteCheckoutTransaction({
        environmentId,
        quoteRequest: {
            fromTokenAddress,
            slippage
        },
        transactionId,
        xDynamicCheckoutSessionToken: sessionToken
    });
};
//#endregion
//#region src/modules/checkout/prepareCheckoutTransaction/prepareCheckoutTransaction.ts
/**
* Prepares a checkout transaction for signing
* This should be called immediately before triggering the transaction signing.
* It will confirm the quote is still valid, the risk state is cleared, and the transaction is ready to be signed.
*
* @param params PrepareCheckoutTransactionParams - The transaction to prepare.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns The updated checkout transaction
* @instrumented
*/ const prepareCheckoutTransaction = async ({ transactionId }, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const { apiClient, environmentId, sessionToken } = await createCheckoutApiClient({
        transactionId
    }, client);
    return apiClient.prepareCheckoutTransaction({
        environmentId,
        transactionId,
        xDynamicCheckoutSessionToken: sessionToken
    });
};
//#endregion
//#region src/modules/wallets/utils/assertWalletProviderMethodDefined/assertWalletProviderMethodDefined.ts
/**
* Asserts that a specific wallet provider method is defined, throwing an error if it's not.
* This function acts as a type guard, narrowing the type to ensure the method exists.
*
* @template T - The specific wallet provider method key being checked
* @param walletProvider - The wallet provider object to check
* @param methodName - The name of the method to check for availability
* @throws Throws WalletProviderMethodUnavailableError if the method is not defined
* @example
* ```typescript
* const walletProvider: WalletProvider = getWalletProvider();
* assertWalletProviderMethodDefined(walletProvider, 'connect');
* // walletProvider.connect is now guaranteed to be defined
* await walletProvider.connect();
* ```
*/ function assertWalletProviderMethodDefined(walletProvider, methodName) {
    if (walletProvider[methodName] === void 0) throw new WalletProviderMethodUnavailableError({
        methodName,
        walletProviderKey: walletProvider.key
    });
}
//#endregion
//#region src/modules/swap/constants.ts
const SWAP_SUPPORTED_CHAINS = [
    "BTC",
    "EVM",
    "SOL",
    "SUI",
    "TRON"
];
//#endregion
//#region src/modules/swap/executeSwapTransaction/executeSwapTransaction.ts
/**
* Executes a swap transaction
*
* @param params ExecuteSwapTransactionParams - The parameters for the swap transaction.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns The transaction hash.
* @instrumented
*/ const executeSwapTransaction = async ({ walletAccount, signingPayload, onStepChange }, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    if (!SWAP_SUPPORTED_CHAINS.includes(walletAccount.chain)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"](`Chain ${walletAccount.chain} is not supported for swap transactions`);
    const walletProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"])({
        walletAccount
    }, client);
    assertWalletProviderMethodDefined(walletProvider, "executeSwapTransaction");
    const requiredNetworkId = signingPayload.chainId;
    if (requiredNetworkId && walletProvider.switchActiveNetwork) {
        const { networkId: activeNetworkId } = await walletProvider.getActiveNetworkId();
        if (activeNetworkId !== requiredNetworkId) await walletProvider.switchActiveNetwork({
            networkId: requiredNetworkId
        });
    }
    const { transactionHash } = await walletProvider.executeSwapTransaction({
        onStepChange,
        signingPayload,
        walletAccount
    });
    return {
        transactionHash
    };
};
//#endregion
//#region src/modules/checkout/submitCheckoutTransaction/submitCheckoutTransaction.ts
/**
* Prepares, signs, and broadcasts a checkout transaction in one call.
*
* Orchestrates the full submission flow:
* 1. Calls prepareCheckoutTransaction to advance to signing state and lock the quote
* 2. Ensures the wallet is on the correct network for the transaction
* 3. Delegates on-chain signing to the wallet provider's executeSwapTransaction method
* 4. Calls broadcastCheckoutTransaction with the resulting txHash
*
* @param params SubmitCheckoutTransactionParams - The transaction ID, wallet account, and optional step callback.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns The broadcasted checkout transaction
* @instrumented
*/ const submitCheckoutTransaction = async ({ onStepChange, transactionId, walletAccount }, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const prepared = await prepareCheckoutTransaction({
        transactionId
    }, client);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"])(prepared.signingPayload, "No signing payload returned from prepare — quote may be missing transaction data");
    const { transactionHash } = await executeSwapTransaction({
        onStepChange,
        signingPayload: prepared.signingPayload,
        walletAccount
    });
    return broadcastCheckoutTransaction({
        transactionId,
        txHash: transactionHash
    }, client);
};
//#endregion
//#region src/modules/deviceRegistration/completeDeviceRegistration/completeDeviceRegistration.ts
const DEVICE_REGISTRATION_TOKEN_HEADER = "x-dynamic-device-registration-token";
/** @instrumented */ const completeDeviceRegistration = async ({ deviceToken }, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"])(deviceToken, "deviceToken is required");
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])({
        headers: {
            [DEVICE_REGISTRATION_TOKEN_HEADER]: deviceToken
        }
    }, client).deviceRegistration({
        environmentId: core.environmentId
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["r"])({
        response
    }, client);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["E"])({
        event: "deviceRegistrationCompleted"
    }, client);
    return response;
};
//#endregion
//#region src/modules/deviceRegistration/getDeviceRegistrationTokenFromUrl/getDeviceRegistrationTokenFromUrl.ts
/**
* Safely extracts the device token from a device registration redirect URL.
*
* This function validates that the URL is a valid device registration redirect
* then extracts and returns the deviceToken.
*
* @returns The device token as a string if valid.
* @throws InvalidDeviceRegistrationRedirectError If the URL is not a valid device registration redirect.
* @instrumented
*/ const getDeviceRegistrationTokenFromUrl = ({ url })=>{
    let urlObject;
    try {
        urlObject = new URL(url);
    } catch  {
        throw new InvalidDeviceRegistrationRedirectError();
    }
    const deviceRegistrationToken = urlObject.searchParams.get("deviceRegistrationToken");
    if (!deviceRegistrationToken || deviceRegistrationToken.trim() === "") throw new InvalidDeviceRegistrationRedirectError();
    return deviceRegistrationToken;
};
//#endregion
//#region src/modules/deviceRegistration/detectDeviceRegistrationRedirect/detectDeviceRegistrationRedirect.ts
/**
* Detects if the current URL is a device registration redirect.
*
* This function uses getDeviceRegistrationTokenFromUrl to validate the URL and determine
* if it contains device registration redirect data from a device authentication flow.
*
* @returns True if the URL is a device registration redirect, false otherwise.
* @instrumented
*/ const detectDeviceRegistrationRedirect = ({ url })=>{
    try {
        getDeviceRegistrationTokenFromUrl({
            url
        });
        return true;
    } catch  {
        return false;
    }
};
//#endregion
//#region src/modules/deviceRegistration/getRegisteredDevices/getRegisteredDevices.ts
/** @instrumented */ const getRegisteredDevices = async (client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    const apiClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])({}, client);
    try {
        return (await apiClient.listDeviceRegistrations({
            environmentId: core.environmentId
        })).deviceRegistrations;
    } catch (error) {
        /**
		* The API will return 401 when no devices are registered when there are no
		* devices registered. We need to handle this case gracefully.
		*/ if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"]) return [];
        throw error;
    }
};
//#endregion
//#region src/modules/deviceRegistration/isDeviceRegistrationRequired/isDeviceRegistrationRequired.ts
/**
* Checks if device registration is required for the given user.
*
* This function determines if the user has the deviceRegistration
* scope, indicating that device registration is required.
*
* @param user - The user to check.
* @returns True if device registration is required, false otherwise.
* @not-instrumented
*/ const isDeviceRegistrationRequired = (user)=>Boolean(user.scope?.includes("device:register"));
//#endregion
//#region src/modules/deviceRegistration/revokeAllRegisteredDevices/revokeAllRegisteredDevices.ts
/** @instrumented */ const revokeAllRegisteredDevices = async (client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])({}, client).deleteAllDeviceRegistrations({
        environmentId: core.environmentId
    });
    await logout(client);
};
//#endregion
//#region src/modules/deviceRegistration/revokeRegisteredDevice/revokeRegisteredDevice.ts
/** @instrumented */ const revokeRegisteredDevice = async ({ deviceRegistrationId }, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"])(deviceRegistrationId, "deviceRegistrationId is required");
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    if ((await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])({}, client).deleteDeviceRegistration({
        deviceRegistrationId,
        environmentId: core.environmentId
    })).currentDeviceRevoked) await logout(client);
};
//#endregion
//#region src/modules/funding/coinbase/addCoinbaseOnrampOrderEventListener/addCoinbaseOnrampOrderEventListener.ts
/**
* Adds a listener for Coinbase onramp order events.
*
* @param params.listener - The listener function to call when an event is received.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns A function to remove the listener.
* @throws {ValueMustBeDefinedError} If the window is not available.
* @docs https://docs.cdp.coinbase.com/onramp-&-offramp/onramp-apis/apple-pay-onramp-api#events-names
* @instrumented
*/ const addCoinbaseOnrampOrderEventListener = ({ listener }, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    if (typeof window === "undefined") throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["E"]("Window is not available to listen for Coinbase onramp order events");
    const handleMessageEvent = (event)=>{
        if (event.origin !== "https://pay.coinbase.com") return;
        core.logger.debug("[addCoinbaseOnrampOrderEventListener] pay.coinbase.com event received", {
            event
        });
        try {
            const coinbaseOnrampOrderEventData = JSON.parse(event.data);
            if (!coinbaseOnrampOrderEventData.eventName?.startsWith("onramp_api.")) return;
            listener({
                data: coinbaseOnrampOrderEventData.data,
                eventName: coinbaseOnrampOrderEventData.eventName
            });
        } catch (error) {
            core.logger.debug("[addCoinbaseOnrampOrderEventListener] Failed to parse Coinbase onramp order event data", {
                error
            });
        }
    };
    window.addEventListener("message", handleMessageEvent);
    return ()=>{
        window.removeEventListener("message", handleMessageEvent);
    };
};
//#endregion
//#region src/modules/funding/coinbase/getMissingVerificationForCoinbaseOnrampOrder/getMissingVerificationForCoinbaseOnrampOrder.ts
/**
* This function is used to get a list of fields that are missing verification for a Coinbase onramp order
*
* - If the user is missing information for an email or phone number, the field will be returned with the error code MISSING_INFORMATION
* - If the user is missing verification for an email or phone number, the field will be returned with the error code MISSING_VERIFICATION
*   and the existing unverified email or phone number will be included in the data field.
* - If the user's phone number has not been verified in the last 60 days, the field will be returned with the error code VERIFICATION_EXPIRED
*   and the existing phone number will be included in the data field.
*
* @param params.paymentMethod - The payment method that will be used to create the onramp order
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns FieldMissingVerificationForCoinbaseOnramp[] - An array of fields that are missing verification for a Coinbase onramp order
* @throws {InvalidParamError} - If the payment method is not valid
* @throws {ValueMustBeDefinedError} - If the user is not authenticated
* @instrumented
*/ const getMissingVerificationForCoinbaseOnrampOrder = ({ paymentMethod }, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    if (paymentMethod !== "GUEST_CHECKOUT_APPLE_PAY") throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"](`Invalid payment method: ${paymentMethod}`);
    const { user } = client;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"])(user, "User is not authenticated");
    const fieldsMissingVerification = [];
    const emailVerifiedCredential = user.verifiedCredentials.find((credential)=>credential.format === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$914$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$JwtVerifiedCredentialFormatEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JwtVerifiedCredentialFormatEnum"].Email);
    if (!user.email) fieldsMissingVerification.push({
        errorCode: "MISSING_INFORMATION",
        field: "email"
    });
    else if (!emailVerifiedCredential) fieldsMissingVerification.push({
        data: user.email,
        errorCode: "MISSING_VERIFICATION",
        field: "email"
    });
    const phoneVerifiedCredential = user.verifiedCredentials.find((credential)=>credential.format === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$914$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$JwtVerifiedCredentialFormatEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JwtVerifiedCredentialFormatEnum"].PhoneNumber);
    const phoneNumberVerifiedInPast60Days = phoneVerifiedCredential?.verifiedAt && phoneVerifiedCredential.verifiedAt >= /* @__PURE__ */ new Date(Date.now() - 1440 * 60 * 60 * 1e3);
    if (!user.phoneNumber) fieldsMissingVerification.push({
        errorCode: "MISSING_INFORMATION",
        field: "phoneNumber"
    });
    else if (!phoneVerifiedCredential) fieldsMissingVerification.push({
        data: user.phoneNumber,
        errorCode: "MISSING_VERIFICATION",
        field: "phoneNumber"
    });
    else if (!phoneNumberVerifiedInPast60Days) fieldsMissingVerification.push({
        data: user.phoneNumber,
        errorCode: "VERIFICATION_EXPIRED",
        field: "phoneNumber"
    });
    return fieldsMissingVerification;
};
//#endregion
//#region src/modules/funding/coinbase/utils/validateUserCredentialsForCoinbaseOnrampOrder/validateUserCredentialsForCoinbaseOnrampOrder.ts
/** @not-instrumented */ const validateUserCredentialsForCoinbaseOnrampOrder = (client)=>{
    const { user } = client;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"])(user, "User is not authenticated");
    const fieldsMissingVerification = getMissingVerificationForCoinbaseOnrampOrder({
        paymentMethod: "GUEST_CHECKOUT_APPLE_PAY"
    }, client);
    if (fieldsMissingVerification.find((field)=>field.field === "email")) throw new MissingUserVerificationError({
        informationToVerify: "email",
        message: "User must have a verified email to create a Coinbase onramp order"
    });
    const missingPhoneNumberVerification = fieldsMissingVerification.find((field)=>field.field === "phoneNumber");
    if (missingPhoneNumberVerification && missingPhoneNumberVerification.errorCode !== "VERIFICATION_EXPIRED") throw new MissingUserVerificationError({
        informationToVerify: "phoneNumber",
        message: "User must have a verified phone number to create a Coinbase onramp order"
    });
    if (missingPhoneNumberVerification && missingPhoneNumberVerification.errorCode === "VERIFICATION_EXPIRED") throw new MissingUserVerificationError({
        informationToVerify: "phoneNumber",
        message: "The user's phone number has not been verified in the last 60 days. Please re-verify the user's phone number"
    });
    return user;
};
//#endregion
//#region src/modules/funding/coinbase/createCoinbaseOnrampOrder/createCoinbaseOnrampOrder.ts
/**
* Creates a Coinbase onramp order
*
* @param orderParams CoinbaseCreateOnrampOrderRequest - The parameters for the onramp order.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns The created order
* @throws {MissingUserVerificationError} If the user is missing verification for email or phone
* @instrumented
*/ const createCoinbaseOnrampOrder = async (orderParams, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const user = validateUserCredentialsForCoinbaseOnrampOrder(client);
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    const apiClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])({
        includeMfaToken: true
    }, client);
    const { isSandbox, ...restOrderParams } = orderParams;
    const orderResponse = await apiClient.createCoinbaseOnrampOrder({
        coinbaseOnrampOrderCreateRequest: {
            ...restOrderParams,
            partnerUserRef: orderParams.partnerUserRef ?? (isSandbox ? `sandbox-${user.id}` : user.id),
            paymentMethod: orderParams.paymentMethod
        },
        environmentId: core.environmentId
    });
    if (!isSandbox || !orderResponse.paymentLink) return orderResponse;
    return {
        ...orderResponse,
        paymentLink: {
            ...orderResponse.paymentLink,
            url: `${orderResponse.paymentLink.url}&useApplePaySandbox=true`
        }
    };
};
//#endregion
//#region src/modules/funding/coinbase/getCoinbaseBuyUrl/getCoinbaseBuyUrl.ts
/**
* Gets a Coinbase buy URL
*
* @param buyUrlParams CoinbaseOnrampGetBuyUrlRequest - The parameters for the buy URL.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns an object containing the buy URL
* @instrumented
*/ const getCoinbaseBuyUrl = async (buyUrlParams, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])({
        includeMfaToken: true
    }, client).generateCoinbaseOnrampBuyUrl({
        coinbaseOnrampGetBuyUrlRequest: buyUrlParams,
        environmentId: core.environmentId
    });
};
//#endregion
//#region src/modules/funding/cryptoDotCom/createCryptoDotComPayment/createCryptoDotComPayment.ts
/**
* Creates a crypto.com payment
*
* @param paymentParams CryptoDotComPaymentCreateRequest - The parameters for the payment.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns The created payment
* @instrumented
*/ const createCryptoDotComPayment = async (paymentParams, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])({
        includeMfaToken: true
    }, client).createCryptoDotComPayment({
        cryptoDotComPaymentCreateRequest: {
            ...paymentParams,
            chain: paymentParams.chain
        },
        environmentId: core.environmentId
    });
};
//#endregion
//#region src/modules/funding/kraken/createKrakenExchangeTransfer/createKrakenExchangeTransfer.ts
/**
* Creates a Kraken exchange transfer to send crypto from a Kraken account to a whitelisted address
*
* @param transferParams - The parameters for the transfer including accountId
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns The created transfer
* @not-instrumented
*/ const createKrakenExchangeTransfer = async (transferParams, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    const apiClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])({
        includeMfaToken: true
    }, client);
    const { accountId, ...createExchangeTransferRequest } = transferParams;
    return await apiClient.postExchangeAccountTransfer({
        accountId,
        createExchangeTransferRequest,
        environmentId: core.environmentId,
        exchangeKey: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$914$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$ExchangeKeyEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExchangeKeyEnum"].Kraken
    });
};
//#endregion
//#region src/modules/funding/kraken/getKrakenAccounts/getKrakenAccounts.ts
/**
* Gets the Kraken accounts (balances) for the authenticated user
*
* @param [params] GetKrakenAccountsParams - Optional filters for the accounts.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns Array of Kraken accounts with balances
* @not-instrumented
*/ const getKrakenAccounts = async (params, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])({
        includeMfaToken: true
    }, client).getUserAccounts({
        chainName: params?.chainName,
        environmentId: core.environmentId,
        exchangeKey: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$914$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$ExchangeKeyEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExchangeKeyEnum"].Kraken,
        networkId: params?.networkId
    });
};
//#endregion
//#region src/modules/funding/kraken/getKrakenWhitelistedAddresses/getKrakenWhitelistedAddresses.ts
/**
* Gets the whitelisted addresses for Kraken transfers
*
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns Transfer destinations response with whitelisted addresses
* @instrumented
*/ const getKrakenWhitelistedAddresses = async (client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])({
        includeMfaToken: true
    }, client).getExchangeTransferDestinations({
        environmentId: core.environmentId,
        exchangeKey: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$914$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$ExchangeKeyEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExchangeKeyEnum"].Kraken
    });
};
//#endregion
//#region src/modules/initializeClient/waitForClientInitialized/waitForClientInitialized.ts
/**
* Allows waiting until all modules of the client have been properly initialized
* and are ready for use.
*
* @returns a promise that resolves once the client is fully initialized.
* @instrumented
*/ const waitForClientInitialized = async (client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client).initTrack.waitForAll();
};
//#endregion
//#region src/modules/instrumentation/setInstrumentationEnabled/setInstrumentationEnabled.ts
/**
* Enables or disables event collection for the client's instrumentation service.
*
* When enabled, events are forwarded to the configured transport on every
* instrumented function call. When disabled, instrumented functions run
* normally but emit no telemetry.
* @instrumented
*/ const setInstrumentationEnabled = (enabled, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client).instrumentation.setEnabled(enabled);
};
//#endregion
//#region src/modules/legacyWalletBook/getWalletBookCdnUrl/getWalletBookCdnUrl.ts
/**
* Default CDN URL for the wallet book.
* @not-instrumented
*/ const DEFAULT_WALLET_BOOK_CDN_URL = "https://dynamic-static-assets.com/wallet-book/v1/stable/wallet-book.json";
/**
* Gets the wallet book CDN URL from environment variables with fallback to default.
*
* Checks for environment variables in the following order:
* 1. WALLET_BOOK_CDN_URL
* 2. NEXT_PUBLIC_WALLET_BOOK_CDN_URL
* 4. Default CDN URL
*
* @returns The wallet book CDN URL to use.
* @not-instrumented
*/ const getWalletBookCdnUrl = ()=>{
    if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env) {
        const envVar = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.WALLET_BOOK_CDN_URL || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_WALLET_BOOK_CDN_URL;
        if (envVar) return envVar;
    }
    return DEFAULT_WALLET_BOOK_CDN_URL;
};
//#endregion
//#region src/modules/legacyWalletBook/fetchLegacyWalletBook/fetchWithTimeout/fetchWithTimeout.ts
/**
* The timeout for each fetch attempt in milliseconds.
* @not-instrumented
*/ const FETCH_TIMEOUT_MS = 3e4;
/**
* Fetches the wallet book from the CDN endpoint with timeout handling.
*
* @param client - The Dynamic client instance.
* @returns A promise that resolves to the wallet book data.
* @not-instrumented
*/ const fetchWithTimeout = async (client)=>{
    const controller = new AbortController();
    const timeoutId = setTimeout(()=>controller.abort(), FETCH_TIMEOUT_MS);
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    try {
        const response = await core.fetch(getWalletBookCdnUrl(), {
            signal: controller.signal
        });
        if (!response.ok) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["x"](`Failed to fetch wallet book: ${response.status} ${response.statusText}`, "wallet_book_fetch_error", response.status);
        return await response.json();
    } finally{
        clearTimeout(timeoutId);
    }
};
//#endregion
//#region src/modules/legacyWalletBook/fetchLegacyWalletBook/walletBookCacheStorageKeySchema.ts
/**
* The schema to store the cached wallet book data.
*/ const walletBookCacheStorageKeySchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getNetworkProviderFromNetworkId$2d$VEDzpV8Z$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["M"])({
    key: "legacyWalletBookCache",
    schema: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        groups: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["record"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["any"])()),
        wallets: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["record"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["any"])())
    })
});
//#endregion
//#region src/modules/legacyWalletBook/fetchLegacyWalletBook/fetchLegacyWalletBook.ts
/**
* The maximum number of retry attempts.
* @not-instrumented
*/ const MAX_RETRIES = 3;
/**
* The delay between retries in milliseconds.
*/ const RETRY_DELAY_MS = 100;
/**
* Fetches the legacy wallet book from Dynamic's CDN endpoint.
*
* This function implements a two-tier fallback strategy:
* 1. Primary: Fetch from CDN endpoint (with retries)
* 2. Secondary: Use cached version from localStorage if available
*
* @param client - The Dynamic client instance.
* @returns A promise that resolves to the wallet book data.
* @throws If both CDN fetch and cache retrieval fail.
* @not-instrumented
*/ const fetchLegacyWalletBook = async (client)=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    core.logger.debug("[fetchLegacyWalletBook] Fetching wallet book...");
    try {
        const walletBook = await retryOnFail({
            delay: RETRY_DELAY_MS,
            fn: async ()=>fetchWithTimeout(client),
            maxRetries: MAX_RETRIES
        });
        await core.storage.setItem(walletBookCacheStorageKeySchema, walletBook);
        core.logger.debug("[fetchLegacyWalletBook] Successfully fetched wallet book from CDN");
        return walletBook;
    } catch (error) {
        core.logger.debug("[fetchLegacyWalletBook] Failed to fetch from CDN, trying cache...", error);
        const cachedWalletBook = await core.storage.getItem(walletBookCacheStorageKeySchema);
        if (cachedWalletBook) {
            core.logger.debug("[fetchLegacyWalletBook] Using cached wallet book");
            return cachedWalletBook;
        }
        core.logger.debug("[fetchLegacyWalletBook] Failed to fetch from CDN and no cache available");
        throw error;
    }
};
//#endregion
//#region src/modules/legacyWalletBook/getWalletConnectCatalog/shouldFilterWallet/shouldFilterWallet.ts
/**
* Embedded wallet keys that should be filtered out from the WalletConnect catalog.
* These wallets are not meant to be displayed in wallet selection lists.
* @not-instrumented
*/ const EMBEDDED_WALLET_KEYS = [
    "magicemailotp",
    "magiclink",
    "magicsocial",
    "turnkey",
    "turnkeyhd",
    "zerodev",
    "dynamicwaas",
    "coinbasempc",
    "mpcvault",
    "mpcwallet"
];
/**
* Checks if a wallet should be filtered out from the WalletConnect catalog.
*
* @param walletKey - The wallet key identifier.
* @param wallet - The wallet schema to check.
* @returns True if the wallet should be filtered out, false otherwise.
* @not-instrumented
*/ const shouldFilterWallet = (walletKey, wallet)=>{
    if (EMBEDDED_WALLET_KEYS.includes(walletKey)) return true;
    if (!wallet.walletConnect || !wallet.walletConnect.sdks.includes("sign_v2")) return true;
    const hasInjectedConfig = wallet.injectedConfig && wallet.injectedConfig.length > 0;
    const hasMobileLinks = Boolean(wallet.mobile?.androidId || wallet.mobile?.iosId || wallet.mobile?.native || wallet.mobile?.universal);
    const hasDesktopLinks = Boolean(wallet.desktop?.chromeId || wallet.desktop?.edgeId || wallet.desktop?.firefoxId || wallet.desktop?.operaId || wallet.desktop?.safariId || wallet.desktop?.universal);
    if (hasInjectedConfig && !hasMobileLinks && !hasDesktopLinks) return true;
    return false;
};
//#endregion
//#region src/modules/legacyWalletBook/getSpriteUrl/getSpriteUrl.ts
/**
* Gets the sprite URL for a given sprite ID.
*
* @param params.spriteId - The sprite identifier from the wallet book.
* @returns The full URL to the sprite icon
* @not-instrumented
*/ const getSpriteUrl = ({ spriteId })=>`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]}#${spriteId}`;
//#endregion
//#region src/modules/legacyWalletBook/getWalletConnectCatalog/transformGroup/transformGroup.ts
/**
* Transforms a wallet group schema into a WalletConnect catalog group.
* @not-instrumented
*/ const transformGroup = ({ group })=>{
    const spriteId = group.brand?.spriteId ?? "";
    return {
        key: group.key,
        name: group.name,
        primaryColor: group.brand?.primaryColor,
        spriteUrl: spriteId ? getSpriteUrl({
            spriteId
        }) : ""
    };
};
//#endregion
//#region src/modules/legacyWalletBook/getWalletConnectCatalog/getChainFromWalletSchema/getChainFromWalletSchema.ts
/**
* Maps wallet book injected config chain identifiers to Chain type.
* @not-instrumented
*/ const INJECTED_CHAIN_TO_CHAIN_MAP = {
    algo: "ALGO",
    aptos: "APTOS",
    bitcoin: "BTC",
    btc: "BTC",
    cosmos: "COSMOS",
    eclipse: "ECLIPSE",
    evm: "EVM",
    flow: "FLOW",
    sol: "SOL",
    spark: "SPARK",
    starknet: "STARK",
    sui: "SUI",
    ton: "TON",
    tron: "TRON"
};
/**
* Extracts the chain prefix from a chain identifier string.
* For example, "eip155:1" -> "eip155", "solana:..." -> "solana"
*/ const extractChainPrefix = ({ chainIdentifier })=>{
    const colonIndex = chainIdentifier.indexOf(":");
    if (colonIndex === -1) return chainIdentifier;
    return chainIdentifier.substring(0, colonIndex);
};
/**
* Maps chain name patterns found in wallet keys to Chain type.
* These are common suffixes or embedded chain identifiers in wallet keys.
*/ const WALLET_KEY_CHAIN_PATTERNS = [
    {
        chain: "SOL",
        pattern: "sol"
    },
    {
        chain: "SOL",
        pattern: "solana"
    },
    {
        chain: "BTC",
        pattern: "btc"
    },
    {
        chain: "BTC",
        pattern: "bitcoin"
    },
    {
        chain: "STARK",
        pattern: "stark"
    },
    {
        chain: "STARK",
        pattern: "starknet"
    },
    {
        chain: "SUI",
        pattern: "sui"
    },
    {
        chain: "APTOS",
        pattern: "aptos"
    },
    {
        chain: "COSMOS",
        pattern: "cosmos"
    },
    {
        chain: "FLOW",
        pattern: "flow"
    },
    {
        chain: "ALGO",
        pattern: "algo"
    },
    {
        chain: "TRON",
        pattern: "tron"
    },
    {
        chain: "TON",
        pattern: "ton"
    },
    {
        chain: "SPARK",
        pattern: "spark"
    },
    {
        chain: "ECLIPSE",
        pattern: "eclipse"
    }
];
/**
* Attempts to extract the chain from a wallet key by looking for embedded chain identifiers.
*
* @param params.walletKey - The wallet key identifier.
* @returns The chain type if found, undefined otherwise.
*/ const getChainFromWalletKey = ({ walletKey })=>{
    const lowerKey = walletKey.toLowerCase();
    for (const { chain, pattern } of WALLET_KEY_CHAIN_PATTERNS)if (lowerKey.includes(pattern)) return chain;
};
/**
* Gets the chain from a wallet book entry.
* Checks injectedConfig first, then falls back to the chains array, then the wallet key.
* If no chain can be determined, defaults to EVM.
*
* @param params.wallet - The wallet schema from the wallet book.
* @param params.walletKey - The wallet key identifier (optional, used as last resort fallback).
* @returns The chain type, defaults to EVM if no chain can be determined.
* @not-instrumented
*/ const getChainFromWalletSchema = ({ wallet, walletKey })=>{
    if (wallet.injectedConfig && wallet.injectedConfig.length > 0) {
        const injectedChain = wallet.injectedConfig[0].chain?.toLowerCase();
        if (injectedChain && INJECTED_CHAIN_TO_CHAIN_MAP[injectedChain]) return INJECTED_CHAIN_TO_CHAIN_MAP[injectedChain];
    }
    if (wallet.chains && wallet.chains.length > 0) {
        const firstChain = wallet.chains[0];
        const chainPrefix = extractChainPrefix({
            chainIdentifier: firstChain
        });
        try {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["s"])(chainPrefix);
        } catch  {}
    }
    if (walletKey) {
        const chainFromKey = getChainFromWalletKey({
            walletKey
        });
        if (chainFromKey) return chainFromKey;
    }
    return "EVM";
};
//#endregion
//#region src/modules/legacyWalletBook/getWalletConnectCatalog/transformWallet/transformWallet.ts
/**
* Transforms a wallet schema into a WalletConnect catalog wallet entry.
* @not-instrumented
*/ const transformWallet = ({ wallet, walletKey })=>{
    const spriteId = wallet.brand?.spriteId ?? "";
    const androidId = wallet.mobile?.androidId;
    const iosId = wallet.mobile?.iosId;
    return {
        chain: getChainFromWalletSchema({
            wallet,
            walletKey
        }),
        deeplinks: {
            native: wallet.mobile?.native,
            universal: wallet.mobile?.universal
        },
        downloadLinks: {
            androidUrl: androidId ? `https://play.google.com/store/apps/details?id=${androidId}` : void 0,
            iosUrl: iosId ? `https://apps.apple.com/app/${iosId}` : void 0
        },
        groupId: wallet.group,
        name: wallet.name,
        primaryColor: wallet.brand?.primaryColor,
        spriteUrl: spriteId ? getSpriteUrl({
            spriteId
        }) : ""
    };
};
//#endregion
//#region src/modules/legacyWalletBook/getWalletConnectCatalog/transformWalletBook/transformWalletBook.ts
/**
* Transforms the legacy wallet book into a WalletConnect catalog structure.
* Filters out embedded wallets and injected-only wallets.
* @not-instrumented
*/ const transformWalletBook = ({ walletBook })=>{
    const groups = {};
    for (const [groupKey, group] of Object.entries(walletBook.groups))groups[groupKey] = transformGroup({
        group
    });
    const wallets = {};
    for (const [walletKey, wallet] of Object.entries(walletBook.wallets)){
        if (shouldFilterWallet(walletKey, wallet)) continue;
        wallets[walletKey] = transformWallet({
            wallet,
            walletKey
        });
    }
    return {
        groups,
        wallets
    };
};
//#endregion
//#region src/modules/legacyWalletBook/getWalletConnectCatalog/getWalletConnectCatalog.ts
/**
* Retrieves the WalletConnect catalog from Dynamic's wallet book.
*
* This function fetches the wallet book and returns a WalletConnect catalog structure
* that can be used for displaying wallet information and performing deep links for mobile wallet connections.
*
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns A promise that resolves to the WalletConnect catalog containing groups and wallets.
* @throws If unable to fetch the wallet book from the API (when both CDN fetch and cache retrieval fail).
* @instrumented
*/ const getWalletConnectCatalog = async (client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    return transformWalletBook({
        walletBook: await fetchLegacyWalletBook(client)
    });
};
//#endregion
//#region src/modules/wallets/walletProvider/extractChainFromNormalizedName/extractChainFromNormalizedName.ts
/**
* Extracts the chain from a normalized wallet name with chain suffix.
* The chain is appended in lowercase at the end (e.g., "metamaskevm" -> "EVM").
*
* @param params.normalizedWalletNameWithChain - The normalized wallet name with chain suffix.
* @returns The chain if found, undefined otherwise.
* @not-instrumented
*/ const extractChainFromNormalizedName = ({ normalizedWalletNameWithChain })=>{
    const lowerName = normalizedWalletNameWithChain.toLowerCase();
    const chainSuffixes = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"]).map((chain)=>chain.toLowerCase()).sort((a, b)=>b.length - a.length);
    for (const suffix of chainSuffixes)if (lowerName.endsWith(suffix)) return suffix.toUpperCase();
};
//#endregion
//#region src/modules/legacyWalletBook/getWalletConnectCatalogWalletByWalletProviderKey/getWalletConnectCatalogWalletByWalletProviderKey.ts
/**
* Gets the WalletConnect catalog wallet entry for a given wallet provider key.
*
* This function extracts the wallet name and chain from the wallet provider key and matches it
* against the WalletConnect catalog to find the corresponding wallet entry, which includes
* deep link information for mobile wallet connections.
*
* @param params.walletProviderKey - The wallet provider key to get the catalog wallet entry for.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns A promise that resolves to the WalletConnect catalog wallet entry, or undefined if not found.
* @instrumented
*/ const getWalletConnectCatalogWalletByWalletProviderKey = async ({ walletProviderKey }, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const { normalizedWalletNameWithChain } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["w"])(walletProviderKey);
    const chain = extractChainFromNormalizedName({
        normalizedWalletNameWithChain
    });
    if (!chain) return;
    let walletProviderName = normalizedWalletNameWithChain.toLowerCase();
    if (walletProviderName.endsWith(chain.toLowerCase())) walletProviderName = walletProviderName.slice(0, -chain.length);
    walletProviderName = walletProviderName.replace(/wallet/g, "");
    const walletConnectCatalog = await getWalletConnectCatalog(client);
    for (const [walletKey, wallet] of Object.entries(walletConnectCatalog.wallets)){
        if (wallet.chain !== chain) continue;
        const walletKeyLower = walletKey.toLowerCase();
        const walletNameLower = wallet.name.toLowerCase().replace(/\s+/g, "");
        if (walletKeyLower.includes(walletProviderName) || walletNameLower.includes(walletProviderName)) return wallet;
    }
};
//#endregion
//#region src/modules/user/updateUser/updateUser.ts
/**
* Updates the current user's profile information.
*
* This function allows updating various user fields such as email, name,
* and other profile information. Some updates may require OTP verification,
* like email and phone number.
*
* @param params.userFields - The user fields to update.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns A promise that resolves to OTP verification details if verification is required, or undefined.
* @instrumented

* @redact-params
*/ const updateUser = async ({ userFields }, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])({
        includeMfaToken: true
    }, client).updateSelf({
        environmentId: core.environmentId,
        userFields
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["r"])({
        response
    }, client);
    if (response.emailVerification) return {
        email: response.emailVerification.email,
        verificationUUID: response.emailVerification.verificationUUID
    };
    if (response.smsVerification) return {
        isoCountryCode: response.smsVerification.isoCountryCode,
        phoneCountryCode: response.smsVerification.phoneCountryCode,
        phoneNumber: response.smsVerification.phoneNumber,
        verificationUUID: response.smsVerification.verificationUUID
    };
};
//#endregion
//#region src/modules/mfa/acknowledgeRecoveryCodes/acknowledgeRecoveryCodes.ts
/**
* Acknowledges that the user has viewed and saved their MFA recovery codes.
*
* This function marks the recovery codes as acknowledged, indicating that
* the user has properly backed up their MFA recovery codes for account recovery.
*
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns A promise that resolves when the acknowledgment is complete.
* @instrumented
*/ const acknowledgeRecoveryCodes = async (client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    return updateUser({
        userFields: {
            mfaBackupCodeAcknowledgement: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$914$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$MfaBackupCodeAcknowledgement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MfaBackupCodeAcknowledgement"].Complete
        }
    }, client);
};
//#endregion
//#region src/modules/mfa/authenticateMfaRecoveryCode/authenticateMfaRecoveryCode.ts
/**
* Authenticates using an MFA recovery code.
*
* This function allows users to bypass normal MFA requirements by using
* one of their backup recovery codes when none of the registered MFA methods are available.
*
* @param params.code - The recovery code to authenticate with.
* @param [params.createMfaTokenOptions] - @deprecated Use `requestedScopes` instead. Optional configuration for MFA token creation.
* @param [params.requestedScopes] - Optional scopes to request an elevated access token instead of an MFA token.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns A promise that resolves to the MFA authentication response.
* @not-instrumented
*/ const authenticateMfaRecoveryCode = async ({ code, createMfaTokenOptions, requestedScopes }, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    const apiClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])({}, client);
    try {
        const response = await apiClient.authMfaRecovery({
            environmentId: core.environmentId,
            mFAAuthRecoveryDevicePostRequest: {
                code,
                createMfaToken: createMfaTokenOptions,
                requestedScopes
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["r"])({
            response
        }, client);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["E"])({
            args: {
                mfaToken: response.mfaToken
            },
            event: "mfaCompletionSuccess"
        }, client);
        return response;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["E"])({
            args: {
                error
            },
            event: "mfaCompletionFailure"
        }, client);
        throw error;
    }
};
//#endregion
//#region src/modules/auth/passkeys/getPasskeyAuthenticationOptions/getPasskeyAuthenticationOptions.ts
/** @not-instrumented */ const getPasskeyAuthenticationOptions = async ({ relatedOriginRpId } = {}, client)=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])({}, client).getPasskeyAuthenticationOptions({
        environmentId: core.environmentId,
        relatedOriginRpId
    });
};
//#endregion
//#region src/modules/auth/passkeys/serverAuthenticatePasskey/serverAuthenticatePasskey.ts
/** @not-instrumented */ const serverAuthenticatePasskey = async ({ authentication, createMfaToken, requestedScopes }, client)=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])({}, client).authenticateMfaPasskeyDevice({
        environmentId: core.environmentId,
        passkeyAuthRequest: {
            ...authentication,
            createMfaToken,
            requestedScopes,
            response: {
                ...authentication.response,
                clientDataJson: authentication.response.clientDataJSON
            }
        }
    });
};
//#endregion
//#region src/modules/mfa/authenticatePasskeyMFA/authenticatePasskeyMFA.ts
/**
* Authenticates using a passkey for multi-factor authentication.
*
* This function prompts the user to authenticate with their registered
* passkey to complete an MFA challenge and obtain an MFA token.
*
* @param [params.createMfaToken] - @deprecated Use `requestedScopes` instead. Optional configuration for MFA token creation.
* @param [params.requestedScopes] - Optional scopes to request an elevated access token instead of an MFA token.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns A promise that resolves to the MFA authentication response.
* @throws NoWebAuthNSupportError If WebAuthn is not supported by the browser.
* @throws NoPasskeyCredentialsFoundError If no passkey credentials are found.
* @not-instrumented
*/ const authenticatePasskeyMFA = async ({ createMfaToken, relatedOriginRpId, requestedScopes } = {}, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    try {
        if (!core.passkey.isSupported()) throw new NoWebAuthNSupportError();
        const options = await getPasskeyAuthenticationOptions({
            relatedOriginRpId
        }, client);
        const allowCredentials = options.allowCredentials?.map((credential)=>({
                ...credential,
                type: "public-key"
            }));
        if (!allowCredentials?.length) throw new NoPasskeyCredentialsFoundError();
        const formattedOptions = {
            ...options,
            allowCredentials
        };
        const response = await serverAuthenticatePasskey({
            authentication: await core.passkey.authenticate({
                optionsJSON: formattedOptions
            }),
            createMfaToken,
            requestedScopes
        }, client);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["r"])({
            response
        }, client);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["E"])({
            args: {
                mfaToken: response.mfaToken
            },
            event: "mfaCompletionSuccess"
        }, client);
        return response;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["E"])({
            args: {
                error
            },
            event: "mfaCompletionFailure"
        }, client);
        throw error;
    }
};
//#endregion
//#region src/modules/mfa/authenticateTotpMfaDevice/authenticateTotpMfaDevice.ts
/**
* Authenticates using a TOTP (Time-based One-Time Password) MFA device.
*
* This function validates a TOTP code from an authenticator app and returns
* an MFA token upon successful authentication.
*
* @param params.code - The 6-digit TOTP code from the authenticator app.
* @param [params.deviceId] - The ID of the specific TOTP device to authenticate with.
* @param [params.createMfaTokenOptions] - @deprecated Use `requestedScopes` instead. Optional configuration for MFA token creation.
* @param [params.requestedScopes] - Optional scopes to request an elevated access token instead of an MFA token.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns A promise that resolves to the MFA authentication response.
* @not-instrumented
*/ const authenticateTotpMfaDevice = async ({ deviceId, code, createMfaTokenOptions, requestedScopes }, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    const apiClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])({}, client);
    try {
        const response = await apiClient.authMfaTotpDevice({
            environmentId: core.environmentId,
            mFAAuthTotpDevicePostRequest: {
                code,
                createMfaToken: createMfaTokenOptions,
                id: deviceId,
                requestedScopes
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["r"])({
            response
        }, client);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["E"])({
            args: {
                deviceId,
                mfaToken: response.mfaToken
            },
            event: "mfaCompletionSuccess"
        }, client);
        return response;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["E"])({
            args: {
                deviceId,
                error
            },
            event: "mfaCompletionFailure"
        }, client);
        throw error;
    }
};
//#endregion
//#region src/modules/mfa/createNewMfaRecoveryCodes/createNewMfaRecoveryCodes.ts
/**
* Generates new MFA recovery codes for the current user.
*
* This function creates a fresh set of backup codes that can be used
* to bypass MFA requirements if none of the registered MFA methods are available.
*
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns A promise that resolves to the newly generated recovery codes.
* @instrumented
*/ const createNewMfaRecoveryCodes = async (client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])({}, client).createNewRecoveryCodes({
        environmentId: core.environmentId
    });
};
//#endregion
//#region src/modules/mfa/deleteMfaDevice/deleteMfaDevice.ts
/**
* Deletes a specific MFA device from the user's account.
*
* When an elevated access token for `credential:unlink` is available,
* it is sent via the `x-dyn-elevated-access-token` header and the
* MFA auth token is not required. Otherwise, `mfaAuthToken` must be
* provided for backward compatibility with the legacy MFA flow.
*
* @param params.deviceId - The unique identifier of the MFA device to delete.
* @param params.mfaAuthToken - The MFA authentication token. Optional when using elevated access tokens.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns A promise that resolves when the MFA device is successfully deleted.
* @instrumented
*/ const deleteMfaDevice = async ({ deviceId, mfaAuthToken }, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"])(deviceId, "deviceId is required");
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["S"])({
        consume: false,
        scope: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$914$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$TokenScope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenScope"].Credentialunlink
    }, client)) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"])(mfaAuthToken, "mfaAuthToken is required");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])({
        elevatedAccessTokenScope: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$914$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$TokenScope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenScope"].Credentialunlink
    }, client).deleteMfaDevice({
        environmentId: core.environmentId,
        mfaDeviceId: deviceId,
        xMfaAuthToken: mfaAuthToken ?? ""
    });
};
//#endregion
//#region src/modules/mfa/getMfaDevices/getMfaDevices.ts
/**
* Retrieves all MFA devices registered for the current user.
*
* This function fetches the list of multi-factor authentication devices
* associated with the user's account, such as TOTP authenticators.
*
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns A promise that resolves to an array of the user's registered MFA devices.
* @instrumented
*/ const getMfaDevices = async (client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    const { devices } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])({}, client).getUserMfaDevices({
        environmentId: core.environmentId
    });
    return devices;
};
//#endregion
//#region src/modules/mfa/getMfaRecoveryCodes/getMfaRecoveryCodes.ts
/**
* Retrieves the current MFA recovery codes for the user.
*
* This function fetches the backup codes that can be used to bypass
* MFA requirements if none of the registered MFA methods are available.
* If user doesn't have any recovery codes, it will create them,
* otherwise it will return the existing ones.
*
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns A promise that resolves to the user's MFA recovery codes.
* @instrumented
*/ const getMfaRecoveryCodes = async (client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])({}, client).getRecoveryCodes({
        environmentId: core.environmentId
    });
};
//#endregion
//#region src/modules/mfa/isPendingRecoveryCodesAcknowledgment/isPendingRecoveryCodesAcknowledgment.ts
/**
* Checks if the user is still pending acknowledgment of their MFA recovery codes.
*
* This function determines whether the user has been presented with recovery
* codes that they have not yet acknowledged as saved or backed up.
*
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns True if recovery codes are pending acknowledgment, false otherwise.
* @not-instrumented
*/ const isPendingRecoveryCodesAcknowledgment = (client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const user = client.user;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"])(user, "User not logged in");
    return user.mfaBackupCodeAcknowledgement === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$914$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$MfaBackupCodeAcknowledgement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MfaBackupCodeAcknowledgement"].Pending;
};
//#endregion
//#region src/modules/mfa/isUserMissingMfaAuth/isUserMissingMfaAuth.ts
/**
* Checks if the user requires additional MFA authentication.
*
* This function determines if the current user session requires
* additional multi-factor authentication to access certain features.
*
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns True if the user needs additional MFA authentication, false otherwise.
* @not-instrumented
*/ const isUserMissingMfaAuth = (client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const user = client.user;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"])(user, "User not logged in");
    return Boolean(user.scope?.includes("requiresAdditionalAuth"));
};
//#endregion
//#region src/modules/mfa/registerTotpMfaDevice/registerTotpMfaDevice.ts
/**
* Registers a new TOTP (Time-based One-Time Password) MFA device.
*
* This function initiates the registration of a TOTP authenticator app
* (like Google Authenticator or Authy) for multi-factor authentication.
*
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns A promise that resolves to the TOTP registration response containing setup information,
* like the secret key and the OTP Auth URI.
* @instrumented
*/ const registerTotpMfaDevice = async (client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])({
        elevatedAccessTokenScope: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$914$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$TokenScope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenScope"].Credentiallink
    }, client).registerTotpMfaDevice({
        environmentId: core.environmentId
    });
};
//#endregion
//#region src/modules/mfa/setDefaultMfaDevice/setDefaultMfaDevice.ts
/**
* Sets the default MFA device for the current user.
*
* This function designates a specific MFA TOTP device as the primary method
* for multi-factor authentication challenges.
*
* @param params.deviceId - The unique identifier of the MFA device to set as default.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns A promise that resolves when the default MFA device is successfully set.
* @instrumented
*/ const setDefaultMfaDevice = async ({ deviceId }, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    const apiClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])({}, client);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"])(deviceId, "deviceId is required");
    return apiClient.updateUserMfaDevice({
        environmentId: core.environmentId,
        mfaDeviceId: deviceId
    });
};
//#endregion
//#region src/modules/otp/sendEmailOTP/sendEmailOTP.ts
/**
* Sends a one-time password (OTP) to the specified email address.
*
* Once you have the OTP code, you should then use `verifyOTP` to verify it and complete the authentication process.
*
* @param params.email - The email address to send the OTP to.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns A promise that resolves to an OTPVerification object containing the email and verification UUID.
* @instrumented

* @redact-params
*/ const sendEmailOTP = async ({ email }, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    const { verificationUUID } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])({}, client).createEmailVerification({
        emailVerificationCreateRequest: {
            captchaToken: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getNetworkProviderFromNetworkId$2d$VEDzpV8Z$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"])(client),
            email
        },
        environmentId: core.environmentId
    });
    return {
        email,
        verificationUUID
    };
};
//#endregion
//#region src/modules/otp/sendSmsOTP/supportedCountries.ts
const supportedCountries = {
    AC: {
        code: "247",
        name: "Ascension"
    },
    AD: {
        code: "376",
        name: "Andorra"
    },
    AE: {
        code: "971",
        name: "United Arab Emirates"
    },
    AF: {
        code: "93",
        name: "Afghanistan"
    },
    AG: {
        code: "1268",
        name: "Antigua and Barbuda"
    },
    AI: {
        code: "1264",
        name: "Anguilla"
    },
    AL: {
        code: "355",
        name: "Albania"
    },
    AM: {
        code: "374",
        name: "Armenia"
    },
    AO: {
        code: "244",
        name: "Angola"
    },
    AR: {
        code: "54",
        name: "Argentina"
    },
    AS: {
        code: "1684",
        name: "American Samoa"
    },
    AT: {
        code: "43",
        name: "Austria"
    },
    AU: {
        code: "61",
        name: "Australia/Cocos/Christmas Island"
    },
    AW: {
        code: "297",
        name: "Aruba"
    },
    AZ: {
        code: "994",
        name: "Azerbaijan"
    },
    BA: {
        code: "387",
        name: "Bosnia and Herzegovina"
    },
    BB: {
        code: "1246",
        name: "Barbados"
    },
    BD: {
        code: "880",
        name: "Bangladesh"
    },
    BE: {
        code: "32",
        name: "Belgium"
    },
    BF: {
        code: "226",
        name: "Burkina Faso"
    },
    BG: {
        code: "359",
        name: "Bulgaria"
    },
    BH: {
        code: "973",
        name: "Bahrain"
    },
    BI: {
        code: "257",
        name: "Burundi"
    },
    BJ: {
        code: "229",
        name: "Benin"
    },
    BM: {
        code: "1441",
        name: "Bermuda"
    },
    BN: {
        code: "673",
        name: "Brunei"
    },
    BO: {
        code: "591",
        name: "Bolivia"
    },
    BR: {
        code: "55",
        name: "Brazil"
    },
    BS: {
        code: "1242",
        name: "Bahamas"
    },
    BT: {
        code: "975",
        name: "Bhutan"
    },
    BW: {
        code: "267",
        name: "Botswana"
    },
    BY: {
        code: "375",
        name: "Belarus"
    },
    BZ: {
        code: "501",
        name: "Belize"
    },
    CA: {
        code: "1",
        name: "Canada"
    },
    CD: {
        code: "243",
        name: "Congo, Dem Rep"
    },
    CF: {
        code: "236",
        name: "Central Africa"
    },
    CG: {
        code: "242",
        name: "Congo"
    },
    CH: {
        code: "41",
        name: "Switzerland"
    },
    CI: {
        code: "225",
        name: "Ivory Coast"
    },
    CK: {
        code: "682",
        name: "Cook Islands"
    },
    CL: {
        code: "56",
        name: "Chile"
    },
    CM: {
        code: "237",
        name: "Cameroon"
    },
    CN: {
        code: "86",
        name: "China"
    },
    CO: {
        code: "57",
        name: "Colombia"
    },
    CR: {
        code: "506",
        name: "Costa Rica"
    },
    CU: {
        code: "53",
        name: "Cuba"
    },
    CV: {
        code: "238",
        name: "Cape Verde"
    },
    CW: {
        code: "599",
        name: "Curaçao and Caribbean Netherlands (Bonaire, Sint Eustatius, Sint Maarten, Saba)"
    },
    CY: {
        code: "357",
        name: "Cyprus"
    },
    CZ: {
        code: "420",
        name: "Czech Republic"
    },
    DE: {
        code: "49",
        name: "Germany"
    },
    DJ: {
        code: "253",
        name: "Djibouti"
    },
    DK: {
        code: "45",
        name: "Denmark"
    },
    DM: {
        code: "1767",
        name: "Dominica"
    },
    DO: {
        code: "1829",
        name: "Dominican Republic"
    },
    DZ: {
        code: "213",
        name: "Algeria"
    },
    EC: {
        code: "593",
        name: "Ecuador"
    },
    EE: {
        code: "372",
        name: "Estonia"
    },
    EG: {
        code: "20",
        name: "Egypt"
    },
    ER: {
        code: "291",
        name: "Eritrea"
    },
    ES: {
        code: "34",
        name: "Spain"
    },
    ET: {
        code: "251",
        name: "Ethiopia"
    },
    FI: {
        code: "358",
        name: "Finland/Aland Islands"
    },
    FJ: {
        code: "679",
        name: "Fiji"
    },
    FK: {
        code: "500",
        name: "Falkland Islands"
    },
    FM: {
        code: "691",
        name: "Micronesia"
    },
    FO: {
        code: "298",
        name: "Faroe Islands"
    },
    FR: {
        code: "33",
        name: "France"
    },
    GA: {
        code: "241",
        name: "Gabon"
    },
    GB: {
        code: "44",
        name: "United Kingdom"
    },
    GD: {
        code: "1473",
        name: "Grenada"
    },
    GE: {
        code: "995",
        name: "Georgia"
    },
    GF: {
        code: "594",
        name: "French Guiana"
    },
    GG: {
        code: "44",
        name: "Guernsey/Jersey"
    },
    GH: {
        code: "233",
        name: "Ghana"
    },
    GI: {
        code: "350",
        name: "Gibraltar"
    },
    GL: {
        code: "299",
        name: "Greenland"
    },
    GM: {
        code: "220",
        name: "Gambia"
    },
    GN: {
        code: "224",
        name: "Guinea"
    },
    GP: {
        code: "590",
        name: "Guadeloupe"
    },
    GQ: {
        code: "240",
        name: "Equatorial Guinea"
    },
    GR: {
        code: "30",
        name: "Greece"
    },
    GT: {
        code: "502",
        name: "Guatemala"
    },
    GU: {
        code: "1671",
        name: "Guam"
    },
    GW: {
        code: "245",
        name: "Guinea-Bissau"
    },
    GY: {
        code: "592",
        name: "Guyana"
    },
    HK: {
        code: "852",
        name: "Hong Kong"
    },
    HN: {
        code: "504",
        name: "Honduras"
    },
    HR: {
        code: "385",
        name: "Croatia"
    },
    HT: {
        code: "509",
        name: "Haiti"
    },
    HU: {
        code: "36",
        name: "Hungary"
    },
    IC: {
        code: "3491",
        name: "Canary Islands"
    },
    ID: {
        code: "62",
        name: "Indonesia"
    },
    IE: {
        code: "353",
        name: "Ireland"
    },
    IL: {
        code: "972",
        name: "Israel"
    },
    IM: {
        code: "44",
        name: "Isle of Man"
    },
    IN: {
        code: "91",
        name: "India"
    },
    IQ: {
        code: "964",
        name: "Iraq"
    },
    IR: {
        code: "98",
        name: "Iran"
    },
    IS: {
        code: "354",
        name: "Iceland"
    },
    IT: {
        code: "39",
        name: "Italy"
    },
    JM: {
        code: "1876",
        name: "Jamaica"
    },
    JO: {
        code: "962",
        name: "Jordan"
    },
    JP: {
        code: "81",
        name: "Japan"
    },
    KE: {
        code: "254",
        name: "Kenya"
    },
    KG: {
        code: "996",
        name: "Kyrgyzstan"
    },
    KH: {
        code: "855",
        name: "Cambodia"
    },
    KI: {
        code: "686",
        name: "Kiribati"
    },
    KM: {
        code: "269",
        name: "Comoros"
    },
    KN: {
        code: "1869",
        name: "St Kitts and Nevis"
    },
    KP: {
        code: "850",
        name: "Korea Dem People's Rep"
    },
    KR: {
        code: "82",
        name: "Korea Republic of"
    },
    KW: {
        code: "965",
        name: "Kuwait"
    },
    KY: {
        code: "1345",
        name: "Cayman Islands"
    },
    LA: {
        code: "856",
        name: "Laos PDR"
    },
    LB: {
        code: "961",
        name: "Lebanon"
    },
    LC: {
        code: "1758",
        name: "St Lucia"
    },
    LI: {
        code: "423",
        name: "Liechtenstein"
    },
    LK: {
        code: "94",
        name: "Sri Lanka"
    },
    LR: {
        code: "231",
        name: "Liberia"
    },
    LS: {
        code: "266",
        name: "Lesotho"
    },
    LT: {
        code: "370",
        name: "Lithuania"
    },
    LU: {
        code: "352",
        name: "Luxembourg"
    },
    LV: {
        code: "371",
        name: "Latvia"
    },
    LY: {
        code: "218",
        name: "Libya"
    },
    MA: {
        code: "212",
        name: "Morocco/Western Sahara"
    },
    MC: {
        code: "377",
        name: "Monaco"
    },
    MD: {
        code: "373",
        name: "Moldova"
    },
    ME: {
        code: "382",
        name: "Montenegro"
    },
    MG: {
        code: "261",
        name: "Madagascar"
    },
    MH: {
        code: "692",
        name: "Marshall Islands"
    },
    MK: {
        code: "389",
        name: "Republic of North Macedonia"
    },
    ML: {
        code: "223",
        name: "Mali"
    },
    MM: {
        code: "95",
        name: "Myanmar (Burma)"
    },
    MN: {
        code: "976",
        name: "Mongolia"
    },
    MO: {
        code: "853",
        name: "Macau"
    },
    MP: {
        code: "1670",
        name: "Northern Mariana Islands"
    },
    MQ: {
        code: "596",
        name: "Martinique"
    },
    MR: {
        code: "222",
        name: "Mauritania"
    },
    MS: {
        code: "1664",
        name: "Montserrat"
    },
    MT: {
        code: "356",
        name: "Malta"
    },
    MU: {
        code: "230",
        name: "Mauritius"
    },
    MV: {
        code: "960",
        name: "Maldives"
    },
    MW: {
        code: "265",
        name: "Malawi"
    },
    MX: {
        code: "52",
        name: "Mexico"
    },
    MY: {
        code: "60",
        name: "Malaysia"
    },
    MZ: {
        code: "258",
        name: "Mozambique"
    },
    NA: {
        code: "264",
        name: "Namibia"
    },
    NC: {
        code: "687",
        name: "New Caledonia"
    },
    NE: {
        code: "227",
        name: "Niger"
    },
    NF: {
        code: "672",
        name: "Norfolk Island"
    },
    NG: {
        code: "234",
        name: "Nigeria"
    },
    NI: {
        code: "505",
        name: "Nicaragua"
    },
    NL: {
        code: "31",
        name: "Netherlands"
    },
    NO: {
        code: "47",
        name: "Norway"
    },
    NP: {
        code: "977",
        name: "Nepal"
    },
    NU: {
        code: "683",
        name: "Niue"
    },
    NZ: {
        code: "64",
        name: "New Zealand"
    },
    OM: {
        code: "968",
        name: "Oman"
    },
    PA: {
        code: "507",
        name: "Panama"
    },
    PE: {
        code: "51",
        name: "Peru"
    },
    PF: {
        code: "689",
        name: "French Polynesia"
    },
    PG: {
        code: "675",
        name: "Papua New Guinea"
    },
    PH: {
        code: "63",
        name: "Philippines"
    },
    PK: {
        code: "92",
        name: "Pakistan"
    },
    PL: {
        code: "48",
        name: "Poland"
    },
    PM: {
        code: "508",
        name: "St Pierre and Miquelon"
    },
    PR: {
        code: "1787",
        name: "Puerto Rico"
    },
    PS: {
        code: "970, 972",
        name: "Palestinian Territory"
    },
    PT: {
        code: "351",
        name: "Portugal"
    },
    PW: {
        code: "680",
        name: "Palau"
    },
    PY: {
        code: "595",
        name: "Paraguay"
    },
    QA: {
        code: "974",
        name: "Qatar"
    },
    RE: {
        code: "262",
        name: "Reunion/Mayotte"
    },
    RO: {
        code: "40",
        name: "Romania"
    },
    RS: {
        code: "381",
        name: "Serbia"
    },
    RU: {
        code: "7",
        name: "Russia/Kazakhstan"
    },
    RW: {
        code: "250",
        name: "Rwanda"
    },
    SA: {
        code: "966",
        name: "Saudi Arabia"
    },
    SB: {
        code: "677",
        name: "Solomon Islands"
    },
    SC: {
        code: "248",
        name: "Seychelles"
    },
    SD: {
        code: "249",
        name: "Sudan"
    },
    SE: {
        code: "46",
        name: "Sweden"
    },
    SG: {
        code: "65",
        name: "Singapore"
    },
    SI: {
        code: "386",
        name: "Slovenia"
    },
    SK: {
        code: "421",
        name: "Slovakia"
    },
    SL: {
        code: "232",
        name: "Sierra Leone"
    },
    SM: {
        code: "378",
        name: "San Marino"
    },
    SN: {
        code: "221",
        name: "Senegal"
    },
    SO: {
        code: "252",
        name: "Somalia"
    },
    SR: {
        code: "597",
        name: "Suriname"
    },
    SS: {
        code: "211",
        name: "South Sudan"
    },
    ST: {
        code: "239",
        name: "Sao Tome and Principe"
    },
    SV: {
        code: "503",
        name: "El Salvador"
    },
    SY: {
        code: "963",
        name: "Syria"
    },
    SZ: {
        code: "268",
        name: "Swaziland"
    },
    TC: {
        code: "1649",
        name: "Turks and Caicos Islands"
    },
    TD: {
        code: "235",
        name: "Chad"
    },
    TG: {
        code: "228",
        name: "Togo"
    },
    TH: {
        code: "66",
        name: "Thailand"
    },
    TJ: {
        code: "992",
        name: "Tajikistan"
    },
    TL: {
        code: "670",
        name: "East Timor"
    },
    TM: {
        code: "993",
        name: "Turkmenistan"
    },
    TN: {
        code: "216",
        name: "Tunisia"
    },
    TO: {
        code: "676",
        name: "Tonga"
    },
    TR: {
        code: "90",
        name: "Turkiye"
    },
    TT: {
        code: "1868",
        name: "Trinidad and Tobago"
    },
    TV: {
        code: "688",
        name: "Tuvalu"
    },
    TW: {
        code: "886",
        name: "Taiwan"
    },
    TZ: {
        code: "255",
        name: "Tanzania"
    },
    UA: {
        code: "380",
        name: "Ukraine"
    },
    UG: {
        code: "256",
        name: "Uganda"
    },
    US: {
        code: "1",
        name: "United States"
    },
    UY: {
        code: "598",
        name: "Uruguay"
    },
    UZ: {
        code: "998",
        name: "Uzbekistan"
    },
    VA: {
        code: "379",
        name: "Vatican City"
    },
    VC: {
        code: "1784",
        name: "St Vincent Grenadines"
    },
    VE: {
        code: "58",
        name: "Venezuela"
    },
    VG: {
        code: "1284",
        name: "Virgin Islands, British"
    },
    VI: {
        code: "1340",
        name: "Virgin Islands, U.S."
    },
    VN: {
        code: "84",
        name: "Vietnam"
    },
    VU: {
        code: "678",
        name: "Vanuatu"
    },
    WF: {
        code: "681",
        name: "Wallis and Futuna"
    },
    WS: {
        code: "685",
        name: "Samoa"
    },
    XK: {
        code: "383",
        name: "Kosovo"
    },
    YE: {
        code: "967",
        name: "Yemen"
    },
    ZA: {
        code: "27",
        name: "South Africa"
    },
    ZM: {
        code: "260",
        name: "Zambia"
    },
    ZW: {
        code: "263",
        name: "Zimbabwe"
    }
};
//#endregion
//#region src/modules/otp/sendSmsOTP/sendSmsOTP.ts
/**
* Sends a one-time password (OTP) via SMS to the specified phone number.
*
* @param params.isoCountryCode - The ISO country code for the phone number (e.g., 'US', 'CA', 'GB').
* @param params.phoneNumber - The phone number to send the OTP to.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns A promise that resolves to an OTPVerification object containing the phone details and verification UUID.
* @instrumented

* @redact-params
*/ const sendSmsOTP = async ({ isoCountryCode, phoneNumber }, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    const apiClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])({}, client);
    const phoneCountryCode = supportedCountries[isoCountryCode].code;
    const { verificationUUID } = await apiClient.createSmsVerification({
        environmentId: core.environmentId,
        smsVerificationCreateRequest: {
            captchaToken: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getNetworkProviderFromNetworkId$2d$VEDzpV8Z$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"])(client),
            isoCountryCode,
            phoneCountryCode,
            phoneNumber
        }
    });
    return {
        isoCountryCode,
        phoneCountryCode,
        phoneNumber,
        verificationUUID
    };
};
//#endregion
//#region src/modules/otp/verifyOTP/verifyOTPForUserSignIn/verifyOTPForUserSignIn.ts
/** @not-instrumented */ const verifyOTPForUserSignIn = async ({ otpVerification, verificationToken }, client)=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    const apiClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])({}, client);
    const verifyRequest = {
        verificationToken,
        verificationUUID: otpVerification.verificationUUID
    };
    if (otpVerification.email) return apiClient.signInWithEmailVerification({
        emailVerificationVerifyRequest: verifyRequest,
        environmentId: core.environmentId
    });
    return apiClient.signInWithSmsVerification({
        environmentId: core.environmentId,
        smsVerificationVerifyRequest: verifyRequest
    });
};
//#endregion
//#region src/modules/otp/verifyOTP/verifyOTPForUserUpdate/verifyOTPForUserUpdate.ts
/** @not-instrumented */ const verifyOTPForUserUpdate = async ({ otpVerification, verificationToken, requestedScopes }, client)=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    const apiClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])({}, client);
    const verifyRequest = {
        verificationToken,
        verificationUUID: otpVerification.verificationUUID
    };
    if (requestedScopes) verifyRequest.requestedScopes = requestedScopes;
    if (otpVerification.email) return apiClient.verifyEmailVerification({
        emailVerificationVerifyRequest: verifyRequest,
        environmentId: core.environmentId
    });
    return apiClient.verifySmsVerification({
        environmentId: core.environmentId,
        smsVerificationVerifyRequest: verifyRequest
    });
};
//#endregion
//#region src/modules/otp/verifyOTP/verifyOTP.ts
/**
* Verifies a one-time password (OTP) for user authentication or updates.
*
* This function validates the OTP code provided by the user and completes
* the verification process for either sign-in or account updates.
*
* @param params.otpVerification - The OTP verification object containing verification details.
* @param params.verificationToken - The token received from the OTP verification process.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns A promise that resolves to the verify response object upon successful verification.
* @instrumented
*/ const verifyOTP = async ({ otpVerification, verificationToken, requestedScopes }, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    let response;
    if (client.user) response = await verifyOTPForUserUpdate({
        otpVerification,
        requestedScopes,
        verificationToken
    }, client);
    else response = await verifyOTPForUserSignIn({
        otpVerification,
        verificationToken
    }, client);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["r"])({
        response
    }, client);
    return response;
};
//#endregion
//#region src/modules/swap/getSwapQuote/getSwapQuote.ts
/**
* Gets a swap quote
*
* @param params GetSwapQuoteParams - The parameters for the swap quote.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns The swap quote details. Use the `signingPayload` field to get the transaction data for the wallet to sign.
* @instrumented
*/ const getSwapQuote = async (params, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    const apiClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])({}, client);
    if (!params.from.amount && !params.to.amount) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"]("Either from.amount or to.amount is required");
    if (params.from.amount && params.to.amount) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"]("Only one of from.amount or to.amount is allowed");
    return await apiClient.swapQuote({
        environmentId: core.environmentId,
        swapQuoteRequest: {
            from: {
                ...params.from,
                chainId: params.from.networkId,
                chainName: params.from.chain
            },
            maxPriceImpact: params.maxPriceImpact,
            order: params.order,
            slippage: params.slippage,
            to: {
                ...params.to,
                chainId: params.to.networkId,
                chainName: params.to.chain
            }
        }
    });
};
//#endregion
//#region src/modules/swap/getSwapStatus/getSwapStatus.ts
/**
* Gets the status of a swap
*
* @param params GetSwapStatusParams - The parameters for the swap status.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns The swap status.
* @instrumented
*/ const getSwapStatus = async (params, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    const apiClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])({}, client);
    let from;
    if (params.from) from = {
        chainId: params.from.networkId,
        chainName: params.from.chain
    };
    let to;
    if (params.to) to = {
        chainId: params.to.networkId,
        chainName: params.to.chain
    };
    const response = await apiClient.swapStatus({
        environmentId: core.environmentId,
        swapStatusRequest: {
            from,
            to,
            txHash: params.txHash
        }
    });
    return {
        status: response.status,
        substatus: response.substatus
    };
};
//#endregion
//#region src/modules/user/deleteUser/deleteUser.ts
/**
* Deletes the current user's account permanently.
*
* This function performs a hard delete of the user account. Upon successful deletion,
* the user will be automatically logged out and all authentication data will be cleared.
*
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns A promise that resolves when the user account is successfully deleted.
* @instrumented
*/ const deleteUser = async (client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])({
        includeMfaToken: true
    }, client).hardDeleteUser({
        environmentId: core.environmentId
    });
    await logout(client);
};
//#endregion
//#region src/modules/user/isUserOnboardingComplete/isUserOnboardingComplete.ts
/**
* Checks if the user has completed all onboarding requirements.
*
* This function verifies whether a user has fulfilled all necessary requirements
* including KYC fields (Know Your Customer information) and MFA setup
* (Multi-Factor Authentication including recovery codes acknowledgment).
*
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns True if onboarding is complete (no pending requirements), false if there are pending requirements.
* @not-instrumented
*/ const isUserOnboardingComplete = (client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const user = client.user;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"])(user, "User not logged in");
    const hasMissingKycFields = Boolean(user.missingFields?.length);
    const hasPendingMfaAuth = isUserMissingMfaAuth(client);
    const hasPendingRecoveryCodes = isPendingRecoveryCodesAcknowledgment(client);
    return !hasMissingKycFields && !hasPendingMfaAuth && !hasPendingRecoveryCodes;
};
//#endregion
//#region src/modules/user/refreshUser/refreshUser.ts
/**
* Refreshes the current user's data from the server.
*
* This function fetches the latest authenticated user information from the backend
* and updates the local user state.
*
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns A promise that resolves to the authenticated user.
* @instrumented
*/ const refreshUser = async (client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    const apiClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])({}, client);
    const previousState = {
        ...core.state.get()
    };
    const user = await apiClient.getAuthenticatedUser({
        environmentId: core.environmentId
    });
    core.state.set({
        user
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])({
        previousState
    }, client);
    return user;
};
//#endregion
//#region src/modules/wallets/assertWalletAccountSigningAvailability/assertWalletAccountSigningAvailability.ts
/**
* Asserts that a wallet account is available and ready for signing operations.
*
* This function verifies that the specified wallet account is currently
* connected and selected in the wallet app, ensuring it can perform signing operations.
*
* If the wallet account is not available, the user might need to reconnect it or
* change the account in their wallet app to make it active.
*
* @param params.walletAccount - The wallet account to verify signing availability for.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns A promise that resolves if the wallet is available for signing.
* @throws WalletAccountNotSelectedError If the wallet account is not currently selected.
* @not-instrumented
*/ const assertWalletAccountSigningAvailability = async ({ walletAccount }, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const { addresses } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"])({
        walletAccount
    }, client).getConnectedAddresses();
    if (addresses.length > 0 && !addresses.includes(walletAccount.address)) throw new WalletAccountNotSelectedError({
        expectedAddress: walletAccount.address,
        selectedAddress: addresses[0]
    });
};
//#endregion
//#region src/utils/isMobile/isMobile.ts
/**
* Sourced from http://detectmobilebrowsers.com/
* @not-instrumented
*/ const userAgentRegex1 = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ios|ipad|playbook|silk/i;
const userAgentRegex2 = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
/** @not-instrumented */ const isMobile = (maxTouchPointsOverride)=>{
    if (typeof window === "undefined" || typeof navigator === "undefined") return false;
    return userAgentRegex1.test(navigator.userAgent) || userAgentRegex2.test(navigator.userAgent.substring(0, 4)) || isIPad(maxTouchPointsOverride) || isIPhone();
};
/** @not-instrumented */ const isIPhone = ()=>typeof window === "undefined" || typeof navigator === "undefined" ? false : /iPhone|ios/.test(navigator.userAgent);
/**
* @param [optional] maxTouchPointsOverride - this is used for testing since
* it seems that JSDOM doesn't support maxTouchPoints, so it was impossible
* to mock it
* @not-instrumented
*/ const isIPad = (maxTouchPointsOverride)=>{
    if (typeof window === "undefined" || typeof navigator === "undefined") return false;
    const maxTouchPoints = maxTouchPointsOverride || navigator.maxTouchPoints;
    return /iPad/.test(navigator.userAgent) || /Mac/.test(navigator.userAgent) && maxTouchPoints === 5;
};
//#endregion
//#region src/modules/wallets/utils/getAddressesWithTypesFromConnectionResult/getAddressesWithTypesFromConnectionResult.ts
/** @not-instrumented */ const getAddressesWithTypesFromConnectionResult = (connectionResult)=>{
    return connectionResult.addresses.filter((address)=>!!address.address && !!address.type);
};
//#endregion
//#region src/modules/wallets/connectWithWalletProvider/connectWithWalletProvider.ts
/**
* Connects to a wallet provider and returns the connected wallet account.
*
* Note: This function will not verify the wallet account, use the verifyWalletAccount function to do that
* or connectAndVerifyWithWalletProvider to do that in a single step.
* @see verifyWalletAccount
* @see connectAndVerifyWithWalletProvider
*
* @param params.walletProviderKey - The unique key identifying the wallet provider to connect to (e.g. 'metamaskevm', 'phantomsol').
* @param [params.addToDynamicWalletAccounts] - Whether to add the connected wallet account to the user's wallet accounts. Defaults to true.
* @param [params.hardwareWalletVendor] - The hardware wallet vendor, if connecting via a hardware wallet (e.g. 'ledger').
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns A promise that resolves to the connected wallet account.
* @throws NoAddressFoundError If the request to connect was successful but no address is connected to your app.
* @instrumented
*/ const connectWithWalletProvider = async ({ walletProviderKey, addToDynamicWalletAccounts = true, hardwareWalletVendor }, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const walletProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"])({
        walletProviderKey
    }, client);
    assertWalletProviderMethodDefined(walletProvider, "connect");
    const { addresses } = await walletProvider.connect();
    const currentAddresses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["y"])(client).map(({ address })=>address);
    const mainAddress = addresses?.length ? addresses[0].address : null;
    /**
	* This error is thrown in case the wallet has no addresses connected
	* to the dapp. Then the error is thrown so the consumer can instruct the
	* user on the next steps.
	*/ if (!mainAddress) throw new NoAddressFoundError();
    const walletAccount = {
        address: mainAddress,
        addressesWithTypes: getAddressesWithTypesFromConnectionResult({
            addresses
        }),
        chain: walletProvider.chain,
        hardwareWalletVendor,
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["S"])({
            address: mainAddress,
            chain: walletProvider.chain,
            walletProviderKey
        }),
        lastSelectedAt: null,
        verifiedCredentialId: null,
        walletProviderKey
    };
    if (currentAddresses.includes(mainAddress)) return walletAccount;
    if (addToDynamicWalletAccounts) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getNetworkProviderFromNetworkId$2d$VEDzpV8Z$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])({
            unverifiedWalletAccountsToUpdate: [
                walletAccount
            ]
        }, client);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])(client);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getNetworkProviderFromNetworkId$2d$VEDzpV8Z$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])({
            walletAccount
        }, client);
    }
    return walletAccount;
};
//#endregion
//#region src/modules/wallets/hardwareWallet/formatSignatureForHardwareWallet/formatSignatureForHardwareWallet.ts
/**
* Wraps a raw signature in the JSON format expected by the backend for hardware wallet verification.
*
* @param params.hardwareWalletVendor - The hardware wallet vendor that produced the signature.
* @param params.signature - The raw signature string to wrap.
* @returns The signature wrapped in `{ signedTransaction: { data } }` JSON format.
* @not-instrumented
*/ const formatSignatureForHardwareWallet = ({ signature, hardwareWalletVendor: _ })=>JSON.stringify({
        signedTransaction: {
            data: signature
        }
    });
//#endregion
//#region src/modules/wallets/utils/getChainIdForAccountVerification/getChainIdForAccountVerification.ts
/** @not-instrumented */ const getChainIdForAccountVerification = async ({ walletProvider })=>{
    if ([
        "BTC",
        "SOL",
        "SUI"
    ].includes(walletProvider.chain)) return;
    const { networkId } = await walletProvider.getActiveNetworkId();
    if (networkId) return networkId;
    if (walletProvider.chain === "EVM") return "1";
};
//#endregion
//#region src/modules/wallets/utils/getSignInMessage/getSignInMessage.ts
/** @not-instrumented */ const getSignInMessage = async ({ walletAccount }, client)=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    const universalLink = core.metadata?.universalLink;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"])(universalLink, "Universal link is not set");
    const url = new URL(universalLink);
    const domain = url.host;
    const nonce = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["h"])(client);
    const walletProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"])({
        walletAccount
    }, client);
    if (walletProvider.chain === "STARK") /**
	* Starknet requires the strings to be 31 chars long
	* Nonce - we need to keep full size for nonce verification on the backend (the backend shortens it to 31 chars)
	* Domain - we need to shorten the domain to 31 chars
	*/ return JSON.stringify({
        domain: domain.substring(0, 31),
        nonce
    });
    const statement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getNetworkProviderFromNetworkId$2d$VEDzpV8Z$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(client);
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getNetworkProviderFromNetworkId$2d$VEDzpV8Z$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])({
        address: walletAccount.address,
        blockchainName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"][walletProvider.chain].blockchainName,
        chainId: await getChainIdForAccountVerification({
            walletProvider
        }),
        domain,
        issuedAt: /* @__PURE__ */ new Date().toISOString(),
        nonce,
        requestId: core.environmentId,
        statement,
        uri: url.toString()
    });
};
//#endregion
//#region src/modules/wallets/proveWalletAccountOwnership/proveWalletAccountOwnership.ts
/**
* Proves ownership of a wallet account by signing a verification message.
*
* This function generates a sign-in message and requires the user to sign it
* with their wallet's private key, proving they control the wallet address.
*
* @param params.walletAccount - The wallet account to prove ownership of.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns A promise that resolves to an object containing the message and signature.
* @instrumented
*/ const proveWalletAccountOwnership = async ({ walletAccount }, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const walletProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"])({
        walletAccount
    }, client);
    assertWalletProviderMethodDefined(walletProvider, "signMessage");
    const messageToSign = await getSignInMessage({
        walletAccount
    }, client);
    const { signature } = await walletProvider.signMessage({
        message: messageToSign,
        walletAccount
    });
    return {
        messageToSign,
        signature
    };
};
//#endregion
//#region src/modules/wallets/utils/isSameAddress/isSameAddress.ts
/** @not-instrumented */ const isSameAddress = (left, right, chain)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"])(left, chain) === (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"])(right, chain);
//#endregion
//#region src/modules/wallets/verifyWalletAccountForSignInOrTransfer/verifyWalletAccountForSignInOrTransfer.ts
/** @not-instrumented */ const verifyWalletAccountForSignInOrTransfer = async ({ walletAccount, isTransfer, requestedScopes }, client)=>{
    if (walletAccount.verifiedCredentialId) throw new WalletAccountAlreadyVerifiedError(walletAccount.address);
    const walletProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"])({
        walletAccount
    }, client);
    const { messageToSign, signature } = await proveWalletAccountOwnership({
        walletAccount
    }, client);
    const formattedSignature = walletAccount.hardwareWalletVendor ? formatSignatureForHardwareWallet({
        hardwareWalletVendor: walletAccount.hardwareWalletVendor,
        signature
    }) : signature;
    const { networkId } = await walletProvider.getActiveNetworkId();
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getNetworkProviderFromNetworkId$2d$VEDzpV8Z$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["o"])({
        addressesWithTypes: walletAccount.addressesWithTypes,
        chain: walletAccount.chain,
        isTransfer,
        messageToSign,
        networkId,
        requestedScopes,
        signature: formattedSignature,
        walletAddress: walletAccount.address,
        walletDisplayName: walletProvider.metadata.displayName,
        walletProviderType: walletProvider.walletProviderType
    }, client);
    const walletVerifiedCredential = response.user?.verifiedCredentials.find((verifiedCredential)=>isSameAddress(verifiedCredential.address ?? "", walletAccount.address, walletAccount.chain));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"])(walletVerifiedCredential, `After verifying, still unable to find verified wallet credential for wallet account ${walletAccount.address} on chain ${walletAccount.chain}`);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getNetworkProviderFromNetworkId$2d$VEDzpV8Z$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
        keysToUpdate: {
            [walletVerifiedCredential.id]: walletProvider.key
        }
    }, client);
    /**
	* Adds the user with the new wallet verified credential
	* This will add the new verified wallet account to the client`s state
	*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["r"])({
        response
    }, client);
    /**
	* Remove the now verified wallet account from the unverified wallet accounts
	*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getNetworkProviderFromNetworkId$2d$VEDzpV8Z$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["s"])({
        unverifiedWalletAccount: walletAccount
    }, client);
    const verifiedWalletAccount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["y"])(client).find(({ address })=>isSameAddress(address, walletAccount.address, walletAccount.chain));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"])(verifiedWalletAccount, `Unable to find wallet account ${walletAccount.address} on chain ${walletAccount.chain} for verified credential ${walletVerifiedCredential.id}`);
    return verifiedWalletAccount;
};
//#endregion
//#region src/modules/wallets/verifyWalletAccount/verifyWalletAccount.ts
/**
* Verifies ownership of a wallet account and adds it to the user's profile.
*
* This function requires the user to sign a message to prove wallet ownership,
* then sets the wallet account as verified.
*
* @param params.walletAccount - The wallet account to verify ownership of.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns A promise that resolves to the verified wallet account.
* @throws WalletAccountAlreadyVerifiedError If the wallet is already verified.
* @throws WalletAlreadyLinkedToAnotherUserError If the wallet is linked to another user.
* @instrumented
*/ const verifyWalletAccount = async ({ walletAccount, requestedScopes }, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    return verifyWalletAccountForSignInOrTransfer({
        isTransfer: false,
        requestedScopes,
        walletAccount
    }, client);
};
//#endregion
//#region src/modules/wallets/walletProvider/isDeeplinkWalletProvider/isDeeplinkWalletProvider.ts
/**
* Returns true if the wallet provider uses the deep link protocol (e.g. Phantom redirect on mobile).
* @not-instrumented
*/ const isDeeplinkWalletProvider = ({ walletProvider })=>walletProvider.walletProviderType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$914$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$WalletProviderEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletProviderEnum"].DeepLink;
//#endregion
//#region src/modules/wallets/connectAndVerifyWithWalletProvider/connectAndVerifyWithWalletProvider.ts
/**
* Connects to a wallet provider and verifies ownership through message signing.
*
* This function combines wallet connection and verification in a single step,
* requiring the user to sign a message to prove wallet ownership before
* the wallet account is added to their profile.
*
* @throws {DeeplinkConnectAndVerifyUnsupportedError} On mobile with deep link
* wallet providers (e.g. Phantom redirect). This function triggers two sequential
* deeplinks — one to connect and another to sign for verification. iOS will not
* honor the second deeplink because it is no longer tied to a user gesture.
* Android may handle sequential deeplinks differently, but this guard applies to
* all mobile platforms to ensure a stable experience and prevent production-only
* errors. Use `connectWithWalletProvider` first and then invoke
* `verifyWalletAccount` separately from a new user gesture (e.g. a "Verify
* Ownership" button).
*
* @param params.walletProviderKey - The unique key identifying the wallet provider to connect to.
* @param [params.hardwareWalletVendor] - The hardware wallet vendor, if connecting via a hardware wallet (e.g. 'ledger').
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns A promise that resolves to the connected and verified wallet account.
* @instrumented
*/ const connectAndVerifyWithWalletProvider = async ({ walletProviderKey, hardwareWalletVendor }, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const walletProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"])({
        walletProviderKey
    }, client);
    if (isMobile() && isDeeplinkWalletProvider({
        walletProvider
    })) throw new DeeplinkConnectAndVerifyUnsupportedError({
        walletProviderKey
    });
    const walletAccount = await connectWithWalletProvider({
        addToDynamicWalletAccounts: false,
        hardwareWalletVendor,
        walletProviderKey
    }, client);
    await verifyWalletAccount({
        walletAccount
    }, client);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getNetworkProviderFromNetworkId$2d$VEDzpV8Z$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])({
        authMode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$914$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$AuthModeEnum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthModeEnum"].AndSign,
        walletAccount
    }, client);
    return walletAccount;
};
//#endregion
//#region src/modules/wallets/getAvailableWalletProvidersData/getAvailableWalletProvidersData.ts
/**
* Retrieves data for all available wallet providers that can be used for connection.
*
* This function returns metadata about wallet providers that users can
* connect to, like MetaMask, Phantom, etc.
*
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns An array of wallet provider data including chain, keys, and metadata.
* @instrumented
*/ const getAvailableWalletProvidersData = (client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])(client).filter((walletProvider)=>Boolean(walletProvider.connect)).map((walletProvider)=>({
            chain: walletProvider.chain,
            groupKey: walletProvider.groupKey,
            key: walletProvider.key,
            metadata: walletProvider.metadata,
            walletProviderType: walletProvider.walletProviderType
        }));
};
//#endregion
//#region src/modules/wallets/getConnectedAddresses/getConnectedAddresses.ts
/**
* Retrieves all connected addresses for a specific wallet provider.
*
* This function returns the list of wallet addresses that are currently
* connected and available through the specified wallet provider.
*
* @param params.walletProviderKey - The unique key of the wallet provider to query.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns An array of connected wallet addresses.
* @instrumented
*/ const getConnectedAddresses = ({ walletProviderKey }, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"])({
        walletProviderKey
    }, client).getConnectedAddresses();
};
//#endregion
//#region src/modules/wallets/getOwnerWalletAccountForSmartWalletAccount/getOwnerWalletAccountForSmartWalletAccount.ts
/** @instrumented */ const getOwnerWalletAccountForSmartWalletAccount = ({ smartWalletAccount }, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const smartWalletVerifiedCredential = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])({
        walletAccount: smartWalletAccount
    }, client);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"])(smartWalletVerifiedCredential?.signerRefId, "Invalid smart wallet account");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["y"])(client).find((walletAccount)=>walletAccount.verifiedCredentialId === smartWalletVerifiedCredential.signerRefId);
};
//#endregion
//#region src/modules/wallets/getWalletAccountAddressByType/getWalletAccountAddressByType.ts
/** @not-instrumented */ const getWalletAccountAddressByType = ({ type, walletAccount })=>{
    return walletAccount.addressesWithTypes?.find((address)=>address.type === type)?.address;
};
//#endregion
//#region src/modules/wallets/getWalletProviderDataByKey/getWalletProviderDataByKey.ts
/**
* Retrieves data for a specific wallet provider that can be used for display or connection.
*
* @param params.walletProviderKey - The key of the wallet provider to retrieve data for.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns The data for the wallet provider.
* @not-instrumented
*/ const getWalletProviderDataByKey = ({ walletProviderKey }, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const { chain, groupKey, key, metadata, walletProviderType } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"])({
        walletProviderKey
    }, client);
    return {
        chain,
        groupKey,
        key,
        metadata,
        walletProviderType
    };
};
//#endregion
//#region src/modules/wallets/hardwareWallet/canConnectWithHardwareWallet/canConnectWithHardwareWallet.ts
/**
* Checks whether a wallet provider supports connecting with a specific hardware wallet vendor.
*
* @param params.walletProviderKey - The key of the wallet provider to check.
* @param params.hardwareWalletVendor - The hardware wallet vendor to check for.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns Whether the wallet provider supports the specified hardware wallet vendor.
* @not-instrumented
*/ const canConnectWithHardwareWallet = ({ walletProviderKey, hardwareWalletVendor }, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"])({
        walletProviderKey
    }, client).metadata.supportedHardwareWalletVendors?.includes(hardwareWalletVendor) ?? false;
};
//#endregion
//#region src/modules/wallets/hardwareWallet/isHardwareWalletAccount/isHardwareWalletAccount.ts
/**
* Checks whether a wallet account was connected via a hardware wallet.
*
* @param params.walletAccount - The wallet account to check.
* @returns Whether the wallet account has a hardware wallet vendor set.
* @not-instrumented
*/ const isHardwareWalletAccount = ({ walletAccount })=>walletAccount.hardwareWalletVendor !== void 0;
//#endregion
//#region src/modules/wallets/isWalletAccountVerified/isWalletAccountVerified.ts
/**
* Checks if a wallet account has been verified by a user.
*
* @param walletAccount - The wallet account to check.
* @returns True if the wallet account has been verified, false otherwise.
* @not-instrumented
*/ const isWalletAccountVerified = ({ walletAccount })=>{
    return walletAccount.verifiedCredentialId !== null;
};
//#endregion
//#region src/modules/wallets/networks/addNetwork/addNetwork.ts
/**
* Adds a network to the wallet provider.
*
* This function requests that the wallet provider add a network
* to its list of available networks.
*
* @param params.networkData - The network configuration data to add to the wallet.
* @param params.walletAccount - The wallet account to add the network for.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns A promise that resolves when the network addition is complete.
* @throws NetworkAddingUnavailableError If the wallet provider doesn't support adding networks.
* @instrumented
*/ const addNetwork = async ({ networkData, walletAccount }, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const walletProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"])({
        walletProviderKey: walletAccount.walletProviderKey
    }, client);
    if (walletProvider.addNetwork === void 0) throw new NetworkAddingUnavailableError({
        extraMessages: [
            `Wallet provider ${walletAccount.walletProviderKey} does not have addNetwork method`
        ],
        originalError: null,
        walletProviderKey: walletAccount.walletProviderKey
    });
    return walletProvider.addNetwork({
        networkData
    });
};
//#endregion
//#region src/modules/wallets/networks/getActiveNetworkData/getActiveNetworkData.ts
/**
* Retrieves the network configuration data for the currently active network.
*
* This function returns detailed network information including RPC URLs,
* native currency details, and block explorer URLs for the network that
* the wallet account is currently connected to.
*
* @param params.walletAccount - The wallet account to get network data for.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns A promise that resolves to the network data, or undefined if not found.
* @instrumented
*/ const getActiveNetworkData = async ({ walletAccount }, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const walletProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"])({
        walletAccount
    }, client);
    const { networkId } = await walletProvider.getActiveNetworkId();
    return {
        networkData: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getNetworkProviderFromNetworkId$2d$VEDzpV8Z$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["i"])(client).find((data)=>data.networkId === networkId && data.chain === walletProvider.chain)
    };
};
//#endregion
//#region src/modules/wallets/networks/getActiveNetworkId/getActiveNetworkId.ts
/**
* This function returns the network identifier that this wallet account's provider is currently connected to.
*
* @param params.walletAccount - The wallet account to get the network ID for.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns A promise that resolves to the active network ID for the wallet account.
* @instrumented
*/ const getActiveNetworkId = ({ walletAccount }, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"])({
        walletAccount
    }, client).getActiveNetworkId();
};
//#endregion
//#region src/modules/wallets/networks/getBalance/getBalance.ts
/**
* Retrieves the native token balance for a wallet account.
*
* This function fetches the balance of the native cryptocurrency
* (e.g., ETH, SOL, BTC, etc.) for the specified wallet account.
*
* @param params.walletAccount - The wallet account to get the balance for.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns A promise that resolves to an object containing the balance as a string or null.
* @instrumented
*/ const getBalance = async ({ walletAccount }, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const walletProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"])({
        walletAccount
    }, client);
    const { networkId } = await walletProvider.getActiveNetworkId();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getNetworkProviderFromNetworkId$2d$VEDzpV8Z$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])({
        chain: walletProvider.chain,
        networkId
    }, client).getBalance({
        address: walletAccount.address
    });
};
//#endregion
//#region src/modules/wallets/networks/getBalanceForAddress/getBalanceForAddress.ts
/**
* Retrieves the native token balance for a specific address on a given network.
*
* This function queries the balance directly for any address without requiring
* a connected wallet account, useful for checking balances of external addresses.
*
* @param params.address - The wallet address to check the balance for.
* @param params.chain - The chain (e.g., 'EVM', 'SOL').
* @param params.networkId - The specific network ID within the chain.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns A promise that resolves to an object containing the balance as a string or null.
* @instrumented
*/ const getBalanceForAddress = async ({ address, chain, networkId }, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const networkProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getNetworkProviderFromNetworkId$2d$VEDzpV8Z$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])({
        chain,
        networkId
    }, client);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"])(networkProvider, `No network found for chain ${chain} and network id ${networkId}. Please ensure you've enabled this network in the Dashboard.`);
    return networkProvider.getBalance({
        address
    });
};
//#endregion
//#region src/modules/wallets/networks/getTransactionHistory/getTransactionHistory.ts
/**
* Retrieves the transaction history for a given wallet address, chain and network.
*
* This function fetches the transaction history for a specified wallet address and chain,
* returning a list of transactions associated with that address along with nextOffset for pagination.
*
* @param params.address - The wallet address to query transactions for.
* @param params.chain - The chain to query transactions for.
* @param [params.limit] - The maximum number of transactions to return.
* @param params.networkId - The network ID to query transactions for.
* @param [params.offset] - The offset to use for pagination.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns A promise that resolves to the transaction history along with nextOffset for the given wallet address and chain.
* @instrumented
*/ const getTransactionHistory = async (params, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])({}, client).getWalletTransactions({
        address: params.address,
        chainName: params.chain,
        environmentId: core.environmentId,
        networkId: params.networkId
    });
};
//#endregion
//#region src/modules/wallets/networks/isProgrammaticNetworkSwitchAvailable/isProgrammaticNetworkSwitchAvailable.ts
/**
* Checks if programmatic network switching is available for a wallet account.
*
* This function determines whether the wallet provider supports automatic
* network switching without requiring the user to manually switch networks on their wallet app.
*
* @param params.walletAccount - The wallet account to check network switching support for.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns True if programmatic network switching is available, false otherwise.
* @not-instrumented
*/ const isProgrammaticNetworkSwitchAvailable = ({ walletAccount }, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"])({
        walletProviderKey: walletAccount.walletProviderKey
    }, client).switchActiveNetwork !== void 0;
};
//#endregion
//#region src/modules/wallets/networks/switchActiveNetwork/switchActiveNetwork.ts
/**
* Switches the active network for a wallet account.
*
* This function programmatically changes the network
* that the wallet is currently connected to.
*
* @param params.networkId - The identifier of the network to switch to. Should match the networkId of the network data.
* @param params.walletAccount - The wallet account to switch networks for.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns A promise that resolves when the network switch is complete.
* @throws NetworkSwitchingUnavailableError If the wallet provider doesn't support network switching.
* @instrumented
*/ const switchActiveNetwork = async ({ networkId, walletAccount }, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const walletProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"])({
        walletProviderKey: walletAccount.walletProviderKey
    }, client);
    if (walletProvider.switchActiveNetwork === void 0) throw new NetworkSwitchingUnavailableError({
        extraMessages: [
            `Wallet provider ${walletAccount.walletProviderKey} does not have switchActiveNetwork method`
        ],
        originalError: null,
        walletProviderKey: walletAccount.walletProviderKey
    });
    return walletProvider.switchActiveNetwork({
        networkId
    });
};
//#endregion
//#region src/modules/wallets/primaryWalletAccount/selectPrimaryWalletAccount/selectPrimaryWalletAccount.ts
/**
* Make the wallet account provided as the primary wallet account.
* @instrumented
*/ const selectPrimaryWalletAccount = async ({ walletAccount }, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    if (getPrimaryWalletAccount(client)?.id === walletAccount.id) return;
    if (walletAccount.verifiedCredentialId) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["r"])({
        response: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])({}, client).selectUserWallet({
            environmentId: core.environmentId,
            userWalletSelectionRequest: {
                walletId: walletAccount.verifiedCredentialId
            }
        })
    }, client);
    else (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getNetworkProviderFromNetworkId$2d$VEDzpV8Z$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])({
        unverifiedWalletAccountsToUpdate: [
            {
                ...walletAccount,
                lastSelectedAt: /* @__PURE__ */ new Date()
            }
        ]
    }, client);
};
//#endregion
//#region src/modules/wallets/disconnectWalletAccount/disconnectWalletAccount.ts
/**
* This function disconnects the specified wallet account with the wallet provider.
*
* The wallet account is not removed from the user's profile or from dynamic's state,
* it is only responsible for terminating the connection with the wallet provider.
* @not-instrumented
*/ const disconnectWalletAccount = async ({ walletAccount }, client)=>{
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"])({
            walletAccount
        }, client).disconnectWalletAccount?.({
            walletAccount
        });
    } catch (error) {
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["v"]) return;
        throw error;
    }
};
//#endregion
//#region src/modules/wallets/removeWalletAccount/removeWalletAccount.ts
/**
* Removes a wallet account from the current session or user (if authenticated).
*
* This function both disconnects and removes the specified wallet account,
* updating local state and server records (if there is an authenticated user).
* For verified wallets, it will unlink them from the user's account.
*
* @param params.walletAccount - The wallet account to remove.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns A promise that resolves when the wallet account is successfully removed.
* @instrumented
*/ const removeWalletAccount = async ({ walletAccount }, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    const apiClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])({}, client);
    await disconnectWalletAccount({
        walletAccount
    }, client);
    if (!walletAccount.verifiedCredentialId) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getNetworkProviderFromNetworkId$2d$VEDzpV8Z$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["s"])({
            unverifiedWalletAccount: walletAccount
        }, client);
        return;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["r"])({
        response: await apiClient.verifyUnlink({
            environmentId: core.environmentId,
            verifyUnlinkRequest: {
                walletId: walletAccount.verifiedCredentialId
            }
        })
    }, client);
};
//#endregion
//#region src/modules/wallets/signMessage/signMessage.ts
/**
* Signs a message using the specified wallet account.
*
* This function uses the wallet's private key to cryptographically sign
* the provided message.
*
* @param params.walletAccount - The wallet account to use for signing.
* @param params.message - The message to sign.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns A promise that resolves to an object containing the signature.
* @instrumented
*/ const signMessage = async ({ walletAccount, message }, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const walletProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"])({
        walletAccount
    }, client);
    assertWalletProviderMethodDefined(walletProvider, "signMessage");
    const { signature } = await walletProvider.signMessage({
        message,
        walletAccount
    });
    return {
        signature
    };
};
//#endregion
//#region src/modules/wallets/transferAmount/transferAmount.ts
/**
* Transfers an amount of currency from the wallet account to a recipient.
*
* Supports native token transfers and, where supported by the chain,
* fungible/token transfers via the optional `token` parameter.
*
* @param params.walletAccount - The wallet account to transfer from.
* @param params.amount - The amount to transfer as a decimal string (e.g. "1.5").
* @param params.recipient - The recipient address.
* @param params.token - Optional token info for non-native transfers.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns A promise that resolves to an object containing the transaction hash.
* @throws If the wallet provider does not support the transfer amount method.
* @instrumented
*/ const transferAmount = async ({ walletAccount, amount, recipient, token }, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const walletProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"])({
        walletAccount
    }, client);
    assertWalletProviderMethodDefined(walletProvider, "transferAmount");
    const { transactionHash } = await walletProvider.transferAmount({
        amount,
        recipient,
        token,
        walletAccount
    });
    return {
        transactionHash
    };
};
//#endregion
//#region src/modules/wallets/transferWalletAccount/transferWalletAccount.ts
/**
* Transfer a wallet account to the current user's account.
*
* This function requires the user to sign a message to prove wallet ownership,
* then transfers the wallet account to the current user's account.
*
* @param params.walletProviderKey - The key of the wallet provider of the wallet account to transfer.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns A promise that resolves to the transferred wallet account.
* @instrumented
*/ const transferWalletAccount = async ({ walletProviderKey }, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    return verifyWalletAccountForSignInOrTransfer({
        isTransfer: true,
        walletAccount: await connectWithWalletProvider({
            addToDynamicWalletAccounts: false,
            walletProviderKey
        }, client)
    }, client);
};
//#endregion
//#region src/modules/wallets/utils/getWalletAccountFromAddress/getWalletAccountFromAddress.ts
/**
* Finds a wallet account by address and blockchain.
*
* This function searches through the current session's wallet accounts
* to find one matching the specified address and chain.
*
* @param params.address - The wallet address to search for.
* @param params.chain - The blockchain the wallet belongs to.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns The matching wallet account, or undefined if not found.
* @not-instrumented
*/ const getWalletAccountFromAddress = ({ address, chain }, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["y"])(client).find((walletAccount)=>walletAccount.address === address && walletAccount.chain === chain);
};
//#endregion
//#region src/modules/wallets/walletProvider/events/offWalletProviderEvent/offWalletProviderEvent.ts
/**
* Removes a listener from a wallet provider event.
* You can alternatively use the returned function from `onWalletProviderEvent` instead of using this function.
*
* @param params.callback - The callback function to remove. This should be the same function that was passed to the `onWalletProviderEvent` function.
* @see onWalletProviderEvent
* @param params.event - The event name to remove the listener from.
* @param params.walletProviderKey - The unique key identifying the wallet provider to remove the listener from.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @instrumented
*/ const offWalletProviderEvent = ({ callback, event, walletProviderKey }, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const walletProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"])({
        walletProviderKey
    }, client);
    assertWalletProviderMethodDefined(walletProvider, "events");
    walletProvider.events.off(event, callback);
};
//#endregion
//#region src/modules/wallets/walletProvider/events/onWalletProviderEvent/onWalletProviderEvent.ts
/**
* Listens to a wallet provider event.
*
* @param params.callback - The callback function to execute when the event is fired.
* @param params.event - The event name to listen for.
* @param params.walletProviderKey - The unique key identifying the wallet provider to listen to.
* @param [client] - The Dynamic client instance. Only required when using multiple Dynamic clients.
* @returns A function that can be called to remove the listener.
* @instrumented
*/ const onWalletProviderEvent = ({ callback, event, walletProviderKey }, client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])())=>{
    const walletProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"])({
        walletProviderKey
    }, client);
    assertWalletProviderMethodDefined(walletProvider, "events");
    walletProvider.events.on(event, callback);
    return ()=>{
        walletProvider.events.off(event, callback);
    };
};
//#endregion
//#region src/utils/parseUserAgent/parseUserAgent.ts
const browserMatchers = [
    {
        name: "Edge",
        pattern: /Edg(e|A|iOS)?\//
    },
    {
        name: "Opera",
        pattern: /OPR\/|Opera/
    },
    {
        name: "Samsung Browser",
        pattern: /SamsungBrowser/
    },
    {
        name: "Firefox",
        pattern: /Firefox/
    },
    {
        name: "Safari",
        pattern: /^(?!.*(?:Chrome|Chromium|CriOS)).*Safari/
    },
    {
        name: "Chrome",
        pattern: /Chrome|CriOS/
    }
];
const mobileOsNames = new Set([
    "iPhone",
    "iPad",
    "Android"
]);
const osMatchers = [
    {
        name: "iPhone",
        pattern: /iPhone/
    },
    {
        name: "iPad",
        pattern: /iPad/
    },
    {
        name: "Android",
        pattern: /Android/
    },
    {
        name: "Windows",
        pattern: /Windows/
    },
    {
        name: "macOS",
        pattern: /Macintosh|Mac OS X/
    },
    {
        name: "Linux",
        pattern: /Linux/
    },
    {
        name: "ChromeOS",
        pattern: /CrOS/
    }
];
/** @not-instrumented */ const parseUserAgent = ({ userAgent })=>{
    if (!userAgent?.trim()) return null;
    const browser = browserMatchers.find(({ pattern })=>pattern.test(userAgent))?.name;
    const os = osMatchers.find(({ pattern })=>pattern.test(userAgent))?.name;
    if (!browser && !os) return null;
    const isMobile$1 = os ? mobileOsNames.has(os) : false;
    return {
        displayText: browser && os ? `${browser} on ${os}` : browser ?? os ?? "",
        type: isMobile$1 ? "mobile" : "desktop"
    };
};
//#endregion
//#region src/exports/index.ts
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$assert$2d$package$2d$version$40$0$2e$19$2e$0$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$assert$2d$package$2d$version$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertPackageVersion"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["L"]);
;
 //# sourceMappingURL=index.esm.js.map
}}),
"[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/index.esm.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/InvalidParamError-CnPeSjBW.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getNetworkProviderFromNetworkId$2d$VEDzpV8Z$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/getNetworkProviderFromNetworkId-VEDzpV8Z.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/getVerifiedCredentialForWalletAccount-B58hODrW.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$NotWaasWalletAccountError$2d$B5QkZWrs$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/NotWaasWalletAccountError-B5QkZWrs.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$isMfaRequiredForAction$2d$Dkj_caxl$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/isMfaRequiredForAction-Dkj_caxl.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$assert$2d$package$2d$version$40$0$2e$19$2e$0$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$assert$2d$package$2d$version$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+assert-package-version@0.19.0/node_modules/@dynamic-labs-sdk/assert-package-version/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$914$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.914/node_modules/@dynamic-labs/sdk-api-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter3$40$5$2e$0$2e$1$2f$node_modules$2f$eventemitter3$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eventemitter3@5.0.1/node_modules/eventemitter3/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$browser$40$13$2e$1$2e$0$2f$node_modules$2f40$simplewebauthn$2f$browser$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@simplewebauthn+browser@13.1.0/node_modules/@simplewebauthn/browser/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/index.esm.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/InvalidParamError-CnPeSjBW.esm.js [app-client] (ecmascript) <export j as getDefaultClient>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getDefaultClient": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/InvalidParamError-CnPeSjBW.esm.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/getSignedSessionId-CgoBQlYG.esm.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "n": (()=>consumeMfaTokenIfRequiredForAction),
    "t": (()=>getSignedSessionId)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/InvalidParamError-CnPeSjBW.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$isMfaRequiredForAction$2d$Dkj_caxl$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/isMfaRequiredForAction-Dkj_caxl.esm.js [app-client] (ecmascript)");
;
;
//#region src/modules/mfa/consumeMfaTokenIfRequiredForAction/consumeMfaTokenIfRequiredForAction.ts
/** @instrumented */ const consumeMfaTokenIfRequiredForAction = async ({ mfaAction }, client)=>{
    if (!await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$isMfaRequiredForAction$2d$Dkj_caxl$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])({
        mfaAction
    }, client)) return;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$isMfaRequiredForAction$2d$Dkj_caxl$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["r"])(client);
};
//#endregion
//#region src/modules/sessionKeys/generateNonceSignature/generateNonceSignature.ts
/** @not-instrumented */ const generateNonceSignature = async ({ nonce }, client)=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"])(core.keychain, "Keychain service not available");
    return {
        signature: await core.keychain.sign("session", nonce)
    };
};
//#endregion
//#region src/modules/sessionKeys/generateSessionSignature/generateSessionSignature.ts
/** @not-instrumented */ const generateSessionSignature = async ({ sessionId }, client)=>{
    return {
        signature: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client).keychain.sign("session", sessionId)
    };
};
//#endregion
//#region src/modules/sessionKeys/getSignedSessionId/getSignedSessionId.ts
/** @instrumented */ const getSignedSessionId = async (client)=>{
    const sessionId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client).state.get().user?.sessionId;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"])(sessionId, "Session ID is required");
    const { signature: signedSessionId } = await generateSessionSignature({
        sessionId
    }, client);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"])(signedSessionId, "Signed session ID is required");
    const nonce = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["h"])(client);
    const { signature: nonceSignature } = await generateNonceSignature({
        nonce
    }, client);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"])(nonceSignature, "Nonce signature is required");
    return {
        signature: `${signedSessionId}/${nonceSignature}/${nonce}`
    };
};
;
 //# sourceMappingURL=getSignedSessionId-CgoBQlYG.esm.js.map
}}),
"[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/core.esm.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ClientsDoNotMatchError": (()=>ClientsDoNotMatchError),
    "MethodNotImplementedError": (()=>MethodNotImplementedError),
    "MultipleClientsFoundError": (()=>MultipleClientsFoundError),
    "bufferToBase64": (()=>bufferToBase64),
    "createBaseNetworkProvider": (()=>createBaseNetworkProvider),
    "createRealtimeChannelSchema": (()=>createRealtimeChannelSchema),
    "createWalletProviderEventEmitter": (()=>createWalletProviderEventEmitter),
    "filterDuplicates": (()=>filterDuplicates),
    "formatWalletProviderGroupKey": (()=>formatWalletProviderGroupKey),
    "getActiveNetworkIdFromLastKnownRegistry": (()=>getActiveNetworkIdFromLastKnownRegistry),
    "getAllProvidersFromWindow": (()=>getAllProvidersFromWindow),
    "getInjectedProviderFromWindow": (()=>getInjectedProviderFromWindow),
    "getLastKnownNetworkRegistry": (()=>getLastKnownNetworkRegistry),
    "getNetworkDataForNetworkId": (()=>getNetworkDataForNetworkId),
    "parseAmountToSmallestUnit": (()=>parseAmountToSmallestUnit),
    "registerExtension": (()=>registerExtension),
    "switchActiveNetworkInLastKnownRegistry": (()=>switchActiveNetworkInLastKnownRegistry),
    "waitForProjectSettings": (()=>waitForProjectSettings)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/InvalidParamError-CnPeSjBW.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getNetworkProviderFromNetworkId$2d$VEDzpV8Z$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/getNetworkProviderFromNetworkId-VEDzpV8Z.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/getVerifiedCredentialForWalletAccount-B58hODrW.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$isMfaRequiredForAction$2d$Dkj_caxl$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/isMfaRequiredForAction-Dkj_caxl.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getSignedSessionId$2d$CgoBQlYG$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/getSignedSessionId-CgoBQlYG.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$assert$2d$package$2d$version$40$0$2e$19$2e$0$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$assert$2d$package$2d$version$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+assert-package-version@0.19.0/node_modules/@dynamic-labs-sdk/assert-package-version/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/mini/schemas.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter3$40$5$2e$0$2e$1$2f$node_modules$2f$eventemitter3$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eventemitter3@5.0.1/node_modules/eventemitter3/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter3$40$5$2e$0$2e$1$2f$node_modules$2f$eventemitter3$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eventemitter3@5.0.1/node_modules/eventemitter3/index.mjs [app-client] (ecmascript) <locals>");
;
;
;
;
;
;
;
;
//#region src/errors/ClientsDoNotMatchError.ts
var ClientsDoNotMatchError = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P"] {
    constructor(){
        super({
            cause: null,
            code: "clients_do_not_match_error",
            docsUrl: null,
            name: "ClientsDoNotMatchError",
            shortMessage: "Clients do not match"
        });
    }
};
//#endregion
//#region src/errors/MethodNotImplementedError.ts
var MethodNotImplementedError = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P"] {
    constructor(methodName){
        super({
            cause: null,
            code: "method_not_implemented_error",
            docsUrl: null,
            name: "MethodNotImplementedError",
            shortMessage: `This method is not implemented: ${methodName}`
        });
    }
};
//#endregion
//#region src/errors/MultipleClientsFoundError.ts
var MultipleClientsFoundError = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P"] {
    constructor(){
        super({
            cause: null,
            code: "multiple_clients_found_error",
            docsUrl: null,
            name: "MultipleClientsFoundError",
            shortMessage: "Multiple Dynamic clients have been initialized. Please provide the intended client for this action explicitly"
        });
    }
};
//#endregion
//#region src/modules/extension/registerExtension/registerExtension.ts
/**
* Registers an extension to the client.
*
* Other extensions can be aware of which extensions are present,
* and allows creating dependencies between extensions.
*
* @param client - The client instance.
* @param extensionKey - The key of the extension to register.
* @returns The client instance.
* @instrumented
*/ const registerExtension = ({ extensionKey }, client)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client).extensions.add(extensionKey);
};
//#endregion
//#region src/modules/initializeClient/waitForProjectSettings/waitForProjectSettings.ts
/** @instrumented */ const waitForProjectSettings = async (client)=>{
    const projectSettingsTracker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client).initTrack.getTracker(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getNetworkProviderFromNetworkId$2d$VEDzpV8Z$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"])(projectSettingsTracker, "Project settings tracker not found");
    await projectSettingsTracker.promise;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"])(client.projectSettings, "Project settings still not available after awaiting its tracker");
    return client.projectSettings;
};
//#endregion
//#region src/modules/wallets/networks/createBaseNetworkProvider/createBaseNetworkProvider.ts
/** @instrumented */ const createBaseNetworkProvider = (chain, networkData)=>({
        blockExplorerUrls: networkData.blockExplorerUrls,
        chain,
        displayName: networkData.displayName,
        iconUrl: networkData.iconUrl,
        id: `${chain}-${networkData.networkId}`,
        nativeCurrency: networkData.nativeCurrency,
        networkId: networkData.networkId,
        rpcUrls: networkData.rpcUrls,
        testnet: networkData.testnet
    });
//#endregion
//#region src/modules/wallets/networks/getNetworkDataForNetworkId/getNetworkDataForNetworkId.ts
/** @instrumented */ const getNetworkDataForNetworkId = ({ networkId, chain }, client)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getNetworkProviderFromNetworkId$2d$VEDzpV8Z$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["i"])(client).find((networkData)=>networkData.networkId === networkId && networkData.chain === chain);
};
//#endregion
//#region src/modules/wallets/networks/lastKnownNetworkRegistry/createLastKnownNetworkRegistry/schema.ts
const networkRegistryStorageKeySchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getNetworkProviderFromNetworkId$2d$VEDzpV8Z$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["M"])({
    key: "lastKnownNetworkRegistry",
    schema: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["record"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$mini$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])())
});
//#endregion
//#region src/modules/wallets/networks/lastKnownNetworkRegistry/createLastKnownNetworkRegistry/createLastKnownNetworkRegistry.ts
/**
* Creates the registry that keeps tabs on which wallet provider is
* connected to which network.
*
* Reminder that this will not be used for chains that have an internal way to
* switch networks (ex EVM).
* @not-instrumented
*/ const createLastKnownNetworkRegistry = (client)=>{
    const core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])(client);
    const walletProviderKeyToNetworkId = /* @__PURE__ */ new Map();
    const getNetworkId = async ({ walletProviderKey })=>{
        if (walletProviderKeyToNetworkId.has(walletProviderKey)) return {
            networkId: walletProviderKeyToNetworkId.get(walletProviderKey)
        };
        const storageRecords = await core.storage.getItem(networkRegistryStorageKeySchema);
        if (storageRecords && storageRecords[walletProviderKey]) {
            const networkId = storageRecords[walletProviderKey];
            walletProviderKeyToNetworkId.set(walletProviderKey, networkId);
            return {
                networkId
            };
        }
        const walletProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"])({
            walletProviderKey
        }, client);
        const networkProviders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getNetworkProviderFromNetworkId$2d$VEDzpV8Z$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"])(client);
        if (networkProviders.length === 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getNetworkProviderFromNetworkId$2d$VEDzpV8Z$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"]();
        const defaultNetworkProvider = networkProviders.find((networkProvider)=>networkProvider.chain === walletProvider.chain);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"])(defaultNetworkProvider, `No networks found for chain ${walletProvider.chain}`);
        walletProviderKeyToNetworkId.set(walletProviderKey, defaultNetworkProvider.networkId);
        return {
            networkId: defaultNetworkProvider.networkId
        };
    };
    const setNetworkId = async ({ networkId, walletProviderKey })=>{
        walletProviderKeyToNetworkId.set(walletProviderKey, networkId);
        await core.storage.setItem(networkRegistryStorageKeySchema, Object.fromEntries(walletProviderKeyToNetworkId.entries()));
    };
    return {
        getNetworkId,
        setNetworkId
    };
};
//#endregion
//#region src/modules/wallets/networks/lastKnownNetworkRegistry/getLastKnownNetworkRegistry/getLastKnownNetworkRegistry.ts
const getLastKnownNetworkRegistry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])("last-known-network-registry", (client)=>createLastKnownNetworkRegistry(client));
//#endregion
//#region src/modules/wallets/utils/formatWalletProviderGroupKey/formatWalletProviderGroupKey.ts
/** @not-instrumented */ const formatWalletProviderGroupKey = (walletName)=>walletName.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
//#endregion
//#region src/modules/wallets/utils/getAllProvidersFromWindow/getAllProvidersFromWindow.ts
/**
* Retrieves all providers from a window path.
*
* Unlike getInjectedProviderFromWindow which returns only the first provider,
* this function returns ALL providers found at the path, including those
* in a .providers array if present.
*
* This is particularly useful for detecting wallet providers in wallet app
* in-app browsers, where wallets inject their provider into the window object.
*
* @param path - Dot-separated path to traverse (e.g., "ethereum")
* @returns Array of all providers found, or empty array if none
* @not-instrumented
*/ const getAllProvidersFromWindow = (path)=>{
    if (typeof window === "undefined") return [];
    const target = path.split(".").reduce((acc, key)=>acc == null ? null : acc[key], window);
    if (typeof target !== "object" || target === null) return [];
    if (Array.isArray(target)) return target;
    const providers = [];
    const providersArray = target.providers;
    if (providersArray && Array.isArray(providersArray)) providers.push(...providersArray);
    providers.push(target);
    return providers;
};
//#endregion
//#region src/modules/wallets/utils/getInjectedProviderFromWindow/getInjectedProviderFromWindow.ts
/** @not-instrumented */ const getInjectedProviderFromWindow = (path)=>{
    if (typeof window === "undefined") return null;
    const target = path.split(".").reduce((acc, key)=>acc == null ? null : acc[key], window);
    if (typeof target !== "object" || target === null) return null;
    if (Array.isArray(target)) return target.length > 0 ? target[0] : null;
    const providersArray = target.providers;
    if (providersArray && Array.isArray(providersArray)) return providersArray.length > 0 ? providersArray[0] : null;
    return target;
};
//#endregion
//#region src/modules/wallets/walletProvider/defaultImplementations/getActiveNetworkIdFromLastKnownRegistry/getActiveNetworkIdFromLastKnownRegistry.ts
/** @instrumented */ const getActiveNetworkIdFromLastKnownRegistry = async ({ client, walletProviderKey })=>{
    return getLastKnownNetworkRegistry(client).getNetworkId({
        walletProviderKey
    });
};
//#endregion
//#region src/modules/wallets/walletProvider/defaultImplementations/switchActiveNetworkInLastKnownRegistry/switchActiveNetworkInLastKnownRegistry.ts
/** @instrumented */ const switchActiveNetworkInLastKnownRegistry = async ({ client, networkId, walletProviderKey })=>{
    await getLastKnownNetworkRegistry(client).setNetworkId({
        networkId,
        walletProviderKey
    });
};
//#endregion
//#region src/modules/wallets/walletProvider/events/createWalletProviderEventEmitter/createWalletProviderEventEmitter.ts
/**
* Takes a callback that registers handlers for the external wallet provider.
* Returns both a getter of an eventEmitter that can be exposed via the wallet provider
* and a callback that will be used to destroy the listeners.
* @not-instrumented
*/ const createWalletProviderEventEmitter = ({ removeEventListeners, setupEventListeners, supportedEvents = [
    "accountsChanged",
    "disconnected",
    "networkChanged"
] })=>{
    let eventEmitter;
    /** Value returned by setupEventListeners */ let setupReturnValue;
    const handleAccountsChanged = (params)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"])(eventEmitter, "Event emitter not defined");
        eventEmitter.emit("accountsChanged", params);
    };
    const handleDisconnected = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"])(eventEmitter, "Event emitter not defined");
        eventEmitter.emit("disconnected");
    };
    const handleNetworkChanged = (params)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"])(eventEmitter, "Event emitter not defined");
        eventEmitter.emit("networkChanged", params);
    };
    const cleanupEventEmitter = ()=>{
        if (!eventEmitter) return;
        removeEventListeners({
            handleAccountsChanged,
            handleDisconnected,
            handleNetworkChanged,
            setupReturnValue
        });
        eventEmitter = void 0;
    };
    const getEventEmitter = ()=>{
        if (!eventEmitter) {
            eventEmitter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter3$40$5$2e$0$2e$1$2f$node_modules$2f$eventemitter3$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"]();
            setupReturnValue = setupEventListeners({
                handleAccountsChanged,
                handleDisconnected,
                handleNetworkChanged
            });
        }
        return Object.assign(eventEmitter, {
            supportedEvents
        });
    };
    return {
        cleanupEventEmitter,
        getEventEmitter
    };
};
//#endregion
//#region src/services/realtime/createRealtimeChannelSchema/createRealtimeChannelSchema.ts
/**
* Defines a typed schema for a realtime channel — analogous to `createStorageKeySchema`
* for storage. Pairs a channel name with a Zod schema that validates the shape of
* messages sent and received on that channel. Pass the result to the realtime service's
* `subscribe` / `unsubscribe` / `publish` methods to get end-to-end type safety.
* @instrumented
*/ const createRealtimeChannelSchema = (params)=>params;
//#endregion
//#region src/utils/bufferToBase64/bufferToBase64.ts
/** @not-instrumented */ const bufferToBase64 = (buf)=>{
    const binstr = Array.prototype.map.call(buf, (ch)=>String.fromCharCode(ch)).join("");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getNetworkProviderFromNetworkId$2d$VEDzpV8Z$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["A"])().from(binstr, "binary").toString("base64");
};
//#endregion
//#region src/utils/filterDuplicates/filterDuplicates.ts
/**
* Filter duplicates from an array by equality.
* Uses a Set internally.
* @not-instrumented
*/ const filterDuplicates = (array)=>Array.from(new Set(array));
//#endregion
//#region src/utils/parseAmountToSmallestUnit/parseAmountToSmallestUnit.ts
/**
* Converts a human-readable decimal amount string to the smallest unit
* representation as a bigint, using string-based arithmetic to avoid
* floating-point precision loss.
*
* @example
* parseAmountToSmallestUnit({ amount: '1.5', decimals: 9 })   // 1500000000n  (1.5 SOL in lamports)
* parseAmountToSmallestUnit({ amount: '1.5', decimals: 8 })   // 150000000n   (1.5 BTC in satoshis)
* parseAmountToSmallestUnit({ amount: '10.5', decimals: 6 })  // 10500000n    (10.5 USDC)
* parseAmountToSmallestUnit({ amount: '0.1', decimals: 9 })   // 100000000n   (no float error)
*
* @param params.amount - The amount as a decimal string (e.g. "1.5").
* @param params.decimals - The number of decimal places for the token.
* @returns The amount in smallest units as a bigint.
* @not-instrumented
*/ const parseAmountToSmallestUnit = ({ amount, decimals })=>{
    const [whole = "0", fraction = ""] = amount.split(".");
    const paddedFraction = fraction.padEnd(decimals, "0").slice(0, decimals);
    return BigInt(whole + paddedFraction);
};
//#endregion
//#region src/exports/core.ts
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$assert$2d$package$2d$version$40$0$2e$19$2e$0$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$assert$2d$package$2d$version$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertPackageVersion"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["L"]);
;
 //# sourceMappingURL=core.esm.js.map
}}),
"[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/core.esm.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/InvalidParamError-CnPeSjBW.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getNetworkProviderFromNetworkId$2d$VEDzpV8Z$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/getNetworkProviderFromNetworkId-VEDzpV8Z.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/getVerifiedCredentialForWalletAccount-B58hODrW.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$isMfaRequiredForAction$2d$Dkj_caxl$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/isMfaRequiredForAction-Dkj_caxl.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getSignedSessionId$2d$CgoBQlYG$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/getSignedSessionId-CgoBQlYG.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$assert$2d$package$2d$version$40$0$2e$19$2e$0$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$assert$2d$package$2d$version$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+assert-package-version@0.19.0/node_modules/@dynamic-labs-sdk/assert-package-version/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter3$40$5$2e$0$2e$1$2f$node_modules$2f$eventemitter3$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eventemitter3@5.0.1/node_modules/eventemitter3/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/core.esm.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/InvalidParamError-CnPeSjBW.esm.js [app-client] (ecmascript) <export F as getCore>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getCore": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/InvalidParamError-CnPeSjBW.esm.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/getVerifiedCredentialForWalletAccount-B58hODrW.esm.js [app-client] (ecmascript) <export O as onEvent>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "onEvent": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["O"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/getVerifiedCredentialForWalletAccount-B58hODrW.esm.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/getVerifiedCredentialForWalletAccount-B58hODrW.esm.js [app-client] (ecmascript) <export b as formatWalletProviderKey>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "formatWalletProviderKey": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/getVerifiedCredentialForWalletAccount-B58hODrW.esm.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/InvalidParamError-CnPeSjBW.esm.js [app-client] (ecmascript) <export C as getSessionKeys>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getSessionKeys": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/InvalidParamError-CnPeSjBW.esm.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/InvalidParamError-CnPeSjBW.esm.js [app-client] (ecmascript) <export w as isCookieEnabled>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isCookieEnabled": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["w"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/InvalidParamError-CnPeSjBW.esm.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/InvalidParamError-CnPeSjBW.esm.js [app-client] (ecmascript) <export f as createDeviceSignatureHeadersMiddleware>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createDeviceSignatureHeadersMiddleware": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/InvalidParamError-CnPeSjBW.esm.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/InvalidParamError-CnPeSjBW.esm.js [app-client] (ecmascript) <export j as getDefaultClient>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getDefaultClient": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/InvalidParamError-CnPeSjBW.esm.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/InvalidParamError-CnPeSjBW.esm.js [app-client] (ecmascript) <export S as getElevatedAccessToken>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getElevatedAccessToken": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["S"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/InvalidParamError-CnPeSjBW.esm.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/getVerifiedCredentialForWalletAccount-B58hODrW.esm.js [app-client] (ecmascript) <export r as updateAuthFromVerifyResponse>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "updateAuthFromVerifyResponse": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["r"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getVerifiedCredentialForWalletAccount$2d$B58hODrW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/getVerifiedCredentialForWalletAccount-B58hODrW.esm.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/getSignedSessionId-CgoBQlYG.esm.js [app-client] (ecmascript) <export t as getSignedSessionId>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getSignedSessionId": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getSignedSessionId$2d$CgoBQlYG$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getSignedSessionId$2d$CgoBQlYG$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/getSignedSessionId-CgoBQlYG.esm.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/InvalidParamError-CnPeSjBW.esm.js [app-client] (ecmascript) <export v as MfaInvalidOtpError>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "MfaInvalidOtpError": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["v"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/InvalidParamError-CnPeSjBW.esm.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/InvalidParamError-CnPeSjBW.esm.js [app-client] (ecmascript) <export _ as MfaRateLimitedError>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "MfaRateLimitedError": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/InvalidParamError-CnPeSjBW.esm.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/InvalidParamError-CnPeSjBW.esm.js [app-client] (ecmascript) <export g as SandboxMaximumThresholdReachedError>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SandboxMaximumThresholdReachedError": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["g"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/InvalidParamError-CnPeSjBW.esm.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/isMfaRequiredForAction-Dkj_caxl.esm.js [app-client] (ecmascript) <export t as isMfaRequiredForAction>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isMfaRequiredForAction": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$isMfaRequiredForAction$2d$Dkj_caxl$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$isMfaRequiredForAction$2d$Dkj_caxl$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/isMfaRequiredForAction-Dkj_caxl.esm.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/isMfaRequiredForAction-Dkj_caxl.esm.js [app-client] (ecmascript) <export r as consumeMfaToken>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "consumeMfaToken": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$isMfaRequiredForAction$2d$Dkj_caxl$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["r"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$isMfaRequiredForAction$2d$Dkj_caxl$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/isMfaRequiredForAction-Dkj_caxl.esm.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/getNetworkProviderFromNetworkId-VEDzpV8Z.esm.js [app-client] (ecmascript) <export j as generateSessionKeys>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "generateSessionKeys": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getNetworkProviderFromNetworkId$2d$VEDzpV8Z$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getNetworkProviderFromNetworkId$2d$VEDzpV8Z$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/getNetworkProviderFromNetworkId-VEDzpV8Z.esm.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/isMfaRequiredForAction-Dkj_caxl.esm.js [app-client] (ecmascript) <export n as getMfaMethods>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getMfaMethods": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$isMfaRequiredForAction$2d$Dkj_caxl$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$isMfaRequiredForAction$2d$Dkj_caxl$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/isMfaRequiredForAction-Dkj_caxl.esm.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/InvalidParamError-CnPeSjBW.esm.js [app-client] (ecmascript) <export u as createApiClient>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createApiClient": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$InvalidParamError$2d$CnPeSjBW$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/InvalidParamError-CnPeSjBW.esm.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/NotWaasWalletAccountError-B5QkZWrs.esm.js [app-client] (ecmascript) <export n as refreshAuth>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "refreshAuth": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$NotWaasWalletAccountError$2d$B5QkZWrs$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$NotWaasWalletAccountError$2d$B5QkZWrs$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/NotWaasWalletAccountError-B5QkZWrs.esm.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/getNetworkProviderFromNetworkId-VEDzpV8Z.esm.js [app-client] (ecmascript) <export f as hasExtension>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "hasExtension": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getNetworkProviderFromNetworkId$2d$VEDzpV8Z$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2d$sdk$2b$client$40$0$2e$19$2e$0_bufferutil$40$4$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$1_8f4299f3ca00df5585e9c3ec6e42a400$2f$node_modules$2f40$dynamic$2d$labs$2d$sdk$2f$client$2f$dist$2f$getNetworkProviderFromNetworkId$2d$VEDzpV8Z$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs-sdk+client@0.19.0_bufferutil@4.1.0_react-dom@19.2.4_react@19.2.4__react@1_8f4299f3ca00df5585e9c3ec6e42a400/node_modules/@dynamic-labs-sdk/client/dist/getNetworkProviderFromNetworkId-VEDzpV8Z.esm.js [app-client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=a34f6_%40dynamic-labs-sdk_client_dist_6ac8c60a._.js.map