module.exports = {

"[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/bytes.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "bigIntToChunkedBytes": (()=>bigIntToChunkedBytes),
    "bytesToBigDecimal": (()=>bytesToBigDecimal),
    "computeIntChunkLength": (()=>computeIntChunkLength),
    "derToBytes": (()=>derToBytes),
    "hexStringToSignedIntArray": (()=>hexStringToSignedIntArray),
    "hexToBin": (()=>hexToBin),
    "hexToDecimal": (()=>hexToDecimal),
    "hexToSignedBytes": (()=>hexToSignedBytes),
    "num2Bits": (()=>num2Bits),
    "packBytes": (()=>packBytes),
    "packBytesArray": (()=>packBytesArray),
    "splitToWords": (()=>splitToWords),
    "toBinaryString": (()=>toBinaryString),
    "toSigned": (()=>toSigned),
    "toUnsigned": (()=>toUnsigned),
    "toUnsignedByte": (()=>toUnsignedByte)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/constants/constants.js [app-ssr] (ecmascript)");
;
function packBytes(unpacked) {
    const bytesCount = [
        31,
        31,
        31
    ];
    let packed = [
        0n,
        0n,
        0n
    ];
    let byteIndex = 0;
    for(let i = 0; i < bytesCount.length; i++){
        for(let j = 0; j < bytesCount[i]; j++){
            if (byteIndex < unpacked.length) {
                packed[i] |= BigInt(unpacked[byteIndex]) << BigInt(j) * 8n;
            }
            byteIndex++;
        }
    }
    return packed;
}
function computeIntChunkLength(byteLength) {
    const packSize = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MAX_BYTES_IN_FIELD"];
    const remain = byteLength % packSize;
    let numChunks = (byteLength - remain) / packSize;
    if (remain > 0) {
        numChunks += 1;
    }
    return numChunks;
}
function packBytesArray(unpacked) {
    const packSize = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MAX_BYTES_IN_FIELD"];
    const maxBytes = unpacked.length;
    const maxInts = computeIntChunkLength(maxBytes);
    const out = new Array(maxInts).fill(0n);
    for(let i = 0; i < maxInts; i++){
        let sum = 0n;
        for(let j = 0; j < packSize; j++){
            const idx = packSize * i + j;
            // Copy previous value if out of bounds
            if (idx >= maxBytes) {
                continue;
            } else if (j === 0) {
                sum = BigInt(unpacked[idx]);
            } else {
                sum += (1n << BigInt(8 * j)) * BigInt(unpacked[idx]);
            }
        }
        out[i] = sum;
    }
    return out;
}
function toUnsigned(byte) {
    return byte & 0xff;
}
function toSigned(byte) {
    return byte > 127 ? byte - 256 : byte;
}
const toBinaryString = (byte)=>{
    const binary = (parseInt(byte, 10) & 0xff).toString(2).padStart(8, '0');
    return binary;
};
function splitToWords(number, wordsize, numberElement) {
    let t = number;
    const words = [];
    for(let i = 0; i < numberElement; ++i){
        const baseTwo = BigInt(2);
        words.push(`${t % BigInt(Math.pow(Number(baseTwo), wordsize))}`);
        t = BigInt(t / BigInt(Math.pow(Number(BigInt(2)), wordsize)));
    }
    if (!(t == BigInt(0))) {
        throw `Number ${number} does not fit in ${(wordsize * numberElement).toString()} bits`;
    }
    return words;
}
function bytesToBigDecimal(arr) {
    let result = BigInt(0);
    for(let i = 0; i < arr.length; i++){
        result = result * BigInt(256) + BigInt(arr[i] & 0xff);
    }
    return result.toString();
}
function hexToDecimal(hex) {
    return BigInt(`0x${hex}`).toString();
}
function hexToSignedBytes(hexString) {
    let bytes = [];
    for(let i = 0; i < hexString.length - 1; i += 2){
        let byte = parseInt(hexString.substr(i, 2), 16);
        bytes.push(byte >= 128 ? byte - 256 : byte);
    }
    return bytes;
}
function toUnsignedByte(signedByte) {
    return signedByte < 0 ? signedByte + 256 : signedByte;
}
function bigIntToChunkedBytes(num, bytesPerChunk, numChunks) {
    const res = [];
    const bigintNum = typeof num == 'bigint' ? num : num.valueOf();
    const msk = (1n << BigInt(bytesPerChunk)) - 1n;
    for(let i = 0; i < numChunks; ++i){
        res.push((bigintNum >> BigInt(i * bytesPerChunk) & msk).toString());
    }
    return res;
}
function hexStringToSignedIntArray(hexString) {
    let result = [];
    for(let i = 0; i < hexString.length; i += 2){
        let byte = parseInt(hexString.substr(i, 2), 16);
        result.push(byte > 127 ? byte - 256 : byte);
    }
    return result;
}
function hexToBin(n) {
    let bin = Number(`0x${n[0]}`).toString(2);
    for(let i = 1; i < n.length; i += 1){
        bin += Number(`0x${n[i]}`).toString(2).padStart(4, '0');
    }
    return bin;
}
function num2Bits(n, inValue) {
    const out = new Array(n).fill(BigInt(0));
    let lc1 = BigInt(0);
    let e2 = BigInt(1);
    for(let i = 0; i < n; i++){
        out[i] = inValue >> BigInt(i) & BigInt(1);
        if (out[i] !== BigInt(0) && out[i] !== BigInt(1)) {
            throw new Error('Bit value is not binary.');
        }
        lc1 += out[i] * e2;
        e2 = e2 << BigInt(1);
    }
    if (lc1 !== inValue) {
        throw new Error('Reconstructed value does not match the input.');
    }
    return out;
}
function derToBytes(derValue) {
    const bytes = [];
    for(let i = 0; i < derValue.length; i++){
        bytes.push(derValue.charCodeAt(i));
    }
    return bytes;
}
}}),
"[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/hash.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "calculateUserIdentifierHash": (()=>calculateUserIdentifierHash),
    "customHasher": (()=>customHasher),
    "flexiblePoseidon": (()=>flexiblePoseidon),
    "getHashLen": (()=>getHashLen),
    "getSolidityPackedUserContextData": (()=>getSolidityPackedUserContextData),
    "hash": (()=>hash),
    "packBytesAndPoseidon": (()=>packBytesAndPoseidon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$poseidon$2d$lite$40$0$2e$2$2e$1$2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/poseidon-lite@0.2.1/node_modules/poseidon-lite/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$js$2d$sha256$40$0$2e$11$2e$1$2f$node_modules$2f$js$2d$sha256$2f$src$2f$sha256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/js-sha256@0.11.1/node_modules/js-sha256/src/sha256.js [app-ssr] (ecmascript)");
// @ts-ignore - ESLint incorrectly flags this as needing default import, but TypeScript definitions use named export
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$js$2d$sha1$40$0$2e$7$2e$0$2f$node_modules$2f$js$2d$sha1$2f$src$2f$sha1$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/js-sha1@0.7.0/node_modules/js-sha1/src/sha1.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$js$2d$sha512$40$0$2e$9$2e$0$2f$node_modules$2f$js$2d$sha512$2f$src$2f$sha512$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/js-sha512@0.9.0/node_modules/js-sha512/src/sha512.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/bytes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$node$2d$forge$40$https$2b2b2b$codeload$2e$github$2e$com$2b$remicolin$2b$forge$2b$tar$2e$gz$2b$17a11a632dd0e50343b3b8393245a2696f78afbb$2f$node_modules$2f$node$2d$forge$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/node-forge@https+++codeload.github.com+remicolin+forge+tar.gz+17a11a632dd0e50343b3b8393245a2696f78afbb/node_modules/node-forge/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/ethers/lib.esm/ethers.js [app-ssr] (ecmascript) <export * as ethers>");
;
;
;
;
;
;
;
function flexiblePoseidon(inputs) {
    switch(inputs.length){
        case 1:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$poseidon$2d$lite$40$0$2e$2$2e$1$2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["poseidon1"])(inputs);
        case 2:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$poseidon$2d$lite$40$0$2e$2$2e$1$2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["poseidon2"])(inputs);
        case 3:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$poseidon$2d$lite$40$0$2e$2$2e$1$2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["poseidon3"])(inputs);
        case 4:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$poseidon$2d$lite$40$0$2e$2$2e$1$2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["poseidon4"])(inputs);
        case 5:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$poseidon$2d$lite$40$0$2e$2$2e$1$2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["poseidon5"])(inputs);
        case 6:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$poseidon$2d$lite$40$0$2e$2$2e$1$2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["poseidon6"])(inputs);
        case 7:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$poseidon$2d$lite$40$0$2e$2$2e$1$2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["poseidon7"])(inputs);
        case 8:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$poseidon$2d$lite$40$0$2e$2$2e$1$2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["poseidon8"])(inputs);
        case 9:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$poseidon$2d$lite$40$0$2e$2$2e$1$2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["poseidon9"])(inputs);
        case 10:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$poseidon$2d$lite$40$0$2e$2$2e$1$2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["poseidon10"])(inputs);
        case 11:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$poseidon$2d$lite$40$0$2e$2$2e$1$2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["poseidon11"])(inputs);
        case 12:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$poseidon$2d$lite$40$0$2e$2$2e$1$2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["poseidon12"])(inputs);
        case 13:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$poseidon$2d$lite$40$0$2e$2$2e$1$2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["poseidon13"])(inputs);
        case 14:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$poseidon$2d$lite$40$0$2e$2$2e$1$2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["poseidon14"])(inputs);
        case 15:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$poseidon$2d$lite$40$0$2e$2$2e$1$2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["poseidon15"])(inputs);
        case 16:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$poseidon$2d$lite$40$0$2e$2$2e$1$2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["poseidon16"])(inputs);
        default:
            throw new Error(`Unsupported number of inputs: ${inputs.length}`);
    }
}
function hash(hashFunction, bytesArray, format = 'bytes') {
    const unsignedBytesArray = bytesArray.map((byte)=>byte & 0xff);
    let hashResult;
    switch(hashFunction){
        case 'sha1':
            hashResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$js$2d$sha1$40$0$2e$7$2e$0$2f$node_modules$2f$js$2d$sha1$2f$src$2f$sha1$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sha1"])(unsignedBytesArray);
            break;
        case 'sha224':
            hashResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$js$2d$sha256$40$0$2e$11$2e$1$2f$node_modules$2f$js$2d$sha256$2f$src$2f$sha256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sha224"])(unsignedBytesArray);
            break;
        case 'sha256':
            hashResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$js$2d$sha256$40$0$2e$11$2e$1$2f$node_modules$2f$js$2d$sha256$2f$src$2f$sha256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sha256"])(unsignedBytesArray);
            break;
        case 'sha384':
            hashResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$js$2d$sha512$40$0$2e$9$2e$0$2f$node_modules$2f$js$2d$sha512$2f$src$2f$sha512$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sha384"])(unsignedBytesArray);
            break;
        case 'sha512':
            hashResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$js$2d$sha512$40$0$2e$9$2e$0$2f$node_modules$2f$js$2d$sha512$2f$src$2f$sha512$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sha512"])(unsignedBytesArray);
            break;
        default:
            console.log('\x1b[31m%s\x1b[0m', `${hashFunction} not found in hash`); // Log in red
            hashResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$js$2d$sha256$40$0$2e$11$2e$1$2f$node_modules$2f$js$2d$sha256$2f$src$2f$sha256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sha256"])(unsignedBytesArray); // Default to sha256
    }
    if (format === 'hex') {
        return hashResult;
    }
    if (format === 'bytes') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToSignedBytes"])(hashResult);
    }
    const actualForgeUtil = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$node$2d$forge$40$https$2b2b2b$codeload$2e$github$2e$com$2b$remicolin$2b$forge$2b$tar$2e$gz$2b$17a11a632dd0e50343b3b8393245a2696f78afbb$2f$node_modules$2f$node$2d$forge$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["util"] ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$node$2d$forge$40$https$2b2b2b$codeload$2e$github$2e$com$2b$remicolin$2b$forge$2b$tar$2e$gz$2b$17a11a632dd0e50343b3b8393245a2696f78afbb$2f$node_modules$2f$node$2d$forge$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["util"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$node$2d$forge$40$https$2b2b2b$codeload$2e$github$2e$com$2b$remicolin$2b$forge$2b$tar$2e$gz$2b$17a11a632dd0e50343b3b8393245a2696f78afbb$2f$node_modules$2f$node$2d$forge$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].util;
    if (format === 'binary') {
        return actualForgeUtil.binary.raw.encode(new Uint8Array((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToSignedBytes"])(hashResult)));
    }
    throw new Error(`Invalid format: ${format}`);
}
function getHashLen(hashFunction) {
    switch(hashFunction){
        case 'sha1':
            return 20;
        case 'sha224':
            return 28;
        case 'sha256':
            return 32;
        case 'sha384':
            return 48;
        case 'sha512':
            return 64;
        default:
            console.log(`${hashFunction} not found in getHashLen`);
            return 32;
    }
}
function customHasher(pubKeyFormatted) {
    if (pubKeyFormatted.length < 16) {
        // if k is less than 16, we can use a single poseidon hash
        return flexiblePoseidon(pubKeyFormatted.map(BigInt)).toString();
    } else {
        const rounds = Math.ceil(pubKeyFormatted.length / 16); // do up to 16 rounds of poseidon
        if (rounds > 16) {
            throw new Error('Number of rounds is greater than 16');
        }
        const hash = new Array(rounds);
        for(let i = 0; i < rounds; i++){
            hash[i] = {
                inputs: new Array(16).fill(BigInt(0))
            };
        }
        for(let i = 0; i < rounds; i++){
            for(let j = 0; j < 16; j++){
                if (i * 16 + j < pubKeyFormatted.length) {
                    hash[i].inputs[j] = BigInt(pubKeyFormatted[i * 16 + j]);
                }
            }
        }
        const finalHash = flexiblePoseidon(hash.map((h)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$poseidon$2d$lite$40$0$2e$2$2e$1$2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["poseidon16"])(h.inputs)));
        return finalHash.toString();
    }
}
function packBytesAndPoseidon(unpacked) {
    const packed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["packBytesArray"])(unpacked);
    return customHasher(packed.map(String)).toString();
}
function calculateUserIdentifierHash(destChainID, userID, userDefinedData) {
    const solidityPackedUserContextData = getSolidityPackedUserContextData(destChainID, userID, userDefinedData);
    const inputBytes = Buffer.from(solidityPackedUserContextData.slice(2), 'hex');
    const sha256Hash = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].sha256(inputBytes);
    const ripemdHash = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].ripemd160(sha256Hash);
    return BigInt(ripemdHash);
}
function getSolidityPackedUserContextData(destChainID, userID, userDefinedData) {
    const userIdHex = userID.replace(/-/g, '');
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].solidityPacked([
        'bytes32',
        'bytes32',
        'bytes'
    ], [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].zeroPadValue(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].toBeHex(destChainID), 32),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].zeroPadValue('0x' + userIdHex, 32),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].toUtf8Bytes(userDefinedData)
    ]);
}
}}),
"[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/scope.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "bigIntToString": (()=>bigIntToString),
    "formatEndpoint": (()=>formatEndpoint),
    "hashEndpointWithScope": (()=>hashEndpointWithScope),
    "stringToBigInt": (()=>stringToBigInt)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$poseidon$2d$lite$40$0$2e$2$2e$1$2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/poseidon-lite@0.2.1/node_modules/poseidon-lite/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/hash.js [app-ssr] (ecmascript)");
;
;
function formatEndpoint(endpoint) {
    if (!endpoint) return '';
    return endpoint.replace(/^https?:\/\//, '').split('/')[0];
}
function hashEndpointWithScope(endpoint, scope) {
    const formattedEndpoint = formatEndpoint(endpoint);
    const endpointChunks = [];
    let remaining = formattedEndpoint;
    while(remaining.length > 0){
        const chunk = remaining.slice(0, 31);
        endpointChunks.push(chunk);
        remaining = remaining.slice(31);
    }
    if (endpointChunks.length > 16) {
        throw new Error('Endpoint must be less than 496 characters');
    }
    const chunkedEndpointBigInts = endpointChunks.map(stringToBigInt);
    const endpointHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["flexiblePoseidon"])(chunkedEndpointBigInts);
    const scopeBigInt = stringToBigInt(scope);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$poseidon$2d$lite$40$0$2e$2$2e$1$2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["poseidon2"])([
        endpointHash,
        scopeBigInt
    ]).toString();
}
function stringToBigInt(str) {
    // Validate input contains only ASCII characters
    if (!/^[\x00-\x7F]*$/.test(str)) {
        throw new Error('Input must contain only ASCII characters (0-127)');
    }
    let result = 0n;
    for(let i = 0; i < str.length; i++){
        result = result << 8n | BigInt(str.charCodeAt(i));
    }
    // Check size limit
    const MAX_VALUE = (1n << 248n) - 1n;
    if (result > MAX_VALUE) {
        console.log(`str: ${str}, str.length: ${str.length}`);
        throw new Error('Resulting BigInt exceeds maximum size of 31 bytes');
    }
    return result;
}
function bigIntToString(bigInt) {
    if (bigInt === 0n) return '';
    let result = '';
    let tempBigInt = bigInt;
    while(tempBigInt > 0n){
        const charCode = Number(tempBigInt & 0xffn);
        result = String.fromCharCode(charCode) + result;
        tempBigInt = tempBigInt >> 8n;
    }
    return result;
}
}}),
"[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/circuits/uuid.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/// UUID
__turbopack_context__.s({
    "bigIntToHex": (()=>bigIntToHex),
    "castFromScope": (()=>castFromScope),
    "castFromUUID": (()=>castFromUUID),
    "castToAddress": (()=>castToAddress),
    "castToScope": (()=>castToScope),
    "castToUUID": (()=>castToUUID),
    "castToUserIdentifier": (()=>castToUserIdentifier),
    "hexToUUID": (()=>hexToUUID),
    "stringToAsciiBigIntArray": (()=>stringToAsciiBigIntArray),
    "validateUserId": (()=>validateUserId)
});
function hexToBigInt(hex) {
    return BigInt(`0x${hex}`);
}
function checkBigInt(bigInt) {
    const max253BitValue = BigInt(2n ** 253n - 1n);
    if (bigInt > max253BitValue) {
        throw new Error('Input should be < 2^253 - 1');
    }
}
function uuidToBigInt(uuid) {
    const hexString = uuid.replace(/-/g, '');
    const bigInt = hexToBigInt(hexString);
    return bigInt;
}
function castFromUUID(uuid) {
    const bigInt = uuidToBigInt(uuid);
    checkBigInt(bigInt);
    return bigInt.toString();
}
function bigIntToHex(bigInt) {
    return bigInt.toString(16).padStart(32, '0');
}
function hexToUUID(hex) {
    return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}
function castToUUID(bigInt) {
    const hex = bigIntToHex(bigInt);
    return hexToUUID(hex);
}
function castToUserIdentifier(bigInt, user_identifier_type) {
    switch(user_identifier_type){
        case 'hex':
            return castToAddress(bigInt);
        case 'uuid':
            return castToUUID(bigInt);
    }
}
function castToAddress(bigInt) {
    return `0x${bigInt.toString(16).padStart(40, '0')}`;
}
/// scope
function checkStringLength(str) {
    if (str.length > 25) {
        throw new Error('Input string must not exceed 25 characters');
    }
}
function stringToBigInt(str) {
    return BigInt('1' + Array.from(str).map((char)=>char.charCodeAt(0).toString().padStart(3, '0')).join(''));
}
function castFromScope(scope) {
    checkStringLength(scope);
    return stringToBigInt(scope).toString();
}
function castToScope(num) {
    const str = num.toString().slice(1); // Remove leading '1'
    const charCodes = str.match(/.{1,3}/g) || [];
    return String.fromCharCode(...charCodes.map((code)=>parseInt(code, 10)));
}
function stringToAsciiBigIntArray(str) {
    let asciiBigIntArray = [];
    for(let i = 0; i < str.length; i++){
        asciiBigIntArray.push(BigInt(str.charCodeAt(i)));
    }
    return asciiBigIntArray;
}
function validateUserId(userId, type) {
    switch(type){
        case 'hex':
            return /^[0-9A-Fa-f]+$/.test(userId);
        case 'uuid':
            return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(userId);
        default:
            return false;
    }
}
}}),
"[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/circuits/formatOutputs.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "formatAndUnpackForbiddenCountriesList": (()=>formatAndUnpackForbiddenCountriesList),
    "formatAndUnpackReveal": (()=>formatAndUnpackReveal),
    "formatForbiddenCountriesListFromCircuitOutput": (()=>formatForbiddenCountriesListFromCircuitOutput),
    "getAttributeFromUnpackedReveal": (()=>getAttributeFromUnpackedReveal),
    "getOlderThanFromCircuitOutput": (()=>getOlderThanFromCircuitOutput),
    "revealBitmapFromAttributes": (()=>revealBitmapFromAttributes),
    "revealBitmapFromMapping": (()=>revealBitmapFromMapping),
    "unpackReveal": (()=>unpackReveal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/constants/constants.js [app-ssr] (ecmascript)");
;
function formatForbiddenCountriesListFromCircuitOutput(forbiddenCountriesList) {
    const countryList1 = unpackReveal(forbiddenCountriesList, 'id');
    // dump every '\x00' value from the list
    const cleanedCountryList = countryList1.filter((value)=>value !== '\x00');
    // Concatenate every 3 elements to form country codes
    const formattedCountryList = [];
    for(let i = 0; i < cleanedCountryList.length; i += 3){
        const countryCode = cleanedCountryList.slice(i, i + 3).join('');
        if (countryCode.length === 3) {
            formattedCountryList.push(countryCode);
        }
    }
    return formattedCountryList;
}
/*** Disclose circuits ***/ function trimu0000(unpackedReveal) {
    return unpackedReveal.filter((value)=>value !== '\u0000');
}
function getAttributeFromUnpackedReveal(unpackedReveal, attribute, id_type) {
    const position = id_type === 'passport' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["attributeToPosition"][attribute] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["attributeToPosition_ID"][attribute];
    let attributeValue = '';
    for(let i = position[0]; i <= position[1]; i++){
        if (unpackedReveal[i] !== '\u0000') {
            attributeValue += unpackedReveal[i];
        }
    }
    return attributeValue;
}
function unpackReveal(revealedData_packed, id_type) {
    // If revealedData_packed is not an array, convert it to an array
    const packedArray = Array.isArray(revealedData_packed) ? revealedData_packed : [
        revealedData_packed
    ];
    const bytesCount = id_type === 'passport' ? [
        31,
        31,
        31
    ] : [
        31,
        31,
        31,
        31
    ]; // nb of bytes in each of the first three field elements
    const bytesArray = packedArray.flatMap((element, index)=>{
        const bytes = bytesCount[index] || 31; // Use 31 as default if index is out of range
        const elementBigInt = BigInt(element);
        const byteMask = BigInt(255); // 0xFF
        const bytesOfElement = [
            ...Array(bytes)
        ].map((_, byteIndex)=>{
            return elementBigInt >> BigInt(byteIndex) * BigInt(8) & byteMask;
        });
        return bytesOfElement;
    });
    return bytesArray.map((byte)=>String.fromCharCode(Number(byte)));
}
function getOlderThanFromCircuitOutput(olderThan) {
    const ageString = olderThan.map((code)=>String.fromCharCode(parseInt(code))).join('');
    const age = parseInt(ageString, 10);
    return isNaN(age) ? 0 : age;
}
function formatAndUnpackReveal(revealedData_packed, id_type) {
    const revealedData_packed_formatted_passport = [
        revealedData_packed['revealedData_packed[0]'],
        revealedData_packed['revealedData_packed[1]'],
        revealedData_packed['revealedData_packed[2]']
    ];
    const revealedData_packed_formatted_id = [
        revealedData_packed['revealedData_packed[0]'],
        revealedData_packed['revealedData_packed[1]'],
        revealedData_packed['revealedData_packed[2]'],
        revealedData_packed['revealedData_packed[3]']
    ];
    return unpackReveal(id_type === 'passport' ? revealedData_packed_formatted_passport : revealedData_packed_formatted_id, id_type);
}
function formatAndUnpackForbiddenCountriesList(forbiddenCountriesList_packed) {
    const forbiddenCountriesList_packed_formatted = [
        forbiddenCountriesList_packed['forbidden_countries_list_packed[0]'],
        forbiddenCountriesList_packed['forbidden_countries_list_packed[1]'],
        forbiddenCountriesList_packed['forbidden_countries_list_packed[2]'],
        forbiddenCountriesList_packed['forbidden_countries_list_packed[3]']
    ];
    const trimmed = trimu0000(unpackReveal(forbiddenCountriesList_packed_formatted, 'id'));
    const countries = [];
    for(let i = 0; i < trimmed.length; i += 3){
        const countryCode = trimmed.slice(i, i + 3).join('');
        if (countryCode.length === 3) {
            countries.push(countryCode);
        }
    }
    return countries; // Return countries array instead of trimmed
}
function revealBitmapFromMapping(attributeToReveal) {
    const reveal_bitmap = Array(90).fill('0');
    Object.entries(attributeToReveal).forEach(([attribute, reveal])=>{
        if (reveal !== '') {
            const [start, end] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["attributeToPosition"][attribute];
            reveal_bitmap.fill('1', start, end + 1);
        }
    });
    return reveal_bitmap;
}
function revealBitmapFromAttributes(disclosureOptions, id_type) {
    const reveal_bitmap = Array(id_type === 'passport' ? 88 : 90).fill('0');
    const att_to_position = id_type === 'passport' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["attributeToPosition"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["attributeToPosition_ID"];
    Object.entries(disclosureOptions).forEach(([attribute, { enabled }])=>{
        if (enabled && attribute in att_to_position) {
            const [start, end] = att_to_position[attribute];
            reveal_bitmap.fill('1', start, end + 1);
        }
    });
    return reveal_bitmap;
}
}}),
"[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/appType.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SelfAppBuilder": (()=>SelfAppBuilder),
    "getUniversalLink": (()=>getUniversalLink)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$circuits$2f$uuid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/circuits/uuid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$11$2e$1$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$v4$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/uuid@11.1.0/node_modules/uuid/dist/esm/v4.js [app-ssr] (ecmascript) <export default as v4>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/constants/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$scope$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/scope.js [app-ssr] (ecmascript)");
;
;
;
;
class SelfAppBuilder {
    constructor(config){
        if (!config.appName) {
            throw new Error('appName is required');
        }
        if (!config.scope) {
            throw new Error('scope is required');
        }
        if (!config.endpoint) {
            throw new Error('endpoint is required');
        }
        // Check if scope and endpoint contain only ASCII characters
        if (!/^[\x00-\x7F]*$/.test(config.scope)) {
            throw new Error('Scope must contain only ASCII characters (0-127)');
        }
        if (!/^[\x00-\x7F]*$/.test(config.endpoint)) {
            throw new Error('Endpoint must contain only ASCII characters (0-127)');
        }
        if (config.scope.length > 31) {
            throw new Error('Scope must be less than 31 characters');
        }
        const formattedEndpoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$scope$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatEndpoint"])(config.endpoint);
        if (formattedEndpoint.length > 496) {
            throw new Error(`Endpoint must be less than 496 characters, current endpoint: ${formattedEndpoint}, length: ${formattedEndpoint.length}`);
        }
        if (!config.userId) {
            throw new Error('userId is required');
        }
        if (config.endpointType === 'https' && !config.endpoint.startsWith('https://')) {
            throw new Error('endpoint must start with https://');
        }
        if (config.endpointType === 'celo' && !config.endpoint.startsWith('0x')) {
            throw new Error('endpoint must be a valid address');
        }
        // Validate that localhost endpoints are not allowed
        if (config.endpoint && (config.endpoint.includes('localhost') || config.endpoint.includes('127.0.0.1'))) {
            throw new Error('localhost endpoints are not allowed');
        }
        if (config.userIdType === 'hex') {
            if (!config.userId.startsWith('0x')) {
                throw new Error('userId as hex must start with 0x');
            }
            config.userId = config.userId.slice(2);
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$circuits$2f$uuid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateUserId"])(config.userId, config.userIdType ?? 'uuid')) {
            throw new Error('userId must be a valid UUID or address');
        }
        this.config = {
            sessionId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$11$2e$1$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$v4$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            userIdType: 'uuid',
            devMode: false,
            endpointType: 'https',
            header: '',
            logoBase64: '',
            deeplinkCallback: '',
            disclosures: {},
            chainID: config.endpointType === 'staging_celo' ? 44787 : 42220,
            version: config.version ?? 2,
            userDefinedData: '',
            ...config
        };
    }
    build() {
        return this.config;
    }
}
function getUniversalLink(selfApp) {
    return `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["REDIRECT_URL"]}?selfApp=${encodeURIComponent(JSON.stringify(selfApp))}`;
}
}}),
"[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/certificate_parsing/oids.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "extractHashFunction": (()=>extractHashFunction),
    "getFriendlyName": (()=>getFriendlyName),
    "getSecpFromNist": (()=>getSecpFromNist),
    "mapSecpCurves": (()=>mapSecpCurves),
    "oidMap": (()=>oidMap)
});
const oidMap = {
    '1.2.840.113549.3.7': '3des',
    '2.16.840.1.101.3.4.1.2': 'aes128',
    '2.16.840.1.101.3.4.1.5': 'aes128wrap',
    '2.16.840.1.101.3.4.1.22': 'aes192',
    '2.16.840.1.101.3.4.1.25': 'aes192wrap',
    '2.16.840.1.101.3.4.1.42': 'aes256',
    '2.16.840.1.101.3.4.1.45': 'aes256wrap',
    '1.3.36.3.3.2.8.1.1.1': 'brainpoolP160r1',
    '1.3.36.3.3.2.8.1.1.2': 'brainpoolP160t1',
    '1.3.36.3.3.2.8.1.1.3': 'brainpoolP192r1',
    '1.3.36.3.3.2.8.1.1.4': 'brainpoolP192t1',
    '1.3.36.3.3.2.8.1.1.5': 'brainpoolP224r1',
    '1.3.36.3.3.2.8.1.1.6': 'brainpoolP224t1',
    '1.3.36.3.3.2.8.1.1.7': 'brainpoolP256r1',
    '1.3.36.3.3.2.8.1.1.8': 'brainpoolP256t1',
    '1.3.36.3.3.2.8.1.1.9': 'brainpoolP320r1',
    '1.3.36.3.3.2.8.1.1.10': 'brainpoolP320t1',
    '1.3.36.3.3.2.8.1.1.11': 'brainpoolP384r1',
    '1.3.36.3.3.2.8.1.1.12': 'brainpoolP384t1',
    '1.3.36.3.3.2.8.1.1.13': 'brainpoolP512r1',
    '1.3.36.3.3.2.8.1.1.14': 'brainpoolP512t1',
    '2.5.4.6': 'C',
    '1.2.840.113549.1.9.16.3.6': 'CMS3DESwrap',
    '1.2.840.113549.1.9.16.3.7': 'CMSRC2wrap',
    '2.5.4.3': 'CN',
    '1.3.6.1.5.5.7.2.1': 'CPS',
    '0.9.2342.19200300.100.1.25': 'DC',
    '1.3.14.3.2.7': 'des',
    '2.5.4.13': 'Description',
    '1.2.840.10046.2.1': 'DH',
    '2.5.4.46': 'dnQualifier',
    '1.2.840.10040.4.1': 'DSA',
    '1.3.14.3.2.27': 'dsaSHA1',
    '1.2.840.113549.1.9.1': 'E',
    '1.2.156.11235.1.1.2.1': 'ec192wapi',
    '1.2.840.10045.2.1': 'ECC',
    '1.3.133.16.840.63.0.2': 'ECDH_STD_SHA1_KDF',
    '1.3.132.1.11.1': 'ECDH_STD_SHA256_KDF',
    '1.3.132.1.11.2': 'ECDH_STD_SHA384_KDF',
    '1.2.840.10045.3.1.7': 'ECDSA_P256',
    '1.3.132.0.34': 'ECDSA_P384',
    '1.3.132.0.35': 'ECDSA_P521',
    '1.2.840.113549.1.9.16.3.5': 'ESDH',
    '2.5.4.42': 'G',
    '2.5.4.43': 'I',
    '2.5.4.7': 'L',
    '1.2.840.113549.2.2': 'md2',
    '1.2.840.113549.1.1.2': 'md2RSA',
    '1.2.840.113549.2.4': 'md4',
    '1.2.840.113549.1.1.3': 'md4RSA',
    '1.2.840.113549.2.5': 'md5',
    '1.2.840.113549.1.1.4': 'md5RSA',
    '1.2.840.113549.1.1.8': 'mgf1',
    '2.16.840.1.101.2.1.1.20': 'mosaicKMandUpdSig',
    '2.16.840.1.101.2.1.1.19': 'mosaicUpdatedSig',
    '1.2.840.10045.3.1.1': 'nistP192',
    '1.3.132.0.33': 'nistP224',
    '1.3.6.1.5.5.7.6.2': 'NO_SIGN',
    '2.5.4.10': 'O',
    '2.5.4.11': 'OU',
    '2.5.4.20': 'Phone',
    '2.5.4.18': 'POBox',
    '2.5.4.17': 'PostalCode',
    '1.2.840.113549.3.2': 'rc2',
    '1.2.840.113549.3.4': 'rc4',
    '1.2.840.113549.1.1.1': 'RSA',
    '1.2.840.113549.1.1.7': 'RSAES_OAEP',
    '1.2.840.113549.1.1.10': 'RSASSA_PSS',
    '2.5.4.8': 'S',
    '1.3.132.0.9': 'secP160k1',
    '1.3.132.0.8': 'secP160r1',
    '1.3.132.0.30': 'secP160r2',
    '1.3.132.0.31': 'secP192k1',
    '1.3.132.0.32': 'secP224k1',
    '1.3.132.0.10': 'secP256k1',
    '2.5.4.5': 'SERIALNUMBER',
    '1.3.14.3.2.26': 'sha1',
    '1.2.840.10040.4.3': 'sha1DSA',
    '1.2.840.10045.4.1': 'sha1ECDSA',
    '1.2.840.113549.1.1.5': 'sha1RSA',
    '1.2.840.10045.4.3.1': 'sha224ECDSA',
    '1.2.840.113549.1.1.14': 'sha224RSA',
    '2.16.840.1.101.3.4.2.1': 'sha256',
    '1.2.840.10045.4.3.2': 'sha256ECDSA',
    '1.2.840.113549.1.1.11': 'sha256RSA',
    '2.16.840.1.101.3.4.2.2': 'sha384',
    '1.2.840.10045.4.3.3': 'sha384ECDSA',
    '1.2.840.113549.1.1.12': 'sha384RSA',
    '2.16.840.1.101.3.4.2.3': 'sha512',
    '1.2.840.10045.4.3.4': 'sha512ECDSA',
    '1.2.840.113549.1.1.13': 'sha512RSA',
    '2.5.4.4': 'SN',
    '1.2.840.10045.4.3': 'specifiedECDSA',
    '2.5.4.9': 'STREET',
    '2.5.4.12': 'T',
    '2.23.133.2.1': 'TPMManufacturer',
    '2.23.133.2.2': 'TPMModel',
    '2.23.133.2.3': 'TPMVersion',
    '2.23.43.1.4.9': 'wtls9',
    '2.5.4.24': 'X21Address',
    '1.2.840.10045.3.1.2': 'x962P192v2',
    '1.2.840.10045.3.1.3': 'x962P192v3',
    '1.2.840.10045.3.1.4': 'x962P239v1',
    '1.2.840.10045.3.1.5': 'x962P239v2',
    '1.2.840.10045.3.1.6': 'x962P239v3'
};
const mapSecpCurves = {
    ECDSA_224: 'secp224r1',
    ECDSA_P256: 'secp256r1',
    ECDSA_P384: 'secp384r1',
    ECDSA_P521: 'secp521r1'
};
function getSecpFromNist(nist) {
    switch(nist){
        case 'nistP224':
            return 'secp224r1';
        case 'nistP256':
            return 'secp256r1';
        case 'nistP384':
            return 'secp384r1';
        case 'nistP521':
            return 'secp521r1';
    }
    return nist;
}
function getFriendlyNameSecpCurves(friendlyName) {
    return mapSecpCurves[friendlyName] || friendlyName;
}
function getFriendlyName(oid) {
    return getFriendlyNameSecpCurves(oidMap[oid]) || 'Unknown Algorithm';
}
function extractHashFunction(friendlyName) {
    if (friendlyName.toLowerCase().includes('sha1')) {
        return 'sha1';
    }
    if (friendlyName.toLowerCase().includes('sha256')) {
        return 'sha256';
    }
    if (friendlyName.toLowerCase().includes('sha384')) {
        return 'sha384';
    }
    if (friendlyName.toLowerCase().includes('sha512')) {
        return 'sha512';
    }
    throw new Error('hash function not found in: ' + friendlyName);
    return 'unknown';
}
}}),
"[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/certificate_parsing/curves.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getCurveForElliptic": (()=>getCurveForElliptic),
    "getECDSACurveBits": (()=>getECDSACurveBits),
    "identifyCurve": (()=>identifyCurve),
    "normalizeHex": (()=>normalizeHex),
    "standardCurves": (()=>standardCurves)
});
const standardCurves = [
    {
        name: 'secp192r1',
        p: 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFF',
        a: 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFC',
        b: '64210519E59C80E70FA7E9AB72243049FEB8DEECC146B9B1',
        G: '04188DA80EB03090F67CBF20EB43A18800F4FF0AFD82FF101207192B95FFC8DA78631011ED6B24CDD573F977A11E794811',
        n: 'FFFFFFFFFFFFFFFFFFFFFFFF99DEF836146BC9B1B4D22831',
        h: '01'
    },
    {
        name: 'secp224r1',
        p: 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF000000000000000000000001',
        a: 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFE',
        b: 'B4050A850C04B3ABF54132565044B0B7D7BFD8BA270B39432355FFB4',
        G: '04B70E0CBD6BB4BF7F321390B94A03C1D356C21122343280D6115C1D21BD376388B5F723FB4C22DFE6CD4375A05A07476444D5819985007E34',
        n: 'FFFFFFFFFFFFFFFFFFFFFFFFFFFF16A2E0B8F03E13DD29455C5C2A3D',
        h: '01'
    },
    {
        name: 'secp256r1',
        p: 'FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFF',
        a: 'FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFC',
        b: '5AC635D8AA3A93E7B3EBBD55769886BC651D06B0CC53B0F63BCE3C3E27D2604B',
        G: '046B17D1F2E12C4247F8BCE6E563A440F277037D812DEB33A0F4A13945D898C2964FE342E2FE1A7F9B8EE7EB4A7C0F9E162BCE33576B315ECECBB6406837BF51F5',
        n: 'FFFFFFFF00000000FFFFFFFFFFFFFFFFBCE6FAADA7179E84F3B9CAC2FC632551',
        h: '01'
    },
    {
        name: 'secp384r1',
        p: 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFF0000000000000000FFFFFFFF',
        a: 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFF0000000000000000FFFFFFFC',
        b: 'B3312FA7E23EE7E4988E056BE3F82D19181D9C6EFE8141120314088F5013875AC656398D8A2ED19D2A85C8EDD3EC2AEF',
        G: '04AA87CA22BE8B05378EB1C71EF320AD746E1D3B628BA79B9859F741E082542A385502F25DBF55296C3A545E3872760AB73617DE4A96262C6F5D9E98BF9292DC29F8F41DBD289A147CE9DA3113B5F0B8C00A60B1CE1D7E819D7A431D7C90EA0E5F',
        n: 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC7634D81F4372DDF581A0DB248B0A77AECEC196ACCC52973',
        h: '01'
    },
    {
        name: 'secp521r1',
        p: '01FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF',
        a: '01FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC',
        b: '0051953EB9618E1C9A1F929A21A0B68540EEA2DA725B99B315F3B8B489918EF109E156193951EC7E937B1652C0BD3BB1BF073573DF883D2C34F1EF451FD46B503F00',
        G: '0400C6858E06B70404E9CD9E3ECB662395B4429C648139053FB521F828AF606B4D3DBAA14B5E77EFE75928FE1DC127A2FFA8DE3348B3C1856A429BF97E7E31C2E5BD66011839296A789A3BC0045C8A5FB42C7D1BD998F54449579B446817AFBD17273E662C97EE72995EF42640C550B9013FAD0761353C7086A272C24088BE94769FD16650',
        n: '01FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFA51868783BF2F966B7FCC0148F709A5D03BB5C9B8899C47AEBB6FB71E91386409',
        h: '01'
    },
    {
        name: 'brainpoolP192r1',
        p: 'C302F41D932A36CDA7A3463093D18DB78FCE476DE1A86297',
        a: '6A91174076B1E0E19C39C031FE8685C1CAE040E5C69A28EF',
        b: '469A28EF7C28CCA3DC721D044F4496BCCA7EF4146FBF25C9',
        G: '04C0A0647EAA7F9B8EE7C1AC4D77FC94CA14B690866ABD5BB88B5F4828C1490002E6773FA2FA299B8F',
        n: 'C302F41D932A36CDA7A3463093D18DB78FCE476DE1A86294',
        h: '01'
    },
    {
        name: 'brainpoolP224r1',
        p: 'd7c134aa264366862a18302575d1d787b09f075797da89f57ec8c0ff',
        a: '68a5e62ca9ce6c1c299803a6c1530b514e182ad8b0042a59cad29f43',
        b: '2580f63ccfe44138870713b1a92369e33e2135d266dbb372386c400b',
        G: '040d9029ad2c7e5cf4340823b2a87dc68c9e4ce3174c1e6efdee12c07d58aa56f772c0726f24c6b89e4ecdac24354b9e99caa3f6d3761402cd',
        n: 'd7c134aa264366862a18302575d0fb98d116bc4b6ddebca3a5a7939f',
        h: '01'
    },
    {
        name: 'brainpoolP256r1',
        p: 'A9FB57DBA1EEA9BC3E660A909D838D726E3BF623D52620282013481D1F6E5377',
        a: '7D5A0975FC2C3057EEF67530417AFFE7FB8055C126DC5C6CE94A4B44F330B5D9',
        b: '26DC5C6CE94A4B44F330B5D9BBD77CBF958416295CF7E1CE6BCCDC18FF8C07B6',
        G: '048BD2AEB9CB7E57CB2C4B482FFC81B7AFB9DE27E1E3BD23C23A4453BD9ACE3262547EF835C3DAC4FD97F8461A14611DC9C27745132DED8E545C1D54C72F046997',
        n: 'A9FB57DBA1EEA9BC3E660A909D838D718C397AA3B561A6F7901E0E82974856A7',
        h: '01'
    },
    {
        name: 'brainpoolP384r1',
        p: '8CB91E82A3386D280F5D6F7E50E641DF152F7109ED5456B412B1DA197FB71123ACD3A729901D1A71874700133107EC53',
        a: '7BC382C63D8C150C3C72080ACE05AFA0C2BEA28E4FB22787139165EFBA91F90F8AA5814A503AD4EB04A8C7DD22CE2826',
        b: '04A8C7DD22CE28268B39B55416F0447C2FB77DE107DCD2A62E880EA53EEB62D57CB4390295DBC9943AB78696FA504C11',
        G: '041D1C64F068CF45FFA2A63A81B7C13F6B8847A3E77EF14FE3DB7FCAFE0CBD10E8E826E03436D646AAEF87B2E247D4AF1E8ABE1D7520F9C2A45CB1EB8E95CFD55262B70B29FEEC5864E19C054FF99129280E4646217791811142820341263C5315',
        n: '8CB91E82A3386D280F5D6F7E50E641DF152F7109ED5456B31F166E6CAC0425A7CF3AB6AF6B7FC3103B883202E9046565',
        h: '01'
    },
    {
        name: 'brainpoolP512r1',
        p: 'AADD9DB8DBE9C48B3FD4E6AE33C9FC07CB308DB3B3C9D20ED6639CCA703308717D4D9B009BC66842AECDA12AE6A380E62881FF2F2D82C68528AA6056583A48F3',
        a: '7830A3318B603B89E2327145AC234CC594CBDD8D3DF91610A83441CAEA9863BC2DED5D5AA8253AA10A2EF1C98B9AC8B57F1117A72BF2C7B9E7C1AC4D77FC94CA',
        b: '3DF91610A83441CAEA9863BC2DED5D5AA8253AA10A2EF1C98B9AC8B57F1117A72BF2C7B9E7C1AC4D77FC94CADC083E67984050B75EBAE5DD2809BD638016F723',
        G: '0481AEE4BDD82ED9645A21322E9C4C6A9385ED9F70B5D916C1B43B62EEF4D0098EFF3B1F78E2D0D48D50D1687B93B97D5F7C6D5047406A5E688B352209BCB9F8227DDE385D566332ECC0EABFA9CF7822FDF209F70024A57B1AA000C55B881F8111B2DCDE494A5F485E5BCA4BD88A2763AED1CA2B2FA8F0540678CD1E0F3AD80892',
        n: 'AADD9DB8DBE9C48B3FD4E6AE33C9FC07CB308DB3B3C9D20ED6639CCA70330870553E5C414CA92619418661197FAC10471DB1D381085DDADDB58796829CA90069',
        h: '01'
    }
];
function normalizeHex(hex) {
    return hex.toLowerCase().replace(/^0x/, '').replace(/^00/, '');
}
function identifyCurve(params) {
    const normalizedParams = {
        p: normalizeHex(params.p),
        a: normalizeHex(params.a),
        b: normalizeHex(params.b),
        G: normalizeHex(params.G),
        n: normalizeHex(params.n),
        h: normalizeHex(params.h)
    };
    for (const curve of standardCurves){
        if (normalizedParams.p === normalizeHex(curve.p) && normalizedParams.a === normalizeHex(curve.a) && normalizedParams.b === normalizeHex(curve.b) && normalizedParams.G === normalizeHex(curve.G) && normalizedParams.n === normalizeHex(curve.n) && normalizedParams.h === normalizeHex(curve.h)) {
            return curve.name;
        }
    }
    console.log('Unknown curve:', normalizedParams);
    return 'Unknown curve';
}
function getECDSACurveBits(curveName) {
    const curveBits = {
        secp224r1: 224,
        secp256r1: 256,
        secp384r1: 384,
        secp521r1: 521,
        brainpoolP224r1: 224,
        brainpoolP256r1: 256,
        brainpoolP384r1: 384,
        brainpoolP512r1: 512
    };
    if (curveName in curveBits) {
        return curveBits[curveName].toString();
    }
    console.log('\x1b[31m%s\x1b[0m', `curve name ${curveName} not found in curveBits`);
    return 'unknown';
}
function getCurveForElliptic(curveName) {
    const curves = {
        secp224r1: 'p224',
        secp256r1: 'p256',
        secp384r1: 'p384',
        secp521r1: 'p521',
        brainpoolP224r1: 'brainpoolP224r1',
        brainpoolP256r1: 'brainpoolP256r1',
        brainpoolP384r1: 'brainpoolP384r1',
        brainpoolP512r1: 'brainpoolP512r1'
    };
    if (!curves[curveName]) {
        throw new Error('Invalid curve: ' + curveName);
    }
    return curves[curveName];
}
}}),
"[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/certificate_parsing/utils.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getAuthorityKeyIdentifier": (()=>getAuthorityKeyIdentifier),
    "getIssuerCountryCode": (()=>getIssuerCountryCode),
    "getSubjectKeyIdentifier": (()=>getSubjectKeyIdentifier)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$asn1js$40$3$2e$0$2e$7$2f$node_modules$2f$asn1js$2f$build$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/asn1js@3.0.7/node_modules/asn1js/build/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$js$2d$sha256$40$0$2e$11$2e$1$2f$node_modules$2f$js$2d$sha256$2f$src$2f$sha256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/js-sha256@0.11.1/node_modules/js-sha256/src/sha256.js [app-ssr] (ecmascript)");
;
;
const getSubjectKeyIdentifier = (cert)=>{
    const subjectKeyIdentifier = cert.extensions.find((ext)=>ext.extnID === '2.5.29.14');
    if (subjectKeyIdentifier) {
        let skiValue = Buffer.from(subjectKeyIdentifier.extnValue.valueBlock.valueHexView).toString('hex');
        skiValue = skiValue.replace(/^(?:30(?:16|1E|22|32|42))?(?:04(?:08|14|1C|20|30|40))?/, '');
        return skiValue;
    } else {
        // console.log('\x1b[31m%s\x1b[0m', 'no subject key identifier found'); // it's no big deal if this is not found
        // do a sha1 of the certificate tbs
        const hash = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$js$2d$sha256$40$0$2e$11$2e$1$2f$node_modules$2f$js$2d$sha256$2f$src$2f$sha256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sha256"].create();
        hash.update(cert.tbsView);
        return hash.hex();
    }
};
const getAuthorityKeyIdentifier = (cert)=>{
    const authorityKeyIdentifierExt = cert.extensions.find((ext)=>ext.extnID === '2.5.29.35');
    if (authorityKeyIdentifierExt) {
        const extnValueHex = authorityKeyIdentifierExt.extnValue.valueBlock.valueHexView;
        const asn1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$asn1js$40$3$2e$0$2e$7$2f$node_modules$2f$asn1js$2f$build$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromBER"])(extnValueHex);
        if (asn1.offset !== -1) {
            const constructedValue = asn1.result.valueBlock;
            if (constructedValue.value) {
                const keyIdentifierElement = constructedValue.value.find((element)=>element.idBlock.tagClass === 3 && element.idBlock.tagNumber === 0);
                if (keyIdentifierElement) {
                    return Buffer.from(keyIdentifierElement.valueBlock.valueHexView).toString('hex');
                }
            }
        }
    } else {
        console.log('\x1b[31m%s\x1b[0m', 'no authority key identifier found');
    }
    return '';
};
function getIssuerCountryCode(cert) {
    const issuerRDN = cert.issuer.typesAndValues;
    let issuerCountryCode = '';
    for (const rdn of issuerRDN){
        if (rdn.type === '2.5.4.6') {
            // OID for Country Name
            issuerCountryCode = rdn.value.valueBlock.value;
            break;
        }
    }
    return issuerCountryCode.toUpperCase();
}
}}),
"[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/certificate_parsing/elliptic.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "initElliptic": (()=>initElliptic)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$elliptic$40$6$2e$6$2e$1$2f$node_modules$2f$elliptic$2f$lib$2f$elliptic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/elliptic@6.6.1/node_modules/elliptic/lib/elliptic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$hash$2e$js$40$1$2e$1$2e$7$2f$node_modules$2f$hash$2e$js$2f$lib$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/hash.js@1.1.7/node_modules/hash.js/lib/hash.js [app-ssr] (ecmascript)");
;
;
function initElliptic() {
    const curves = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$elliptic$40$6$2e$6$2e$1$2f$node_modules$2f$elliptic$2f$lib$2f$elliptic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].curves;
    const PresetCurve = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$elliptic$40$6$2e$6$2e$1$2f$node_modules$2f$elliptic$2f$lib$2f$elliptic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].curves.PresetCurve;
    function defineCurve(name, options) {
        Object.defineProperty(curves, name, {
            configurable: true,
            enumerable: true,
            get: function() {
                var curve = new PresetCurve(options);
                Object.defineProperty(curves, name, {
                    configurable: true,
                    enumerable: true,
                    value: curve
                });
                return curve;
            }
        });
    }
    defineCurve('brainpoolP224r1', {
        type: 'short',
        prime: null,
        p: 'd7c134aa 26436686 2a183025 75d1d787 b09f0757 97da89f5 7ec8c0ff',
        a: '68a5e62c a9ce6c1c 299803a6 c1530b51 4e182ad8 b0042a59 cad29f43',
        b: '2580f63c cfe44138 870713b1 a92369e3 3e2135d2 66dbb372 386c400b',
        n: 'd7c134aa 26436686 2a183025 75d0fb98 d116bc4b 6ddebca3 a5a7939f',
        hash: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$hash$2e$js$40$1$2e$1$2e$7$2f$node_modules$2f$hash$2e$js$2f$lib$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].sha1,
        gRed: false,
        g: [
            '0d9029ad 2c7e5cf4 340823b2 a87dc68c 9e4ce317 4c1e6efd ee12c07d',
            '58aa56f7 72c0726f 24c6b89e 4ecdac24 354b9e99 caa3f6d3 761402cd'
        ]
    });
    defineCurve('brainpoolP256r1', {
        type: 'short',
        prime: null,
        p: 'a9fb57db a1eea9bc 3e660a90 9d838d72 6e3bf623 d5262028 2013481d 1f6e5377',
        a: '7d5a0975 fc2c3057 eef67530 417affe7 fb8055c1 26dc5c6c e94a4b44 f330b5d9',
        b: '26dc5c6c e94a4b44 f330b5d9 bbd77cbf 95841629 5cf7e1ce 6bccdc18 ff8c07b6',
        n: 'a9fb57db a1eea9bc 3e660a90 9d838d71 8c397aa3 b561a6f7 901e0e82 974856a7',
        hash: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$hash$2e$js$40$1$2e$1$2e$7$2f$node_modules$2f$hash$2e$js$2f$lib$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].sha256,
        gRed: false,
        g: [
            '8bd2aeb9 cb7e57cb 2c4b482f fc81b7af b9de27e1 e3bd23c2 3a4453bd 9ace3262',
            '547ef835 c3dac4fd 97f8461a 14611dc9 c2774513 2ded8e54 5c1d54c7 2f046997'
        ]
    });
    defineCurve('brainpoolP384r1', {
        type: 'short',
        prime: null,
        p: '8cb91e82 a3386d28 0f5d6f7e 50e641df 152f7109 ed5456b4 12b1da19 7fb71123 acd3a729 901d1a71 87470013 3107ec53',
        a: '7bc382c6 3d8c150c 3c72080a ce05afa0 c2bea28e 4fb22787 139165ef ba91f90f 8aa5814a 503ad4eb 04a8c7dd 22ce2826',
        b: '04a8c7dd 22ce2826 8b39b554 16f0447c 2fb77de1 07dcd2a6 2e880ea5 3eeb62d5 7cb43902 95dbc994 3ab78696 fa504c11',
        n: '8cb91e82 a3386d28 0f5d6f7e 50e641df 152f7109 ed5456b3 1f166e6c ac0425a7 cf3ab6af 6b7fc310 3b883202 e9046565',
        hash: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$hash$2e$js$40$1$2e$1$2e$7$2f$node_modules$2f$hash$2e$js$2f$lib$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].sha384,
        gRed: false,
        g: [
            '1d1c64f0 68cf45ff a2a63a81 b7c13f6b 8847a3e7 7ef14fe3 db7fcafe 0cbd10e8 e826e034 36d646aa ef87b2e2 47d4af1e',
            '8abe1d75 20f9c2a4 5cb1eb8e 95cfd552 62b70b29 feec5864 e19c054f f9912928 0e464621 77918111 42820341 263c5315'
        ]
    });
    defineCurve('brainpoolP512r1', {
        type: 'short',
        prime: null,
        p: 'aadd9db8 dbe9c48b 3fd4e6ae 33c9fc07 cb308db3 b3c9d20e d6639cca 70330871 7d4d9b00 9bc66842 aecda12a e6a380e6 2881ff2f 2d82c685 28aa6056 583a48f3',
        a: '7830a331 8b603b89 e2327145 ac234cc5 94cbdd8d 3df91610 a83441ca ea9863bc 2ded5d5a a8253aa1 0a2ef1c9 8b9ac8b5 7f1117a7 2bf2c7b9 e7c1ac4d 77fc94ca',
        b: '3df91610 a83441ca ea9863bc 2ded5d5a a8253aa1 0a2ef1c9 8b9ac8b5 7f1117a7 2bf2c7b9 e7c1ac4d 77fc94ca dc083e67 984050b7 5ebae5dd 2809bd63 8016f723',
        n: 'aadd9db8 dbe9c48b 3fd4e6ae 33c9fc07 cb308db3 b3c9d20e d6639cca 70330870 553e5c41 4ca92619 41866119 7fac1047 1db1d381 085ddadd b5879682 9ca90069',
        hash: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$hash$2e$js$40$1$2e$1$2e$7$2f$node_modules$2f$hash$2e$js$2f$lib$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].sha512,
        gRed: false,
        g: [
            '81aee4bd d82ed964 5a21322e 9c4c6a93 85ed9f70 b5d916c1 b43b62ee f4d0098e ff3b1f78 e2d0d48d 50d1687b 93b97d5f 7c6d5047 406a5e68 8b352209 bcb9f822',
            '7dde385d 566332ec c0eabfa9 cf7822fd f209f700 24a57b1a a000c55b 881f8111 b2dcde49 4a5f485e 5bca4bd8 8a2763ae d1ca2b2f a8f05406 78cd1e0f 3ad80892'
        ]
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$elliptic$40$6$2e$6$2e$1$2f$node_modules$2f$elliptic$2f$lib$2f$elliptic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
}
}}),
"[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/certificate_parsing/parseCertificateSimple.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getAuthorityKeyIdentifier": (()=>getAuthorityKeyIdentifier),
    "getCertificateFromPem": (()=>getCertificateFromPem),
    "getCircuitName": (()=>getCircuitName),
    "getCircuitNameOld": (()=>getCircuitNameOld),
    "getHashAlgorithm": (()=>getHashAlgorithm),
    "getParamsECDSA": (()=>getParamsECDSA),
    "getTBSBytesForge": (()=>getTBSBytesForge),
    "parseCertificateSimple": (()=>parseCertificateSimple)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$asn1js$40$3$2e$0$2e$7$2f$node_modules$2f$asn1js$2f$build$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/asn1js@3.0.7/node_modules/asn1js/build/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pkijs$40$3$2e$4$2e$0$2f$node_modules$2f$pkijs$2f$build$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pkijs@3.4.0/node_modules/pkijs/build/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$certificate_parsing$2f$oids$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/certificate_parsing/oids.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$certificate_parsing$2f$curves$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/certificate_parsing/curves.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$certificate_parsing$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/certificate_parsing/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/constants/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$certificate_parsing$2f$elliptic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/certificate_parsing/elliptic.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
function parseCertificateSimple(pem) {
    let certificateData = {
        id: '',
        issuer: '',
        validity: {
            notBefore: '',
            notAfter: ''
        },
        subjectKeyIdentifier: '',
        authorityKeyIdentifier: '',
        signatureAlgorithm: '',
        hashAlgorithm: '',
        publicKeyDetails: undefined,
        tbsBytes: undefined,
        tbsBytesLength: '',
        rawPem: '',
        rawTxt: '',
        publicKeyAlgoOID: ''
    };
    try {
        const cert = getCertificateFromPem(pem);
        certificateData.tbsBytes = getTBSBytesForge(cert);
        certificateData.tbsBytesLength = certificateData.tbsBytes.length.toString();
        const publicKeyAlgoOID = cert.subjectPublicKeyInfo.algorithm.algorithmId;
        const publicKeyAlgoFN = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$certificate_parsing$2f$oids$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFriendlyName"])(publicKeyAlgoOID);
        const signatureAlgoOID = cert.signatureAlgorithm.algorithmId;
        const signatureAlgoFN = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$certificate_parsing$2f$oids$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFriendlyName"])(signatureAlgoOID);
        certificateData.hashAlgorithm = getHashAlgorithm(signatureAlgoFN);
        certificateData.publicKeyAlgoOID = publicKeyAlgoOID;
        let params;
        if (publicKeyAlgoFN === 'RSA' && signatureAlgoFN != 'RSASSA_PSS') {
            certificateData.signatureAlgorithm = 'rsa';
            params = getParamsRSA(cert);
        } else if (publicKeyAlgoFN === 'ECC') {
            certificateData.signatureAlgorithm = 'ecdsa';
            params = getParamsECDSA(cert);
        } else if (publicKeyAlgoFN === 'RSASSA_PSS' || signatureAlgoFN === 'RSASSA_PSS') {
            certificateData.signatureAlgorithm = 'rsapss';
            params = getParamsRSAPSS(cert);
        } else {
            console.log(publicKeyAlgoFN);
        }
        certificateData.publicKeyDetails = params;
        certificateData.issuer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$certificate_parsing$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getIssuerCountryCode"])(cert);
        certificateData.validity = {
            notBefore: cert.notBefore.value.toString(),
            notAfter: cert.notAfter.value.toString()
        };
        const ski = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$certificate_parsing$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSubjectKeyIdentifier"])(cert);
        certificateData.id = ski.slice(0, 12);
        certificateData.subjectKeyIdentifier = ski;
        certificateData.rawPem = pem;
        const authorityKeyIdentifier = getAuthorityKeyIdentifier(cert);
        certificateData.authorityKeyIdentifier = authorityKeyIdentifier;
        // corner case for rsapss
        if (certificateData.signatureAlgorithm === 'rsapss' && (!certificateData.hashAlgorithm || certificateData.hashAlgorithm === 'unknown')) {
            certificateData.hashAlgorithm = certificateData.publicKeyDetails.hashAlgorithm;
        }
        return certificateData;
    } catch (error) {
        console.error(`Error processing certificate`, error);
        throw error;
    }
}
function getParamsRSA(cert) {
    const publicKeyValue = cert.subjectPublicKeyInfo.parsedKey;
    const modulusBytes = publicKeyValue.modulus.valueBlock.valueHexView;
    const modulusHex = Buffer.from(modulusBytes).toString('hex');
    const exponentBigInt = publicKeyValue.publicExponent.toBigInt();
    const exponentDecimal = exponentBigInt.toString();
    const actualBits = modulusBytes.length * 8;
    return {
        modulus: modulusHex,
        exponent: exponentDecimal,
        bits: actualBits.toString()
    };
}
function getParamsRSAPSS(cert) {
    // Get the subjectPublicKey BitString
    const spki = cert.subjectPublicKeyInfo;
    const spkiValueHex = spki.subjectPublicKey.valueBlock.valueHexView;
    // Parse the public key ASN.1 structure
    const asn1PublicKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$asn1js$40$3$2e$0$2e$7$2f$node_modules$2f$asn1js$2f$build$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromBER"])(spkiValueHex);
    if (asn1PublicKey.offset === -1) {
        throw new Error('Error parsing public key ASN.1 structure');
    }
    // The public key is an RSAPublicKey structure
    const rsaPublicKey = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pkijs$40$3$2e$4$2e$0$2f$node_modules$2f$pkijs$2f$build$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RSAPublicKey"]({
        schema: asn1PublicKey.result
    });
    const modulusBytes = rsaPublicKey.modulus.valueBlock.valueHexView;
    const modulusHex = Buffer.from(modulusBytes).toString('hex');
    const exponentBigInt = rsaPublicKey.publicExponent.toBigInt();
    const exponentDecimal = exponentBigInt.toString();
    const actualBits = modulusBytes.length * 8;
    const sigAlgParams = cert.signatureAlgorithm.algorithmParams;
    const pssParams = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pkijs$40$3$2e$4$2e$0$2f$node_modules$2f$pkijs$2f$build$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RSASSAPSSParams"]({
        schema: sigAlgParams
    });
    const hashAlgorithm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$certificate_parsing$2f$oids$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFriendlyName"])(pssParams.hashAlgorithm.algorithmId);
    const mgf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$certificate_parsing$2f$oids$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFriendlyName"])(pssParams.maskGenAlgorithm.algorithmId);
    return {
        modulus: modulusHex,
        exponent: exponentDecimal,
        bits: actualBits.toString(),
        hashAlgorithm: hashAlgorithm,
        mgf: mgf,
        saltLength: pssParams.saltLength.toString()
    };
}
function getParamsECDSA(cert) {
    try {
        const algorithmParams = cert.subjectPublicKeyInfo.algorithm.algorithmParams;
        if (!algorithmParams) {
            console.error('No algorithm params found');
            return {
                curve: 'Unknown',
                params: {},
                bits: 'Unknown',
                x: 'Unknown',
                y: 'Unknown'
            };
        }
        let curveName, bits, x, y = 'Unknown';
        let curveParams = {};
        // Try to get the curve name from the OID
        if (algorithmParams instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$asn1js$40$3$2e$0$2e$7$2f$node_modules$2f$asn1js$2f$build$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ObjectIdentifier"]) {
            const curveOid = algorithmParams.valueBlock.toString();
            curveName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$certificate_parsing$2f$oids$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSecpFromNist"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$certificate_parsing$2f$oids$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFriendlyName"])(curveOid)) || 'Unknown';
            bits = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$certificate_parsing$2f$curves$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getECDSACurveBits"])(curveName);
        } else {
            const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$asn1js$40$3$2e$0$2e$7$2f$node_modules$2f$asn1js$2f$build$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromBER"])(algorithmParams.valueBeforeDecodeView).result;
            const valueBlock = params.valueBlock;
            if (valueBlock.value && valueBlock.value.length >= 5) {
                const curveParams = {};
                // Field ID (index 1)
                const fieldId = valueBlock.value[1];
                if (fieldId && fieldId.valueBlock && fieldId.valueBlock.value) {
                    const fieldType = fieldId.valueBlock.value[0];
                    const prime = fieldId.valueBlock.value[1];
                    //curveParams.fieldType = fieldType.valueBlock.toString();
                    curveParams.p = Buffer.from(prime.valueBlock.valueHexView).toString('hex');
                }
                // Curve Coefficients (index 2)
                const curveCoefficients = valueBlock.value[2];
                if (curveCoefficients && curveCoefficients.valueBlock && curveCoefficients.valueBlock.value) {
                    const a = curveCoefficients.valueBlock.value[0];
                    const b = curveCoefficients.valueBlock.value[1];
                    curveParams.a = Buffer.from(a.valueBlock.valueHexView).toString('hex');
                    curveParams.b = Buffer.from(b.valueBlock.valueHexView).toString('hex');
                }
                // Base Point G (index 3)
                const basePoint = valueBlock.value[3];
                if (basePoint && basePoint.valueBlock) {
                    curveParams.G = Buffer.from(basePoint.valueBlock.valueHexView).toString('hex');
                }
                // Order n (index 4)
                const order = valueBlock.value[4];
                if (order && order.valueBlock) {
                    curveParams.n = Buffer.from(order.valueBlock.valueHexView).toString('hex');
                }
                if (valueBlock.value.length >= 6) {
                    // Cofactor h (index 5)
                    const cofactor = valueBlock.value[5];
                    if (cofactor && cofactor.valueBlock) {
                        curveParams.h = Buffer.from(cofactor.valueBlock.valueHexView).toString('hex');
                    }
                } else {
                    curveParams.h = '01';
                }
                const identifiedCurve = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$certificate_parsing$2f$curves$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["identifyCurve"])(curveParams);
                curveName = identifiedCurve;
                bits = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$certificate_parsing$2f$curves$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getECDSACurveBits"])(curveName);
            } else {
                if (valueBlock.value) {
                    console.log(valueBlock.value);
                } else {
                    console.log('No value block found');
                }
            }
        }
        // Get the public key x and y parameters
        const publicKeyBuffer = cert.subjectPublicKeyInfo.subjectPublicKey.valueBlock.valueHexView;
        if (publicKeyBuffer && curveName !== 'Unknown') {
            const elliptic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$certificate_parsing$2f$elliptic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initElliptic"])();
            const ec = new elliptic.ec((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$certificate_parsing$2f$curves$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCurveForElliptic"])(curveName));
            const key = ec.keyFromPublic(publicKeyBuffer);
            const x_point = key.getPublic().getX().toString('hex');
            const y_point = key.getPublic().getY().toString('hex');
            // For 521 bit curves, pad to expected length of 132 hex chars (66 bytes)
            if (curveName === 'secp521r1' || curveName === 'brainpoolP521r1') {
                x = x_point.padStart(132, '0');
                y = y_point.padStart(132, '0');
            } else {
                // For other curves, ensure even length
                x = x_point.length % 2 === 0 ? x_point : '0' + x_point;
                y = y_point.length % 2 === 0 ? y_point : '0' + y_point;
            }
        }
        return {
            curve: curveName,
            params: curveParams,
            bits: bits,
            x: x,
            y: y
        };
    } catch (error) {
        console.error('Error parsing EC parameters:', error);
        return {
            curve: 'Error',
            params: {},
            bits: 'Unknown',
            x: 'Unknown',
            y: 'Unknown'
        };
    }
}
const getAuthorityKeyIdentifier = (cert)=>{
    const authorityKeyIdentifier = cert.extensions.find((ext)=>ext.extnID === '2.5.29.35');
    if (authorityKeyIdentifier) {
        let akiValue = Buffer.from(authorityKeyIdentifier.extnValue.valueBlock.valueHexView).toString('hex');
        // Match the ASN.1 sequence header pattern: 30 followed by length
        const sequenceMatch = akiValue.match(/^30([0-9a-f]{2}|8[0-9a-f][0-9a-f])/i);
        if (sequenceMatch) {
        // console.log('Sequence length indicator:', sequenceMatch[1]);
        }
        // Match the keyIdentifier pattern: 80 followed by length (usually 14)
        const keyIdMatch = akiValue.match(/80([0-9a-f]{2})/i);
        if (keyIdMatch) {
            const keyIdLength = parseInt(keyIdMatch[1], 16);
            // Extract the actual key ID (length * 2 because hex)
            const startIndex = akiValue.indexOf(keyIdMatch[0]) + 4;
            akiValue = akiValue.slice(startIndex, startIndex + keyIdLength * 2);
            return akiValue.toUpperCase();
        }
    }
    return null;
};
const getCircuitName = (circuitMode, signatureAlgorithm, hashFunction, domainParameter, keyLength)=>{
    const circuit = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["circuitNameFromMode"][circuitMode];
    if (circuit == 'vc_and_disclose') {
        return 'vc_and_disclose';
    }
    if (circuit == 'dsc') {
        return circuit + '_' + signatureAlgorithm + '_' + hashFunction + '_' + domainParameter + '_' + keyLength;
    }
    return circuit + '_' + signatureAlgorithm + '_' + hashFunction + '_' + domainParameter + '_' + keyLength;
};
const getCircuitNameOld = (circuitMode, signatureAlgorithm, hashFunction)=>{
    const circuit = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["circuitNameFromMode"][circuitMode];
    if (circuit == 'vc_and_disclose') {
        return 'vc_and_disclose';
    } else if (signatureAlgorithm === 'ecdsa') {
        return circuit + '_' + signatureAlgorithm + '_secp256r1_' + hashFunction;
    } else {
        return circuit + '_' + signatureAlgorithm + '_65537_' + hashFunction;
    }
};
function getHashAlgorithm(rawSignatureAlgorithm) {
    const input = rawSignatureAlgorithm.toLowerCase();
    const patterns = [
        /sha-?1/i,
        /sha-?224/i,
        /sha-?256/i,
        /sha-?384/i,
        /sha-?512/i
    ];
    for (const pattern of patterns){
        const match = input.match(pattern);
        if (match) {
            // Remove any hyphens and return standardized format
            return match[0].replace('-', '');
        }
    }
    return 'unknown';
}
function getCertificateFromPem(pemContent) {
    const pemFormatted = pemContent.replace(/(-----(BEGIN|END) CERTIFICATE-----|\n|\r)/g, '');
    const binary = Buffer.from(pemFormatted, 'base64');
    const arrayBuffer = new ArrayBuffer(binary.length);
    const view = new Uint8Array(arrayBuffer);
    for(let i = 0; i < binary.length; i++){
        view[i] = binary[i];
    }
    const asn1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$asn1js$40$3$2e$0$2e$7$2f$node_modules$2f$asn1js$2f$build$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromBER"])(arrayBuffer);
    if (asn1.offset === -1) {
        throw new Error(`ASN.1 parsing error: ${asn1.result.error}`);
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pkijs$40$3$2e$4$2e$0$2f$node_modules$2f$pkijs$2f$build$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Certificate"]({
        schema: asn1.result
    });
}
function getTBSBytesForge(certificate) {
    return Array.from(certificate.tbsView.map((byte)=>parseInt(byte.toString(16), 16)));
}
}}),
"[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/date.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getAdjustedTimestampBytes": (()=>getAdjustedTimestampBytes),
    "getCurrentDateYYMMDD": (()=>getCurrentDateYYMMDD),
    "getTimestampBytesFromYearFraction": (()=>getTimestampBytesFromYearFraction),
    "unixTimestampToYYMMDD": (()=>unixTimestampToYYMMDD),
    "yearFractionToYYMMDD": (()=>yearFractionToYYMMDD),
    "yymmddToByteArray": (()=>yymmddToByteArray)
});
function getAdjustedTimestampBytes(y = 0, m = 0, d = 0) {
    // Get the current date/time
    let currentDate = new Date();
    // Optionally adjust the date
    if (y !== 0) currentDate.setFullYear(currentDate.getFullYear() + y);
    if (m !== 0) currentDate.setMonth(currentDate.getMonth() + m);
    if (d !== 0) currentDate.setDate(currentDate.getDate() + d);
    // Get the Unix timestamp (in seconds)
    const timestamp = Math.floor(currentDate.getTime() / 1000);
    // Convert the timestamp to 4 bytes
    const bytes = [
        timestamp >> 24 & 0xff,
        timestamp >> 16 & 0xff,
        timestamp >> 8 & 0xff,
        timestamp & 0xff
    ];
    return bytes;
}
function getTimestampBytesFromYearFraction(yearFraction) {
    // Separate the year and the fractional part
    const year = Math.floor(yearFraction);
    const fraction = yearFraction - year;
    // Convert the fractional part into months (0-11)
    const monthsFromFraction = Math.floor(fraction * 12);
    // Create a date object from the year and the calculated month
    // Assuming the first day of the month for simplicity
    const date = new Date(year, monthsFromFraction, 1);
    // Get the Unix timestamp (in seconds)
    const timestamp = Math.floor(date.getTime() / 1000);
    // Convert the timestamp to 4 bytes
    const bytes = [
        timestamp >> 24 & 0xff,
        timestamp >> 16 & 0xff,
        timestamp >> 8 & 0xff,
        timestamp & 0xff
    ];
    return bytes;
}
function unixTimestampToYYMMDD(timestamp) {
    console.log('timestamp: ' + timestamp);
    const date = new Date(timestamp * 1000);
    console.log('date: ' + date);
    const year = date.getUTCFullYear();
    console.log('year: ' + year);
    const month = date.getUTCMonth() + 1;
    const day = date.getUTCDate();
    // Ensure the year is correctly formatted as two digits
    const YY = `0${year % 100}`.slice(-2);
    const MM = `0${month}`.slice(-2);
    const DD = `0${day}`.slice(-2);
    return `${YY}${MM}${DD}`;
}
function yearFractionToYYMMDD(yearFraction) {
    // Separate the year and the fractional part
    const year = yearFraction;
    const fraction = yearFraction - Math.floor(yearFraction);
    // Convert the fractional part into months (0-11)
    const monthsFromFraction = Math.floor(fraction * 12);
    // Assuming the first day of the month for simplicity
    const day = 1;
    // Format year, month, and day into YYMMDD string
    const YY = `0${Math.floor(year) % 100}`.slice(-2);
    const MM = `0${monthsFromFraction + 1}`.slice(-2); // +1 because months are 1-indexed in this format
    const DD = `0${day}`.slice(-2);
    return `${YY}${MM}${DD}`;
}
function yymmddToByteArray(yymmdd) {
    // Convert each character in the string to its ASCII value
    const byteArray = Array.from(yymmdd).map((char)=>char.charCodeAt(0));
    return byteArray;
}
function getCurrentDateYYMMDD(dayDiff = 0) {
    const date = new Date();
    date.setDate(date.getDate() + dayDiff); // Adjust the date by the dayDiff
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth() + 1;
    const day = date.getUTCDate();
    const YY = `0${year % 100}`.slice(-2);
    const MM = `0${month}`.slice(-2);
    const DD = `0${day}`.slice(-2);
    const yymmdd = `${YY}${MM}${DD}`;
    return Array.from(yymmdd).map((char)=>parseInt(char));
}
}}),
"[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/passports/format.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "formatAndConcatenateDataHashes": (()=>formatAndConcatenateDataHashes),
    "formatDG1Attribute": (()=>formatDG1Attribute),
    "formatDg2Hash": (()=>formatDg2Hash),
    "formatMrz": (()=>formatMrz),
    "formatName": (()=>formatName),
    "generateSignedAttr": (()=>generateSignedAttr)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/bytes.js [app-ssr] (ecmascript)");
;
function formatAndConcatenateDataHashes(dataHashes, dg1HashOffset) {
    // concatenating dataHashes :
    let concat = [];
    const startingSequence = Array.from({
        length: dg1HashOffset
    }, ()=>Math.floor(Math.random() * 256) - 128);
    // // sha256 with rsa (index of mrzhash is 31)
    // const startingSequence = [
    //   // SEQUENCE + long form indicator + length (293 bytes)
    //   48, -126, 1, 37,
    //   // length: 1 byte
    //   2, 1,
    //   // LDSSecurityObjectVersion v0
    //   0,
    //   // padding: size 11 - size 9...
    //   48, 11, 6, 9,
    //   // 2.16.840.1.101.3.4.2.1 is sha256
    //   96, -122, 72, 1, 101, 3, 4, 2, 1,
    //   // SEQUENCE + long form indicator + length (273 bytes)
    //   48, -126, 1, 17,
    // ]
    // rsassaPss (index of mrzhash is 30)
    // // SEQUENCE + short form indicator + length (137 bytes)
    // 48, -127, -119,
    // 2, 1,
    // 0,
    // 48, 13, 6, 9,
    // // 2.16.840.1.101.3.4.2.1 is sha256
    // 96, -122, 72, 1, 101, 3, 4, 2, 1,
    // // NULL tag + SEQUENCE + length (117 bytes)
    // 5, 0, 48, 117,
    // SHA384withECDSA (index of mrzhash is 33)
    // // SEQUENCE + long form indicator + length (313 bytes)
    // 48, -126, 1, 57,
    // 2, 1,
    // 1,
    // 48, 13, 6, 9,
    // // 2.16.840.1.101.3.4.2.1 is sha384
    // 96, -122, 72, 1, 101, 3, 4, 2, 2,
    // // NULL tag + SEQUENCE + long form indicator + length (275 bytes)
    // 5, 0, 48, -126, 1, 19,
    // spain
    // 48, -127,  -79,
    // 2,    1,
    // 0,
    // 48,    7,   6,   5,
    // 1.3.14.3.2.26 is sha1
    // 43,  14, 3,    2,   26,
    // SEQUENCE + ...
    // 48, -127, -94,
    // => current conclusion is we should be able to just hardcode indexes
    // => as they shouldn't change must for same sig alg.
    // => wrong: our rsassaPss has less datagroups so the length is different (30 rather then 31)
    // console.log(`startingSequence`, startingSequence.map(byte => (byte < 0 ? byte + 256 : byte).toString(16).padStart(2, '0')).join(''));
    concat.push(...startingSequence);
    for (const dataHash of dataHashes){
        // console.log(`dataHash ${dataHash[0]}`, dataHash[1].map(byte => (byte < 0 ? byte + 256 : byte).toString(16).padStart(2, '0')).join(''));
        //push 7 padding bytes
        concat.push(...[
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ]);
        concat.push(...dataHash[1]);
    // concat.push(...[48, hashLen + 5, 2, 1, dataHash[0], 4, hashLen, ...dataHash[1]])
    // 48, 37, 2, 1, 1, 4, 32,
    // 48, 53, 2, 1, 1, 4, 48,
    }
    return concat;
}
function generateSignedAttr(messageDigest) {
    const constructedEContent = [];
    // Detailed description is in private file r&d.ts for now
    // First, the tag and length, assumed to be always the same
    constructedEContent.push(...[
        49,
        102
    ]);
    // 1.2.840.113549.1.9.3 is RFC_3369_CONTENT_TYPE_OID
    constructedEContent.push(...[
        48,
        21,
        6,
        9,
        42,
        -122,
        72,
        -122,
        -9,
        13,
        1,
        9,
        3
    ]);
    // 2.23.136.1.1.1 is ldsSecurityObject
    constructedEContent.push(...[
        49,
        8,
        6,
        6,
        103,
        -127,
        8,
        1,
        1,
        1
    ]);
    // 1.2.840.113549.1.9.5 is signing-time
    constructedEContent.push(...[
        48,
        28,
        6,
        9,
        42,
        -122,
        72,
        -122,
        -9,
        13,
        1,
        9,
        5
    ]);
    // mock time of signature
    constructedEContent.push(...[
        49,
        15,
        23,
        13,
        49,
        57,
        49,
        50,
        49,
        54,
        49,
        55,
        50,
        50,
        51,
        56,
        90
    ]);
    // 1.2.840.113549.1.9.4 is RFC_3369_MESSAGE_DIGEST_OID
    constructedEContent.push(...[
        48,
        47,
        6,
        9,
        42,
        -122,
        72,
        -122,
        -9,
        13,
        1,
        9,
        4
    ]);
    // TAG and length of the message digest
    constructedEContent.push(...[
        49,
        34,
        4,
        32
    ]);
    constructedEContent.push(...messageDigest);
    return constructedEContent;
}
function formatMrz(mrz) {
    const mrzCharcodes = [
        ...mrz
    ].map((char)=>char.charCodeAt(0));
    if (mrz.length === 88) {
        mrzCharcodes.unshift(88); // the length of the mrz data
        mrzCharcodes.unshift(95, 31); // the MRZ_INFO_TAG
        mrzCharcodes.unshift(91); // the new length of the whole array
        mrzCharcodes.unshift(97); // the tag for DG1
    } else if (mrz.length === 90) {
        mrzCharcodes.unshift(90); // the length of the mrz data
        mrzCharcodes.unshift(95, 31); // the MRZ_INFO_TAG
        mrzCharcodes.unshift(93); // the new length of the whole array
        mrzCharcodes.unshift(97); // the tag for DG1
    } else {
        throw new Error(`Unsupported MRZ length: ${mrz.length}. Expected 88 or 90 characters.`);
    }
    return mrzCharcodes;
}
function formatDg2Hash(dg2Hash) {
    const unsignedBytesDg2Hash = dg2Hash.map((x)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUnsignedByte"])(x));
    while(unsignedBytesDg2Hash.length < 64){
        // pad it to 64 bytes to correspond to the hash length of sha512 and avoid multiplying circuits
        unsignedBytesDg2Hash.push(0);
    }
    return unsignedBytesDg2Hash;
}
function formatDG1Attribute(index, value) {
    const max_length = index[1] - index[0] + 1;
    if (value.length > max_length) {
        throw new Error(`Value is too long for index ${index[0]}-${index[1]} value: ${value} value.length: ${value.length} maxLength: ${max_length}`);
    }
    return value.padEnd(max_length, '<');
}
function formatName(firstName, lastName, targetLength) {
    // Split names by spaces and join parts with '<'
    const formattedLastName = lastName.toUpperCase().split(' ').join('<');
    const formattedFirstName = firstName.toUpperCase().split(' ').join('<');
    // Combine with '<<' separator
    let result = `${formattedLastName}<<${formattedFirstName}`;
    // Pad with '<' or truncate to target length
    if (result.length < targetLength) {
        result = result.padEnd(targetLength, '<');
    } else if (result.length > targetLength) {
        result = result.substring(0, targetLength);
    }
    return result;
}
}}),
"[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/csca.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "findOIDPosition": (()=>findOIDPosition),
    "findStartIndex": (()=>findStartIndex),
    "findStartIndexEC": (()=>findStartIndexEC),
    "getCSCAFromSKI": (()=>getCSCAFromSKI),
    "getSKIPEM": (()=>getSKIPEM)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/constants/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$skiPem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/constants/skiPem.js [app-ssr] (ecmascript)");
;
;
function findStartIndexEC(point, messagePadded) {
    const pointNumArray = [];
    for(let i = 0; i < point.length; i += 2){
        pointNumArray.push(parseInt(point.slice(i, i + 2), 16));
    }
    let startIndex = -1;
    for(let i = 0; i < messagePadded.length - pointNumArray.length + 1; i++){
        const isMatch = pointNumArray.every((byte, j)=>messagePadded[i + j] === byte);
        if (isMatch) {
            startIndex = i;
            break;
        }
    }
    if (startIndex === -1) {
        throw new Error('DSC Pubkey not found in CSCA certificate');
    }
    return [
        startIndex,
        pointNumArray.length
    ];
}
function findStartIndex(modulus, messagePaddedNumber) {
    const modulusNumArray = [];
    for(let i = 0; i < modulus.length; i += 2){
        const hexPair = modulus.slice(i, i + 2);
        const number = parseInt(hexPair, 16);
        modulusNumArray.push(number);
    }
    // console.log('Modulus length:', modulusNumArray.length);
    // console.log('Message length:', messagePaddedNumber.length);
    // console.log('Modulus (hex):', modulusNumArray.map(n => n.toString(16).padStart(2, '0')).join(''));
    // console.log('Message (hex):', messagePaddedNumber.map(n => n.toString(16).padStart(2, '0')).join(''));
    for(let i = 0; i < messagePaddedNumber.length - modulusNumArray.length + 1; i++){
        let matched = true;
        for(let j = 0; j < modulusNumArray.length; j++){
            if (modulusNumArray[j] !== messagePaddedNumber[i + j]) {
                matched = false;
                break;
            }
        }
        if (matched) {
            return [
                i,
                modulusNumArray.length
            ];
        }
    }
    throw new Error('DSC Pubkey not found in certificate');
}
function findOIDPosition(oid, message) {
    // Convert OID string like "1.2.840.113549" to byte array
    const oidParts = oid.split('.').map(Number);
    // First byte is 40 * first number + second number
    const oidBytes = [
        40 * oidParts[0] + oidParts[1]
    ];
    // Convert remaining parts to ASN.1 DER encoding
    for(let i = 2; i < oidParts.length; i++){
        let value = oidParts[i];
        let bytes = [];
        // Handle multi-byte values
        if (value >= 128) {
            const tempBytes = [];
            while(value > 0){
                tempBytes.unshift(value & 0x7f);
                value = value >>> 7;
            }
            // Set MSB for all bytes except last
            for(let j = 0; j < tempBytes.length - 1; j++){
                bytes.push(tempBytes[j] | 0x80);
            }
            bytes.push(tempBytes[tempBytes.length - 1]);
        } else {
            bytes.push(value);
        }
        oidBytes.push(...bytes);
    }
    console.log('\x1b[33m%s\x1b[0m', 'OID bytes (hex):', oidBytes.map((b)=>b.toString(16).padStart(2, '0')).join(' '));
    // Search for OID in message
    // OID will be preceded by 0x06 (ASN.1 OID tag) and length byte
    for(let i = 0; i < message.length - oidBytes.length; i++){
        if (message[i] === 0x06) {
            // OID tag
            const len = message[i + 1];
            if (len === oidBytes.length) {
                let found = true;
                for(let j = 0; j < len; j++){
                    if (message[i + 2 + j] !== oidBytes[j]) {
                        found = false;
                        break;
                    }
                }
                if (found) {
                    const result = {
                        oid_index: i,
                        oid_length: len + 2
                    };
                    console.log('\x1b[32m%s\x1b[0m', 'Found OID at:', result); // Green color
                    return result;
                }
            }
        }
    }
    throw new Error('OID not found in message');
}
function getCSCAFromSKI(ski, skiPem = null) {
    const normalizedSki = ski.replace(/\s+/g, '').toLowerCase();
    const isSkiProvided = skiPem !== null;
    console.log('SKI-PEM provided');
    const cscaPemPROD = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$skiPem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SKI_PEM"][normalizedSki];
    const cscaPemDEV = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$skiPem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SKI_PEM_DEV"][normalizedSki];
    let cscaPem = null;
    if (isSkiProvided) {
        cscaPem = skiPem[normalizedSki];
    } else {
        cscaPem = cscaPemDEV || cscaPemPROD;
    }
    if (!cscaPem) {
        console.log('\x1b[33m%s\x1b[0m', `[WRN] CSCA with SKI ${ski} not found`, 'isSkiProvided: ', isSkiProvided);
        throw new Error(`CSCA not found, authorityKeyIdentifier: ${ski}, isSkiProvided: ${isSkiProvided}`);
    }
    if (!cscaPem.includes('-----BEGIN CERTIFICATE-----')) {
        cscaPem = `-----BEGIN CERTIFICATE-----\n${cscaPem}\n-----END CERTIFICATE-----`;
    }
    return cscaPem;
}
async function getSKIPEM(environment) {
    const skiPemUrl = (environment === 'staging' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_URL_STAGING"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_URL"]) + '/ski-pem';
    console.log('Fetching SKI-PEM mapping from:', skiPemUrl);
    try {
        const response = await fetch(skiPemUrl);
        if (!response.ok) {
            throw new Error(`HTTP error fetching ${skiPemUrl}! status: ${response.status}`);
        }
        const responseText = await response.text();
        const jsonData = JSON.parse(responseText);
        if (!jsonData || typeof jsonData !== 'object' || !jsonData.data || typeof jsonData.data !== 'object') {
            console.error('Unexpected JSON structure received:', jsonData);
            throw new Error('Unexpected JSON structure received from SKI-PEM endpoint.');
        }
        console.log('Parsed SKI-PEM data received.');
        return jsonData.data;
    } catch (error) {
        console.error('Error fetching or parsing ski-pem:', error);
        throw new Error(`Failed to get SKIPEM: ${error instanceof Error ? error.message : String(error)}`);
    }
}
}}),
"[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/passports/passport_parsing/brutForceDscSignature.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "brutforceSignatureAlgorithmDsc": (()=>brutforceSignatureAlgorithmDsc),
    "getTBSHash": (()=>getTBSHash)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/constants/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$certificate_parsing$2f$elliptic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/certificate_parsing/elliptic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$asn1js$40$3$2e$0$2e$7$2f$node_modules$2f$asn1js$2f$build$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/asn1js@3.0.7/node_modules/asn1js/build/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$node$2d$forge$40$https$2b2b2b$codeload$2e$github$2e$com$2b$remicolin$2b$forge$2b$tar$2e$gz$2b$17a11a632dd0e50343b3b8393245a2696f78afbb$2f$node_modules$2f$node$2d$forge$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/node-forge@https+++codeload.github.com+remicolin+forge+tar.gz+17a11a632dd0e50343b3b8393245a2696f78afbb/node_modules/node-forge/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$certificate_parsing$2f$curves$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/certificate_parsing/curves.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pkijs$40$3$2e$4$2e$0$2f$node_modules$2f$pkijs$2f$build$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pkijs@3.4.0/node_modules/pkijs/build/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/hash.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
function brutforceSignatureAlgorithmDsc(dsc, csca) {
    if (csca.signatureAlgorithm === 'ecdsa') {
        const hashAlgorithm = brutforceHashAlgorithmDsc(dsc, csca, 'ecdsa');
        return {
            signatureAlgorithm: 'ecdsa',
            hashAlgorithm: hashAlgorithm,
            saltLength: 0
        };
    } else if (csca.signatureAlgorithm === 'rsa') {
        const hashAlgorithm = brutforceHashAlgorithmDsc(dsc, csca, 'rsa');
        if (hashAlgorithm) {
            return {
                signatureAlgorithm: 'rsa',
                hashAlgorithm: hashAlgorithm,
                saltLength: 0
            };
        }
    }
    //it's important to not put 'else if' statement here, because a rsapss signature can use rsa key certificate.
    for (const saltLength of __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saltLengths"]){
        const hashAlgorithm = brutforceHashAlgorithmDsc(dsc, csca, 'rsapss', saltLength);
        if (hashAlgorithm) {
            return {
                signatureAlgorithm: 'rsapss',
                hashAlgorithm: hashAlgorithm,
                saltLength: saltLength
            };
        }
    }
}
function brutforceHashAlgorithmDsc(dsc, csca, signatureAlgorithm, saltLength) {
    for (const hashFunction of __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hashAlgos"]){
        if (verifySignature(dsc, csca, signatureAlgorithm, hashFunction, saltLength)) {
            // console.log(`✓ Success with hash function: ${hashFunction}, signatureAlgorithm: ${signatureAlgorithm}, saltLength: ${saltLength}`);
            return hashFunction;
        }
    // console.log(`✗ Failed with hash function: ${hashFunction}, signatureAlgorithm: ${signatureAlgorithm}, saltLength: ${saltLength}`);
    }
    return false;
}
function verifySignature(dsc, csca, signatureAlgorithm, hashAlgorithm, saltLength = 0) {
    switch(signatureAlgorithm){
        case 'ecdsa':
            return verifyECDSA(dsc, csca, hashAlgorithm);
        case 'rsa':
            return verifyRSA(dsc, csca, hashAlgorithm);
        case 'rsapss':
            return verifyRSAPSS(dsc, csca, hashAlgorithm, saltLength);
    }
}
function verifyECDSA(dsc, csca, hashAlgorithm) {
    const elliptic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$certificate_parsing$2f$elliptic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initElliptic"])();
    const certBuffer_csca = Buffer.from(csca.rawPem.replace(/(-----(BEGIN|END) CERTIFICATE-----|\n)/g, ''), 'base64');
    const asn1Data_csca = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$asn1js$40$3$2e$0$2e$7$2f$node_modules$2f$asn1js$2f$build$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromBER"])(certBuffer_csca);
    const cert_csca = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pkijs$40$3$2e$4$2e$0$2f$node_modules$2f$pkijs$2f$build$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Certificate"]({
        schema: asn1Data_csca.result
    });
    const publicKeyInfo_csca = cert_csca.subjectPublicKeyInfo;
    const publicKeyBuffer_csca = publicKeyInfo_csca.subjectPublicKey.valueBlock.valueHexView;
    const curveForElliptic_csca = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$certificate_parsing$2f$curves$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCurveForElliptic"])(csca.publicKeyDetails.curve);
    const ec_csca = new elliptic.ec(curveForElliptic_csca);
    const key_csca = ec_csca.keyFromPublic(publicKeyBuffer_csca);
    const tbsHash = getTBSHash(dsc.rawPem, hashAlgorithm, 'hex');
    const certBuffer_dsc = Buffer.from(dsc.rawPem.replace(/(-----(BEGIN|END) CERTIFICATE-----|\n)/g, ''), 'base64');
    const asn1Data_dsc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$asn1js$40$3$2e$0$2e$7$2f$node_modules$2f$asn1js$2f$build$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromBER"])(certBuffer_dsc);
    const cert_dsc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pkijs$40$3$2e$4$2e$0$2f$node_modules$2f$pkijs$2f$build$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Certificate"]({
        schema: asn1Data_dsc.result
    });
    const signatureValue = cert_dsc.signatureValue.valueBlock.valueHexView;
    const signature_crypto = Buffer.from(signatureValue).toString('hex');
    return key_csca.verify(tbsHash, signature_crypto);
}
function verifyRSA(dsc, csca, hashAlgorithm) {
    try {
        const cscaCert = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$node$2d$forge$40$https$2b2b2b$codeload$2e$github$2e$com$2b$remicolin$2b$forge$2b$tar$2e$gz$2b$17a11a632dd0e50343b3b8393245a2696f78afbb$2f$node_modules$2f$node$2d$forge$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pki"].certificateFromPem(csca.rawPem);
        const tbsHash = getTBSHash(dsc.rawPem, hashAlgorithm);
        if (!tbsHash) {
            return false;
        }
        const publicKey = cscaCert.publicKey;
        const certBuffer_dsc = Buffer.from(dsc.rawPem.replace(/(-----(BEGIN|END) CERTIFICATE-----|\n)/g, ''), 'base64');
        const asn1Data_dsc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$asn1js$40$3$2e$0$2e$7$2f$node_modules$2f$asn1js$2f$build$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromBER"])(certBuffer_dsc);
        const cert_dsc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pkijs$40$3$2e$4$2e$0$2f$node_modules$2f$pkijs$2f$build$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Certificate"]({
            schema: asn1Data_dsc.result
        });
        const signatureValue = cert_dsc.signatureValue.valueBlock.valueHexView;
        const signature = Buffer.from(signatureValue).toString('binary');
        try {
            const verified = publicKey.verify(tbsHash, signature);
            return verified;
        } catch (verifyError) {
            return false;
        }
    } catch (error) {
        return false;
    }
}
function verifyRSAPSS(dsc, csca, hashAlgorithm, saltLength) {
    try {
        const dscCert = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$node$2d$forge$40$https$2b2b2b$codeload$2e$github$2e$com$2b$remicolin$2b$forge$2b$tar$2e$gz$2b$17a11a632dd0e50343b3b8393245a2696f78afbb$2f$node_modules$2f$node$2d$forge$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pki"].certificateFromPem(dsc.rawPem);
        const cscaCert = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$node$2d$forge$40$https$2b2b2b$codeload$2e$github$2e$com$2b$remicolin$2b$forge$2b$tar$2e$gz$2b$17a11a632dd0e50343b3b8393245a2696f78afbb$2f$node_modules$2f$node$2d$forge$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pki"].certificateFromPem(csca.rawPem);
        const tbsHash = getTBSHash(dsc.rawPem, hashAlgorithm);
        if (!tbsHash) {
            return false;
        }
        const publicKey = cscaCert.publicKey;
        const signature = dscCert.signature;
        if (saltLength === 0) {
            throw new Error('Salt length is required for RSA-PSS');
        }
        try {
            const pss = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$node$2d$forge$40$https$2b2b2b$codeload$2e$github$2e$com$2b$remicolin$2b$forge$2b$tar$2e$gz$2b$17a11a632dd0e50343b3b8393245a2696f78afbb$2f$node_modules$2f$node$2d$forge$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pss"].create({
                md: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$node$2d$forge$40$https$2b2b2b$codeload$2e$github$2e$com$2b$remicolin$2b$forge$2b$tar$2e$gz$2b$17a11a632dd0e50343b3b8393245a2696f78afbb$2f$node_modules$2f$node$2d$forge$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["md"][hashAlgorithm].create(),
                mgf: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$node$2d$forge$40$https$2b2b2b$codeload$2e$github$2e$com$2b$remicolin$2b$forge$2b$tar$2e$gz$2b$17a11a632dd0e50343b3b8393245a2696f78afbb$2f$node_modules$2f$node$2d$forge$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mgf"].mgf1.create(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$node$2d$forge$40$https$2b2b2b$codeload$2e$github$2e$com$2b$remicolin$2b$forge$2b$tar$2e$gz$2b$17a11a632dd0e50343b3b8393245a2696f78afbb$2f$node_modules$2f$node$2d$forge$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["md"][hashAlgorithm].create()),
                saltLength: saltLength
            });
            return publicKey.verify(tbsHash, signature, pss);
        } catch (verifyError) {
            return false;
        }
    } catch (error) {
        return false;
    }
}
function getTBSHash(pem, hashFunction, format = 'data') {
    const certBuffer = Buffer.from(pem.replace(/(-----(BEGIN|END) CERTIFICATE-----|\n)/g, ''), 'base64');
    const asn1Data_cert = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$asn1js$40$3$2e$0$2e$7$2f$node_modules$2f$asn1js$2f$build$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromBER"])(certBuffer);
    const cert = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pkijs$40$3$2e$4$2e$0$2f$node_modules$2f$pkijs$2f$build$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Certificate"]({
        schema: asn1Data_cert.result
    });
    const tbsAsn1 = cert.encodeTBS();
    const tbsDer = tbsAsn1.toBER(false);
    const tbsBytes = Buffer.from(tbsDer);
    const tbsBytesArray = Array.from(tbsBytes);
    const msgHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hash"])(hashFunction, tbsBytesArray, format === 'hex' ? 'hex' : 'binary');
    return msgHash;
}
}}),
"[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/arrays.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "arraysAreEqual": (()=>arraysAreEqual),
    "findSubarrayIndex": (()=>findSubarrayIndex)
});
function arraysAreEqual(array1, array2) {
    return array1.length === array2.length && array1.every((value, index)=>value === array2[index]);
}
function findSubarrayIndex(arr, subArr) {
    if (!arr || !Array.isArray(arr) || !subArr || !Array.isArray(subArr)) {
        console.warn('Invalid input to findSubarrayIndex:', {
            arr,
            subArr
        });
        return -1;
    }
    if (subArr.length === 0) {
        return -1;
    }
    if (subArr.length > arr.length) {
        return -1;
    }
    return arr.findIndex((_, i)=>subArr.every((val, j)=>arr[i + j] === val));
}
}}),
"[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/passports/passport_parsing/brutForcePassportSignature.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "brutforceSignatureAlgorithm": (()=>brutforceSignatureAlgorithm),
    "verifySignature": (()=>verifySignature)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$certificate_parsing$2f$parseCertificateSimple$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/certificate_parsing/parseCertificateSimple.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$node$2d$forge$40$https$2b2b2b$codeload$2e$github$2e$com$2b$remicolin$2b$forge$2b$tar$2e$gz$2b$17a11a632dd0e50343b3b8393245a2696f78afbb$2f$node_modules$2f$node$2d$forge$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/node-forge@https+++codeload.github.com+remicolin+forge+tar.gz+17a11a632dd0e50343b3b8393245a2696f78afbb/node_modules/node-forge/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$asn1js$40$3$2e$0$2e$7$2f$node_modules$2f$asn1js$2f$build$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/asn1js@3.0.7/node_modules/asn1js/build/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$certificate_parsing$2f$elliptic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/certificate_parsing/elliptic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$certificate_parsing$2f$curves$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/certificate_parsing/curves.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pkijs$40$3$2e$4$2e$0$2f$node_modules$2f$pkijs$2f$build$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pkijs@3.4.0/node_modules/pkijs/build/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/constants/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/hash.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
function brutforceSignatureAlgorithm(passportData) {
    const parsedDsc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$certificate_parsing$2f$parseCertificateSimple$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseCertificateSimple"])(passportData.dsc);
    if (parsedDsc.signatureAlgorithm === 'ecdsa') {
        const hashAlgorithm = brutforceHashAlgorithm(passportData, 'ecdsa');
        return {
            signatureAlgorithm: 'ecdsa',
            hashAlgorithm: hashAlgorithm,
            saltLength: 0
        };
    } else if (parsedDsc.signatureAlgorithm === 'rsa') {
        const hashAlgorithm = brutforceHashAlgorithm(passportData, 'rsa');
        if (hashAlgorithm) {
            return {
                signatureAlgorithm: 'rsa',
                hashAlgorithm: hashAlgorithm,
                saltLength: 0
            };
        }
    }
    // it's important to not put 'else if' statement here, because a rsapss signature can use rsa key certificate.
    for (const saltLength of __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saltLengths"]){
        const hashAlgorithm = brutforceHashAlgorithm(passportData, 'rsapss', saltLength);
        if (hashAlgorithm) {
            return {
                signatureAlgorithm: 'rsapss',
                hashAlgorithm: hashAlgorithm,
                saltLength: saltLength
            };
        }
    }
}
function brutforceHashAlgorithm(passportData, signatureAlgorithm, saltLength) {
    for (const hashFunction of __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hashAlgos"]){
        if (verifySignature(passportData, signatureAlgorithm, hashFunction, saltLength)) {
            return hashFunction;
        }
    }
    return false;
}
function verifySignature(passportData, signatureAlgorithm, hashAlgorithm, saltLength = 0) {
    switch(signatureAlgorithm){
        case 'ecdsa':
            return verifyECDSA(passportData, hashAlgorithm);
        case 'rsa':
            return verifyRSA(passportData, hashAlgorithm);
        case 'rsapss':
            return verifyRSAPSS(passportData, hashAlgorithm, saltLength);
    }
}
function verifyECDSA(passportData, hashAlgorithm) {
    const elliptic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$certificate_parsing$2f$elliptic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initElliptic"])();
    const { dsc, signedAttr, encryptedDigest } = passportData;
    const { publicKeyDetails } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$certificate_parsing$2f$parseCertificateSimple$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseCertificateSimple"])(dsc);
    const certBuffer = Buffer.from(dsc.replace(/(-----(BEGIN|END) CERTIFICATE-----|\n)/g, ''), 'base64');
    const asn1Data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$asn1js$40$3$2e$0$2e$7$2f$node_modules$2f$asn1js$2f$build$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromBER"])(certBuffer);
    const cert = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pkijs$40$3$2e$4$2e$0$2f$node_modules$2f$pkijs$2f$build$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Certificate"]({
        schema: asn1Data.result
    });
    const publicKeyInfo = cert.subjectPublicKeyInfo;
    const publicKeyBuffer = publicKeyInfo.subjectPublicKey.valueBlock.valueHexView;
    const curveForElliptic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$certificate_parsing$2f$curves$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCurveForElliptic"])(publicKeyDetails.curve);
    const ec = new elliptic.ec(curveForElliptic);
    const key = ec.keyFromPublic(publicKeyBuffer);
    const msgHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hash"])(hashAlgorithm, signedAttr, 'hex');
    const signature_crypto = Buffer.from(encryptedDigest).toString('hex');
    return key.verify(msgHash, signature_crypto);
}
function verifyRSA(passportData, hashAlgorithm) {
    const { dsc, signedAttr, encryptedDigest } = passportData;
    const cert = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$node$2d$forge$40$https$2b2b2b$codeload$2e$github$2e$com$2b$remicolin$2b$forge$2b$tar$2e$gz$2b$17a11a632dd0e50343b3b8393245a2696f78afbb$2f$node_modules$2f$node$2d$forge$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].pki.certificateFromPem(dsc);
    const publicKey = cert.publicKey;
    const msgHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hash"])(hashAlgorithm, signedAttr, 'binary');
    const signature = Buffer.from(encryptedDigest).toString('binary');
    try {
        return publicKey.verify(msgHash, signature);
    } catch (error) {
        return false;
    }
}
function verifyRSAPSS(passportData, hashAlgorithm, saltLength) {
    const { dsc, signedAttr, encryptedDigest } = passportData;
    const cert = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$node$2d$forge$40$https$2b2b2b$codeload$2e$github$2e$com$2b$remicolin$2b$forge$2b$tar$2e$gz$2b$17a11a632dd0e50343b3b8393245a2696f78afbb$2f$node_modules$2f$node$2d$forge$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].pki.certificateFromPem(dsc);
    const publicKey = cert.publicKey;
    const msgHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hash"])(hashAlgorithm, signedAttr, 'binary');
    const signature = Buffer.from(encryptedDigest).toString('binary');
    if (saltLength === 0) {
        throw new Error('Salt length is required for RSA-PSS');
    }
    try {
        const pss = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$node$2d$forge$40$https$2b2b2b$codeload$2e$github$2e$com$2b$remicolin$2b$forge$2b$tar$2e$gz$2b$17a11a632dd0e50343b3b8393245a2696f78afbb$2f$node_modules$2f$node$2d$forge$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].pss.create({
            md: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$node$2d$forge$40$https$2b2b2b$codeload$2e$github$2e$com$2b$remicolin$2b$forge$2b$tar$2e$gz$2b$17a11a632dd0e50343b3b8393245a2696f78afbb$2f$node_modules$2f$node$2d$forge$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].md[hashAlgorithm].create(),
            mgf: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$node$2d$forge$40$https$2b2b2b$codeload$2e$github$2e$com$2b$remicolin$2b$forge$2b$tar$2e$gz$2b$17a11a632dd0e50343b3b8393245a2696f78afbb$2f$node_modules$2f$node$2d$forge$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].mgf.mgf1.create(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$node$2d$forge$40$https$2b2b2b$codeload$2e$github$2e$com$2b$remicolin$2b$forge$2b$tar$2e$gz$2b$17a11a632dd0e50343b3b8393245a2696f78afbb$2f$node_modules$2f$node$2d$forge$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].md[hashAlgorithm].create()),
            saltLength: saltLength
        });
        return publicKey.verify(msgHash, signature, pss);
    } catch (error) {
        return false;
    }
}
}}),
"[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/passports/passport_parsing/parsePassportData.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getCountryCodeFromMrz": (()=>getCountryCodeFromMrz),
    "getCurveOrExponent": (()=>getCurveOrExponent),
    "parsePassportData": (()=>parsePassportData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/constants/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$arrays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/arrays.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$certificate_parsing$2f$parseCertificateSimple$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/certificate_parsing/parseCertificateSimple.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/hash.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/passports/format.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$passport_parsing$2f$brutForcePassportSignature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/passports/passport_parsing/brutForcePassportSignature.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$passport_parsing$2f$parseDscCertificateData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/passports/passport_parsing/parseDscCertificateData.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
function findHashSizeOfEContent(eContent, signedAttr) {
    for (const hashFunction of __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hashAlgos"]){
        const hashValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hash"])(hashFunction, eContent);
        const hashOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$arrays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSubarrayIndex"])(signedAttr, hashValue);
        if (hashOffset !== -1) {
            return {
                hashFunction,
                offset: hashOffset
            };
        }
    }
    return {
        hashFunction: 'unknown',
        offset: -1
    };
}
function findDG1HashInEContent(mrz, eContent) {
    const formattedMrz = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatMrz"])(mrz);
    for (const hashFunction of __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hashAlgos"]){
        const hashValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hash"])(hashFunction, formattedMrz);
        const normalizedHash = hashValue.map((byte)=>byte > 127 ? byte - 256 : byte);
        const hashOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$arrays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSubarrayIndex"])(eContent, normalizedHash);
        if (hashOffset !== -1) {
            return {
                hash: hashValue,
                hashFunction,
                offset: hashOffset
            };
        }
    }
    return null;
}
function getDgPaddingBytes(passportData, dg1HashFunction) {
    const formattedMrz = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatMrz"])(passportData.mrz);
    const hashValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hash"])(dg1HashFunction, formattedMrz);
    const normalizedHash = hashValue.map((byte)=>byte > 127 ? byte - 256 : byte);
    const dg1HashOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$arrays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSubarrayIndex"])(passportData.eContent, normalizedHash);
    const dg2Hash = passportData.dg2Hash;
    const normalizedDg2Hash = dg2Hash.map((byte)=>byte > 127 ? byte - 256 : byte);
    const dg2HashOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$arrays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSubarrayIndex"])(passportData.eContent, normalizedDg2Hash);
    return dg2HashOffset - dg1HashOffset - (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getHashLen"])(dg1HashFunction);
}
function getCountryCodeFromMrz(mrz) {
    return mrz.substring(2, 5);
}
function getCurveOrExponent(certData) {
    if (certData.signatureAlgorithm === 'rsapss' || certData.signatureAlgorithm === 'rsa') {
        return certData.publicKeyDetails.exponent;
    }
    return certData.publicKeyDetails.curve;
}
function parsePassportData(passportData, skiPem = null) {
    const dg1HashInfo = passportData.mrz ? findDG1HashInEContent(passportData.mrz, passportData.eContent) : null;
    const dg1HashFunction = dg1HashInfo?.hashFunction || 'unknown';
    const dg1HashOffset = dg1HashInfo?.offset || 0;
    let dgPaddingBytes = -1;
    try {
        dgPaddingBytes = getDgPaddingBytes(passportData, dg1HashFunction);
    } catch (error) {
        console.error('Error getting DG padding bytes:', error);
    }
    const { hashFunction: eContentHashFunction, offset: eContentHashOffset } = findHashSizeOfEContent(passportData.eContent, passportData.signedAttr);
    const brutForcedPublicKeyDetails = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$passport_parsing$2f$brutForcePassportSignature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brutforceSignatureAlgorithm"])(passportData);
    let parsedDsc = null;
    let dscSignatureAlgorithmBits = 0;
    let dscMetaData;
    if (passportData.dsc) {
        parsedDsc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$certificate_parsing$2f$parseCertificateSimple$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseCertificateSimple"])(passportData.dsc);
        dscSignatureAlgorithmBits = parseInt(parsedDsc.publicKeyDetails?.bits || '0');
        dscMetaData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$passport_parsing$2f$parseDscCertificateData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseDscCertificateData"])(parsedDsc, skiPem);
    }
    return {
        dataGroups: passportData.dgPresents?.toString().split(',').map((item)=>item.replace('DG', '')).join(',') || 'None',
        dg1Size: passportData.mrz ? passportData.mrz.length : 0,
        dg1HashSize: passportData.dg1Hash ? passportData.dg1Hash.length : 0,
        dg1HashFunction,
        dg1HashOffset,
        dgPaddingBytes,
        eContentSize: passportData.eContent?.length || 0,
        eContentHashFunction,
        eContentHashOffset,
        signedAttrSize: passportData.signedAttr?.length || 0,
        signedAttrHashFunction: brutForcedPublicKeyDetails.hashAlgorithm,
        signatureAlgorithm: brutForcedPublicKeyDetails.signatureAlgorithm,
        saltLength: brutForcedPublicKeyDetails.saltLength,
        curveOrExponent: parsedDsc ? getCurveOrExponent(parsedDsc) : 'unknown',
        signatureAlgorithmBits: dscSignatureAlgorithmBits,
        countryCode: passportData.mrz ? getCountryCodeFromMrz(passportData.mrz) : 'unknown',
        cscaFound: dscMetaData.cscaFound,
        cscaHashFunction: dscMetaData.cscaHashAlgorithm,
        cscaSignatureAlgorithm: dscMetaData.cscaSignatureAlgorithm,
        cscaSaltLength: dscMetaData.cscaSaltLength,
        cscaCurveOrExponent: dscMetaData.cscaCurveOrExponent,
        cscaSignatureAlgorithmBits: dscMetaData.cscaSignatureAlgorithmBits,
        dsc: passportData.dsc,
        csca: dscMetaData?.csca || ''
    };
}
}}),
"[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/passports/passport_parsing/parseDscCertificateData.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "parseDscCertificateData": (()=>parseDscCertificateData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$certificate_parsing$2f$parseCertificateSimple$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/certificate_parsing/parseCertificateSimple.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$csca$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/csca.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$passport_parsing$2f$brutForceDscSignature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/passports/passport_parsing/brutForceDscSignature.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$passport_parsing$2f$parsePassportData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/passports/passport_parsing/parsePassportData.js [app-ssr] (ecmascript)");
;
;
;
;
function parseDscCertificateData(dscCert, skiPem = null) {
    let csca, cscaParsed, cscaHashAlgorithm, cscaSignatureAlgorithm, cscaCurveOrExponent, cscaSignatureAlgorithmBits, cscaSaltLength;
    let cscaFound = false;
    if (dscCert.authorityKeyIdentifier) {
        try {
            csca = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$csca$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCSCAFromSKI"])(dscCert.authorityKeyIdentifier, skiPem);
            if (csca) {
                cscaParsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$certificate_parsing$2f$parseCertificateSimple$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseCertificateSimple"])(csca);
                const details = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$passport_parsing$2f$brutForceDscSignature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brutforceSignatureAlgorithmDsc"])(dscCert, cscaParsed);
                cscaFound = true;
                cscaHashAlgorithm = details.hashAlgorithm;
                cscaSignatureAlgorithm = details.signatureAlgorithm;
                cscaCurveOrExponent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$passport_parsing$2f$parsePassportData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCurveOrExponent"])(cscaParsed);
                cscaSignatureAlgorithmBits = parseInt(cscaParsed.publicKeyDetails.bits);
                cscaSaltLength = details.saltLength;
            }
        } catch (error) {}
    } else {
        console.log('js: dscCert.authorityKeyIdentifier not found');
    }
    return {
        cscaFound: cscaFound,
        cscaHashAlgorithm: cscaHashAlgorithm,
        cscaSignatureAlgorithm: cscaSignatureAlgorithm,
        cscaCurveOrExponent: cscaCurveOrExponent,
        cscaSignatureAlgorithmBits: cscaSignatureAlgorithmBits,
        cscaSaltLength: cscaSaltLength,
        csca: csca,
        cscaParsed: cscaParsed,
        cscaBits: cscaSignatureAlgorithmBits
    };
}
}}),
"[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/trees.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "buildSMT": (()=>buildSMT),
    "formatRoot": (()=>formatRoot),
    "generateMerkleProof": (()=>generateMerkleProof),
    "generateSMTProof": (()=>generateSMTProof),
    "getCountryLeaf": (()=>getCountryLeaf),
    "getCscaTreeInclusionProof": (()=>getCscaTreeInclusionProof),
    "getCscaTreeRoot": (()=>getCscaTreeRoot),
    "getDobLeaf": (()=>getDobLeaf),
    "getDscTreeInclusionProof": (()=>getDscTreeInclusionProof),
    "getLeaf": (()=>getLeaf),
    "getLeafCscaTree": (()=>getLeafCscaTree),
    "getLeafDscTree": (()=>getLeafDscTree),
    "getLeafDscTreeFromDscCertificateMetadata": (()=>getLeafDscTreeFromDscCertificateMetadata),
    "getLeafDscTreeFromParsedDsc": (()=>getLeafDscTreeFromParsedDsc),
    "getNameDobLeaf": (()=>getNameDobLeaf),
    "getNameLeaf": (()=>getNameLeaf),
    "getNameYobLeaf": (()=>getNameYobLeaf),
    "getPassportNumberAndNationalityLeaf": (()=>getPassportNumberAndNationalityLeaf)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openpassport$2b$zk$2d$kit$2d$imt$40$0$2e$0$2e$5$2f$node_modules$2f40$openpassport$2f$zk$2d$kit$2d$imt$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openpassport+zk-kit-imt@0.0.5/node_modules/@openpassport/zk-kit-imt/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openpassport$2b$zk$2d$kit$2d$lean$2d$imt$40$0$2e$0$2e$6$2f$node_modules$2f40$openpassport$2f$zk$2d$kit$2d$lean$2d$imt$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openpassport+zk-kit-lean-imt@0.0.6/node_modules/@openpassport/zk-kit-lean-imt/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openpassport$2b$zk$2d$kit$2d$smt$40$0$2e$0$2e$1$2f$node_modules$2f40$openpassport$2f$zk$2d$kit$2d$smt$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@openpassport+zk-kit-smt@0.0.1/node_modules/@openpassport/zk-kit-smt/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$i18n$2d$iso$2d$countries$40$7$2e$14$2e$0$2f$node_modules$2f$i18n$2d$iso$2d$countries$2f$entry$2d$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/i18n-iso-countries@7.14.0/node_modules/i18n-iso-countries/entry-node.js [app-ssr] (ecmascript)");
// @ts-ignore
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$i18n$2d$iso$2d$countries$40$7$2e$14$2e$0$2f$node_modules$2f$i18n$2d$iso$2d$countries$2f$langs$2f$en$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/i18n-iso-countries@7.14.0/node_modules/i18n-iso-countries/langs/en.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$poseidon$2d$lite$40$0$2e$2$2e$1$2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/poseidon-lite@0.2.1/node_modules/poseidon-lite/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$certificate_parsing$2f$parseCertificateSimple$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/certificate_parsing/parseCertificateSimple.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/constants/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$circuits$2f$uuid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/circuits/uuid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/hash.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$passport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/passports/passport.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$passport_parsing$2f$parseDscCertificateData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/passports/passport_parsing/parseDscCertificateData.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
// SideEffect here
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$i18n$2d$iso$2d$countries$40$7$2e$14$2e$0$2f$node_modules$2f$i18n$2d$iso$2d$countries$2f$entry$2d$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].registerLocale(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$i18n$2d$iso$2d$countries$40$7$2e$14$2e$0$2f$node_modules$2f$i18n$2d$iso$2d$countries$2f$langs$2f$en$2e$json__$28$json$29$__["default"]);
function getLeaf(parsed, type) {
    if (type === 'dsc') {
        // for now, we pad it for sha
        const tbsArray = Object.keys(parsed.tbsBytes).map((key)=>parsed.tbsBytes[key]);
        const [paddedTbsBytes, tbsBytesPaddedLength] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$passport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pad"])(parsed.hashAlgorithm)(tbsArray, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["max_dsc_bytes"]);
        const dsc_hash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["packBytesAndPoseidon"])(Array.from(paddedTbsBytes));
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$poseidon$2d$lite$40$0$2e$2$2e$1$2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["poseidon2"])([
            dsc_hash,
            tbsArray.length
        ]).toString();
    } else {
        const tbsBytesArray = Array.from(parsed.tbsBytes);
        const paddedTbsBytesArray = tbsBytesArray.concat(new Array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["max_csca_bytes"] - tbsBytesArray.length).fill(0));
        const csca_hash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["packBytesAndPoseidon"])(paddedTbsBytesArray);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$poseidon$2d$lite$40$0$2e$2$2e$1$2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["poseidon2"])([
            csca_hash,
            tbsBytesArray.length
        ]).toString();
    }
}
function getLeafDscTreeFromDscCertificateMetadata(dscParsed, dscMetaData) {
    // TODO: WRONG  change this function using raw dsc and hashfunctions from passportMetadata
    const cscaParsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$certificate_parsing$2f$parseCertificateSimple$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseCertificateSimple"])(dscMetaData.csca);
    return getLeafDscTree(dscParsed, cscaParsed);
}
function getLeafDscTreeFromParsedDsc(dscParsed) {
    return getLeafDscTreeFromDscCertificateMetadata(dscParsed, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$passport_parsing$2f$parseDscCertificateData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseDscCertificateData"])(dscParsed));
}
function getLeafDscTree(dsc_parsed, csca_parsed) {
    const dscLeaf = getLeaf(dsc_parsed, 'dsc');
    const cscaLeaf = getLeaf(csca_parsed, 'csca');
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$poseidon$2d$lite$40$0$2e$2$2e$1$2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["poseidon2"])([
        dscLeaf,
        cscaLeaf
    ]).toString();
}
function getLeafCscaTree(csca_parsed) {
    return getLeaf(csca_parsed, 'csca');
}
function getDscTreeInclusionProof(leaf, serialized_dsc_tree) {
    const hashFunction = (a, b)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$poseidon$2d$lite$40$0$2e$2$2e$1$2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["poseidon2"])([
            a,
            b
        ]);
    const tree = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openpassport$2b$zk$2d$kit$2d$lean$2d$imt$40$0$2e$0$2e$6$2f$node_modules$2f40$openpassport$2f$zk$2d$kit$2d$lean$2d$imt$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LeanIMT"].import(hashFunction, serialized_dsc_tree);
    const index = tree.indexOf(BigInt(leaf));
    if (index === -1) {
        throw new Error('Your public key was not found in the registry');
    }
    const { siblings, path, leaf_depth } = generateMerkleProof(tree, index, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DSC_TREE_DEPTH"]);
    return [
        tree.root,
        path,
        siblings,
        leaf_depth
    ];
}
function getCscaTreeInclusionProof(leaf, _serialized_csca_tree) {
    let tree = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openpassport$2b$zk$2d$kit$2d$imt$40$0$2e$0$2e$5$2f$node_modules$2f40$openpassport$2f$zk$2d$kit$2d$imt$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IMT"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$poseidon$2d$lite$40$0$2e$2$2e$1$2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["poseidon2"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CSCA_TREE_DEPTH"], 0, 2);
    tree.setNodes(_serialized_csca_tree);
    const index = tree.indexOf(leaf);
    if (index === -1) {
        throw new Error('Your public key was not found in the registry');
    }
    const proof = tree.createProof(index);
    return [
        tree.root,
        proof.pathIndices.map((index)=>index.toString()),
        proof.siblings.flat().map((sibling)=>sibling.toString())
    ];
}
function getCscaTreeRoot(serialized_csca_tree) {
    let tree = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openpassport$2b$zk$2d$kit$2d$imt$40$0$2e$0$2e$5$2f$node_modules$2f40$openpassport$2f$zk$2d$kit$2d$imt$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IMT"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$poseidon$2d$lite$40$0$2e$2$2e$1$2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["poseidon2"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CSCA_TREE_DEPTH"], 0, 2);
    tree.setNodes(serialized_csca_tree);
    return tree.root;
}
function formatRoot(root) {
    let rootHex = BigInt(root).toString(16);
    return rootHex.length % 2 === 0 ? '0x' + rootHex : '0x0' + rootHex;
}
function generateSMTProof(smt, leaf) {
    const { entry, matchingEntry, siblings, root, membership } = smt.createProof(leaf);
    const leaf_depth = siblings.length;
    let closestleaf;
    if (!matchingEntry) {
        // we got the 0 leaf or membership
        // then check if entry[1] exists
        if (!entry[1]) {
            // non membership proof
            closestleaf = BigInt(0); // 0 leaf
        } else {
            closestleaf = BigInt(entry[0]); // leaf itself (memb proof)
        }
    } else {
        // non membership proof
        closestleaf = BigInt(matchingEntry[0]); // actual closest
    }
    // PATH, SIBLINGS manipulation as per binary tree in the circuit
    siblings.reverse();
    while(siblings.length < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OFAC_TREE_LEVELS"])siblings.push(BigInt(0));
    // ----- Useful for debugging hence leaving as comments -----
    // const binary = entry[0].toString(2)
    // const bits = binary.slice(-leaf_depth);
    // let indices = bits.padEnd(256, "0").split("").map(Number)
    // const pathToMatch = num2Bits(256,BigInt(entry[0]))
    // while(indices.length < 256) indices.push(0);
    // // CALCULATED ROOT FOR TESTING
    // // closestleaf, leaf_depth, siblings, indices, root : needed
    // let calculatedNode = poseidon3([closestleaf,1,1]);
    // console.log("Initial node while calculating",calculatedNode)
    // console.log(smt.verifyProof(smt.createProof(leaf)))
    // for (let i= 0; i < leaf_depth ; i++) {
    //   const childNodes: any = indices[i] ? [siblings[i], calculatedNode] : [calculatedNode, siblings[i]]
    //   console.log(indices[i],childNodes)
    //   calculatedNode = poseidon2(childNodes)
    // }
    // console.log("Actual node", root)
    // console.log("calculated node", calculatedNode)
    // -----------------------------------------------------------
    return {
        root,
        leaf_depth,
        closestleaf,
        siblings
    };
}
function generateMerkleProof(imt, _index, maxleaf_depth) {
    const { siblings: siblings, index } = imt.generateProof(_index);
    const leaf_depth = siblings.length;
    // The index must be converted to a list of indices, 1 for each tree level.
    // The circuit tree leaf_depth is 20, so the number of siblings must be 20, even if
    // the tree leaf_depth is actually 3. The missing siblings can be set to 0, as they
    // won't be used to calculate the root in the circuit.
    const path = [];
    for(let i = 0; i < maxleaf_depth; i += 1){
        path.push(index >> i & 1);
        if (siblings[i] === undefined) {
            siblings[i] = BigInt(0);
        }
    }
    return {
        siblings,
        path,
        leaf_depth
    };
}
function buildSMT(field, treetype) {
    let count = 0;
    let startTime = performance.now();
    const hash2 = (childNodes)=>childNodes.length === 2 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$poseidon$2d$lite$40$0$2e$2$2e$1$2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["poseidon2"])(childNodes) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$poseidon$2d$lite$40$0$2e$2$2e$1$2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["poseidon3"])(childNodes);
    const tree = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$openpassport$2b$zk$2d$kit$2d$smt$40$0$2e$0$2e$1$2f$node_modules$2f40$openpassport$2f$zk$2d$kit$2d$smt$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SMT"](hash2, true);
    for(let i = 0; i < field.length; i++){
        const entry = field[i];
        // Optimization: Log progress less frequently
        if (i !== 0 && i % 100 === 0) {
            console.log('Processing', treetype, 'number', i, 'out of', field.length);
        }
        let leaf = BigInt(0);
        // Determine document type based on treetype for name processing
        let docType = 'passport'; // Default to passport
        if (treetype.endsWith('_id_card')) {
            docType = 'id_card';
        }
        if (treetype == 'passport_no_and_nationality') {
            leaf = processPassportNoAndNationality(entry.Pass_No, entry.Pass_Country, i);
        } else if (treetype == 'name_and_dob') {
            leaf = processNameAndDob(entry, i, 'passport'); // Explicitly passport
        } else if (treetype == 'name_and_yob') {
            leaf = processNameAndYob(entry, i, 'passport'); // Explicitly passport
        } else if (treetype == 'name_and_dob_id_card') {
            // New ID card type
            leaf = processNameAndDob(entry, i, 'id_card');
        } else if (treetype == 'name_and_yob_id_card') {
            // New ID card type
            leaf = processNameAndYob(entry, i, 'id_card');
        } else if (treetype == 'country') {
            const keys = Object.keys(entry);
            leaf = processCountry(keys[0], entry[keys[0]], i);
        }
        if (leaf == BigInt(0)) {
            continue;
        }
        // Check for duplicates *after* processing, as different inputs might yield the same hash
        if (tree.createProof(leaf).membership) {
            continue;
        }
        count += 1;
        tree.add(leaf, BigInt(1));
    }
    console.log('Total', treetype, 'entries added:', count, 'out of', field.length);
    console.log(treetype, 'tree built in', (performance.now() - startTime).toFixed(2), 'ms');
    return [
        count,
        performance.now() - startTime,
        tree
    ];
}
function processPassportNoAndNationality(passno, nationality, index) {
    if (passno.length > 9) {
        console.log('passport number length is greater than 9:', index, passno);
    } else if (passno.length < 9) {
        while(passno.length != 9){
            passno += '<';
        }
    }
    const countryCode = getCountryCode(nationality);
    if (!countryCode) {
        console.log('Error getting country code', index, nationality);
        return BigInt(0);
    }
    console.log('nationality and countryCode', nationality, countryCode);
    const leaf = getPassportNumberAndNationalityLeaf((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$circuits$2f$uuid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringToAsciiBigIntArray"])(passno), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$circuits$2f$uuid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringToAsciiBigIntArray"])(countryCode), index);
    if (!leaf) {
        console.log('Error creating leaf value', index, passno, nationality);
        return BigInt(0);
    }
    return leaf;
}
// this is a temporary workaround for some of the country name,
// will be removed once we parse the OFAC list better, starting from the XML file.
const normalizeCountryName = (country)=>{
    const mapping = {
        palestinian: 'Palestine',
        'korea, north': 'North Korea',
        'korea, south': 'Korea, Republic of',
        'united kingdom': 'United Kingdom',
        syria: 'Syrian Arab Republic',
        burma: 'Myanmar',
        'cabo verde': 'Cape Verde',
        'congo, democratic republic of the': 'Democratic Republic of the Congo',
        macau: 'Macao'
    };
    return mapping[country.toLowerCase()] || country;
};
const getCountryCode = (countryName)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$i18n$2d$iso$2d$countries$40$7$2e$14$2e$0$2f$node_modules$2f$i18n$2d$iso$2d$countries$2f$entry$2d$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getAlpha3Code(normalizeCountryName(countryName), 'en');
};
function generateSmallKey(input) {
    return input % (BigInt(1) << BigInt(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OFAC_TREE_LEVELS"]));
}
function processNameAndDob(entry, i, docType) {
    const firstName = entry.First_Name;
    const lastName = entry.Last_Name;
    const day = entry.day;
    const month = entry.month;
    const year = entry.year;
    if (day == null || month == null || year == null || !firstName || !lastName) {
        // Added checks for name presence
        // console.log('Name or DOB data missing for name_and_dob', i, entry); // Optional: log missing data
        return BigInt(0);
    }
    const targetLength = docType === 'passport' ? 39 : 30;
    const nameHash = processName(firstName, lastName, targetLength, i);
    if (nameHash === BigInt(0)) return BigInt(0); // Propagate error
    const dobHash = processDob(day, month, year, i);
    if (dobHash === BigInt(0)) return BigInt(0); // Propagate error
    return generateSmallKey((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$poseidon$2d$lite$40$0$2e$2$2e$1$2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["poseidon2"])([
        dobHash,
        nameHash
    ]));
}
function processNameAndYob(entry, i, docType) {
    const firstName = entry.First_Name;
    const lastName = entry.Last_Name;
    const year = entry.year;
    if (year == null || !firstName || !lastName) {
        // Added checks for name presence
        // console.log('Name or YOB data missing for name_and_yob', i, entry); // Optional: log missing data
        return BigInt(0);
    }
    const targetLength = docType === 'passport' ? 39 : 30;
    const nameHash = processName(firstName, lastName, targetLength, i);
    if (nameHash === BigInt(0)) return BigInt(0); // Propagate error
    const yearHash = processYear(year, i);
    if (yearHash === BigInt(0)) return BigInt(0); // Propagate error
    return generateSmallKey((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$poseidon$2d$lite$40$0$2e$2$2e$1$2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["poseidon2"])([
        yearHash,
        nameHash
    ]));
}
function processYear(year, i) {
    if (!year || typeof year !== 'string' || year.length < 2) {
        // console.log('Invalid year format for processYear', i, year); // Optional: log error
        return BigInt(0);
    }
    const yearSuffix = year.slice(-2);
    const yearArr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$circuits$2f$uuid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringToAsciiBigIntArray"])(yearSuffix);
    return getYearLeaf(yearArr);
}
function getYearLeaf(yearArr) {
    if (yearArr.length !== 2) {
        // console.log('Invalid year array length for getYearLeaf', yearArr); // Optional: log error
        return BigInt(0);
    }
    try {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$poseidon$2d$lite$40$0$2e$2$2e$1$2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["poseidon2"])(yearArr);
    } catch (err) {
        // console.log('err : Year hash', err, yearArr); // Optional: log error
        return BigInt(0);
    }
}
function processName(firstName, lastName, targetLength, i) {
    // LASTNAME<<FIRSTNAME<MIDDLENAME<<<...
    // Ensure names are strings before processing
    const cleanFirstName = typeof firstName === 'string' ? firstName.replace(/'/g, '').replace(/\./g, '').replace(/[- ]/g, '<') : '';
    const cleanLastName = typeof lastName === 'string' ? lastName.replace(/'/g, '').replace(/[- ]/g, '<').replace(/\./g, '') : '';
    // Handle cases where one name might be missing
    let arr = (cleanLastName ? cleanLastName + '<<' : '') + cleanFirstName;
    if (arr.length === 0) {
        // console.log('Cannot process empty name string', i); // Optional: log error
        return BigInt(0);
    }
    // Pad or truncate to target length
    if (arr.length > targetLength) {
        arr = arr.substring(0, targetLength);
    } else {
        while(arr.length < targetLength){
            arr += '<';
        }
    }
    console.log('arr', arr, 'arr.length', arr.length);
    let nameArr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$circuits$2f$uuid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringToAsciiBigIntArray"])(arr);
    // getNameLeaf will select the correct Poseidon hash based on nameArr.length
    return getNameLeaf(nameArr, i);
}
function processDob(day, month, year, i) {
    // YYMMDD
    const monthMap = {
        jan: '01',
        feb: '02',
        mar: '03',
        apr: '04',
        may: '05',
        jun: '06',
        jul: '07',
        aug: '08',
        sep: '09',
        oct: '10',
        nov: '11',
        dec: '12'
    };
    const lowerMonth = typeof month === 'string' ? month.toLowerCase() : '';
    const mappedMonth = monthMap[lowerMonth];
    if (!mappedMonth || !day || typeof day !== 'string' || day.length !== 2 || !year || typeof year !== 'string' || year.length < 2) {
        // console.log('Invalid DOB component format for processDob', i, {day, month, year}); // Optional: log error
        return BigInt(0);
    }
    const yearSuffix = year.slice(-2);
    const dob = yearSuffix + mappedMonth + day;
    let arr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$circuits$2f$uuid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringToAsciiBigIntArray"])(dob);
    return getDobLeaf(arr, i);
}
function processCountry(country1, country2, i) {
    let arr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$circuits$2f$uuid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringToAsciiBigIntArray"])(country1);
    let arr2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$circuits$2f$uuid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringToAsciiBigIntArray"])(country2);
    const leaf = getCountryLeaf(arr, arr2, i);
    if (!leaf) {
        console.log('Error creating leaf value', i, country1, country2);
        return BigInt(0);
    }
    return leaf;
}
function getCountryLeaf(country_by, country_to, i) {
    if (country_by.length !== 3 || country_to.length !== 3) {
        console.log('parsed passport length is not 3:', i, country_to, country_by);
        return;
    }
    try {
        const country = country_by.concat(country_to);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$poseidon$2d$lite$40$0$2e$2$2e$1$2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["poseidon6"])(country);
    } catch (err) {
        console.log('err : sanc_country hash', err, i, country_by, country_to);
    }
}
function getPassportNumberAndNationalityLeaf(passport, nationality, i) {
    if (passport.length !== 9) {
        console.log('parsed passport length is not 9:', i, passport);
        return;
    }
    if (nationality.length !== 3) {
        console.log('parsed nationality length is not 3:', i, nationality);
        return;
    }
    try {
        const fullHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$poseidon$2d$lite$40$0$2e$2$2e$1$2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["poseidon12"])(passport.concat(nationality));
        return generateSmallKey(fullHash);
    } catch (err) {
        console.log('err : passport', err, i, passport);
    }
}
function getNameDobLeaf(nameMrz, dobMrz, i) {
    return generateSmallKey((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$poseidon$2d$lite$40$0$2e$2$2e$1$2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["poseidon2"])([
        getDobLeaf(dobMrz),
        getNameLeaf(nameMrz)
    ]));
}
function getNameYobLeaf(nameMrz, yobMrz, i) {
    return generateSmallKey((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$poseidon$2d$lite$40$0$2e$2$2e$1$2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["poseidon2"])([
        getYearLeaf(yobMrz),
        getNameLeaf(nameMrz)
    ]));
}
function getNameLeaf(nameMrz, i) {
    let middleChunks = [];
    let chunks = [];
    try {
        // Add try-catch block
        if (nameMrz.length == 39) {
            // passport
            chunks.push(nameMrz.slice(0, 13), nameMrz.slice(13, 26), nameMrz.slice(26, 39));
            for (const chunk of chunks){
                if (chunk.length !== 13) throw new Error(`Invalid chunk length for Poseidon13: ${chunk.length}`);
                middleChunks.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$poseidon$2d$lite$40$0$2e$2$2e$1$2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["poseidon13"])(chunk));
            }
        } else if (nameMrz.length == 30) {
            // id_card
            chunks.push(nameMrz.slice(0, 10), nameMrz.slice(10, 20), nameMrz.slice(20, 30)); // Corrected comment: 30/3 for poseidon10
            for (const chunk of chunks){
                if (chunk.length !== 10) throw new Error(`Invalid chunk length for Poseidon10: ${chunk.length}`);
                middleChunks.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$poseidon$2d$lite$40$0$2e$2$2e$1$2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["poseidon10"])(chunk));
            }
        } else {
            throw new Error(`Unsupported name MRZ length: ${nameMrz.length}`); // Handle unexpected lengths
        }
        if (middleChunks.length !== 3) throw new Error(`Invalid number of middle chunks: ${middleChunks.length}`);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$poseidon$2d$lite$40$0$2e$2$2e$1$2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["poseidon3"])(middleChunks);
    } catch (err) {
        console.error('Error in getNameLeaf:', err, 'Index:', i, 'MRZ Length:', nameMrz.length); // Use console.error for errors
        // console.log('MRZ data:', nameMrz); // Optional: log failing data
        return BigInt(0); // Return 0 on error
    }
}
function getDobLeaf(dobMrz, i) {
    if (dobMrz.length !== 6) {
        // console.log('parsed dob length is not 6:', i, dobMrz); // Corrected length check message
        return BigInt(0); // Return 0 for invalid length
    }
    try {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$poseidon$2d$lite$40$0$2e$2$2e$1$2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["poseidon6"])(dobMrz);
    } catch (err) {
        console.error('Error in getDobLeaf:', err, 'Index:', i, 'DOB MRZ:', dobMrz); // Use console.error
        return BigInt(0); // Return 0 on error
    }
}
}}),
"[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/circuits/formatInputs.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "formatCountriesList": (()=>formatCountriesList),
    "reverseBytes": (()=>reverseBytes),
    "reverseCountryBytes": (()=>reverseCountryBytes)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/constants/constants.js [app-ssr] (ecmascript)");
;
function formatCountriesList(countries) {
    // Check maximum list length
    if (countries.length > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MAX_FORBIDDEN_COUNTRIES_LIST_LENGTH"]) {
        throw new Error(`Countries list must be inferior or equals to ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MAX_FORBIDDEN_COUNTRIES_LIST_LENGTH"]}`);
    }
    // Validate country codes
    for (const country of countries){
        if (!country || country.length !== 3) {
            throw new Error(`Invalid country code: "${country}". Country codes must be exactly 3 characters long.`);
        }
    // Optional check for the country code existence in the list of valid codes
    // This code can be uncommented if strict validation of country codes is needed
    /*
            const isValidCountry = Object.values(commonNames).some(
                name => name === country || country in commonNames
            );
    
            if (!isValidCountry) {
                throw new Error(`Unknown country code: "${country}". Please use valid 3-letter ISO country codes.`);
            }
            */ }
    const paddedCountries = countries.concat(Array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MAX_FORBIDDEN_COUNTRIES_LIST_LENGTH"] - countries.length).fill(''));
    const result = paddedCountries.flatMap((country)=>{
        const chars = country.padEnd(3, '\0').split('').map((char)=>char.charCodeAt(0));
        return chars;
    });
    return result;
}
function reverseBytes(input) {
    const hex = input.slice(2);
    const bytes = hex.match(/.{2}/g) || [];
    const reversedBytes = bytes.reverse();
    return '0x' + reversedBytes.join('');
}
function reverseCountryBytes(input) {
    const hex = input.slice(2);
    const groups = hex.match(/.{6}/g) || [];
    const reversedGroups = groups.reverse();
    const remainderLength = hex.length % 6;
    let remainder = '';
    if (remainderLength > 0) {
        remainder = hex.slice(hex.length - remainderLength);
    }
    return '0x' + reversedGroups.join('') + remainder;
}
}}),
"[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/circuits/generateInputs.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "findIndexInTree": (()=>findIndexInTree),
    "formatInput": (()=>formatInput),
    "generateCircuitInputsCountryVerifier": (()=>generateCircuitInputsCountryVerifier),
    "generateCircuitInputsDSC": (()=>generateCircuitInputsDSC),
    "generateCircuitInputsOfac": (()=>generateCircuitInputsOfac),
    "generateCircuitInputsRegister": (()=>generateCircuitInputsRegister),
    "generateCircuitInputsVCandDisclose": (()=>generateCircuitInputsVCandDisclose)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/constants/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$date$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/date.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/hash.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/passports/format.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$passport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/passports/passport.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$trees$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/trees.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$circuits$2f$formatInputs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/circuits/formatInputs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$circuits$2f$uuid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/circuits/uuid.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
function generateCircuitInputsDSC(passportData, serializedCscaTree) {
    const passportMetadata = passportData.passportMetadata;
    const cscaParsed = passportData.csca_parsed;
    const dscParsed = passportData.dsc_parsed;
    const raw_dsc = passportData.dsc;
    // CSCA is padded with 0s to max_csca_bytes
    const cscaTbsBytesPadded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$passport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["padWithZeroes"])(cscaParsed.tbsBytes, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["max_csca_bytes"]);
    const dscTbsBytes = dscParsed.tbsBytes;
    // DSC is padded using sha padding because it will be hashed in the circuit
    const [dscTbsBytesPadded, dscTbsBytesLen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$passport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pad"])(passportMetadata.cscaHashFunction)(dscTbsBytes, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["max_dsc_bytes"]);
    const leaf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$trees$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLeafCscaTree"])(cscaParsed);
    const [root, path, siblings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$trees$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCscaTreeInclusionProof"])(leaf, serializedCscaTree);
    // Parse CSCA certificate and get its public key
    const csca_pubKey_formatted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$passport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCertificatePubKey"])(cscaParsed, passportMetadata.cscaSignatureAlgorithm, passportMetadata.cscaHashFunction);
    const signatureRaw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$passport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extractSignatureFromDSC"])(raw_dsc);
    const signature = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$passport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatSignatureDSCCircuit"])(passportMetadata.cscaSignatureAlgorithm, passportMetadata.cscaHashFunction, cscaParsed, signatureRaw);
    // Get start index of CSCA pubkey based on algorithm
    const [startIndex, keyLength] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$passport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findStartPubKeyIndex"])(cscaParsed, cscaTbsBytesPadded, passportMetadata.cscaSignatureAlgorithm);
    return {
        raw_csca: cscaTbsBytesPadded.map((x)=>x.toString()),
        raw_csca_actual_length: BigInt(cscaParsed.tbsBytes.length).toString(),
        csca_pubKey_offset: startIndex.toString(),
        csca_pubKey_actual_size: BigInt(keyLength).toString(),
        raw_dsc: Array.from(dscTbsBytesPadded).map((x)=>x.toString()),
        raw_dsc_padded_length: BigInt(dscTbsBytesLen).toString(),
        csca_pubKey: csca_pubKey_formatted,
        signature,
        merkle_root: root,
        path: path,
        siblings: siblings
    };
}
function generateCircuitInputsRegister(secret, passportData, serializedDscTree) {
    const { mrz, eContent, signedAttr } = passportData;
    const passportMetadata = passportData.passportMetadata;
    const dscParsed = passportData.dsc_parsed;
    const [dscTbsBytesPadded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$passport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pad"])(dscParsed.hashAlgorithm)(dscParsed.tbsBytes, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["max_dsc_bytes"]);
    const { pubKey, signature, signatureAlgorithmFullName } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$passport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPassportSignatureInfos"])(passportData);
    const mrz_formatted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatMrz"])(mrz);
    if (eContent.length > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MAX_PADDED_ECONTENT_LEN"][signatureAlgorithmFullName]) {
        console.error(`eContent too long (${eContent.length} bytes). Max length is ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MAX_PADDED_ECONTENT_LEN"][signatureAlgorithmFullName]} bytes.`);
        throw new Error(`This length of datagroups (${eContent.length} bytes) is currently unsupported. Please contact us so we add support!`);
    }
    const [eContentPadded, eContentLen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$passport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pad"])(passportMetadata.eContentHashFunction)(eContent, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MAX_PADDED_ECONTENT_LEN"][passportMetadata.dg1HashFunction]);
    const [signedAttrPadded, signedAttrPaddedLen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$passport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pad"])(passportMetadata.signedAttrHashFunction)(signedAttr, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MAX_PADDED_SIGNED_ATTR_LEN"][passportMetadata.eContentHashFunction]);
    const dsc_leaf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$trees$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLeafDscTree"])(dscParsed, passportData.csca_parsed); // TODO: WRONG
    const [root, path, siblings, leaf_depth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$trees$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDscTreeInclusionProof"])(dsc_leaf, serializedDscTree);
    const csca_tree_leaf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$trees$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLeafCscaTree"])(passportData.csca_parsed);
    // Get start index of DSC pubkey based on algorithm
    const [startIndex, keyLength] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$passport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findStartPubKeyIndex"])(dscParsed, dscTbsBytesPadded, dscParsed.signatureAlgorithm);
    const inputs = {
        raw_dsc: dscTbsBytesPadded.map((x)=>x.toString()),
        raw_dsc_actual_length: [
            BigInt(dscParsed.tbsBytes.length).toString()
        ],
        dsc_pubKey_offset: startIndex,
        dsc_pubKey_actual_size: [
            BigInt(keyLength).toString()
        ],
        dg1: mrz_formatted,
        dg1_hash_offset: passportMetadata.dg1HashOffset,
        eContent: eContentPadded,
        eContent_padded_length: eContentLen,
        signed_attr: signedAttrPadded,
        signed_attr_padded_length: signedAttrPaddedLen,
        signed_attr_econtent_hash_offset: passportMetadata.eContentHashOffset,
        pubKey_dsc: pubKey,
        signature_passport: signature,
        merkle_root: [
            BigInt(root).toString()
        ],
        leaf_depth: leaf_depth,
        path: path,
        siblings: siblings,
        csca_tree_leaf: csca_tree_leaf,
        secret: secret
    };
    return Object.entries(inputs).map(([key, value])=>({
            [key]: formatInput(value)
        })).reduce((acc, curr)=>({
            ...acc,
            ...curr
        }), {});
}
function generateCircuitInputsVCandDisclose(secret, attestation_id, passportData, scope, selector_dg1, selector_older_than, merkletree, majority, passportNo_smt, nameAndDob_smt, nameAndYob_smt, selector_ofac, forbidden_countries_list, user_identifier) {
    const { mrz, eContent, signedAttr, documentType } = passportData;
    const passportMetadata = passportData.passportMetadata;
    const isPassportType = documentType === 'passport' || documentType === 'mock_passport';
    const formattedMrz = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatMrz"])(mrz);
    const eContent_shaBytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hash"])(passportMetadata.eContentHashFunction, Array.from(eContent), 'bytes');
    const eContent_packed_hash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["packBytesAndPoseidon"])(eContent_shaBytes.map((byte)=>byte & 0xff));
    const dsc_tree_leaf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$trees$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLeafDscTree"])(passportData.dsc_parsed, passportData.csca_parsed);
    const commitment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$passport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateCommitment"])(secret, attestation_id, passportData);
    const index = findIndexInTree(merkletree, BigInt(commitment));
    const { siblings, path, leaf_depth } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$trees$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateMerkleProof"])(merkletree, index, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COMMITMENT_TREE_DEPTH"]);
    const formattedMajority = majority.length === 1 ? `0${majority}` : majority;
    const majority_ascii = formattedMajority.split('').map((char)=>char.charCodeAt(0));
    // Define default values for SMT proofs (BigInt(0) for roots/keys, array of 0s for siblings)
    const defaultSiblings = Array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OFAC_TREE_LEVELS"]).fill(BigInt(0));
    let passportNoProof = {
        root: BigInt(0),
        closestleaf: BigInt(0),
        siblings: defaultSiblings
    };
    let nameDobProof;
    let nameYobProof;
    // Calculate leaves based on document type (using OFAC logic for slicing)
    const nameSlice = isPassportType ? formattedMrz.slice(10, 49) : formattedMrz.slice(65, 95);
    const dobSlice = isPassportType ? formattedMrz.slice(62, 68) : formattedMrz.slice(35, 41);
    const yobSlice = isPassportType ? formattedMrz.slice(62, 64) : formattedMrz.slice(35, 37);
    const nationalitySlice = isPassportType ? formattedMrz.slice(59, 62) : formattedMrz.slice(50, 53);
    const passNoSlice = isPassportType ? formattedMrz.slice(49, 58) : formattedMrz.slice(10, 19);
    const namedob_leaf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$trees$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNameDobLeaf"])(nameSlice, dobSlice);
    const nameyob_leaf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$trees$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNameYobLeaf"])(nameSlice, yobSlice);
    // Generate Name/DOB and Name/YOB proofs (always needed)
    nameDobProof = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$trees$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateSMTProof"])(nameAndDob_smt, namedob_leaf);
    nameYobProof = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$trees$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateSMTProof"])(nameAndYob_smt, nameyob_leaf);
    // Generate Passport Number proof only if it's a passport type and SMT is provided
    if (isPassportType) {
        if (!passportNo_smt) {
            console.warn('Document type is passport, but passportNo_smt tree was not provided.');
        } else {
            const passportNo_leaf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$trees$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPassportNumberAndNationalityLeaf"])(passNoSlice, nationalitySlice);
            const proofResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$trees$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateSMTProof"])(passportNo_smt, passportNo_leaf);
            // Explicitly cast root and closestleaf to bigint
            passportNoProof = {
                root: BigInt(proofResult.root),
                closestleaf: BigInt(proofResult.closestleaf),
                siblings: proofResult.siblings
            };
        }
    }
    // Build Final Input Object
    const baseInputs = {
        secret: formatInput(secret),
        attestation_id: formatInput(attestation_id),
        dg1: formatInput(formattedMrz),
        eContent_shaBytes_packed_hash: formatInput(eContent_packed_hash),
        dsc_tree_leaf: formatInput(dsc_tree_leaf),
        merkle_root: formatInput(merkletree.root),
        leaf_depth: formatInput(leaf_depth),
        path: formatInput(path),
        siblings: formatInput(siblings),
        selector_dg1: formatInput(selector_dg1),
        selector_older_than: formatInput(selector_older_than),
        scope: formatInput(scope),
        current_date: formatInput((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$date$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCurrentDateYYMMDD"])()),
        majority: formatInput(majority_ascii),
        user_identifier: formatInput(user_identifier),
        selector_ofac: formatInput(selector_ofac),
        forbidden_countries_list: formatInput((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$circuits$2f$formatInputs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCountriesList"])(forbidden_countries_list))
    };
    const ofacNameInputs = {
        ofac_namedob_smt_root: formatInput(nameDobProof.root),
        ofac_namedob_smt_leaf_key: formatInput(nameDobProof.closestleaf),
        ofac_namedob_smt_siblings: formatInput(nameDobProof.siblings),
        ofac_nameyob_smt_root: formatInput(nameYobProof.root),
        ofac_nameyob_smt_leaf_key: formatInput(nameYobProof.closestleaf),
        ofac_nameyob_smt_siblings: formatInput(nameYobProof.siblings)
    };
    // Conditionally include passport OFAC inputs
    const finalInputs = {
        ...baseInputs,
        ...ofacNameInputs,
        ...isPassportType && {
            ofac_passportno_smt_root: formatInput(passportNoProof.root),
            ofac_passportno_smt_leaf_key: formatInput(passportNoProof.closestleaf),
            ofac_passportno_smt_siblings: formatInput(passportNoProof.siblings)
        }
    };
    return finalInputs;
}
function generateCircuitInputsOfac(passportData, sparsemerkletree, proofLevel) {
    const { mrz, documentType } = passportData;
    const isPassportType = documentType === 'passport' || documentType === 'mock_passport';
    const mrz_bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatMrz"])(mrz); // Assume formatMrz handles basic formatting
    const nameSlice = isPassportType ? mrz_bytes.slice(5 + 5, 44 + 5) : mrz_bytes.slice(60 + 5, 90 + 5);
    const dobSlice = isPassportType ? mrz_bytes.slice(57 + 5, 63 + 5) : mrz_bytes.slice(30 + 5, 36 + 5);
    const yobSlice = isPassportType ? mrz_bytes.slice(57 + 5, 59 + 5) : mrz_bytes.slice(30 + 5, 32 + 5);
    const nationalitySlice = isPassportType ? mrz_bytes.slice(54 + 5, 57 + 5) : mrz_bytes.slice(45 + 5, 48 + 5);
    const passNoSlice = isPassportType ? mrz_bytes.slice(44 + 5, 53 + 5) : mrz_bytes.slice(5 + 5, 14 + 5);
    let leafToProve;
    if (proofLevel == 3) {
        if (!isPassportType) {
            throw new Error('Proof level 3 (Passport Number) is only applicable to passport document types.');
        }
        leafToProve = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$trees$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPassportNumberAndNationalityLeaf"])(passNoSlice, nationalitySlice);
    } else if (proofLevel == 2) {
        leafToProve = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$trees$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNameDobLeaf"])(nameSlice, dobSlice);
    } else if (proofLevel == 1) {
        leafToProve = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$trees$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNameYobLeaf"])(nameSlice, yobSlice);
    } else {
        throw new Error('Invalid proof level specified for OFAC check.');
    }
    const { root, closestleaf, siblings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$trees$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateSMTProof"])(sparsemerkletree, leafToProve);
    return {
        dg1: formatInput(mrz_bytes),
        smt_leaf_key: formatInput(closestleaf),
        smt_root: formatInput(root),
        smt_siblings: formatInput(siblings)
    };
}
function generateCircuitInputsCountryVerifier(passportData, sparsemerkletree) {
    const mrz_bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatMrz"])(passportData.mrz);
    const usa_ascii = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$circuits$2f$uuid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringToAsciiBigIntArray"])('USA');
    const country_leaf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$trees$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCountryLeaf"])(usa_ascii, mrz_bytes.slice(7, 10));
    const { root, closestleaf, siblings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$trees$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateSMTProof"])(sparsemerkletree, country_leaf);
    return {
        dg1: formatInput(mrz_bytes),
        hostCountry: formatInput(usa_ascii),
        smt_leaf_key: formatInput(closestleaf),
        smt_root: formatInput(root),
        smt_siblings: formatInput(siblings)
    };
}
function findIndexInTree(tree, commitment) {
    let index = tree.indexOf(commitment);
    if (index === -1) {
        index = tree.indexOf(commitment.toString());
    }
    if (index === -1) {
        throw new Error('This commitment was not found in the tree');
    } else {
    //  console.log(`Index of commitment in the registry: ${index}`);
    }
    return index;
}
function formatInput(input) {
    if (Array.isArray(input)) {
        return input.map((item)=>BigInt(item).toString());
    } else if (input instanceof Uint8Array) {
        return Array.from(input).map((num)=>BigInt(num).toString());
    } else if (typeof input === 'string' && input.includes(',')) {
        const numbers = input.split(',').map((s)=>s.trim()).filter((s)=>s !== '' && !isNaN(Number(s))).map(Number);
        try {
            return numbers.map((num)=>BigInt(num).toString());
        } catch (e) {
            throw e;
        }
    } else {
        return [
            BigInt(input).toString()
        ];
    }
}
}}),
"[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/shaPad.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Copied from zk-email cuz it uses crypto so can't import it here.
// Puts an end selector, a bunch of 0s, then the length, then fill the rest with 0s.
__turbopack_context__.s({
    "assert": (()=>assert),
    "int64toBytes": (()=>int64toBytes),
    "int8toBytes": (()=>int8toBytes),
    "mergeUInt8Arrays": (()=>mergeUInt8Arrays),
    "sha384_512Pad": (()=>sha384_512Pad),
    "shaPad": (()=>shaPad)
});
function shaPad(prehash_prepad_m_array, maxShaBytes) {
    let prehash_prepad_m = new Uint8Array(prehash_prepad_m_array);
    let length_bits = prehash_prepad_m.length * 8; // bytes to bits
    let length_in_bytes = int64toBytes(length_bits);
    prehash_prepad_m = mergeUInt8Arrays(prehash_prepad_m, int8toBytes(2 ** 7)); // Add the 1 on the end, length 505
    while((prehash_prepad_m.length * 8 + length_in_bytes.length * 8) % 512 !== 0){
        prehash_prepad_m = mergeUInt8Arrays(prehash_prepad_m, int8toBytes(0));
    }
    prehash_prepad_m = mergeUInt8Arrays(prehash_prepad_m, length_in_bytes);
    assert(prehash_prepad_m.length * 8 % 512 === 0, 'Padding did not complete properly!');
    let messageLen = prehash_prepad_m.length;
    while(prehash_prepad_m.length < maxShaBytes){
        prehash_prepad_m = mergeUInt8Arrays(prehash_prepad_m, int64toBytes(0));
    }
    assert(prehash_prepad_m.length === maxShaBytes, `Padding to max length did not complete properly! Your padded message is ${prehash_prepad_m.length} long but max is ${maxShaBytes}!`);
    return [
        Array.from(prehash_prepad_m),
        messageLen
    ];
}
function sha384_512Pad(prehash_prepad_m_array, maxShaBytes) {
    let prehash_prepad_m = new Uint8Array(prehash_prepad_m_array);
    // Length in bits before padding
    let length_bits = prehash_prepad_m.length * 8;
    // For SHA-384, length is stored in 128 bits (16 bytes)
    let length_in_bytes = int128toBytes(length_bits);
    // Add the 1 bit (as a byte with value 128)
    prehash_prepad_m = mergeUInt8Arrays(prehash_prepad_m, int8toBytes(2 ** 7));
    // Add padding zeros until total length is congruent to 896 mod 1024
    while((prehash_prepad_m.length * 8 + length_in_bytes.length * 8) % 1024 !== 0){
        prehash_prepad_m = mergeUInt8Arrays(prehash_prepad_m, int8toBytes(0));
    }
    // Append the length
    prehash_prepad_m = mergeUInt8Arrays(prehash_prepad_m, length_in_bytes);
    // Verify padding is correct (multiple of 1024 bits)
    assert(prehash_prepad_m.length * 8 % 1024 === 0, 'Padding did not complete properly!');
    let messageLen = prehash_prepad_m.length;
    // Pad to max length if needed
    while(prehash_prepad_m.length < maxShaBytes){
        prehash_prepad_m = mergeUInt8Arrays(prehash_prepad_m, int128toBytes(0));
    }
    assert(prehash_prepad_m.length === maxShaBytes, `Padding to max length did not complete properly! Your padded message is ${prehash_prepad_m.length} long but max is ${maxShaBytes}!`);
    return [
        Array.from(prehash_prepad_m),
        messageLen
    ];
}
// Helper function to convert 128-bit length to bytes
function int128toBytes(x) {
    const buffer = new ArrayBuffer(16);
    const view = new DataView(buffer);
    // Write high 64 bits
    view.setBigUint64(0, BigInt(0), false);
    // Write low 64 bits
    view.setBigUint64(8, BigInt(x), false);
    return new Uint8Array(buffer);
}
function int64toBytes(num) {
    let arr = new ArrayBuffer(8); // an Int32 takes 4 bytes
    let view = new DataView(arr);
    view.setInt32(4, num, false); // byteOffset = 0; litteEndian = false
    return new Uint8Array(arr);
}
function mergeUInt8Arrays(a1, a2) {
    // sum of individual array lengths
    var mergedArray = new Uint8Array(a1.length + a2.length);
    mergedArray.set(a1);
    mergedArray.set(a2, a1.length);
    return mergedArray;
}
function int8toBytes(num) {
    let arr = new ArrayBuffer(1); // an Int8 takes 4 bytes
    let view = new DataView(arr);
    view.setUint8(0, num); // byteOffset = 0; litteEndian = false
    return new Uint8Array(arr);
}
function assert(cond, errorMessage) {
    if (!cond) {
        throw new Error(errorMessage);
    }
}
}}),
"[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/passports/passport.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "extractRSFromSignature": (()=>extractRSFromSignature),
    "extractSignatureFromDSC": (()=>extractSignatureFromDSC),
    "findStartPubKeyIndex": (()=>findStartPubKeyIndex),
    "formatCertificatePubKeyDSC": (()=>formatCertificatePubKeyDSC),
    "formatSignatureDSCCircuit": (()=>formatSignatureDSCCircuit),
    "generateCommitment": (()=>generateCommitment),
    "generateNullifier": (()=>generateNullifier),
    "getCertificatePubKey": (()=>getCertificatePubKey),
    "getNAndK": (()=>getNAndK),
    "getNAndKCSCA": (()=>getNAndKCSCA),
    "getPassportSignatureInfos": (()=>getPassportSignatureInfos),
    "getSignatureAlgorithmFullName": (()=>getSignatureAlgorithmFullName),
    "initPassportDataParsing": (()=>initPassportDataParsing),
    "pad": (()=>pad),
    "padWithZeroes": (()=>padWithZeroes)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$node$2d$forge$40$https$2b2b2b$codeload$2e$github$2e$com$2b$remicolin$2b$forge$2b$tar$2e$gz$2b$17a11a632dd0e50343b3b8393245a2696f78afbb$2f$node_modules$2f$node$2d$forge$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/node-forge@https+++codeload.github.com+remicolin+forge+tar.gz+17a11a632dd0e50343b3b8393245a2696f78afbb/node_modules/node-forge/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$poseidon$2d$lite$40$0$2e$2$2e$1$2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/poseidon-lite@0.2.1/node_modules/poseidon-lite/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/constants/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/bytes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$certificate_parsing$2f$parseCertificateSimple$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/certificate_parsing/parseCertificateSimple.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$circuits$2f$generateInputs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/circuits/generateInputs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$csca$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/csca.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/hash.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$shaPad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/shaPad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$trees$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/trees.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/passports/format.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$passport_parsing$2f$parsePassportData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/passports/passport_parsing/parsePassportData.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
function initPassportDataParsing(passportData, skiPem = null) {
    const passportMetadata = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$passport_parsing$2f$parsePassportData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parsePassportData"])(passportData, skiPem);
    passportData.passportMetadata = passportMetadata;
    const dscParsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$certificate_parsing$2f$parseCertificateSimple$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseCertificateSimple"])(passportData.dsc);
    passportData.dsc_parsed = dscParsed;
    if (passportData.passportMetadata.csca) {
        const cscaParsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$certificate_parsing$2f$parseCertificateSimple$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseCertificateSimple"])(passportData.passportMetadata.csca);
        passportData.csca_parsed = cscaParsed;
    }
    return passportData;
}
function generateCommitment(secret, attestation_id, passportData) {
    const passportMetadata = passportData.passportMetadata;
    const dg1_packed_hash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["packBytesAndPoseidon"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatMrz"])(passportData.mrz));
    const eContent_shaBytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hash"])(passportMetadata.eContentHashFunction, Array.from(passportData.eContent), 'bytes');
    const eContent_packed_hash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["packBytesAndPoseidon"])(eContent_shaBytes.map((byte)=>byte & 0xff));
    const dsc_hash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$trees$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLeafDscTree"])(passportData.dsc_parsed, passportData.csca_parsed);
    // Log the values used to generate the commitment
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$poseidon$2d$lite$40$0$2e$2$2e$1$2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["poseidon5"])([
        secret,
        attestation_id,
        dg1_packed_hash,
        eContent_packed_hash,
        dsc_hash
    ]).toString();
}
function generateNullifier(passportData) {
    const signedAttr_shaBytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hash"])(passportData.passportMetadata.signedAttrHashFunction, Array.from(passportData.signedAttr), 'bytes');
    const signedAttr_packed_hash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["packBytesAndPoseidon"])(signedAttr_shaBytes.map((byte)=>byte & 0xff));
    return signedAttr_packed_hash;
}
function pad(hashFunction) {
    return hashFunction === 'sha1' || hashFunction === 'sha224' || hashFunction === 'sha256' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$shaPad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shaPad"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$shaPad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sha384_512Pad"];
}
function padWithZeroes(bytes, length) {
    return bytes.concat(new Array(length - bytes.length).fill(0));
}
function getPassportSignatureInfos(passportData) {
    const passportMetadata = passportData.passportMetadata;
    const signatureAlgorithmFullName = getSignatureAlgorithmFullName(passportData.dsc_parsed, passportMetadata.signatureAlgorithm, passportMetadata.signedAttrHashFunction);
    const { n, k } = getNAndK(signatureAlgorithmFullName);
    return {
        pubKey: getCertificatePubKey(passportData.dsc_parsed, passportMetadata.signatureAlgorithm, passportMetadata.signedAttrHashFunction),
        signature: getPassportSignature(passportData, n, k),
        signatureAlgorithmFullName: signatureAlgorithmFullName
    };
}
function getPassportSignature(passportData, n, k) {
    const { signatureAlgorithm } = passportData.dsc_parsed;
    if (signatureAlgorithm === 'ecdsa') {
        const { r, s } = extractRSFromSignature(passportData.encryptedDigest);
        const signature_r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["splitToWords"])(BigInt((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToDecimal"])(r)), n, k);
        const signature_s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["splitToWords"])(BigInt((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToDecimal"])(s)), n, k);
        return [
            ...signature_r,
            ...signature_s
        ];
    } else {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["splitToWords"])(BigInt((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bytesToBigDecimal"])(passportData.encryptedDigest)), n, k);
    }
}
function getCertificatePubKey(certificateData, signatureAlgorithm, hashFunction) {
    const signatureAlgorithmFullName = getSignatureAlgorithmFullName(certificateData, signatureAlgorithm, hashFunction);
    const { n, k } = getNAndK(signatureAlgorithmFullName);
    const { publicKeyDetails } = certificateData;
    if (signatureAlgorithm === 'ecdsa') {
        const { x, y } = publicKeyDetails;
        const x_dsc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["splitToWords"])(BigInt((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToDecimal"])(x)), n, k);
        const y_dsc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["splitToWords"])(BigInt((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToDecimal"])(y)), n, k);
        return [
            ...x_dsc,
            ...y_dsc
        ];
    } else {
        const { modulus } = publicKeyDetails;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["splitToWords"])(BigInt((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToDecimal"])(modulus)), n, k);
    }
}
function formatCertificatePubKeyDSC(certificateData, signatureAlgorithm) {
    const { publicKeyDetails } = certificateData;
    if (signatureAlgorithm === 'ecdsa') {
        const { x, y } = publicKeyDetails;
        // const normalizedX = x.length % 2 === 0 ? x : '0' + x;
        // const normalizedY = y.length % 2 === 0 ? y : '0' + y;
        const fullPubKey = x + y;
        // Splits to 525 words of 8 bits each
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["splitToWords"])(BigInt((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToDecimal"])(fullPubKey)), 8, 525);
    } else {
        // Splits to 525 words of 8 bits each
        const { modulus } = publicKeyDetails;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["splitToWords"])(BigInt((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToDecimal"])(modulus)), 8, 525);
    }
}
function extractSignatureFromDSC(dscCertificate) {
    const cert = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$certificate_parsing$2f$parseCertificateSimple$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCertificateFromPem"])(dscCertificate);
    const dscSignature = cert.signatureValue.valueBlock.valueHexView;
    return Array.from(dscSignature);
}
function formatSignatureDSCCircuit(cscaSignatureAlgorithm, cscaHashFunction, cscaCertificateData, signature) {
    const cscaSignatureAlgorithmFullName = getSignatureAlgorithmFullName(cscaCertificateData, cscaSignatureAlgorithm, cscaHashFunction);
    const { n, k } = getNAndK(cscaSignatureAlgorithmFullName);
    if (cscaSignatureAlgorithm === 'ecdsa') {
        const { r, s } = extractRSFromSignature(signature);
        const signature_r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["splitToWords"])(BigInt((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToDecimal"])(r)), n, k);
        const signature_s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["splitToWords"])(BigInt((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToDecimal"])(s)), n, k);
        return [
            ...signature_r,
            ...signature_s
        ];
    } else {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$circuits$2f$generateInputs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatInput"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["splitToWords"])(BigInt((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bytesToBigDecimal"])(signature)), n, k));
    }
}
function findStartPubKeyIndex(certificateData, rawCert, signatureAlgorithm) {
    const { publicKeyDetails } = certificateData;
    if (signatureAlgorithm === 'ecdsa') {
        const { x, y } = publicKeyDetails;
        const [x_index, x_totalLength] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$csca$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findStartIndexEC"])(x, rawCert);
        const [y_index, y_totalLength] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$csca$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findStartIndexEC"])(y, rawCert);
        return [
            x_index,
            x_totalLength + y_totalLength
        ];
    } else {
        // Splits to 525 words of 8 bits each
        const { modulus } = publicKeyDetails;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$csca$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findStartIndex"])(modulus, rawCert);
    }
}
function getSignatureAlgorithmFullName(certificateData, signatureAlgorithm, hashAlgorithm) {
    const { publicKeyDetails } = certificateData;
    if (signatureAlgorithm === 'ecdsa') {
        return `${signatureAlgorithm}_${hashAlgorithm}_${publicKeyDetails.curve}_${publicKeyDetails.bits}`;
    } else {
        const { exponent } = publicKeyDetails;
        return `${signatureAlgorithm}_${hashAlgorithm}_${exponent}_${publicKeyDetails.bits}`;
    }
}
function extractRSFromSignature(signatureBytes) {
    const derSignature = Buffer.from(signatureBytes).toString('binary');
    const asn1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$node$2d$forge$40$https$2b2b2b$codeload$2e$github$2e$com$2b$remicolin$2b$forge$2b$tar$2e$gz$2b$17a11a632dd0e50343b3b8393245a2696f78afbb$2f$node_modules$2f$node$2d$forge$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["asn1"].fromDer(derSignature);
    const signatureAsn1 = asn1.value;
    if (signatureAsn1.length !== 2) {
        throw new Error('Invalid signature format');
    }
    if (!Array.isArray(asn1.value) || asn1.value.length !== 2) {
        throw new Error('Invalid signature format');
    }
    const r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$node$2d$forge$40$https$2b2b2b$codeload$2e$github$2e$com$2b$remicolin$2b$forge$2b$tar$2e$gz$2b$17a11a632dd0e50343b3b8393245a2696f78afbb$2f$node_modules$2f$node$2d$forge$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["util"].createBuffer(asn1.value[0].value).toHex();
    const s = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$node$2d$forge$40$https$2b2b2b$codeload$2e$github$2e$com$2b$remicolin$2b$forge$2b$tar$2e$gz$2b$17a11a632dd0e50343b3b8393245a2696f78afbb$2f$node_modules$2f$node$2d$forge$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["util"].createBuffer(asn1.value[1].value).toHex();
    return {
        r,
        s
    };
}
function getNAndK(sigAlg) {
    if (sigAlg === 'rsa_sha256_65537_3072') {
        return {
            n: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n_dsc_3072"],
            k: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["k_dsc"]
        }; // 3072/32 = 96
    }
    if (sigAlg.startsWith('ecdsa_')) {
        if (sigAlg.endsWith('224')) {
            return {
                n: 32,
                k: 7
            };
        } else if (sigAlg.endsWith('256')) {
            return {
                n: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n_dsc_ecdsa"],
                k: 4
            };
        } else if (sigAlg.endsWith('384')) {
            return {
                n: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n_dsc_ecdsa"],
                k: 6
            };
        } else if (sigAlg.endsWith('512')) {
            return {
                n: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n_dsc_ecdsa"],
                k: 8
            };
        } else if (sigAlg.endsWith('521')) {
            return {
                n: 66,
                k: 8
            };
        } else {
            throw new Error('invalid key size');
        }
    }
    if (sigAlg.startsWith('rsapss_')) {
        const keyLength = parseInt(sigAlg.split('_')[3]);
        if (keyLength === 3072) {
            return {
                n: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n_dsc_3072"],
                k: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["k_dsc_3072"]
            }; // 3072/32 = 96
        }
        if (keyLength === 4096) {
            return {
                n: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n_dsc_4096"],
                k: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["k_dsc_4096"]
            }; // 4096/32 = 128
        }
        return {
            n: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n_dsc"],
            k: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["k_dsc"]
        }; // 2048/32 = 64
    }
    if (sigAlg === 'rsa_sha256_65537_4096' || sigAlg === 'rsa_sha512_65537_4096') {
        return {
            n: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n_dsc_4096"],
            k: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["k_dsc_4096"]
        }; // 4096/32 = 128
    }
    return {
        n: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n_dsc"],
        k: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["k_dsc"]
    }; // 2048/32 = 64
}
function getNAndKCSCA(sigAlg) {
    const n = sigAlg === 'ecdsa' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n_dsc_ecdsa"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n_csca"];
    const k = sigAlg === 'ecdsa' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["k_dsc_ecdsa"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["k_csca"];
    return {
        n,
        k
    };
}
}}),
"[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/passports/dg1.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "genDG1": (()=>genDG1)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/passports/format.js [app-ssr] (ecmascript)");
;
;
function genDG1(idDocInput) {
    switch(idDocInput.idType){
        case 'mock_passport':
            return genDG1Passport(idDocInput);
        case 'mock_id_card':
            return genDG1IdCard(idDocInput);
    }
}
function genDG1IdCard(idDocInput) {
    const doc_type_index = [
        0,
        1
    ];
    const issuing_state_index = [
        2,
        4
    ];
    const document_number_index = [
        5,
        13
    ];
    const document_number_check_digit_index = [
        14,
        14
    ];
    const optional_data_index = [
        15,
        29
    ];
    const date_of_birth_index = [
        30,
        35
    ];
    const date_of_birth_check_digit_index = [
        36,
        36
    ];
    const sex_index = [
        37,
        37
    ];
    const expiration_date_index = [
        38,
        43
    ];
    const expiration_date_check_digit_index = [
        44,
        44
    ];
    const nationality_index = [
        45,
        47
    ];
    const optional_data_2_index = [
        48,
        58
    ];
    const overall_check_digit_index = [
        59,
        59
    ];
    const name_index = [
        60,
        89
    ];
    const doc_type = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDG1Attribute"])(doc_type_index, 'I');
    const issuing_state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDG1Attribute"])(issuing_state_index, idDocInput.nationality);
    const document_number = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDG1Attribute"])(document_number_index, idDocInput.passportNumber);
    const document_number_check_digit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDG1Attribute"])(document_number_check_digit_index, '0');
    const optional_data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDG1Attribute"])(optional_data_index, '');
    const date_of_birth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDG1Attribute"])(date_of_birth_index, idDocInput.birthDate);
    const date_of_birth_check_digit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDG1Attribute"])(date_of_birth_check_digit_index, '0');
    const sex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDG1Attribute"])(sex_index, idDocInput.sex);
    const expiration_date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDG1Attribute"])(expiration_date_index, idDocInput.expiryDate);
    const expiration_date_check_digit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDG1Attribute"])(expiration_date_check_digit_index, '0');
    const nationality = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDG1Attribute"])(nationality_index, idDocInput.nationality);
    const optional_data_2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDG1Attribute"])(optional_data_2_index, '');
    const overall_check_digit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDG1Attribute"])(overall_check_digit_index, '1');
    const name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDG1Attribute"])(name_index, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatName"])(idDocInput.firstName, idDocInput.lastName, name_index[1] - name_index[0] + 1));
    const dg1 = `${doc_type}${issuing_state}${document_number}${document_number_check_digit}${optional_data}${date_of_birth}${date_of_birth_check_digit}${sex}${expiration_date}${expiration_date_check_digit}${nationality}${optional_data_2}${overall_check_digit}${name}`;
    if (dg1.length !== 90) {
        throw new Error(`DG1 length is not 90: ${dg1.length}`);
    }
    return dg1;
}
function genDG1Passport(idDocInput) {
    const doc_type_index = [
        0,
        1
    ];
    const issuing_state_index = [
        2,
        4
    ];
    const name_index = [
        5,
        43
    ];
    const document_number_index = [
        44,
        52
    ];
    const document_number_check_digit_index = [
        53,
        53
    ];
    const nationality_index = [
        54,
        56
    ];
    const date_of_birth_index = [
        57,
        62
    ];
    const date_of_birth_check_digit_index = [
        63,
        63
    ];
    const sex_index = [
        64,
        64
    ];
    const expiration_date_index = [
        65,
        70
    ];
    const expiration_date_check_digit_index = [
        71,
        71
    ];
    const optional_data_index = [
        72,
        85
    ];
    const optional_data_check_digit_index = [
        86,
        86
    ];
    const overall_check_digit_index = [
        87,
        87
    ];
    const doc_type = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDG1Attribute"])(doc_type_index, 'P');
    const issuing_state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDG1Attribute"])(issuing_state_index, idDocInput.nationality);
    const name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDG1Attribute"])(name_index, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatName"])(idDocInput.firstName, idDocInput.lastName, name_index[1] - name_index[0] + 1));
    const document_number = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDG1Attribute"])(document_number_index, idDocInput.passportNumber);
    const document_number_check_digit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDG1Attribute"])(document_number_check_digit_index, '4');
    const nationality = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDG1Attribute"])(nationality_index, idDocInput.nationality);
    const date_of_birth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDG1Attribute"])(date_of_birth_index, idDocInput.birthDate);
    const date_of_birth_check_digit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDG1Attribute"])(date_of_birth_check_digit_index, '1');
    const sex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDG1Attribute"])(sex_index, idDocInput.sex);
    const expiration_date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDG1Attribute"])(expiration_date_index, idDocInput.expiryDate);
    const expiration_date_check_digit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDG1Attribute"])(expiration_date_check_digit_index, '5');
    const optional_data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDG1Attribute"])(optional_data_index, '');
    const optional_data_check_digit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDG1Attribute"])(optional_data_check_digit_index, '<');
    const overall_check_digit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDG1Attribute"])(overall_check_digit_index, '2');
    const dg1 = `${doc_type}${issuing_state}${name}${document_number}${document_number_check_digit}${nationality}${date_of_birth}${date_of_birth_check_digit}${sex}${expiration_date}${expiration_date_check_digit}${optional_data}${optional_data_check_digit}${overall_check_digit}`;
    if (dg1.length !== 88) {
        throw new Error(`DG1 length is not 88: ${dg1.length}`);
    }
    return dg1;
}
}}),
"[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/passports/getMockDSC.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/constants/mockCertificates.js [app-ssr] (ecmascript)");
;
function getMockDSC(signatureType) {
    let privateKeyPem;
    let dsc;
    switch(signatureType){
        case 'rsa_sha1_65537_2048':
            privateKeyPem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha1_rsa_65537_2048_key"];
            dsc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha1_rsa_65537_2048"];
            break;
        case 'rsa_sha1_65537_4096':
            privateKeyPem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha1_rsa_65537_4096_key"];
            dsc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha1_rsa_65537_4096"];
            break;
        case 'rsa_sha256_65537_2048':
            privateKeyPem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha256_rsa_65537_2048_key"];
            dsc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha256_rsa_65537_2048"];
            break;
        case 'rsapss_sha256_65537_2048':
            privateKeyPem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha256_rsapss_32_65537_2048_key"];
            dsc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha256_rsapss_32_65537_2048"];
            break;
        case 'rsapss_sha256_65537_2048_64':
            privateKeyPem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha256_rsapss_64_65537_2048_key"];
            dsc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha256_rsapss_64_65537_2048"];
            break;
        case 'rsapss_sha256_3_2048':
            privateKeyPem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha256_rsapss_32_3_2048_key"];
            dsc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha256_rsapss_32_3_2048"];
            break;
        case 'rsapss_sha256_3_3072':
            privateKeyPem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha256_rsapss_32_3_3072_key"];
            dsc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha256_rsapss_32_3_3072"];
            break;
        case 'rsapss_sha384_65537_3072':
            privateKeyPem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha384_rsapss_48_65537_3072_key"];
            dsc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha384_rsapss_48_65537_3072"];
            break;
        case 'rsapss_sha384_65537_2048':
            privateKeyPem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha384_rsapss_48_65537_2048_key"];
            dsc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha384_rsapss_48_65537_2048"];
            break;
        case 'ecdsa_sha256_secp256r1_256':
            privateKeyPem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha256_ecdsa_secp256r1_key"];
            dsc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha256_ecdsa_secp256r1"];
            break;
        case 'ecdsa_sha1_secp256r1_256':
            privateKeyPem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha1_ecdsa_secp256r1_key"];
            dsc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha1_ecdsa_secp256r1"];
            break;
        case 'ecdsa_sha384_secp384r1_384':
            privateKeyPem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha384_ecdsa_secp384r1_key"];
            dsc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha384_ecdsa_secp384r1"];
            break;
        case 'ecdsa_sha256_secp384r1_384':
            privateKeyPem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha256_ecdsa_secp384r1_key"];
            dsc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha256_ecdsa_secp384r1"];
            break;
        case 'ecdsa_sha1_brainpoolP256r1_256':
            privateKeyPem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha1_ecdsa_brainpoolP256r1_key"];
            dsc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha1_ecdsa_brainpoolP256r1"];
            break;
        case 'ecdsa_sha256_brainpoolP256r1_256':
            privateKeyPem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha256_ecdsa_brainpoolP256r1_key"];
            dsc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha256_ecdsa_brainpoolP256r1"];
            break;
        case 'ecdsa_sha384_brainpoolP256r1_256':
            privateKeyPem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha384_ecdsa_brainpoolP256r1_key"];
            dsc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha384_ecdsa_brainpoolP256r1"];
            break;
        case 'ecdsa_sha512_brainpoolP256r1_256':
            privateKeyPem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha512_ecdsa_brainpoolP256r1_key"];
            dsc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha512_ecdsa_brainpoolP256r1"];
            break;
        case 'rsa_sha256_3_2048':
            privateKeyPem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha256_rsa_3_2048_key"];
            dsc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha256_rsa_3_2048"];
            break;
        case 'rsa_sha256_65537_3072':
            privateKeyPem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha256_rsa_65537_3072_key"];
            dsc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha256_rsa_65537_3072"];
            break;
        case 'rsapss_sha256_65537_3072':
            privateKeyPem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha256_rsapss_32_65537_3072_key"];
            dsc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha256_rsapss_32_65537_3072"];
            break;
        case 'rsapss_sha256_65537_4096':
            privateKeyPem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha256_rsapss_32_65537_4096_key"];
            dsc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha256_rsapss_32_65537_4096"];
            break;
        case 'ecdsa_sha256_brainpoolP384r1_384':
            privateKeyPem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha256_ecdsa_brainpoolP384r1_key"];
            dsc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha256_ecdsa_brainpoolP384r1"];
            break;
        case 'ecdsa_sha384_brainpoolP384r1_384':
            privateKeyPem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha384_ecdsa_brainpoolP384r1_key"];
            dsc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha384_ecdsa_brainpoolP384r1"];
            break;
        case 'ecdsa_sha512_brainpoolP384r1_384':
            privateKeyPem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha512_ecdsa_brainpoolP384r1_key"];
            dsc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha512_ecdsa_brainpoolP384r1"];
            break;
        case 'ecdsa_sha1_brainpoolP224r1_224':
            privateKeyPem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha1_ecdsa_brainpoolP224r1_key"];
            dsc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha1_ecdsa_brainpoolP224r1"];
            break;
        case 'ecdsa_sha224_brainpoolP224r1_224':
            privateKeyPem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha224_ecdsa_brainpoolP224r1_key"];
            dsc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha224_ecdsa_brainpoolP224r1"];
            break;
        case 'ecdsa_sha256_brainpoolP224r1_224':
            privateKeyPem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha256_ecdsa_brainpoolP224r1_key"];
            dsc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha256_ecdsa_brainpoolP224r1"];
            break;
        case 'ecdsa_sha384_brainpoolP512r1_512':
            privateKeyPem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha384_ecdsa_brainpoolP512r1_key"];
            dsc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha384_ecdsa_brainpoolP512r1"];
            break;
        case 'ecdsa_sha512_brainpoolP512r1_512':
            privateKeyPem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha512_ecdsa_brainpoolP512r1_key"];
            dsc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha512_ecdsa_brainpoolP512r1"];
            break;
        case 'ecdsa_sha512_secp521r1_521':
            privateKeyPem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha512_ecdsa_secp521r1_key"];
            dsc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha512_ecdsa_secp521r1"];
            break;
        case 'ecdsa_sha256_secp521r1_521':
            privateKeyPem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha256_ecdsa_secp521r1_key"];
            dsc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha256_ecdsa_secp521r1"];
            break;
        case 'rsa_sha256_65537_4096':
            privateKeyPem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha256_rsa_65537_4096_key"];
            dsc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha256_rsa_65537_4096"];
            break;
        case 'rsa_sha512_65537_4096':
            privateKeyPem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha512_rsa_65537_4096_key"];
            dsc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha512_rsa_65537_4096"];
            break;
        case 'rsa_sha512_65537_2048':
            privateKeyPem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha512_rsa_65537_2048_key"];
            dsc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha512_rsa_65537_2048"];
            break;
        case 'rsa_sha256_3_4096':
            privateKeyPem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha256_rsa_3_4096_key"];
            dsc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha256_rsa_3_4096"];
            break;
        case 'rsa_sha384_65537_4096':
            privateKeyPem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha384_rsa_65537_4096_key"];
            dsc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha384_rsa_65537_4096"];
            break;
        case 'rsapss_sha512_65537_4096':
            privateKeyPem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha512_rsapss_64_65537_4096_key"];
            dsc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha512_rsapss_64_65537_4096"];
            break;
        case 'rsapss_sha512_65537_2048':
            privateKeyPem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha512_rsapss_64_65537_2048_key"];
            dsc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha512_rsapss_64_65537_2048"];
            break;
        case 'ecdsa_sha224_secp224r1_224':
            privateKeyPem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha224_ecdsa_secp224r1_key"];
            dsc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$mockCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mock_dsc_sha224_ecdsa_secp224r1"];
            break;
        default:
            throw new Error(`Unsupported signature type: ${signatureType}`);
    }
    return {
        privateKeyPem,
        dsc
    };
}
const __TURBOPACK__default__export__ = getMockDSC;
}}),
"[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/passports/genMockIdDoc.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// generate a mock id document
__turbopack_context__.s({
    "genMockIdDoc": (()=>genMockIdDoc),
    "genMockIdDocAndInitDataParsing": (()=>genMockIdDocAndInitDataParsing),
    "generateMockDSC": (()=>generateMockDSC)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/constants/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$countries$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/constants/countries.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$dg1$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/passports/dg1.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/hash.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/passports/format.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$node$2d$forge$40$https$2b2b2b$codeload$2e$github$2e$com$2b$remicolin$2b$forge$2b$tar$2e$gz$2b$17a11a632dd0e50343b3b8393245a2696f78afbb$2f$node_modules$2f$node$2d$forge$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/node-forge@https+++codeload.github.com+remicolin+forge+tar.gz+17a11a632dd0e50343b3b8393245a2696f78afbb/node_modules/node-forge/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$elliptic$40$6$2e$6$2e$1$2f$node_modules$2f$elliptic$2f$lib$2f$elliptic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/elliptic@6.6.1/node_modules/elliptic/lib/elliptic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$getMockDSC$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/passports/getMockDSC.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$certificate_parsing$2f$parseCertificateSimple$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/certificate_parsing/parseCertificateSimple.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$certificate_parsing$2f$curves$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/certificate_parsing/curves.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$asn1js$40$3$2e$0$2e$7$2f$node_modules$2f$asn1js$2f$build$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/asn1js@3.0.7/node_modules/asn1js/build/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$passport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/passports/passport.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
const defaultIdDocInput = {
    idType: 'mock_passport',
    dgHashAlgo: 'sha256',
    eContentHashAlgo: 'sha256',
    signatureType: 'rsa_sha256_65537_2048',
    nationality: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$countries$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["countries"].UNITED_STATES,
    birthDate: '900101',
    expiryDate: '300101',
    passportNumber: '123456789',
    lastName: 'DOE',
    firstName: 'JOHN',
    sex: 'M'
};
async function generateMockDSC(signatureType) {
    const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_URL_STAGING"]}/api/v2/generate-dsc`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            signatureType
        })
    });
    if (!response.ok) {
        throw new Error(`Failed to generate DSC: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    if (!data || !data.data) {
        throw new Error('Missing data in server response');
    }
    if (typeof data.data.privateKeyPem !== 'string' || typeof data.data.dsc !== 'string') {
        throw new Error('Invalid DSC response format from server');
    }
    return {
        privateKeyPem: data.data.privateKeyPem,
        dsc: data.data.dsc
    };
}
function genMockIdDoc(userInput = {}, mockDSC) {
    const mergedInput = {
        ...defaultIdDocInput,
        ...userInput
    };
    let privateKeyPem, dsc;
    if (mockDSC) {
        dsc = mockDSC.dsc;
        privateKeyPem = mockDSC.privateKeyPem;
    } else {
        ({ privateKeyPem, dsc } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$getMockDSC$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(mergedInput.signatureType));
    }
    const dg1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$dg1$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["genDG1"])(mergedInput);
    const dg1_hash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hash"])(mergedInput.dgHashAlgo, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatMrz"])(dg1));
    const dataGroupHashes = generateDataGroupHashes(dg1_hash, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getHashLen"])(mergedInput.dgHashAlgo));
    const eContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatAndConcatenateDataHashes"])(dataGroupHashes, 63);
    const eContentHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hash"])(mergedInput.eContentHashAlgo, eContent);
    const signedAttr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateSignedAttr"])(eContentHash);
    const hashAlgo = mergedInput.signatureType.split('_')[1];
    const signature = sign(privateKeyPem, dsc, hashAlgo, signedAttr);
    const signatureBytes = Array.from(signature, (byte)=>byte < 128 ? byte : byte - 256);
    return {
        dsc: dsc,
        mrz: dg1,
        dg2Hash: dataGroupHashes.find(([dgNum])=>dgNum === 2)?.[1] || [],
        eContent: eContent,
        signedAttr: signedAttr,
        encryptedDigest: signatureBytes,
        documentType: mergedInput.idType,
        documentCategory: mergedInput.idType === 'mock_passport' ? 'passport' : 'id_card',
        mock: true
    };
}
function genMockIdDocAndInitDataParsing(userInput = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$passport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initPassportDataParsing"])({
        ...genMockIdDoc(userInput)
    });
}
function generateRandomBytes(length) {
    // Generate numbers between -128 and 127 to match the existing signed byte format
    return Array.from({
        length
    }, ()=>Math.floor(Math.random() * 256) - 128);
}
function generateDataGroupHashes(mrzHash, hashLen) {
    // Generate hashes for DGs 2-15 (excluding some DGs that aren't typically used)
    const dataGroups = [
        [
            1,
            mrzHash
        ],
        [
            2,
            generateRandomBytes(hashLen)
        ],
        [
            3,
            generateRandomBytes(hashLen)
        ],
        [
            4,
            generateRandomBytes(hashLen)
        ],
        [
            5,
            generateRandomBytes(hashLen)
        ],
        [
            7,
            generateRandomBytes(hashLen)
        ],
        [
            8,
            generateRandomBytes(hashLen)
        ],
        // [11, generateRandomBytes(hashLen)],
        // [12, generateRandomBytes(hashLen)],
        // [14, generateRandomBytes(hashLen)],
        [
            15,
            generateRandomBytes(hashLen)
        ]
    ];
    return dataGroups;
}
function sign(privateKeyPem, dsc, hashAlgorithm, eContent) {
    const { signatureAlgorithm, publicKeyDetails } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$certificate_parsing$2f$parseCertificateSimple$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseCertificateSimple"])(dsc);
    if (signatureAlgorithm === 'rsapss') {
        const privateKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$node$2d$forge$40$https$2b2b2b$codeload$2e$github$2e$com$2b$remicolin$2b$forge$2b$tar$2e$gz$2b$17a11a632dd0e50343b3b8393245a2696f78afbb$2f$node_modules$2f$node$2d$forge$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].pki.privateKeyFromPem(privateKeyPem);
        const md = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$node$2d$forge$40$https$2b2b2b$codeload$2e$github$2e$com$2b$remicolin$2b$forge$2b$tar$2e$gz$2b$17a11a632dd0e50343b3b8393245a2696f78afbb$2f$node_modules$2f$node$2d$forge$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].md[hashAlgorithm].create();
        md.update(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$node$2d$forge$40$https$2b2b2b$codeload$2e$github$2e$com$2b$remicolin$2b$forge$2b$tar$2e$gz$2b$17a11a632dd0e50343b3b8393245a2696f78afbb$2f$node_modules$2f$node$2d$forge$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].util.binary.raw.encode(new Uint8Array(eContent)));
        const pss = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$node$2d$forge$40$https$2b2b2b$codeload$2e$github$2e$com$2b$remicolin$2b$forge$2b$tar$2e$gz$2b$17a11a632dd0e50343b3b8393245a2696f78afbb$2f$node_modules$2f$node$2d$forge$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].pss.create({
            md: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$node$2d$forge$40$https$2b2b2b$codeload$2e$github$2e$com$2b$remicolin$2b$forge$2b$tar$2e$gz$2b$17a11a632dd0e50343b3b8393245a2696f78afbb$2f$node_modules$2f$node$2d$forge$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].md[hashAlgorithm].create(),
            mgf: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$node$2d$forge$40$https$2b2b2b$codeload$2e$github$2e$com$2b$remicolin$2b$forge$2b$tar$2e$gz$2b$17a11a632dd0e50343b3b8393245a2696f78afbb$2f$node_modules$2f$node$2d$forge$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].mgf.mgf1.create(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$node$2d$forge$40$https$2b2b2b$codeload$2e$github$2e$com$2b$remicolin$2b$forge$2b$tar$2e$gz$2b$17a11a632dd0e50343b3b8393245a2696f78afbb$2f$node_modules$2f$node$2d$forge$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].md[hashAlgorithm].create()),
            saltLength: parseInt(publicKeyDetails.saltLength)
        });
        const signatureBytes = privateKey.sign(md, pss);
        return Array.from(signatureBytes, (c)=>c.charCodeAt(0));
    } else if (signatureAlgorithm === 'ecdsa') {
        const curve = publicKeyDetails.curve;
        let curveForElliptic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$certificate_parsing$2f$curves$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCurveForElliptic"])(curve);
        const ec = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$elliptic$40$6$2e$6$2e$1$2f$node_modules$2f$elliptic$2f$lib$2f$elliptic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].ec(curveForElliptic);
        const privateKeyDer = Buffer.from(privateKeyPem.replace(/-----BEGIN EC PRIVATE KEY-----|\n|-----END EC PRIVATE KEY-----/g, ''), 'base64');
        const asn1Data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$asn1js$40$3$2e$0$2e$7$2f$node_modules$2f$asn1js$2f$build$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromBER"])(privateKeyDer);
        const privateKeyBuffer = asn1Data.result.valueBlock.value[1].valueBlock.valueHexView;
        const keyPair = ec.keyFromPrivate(privateKeyBuffer);
        const msgHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hash"])(hashAlgorithm, eContent, 'hex');
        const signature = keyPair.sign(msgHash, 'hex');
        // @ts-ignore-error toDer gives number[] what is fine for Buffer.from
        const signatureBytes = Array.from(Buffer.from(signature.toDER(), 'hex'));
        return signatureBytes;
    } else {
        const privKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$node$2d$forge$40$https$2b2b2b$codeload$2e$github$2e$com$2b$remicolin$2b$forge$2b$tar$2e$gz$2b$17a11a632dd0e50343b3b8393245a2696f78afbb$2f$node_modules$2f$node$2d$forge$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].pki.privateKeyFromPem(privateKeyPem);
        const md = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$node$2d$forge$40$https$2b2b2b$codeload$2e$github$2e$com$2b$remicolin$2b$forge$2b$tar$2e$gz$2b$17a11a632dd0e50343b3b8393245a2696f78afbb$2f$node_modules$2f$node$2d$forge$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].md[hashAlgorithm].create();
        md.update(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$node$2d$forge$40$https$2b2b2b$codeload$2e$github$2e$com$2b$remicolin$2b$forge$2b$tar$2e$gz$2b$17a11a632dd0e50343b3b8393245a2696f78afbb$2f$node_modules$2f$node$2d$forge$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].util.binary.raw.encode(new Uint8Array(eContent)));
        const forgeSignature = privKey.sign(md);
        return Array.from(forgeSignature, (c)=>c.charCodeAt(0));
    }
}
}}),
"[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/circuits/circuitsName.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getCircuitNameFromPassportData": (()=>getCircuitNameFromPassportData)
});
function getCircuitNameFromPassportData(passportData, circuitType) {
    if (circuitType === 'register') {
        return getRegisterNameFromPassportData(passportData);
    } else {
        return getDSCircuitNameFromPassportData(passportData);
    }
}
function getDSCircuitNameFromPassportData(passportData) {
    console.log('Getting DSC circuit name from passport data...');
    if (!passportData.passportMetadata) {
        console.error('Passport metadata is missing');
        throw new Error('Passport data are not parsed');
    }
    const passportMetadata = passportData.passportMetadata;
    if (!passportMetadata.cscaFound) {
        console.error('CSCA not found in passport metadata');
        throw new Error('CSCA not found');
    }
    const signatureAlgorithm = passportMetadata.cscaSignatureAlgorithm;
    const hashFunction = passportMetadata.cscaHashFunction;
    console.log('CSCA Signature Algorithm:', signatureAlgorithm);
    console.log('CSCA Hash Function:', hashFunction);
    if (signatureAlgorithm === 'ecdsa') {
        console.log('Processing ECDSA signature...');
        const curve = passportMetadata.cscaCurveOrExponent;
        console.log('ECDSA curve:', curve);
        const circuitName = `dsc_${hashFunction}_${signatureAlgorithm}_${curve}`;
        console.log('Generated circuit name:', circuitName);
        return circuitName;
    } else if (signatureAlgorithm === 'rsa') {
        console.log('Processing RSA signature...');
        const exponent = passportMetadata.cscaCurveOrExponent;
        const bits = passportMetadata.cscaSignatureAlgorithmBits;
        console.log('RSA exponent:', exponent);
        console.log('RSA bits:', bits);
        if (bits <= 4096) {
            const circuitName = `dsc_${hashFunction}_${signatureAlgorithm}_${exponent}_${4096}`;
            console.log('Generated circuit name:', circuitName);
            return circuitName;
        } else {
            console.error('RSA key length exceeds maximum supported length');
            throw new Error(`Unsupported key length: ${bits}`);
        }
    } else if (signatureAlgorithm === 'rsapss') {
        console.log('Processing RSA-PSS signature...');
        const exponent = passportMetadata.cscaCurveOrExponent;
        const saltLength = passportMetadata.cscaSaltLength;
        const bits = passportMetadata.cscaSignatureAlgorithmBits;
        console.log('RSA-PSS exponent:', exponent);
        console.log('RSA-PSS salt length:', saltLength);
        console.log('RSA-PSS bits:', bits);
        if (bits <= 4096) {
            const circuitName = `dsc_${hashFunction}_${signatureAlgorithm}_${exponent}_${saltLength}_${bits}`;
            console.log('Generated circuit name:', circuitName);
            return circuitName;
        } else {
            console.error('RSA-PSS key length exceeds maximum supported length');
            throw new Error(`Unsupported key length: ${bits}`);
        }
    } else {
        console.error('Unsupported signature algorithm:', signatureAlgorithm);
        throw new Error('Unsupported signature algorithm');
    }
}
function getRegisterNameFromPassportData(passportData) {
    console.log('Getting register circuit name from passport data...');
    if (!passportData.passportMetadata) {
        console.error('Passport metadata is missing');
        throw new Error('Passport data are not parsed');
    }
    const passportMetadata = passportData.passportMetadata;
    if (!passportMetadata.cscaFound) {
        console.error('CSCA not found in passport metadata');
        throw new Error('CSCA not found');
    }
    const dgHashAlgo = passportMetadata.dg1HashFunction;
    const eContentHashAlgo = passportMetadata.eContentHashFunction;
    const signedAttrHashAlgo = passportMetadata.signedAttrHashFunction;
    const sigAlg = passportMetadata.signatureAlgorithm;
    console.log('DG Hash Algorithm:', dgHashAlgo);
    console.log('eContent Hash Algorithm:', eContentHashAlgo);
    console.log('Signed Attributes Hash Algorithm:', signedAttrHashAlgo);
    console.log('Signature Algorithm:', sigAlg);
    const prefix = passportData.documentType === 'id_card' || passportData.documentType === 'mock_id_card' ? 'register_id' : 'register';
    if (sigAlg === 'ecdsa') {
        console.log('Processing ECDSA signature...');
        const { curveOrExponent } = passportMetadata;
        console.log('ECDSA curve:', curveOrExponent);
        const circuitName = `${prefix}_${dgHashAlgo}_${eContentHashAlgo}_${signedAttrHashAlgo}_${sigAlg}_${curveOrExponent}`;
        console.log('Generated circuit name:', circuitName);
        return circuitName;
    } else if (sigAlg === 'rsa') {
        console.log('Processing RSA signature...');
        const { curveOrExponent, signatureAlgorithmBits } = passportMetadata;
        console.log('RSA exponent:', curveOrExponent);
        console.log('RSA bits:', signatureAlgorithmBits);
        if (signatureAlgorithmBits <= 4096) {
            const circuitName = `${prefix}_${dgHashAlgo}_${eContentHashAlgo}_${signedAttrHashAlgo}_${sigAlg}_${curveOrExponent}_${4096}`;
            console.log('Generated circuit name:', circuitName);
            return circuitName;
        } else {
            console.error('RSA key length exceeds maximum supported length');
            throw new Error(`Unsupported key length: ${signatureAlgorithmBits}`);
        }
    } else if (sigAlg === 'rsapss') {
        console.log('Processing RSA-PSS signature...');
        const { curveOrExponent, saltLength, signatureAlgorithmBits } = passportMetadata;
        console.log('RSA-PSS exponent:', curveOrExponent);
        console.log('RSA-PSS salt length:', saltLength);
        console.log('RSA-PSS bits:', signatureAlgorithmBits);
        if (signatureAlgorithmBits <= 4096) {
            const circuitName = `${prefix}_${dgHashAlgo}_${eContentHashAlgo}_${signedAttrHashAlgo}_${sigAlg}_${curveOrExponent}_${saltLength}_${signatureAlgorithmBits}`;
            console.log('Generated circuit name:', circuitName);
            return circuitName;
        } else {
            console.error('RSA-PSS key length exceeds maximum supported length');
            throw new Error(`Unsupported key length: ${signatureAlgorithmBits}`);
        }
    } else {
        console.error('Unsupported signature algorithm:', sigAlg);
        throw new Error('Unsupported signature algorithm');
    }
}
}}),
"[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/passports/genMockPassportData.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "genAndInitMockPassportData": (()=>genAndInitMockPassportData),
    "genMockPassportData": (()=>genMockPassportData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$asn1js$40$3$2e$0$2e$7$2f$node_modules$2f$asn1js$2f$build$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/asn1js@3.0.7/node_modules/asn1js/build/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$elliptic$40$6$2e$6$2e$1$2f$node_modules$2f$elliptic$2f$lib$2f$elliptic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/elliptic@6.6.1/node_modules/elliptic/lib/elliptic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$node$2d$forge$40$https$2b2b2b$codeload$2e$github$2e$com$2b$remicolin$2b$forge$2b$tar$2e$gz$2b$17a11a632dd0e50343b3b8393245a2696f78afbb$2f$node_modules$2f$node$2d$forge$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/node-forge@https+++codeload.github.com+remicolin+forge+tar.gz+17a11a632dd0e50343b3b8393245a2696f78afbb/node_modules/node-forge/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$certificate_parsing$2f$curves$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/certificate_parsing/curves.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$certificate_parsing$2f$parseCertificateSimple$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/certificate_parsing/parseCertificateSimple.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/hash.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/passports/format.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$passport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/passports/passport.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$getMockDSC$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/passports/getMockDSC.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
function generateRandomBytes(length) {
    // Generate numbers between -128 and 127 to match the existing signed byte format
    return Array.from({
        length
    }, ()=>Math.floor(Math.random() * 256) - 128);
}
function generateDataGroupHashes(mrzHash, hashLen) {
    // Generate hashes for DGs 2-15 (excluding some DGs that aren't typically used)
    const dataGroups = [
        [
            1,
            mrzHash
        ],
        [
            2,
            generateRandomBytes(hashLen)
        ],
        [
            3,
            generateRandomBytes(hashLen)
        ],
        [
            4,
            generateRandomBytes(hashLen)
        ],
        [
            5,
            generateRandomBytes(hashLen)
        ],
        [
            7,
            generateRandomBytes(hashLen)
        ],
        [
            8,
            generateRandomBytes(hashLen)
        ],
        // [11, generateRandomBytes(hashLen)],
        // [12, generateRandomBytes(hashLen)],
        // [14, generateRandomBytes(hashLen)],
        [
            15,
            generateRandomBytes(hashLen)
        ]
    ];
    return dataGroups;
}
function genMockPassportData(dgHashAlgo, eContentHashAlgo, signatureType, nationality, birthDate, expiryDate, passportNumber = '15AA81234', lastName = 'DUPONT', firstName = 'ALPHONSE HUGHUES ALBERT') {
    if (birthDate.length !== 6 || expiryDate.length !== 6) {
        throw new Error('birthdate and expiry date have to be in the "YYMMDD" format');
    }
    // Prepare last name: Convert to uppercase, remove invalid characters, split by spaces, and join with '<'
    const lastNameParts = lastName.toUpperCase().replace(/[^A-Z< ]/g, '').split(' ');
    const formattedLastName = lastNameParts.join('<');
    // Prepare first name: Convert to uppercase, remove invalid characters, split by spaces, and join with '<'
    const firstNameParts = firstName.toUpperCase().replace(/[^A-Z< ]/g, '').split(' ');
    const formattedFirstName = firstNameParts.join('<');
    // Build the first line of MRZ
    let mrzLine1 = `P<${nationality}${formattedLastName}<<${formattedFirstName}`;
    // Pad the first line with '<' to make it exactly 44 characters
    mrzLine1 = mrzLine1.padEnd(44, '<');
    if (mrzLine1.length > 44) {
        throw new Error('First line of MRZ exceeds 44 characters');
    }
    // Build the second line of MRZ
    const mrzLine2 = `${passportNumber}4${nationality}${birthDate}1M${expiryDate}5<<<<<<<<<<<<<<02`;
    // Combine both lines to form the MRZ
    const mrz = mrzLine1 + mrzLine2;
    // Validate the MRZ length
    if (mrz.length !== 88) {
        throw new Error(`MRZ must be 88 characters long, got ${mrz.length}`);
    }
    const { privateKeyPem, dsc } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$getMockDSC$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(signatureType);
    // Generate MRZ hash first
    const mrzHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hash"])(dgHashAlgo, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatMrz"])(mrz));
    // Generate random hashes for other DGs, passing mrzHash for DG1
    const dataGroupHashes = generateDataGroupHashes(mrzHash, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getHashLen"])(dgHashAlgo));
    const eContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatAndConcatenateDataHashes"])(dataGroupHashes, 63);
    const signedAttr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateSignedAttr"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hash"])(eContentHashAlgo, eContent));
    const hashAlgo = signatureType.split('_')[1];
    const signature = sign(privateKeyPem, dsc, hashAlgo, signedAttr);
    const signatureBytes = Array.from(signature, (byte)=>byte < 128 ? byte : byte - 256);
    return {
        dsc: dsc,
        mrz: mrz,
        dg2Hash: dataGroupHashes.find(([dgNum])=>dgNum === 2)?.[1] || [],
        eContent: eContent,
        signedAttr: signedAttr,
        encryptedDigest: signatureBytes,
        documentType: 'mock_passport',
        documentCategory: 'passport',
        mock: true
    };
}
function genAndInitMockPassportData(dgHashAlgo, eContentHashAlgo, signatureType, nationality, birthDate, expiryDate, passportNumber = '15AA81234', lastName = 'DUPONT', firstName = 'ALPHONSE HUGHUES ALBERT') {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$passports$2f$passport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initPassportDataParsing"])(genMockPassportData(dgHashAlgo, eContentHashAlgo, signatureType, nationality, birthDate, expiryDate, passportNumber, lastName, firstName));
}
function sign(privateKeyPem, dsc, hashAlgorithm, eContent) {
    const actualForge = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$node$2d$forge$40$https$2b2b2b$codeload$2e$github$2e$com$2b$remicolin$2b$forge$2b$tar$2e$gz$2b$17a11a632dd0e50343b3b8393245a2696f78afbb$2f$node_modules$2f$node$2d$forge$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.pki ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$node$2d$forge$40$https$2b2b2b$codeload$2e$github$2e$com$2b$remicolin$2b$forge$2b$tar$2e$gz$2b$17a11a632dd0e50343b3b8393245a2696f78afbb$2f$node_modules$2f$node$2d$forge$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$node$2d$forge$40$https$2b2b2b$codeload$2e$github$2e$com$2b$remicolin$2b$forge$2b$tar$2e$gz$2b$17a11a632dd0e50343b3b8393245a2696f78afbb$2f$node_modules$2f$node$2d$forge$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.default;
    const { signatureAlgorithm, publicKeyDetails } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$certificate_parsing$2f$parseCertificateSimple$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseCertificateSimple"])(dsc);
    if (signatureAlgorithm === 'rsapss') {
        const privateKey = actualForge.pki.privateKeyFromPem(privateKeyPem);
        const md = actualForge.md[hashAlgorithm].create();
        md.update(actualForge.util.binary.raw.encode(new Uint8Array(eContent)));
        const pss = actualForge.pss.create({
            md: actualForge.md[hashAlgorithm].create(),
            mgf: actualForge.mgf.mgf1.create(actualForge.md[hashAlgorithm].create()),
            saltLength: parseInt(publicKeyDetails.saltLength)
        });
        const signatureBytes = privateKey.sign(md, pss);
        return Array.from(signatureBytes, (c)=>c.charCodeAt(0));
    } else if (signatureAlgorithm === 'ecdsa') {
        const curve = publicKeyDetails.curve;
        let curveForElliptic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$certificate_parsing$2f$curves$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCurveForElliptic"])(curve);
        const ec = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$elliptic$40$6$2e$6$2e$1$2f$node_modules$2f$elliptic$2f$lib$2f$elliptic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].ec(curveForElliptic);
        const privateKeyDer = Buffer.from(privateKeyPem.replace(/-----BEGIN EC PRIVATE KEY-----|\n|-----END EC PRIVATE KEY-----/g, ''), 'base64');
        const asn1Data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$asn1js$40$3$2e$0$2e$7$2f$node_modules$2f$asn1js$2f$build$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromBER"])(privateKeyDer);
        const privateKeyBuffer = asn1Data.result.valueBlock.value[1].valueBlock.valueHexView;
        const keyPair = ec.keyFromPrivate(privateKeyBuffer);
        const msgHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$7_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hash"])(hashAlgorithm, eContent, 'hex');
        const signature = keyPair.sign(msgHash, 'hex');
        // @ts-ignore-error this seems wrong
        const signatureBytes = Array.from(Buffer.from(signature.toDER(), 'hex'));
        return signatureBytes;
    } else {
        const privKey = actualForge.pki.privateKeyFromPem(privateKeyPem);
        const md = actualForge.md[hashAlgorithm].create();
        md.update(actualForge.util.binary.raw.encode(new Uint8Array(eContent)));
        const forgeSignature = privKey.sign(md);
        return Array.from(forgeSignature, (c)=>c.charCodeAt(0));
    }
}
}}),

};

//# sourceMappingURL=1c38e_%40selfxyz_common_dist_esm_src_utils_38cd0f81._.js.map