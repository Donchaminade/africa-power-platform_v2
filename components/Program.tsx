


"use client";



import React from 'react';

import { useTranslation } from '../contexts/LanguageContext';

import { Mic, Laptop } from 'lucide-react';



const Program: React.FC = () => {

    const { t, language } = useTranslation();



    const agenda = {

      day1: [

        { time: "11h - 12h", titleKey: "program.d1_item1_title", descKey: "program.d1_item1_desc" },

        { time: "12h - 14h", titleKey: "program.d1_item2_title", descKey: "program.d1_item2_desc" },

        { time: "14h - 17h", titleKey: "program.d1_item3_title", descKey: "program.d1_item3_desc" },

      ],

      day2: [

        { time: "10h - 13h", titleKey: "program.d2_item1_title", descKey: "program.d2_item1_desc" },

        { time: "14h - 17h", titleKey: "program.d2_item2_title", descKey: "program.d2_item2_desc" },

      ]

    };



    const renderDay = (dayNum: number, schedule: {time: string, titleKey: string, descKey: string}[]) => (

      <div className="bg-white/80 dark:bg-white/5 backdrop-blur-xl p-8 rounded-[2.5rem] border border-gray-100 dark:border-white/10 shadow-xl">

          <h3 className="text-3xl font-black mb-10 flex items-center gap-4 tracking-tighter">

              <span className={`w-12 h-12 ${dayNum === 1 ? 'bg-brand-green' : 'bg-emerald-500'} rounded-2xl flex items-center justify-center text-white text-xl shadow-lg`}>

                {dayNum === 1 ? <Mic /> : <Laptop />}

              </span>

              <div className="flex flex-col">

                <span className="text-2xl font-black tracking-tight">{t(`program.day${dayNum}_title`)}</span>

                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t(`program.day${dayNum}_subtitle`)}</span>

              </div>

          </h3>

          <div className="space-y-8">

              {schedule.map((item, index) => (

                  <div key={index} className="flex gap-6 group">

                      <div className="flex flex-col items-center">

                          <div className={`w-4 h-4 rounded-full border-[3px] ${dayNum === 1 ? 'border-brand-green' : 'border-emerald-500'} bg-white dark:bg-black group-hover:scale-125 transition-all z-10`}></div>

                          <div className={`flex-1 w-px ${dayNum === 1 ? 'bg-brand-green/20' : 'bg-emerald-500/20'} my-1 last:hidden`}></div>

                      </div>

                      <div className="flex-1 pb-6 border-b border-gray-100 dark:border-white/10 last:border-0 last:pb-0">

                          <span className={`${dayNum === 1 ? 'text-brand-green' : 'text-emerald-500'} font-black text-[10px] tracking-widest uppercase mb-1 block`}>

                            {item.time}

                          </span>

                          <h4 className="text-xl font-black tracking-tight mb-2 group-hover:text-brand-green transition-colors">

                            {t(item.titleKey)}

                          </h4>

                          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">

                            {t(item.descKey)}

                          </p>

                      </div>

                  </div>

              ))}

          </div>

      </div>

    );



    return (

        <section id="program" className="relative py-16 overflow-hidden section-animate flex flex-col justify-center">

            <div className="absolute inset-0 bg-hero-grid opacity-35 z-0"></div>

            <div className="absolute inset-0 bg-gradient-to-b from-white dark:from-black via-transparent to-white dark:to-black z-[1]"></div>

            

            <div className="relative z-10 max-w-7xl mx-auto px-6">

                <div className="text-center mb-12">

                    <span className="text-brand-green font-black text-[10px] tracking-[0.4em] uppercase mb-4 px-4 py-1.5 rounded-full bg-brand-green/10 inline-block">

                        {t('program.pre_title')}

                    </span>

                    <h2 className="text-4xl md:text-5xl font-black mt-2 tracking-tighter leading-none mb-8" dangerouslySetInnerHTML={{ __html: t('program.title_main') }}>

                    </h2>

                </div>

                <div className="grid lg:grid-cols-2 gap-10">

                    {renderDay(1, agenda.day1)}

                    {renderDay(2, agenda.day2)}

                </div>

            </div>

        </section>

    );

};



export default Program;
