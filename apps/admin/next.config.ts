import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { NextConfig } from 'next';

const here = path.dirname(fileURLToPath(import.meta.url));

// Vercel-only app (no Docker runtime stage). `output: 'standalone'` is for
// self-hosting and breaks Vercel's Build Output routing, so it's omitted.
// Security headers are static, so they live here (next.config) rather than in
// an edge proxy/middleware — no per-request function, and Vercel routes the
// pages natively.
const nextConfig: NextConfig = {
  // Climb to the repo root so pnpm's symlinked workspace packages get traced.
  outputFileTracingRoot: path.join(here, '../../'),
  transpilePackages: ['@chiliztv/ui'],

  async headers() {
    return [
      {
        // Back-office — never indexed, never framed. RBAC stays server-side.
        source: '/:path*',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, nofollow' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'no-referrer' },
        ],
      },
    ];
  },
};

export default nextConfig;
