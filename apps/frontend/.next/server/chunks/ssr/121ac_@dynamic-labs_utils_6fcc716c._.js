module.exports = {

"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/package.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/bufferToBase64/bufferPolyfill.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$buffer$40$6$2e$0$2e$3$2f$node_modules$2f$buffer$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/buffer@6.0.3/node_modules/buffer/index.js [app-ssr] (ecmascript)");
'use client';
;
/* eslint-disable */ /**
 * This is needed for the browser to work with buffer
 */ if (typeof window !== 'undefined') {
    window.global = globalThis;
    if (!window.Buffer && typeof window.Buffer === 'undefined') {
        Object.assign(window, {
            Buffer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$buffer$40$6$2e$0$2e$3$2f$node_modules$2f$buffer$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Buffer"]
        });
    }
}
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/bufferToBase64/bufferToBase64.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "bufferToBase64": (()=>bufferToBase64)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$bufferToBase64$2f$bufferPolyfill$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/bufferToBase64/bufferPolyfill.js [app-ssr] (ecmascript)");
'use client';
;
const bufferToBase64 = (buf)=>{
    const binstr = Array.prototype.map.call(buf, (ch)=>String.fromCharCode(ch)).join('');
    return Buffer.from(binstr, 'binary').toString('base64');
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/logger/logger.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
const logger = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$logger$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$logger$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Logger"]('utils');
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/CancellablePromise/CancellablePromise.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CancellablePromise": (()=>CancellablePromise)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$logger$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/logger/logger.js [app-ssr] (ecmascript)");
'use client';
;
/* eslint-disable multiline-comment-style */ const defaultCancel = ()=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$logger$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].error("Tried to cancel CancellablePromise without ever assigning it's '_cancel' method");
};
/** An extension of Promise that allows you to explicitly cancel a promise with an external reference to it.
 * Cancelling CancellablePromise causes it to reject with reason set to the parameter passed to the cancel method.
 * When CancellablePromise rejects, it provides a boolean to indicate whether it was cancelled, alongside the reason.
 *
 * @example
 * // Cancelling this promise
 * const promise = new CancellablePromise(() => {}).onCancel(console.log)
 * promise.cancel('User cancelled')
 *
 * // Setting up listeners for resolve, cancel and reject
 * // (notice calling catch after onCancel prevents catch from being called by cancellation)
 * new CancellablePromise(() => {})
 *  .then(() => console.log('Promise resolved'))
 *  .onCancel(() => console.log('Promise was cancelled'))
 *  .catch(() => console.log('Promise was rejected but NOT cancelled'))
 *
 * // Telling whether catch was cause of cancel or not
 * new CancellablePromise(() => {})
 *  .then(() => console.log('Promise resolved'))
 *  .catch(({ reason, wasCancelled }) => console.log('Promise was rejected. Cancelled: ' + wasCancelled))
 */ class CancellablePromise extends Promise {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    internalCancel(reason) {
        defaultCancel();
    }
    constructor(executor){
        let superReject = defaultCancel;
        let superResolve = ()=>{};
        super((resolve, reject)=>{
            superReject = reject;
            superResolve = resolve;
        });
        this.internalIsCancelled = false;
        this.isSettled = false;
        executor((value)=>{
            if (!this.isCancelled && !this.isSettled) superResolve(value);
            this.isSettled = true;
        }, (reason)=>{
            if (!this.isCancelled && !this.isSettled) superReject(reason);
            this.isSettled = true;
        });
        this.internalCancel = superReject;
    }
    /** Whether this CancellablePromise was cancelled. */ get isCancelled() {
        return this.internalIsCancelled;
    }
    /** Cancels the promise. This causes the promise to reject with { wasCancelled: true, reason: reason }
     * where the reason is the provided argument.
     * @returns The cancelled promise.
     */ cancel(reason) {
        if (this.isSettled) return this;
        this.internalIsCancelled = true;
        this.internalCancel(reason);
        this.isSettled = true;
        return this;
    }
    internalOnCancel(listener, options) {
        const newPromise = new CancellablePromise((resolve, reject)=>{
            this.internalThen(resolve, ({ wasCancelled, reason })=>{
                if (wasCancelled) resolve(listener(reason));
                else reject(reason);
            }, {
                ignoreOnCancel: true
            });
        });
        /** Tie the new promise's cancel to this promise's cancel */ if (!(options === null || options === void 0 ? void 0 : options.ignoreOnCancel)) {
            newPromise.internalOnCancel((reason)=>{
                this.cancel(reason);
            }, {
                ignoreOnCancel: true
            });
        }
        return newPromise;
    }
    /** Allows reacting to this CancellablePromise being cancelled  */ onCancel(listener) {
        return this.internalOnCancel(listener);
    }
    internalThen(onFulfilled, onRejected, options) {
        /** Create a catch handler that is undefined if the received callback is undefined */ const catchHandler = onRejected ? (reason)=>onRejected({
                reason,
                wasCancelled: this.isCancelled
            }) : onRejected;
        // /** Create the CancellablePromise we will returned, associated to the then promise */
        const newPromise = CancellablePromise.fromPromise(super.then(onFulfilled, catchHandler));
        /** Tie the new promise's cancel to this promise's cancel */ if (!(options === null || options === void 0 ? void 0 : options.ignoreOnCancel)) {
            newPromise.internalOnCancel((reason)=>{
                this.cancel(reason);
            }, {
                ignoreOnCancel: true
            });
        }
        return newPromise;
    }
    then(onFulfilled, onRejected) {
        return this.internalThen(onFulfilled, onRejected);
    }
    catch(onRejected) {
        return this.then(undefined, onRejected);
    }
    finally(onFinally) {
        return this.then((value)=>{
            onFinally === null || onFinally === void 0 ? void 0 : onFinally();
            return value;
        }, (reason)=>{
            onFinally === null || onFinally === void 0 ? void 0 : onFinally();
            throw reason;
        });
    }
    /** Generates a CancellablePromise from a Promise. If a CancellablePromise is passed, it's returned unscathed.
     * WARNING: unless you attach a method to reject the original Promise with the "onCancel" param.
     * cancelling the resulting CancellablePromise does NOT affect the original Promise. */ static fromPromise(promise) {
        if ('internalIsCancelled' in promise) return promise;
        const newPromise = new CancellablePromise((resolve, reject)=>promise.then(resolve, reject));
        return newPromise;
    }
}
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/ceil/ceil.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ceil": (()=>ceil)
});
'use client';
const ceil = (value, precision = 0)=>{
    const multiplier = Math.pow(10, precision);
    return Math.ceil(value * multiplier) / multiplier;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/DeferredPromise/DeferredPromise.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DeferredPromise": (()=>DeferredPromise)
});
'use client';
/**
 * A DeferredPromise provides methods to manually resolve or reject a Promise.
 * This is useful in scenarios where you need to resolve or reject a Promise
 * outside of the executor function.
 *
 * @template T The type of the value with which the promise will be resolved.
 */ class DeferredPromise {
    constructor(){
        this.promise = new Promise((resolve, reject)=>{
            this.resolve = resolve;
            this.reject = reject;
        });
    }
}
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/eip6963/eip6963Provider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Eip6963Provider": (()=>Eip6963Provider),
    "Eip6963ProviderSingleton": (()=>Eip6963ProviderSingleton),
    "isEip9693Event": (()=>isEip9693Event),
    "listenToEip6963Events": (()=>listenToEip6963Events)
});
'use client';
const isEip9693Event = (event)=>event.type === 'eip6963:announceProvider' && event.detail !== undefined;
const listenToEip6963Events = (handler)=>{
    const eventHandler = (event)=>{
        if (!isEip9693Event(event)) {
            return;
        }
        handler(event);
    };
    window.addEventListener('eip6963:announceProvider', eventHandler);
    return ()=>{
        window.removeEventListener('eip6963:announceProvider', eventHandler);
    };
};
class Eip6963Provider {
    constructor(){
        this.providers = [];
    }
    registerProviders() {
        if (typeof window === 'undefined') {
            return;
        }
        listenToEip6963Events((event)=>{
            this.providers.push(event.detail);
        });
        window.dispatchEvent(new Event('eip6963:requestProvider'));
    }
}
class Eip6963ProviderSingleton {
    constructor(){
        this.eip6963Provider = new Eip6963Provider();
    }
    static get() {
        var _a;
        if (!((_a = Eip6963ProviderSingleton.instance) === null || _a === void 0 ? void 0 : _a.eip6963Provider)) {
            Eip6963ProviderSingleton.instance = new Eip6963ProviderSingleton();
            Eip6963ProviderSingleton.instance.eip6963Provider.registerProviders();
        }
        return Eip6963ProviderSingleton.instance.eip6963Provider;
    }
}
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/CustomError.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CustomError": (()=>CustomError)
});
'use client';
/**
 * Extend this class to allow usage of instanceof
 */ class CustomError extends Error {
    constructor(message, code){
        super(message);
        this.code = undefined;
        this.code = code;
        Object.setPrototypeOf(this, this.constructor.prototype);
    }
    toJSON() {
        return {
            code: this.code,
            error: this.message
        };
    }
}
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/DynamicError.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DynamicError": (()=>DynamicError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$CustomError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/CustomError.js [app-ssr] (ecmascript)");
'use client';
;
class DynamicError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$CustomError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CustomError"] {
}
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/AccessBlockedError.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AccessBlockedError": (()=>AccessBlockedError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/DynamicError.js [app-ssr] (ecmascript)");
'use client';
;
class AccessBlockedError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"] {
}
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/AccountExistsError.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AccountExistsError": (()=>AccountExistsError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/DynamicError.js [app-ssr] (ecmascript)");
'use client';
;
class AccountExistsError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"] {
    constructor(errorMessage, errorPayload){
        super(errorMessage);
        this.errorMessage = errorMessage;
        this.errorPayload = errorPayload;
    }
}
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/ChainalysisError.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ChainalysisError": (()=>ChainalysisError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/DynamicError.js [app-ssr] (ecmascript)");
'use client';
;
class ChainalysisError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"] {
    constructor(walletPublicKey){
        super('This address is not approved for access');
        this.walletPublicKey = walletPublicKey;
    }
}
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/CookieInvalidError.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CookieInvalidError": (()=>CookieInvalidError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/DynamicError.js [app-ssr] (ecmascript)");
'use client';
;
class CookieInvalidError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"] {
    constructor(){
        super('The cookie is invalid or expired');
    }
}
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/CustomFieldNotUniqueError.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CustomFieldNotUniqueError": (()=>CustomFieldNotUniqueError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/DynamicError.js [app-ssr] (ecmascript)");
'use client';
;
class CustomFieldNotUniqueError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"] {
    constructor(){
        super('Custom Field for user must be unique within the environment', 'custom_field_data_not_unique');
    }
}
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/DecryptionError.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DecryptionError": (()=>DecryptionError)
});
'use client';
class DecryptionError extends Error {
    constructor(errorName){
        super(`Failed to decrypt the message: ${errorName}`);
    }
}
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/EmailAlreadyExistsError.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "EmailAlreadyExistsError": (()=>EmailAlreadyExistsError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/DynamicError.js [app-ssr] (ecmascript)");
'use client';
;
class EmailAlreadyExistsError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"] {
    constructor(){
        super('Email already exists');
    }
}
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/EmailProviderError.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "EmailProviderError": (()=>EmailProviderError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/DynamicError.js [app-ssr] (ecmascript)");
'use client';
;
class EmailProviderError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"] {
    constructor(code){
        super('EmailProviderError', code);
    }
}
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/EmailVerificationError.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "EmailVerificationError": (()=>EmailVerificationError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/DynamicError.js [app-ssr] (ecmascript)");
'use client';
;
class EmailVerificationError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"] {
    constructor(message, code){
        super(message, code);
    }
}
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/EmbeddedWalletException.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "EmbeddedWalletException": (()=>EmbeddedWalletException)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/DynamicError.js [app-ssr] (ecmascript)");
'use client';
;
class EmbeddedWalletException extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"] {
    constructor(message){
        super(message);
    }
}
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/errorCodes.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "RATE_LIMIT_ERROR_CODE": (()=>RATE_LIMIT_ERROR_CODE),
    "UNKNOWN_ERROR_CODE": (()=>UNKNOWN_ERROR_CODE)
});
'use client';
const RATE_LIMIT_ERROR_CODE = 'rate_limit_error';
const UNKNOWN_ERROR_CODE = 'unknown_error';
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/EmbeddedWalletExistsError.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "EmbeddedWalletExistsError": (()=>EmbeddedWalletExistsError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/DynamicError.js [app-ssr] (ecmascript)");
'use client';
;
class EmbeddedWalletExistsError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"] {
    constructor(code){
        super('EmbeddedWalletExistsError', code);
    }
}
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/ErrorCode.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ErrorCode": (()=>ErrorCode)
});
'use client';
/**
 * All supported error codes.
 *
 * Any changes here should be reflected in the [useErrorText] hook to maintain
 * accurate translations.
 */ var ErrorCode;
(function(ErrorCode) {
    ErrorCode[ErrorCode["UNKNOWN"] = 0] = "UNKNOWN";
    ErrorCode[ErrorCode["DEFAULT"] = 1] = "DEFAULT";
    ErrorCode[ErrorCode["USER_REJECTED"] = 2] = "USER_REJECTED";
    ErrorCode[ErrorCode["MESSAGE_SIGNATURE_DENIED"] = 3] = "MESSAGE_SIGNATURE_DENIED";
    ErrorCode[ErrorCode["WALLET_LOCKED"] = 4] = "WALLET_LOCKED";
    ErrorCode[ErrorCode["INVALID_PARAMETERS"] = 5] = "INVALID_PARAMETERS";
    ErrorCode[ErrorCode["INTERNAL_ERROR"] = 6] = "INTERNAL_ERROR";
    ErrorCode[ErrorCode["ACCOUNT_ALREADY_LINKED_TO_DIFFERENT_PROFILE"] = 7] = "ACCOUNT_ALREADY_LINKED_TO_DIFFERENT_PROFILE";
    ErrorCode[ErrorCode["CONNECTION_REJECTED"] = 8] = "CONNECTION_REJECTED";
    ErrorCode[ErrorCode["MISSING_PUBLIC_ADDRESS"] = 9] = "MISSING_PUBLIC_ADDRESS";
    ErrorCode[ErrorCode["CONNECTION_PROPOSAL_EXPIRED"] = 10] = "CONNECTION_PROPOSAL_EXPIRED";
    ErrorCode[ErrorCode["SEI_NOT_ENABLED_IN_KEPLR_WALLET"] = 11] = "SEI_NOT_ENABLED_IN_KEPLR_WALLET";
})(ErrorCode || (ErrorCode = {}));
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/ExternalAuthError.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ExternalAuthError": (()=>ExternalAuthError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/DynamicError.js [app-ssr] (ecmascript)");
'use client';
;
class ExternalAuthError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"] {
    constructor(code){
        super('ExternalAuthError', code);
    }
}
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/GateBlockedError.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GateBlockedError": (()=>GateBlockedError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/DynamicError.js [app-ssr] (ecmascript)");
'use client';
;
class GateBlockedError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"] {
    constructor(walletPublicKey){
        super('This address is blocked by the gate');
        this.walletPublicKey = walletPublicKey;
    }
}
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/GetAddressCancelledError.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GetAddressCancelledError": (()=>GetAddressCancelledError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$CustomError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/CustomError.js [app-ssr] (ecmascript)");
'use client';
;
/**
 * Error thrown when a get address call is cancelled due to being outdated.
 *
 * This error is used specifically in the sdk-react-core to handle cases where
 * a get address promise needs to be discarded without setting an error state.
 * Common use case is when retrying the get address method - the original call
 * is cancelled to allow the SDK to handle the new request cleanly.
 */ class GetAddressCancelledError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$CustomError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CustomError"] {
    constructor(){
        super('Get address call was cancelled');
    }
}
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/InsufficientFundsError.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "InsufficientFundsError": (()=>InsufficientFundsError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/DynamicError.js [app-ssr] (ecmascript)");
'use client';
;
class InsufficientFundsError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"] {
    constructor(){
        super(InsufficientFundsError.message);
    }
    static isInstance(err) {
        var _a;
        const error = ((_a = err === null || err === void 0 ? void 0 : err.walk) === null || _a === void 0 ? void 0 : _a.call(err)) || err;
        return error instanceof InsufficientFundsError;
    }
    static isErrorMessage(err) {
        var _a;
        const errorWithMessage = err;
        return ((_a = errorWithMessage === null || errorWithMessage === void 0 ? void 0 : errorWithMessage.message) === null || _a === void 0 ? void 0 : _a.includes("AA21 didn't pay prefund")) || false;
    }
}
InsufficientFundsError.message = 'Insufficient funds.';
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/InvalidEmbeddedWalletSessionKeyError.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "InvalidEmbeddedWalletSessionKeyError": (()=>InvalidEmbeddedWalletSessionKeyError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/DynamicError.js [app-ssr] (ecmascript)");
'use client';
;
class InvalidEmbeddedWalletSessionKeyError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"] {
    constructor(error){
        super(error !== null && error !== void 0 ? error : 'Invalid embedded wallet session key.');
    }
}
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/InvalidPhoneNumberError.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "InvalidPhoneNumberError": (()=>InvalidPhoneNumberError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/DynamicError.js [app-ssr] (ecmascript)");
'use client';
;
class InvalidPhoneNumberError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"] {
    constructor(error){
        super(error !== null && error !== void 0 ? error : 'Invalid phone number.');
    }
}
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/InvalidPrimaryWalletOrConnectorError.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "InvalidPrimaryWalletOrConnectorError": (()=>InvalidPrimaryWalletOrConnectorError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/DynamicError.js [app-ssr] (ecmascript)");
'use client';
;
class InvalidPrimaryWalletOrConnectorError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"] {
    constructor(code){
        super('Primary wallet is not properly set or the wallet connector is missing from DynamicContextProvider settings.', code);
    }
}
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/MergeAccountsConfirmationError.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "MergeAccountsConfirmationError": (()=>MergeAccountsConfirmationError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/DynamicError.js [app-ssr] (ecmascript)");
'use client';
;
class MergeAccountsConfirmationError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"] {
    constructor({ code, mergeConflicts, walletAddress }){
        super('MergeAccountsConfirmationError', code);
        this.mergeConflicts = mergeConflicts;
        this.walletAddress = walletAddress;
    }
}
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/MetaMaskError.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "MetaMaskError": (()=>MetaMaskError),
    "metaMaskErrorMap": (()=>metaMaskErrorMap)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$CustomError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/CustomError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$ErrorCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/ErrorCode.js [app-ssr] (ecmascript)");
'use client';
;
;
/** Mapping of metamask error codes to dynamic [ErrorCode]s */ const metaMaskErrorMap = {
    4001: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$ErrorCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorCode"].USER_REJECTED
};
class MetaMaskError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$CustomError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CustomError"] {
    constructor(message, code){
        super(message, code);
    }
    /**
     * Creates a [MetaMaskError] from an unknown error (thrown by MetaMask)
     *
     * @param error - The error to create the [MetaMaskError] from
     * @returns A new [MetaMaskError]
     */ static fromError(error) {
        var _a, _b;
        if (error instanceof Object) {
            const errorObject = error;
            const dynamicErrorCode = (_b = metaMaskErrorMap[(_a = errorObject.code) !== null && _a !== void 0 ? _a : '']) !== null && _b !== void 0 ? _b : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$ErrorCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorCode"].DEFAULT;
            return new MetaMaskError(errorObject.message, dynamicErrorCode);
        }
        return new MetaMaskError(String(error), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$ErrorCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorCode"].DEFAULT);
    }
}
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/MissingEnvironmentIdError.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "MissingEnvironmentIdError": (()=>MissingEnvironmentIdError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/DynamicError.js [app-ssr] (ecmascript)");
'use client';
;
class MissingEnvironmentIdError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"] {
    constructor(){
        super('You are missing the environmentId field in yours DynamicContextProvider settings prop');
    }
}
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/MissingPublicAddressError.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "MissingPublicAddressError": (()=>MissingPublicAddressError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/DynamicError.js [app-ssr] (ecmascript)");
'use client';
;
class MissingPublicAddressError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"] {
    constructor(){
        super('Missing public address', 'missing-public-address');
    }
}
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/NoAccessError.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "NoAccessError": (()=>NoAccessError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/DynamicError.js [app-ssr] (ecmascript)");
'use client';
;
class NoAccessError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"] {
    constructor({ walletPublicKey, email, phoneNumber, socialProvider, socialUsername }){
        super('User does not have access');
        this.email = email;
        this.walletPublicKey = walletPublicKey;
        this.phoneNumber = phoneNumber;
        this.socialProvider = socialProvider;
        this.socialUsername = socialUsername;
    }
}
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/NotSupportedError.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "NotSupportedError": (()=>NotSupportedError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/DynamicError.js [app-ssr] (ecmascript)");
'use client';
;
class NotSupportedError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"] {
}
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/RateLimitError.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "RateLimitError": (()=>RateLimitError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/DynamicError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$errorCodes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/errorCodes.js [app-ssr] (ecmascript)");
'use client';
;
;
class RateLimitError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"] {
    constructor(message, requestId, cfRay){
        super(message, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$errorCodes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RATE_LIMIT_ERROR_CODE"]);
        this.name = 'RateLimitError';
        this.requestId = requestId;
        this.cfRay = cfRay;
    }
}
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/RequestChannelNotHandledError.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "RequestChannelNotHandledError": (()=>RequestChannelNotHandledError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/DynamicError.js [app-ssr] (ecmascript)");
'use client';
;
class RequestChannelNotHandledError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"] {
}
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/_virtual/_tslib.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/ResponseError.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ResponseError": (()=>ResponseError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/_virtual/_tslib.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$CustomError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/CustomError.js [app-ssr] (ecmascript)");
'use client';
;
;
class ResponseError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$CustomError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CustomError"] {
    constructor({ message, cause, jsonData }){
        const messageError = `
    Message: ${message !== null && message !== void 0 ? message : 'Unknown'}
    URL: ${cause.url}
    Status: ${cause.status}
    Status Text: ${cause.statusText}
    Type: ${cause.type}
    Redirect: ${cause.redirected}

    Json data:${jsonData ? '\n' + JSON.stringify(jsonData, null, 2) : ' No data'}
    `.trim();
        super(messageError);
        this.jsonData = jsonData;
        this.response = cause;
        this.cause = cause;
    }
    get json() {
        return this.jsonData;
    }
    static fromResponse(_a) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, arguments, void 0, function*({ cause, message }) {
            const jsonData = yield cause.json();
            return new ResponseError({
                cause,
                jsonData,
                message
            });
        });
    }
}
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/SandboxMaximumThresholdReachedError.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SandboxMaximumThresholdReachedError": (()=>SandboxMaximumThresholdReachedError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/DynamicError.js [app-ssr] (ecmascript)");
'use client';
;
class SandboxMaximumThresholdReachedError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"] {
    constructor(errorMessage){
        super(errorMessage);
        this.errorMessage = errorMessage;
    }
}
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/SeiNotEnabledInKeplrWalletError.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SeiNotEnabledInKeplrWalletError": (()=>SeiNotEnabledInKeplrWalletError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$CustomError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/CustomError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$ErrorCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/ErrorCode.js [app-ssr] (ecmascript)");
'use client';
;
;
class SeiNotEnabledInKeplrWalletError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$CustomError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CustomError"] {
    constructor(){
        super('Sei network is not enabled in Keplr', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$ErrorCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorCode"].SEI_NOT_ENABLED_IN_KEPLR_WALLET);
    }
}
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/SmsVerificationError.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SmsVerificationError": (()=>SmsVerificationError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/DynamicError.js [app-ssr] (ecmascript)");
'use client';
;
class SmsVerificationError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"] {
}
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/SocialAccountAlreadyExistsError.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SocialAccountAlreadyExistsError": (()=>SocialAccountAlreadyExistsError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/DynamicError.js [app-ssr] (ecmascript)");
'use client';
;
class SocialAccountAlreadyExistsError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"] {
    constructor(){
        super('Social account already exists');
    }
}
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/TooManyEmailVerificationsError.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "TooManyEmailVerificationsError": (()=>TooManyEmailVerificationsError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/DynamicError.js [app-ssr] (ecmascript)");
'use client';
;
class TooManyEmailVerificationsError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"] {
    constructor(){
        super('Too many email verification attempts.');
    }
}
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/TransactionGasCannotBeSponsoredError.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "TransactionGasCannotBeSponsoredError": (()=>TransactionGasCannotBeSponsoredError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/DynamicError.js [app-ssr] (ecmascript)");
'use client';
;
class TransactionGasCannotBeSponsoredError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"] {
    constructor(){
        super(TransactionGasCannotBeSponsoredError.message);
    }
    static isInstance(err) {
        var _a;
        const error = ((_a = err === null || err === void 0 ? void 0 : err.walk) === null || _a === void 0 ? void 0 : _a.call(err)) || err;
        return error instanceof TransactionGasCannotBeSponsoredError;
    }
    static isErrorMessage(err) {
        var _a;
        const errorWithMessage = err;
        return ((_a = errorWithMessage === null || errorWithMessage === void 0 ? void 0 : errorWithMessage.message) === null || _a === void 0 ? void 0 : _a.includes('userOp did not match any gas sponsoring policies')) || false;
    }
}
TransactionGasCannotBeSponsoredError.message = 'Transaction gas cannot be sponsored.';
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/UserHasAccountWithEmailError.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "UserHasAccountWithEmailError": (()=>UserHasAccountWithEmailError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/DynamicError.js [app-ssr] (ecmascript)");
'use client';
;
class UserHasAccountWithEmailError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"] {
    constructor(error){
        super(error);
        this.error = error;
    }
}
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/UsernameAlreadyExistsError.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "UsernameAlreadyExistsError": (()=>UsernameAlreadyExistsError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/DynamicError.js [app-ssr] (ecmascript)");
'use client';
;
class UsernameAlreadyExistsError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"] {
    constructor(){
        super('Username already exists');
    }
}
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/UserRejectedRequestError.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "UserRejectedRequestError": (()=>UserRejectedRequestError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/DynamicError.js [app-ssr] (ecmascript)");
'use client';
;
class UserRejectedRequestError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"] {
    constructor(){
        super('User rejected request', 'user_rejected_request');
    }
}
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/UserRejectedTransactionError.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "UserRejectedTransactionError": (()=>UserRejectedTransactionError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/DynamicError.js [app-ssr] (ecmascript)");
'use client';
;
class UserRejectedTransactionError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"] {
    constructor(){
        super('user rejected transaction');
    }
}
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/VerificationDataCollectionError.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "VerificationDataCollectionError": (()=>VerificationDataCollectionError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/DynamicError.js [app-ssr] (ecmascript)");
'use client';
;
/** Used when trying to get necessary data for verification OTPs */ class VerificationDataCollectionError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"] {
    constructor(message){
        super('Failed to get verification data: ' + message);
    }
}
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/WalletAddressMismatchError.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "WalletAddressMismatchError": (()=>WalletAddressMismatchError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/DynamicError.js [app-ssr] (ecmascript)");
'use client';
;
class WalletAddressMismatchError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"] {
    constructor(message, { activeAddress, expectedAddress, walletName }){
        super(message, 'wallet_address_mismatch_error');
        this.expectedAddress = expectedAddress;
        this.activeAddress = activeAddress;
        this.walletName = walletName;
    }
}
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/WalletNotDeployedError.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "WalletNotDeployedError": (()=>WalletNotDeployedError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/DynamicError.js [app-ssr] (ecmascript)");
'use client';
;
class WalletNotDeployedError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"] {
    constructor(){
        super('Wallet has not been deployed', 'wallet_not_deployed');
    }
}
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/WalletUsedError.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "WalletUsedError": (()=>WalletUsedError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/DynamicError.js [app-ssr] (ecmascript)");
'use client';
;
class WalletUsedError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicError"] {
    constructor(code){
        super('WalletUsedError', code);
    }
}
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/eventTimeline/eventTimeline.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createEventTimeline": (()=>createEventTimeline)
});
'use client';
/**
 * The EventTimeline is a utility that allows you to track the timeline of events
 * that occur in your application. It is useful to post events and query when
 * some event was last fired.
 */ const createEventTimeline = ()=>{
    // Map to store event names and their corresponding timestamps
    const eventTimelines = new Map();
    return {
        clear: ()=>{
            eventTimelines.clear();
        },
        isEventRecent: (eventName, timeSince)=>{
            const now = Date.now();
            let timestamps = eventTimelines.get(eventName);
            if (!timestamps) {
                return false;
            }
            const cutoff = now - timeSince;
            // Remove timestamps older than the cutoff time
            timestamps = timestamps.filter((timestamp)=>timestamp >= cutoff);
            // Check if there are any timestamps within the timeframe
            return timestamps.length > 0;
        },
        postEvent: (event)=>{
            var _a;
            const now = Date.now();
            if (!eventTimelines.has(event)) {
                eventTimelines.set(event, []);
            }
            (_a = eventTimelines.get(event)) === null || _a === void 0 ? void 0 : _a.push(now);
        }
    };
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/trimEnd/trimEnd.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "trimEnd": (()=>trimEnd)
});
'use client';
const trimEnd = (text, char = '')=>{
    let endIndex = text.length - 1;
    while(endIndex >= 0 && text[endIndex] === char){
        endIndex--;
    }
    return text.slice(0, endIndex + 1);
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/formatNumberText/formatNumberText.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "formatNumberText": (()=>formatNumberText)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$ceil$2f$ceil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/ceil/ceil.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$trimEnd$2f$trimEnd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/trimEnd/trimEnd.js [app-ssr] (ecmascript)");
'use client';
;
;
const formatNumberText = (value, { precision = 0 } = {})=>{
    if (!precision) {
        return value;
    }
    const floatValue = parseFloat(value);
    const formattedAtPrecision = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$ceil$2f$ceil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ceil"])(floatValue, precision).toFixed(precision);
    const [integerPart, decimalPart] = formattedAtPrecision.split('.');
    const decimalPartTrimmed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$trimEnd$2f$trimEnd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trimEnd"])(decimalPart, '0');
    return `${integerPart}.${decimalPartTrimmed || '0'}`;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/getProvidersFromWindow/getProvidersFromWindow.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getProvidersFromWindow": (()=>getProvidersFromWindow)
});
'use client';
/**
 * return the destination (value)
 *
 * @param {string} path - path in the obj to the item
 * @returns {T[]} - array of found items
 */ const getProvidersFromWindow = (path)=>{
    const splitPath = path.split('.');
    let result = window;
    const foundProviders = [];
    for (const [index, p] of Object.entries(splitPath)){
        result = result[p];
        if (typeof result !== 'object' || result === null) {
            return [];
        }
        // we need to check if we have hit the end of the requested path
        if (Number(index) === splitPath.length - 1) {
            if (Array.isArray(result)) {
                result.forEach((p)=>foundProviders.push(p));
            } else {
                if (result.providers) {
                    result.providers.forEach((p)=>foundProviders.push(p));
                } else {
                    foundProviders.push(result);
                }
            }
        }
    }
    return foundProviders;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/PlatformService/createBrowserPlatformService/createBrowserPlatformService.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createBrowserPlatformService": (()=>createBrowserPlatformService)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/_virtual/_tslib.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tldts$40$6$2e$0$2e$16$2f$node_modules$2f$tldts$2f$dist$2f$es6$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tldts@6.0.16/node_modules/tldts/dist/es6/index.js [app-ssr] (ecmascript)");
'use client';
;
;
const createBrowserPlatformService = (window)=>({
        downloadFile: (fileName, file)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, void 0, void 0, function*() {
                const element = document.createElement('a');
                element.href = URL.createObjectURL(file);
                element.download = fileName;
                document.body.appendChild(element);
                element.click();
                document.body.removeChild(element);
                URL.revokeObjectURL(element.href);
            }),
        getDisplayOrigin: ()=>window.location.origin,
        getHost: ()=>window.location.host,
        getHostname: ()=>window.location.hostname,
        getOrigin: ()=>window.location.origin,
        getTLD: (domain)=>{
            // Passing the allowPrivateDomains option prevents returning the actual TLD
            // for domains that have delegated subdomains like herokuapp.com or s3.amazonaws.com
            // full list is contained here https://publicsuffix.org/list/effective_tld_names.dat
            // separated by ICANN DOMAINS and PRIVATE DOMAINS
            // so for instance parse('someapp.herokuapp.com') will return 'someapp.herokuapp.com' as the domain
            // whereas parse('app.dynamic.xyz') will return 'dynamic.xyz'
            const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tldts$40$6$2e$0$2e$16$2f$node_modules$2f$tldts$2f$dist$2f$es6$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parse"])(domain || window.location.hostname, {
                allowPrivateDomains: true
            });
            return data.domain || undefined;
        },
        getUrl: ()=>new URL(window.location.href),
        isNativeMobile: false,
        isWaasSecureStorageSupported: false,
        openURL: (url_1, ...args_1)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, [
                url_1,
                ...args_1
            ], void 0, function*(url, target = 'self', features = '') {
                if (target === 'blank') {
                    window.open(url, '_blank', features);
                } else {
                    window.location.assign(url);
                }
            })
    });
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/PlatformService/PlatformService.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "PlatformService": (()=>PlatformService)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/_virtual/_tslib.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$PlatformService$2f$createBrowserPlatformService$2f$createBrowserPlatformService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/PlatformService/createBrowserPlatformService/createBrowserPlatformService.js [app-ssr] (ecmascript)");
'use client';
;
;
var _a, _PlatformService_implementation;
class PlatformService {
    static get implementation() {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__classPrivateFieldGet"])(_a, _a, "f", _PlatformService_implementation)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$PlatformService$2f$createBrowserPlatformService$2f$createBrowserPlatformService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createBrowserPlatformService"])(window);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__classPrivateFieldGet"])(_a, _a, "f", _PlatformService_implementation);
    }
    static set implementation(implementation) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__classPrivateFieldSet"])(_a, _a, implementation, "f", _PlatformService_implementation);
    }
    /**
     * Indicates if the current platform is a native mobile app
     * like react-native or flutter.
     */ static get isNativeMobile() {
        return _a.implementation.isNativeMobile;
    }
    /**
     * Gets the origin of the current location.
     *
     * @example window.location.origin
     */ static get getOrigin() {
        return _a.implementation.getOrigin;
    }
    /**
     * Gets the origin to be displayed in the UI.
     *
     * @example window.location.origin
     */ static get getDisplayOrigin() {
        return _a.implementation.getDisplayOrigin;
    }
    /**
     * Gets the host of the current location.
     *
     * @example window.location.host
     */ static get getHost() {
        return _a.implementation.getHost;
    }
    /**
     * Gets the hostname of the current location.
     *
     * @example window.location.hostname
     */ static get getHostname() {
        return _a.implementation.getHostname;
    }
    /**
     * Gets the current URL.
     *
     * @example new URL(window.location.href)
     */ static get getUrl() {
        return _a.implementation.getUrl;
    }
    static getTLD(domain) {
        return _a.implementation.getTLD(domain);
    }
    /**
     * Opens a URL. If possible, should avoid new windows.
     */ static get openURL() {
        return _a.implementation.openURL;
    }
    /**
     * Downloads a file with the given filename and content.
     */ static get downloadFile() {
        return _a.implementation.downloadFile;
    }
    /**
     * Registers a listener for URL updates.
     * This is primarily used in native mobile environments where deep links
     * can update the current URL asynchronously.
     *
     * @returns A function to unsubscribe the listener, or undefined if not supported.
     */ static onUrlUpdate(listener) {
        var _b, _c;
        return (_c = (_b = _a.implementation).onUrlUpdate) === null || _c === void 0 ? void 0 : _c.call(_b, listener);
    }
    /**
     * Indicates whether the SDK is executed in an environment where
     * waas keyshares secure storage is supported.
     */ static get isWaasSecureStorageSupported() {
        return _a.implementation.isWaasSecureStorageSupported;
    }
}
_a = PlatformService;
_PlatformService_implementation = {
    value: void 0
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/getTLD/getTLD.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getTLD": (()=>getTLD)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$PlatformService$2f$PlatformService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/PlatformService/PlatformService.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/_virtual/_tslib.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tldts$40$6$2e$0$2e$16$2f$node_modules$2f$tldts$2f$dist$2f$es6$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tldts@6.0.16/node_modules/tldts/dist/es6/index.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const getTLD = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$PlatformService$2f$PlatformService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlatformService"].getTLD();
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/isMobile/isMobile.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getAndroidVersion": (()=>getAndroidVersion),
    "isAndroid": (()=>isAndroid),
    "isIOS": (()=>isIOS),
    "isIPad": (()=>isIPad),
    "isIPhone": (()=>isIPhone),
    "isIPhone8OrEarlier": (()=>isIPhone8OrEarlier),
    "isLegacySafari": (()=>isLegacySafari),
    "isMobile": (()=>isMobile),
    "isSafariBrowser": (()=>isSafariBrowser),
    "isSamsungBrowser": (()=>isSamsungBrowser),
    "isWindows": (()=>isWindows)
});
'use client';
/**
 * Sourced from http://detectmobilebrowsers.com/
 */ /* eslint-disable max-len, no-useless-escape */ const userAgentRegex1 = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ios|ipad|playbook|silk/i;
const userAgentRegex2 = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
// This is a regex that covers both iphone, android and any other mobile device.
const isMobile = (maxTouchPointsOverride)=>{
    if (typeof window === 'undefined' || typeof navigator === 'undefined') {
        return false;
    }
    return userAgentRegex1.test(navigator.userAgent) || userAgentRegex2.test(navigator.userAgent.substring(0, 4)) || isIPad(maxTouchPointsOverride) || isIPhone();
};
const isIPhone = ()=>typeof window === 'undefined' || typeof navigator === 'undefined' ? false : /iPhone|ios/.test(navigator.userAgent);
const isIPhone8OrEarlier = ()=>typeof window === 'undefined' || typeof navigator === 'undefined' ? false : iPhoneLegacyRegex.some(({ regex })=>regex.test(navigator.userAgent));
/**
 * @param [optional] maxTouchPointsOverride - this is used for testing since
 * it seems that JSDOM doesn't support maxTouchPoints, so it was impossible
 * to mock it
 */ const isIPad = (maxTouchPointsOverride)=>{
    if (typeof window === 'undefined' || typeof navigator === 'undefined') {
        return false;
    }
    const maxTouchPoints = maxTouchPointsOverride || navigator.maxTouchPoints;
    return /iPad/.test(navigator.userAgent) || /Mac/.test(navigator.userAgent) && maxTouchPoints === 5;
};
const isIOS = (maxTouchPointsOverride)=>{
    if (typeof window === 'undefined' || typeof navigator === 'undefined') {
        return false;
    }
    return isIPhone() || isIPad(maxTouchPointsOverride);
};
const isAndroid = ()=>isMobile() && !isIOS();
const isLegacySafari = ()=>{
    // We need to check if window.CSS exists and if it has supports function.
    // We can use it only in browsers. This prevents customer tests from failing because of that.
    if (typeof window === 'undefined' || !window.CSS || typeof window.CSS.supports !== 'function') {
        return false;
    }
    // Older versions of Safari <15 are not supporting aspect-ratio css property.
    // We can use that to check if user is on older browser.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio
    const cssValue = 'aspect-ratio: 1 / 1';
    return !CSS.supports(cssValue);
};
const isSamsungBrowser = ()=>{
    if (typeof window === 'undefined' || typeof navigator === 'undefined') {
        return false;
    }
    return navigator.userAgent.includes('SamsungBrowser');
};
const isSafariBrowser = ()=>{
    if (typeof window === 'undefined' || typeof navigator === 'undefined') {
        return false;
    }
    const { userAgent } = navigator;
    const isSafari = userAgent.includes('Safari') && !userAgent.includes('Chrome') && !userAgent.includes('Chromium');
    return isSafari;
};
const isWindows = ()=>{
    if (typeof window === 'undefined' || typeof navigator === 'undefined') {
        return false;
    }
    return navigator.userAgent.indexOf('Windows') !== -1;
};
// regex from: https://github.com/matomo-org/device-detector/blob/master/regexes/device/mobiles.yml
const iPhoneLegacyRegex = [
    {
        model: 'iPhone 5',
        regex: /(?:MDCR_|ICRU_|Apple-)?(?:iPh(?:one)?5[C,_]12|5)$/
    },
    {
        model: 'iPhone 5C',
        regex: /(?:MDCR_|ICRU_|Apple-)?(?:iPh(?:one)?5[C,_]34)$/
    },
    {
        model: 'iPhone 5S',
        regex: /(?:MDCR_|ICRU_|Apple-)?(?:iPh(?:one)?6[C,_]12|5S)$/
    },
    {
        model: 'iPhone 6 Plus',
        regex: /(?:MDCR_|ICRU_|Apple-)?(?:iPh(?:one)?7[C,_]1|1C2%257enohPi|6PLUS)$/
    },
    {
        model: 'iPhone 6',
        regex: /(?:MDCR_|ICRU_|Apple-)?(?:iPh(?:one)?7[C,_]2|6)$/
    },
    {
        model: 'iPhone 6s Plus',
        regex: /(?:MDCR_|ICRU_|Apple-)?(?:iPh(?:one)?8[C,_]2|6SPLUS)$/
    },
    {
        model: 'iPhone 6s',
        regex: /(?:MDCR_|ICRU_|Apple-)?(?:iPh(?:one)?8[C,_]1|iPhone[ /]6s|6S)$/
    },
    {
        model: 'iPhone SE',
        regex: /(?:MDCR_|ICRU_|Apple-)?(?:iPh(?:one)?8[C,_]4|SE)$/
    },
    {
        model: 'iPhone 7',
        regex: /(?:MDCR_|ICRU_|Apple-)?(?:iPh(?:one)?9[C,_]13|iphone7|7)$/
    },
    {
        model: 'iPhone 7 Plus',
        regex: /(?:MDCR_|ICRU_|Apple-)?(?:iPh(?:one)?9[C,_]24|7PLUS)$/
    },
    {
        model: 'iPhone 8',
        regex: /(?:MDCR_|ICRU_|Apple-)?(?:iPh(?:one)?10[C,_]14|8)$/
    },
    {
        model: 'iPhone 8 Plus',
        regex: /(?:MDCR_|ICRU_|Apple-)?(?:iPh(?:one)?10[C,_]25|8PLUS)$/
    }
];
const getAndroidVersion = ()=>{
    if (typeof navigator === 'undefined') {
        return;
    }
    const androidVersionMatch = navigator.userAgent.match(/Android (\d+(\.\d+)?)/);
    if (!androidVersionMatch) {
        return;
    }
    const androidVersion = parseFloat(androidVersionMatch[1]);
    return androidVersion;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/handleMobileWalletRedirect/handleMobileWalletRedirect.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "handleMobileWalletRedirect": (()=>handleMobileWalletRedirect)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$isMobile$2f$isMobile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/isMobile/isMobile.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$PlatformService$2f$PlatformService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/PlatformService/PlatformService.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/_virtual/_tslib.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tldts$40$6$2e$0$2e$16$2f$node_modules$2f$tldts$2f$dist$2f$es6$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tldts@6.0.16/node_modules/tldts/dist/es6/index.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const handleMobileWalletRedirect = ({ nativeLink, universalLink })=>{
    const url = encodeURIComponent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$PlatformService$2f$PlatformService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlatformService"].getUrl().href);
    const ref = encodeURIComponent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$PlatformService$2f$PlatformService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlatformService"].getOrigin());
    // samsung browser only supports native links, not universal links
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$isMobile$2f$isMobile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSamsungBrowser"])()) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$PlatformService$2f$PlatformService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlatformService"].openURL(`${nativeLink}/${url}?ref=${ref}`);
    } else {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$PlatformService$2f$PlatformService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlatformService"].openURL(`${universalLink}/${url}?ref=${ref}`);
    }
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/isFunction/isFunction.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isFunction": (()=>isFunction)
});
'use client';
// eslint-disable-next-line @typescript-eslint/ban-types
const isFunction = (value)=>typeof value === 'function';
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/isLedgerAddressViaVerifiedCredentials/isLedgerAddressViaVerifiedCredentials.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isLedgerAddressViaVerifiedCredentials": (()=>isLedgerAddressViaVerifiedCredentials)
});
'use client';
const isLedgerAddressViaVerifiedCredentials = (address, verifiedCredentials)=>{
    const ledgerWallets = verifiedCredentials.filter((v)=>{
        var _a;
        return ((_a = v.walletProperties) === null || _a === void 0 ? void 0 : _a.hardwareWallet) === 'ledger';
    }).map((v)=>v.address);
    return ledgerWallets.includes(address);
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/isString/isString.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isString": (()=>isString)
});
'use client';
const isString = (value)=>typeof value === 'string';
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/last/last.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "last": (()=>last)
});
'use client';
/**
 * Retrieves the last item from an array.
 *
 * @template T - The type of the items in the array.
 * @param {T[]} arr - The array from which to retrieve the last item.
 * @returns {T | undefined} The last item in the array, or undefined if the array is empty.
 *
 * @example
 * const numbers = [1, 2, 3, 4, 5];
 * console.log(last(numbers));  // Outputs: 5
 *
 * const emptyArray: number[] = [];
 * console.log(last(emptyArray));  // Outputs: undefined
 */ const last = (arr)=>arr.length > 0 ? arr[arr.length - 1] : undefined;
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/localStorageAsync/localStorageAsync.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getItemAsync": (()=>getItemAsync),
    "removeItemAsync": (()=>removeItemAsync),
    "setItemAsync": (()=>setItemAsync)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/_virtual/_tslib.js [app-ssr] (ecmascript)");
'use client';
;
const getItemAsync = (key)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, void 0, void 0, function*() {
        if (typeof window === 'undefined') {
            return undefined;
        }
        const value = window.localStorage.getItem(key);
        if (!value) {
            return undefined;
        }
        try {
            return JSON.parse(value);
        } catch (error) {
            return value;
        }
    });
const setItemAsync = (key, value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, void 0, void 0, function*() {
        if (typeof window === 'undefined') {
            return undefined;
        }
        window.localStorage.setItem(key, JSON.stringify(value));
    });
const removeItemAsync = (key)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, void 0, void 0, function*() {
        if (typeof window === 'undefined') {
            return undefined;
        }
        return localStorage.removeItem(key);
    });
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/parseChainId/parseChainId.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "parseChainId": (()=>parseChainId)
});
'use client';
const parseChainId = (chainId)=>parseInt(chainId.toString());
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/parseIntSafe/parseIntSafe.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "parseIntSafe": (()=>parseIntSafe)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$logger$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/logger/logger.js [app-ssr] (ecmascript)");
'use client';
;
const parseIntSafe = (value, radix = 10)=>{
    try {
        const int = parseInt(String(value), radix);
        if (isNaN(int)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$logger$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].error(`Error parsing ${value}`);
            return undefined;
        }
        return int;
    } catch (e) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$logger$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].error(`Error parsing ${value} to int: ${e}`);
    }
    return undefined;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/parseNetworks/parseNetworks.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "parseCosmosNetworks": (()=>parseCosmosNetworks),
    "parseEvmNetworks": (()=>parseEvmNetworks)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$parseChainId$2f$parseChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/parseChainId/parseChainId.js [app-ssr] (ecmascript)");
'use client';
;
const parseEvmNetworks = (networks)=>{
    const clone = networks.slice();
    return clone.map((network)=>{
        network.chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$parseChainId$2f$parseChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseChainId"])(network.chainId);
        network.networkId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$parseChainId$2f$parseChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseChainId"])(network.networkId);
        return network;
    });
};
const parseCosmosNetworks = (networks)=>parseEvmNetworks(networks);
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/pipe/pipe.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "pipe": (()=>pipe)
});
'use client';
/**
 * Creates a chainable function that allows adding additional transformations
 * or operations via the `pipe` method, where each function in the chain
 * can operate on the output type of the previous function.
 * @param initialFunc The initial function to start the chain.
 *  @returns An object representing the chain of functions. The returned object
 * has a `pipe` method to add more functions to the chain and can be invoked
 * directly to execute the chain of functions with an input.
 * @example
 * ```
 * // Define a function that increments its input
 * const increment = (x: number) => x + 1;
 * // Create a function chain starting with the increment function
 * const chain = createFnPipe(increment)
 *   .pipe(x => x * 2) // After incrementing, multiply the result by 2
 *   .pipe(x => `Result: ${x}`); // Then, convert the number to a string with a prefix
 *
 * console.log(chain(3)); // Output: "Result: 8"
 * ```
 */ const pipe = (initialFunc)=>{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const funcs = [
        initialFunc
    ];
    const executeFn = (input)=>funcs.reduce((acc, func)=>func(acc), input);
    const pipe = (newFunc)=>{
        funcs.push(newFunc);
        // The type assertion to Func<T, V> is necessary to align with the evolving return type.
        return Object.assign((input)=>executeFn(input), {
            pipe
        });
    };
    return Object.assign(executeFn, {
        pipe
    });
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/sleep/sleep.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "sleep": (()=>sleep)
});
'use client';
// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
function sleep(timeoutMs, valueToResolve) {
    return new Promise((resolve)=>{
        setTimeout(()=>resolve(valueToResolve), timeoutMs);
    });
}
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/retryableFn/retryableFn.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "FALLBACK_UNDEFINED": (()=>FALLBACK_UNDEFINED),
    "retryableFn": (()=>retryableFn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/_virtual/_tslib.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$sleep$2f$sleep$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/sleep/sleep.js [app-ssr] (ecmascript)");
'use client';
;
;
const FALLBACK_UNDEFINED = 'FALLBACK_UNDEFINED';
const retryableFn = (fn_1, ...args_1)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, [
        fn_1,
        ...args_1
    ], void 0, function*(fn, options = {}) {
        const { maxRetries = 3, currentRetry = 0, timeoutMs = 100, fallbackValue = new Error('Max retries reached'), retryStrategy = 'timeout-only', retryIntervalMs = 0 } = options;
        const timeoutPromise = new Promise((_, reject)=>{
            setTimeout(()=>{
                reject(new Error('Timeout'));
            }, timeoutMs);
        });
        try {
            const result = yield Promise.race([
                fn(),
                timeoutPromise
            ]);
            return result;
        } catch (err) {
            if (currentRetry >= maxRetries) {
                if (fallbackValue instanceof Error) {
                    throw fallbackValue;
                } else if (fallbackValue === FALLBACK_UNDEFINED) {
                    return undefined;
                }
                return fallbackValue;
            }
            const isTimeout = (err === null || err === void 0 ? void 0 : err.message) === 'Timeout';
            const shouldRetry = retryStrategy === 'timeout-and-rejection' || retryStrategy === 'timeout-only' && isTimeout || retryStrategy === 'rejection-only' && !isTimeout;
            if (!shouldRetry) {
                if (fallbackValue instanceof Error) {
                    throw err;
                } else if (fallbackValue === FALLBACK_UNDEFINED) {
                    return undefined;
                }
                return fallbackValue;
            }
            if (retryIntervalMs) yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$sleep$2f$sleep$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sleep"])(retryIntervalMs);
            return retryableFn(fn, {
                currentRetry: currentRetry + 1,
                fallbackValue,
                maxRetries,
                retryIntervalMs,
                retryStrategy,
                timeoutMs
            });
        }
    });
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/sanitizeName/sanitizeName.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "sanitizeName": (()=>sanitizeName)
});
'use client';
const sanitizeName = (name)=>name.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/uniq/uniq.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "uniq": (()=>uniq)
});
'use client';
/**
 * Removes duplicate elements from an array.
 *
 * @param {T[]} array - The array to filter for unique elements.
 * @template T - The type of elements in the array.
 * @returns {T[]} A new array containing only the unique elements of the given array.
 *
 * @example
 * // returns [1, 2, 3, 4, 5]
 * uniq([1, 2, 2, 3, 4, 4, 5]);
 *
 * @example
 * // returns ['apple', 'banana', 'orange']
 * uniq(['apple', 'banana', 'apple', 'orange']);
 *
 */ const uniq = (array)=>{
    const seen = new Set();
    return array.filter((item)=>{
        if (seen.has(item)) {
            return false;
        }
        seen.add(item);
        return true;
    });
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/wrapMethodWithCallback/wrapMethodWithCallback.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "wrapMethodWithCallback": (()=>wrapMethodWithCallback)
});
'use client';
/**
 * Wraps an existing method of an object with a callback function. This allows for additional
 * processing or behavior to be executed around the original method. The original method is
 * called within the callback, and its parameters and return value can be accessed and/or modified.
 *
 * @template T - The type of the object whose method is being wrapped.
 * @template K - The key type of the method within the object.
 * @template F - The type of the function, inferred from the method of the object.
 *
 * @param {T} obj - The object containing the method to be wrapped.
 * @param {K} key - The key of the method in the object to be wrapped.
 * @param {(original: F, ...args: Parameters<F>) => ReturnType<F>} callback - The callback
 *        function to wrap around the original method. It receive1`s the original method and its
 *        parameters as arguments.
 *
 * @returns {void} - The function does not return a value; it modifies the method of the object in place.
 *
 * @example
 * // Example usage
 * const myObject = {
 *   greet(name) {
 *     return `Hello, ${name}!`;
 *   }
 * };
 *
 * wrapMethodWithCallback(myObject, 'greet', (original, ...args) => {
 *   console.log('Greet method called with args:', args);
 *   return original(...args).toUpperCase();
 * });
 *
 * console.log(myObject.greet('Alice')); // Logs: 'Greet method called with args: ["Alice"]'
 *                                      // Returns: 'HELLO, ALICE!'
 */ const wrapMethodWithCallback = (obj, key, callback)=>{
    const original = obj[key];
    const boundOriginal = original.bind(obj);
    Object.assign(obj, {
        [key]: (...args)=>callback(boundOriginal, ...args)
    });
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/encryption/cryptoAvailability/cryptoAvailability.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CryptoNotAvailableError": (()=>CryptoNotAvailableError),
    "assertCryptoSubtleAvailable": (()=>assertCryptoSubtleAvailable),
    "isCryptoSubtleAvailable": (()=>isCryptoSubtleAvailable)
});
'use client';
/**
 * Checks if the Web Crypto API (crypto.subtle) is available in the current environment.
 *
 * The Web Crypto API is only available in secure contexts:
 * - HTTPS environments
 * - localhost (http://localhost or http://127.0.0.1)
 * - file:// protocol
 *
 * @returns {boolean} True if crypto.subtle is available, false otherwise
 */ const isCryptoSubtleAvailable = ()=>typeof crypto !== 'undefined' && typeof crypto.subtle !== 'undefined' && crypto.subtle !== null;
/**
 * Throws a descriptive error if crypto.subtle is not available.
 * Use this at the beginning of functions that require crypto.subtle.
 *
 * @throws {Error} If crypto.subtle is not available
 */ const assertCryptoSubtleAvailable = ()=>{
    if (!isCryptoSubtleAvailable()) {
        throw new Error('Web Crypto API (crypto.subtle) is not available. ' + 'This functionality requires a secure context. ' + 'Please ensure you are using HTTPS or localhost for development. ' + 'For testing on external devices, consider using ngrok to create an HTTPS tunnel. ' + 'See: https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API#secure_contexts');
    }
};
/**
 * Error class for crypto-related failures with better context
 */ class CryptoNotAvailableError extends Error {
    constructor(operation){
        var _a, _b;
        super(`Cannot perform ${operation}: Web Crypto API (crypto.subtle) is not available. ` + 'This functionality requires a secure context (HTTPS or localhost). ' + 'Current protocol: ' + (typeof window !== 'undefined' ? (_b = (_a = window.location) === null || _a === void 0 ? void 0 : _a.protocol) !== null && _b !== void 0 ? _b : 'unknown' : 'unknown'));
        this.name = 'CryptoNotAvailableError';
    }
}
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/encryption/createKeyPair/createKeyPair.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createKeyPair": (()=>createKeyPair)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/_virtual/_tslib.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$encryption$2f$cryptoAvailability$2f$cryptoAvailability$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/encryption/cryptoAvailability/cryptoAvailability.js [app-ssr] (ecmascript)");
'use client';
;
;
/**
 * Generates an ECDH key pair for cryptographic operations.
 * Uses the P-256 curve for key generation, which provides 128-bit security level.
 *
 * @returns {Promise<{publicKey: CryptoKey, privateKey: CryptoKey}>} A promise that resolves to an object containing:
 *   - publicKey: The generated public key
 *   - privateKey: The generated private key
 * @throws CryptoNotAvailableError if crypto.subtle is not available (requires secure context)
 */ const createKeyPair = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, void 0, void 0, function*() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$encryption$2f$cryptoAvailability$2f$cryptoAvailability$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertCryptoSubtleAvailable"])();
        const keyPair = yield crypto.subtle.generateKey({
            name: 'ECDH',
            namedCurve: 'P-256'
        }, true, [
            'deriveKey',
            'deriveBits'
        ]);
        return {
            privateKey: keyPair.privateKey,
            publicKey: keyPair.publicKey
        };
    });
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/encryption/convertPublicKeyCryptoKeyToHex/convertPublicKeyCryptoKeyToHex.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "convertPublicKeyCryptoKeyToHex": (()=>convertPublicKeyCryptoKeyToHex)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/_virtual/_tslib.js [app-ssr] (ecmascript)");
'use client';
;
/**
 * Converts a CryptoKey public key to its hexadecimal string representation.
 *
 * @param publicKey - The public CryptoKey to convert. Must be extractable.
 * @returns A Promise that resolves to the hexadecimal string representation of the public key.
 *
 * @example
 * const pair = await createKeyPair(...);
 * const hexString = await convertPublicKeyCryptoKeyToHex(pair.publicKey);
 */ const convertPublicKeyCryptoKeyToHex = (publicKey)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, void 0, void 0, function*() {
        if (!publicKey.extractable) {
            throw new Error('CryptoKey must be extractable to convert to hex.');
        }
        // Export the CryptoKey to a raw ArrayBuffer
        const exportedKey = yield crypto.subtle.exportKey('raw', publicKey);
        // Convert the ArrayBuffer to a hex string
        const byteArray = new Uint8Array(exportedKey);
        return encodeURIComponent(Array.from(byteArray).map((byte)=>byte.toString(16).padStart(2, '0')).join(''));
    });
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/encryption/deriveSharedSecret/deriveSharedSecret.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "deriveSharedSecret": (()=>deriveSharedSecret)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/_virtual/_tslib.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$encryption$2f$convertPublicKeyCryptoKeyToHex$2f$convertPublicKeyCryptoKeyToHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/encryption/convertPublicKeyCryptoKeyToHex/convertPublicKeyCryptoKeyToHex.js [app-ssr] (ecmascript)");
'use client';
;
;
/**
 * Derives a shared secret key using ECDH (Elliptic Curve Diffie-Hellman) key agreement protocol.
 * The resulting shared secret can be used for AES-GCM encryption/decryption operations.
 *
 * @param ownPrivateKey - The private key of the current party (CryptoKey format)
 * @param peerPublicKey - The public key of the peer party (CryptoKey format)
 * @returns A Promise that resolves to a hex string representing the derived shared secret
 *          configured for AES-GCM encryption/decryption operations
 */ const deriveSharedSecret = (ownPrivateKey, peerPublicKey)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, void 0, void 0, function*() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$encryption$2f$convertPublicKeyCryptoKeyToHex$2f$convertPublicKeyCryptoKeyToHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertPublicKeyCryptoKeyToHex"])((yield crypto.subtle.deriveKey({
            name: 'ECDH',
            public: peerPublicKey
        }, ownPrivateKey, {
            length: 256,
            name: 'AES-GCM'
        }, true, [
            'encrypt',
            'decrypt'
        ])));
    });
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/encryption/convertPublicKeyHexToCryptoKey/convertPublicKeyHexToCryptoKey.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "convertPublicKeyHexToCryptoKey": (()=>convertPublicKeyHexToCryptoKey)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/_virtual/_tslib.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$encryption$2f$cryptoAvailability$2f$cryptoAvailability$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/encryption/cryptoAvailability/cryptoAvailability.js [app-ssr] (ecmascript)");
'use client';
;
;
/**
 * Converts a hexadecimal string representation of a public key into a CryptoKey object
 *
 * @param hex - The hexadecimal string representation of the public key
 * @returns A Promise that resolves to a CryptoKey object suitable for ECDH operations
 * @throws Error if the hex string length is invalid or doesn't represent a valid public key
 * @throws CryptoNotAvailableError if crypto.subtle is not available (requires secure context)
 */ const convertPublicKeyHexToCryptoKey = (hex)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, void 0, void 0, function*() {
        var _a, _b;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$encryption$2f$cryptoAvailability$2f$cryptoAvailability$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertCryptoSubtleAvailable"])();
        // Validate hex string length (65 bytes = 130 hex characters)
        if (hex.length !== 130) {
            throw new Error('Invalid public key length. Expected 130 hex characters.');
        }
        // Validate hex string format (should start with '04' for uncompressed point)
        if (!hex.startsWith('04')) {
            throw new Error('Invalid public key format. Should start with "04".');
        }
        // Convert the hex string to an ArrayBuffer
        const byteArray = new Uint8Array((_b = (_a = decodeURIComponent(hex).match(/.{1,2}/g)) === null || _a === void 0 ? void 0 : _a.map((byte)=>parseInt(byte, 16))) !== null && _b !== void 0 ? _b : []);
        // Import the ArrayBuffer as a CryptoKey
        return crypto.subtle.importKey('raw', byteArray.buffer, {
            name: 'ECDH',
            namedCurve: 'P-256'
        }, true, []);
    });
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/encryption/decryptMessage/decryptMessage.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "decryptMessage": (()=>decryptMessage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/_virtual/_tslib.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DecryptionError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/DecryptionError.js [app-ssr] (ecmascript)");
'use client';
;
;
/**
 * Decrypts an encrypted message using AES-GCM encryption with a shared secret key.
 *
 * @param sharedSecret - The shared secret key in hexadecimal format
 * @param message - The encrypted message in base64 format
 * @param iv - The initialization vector in hexadecimal format
 * @param additionalData - Additional data to include in the decryption
 * @returns A Promise that resolves to the decrypted message as a string
 */ const decryptMessage = (sharedSecret, message, iv, additionalData)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, void 0, void 0, function*() {
        var _a, _b;
        try {
            const decoder = new TextDecoder();
            const sharedSecretByteArray = new Uint8Array((_b = (_a = decodeURIComponent(sharedSecret).match(/.{1,2}/g)) === null || _a === void 0 ? void 0 : _a.map((byte)=>parseInt(byte, 16))) !== null && _b !== void 0 ? _b : []);
            // Import the ArrayBuffer as a CryptoKey
            const sharedSecretCryptoKey = yield crypto.subtle.importKey('raw', sharedSecretByteArray.buffer, 'AES-GCM', true, [
                'encrypt',
                'decrypt'
            ]);
            const decryptParams = {
                iv: hexToUint8Array(decodeURIComponent(iv)),
                name: 'AES-GCM'
            };
            if (additionalData) {
                decryptParams.additionalData = additionalData;
            }
            const decryptedData = yield crypto.subtle.decrypt(decryptParams, sharedSecretCryptoKey, base64ToArrayBuffer(decodeURIComponent(message)));
            return decoder.decode(new Uint8Array(decryptedData));
        } catch (error) {
            // Failed to decrypt the message
            if (error && typeof error === 'object' && 'name' in error && typeof error.name === 'string') {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DecryptionError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DecryptionError"](error.name);
            }
            throw error;
        }
    });
const hexToUint8Array = (hex)=>{
    if (hex.length % 2 !== 0) {
        throw new Error('Hex string must have an even number of characters');
    }
    if (!/^[0-9A-Fa-f]+$/.test(hex)) {
        throw new Error('Invalid hex characters');
    }
    const bytes = new Uint8Array(hex.length / 2);
    for(let i = 0; i < hex.length; i += 2){
        bytes[i / 2] = parseInt(hex.slice(i, i + 2), 16);
    }
    return bytes;
};
const base64ToArrayBuffer = (base64)=>{
    const binaryString = atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    for(let i = 0; i < binaryString.length; i++){
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/encryption/encryptMessage/encryptMessage.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "encryptMessage": (()=>encryptMessage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/_virtual/_tslib.js [app-ssr] (ecmascript)");
'use client';
;
/**
 * Encrypts a message using AES-GCM encryption with a shared secret key
 * @param sharedSecret - Hexadecimal string representing the shared secret key
 * @param message - The plaintext message to encrypt
 * @param additionalData - Additional data to include in the encryption
 * @returns Object containing:
 *   - encryptedMessage: Base64 encoded encrypted message
 *   - iv: Hexadecimal initialization vector used for encryption
 */ const encryptMessage = (sharedSecret, message, additionalData)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, void 0, void 0, function*() {
        var _a, _b;
        const encoder = new TextEncoder();
        const iv = crypto.getRandomValues(new Uint8Array(12));
        const data = encoder.encode(message);
        const sharedSecretByteArray = new Uint8Array((_b = (_a = sharedSecret.match(/.{1,2}/g)) === null || _a === void 0 ? void 0 : _a.map((byte)=>parseInt(byte, 16))) !== null && _b !== void 0 ? _b : []);
        // Import the ArrayBuffer as a CryptoKey
        const sharedSecretCryptoKey = yield crypto.subtle.importKey('raw', sharedSecretByteArray.buffer, 'AES-GCM', true, [
            'encrypt',
            'decrypt'
        ]);
        const encryptParams = {
            iv,
            name: 'AES-GCM'
        };
        if (additionalData) {
            encryptParams.additionalData = additionalData;
        }
        const encryptedMessage = yield crypto.subtle.encrypt(encryptParams, sharedSecretCryptoKey, data);
        return {
            encryptedMessage: encodeURIComponent(arrayBufferToBase64(encryptedMessage)),
            iv: encodeURIComponent(uint8ArrayToHex(iv))
        };
    });
const arrayBufferToBase64 = (buffer)=>{
    const bytes = new Uint8Array(buffer);
    let binary = '';
    for(let i = 0; i < bytes.byteLength; i++){
        binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
};
const uint8ArrayToHex = (arr)=>Array.from(arr).map((b)=>b.toString(16).padStart(2, '0')).join('');
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/assertDefined/assertDefined.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "assertDefined": (()=>assertDefined)
});
'use client';
/**
 * Type guard assertion function that throws an error if the condition is false.
 * @param value The condition to check
 * @param message The error message to display if assertion fails
 * @throws {Error} If the assertion condition is false
 */ // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
function assertDefined(value, message) {
    if (!value) {
        throw new Error(message);
    }
}
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/encryption/generateHMAC/generateHMAC.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "generateHMAC": (()=>generateHMAC)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/_virtual/_tslib.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$assertDefined$2f$assertDefined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/assertDefined/assertDefined.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$encryption$2f$cryptoAvailability$2f$cryptoAvailability$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/encryption/cryptoAvailability/cryptoAvailability.js [app-ssr] (ecmascript)");
'use client';
;
;
;
/**
 * Generates an HMAC (Hash-based Message Authentication Code) using SHA-256
 *
 * @param keyData - The secret key used for generating the HMAC
 * @param data - The data to be authenticated
 * @returns A hexadecimal string representation of the HMAC
 * @throws CryptoNotAvailableError if crypto.subtle is not available (requires secure context)
 *
 * @example
 * const hmac = await generateHMAC('secretKey', 'dataToAuthenticate');
 * console.log(hmac); // outputs: "a1b2c3d4..."
 */ const generateHMAC = (keyData, data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, void 0, void 0, function*() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$assertDefined$2f$assertDefined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertDefined"])(keyData, 'Key data must be a non-empty string');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$assertDefined$2f$assertDefined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertDefined"])(data, 'Data must be a non-empty string');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$encryption$2f$cryptoAvailability$2f$cryptoAvailability$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertCryptoSubtleAvailable"])();
        const textEncoder = new TextEncoder();
        const encodedKeyData = textEncoder.encode(keyData);
        const encodedData = textEncoder.encode(data);
        // Import the key for HMAC using SHA-256
        const key = yield crypto.subtle.importKey('raw', encodedKeyData, {
            hash: 'SHA-256',
            name: 'HMAC'
        }, false, [
            'sign'
        ]);
        // Generate the HMAC signature for the data
        const signature = yield crypto.subtle.sign('HMAC', key, encodedData);
        // Convert the ArrayBuffer signature into a hex string
        const hashArray = Array.from(new Uint8Array(signature));
        const hashHex = hashArray.map((b)=>b.toString(16).padStart(2, '0')).join('');
        return hashHex;
    });
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/encryption/isEncryptedMessage/isEncryptedMessage.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isEncryptedMessage": (()=>isEncryptedMessage)
});
'use client';
/**
 * Type guard to check if a value is an encrypted message
 * @param value - Value to check
 * @returns boolean indicating if the value matches the EncryptedMessage format
 */ const isEncryptedMessage = (value)=>{
    if (!value || typeof value !== 'object' || Array.isArray(value) || value === null || typeof value === 'string') {
        return false;
    }
    const candidate = value;
    const keys = Object.keys(candidate);
    return keys.length === 2 && keys.includes('encryptedMessage') && keys.includes('iv') && typeof candidate['encryptedMessage'] === 'string' && typeof candidate['iv'] === 'string';
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/uint8ArrayToBase64/uint8ArrayToBase64.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "uint8ArrayFromBase64": (()=>uint8ArrayFromBase64),
    "uint8ArrayToBase64": (()=>uint8ArrayToBase64)
});
'use client';
/**
 * Converts a Uint8Array to a base64 encoded string
 * @param buf - The Uint8Array to convert
 * @returns The base64 encoded string representation of the input buffer
 * @example
 * ```ts
 * const originalData = new Uint8Array([72, 101, 108, 108, 111]); // "Hello"
 * const base64 = uint8ArrayToBase64(originalData); // "SGVsbG8="
 * const restored = uint8ArrayFromBase64(base64); // Uint8Array [72, 101, 108, 108, 111]
 * ```
 */ const uint8ArrayToBase64 = (buf)=>Buffer.from(buf).toString('base64');
/**
 * Converts a base64 encoded string back to a Uint8Array
 * @param base64 - The base64 encoded string to convert
 * @returns The Uint8Array representation of the input base64 string
 * @example
 * ```ts
 * const base64String = "SGVsbG8="; // "Hello" encoded in base64
 * const uint8Array = uint8ArrayFromBase64(base64String); // Uint8Array [72, 101, 108, 108, 111]
 * const backToBase64 = uint8ArrayToBase64(uint8Array); // "SGVsbG8="
 * ```
 */ const uint8ArrayFromBase64 = (base64)=>Uint8Array.from(Buffer.from(base64, 'base64'));
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/filterDuplicates/filterDuplicates.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "filterDuplicates": (()=>filterDuplicates)
});
'use client';
/**
 * Filter duplicates from an array by equality.
 * Uses a Set internally.
 */ const filterDuplicates = (array)=>Array.from(new Set(array));
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/StorageService/storageEvents.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "storageEvents": (()=>storageEvents)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter3$40$5$2e$0$2e$1$2f$node_modules$2f$eventemitter3$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eventemitter3@5.0.1/node_modules/eventemitter3/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter3$40$5$2e$0$2e$1$2f$node_modules$2f$eventemitter3$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eventemitter3@5.0.1/node_modules/eventemitter3/index.mjs [app-ssr] (ecmascript) <locals>");
'use client';
;
const storageEvents = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter3$40$5$2e$0$2e$1$2f$node_modules$2f$eventemitter3$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"]();
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/StorageService/createStorageService/createStorageService.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createStorageService": (()=>createStorageService)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$logger$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/logger/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$StorageService$2f$storageEvents$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/StorageService/storageEvents.js [app-ssr] (ecmascript)");
'use client';
;
;
const createStorageService = ({ storage })=>{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const packValue = (value)=>JSON.stringify(value);
    const unpackValue = (value)=>JSON.parse(value);
    const getItem = (key)=>{
        const value = storage.getItem(key);
        if (!value || value === 'undefined' || value === 'null') {
            return undefined;
        }
        try {
            return unpackValue(value);
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$logger$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].error(`Error while parsing ${key} from local storage`, {
                value
            });
            removeItem(key);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$StorageService$2f$storageEvents$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storageEvents"].emit('parseFailure', error, key);
        }
        return undefined;
    };
    const setItem = (key, value)=>{
        storage.setItem(key, packValue(value));
    };
    const removeItem = (key)=>{
        storage.removeItem(key);
    };
    const getKeys = ()=>Object.keys(storage);
    return {
        getItem,
        getKeys,
        removeItem,
        setItem
    };
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/StorageService/StorageService.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "StorageService": (()=>StorageService)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$logger$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/logger/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$StorageService$2f$createStorageService$2f$createStorageService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/StorageService/createStorageService/createStorageService.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$StorageService$2f$storageEvents$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/StorageService/storageEvents.js [app-ssr] (ecmascript)");
'use client';
;
;
;
class StorageService {
    static clearRegistry() {
        StorageService.registry = {
            localStorage: undefined,
            secureStorage: undefined,
            sessionStorage: undefined
        };
    }
    static registerSourceStorage(source, implementation) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$logger$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].logVerboseTroubleshootingMessage('StorageService.registerSourceStorage', {
            implementation,
            source
        });
        StorageService.registry[source] = implementation;
    }
    static getSourceStorage(source) {
        return StorageService.registry[source];
    }
    static resolveStorage(options) {
        const priority = (options === null || options === void 0 ? void 0 : options.priority) || [
            'localStorage'
        ];
        for (const source of priority){
            const storage = StorageService.getSourceStorage(source);
            if (storage) {
                return storage;
            }
        }
        /**
         * Temporary fallbacks until we ensure that one instance of the utils package is
         * installed
         *
         * thread https://dynamiclabsgroup.slack.com/archives/C03HMTUCXRR/p1752662470299459
         */ if (priority.includes('localStorage')) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$logger$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].info('No available storage found based on the specified priority, defaulting to localStorage');
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$StorageService$2f$createStorageService$2f$createStorageService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createStorageService"])({
                storage: localStorage
            });
        }
        if (priority.includes('sessionStorage')) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$logger$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].info('No available storage found based on the specified priority, defaulting to sessionStorage');
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$StorageService$2f$createStorageService$2f$createStorageService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createStorageService"])({
                storage: sessionStorage
            });
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$logger$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].logVerboseTroubleshootingMessage('No storage found — StorageService.registry:', StorageService.registry);
        throw new Error('No available storage found based on the specified priority');
    }
    static getItem(key, options) {
        const storage = StorageService.resolveStorage(options);
        return storage.getItem(key);
    }
    static setItem(key, value, options) {
        const storage = StorageService.resolveStorage(options);
        storage.setItem(key, value);
    }
    static removeItem(key, options) {
        const storage = StorageService.resolveStorage(options);
        storage.removeItem(key);
    }
    static getKeys(options) {
        return StorageService.resolveStorage(options).getKeys();
    }
}
StorageService.registry = {
    localStorage: undefined,
    secureStorage: undefined,
    sessionStorage: undefined
};
StorageService.events = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$StorageService$2f$storageEvents$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storageEvents"];
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/walletReturnRoute/walletReturnRoute.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "walletReturnRoute": (()=>walletReturnRoute)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$StorageService$2f$StorageService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/StorageService/StorageService.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$logger$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/logger/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$StorageService$2f$storageEvents$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/StorageService/storageEvents.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const WALLET_RETURN_ROUTE_KEY = 'dynamic-wallet-return-route';
/**
 * Utility for storing and retrieving the route to return to after
 * a wallet deep link operation completes.
 */ const walletReturnRoute = {
    /**
     * Clear any stored return route without retrieving it.
     */ clear: ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$StorageService$2f$StorageService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StorageService"].removeItem(WALLET_RETURN_ROUTE_KEY);
    },
    /**
     * Get and clear the stored return route.
     * Returns undefined if no route was stored.
     */ getAndClear: ()=>{
        const route = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$StorageService$2f$StorageService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StorageService"].getItem(WALLET_RETURN_ROUTE_KEY);
        if (route) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$StorageService$2f$StorageService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StorageService"].removeItem(WALLET_RETURN_ROUTE_KEY);
        }
        return route !== null && route !== void 0 ? route : undefined;
    },
    /**
     * Store the current route before opening a wallet deep link.
     * This will be retrieved when the app returns from the wallet.
     */ set: (route)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$StorageService$2f$StorageService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StorageService"].setItem(WALLET_RETURN_ROUTE_KEY, route);
    }
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/cloneObjectWithOverrides/cloneObjectWithOverrides.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cloneObjectWithOverrides": (()=>cloneObjectWithOverrides)
});
'use client';
/**
 * Clones an object and includes properties with `enumerable: false`, unlike the spread
 * operator which will leave these properties out.
 *
 * Optionally pass in overrides to apply to the cloned object.
 *
 * @param original The object to clone
 * @param overrides An object containing properties to override on the cloned object
 * @returns A new object that is a clone of the original object with the specified overrides
 */ const cloneObjectWithOverrides = (original, overrides = {})=>{
    var _a, _b;
    // Get the property descriptors from the original object
    const descriptors = Object.getOwnPropertyDescriptors(original);
    // Create a new object using the same prototype as the original
    const clone = Object.create(Object.getPrototypeOf(original));
    // // Loop through the overrides to redefine any read-only methods
    for (const [key, value] of Object.entries(overrides)){
        // Redefine the method even if it was read-only on the original object
        Object.defineProperty(clone, key, {
            // Make it writable if necessary
            configurable: true,
            // Allow future modifications
            enumerable: (_b = (_a = descriptors[key]) === null || _a === void 0 ? void 0 : _a.enumerable) !== null && _b !== void 0 ? _b : true,
            value: value,
            writable: true
        });
    }
    const overridesKeys = Object.keys(overrides);
    // add properties from original object if they're not in overrides
    // if we add all of them, read-only props/methods might not get properly overwritten
    for (const [key, descriptor] of Object.entries(descriptors)){
        // if has not been overwritten, add original
        if (!overridesKeys.includes(key)) {
            Object.defineProperty(clone, key, descriptor);
        }
    }
    return clone;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/get/get.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "get": (()=>get)
});
'use client';
/**
 * Retrieves the value at the given path of an object.
 * @param obj - The object from which to extract the value.
 * @param path - The path to the desired value within the object, using dot notation.
 * @returns The value from the specified path, or undefined if the path is not valid.
 */ const get = (obj, path)=>{
    try {
        // Split the path into keys considering special characters as part of the keys
        const keys = path.match(/[^.[\]"']+/g) || [];
        return keys.reduce((acc, key)=>acc[key], obj);
    } catch (error) {
        // If there is an error accessing the properties, return undefined
        return undefined;
    }
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/hexToString/hexToString.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "hexToString": (()=>hexToString)
});
'use client';
/**
 * Converts a hexadecimal string to a regular string by interpreting each pair of characters in the
 * hexadecimal string as a byte in ASCII. It automatically handles hex strings prefixed with '0x'.
 *
 * @param {string} hexString - The hexadecimal string to convert. It can optionally start with '0x'.
 * @returns {string} The decoded ASCII string.
 *
 * @example
 * hexToString('68656c6c6f'); // returns 'hello'
 * hexToString('0x68656c6c6f'); // also returns 'hello'
 */ const hexToString = (hexString)=>{
    const normalizedHexString = hexString.startsWith('0x') ? hexString.substring(2) : hexString;
    let text = '';
    // Ensure we only process complete pairs by rounding down to the nearest even length
    const length = normalizedHexString.length - normalizedHexString.length % 2;
    for(let i = 0; i < length; i += 2){
        const hexCode = normalizedHexString.substring(i, i + 2);
        const decimal = parseInt(hexCode, 16);
        text += String.fromCharCode(decimal);
    }
    return text;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/isHex/isHex.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isHex": (()=>isHex)
});
'use client';
/**
 * Checks if the provided string is a valid hexadecimal string.
 * @param str The string to check.
 * @returns `true` if the string is a valid hexadecimal string, `false` otherwise.
 */ const isHex = (str)=>{
    if (typeof str !== 'string') {
        throw new Error('Input must be a string');
    }
    const normalizedStr = str.startsWith('0x') ? str.substring(2) : str;
    const regex = /^[0-9a-fA-F]+$/;
    return regex.test(normalizedStr);
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/isInIframe/isInIframe.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isInIframe": (()=>isInIframe)
});
'use client';
const isInIframe = ()=>window.self !== window.top;
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/promiseWithTimeout/promiseWithTimeout.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "promiseWithTimeout": (()=>promiseWithTimeout)
});
'use client';
const promiseWithTimeout = (promise, ms, { timeoutMessage = 'Operation timed out' } = {})=>{
    let timerId;
    const timeoutPromise = new Promise((_, reject)=>{
        timerId = setTimeout(()=>{
            reject(new Error(timeoutMessage));
        }, ms);
    });
    const wrappedPromise = promise.finally(()=>{
        clearTimeout(timerId);
    });
    return Promise.race([
        wrappedPromise,
        timeoutPromise
    ]);
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/runSafe/runSafe.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "runSafe": (()=>runSafe)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/_virtual/_tslib.js [app-ssr] (ecmascript)");
'use client';
;
/**
 * Safely executes a callback function.
 * @template T The type of the callback's return value.
 * @template E The type of the error.
 * @param {() => Promise<T> | T} callback A function that might throw an error.
 * @returns {Promise<[T | undefined, E | undefined]>} A tuple with either the result or the error.
 */ const runSafe = (callback)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, void 0, void 0, function*() {
        try {
            const resolved = yield callback();
            return [
                resolved,
                undefined
            ];
        } catch (error) {
            return [
                undefined,
                error
            ];
        }
    });
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/template/template.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "template": (()=>template)
});
'use client';
/**
 * Creates a template function that replaces placeholders with corresponding values from a data object.
 * @param {string} templateText - The template string containing placeholders in the form {{placeholder}}.
 * @returns {(data) => string} - A function that replaces the placeholders with the values from the data object.
 *
 * @example
 * // Basic usage
 * const compiled = template('Test text {{placeholder}} value');
 * console.log(compiled({ placeholder: 'test' })); // Output: 'Test text test value'
 *
 * @example
 * // Multiple placeholders
 * const compiled = template('Test text {{placeholder}} value {{placeholder2}}');
 * console.log(compiled({ placeholder: 'test', placeholder2: 'test2' })); // Output: 'Test text test value test2'
 */ const template = (templateText)=>{
    return (data)=>templateText.replace(/{{(\w+?)}}/g, (match, key)=>key in data ? data[key] : match);
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/tracing/tracing.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createTracing": (()=>createTracing),
    "tracing": (()=>tracing)
});
'use client';
const formatTrace = (trace)=>`
--- ${trace.scope} : ${trace.timestamp.toISOString()} ---
${trace.payload.join('\n')}
`.trim();
/**
 * Creates a tracing utility with functions for logging and formatting
 * @returns Tracing utility object
 */ const createTracing = ()=>{
    const traces = [];
    return {
        /**
         * Formats an object as a pretty-printed JSON string
         * @param object - The object to format
         * @returns JSON string representation of the object
         */ formatObject: (object)=>JSON.stringify(object, null, 2),
        /**
         * Logs an event to the trace collection
         * @param scope - The scope/category of the event
         * @param args - String messages to include in the trace
         */ logEvent: (scope, ...args)=>{
            traces.push({
                payload: args,
                scope,
                timestamp: new Date()
            });
        },
        /**
         * Formats and returns traces filtered by scope
         * @param scopes - Optional array of scopes to filter traces
         * @returns Formatted trace output as a string
         */ packScopes: (scopes)=>traces.filter((trace)=>scopes ? scopes.includes(trace.scope) : true).map(formatTrace).join('\n\n')
    };
};
const tracing = createTracing();
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/consts/phantomRedirect.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "PHANTOM_REDIRECT_CONNECTION_TYPE_KEY": (()=>PHANTOM_REDIRECT_CONNECTION_TYPE_KEY)
});
'use client';
const PHANTOM_REDIRECT_CONNECTION_TYPE_KEY = 'phantom-redirect-connection-type';
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/PlatformEventsService/createBrowserPlatformEventsService/createBrowserPlatformEventsService.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createBrowserPlatformEventsService": (()=>createBrowserPlatformEventsService)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter3$40$5$2e$0$2e$1$2f$node_modules$2f$eventemitter3$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eventemitter3@5.0.1/node_modules/eventemitter3/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter3$40$5$2e$0$2e$1$2f$node_modules$2f$eventemitter3$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eventemitter3@5.0.1/node_modules/eventemitter3/index.mjs [app-ssr] (ecmascript) <locals>");
'use client';
;
const createBrowserPlatformEventsService = (window)=>{
    const emitter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter3$40$5$2e$0$2e$1$2f$node_modules$2f$eventemitter3$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"]();
    /**
     * This map ensure the when a new value is added to
     * IPlatformEvents it will be required to implement here too
     */ const mapPlatformEventsToRequestChannel = {
        appFocused: ()=>{
            window.addEventListener('focus', ()=>{
                emitter.emit('appFocused');
            });
        }
    };
    // Setup all events
    Object.values(mapPlatformEventsToRequestChannel).forEach((handler)=>handler());
    return emitter;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/PlatformEventsService/PlatformEventsService.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "PlatformEventsService": (()=>PlatformEventsService)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/_virtual/_tslib.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$PlatformEventsService$2f$createBrowserPlatformEventsService$2f$createBrowserPlatformEventsService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/PlatformEventsService/createBrowserPlatformEventsService/createBrowserPlatformEventsService.js [app-ssr] (ecmascript)");
'use client';
;
;
var _a, _PlatformEventsService_implementation;
class PlatformEventsService {
    static get implementation() {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__classPrivateFieldGet"])(_a, _a, "f", _PlatformEventsService_implementation)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__classPrivateFieldSet"])(_a, _a, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$PlatformEventsService$2f$createBrowserPlatformEventsService$2f$createBrowserPlatformEventsService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createBrowserPlatformEventsService"])(window), "f", _PlatformEventsService_implementation);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__classPrivateFieldGet"])(_a, _a, "f", _PlatformEventsService_implementation);
    }
    static set implementation(implementation) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__classPrivateFieldSet"])(_a, _a, implementation, "f", _PlatformEventsService_implementation);
    }
    static get on() {
        return _a.implementation.on.bind(_a.implementation);
    }
    static get off() {
        return _a.implementation.off.bind(_a.implementation);
    }
    static get once() {
        return _a.implementation.once.bind(_a.implementation);
    }
}
_a = PlatformEventsService;
_PlatformEventsService_implementation = {
    value: void 0
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/FetchService/FetchService.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "FetchService": (()=>FetchService)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/_virtual/_tslib.js [app-ssr] (ecmascript)");
'use client';
;
var _a, _FetchService_implementation;
/**
 * Class implementing the fetch service with a configurable fetch implementation.
 */ class FetchService {
    static get implementation() {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__classPrivateFieldGet"])(_a, _a, "f", _FetchService_implementation)) {
            return {
                fetch: window.fetch.bind(window)
            };
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__classPrivateFieldGet"])(_a, _a, "f", _FetchService_implementation);
    }
    static set implementation(implementation) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__classPrivateFieldSet"])(_a, _a, implementation, "f", _FetchService_implementation);
    }
    static get fetch() {
        return _a.implementation.fetch;
    }
}
_a = FetchService;
_FetchService_implementation = {
    value: void 0
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/Oauth2Service/utils/loadAppleId/loadAppleId.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "loadAppleId": (()=>loadAppleId)
});
'use client';
const appleIdScriptSrc = 'https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js';
const loadAppleId = ()=>new Promise((resolve, reject)=>{
        const script = document.querySelector('script[data-apple-sdk]');
        if (script) {
            // Script already exists, attach event listeners
            if (script.hasAttribute('data-loaded')) {
                resolve();
            } else {
                script.addEventListener('load', ()=>resolve());
                script.addEventListener('error', ()=>reject(new Error('Failed to load Apple SDK')));
            }
        } else {
            // If the script does not exist, create and add it
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = appleIdScriptSrc;
            script.setAttribute('data-apple-sdk', 'true');
            script.onload = ()=>{
                script === null || script === void 0 ? void 0 : script.setAttribute('data-loaded', 'true');
                resolve();
            };
            script.onerror = ()=>reject(new Error('Failed to load Apple SDK'));
            window.document.head.appendChild(script);
        }
    });
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/Oauth2Service/utils/connectWithAppleId/connectWithAppleId.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "connectWithAppleId": (()=>connectWithAppleId)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/_virtual/_tslib.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$Oauth2Service$2f$utils$2f$loadAppleId$2f$loadAppleId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/Oauth2Service/utils/loadAppleId/loadAppleId.js [app-ssr] (ecmascript)");
'use client';
;
;
const connectWithAppleId = (_a)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, [
        _a
    ], void 0, function*({ clientId, oauthLoginUrl, state }) {
        yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$Oauth2Service$2f$utils$2f$loadAppleId$2f$loadAppleId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadAppleId"])();
        // Because the AppleID is loaded from a script tag, there is not type for it
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        AppleID.auth.init({
            clientId,
            redirectURI: oauthLoginUrl.searchParams.get('redirect_uri'),
            scope: 'name email',
            state,
            usePopup: false
        });
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        AppleID.auth.signIn();
    });
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/Oauth2Service/createWindowOauth2Service/createWindowOauth2Service.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createWindowOauth2Service": (()=>createWindowOauth2Service)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/_virtual/_tslib.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$types$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$types$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+types@4.73.2/node_modules/@dynamic-labs/types/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$ProviderEnum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/models/ProviderEnum.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$types$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$types$2f$src$2f$oauth$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+types@4.73.2/node_modules/@dynamic-labs/types/src/oauth/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$logger$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/logger/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$Oauth2Service$2f$utils$2f$connectWithAppleId$2f$connectWithAppleId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/Oauth2Service/utils/connectWithAppleId/connectWithAppleId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$isMobile$2f$isMobile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/isMobile/isMobile.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$PlatformService$2f$PlatformService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/PlatformService/PlatformService.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tldts$40$6$2e$0$2e$16$2f$node_modules$2f$tldts$2f$dist$2f$es6$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tldts@6.0.16/node_modules/tldts/dist/es6/index.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
let authWindowInterval;
const createWindowOauth2Service = ()=>({
        getOauthCode: ({ apiProvider, provider, redirectUrl, setIsProcessing, state, oauthLoginUrl, initWebAuth, strategy })=>new Promise((resolve, _reject)=>{
                /**
         * Use AppleID SDK for Apple provider on mobile
         * It should use the strategy setting, but on ios or safari
         * it should use the appleId always as it is the best experience
         */ if (provider === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$ProviderEnum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProviderEnum"].Apple && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$isMobile$2f$isMobile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSafariBrowser"])() || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$isMobile$2f$isMobile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isIOS"])() || strategy === 'redirect')) {
                    initWebAuth({
                        redirectUrl: redirectUrl || window.location.href
                    }).then(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$Oauth2Service$2f$utils$2f$connectWithAppleId$2f$connectWithAppleId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["connectWithAppleId"])({
                            clientId: apiProvider === null || apiProvider === void 0 ? void 0 : apiProvider.clientId,
                            oauthLoginUrl,
                            state
                        }).catch(_reject));
                    return;
                }
                /**
         * Use redirect flow on mobile for all providers except Telegram
         */ if (strategy === 'redirect' && provider !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$ProviderEnum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProviderEnum"].Telegram) {
                    initWebAuth({
                        redirectUrl: redirectUrl || window.location.href
                    }).then(()=>{
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$PlatformService$2f$PlatformService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlatformService"].openURL(oauthLoginUrl.toString());
                    });
                    return;
                }
                // When we catch this error we assume it follows this type, so we must enforce it
                // here to ensure the assumption is correct
                const typedReject = (params)=>_reject(params);
                // Clear any potential pending timeouts and intervals
                clearInterval(authWindowInterval);
                const providersWaitingOauthMessage = {};
                const authWindow = window.open('', '_blank', 'width=500,height=600');
                if (authWindow === null || typeof authWindow === 'undefined') {
                    // Pop-ups are blocked
                    typedReject({
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$types$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$types$2f$src$2f$oauth$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SocialOAuthErrorCode"].OAUTH_WINDOW_BLOCKED,
                        message: 'Please allow popups and try again.'
                    });
                    return;
                }
                const clearListeners = ()=>{
                    window.removeEventListener('message', handleWindowMessage);
                    providersWaitingOauthMessage[provider] = false;
                };
                const handleWindowMessage = (event)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, void 0, void 0, function*() {
                        const message = event.data;
                        const expectedOrigin = getExpectedOrigin(apiProvider);
                        if (!expectedOrigin) {
                            return;
                        }
                        if ((message === null || message === void 0 ? void 0 : message.type) === 'origin_check' && authWindow) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$logger$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].debug('Origin check message received. Sending response now.', {
                                data: message,
                                expectedOrigin
                            });
                            authWindow.postMessage('origin_check_response', expectedOrigin);
                            return;
                        }
                        const isTelegramCompletedMessage = (message === null || message === void 0 ? void 0 : message.type) === 'telegram_completed';
                        const isAuthorizationMessage = (message === null || message === void 0 ? void 0 : message.type) === 'authorization_response';
                        if (isAuthorizationMessage || isTelegramCompletedMessage) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$logger$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].debug('Message received', {
                                data: message
                            });
                        }
                        const isExpectedOrigin = event.origin === expectedOrigin;
                        const isValidMessage = (isAuthorizationMessage && (message === null || message === void 0 ? void 0 : message.provider) === provider || isTelegramCompletedMessage) && isExpectedOrigin;
                        // don't process invalid messages for provider
                        if (!isValidMessage) {
                            return;
                        }
                        setIsProcessing(true);
                        if (!providersWaitingOauthMessage[provider]) {
                            typedReject({
                                code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$types$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$types$2f$src$2f$oauth$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SocialOAuthErrorCode"].SESSION_TIMEOUT,
                                message: `Connecting ${provider} account session timeout.`
                            });
                            return;
                        }
                        clearListeners();
                        if (isTelegramCompletedMessage) {
                            handleTelegramCompletionMessage(message, state);
                            return;
                        }
                        handleAuthorizationMessage(message, provider, state);
                    });
                const getExpectedOrigin = (apiProvider)=>{
                    if (!(apiProvider === null || apiProvider === void 0 ? void 0 : apiProvider.redirectUrl)) {
                        return;
                    }
                    try {
                        const redirectUri = new URL(apiProvider.redirectUrl);
                        return redirectUri.origin;
                    } catch (e) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$logger$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].error('Failed to parse social provider redirect url', {
                            error: e
                        });
                        return;
                    }
                };
                const handleTelegramCompletionMessage = (message, state)=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$logger$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].debug('Telegram completion message received', {
                        data: message
                    });
                    const { code, state: authState } = message;
                    // check that the state we receive from message is the same state we calculated earlier
                    // this could be an attack
                    if (state !== authState) {
                        typedReject({
                            code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$types$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$types$2f$src$2f$oauth$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SocialOAuthErrorCode"].OAUTH_ERROR,
                            message: 'Failed to connect telegram account: Invalid random state'
                        });
                        return;
                    }
                    resolve(code);
                    setIsProcessing(false);
                };
                const handleAuthorizationMessage = (message, provider, state)=>{
                    const { code, error, state: authState } = message;
                    if (error && error !== 'undefined') {
                        typedReject({
                            code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$types$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$types$2f$src$2f$oauth$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SocialOAuthErrorCode"].OAUTH_ERROR,
                            message: `Failed to connect ${provider} social account: ${error}`
                        });
                        return;
                    }
                    // check that the state we receive from message is the same state we calculated earlier
                    // this could be an attack
                    // this state check is used only by providers with an open window opener reference (eg, not twitter)
                    if (state !== authState) {
                        typedReject({
                            code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$types$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$types$2f$src$2f$oauth$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SocialOAuthErrorCode"].OAUTH_ERROR,
                            message: `Failed to connect ${provider} social account: Invalid random state`
                        });
                        return;
                    }
                    if (!code) {
                        typedReject({
                            code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$types$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$types$2f$src$2f$oauth$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SocialOAuthErrorCode"].NO_AUTH_CODE,
                            message: `Failed to connect ${provider} social account: no authorization code`
                        });
                        return;
                    }
                    resolve(code);
                    setIsProcessing(false);
                };
                if (!providersWaitingOauthMessage[provider]) {
                    window.addEventListener('message', handleWindowMessage);
                    providersWaitingOauthMessage[provider] = true;
                }
                // First we store the state in backend
                initWebAuth().then(()=>{
                    authWindow === null || authWindow === void 0 ? void 0 : authWindow.location.assign(oauthLoginUrl);
                    authWindowInterval = setInterval(()=>{
                        if (!(authWindow === null || authWindow === void 0 ? void 0 : authWindow.closed)) return;
                        clearInterval(authWindowInterval);
                        setIsProcessing(false);
                        // user didn't complete oauth
                        if (providersWaitingOauthMessage[provider]) typedReject({
                            code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$types$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$types$2f$src$2f$oauth$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SocialOAuthErrorCode"].USER_CANCELLED,
                            message: 'User cancelled connection'
                        });
                    }, 2000);
                });
            })
    });
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/Oauth2Service/Oauth2Service.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Oauth2Service": (()=>Oauth2Service)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/_virtual/_tslib.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$types$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$types$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+types@4.73.2/node_modules/@dynamic-labs/types/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$types$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$types$2f$src$2f$oauth$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+types@4.73.2/node_modules/@dynamic-labs/types/src/oauth/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$Oauth2Service$2f$createWindowOauth2Service$2f$createWindowOauth2Service$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/Oauth2Service/createWindowOauth2Service/createWindowOauth2Service.js [app-ssr] (ecmascript)");
'use client';
;
;
;
var _a, _Oauth2Service_implementation;
/**
 * Class implementing the fetch service with a configurable fetch implementation.
 */ class Oauth2Service {
    static get implementation() {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__classPrivateFieldGet"])(_a, _a, "f", _Oauth2Service_implementation)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$Oauth2Service$2f$createWindowOauth2Service$2f$createWindowOauth2Service$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWindowOauth2Service"])();
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__classPrivateFieldGet"])(_a, _a, "f", _Oauth2Service_implementation);
    }
    static set implementation(implementation) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__classPrivateFieldSet"])(_a, _a, implementation, "f", _Oauth2Service_implementation);
    }
    static get getOauthCode() {
        return _a.implementation.getOauthCode;
    }
}
_a = Oauth2Service;
_Oauth2Service_implementation = {
    value: void 0
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
Oauth2Service.isGetOauthCodeError = (error)=>typeof error === 'object' && 'code' in error && Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$types$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$types$2f$src$2f$oauth$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SocialOAuthErrorCode"]).includes(error.code) && 'message' in error && typeof error.message === 'string';
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/StorageService/applyPostfixToStorageService/applyPostfixToStorageService.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "applyPostfixToStorageService": (()=>applyPostfixToStorageService)
});
'use client';
const applyPostfixToStorageService = ({ storage, postfix })=>{
    const getKeyWithPostfix = (key)=>postfix ? `${key}_${postfix}` : key;
    return Object.assign(Object.assign({}, storage), {
        getItem: (key)=>storage.getItem(getKeyWithPostfix(key)),
        removeItem: (key)=>storage.removeItem(getKeyWithPostfix(key)),
        setItem: (key, data)=>storage.setItem(getKeyWithPostfix(key), data)
    });
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/solToLamports/solToLamports.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "solToLamports": (()=>solToLamports)
});
'use client';
const solToLamports = (solAmount)=>{
    const lamportsPerSol = 1000000000; // 1 SOL = 1,000,000,000 Lamports
    return solAmount * lamportsPerSol;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/env/getEnvVarWithFallback.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getEnvVarWithFallback": (()=>getEnvVarWithFallback)
});
'use client';
/**
 * Safely gets an environment variable with a required fallback value
 * @param keys Single key or array of keys to try in order
 * @param defaultValue Required default value if none of the keys are found
 * @returns The first found environment variable value or the default value
 */ const getEnvVarWithFallback = (keys, defaultValue)=>{
    if (typeof process === 'undefined' || !process.env) {
        return defaultValue;
    }
    const keysToTry = Array.isArray(keys) ? keys : [
        keys
    ];
    for (const key of keysToTry){
        const value = process.env[key];
        if (value !== undefined) {
            return value;
        }
    }
    return defaultValue;
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/setupInsideIframe/utils/getInitialParentURL/getInitialParentURL.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getInitialParentURL": (()=>getInitialParentURL)
});
'use client';
const missingParentURLMessage = `Parent URL is required

You must pass the parent URL to the iframe using the following query parameter:

?initial-parent-url=<encoded-parent-url>

Example:

const iframeUrl = new URL('https://my-iframe.com');

iframeUrl.searchParams.set('initial-parent-url', window.location.href);

<iframe src="\${iframeUrl.toString()}"></iframe>

For more information, see the documentation:
https://npmjs.com/package/@dynamic-labs/iframe-setup
`;
const getInitialParentURL = ()=>{
    const initialParentURL = new URLSearchParams(window.location.search).get('initial-parent-url');
    if (!initialParentURL) {
        throw new Error(missingParentURLMessage);
    }
    return new URL(decodeURIComponent(initialParentURL));
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/setupInsideIframe/utils/logger.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
const logger = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$logger$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$logger$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Logger"]('@dynamic-labs/iframe-setup');
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/setupInsideIframe/utils/createMessageHandler/createMessageHandler.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createMessageHandler": (()=>createMessageHandler)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$setupInsideIframe$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/setupInsideIframe/utils/logger.js [app-ssr] (ecmascript)");
'use client';
;
const createMessageHandler = (parentOrigin)=>(eventName, handler)=>{
        window.addEventListener('message', (event)=>{
            if (event.origin !== parentOrigin) {
                return;
            }
            try {
                if (!Object.prototype.hasOwnProperty.call(event.data, 'eventName') || !Object.prototype.hasOwnProperty.call(event.data, 'args') || !Array.isArray(event.data.args)) {
                    return;
                }
                const { eventName: incomingEventName, args } = event.data;
                if (incomingEventName === eventName) {
                    handler(...args);
                }
            } catch (error) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$setupInsideIframe$2f$utils$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].error('Failed to parse message', error);
            }
        });
    };
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/setupInsideIframe/utils/setupPlatformEventsService/setupPlatformEventsService.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "setupPlatformEventsService": (()=>setupPlatformEventsService)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter3$40$5$2e$0$2e$1$2f$node_modules$2f$eventemitter3$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eventemitter3@5.0.1/node_modules/eventemitter3/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter3$40$5$2e$0$2e$1$2f$node_modules$2f$eventemitter3$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eventemitter3@5.0.1/node_modules/eventemitter3/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$setupInsideIframe$2f$utils$2f$createMessageHandler$2f$createMessageHandler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/setupInsideIframe/utils/createMessageHandler/createMessageHandler.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$PlatformEventsService$2f$PlatformEventsService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/PlatformEventsService/PlatformEventsService.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const setupPlatformEventsService = (initialParentURL)=>{
    const emitter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter3$40$5$2e$0$2e$1$2f$node_modules$2f$eventemitter3$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"]();
    const messageHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$setupInsideIframe$2f$utils$2f$createMessageHandler$2f$createMessageHandler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createMessageHandler"])(initialParentURL.origin);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$PlatformEventsService$2f$PlatformEventsService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlatformEventsService"].implementation = emitter;
    messageHandler('APP_FOCUS', ()=>{
        emitter.emit('appFocused');
    });
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/setupInsideIframe/utils/createMessageSender/createMessageSender.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createMessageSender": (()=>createMessageSender)
});
'use client';
const createMessageSender = (parentOrigin)=>(eventName, ...args)=>window.parent.postMessage({
            args,
            eventName
        }, parentOrigin);
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/setupInsideIframe/utils/setupPlatformService/setupPlatformService.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "setupPlatformService": (()=>setupPlatformService)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/_virtual/_tslib.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$setupInsideIframe$2f$utils$2f$createMessageSender$2f$createMessageSender$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/setupInsideIframe/utils/createMessageSender/createMessageSender.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$setupInsideIframe$2f$utils$2f$createMessageHandler$2f$createMessageHandler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/setupInsideIframe/utils/createMessageHandler/createMessageHandler.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$PlatformService$2f$PlatformService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/PlatformService/PlatformService.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tldts$40$6$2e$0$2e$16$2f$node_modules$2f$tldts$2f$dist$2f$es6$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tldts@6.0.16/node_modules/tldts/dist/es6/index.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const setupPlatformService = (initialParentURL)=>{
    let parentURL = new URL(initialParentURL);
    const messageHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$setupInsideIframe$2f$utils$2f$createMessageHandler$2f$createMessageHandler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createMessageHandler"])(initialParentURL.origin);
    const messageSender = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$setupInsideIframe$2f$utils$2f$createMessageSender$2f$createMessageSender$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createMessageSender"])(initialParentURL.origin);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$PlatformService$2f$PlatformService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlatformService"].implementation = {
        downloadFile: (fileName, file)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, void 0, void 0, function*() {
                const element = document.createElement('a');
                element.href = URL.createObjectURL(file);
                element.download = fileName;
                document.body.appendChild(element);
                element.click();
                document.body.removeChild(element);
                URL.revokeObjectURL(element.href);
            }),
        getDisplayOrigin: ()=>parentURL.origin,
        getHost: ()=>parentURL.host,
        getHostname: ()=>parentURL.hostname,
        getOrigin: ()=>parentURL.origin,
        getTLD: ()=>parentURL.hostname,
        getUrl: ()=>parentURL,
        isNativeMobile: false,
        isWaasSecureStorageSupported: false,
        openURL: (url_1, ...args_1)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, [
                url_1,
                ...args_1
            ], void 0, function*(url, target = 'self', features = '') {
                return messageSender('OPEN_URL', {
                    features,
                    target,
                    url
                });
            })
    };
    messageHandler('UPDATE_PARENT_URL', ({ url })=>{
        parentURL = new URL(url);
    });
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/setupInsideIframe/utils/setupSocialService/setupSocialService.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "setupSocialService": (()=>setupSocialService)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/_virtual/_tslib.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$ProviderEnum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-api-core@0.0.909/node_modules/@dynamic-labs/sdk-api-core/src/models/ProviderEnum.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$Oauth2Service$2f$Oauth2Service$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/Oauth2Service/Oauth2Service.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$types$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$types$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+types@4.73.2/node_modules/@dynamic-labs/types/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$logger$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/logger/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$PlatformService$2f$PlatformService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/PlatformService/PlatformService.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tldts$40$6$2e$0$2e$16$2f$node_modules$2f$tldts$2f$dist$2f$es6$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tldts@6.0.16/node_modules/tldts/dist/es6/index.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const setupSocialService = ()=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$Oauth2Service$2f$Oauth2Service$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Oauth2Service"].implementation = {
        getOauthCode: (_a)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, [
                _a
            ], void 0, function*({ setIsProcessing, strategy, provider, oauthLoginUrl, initWebAuth, redirectUrl }) {
                return new Promise((_, reject)=>{
                    setIsProcessing(true);
                    /**
                 * Use redirect flow on mobile for all providers except Telegram
                 */ if (strategy === 'redirect' && provider !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$api$2d$core$40$0$2e$0$2e$909$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$models$2f$ProviderEnum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProviderEnum"].Telegram) {
                        if (!redirectUrl) {
                            throw new Error('Redirect URL is required');
                        }
                        initWebAuth({
                            redirectUrl
                        }).then(()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$PlatformService$2f$PlatformService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlatformService"].openURL(oauthLoginUrl.toString()));
                        return;
                    }
                    reject(new Error('Unsupported social provider'));
                });
            })
    };
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/setupInsideIframe/setupInsideIframe.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "setupInsideIframe": (()=>setupInsideIframe)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$setupInsideIframe$2f$utils$2f$getInitialParentURL$2f$getInitialParentURL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/setupInsideIframe/utils/getInitialParentURL/getInitialParentURL.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$setupInsideIframe$2f$utils$2f$setupPlatformEventsService$2f$setupPlatformEventsService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/setupInsideIframe/utils/setupPlatformEventsService/setupPlatformEventsService.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$setupInsideIframe$2f$utils$2f$setupPlatformService$2f$setupPlatformService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/setupInsideIframe/utils/setupPlatformService/setupPlatformService.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$setupInsideIframe$2f$utils$2f$setupSocialService$2f$setupSocialService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/setupInsideIframe/utils/setupSocialService/setupSocialService.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const setupInsideIframe = ()=>{
    if (typeof window === 'undefined') return;
    // Get the initial parent URL
    const initialParentURL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$setupInsideIframe$2f$utils$2f$getInitialParentURL$2f$getInitialParentURL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInitialParentURL"])();
    // Setup services
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$setupInsideIframe$2f$utils$2f$setupPlatformService$2f$setupPlatformService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupPlatformService"])(initialParentURL);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$setupInsideIframe$2f$utils$2f$setupPlatformEventsService$2f$setupPlatformEventsService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupPlatformEventsService"])(initialParentURL);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$setupInsideIframe$2f$utils$2f$setupSocialService$2f$setupSocialService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupSocialService"])();
};
;
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$assert$2d$package$2d$version$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$assert$2d$package$2d$version$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+assert-package-version@4.73.2/node_modules/@dynamic-labs/assert-package-version/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$assert$2d$package$2d$version$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$assert$2d$package$2d$version$2f$src$2f$lib$2f$assertPackageVersion$2f$assertPackageVersion$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+assert-package-version@4.73.2/node_modules/@dynamic-labs/assert-package-version/src/lib/assertPackageVersion/assertPackageVersion.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/package.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$bufferToBase64$2f$bufferToBase64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/bufferToBase64/bufferToBase64.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$CancellablePromise$2f$CancellablePromise$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/CancellablePromise/CancellablePromise.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$ceil$2f$ceil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/ceil/ceil.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$DeferredPromise$2f$DeferredPromise$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/DeferredPromise/DeferredPromise.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$eip6963$2f$eip6963Provider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/eip6963/eip6963Provider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$AccessBlockedError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/AccessBlockedError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$AccountExistsError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/AccountExistsError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$ChainalysisError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/ChainalysisError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$CookieInvalidError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/CookieInvalidError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$CustomError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/CustomError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$CustomFieldNotUniqueError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/CustomFieldNotUniqueError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DecryptionError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/DecryptionError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/DynamicError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$EmailAlreadyExistsError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/EmailAlreadyExistsError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$EmailProviderError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/EmailProviderError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$EmailVerificationError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/EmailVerificationError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$EmbeddedWalletException$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/EmbeddedWalletException.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$errorCodes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/errorCodes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$EmbeddedWalletExistsError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/EmbeddedWalletExistsError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$ErrorCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/ErrorCode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$ExternalAuthError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/ExternalAuthError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$GateBlockedError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/GateBlockedError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$GetAddressCancelledError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/GetAddressCancelledError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$InsufficientFundsError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/InsufficientFundsError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$InvalidEmbeddedWalletSessionKeyError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/InvalidEmbeddedWalletSessionKeyError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$InvalidPhoneNumberError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/InvalidPhoneNumberError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$InvalidPrimaryWalletOrConnectorError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/InvalidPrimaryWalletOrConnectorError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$MergeAccountsConfirmationError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/MergeAccountsConfirmationError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$MetaMaskError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/MetaMaskError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$MissingEnvironmentIdError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/MissingEnvironmentIdError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$MissingPublicAddressError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/MissingPublicAddressError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$NoAccessError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/NoAccessError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$NotSupportedError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/NotSupportedError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$RateLimitError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/RateLimitError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$RequestChannelNotHandledError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/RequestChannelNotHandledError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$ResponseError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/ResponseError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$SandboxMaximumThresholdReachedError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/SandboxMaximumThresholdReachedError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$SeiNotEnabledInKeplrWalletError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/SeiNotEnabledInKeplrWalletError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$SmsVerificationError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/SmsVerificationError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$SocialAccountAlreadyExistsError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/SocialAccountAlreadyExistsError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$TooManyEmailVerificationsError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/TooManyEmailVerificationsError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$TransactionGasCannotBeSponsoredError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/TransactionGasCannotBeSponsoredError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$UserHasAccountWithEmailError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/UserHasAccountWithEmailError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$UsernameAlreadyExistsError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/UsernameAlreadyExistsError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$UserRejectedRequestError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/UserRejectedRequestError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$UserRejectedTransactionError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/UserRejectedTransactionError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$VerificationDataCollectionError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/VerificationDataCollectionError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$WalletAddressMismatchError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/WalletAddressMismatchError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$WalletNotDeployedError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/WalletNotDeployedError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$WalletUsedError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/WalletUsedError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$eventTimeline$2f$eventTimeline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/eventTimeline/eventTimeline.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$formatNumberText$2f$formatNumberText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/formatNumberText/formatNumberText.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$getProvidersFromWindow$2f$getProvidersFromWindow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/getProvidersFromWindow/getProvidersFromWindow.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$getTLD$2f$getTLD$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/getTLD/getTLD.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$handleMobileWalletRedirect$2f$handleMobileWalletRedirect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/handleMobileWalletRedirect/handleMobileWalletRedirect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$isFunction$2f$isFunction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/isFunction/isFunction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$isLedgerAddressViaVerifiedCredentials$2f$isLedgerAddressViaVerifiedCredentials$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/isLedgerAddressViaVerifiedCredentials/isLedgerAddressViaVerifiedCredentials.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$isMobile$2f$isMobile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/isMobile/isMobile.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$isString$2f$isString$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/isString/isString.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$last$2f$last$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/last/last.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$localStorageAsync$2f$localStorageAsync$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/localStorageAsync/localStorageAsync.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$parseChainId$2f$parseChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/parseChainId/parseChainId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$parseIntSafe$2f$parseIntSafe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/parseIntSafe/parseIntSafe.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$parseNetworks$2f$parseNetworks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/parseNetworks/parseNetworks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$pipe$2f$pipe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/pipe/pipe.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$retryableFn$2f$retryableFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/retryableFn/retryableFn.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$sanitizeName$2f$sanitizeName$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/sanitizeName/sanitizeName.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$sleep$2f$sleep$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/sleep/sleep.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$trimEnd$2f$trimEnd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/trimEnd/trimEnd.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$uniq$2f$uniq$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/uniq/uniq.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$wrapMethodWithCallback$2f$wrapMethodWithCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/wrapMethodWithCallback/wrapMethodWithCallback.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$encryption$2f$createKeyPair$2f$createKeyPair$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/encryption/createKeyPair/createKeyPair.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$encryption$2f$deriveSharedSecret$2f$deriveSharedSecret$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/encryption/deriveSharedSecret/deriveSharedSecret.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$encryption$2f$convertPublicKeyCryptoKeyToHex$2f$convertPublicKeyCryptoKeyToHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/encryption/convertPublicKeyCryptoKeyToHex/convertPublicKeyCryptoKeyToHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$encryption$2f$convertPublicKeyHexToCryptoKey$2f$convertPublicKeyHexToCryptoKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/encryption/convertPublicKeyHexToCryptoKey/convertPublicKeyHexToCryptoKey.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$encryption$2f$decryptMessage$2f$decryptMessage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/encryption/decryptMessage/decryptMessage.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$encryption$2f$encryptMessage$2f$encryptMessage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/encryption/encryptMessage/encryptMessage.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$encryption$2f$generateHMAC$2f$generateHMAC$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/encryption/generateHMAC/generateHMAC.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$encryption$2f$isEncryptedMessage$2f$isEncryptedMessage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/encryption/isEncryptedMessage/isEncryptedMessage.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$encryption$2f$cryptoAvailability$2f$cryptoAvailability$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/encryption/cryptoAvailability/cryptoAvailability.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$uint8ArrayToBase64$2f$uint8ArrayToBase64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/uint8ArrayToBase64/uint8ArrayToBase64.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$assertDefined$2f$assertDefined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/assertDefined/assertDefined.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$filterDuplicates$2f$filterDuplicates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/filterDuplicates/filterDuplicates.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$walletReturnRoute$2f$walletReturnRoute$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/walletReturnRoute/walletReturnRoute.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$cloneObjectWithOverrides$2f$cloneObjectWithOverrides$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/cloneObjectWithOverrides/cloneObjectWithOverrides.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$get$2f$get$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/get/get.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$hexToString$2f$hexToString$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/hexToString/hexToString.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$isHex$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/isHex/isHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$isInIframe$2f$isInIframe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/isInIframe/isInIframe.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$promiseWithTimeout$2f$promiseWithTimeout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/promiseWithTimeout/promiseWithTimeout.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$runSafe$2f$runSafe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/runSafe/runSafe.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$template$2f$template$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/template/template.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$tracing$2f$tracing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/tracing/tracing.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$consts$2f$phantomRedirect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/consts/phantomRedirect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$PlatformService$2f$PlatformService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/PlatformService/PlatformService.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$PlatformService$2f$createBrowserPlatformService$2f$createBrowserPlatformService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/PlatformService/createBrowserPlatformService/createBrowserPlatformService.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$PlatformEventsService$2f$PlatformEventsService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/PlatformEventsService/PlatformEventsService.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$FetchService$2f$FetchService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/FetchService/FetchService.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$Oauth2Service$2f$Oauth2Service$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/Oauth2Service/Oauth2Service.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$Oauth2Service$2f$createWindowOauth2Service$2f$createWindowOauth2Service$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/Oauth2Service/createWindowOauth2Service/createWindowOauth2Service.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$StorageService$2f$StorageService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/StorageService/StorageService.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$StorageService$2f$createStorageService$2f$createStorageService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/StorageService/createStorageService/createStorageService.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$StorageService$2f$storageEvents$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/StorageService/storageEvents.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$StorageService$2f$applyPostfixToStorageService$2f$applyPostfixToStorageService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/StorageService/applyPostfixToStorageService/applyPostfixToStorageService.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$Oauth2Service$2f$utils$2f$connectWithAppleId$2f$connectWithAppleId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/Oauth2Service/utils/connectWithAppleId/connectWithAppleId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$solToLamports$2f$solToLamports$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/solToLamports/solToLamports.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$env$2f$getEnvVarWithFallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/env/getEnvVarWithFallback.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$setupInsideIframe$2f$setupInsideIframe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/setupInsideIframe/setupInsideIframe.js [app-ssr] (ecmascript)");
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
;
;
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$assert$2d$package$2d$version$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$assert$2d$package$2d$version$2f$src$2f$lib$2f$assertPackageVersion$2f$assertPackageVersion$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertPackageVersion"])('@dynamic-labs/utils', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"]);
}}),
"[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/index.js [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$assert$2d$package$2d$version$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$assert$2d$package$2d$version$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+assert-package-version@4.73.2/node_modules/@dynamic-labs/assert-package-version/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/package.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$bufferToBase64$2f$bufferToBase64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/bufferToBase64/bufferToBase64.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$CancellablePromise$2f$CancellablePromise$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/CancellablePromise/CancellablePromise.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$ceil$2f$ceil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/ceil/ceil.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$DeferredPromise$2f$DeferredPromise$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/DeferredPromise/DeferredPromise.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$eip6963$2f$eip6963Provider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/eip6963/eip6963Provider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$AccessBlockedError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/AccessBlockedError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$AccountExistsError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/AccountExistsError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$ChainalysisError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/ChainalysisError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$CookieInvalidError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/CookieInvalidError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$CustomError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/CustomError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$CustomFieldNotUniqueError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/CustomFieldNotUniqueError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DecryptionError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/DecryptionError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$DynamicError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/DynamicError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$EmailAlreadyExistsError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/EmailAlreadyExistsError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$EmailProviderError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/EmailProviderError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$EmailVerificationError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/EmailVerificationError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$EmbeddedWalletException$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/EmbeddedWalletException.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$errorCodes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/errorCodes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$EmbeddedWalletExistsError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/EmbeddedWalletExistsError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$ErrorCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/ErrorCode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$ExternalAuthError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/ExternalAuthError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$GateBlockedError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/GateBlockedError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$GetAddressCancelledError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/GetAddressCancelledError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$InsufficientFundsError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/InsufficientFundsError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$InvalidEmbeddedWalletSessionKeyError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/InvalidEmbeddedWalletSessionKeyError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$InvalidPhoneNumberError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/InvalidPhoneNumberError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$InvalidPrimaryWalletOrConnectorError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/InvalidPrimaryWalletOrConnectorError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$MergeAccountsConfirmationError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/MergeAccountsConfirmationError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$MetaMaskError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/MetaMaskError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$MissingEnvironmentIdError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/MissingEnvironmentIdError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$MissingPublicAddressError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/MissingPublicAddressError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$NoAccessError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/NoAccessError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$NotSupportedError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/NotSupportedError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$RateLimitError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/RateLimitError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$RequestChannelNotHandledError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/RequestChannelNotHandledError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$ResponseError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/ResponseError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$SandboxMaximumThresholdReachedError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/SandboxMaximumThresholdReachedError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$SeiNotEnabledInKeplrWalletError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/SeiNotEnabledInKeplrWalletError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$SmsVerificationError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/SmsVerificationError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$SocialAccountAlreadyExistsError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/SocialAccountAlreadyExistsError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$TooManyEmailVerificationsError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/TooManyEmailVerificationsError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$TransactionGasCannotBeSponsoredError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/TransactionGasCannotBeSponsoredError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$UserHasAccountWithEmailError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/UserHasAccountWithEmailError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$UsernameAlreadyExistsError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/UsernameAlreadyExistsError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$UserRejectedRequestError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/UserRejectedRequestError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$UserRejectedTransactionError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/UserRejectedTransactionError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$VerificationDataCollectionError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/VerificationDataCollectionError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$WalletAddressMismatchError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/WalletAddressMismatchError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$WalletNotDeployedError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/WalletNotDeployedError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$errors$2f$WalletUsedError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/errors/WalletUsedError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$eventTimeline$2f$eventTimeline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/eventTimeline/eventTimeline.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$formatNumberText$2f$formatNumberText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/formatNumberText/formatNumberText.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$getProvidersFromWindow$2f$getProvidersFromWindow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/getProvidersFromWindow/getProvidersFromWindow.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$getTLD$2f$getTLD$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/getTLD/getTLD.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$handleMobileWalletRedirect$2f$handleMobileWalletRedirect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/handleMobileWalletRedirect/handleMobileWalletRedirect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$isFunction$2f$isFunction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/isFunction/isFunction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$isLedgerAddressViaVerifiedCredentials$2f$isLedgerAddressViaVerifiedCredentials$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/isLedgerAddressViaVerifiedCredentials/isLedgerAddressViaVerifiedCredentials.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$isMobile$2f$isMobile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/isMobile/isMobile.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$isString$2f$isString$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/isString/isString.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$last$2f$last$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/last/last.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$localStorageAsync$2f$localStorageAsync$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/localStorageAsync/localStorageAsync.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$parseChainId$2f$parseChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/parseChainId/parseChainId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$parseIntSafe$2f$parseIntSafe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/parseIntSafe/parseIntSafe.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$parseNetworks$2f$parseNetworks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/parseNetworks/parseNetworks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$pipe$2f$pipe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/pipe/pipe.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$retryableFn$2f$retryableFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/retryableFn/retryableFn.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$sanitizeName$2f$sanitizeName$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/sanitizeName/sanitizeName.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$sleep$2f$sleep$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/sleep/sleep.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$trimEnd$2f$trimEnd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/trimEnd/trimEnd.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$uniq$2f$uniq$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/uniq/uniq.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$wrapMethodWithCallback$2f$wrapMethodWithCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/wrapMethodWithCallback/wrapMethodWithCallback.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$encryption$2f$createKeyPair$2f$createKeyPair$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/encryption/createKeyPair/createKeyPair.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$encryption$2f$deriveSharedSecret$2f$deriveSharedSecret$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/encryption/deriveSharedSecret/deriveSharedSecret.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$encryption$2f$convertPublicKeyCryptoKeyToHex$2f$convertPublicKeyCryptoKeyToHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/encryption/convertPublicKeyCryptoKeyToHex/convertPublicKeyCryptoKeyToHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$encryption$2f$convertPublicKeyHexToCryptoKey$2f$convertPublicKeyHexToCryptoKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/encryption/convertPublicKeyHexToCryptoKey/convertPublicKeyHexToCryptoKey.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$encryption$2f$decryptMessage$2f$decryptMessage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/encryption/decryptMessage/decryptMessage.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$encryption$2f$encryptMessage$2f$encryptMessage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/encryption/encryptMessage/encryptMessage.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$encryption$2f$generateHMAC$2f$generateHMAC$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/encryption/generateHMAC/generateHMAC.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$encryption$2f$isEncryptedMessage$2f$isEncryptedMessage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/encryption/isEncryptedMessage/isEncryptedMessage.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$encryption$2f$cryptoAvailability$2f$cryptoAvailability$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/encryption/cryptoAvailability/cryptoAvailability.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$uint8ArrayToBase64$2f$uint8ArrayToBase64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/uint8ArrayToBase64/uint8ArrayToBase64.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$assertDefined$2f$assertDefined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/assertDefined/assertDefined.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$filterDuplicates$2f$filterDuplicates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/filterDuplicates/filterDuplicates.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$walletReturnRoute$2f$walletReturnRoute$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/walletReturnRoute/walletReturnRoute.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$cloneObjectWithOverrides$2f$cloneObjectWithOverrides$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/cloneObjectWithOverrides/cloneObjectWithOverrides.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$get$2f$get$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/get/get.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$hexToString$2f$hexToString$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/hexToString/hexToString.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$isHex$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/isHex/isHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$isInIframe$2f$isInIframe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/isInIframe/isInIframe.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$promiseWithTimeout$2f$promiseWithTimeout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/promiseWithTimeout/promiseWithTimeout.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$runSafe$2f$runSafe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/runSafe/runSafe.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$template$2f$template$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/template/template.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$tracing$2f$tracing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/tracing/tracing.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$consts$2f$phantomRedirect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/consts/phantomRedirect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$PlatformService$2f$PlatformService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/PlatformService/PlatformService.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$PlatformService$2f$createBrowserPlatformService$2f$createBrowserPlatformService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/PlatformService/createBrowserPlatformService/createBrowserPlatformService.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$PlatformEventsService$2f$PlatformEventsService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/PlatformEventsService/PlatformEventsService.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$FetchService$2f$FetchService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/FetchService/FetchService.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$Oauth2Service$2f$Oauth2Service$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/Oauth2Service/Oauth2Service.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$Oauth2Service$2f$createWindowOauth2Service$2f$createWindowOauth2Service$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/Oauth2Service/createWindowOauth2Service/createWindowOauth2Service.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$StorageService$2f$StorageService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/StorageService/StorageService.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$StorageService$2f$createStorageService$2f$createStorageService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/StorageService/createStorageService/createStorageService.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$StorageService$2f$storageEvents$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/StorageService/storageEvents.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$StorageService$2f$applyPostfixToStorageService$2f$applyPostfixToStorageService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/StorageService/applyPostfixToStorageService/applyPostfixToStorageService.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$services$2f$Oauth2Service$2f$utils$2f$connectWithAppleId$2f$connectWithAppleId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/services/Oauth2Service/utils/connectWithAppleId/connectWithAppleId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$solToLamports$2f$solToLamports$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/solToLamports/solToLamports.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$env$2f$getEnvVarWithFallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/env/getEnvVarWithFallback.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$setupInsideIframe$2f$setupInsideIframe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/setupInsideIframe/setupInsideIframe.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$utils$40$4$2e$73$2e$2$2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+utils@4.73.2/node_modules/@dynamic-labs/utils/src/index.js [app-ssr] (ecmascript) <locals>");
}}),

};

//# sourceMappingURL=121ac_%40dynamic-labs_utils_6fcc716c._.js.map