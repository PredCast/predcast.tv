module.exports = {

"[project]/node_modules/.pnpm/@turnkey+api-key-stamper@0.4.7/node_modules/@turnkey/api-key-stamper/dist/utils.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "convertTurnkeyApiKeyToJwk": (()=>convertTurnkeyApiKeyToJwk)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$turnkey$2b$api$2d$key$2d$stamper$40$0$2e$4$2e$7$2f$node_modules$2f40$turnkey$2f$api$2d$key$2d$stamper$2f$dist$2f$tink$2f$elliptic_curves$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@turnkey+api-key-stamper@0.4.7/node_modules/@turnkey/api-key-stamper/dist/tink/elliptic_curves.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$turnkey$2b$encoding$40$0$2e$5$2e$0$2f$node_modules$2f40$turnkey$2f$encoding$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@turnkey+encoding@0.5.0/node_modules/@turnkey/encoding/dist/index.mjs [app-ssr] (ecmascript)");
;
;
/**
 * Converts a Turnkey API key pair into a JSON Web Key (JWK) format.
 * This function accepts P-256 API keys only.
 *
 * @param {Object} input - The Turnkey API key components.
 * @param {string} input.uncompressedPrivateKeyHex - Hexadecimal-encoded uncompressed private key (32-byte scalar).
 * @param {string} input.compressedPublicKeyHex - Hexadecimal-encoded compressed public key (33 bytes).
 * @returns {JsonWebKey} A JSON Web Key object representing the EC P-256 key.
 */ function convertTurnkeyApiKeyToJwk(input) {
    const { uncompressedPrivateKeyHex, compressedPublicKeyHex } = input;
    let jwk;
    try {
        jwk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$turnkey$2b$api$2d$key$2d$stamper$40$0$2e$4$2e$7$2f$node_modules$2f40$turnkey$2f$api$2d$key$2d$stamper$2f$dist$2f$tink$2f$elliptic_curves$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pointDecode"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$turnkey$2b$encoding$40$0$2e$5$2e$0$2f$node_modules$2f40$turnkey$2f$encoding$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uint8ArrayFromHexString"])(compressedPublicKeyHex));
    } catch (e) {
        throw new Error(`unable to load API key: invalid public key. Did you switch your public and private key by accident? Is your public key a valid, compressed P-256 public key?`);
    }
    // Ensure that d is sufficiently padded
    jwk.d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$turnkey$2b$encoding$40$0$2e$5$2e$0$2f$node_modules$2f40$turnkey$2f$encoding$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexStringToBase64url"])(uncompressedPrivateKeyHex, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$turnkey$2b$encoding$40$0$2e$5$2e$0$2f$node_modules$2f40$turnkey$2f$encoding$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_JWK_MEMBER_BYTE_LENGTH"]);
    return jwk;
}
;
 //# sourceMappingURL=utils.mjs.map
}}),
"[project]/node_modules/.pnpm/@turnkey+api-key-stamper@0.4.7/node_modules/@turnkey/api-key-stamper/dist/nodecrypto.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "signWithApiKey": (()=>signWithApiKey)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$turnkey$2b$api$2d$key$2d$stamper$40$0$2e$4$2e$7$2f$node_modules$2f40$turnkey$2f$api$2d$key$2d$stamper$2f$dist$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@turnkey+api-key-stamper@0.4.7/node_modules/@turnkey/api-key-stamper/dist/utils.mjs [app-ssr] (ecmascript)");
;
;
const signWithApiKey = async (input)=>{
    const { content, publicKey, privateKey } = input;
    const privateKeyObject = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["createPrivateKey"])({
        // @ts-expect-error -- the key can be a JWK object since Node v15.12.0
        // https://nodejs.org/api/crypto.html#cryptocreateprivatekeykey
        key: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$turnkey$2b$api$2d$key$2d$stamper$40$0$2e$4$2e$7$2f$node_modules$2f40$turnkey$2f$api$2d$key$2d$stamper$2f$dist$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertTurnkeyApiKeyToJwk"])({
            uncompressedPrivateKeyHex: privateKey,
            compressedPublicKeyHex: publicKey
        }),
        format: "jwk"
    });
    const sign = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["createSign"])("SHA256");
    sign.write(Buffer.from(content));
    sign.end();
    return sign.sign(privateKeyObject, "hex");
};
;
 //# sourceMappingURL=nodecrypto.mjs.map
}}),

};

//# sourceMappingURL=2398d_%40turnkey_api-key-stamper_dist_c4dfd4e2._.js.map