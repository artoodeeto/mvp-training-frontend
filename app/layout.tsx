import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {Providers} from "./context/provider";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "mvp-training",
  description: "This frontend is for LGU Gensan Training Module",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
