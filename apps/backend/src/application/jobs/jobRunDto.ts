import type { JobRunDto } from '@chiliztv/shared';
import type { JobRun } from '@chiliztv/domain/jobs/types';

const iso = (d: Date | null): string | null => (d ? d.toISOString() : null);

export function toJobRunDto(run: JobRun, labels: ReadonlyMap<string, string>): JobRunDto {
    return {
        id: run.id,
        jobName: run.jobName,
        trigger: run.trigger,
        status: run.status,
        requestedBy: run.requestedBy,
        requestedByLabel: run.requestedBy ? labels.get(run.requestedBy.toLowerCase()) ?? null : null,
        requestedAt: run.requestedAt.toISOString(),
        startedAt: iso(run.startedAt),
        finishedAt: iso(run.finishedAt),
        durationMs: run.durationMs,
        error: run.error,
    };
}

export function requesters(runs: ReadonlyArray<JobRun>): string[] {
    return [...new Set(runs.map((r) => r.requestedBy).filter((w): w is string => !!w))];
}
