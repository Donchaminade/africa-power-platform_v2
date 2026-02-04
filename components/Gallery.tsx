
"use client";

import React, { useState, useEffect } from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { apiFetch } from '../utils/api';
import { ArrowRight } from 'lucide-react';

interface Photo {
  id: number;
  thumbnail_url: string;
}

const Gallery: React.FC = () => {
  const { t } = useTranslation();
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiFetch<{data: Photo[]}>('power_api/gallery.php?limit=4', {}, { data: [] })
      .then(res => {
        if (res.data && res.data.length > 0) {
          setPhotos(res.data);
        } else {
          setPhotos([1,2,3,4].map(i => ({ id: i, thumbnail_url: `https://picsum.photos/600/600?random=${i + 150}` })));
        }
      })
      .catch(() => {
        setPhotos([1,2,3,4].map(i => ({ id: i, thumbnail_url: `https://picsum.photos/600/600?random=${i + 150}` })));
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="gallery" className="relative py-24 overflow-hidden section-animate">
      <div className="absolute inset-0 bg-hero-grid opacity-20 z-0"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-green font-black text-[11px] tracking-[0.4em] uppercase mb-5 px-6 py-2 rounded-full bg-brand-green/10 inline-block border border-brand-green/20">
            {t('gallery.pre_title') || 'ARCHIVES VISUELLES'}
          </span>
          <h2 className="text-5xl md:text-8xl font-black mt-2 tracking-tighter leading-none mb-10">
            {t('gallery.title_part1') || "L'Étincelle de"} <span className="text-brand-green">{t('gallery.title_part2') || "l'Innovation"}</span>
          </h2>
        </div>

        {loading ? (
            <div className="text-center py-24 font-black animate-pulse text-sm uppercase tracking-widest text-gray-400">Développement de la pellicule...</div>
        ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {photos.map((p) => (
                <div key={p.id} className="aspect-square rounded-[2.5rem] overflow-hidden border-4 border-transparent hover:border-brand-green transition-all duration-700 shadow-2xl hover:-translate-y-2">
                <img src={p.thumbnail_url} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 hover:scale-110" alt="Gallery Item" />
                </div>
            ))}
            </div>
        )}

        <div className="text-center">
          <a href="/gallery" className="group inline-flex items-center gap-4 px-12 py-6 bg-brand-green text-white rounded-full font-black text-[11px] uppercase tracking-[0.3em] shadow-2xl shadow-brand-green/30 hover:bg-green-700 hover:-translate-y-1 transition-all duration-500">
            {t('gallery.view_all') || 'VOIR TOUTE LA GALERIE'}
            <ArrowRight className="group-hover:translate-x-3 transition-transform duration-500" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
