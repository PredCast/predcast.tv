import type { JobDescriptor } from '../types';

/** The scheduler's job registry, read by the admin (names, categories, schedules). */
export interface IJobCatalog {
    list(): ReadonlyArray<JobDescriptor>;
    get(name: string): JobDescriptor | null;
}
