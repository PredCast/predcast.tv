'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import type { AdminDoubleXpEventDto } from '@chiliztv/shared';

import { useCancelDoubleXp, useDoubleXpEvents } from '@/hooks/api/useDoubleXpEvents';
import { useAdminSession } from '@/providers/AdminSessionProvider';
import { apiErrorMessage } from '@/lib/api/errors';
import { fmtDateTime, toLocalInput } from '@/lib/gamification/doubleXpDisplay';
import { isAllowedForNav } from '@/lib/rbac';
import { Modal } from '@/components/common/Modal';
import { ReasonDialog } from '@/components/common/ReasonDialog';
import { Skeleton } from '@/components/common/Skeleton';
import { DoubleXpEventsCard } from './DoubleXpEventsCard';
import { DoubleXpForm } from './DoubleXpForm';
import { DoubleXpRulesCard } from './DoubleXpRulesCard';

const HOUR_MS = 3_600_000;

interface FormDefaults {
  readonly start: string;
  readonly end: string;
}

/** Double XP page: rules + quota, the events (running, upcoming, past), create and cancel. */
export function DoubleXpPanel() {
  const { role } = useAdminSession();
  const canManage = isAllowedForNav(role, ['admin']);
  const { data, isLoading, error, refetch, isFetching } = useDoubleXpEvents();
  const cancel = useCancelDoubleXp();
  const [form, setForm] = useState<FormDefaults | null>(null);
  const [cancelling, setCancelling] = useState<AdminDoubleXpEventDto | null>(null);

  const openForm = () => {
    // Two days ahead on the hour, 24 h long: inside the notice rule by default.
    const start = new Date(Math.ceil((Date.now() + 48 * HOUR_MS) / HOUR_MS) * HOUR_MS);
    setForm({ start: toLocalInput(start), end: toLocalInput(new Date(start.getTime() + 24 * HOUR_MS)) });
  };

  const confirmCancel = (note: string) => {
    if (!cancelling) return;
    cancel.mutate(
      { id: cancelling.id, note },
      {
        onSuccess: () => {
          toast.success(`"${cancelling.name}" cancelled`);
          setCancelling(null);
        },
        onError: (err) => toast.error(apiErrorMessage(err)),
      },
    );
  };

  return (
    <div className="mt-6 grid gap-4 xl:grid-cols-[minmax(0,1fr)_340px]">
      <DoubleXpEventsCard
        items={data?.items}
        isLoading={isLoading}
        error={error}
        retrying={isFetching}
        onRetry={() => void refetch()}
        canManage={canManage}
        onCreate={canManage && data?.rules.enabled ? openForm : undefined}
        onCancel={setCancelling}
      />
      {data ? <DoubleXpRulesCard rules={data.rules} usage={data.monthlyUsage} /> : <Skeleton className="h-96 rounded-card" />}

      {form && data && (
        <Modal open eyebrow="Gamification" title="New double XP event" onClose={() => setForm(null)}>
          <DoubleXpForm rules={data.rules} initialStart={form.start} initialEnd={form.end} onDone={() => setForm(null)} />
        </Modal>
      )}
      {cancelling && (
        <ReasonDialog
          open
          eyebrow="Cancel double XP"
          title={cancelling.name}
          description={
            <>
              {fmtDateTime(cancelling.startsAt)} → {fmtDateTime(cancelling.endsAt)}. Credits already earned keep their multiplier; the
              banner disappears from the app.
            </>
          }
          label="Note"
          placeholder="Why is it cancelled? (audited)"
          submitLabel="Cancel event"
          danger
          pending={cancel.isPending}
          onSubmit={confirmCancel}
          onClose={() => setCancelling(null)}
        />
      )}
    </div>
  );
}
