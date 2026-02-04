
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
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.section-animate');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
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
      <WhatsAppButton />
    </div>
  );
}
