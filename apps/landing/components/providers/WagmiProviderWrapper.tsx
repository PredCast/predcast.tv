"use client";

import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { createConfig, http } from 'wagmi';
import { chiliz, spicy } from 'wagmi/chains';

const queryClient = new QueryClient();

// Include both chains so Dynamic Labs can switch networks without wagmi warnings.
const config = createConfig({
  chains: [spicy, chiliz],
  multiInjectedProviderDiscovery: false,
  transports: {
    [spicy.id]: http('https://spicy-rpc.chiliz.com'),
    [chiliz.id]: http('https://chiliz-rpc.publicnode.com'),
  },
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
