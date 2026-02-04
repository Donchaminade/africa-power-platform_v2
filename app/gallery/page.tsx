
"use client";

import React, { useState, useEffect } from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useTranslation } from '../../contexts/LanguageContext';
import { apiFetch } from '../../utils/api';
import { X } from 'lucide-react';

interface Photo {
  id: number;
  image_url: string;
  thumbnail_url: string;
  caption_fr: string;
  caption_en: string;
  category: string;
  event_year: number;
}

const GalleryPage = () => {
  const { t, language } = useTranslation();
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  useEffect(() => {
    apiFetch<{data: Photo[]}>('power_api/gallery.php')
      .then(res => setPhotos(res.data || []))
      .catch(err => {
        console.error(err);
        // Fallback mock
        setPhotos(Array.from({ length: 12 }).map((_, i) => ({
          id: i,
          image_url: `https://picsum.photos/1200/800?random=${i + 200}`,
          thumbnail_url: `https://picsum.photos/600/400?random=${i + 200}`,
          caption_fr: "Moment d'innovation",
          caption_en: "Innovation moment",
          category: i % 3 === 0 ? 'workshop' : 'keynote',
          event_year: 2024
        })));
      })
      .finally(() => setLoading(false));
  }, []);

  const categories = ['all', 'workshop', 'keynote', 'networking', 'awards'];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Header />
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-hero-grid opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="text-brand-green font-black text-[10px] tracking-[0.4em] uppercase mb-6 inline-block bg-brand-green/10 px-4 py-2 rounded-full">{t('gallery.pre_title')}</span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8">{t('gallery.title_part1')} <span className="text-brand-green">{t('gallery.title_part2')}</span></h1>
        </div>
      </section>

      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 mb-16 justify-center">
            {categories.map(f => (
              <button key={f} onClick={() => setFilter(f)} className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${filter === f ? 'bg-brand-green text-white shadow-xl' : 'bg-gray-100 dark:bg-white/5 text-gray-500'}`}>
                {f}
              </button>
            ))}
          </div>

          {loading ? (
             <div className="text-center py-20 font-black text-2xl animate-pulse">Développement de la pellicule...</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {photos.filter(p => filter === 'all' || p.category === filter).map(photo => (
                <div key={photo.id} onClick={() => setSelectedPhoto(photo)} className="group relative aspect-square rounded-[2.5rem] overflow-hidden bg-gray-100 dark:bg-white/5 cursor-zoom-in shadow-xl hover:-translate-y-2 transition-all duration-500">
                  <img src={photo.thumbnail_url} alt="Gallery" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex flex-col justify-end">
                    <p className="text-white font-black text-sm">{language === 'fr' ? photo.caption_fr : photo.caption_en}</p>
                    <span className="text-brand-green text-[10px] uppercase font-black tracking-widest mt-2">{photo.category} • {photo.event_year}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {selectedPhoto && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-3xl animate-fade-in" onClick={() => setSelectedPhoto(null)}>
          <button className="absolute top-10 right-10 text-white text-3xl"><X /></button>
          <img src={selectedPhoto.image_url} className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl animate-scale-in" onClick={e => e.stopPropagation()} />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default GalleryPage;
