import { PageHeader } from '@/components/layout/PageHeader';
import { JobsView } from '@/components/jobs/JobsView';
import { JobsHealthPill } from '@/components/jobs/JobsHealthPill';

export default function JobsPage() {
  return (
    <div>
      <PageHeader eyebrow="Operations" title="Jobs" right={<JobsHealthPill />} />
      <JobsView />
    </div>
  );
}
