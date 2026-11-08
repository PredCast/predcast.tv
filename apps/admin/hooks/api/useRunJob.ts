'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { jobsApi } from '@/lib/api/endpoints/jobs';
import { queryKeys } from '@/lib/query/keys';

export function useRunJob() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ name, confirm }: { name: string; confirm: boolean }) => jobsApi.runNow(name, confirm),
    onSettled: () => qc.invalidateQueries({ queryKey: queryKeys.jobs.list }),
  });
}
