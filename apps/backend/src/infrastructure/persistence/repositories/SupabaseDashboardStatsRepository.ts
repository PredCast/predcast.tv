import { injectable } from 'tsyringe';
import { z } from 'zod';

import type {
  DashboardKpiAggregates,
  IDashboardStatsRepository,
  KpiAggregate,
  MarketStateRow,
} from '@chiliztv/domain/admin/dashboard/IDashboardStatsRepository';

import { supabaseClient as supabase } from '../../database/supabase/client';
import { logger } from '../../logging/logger';

const num = z.union([z.number(), z.string()]).transform((v) => String(v));
const kpi = z.object({ current: num, previous: num, series: z.array(num).nullable().optional() });

/** Shape of admin_dashboard_kpis(p_now) (migration 042); parsed so a SQL drift fails loudly. */
const KpisRow = z.object({
  volume: kpi,
  bettors: kpi,
  fees: kpi,
  deployments: kpi,
  avgPool: kpi.extend({ events: z.number() }),
  openReports: kpi.extend({ highSeverity: z.number() }),
  activeBans: kpi.extend({ permanent: z.number() }),
});

const toKpi = (k: z.infer<typeof kpi>): KpiAggregate => ({ current: k.current, previous: k.previous, series: k.series ?? null });

@injectable()
export class SupabaseDashboardStatsRepository implements IDashboardStatsRepository {
  async kpiAggregates(now: Date): Promise<DashboardKpiAggregates> {
    const { data, error } = await supabase.rpc('admin_dashboard_kpis', { p_now: now.toISOString() });
    if (error) {
      logger.error('admin_dashboard_kpis failed', { error: error.message });
      throw new Error('Failed to compute dashboard KPIs');
    }
    const row = KpisRow.parse(data);
    return {
      volume24h: toKpi(row.volume),
      bettors24h: toKpi(row.bettors),
      feesSettled24h: toKpi(row.fees),
      deployments7d: toKpi(row.deployments),
      avgPool30d: { ...toKpi(row.avgPool), series: null, events: row.avgPool.events },
      openReports: { ...toKpi(row.openReports), highSeverity: row.openReports.highSeverity },
      activeBans: { ...toKpi(row.activeBans), permanent: row.activeBans.permanent },
    };
  }

  async marketStates(contractAddresses: ReadonlyArray<string>): Promise<ReadonlyArray<MarketStateRow>> {
    if (contractAddresses.length === 0) return [];
    const { data, error } = await supabase.rpc('admin_live_markets', { p_contracts: [...contractAddresses] });
    if (error) {
      logger.error('admin_live_markets failed', { error: error.message });
      throw new Error('Failed to read market states');
    }
    return ((data ?? []) as Array<{ contract_address: string; market_id: number | string; market_type: string | null; line: number | null; state: number }>).map(
      (r) => ({
        contractAddress: r.contract_address,
        marketId: Number(r.market_id),
        marketType: r.market_type ?? 'UNKNOWN',
        line: r.line ?? 0,
        state: r.state,
      }),
    );
  }
}
