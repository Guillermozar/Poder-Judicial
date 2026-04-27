import React from 'react';
import { useAgendaStore } from '../store';
import { GARANTIAS, getEventStatus } from '../utils';
import { differenceInMinutes, parseISO } from 'date-fns';
import { Edit2, Trash2 } from 'lucide-react';

export const CalendarView = ({ onEditEvent }) => {
  const { events, deleteEvent } = useAgendaStore();

  const HOURS = Array.from({ length: 7 }, (_, i) => i + 7); // 7:00 to 13:00

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pendiente': return 'bg-amber-100 border-amber-300 text-amber-900';
      case 'En Curso': return 'bg-emerald-100 border-emerald-300 text-emerald-900';
      case 'Finalizado': return 'bg-slate-200 border-slate-300 text-slate-600';
      default: return 'bg-primary-100 border-primary-300 text-primary-900';
    }
  };

  const calculateEventStyles = (inicio, fin) => {
    const startDate = new Date(inicio);
    const endDate = new Date(fin);
    
    const startHour = startDate.getHours() + startDate.getMinutes() / 60;
    const durationMins = differenceInMinutes(endDate, startDate);
    
    // Grid starts at 7:00, 1 hour = 80px
    const top = (startHour - 7) * 80;
    const height = (durationMins / 60) * 80;

    return { top: `${top}px`, height: `${height}px` };
  };

  return (
    <div className="flex-grow flex flex-col bg-white overflow-hidden rounded-xl border border-slate-200 shadow-sm relative">
      <div className="grid grid-cols-[80px_1fr_1fr_1fr_1fr_1fr] bg-slate-50 border-b border-slate-200 sticky top-0 z-10">
        <div className="p-4 text-center font-bold text-slate-500 border-r border-slate-200">Hora</div>
        {GARANTIAS.map(g => (
          <div key={g.id} className="p-4 text-center font-bold text-slate-800 border-r border-slate-200 last:border-0 truncate">
            {g.name}
          </div>
        ))}
      </div>

      <div className="flex-grow overflow-y-auto relative">
        {/* Grid Background */}
        <div className="absolute inset-0 grid grid-cols-[80px_1fr_1fr_1fr_1fr_1fr] pointer-events-none">
          <div className="border-r border-slate-200">
            {HOURS.map(hour => (
              <div key={hour} className="h-[80px] border-b border-slate-100 flex items-start justify-center pt-2">
                <span className="text-xs font-bold text-slate-400">{hour}:00</span>
              </div>
            ))}
          </div>
          {GARANTIAS.map(g => (
            <div key={g.id} className="border-r border-slate-200 last:border-0 relative">
              {HOURS.map(hour => (
                <div key={hour} className="h-[80px] border-b border-slate-100"></div>
              ))}
              
              {/* Events for this Garantia */}
              {events.filter(e => e.garantiaId === g.id).map(event => {
                const styles = calculateEventStyles(event.inicio, event.fin);
                const status = getEventStatus(event.inicio, event.fin);
                
                return (
                  <div 
                    key={event.id}
                    className={`absolute left-1 right-1 rounded-lg border-l-4 p-2 overflow-hidden group shadow-sm transition-all hover:shadow-md hover:z-20 ${getStatusColor(status)} pointer-events-auto`}
                    style={{ ...styles, top: `calc(${styles.top} + 1px)`, height: `calc(${styles.height} - 2px)` }}
                  >
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-xs truncate" title={event.titulo}>{event.titulo}</h4>
                      <div className="hidden group-hover:flex items-center gap-1 bg-white/80 rounded p-0.5">
                        <button onClick={() => onEditEvent(event)} className="text-primary-600 hover:text-primary-800"><Edit2 size={12} /></button>
                        <button onClick={() => deleteEvent(event.id)} className="text-red-500 hover:text-red-700"><Trash2 size={12} /></button>
                      </div>
                    </div>
                    <p className="text-[10px] opacity-80 truncate">{event.expediente} • {event.sala}</p>
                    <p className="text-[10px] font-bold mt-1 opacity-90">{new Date(event.inicio).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} - {new Date(event.fin).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        
        {/* Placeholder to make scrollable area large enough */}
        <div style={{ height: `${HOURS.length * 80}px` }} className="w-full"></div>
      </div>
    </div>
  );
};
