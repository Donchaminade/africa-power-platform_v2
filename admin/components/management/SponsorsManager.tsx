"use client";

import React, { useState } from 'react';
import Modal from '../ui/Modal';
import DataTable from '../ui/DataTable';

interface Sponsor {
    id: number;
    name: string;
    tier: 'platinum' | 'gold' | 'silver' | 'community';
    website_url: string;
    logo_url: string;
}

const mockSponsors: Sponsor[] = [
  { id: 1, name: 'Microsoft', tier: 'platinum', website_url: 'https://microsoft.com', logo_url: 'https://logo.clearbit.com/microsoft.com' },
  { id: 2, name: 'MTN', tier: 'gold', website_url: 'https://mtn.com', logo_url: 'https://logo.clearbit.com/mtn.com' },
  { id: 3, name: 'Orange', tier: 'gold', website_url: 'https://orange.com', logo_url: 'https://logo.clearbit.com/orange.com' },
  { id: 4, name: 'Moov Africa', tier: 'silver', website_url: 'https://moov.africa', logo_url: 'https://logo.clearbit.com/moov.africa' },
];

const tierColors = {
    platinum: 'bg-gray-800 text-white',
    gold: 'bg-amber-400 text-amber-900',
    silver: 'bg-slate-300 text-slate-700',
    community: 'bg-emerald-100 text-emerald-800',
}

const SponsorsManager = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const columns = [
    { header: 'Partenaire', accessor: (item: Sponsor) => (
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gray-100 dark:bg-white/5 rounded-xl flex items-center justify-center p-1">
            <img src={item.logo_url} alt={item.name} className="max-w-full max-h-full object-contain" />
        </div>
        <div>
          <p className="font-black text-base">{item.name}</p>
          <a href={item.website_url} target="_blank" className="text-gray-500 text-xs font-bold hover:text-brand-primary">{item.website_url}</a>
        </div>
      </div>
    )},
    { header: 'Niveau', accessor: (item: Sponsor) => (
        <span className={`px-3 py-1 text-[10px] font-black uppercase rounded-full ${tierColors[item.tier]}`}>
            {item.tier}
        </span>
    )},
  ];

  const renderActions = (item: Sponsor) => (
    <div className="flex justify-end gap-2">
      <button className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-white/5 text-gray-500 hover:bg-emerald-500 hover:text-white transition-all"><i className="fas fa-edit"></i></button>
      <button className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-white/5 text-gray-500 hover:bg-red-500 hover:text-white transition-all"><i className="fas fa-trash"></i></button>
    </div>
  );

  return (
    <>
      <DataTable
        title="Partenaires & Sponsors"
        subtitle="Gérez les soutiens de l'écosystème."
        columns={columns}
        data={mockSponsors}
        onAddNew={() => setIsModalOpen(true)}
        renderActions={renderActions}
        searchableKey="name"
      />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Ajouter un Partenaire">
        <div className="p-4 text-center text-gray-500">Formulaire d'ajout de partenaire en cours de construction...</div>
      </Modal>
    </>
  );
};

export default SponsorsManager;