'use client';

import { useQuery } from '@tanstack/react-query';

import type { ReportConfigDto } from '@chiliztv/shared';

import { reportConfigApi } from '@/lib/api/endpoints/reports';
import { queryKeys } from '@/lib/query/keys';

export function useReportConfig() {
  return useQuery<{ success: boolean; config: ReportConfigDto }>({
    queryKey: queryKeys.reports.config(),
    queryFn: () => reportConfigApi.get(),
    staleTime: 5 * 60_000,
    refetchOnWindowFocus: false,
  });
}
