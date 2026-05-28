import type { Metadata } from "next";
import "./globals.css";
import DynamicProviderWrapper from "@/components/providers/DynamicProviderWrapper";
import { Toaster } from "@chiliztv/ui";

export const metadata: Metadata = {
  title: "ChilizTV — Live Sports SocialFi Streaming Platform",
  description:
    "Watch live football matches and place on-chain predictions with ChilizTV. The first SocialFi streaming platform on Chiliz Chain.",
  icons: {
    icon: "/Logo_FINAL.svg",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased bg-black">
        <DynamicProviderWrapper>
          {children}
          <Toaster richColors position="bottom-right" />
        </DynamicProviderWrapper>
      </body>
    </html>
  );
}
