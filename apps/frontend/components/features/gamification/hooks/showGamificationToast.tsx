import { toast } from 'sonner';

import { GamificationToastCard } from '../components/GamificationToastCard';
import type { ToastView } from '../domain/toastView';

const TOAST_DURATION_MS = 7_000;

/** Shows a gamification card toast; a stable `id` makes sonner replace instead of stacking a duplicate. */
export function showGamificationToast(view: ToastView, id: string): void {
    toast.custom((toastId) => <GamificationToastCard view={view} onDismiss={() => toast.dismiss(toastId)} />, {
        id,
        duration: TOAST_DURATION_MS,
    });
}
