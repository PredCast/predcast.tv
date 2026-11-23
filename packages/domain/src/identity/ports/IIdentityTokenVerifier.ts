/** Identity proven by a third-party token (Dynamic JWT): the subject and the EVM wallets it verified. */
export interface VerifiedIdentity {
    readonly subject: string;
    /** Lower-cased EVM addresses from the token's verified credentials. */
    readonly wallets: ReadonlyArray<string>;
    readonly email: string | null;
}

export type IdentityRejection =
    | 'not_configured'
    | 'malformed'
    | 'unknown_key'
    | 'bad_signature'
    | 'expired'
    | 'wrong_issuer'
    | 'wrong_environment'
    | 'wrong_audience'
    | 'missing_scope'
    | 'additional_auth_required'
    | 'keys_unavailable';

export type IdentityVerification =
    | { readonly ok: true; readonly identity: VerifiedIdentity }
    | { readonly ok: false; readonly reason: IdentityRejection };

export interface IIdentityTokenVerifier {
    verify(token: string): Promise<IdentityVerification>;
}
