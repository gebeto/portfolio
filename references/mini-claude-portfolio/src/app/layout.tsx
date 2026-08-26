import React from 'react';
import type { Metadata } from "next";
import { Source_Serif_4 } from "next/font/google";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-source-serif-4",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio \u2014 Yaroslav Nychkalo",
  description: "Full Stack Engineer \u2014 shipping thoughtful, reliable software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sourceSerif.variable} suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
