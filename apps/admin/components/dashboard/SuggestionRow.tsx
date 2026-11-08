import type { AdminMatchRowDto, DashboardSuggestionDto } from '@chiliztv/shared';

import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';

import { KickoffCell } from './KickoffCell';

export function SuggestionRow({ suggestion, onDeploy }: Readonly<{ suggestion: DashboardSuggestionDto; onDeploy: (row: AdminMatchRowDto) => void }>) {
  return (
    <div className="flex min-h-[60px] items-center gap-4 border-b border-line-subtle px-4 py-2.5 last:border-b-0">
      <KickoffCell at={suggestion.kickoffAt} />
      <div className="min-w-0 flex-1">
        <div className="truncate text-[14px] font-medium text-white">
          {suggestion.home} vs {suggestion.away}
        </div>
        <div className="mt-1 flex flex-wrap items-center gap-1.5">
          <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-fg-meta">{suggestion.league}</span>
          {suggestion.tokens.map((t) => (
            <Badge key={t} tone="token">
              ${t}
            </Badge>
          ))}
        </div>
      </div>
      <Button variant="primary" size="sm" icon="arrowDown" onClick={() => onDeploy(suggestion.row)}>
        Deploy
      </Button>
    </div>
  );
}
