import type { Metadata } from "next";
import "./globals.css";
import DynamicProviderWrapper from "@/components/providers/DynamicProviderWrapper";
import { AuthProvider } from "@/providers/auth-provider";
import { QueryProvider } from "@/providers/query-provider";
import { Toaster } from "@chiliztv/ui";

export const metadata: Metadata = {
  title: "ChilizTV - Live Sports SocialFi Streaming Platform",
  description: "Watch live sports matches and place predictions in real-time with ChilizTV. Experience the thrill of live sports streaming and predictions all in one platform.",
  icons: {
    icon: "/Logo_FINAL.svg",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-black">
        <DynamicProviderWrapper>
          <AuthProvider>
            <QueryProvider>
              {children}
              <Toaster position="top-right" richColors />
            </QueryProvider>
          </AuthProvider>
        </DynamicProviderWrapper>
      </body>
    </html>
  );
}
