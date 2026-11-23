'use client';

import { useState } from 'react';

import { FIELD_CLASS } from '@/lib/ui/fieldClass';

import { Button } from './Button';
import { FormField } from './FormField';
import { Modal } from './Modal';

const MIN_REASON = 3;
const MAX_REASON = 280;

interface ReasonDialogProps {
  readonly open: boolean;
  readonly eyebrow: string;
  readonly title: string;
  readonly description: React.ReactNode;
  readonly label: string;
  readonly placeholder: string;
  readonly submitLabel: string;
  readonly danger?: boolean;
  readonly pending: boolean;
  readonly onSubmit: (reason: string) => void;
  readonly onClose: () => void;
}

/** Audited action that needs a written reason (suspension, cancellation). */
export function ReasonDialog({
  open,
  eyebrow,
  title,
  description,
  label,
  placeholder,
  submitLabel,
  danger = false,
  pending,
  onSubmit,
  onClose,
}: Readonly<ReasonDialogProps>) {
  const [reason, setReason] = useState('');
  const close = () => {
    setReason('');
    onClose();
  };
  const valid = reason.trim().length >= MIN_REASON;

  return (
    <Modal open={open} eyebrow={eyebrow} title={title} dismissible={!pending} onClose={close}>
      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          if (valid) onSubmit(reason.trim());
        }}
      >
        <div className="text-[13px] leading-5 text-fg-body">{description}</div>
        <FormField label={label} hint={`Audited · ${MIN_REASON}–${MAX_REASON} characters`}>
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder={placeholder}
            maxLength={MAX_REASON}
            rows={3}
            className={`${FIELD_CLASS} font-sans`}
          />
        </FormField>
        <div className="flex justify-end gap-2">
          <Button onClick={close} disabled={pending}>
            Cancel
          </Button>
          <Button type="submit" variant={danger ? 'danger' : 'primary'} busy={pending} disabled={!valid}>
            {submitLabel}
          </Button>
        </div>
      </form>
    </Modal>
  );
}
