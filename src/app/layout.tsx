import type { Metadata } from "next";

import { openSans } from "@/assets/fonts";

import Providers from "@/providers";

import "@/styles/globals.scss";

export const metadata: Metadata = {
  title: "Survey",
  description: "Survey test task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
