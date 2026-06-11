import { apiClient } from '../client';

import type { CreateReportDto, ReportResponseDto, ReportConfigDto } from '@chiliztv/shared';

export const reportsApi = {
  /** POST /reports — 201 on success, 409 on duplicate, 403 when banned. */
  create: (data: CreateReportDto): Promise<{ success: boolean; report: ReportResponseDto }> =>
    apiClient.post('/reports', data),
};

export const reportConfigApi = {
  get: (): Promise<{ success: boolean; config: ReportConfigDto }> =>
    apiClient.get('/reports/config'),
};
