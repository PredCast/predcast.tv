/**
 * Wall-clock dependency. Production binds to `SystemClock`; tests bind to
 * `MockClock` for deterministic time control. Never call `new Date()` directly
 * in application/infrastructure/presentation layers — inject `IClock` instead.
 */
export interface IClock {
    now(): Date;
}
