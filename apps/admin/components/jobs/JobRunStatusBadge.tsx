import type { JobRunStatusDto } from '@chiliztv/shared';

import { RUN_STATUS_DISPLAY } from '@/lib/jobs/jobsView';
import { Badge } from '@/components/common/Badge';

export function JobRunStatusBadge({ status }: Readonly<{ status: JobRunStatusDto }>) {
  const d = RUN_STATUS_DISPLAY[status];
  return (
    <Badge tone={d.tone} glyph={d.glyph}>
      {d.label}
    </Badge>
  );
}
