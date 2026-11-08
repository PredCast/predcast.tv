import type { JobState, JobTick } from '../types';

export interface IJobStateRepository {
    /** Upserts the job's row; a skipped tick only bumps its counter. */
    recordTick(tick: JobTick): Promise<void>;
    findAll(): Promise<ReadonlyArray<JobState>>;
}
