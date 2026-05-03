import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@chiliztv/blockchain', '@chiliztv/domain', '@chiliztv/shared'],

  experimental: {
    optimizePackageImports: [
      'lucide-react',
      '@radix-ui/react-icons',
      'framer-motion',
      '@dynamic-labs/sdk-react-core',
      'wagmi',
      'viem',
    ],
  },

  images: {
    remotePatterns: [
      { hostname: 'localhost' },
      { hostname: 'upload.wikimedia.org' },
      { hostname: 'media.api-sports.io' },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
