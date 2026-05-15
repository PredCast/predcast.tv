import { NextResponse } from 'next/server';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

type HealthResponse = {
  status: 'ok';
  service: 'frontend';
  timestamp: number;
};

export function GET(): NextResponse<HealthResponse> {
  return NextResponse.json({
    status: 'ok',
    service: 'frontend',
    timestamp: Date.now(),
  });
}
