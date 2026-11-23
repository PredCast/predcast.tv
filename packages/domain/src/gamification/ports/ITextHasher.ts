/**
 * SHA-256 of a UTF-8 string, lowercase hex. The domain cannot import `node:crypto`; the backend
 * binds a Node implementation and tests pass a fake.
 */
export interface ITextHasher {
    sha256Hex(input: string): string;
}
