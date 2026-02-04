
"use client";

import React, { useState } from 'react';
import Modal from '../ui/Modal';
import DataTable from '../ui/DataTable';
import { Megaphone, Users, Lightbulb, Cog, Edit, Trash } from 'lucide-react';

interface ProgramItem {
    id: number;
    day: number;
    start_time: string;
    end_time: string;
    title_fr: string;
    icon: React.ReactNode;
}

const mockProgram: ProgramItem[] = [
    { id: 1, day: 1, start_time: "11:00", end_time: "12:00", title_fr: "Keynote d'Ouverture", icon: <Megaphone /> },
    { id: 2, day: 1, start_time: "12:00", end_time: "13:30", title_fr: "Panel: Transformation Digitale", icon: <Users /> },
    { id: 3, day: 2, start_time: "10:00", end_time: "13:00", title_fr: "Bootcamp: Idéation & Design", icon: <Lightbulb /> },
    { id: 4, day: 2, start_time: "14:00", end_time: "16:30", title_fr: "Bootcamp: Développement", icon: <Cog /> },
];

const ProgramManager: React.FC<{ authUser: any }> = ({ authUser }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingItem, setEditingItem] = useState<ProgramItem | null>(null);

    const openModal = (item: ProgramItem | null = null) => {
        setEditingItem(item);
        setIsModalOpen(true);
    };
    
    const columns = [
        { header: 'Jour', accessor: (item: ProgramItem) => (
            <span className="w-10 h-10 bg-gray-100 dark:bg-white/5 rounded-xl flex items-center justify-center font-black">
              0{item.day}
            </span>
        )},
        { header: 'Horaire', accessor: (item: ProgramItem) => (
            <span className="font-black text-brand-primary tracking-tight">{item.start_time} - {item.end_time}</span>
        )},
        { header: 'Titre (FR)', accessor: 'title_fr' as const },
    ];

    const renderActions = (item: ProgramItem) => (
        <div className="flex justify-end gap-2">
            <button onClick={() => openModal(item)} className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-white/5 text-gray-500 hover:bg-emerald-500 hover:text-white transition-all"><Edit /></button>
            <button className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-white/5 text-gray-500 hover:bg-red-500 hover:text-white transition-all"><Trash /></button>
        </div>
    );


    return (
        <>
            <DataTable
                title="Programme"
                subtitle="Gérez l'agenda détaillé de l'événement."
                columns={columns}
                data={mockProgram.sort((a,b) => a.day - b.day || a.start_time.localeCompare(b.start_time))}
                onAddNew={() => openModal()}
                renderActions={renderActions}
                searchableKey="title_fr"
            />

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={editingItem ? 'Éditer un créneau' : 'Ajouter un créneau'}>
                <form className="space-y-6">
                    <div className="grid grid-cols-3 gap-6">
                        <div>
                            <label className="block text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Jour</label>
                            <select name="day" defaultValue={editingItem?.day} className="w-full p-4 border rounded-2xl dark:bg-gray-700 dark:border-gray-600 font-bold">
                                <option value="1">Jour 01</option>
                                <option value="2">Jour 02</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Début</label>
                            <input type="time" name="start_time" defaultValue={editingItem?.start_time} className="w-full p-4 border rounded-2xl dark:bg-gray-700 dark:border-gray-600 font-bold" />
                        </div>
                        <div>
                            <label className="block text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Fin</label>
                            <input type="time" name="end_time" defaultValue={editingItem?.end_time} className="w-full p-4 border rounded-2xl dark:bg-gray-700 dark:border-gray-600 font-bold" />
                        </div>
                    </div>
                    <div>
                         <label className="block text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Titre (FR)</label>
                         <input name="title_fr" defaultValue={editingItem?.title_fr} className="w-full p-4 border rounded-2xl dark:bg-gray-700 dark:border-gray-600 font-bold" />
                    </div>
                    <div className="flex justify-end gap-4 pt-4">
                        <button type="button" onClick={() => setIsModalOpen(false)} className="px-8 py-4 rounded-full bg-gray-100 font-black text-xs uppercase tracking-widest">Annuler</button>
                        <button type="submit" className="px-10 py-4 rounded-full bg-brand-primary text-white font-black text-xs uppercase tracking-widest shadow-lg">Enregistrer</button>
                    </div>
                </form>
            </Modal>
        </>
    );
};

export default ProgramManager;
