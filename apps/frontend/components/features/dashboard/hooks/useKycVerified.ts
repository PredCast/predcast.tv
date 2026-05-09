'use client';

import { useCallback, useEffect, useState } from 'react';

const STORAGE_PREFIX = 'ctv:kyc-verified:';

/**
 * Per-wallet KYC flag persisted in `localStorage`. Set to `true` after the
 * Self Protocol QR check returns OK; the dashboard hero swaps to the green
 * "Identity verified" pill on the next render.
 */
export function useKycVerified(wallet: string | undefined): readonly [boolean, (v: boolean) => void] {
    const [verified, setVerified] = useState(false);

    useEffect(() => {
        if (!wallet) {
            setVerified(false);
            return;
        }
        try {
            setVerified(window.localStorage.getItem(STORAGE_PREFIX + wallet.toLowerCase()) === 'true');
        } catch {
            setVerified(false);
        }
    }, [wallet]);

    const update = useCallback(
        (v: boolean) => {
            setVerified(v);
            if (!wallet) return;
            try {
                const k = STORAGE_PREFIX + wallet.toLowerCase();
                if (v) window.localStorage.setItem(k, 'true');
                else window.localStorage.removeItem(k);
            } catch {
                /* ignore */
            }
        },
        [wallet],
    );

    return [verified, update] as const;
}
