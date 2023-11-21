import { Toaster } from "sonner";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { ConvexClientProvider } from "@/components/providers/convex-provider";
import { ModalProvider } from "@/components/providers/modal-provider";

import { EdgeStoreProvider } from "@/lib/edgestore";

import "./globals.css";
const inter = Inter({ subsets: ["latin"] });



export const metadata: Metadata = {
  title: "Notion",
  description: "write your daily Routine here",
  icons: [
    {
      media: "(prefers-color-scheme:light)",
      url: "/notion-logo.svg",
      href: "/notion-logo.svg",
    },
    {
      media: "(prefers-color-scheme:dark)",
      url: "/notion-logo-dark.svg",
      href: "/notion-logo-dark.svg",
    },
  ],
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className = {inter.className}>

        <ConvexClientProvider>

          <EdgeStoreProvider>

            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
              storageKey="Notion-theme-2"
              >
                <Toaster position="bottom-center" />
                <ModalProvider />
                {children}
            </ThemeProvider>

          </EdgeStoreProvider>


        </ConvexClientProvider>
        
      </body>
    </html>
  );
}
