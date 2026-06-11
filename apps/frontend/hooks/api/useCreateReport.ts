'use client';

import { useMutation } from '@tanstack/react-query';

import type { CreateReportDto, ReportResponseDto } from '@chiliztv/shared';

import { reportsApi } from '@/lib/api/endpoints/reports';

export function useCreateReport() {
  return useMutation<{ success: boolean; report: ReportResponseDto }, unknown, CreateReportDto>({
    mutationFn: (data) => reportsApi.create(data),
  });
}
