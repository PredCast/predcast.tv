'use client';

import { useState } from 'react';
import { toast } from 'sonner';

import { useSuspendGamification } from '@/hooks/api/useAccountGamification';
import { apiErrorMessage } from '@/lib/api/errors';
import { Button } from '@/components/common/Button';
import { ReasonDialog } from '@/components/common/ReasonDialog';

/** Reversible, audited suspension of the account's gamification (§10.2); a reason is mandatory both ways. */
export function SuspendGamificationButton({ wallet, suspended }: Readonly<{ wallet: string; suspended: boolean }>) {
  const mutation = useSuspendGamification(wallet);
  const [open, setOpen] = useState(false);

  const submit = (reason: string) =>
    mutation.mutate(
      { suspend: !suspended, reason },
      {
        onSuccess: () => {
          toast.success(suspended ? 'Gamification restored' : 'Gamification suspended');
          setOpen(false);
        },
        onError: (err) => toast.error(apiErrorMessage(err)),
      },
    );

  return (
    <>
      <Button size="sm" variant={suspended ? 'ghost' : 'danger'} icon={suspended ? 'rotateCcw' : 'ban'} onClick={() => setOpen(true)}>
        {suspended ? 'Unsuspend' : 'Suspend XP'}
      </Button>
      {open && (
        <ReasonDialog
          open
          eyebrow="Gamification"
          title={suspended ? 'Lift the suspension' : 'Suspend gamification'}
          description={
            suspended
              ? 'The account earns XP again from now on. Nothing missed during the suspension is credited back.'
              : 'Every automatic credit of the account is recorded at 0 XP and its check-in is refused until the suspension is lifted. Chat, bets and streams are not affected.'
          }
          label="Reason"
          placeholder={suspended ? 'Why is it lifted?' : 'e.g. Multi-account farming on chat'}
          submitLabel={suspended ? 'Unsuspend' : 'Suspend'}
          danger={!suspended}
          pending={mutation.isPending}
          onSubmit={submit}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
