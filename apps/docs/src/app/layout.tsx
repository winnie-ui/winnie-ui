import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--wui-font-family-sans" });

export const metadata: Metadata = {
  title: "Winnie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} winnie-ui light h-dvh`}
        data-accent-color="brand"
        data-scaling="100%"
        data-radius="md"
      >
        {children}
      </body>
    </html>
  );
}
