module.exports = {

"[project]/node_modules/.pnpm/@selfxyz+common@0.0.5_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/constants/constants.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/node_modules/.pnpm/@selfxyz+common@0.0.5_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/circuits/uuid.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/node_modules/.pnpm/@selfxyz+common@0.0.5_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/bytes.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$5_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.5_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/constants/constants.js [app-ssr] (ecmascript)");
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
    const packSize = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$5_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MAX_BYTES_IN_FIELD"];
    const remain = byteLength % packSize;
    let numChunks = (byteLength - remain) / packSize;
    if (remain > 0) {
        numChunks += 1;
    }
    return numChunks;
}
function packBytesArray(unpacked) {
    const packSize = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$5_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MAX_BYTES_IN_FIELD"];
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
"[project]/node_modules/.pnpm/@selfxyz+common@0.0.5_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/hash.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$5_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.5_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/bytes.js [app-ssr] (ecmascript)");
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$5_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToSignedBytes"])(hashResult);
    }
    const actualForgeUtil = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$node$2d$forge$40$https$2b2b2b$codeload$2e$github$2e$com$2b$remicolin$2b$forge$2b$tar$2e$gz$2b$17a11a632dd0e50343b3b8393245a2696f78afbb$2f$node_modules$2f$node$2d$forge$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["util"] ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$node$2d$forge$40$https$2b2b2b$codeload$2e$github$2e$com$2b$remicolin$2b$forge$2b$tar$2e$gz$2b$17a11a632dd0e50343b3b8393245a2696f78afbb$2f$node_modules$2f$node$2d$forge$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["util"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$node$2d$forge$40$https$2b2b2b$codeload$2e$github$2e$com$2b$remicolin$2b$forge$2b$tar$2e$gz$2b$17a11a632dd0e50343b3b8393245a2696f78afbb$2f$node_modules$2f$node$2d$forge$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].util;
    if (format === 'binary') {
        return actualForgeUtil.binary.raw.encode(new Uint8Array((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$5_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToSignedBytes"])(hashResult)));
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
    const packed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$5_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["packBytesArray"])(unpacked);
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
"[project]/node_modules/.pnpm/@selfxyz+common@0.0.5_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/scope.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$5_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.5_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/hash.js [app-ssr] (ecmascript)");
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
    const endpointHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$5_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["flexiblePoseidon"])(chunkedEndpointBigInts);
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
"[project]/node_modules/.pnpm/@selfxyz+common@0.0.5_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/appType.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SelfAppBuilder": (()=>SelfAppBuilder),
    "getUniversalLink": (()=>getUniversalLink)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$5_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$circuits$2f$uuid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.5_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/circuits/uuid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$11$2e$1$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$v4$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/uuid@11.1.0/node_modules/uuid/dist/esm/v4.js [app-ssr] (ecmascript) <export default as v4>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$5_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.5_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/constants/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$5_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$scope$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@selfxyz+common@0.0.5_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/utils/scope.js [app-ssr] (ecmascript)");
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
        const formattedEndpoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$5_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$scope$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatEndpoint"])(config.endpoint);
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
        if (config.userIdType === 'hex') {
            if (!config.userId.startsWith('0x')) {
                throw new Error('userId as hex must start with 0x');
            }
            config.userId = config.userId.slice(2);
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$5_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$circuits$2f$uuid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateUserId"])(config.userId, config.userIdType ?? 'uuid')) {
            throw new Error('userId must be a valid UUID or address');
        }
        this.config = {
            sessionId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$11$2e$1$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$v4$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            userIdType: 'uuid',
            devMode: false,
            endpointType: 'https',
            header: '',
            logoBase64: '',
            disclosures: {},
            chainID: config.endpointType === 'staging_celo' ? 44787 : 42220,
            version: config.userDefinedData ? 2 : 1,
            userDefinedData: '',
            ...config
        };
    }
    build() {
        return this.config;
    }
}
function getUniversalLink(selfApp) {
    return `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$selfxyz$2b$common$40$0$2e$0$2e$5_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$selfxyz$2f$common$2f$dist$2f$esm$2f$src$2f$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["REDIRECT_URL"]}?selfApp=${encodeURIComponent(JSON.stringify(selfApp))}`;
}
}}),
"[project]/node_modules/.pnpm/@selfxyz+common@0.0.5_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@selfxyz/common/dist/esm/src/constants/countries.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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

};

//# sourceMappingURL=e6118_%40selfxyz_common_dist_esm_src_24735562._.js.map