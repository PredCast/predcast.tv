import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

const here = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  output: "export",
  // Explicit: Next ignores a workspace root that is also $HOME (/home/node in Docker).
  turbopack: { root: path.join(here, "../../") },
  trailingSlash: true,
  transpilePackages: ["@chiliztv/ui"],
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "@dynamic-labs/sdk-react-core",
      "wagmi",
      "viem",
    ],
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
