"use client";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import About from "../components/About";
import Speakers from "../components/Speakers";
import Program from "../components/Program";
import Registration from "../components/Registration";
import Gallery from "../components/Gallery";
import Location from "../components/Location";
import Sponsors from "../components/Sponsors";
import Team from "../components/Team";
import Faq from "../components/Faq";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import Chatbot from "../components/Chatbot";
import { useEffect, useState } from "react";
import { useTranslation } from "../contexts/LanguageContext";
import Image from 'next/image';

export default function Home() {
  const { loading } = useTranslation();
  const [showContent, setShowContent] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setProgress(prev => (prev < 90 ? prev + Math.random() * 15 : prev));
      }, 200);
      return () => clearInterval(interval);
    } else {
      setProgress(100);
      const timer = setTimeout(() => setShowContent(true), 800);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  useEffect(() => {
    if (showContent) {
      requestAnimationFrame(() => {
        const heroElement = document.getElementById('hero');
        if (heroElement) {
          heroElement.scrollIntoView();
        }
      });

      const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('fade-in-up');
        });
      }, observerOptions);

      document.querySelectorAll('.section-animate').forEach(section => observer.observe(section));
      
      return () => observer.disconnect();
    }
  }, [showContent]);

  if (!showContent) {
    return (
      <div className="fixed inset-0 bg-white dark:bg-black flex flex-col items-center justify-center z-[9999] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-green/10 rounded-full blur-[160px] animate-pulse"></div>
        
        <div className="relative flex flex-col items-center">
          <div className="relative mb-16 group">
            <div className="absolute inset-0 bg-brand-green blur-3xl opacity-30 group-hover:opacity-50 transition-opacity animate-pulse"></div>
            <Image
                src="/assets/images/logo.png"
                alt="Africa Power Platform Logo"
                width={112}
                height={112}
                className="relative z-10 animate-[float_3s_ease-in-out_infinite]"
                priority
            />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-[scan_2s_linear_infinite]"></div>
          </div>

          <div className="text-center relative z-10">
            <h1 className="text-4xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-gray-900 via-gray-700 to-gray-500 dark:from-white dark:via-gray-300 dark:to-gray-600">
              Africa Power Platform
            </h1>
            
            <div className="w-64 h-1.5 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden mx-auto border border-gray-200/50 dark:border-white/5 p-[1px]">
              <div 
                className="h-full bg-brand-green transition-all duration-500 ease-out rounded-full shadow-[0_0_15px_rgba(0,168,89,0.5)]"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            
            <div className="flex flex-col gap-2 mt-6">
              <p className="text-[9px] font-black text-brand-green uppercase tracking-[0.6em] animate-pulse">
                {progress < 100 ? 'Initialisation des modules...' : 'Prêt pour l\'innovation'}
              </p>
              <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 tabular-nums">
                {Math.round(progress)}%
              </p>
            </div>
          </div>
        </div>
        
        {/* FIX: Removed unsupported <style jsx> block. Animations are now defined in tailwind.config.js. */}
      </div>
    );
  }

  return (
    <div className="min-h-screen animate-fade-in relative scroll-smooth">
      {/* Le Header est rendu ici, il possède déjà 'fixed top-0' */}
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Speakers />
        <Program />
        <Registration />
        <Gallery />
        <Location />
        <Sponsors />
        <Team />
        <Faq />
        <Contact />
      </main>
      <Footer />
      
      <Chatbot />
      <WhatsAppButton />
    </div>
  );
}