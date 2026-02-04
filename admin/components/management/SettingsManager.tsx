"use client";

import React, { useState, useEffect } from 'react';
import { Ticket, Handshake, Mic, Mail, Phone, MessageCircle, Linkedin, Twitter, Facebook } from 'lucide-react';

const SettingsManager = () => {
  const [settings, setSettings] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simuler un fetch des settings
    setTimeout(() => {
      setSettings({
        event_venue_name: 'Palais des Congrès de Cotonou',
        event_address: 'Boulevard de la Marina, Cotonou, Bénin',
        event_start_date: '2026-06-20T09:00:00',
        google_maps_embed_url: 'https://www.google.com/maps/embed?pb=...',
        url_registration_attendee: 'https://forms.office.com/r/UCMe9tdkty',
        url_become_sponsor: 'https://forms.office.com/r/8NGPjVvrtm',
        url_become_speaker: 'https://forms.office.com/r/MFLQb3FZej',
        contact_email: 'contact@africapowerplatform.org',
        contact_phone: '+229 68 38 01 12',
        whatsapp_community_url: 'https://chat.whatsapp.com/votre-lien',
        social_linkedin_url: 'https://linkedin.com/company/africapowerplatform',
        social_twitter_url: 'https://twitter.com/africapp',
        social_facebook_url: 'https://facebook.com/africapowerplatform'
      });
      setLoading(false);
    }, 500);
  }, []);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSettings({...settings, [e.target.name]: e.target.value});
  }

  if(loading) return <div className="animate-pulse">Chargement des paramètres...</div>

  return (
    <div className="animate-fade-in">
      <header className="mb-12">
        <h2 className="text-5xl font-black tracking-tighter">Paramètres de l'Événement</h2>
        <p className="text-gray-500 text-xl font-medium mt-2">Gérez toutes les informations dynamiques du site.</p>
      </header>

      <form className="space-y-10">
        <div className="p-8 bg-white dark:bg-gray-900 rounded-[2.5rem] border border-gray-200 dark:border-white/10">
            <h3 className="text-xl font-black uppercase tracking-widest text-brand-green mb-8">Informations Clés</h3>
            <div className="grid md:grid-cols-2 gap-6">
                <InputField label="Nom du lieu" name="event_venue_name" value={settings.event_venue_name} onChange={handleInputChange} />
                <InputField label="Date de début" name="event_start_date" type="datetime-local" value={settings.event_start_date} onChange={handleInputChange} />
                <div className="md:col-span-2">
                    <InputField label="Adresse complète" name="event_address" value={settings.event_address} onChange={handleInputChange} />
                </div>
                 <div className="md:col-span-2">
                    <InputField label="URL Google Maps (Embed)" name="google_maps_embed_url" value={settings.google_maps_embed_url} onChange={handleInputChange} />
                </div>
            </div>
        </div>
        
        <div className="p-8 bg-white dark:bg-gray-900 rounded-[2.5rem] border border-gray-200 dark:border-white/10">
            <h3 className="text-xl font-black uppercase tracking-widest text-brand-green mb-8">Liens & Formulaires</h3>
            <div className="space-y-4">
                <InputField icon={<Ticket />} label="Inscription Participant" name="url_registration_attendee" value={settings.url_registration_attendee} onChange={handleInputChange} />
                <InputField icon={<Handshake />} label="Devenir Partenaire" name="url_become_sponsor" value={settings.url_become_sponsor} onChange={handleInputChange} />
                <InputField icon={<Mic />} label="Proposer un Talk" name="url_become_speaker" value={settings.url_become_speaker} onChange={handleInputChange} />
            </div>
        </div>

        <div className="p-8 bg-white dark:bg-gray-900 rounded-[2.5rem] border border-gray-200 dark:border-white/10">
            <h3 className="text-xl font-black uppercase tracking-widest text-brand-green mb-8">Contact & Réseaux</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
                <InputField icon={<Mail />} label="Email de contact" name="contact_email" value={settings.contact_email} onChange={handleInputChange} />
                <InputField icon={<Phone />} label="Téléphone" name="contact_phone" value={settings.contact_phone} onChange={handleInputChange} />
            </div>
            <div className="space-y-4">
                <InputField icon={<MessageCircle />} label="Lien Communauté WhatsApp" name="whatsapp_community_url" value={settings.whatsapp_community_url} onChange={handleInputChange} />
                <InputField icon={<Linkedin />} label="LinkedIn" name="social_linkedin_url" value={settings.social_linkedin_url} onChange={handleInputChange} />
                <InputField icon={<Twitter />} label="Twitter" name="social_twitter_url" value={settings.social_twitter_url} onChange={handleInputChange} />
                <InputField icon={<Facebook />} label="Facebook" name="social_facebook_url" value={settings.social_facebook_url} onChange={handleInputChange} />
            </div>
        </div>

        <div className="flex justify-end pt-6">
          <button type="submit" className="bg-brand-primary text-white px-12 py-5 rounded-full font-black text-sm uppercase tracking-widest shadow-xl shadow-brand-primary/30 hover:scale-105 transition-all">
            Sauvegarder les modifications
          </button>
        </div>
      </form>
    </div>
  );
};

const InputField = ({ label, name, value, onChange, type = "text", icon } : {label:string, name:string, value:string, onChange:any, type?:string, icon?:React.ReactNode}) => (
    <div>
        <label className="block text-xs font-black uppercase text-gray-500 mb-2">{label}</label>
        <div className="relative">
            {icon && <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">{icon}</div>}
            <input type={type} name={name} value={value} onChange={onChange} className={`w-full p-4 border rounded-2xl dark:bg-gray-800 dark:border-gray-700 font-bold ${icon ? 'pl-12' : ''}`} />
        </div>
    </div>
);


export default SettingsManager;