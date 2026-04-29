(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/constants/constants.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "API_URL": (()=>API_URL),
    "API_URL_STAGING": (()=>API_URL_STAGING),
    "CHAIN_NAME": (()=>CHAIN_NAME),
    "CIRCUIT_CONSTANTS": (()=>CIRCUIT_CONSTANTS),
    "CIRCUIT_TYPES": (()=>CIRCUIT_TYPES),
    "COMMITMENT_TREE_DEPTH": (()=>COMMITMENT_TREE_DEPTH),
    "CSCA_TREE_DEPTH": (()=>CSCA_TREE_DEPTH),
    "CSCA_TREE_URL": (()=>CSCA_TREE_URL),
    "CSCA_TREE_URL_ID_CARD": (()=>CSCA_TREE_URL_ID_CARD),
    "CSCA_TREE_URL_STAGING": (()=>CSCA_TREE_URL_STAGING),
    "CSCA_TREE_URL_STAGING_ID_CARD": (()=>CSCA_TREE_URL_STAGING_ID_CARD),
    "DEFAULT_MAJORITY": (()=>DEFAULT_MAJORITY),
    "DEFAULT_RPC_URL": (()=>DEFAULT_RPC_URL),
    "DEFAULT_USER_ID_TYPE": (()=>DEFAULT_USER_ID_TYPE),
    "DEVELOPMENT_MODE": (()=>DEVELOPMENT_MODE),
    "DSC_TREE_DEPTH": (()=>DSC_TREE_DEPTH),
    "DSC_TREE_URL": (()=>DSC_TREE_URL),
    "DSC_TREE_URL_ID_CARD": (()=>DSC_TREE_URL_ID_CARD),
    "DSC_TREE_URL_STAGING": (()=>DSC_TREE_URL_STAGING),
    "DSC_TREE_URL_STAGING_ID_CARD": (()=>DSC_TREE_URL_STAGING_ID_CARD),
    "DscVerifierId": (()=>DscVerifierId),
    "ECDSA_K_LENGTH_FACTOR": (()=>ECDSA_K_LENGTH_FACTOR),
    "IDENTITY_TREE_URL": (()=>IDENTITY_TREE_URL),
    "IDENTITY_TREE_URL_ID_CARD": (()=>IDENTITY_TREE_URL_ID_CARD),
    "IDENTITY_TREE_URL_STAGING": (()=>IDENTITY_TREE_URL_STAGING),
    "IDENTITY_TREE_URL_STAGING_ID_CARD": (()=>IDENTITY_TREE_URL_STAGING_ID_CARD),
    "ID_CARD_ATTESTATION_ID": (()=>ID_CARD_ATTESTATION_ID),
    "MAX_BYTES_IN_FIELD": (()=>MAX_BYTES_IN_FIELD),
    "MAX_CERT_BYTES": (()=>MAX_CERT_BYTES),
    "MAX_DATAHASHES_LEN": (()=>MAX_DATAHASHES_LEN),
    "MAX_FORBIDDEN_COUNTRIES_LIST_LENGTH": (()=>MAX_FORBIDDEN_COUNTRIES_LIST_LENGTH),
    "MAX_PADDED_ECONTENT_LEN": (()=>MAX_PADDED_ECONTENT_LEN),
    "MAX_PADDED_SIGNED_ATTR_LEN": (()=>MAX_PADDED_SIGNED_ATTR_LEN),
    "MAX_PUBKEY_DSC_BYTES": (()=>MAX_PUBKEY_DSC_BYTES),
    "OFAC_TREE_LEVELS": (()=>OFAC_TREE_LEVELS),
    "PASSPORT_ATTESTATION_ID": (()=>PASSPORT_ATTESTATION_ID),
    "PCR0_MANAGER_ADDRESS": (()=>PCR0_MANAGER_ADDRESS),
    "REDIRECT_URL": (()=>REDIRECT_URL),
    "REGISTER_CONTRACT_ADDRESS": (()=>REGISTER_CONTRACT_ADDRESS),
    "RPC_URL": (()=>RPC_URL),
    "RegisterVerifierId": (()=>RegisterVerifierId),
    "SBT_CONTRACT_ADDRESS": (()=>SBT_CONTRACT_ADDRESS),
    "SignatureAlgorithmIndex": (()=>SignatureAlgorithmIndex),
    "TREE_TRACKER_URL": (()=>TREE_TRACKER_URL),
    "TREE_URL": (()=>TREE_URL),
    "TREE_URL_STAGING": (()=>TREE_URL_STAGING),
    "WS_DB_RELAYER": (()=>WS_DB_RELAYER),
    "WS_DB_RELAYER_STAGING": (()=>WS_DB_RELAYER_STAGING),
    "WS_RPC_URL_VC_AND_DISCLOSE": (()=>WS_RPC_URL_VC_AND_DISCLOSE),
    "attributeToPosition": (()=>attributeToPosition),
    "attributeToPosition_ID": (()=>attributeToPosition_ID),
    "circuitNameFromMode": (()=>circuitNameFromMode),
    "circuitToSelectorMode": (()=>circuitToSelectorMode),
    "contribute_publicKey": (()=>contribute_publicKey),
    "countryCodes": (()=>countryCodes),
    "getCountryCode": (()=>getCountryCode),
    "hashAlgos": (()=>hashAlgos),
    "k_csca": (()=>k_csca),
    "k_dsc": (()=>k_dsc),
    "k_dsc_3072": (()=>k_dsc_3072),
    "k_dsc_4096": (()=>k_dsc_4096),
    "k_dsc_ecdsa": (()=>k_dsc_ecdsa),
    "max_csca_bytes": (()=>max_csca_bytes),
    "max_dsc_bytes": (()=>max_dsc_bytes),
    "n_csca": (()=>n_csca),
    "n_dsc": (()=>n_dsc),
    "n_dsc_3072": (()=>n_dsc_3072),
    "n_dsc_4096": (()=>n_dsc_4096),
    "n_dsc_ecdsa": (()=>n_dsc_ecdsa),
    "revealedDataTypes": (()=>revealedDataTypes),
    "saltLengths": (()=>saltLengths)
});
const TREE_TRACKER_URL = 'https://tree.self.xyz';
const CSCA_TREE_DEPTH = 12;
const DSC_TREE_DEPTH = 21;
const COMMITMENT_TREE_DEPTH = 33;
const DEFAULT_USER_ID_TYPE = 'uuid';
const REDIRECT_URL = 'https://redirect.self.xyz';
const WS_RPC_URL_VC_AND_DISCLOSE = 'ws://disclose.proving.self.xyz:8888/';
const WS_DB_RELAYER = 'wss://websocket.self.xyz';
const WS_DB_RELAYER_STAGING = 'wss://websocket.staging.self.xyz';
const API_URL = 'https://api.self.xyz';
const TREE_URL = 'https://tree.self.xyz';
const TREE_URL_STAGING = 'https://tree.staging.self.xyz';
const API_URL_STAGING = 'https://api.staging.self.xyz';
const CSCA_TREE_URL = 'https://tree.self.xyz/csca';
const DSC_TREE_URL = 'https://tree.self.xyz/dsc';
const CSCA_TREE_URL_STAGING = 'https://tree.staging.self.xyz/csca';
const DSC_TREE_URL_STAGING = 'https://tree.staging.self.xyz/dsc';
const IDENTITY_TREE_URL = 'https://tree.self.xyz/identity';
const IDENTITY_TREE_URL_STAGING = 'https://tree.staging.self.xyz/identity';
const CSCA_TREE_URL_ID_CARD = 'https://tree.self.xyz/csca-id';
const DSC_TREE_URL_ID_CARD = 'https://tree.self.xyz/dsc-id';
const CSCA_TREE_URL_STAGING_ID_CARD = 'https://tree.staging.self.xyz/csca-id';
const DSC_TREE_URL_STAGING_ID_CARD = 'https://tree.staging.self.xyz/dsc-id';
const IDENTITY_TREE_URL_ID_CARD = 'https://tree.self.xyz/identity-id';
const IDENTITY_TREE_URL_STAGING_ID_CARD = 'https://tree.staging.self.xyz/identity-id';
const PASSPORT_ATTESTATION_ID = '1'; //"8518753152044246090169372947057357973469996808638122125210848696986717482788"
const ID_CARD_ATTESTATION_ID = '2';
const CHAIN_NAME = 'celo';
const RPC_URL = 'https://forno.celo.org';
const PCR0_MANAGER_ADDRESS = '0xE36d4EE5Fd3916e703A46C21Bb3837dB7680C8B8';
const DEVELOPMENT_MODE = true;
const DEFAULT_MAJORITY = '18';
const hashAlgos = [
    'sha512',
    'sha384',
    'sha256',
    'sha224',
    'sha1'
];
const saltLengths = [
    64,
    48,
    32
];
const MAX_FORBIDDEN_COUNTRIES_LIST_LENGTH = 40;
const OFAC_TREE_LEVELS = 64;
const MAX_PADDED_ECONTENT_LEN = {
    sha1: 384,
    sha224: 512,
    sha256: 512,
    sha384: 768,
    sha512: 896
};
const MAX_PADDED_SIGNED_ATTR_LEN = {
    sha1: 128,
    sha224: 128,
    sha256: 128,
    sha384: 256,
    sha512: 256
};
const MAX_CERT_BYTES = {
    rsa_sha256_65537_4096: 512,
    rsa_sha1_65537_4096: 640,
    rsapss_sha256_65537_2048: 640,
    rsapss_sha256_65537_3072: 640,
    rsapss_sha256_65537_4096: 768,
    rsapss_sha256_3_3072: 768,
    rsapss_sha256_3_4096: 768,
    rsapss_sha384_65537_3072: 768
};
const ECDSA_K_LENGTH_FACTOR = 2;
const CIRCUIT_TYPES = [
    'dsc',
    'register',
    'vc_and_disclose'
];
const circuitNameFromMode = {
    prove: 'prove',
    prove_onchain: 'prove',
    prove_offchain: 'prove',
    register: 'prove',
    vc_and_disclose: 'vc_and_disclose',
    dsc: 'dsc'
};
var RegisterVerifierId;
(function(RegisterVerifierId) {
    RegisterVerifierId[RegisterVerifierId["register_sha256_sha256_sha256_rsa_65537_4096"] = 0] = "register_sha256_sha256_sha256_rsa_65537_4096";
    RegisterVerifierId[RegisterVerifierId["register_sha256_sha256_sha256_ecdsa_brainpoolP384r1"] = 1] = "register_sha256_sha256_sha256_ecdsa_brainpoolP384r1";
    RegisterVerifierId[RegisterVerifierId["register_sha256_sha256_sha256_ecdsa_secp256r1"] = 2] = "register_sha256_sha256_sha256_ecdsa_secp256r1";
    RegisterVerifierId[RegisterVerifierId["register_sha256_sha256_sha256_ecdsa_secp384r1"] = 3] = "register_sha256_sha256_sha256_ecdsa_secp384r1";
    RegisterVerifierId[RegisterVerifierId["register_sha256_sha256_sha256_rsa_3_4096"] = 4] = "register_sha256_sha256_sha256_rsa_3_4096";
    RegisterVerifierId[RegisterVerifierId["register_sha256_sha256_sha256_rsapss_3_32_2048"] = 5] = "register_sha256_sha256_sha256_rsapss_3_32_2048";
    RegisterVerifierId[RegisterVerifierId["register_sha256_sha256_sha256_rsapss_65537_32_2048"] = 6] = "register_sha256_sha256_sha256_rsapss_65537_32_2048";
    RegisterVerifierId[RegisterVerifierId["register_sha256_sha256_sha256_rsapss_65537_32_3072"] = 7] = "register_sha256_sha256_sha256_rsapss_65537_32_3072";
    RegisterVerifierId[RegisterVerifierId["register_sha384_sha384_sha384_ecdsa_brainpoolP384r1"] = 8] = "register_sha384_sha384_sha384_ecdsa_brainpoolP384r1";
    RegisterVerifierId[RegisterVerifierId["register_sha384_sha384_sha384_ecdsa_brainpoolP512r1"] = 9] = "register_sha384_sha384_sha384_ecdsa_brainpoolP512r1";
    RegisterVerifierId[RegisterVerifierId["register_sha384_sha384_sha384_ecdsa_secp384r1"] = 10] = "register_sha384_sha384_sha384_ecdsa_secp384r1";
    RegisterVerifierId[RegisterVerifierId["register_sha512_sha512_sha512_ecdsa_brainpoolP512r1"] = 11] = "register_sha512_sha512_sha512_ecdsa_brainpoolP512r1";
    RegisterVerifierId[RegisterVerifierId["register_sha512_sha512_sha512_rsa_65537_4096"] = 12] = "register_sha512_sha512_sha512_rsa_65537_4096";
    RegisterVerifierId[RegisterVerifierId["register_sha512_sha512_sha512_rsapss_65537_64_2048"] = 13] = "register_sha512_sha512_sha512_rsapss_65537_64_2048";
    RegisterVerifierId[RegisterVerifierId["register_sha1_sha1_sha1_rsa_65537_4096"] = 14] = "register_sha1_sha1_sha1_rsa_65537_4096";
    RegisterVerifierId[RegisterVerifierId["register_sha1_sha256_sha256_rsa_65537_4096"] = 15] = "register_sha1_sha256_sha256_rsa_65537_4096";
    RegisterVerifierId[RegisterVerifierId["register_sha224_sha224_sha224_ecdsa_brainpoolP224r1"] = 16] = "register_sha224_sha224_sha224_ecdsa_brainpoolP224r1";
    RegisterVerifierId[RegisterVerifierId["register_sha256_sha224_sha224_ecdsa_secp224r1"] = 17] = "register_sha256_sha224_sha224_ecdsa_secp224r1";
    RegisterVerifierId[RegisterVerifierId["register_sha256_sha256_sha256_ecdsa_brainpoolP256r1"] = 18] = "register_sha256_sha256_sha256_ecdsa_brainpoolP256r1";
    RegisterVerifierId[RegisterVerifierId["register_sha1_sha1_sha1_ecdsa_brainpoolP224r1"] = 19] = "register_sha1_sha1_sha1_ecdsa_brainpoolP224r1";
    RegisterVerifierId[RegisterVerifierId["register_sha384_sha384_sha384_rsapss_65537_48_2048"] = 20] = "register_sha384_sha384_sha384_rsapss_65537_48_2048";
    RegisterVerifierId[RegisterVerifierId["register_sha1_sha1_sha1_ecdsa_secp256r1"] = 21] = "register_sha1_sha1_sha1_ecdsa_secp256r1";
    RegisterVerifierId[RegisterVerifierId["register_sha256_sha256_sha256_rsapss_65537_64_2048"] = 22] = "register_sha256_sha256_sha256_rsapss_65537_64_2048";
    RegisterVerifierId[RegisterVerifierId["register_sha512_sha512_sha256_rsa_65537_4096"] = 23] = "register_sha512_sha512_sha256_rsa_65537_4096";
    RegisterVerifierId[RegisterVerifierId["register_sha512_sha512_sha512_ecdsa_secp521r1"] = 24] = "register_sha512_sha512_sha512_ecdsa_secp521r1";
    RegisterVerifierId[RegisterVerifierId["register_id_sha256_sha256_sha256_rsa_65537_4096"] = 25] = "register_id_sha256_sha256_sha256_rsa_65537_4096";
    RegisterVerifierId[RegisterVerifierId["register_sha256_sha256_sha224_ecdsa_secp224r1"] = 26] = "register_sha256_sha256_sha224_ecdsa_secp224r1";
    RegisterVerifierId[RegisterVerifierId["register_id_sha1_sha1_sha1_ecdsa_brainpoolP224r1"] = 27] = "register_id_sha1_sha1_sha1_ecdsa_brainpoolP224r1";
    RegisterVerifierId[RegisterVerifierId["register_id_sha1_sha1_sha1_ecdsa_secp256r1"] = 28] = "register_id_sha1_sha1_sha1_ecdsa_secp256r1";
    RegisterVerifierId[RegisterVerifierId["register_id_sha1_sha1_sha1_rsa_65537_4096"] = 29] = "register_id_sha1_sha1_sha1_rsa_65537_4096";
    RegisterVerifierId[RegisterVerifierId["register_id_sha1_sha256_sha256_rsa_65537_4096"] = 30] = "register_id_sha1_sha256_sha256_rsa_65537_4096";
    RegisterVerifierId[RegisterVerifierId["register_id_sha224_sha224_sha224_ecdsa_brainpoolP224r1"] = 31] = "register_id_sha224_sha224_sha224_ecdsa_brainpoolP224r1";
    RegisterVerifierId[RegisterVerifierId["register_id_sha256_sha224_sha224_ecdsa_secp224r1"] = 32] = "register_id_sha256_sha224_sha224_ecdsa_secp224r1";
    RegisterVerifierId[RegisterVerifierId["register_id_sha256_sha256_sha224_ecdsa_secp224r1"] = 33] = "register_id_sha256_sha256_sha224_ecdsa_secp224r1";
    RegisterVerifierId[RegisterVerifierId["register_id_sha256_sha256_sha256_ecdsa_brainpoolP256r1"] = 34] = "register_id_sha256_sha256_sha256_ecdsa_brainpoolP256r1";
    RegisterVerifierId[RegisterVerifierId["register_id_sha256_sha256_sha256_ecdsa_brainpoolP384r1"] = 35] = "register_id_sha256_sha256_sha256_ecdsa_brainpoolP384r1";
    RegisterVerifierId[RegisterVerifierId["register_id_sha256_sha256_sha256_ecdsa_secp256r1"] = 36] = "register_id_sha256_sha256_sha256_ecdsa_secp256r1";
    RegisterVerifierId[RegisterVerifierId["register_id_sha256_sha256_sha256_ecdsa_secp384r1"] = 37] = "register_id_sha256_sha256_sha256_ecdsa_secp384r1";
    RegisterVerifierId[RegisterVerifierId["register_id_sha256_sha256_sha256_rsa_3_4096"] = 38] = "register_id_sha256_sha256_sha256_rsa_3_4096";
    RegisterVerifierId[RegisterVerifierId["register_id_sha256_sha256_sha256_rsapss_3_32_2048"] = 39] = "register_id_sha256_sha256_sha256_rsapss_3_32_2048";
    RegisterVerifierId[RegisterVerifierId["register_id_sha256_sha256_sha256_rsapss_65537_32_2048"] = 40] = "register_id_sha256_sha256_sha256_rsapss_65537_32_2048";
    RegisterVerifierId[RegisterVerifierId["register_id_sha256_sha256_sha256_rsapss_65537_32_3072"] = 41] = "register_id_sha256_sha256_sha256_rsapss_65537_32_3072";
    RegisterVerifierId[RegisterVerifierId["register_id_sha256_sha256_sha256_rsapss_65537_64_2048"] = 42] = "register_id_sha256_sha256_sha256_rsapss_65537_64_2048";
    RegisterVerifierId[RegisterVerifierId["register_id_sha384_sha384_sha384_ecdsa_brainpoolP384r1"] = 43] = "register_id_sha384_sha384_sha384_ecdsa_brainpoolP384r1";
    RegisterVerifierId[RegisterVerifierId["register_id_sha384_sha384_sha384_ecdsa_brainpoolP512r1"] = 44] = "register_id_sha384_sha384_sha384_ecdsa_brainpoolP512r1";
    RegisterVerifierId[RegisterVerifierId["register_id_sha384_sha384_sha384_ecdsa_secp384r1"] = 45] = "register_id_sha384_sha384_sha384_ecdsa_secp384r1";
    RegisterVerifierId[RegisterVerifierId["register_id_sha384_sha384_sha384_rsapss_65537_48_2048"] = 46] = "register_id_sha384_sha384_sha384_rsapss_65537_48_2048";
    RegisterVerifierId[RegisterVerifierId["register_id_sha512_sha512_sha256_rsa_65537_4096"] = 47] = "register_id_sha512_sha512_sha256_rsa_65537_4096";
    RegisterVerifierId[RegisterVerifierId["register_id_sha512_sha512_sha512_ecdsa_brainpoolP512r1"] = 48] = "register_id_sha512_sha512_sha512_ecdsa_brainpoolP512r1";
    RegisterVerifierId[RegisterVerifierId["register_id_sha512_sha512_sha512_ecdsa_secp521r1"] = 49] = "register_id_sha512_sha512_sha512_ecdsa_secp521r1";
    RegisterVerifierId[RegisterVerifierId["register_id_sha512_sha512_sha512_rsa_65537_4096"] = 50] = "register_id_sha512_sha512_sha512_rsa_65537_4096";
    RegisterVerifierId[RegisterVerifierId["register_id_sha512_sha512_sha512_rsapss_65537_64_2048"] = 51] = "register_id_sha512_sha512_sha512_rsapss_65537_64_2048";
})(RegisterVerifierId || (RegisterVerifierId = {}));
var DscVerifierId;
(function(DscVerifierId) {
    DscVerifierId[DscVerifierId["dsc_sha1_ecdsa_brainpoolP256r1"] = 0] = "dsc_sha1_ecdsa_brainpoolP256r1";
    DscVerifierId[DscVerifierId["dsc_sha1_rsa_65537_4096"] = 1] = "dsc_sha1_rsa_65537_4096";
    DscVerifierId[DscVerifierId["dsc_sha256_ecdsa_brainpoolP256r1"] = 2] = "dsc_sha256_ecdsa_brainpoolP256r1";
    DscVerifierId[DscVerifierId["dsc_sha256_ecdsa_brainpoolP384r1"] = 3] = "dsc_sha256_ecdsa_brainpoolP384r1";
    DscVerifierId[DscVerifierId["dsc_sha256_ecdsa_secp256r1"] = 4] = "dsc_sha256_ecdsa_secp256r1";
    DscVerifierId[DscVerifierId["dsc_sha256_ecdsa_secp384r1"] = 5] = "dsc_sha256_ecdsa_secp384r1";
    DscVerifierId[DscVerifierId["dsc_sha256_ecdsa_secp521r1"] = 6] = "dsc_sha256_ecdsa_secp521r1";
    DscVerifierId[DscVerifierId["dsc_sha256_rsa_65537_4096"] = 7] = "dsc_sha256_rsa_65537_4096";
    DscVerifierId[DscVerifierId["dsc_sha256_rsapss_3_32_3072"] = 8] = "dsc_sha256_rsapss_3_32_3072";
    DscVerifierId[DscVerifierId["dsc_sha256_rsapss_65537_32_3072"] = 9] = "dsc_sha256_rsapss_65537_32_3072";
    DscVerifierId[DscVerifierId["dsc_sha256_rsapss_65537_32_4096"] = 10] = "dsc_sha256_rsapss_65537_32_4096";
    DscVerifierId[DscVerifierId["dsc_sha384_ecdsa_brainpoolP384r1"] = 11] = "dsc_sha384_ecdsa_brainpoolP384r1";
    DscVerifierId[DscVerifierId["dsc_sha384_ecdsa_brainpoolP512r1"] = 12] = "dsc_sha384_ecdsa_brainpoolP512r1";
    DscVerifierId[DscVerifierId["dsc_sha384_ecdsa_secp384r1"] = 13] = "dsc_sha384_ecdsa_secp384r1";
    DscVerifierId[DscVerifierId["dsc_sha512_ecdsa_brainpoolP512r1"] = 14] = "dsc_sha512_ecdsa_brainpoolP512r1";
    DscVerifierId[DscVerifierId["dsc_sha512_ecdsa_secp521r1"] = 15] = "dsc_sha512_ecdsa_secp521r1";
    DscVerifierId[DscVerifierId["dsc_sha512_rsa_65537_4096"] = 16] = "dsc_sha512_rsa_65537_4096";
    DscVerifierId[DscVerifierId["dsc_sha512_rsapss_65537_64_4096"] = 17] = "dsc_sha512_rsapss_65537_64_4096";
    DscVerifierId[DscVerifierId["dsc_sha256_rsapss_3_32_4096"] = 18] = "dsc_sha256_rsapss_3_32_4096";
    DscVerifierId[DscVerifierId["dsc_sha1_ecdsa_secp256r1"] = 19] = "dsc_sha1_ecdsa_secp256r1";
})(DscVerifierId || (DscVerifierId = {}));
var SignatureAlgorithmIndex;
(function(SignatureAlgorithmIndex) {
    SignatureAlgorithmIndex[SignatureAlgorithmIndex["rsa_sha256_65537_2048"] = 1] = "rsa_sha256_65537_2048";
    SignatureAlgorithmIndex[SignatureAlgorithmIndex["rsa_sha1_65537_2048"] = 3] = "rsa_sha1_65537_2048";
    SignatureAlgorithmIndex[SignatureAlgorithmIndex["rsapss_sha256_65537_2048"] = 4] = "rsapss_sha256_65537_2048";
    SignatureAlgorithmIndex[SignatureAlgorithmIndex["ecdsa_sha1_secp256r1_256"] = 7] = "ecdsa_sha1_secp256r1_256";
    SignatureAlgorithmIndex[SignatureAlgorithmIndex["ecdsa_sha256_secp256r1_256"] = 8] = "ecdsa_sha256_secp256r1_256";
    SignatureAlgorithmIndex[SignatureAlgorithmIndex["ecdsa_sha384_secp384r1_384"] = 9] = "ecdsa_sha384_secp384r1_384";
    SignatureAlgorithmIndex[SignatureAlgorithmIndex["rsa_sha256_65537_4096"] = 10] = "rsa_sha256_65537_4096";
    SignatureAlgorithmIndex[SignatureAlgorithmIndex["rsa_sha1_65537_4096"] = 11] = "rsa_sha1_65537_4096";
    SignatureAlgorithmIndex[SignatureAlgorithmIndex["rsapss_sha256_65537_4096"] = 12] = "rsapss_sha256_65537_4096";
    SignatureAlgorithmIndex[SignatureAlgorithmIndex["rsa_sha256_3_2048"] = 13] = "rsa_sha256_3_2048";
    SignatureAlgorithmIndex[SignatureAlgorithmIndex["rsa_sha256_65537_3072"] = 14] = "rsa_sha256_65537_3072";
    SignatureAlgorithmIndex[SignatureAlgorithmIndex["rsa_sha512_65537_4096"] = 15] = "rsa_sha512_65537_4096";
    SignatureAlgorithmIndex[SignatureAlgorithmIndex["rsapss_sha256_3_3072"] = 16] = "rsapss_sha256_3_3072";
    SignatureAlgorithmIndex[SignatureAlgorithmIndex["rsapss_sha256_3_4096"] = 17] = "rsapss_sha256_3_4096";
    SignatureAlgorithmIndex[SignatureAlgorithmIndex["rsapss_sha384_65537_3072"] = 18] = "rsapss_sha384_65537_3072";
    SignatureAlgorithmIndex[SignatureAlgorithmIndex["rsapss_sha256_65537_3072"] = 19] = "rsapss_sha256_65537_3072";
    SignatureAlgorithmIndex[SignatureAlgorithmIndex["ecdsa_sha256_brainpoolP256r1_256"] = 21] = "ecdsa_sha256_brainpoolP256r1_256";
    SignatureAlgorithmIndex[SignatureAlgorithmIndex["ecdsa_sha384_brainpoolP384r1_384"] = 22] = "ecdsa_sha384_brainpoolP384r1_384";
    SignatureAlgorithmIndex[SignatureAlgorithmIndex["ecdsa_sha256_secp384r1_384"] = 23] = "ecdsa_sha256_secp384r1_384";
    SignatureAlgorithmIndex[SignatureAlgorithmIndex["ecdsa_sha384_brainpoolP256r1_256"] = 24] = "ecdsa_sha384_brainpoolP256r1_256";
    SignatureAlgorithmIndex[SignatureAlgorithmIndex["ecdsa_sha512_brainpoolP256r1_256"] = 25] = "ecdsa_sha512_brainpoolP256r1_256";
    SignatureAlgorithmIndex[SignatureAlgorithmIndex["ecdsa_sha512_brainpoolP384r1_384"] = 26] = "ecdsa_sha512_brainpoolP384r1_384";
    SignatureAlgorithmIndex[SignatureAlgorithmIndex["ecdsa_sha1_brainpoolP224r1_224"] = 27] = "ecdsa_sha1_brainpoolP224r1_224";
    SignatureAlgorithmIndex[SignatureAlgorithmIndex["ecdsa_sha256_brainpoolP224r1_224"] = 28] = "ecdsa_sha256_brainpoolP224r1_224";
    SignatureAlgorithmIndex[SignatureAlgorithmIndex["ecdsa_sha512_brainpoolP512r1_512"] = 29] = "ecdsa_sha512_brainpoolP512r1_512";
    SignatureAlgorithmIndex[SignatureAlgorithmIndex["ecdsa_sha224_brainpoolP224r1_224"] = 30] = "ecdsa_sha224_brainpoolP224r1_224";
    SignatureAlgorithmIndex[SignatureAlgorithmIndex["rsa_sha256_3_4096"] = 32] = "rsa_sha256_3_4096";
    SignatureAlgorithmIndex[SignatureAlgorithmIndex["rsa_sha1_3_4096"] = 33] = "rsa_sha1_3_4096";
    SignatureAlgorithmIndex[SignatureAlgorithmIndex["rsa_sha384_65537_4096"] = 34] = "rsa_sha384_65537_4096";
    SignatureAlgorithmIndex[SignatureAlgorithmIndex["rsapss_sha384_65537_4096"] = 35] = "rsapss_sha384_65537_4096";
    SignatureAlgorithmIndex[SignatureAlgorithmIndex["ecdsa_sha1_brainpoolP256r1_256"] = 36] = "ecdsa_sha1_brainpoolP256r1_256";
    SignatureAlgorithmIndex[SignatureAlgorithmIndex["ecdsa_sha512_secp521r1_521"] = 41] = "ecdsa_sha512_secp521r1_521";
})(SignatureAlgorithmIndex || (SignatureAlgorithmIndex = {}));
const attributeToPosition = {
    issuing_state: [
        2,
        4
    ],
    name: [
        5,
        43
    ],
    passport_number: [
        44,
        52
    ],
    nationality: [
        54,
        56
    ],
    date_of_birth: [
        57,
        62
    ],
    gender: [
        64,
        64
    ],
    expiry_date: [
        65,
        70
    ],
    older_than: [
        88,
        89
    ],
    ofac: [
        90,
        90
    ]
};
const attributeToPosition_ID = {
    issuing_state: [
        2,
        4
    ],
    name: [
        60,
        89
    ],
    passport_number: [
        5,
        13
    ],
    nationality: [
        45,
        47
    ],
    date_of_birth: [
        30,
        35
    ],
    gender: [
        37,
        37
    ],
    expiry_date: [
        38,
        43
    ],
    older_than: [
        90,
        91
    ],
    ofac: [
        92,
        92
    ]
};
const circuitToSelectorMode = {
    register: [
        0,
        0
    ],
    prove_onchain: [
        1,
        0
    ],
    prove_offchain: [
        1,
        1
    ]
};
const revealedDataTypes = {
    issuing_state: 0,
    name: 1,
    passport_number: 2,
    nationality: 3,
    date_of_birth: 4,
    gender: 5,
    expiry_date: 6,
    older_than: 7,
    passport_no_ofac: 8,
    name_and_dob_ofac: 9,
    name_and_yob_ofac: 10
};
const CIRCUIT_CONSTANTS = {
    REGISTER_NULLIFIER_INDEX: 0,
    REGISTER_COMMITMENT_INDEX: 1,
    REGISTER_MERKLE_ROOT_INDEX: 2,
    DSC_TREE_LEAF_INDEX: 0,
    DSC_CSCA_ROOT_INDEX: 1,
    VC_AND_DISCLOSE_REVEALED_DATA_PACKED_INDEX: 0,
    VC_AND_DISCLOSE_FORBIDDEN_COUNTRIES_LIST_PACKED_INDEX: 3,
    VC_AND_DISCLOSE_NULLIFIER_INDEX: 7,
    VC_AND_DISCLOSE_ATTESTATION_ID_INDEX: 8,
    VC_AND_DISCLOSE_MERKLE_ROOT_INDEX: 9,
    VC_AND_DISCLOSE_CURRENT_DATE_INDEX: 10,
    VC_AND_DISCLOSE_PASSPORT_NO_SMT_ROOT_INDEX: 16,
    VC_AND_DISCLOSE_NAME_DOB_SMT_ROOT_INDEX: 17,
    VC_AND_DISCLOSE_NAME_YOB_SMT_ROOT_INDEX: 18,
    VC_AND_DISCLOSE_SCOPE_INDEX: 19,
    VC_AND_DISCLOSE_USER_IDENTIFIER_INDEX: 20
};
const MAX_BYTES_IN_FIELD = 31;
const MAX_PUBKEY_DSC_BYTES = 525;
const MAX_DATAHASHES_LEN = 320; // max formatted and concatenated datagroup hashes length in bytes
const n_dsc = 120;
const n_dsc_3072 = 120;
const n_dsc_4096 = 120;
const k_dsc = 35;
const k_dsc_3072 = 35; //48;
const k_dsc_4096 = 35;
const n_csca = 120;
const k_csca = 35;
const n_dsc_ecdsa = 64;
const k_dsc_ecdsa = 4;
const max_dsc_bytes = 1792;
const max_csca_bytes = 1792;
const countryCodes = {
    AFG: 'Afghanistan',
    ALA: 'Aland Islands',
    ALB: 'Albania',
    DZA: 'Algeria',
    ASM: 'American Samoa',
    AND: 'Andorra',
    AGO: 'Angola',
    AIA: 'Anguilla',
    ATA: 'Antarctica',
    ATG: 'Antigua and Barbuda',
    ARG: 'Argentina',
    ARM: 'Armenia',
    ABW: 'Aruba',
    AUS: 'Australia',
    AUT: 'Austria',
    AZE: 'Azerbaijan',
    BHS: 'Bahamas',
    BHR: 'Bahrain',
    BGD: 'Bangladesh',
    BRB: 'Barbados',
    BLR: 'Belarus',
    BEL: 'Belgium',
    BLZ: 'Belize',
    BEN: 'Benin',
    BMU: 'Bermuda',
    BTN: 'Bhutan',
    BOL: 'Bolivia (Plurinational State of)',
    BES: 'Bonaire, Sint Eustatius and Saba',
    BIH: 'Bosnia and Herzegovina',
    BWA: 'Botswana',
    BVT: 'Bouvet Island',
    BRA: 'Brazil',
    IOT: 'British Indian Ocean Territory',
    BRN: 'Brunei Darussalam',
    BGR: 'Bulgaria',
    BFA: 'Burkina Faso',
    BDI: 'Burundi',
    CPV: 'Cabo Verde',
    KHM: 'Cambodia',
    CMR: 'Cameroon',
    CAN: 'Canada',
    CYM: 'Cayman Islands',
    CAF: 'Central African Republic',
    TCD: 'Chad',
    CHL: 'Chile',
    CHN: 'China',
    CXR: 'Christmas Island',
    CCK: 'Cocos (Keeling) Islands',
    COL: 'Colombia',
    COM: 'Comoros',
    COG: 'Congo',
    COD: 'Congo, Democratic Republic of the',
    COK: 'Cook Islands',
    CRI: 'Costa Rica',
    CIV: "Cote d'Ivoire",
    HRV: 'Croatia',
    CUB: 'Cuba',
    CUW: 'Curacao',
    CYP: 'Cyprus',
    CZE: 'Czechia',
    DNK: 'Denmark',
    DJI: 'Djibouti',
    DMA: 'Dominica',
    DOM: 'Dominican Republic',
    ECU: 'Ecuador',
    EGY: 'Egypt',
    SLV: 'El Salvador',
    GNQ: 'Equatorial Guinea',
    ERI: 'Eritrea',
    EST: 'Estonia',
    SWZ: 'Eswatini',
    ETH: 'Ethiopia',
    FLK: 'Falkland Islands (Malvinas)',
    FRO: 'Faroe Islands',
    FJI: 'Fiji',
    FIN: 'Finland',
    FRA: 'France',
    GUF: 'French Guiana',
    PYF: 'French Polynesia',
    ATF: 'French Southern Territories',
    GAB: 'Gabon',
    GMB: 'Gambia',
    GEO: 'Georgia',
    DEU: 'Germany',
    'D<<': 'Germany',
    GHA: 'Ghana',
    GIB: 'Gibraltar',
    GRC: 'Greece',
    GRL: 'Greenland',
    GRD: 'Grenada',
    GLP: 'Guadeloupe',
    GUM: 'Guam',
    GTM: 'Guatemala',
    GGY: 'Guernsey',
    GIN: 'Guinea',
    GNB: 'Guinea-Bissau',
    GUY: 'Guyana',
    HTI: 'Haiti',
    HMD: 'Heard Island and McDonald Islands',
    VAT: 'Holy See',
    HND: 'Honduras',
    HKG: 'Hong Kong',
    HUN: 'Hungary',
    ISL: 'Iceland',
    IND: 'India',
    IDN: 'Indonesia',
    IRN: 'Iran (Islamic Republic of)',
    IRQ: 'Iraq',
    IRL: 'Ireland',
    IMN: 'Isle of Man',
    ISR: 'Israel',
    ITA: 'Italy',
    JAM: 'Jamaica',
    JPN: 'Japan',
    JEY: 'Jersey',
    JOR: 'Jordan',
    KAZ: 'Kazakhstan',
    KEN: 'Kenya',
    KIR: 'Kiribati',
    PRK: "Korea (Democratic People's Republic of)",
    KOR: 'Korea, Republic of',
    KWT: 'Kuwait',
    KGZ: 'Kyrgyzstan',
    LAO: "Lao People's Democratic Republic",
    LVA: 'Latvia',
    LBN: 'Lebanon',
    LSO: 'Lesotho',
    LBR: 'Liberia',
    LBY: 'Libya',
    LIE: 'Liechtenstein',
    LTU: 'Lithuania',
    LUX: 'Luxembourg',
    MAC: 'Macao',
    MDG: 'Madagascar',
    MWI: 'Malawi',
    MYS: 'Malaysia',
    MDV: 'Maldives',
    MLI: 'Mali',
    MLT: 'Malta',
    MHL: 'Marshall Islands',
    MTQ: 'Martinique',
    MRT: 'Mauritania',
    MUS: 'Mauritius',
    MYT: 'Mayotte',
    MEX: 'Mexico',
    FSM: 'Micronesia (Federated States of)',
    MDA: 'Moldova, Republic of',
    MCO: 'Monaco',
    MNG: 'Mongolia',
    MNE: 'Montenegro',
    MSR: 'Montserrat',
    MAR: 'Morocco',
    MOZ: 'Mozambique',
    MMR: 'Myanmar',
    NAM: 'Namibia',
    NRU: 'Nauru',
    NPL: 'Nepal',
    NLD: 'Netherlands',
    NCL: 'New Caledonia',
    NZL: 'New Zealand',
    NIC: 'Nicaragua',
    NER: 'Niger',
    NGA: 'Nigeria',
    NIU: 'Niue',
    NFK: 'Norfolk Island',
    MKD: 'North Macedonia',
    MNP: 'Northern Mariana Islands',
    NOR: 'Norway',
    OMN: 'Oman',
    PAK: 'Pakistan',
    PLW: 'Palau',
    PSE: 'Palestine, State of',
    PAN: 'Panama',
    PNG: 'Papua New Guinea',
    PRY: 'Paraguay',
    PER: 'Peru',
    PHL: 'Philippines',
    PCN: 'Pitcairn',
    POL: 'Poland',
    PRT: 'Portugal',
    PRI: 'Puerto Rico',
    QAT: 'Qatar',
    REU: 'Reunion',
    ROU: 'Romania',
    RUS: 'Russian Federation',
    RWA: 'Rwanda',
    BLM: 'Saint Barthelemy',
    SHN: 'Saint Helena, Ascension and Tristan da Cunha',
    KNA: 'Saint Kitts and Nevis',
    LCA: 'Saint Lucia',
    MAF: 'Saint Martin (French part)',
    SPM: 'Saint Pierre and Miquelon',
    VCT: 'Saint Vincent and the Grenadines',
    WSM: 'Samoa',
    SMR: 'San Marino',
    STP: 'Sao Tome and Principe',
    SAU: 'Saudi Arabia',
    SEN: 'Senegal',
    SRB: 'Serbia',
    SYC: 'Seychelles',
    SLE: 'Sierra Leone',
    SGP: 'Singapore',
    SXM: 'Sint Maarten (Dutch part)',
    SVK: 'Slovakia',
    SVN: 'Slovenia',
    SLB: 'Solomon Islands',
    SOM: 'Somalia',
    ZAF: 'South Africa',
    SGS: 'South Georgia and the South Sandwich Islands',
    SSD: 'South Sudan',
    ESP: 'Spain',
    LKA: 'Sri Lanka',
    SDN: 'Sudan',
    SUR: 'Suriname',
    SJM: 'Svalbard and Jan Mayen',
    SWE: 'Sweden',
    CHE: 'Switzerland',
    SYR: 'Syrian Arab Republic',
    TWN: 'Taiwan, Province of China',
    TJK: 'Tajikistan',
    TZA: 'Tanzania, United Republic of',
    THA: 'Thailand',
    TLS: 'Timor-Leste',
    TGO: 'Togo',
    TKL: 'Tokelau',
    TON: 'Tonga',
    TTO: 'Trinidad and Tobago',
    TUN: 'Tunisia',
    TUR: 'Turkey',
    TKM: 'Turkmenistan',
    TCA: 'Turks and Caicos Islands',
    TUV: 'Tuvalu',
    UGA: 'Uganda',
    UKR: 'Ukraine',
    ARE: 'United Arab Emirates',
    GBR: 'United Kingdom of Great Britain and Northern Ireland',
    USA: 'United States of America',
    UMI: 'United States Minor Outlying Islands',
    URY: 'Uruguay',
    UZB: 'Uzbekistan',
    VUT: 'Vanuatu',
    VEN: 'Venezuela (Bolivarian Republic of)',
    VNM: 'Viet Nam',
    VGB: 'Virgin Islands (British)',
    VIR: 'Virgin Islands (U.S.)',
    WLF: 'Wallis and Futuna',
    ESH: 'Western Sahara',
    YEM: 'Yemen',
    ZMB: 'Zambia',
    ZWE: 'Zimbabwe'
};
function getCountryCode(countryName) {
    const entries = Object.entries(countryCodes);
    const found = entries.find(([_, name])=>name.toLowerCase() === countryName.toLowerCase());
    return found ? found[0] : 'undefined';
}
const contribute_publicKey = `-----BEGIN RSA PUBLIC KEY-----
MIICCgKCAgEAv/hm7FZZ2KBmaeDHmLoRwuWmCcNKT561RqbsW8ZuYSyPWJUldE9U
Cf0lW3K1H5lsSDkl0Cq84cooL9f6X59Mffb/N24ZKTdL0xdcPwjk4LbcrVm8qubL
0a/4uCNoZZ1my4nxbpLxYtbr8CNmUGvBOVKf8IcjsY6VghIZrO63G6BN/G44su1Z
WcHpboGt9SDQK4enCyKxnCD+PbDYlewSA0n3GRajFfZex1bj1EvrS2hTLv8oNH5e
9H+3TUke0uO6Ttl0bZepoMmPlpAXhJByISqC6SLth4WFIH+G1I/xt9AEM7hOfLMl
KQv/3wlLEgEueRryKAHB2tqkaDKVJyw+tOyWj2iWA+nVgQKAxO4hOw01ljyVbcx6
KboXwnamlZPFIx4tjEaZ+ClXCFqvXhE9LDFK11QsYzJZl0aRVfTNqcurhEt7SK0f
qzOBhID0Nxk4k9sW1uT6ocW1xp1SB2WotORssOKIAOLJM8IbPl6n/DkYNcfvyXI7
4BlUrf6M2DgZMYATabIy94AvopHJOyiRfh4NpQPDntWnShiI1em2MmtXiWFCdVFV
6/QfJTKVixJpVfDh386ALXc97EPWDMWIalUwYoV/eRSMnuV8nZ0+Ctp3Qrtk/JYd
+FWhKbtlPeRjmGVr6mVlvDJ7KqtY5/RqqwfWeXhXezGhQqQ/OoQQCRkCAwEAAQ==
-----END RSA PUBLIC KEY-----`;
const DEFAULT_RPC_URL = 'https://mainnet.optimism.io';
const REGISTER_CONTRACT_ADDRESS = '0x3F346FFdC5d583e4126AF01A02Ac5b9CdB3f1909';
const SBT_CONTRACT_ADDRESS = '0x601Fd54FD11C5E77DE84d877e55B829aff20f0A6';
}}),
"[project]/node_modules/.pnpm/@selfxyz+common@0.0.7_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/constants/countries.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "commonNames": (()=>commonNames),
    "countries": (()=>countries)
});
const commonNames = {
    AFG: 'Afghanistan',
    ALA: 'Aland Islands',
    ALB: 'Albania',
    DZA: 'Algeria',
    ASM: 'American Samoa',
    AND: 'Andorra',
    AGO: 'Angola',
    AIA: 'Anguilla',
    ATA: 'Antarctica',
    ATG: 'Antigua and Barbuda',
    ARG: 'Argentina',
    ARM: 'Armenia',
    ABW: 'Aruba',
    AUS: 'Australia',
    AUT: 'Austria',
    AZE: 'Azerbaijan',
    BHS: 'Bahamas',
    BHR: 'Bahrain',
    BGD: 'Bangladesh',
    BRB: 'Barbados',
    BLR: 'Belarus',
    BEL: 'Belgium',
    BLZ: 'Belize',
    BEN: 'Benin',
    BMU: 'Bermuda',
    BTN: 'Bhutan',
    BOL: 'Bolivia',
    BES: 'Bonaire, Sint Eustatius and Saba',
    BIH: 'Bosnia and Herzegovina',
    BWA: 'Botswana',
    BVT: 'Bouvet Island',
    BRA: 'Brazil',
    IOT: 'British Indian Ocean Territory',
    BRN: 'Brunei Darussalam',
    BGR: 'Bulgaria',
    BFA: 'Burkina Faso',
    BDI: 'Burundi',
    CPV: 'Cape Verde',
    KHM: 'Cambodia',
    CMR: 'Cameroon',
    CAN: 'Canada',
    CYM: 'Cayman Islands',
    CAF: 'Central African Republic',
    TCD: 'Chad',
    CHL: 'Chile',
    CHN: 'China',
    CXR: 'Christmas Island',
    CCK: 'Cocos Islands',
    COL: 'Colombia',
    COM: 'Comoros',
    COG: 'Congo',
    COD: 'Congo, Democratic Republic of the',
    COK: 'Cook Islands',
    CRI: 'Costa Rica',
    CIV: 'Ivory Coast',
    HRV: 'Croatia',
    CUB: 'Cuba',
    CUW: 'Curacao',
    CYP: 'Cyprus',
    CZE: 'Czechia',
    DNK: 'Denmark',
    DJI: 'Djibouti',
    DMA: 'Dominica',
    DOM: 'Dominican Republic',
    ECU: 'Ecuador',
    EGY: 'Egypt',
    SLV: 'El Salvador',
    GNQ: 'Equatorial Guinea',
    ERI: 'Eritrea',
    EST: 'Estonia',
    SWZ: 'Eswatini',
    ETH: 'Ethiopia',
    FLK: 'Falkland Islands',
    FRO: 'Faroe Islands',
    FJI: 'Fiji',
    FIN: 'Finland',
    FRA: 'France',
    GUF: 'French Guiana',
    PYF: 'French Polynesia',
    ATF: 'French Southern Territories',
    GAB: 'Gabon',
    GMB: 'Gambia',
    GEO: 'Georgia',
    DEU: 'Germany',
    'D<<': 'Germany',
    GHA: 'Ghana',
    GIB: 'Gibraltar',
    GRC: 'Greece',
    GRL: 'Greenland',
    GRD: 'Grenada',
    GLP: 'Guadeloupe',
    GUM: 'Guam',
    GTM: 'Guatemala',
    GGY: 'Guernsey',
    GIN: 'Guinea',
    GNB: 'Guinea-Bissau',
    GUY: 'Guyana',
    HTI: 'Haiti',
    HMD: 'Heard Island and McDonald Islands',
    VAT: 'Vatican City',
    HND: 'Honduras',
    HKG: 'Hong Kong',
    HUN: 'Hungary',
    ISL: 'Iceland',
    IND: 'India',
    IDN: 'Indonesia',
    IRN: 'Iran',
    IRQ: 'Iraq',
    IRL: 'Ireland',
    IMN: 'Isle of Man',
    ISR: 'Israel',
    ITA: 'Italy',
    JAM: 'Jamaica',
    JPN: 'Japan',
    JEY: 'Jersey',
    JOR: 'Jordan',
    KAZ: 'Kazakhstan',
    KEN: 'Kenya',
    KIR: 'Kiribati',
    PRK: 'North Korea',
    KOR: 'South Korea',
    KWT: 'Kuwait',
    KGZ: 'Kyrgyzstan',
    LAO: 'Laos',
    LVA: 'Latvia',
    LBN: 'Lebanon',
    LSO: 'Lesotho',
    LBR: 'Liberia',
    LBY: 'Libya',
    LIE: 'Liechtenstein',
    LTU: 'Lithuania',
    LUX: 'Luxembourg',
    MAC: 'Macao',
    MDG: 'Madagascar',
    MWI: 'Malawi',
    MYS: 'Malaysia',
    MDV: 'Maldives',
    MLI: 'Mali',
    MLT: 'Malta',
    MHL: 'Marshall Islands',
    MTQ: 'Martinique',
    MRT: 'Mauritania',
    MUS: 'Mauritius',
    MYT: 'Mayotte',
    MEX: 'Mexico',
    FSM: 'Micronesia',
    MDA: 'Moldova',
    MCO: 'Monaco',
    MNG: 'Mongolia',
    MNE: 'Montenegro',
    MSR: 'Montserrat',
    MAR: 'Morocco',
    MOZ: 'Mozambique',
    MMR: 'Myanmar',
    NAM: 'Namibia',
    NRU: 'Nauru',
    NPL: 'Nepal',
    NLD: 'Netherlands',
    NCL: 'New Caledonia',
    NZL: 'New Zealand',
    NIC: 'Nicaragua',
    NER: 'Niger',
    NGA: 'Nigeria',
    NIU: 'Niue',
    NFK: 'Norfolk Island',
    MKD: 'North Macedonia',
    MNP: 'Northern Mariana Islands',
    NOR: 'Norway',
    OMN: 'Oman',
    PAK: 'Pakistan',
    PLW: 'Palau',
    PSE: 'Palestine, State of',
    PAN: 'Panama',
    PNG: 'Papua New Guinea',
    PRY: 'Paraguay',
    PER: 'Peru',
    PHL: 'Philippines',
    PCN: 'Pitcairn',
    POL: 'Poland',
    PRT: 'Portugal',
    PRI: 'Puerto Rico',
    QAT: 'Qatar',
    REU: 'Reunion',
    ROU: 'Romania',
    RUS: 'Russian Federation',
    RWA: 'Rwanda',
    BLM: 'Saint Barthelemy',
    SHN: 'Saint Helena, Ascension and Tristan da Cunha',
    KNA: 'Saint Kitts and Nevis',
    LCA: 'Saint Lucia',
    MAF: 'Saint Martin (French part)',
    SPM: 'Saint Pierre and Miquelon',
    VCT: 'Saint Vincent and the Grenadines',
    WSM: 'Samoa',
    SMR: 'San Marino',
    STP: 'Sao Tome and Principe',
    SAU: 'Saudi Arabia',
    SEN: 'Senegal',
    SRB: 'Serbia',
    SYC: 'Seychelles',
    SLE: 'Sierra Leone',
    SGP: 'Singapore',
    SXM: 'Sint Maarten (Dutch part)',
    SVK: 'Slovakia',
    SVN: 'Slovenia',
    SLB: 'Solomon Islands',
    SOM: 'Somalia',
    ZAF: 'South Africa',
    SGS: 'South Georgia and the South Sandwich Islands',
    SSD: 'South Sudan',
    ESP: 'Spain',
    LKA: 'Sri Lanka',
    SDN: 'Sudan',
    SUR: 'Suriname',
    SJM: 'Svalbard and Jan Mayen',
    SWE: 'Sweden',
    CHE: 'Switzerland',
    SYR: 'Syrian Arab Republic',
    TWN: 'Taiwan, Province of China',
    TJK: 'Tajikistan',
    TZA: 'Tanzania, United Republic of',
    THA: 'Thailand',
    TLS: 'Timor-Leste',
    TGO: 'Togo',
    TKL: 'Tokelau',
    TON: 'Tonga',
    TTO: 'Trinidad and Tobago',
    TUN: 'Tunisia',
    TUR: 'Turkey',
    TKM: 'Turkmenistan',
    TCA: 'Turks and Caicos Islands',
    TUV: 'Tuvalu',
    UGA: 'Uganda',
    UKR: 'Ukraine',
    ARE: 'United Arab Emirates',
    GBR: 'United Kingdom of Great Britain and Northern Ireland',
    USA: 'United States of America',
    UMI: 'United States Minor Outlying Islands',
    URY: 'Uruguay',
    UZB: 'Uzbekistan',
    VUT: 'Vanuatu',
    VEN: 'Venezuela (Bolivarian Republic of)',
    VNM: 'Viet Nam',
    VGB: 'Virgin Islands (British)',
    VIR: 'Virgin Islands (U.S.)',
    WLF: 'Wallis and Futuna',
    ESH: 'Western Sahara',
    YEM: 'Yemen',
    ZMB: 'Zambia',
    ZWE: 'Zimbabwe',
    EUE: 'European Union',
    UNO: 'United Nations',
    XCE: 'Council of Europe',
    XPO: 'International Criminal Police Organization',
    XOM: 'Sovereign Military Order of Malta'
};
const countries = {
    AFGHANISTAN: 'AFG',
    ALAND_ISLANDS: 'ALA',
    ALBANIA: 'ALB',
    ALGERIA: 'DZA',
    AMERICAN_SAMOA: 'ASM',
    ANDORRA: 'AND',
    ANGOLA: 'AGO',
    ANGUILLA: 'AIA',
    ANTARCTICA: 'ATA',
    ANTIGUA_AND_BARBUDA: 'ATG',
    ARGENTINA: 'ARG',
    ARMENIA: 'ARM',
    ARUBA: 'ABW',
    AUSTRALIA: 'AUS',
    AUSTRIA: 'AUT',
    AZERBAIJAN: 'AZE',
    BAHAMAS: 'BHS',
    BAHRAIN: 'BHR',
    BANGLADESH: 'BGD',
    BARBADOS: 'BRB',
    BELARUS: 'BLR',
    BELGIUM: 'BEL',
    BELIZE: 'BLZ',
    BENIN: 'BEN',
    BERMUDA: 'BMU',
    BHUTAN: 'BTN',
    BOLIVIA: 'BOL',
    BONAIRE_SINT_EUSTATIUS_AND_SABA: 'BES',
    BOSNIA_AND_HERZEGOVINA: 'BIH',
    BOTSWANA: 'BWA',
    BOUVET_ISLAND: 'BVT',
    BRAZIL: 'BRA',
    BRITISH_INDIAN_OCEAN_TERRITORY: 'IOT',
    BRUNEI: 'BRN',
    BULGARIA: 'BGR',
    BURKINA_FASO: 'BFA',
    BURUNDI: 'BDI',
    CAPE_VERDE: 'CPV',
    CAMBODIA: 'KHM',
    CAMEROON: 'CMR',
    CANADA: 'CAN',
    CAYMAN_ISLANDS: 'CYM',
    CENTRAL_AFRICAN_REPUBLIC: 'CAF',
    CHAD: 'TCD',
    CHILE: 'CHL',
    CHINA: 'CHN',
    CHRISTMAS_ISLAND: 'CXR',
    COCOS_ISLANDS: 'CCK',
    COLOMBIA: 'COL',
    COMOROS: 'COM',
    CONGO: 'COG',
    DR_CONGO: 'COD',
    COOK_ISLANDS: 'COK',
    COSTA_RICA: 'CRI',
    IVORY_COAST: 'CIV',
    CROATIA: 'HRV',
    CUBA: 'CUB',
    CURACAO: 'CUW',
    CYPRUS: 'CYP',
    CZECH_REPUBLIC: 'CZE',
    DENMARK: 'DNK',
    DJIBOUTI: 'DJI',
    DOMINICA: 'DMA',
    DOMINICAN_REPUBLIC: 'DOM',
    ECUADOR: 'ECU',
    EGYPT: 'EGY',
    EL_SALVADOR: 'SLV',
    EQUATORIAL_GUINEA: 'GNQ',
    ERITREA: 'ERI',
    ESTONIA: 'EST',
    ESWATINI: 'SWZ',
    ETHIOPIA: 'ETH',
    FALKLAND_ISLANDS: 'FLK',
    FAROE_ISLANDS: 'FRO',
    FIJI: 'FJI',
    FINLAND: 'FIN',
    FRANCE: 'FRA',
    FRENCH_GUIANA: 'GUF',
    FRENCH_POLYNESIA: 'PYF',
    FRENCH_SOUTHERN_TERRITORIES: 'ATF',
    GABON: 'GAB',
    GAMBIA: 'GMB',
    GEORGIA: 'GEO',
    GERMANY: 'D<<',
    GHANA: 'GHA',
    GIBRALTAR: 'GIB',
    GREECE: 'GRC',
    GREENLAND: 'GRL',
    GRENADA: 'GRD',
    GUADELOUPE: 'GLP',
    GUAM: 'GUM',
    GUATEMALA: 'GTM',
    GUERNSEY: 'GGY',
    GUINEA: 'GIN',
    GUINEA_BISSAU: 'GNB',
    GUYANA: 'GUY',
    HAITI: 'HTI',
    HEARD_ISLAND_AND_MCDONALD_ISLANDS: 'HMD',
    VATICAN_CITY: 'VAT',
    HONDURAS: 'HND',
    HONG_KONG: 'HKG',
    HUNGARY: 'HUN',
    ICELAND: 'ISL',
    INDIA: 'IND',
    INDONESIA: 'IDN',
    IRAN: 'IRN',
    IRAQ: 'IRQ',
    IRELAND: 'IRL',
    ISLE_OF_MAN: 'IMN',
    ISRAEL: 'ISR',
    ITALY: 'ITA',
    JAMAICA: 'JAM',
    JAPAN: 'JPN',
    JERSEY: 'JEY',
    JORDAN: 'JOR',
    KAZAKHSTAN: 'KAZ',
    KENYA: 'KEN',
    KIRIBATI: 'KIR',
    NORTH_KOREA: 'PRK',
    SOUTH_KOREA: 'KOR',
    KUWAIT: 'KWT',
    KYRGYZSTAN: 'KGZ',
    LAOS: 'LAO',
    LATVIA: 'LVA',
    LEBANON: 'LBN',
    LESOTHO: 'LSO',
    LIBERIA: 'LBR',
    LIBYA: 'LBY',
    LIECHTENSTEIN: 'LIE',
    LITHUANIA: 'LTU',
    LUXEMBOURG: 'LUX',
    MACAO: 'MAC',
    MADAGASCAR: 'MDG',
    MALAWI: 'MWI',
    MALAYSIA: 'MYS',
    MALDIVES: 'MDV',
    MALI: 'MLI',
    MALTA: 'MLT',
    MARSHALL_ISLANDS: 'MHL',
    MARTINIQUE: 'MTQ',
    MAURITANIA: 'MRT',
    MAURITIUS: 'MUS',
    MAYOTTE: 'MYT',
    MEXICO: 'MEX',
    MICRONESIA: 'FSM',
    MOLDOVA: 'MDA',
    MONACO: 'MCO',
    MONGOLIA: 'MNG',
    MONTENEGRO: 'MNE',
    MONTSERRAT: 'MSR',
    MOROCCO: 'MAR',
    MOZAMBIQUE: 'MOZ',
    MYANMAR: 'MMR',
    NAMIBIA: 'NAM',
    NAURU: 'NRU',
    NEPAL: 'NPL',
    NETHERLANDS: 'NLD',
    NEW_CALEDONIA: 'NCL',
    NEW_ZEALAND: 'NZL',
    NICARAGUA: 'NIC',
    NIGER: 'NER',
    NIGERIA: 'NGA',
    NIUE: 'NIU',
    NORFOLK_ISLAND: 'NFK',
    NORTH_MACEDONIA: 'MKD',
    NORTHERN_MARIANA_ISLANDS: 'MNP',
    NORWAY: 'NOR',
    OMAN: 'OMN',
    PAKISTAN: 'PAK',
    PALAU: 'PLW',
    PALESTINE: 'PSE',
    PANAMA: 'PAN',
    PAPUA_NEW_GUINEA: 'PNG',
    PARAGUAY: 'PRY',
    PERU: 'PER',
    PHILIPPINES: 'PHL',
    PITCAIRN: 'PCN',
    POLAND: 'POL',
    PORTUGAL: 'PRT',
    PUERTO_RICO: 'PRI',
    QATAR: 'QAT',
    REUNION: 'REU',
    ROMANIA: 'ROU',
    RUSSIA: 'RUS',
    RWANDA: 'RWA',
    SAINT_BARTHELEMY: 'BLM',
    SAINT_HELENA_ASCENSION_AND_TRISTAN_DA_CUNHA: 'SHN',
    SAINT_KITTS_AND_NEVIS: 'KNA',
    SAINT_LUCIA: 'LCA',
    SAINT_MARTIN: 'MAF',
    SAINT_PIERRE_AND_MIQUELON: 'SPM',
    SAINT_VINCENT_AND_THE_GRENADINES: 'VCT',
    SAMOA: 'WSM',
    SAN_MARINO: 'SMR',
    SAO_TOME_AND_PRINCIPE: 'STP',
    SAUDI_ARABIA: 'SAU',
    SENEGAL: 'SEN',
    SERBIA: 'SRB',
    SEYCHELLES: 'SYC',
    SIERRA_LEONE: 'SLE',
    SINGAPORE: 'SGP',
    SINT_MAARTEN: 'SXM',
    SLOVAKIA: 'SVK',
    SLOVENIA: 'SVN',
    SOLOMON_ISLANDS: 'SLB',
    SOMALIA: 'SOM',
    SOUTH_AFRICA: 'ZAF',
    SOUTH_GEORGIA_AND_THE_SOUTH_SANDWICH_ISLANDS: 'SGS',
    SOUTH_SUDAN: 'SSD',
    SPAIN: 'ESP',
    SRI_LANKA: 'LKA',
    SUDAN: 'SDN',
    SURINAME: 'SUR',
    SVALBARD_AND_JAN_MAYEN: 'SJM',
    SWEDEN: 'SWE',
    SWITZERLAND: 'CHE',
    SYRIAN_ARAB_REPUBLIC: 'SYR',
    TAIWAN: 'TWN',
    TAJIKISTAN: 'TJK',
    TANZANIA: 'TZA',
    THAILAND: 'THA',
    TIMOR_LESTE: 'TLS',
    TOGO: 'TGO',
    TOKELAU: 'TKL',
    TONGA: 'TON',
    TRINIDAD_AND_TOBAGO: 'TTO',
    TUNISIA: 'TUN',
    TURKEY: 'TUR',
    TURKMENISTAN: 'TKM',
    TURKS_AND_CAICOS_ISLANDS: 'TCA',
    TUVALU: 'TUV',
    UGANDA: 'UGA',
    UKRAINE: 'UKR',
    UNITED_ARAB_EMIRATES: 'ARE',
    UNITED_KINGDOM: 'GBR',
    UNITED_STATES: 'USA',
    UNITED_STATES_MINOR_OUTLYING_ISLANDS: 'UMI',
    URUGUAY: 'URY',
    UZBEKISTAN: 'UZB',
    VANUATU: 'VUT',
    VENEZUELA: 'VEN',
    VIET_NAM: 'VNM',
    VIRGIN_ISLANDS_BRITISH: 'VGB',
    VIRGIN_ISLANDS_US: 'VIR',
    WALLIS_AND_FUTUNA: 'WLF',
    WESTERN_SAHARA: 'ESH',
    YEMEN: 'YEM',
    ZAMBIA: 'ZMB',
    ZIMBABWE: 'ZWE',
    EUROPEAN_UNION: 'EUE',
    UNITED_NATIONS: 'UNO',
    COUNCIL_OF_EUROPE: 'XCE',
    INTERPOL: 'XPO',
    SMOM: 'XOM'
};
}}),
}]);

//# sourceMappingURL=1c38e_%40selfxyz_common_dist_esm_src_constants_14a9f0c8._.js.map