


"use client";



import React, { useState, useMemo } from 'react';

import { Plus, Search, FileText, FileSpreadsheet, ChevronLeft, ChevronRight } from 'lucide-react';



interface DataTableProps<T> {

  title: string;

  subtitle: string;

  columns: { header: string; accessor: keyof T | ((item: T) => React.ReactNode); }[];

  data: T[];

  onAddNew: () => void;

  renderActions: (item: T) => React.ReactNode;

  searchableKey: keyof T;

}



const DataTable = <T extends { id: any }>({

  title,

  subtitle,

  columns,

  data,

  onAddNew,

  renderActions,

  searchableKey,

}: DataTableProps<T>) => {

  const [searchQuery, setSearchQuery] = useState('');

  const [currentPage, setCurrentPage] = useState(1);

  const [itemsPerPage, setItemsPerPage] = useState(5);



  const filteredData = useMemo(() => {

    return data.filter(item => {

      const value = item[searchableKey];

      if (typeof value === 'string') {

        return value.toLowerCase().includes(searchQuery.toLowerCase());

      }

      return true;

    });

  }, [data, searchQuery, searchableKey]);



  const paginatedData = useMemo(() => {

    const startIndex = (currentPage - 1) * itemsPerPage;

    return filteredData.slice(startIndex, startIndex + itemsPerPage);

  }, [filteredData, currentPage, itemsPerPage]);



  const totalPages = Math.ceil(filteredData.length / itemsPerPage);



  const handleExport = (format: 'pdf' | 'excel') => {

    alert(`Exporting as ${format}... (Functionality to be implemented)`);

  };



  return (

    <div className="animate-fade-in">

      <header className="flex flex-wrap justify-between items-center gap-6 mb-12">

        <div>

          <h2 className="text-5xl font-black tracking-tighter">{title}</h2>

          <p className="text-gray-500 text-xl font-medium mt-2">{subtitle}</p>

        </div>

        <button

          onClick={onAddNew}

          className="bg-brand-primary text-white px-8 py-5 rounded-full font-black text-sm uppercase tracking-widest shadow-xl shadow-brand-primary/20 hover:scale-105 transition-all inline-flex items-center"

        >

          <Plus className="mr-3" /> Ajouter

        </button>

      </header>



      <div className="bg-white dark:bg-gray-900 rounded-[3rem] border border-gray-200 dark:border-white/10 shadow-sm overflow-hidden">

        <div className="p-6 flex flex-wrap justify-between items-center gap-4 border-b border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-white/5">

          <div className="relative">

            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <input

              type="text"

              placeholder="Rechercher..."

              value={searchQuery}

              onChange={e => setSearchQuery(e.target.value)}

              className="pl-12 pr-4 py-3 w-full sm:w-80 border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-2xl font-medium focus:ring-2 focus:ring-brand-primary/30 outline-none"

            />

          </div>

          <div className="flex gap-3">

            <button onClick={() => handleExport('pdf')} className="px-5 py-3 rounded-2xl bg-gray-100 dark:bg-white/5 text-gray-500 font-black text-xs uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all inline-flex items-center">

              <FileText className="mr-2" size={16} /> PDF

            </button>

            <button onClick={() => handleExport('excel')} className="px-5 py-3 rounded-2xl bg-gray-100 dark:bg-white/5 text-gray-500 font-black text-xs uppercase tracking-widest hover:bg-green-600 hover:text-white transition-all inline-flex items-center">

              <FileSpreadsheet className="mr-2" size={16} /> Excel

            </button>

          </div>

        </div>



        <div className="overflow-x-auto">

            <table className="w-full text-left">

            <thead>

                <tr className="border-b border-gray-100 dark:border-white/5">

                {columns.map((col, index) => (

                    <th key={index} className="p-6 text-xs font-black uppercase tracking-[0.2em] text-gray-400">{col.header}</th>

                ))}

                <th className="p-6 text-xs font-black uppercase tracking-[0.2em] text-gray-400 text-right">Actions</th>

                </tr>

            </thead>

            <tbody>

                {paginatedData.map((item) => (

                <tr key={item.id} className="border-b border-gray-50 dark:border-white/5 hover:bg-gray-50/80 dark:hover:bg-white/5 transition-colors">

                    {columns.map((col, index) => (

                    <td key={index} className="p-6 font-medium whitespace-nowrap">

                        {typeof col.accessor === 'function'

                        ? col.accessor(item)

                        : <span className="font-bold">{String(item[col.accessor])}</span>}

                    </td>

                    ))}

                    <td className="p-6 text-right">

                    {renderActions(item)}

                    </td>

                </tr>

                ))}

            </tbody>

            </table>

        </div>



        <div className="p-6 flex flex-wrap justify-between items-center gap-4 border-t border-gray-100 dark:border-white/5">

            <span className="text-sm font-bold text-gray-500">

            Page {currentPage} sur {totalPages}

            </span>

            <div className="flex gap-2">

            <button

                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}

                disabled={currentPage === 1}

                className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-white/5 flex items-center justify-center font-black disabled:opacity-50"

            >

                <ChevronLeft />

            </button>

            <button

                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}

                disabled={currentPage === totalPages}

                className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-white/5 flex items-center justify-center font-black disabled:opacity-50"

            >

                <ChevronRight />

            </button>

            </div>

        </div>

      </div>

    </div>

  );

};



export default DataTable;
