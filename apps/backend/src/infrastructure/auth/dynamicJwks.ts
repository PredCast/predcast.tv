import axios from 'axios';

import type { Jwk } from './DynamicJwtVerifier';

/** Public signing keys of a Dynamic environment. */
export async function fetchDynamicJwks(environmentId: string): Promise<ReadonlyArray<Jwk>> {
    const url = `https://app.dynamicauth.com/api/v0/sdk/${environmentId}/.well-known/jwks`;
    const { data } = await axios.get<{ keys?: Jwk[] }>(url, { timeout: 5_000 });
    return data.keys ?? [];
}
