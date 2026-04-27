import React from 'react';
import { useAgendaStore } from '../store';
import { getEventStatus } from '../utils';
import { Clock, PlayCircle, CheckCircle, Bell } from 'lucide-react';
import { useJudicialNotifications } from '../hooks/useJudicialNotifications';

export const SidebarStats = () => {
  const events = useAgendaStore((state) => state.events);
  const alerts = useJudicialNotifications(events);

  const stats = events.reduce((acc, event) => {
    const status = getEventStatus(event.inicio, event.fin);
    acc[status] = (acc[status] || 0) + 1;
    return acc;
  }, { 'Pendiente': 0, 'En Curso': 0, 'Finalizado': 0 });

  return (
    <div className="bg-slate-50 border-l border-slate-200 p-6 flex flex-col h-full gap-8">
      <div>
        <h3 className="text-lg font-bold text-slate-800 mb-4">Resumen Diario</h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-3 text-slate-600">
              <Clock className="w-5 h-5 text-amber-500" />
              <span className="font-semibold">Pendientes</span>
            </div>
            <span className="text-xl font-black text-slate-800">{stats['Pendiente']}</span>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-3 text-slate-600">
              <PlayCircle className="w-5 h-5 text-emerald-500" />
              <span className="font-semibold">En Curso</span>
            </div>
            <span className="text-xl font-black text-slate-800">{stats['En Curso']}</span>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-3 text-slate-600">
              <CheckCircle className="w-5 h-5 text-primary-500" />
              <span className="font-semibold">Finalizados</span>
            </div>
            <span className="text-xl font-black text-slate-800">{stats['Finalizado']}</span>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-4 text-slate-800">
          <Bell className="w-5 h-5" />
          <h3 className="text-lg font-bold">Alertas Próximas</h3>
        </div>
        
        {alerts.length === 0 ? (
          <p className="text-sm text-slate-500 text-center py-8 bg-white rounded-xl border border-dashed border-slate-200">
            No hay alertas pendientes
          </p>
        ) : (
          <div className="space-y-3">
            {alerts.map((alert, idx) => (
              <div 
                key={`${alert.id}-${idx}`}
                className={`p-3 rounded-xl border-l-4 text-sm font-medium ${
                  alert.type === 'urgent' 
                    ? 'bg-red-50 border-red-500 text-red-800' 
                    : 'bg-amber-50 border-amber-500 text-amber-800'
                }`}
              >
                {alert.message}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
