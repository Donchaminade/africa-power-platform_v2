
"use client";

import React, { useState, useEffect } from 'react';
import Modal from '../ui/Modal';
import { apiFetch } from '../../../utils/api';
import DataTable from '../ui/DataTable';

interface Testimonial {
    id: number;
    author_name: string;
    author_title_fr: string;
    quote_fr: string;
    author_image_url: string;
}

const TestimonialsManager: React.FC<{ authUser: any }> = ({ authUser }) => {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        // FIX: Wrapped fallback data in an object with a 'data' property to match the expected type.
        apiFetch<{data: Testimonial[]}>('power_api/testimonials.php', {}, { data: [
            { id: 1, author_name: 'Jean-Luc Kouassi', author_title_fr: 'Co-fondateur, APP', quote_fr: 'Notre vision est de créer un pont...', author_image_url: 'https://picsum.photos/100/100?random=1' },
            { id: 2, author_name: 'Mariam Keita', author_title_fr: 'Directrice Partenariats', quote_fr: 'Nous sommes fiers de réunir...', author_image_url: 'https://picsum.photos/100/100?random=2' },
        ]})
            .then(json => {
                setTestimonials(json.data || []);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    const columns = [
        { header: 'Auteur', accessor: (item: Testimonial) => (
            <div className="flex items-center gap-4">
                <img src={item.author_image_url} alt={item.author_name} className="w-12 h-12 rounded-xl object-cover" />
                <div>
                    <p className="font-black text-base">{item.author_name}</p>
                    <p className="text-gray-500 text-xs font-bold">{item.author_title_fr}</p>
                </div>
            </div>
        )},
        { header: 'Citation (Extrait)', accessor: (item: Testimonial) => (
            <p className="text-gray-500 italic">"{item.quote_fr.substring(0, 50)}..."</p>
        )},
    ];

    const renderActions = (item: Testimonial) => (
        <div className="flex justify-end gap-2">
            <button className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-white/5 text-gray-500 hover:bg-blue-500 hover:text-white transition-all"><i className="fas fa-eye"></i></button>
            <button className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-white/5 text-gray-500 hover:bg-emerald-500 hover:text-white transition-all"><i className="fas fa-edit"></i></button>
            <button className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-white/5 text-gray-500 hover:bg-red-500 hover:text-white transition-all"><i className="fas fa-trash"></i></button>
        </div>
    );

    return (
        <>
            {loading ? <div className="text-center font-black animate-pulse">Chargement...</div> : (
                <DataTable
                    title="Témoignages"
                    subtitle="Gérez la preuve sociale de l'événement."
                    columns={columns}
                    data={testimonials}
                    onAddNew={() => setIsModalOpen(true)}
                    renderActions={renderActions}
                    searchableKey="author_name"
                />
            )}

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Ajouter un témoignage">
                <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs font-black uppercase text-gray-500 mb-2">Auteur</label>
                            <input className="w-full p-4 border rounded-2xl dark:bg-gray-700 dark:border-gray-600 font-bold" placeholder="Nom complet" />
                        </div>
                        <div>
                            <label className="block text-xs font-black uppercase text-gray-500 mb-2">Fonction</label>
                            <input className="w-full p-4 border rounded-2xl dark:bg-gray-700 dark:border-gray-600 font-bold" placeholder="ex: CEO chez TechX" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs font-black uppercase text-gray-500 mb-2">URL Image</label>
                        <input className="w-full p-4 border rounded-2xl dark:bg-gray-700 dark:border-gray-600 font-bold" placeholder="https://..." />
                    </div>
                    <div>
                        <label className="block text-xs font-black uppercase text-gray-500 mb-2">Citation (FR)</label>
                        <textarea className="w-full p-4 border rounded-2xl dark:bg-gray-700 dark:border-gray-600 font-medium" rows={4} placeholder="Leur retour d'expérience..."></textarea>
                    </div>
                    <div className="flex justify-end gap-4 pt-4">
                        <button type="button" onClick={() => setIsModalOpen(false)} className="px-8 py-4 bg-gray-100 rounded-full font-black text-xs uppercase tracking-widest">Annuler</button>
                        <button type="submit" className="px-10 py-4 bg-brand-green text-white rounded-full font-black text-xs uppercase tracking-widest">Enregistrer</button>
                    </div>
                </form>
            </Modal>
        </>
    );
};

export default TestimonialsManager;