'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import type { MyGamificationDto } from '@chiliztv/shared';

import { useUpdateCosmetics } from '@/hooks/api';

import { draftOf, isSameDraft, toCosmeticsBody, toggleShowcase, type CosmeticsDraft } from '../domain/cosmeticsOptions';

const REFUSALS: Readonly<Record<string, string>> = {
    COSMETIC_NOT_OWNED: 'This item is not unlocked yet.',
    SHOWCASE_TOO_LONG: 'Your showcase has no free slot left.',
    SHOWCASE_DUPLICATE: 'A tile can only be shown once.',
};

function errorCode(err: unknown): string | undefined {
    // Axios error shape of the backend error middleware.
    return (err as { response?: { data?: { error?: { code?: string } } } })?.response?.data?.error?.code;
}

/**
 * Title, frame and showcase being edited. Edits live in a local draft over the saved selection
 * (no state syncing); saving sends `PUT /me/cosmetics`, which re-validates ownership (422).
 */
export function useCosmeticsDraft(me: MyGamificationDto) {
    const [edits, setEdits] = useState<CosmeticsDraft | null>(null);
    const { mutate, isPending } = useUpdateCosmetics();
    const saved = draftOf(me);
    const draft = edits ?? saved;
    const dirty = !isSameDraft(draft, saved);

    const update = (patch: Partial<CosmeticsDraft>) => setEdits({ ...draft, ...patch });

    return {
        draft,
        dirty,
        saving: isPending,
        setTitle: (titleId: string | null) => update({ titleId }),
        setFrame: (frameId: string) => update({ frameId }),
        toggleTile: (key: string) => update({ showcase: toggleShowcase(draft.showcase, key, me.showcaseSlots) }),
        reset: () => setEdits(null),
        save: () =>
            mutate(toCosmeticsBody(draft), {
                onSuccess: () => {
                    setEdits(null);
                    toast.success('Profile card updated');
                },
                onError: (err) => toast.error(REFUSALS[errorCode(err) ?? ''] ?? 'Could not save your choices'),
            }),
    };
}
