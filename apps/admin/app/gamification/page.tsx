import { PageHeader } from '@/components/layout/PageHeader';
import { DoubleXpPanel } from '@/components/gamification/DoubleXpPanel';

export default function GamificationPage() {
  return (
    <div>
      <PageHeader eyebrow="Engagement" title="Gamification" meta="Double XP · account suspension and XP adjustment live on each player page" />
      <DoubleXpPanel />
    </div>
  );
}
