"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import RegistrationsManager from '../../../admin/components/management/RegistrationsManager';
import SpeakersManager from '../../../admin/components/management/SpeakersManager';
import SponsorsManager from '../../../admin/components/management/SponsorsManager';
import SettingsManager from '../../../admin/components/management/SettingsManager';
import ProgramManager from '../../../admin/components/management/ProgramManager';
import TestimonialsManager from '../../../admin/components/management/TestimonialsManager';


const DashboardPage = () => {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('overview');
    const [isLoaded, setIsLoaded] = useState(false);
    const [user, setUser] = useState<{name: string, role: string} | null>(null);

    useEffect(() => {
        const userData = sessionStorage.getItem('authUser');
        if (!userData) {
            router.push('/admin');
        } else {
            setUser(JSON.parse(userData));
            setIsLoaded(true);
        }
    }, [router]);

    if (!isLoaded || !user) return null;

    const navItems = [
        { id: 'overview', label: 'Vue d\'ensemble', icon: 'fa-chart-pie', group: 'Général' },
        { id: 'registrations', label: 'Inscriptions', icon: 'fa-users', group: 'Gestion' },
        { id: 'speakers', label: 'Speakers', icon: 'fa-microphone', group: 'Gestion' },
        { id: 'sponsors', label: 'Partenaires', icon: 'fa-handshake', group: 'Gestion' },
        { id: 'program', label: 'Programme', icon: 'fa-calendar', group: 'Gestion' },
        { id: 'testimonials', label: 'Témoignages', icon: 'fa-star', group: 'Gestion' },
        { id: 'settings', label: 'Paramètres', icon: 'fa-cog', group: 'Configuration' },
    ];

    const renderTabContent = () => {
        switch (activeTab) {
            case 'overview': return <div className="animate-fade-in"><h2 className="text-5xl font-black tracking-tighter mb-8">Statistiques Globales</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8"><div className="bg-brand-green/10 p-10 rounded-[2.5rem] border border-brand-green/20"><p className="text-brand-green font-black uppercase tracking-widest text-xs">Total Inscriptions</p><p className="text-5xl font-black mt-2">1,240</p></div><div className="bg-blue-500/10 p-10 rounded-[2.5rem] border border-blue-500/20"><p className="text-blue-500 font-black uppercase tracking-widest text-xs">Total Speakers</p><p className="text-5xl font-black mt-2">25</p></div><div className="bg-amber-500/10 p-10 rounded-[2.5rem] border border-amber-500/20"><p className="text-amber-500 font-black uppercase tracking-widest text-xs">Total Partenaires</p><p className="text-5xl font-black mt-2">12</p></div></div></div>;
            case 'registrations': return <RegistrationsManager />;
            case 'speakers': return <SpeakersManager authUser={user as any} />;
            case 'sponsors': return <SponsorsManager />;
            case 'program': return <ProgramManager authUser={user as any} />;
            case 'testimonials': return <TestimonialsManager authUser={user as any} />;
            case 'settings': return <SettingsManager />;
            default: return <div>Tab non configuré</div>;
        }
    }

    const groupedNavItems = navItems.reduce((acc, item) => {
        if (!acc[item.group]) acc[item.group] = [];
        acc[item.group].push(item);
        return acc;
    }, {} as Record<string, typeof navItems>);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-black flex flex-col">
            <header className="sticky top-0 z-40 w-full bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 px-8 h-20 flex items-center justify-between">
                <div className="flex items-center gap-5">
                    <div className="w-10 h-10 rounded-xl bg-brand-green text-white flex items-center justify-center font-black">APP</div>
                    <div>
                        <p className="text-sm font-black leading-none">{user.name}</p>
                        <p className="text-[10px] font-black text-brand-green uppercase tracking-widest mt-1">{user.role}</p>
                    </div>
                </div>
                <button onClick={() => { sessionStorage.clear(); router.push('/admin'); }} className="text-red-500 text-xs font-black uppercase tracking-widest border border-red-500/20 px-4 py-2 rounded-full hover:bg-red-500 hover:text-white transition-all">Quitter</button>
            </header>

            <div className="flex flex-1 overflow-hidden">
                <aside className="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-white/10 overflow-y-auto custom-scrollbar">
                    <div className="p-6 space-y-8">
                        {Object.entries(groupedNavItems).map(([group, items]) => (
                            <div key={group}>
                                <h3 className="text-[10px] font-black uppercase text-gray-400 tracking-[0.2em] mb-4 ml-4">{group}</h3>
                                <div className="space-y-1">
                                    {items.map(item => (
                                        <button
                                            key={item.id}
                                            onClick={() => setActiveTab(item.id)}
                                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-black text-[11px] uppercase tracking-wider transition-all ${activeTab === item.id ? 'bg-brand-green text-white shadow-lg' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5'}`}
                                        >
                                            <i className={`fas ${item.icon} w-5`}></i>
                                            {item.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </aside>
                <main className="flex-1 overflow-y-auto p-12 bg-gray-50 dark:bg-black">
                    {renderTabContent()}
                </main>
            </div>
        </div>
    );
};

export default DashboardPage;