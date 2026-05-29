import { NextResponse } from 'next/server';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

/**
 * Server-side wall clock for client drift correction. Edge runtime returns
 * UTC ±100ms — enough to fix multi-second client skew (Windows clock not
 * NTP-synced, wrong timezone). NOT strict NTP synchro with Fly `cdg`;
 * tolerable for a minute-level counter, NOT for settlement-time gating.
 *
 * Cache-Control: no-store so a CDN edge can't pin a stale timestamp.
 */
type TimeResponse = {
  serverNow: number;
};

export function GET(): NextResponse<TimeResponse> {
  return new NextResponse(
    JSON.stringify({ serverNow: Date.now() } satisfies TimeResponse),
    {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, max-age=0',
      },
    },
  );
}
