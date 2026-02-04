"use client";

import React from 'react';
import Image from 'next/image';

const SplashScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-white dark:bg-black">
      <div className="relative">
        <Image
          src="/assets/images/logo.png"
          alt="Africa Power Platform Logo"
          width={80}
          height={80}
          className="animate-pulse"
        />
      </div>
    </div>
  );
};

export default SplashScreen;
