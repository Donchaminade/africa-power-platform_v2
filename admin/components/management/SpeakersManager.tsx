
"use client";

import React, { useState } from 'react';
import Modal from '../ui/Modal';
import DataTable from '../ui/DataTable';
import { Eye, Edit, Trash } from 'lucide-react';

const mockSpeakers = [
  { id: 1, name: 'Adama Traoré', role: 'MVP Power BI', category: 'Data', image: 'https://picsum.photos/100/100?random=10' },
  { id: 2, name: 'Fatou Diop', role: 'CEO SahelInnov', category: 'Innovation', image: 'https://picsum.photos/100/100?random=11' },
  { id: 3, name: 'David Okoro', role: 'Consultant D365', category: 'Business Apps', image: 'https://picsum.photos/100/100?random=12' },
  { id: 4, name: 'Aisha Bello', role: 'Founder, Tech4Her', category: 'Impact Social', image: 'https://picsum.photos/100/100?random=13' },
];

const SpeakersManager: React.FC<{ authUser: any }> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const columns = [
    { header: 'Speaker', accessor: (item: typeof mockSpeakers[0]) => (
      <div className="flex items-center gap-4">
        <img src={item.image} alt={item.name} className="w-12 h-12 rounded-xl object-cover" />
        <div>
          <p className="font-black text-base">{item.name}</p>
          <p className="text-gray-500 text-xs font-bold">{item.role}</p>
        </div>
      </div>
    )},
    { header: 'Catégorie', accessor: (item: typeof mockSpeakers[0]) => (
        <span className="font-bold text-brand-primary">{item.category}</span>
    )},
  ];

  const renderActions = (item: typeof mockSpeakers[0]) => (
    <div className="flex justify-end gap-2">
      <button className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-white/5 text-gray-500 hover:bg-blue-500 hover:text-white transition-all"><Eye /></button>
      <button className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-white/5 text-gray-500 hover:bg-emerald-500 hover:text-white transition-all"><Edit /></button>
      <button className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-white/5 text-gray-500 hover:bg-red-500 hover:text-white transition-all"><Trash /></button>
    </div>
  );

  return (
    <>
      <DataTable
        title="Speakers"
        subtitle="Gérez les intervenants de l'édition 2026."
        columns={columns}
        data={mockSpeakers}
        onAddNew={() => setIsModalOpen(true)}
        renderActions={renderActions}
        searchableKey="name"
      />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Ajouter un Speaker">
        <div className="p-4 text-center text-gray-500">Formulaire d'ajout en cours de construction...</div>
      </Modal>
    </>
  );
};

export default SpeakersManager;
