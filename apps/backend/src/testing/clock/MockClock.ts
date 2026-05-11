import type { IClock } from '@chiliztv/domain/shared/ports/IClock';

/** Deterministic clock for tests, scenarios, and integration runs. */
export class MockClock implements IClock {
    private current: Date;

    constructor(initialNow: Date) {
        this.current = new Date(initialNow.getTime());
    }

    now(): Date {
        return new Date(this.current.getTime());
    }

    set(date: Date): void {
        this.current = new Date(date.getTime());
    }

    advanceBy(ms: number): void {
        this.current = new Date(this.current.getTime() + ms);
    }

    advanceBySec(seconds: number): void {
        this.advanceBy(seconds * 1_000);
    }

    advanceByMin(minutes: number): void {
        this.advanceBy(minutes * 60_000);
    }
}
