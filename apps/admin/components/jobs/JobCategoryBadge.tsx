import type { JobCategoryDto } from '@chiliztv/shared';

import { CATEGORY_LABEL, CATEGORY_TONE } from '@/lib/jobs/jobsView';
import { Badge } from '@/components/common/Badge';

export function JobCategoryBadge({ category }: Readonly<{ category: JobCategoryDto }>) {
  return <Badge tone={CATEGORY_TONE[category]}>{CATEGORY_LABEL[category]}</Badge>;
}
