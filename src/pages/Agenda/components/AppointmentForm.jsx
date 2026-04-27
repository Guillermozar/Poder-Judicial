import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { X, Save } from 'lucide-react';
import { checkCollision, GARANTIAS } from '../utils';
import { useAgendaStore } from '../store';

const schema = z.object({
  titulo: z.string().min(3, { message: "El título debe tener al menos 3 caracteres" }),
  expediente: z.string().min(3, { message: "El expediente es requerido" }),
  garantiaId: z.string().min(1, { message: "Debe seleccionar una garantía" }),
  sala: z.string().min(1, { message: "La sala es requerida" }),
  inicio: z.string().min(1, { message: "Fecha y hora de inicio requerida" }),
  fin: z.string().min(1, { message: "Fecha y hora de fin requerida" })
}).refine(data => new Date(data.inicio) < new Date(data.fin), {
  message: "La fecha de finalización debe ser posterior a la de inicio",
  path: ["fin"],
});

export const AppointmentForm = ({ isOpen, onClose, defaultValues }) => {
  const { events, addEvent, updateEvent } = useAgendaStore();

  const { register, handleSubmit, formState: { errors }, reset, setError } = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues || {
      titulo: '',
      expediente: '',
      garantiaId: '',
      sala: '',
      inicio: '',
      fin: ''
    }
  });

  useEffect(() => {
    if (isOpen) {
      reset(defaultValues || { titulo: '', expediente: '', garantiaId: '', sala: '', inicio: '', fin: '' });
    }
  }, [isOpen, defaultValues, reset]);

  if (!isOpen) return null;

  const onSubmit = (data) => {
    const isEditing = !!defaultValues?.id;
    const eventPayload = { ...data, id: defaultValues?.id };
    
    // Anti-Solapamiento (Collision Detection)
    if (checkCollision(eventPayload, events)) {
      setError('root', { message: 'Existe un solapamiento de horarios en esta Garantía.' });
      return;
    }

    if (isEditing) {
      updateEvent(eventPayload);
    } else {
      addEvent(eventPayload);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="flex justify-between items-center p-6 border-b border-slate-100">
          <h2 className="text-xl font-bold text-slate-800">
            {defaultValues?.id ? 'Editar Juicio Oral' : 'Agendar Nuevo Juicio'}
          </h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-700 transition">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
          {errors.root && (
            <div className="bg-red-50 text-red-600 p-3 rounded-xl text-sm font-semibold border border-red-100">
              {errors.root.message}
            </div>
          )}

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">Título del Juicio</label>
            <input 
              {...register('titulo')} 
              className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:outline-none"
              placeholder="Ej. Juicio Oral Público s/ Robo Agravado"
            />
            {errors.titulo && <span className="text-red-500 text-xs mt-1 block">{errors.titulo.message}</span>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Expediente N°</label>
              <input 
                {...register('expediente')} 
                className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:outline-none"
                placeholder="Ej. 123/2026"
              />
              {errors.expediente && <span className="text-red-500 text-xs mt-1 block">{errors.expediente.message}</span>}
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Sala</label>
              <input 
                {...register('sala')} 
                className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:outline-none"
                placeholder="Ej. Sala 3"
              />
              {errors.sala && <span className="text-red-500 text-xs mt-1 block">{errors.sala.message}</span>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">Juzgado de Garantía</label>
            <select 
              {...register('garantiaId')} 
              className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:outline-none"
            >
              <option value="">Seleccione una garantía...</option>
              {GARANTIAS.map(g => (
                <option key={g.id} value={g.id}>{g.name}</option>
              ))}
            </select>
            {errors.garantiaId && <span className="text-red-500 text-xs mt-1 block">{errors.garantiaId.message}</span>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Inicio</label>
              <input 
                type="datetime-local" 
                {...register('inicio')} 
                className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:outline-none"
              />
              {errors.inicio && <span className="text-red-500 text-xs mt-1 block">{errors.inicio.message}</span>}
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Fin</label>
              <input 
                type="datetime-local" 
                {...register('fin')} 
                className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:outline-none"
              />
              {errors.fin && <span className="text-red-500 text-xs mt-1 block">{errors.fin.message}</span>}
            </div>
          </div>

          <div className="pt-4 flex justify-end gap-3">
            <button 
              type="button" 
              onClick={onClose}
              className="px-6 py-2 rounded-xl font-bold text-slate-600 hover:bg-slate-100 transition"
            >
              Cancelar
            </button>
            <button 
              type="submit" 
              className="px-6 py-2 rounded-xl font-bold text-white bg-primary-600 hover:bg-primary-700 transition flex items-center gap-2"
            >
              <Save size={18} /> {defaultValues?.id ? 'Guardar Cambios' : 'Agendar Juicio'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
