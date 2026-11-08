interface ErrorEnvelope {
  response?: { status?: number; data?: { error?: { message?: string }; correlationId?: string } };
}

/** Error message of an axios call to the backend envelope. */
export function apiErrorMessage(err: unknown): string {
  const data = (err as ErrorEnvelope).response?.data;
  return data?.error?.message ?? (err instanceof Error ? err.message : 'Request failed');
}

/** Backend correlation id of a failed call (shown on card errors for support). */
export function apiRequestId(err: unknown): string | null {
  return (err as ErrorEnvelope).response?.data?.correlationId ?? null;
}

export function apiStatus(err: unknown): number | null {
  return (err as ErrorEnvelope).response?.status ?? null;
}
