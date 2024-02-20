import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import { Header } from "app/components/shared/header";
import { Footer } from "app/components/shared/footer/footer";

import styles from 'app/sass/globals.sass'

export const metadata: Metadata = {
  title: "danexcode",
  description: "Blog for businessmen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={styles}>
      <body className={GeistSans.className}>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
