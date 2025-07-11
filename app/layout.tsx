import type { Metadata } from "next";

import Header from "./_components/common/header";

import "./globals.css";

export const metadata: Metadata = {
  title: "IMeal"
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
