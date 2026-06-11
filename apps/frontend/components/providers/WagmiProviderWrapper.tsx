// components/providers/WagmiProviderWrapper.tsx
"use client";

import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { createConfig, http } from 'wagmi';
import { chiliz, spicy } from 'wagmi/chains';

const queryClient = new QueryClient();

const NETWORK = (process.env.NEXT_PUBLIC_NETWORK || process.env.NETWORK || 'testnet').toLowerCase();
const isTestnet = NETWORK !== 'mainnet';

const SPICY_RPC_URL = 'https://spicy-rpc.chiliz.com';
const CHILIZ_RPC_URL = 'https://chiliz-rpc.publicnode.com';

const config = isTestnet
  ? createConfig({
      chains: [spicy],
      multiInjectedProviderDiscovery: false,
      transports: {
        [spicy.id]: http(SPICY_RPC_URL),
      } as Record<typeof spicy.id, ReturnType<typeof http>>,
    })
  : createConfig({
      chains: [chiliz],
      multiInjectedProviderDiscovery: false,
      transports: {
        [chiliz.id]: http(CHILIZ_RPC_URL),
      } as Record<typeof chiliz.id, ReturnType<typeof http>>,
    });

export function WagmiProviderWrapper({ children }: { readonly children: ReactNode }) {
    return (
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </WagmiProvider>
    );
}
