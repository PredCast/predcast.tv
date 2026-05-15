import { useMutation } from '@tanstack/react-query';
import { accessApi } from '@/lib/api/endpoints/access';

export function useRedeemAccessCode() {
  return useMutation({
    mutationFn: (code: string) => accessApi.redeem(code),
  });
}
