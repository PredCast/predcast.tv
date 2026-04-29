module.exports = {

"[project]/node_modules/.pnpm/@turnkey+api-key-stamper@0.4.7/node_modules/@turnkey/api-key-stamper/dist/purejs.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "signWithApiKey": (()=>signWithApiKey)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$curves$40$1$2e$9$2e$7$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$p256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@noble+curves@1.9.7/node_modules/@noble/curves/esm/p256.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sha256$2d$uint8array$40$0$2e$10$2e$7$2f$node_modules$2f$sha256$2d$uint8array$2f$dist$2f$sha256$2d$uint8array$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/sha256-uint8array@0.10.7/node_modules/sha256-uint8array/dist/sha256-uint8array.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$turnkey$2b$encoding$40$0$2e$5$2e$0$2f$node_modules$2f40$turnkey$2f$encoding$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@turnkey+encoding@0.5.0/node_modules/@turnkey/encoding/dist/index.mjs [app-ssr] (ecmascript)");
;
;
;
const signWithApiKey = async (input)=>{
    const publicKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$curves$40$1$2e$9$2e$7$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$p256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["p256"].getPublicKey(input.privateKey, true);
    // Public key in the usual 02 or 03 + 64 hex digits
    const publicKeyString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$turnkey$2b$encoding$40$0$2e$5$2e$0$2f$node_modules$2f40$turnkey$2f$encoding$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uint8ArrayToHexString"])(publicKey);
    if (publicKeyString != input.publicKey) {
        throw new Error(`Bad API key. Expected to get public key ${input.publicKey}, got ${publicKeyString}`);
    }
    const hash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sha256$2d$uint8array$40$0$2e$10$2e$7$2f$node_modules$2f$sha256$2d$uint8array$2f$dist$2f$sha256$2d$uint8array$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createHash"])().update(input.content).digest();
    const signature = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$curves$40$1$2e$9$2e$7$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$p256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["p256"].sign(hash, input.privateKey);
    return signature.toDERHex();
};
;
 //# sourceMappingURL=purejs.mjs.map
}}),

};

//# sourceMappingURL=2398d_%40turnkey_api-key-stamper_dist_purejs_mjs_394666a1._.js.map