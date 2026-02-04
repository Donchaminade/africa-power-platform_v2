


"use client";



import React from 'react';

import { useTranslation } from '../contexts/LanguageContext';

import CollaborationCTA from './CollaborationCTA';

import { GraduationCap, Network, Rocket } from 'lucide-react';



const About: React.FC = () => {

  const { t } = useTranslation();

  

  return (

    <section id="about" className="relative py-24 overflow-hidden section-animate flex flex-col justify-center">

      <div className="absolute inset-0 bg-hero-grid opacity-50 z-0"></div>

      <div className="absolute inset-0 bg-gradient-to-b from-white dark:from-black via-transparent to-white dark:to-black z-[1]"></div>

      

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-6xl font-black mt-2 tracking-tighter leading-tight" dangerouslySetInnerHTML={{ __html: t('about.title') }}>

          </h2>

        </div>



        <div className="grid lg:grid-cols-5 gap-16 items-center">

          <div className="lg:col-span-3 space-y-8">

            <p className="text-gray-600 dark:text-gray-300 text-xl md:text-2xl leading-relaxed font-medium">

              {t('about.description_main')}

            </p>

            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed opacity-90">

              {t('about.description_secondary')}

            </p>

          </div>



          <div className="lg:col-span-2 space-y-6">

            {[

              { i: <GraduationCap />, title: t('about.tagline_1_title'), text: t('about.tagline_1_text') },

              { i: <Network />, title: t('about.tagline_2_title'), text: t('about.tagline_2_text') },

              { i: <Rocket />, title: t('about.tagline_3_title'), text: t('about.tagline_3_text') }

            ].map((item, idx) => (

              <div key={idx} className="flex items-start gap-5 bg-white dark:bg-white/5 p-6 rounded-[2rem] border border-gray-100 dark:border-white/10 shadow-xl">

                <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center text-brand-green flex-shrink-0 mt-1">

                  {item.i}

                </div>

                <div>

                  <h4 className="font-black text-lg">{item.title}</h4>

                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.text}</p>

                </div>

              </div>

            ))}

          </div>

        </div>



        <CollaborationCTA />

      </div>

    </section>

  );

};



export default About;
