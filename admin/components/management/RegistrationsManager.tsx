
"use client";

import React from 'react';
import DataTable from '../ui/DataTable';

const mockRegistrations = [
  { id: 1, name: 'Marc Dossou', email: 'm.dossou@mail.com', company: 'Tech Benin', type: 'Full Pass', date: '2024-03-15' },
  { id: 2, name: 'Sophie Kouassi', email: 'sophie.k@tech.bj', company: 'Freelance', type: 'Conférence', date: '2024-03-16' },
  { id: 3, name: 'Ibrahim Sarr', email: 'ibra@dev.io', company: 'Dev Labs', type: 'Bootcamp', date: '2024-03-17' },
  { id: 4, name: 'Aïcha Diallo', email: 'a.diallo@web.sn', company: 'Dakar Solutions', type: 'Full Pass', date: '2024-03-18' },
  { id: 5, name: 'Kwame Nkrumah', email: 'kwame@ghana.com', company: 'Accra Innovations', type: 'Conférence', date: '2024-03-19' },
  { id: 6, name: 'Fatou Ndiaye', email: 'fatou.ndiaye@senegal.net', company: 'Orange Senegal', type: 'Full Pass', date: '2024-03-20' },
];

const RegistrationsManager = () => {
  const columns = [
    { header: 'Nom', accessor: 'name' as const },
    { header: 'Email', accessor: 'email' as const },
    { header: 'Pass', accessor: (item: typeof mockRegistrations[0]) => (
      <span className="px-3 py-1 bg-brand-primary/10 text-brand-primary text-[10px] font-black uppercase rounded-full">
        {item.type}
      </span>
    )},
    { header: 'Date', accessor: 'date' as const },
  ];

  const renderActions = (item: typeof mockRegistrations[0]) => (
    <div className="flex justify-end gap-2">
      <button className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-white/5 text-gray-500 hover:bg-blue-500 hover:text-white transition-all"><i className="fas fa-eye"></i></button>
      <button className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-white/5 text-gray-500 hover:bg-emerald-500 hover:text-white transition-all"><i className="fas fa-edit"></i></button>
      <button className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-white/5 text-gray-500 hover:bg-red-500 hover:text-white transition-all"><i className="fas fa-trash"></i></button>
    </div>
  );

  return (
    <DataTable
      title="Inscriptions"
      subtitle="Suivez les participants enregistrés en temps réel."
      columns={columns}
      data={mockRegistrations}
      onAddNew={() => alert('Add new registration form should open.')}
      renderActions={renderActions}
      searchableKey="name"
    />
  );
};

export default RegistrationsManager;
