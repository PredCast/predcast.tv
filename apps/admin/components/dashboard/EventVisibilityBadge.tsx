import type { EventVisibilityDto } from '@chiliztv/shared';

import { Badge } from '@/components/common/Badge';
import type { BadgeTone } from '@/lib/ui/badgeTone';

const DISPLAY: Record<EventVisibilityDto, { label: string; glyph: string; tone: BadgeTone }> = {
  published: { label: 'Published', glyph: '✓', tone: 'positive' },
  hidden: { label: 'Hidden', glyph: '◌', tone: 'warning' },
  deploying: { label: 'Deploying', glyph: '↻', tone: 'neutral' },
  setup_failed: { label: 'Setup failed', glyph: '✕', tone: 'critical' },
};

export function EventVisibilityBadge({ visibility }: Readonly<{ visibility: EventVisibilityDto }>) {
  const d = DISPLAY[visibility];
  return (
    <Badge tone={d.tone} glyph={d.glyph}>
      {d.label}
    </Badge>
  );
}
