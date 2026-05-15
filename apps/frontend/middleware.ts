import { NextResponse, type NextRequest } from 'next/server';

const LANDING_URL =
  process.env.LANDING_URL ??
  (process.env.NODE_ENV === 'production'
    ? 'https://chiliztv.com'
    : 'http://localhost:3002');

export function middleware(request: NextRequest): NextResponse {
  if (!request.cookies.has('cwk_access')) {
    return NextResponse.redirect(LANDING_URL);
  }

  return NextResponse.next();
}

export const config = {
  // Run on all routes except Next.js internals and static assets.
  matcher: ['/((?!_next/static|_next/image|favicon\\.ico|icons|images|.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico|woff|woff2|ttf|eot|mp4|mp3)$).*)'],
};
