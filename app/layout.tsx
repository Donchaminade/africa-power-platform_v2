import React from "react";
import "./globals.css";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <title>Africa Power Platform</title>
        <link rel="icon" href="/assets/images/logo.png" />
      </head>
      <body className="min-h-screen bg-white text-gray-900 dark:bg-black dark:text-white transition-colors duration-300 antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}