import { PageHeader } from '@/components/layout/PageHeader';
import { ModerationTabs } from '@/components/moderation/ModerationTabs';
import { BansPanel } from '@/components/moderation/BansPanel';

export default function BansPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Moderation"
        title="Bans"
        right={
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-fg-meta">
            Escalation 24h → 168h → permanent
          </span>
        }
      />
      <ModerationTabs />
      <BansPanel />
    </div>
  );
}
