import React, { useState } from 'react';
import { CalendarView } from './components/CalendarView';
import { AppointmentForm } from './components/AppointmentForm';
import { SidebarStats } from './components/SidebarStats';
import { Plus, Calendar as CalendarIcon } from 'lucide-react';

const AgendaPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [eventToEdit, setEventToEdit] = useState(null);

  const handleOpenForm = (event = null) => {
    setEventToEdit(event);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setEventToEdit(null);
    setIsFormOpen(false);
  };

  return (
    <div className="bg-slate-100 min-h-screen py-8">
      <div className="container mx-auto px-4 h-[calc(100vh-100px)] flex flex-col">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-primary-900 p-3 rounded-xl shadow-lg">
              <CalendarIcon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-black text-slate-800 tracking-tight">Agenda Inteligente</h1>
              <p className="text-slate-500 font-medium">Gestión de Juicios Orales - Tercera Circunscripción</p>
            </div>
          </div>
          <button 
            onClick={() => handleOpenForm()}
            className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
          >
            <Plus size={20} /> Agendar Juicio
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-grow flex flex-col lg:flex-row gap-6 overflow-hidden">
          <div className="flex-grow flex overflow-hidden">
            <CalendarView onEditEvent={handleOpenForm} />
          </div>
          <div className="w-full lg:w-80 flex-shrink-0 bg-white rounded-xl shadow-sm overflow-hidden border border-slate-200">
            <SidebarStats />
          </div>
        </div>

        {/* Modal */}
        <AppointmentForm 
          isOpen={isFormOpen} 
          onClose={handleCloseForm} 
          defaultValues={eventToEdit}
        />
      </div>
    </div>
  );
};

export default AgendaPage;
