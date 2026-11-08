import type { JobHealthDto } from '@chiliztv/shared';

import { HEALTH_DISPLAY } from '@/lib/jobs/jobsView';
import { Badge } from '@/components/common/Badge';

export function JobHealthBadge({ health }: Readonly<{ health: JobHealthDto }>) {
  const d = HEALTH_DISPLAY[health];
  return (
    <Badge tone={d.tone} glyph={d.glyph}>
      {d.label}
    </Badge>
  );
}
