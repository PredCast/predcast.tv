import axios from 'axios';

const AUTH_TOKEN_KEY = 'predcast_auth_token';

/**
 * Exchanges the wallet for a backend JWT. With the Dynamic session token the backend proves the
 * wallet and adds `accountId` to the JWT; without it, an unproven legacy token is issued.
 */
export async function authenticateWallet(walletAddress: string, dynamicJwt?: string): Promise<string> {
  const response = await axios.post<{ token: string }>(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/token`,
    dynamicJwt ? { walletAddress, dynamicJwt } : { walletAddress },
    { withCredentials: true }
  );

  const token = response.data.token;
  await setAuthToken(token);
  return token;
}

/**
 * A stored backend JWT is reused while unexpired, and, once a Dynamic proof is available, only if
 * it already carries `accountId` (tokens from the legacy flow are exchanged again).
 */
export function isBackendTokenReusable(token: string, hasDynamicProof: boolean, nowMs: number): boolean {
  try {
    const claims = JSON.parse(atob(token.split('.')[1])) as { exp?: number; accountId?: string };
    if (claims.exp && claims.exp * 1000 <= nowMs) return false;
    return !hasDynamicProof || Boolean(claims.accountId);
  } catch {
    return false;
  }
}

/** True when the unexpired backend JWT carries `accountId` (required by the gamification routes). */
export function backendTokenHasAccount(token: string, nowMs: number): boolean {
  try {
    const claims = JSON.parse(atob(token.split('.')[1])) as { exp?: number; accountId?: string };
    if (claims.exp && claims.exp * 1000 <= nowMs) return false;
    return Boolean(claims.accountId);
  } catch {
    return false;
  }
}

/** Stored backend JWT (not the Dynamic token); null during SSR. */
export async function getBackendToken(): Promise<string | null> {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(AUTH_TOKEN_KEY);
}

/**
 * @notice Stores JWT token in localStorage
 * @param token JWT token to store
 * @dev No-op in SSR context
 */
export async function setAuthToken(token: string): Promise<void> {
  if (typeof window === 'undefined') return;
  localStorage.setItem(AUTH_TOKEN_KEY, token);
  // Lets side-effect hooks outside AuthProvider (auto check-in) react to a fresh token.
  window.dispatchEvent(new Event(AUTH_TOKEN_SET_EVENT));
}

export const AUTH_TOKEN_SET_EVENT = 'auth:jwt:set';

/**
 * @notice Clears stored JWT token from localStorage
 * @dev No-op in SSR context
 */
export async function clearAuthToken(): Promise<void> {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(AUTH_TOKEN_KEY);
  // Notify the auth provider so it can re-generate if a wallet is still connected.
  window.dispatchEvent(new Event('auth:jwt:cleared'));
}

export const AUTH_TOKEN_CLEARED_EVENT = 'auth:jwt:cleared';

/** Synchronous `backendTokenHasAccount` on the stored token; false during SSR or without storage. */
export function storedTokenHasAccount(nowMs: number): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const token = localStorage.getItem(AUTH_TOKEN_KEY);
    return token !== null && backendTokenHasAccount(token, nowMs);
  } catch {
    return false;
  }
}
