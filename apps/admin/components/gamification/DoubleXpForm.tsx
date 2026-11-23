'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import type { AdminDoubleXpRulesDto, DoubleXpSourceDto } from '@chiliztv/shared';

import { useCreateDoubleXp } from '@/hooks/api/useDoubleXpEvents';
import { useNow } from '@/hooks/useNow';
import { apiErrorMessage } from '@/lib/api/errors';
import {
  bannerPreview,
  DOUBLE_XP_SOURCE_LABELS,
  draftIssues,
  fmtMultiplier,
  fromLocalInput,
} from '@/lib/gamification/doubleXpDisplay';
import { FIELD_CLASS } from '@/lib/ui/fieldClass';
import { Button } from '@/components/common/Button';
import { FormField } from '@/components/common/FormField';
import { DoubleXpBannerPreview } from './DoubleXpBannerPreview';

interface DoubleXpFormProps {
  readonly rules: AdminDoubleXpRulesDto;
  readonly initialStart: string;
  readonly initialEnd: string;
  readonly onDone: () => void;
}

/** Only the eligible sources are offered; the backend re-checks every §3.6 guard. */
export function DoubleXpForm({ rules, initialStart, initialEnd, onDone }: Readonly<DoubleXpFormProps>) {
  const create = useCreateDoubleXp();
  const now = useNow();
  const [name, setName] = useState('');
  const [multiplier, setMultiplier] = useState(rules.multipliers[rules.multipliers.length - 1] ?? 2);
  const [sources, setSources] = useState<ReadonlyArray<DoubleXpSourceDto>>(rules.eligibleSources);
  const [start, setStart] = useState(initialStart);
  const [end, setEnd] = useState(initialEnd);

  const startsAt = fromLocalInput(start);
  const endsAt = fromLocalInput(end);
  const issues = [
    ...(name.trim().length < 3 ? ['Name: 3 characters at least'] : []),
    ...(sources.length === 0 ? ['Pick at least one source'] : []),
    ...draftIssues(startsAt, endsAt, rules, now),
  ];
  const toggle = (source: DoubleXpSourceDto) =>
    setSources((current) =>
      current.includes(source) ? current.filter((s) => s !== source) : rules.eligibleSources.filter((s) => s === source || current.includes(s)),
    );

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (issues.length > 0 || !startsAt || !endsAt) return;
    create.mutate(
      { name: name.trim(), multiplier, sources: [...sources], startsAt: startsAt.toISOString(), endsAt: endsAt.toISOString() },
      {
        onSuccess: () => {
          toast.success(`Double XP "${name.trim()}" scheduled`);
          onDone();
        },
        onError: (err) => toast.error(apiErrorMessage(err)),
      },
    );
  };

  return (
    <form onSubmit={submit} className="flex flex-col gap-4">
      <FormField label="Name" hint="Shown in the app banner">
        <input value={name} onChange={(e) => setName(e.target.value)} maxLength={80} placeholder="Derby weekend" className={FIELD_CLASS} />
      </FormField>
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField label="Starts" hint={`Local time · ≥ ${rules.minNoticeHours} h notice`}>
          <input type="datetime-local" value={start} onChange={(e) => setStart(e.target.value)} className={FIELD_CLASS} />
        </FormField>
        <FormField label="Ends" hint={`${rules.maxDurationHours} h at most`}>
          <input type="datetime-local" value={end} onChange={(e) => setEnd(e.target.value)} className={FIELD_CLASS} />
        </FormField>
      </div>
      <FormField label="Multiplier">
        <select value={multiplier} onChange={(e) => setMultiplier(Number(e.target.value))} className={FIELD_CLASS}>
          {rules.multipliers.map((m) => (
            <option key={m} value={m}>
              {fmtMultiplier(m)}
            </option>
          ))}
        </select>
      </FormField>
      <fieldset>
        <legend className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-fg-meta">Boosted sources</legend>
        <div className="mt-1.5 flex flex-wrap gap-1.5">
          {rules.eligibleSources.map((source) => (
            <label
              key={source}
              className={`flex h-8 cursor-pointer items-center gap-2 rounded-control border px-3 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] ${
                sources.includes(source) ? 'border-accent bg-accent/10 text-white' : 'border-line text-fg-body'
              }`}
            >
              <input type="checkbox" checked={sources.includes(source)} onChange={() => toggle(source)} className="accent-accent" />
              {DOUBLE_XP_SOURCE_LABELS[source]}
            </label>
          ))}
        </div>
        <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-fg-meta">Bets, support, follows and achievements are never boosted</p>
      </fieldset>
      <DoubleXpBannerPreview text={sources.length > 0 ? bannerPreview(sources, multiplier) : '—'} />
      {issues.length > 0 && (
        <ul className="flex flex-col gap-1 font-mono text-[11px] text-warning">
          {issues.map((issue) => (
            <li key={issue}>◷ {issue}</li>
          ))}
        </ul>
      )}
      <div className="flex justify-end gap-2 border-t border-line-subtle pt-4">
        <Button onClick={onDone} disabled={create.isPending}>
          Cancel
        </Button>
        <Button type="submit" variant="primary" icon="zap" busy={create.isPending} disabled={issues.length > 0}>
          Schedule event
        </Button>
      </div>
    </form>
  );
}
