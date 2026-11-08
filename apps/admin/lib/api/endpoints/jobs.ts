import type { AdminIndexersDto, AdminJobsDto, JobRunDto, RunJobAcceptedDto } from '@chiliztv/shared';

import { apiClient } from '../client';

type Envelope<T> = { success: boolean; data: T };

export const jobsApi = {
  list: () => apiClient.get<Envelope<AdminJobsDto>>('/admin/jobs'),
  runs: (name: string) => apiClient.get<Envelope<JobRunDto[]>>(`/admin/jobs/${encodeURIComponent(name)}/runs`),
  run: (runId: string) => apiClient.get<Envelope<JobRunDto>>(`/admin/jobs/runs/${encodeURIComponent(runId)}`),
  runNow: (name: string, confirm: boolean) =>
    apiClient.post<Envelope<RunJobAcceptedDto>>(`/admin/jobs/${encodeURIComponent(name)}/run`, { confirm }),
  indexers: () => apiClient.get<Envelope<AdminIndexersDto>>('/admin/jobs/indexers'),
};
