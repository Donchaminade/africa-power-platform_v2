"use client";

import React, { useState, useEffect } from "react";
import "./globals.css";
import { Providers } from "./providers";
import SplashScreen from "../components/SplashScreen";

export default function RootLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <title>Africa Power Platform</title>
        <link rel="icon" href="/assets/images/logo.png" />
      </head>
      <body className="min-h-screen bg-white text-gray-900 dark:bg-black dark:text-white transition-colors duration-300 antialiased">
        {loading && <SplashScreen />}
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}