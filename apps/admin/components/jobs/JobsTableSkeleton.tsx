import { Card } from '@/components/common/Card';
import { CardHead } from '@/components/common/CardHead';
import { Skeleton } from '@/components/common/Skeleton';

export function JobsTableSkeleton() {
  return (
    <Card>
      <CardHead title="Scheduled jobs" icon="clock" />
      <div className="flex flex-col gap-3 p-4">
        {Array.from({ length: 8 }, (_, i) => (
          <Skeleton key={i} className="h-6 w-full" />
        ))}
      </div>
    </Card>
  );
}
