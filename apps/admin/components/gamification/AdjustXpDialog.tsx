'use client';

import { useState } from 'react';
import { toast } from 'sonner';

import { useAdjustXp } from '@/hooks/api/useAccountGamification';
import { apiErrorMessage } from '@/lib/api/errors';
import { fmtSignedXp, newAdjustmentId } from '@/lib/gamification/ledgerDisplay';
import { FIELD_CLASS } from '@/lib/ui/fieldClass';
import { Button } from '@/components/common/Button';
import { FormField } from '@/components/common/FormField';
import { Modal } from '@/components/common/Modal';

const MAX_XP = 100_000;

/** `admin_adjustment`: a new ledger row, never an edit; a negative amount stops at 0 XP. */
export function AdjustXpDialog({ wallet, xpTotal, onClose }: Readonly<{ wallet: string; xpTotal: number; onClose: () => void }>) {
  const adjust = useAdjustXp(wallet);
  // One key per opened form: a retried submit is credited once.
  const [adjustmentId] = useState(newAdjustmentId);
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');

  const xp = Number(amount);
  const validXp = Number.isInteger(xp) && xp !== 0 && Math.abs(xp) <= MAX_XP;
  const valid = validXp && note.trim().length >= 3;
  const preview = validXp ? Math.max(0, xpTotal + xp) : null;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid) return;
    adjust.mutate(
      { xp, note: note.trim(), adjustmentId },
      {
        onSuccess: (res) => {
          const written = res.data.xp;
          toast.success(res.data.status === 'duplicate' ? 'Already applied' : `Adjusted ${fmtSignedXp(written ?? xp)} XP`);
          onClose();
        },
        onError: (err) => toast.error(apiErrorMessage(err)),
      },
    );
  };

  return (
    <Modal open eyebrow="Gamification" title="Adjust XP" dismissible={!adjust.isPending} onClose={onClose}>
      <form onSubmit={submit} className="flex flex-col gap-4">
        <p className="text-[13px] leading-5 text-fg-body">
          Adds an <span className="font-mono text-white">admin_adjustment</span> line to the ledger; existing lines never change. Use a
          negative amount to remove XP. The action is audited.
        </p>
        <FormField
          label="Amount (XP)"
          hint={preview === null ? `Signed integer, ±${MAX_XP.toLocaleString('en-US')} max` : `Total ${xpTotal.toLocaleString('en-US')} → ${preview.toLocaleString('en-US')} XP`}
        >
          <input type="number" step={1} value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="e.g. 250 or -500" className={FIELD_CLASS} />
        </FormField>
        <FormField label="Reason" hint="Audited · 3–280 characters">
          <textarea value={note} onChange={(e) => setNote(e.target.value)} maxLength={280} rows={3} placeholder="e.g. Check-in lost during the outage of 12 Dec" className={`${FIELD_CLASS} font-sans`} />
        </FormField>
        <div className="flex justify-end gap-2 border-t border-line-subtle pt-4">
          <Button onClick={onClose} disabled={adjust.isPending}>
            Cancel
          </Button>
          <Button type="submit" variant="primary" busy={adjust.isPending} disabled={!valid}>
            {validXp ? `Apply ${fmtSignedXp(xp)} XP` : 'Apply'}
          </Button>
        </div>
      </form>
    </Modal>
  );
}
